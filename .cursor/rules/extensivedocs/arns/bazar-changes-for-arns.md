  1 change: 1 addition & 0 deletions1  
package.json
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -19,6 +19,7 @@
		"prepare": "husky install"			"prepare": "husky install"
	},		},
	"dependencies": {		"dependencies": {
		"@ar.io/sdk": "^3.12.2",
		"@othent/kms": "^1.0.7",			"@othent/kms": "^1.0.7",
		"@permaweb/aoconnect": "^0.0.85",			"@permaweb/aoconnect": "^0.0.85",
		"@permaweb/aoprofile": "^0.0.11",			"@permaweb/aoprofile": "^0.0.11",
  4 changes: 2 additions & 2 deletions4  
src/app/App.tsx
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -25,13 +25,13 @@ export default function App() {
	React.useEffect(() => {		React.useEffect(() => {
		(async function () {			(async function () {
			if (hasCheckedProfileRef.current) return;				if (hasCheckedProfileRef.current) return;
			if (permawebProvider.profile) {				if (permawebProvider.profile?.id) {
				const userVersion = permawebProvider.profile.version;					const userVersion = permawebProvider.profile.version;
				if (!userVersion || userVersion !== CurrentZoneVersion) {					if (!userVersion || userVersion !== CurrentZoneVersion) {
					console.log('User profile version does match current version, updating...');						console.log('User profile version does match current version, updating...');


					await permawebProvider.libs.updateProfileVersion({						await permawebProvider.libs.updateProfileVersion({
						profileId: permawebProvider.profile.id,							processId: permawebProvider.profile.id,
					});						});


					console.log('Updated profile version.');						console.log('Updated profile version.');
  39 changes: 35 additions & 4 deletions39  
src/components/atoms/Avatar/Avatar.tsx
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -4,20 +4,51 @@ import { ReactSVG } from 'react-svg';
import { ASSETS } from 'helpers/config';	import { ASSETS } from 'helpers/config';
import { getTxEndpoint } from 'helpers/endpoints';	import { getTxEndpoint } from 'helpers/endpoints';
import { checkValidAddress } from 'helpers/utils';	import { checkValidAddress } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';	import * as S from './styles';
import { IProps } from './types';	import { IProps } from './types';


export default function Avatar(props: IProps) {	export default function Avatar(props: IProps) {
	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();
	const [hasError, setHasError] = React.useState(false);		const [hasError, setHasError] = React.useState(false);


	const hasImage = props.owner && props.owner.thumbnail && checkValidAddress(props.owner.thumbnail);		// Check if this is the current user's avatar and if we have an ArNS avatar URL
	// We only use ArNS logos for the current user to avoid fetching ArNS data for every user
	const isCurrentUser =
		props.owner &&
		permawebProvider.profile &&
		(props.owner.id === permawebProvider.profile.id ||
			('walletAddress' in props.owner && props.owner.walletAddress === arProvider.walletAddress));

	// Determine image source: ArNS logo (for current user) > profile thumbnail > default
	const imageUrl = React.useMemo(() => {
		console.log('Avatar Debug - isCurrentUser:', isCurrentUser);
		console.log('Avatar Debug - arnsAvatarUrl:', permawebProvider.arnsAvatarUrl);
		console.log('Avatar Debug - hasError:', hasError);
		console.log('Avatar Debug - owner:', props.owner);

		if (isCurrentUser && permawebProvider.arnsAvatarUrl && !hasError) {
			console.log('Avatar Debug - Using ArNS avatar:', permawebProvider.arnsAvatarUrl);
			return permawebProvider.arnsAvatarUrl;
		} else if (props.owner && props.owner.thumbnail && checkValidAddress(props.owner.thumbnail)) {
			const thumbnailUrl = getTxEndpoint(props.owner.thumbnail);
			console.log('Avatar Debug - Using profile thumbnail:', thumbnailUrl);
			return thumbnailUrl;
		}
		console.log('Avatar Debug - Using default avatar');
		return null;
	}, [isCurrentUser, permawebProvider.arnsAvatarUrl, props.owner, hasError]);

	const hasImage = imageUrl !== null;


	const avatar = React.useMemo(() => {		const avatar = React.useMemo(() => {
		if (!hasError && props.owner && props.owner.thumbnail && checkValidAddress(props.owner.thumbnail)) {			if (!hasError && imageUrl) {
			return <img src={getTxEndpoint(props.owner.thumbnail)} onError={() => setHasError(true)} />;				return <img src={imageUrl} onError={() => setHasError(true)} />;
		} else return <ReactSVG src={ASSETS.user} />;			} else return <ReactSVG src={ASSETS.user} />;
	}, [props.owner, hasError]);		}, [imageUrl, hasError]);


	return (		return (
		<S.Wrapper			<S.Wrapper
 169 changes: 169 additions & 0 deletions169  
src/helpers/arns.ts
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,169 @@
import { ANT, ARIO } from '@ar.io/sdk'; // The SDK should auto-detect web environment

import { ARNS } from 'helpers/config';
import { checkValidAddress } from 'helpers/utils';

// Initialize ARIO client for mainnet
const ario = ARIO.mainnet();

// Cache for ArNS data to minimize API calls
const arnsCache = new Map<
	string,
	{
		primaryName?: string;
		logo?: string;
		timestamp: number;
	}
>();

export interface ArNSData {
	primaryName: string | null;
	logo: string | null;
}

/**
 * Get primary ArNS name for a wallet address
 */
export async function getPrimaryNameForAddress(address: string): Promise<string | null> {
	try {
		// Check cache first
		const cached = arnsCache.get(address);
		if (cached && Date.now() - cached.timestamp < ARNS.CACHE_DURATION && cached.primaryName !== undefined) {
			return cached.primaryName || null;
		}

		// Fetch primary name from ARIO
		const primaryName = await ario.getPrimaryName({ address });

		if (primaryName && primaryName.name) {
			// Update cache
			arnsCache.set(address, {
				...cached,
				primaryName: primaryName.name,
				timestamp: Date.now(),
			});
			return primaryName.name;
		}

		// Cache negative result
		arnsCache.set(address, {
			...cached,
			primaryName: '',
			timestamp: Date.now(),
		});
		return null;
	} catch (error) {
		// Log error only in development
		if (process.env.NODE_ENV === 'development') {
			console.error('Error fetching primary ArNS name:', error);
		}
		return null;
	}
}

/**
 * Get ArNS record details including logo
 */
export async function getArNSRecord(name: string): Promise<{ processId: string | null; logo: string | null }> {
	try {
		// Get the ArNS record
		const record = await ario.getArNSRecord({ name });

		console.log('ArNS Debug - Record for', name, ':', record);

		if (record && record.processId) {
			// Initialize ANT client for this record
			const ant = ANT.init({ processId: record.processId });

			console.log('ArNS Debug - ANT initialized for processId:', record.processId);

			// Get the logo transaction ID
			const logoTxId = await ant.getLogo();

			console.log('ArNS Debug - Logo TxId for', name, ':', logoTxId);

			if (logoTxId && checkValidAddress(logoTxId)) {
				console.log('ArNS Debug - Valid logo found:', logoTxId);
				return {
					processId: record.processId,
					logo: logoTxId,
				};
			}

			console.log('ArNS Debug - No valid logo found for', name);
			return {
				processId: record.processId,
				logo: null,
			};
		}

		console.log('ArNS Debug - No record or processId found for', name);
		return { processId: null, logo: null };
	} catch (error) {
		console.error('Error fetching ArNS record for', name, ':', error);
		return { processId: null, logo: null };
	}
}

/**
 * Get complete ArNS data for a wallet address
 */
export async function getArNSDataForAddress(address: string): Promise<ArNSData> {
	try {
		// First get the primary name
		const primaryName = await getPrimaryNameForAddress(address);

		console.log('ArNS Debug - Primary name for', address, ':', primaryName);

		if (!primaryName) {
			return { primaryName: null, logo: null };
		}

		// Check cache for logo
		const cached = arnsCache.get(address);
		if (cached && cached.logo !== undefined && Date.now() - cached.timestamp < ARNS.CACHE_DURATION) {
			console.log('ArNS Debug - Using cached logo for', primaryName, ':', cached.logo);
			return { primaryName, logo: cached.logo };
		}

		// Get the ArNS record details including logo
		const { logo } = await getArNSRecord(primaryName);

		console.log('ArNS Debug - Fetched logo for', primaryName, ':', logo);

		// Update cache with logo
		arnsCache.set(address, {
			primaryName,
			logo: logo || '',
			timestamp: Date.now(),
		});

		return { primaryName, logo };
	} catch (error) {
		console.error('Error fetching ArNS data:', error);
		return { primaryName: null, logo: null };
	}
}

/**
 * Clear ArNS cache for a specific address
 */
export function clearArNSCache(address?: string): void {
	if (address) {
		arnsCache.delete(address);
	} else {
		arnsCache.clear();
	}
}

/**
 * Format ArNS name for display (with truncation if needed)
 */
export function formatArNSName(name: string, maxLength: number = ARNS.DEFAULT_DISPLAY_LENGTH): string {
	if (name.length <= maxLength) {
		return name;
	}

	// Truncate the name with ellipsis
	return name.substring(0, maxLength - 3) + '...';
}
  6 changes: 6 additions & 0 deletions6  
src/helpers/config.ts
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -365,7 +365,13 @@ export const FLAGS = {
	MAINTENANCE: false,		MAINTENANCE: false,
};	};


export const ARNS = {
	CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
	DEFAULT_DISPLAY_LENGTH: 20,
};

export const STORAGE = {	export const STORAGE = {
	walletType: `wallet-type`,		walletType: `wallet-type`,
	profile: (id: string) => `profile-${id}`,		profile: (id: string) => `profile-${id}`,
	arns: (address: string) => `arns::${address}`,
};	};
  59 changes: 53 additions & 6 deletions59  
src/providers/PermawebProvider.tsx
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -8,7 +8,9 @@ import AOProfile from '@permaweb/aoprofile';
import { Loader } from 'components/atoms/Loader';	import { Loader } from 'components/atoms/Loader';
import { Panel } from 'components/molecules/Panel';	import { Panel } from 'components/molecules/Panel';
import { ProfileManage } from 'components/organisms/ProfileManage';	import { ProfileManage } from 'components/organisms/ProfileManage';
import { getArNSDataForAddress } from 'helpers/arns';
import { AO, STORAGE } from 'helpers/config';	import { AO, STORAGE } from 'helpers/config';
import { getTxEndpoint } from 'helpers/endpoints';


import { useArweaveProvider } from './ArweaveProvider';	import { useArweaveProvider } from './ArweaveProvider';
import { useLanguageProvider } from './LanguageProvider';	import { useLanguageProvider } from './LanguageProvider';
@@ -24,6 +26,8 @@ interface PermawebContextState {
	setToggleTokenBalanceUpdate: (toggleUpdate: boolean) => void;		setToggleTokenBalanceUpdate: (toggleUpdate: boolean) => void;
	handleInitialProfileCache: (address: string, profileId: string) => void;		handleInitialProfileCache: (address: string, profileId: string) => void;
	refreshProfile: () => void;		refreshProfile: () => void;
	arnsPrimaryName?: string | null;
	arnsAvatarUrl?: string | null;
}	}


const DEFAULT_CONTEXT = {	const DEFAULT_CONTEXT = {
@@ -37,6 +41,8 @@ const DEFAULT_CONTEXT = {
	setToggleTokenBalanceUpdate(_toggleUpdate: boolean) {},		setToggleTokenBalanceUpdate(_toggleUpdate: boolean) {},
	handleInitialProfileCache(_address: string, _profileId: string) {},		handleInitialProfileCache(_address: string, _profileId: string) {},
	refreshProfile() {},		refreshProfile() {},
	arnsPrimaryName: null,
	arnsAvatarUrl: null,
};	};


const PermawebContext = React.createContext<PermawebContextState>(DEFAULT_CONTEXT);	const PermawebContext = React.createContext<PermawebContextState>(DEFAULT_CONTEXT);
@@ -56,6 +62,8 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
	const [showProfileManager, setShowProfileManager] = React.useState<boolean>(false);		const [showProfileManager, setShowProfileManager] = React.useState<boolean>(false);
	const [refreshProfileTrigger, setRefreshProfileTrigger] = React.useState<boolean>(false);		const [refreshProfileTrigger, setRefreshProfileTrigger] = React.useState<boolean>(false);
	const [profilePending, setProfilePending] = React.useState<boolean>(false);		const [profilePending, setProfilePending] = React.useState<boolean>(false);
	const [arnsPrimaryName, setArnsPrimaryName] = React.useState<string | null>(null);
	const [arnsAvatarUrl, setArnsAvatarUrl] = React.useState<string | null>(null);


	const [tokenBalances, setTokenBalances] = React.useState<{		const [tokenBalances, setTokenBalances] = React.useState<{
		[address: string]: { profileBalance: number; walletBalance: number };			[address: string]: { profileBalance: number; walletBalance: number };
@@ -108,7 +116,9 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
						setProfile(fetchedProfile);							setProfile(fetchedProfile);
						cacheProfile(arProvider.walletAddress, fetchedProfile);							cacheProfile(arProvider.walletAddress, fetchedProfile);
					} catch (e: any) {						} catch (e: any) {
						console.error(e);							if (process.env.NODE_ENV === 'development') {
							console.error('Error fetching profile:', e);
						}
					}						}


					setProfilePending(false);						setProfilePending(false);
@@ -138,13 +148,17 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
								tries++;									tries++;
							}								}
						} catch (error) {							} catch (error) {
							console.error(error);								if (process.env.NODE_ENV === 'development') {
								console.error('Error during profile update:', error);
							}
							break;								break;
						}							}
					}						}


					if (!changeDetected) {						if (!changeDetected) {
						console.warn(`No changes detected after ${maxTries} attempts`);							if (process.env.NODE_ENV === 'development') {
							console.warn(`No changes detected after ${maxTries} attempts`);
						}
					}						}
				};					};


@@ -201,13 +215,40 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
					},						},
				}));					}));
			} catch (e) {				} catch (e) {
				console.error(e);					if (process.env.NODE_ENV === 'development') {
					console.error('Error fetching ArNS data:', e);
				}
			}				}
		};			};


		fetchBalances();			fetchBalances();
	}, [arProvider.walletAddress, profile, toggleTokenBalanceUpdate]);		}, [arProvider.walletAddress, profile, toggleTokenBalanceUpdate]);


	React.useEffect(() => {
		if (!arProvider.walletAddress) {
			setArnsPrimaryName(null);
			setArnsAvatarUrl(null);
			return;
		}

		(async function () {
			try {
				const arnsData = await getArNSDataForAddress(arProvider.walletAddress);

				console.log('PermawebProvider - ArNS data:', arnsData);

				setArnsPrimaryName(arnsData.primaryName);
				const avatarUrl = arnsData.logo ? getTxEndpoint(arnsData.logo) : null;
				console.log('PermawebProvider - Setting avatar URL:', avatarUrl);
				setArnsAvatarUrl(avatarUrl);
			} catch (err) {
				console.error('PermawebProvider - ArNS error:', err);
				setArnsPrimaryName(null);
				setArnsAvatarUrl(null);
			}
		})();
	}, [arProvider.walletAddress]);

	async function resolveProfile() {		async function resolveProfile() {
		try {			try {
			let fetchedProfile: any;				let fetchedProfile: any;
@@ -222,7 +263,9 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
				fetchedProfile = await libs.getProfileByWalletAddress(arProvider.walletAddress);					fetchedProfile = await libs.getProfileByWalletAddress(arProvider.walletAddress);


				if (!fetchedProfile?.id) {					if (!fetchedProfile?.id) {
					console.log('Fetching legacy profile...');						if (process.env.NODE_ENV === 'development') {
						console.log('Fetching legacy profile...');
					}
					isLegacyProfile = true;						isLegacyProfile = true;
					const aoProfile = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });						const aoProfile = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });
					fetchedProfile = await aoProfile.getProfileByWalletAddress({ address: arProvider.walletAddress });						fetchedProfile = await aoProfile.getProfileByWalletAddress({ address: arProvider.walletAddress });
@@ -237,7 +280,9 @@ export function PermawebProvider(props: { children: React.ReactNode }) {


			return profileToUse;				return profileToUse;
		} catch (e: any) {			} catch (e: any) {
			console.error(e);				if (process.env.NODE_ENV === 'development') {
				console.error('Error in getProfile:', e);
			}
		}			}
	}		}


@@ -269,6 +314,8 @@ export function PermawebProvider(props: { children: React.ReactNode }) {
				handleInitialProfileCache: (address: string, profileId: string) =>					handleInitialProfileCache: (address: string, profileId: string) =>
					handleInitialProfileCache(address, profileId),						handleInitialProfileCache(address, profileId),
				refreshProfile: () => setRefreshProfileTrigger((prev) => !prev),					refreshProfile: () => setRefreshProfileTrigger((prev) => !prev),
				arnsPrimaryName,
				arnsAvatarUrl,
			}}				}}
		>			>
			{props.children}				{props.children}
  21 changes: 13 additions & 8 deletions21  
src/wallet/WalletConnect/WalletConnect.tsx
Viewed
Original file line number	Original file line	Diff line number	Diff line change
@@ -45,7 +45,10 @@ export default function WalletConnect(_props: { callback?: () => void }) {
			setLabel(`${language.fetching}...`);				setLabel(`${language.fetching}...`);
		} else {			} else {
			if (arProvider.walletAddress) {				if (arProvider.walletAddress) {
				if (permawebProvider.profile && permawebProvider.profile.username) {					// Priority: ArNS name > Profile username > Address
				if (permawebProvider.arnsPrimaryName) {
					setLabel(permawebProvider.arnsPrimaryName);
				} else if (permawebProvider.profile && permawebProvider.profile.username) {
					setLabel(permawebProvider.profile.username);						setLabel(permawebProvider.profile.username);
				} else {					} else {
					setLabel(formatAddress(arProvider.walletAddress, false));						setLabel(formatAddress(arProvider.walletAddress, false));
@@ -54,7 +57,7 @@ export default function WalletConnect(_props: { callback?: () => void }) {
				setLabel(language.connect);					setLabel(language.connect);
			}				}
		}			}
	}, [showWallet, arProvider.walletAddress, permawebProvider.profile]);		}, [showWallet, arProvider.walletAddress, permawebProvider.profile, permawebProvider.arnsPrimaryName]);


	function handlePress() {		function handlePress() {
		if (arProvider.walletAddress) {			if (arProvider.walletAddress) {
@@ -142,12 +145,14 @@ export default function WalletConnect(_props: { callback?: () => void }) {
								)} */}									)} */}
							</S.DNameWrapper>								</S.DNameWrapper>
							<span onClick={() => handleDropdownAction(handleProfileAction)}>								<span onClick={() => handleDropdownAction(handleProfileAction)}>
								{formatAddress(									{permawebProvider.arnsPrimaryName
									permawebProvider.profile && permawebProvider.profile.id										? formatAddress(arProvider.walletAddress, false)
										? permawebProvider.profile.id										: formatAddress(
										: arProvider.walletAddress,												permawebProvider.profile && permawebProvider.profile.id
									false													? permawebProvider.profile.id
								)}													: arProvider.walletAddress,
											false
									  )}
							</span>								</span>
						</S.DHeader>							</S.DHeader>
					</S.DHeaderFlex>						</S.DHeaderFlex>