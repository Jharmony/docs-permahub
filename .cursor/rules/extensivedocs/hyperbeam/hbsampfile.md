Give feedback on dependency review
Original file line number	Original file line	Diff line number	Diff line change
@@ -25,9 +25,9 @@
		"@othent/kms": "^1.0.7",
		"@othent/kms": "^1.0.7",
		"@permaweb/aoconnect": "^0.0.79",
		"@permaweb/aoconnect": "^0.0.79",
		"@permaweb/aoprofile": "^0.0.11",
		"@permaweb/aoprofile": "^0.0.11",
		"@permaweb/libs": "^0.0.25",
		"@permaweb/libs": "0.0.34",
		"@permaweb/stampjs": "^1.0.4",
		"@permaweb/stampjs": "^1.0.4",
		"@permaweb/ucm": "0.0.5",
		"@permaweb/ucm": "0.0.7",
		"async-lock": "^1.4.1",
		"async-lock": "^1.4.1",
		"jwt-decode": "^4.0.0",
		"jwt-decode": "^4.0.0",
		"localforage": "^1.10.0",
		"localforage": "^1.10.0",
Diff for:‎src/api/assets.ts
-1
Original file line number	Original file line	Diff line number	Diff line change
@@ -122,7 +122,6 @@ export async function getAssetById(args: { id: string }): Promise<AssetDetailTyp
						Object.entries(processState.Balances).filter(([_, value]) => Number(value) !== 0)
						Object.entries(processState.Balances).filter(([_, value]) => Number(value) !== 0)
					) as any;
					) as any;
				}
				}
				console.log(processState);
				if (processState.Transferable !== undefined) {
				if (processState.Transferable !== undefined) {
					assetState.transferable = processState.Transferable.toString() === 'true';
					assetState.transferable = processState.Transferable.toString() === 'true';
				} else {
				} else {
Diff for:‎src/api/collections.ts
+2
-2
Original file line number	Original file line	Diff line number	Diff line change
@@ -52,8 +52,8 @@ export async function getCollections(creator?: string, filterUnstamped?: boolean


		if (response?.Collections?.length) {
		if (response?.Collections?.length) {
			let filteredCollections = [...response.Collections];
			let filteredCollections = [...response.Collections];
			if (!dryrun && creator && response.CollectionsByUser?.[creator]) {
			if (!dryrun && creator) {
				const creatorCollectionIds = [...response.CollectionsByUser[creator]];
				const creatorCollectionIds = [...(response.CollectionsByUser?.[creator] ?? [])];
				filteredCollections = filteredCollections.filter((collection) => creatorCollectionIds.includes(collection.Id));
				filteredCollections = filteredCollections.filter((collection) => creatorCollectionIds.includes(collection.Id));
			}
			}


Diff for:‎src/api/profiles.ts
+83
-72
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,8 +1,9 @@
import PermawebLibs from '@permaweb/libs';
import AsyncLock from 'async-lock';
import AsyncLock from 'async-lock';


import { connect } from '@permaweb/aoconnect';
import { connect } from '@permaweb/aoconnect';
import AOProfile, { RegistryProfileType } from '@permaweb/aoprofile';


// import AOProfile, { any } from '@permaweb/aoprofile';
import { readHandler } from 'api';
import { readHandler } from 'api';


import { AO } from 'helpers/config';
import { AO } from 'helpers/config';
@@ -15,88 +16,98 @@ const lock = new AsyncLock();


let registryFetchQueue: Set<string> = new Set();
let registryFetchQueue: Set<string> = new Set();


const { getRegistryProfiles } = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });
// const { getRegistryProfiles } = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });


export function getExistingRegistryProfiles(ids: string[]): RegistryProfileType[] {
export function getExistingProfiles(ids: string[]): any[] {
	const profilesReducer = store.getState().profilesReducer;
	const profilesReducer = store.getState().profilesReducer;
	if (!profilesReducer?.registryProfiles || !profilesReducer?.registryProfiles.length) return [];
	if (!profilesReducer?.registryProfiles || !profilesReducer?.registryProfiles.length) return [];


	const profiles: RegistryProfileType[] = [];
	const profiles: any[] = [];
	for (const id of ids) {
	for (const id of ids) {
		const existingProfile = profilesReducer?.registryProfiles?.find(
		const existingProfile = profilesReducer?.registryProfiles?.find((profile: any) => profile.id === id);
			(profile: RegistryProfileType) => profile.id === id
		);
		if (existingProfile) profiles.push(existingProfile);
		if (existingProfile) profiles.push(existingProfile);
	}
	}


	return profiles;
	return profiles;
}
}


export async function getAndUpdateRegistryProfiles(ids: string[]): Promise<RegistryProfileType[]> {
export async function getProfiles(_ids: string[]): Promise<any[]> {
	const existingProfiles = getExistingRegistryProfiles(ids);
	return [];
	let profiles = [...existingProfiles];
	// const existingProfiles = getExistingProfiles(ids);
	// let profiles = [...existingProfiles];
	const REGISTRY_TTL = 2 * 24 * 60 * 60 * 1000;
	// // const REGISTRY_TTL = 2 * 24 * 60 * 60 * 1000;
	const outdatedOrMissingProfileIds = ids.filter((id) => {
	// const REGISTRY_TTL = 0;
		const profile = existingProfiles.find((profile) => profile.id === id);
		return !profile || (profile.lastUpdate && Date.now() - Number(profile.lastUpdate) > REGISTRY_TTL);
	// const outdatedOrMissingProfileIds = ids.filter((id) => {
	});
	// 	const profile = existingProfiles.find((profile) => profile.id === id);
	// 	return !profile || (profile.lastUpdate && Date.now() - Number(profile.lastUpdate) > REGISTRY_TTL);
	if (outdatedOrMissingProfileIds.length > 0) {
	// });
		const newProfileIds = outdatedOrMissingProfileIds.filter((id) => !registryFetchQueue.has(id));
		newProfileIds.forEach((id) => registryFetchQueue.add(id));
	// if (outdatedOrMissingProfileIds.length > 0) {
	// 	const newProfileIds = outdatedOrMissingProfileIds.filter((id) => !registryFetchQueue.has(id));
		if (newProfileIds.length > 0) {
			try {
	// 	newProfileIds.forEach((id) => registryFetchQueue.add(id));
				const newProfiles = await getRegistryProfiles({ profileIds: newProfileIds });
				profiles = [...profiles.filter((profile) => !outdatedOrMissingProfileIds.includes(profile.id)), ...newProfiles];
	// 	if (newProfileIds.length > 0) {
	// 		try {
				profiles = profiles.reduce((uniqueProfiles, profile) => {
	// 			// const newProfiles = await getRegistryProfiles({ profileIds: newProfileIds });
					if (!uniqueProfiles.some((p) => p.id === profile.id)) {
						uniqueProfiles.push(profile);
	// 			const newProfiles = [];
					}
	// 			const permaweb = PermawebLibs.init({ ao: connect({ MODE: 'legacy' }) });
					return uniqueProfiles;
				}, [] as RegistryProfileType[]);
	// 			for (const profileId of newProfileIds) {
	// 				const newProfile = await permaweb.getProfileById(profileId);
				// Get current Redux state
	// 				console.log(newProfile);
				const profilesReducer = store.getState().profilesReducer;
	// 			}
				const currentRegistryProfiles = profilesReducer?.registryProfiles || [];
	// 			profiles = [...profiles.filter((profile) => !outdatedOrMissingProfileIds.includes(profile.id)), ...newProfiles];
				// Find profiles that are new or have changed
				const updatedProfiles = newProfiles.filter((newProfile) => {
	// 			profiles = profiles.reduce((uniqueProfiles, profile) => {
					const existingProfile = currentRegistryProfiles.find((p) => p.id === newProfile.id);
	// 				if (!uniqueProfiles.some((p) => p.id === profile.id)) {
					return (
	// 					uniqueProfiles.push(profile);
						!existingProfile || // New profile
	// 				}
						JSON.stringify(existingProfile) !== JSON.stringify(newProfile) // Updated profile
	// 				return uniqueProfiles;
					);
	// 			}, [] as any[]);
				});
	// 			// Get current Redux state
				// Only dispatch if there are updates
	// 			const profilesReducer = store.getState().profilesReducer;
				if (updatedProfiles.length > 0) {
	// 			const currentRegistryProfiles = profilesReducer?.registryProfiles || [];
					store.dispatch(
						profilesActions.setProfiles({
	// 			// Find profiles that are new or have changed
							...(profilesReducer ?? {}),
	// 			const updatedProfiles = newProfiles.filter((newProfile) => {
							registryProfiles: [
	// 				const existingProfile = currentRegistryProfiles.find((p) => p.id === newProfile.id);
								...currentRegistryProfiles.filter(
	// 				return (
									(profile) => !updatedProfiles.some((p: RegistryProfileType) => p.id === profile.id)
	// 					!existingProfile || // New profile
								),
	// 					JSON.stringify(existingProfile) !== JSON.stringify(newProfile) // Updated profile
								...updatedProfiles,
	// 				);
							],
	// 			});
						})
					);
	// 			// Only dispatch if there are updates
				}
	// 			if (updatedProfiles.length > 0) {
			} finally {
	// 				store.dispatch(
				newProfileIds.forEach((id) => registryFetchQueue.delete(id));
	// 					profilesActions.setProfiles({
			}
	// 						...(profilesReducer ?? {}),
		}
	// 						registryProfiles: [
	}
	// 							...currentRegistryProfiles.filter(
	// 								(profile) => !updatedProfiles.some((p: any) => p.id === profile.id)
	return profiles;
	// 							),
	// 							...updatedProfiles,
	// 						],
	// 					})
	// 				);
	// 			}
	// 		} finally {
	// 			newProfileIds.forEach((id) => registryFetchQueue.delete(id));
	// 		}
	// 	}
	// }
	// return profiles;
}
}


export async function handleProfileRegistryCache(args: { profileIds: string[] }): Promise<RegistryProfileType[]> {
export async function handleBatchProfileCache(args: { profileIds: string[] }): Promise<any[]> {
	return lock.acquire('handleProfileRegistryCache', async () => {
	return lock.acquire('handleBatchProfileCache', async () => {
		try {
		try {
			const state = store.getState().profilesReducer;
			const state = store.getState().profilesReducer;
			let { registryProfiles = [], missingProfileIds = [], lastUpdate = 0 } = state;
			let { registryProfiles = [], missingProfileIds = [], lastUpdate = 0 } = state;
@@ -105,7 +116,7 @@ export async function handleProfileRegistryCache(args: { profileIds: string[] })


			/*
			/*
				The cache is too old, update all the profiles again
				The cache is too old, update all the profiles again
		  	*/
				*/
			if (!isCacheValid) {
			if (!isCacheValid) {
				const metadataLookup = await readHandler({
				const metadataLookup = await readHandler({
					processId: AO.profileRegistry,
					processId: AO.profileRegistry,
@@ -203,7 +214,7 @@ export async function handleProfileRegistryCache(args: { profileIds: string[] })
				};
				};
			});
			});
		} catch (e: any) {
		} catch (e: any) {
			console.error('Error in handleProfileRegistryCache:', e);
			console.error('Error in handleBatchProfileCache:', e);
			throw new Error(e.message);
			throw new Error(e.message);
		}
		}
	});
	});
Diff for:‎src/app/styles.ts
+14
-11
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,18 +1,8 @@
import styled, { createGlobalStyle } from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';


import { fadeIn1, open } from 'helpers/animations';
import { fadeIn1, fadeIn2, open } from 'helpers/animations';
import { STYLING } from 'helpers/config';
import { STYLING } from 'helpers/config';


// import '@fontsource/inter';
// import '@fontsource/inter/400.css';
// import '@fontsource/inter/500.css';
// import '@fontsource/inter/600.css';
// import '@fontsource/inter/700.css';
// import '@fontsource/inter/800.css';
// import '@fontsource/quantico';
// import '@fontsource/quantico/400.css';
// import '@fontsource/quantico/700.css';
export const GlobalStyle = createGlobalStyle`
export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
@@ -202,6 +192,19 @@ export const GlobalStyle = createGlobalStyle`
	padding: 0 20px 20px 20px !important;
	padding: 0 20px 20px 20px !important;
  }
  }
	.info {
    padding: 0 5px 0.5px 5px;
    background: ${(props) => props.theme.colors.contrast.background};
    border-radius: ${STYLING.dimensions.radius.alt2};
    animation: ${open} ${fadeIn2};
    span {
      color: ${(props) => props.theme.colors.contrast.color};
      font-size: ${(props) => props.theme.typography.size.xxxSmall};
      font-weight: ${(props) => props.theme.typography.weight.bold};
      white-space: nowrap;
	  }
  }
  .info-text {
  .info-text {
    padding: 0 4.25px;
    padding: 0 4.25px;
    background: ${(props) => props.theme.colors.container.primary.background};
    background: ${(props) => props.theme.colors.container.primary.background};
Diff for:‎src/components/atoms/Loader/Loader.tsx
+34
-15
Original file line number	Original file line	Diff line number	Diff line change
@@ -19,29 +19,48 @@ export default function Loader(props: IProps) {
		}
		}
	}, [props.sm, props.xSm]);
	}, [props.sm, props.xSm]);


	function getLoader(size: number, height: number, width: number) {
	function getLoader(size: number, height: number, width: number, useRelative?: boolean, noPosition?: boolean) {
		return (
		return (
			<S.Container relative={props.relative ? props.relative : false}>
			<S.Container relative={props.relative ? props.relative : useRelative ?? false} noPosition={noPosition}>
				<S.Spinner size={size} height={height} width={width}>
				<S.Spinner size={size} height={height} width={width} noPosition={noPosition}>
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
					<S.Blade />
					<S.Blade noPosition={noPosition} />
				</S.Spinner>
				</S.Spinner>
			</S.Container>
			</S.Container>
		);
		);
	}
	}


	if (props.placeholder) {
	if (props.placeholder) {
		return <S.Placeholder />;
		return <S.Placeholder />;
	} else if (props.message) {
		if (props.noOverlay) {
			return (
				<S.MessageWrapper className={'info'}>
					{getLoader(16.5, 5.5, 1.95, true, true)}
					<span>{props.message}</span>
				</S.MessageWrapper>
			);
		}
		return (
			<Portal node={DOM.overlay}>
				<div className={'overlay'}>
					<S.MessageWrapper className={'info'}>
						{getLoader(16.5, 5.5, 1.95, true, true)}
						<span>{props.message}</span>
					</S.MessageWrapper>
				</div>
			</Portal>
		);
	} else {
	} else {
		if (props.sm) {
		if (props.sm) {
			return <>{getLoader(19.75, 6, 2)}</>;
			return <>{getLoader(19.75, 6, 2)}</>;
Diff for:‎src/components/atoms/Loader/styles.ts
+37
-19
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,6 +1,6 @@
import styled from 'styled-components';
import styled from 'styled-components';


import { fadeIn1, loaderKeyFrame, open } from 'helpers/animations';
import { loaderKeyFrame } from 'helpers/animations';


export const Wrapper = styled.div`
export const Wrapper = styled.div`
	height: 100%;
	height: 100%;
@@ -10,22 +10,22 @@ export const Wrapper = styled.div`
	top: 0;
	top: 0;
	left: 0;
	left: 0;
	background: ${(props) => props.theme.colors.view.background};
	background: ${(props) => props.theme.colors.view.background};
	// animation: ${open} ${fadeIn1};
`;
`;


export const Container = styled.div<{ relative: boolean }>`
export const Container = styled.div<{ relative: boolean; noPosition?: boolean }>`
	height: 50px;
	height: ${(props) => (props.noPosition ? 'auto' : '50px')};
	width: 50px;
	width: ${(props) => (props.noPosition ? 'auto' : '50px')};
	position: ${(props) => (props.relative ? 'relative' : 'fixed')};
	position: ${(props) => (props.noPosition ? 'static' : props.relative ? 'relative' : 'fixed')};
	top: ${(props) => (props.relative ? 'auto' : '50%')};
	top: ${(props) => (props.noPosition ? 'auto' : props.relative ? 'auto' : '50%')};
	left: ${(props) => (props.relative ? 'auto' : '50%')};
	left: ${(props) => (props.noPosition ? 'auto' : props.relative ? 'auto' : '50%')};
	transform: ${(props) => (props.relative ? 'translate(0, 0)' : 'translate(-50%, -50%)')};
	transform: ${(props) => (props.noPosition ? 'none' : props.relative ? 'translate(0, 0)' : 'translate(-50%, -50%)')};
	margin: ${(props) => (props.relative ? 'auto' : '0')};
	margin: ${(props) => (props.noPosition ? '7.5px 0 0 0' : props.relative ? 'auto' : '0')};
	z-index: 3;
	z-index: 3;
`;
`;


export const Blade = styled.div`
export const Blade = styled.div<{ noPosition?: boolean }>`
	background-color: ${(props) => props.theme.colors.loader.primary};
	background-color: ${(props) =>
		props.noPosition ? props.theme.colors.font.light3 : props.theme.colors.loader.primary};
	position: absolute;
	position: absolute;
	left: 0.4629em;
	left: 0.4629em;
	bottom: 0;
	bottom: 0;
@@ -34,23 +34,23 @@ export const Blade = styled.div`
	-webkit-animation: ${loaderKeyFrame} 0.75s linear infinite;
	-webkit-animation: ${loaderKeyFrame} 0.75s linear infinite;
	animation: ${loaderKeyFrame} 0.75s linear infinite;
	animation: ${loaderKeyFrame} 0.75s linear infinite;
`;
`;
export const Spinner = styled.div<{
export const Spinner = styled.div<{
	size: number;
	size: number;
	height: number;
	height: number;
	width: number;
	width: number;
	noPosition?: boolean;
}>`
}>`
	font-size: ${(props) => `${props.size.toString()}px`};
	font-size: ${(props) => `${props.size.toString()}px`};
	position: relative;
	position: relative;
	display: inline-block;
	display: inline-block;
	width: 1em;
	width: 1em;
	height: 1em;
	height: 1em;
	position: absolute;
	position: ${(props) => (props.noPosition ? 'relative' : 'absolute')};
	left: 0;
	left: ${(props) => (props.noPosition ? 'auto' : '0')};
	right: 0;
	right: ${(props) => (props.noPosition ? 'auto' : '0')};
	top: 0;
	top: ${(props) => (props.noPosition ? 'auto' : '0')};
	bottom: 0;
	bottom: ${(props) => (props.noPosition ? 'auto' : '0')};
	margin: auto;
	margin: ${(props) => (props.noPosition ? '0' : 'auto')};
	& ${Blade}:nth-child(1) {
	& ${Blade}:nth-child(1) {
		transform: rotate(0deg);
		transform: rotate(0deg);
		animation-delay: -0.6875s;
		animation-delay: -0.6875s;
@@ -131,3 +131,21 @@ export const Placeholder = styled.div`
	position: relative;
	position: relative;
	background: ${(props) => props.theme.colors.container.alt1.background};
	background: ${(props) => props.theme.colors.container.alt1.background};
`;
`;
export const MessageWrapper = styled.div`
	max-width: 90vw;
	padding: 11.5px 40px !important;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border: none !important;
	span {
		font-size: ${(props) => props.theme.typography.size.xSmall} !important;
	}
`;
Diff for:‎src/components/atoms/Loader/types.ts
+2
Original file line number	Original file line	Diff line number	Diff line change
@@ -3,5 +3,7 @@ export interface IProps {
	xSm?: boolean;
	xSm?: boolean;
	disabled?: boolean;
	disabled?: boolean;
	placeholder?: boolean;
	placeholder?: boolean;
	message?: string;
	relative?: boolean;
	relative?: boolean;
	noOverlay?: boolean;
}
}
Diff for:‎src/components/organisms/ActivityTable/ActivityTable.tsx
+14
-11
Original file line number	Original file line	Diff line number	Diff line change
@@ -3,18 +3,19 @@ import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { ReactSVG } from 'react-svg';


import { getAndUpdateRegistryProfiles, getAssetsByIds, readHandler } from 'api';
import { getAssetsByIds, getProfiles, readHandler } from 'api';


import { Button } from 'components/atoms/Button';
import { Button } from 'components/atoms/Button';
import { CurrencyLine } from 'components/atoms/CurrencyLine';
import { CurrencyLine } from 'components/atoms/CurrencyLine';
import { IconButton } from 'components/atoms/IconButton';
import { IconButton } from 'components/atoms/IconButton';
import { Select } from 'components/atoms/Select';
import { Select } from 'components/atoms/Select';
import { OwnerLine } from 'components/molecules/OwnerLine';
import { OwnerLine } from 'components/molecules/OwnerLine';
import { ACTIVITY_SORT_OPTIONS, AO, ASSETS, REDIRECTS, REFORMATTED_ASSETS, URLS } from 'helpers/config';
import { ACTIVITY_SORT_OPTIONS, AO, ASSETS, REDIRECTS, REFORMATTED_ASSETS, URLS } from 'helpers/config';
import { RegistryProfileType, SelectOptionType } from 'helpers/types';
import { SelectOptionType } from 'helpers/types';
import { formatAddress, formatCount, formatDate, getRelativeDate, isFirefox } from 'helpers/utils';
import { formatAddress, formatCount, formatDate, getRelativeDate, isFirefox } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { RootState } from 'store';
import { RootState } from 'store';


import { AssetData } from '../AssetData';
import { AssetData } from '../AssetData';
@@ -27,6 +28,7 @@ const GROUP_COUNT = 50;
export default function ActivityTable(props: IProps) {
export default function ActivityTable(props: IProps) {
	const profilesReducer = useSelector((state: RootState) => state.profilesReducer);
	const profilesReducer = useSelector((state: RootState) => state.profilesReducer);


	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -75,7 +77,7 @@ export default function ActivityTable(props: IProps) {
				console.error(e);
				console.error(e);
			}
			}
		})();
		})();
	}, [props.asset, props.assetIds, props.address, arProvider.profile]);
	}, [props.asset, props.assetIds, props.address, permawebProvider.profile]);


	React.useEffect(() => {
	React.useEffect(() => {
		if (activityResponse) {
		if (activityResponse) {
@@ -91,7 +93,7 @@ export default function ActivityTable(props: IProps) {
				setActivityGroups([]);
				setActivityGroups([]);
			}
			}
		}
		}
	}, [activityResponse, arProvider.profile]);
	}, [activityResponse, permawebProvider.profile]);


	React.useEffect(() => {
	React.useEffect(() => {
		if (activity && activity.length > 0) {
		if (activity && activity.length > 0) {
@@ -125,18 +127,16 @@ export default function ActivityTable(props: IProps) {
						associatedAddresses.push(...currentGroup.map((order: any) => order.sender));
						associatedAddresses.push(...currentGroup.map((order: any) => order.sender));
						associatedAddresses.push(...currentGroup.map((order: any) => order.receiver));
						associatedAddresses.push(...currentGroup.map((order: any) => order.receiver));


						let associatedProfiles: RegistryProfileType[] | null = null;
						let associatedProfiles: any[] | null = null;
						const uniqueAddresses = [...new Set(associatedAddresses.filter((address) => address !== null))];
						const uniqueAddresses = [...new Set(associatedAddresses.filter((address) => address !== null))];
						associatedProfiles = await getAndUpdateRegistryProfiles(uniqueAddresses);
						associatedProfiles = await getProfiles(uniqueAddresses);


						if (associatedProfiles) {
						if (associatedProfiles) {
							currentGroup = currentGroup.map((order: any) => {
							currentGroup = currentGroup.map((order: any) => {
								return {
								return {
									...order,
									...order,
									senderProfile: associatedProfiles.find((profile: RegistryProfileType) => profile.id === order.sender),
									senderProfile: associatedProfiles.find((profile: any) => profile.id === order.sender),
									receiverProfile: associatedProfiles.find(
									receiverProfile: associatedProfiles.find((profile: any) => profile.id === order.receiver),
										(profile: RegistryProfileType) => profile.id === order.receiver
									),
								};
								};
							});
							});
						}
						}
@@ -186,7 +186,10 @@ export default function ActivityTable(props: IProps) {
				let orderEvent = event;
				let orderEvent = event;
				if (
				if (
					(props.address && order.Receiver === props.address) ||
					(props.address && order.Receiver === props.address) ||
					(arProvider && arProvider.profile && arProvider.profile.id && arProvider.profile.id === order.Receiver)
					(arProvider &&
						permawebProvider.profile &&
						permawebProvider.profile.id &&
						permawebProvider.profile.id === order.Receiver)
				) {
				) {
					orderEvent = 'Purchase';
					orderEvent = 'Purchase';
				}
				}
Diff for:‎src/components/organisms/AssetsTable/AssetsTable.tsx
+54
-53
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,7 +1,7 @@
import React from 'react';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Link, useNavigate, useParams } from 'react-router-dom';


import { getAssetIdGroups, getAssetsByIds, messageResult } from 'api';
import { getAssetIdGroups, getAssetsByIds } from 'api';


import * as GS from 'app/styles';
import * as GS from 'app/styles';
import { Button } from 'components/atoms/Button';
import { Button } from 'components/atoms/Button';
@@ -14,8 +14,8 @@ import { AssetDetailType, AssetSortType, IdGroupType, NotificationType, SelectOp
import { formatDate, isFirefox, sortOrders } from 'helpers/utils';
import { formatDate, isFirefox, sortOrders } from 'helpers/utils';
import * as windowUtils from 'helpers/window';
import * as windowUtils from 'helpers/window';
import { useAppProvider } from 'providers/AppProvider';
import { useAppProvider } from 'providers/AppProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import { AssetData } from '../AssetData';
import { AssetData } from '../AssetData';
import { Stamps } from '../Stamps';
import { Stamps } from '../Stamps';
@@ -28,7 +28,7 @@ export default function AssetsTable(props: IProps) {
	const navigate = useNavigate();
	const navigate = useNavigate();


	const appProvider = useAppProvider();
	const appProvider = useAppProvider();
	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];
@@ -48,7 +48,7 @@ export default function AssetsTable(props: IProps) {
	const [desktop, setDesktop] = React.useState(windowUtils.checkWindowCutoff(parseInt(STYLING.cutoffs.initial)));
	const [desktop, setDesktop] = React.useState(windowUtils.checkWindowCutoff(parseInt(STYLING.cutoffs.initial)));
	const [scrolling, setScrolling] = React.useState<boolean>(false);
	const [scrolling, setScrolling] = React.useState<boolean>(false);


	const [profileLoading, setProfileLoading] = React.useState<boolean>(false);
	// const [profileLoading, setProfileLoading] = React.useState<boolean>(false);
	const [profileResponse, setProfileResponse] = React.useState<NotificationType | null>(null);
	const [profileResponse, setProfileResponse] = React.useState<NotificationType | null>(null);


	function handleWindowResize() {
	function handleWindowResize() {
@@ -189,50 +189,51 @@ export default function AssetsTable(props: IProps) {
		);
		);
	}
	}


	async function handleProfileActionPress(e: any, asset: AssetDetailType) {
	// TODO: PFP
		if (arProvider.profile && arProvider.profile.id && asset.data && asset.data.id) {
	// async function handleProfileActionPress(e: any, asset: AssetDetailType) {
			e.preventDefault();
	// 	if (permawebProvider.profile && permawebProvider.profile.id && asset.data && asset.data.id) {
			e.stopPropagation();
	// 		e.preventDefault();
	// 		e.stopPropagation();
			setProfileLoading(true);
			try {
	// 		setProfileLoading(true);
				const data: any = {
	// 		try {
					DisplayName: arProvider.profile.displayName,
	// 			const data: any = {
					UserName: arProvider.profile.username,
	// 				DisplayName: permawebProvider.profile.displayName,
					Description: arProvider.profile.description,
	// 				UserName: permawebProvider.profile.username,
					CoverImage: arProvider.profile.banner,
	// 				Description: permawebProvider.profile.description,
					ProfileImage: asset.data.id,
	// 				CoverImage: permawebProvider.profile.banner,
				};
	// 				ProfileImage: asset.data.id,
	// 			};
				let updateResponse = await messageResult({
					processId: arProvider.profile.id,
	// 			let updateResponse = await messageResult({
					action: 'Update-Profile',
	// 				processId: permawebProvider.profile.id,
					tags: null,
	// 				action: 'Update-Profile',
					data: data,
	// 				tags: null,
					wallet: arProvider.wallet,
	// 				data: data,
				});
	// 				wallet: arProvider.wallet,
				if (updateResponse && updateResponse['Profile-Success']) {
	// 			});
					arProvider.setToggleProfileUpdate(!arProvider.toggleProfileUpdate);
	// 			if (updateResponse && updateResponse['Profile-Success']) {
					setProfileResponse({
	// 				arProvider.setToggleProfileUpdate(!arProvider.toggleProfileUpdate);
						message: `${language.profileUpdated}!`,
	// 				setProfileResponse({
						status: 'success',
	// 					message: `${language.profileUpdated}!`,
					});
	// 					status: 'success',
				} else {
	// 				});
					setProfileResponse({
	// 			} else {
						message: language.errorUpdatingProfile,
	// 				setProfileResponse({
						status: 'warning',
	// 					message: language.errorUpdatingProfile,
					});
	// 					status: 'warning',
				}
	// 				});
			} catch (e: any) {
	// 			}
				console.error(e);
	// 		} catch (e: any) {
				setProfileResponse({
	// 			console.error(e);
					message: language.errorUpdatingProfile,
	// 			setProfileResponse({
					status: 'warning',
	// 				message: language.errorUpdatingProfile,
				});
	// 				status: 'warning',
			}
	// 			});
			setProfileLoading(false);
	// 		}
		}
	// 		setProfileLoading(false);
	}
	// 	}
	// }


	function getData() {
	function getData() {
		if ((assetsLoading || props.loadingIds) && viewType) {
		if ((assetsLoading || props.loadingIds) && viewType) {
@@ -336,18 +337,18 @@ export default function AssetsTable(props: IProps) {
													<S.AssetGridDataWrapper disabled={false}>
													<S.AssetGridDataWrapper disabled={false}>
														<AssetData asset={asset} scrolling={scrolling} autoLoad />
														<AssetData asset={asset} scrolling={scrolling} autoLoad />
														{props.setProfileAction &&
														{props.setProfileAction &&
														arProvider.profile &&
														permawebProvider.profile &&
														arProvider.profile.id &&
														permawebProvider.profile.id &&
														arProvider.profile.id === address &&
														permawebProvider.profile.id === address &&
														asset.data.contentType &&
														asset.data.contentType &&
														asset.data.contentType.includes('image') ? (
														asset.data.contentType.includes('image') ? (
															<S.AssetGridDataActionWrapper>
															<S.AssetGridDataActionWrapper>
																<button
																{/* <button
																	onClick={(e: any) => handleProfileActionPress(e, asset)}
																	onClick={(e: any) => handleProfileActionPress(e, asset)}
																	disabled={profileLoading}
																	disabled={profileLoading}
																>
																>
																	<span>{profileLoading ? `${language.loading}...` : language.setProfilePicture}</span>
																	<span>{profileLoading ? `${language.loading}...` : language.setProfilePicture}</span>
																</button>
																</button> */}
																<Stamps
																<Stamps
																	txId={asset.data.id}
																	txId={asset.data.id}
																	title={asset.data.title || asset.data.description}
																	title={asset.data.title || asset.data.description}
Diff for:‎src/components/organisms/Banner/Banner.tsx
+345
-181
Large diffs are not rendered by default.
Diff for:‎src/components/organisms/Banner/styles.ts
+11
Original file line number	Original file line	Diff line number	Diff line change
@@ -24,6 +24,9 @@ export const Wrapper = styled.div`
		&:hover {
		&:hover {
			color: ${(props) => props.theme.colors.font.light2};
			color: ${(props) => props.theme.colors.font.light2};
		}
		}
		&:disabled {
			color: ${(props) => props.theme.colors.font.light2};
		}
	}
	}
`;
`;


@@ -83,3 +86,11 @@ export const ActionsWrapper = styled.div`
		}
		}
	}
	}
`;
`;
export const MessageWrapper = styled.div`
	margin: 20px 0 0 0;
	p {
		margin: 0;
	}
`;
Diff for:‎src/components/organisms/CollectionsList/CollectionsList.tsx
+26
-12
Original file line number	Original file line	Diff line number	Diff line change
@@ -11,6 +11,7 @@ import { getTxEndpoint } from 'helpers/endpoints';
import { CollectionType } from 'helpers/types';
import { CollectionType } from 'helpers/types';
import { formatDate } from 'helpers/utils';
import { formatDate } from 'helpers/utils';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { RootState } from 'store';
import { RootState } from 'store';


import * as S from './styles';
import * as S from './styles';
@@ -88,6 +89,7 @@ function CollectionListItem(props: { index: number; collection: CollectionType }
export default function CollectionsList(props: IProps) {
export default function CollectionsList(props: IProps) {
	const collectionsReducer = useSelector((state: RootState) => state.collectionsReducer);
	const collectionsReducer = useSelector((state: RootState) => state.collectionsReducer);


	const permawebProvider = usePermawebProvider();
	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];


@@ -100,22 +102,34 @@ export default function CollectionsList(props: IProps) {
			if (!collections) {
			if (!collections) {
				setLoading(true);
				setLoading(true);
				try {
				try {
					if (props.owner) {
					if (props.collectionIds) {
						if (collectionsReducer?.creators?.[props.owner]?.collections?.length) {
						const fetchedCollections = [];
							setCollections(collectionsReducer.creators[props.owner].collections);
						for (const collectionId of props.collectionIds) {
							setLoading(false);
							await new Promise((r) => setTimeout(r, 200));
							const collection = await permawebProvider.libs.getCollection(collectionId);
							fetchedCollections.push(collection);
						}
						}
						setCollections(fetchedCollections);
					} else {
					} else {
						if (collectionsReducer?.all?.collections?.length) {
						if (props.owner) {
							setCollections(collectionsReducer.all.collections);
							if (collectionsReducer?.creators?.[props.owner]?.collections?.length) {
							setLoading(false);
								setCollections(collectionsReducer.creators[props.owner].collections);
								setLoading(false);
							}
						} else {
							if (collectionsReducer?.all?.collections?.length) {
								setCollections(collectionsReducer.all.collections);
								setLoading(false);
							}
						}
						}
					}
					}


					const collectionsFetch: CollectionType[] = await getCollections(props.owner);
					if (!props.collectionIds) {
					if (collections) {
						const collectionsFetch: CollectionType[] = await getCollections(props.owner);
						setCollections(collectionsFetch);
						if (props.owner) {
					} else setCollections(collectionsFetch);
							setCollections(collectionsFetch.filter((collection) => collection.creator === props.owner));
						} else setCollections(collectionsFetch);
					}
				} catch (e: any) {
				} catch (e: any) {
					setErrorResponse(e.message || language.collectionsFetchFailed);
					setErrorResponse(e.message || language.collectionsFetchFailed);
				}
				}
@@ -153,7 +167,7 @@ export default function CollectionsList(props: IProps) {
				);
				);
			}
			}
		} else {
		} else {
			if (loading) return <Loader />;
			if (loading) return <Loader sm relative />;
			else if (errorResponse) return <p>{errorResponse}</p>;
			else if (errorResponse) return <p>{errorResponse}</p>;
			else {
			else {
				return (
				return (
Diff for:‎src/components/organisms/CollectionsList/types.ts
+1
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,3 +1,4 @@
export interface IProps {
export interface IProps {
	owner: string | null;
	owner: string | null;
	collectionIds?: string[];
}
}
Diff for:‎src/components/organisms/OrderCancel/OrderCancel.tsx
+5
-3
Original file line number	Original file line	Diff line number	Diff line change
@@ -11,12 +11,14 @@ import * as windowUtils from 'helpers/window';
import { useAppProvider } from 'providers/AppProvider';
import { useAppProvider } from 'providers/AppProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';
import * as S from './styles';
import { IProps } from './types';
import { IProps } from './types';


export default function OrderCancel(props: IProps) {
export default function OrderCancel(props: IProps) {
	const appProvider = useAppProvider();
	const appProvider = useAppProvider();
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -28,14 +30,14 @@ export default function OrderCancel(props: IProps) {
	const [response, setResponse] = React.useState<NotificationType | null>(null);
	const [response, setResponse] = React.useState<NotificationType | null>(null);


	async function handleOrderCancel() {
	async function handleOrderCancel() {
		if (arProvider.wallet && arProvider.profile && arProvider.profile.id) {
		if (arProvider.wallet && permawebProvider.profile && permawebProvider.profile.id) {
			setLoading(true);
			setLoading(true);
			try {
			try {
				const cancelOrderId = await cancelOrder(
				const cancelOrderId = await cancelOrder(
					{
					{
						orderbookId: AO.ucm,
						orderbookId: AO.ucm,
						orderId: props.listing.id,
						orderId: props.listing.id,
						profileId: arProvider.profile.id,
						profileId: permawebProvider.profile.id,
						dominantToken: props.listing.token,
						dominantToken: props.listing.token,
						swapToken: props.listing.currency,
						swapToken: props.listing.currency,
					},
					},
@@ -51,7 +53,7 @@ export default function OrderCancel(props: IProps) {


				setCancelProcessed(true);
				setCancelProcessed(true);
				appProvider.refreshUcm();
				appProvider.refreshUcm();
				arProvider.setToggleTokenBalanceUpdate(!arProvider.toggleTokenBalanceUpdate);
				permawebProvider.setToggleTokenBalanceUpdate(!permawebProvider.toggleTokenBalanceUpdate);
				props.toggleUpdate();
				props.toggleUpdate();
				setShowConfirmation(false);
				setShowConfirmation(false);
				setCancelProcessed(false);
				setCancelProcessed(false);
Diff for:‎src/components/organisms/OrderCountsTable/OrderCountsTable.tsx
+7
-8
Original file line number	Original file line	Diff line number	Diff line change
@@ -3,11 +3,10 @@ import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { ReactSVG } from 'react-svg';


import { getAndUpdateRegistryProfiles, readHandler } from 'api';
import { getProfiles, readHandler } from 'api';


import { AO, ASSETS, URLS } from 'helpers/config';
import { AO, ASSETS, URLS } from 'helpers/config';
import { getTxEndpoint } from 'helpers/endpoints';
import { getTxEndpoint } from 'helpers/endpoints';
import { RegistryProfileType } from 'helpers/types';
import { checkValidAddress, formatAddress } from 'helpers/utils';
import { checkValidAddress, formatAddress } from 'helpers/utils';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { RootState } from 'store';
import { RootState } from 'store';
@@ -20,8 +19,8 @@ export default function OrderCountsTable() {
	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];


	const [topCreators, setTopCreators] = React.useState<RegistryProfileType[] | null>(null);
	const [topCreators, setTopCreators] = React.useState<any[] | null>(null);
	const [topCollectors, setTopCollectors] = React.useState<RegistryProfileType[] | null>(null);
	const [topCollectors, setTopCollectors] = React.useState<any[] | null>(null);


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
@@ -38,14 +37,14 @@ export default function OrderCountsTable() {
							.sort(([, countA], [, countB]) => Number(countB) - Number(countA))
							.sort(([, countA], [, countB]) => Number(countB) - Number(countA))
							.slice(0, 5)
							.slice(0, 5)
							.map(([address]) => address);
							.map(([address]) => address);
						setTopCreators(await getAndUpdateRegistryProfiles(topCreatorAddresses));
						setTopCreators(await getProfiles(topCreatorAddresses));
					}
					}
					if (response.PurchasesByAddress) {
					if (response.PurchasesByAddress) {
						const topCollectorAddresses = Object.entries(response.PurchasesByAddress)
						const topCollectorAddresses = Object.entries(response.PurchasesByAddress)
							.sort(([, countA], [, countB]) => Number(countB) - Number(countA))
							.sort(([, countA], [, countB]) => Number(countB) - Number(countA))
							.slice(0, 5)
							.slice(0, 5)
							.map(([address]) => address);
							.map(([address]) => address);
						setTopCollectors(await getAndUpdateRegistryProfiles(topCollectorAddresses));
						setTopCollectors(await getProfiles(topCollectorAddresses));
					}
					}
				}
				}
			} catch (e: any) {
			} catch (e: any) {
@@ -62,7 +61,7 @@ export default function OrderCountsTable() {
				</S.Header>
				</S.Header>
				<S.ProfilesWrapper>
				<S.ProfilesWrapper>
					{topCreators ? (
					{topCreators ? (
						topCreators.map((profile: RegistryProfileType, index: number) => {
						topCreators.map((profile: any, index: number) => {
							const hasImage = profile.thumbnail && checkValidAddress(profile.thumbnail);
							const hasImage = profile.thumbnail && checkValidAddress(profile.thumbnail);
							return (
							return (
								<S.ProfileWrapper key={index} className={'fade-in'}>
								<S.ProfileWrapper key={index} className={'fade-in'}>
@@ -101,7 +100,7 @@ export default function OrderCountsTable() {
				</S.Header>
				</S.Header>
				<S.ProfilesWrapper>
				<S.ProfilesWrapper>
					{topCollectors ? (
					{topCollectors ? (
						topCollectors.map((profile: RegistryProfileType, index: number) => {
						topCollectors.map((profile: any, index: number) => {
							const hasImage = profile.thumbnail && checkValidAddress(profile.thumbnail);
							const hasImage = profile.thumbnail && checkValidAddress(profile.thumbnail);
							return (
							return (
								<S.ProfileWrapper key={index} className={'fade-in'}>
								<S.ProfileWrapper key={index} className={'fade-in'}>
Diff for:‎src/components/organisms/ProfileManage/ProfileManage.tsx
+34
-23
Original file line number	Original file line	Diff line number	Diff line change
@@ -15,6 +15,7 @@ import { NotificationType } from 'helpers/types';
import { checkValidAddress } from 'helpers/utils';
import { checkValidAddress } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { WalletBlock } from 'wallet/WalletBlock';
import { WalletBlock } from 'wallet/WalletBlock';


import * as S from './styles';
import * as S from './styles';
@@ -26,6 +27,7 @@ const ALLOWED_BANNER_TYPES = 'image/png, image/jpeg, image/gif';
const ALLOWED_AVATAR_TYPES = 'image/png, image/jpeg, image/gif';
const ALLOWED_AVATAR_TYPES = 'image/png, image/jpeg, image/gif';


export default function ProfileManage(props: IProps) {
export default function ProfileManage(props: IProps) {
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -54,7 +56,6 @@ export default function ProfileManage(props: IProps) {
	}, [props.profile]);
	}, [props.profile]);


	function handleUpdate() {
	function handleUpdate() {
		arProvider.setToggleProfileUpdate(!arProvider.toggleProfileUpdate);
		if (props.handleUpdate) props.handleUpdate();
		if (props.handleUpdate) props.handleUpdate();
	}
	}


@@ -65,24 +66,41 @@ export default function ProfileManage(props: IProps) {
			const ao = connect({ MODE: 'legacy' });
			const ao = connect({ MODE: 'legacy' });
			const signer = createDataItemSigner(arProvider.wallet);
			const signer = createDataItemSigner(arProvider.wallet);


			const { createProfile, updateProfile } = AOProfile.init({
			const { updateProfile } = AOProfile.init({
				ao,
				ao,
				signer,
				signer,
				arweave: Arweave.init({}),
				arweave: Arweave.init({}),
			});
			});


			let data: any = {
				username: username,
				displayName: name,
				description: bio,
			};
			if (avatar) data.thumbnail = avatar;
			if (banner) data.banner = banner;
			try {
			try {
				if (props.profile && props.profile.id) {
				if (props.profile && props.profile.id) {
					const updateResponse = await updateProfile({
					let updateResponse = null;
						profileId: props.profile.id,
					if (props.profile.isLegacyProfile) {
						data: {
						updateResponse = await updateProfile({
							userName: username,
							profileId: props.profile.id,
							displayName: name,
							data: {
							description: bio,
								userName: username,
							thumbnail: avatar,
								displayName: name,
							banner: banner,
								description: bio,
						},
								thumbnail: avatar,
					});
								banner: banner,
							},
						});
					} else {
						updateResponse = await permawebProvider.libs.updateProfile(data, props.profile.id, (status: any) =>
							console.log(status)
						);
					}
					if (updateResponse) {
					if (updateResponse) {
						setProfileResponse({
						setProfileResponse({
							message: `${language.profileUpdated}!`,
							message: `${language.profileUpdated}!`,
@@ -97,23 +115,16 @@ export default function ProfileManage(props: IProps) {
						});
						});
					}
					}
				} else {
				} else {
					const createResponse = await createProfile({
					const profileId = await permawebProvider.libs.createProfile(data, (status: any) => console.log(status));
						data: {
							userName: username,
							displayName: name,
							description: bio,
							thumbnail: avatar,
							banner: banner,
						},
					});


					console.log(createResponse);
					console.log(`Profile ID: ${profileId}`);


					if (createResponse) {
					if (profileId) {
						setProfileResponse({
						setProfileResponse({
							message: `${language.profileCreated}!`,
							message: `${language.profileCreated}!`,
							status: 'success',
							status: 'success',
						});
						});
						permawebProvider.handleInitialProfileCache(arProvider.walletAddress, profileId);
						handleUpdate();
						handleUpdate();
					} else {
					} else {
						setProfileResponse({
						setProfileResponse({
Diff for:‎src/components/organisms/Streaks/Streaks.tsx
+19
-19
Original file line number	Original file line	Diff line number	Diff line change
@@ -4,7 +4,7 @@ import { useNavigate } from 'react-router-dom';


import Arweave from 'arweave';
import Arweave from 'arweave';


import { getAndUpdateRegistryProfiles, readHandler } from 'api';
import { getProfiles, readHandler } from 'api';


import { Button } from 'components/atoms/Button';
import { Button } from 'components/atoms/Button';
import { CurrencyLine } from 'components/atoms/CurrencyLine';
import { CurrencyLine } from 'components/atoms/CurrencyLine';
@@ -14,21 +14,21 @@ import { Panel } from 'components/molecules/Panel';
import { AO, ASSETS, URLS } from 'helpers/config';
import { AO, ASSETS, URLS } from 'helpers/config';
import { StreakType } from 'helpers/types';
import { StreakType } from 'helpers/types';
import { formatAddress, formatCount, getTotalTokenBalance } from 'helpers/utils';
import { formatAddress, formatCount, getTotalTokenBalance } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { RootState } from 'store';
import { RootState } from 'store';


import * as S from './styles';
import * as S from './styles';
import { IProps } from './types';
import { IProps } from './types';


const GROUP_COUNT = 250;
const GROUP_COUNT = 15;


export default function Streaks(props: IProps) {
export default function Streaks(props: IProps) {
	const navigate = useNavigate();
	const navigate = useNavigate();


	const streaksReducer = useSelector((state: RootState) => state.streaksReducer);
	const streaksReducer = useSelector((state: RootState) => state.streaksReducer);


	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];
@@ -86,7 +86,7 @@ export default function Streaks(props: IProps) {
				setUpdating(true);
				setUpdating(true);
				try {
				try {
					const addresses = streakGroups[streakCursor].map((streak: any) => streak.address);
					const addresses = streakGroups[streakCursor].map((streak: any) => streak.address);
					const profiles = await getAndUpdateRegistryProfiles(addresses);
					const profiles = await getProfiles(addresses);
					const updatedStreakGroup = streakGroups[streakCursor].map((streak: any) => ({
					const updatedStreakGroup = streakGroups[streakCursor].map((streak: any) => ({
						...streak,
						...streak,
						profile: profiles ? profiles.find((profile: any) => profile.id === streak.address) : null,
						profile: profiles ? profiles.find((profile: any) => profile.id === streak.address) : null,
@@ -111,13 +111,13 @@ export default function Streaks(props: IProps) {
		(async function () {
		(async function () {
			if (props.profile && props.profile.id) {
			if (props.profile && props.profile.id) {
				if (
				if (
					arProvider.profile &&
					permawebProvider.profile &&
					arProvider.profile.id &&
					permawebProvider.profile.id &&
					props.profile.id === arProvider.profile.id &&
					props.profile.id === permawebProvider.profile.id &&
					arProvider.tokenBalances &&
					permawebProvider.tokenBalances &&
					arProvider.tokenBalances[AO.pixl]
					permawebProvider.tokenBalances[AO.pixl]
				) {
				) {
					setPixlBalance(getTotalTokenBalance(arProvider.tokenBalances[AO.pixl]));
					setPixlBalance(getTotalTokenBalance(permawebProvider.tokenBalances[AO.pixl]));
				} else {
				} else {
					try {
					try {
						const pixlTokenBalance = await readHandler({
						const pixlTokenBalance = await readHandler({
@@ -145,7 +145,7 @@ export default function Streaks(props: IProps) {
				}
				}
			}
			}
		})();
		})();
	}, [arProvider.profile, arProvider.tokenBalances, props.profile]);
	}, [permawebProvider.profile, permawebProvider.tokenBalances, props.profile]);


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
@@ -204,7 +204,7 @@ export default function Streaks(props: IProps) {
		if (props.profile && count !== null) {
		if (props.profile && count !== null) {
			let title: string = '';
			let title: string = '';
			let endText: string = '';
			let endText: string = '';
			if (arProvider.profile && arProvider.profile.id && arProvider.profile.id === props.profile.id) {
			if (permawebProvider.profile && permawebProvider.profile.id && permawebProvider.profile.id === props.profile.id) {
				endText = '!';
				endText = '!';
				switch (getRangeLabel(count)) {
				switch (getRangeLabel(count)) {
					case '0-7':
					case '0-7':
@@ -231,7 +231,7 @@ export default function Streaks(props: IProps) {
				}${endText}`}</p>
				}${endText}`}</p>
			);
			);
		} else return null;
		} else return null;
	}, [count, props.profile, arProvider.profile]);
	}, [count, props.profile, permawebProvider.profile]);


	const streak = React.useMemo(() => {
	const streak = React.useMemo(() => {
		return (
		return (
@@ -413,16 +413,16 @@ export default function Streaks(props: IProps) {
	}
	}


	function getDropdown() {
	function getDropdown() {
		return showLeaderboard || !arProvider.profile ? (
		return showLeaderboard || !permawebProvider.profile ? (
			<>{leaderboard}</>
			<>{leaderboard}</>
		) : (
		) : (
			<>
			<>
				<S.SDHeader>{header}</S.SDHeader>
				<S.SDHeader>{header}</S.SDHeader>
				<S.SDStreak>{streak}</S.SDStreak>
				<S.SDStreak>{streak}</S.SDStreak>
				{arProvider.profile &&
				{permawebProvider.profile &&
					arProvider.profile.id &&
					permawebProvider.profile.id &&
					arProvider.profile &&
					permawebProvider.profile &&
					arProvider.profile.id === props.profile.id && <S.SDMessage>{message}</S.SDMessage>}
					permawebProvider.profile.id === props.profile.id && <S.SDMessage>{message}</S.SDMessage>}
				<S.SDAmounts>
				<S.SDAmounts>
					{amounts}
					{amounts}
					<S.SDLAction>
					<S.SDLAction>
Diff for:‎src/helpers/config.ts
+5
Original file line number	Original file line	Diff line number	Diff line change
@@ -359,3 +359,8 @@ export const UPLOAD_CONFIG = {
export const FLAGS = {
export const FLAGS = {
	MAINTENANCE: false,
	MAINTENANCE: false,
};
};
export const STORAGE = {
	walletType: `wallet-type`,
	profile: (id: string) => `profile-${id}`,
};
Diff for:‎src/helpers/themes.ts
+5
Original file line number	Original file line	Diff line number	Diff line change
@@ -201,6 +201,11 @@ export const theme = (currentTheme: any): DefaultTheme => ({
				background: currentTheme.dark2,
				background: currentTheme.dark2,
			},
			},
		},
		},
		contrast: {
			background: currentTheme.dark2,
			border: currentTheme.neutral9,
			color: currentTheme.light1,
		},
		font: {
		font: {
			primary: currentTheme.neutralA1,
			primary: currentTheme.neutralA1,
			alt1: currentTheme.neutralA4,
			alt1: currentTheme.neutralA4,
Diff for:‎src/index.tsx
+9
-6
Original file line number	Original file line	Diff line number	Diff line change
@@ -10,6 +10,7 @@ import { ArweaveProvider } from 'providers/ArweaveProvider';
import { CustomThemeProvider } from 'providers/CustomThemeProvider';
import { CustomThemeProvider } from 'providers/CustomThemeProvider';
import ErrorBoundary from 'providers/ErrorBoundary';
import ErrorBoundary from 'providers/ErrorBoundary';
import { LanguageProvider } from 'providers/LanguageProvider';
import { LanguageProvider } from 'providers/LanguageProvider';
import { PermawebProvider } from 'providers/PermawebProvider';
import { persistor, store } from 'store';
import { persistor, store } from 'store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
@@ -19,12 +20,14 @@ ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
				<LanguageProvider>
				<LanguageProvider>
					<ErrorBoundary>
					<ErrorBoundary>
						<ArweaveProvider>
						<ArweaveProvider>
							<AppProvider>
							<PermawebProvider>
								<HashRouter>
								<AppProvider>
									<GlobalStyle />
									<HashRouter>
									<App />
										<GlobalStyle />
								</HashRouter>
										<App />
							</AppProvider>
									</HashRouter>
								</AppProvider>
							</PermawebProvider>
						</ArweaveProvider>
						</ArweaveProvider>
					</ErrorBoundary>
					</ErrorBoundary>
				</LanguageProvider>
				</LanguageProvider>
Diff for:‎src/navigation/Header/Header.tsx
+3
-3
Original file line number	Original file line	Diff line number	Diff line change
@@ -5,15 +5,15 @@ import { ReactSVG } from 'react-svg';
import { IconButton } from 'components/atoms/IconButton';
import { IconButton } from 'components/atoms/IconButton';
import { Streaks } from 'components/organisms/Streaks';
import { Streaks } from 'components/organisms/Streaks';
import { ASSETS, REDIRECTS, URLS } from 'helpers/config';
import { ASSETS, REDIRECTS, URLS } from 'helpers/config';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { WalletConnect } from 'wallet/WalletConnect';
import { WalletConnect } from 'wallet/WalletConnect';
import { CloseHandler } from 'wrappers/CloseHandler';
import { CloseHandler } from 'wrappers/CloseHandler';


import * as S from './styles';
import * as S from './styles';


export default function Header() {
export default function Header() {
	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];
@@ -47,7 +47,7 @@ export default function Header() {
						</S.DNavWrapper>
						</S.DNavWrapper>
					</S.C1Wrapper>
					</S.C1Wrapper>
					<S.ActionsWrapper>
					<S.ActionsWrapper>
						{arProvider.profile && arProvider.profile.id && <Streaks profile={arProvider.profile} />}
						{permawebProvider.profile && permawebProvider.profile.id && <Streaks profile={permawebProvider.profile} />}
						<WalletConnect />
						<WalletConnect />
						<S.MWrapper>
						<S.MWrapper>
							<IconButton
							<IconButton
Diff for:‎src/providers/AppProvider.tsx
+4
-2
Original file line number	Original file line	Diff line number	Diff line change
@@ -12,6 +12,7 @@ import * as streakActions from 'store/streaks/actions';
import * as ucmActions from 'store/ucm/actions';
import * as ucmActions from 'store/ucm/actions';


import { useArweaveProvider } from './ArweaveProvider';
import { useArweaveProvider } from './ArweaveProvider';
import { usePermawebProvider } from './PermawebProvider';


export interface AppContextState {
export interface AppContextState {
	ucm: { updating: boolean; completed: boolean; lastUpdate?: number };
	ucm: { updating: boolean; completed: boolean; lastUpdate?: number };
@@ -42,6 +43,7 @@ export function AppProvider(props: AppProviderProps) {
	const stampsReducer = useSelector((state: RootState) => state.stampsReducer);
	const stampsReducer = useSelector((state: RootState) => state.stampsReducer);
	const ucmReducer = useSelector((state: RootState) => state.ucmReducer);
	const ucmReducer = useSelector((state: RootState) => state.ucmReducer);


	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const [ucmState, setUCMState] = React.useState<AppContextState['ucm']>({
	const [ucmState, setUCMState] = React.useState<AppContextState['ucm']>({
@@ -250,7 +252,7 @@ export function AppProvider(props: AppProviderProps) {
					}
					}
					setStampsState((prevState) => ({ ...prevState, updating: false }));
					setStampsState((prevState) => ({ ...prevState, updating: false }));


					if (arProvider.walletAddress && arProvider.profile) {
					if (arProvider.walletAddress && permawebProvider.profile) {
						const hasStampedCheck = await stamps.hasStamped(orderbookIds);
						const hasStampedCheck = await stamps.hasStamped(orderbookIds);


						const updatedStampCheck = {};
						const updatedStampCheck = {};
@@ -271,7 +273,7 @@ export function AppProvider(props: AppProviderProps) {
				}
				}
			}
			}
		})();
		})();
	}, [ucmReducer, arProvider.walletAddress, arProvider.profile]);
	}, [ucmReducer, arProvider.walletAddress, permawebProvider.profile]);


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
Diff for:‎src/providers/ArweaveProvider.tsx
+91
-93
Original file line number	Original file line	Diff line number	Diff line change
@@ -6,12 +6,10 @@ import * as Othent from '@othent/kms';
import { connect } from '@permaweb/aoconnect';
import { connect } from '@permaweb/aoconnect';
import AOProfile, { ProfileType } from '@permaweb/aoprofile';
import AOProfile, { ProfileType } from '@permaweb/aoprofile';


import { getVouch, readHandler } from 'api';
import { Modal } from 'components/molecules/Modal';
import { Modal } from 'components/molecules/Modal';
import { AO, AR_WALLETS, REDIRECTS, WALLET_PERMISSIONS } from 'helpers/config';
import { AR_WALLETS, REDIRECTS, WALLET_PERMISSIONS } from 'helpers/config';
import { getARBalanceEndpoint } from 'helpers/endpoints';
import { getARBalanceEndpoint } from 'helpers/endpoints';
import { VouchType, WalletEnum } from 'helpers/types';
import { WalletEnum } from 'helpers/types';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { RootState } from 'store';
import { RootState } from 'store';


@@ -23,17 +21,17 @@ interface ArweaveContextState {
	walletAddress: string | null;
	walletAddress: string | null;
	walletType: WalletEnum | null;
	walletType: WalletEnum | null;
	arBalance: number | null;
	arBalance: number | null;
	tokenBalances: { [address: string]: { profileBalance: number; walletBalance: number } } | null;
	// tokenBalances: { [address: string]: { profileBalance: number; walletBalance: number } } | null;
	toggleTokenBalanceUpdate: boolean;
	// toggleTokenBalanceUpdate: boolean;
	setToggleTokenBalanceUpdate: (toggleUpdate: boolean) => void;
	// setToggleTokenBalanceUpdate: (toggleUpdate: boolean) => void;
	handleConnect: any;
	handleConnect: any;
	handleDisconnect: () => void;
	handleDisconnect: () => void;
	walletModalVisible: boolean;
	walletModalVisible: boolean;
	setWalletModalVisible: (open: boolean) => void;
	setWalletModalVisible: (open: boolean) => void;
	profile: ProfileType;
	profile: ProfileType;
	toggleProfileUpdate: boolean;
	toggleProfileUpdate: boolean;
	setToggleProfileUpdate: (toggleUpdate: boolean) => void;
	setToggleProfileUpdate: (toggleUpdate: boolean) => void;
	vouch: VouchType;
	// vouch: VouchType;
}
}


interface ArweaveProviderProps {
interface ArweaveProviderProps {
@@ -46,17 +44,17 @@ const DEFAULT_CONTEXT = {
	walletAddress: null,
	walletAddress: null,
	walletType: null,
	walletType: null,
	arBalance: null,
	arBalance: null,
	tokenBalances: null,
	// tokenBalances: null,
	toggleTokenBalanceUpdate: false,
	// toggleTokenBalanceUpdate: false,
	setToggleTokenBalanceUpdate(_toggleUpdate: boolean) {},
	// setToggleTokenBalanceUpdate(_toggleUpdate: boolean) {},
	handleConnect() {},
	handleConnect() {},
	handleDisconnect() {},
	handleDisconnect() {},
	walletModalVisible: false,
	walletModalVisible: false,
	setWalletModalVisible(_open: boolean) {},
	setWalletModalVisible(_open: boolean) {},
	profile: null,
	profile: null,
	toggleProfileUpdate: false,
	toggleProfileUpdate: false,
	setToggleProfileUpdate(_toggleUpdate: boolean) {},
	setToggleProfileUpdate(_toggleUpdate: boolean) {},
	vouch: null,
	// vouch: null,
};
};


const ARContext = React.createContext<ArweaveContextState>(DEFAULT_CONTEXT);
const ARContext = React.createContext<ArweaveContextState>(DEFAULT_CONTEXT);
@@ -102,16 +100,16 @@ export function ArweaveProvider(props: ArweaveProviderProps) {
	const [walletType, setWalletType] = React.useState<WalletEnum | null>(null);
	const [walletType, setWalletType] = React.useState<WalletEnum | null>(null);
	const [walletModalVisible, setWalletModalVisible] = React.useState<boolean>(false);
	const [walletModalVisible, setWalletModalVisible] = React.useState<boolean>(false);
	const [walletAddress, setWalletAddress] = React.useState<string | null>(null);
	const [walletAddress, setWalletAddress] = React.useState<string | null>(null);
	const [vouch, setVouch] = React.useState<VouchType | null>(null);
	// const [vouch, setVouch] = React.useState<VouchType | null>(null);


	const [arBalance, setArBalance] = React.useState<number | null>(null);
	const [arBalance, setArBalance] = React.useState<number | null>(null);
	const [tokenBalances, setTokenBalances] = React.useState<{
	// const [tokenBalances, setTokenBalances] = React.useState<{
		[address: string]: { profileBalance: number; walletBalance: number };
	// 	[address: string]: { profileBalance: number; walletBalance: number };
	} | null>({
	// } | null>({
		[AO.defaultToken]: { profileBalance: null, walletBalance: null },
	// 	[AO.defaultToken]: { profileBalance: null, walletBalance: null },
		[AO.pixl]: { profileBalance: null, walletBalance: null },
	// 	[AO.pixl]: { profileBalance: null, walletBalance: null },
	});
	// });
	const [toggleTokenBalanceUpdate, setToggleTokenBalanceUpdate] = React.useState<boolean>(false);
	// const [toggleTokenBalanceUpdate, setToggleTokenBalanceUpdate] = React.useState<boolean>(false);


	const [profile, setProfile] = React.useState<ProfileType | null>(null);
	const [profile, setProfile] = React.useState<ProfileType | null>(null);
	const [toggleProfileUpdate, setToggleProfileUpdate] = React.useState<boolean>(false);
	const [toggleProfileUpdate, setToggleProfileUpdate] = React.useState<boolean>(false);
@@ -197,75 +195,75 @@ export function ArweaveProvider(props: ArweaveProviderProps) {
		})();
		})();
	}, [toggleProfileUpdate]);
	}, [toggleProfileUpdate]);


	React.useEffect(() => {
	// React.useEffect(() => {
		const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	// 	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		const fetchBalances = async () => {
	// 	const fetchBalances = async () => {
			if (!walletAddress || !profile?.id) return;
	// 		if (!walletAddress || !profile?.id) return;
			try {
	// 		try {
				const defaultTokenWalletBalance = await readHandler({
	// 			const defaultTokenWalletBalance = await readHandler({
					processId: AO.defaultToken,
	// 				processId: AO.defaultToken,
					action: 'Balance',
	// 				action: 'Balance',
					tags: [{ name: 'Recipient', value: walletAddress }],
	// 				tags: [{ name: 'Recipient', value: walletAddress }],
				});
	// 			});
				await sleep(500);
	// 			await sleep(500);
				const pixlTokenWalletBalance = await readHandler({
	// 			const pixlTokenWalletBalance = await readHandler({
					processId: AO.pixl,
	// 				processId: AO.pixl,
					action: 'Balance',
	// 				action: 'Balance',
					tags: [{ name: 'Recipient', value: walletAddress }],
	// 				tags: [{ name: 'Recipient', value: walletAddress }],
				});
	// 			});
				await sleep(500);
	// 			await sleep(500);
				const defaultTokenProfileBalance = await readHandler({
	// 			const defaultTokenProfileBalance = await readHandler({
					processId: AO.defaultToken,
	// 				processId: AO.defaultToken,
					action: 'Balance',
	// 				action: 'Balance',
					tags: [{ name: 'Recipient', value: profile.id }],
	// 				tags: [{ name: 'Recipient', value: profile.id }],
				});
	// 			});
				await sleep(500);
	// 			await sleep(500);
				const pixlTokenProfileBalance = await readHandler({
	// 			const pixlTokenProfileBalance = await readHandler({
					processId: AO.pixl,
	// 				processId: AO.pixl,
					action: 'Balance',
	// 				action: 'Balance',
					tags: [{ name: 'Recipient', value: profile.id }],
	// 				tags: [{ name: 'Recipient', value: profile.id }],
				});
	// 			});
				setTokenBalances((prevBalances) => ({
	// 			setTokenBalances((prevBalances) => ({
					...prevBalances,
	// 				...prevBalances,
					[AO.defaultToken]: {
	// 				[AO.defaultToken]: {
						...prevBalances[AO.defaultToken],
	// 					...prevBalances[AO.defaultToken],
						walletBalance: defaultTokenWalletBalance ?? null,
	// 					walletBalance: defaultTokenWalletBalance ?? null,
						profileBalance: defaultTokenProfileBalance ?? null,
	// 					profileBalance: defaultTokenProfileBalance ?? null,
					},
	// 				},
					[AO.pixl]: {
	// 				[AO.pixl]: {
						...prevBalances[AO.pixl],
	// 					...prevBalances[AO.pixl],
						walletBalance: pixlTokenWalletBalance ?? null,
	// 					walletBalance: pixlTokenWalletBalance ?? null,
						profileBalance: pixlTokenProfileBalance ?? null,
	// 					profileBalance: pixlTokenProfileBalance ?? null,
					},
	// 				},
				}));
	// 			}));
			} catch (e) {
	// 		} catch (e) {
				console.error(e);
	// 			console.error(e);
			}
	// 		}
		};
	// 	};
		fetchBalances();
	// 	fetchBalances();
	}, [walletAddress, profile, toggleTokenBalanceUpdate]);
	// }, [walletAddress, profile, toggleTokenBalanceUpdate]);
	React.useEffect(() => {
	// React.useEffect(() => {
		if (walletAddress && profile && profile.id) {
	// 	if (walletAddress && profile && profile.id) {
			const fetchVouch = async () => {
	// 		const fetchVouch = async () => {
				try {
	// 			try {
					const vouch = await getVouch({ wallet, address: walletAddress });
	// 				const vouch = await getVouch({ wallet, address: walletAddress });
					setVouch(vouch);
	// 				setVouch(vouch);
				} catch (e) {
	// 			} catch (e) {
					console.error(e);
	// 				console.error(e);
				}
	// 			}
			};
	// 		};
			fetchVouch();
	// 		fetchVouch();
		}
	// 	}
	}, [walletAddress, profile]);
	// }, [walletAddress, profile]);


	async function handleWallet() {
	async function handleWallet() {
		if (localStorage.getItem('walletType')) {
		if (localStorage.getItem('walletType')) {
@@ -356,9 +354,9 @@ export function ArweaveProvider(props: ArweaveProviderProps) {
					walletAddress,
					walletAddress,
					walletType,
					walletType,
					arBalance,
					arBalance,
					tokenBalances,
					// tokenBalances,
					toggleTokenBalanceUpdate,
					// toggleTokenBalanceUpdate,
					setToggleTokenBalanceUpdate,
					// setToggleTokenBalanceUpdate,
					handleConnect,
					handleConnect,
					handleDisconnect,
					handleDisconnect,
					wallets: AR_WALLETS,
					wallets: AR_WALLETS,
@@ -367,7 +365,7 @@ export function ArweaveProvider(props: ArweaveProviderProps) {
					profile,
					profile,
					toggleProfileUpdate,
					toggleProfileUpdate,
					setToggleProfileUpdate,
					setToggleProfileUpdate,
					vouch,
					// vouch,
				}}
				}}
			>
			>
				{props.children}
				{props.children}
Diff for:‎src/providers/PermawebProvider.tsx
+294
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,294 @@
import React from 'react';
import PermawebLibs, { ProfileType } from '@permaweb/libs';
import Arweave from 'arweave';
import { connect, createSigner } from '@permaweb/aoconnect';
import AOProfile from '@permaweb/aoprofile';
import { Loader } from 'components/atoms/Loader';
import { Panel } from 'components/molecules/Panel';
import { ProfileManage } from 'components/organisms/ProfileManage';
import { AO, STORAGE } from 'helpers/config';
import { useArweaveProvider } from './ArweaveProvider';
import { useLanguageProvider } from './LanguageProvider';
interface PermawebContextState {
	libs: any;
	deps: any;
	profile: ProfileType;
	showProfileManager: boolean;
	setShowProfileManager: (toggle: boolean) => void;
	tokenBalances: { [address: string]: { profileBalance: number; walletBalance: number } } | null;
	toggleTokenBalanceUpdate: boolean;
	setToggleTokenBalanceUpdate: (toggleUpdate: boolean) => void;
	handleInitialProfileCache: (address: string, profileId: string) => void;
	refreshProfile: () => void;
}
const DEFAULT_CONTEXT = {
	libs: null,
	deps: null,
	profile: null,
	showProfileManager: false,
	setShowProfileManager(_toggle: boolean) {},
	tokenBalances: null,
	toggleTokenBalanceUpdate: false,
	setToggleTokenBalanceUpdate(_toggleUpdate: boolean) {},
	handleInitialProfileCache(_address: string, _profileId: string) {},
	refreshProfile() {},
};
const PermawebContext = React.createContext<PermawebContextState>(DEFAULT_CONTEXT);
export function usePermawebProvider(): PermawebContextState {
	return React.useContext(PermawebContext);
}
// TODO: Reset profile on arProvider.wallet change / disconnect
export function PermawebProvider(props: { children: React.ReactNode }) {
	const arProvider = useArweaveProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const [libs, setLibs] = React.useState<any>(null);
	const [deps, setDeps] = React.useState<any>(null);
	const [profile, setProfile] = React.useState<ProfileType | null>(null);
	const [showProfileManager, setShowProfileManager] = React.useState<boolean>(false);
	const [refreshProfileTrigger, setRefreshProfileTrigger] = React.useState<boolean>(false);
	const [profilePending, setProfilePending] = React.useState<boolean>(false);
	const [tokenBalances, setTokenBalances] = React.useState<{
		[address: string]: { profileBalance: number; walletBalance: number };
	} | null>({
		[AO.defaultToken]: { profileBalance: null, walletBalance: null },
		[AO.pixl]: { profileBalance: null, walletBalance: null },
	});
	const [toggleTokenBalanceUpdate, setToggleTokenBalanceUpdate] = React.useState<boolean>(false);
	React.useEffect(() => {
		const deps = {
			ao: connect({ MODE: 'legacy' }),
			arweave: Arweave.init({}),
			signer: arProvider.wallet ? createSigner(arProvider.wallet) : null,
		};
		setLibs(PermawebLibs.init(deps));
		setDeps(deps);
	}, [arProvider.wallet]);
	React.useEffect(() => {
		(async function () {
			if (arProvider.walletAddress) {
				const cachedProfile = getCachedProfile(arProvider.walletAddress);
				if (cachedProfile) {
					if (cachedProfile.status && cachedProfile.status === 'pending') {
						setProfilePending(true);
						setProfile(cachedProfile);
						return;
					}
					setProfile(cachedProfile);
				}
				await new Promise((r) => setTimeout(r, 2000));
				setProfile(await resolveProfile());
			}
		})();
	}, [arProvider.walletAddress]);
	React.useEffect(() => {
		(async function () {
			if (arProvider.walletAddress && profilePending) {
				const cachedProfile = getCachedProfile(arProvider.walletAddress);
				if (cachedProfile?.id) {
					try {
						const fetchedProfile = await libs.getProfileById(cachedProfile.id);
						setProfile(fetchedProfile);
						cacheProfile(arProvider.walletAddress, fetchedProfile);
					} catch (e: any) {
						console.error(e);
					}
					setProfilePending(false);
				}
			}
		})();
	}, [arProvider.walletAddress, profilePending]);
	React.useEffect(() => {
		(async function () {
			if (arProvider.wallet && arProvider.walletAddress) {
				const fetchProfileUntilChange = async () => {
					let changeDetected = false;
					let tries = 0;
					const maxTries = 10;
					while (!changeDetected && tries < maxTries) {
						try {
							const existingProfile = profile;
							const newProfile = await resolveProfile();
							if (JSON.stringify(existingProfile) !== JSON.stringify(newProfile)) {
								setProfile(newProfile);
								cacheProfile(arProvider.walletAddress, newProfile);
								changeDetected = true;
							} else {
								await new Promise((resolve) => setTimeout(resolve, 1000));
								tries++;
							}
						} catch (error) {
							console.error(error);
							break;
						}
					}
					if (!changeDetected) {
						console.warn(`No changes detected after ${maxTries} attempts`);
					}
				};
				await fetchProfileUntilChange();
			}
		})();
	}, [refreshProfileTrigger]);
	React.useEffect(() => {
		const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
		const fetchBalances = async () => {
			if (!arProvider.walletAddress || !profile?.id) return;
			try {
				const defaultTokenWalletBalance = await libs.readProcess({
					processId: AO.defaultToken,
					action: 'Balance',
					tags: [{ name: 'Recipient', value: arProvider.walletAddress }],
				});
				await sleep(500);
				const pixlTokenWalletBalance = await libs.readProcess({
					processId: AO.pixl,
					action: 'Balance',
					tags: [{ name: 'Recipient', value: arProvider.walletAddress }],
				});
				await sleep(500);
				const defaultTokenProfileBalance = await libs.readProcess({
					processId: AO.defaultToken,
					action: 'Balance',
					tags: [{ name: 'Recipient', value: profile.id }],
				});
				await sleep(500);
				const pixlTokenProfileBalance = await libs.readProcess({
					processId: AO.pixl,
					action: 'Balance',
					tags: [{ name: 'Recipient', value: profile.id }],
				});
				setTokenBalances((prevBalances) => ({
					...prevBalances,
					[AO.defaultToken]: {
						...prevBalances[AO.defaultToken],
						walletBalance: defaultTokenWalletBalance ?? null,
						profileBalance: defaultTokenProfileBalance ?? null,
					},
					[AO.pixl]: {
						...prevBalances[AO.pixl],
						walletBalance: pixlTokenWalletBalance ?? null,
						profileBalance: pixlTokenProfileBalance ?? null,
					},
				}));
			} catch (e) {
				console.error(e);
			}
		};
		fetchBalances();
	}, [arProvider.walletAddress, profile, toggleTokenBalanceUpdate]);
	async function resolveProfile() {
		try {
			let fetchedProfile: any;
			const cachedProfile = getCachedProfile(arProvider.walletAddress);
			let isLegacyProfile = false;
			if (cachedProfile?.id && !cachedProfile.isLegacyProfile)
				fetchedProfile = await libs.getProfileById(cachedProfile.id);
			else {
				fetchedProfile = await libs.getProfileByWalletAddress(arProvider.walletAddress);
				if (!fetchedProfile?.id) {
					console.log('Fetching legacy profile...');
					isLegacyProfile = true;
					const aoProfile = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });
					fetchedProfile = await aoProfile.getProfileByWalletAddress({ address: arProvider.walletAddress });
				}
			}
			let profileToUse = { ...fetchedProfile, isLegacyProfile };
			if (!fetchedProfile?.id && cachedProfile) profileToUse = cachedProfile;
			cacheProfile(arProvider.walletAddress, profileToUse);
			return profileToUse;
		} catch (e: any) {
			console.error(e);
		}
	}
	function getCachedProfile(address: string) {
		const cached = localStorage.getItem(STORAGE.profile(address));
		return cached ? JSON.parse(cached) : null;
	}
	function cacheProfile(address: string, profileData: any) {
		localStorage.setItem(STORAGE.profile(address), JSON.stringify(profileData));
	}
	function handleInitialProfileCache(address: string, profileId: string) {
		cacheProfile(address, { id: profileId, status: 'pending' });
		setProfilePending(true);
	}
	return (
		<PermawebContext.Provider
			value={{
				libs: libs,
				deps: deps,
				profile: profile,
				showProfileManager,
				setShowProfileManager,
				tokenBalances,
				toggleTokenBalanceUpdate,
				setToggleTokenBalanceUpdate,
				handleInitialProfileCache: (address: string, profileId: string) =>
					handleInitialProfileCache(address, profileId),
				refreshProfile: () => setRefreshProfileTrigger((prev) => !prev),
			}}
		>
			{props.children}
			{showProfileManager && (
				<Panel
					open={showProfileManager}
					header={profile && profile.id ? language.editProfile : `${language.createProfile}!`}
					handleClose={() => setShowProfileManager(false)}
					width={575}
					closeHandlerDisabled
				>
					<ProfileManage
						profile={profile && profile.id ? profile : null}
						handleClose={() => setShowProfileManager(false)}
						handleUpdate={null}
					/>
				</Panel>
			)}
			{profilePending && <Loader message={`${language.waitingForProfile}...`} />}
		</PermawebContext.Provider>
	);
}
Diff for:‎src/views/Asset/AssetAction/AssetAction.tsx
+8
-6
Original file line number	Original file line	Diff line number	Diff line change
@@ -3,7 +3,7 @@ import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { ReactSVG } from 'react-svg';


import { getAndUpdateRegistryProfiles } from 'api';
import { getProfiles } from 'api';


import * as GS from 'app/styles';
import * as GS from 'app/styles';
import { Button } from 'components/atoms/Button';
import { Button } from 'components/atoms/Button';
@@ -24,6 +24,7 @@ import * as windowUtils from 'helpers/window';
import { useAppProvider } from 'providers/AppProvider';
import { useAppProvider } from 'providers/AppProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { RootState } from 'store';
import { RootState } from 'store';


import { AssetActionActivity } from './AssetActionActivity';
import { AssetActionActivity } from './AssetActionActivity';
@@ -40,6 +41,7 @@ export default function AssetAction(props: IProps) {
	const profilesReducer = useSelector((state: RootState) => state.profilesReducer);
	const profilesReducer = useSelector((state: RootState) => state.profilesReducer);


	const appProvider = useAppProvider();
	const appProvider = useAppProvider();
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -140,7 +142,7 @@ export default function AssetAction(props: IProps) {
						orders: props.asset.orders,
						orders: props.asset.orders,
					};
					};


					let profiles: any[] = await getAndUpdateRegistryProfiles(addressGroups[ownersCursor]);
					let profiles: any[] = await getProfiles(addressGroups[ownersCursor]);
					let owners = getOwners(asset, profiles);
					let owners = getOwners(asset, profiles);


					if (owners) {
					if (owners) {
@@ -173,7 +175,7 @@ export default function AssetAction(props: IProps) {
					}))
					}))
				);
				);


				let profiles: any[] = await getAndUpdateRegistryProfiles(sortedOrders.map((order: any) => order.creator));
				let profiles: any[] = await getProfiles(sortedOrders.map((order: any) => order.creator));
				const mappedListings = sortedOrders.map((order: any) => {
				const mappedListings = sortedOrders.map((order: any) => {
					let currentProfile = null;
					let currentProfile = null;
					if (profiles) {
					if (profiles) {
@@ -229,8 +231,8 @@ export default function AssetAction(props: IProps) {


	function getOwnerOrder(listing: ListingType) {
	function getOwnerOrder(listing: ListingType) {
		if (!arProvider.walletAddress) return false;
		if (!arProvider.walletAddress) return false;
		if (!arProvider.profile || !arProvider.profile.id) return false;
		if (!permawebProvider.profile || !permawebProvider.profile.id) return false;
		return listing.creator === arProvider.profile.id;
		return listing.creator === permawebProvider.profile.id;
	}
	}


	const copyPageUrl = React.useCallback(async () => {
	const copyPageUrl = React.useCallback(async () => {
@@ -381,7 +383,7 @@ export default function AssetAction(props: IProps) {
				</>
				</>
			);
			);
		} else return null;
		} else return null;
	}, [currentListings, showCurrentListingsModal, mobile, arProvider.profile]);
	}, [currentListings, showCurrentListingsModal, mobile, permawebProvider.profile]);


	function getCurrentTab() {
	function getCurrentTab() {
		switch (currentTab) {
		switch (currentTab) {
Diff for:‎src/views/Asset/AssetAction/AssetActionMarket/AssetActionMarketOrders/AssetActionMarketOrders.tsx
+42
-32
Original file line number	Original file line	Diff line number	Diff line change
@@ -27,6 +27,7 @@ import * as windowUtils from 'helpers/window';
import { useAppProvider } from 'providers/AppProvider';
import { useAppProvider } from 'providers/AppProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';
import { RootState } from 'store';
import { RootState } from 'store';
import * as streakActions from 'store/streaks/actions';
import * as streakActions from 'store/streaks/actions';


@@ -39,6 +40,7 @@ export default function AssetActionMarketOrders(props: IProps) {
	const dispatch = useDispatch();
	const dispatch = useDispatch();


	const appProvider = useAppProvider();
	const appProvider = useAppProvider();
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -107,8 +109,8 @@ export default function AssetActionMarketOrders(props: IProps) {


					setTotalAssetBalance(calculatedTotalBalance);
					setTotalAssetBalance(calculatedTotalBalance);


					if (arProvider.walletAddress && arProvider.profile && arProvider.profile.id) {
					if (arProvider.walletAddress && permawebProvider.profile && permawebProvider.profile.id) {
						const profileBalance = Number(props.asset.state.balances[arProvider.profile.id]);
						const profileBalance = Number(props.asset.state.balances[permawebProvider.profile.id]);
						const walletBalance = Number(props.asset.state.balances[arProvider.walletAddress]);
						const walletBalance = Number(props.asset.state.balances[arProvider.walletAddress]);


						let calculatedOwnerBalance = profileBalance;
						let calculatedOwnerBalance = profileBalance;
@@ -150,7 +152,7 @@ export default function AssetActionMarketOrders(props: IProps) {
				setTransferDenomination(Math.pow(10, currenciesReducer[orderCurrency].Denomination));
				setTransferDenomination(Math.pow(10, currenciesReducer[orderCurrency].Denomination));
			}
			}
		}
		}
	}, [props.asset, arProvider.walletAddress, arProvider.profile, denomination, ucmReducer]);
	}, [props.asset, arProvider.walletAddress, permawebProvider.profile, denomination, ucmReducer]);


	React.useEffect(() => {
	React.useEffect(() => {
		switch (props.type) {
		switch (props.type) {
@@ -169,27 +171,29 @@ export default function AssetActionMarketOrders(props: IProps) {


	React.useEffect(() => {
	React.useEffect(() => {
		if (props.type === 'buy') {
		if (props.type === 'buy') {
			if (!arProvider.tokenBalances || !arProvider.tokenBalances[AO.defaultToken]) {
			if (!permawebProvider.tokenBalances || !permawebProvider.tokenBalances[AO.defaultToken]) {
				setInsufficientBalance(true);
				setInsufficientBalance(true);
			} else {
			} else {
				let orderAmount = BigInt(getTotalOrderAmount());
				let orderAmount = BigInt(getTotalOrderAmount());
				if (denomination) {
				if (denomination) {
					orderAmount = BigInt(orderAmount) / BigInt(denomination);
					orderAmount = BigInt(orderAmount) / BigInt(denomination);
				}
				}
				setInsufficientBalance(Number(getTotalTokenBalance(arProvider.tokenBalances[AO.defaultToken])) < orderAmount);
				setInsufficientBalance(
					Number(getTotalTokenBalance(permawebProvider.tokenBalances[AO.defaultToken])) < orderAmount
				);
			}
			}
		} else {
		} else {
			setInsufficientBalance(false);
			setInsufficientBalance(false);
		}
		}
	}, [arProvider.tokenBalances, props.type, props.asset, currentOrderQuantity, denomination]);
	}, [permawebProvider.tokenBalances, props.type, props.asset, currentOrderQuantity, denomination]);


	React.useEffect(() => {
	React.useEffect(() => {
		if (currentOrderQuantity) setCurrentOrderQuantity('');
		if (currentOrderQuantity) setCurrentOrderQuantity('');
		if (unitPrice) setUnitPrice('');
		if (unitPrice) setUnitPrice('');
	}, [props.type]);
	}, [props.type]);


	async function handleSubmit() {
	async function handleSubmit() {
		if (props.asset && arProvider.wallet && arProvider.profile?.id) {
		if (props.asset && arProvider.wallet && permawebProvider.profile?.id) {
			try {
			try {
				handleStatusUpdate(true, false, false, 'Transferring balance from wallet to profile...');
				handleStatusUpdate(true, false, false, 'Transferring balance from wallet to profile...');
				await handleWalletToProfileTransfer();
				await handleWalletToProfileTransfer();
@@ -226,20 +230,26 @@ export default function AssetActionMarketOrders(props: IProps) {
			}
			}


			try {
			try {
				let action = 'Run-Action';
				if (permawebProvider.profile.isLegacyProfile) action = 'Transfer';
				const data: any = {
				const data: any = {
					orderbookId: AO.ucm,
					orderbookId: AO.ucm,
					profileId: arProvider.profile.id,
					creatorId: permawebProvider.profile.id,
					dominantToken: dominantToken,
					dominantToken: dominantToken,
					swapToken: swapToken,
					swapToken: swapToken,
					quantity: transferQuantity,
					quantity: transferQuantity,
					action: action,
				};
				};


				console.log(data);
				if (unitPrice) data.unitPrice = unitPrice.toString();
				if (unitPrice) data.unitPrice = unitPrice.toString();
				if (denomination && denomination > 1) data.denomination = denomination.toString();
				if (denomination && denomination > 1) data.denomination = denomination.toString();


				const orderId = await createOrder(
				const orderId = await createOrder(
					permawebProvider.deps,
					data,
					data,
					arProvider.wallet,
					(args: { processing: boolean; success: boolean; message: string }) => {
					(args: { processing: boolean; success: boolean; message: string }) => {
						handleStatusUpdate(args.processing, !args.processing, args.success, args.message);
						handleStatusUpdate(args.processing, !args.processing, args.success, args.message);
					}
					}
@@ -255,7 +265,7 @@ export default function AssetActionMarketOrders(props: IProps) {
					dispatch(streakActions.setStreaks(streaks.Streaks));
					dispatch(streakActions.setStreaks(streaks.Streaks));
				}
				}
				arProvider.setToggleProfileUpdate(!arProvider.toggleProfileUpdate);
				arProvider.setToggleProfileUpdate(!arProvider.toggleProfileUpdate);
				arProvider.setToggleTokenBalanceUpdate(!arProvider.toggleTokenBalanceUpdate);
				permawebProvider.setToggleTokenBalanceUpdate(!permawebProvider.toggleTokenBalanceUpdate);
			} catch (e: any) {
			} catch (e: any) {
				handleStatusUpdate(false, true, false, e.message ?? 'Error creating order in UCM');
				handleStatusUpdate(false, true, false, e.message ?? 'Error creating order in UCM');
			}
			}
@@ -310,8 +320,8 @@ export default function AssetActionMarketOrders(props: IProps) {
			switch (props.type) {
			switch (props.type) {
				case 'buy':
				case 'buy':
					processId = AO.defaultToken;
					processId = AO.defaultToken;
					profileBalance = BigInt(arProvider.tokenBalances[AO.defaultToken].profileBalance);
					profileBalance = BigInt(permawebProvider.tokenBalances[AO.defaultToken].profileBalance);
					walletBalance = BigInt(arProvider.tokenBalances[AO.defaultToken].walletBalance);
					walletBalance = BigInt(permawebProvider.tokenBalances[AO.defaultToken].walletBalance);
					break;
					break;
				case 'sell':
				case 'sell':
				case 'transfer':
				case 'transfer':
@@ -341,7 +351,7 @@ export default function AssetActionMarketOrders(props: IProps) {
						wallet: arProvider.wallet,
						wallet: arProvider.wallet,
						tags: [
						tags: [
							{ name: 'Quantity', value: differenceNeeded.toString() },
							{ name: 'Quantity', value: differenceNeeded.toString() },
							{ name: 'Recipient', value: arProvider.profile.id },
							{ name: 'Recipient', value: permawebProvider.profile.id },
						],
						],
						data: null,
						data: null,
						responses: ['Transfer-Success', 'Transfer-Error'],
						responses: ['Transfer-Success', 'Transfer-Error'],
@@ -358,7 +368,7 @@ export default function AssetActionMarketOrders(props: IProps) {
		if (transferRecipient && checkValidAddress(transferRecipient)) {
		if (transferRecipient && checkValidAddress(transferRecipient)) {
			try {
			try {
				const transferId = await message({
				const transferId = await message({
					process: arProvider.profile.id,
					process: permawebProvider.profile.id,
					signer: createDataItemSigner(arProvider.wallet),
					signer: createDataItemSigner(arProvider.wallet),
					tags: [
					tags: [
						{ name: 'Action', value: 'Transfer' },
						{ name: 'Action', value: 'Transfer' },
@@ -369,7 +379,7 @@ export default function AssetActionMarketOrders(props: IProps) {
				});
				});


				const { Error } = await result({
				const { Error } = await result({
					process: arProvider.profile.id,
					process: permawebProvider.profile.id,
					message: transferId,
					message: transferId,
				});
				});


@@ -511,7 +521,7 @@ export default function AssetActionMarketOrders(props: IProps) {


	function getActionDisabled() {
	function getActionDisabled() {
		if (!arProvider.walletAddress) return true;
		if (!arProvider.walletAddress) return true;
		if (!arProvider.profile || !arProvider.profile.id) return true;
		if (!permawebProvider.profile || !permawebProvider.profile.id) return true;
		if (orderLoading) return true;
		if (orderLoading) return true;
		if (!orderProcessed && appProvider.ucm.updating) return true;
		if (!orderProcessed && appProvider.ucm.updating) return true;
		if (orderProcessed && !orderSuccess) return true;
		if (orderProcessed && !orderSuccess) return true;
@@ -794,8 +804,8 @@ export default function AssetActionMarketOrders(props: IProps) {
						label={language.assetQuantityInfo}
						label={language.assetQuantityInfo}
						disabled={
						disabled={
							!arProvider.walletAddress ||
							!arProvider.walletAddress ||
							!arProvider.profile ||
							!permawebProvider.profile ||
							!arProvider.profile.id ||
							!permawebProvider.profile.id ||
							maxOrderQuantity <= 0 ||
							maxOrderQuantity <= 0 ||
							appProvider.ucm.updating ||
							appProvider.ucm.updating ||
							orderLoading
							orderLoading
@@ -813,8 +823,8 @@ export default function AssetActionMarketOrders(props: IProps) {
							handlePress={() => setCurrentOrderQuantity(maxOrderQuantity)}
							handlePress={() => setCurrentOrderQuantity(maxOrderQuantity)}
							disabled={
							disabled={
								!arProvider.walletAddress ||
								!arProvider.walletAddress ||
								!arProvider.profile ||
								!permawebProvider.profile ||
								!arProvider.profile.id ||
								!permawebProvider.profile.id ||
								appProvider.ucm.updating ||
								appProvider.ucm.updating ||
								maxOrderQuantity <= 0
								maxOrderQuantity <= 0
							}
							}
@@ -839,8 +849,8 @@ export default function AssetActionMarketOrders(props: IProps) {
									label={`${language.assetQuantity} (${language.max}: ${formatCount(maxOrderQuantity.toString())})`}
									label={`${language.assetQuantity} (${language.max}: ${formatCount(maxOrderQuantity.toString())})`}
									disabled={
									disabled={
										!arProvider.walletAddress ||
										!arProvider.walletAddress ||
										!arProvider.profile ||
										!permawebProvider.profile ||
										!arProvider.profile.id ||
										!permawebProvider.profile.id ||
										appProvider.ucm.updating ||
										appProvider.ucm.updating ||
										maxOrderQuantity <= 0 ||
										maxOrderQuantity <= 0 ||
										orderLoading
										orderLoading
@@ -864,8 +874,8 @@ export default function AssetActionMarketOrders(props: IProps) {
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUnitPriceInput(e)}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUnitPriceInput(e)}
										disabled={
										disabled={
											!arProvider.walletAddress ||
											!arProvider.walletAddress ||
											!arProvider.profile ||
											!permawebProvider.profile ||
											!arProvider.profile.id ||
											!permawebProvider.profile.id ||
											Number(currentOrderQuantity) <= 0 ||
											Number(currentOrderQuantity) <= 0 ||
											appProvider.ucm.updating ||
											appProvider.ucm.updating ||
											orderLoading
											orderLoading
@@ -887,8 +897,8 @@ export default function AssetActionMarketOrders(props: IProps) {
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRecipientInput(e)}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRecipientInput(e)}
										disabled={
										disabled={
											!arProvider.walletAddress ||
											!arProvider.walletAddress ||
											!arProvider.profile ||
											!permawebProvider.profile ||
											!arProvider.profile.id ||
											!permawebProvider.profile.id ||
											orderLoading ||
											orderLoading ||
											appProvider.ucm.updating
											appProvider.ucm.updating
										}
										}
@@ -904,8 +914,8 @@ export default function AssetActionMarketOrders(props: IProps) {
										<span>{language.connectToContinue}</span>
										<span>{language.connectToContinue}</span>
									</S.MessageWrapper>
									</S.MessageWrapper>
								)}
								)}
								{!arProvider.profile ||
								{!permawebProvider.profile ||
									(!arProvider.profile.id && (
									(!permawebProvider.profile.id && (
										<S.MessageWrapper>
										<S.MessageWrapper>
											<span>{language.createProfileToContinue}</span>
											<span>{language.createProfileToContinue}</span>
										</S.MessageWrapper>
										</S.MessageWrapper>
@@ -915,16 +925,16 @@ export default function AssetActionMarketOrders(props: IProps) {
										<span>{`${language.ordersUpdating}...`}</span>
										<span>{`${language.ordersUpdating}...`}</span>
									</S.MessageWrapper>
									</S.MessageWrapper>
								)}
								)}
								{arProvider.tokenBalances &&
								{permawebProvider.tokenBalances &&
									getTotalTokenBalance(arProvider.tokenBalances[AO.defaultToken]) !== null &&
									getTotalTokenBalance(permawebProvider.tokenBalances[AO.defaultToken]) !== null &&
									insufficientBalance && (
									insufficientBalance && (
										<S.MessageWrapper warning>
										<S.MessageWrapper warning>
											<span>{language.insufficientBalance}</span>
											<span>{language.insufficientBalance}</span>
										</S.MessageWrapper>
										</S.MessageWrapper>
									)}
									)}
								{arProvider.wallet &&
								{arProvider.wallet &&
									arProvider.profile?.id &&
									permawebProvider.profile?.id &&
									getTotalTokenBalance(arProvider.tokenBalances[AO.defaultToken]) === null && (
									getTotalTokenBalance(permawebProvider.tokenBalances[AO.defaultToken]) === null && (
										<S.MessageWrapper>
										<S.MessageWrapper>
											<span>{`${language.fetchingTokenbalances}...`}</span>
											<span>{`${language.fetchingTokenbalances}...`}</span>
										</S.MessageWrapper>
										</S.MessageWrapper>
Diff for:‎src/views/Asset/AssetAction/AssetActionOwners/AssetActionsOwners.tsx
+4
-4
Original file line number	Original file line	Diff line number	Diff line change
@@ -4,12 +4,12 @@ import { useSelector } from 'react-redux';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useTheme } from 'styled-components';
import { useTheme } from 'styled-components';


import { getAndUpdateRegistryProfiles } from 'api';
import { getProfiles } from 'api';


import { Loader } from 'components/atoms/Loader';
import { Loader } from 'components/atoms/Loader';
import { OwnerLine } from 'components/molecules/OwnerLine';
import { OwnerLine } from 'components/molecules/OwnerLine';
import { AO } from 'helpers/config';
import { AO } from 'helpers/config';
import { OwnerType, RegistryProfileType } from 'helpers/types';
import { OwnerType } from 'helpers/types';
import { formatAddress, formatPercentage, getOwners } from 'helpers/utils';
import { formatAddress, formatPercentage, getOwners } from 'helpers/utils';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { RootState } from 'store';
import { RootState } from 'store';
@@ -60,11 +60,11 @@ export default function AssetActionsOwners(props: IProps) {
				if (owners.length) {
				if (owners.length) {
					try {
					try {
						const addresses = [...updatedOwners].splice(0, MAX_OWNER_LENGTH).map((owner: OwnerType) => owner.address);
						const addresses = [...updatedOwners].splice(0, MAX_OWNER_LENGTH).map((owner: OwnerType) => owner.address);
						const profiles = await getAndUpdateRegistryProfiles(addresses);
						const profiles = await getProfiles(addresses);


						updatedOwners = updatedOwners
						updatedOwners = updatedOwners
							.map((owner: OwnerType) => {
							.map((owner: OwnerType) => {
								const profile = profiles.find((profile: RegistryProfileType) => {
								const profile = profiles.find((profile: any) => {
									return profile.id === owner.address;
									return profile.id === owner.address;
								});
								});
								return { ...owner, profile };
								return { ...owner, profile };
Diff for:‎src/views/Campaign_1/index.tsx
+21
-15
Original file line number	Original file line	Diff line number	Diff line change
@@ -14,6 +14,7 @@ import { formatAddress } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLocationProvider } from 'providers/LocationProvider';
import { useLocationProvider } from 'providers/LocationProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';
import * as S from './styles';


@@ -56,6 +57,7 @@ export function getCampaignBackground() {
}
}


export default function Campaign() {
export default function Campaign() {
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const audioRef = React.useRef<HTMLAudioElement | null>(null);
	const audioRef = React.useRef<HTMLAudioElement | null>(null);
@@ -154,15 +156,15 @@ export default function Campaign() {


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
			if (arProvider.profile && arProvider.profile.id) {
			if (permawebProvider.profile && permawebProvider.profile.id) {
				try {
				try {
					await checkClaimStatus('Main', null);
					await checkClaimStatus('Main', null);
				} catch (e) {
				} catch (e) {
					console.error(e);
					console.error(e);
				}
				}
			}
			}
		})();
		})();
	}, [arProvider.walletAddress, arProvider.profile]);
	}, [arProvider.walletAddress, permawebProvider.profile]);


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
@@ -177,7 +179,7 @@ export default function Campaign() {


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
			if (currentView && arProvider.walletAddress && arProvider.profile && arProvider.profile.id) {
			if (currentView && arProvider.walletAddress && permawebProvider.profile && permawebProvider.profile.id) {
				switch (currentView) {
				switch (currentView) {
					case 'SubSet':
					case 'SubSet':
						setFetching(true);
						setFetching(true);
@@ -198,14 +200,14 @@ export default function Campaign() {
				}
				}
			}
			}
		})();
		})();
	}, [currentView, arProvider.walletAddress, arProvider.profile, toggleClaimCheck]);
	}, [currentView, arProvider.walletAddress, permawebProvider.profile, toggleClaimCheck]);


	async function checkClaimStatus(type: 'SubSet' | 'Main', userAddress: string | null) {
	async function checkClaimStatus(type: 'SubSet' | 'Main', userAddress: string | null) {
		const ids = type === 'SubSet' && assets && assets.length > 0 ? assets.map((asset) => asset.id) : [MAIN_PROCESS];
		const ids = type === 'SubSet' && assets && assets.length > 0 ? assets.map((asset) => asset.id) : [MAIN_PROCESS];


		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		if (arProvider.profile && arProvider.profile.id) {
		if (permawebProvider.profile && permawebProvider.profile.id) {
			tags.push({ name: 'ProfileId', value: arProvider.profile.id });
			tags.push({ name: 'ProfileId', value: permawebProvider.profile.id });
		}
		}
		if (userAddress) {
		if (userAddress) {
			tags.push({ name: 'UserAddress', value: userAddress });
			tags.push({ name: 'UserAddress', value: userAddress });
@@ -265,8 +267,8 @@ export default function Campaign() {
		}
		}


		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		if (arProvider.profile && arProvider.profile.id) {
		if (permawebProvider.profile && permawebProvider.profile.id) {
			tags.push({ name: 'ProfileId', value: arProvider.profile.id });
			tags.push({ name: 'ProfileId', value: permawebProvider.profile.id });
		}
		}


		try {
		try {
@@ -392,17 +394,17 @@ export default function Campaign() {
			label = language.connectWallet;
			label = language.connectWallet;
			action = () => arProvider.setWalletModalVisible(true);
			action = () => arProvider.setWalletModalVisible(true);
		} else {
		} else {
			if (arProvider.profile) {
			if (permawebProvider.profile) {
				if (arProvider.profile.id) {
				if (permawebProvider.profile.id) {
					label = arProvider.profile.username;
					label = permawebProvider.profile.username;
				} else {
				} else {
					label = language.createProfile;
					label = language.createProfile;
					action = () => setShowProfileManage(true);
					action = () => setShowProfileManage(true);
				}
				}
			} else label = formatAddress(arProvider.walletAddress, false);
			} else label = formatAddress(arProvider.walletAddress, false);
		}
		}


		const claimed = arProvider.profile && arProvider.profile.id !== null;
		const claimed = permawebProvider.profile && permawebProvider.profile.id !== null;


		return (
		return (
			<S.Subheader>
			<S.Subheader>
@@ -417,7 +419,7 @@ export default function Campaign() {
				</S.ProfileWrapper>
				</S.ProfileWrapper>
			</S.Subheader>
			</S.Subheader>
		);
		);
	}, [arProvider.profile, arProvider.walletAddress]);
	}, [permawebProvider.profile, arProvider.walletAddress]);


	const body = React.useMemo(() => {
	const body = React.useMemo(() => {
		if (!arProvider.walletAddress) {
		if (!arProvider.walletAddress) {
@@ -559,12 +561,16 @@ export default function Campaign() {
				{showProfileManage && (
				{showProfileManage && (
					<Panel
					<Panel
						open={showProfileManage}
						open={showProfileManage}
						header={arProvider.profile && arProvider.profile.id ? language.editProfile : `${language.createProfile}!`}
						header={
							permawebProvider.profile && permawebProvider.profile.id
								? language.editProfile
								: `${language.createProfile}!`
						}
						handleClose={() => setShowProfileManage(false)}
						handleClose={() => setShowProfileManage(false)}
					>
					>
						<S.PManageWrapper>
						<S.PManageWrapper>
							<ProfileManage
							<ProfileManage
								profile={arProvider.profile && arProvider.profile.id ? arProvider.profile : null}
								profile={permawebProvider.profile && permawebProvider.profile.id ? permawebProvider.profile : null}
								handleClose={() => setShowProfileManage(false)}
								handleClose={() => setShowProfileManage(false)}
								handleUpdate={null}
								handleUpdate={null}
							/>
							/>
Diff for:‎src/views/Campaign_2/index.tsx
+18
-12
Original file line number	Original file line	Diff line number	Diff line change
@@ -12,6 +12,7 @@ import { getTxEndpoint } from 'helpers/endpoints';
import { formatAddress, formatCount } from 'helpers/utils';
import { formatAddress, formatCount } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';
import * as S from './styles';


@@ -33,6 +34,7 @@ const CURRENT_VERSION = '2.5';
const DRIVE_CONFIG_KEY = 'drive-config';
const DRIVE_CONFIG_KEY = 'drive-config';


export default function Campaign() {
export default function Campaign() {
	const permawebProvider = usePermawebProvider();
	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -127,15 +129,15 @@ export default function Campaign() {


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
			if (arProvider.profile && arProvider.profile.id) {
			if (permawebProvider.profile && permawebProvider.profile.id) {
				try {
				try {
					await checkClaimStatus('Main', null);
					await checkClaimStatus('Main', null);
				} catch (e) {
				} catch (e) {
					console.error(e);
					console.error(e);
				}
				}
			}
			}
		})();
		})();
	}, [arProvider.walletAddress, arProvider.profile, toggleClaimCheck]);
	}, [arProvider.walletAddress, permawebProvider.profile, toggleClaimCheck]);


	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
@@ -166,14 +168,14 @@ export default function Campaign() {
				}
				}
			}
			}
		})();
		})();
	}, [currentView, arProvider.walletAddress, arProvider.profile, toggleClaimCheck]);
	}, [currentView, arProvider.walletAddress, permawebProvider.profile, toggleClaimCheck]);


	async function checkClaimStatus(type: 'SubSet' | 'Main', userAddress: string | null) {
	async function checkClaimStatus(type: 'SubSet' | 'Main', userAddress: string | null) {
		const ids = type === 'SubSet' && assets && assets.length > 0 ? assets.map((asset) => asset.id) : [MAIN_PROCESS];
		const ids = type === 'SubSet' && assets && assets.length > 0 ? assets.map((asset) => asset.id) : [MAIN_PROCESS];


		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		if (arProvider.profile && arProvider.profile.id) {
		if (permawebProvider.profile && permawebProvider.profile.id) {
			tags.push({ name: 'ProfileId', value: arProvider.profile.id });
			tags.push({ name: 'ProfileId', value: permawebProvider.profile.id });
		}
		}
		if (userAddress) {
		if (userAddress) {
			tags.push({ name: 'UserAddress', value: userAddress });
			tags.push({ name: 'UserAddress', value: userAddress });
@@ -239,7 +241,7 @@ export default function Campaign() {
		}
		}


		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		const tags = [{ name: 'Address', value: arProvider.walletAddress }];
		tags.push({ name: 'ProfileId', value: arProvider.profile?.id ?? arProvider.walletAddress });
		tags.push({ name: 'ProfileId', value: permawebProvider.profile?.id ?? arProvider.walletAddress });


		try {
		try {
			const response = await messageResult({
			const response = await messageResult({
@@ -342,9 +344,9 @@ export default function Campaign() {
			label = language.connectWallet;
			label = language.connectWallet;
			action = () => arProvider.setWalletModalVisible(true);
			action = () => arProvider.setWalletModalVisible(true);
		} else {
		} else {
			if (arProvider.profile) {
			if (permawebProvider.profile) {
				if (arProvider.profile.id) {
				if (permawebProvider.profile.id) {
					label = arProvider.profile.username;
					label = permawebProvider.profile.username;
				} else {
				} else {
					label = language.createProfile;
					label = language.createProfile;
					action = () => setShowProfileManage(true);
					action = () => setShowProfileManage(true);
@@ -370,7 +372,7 @@ export default function Campaign() {
				</S.ProfileWrapper>
				</S.ProfileWrapper>
			</S.Subheader>
			</S.Subheader>
		);
		);
	}, [arProvider.profile, arProvider.walletAddress]);
	}, [permawebProvider.profile, arProvider.walletAddress]);


	const body = React.useMemo(() => {
	const body = React.useMemo(() => {
		if (!arProvider.walletAddress) {
		if (!arProvider.walletAddress) {
@@ -530,12 +532,16 @@ export default function Campaign() {
				{showProfileManage && (
				{showProfileManage && (
					<Panel
					<Panel
						open={showProfileManage}
						open={showProfileManage}
						header={arProvider.profile && arProvider.profile.id ? language.editProfile : `${language.createProfile}!`}
						header={
							permawebProvider.profile && permawebProvider.profile.id
								? language.editProfile
								: `${language.createProfile}!`
						}
						handleClose={() => setShowProfileManage(false)}
						handleClose={() => setShowProfileManage(false)}
					>
					>
						<S.PManageWrapper>
						<S.PManageWrapper>
							<ProfileManage
							<ProfileManage
								profile={arProvider.profile && arProvider.profile.id ? arProvider.profile : null}
								profile={permawebProvider.profile && permawebProvider.profile.id ? permawebProvider.profile : null}
								handleClose={() => setShowProfileManage(false)}
								handleClose={() => setShowProfileManage(false)}
								handleUpdate={null}
								handleUpdate={null}
							/>
							/>
Diff for:‎src/views/Docs/DocsDetail/MD/developers.md
+2
-2


Original file line number	Original file line	Diff line number	Diff line change
@@ -54,7 +54,7 @@ Send({


```js
```js
const response = await messageResults({
const response = await messageResults({
	processId: arProvider.profile.id,
	processId: permawebProvider.profile.id,
	action: 'Transfer',
	action: 'Transfer',
	wallet: arProvider.wallet,
	wallet: arProvider.wallet,
	tags: transferTags,
	tags: transferTags,
@@ -116,7 +116,7 @@ try {
}
}


if (processSrc) {
if (processSrc) {
	processSrc = processSrc.replace('[Owner]', `['${arProvider.profile.id}']`);
	processSrc = processSrc.replace('[Owner]', `['${permawebProvider.profile.id}']`);
	processSrc = processSrc.replaceAll('<NAME>', title);
	processSrc = processSrc.replaceAll('<NAME>', title);
	processSrc = processSrc.replaceAll('<TICKER>', 'ATOMIC');
	processSrc = processSrc.replaceAll('<TICKER>', 'ATOMIC');
	processSrc = processSrc.replaceAll('<DENOMINATION>', '1');
	processSrc = processSrc.replaceAll('<DENOMINATION>', '1');
Diff for:‎src/views/Profile/ProfileAssets/ProfileAssets.tsx
+4
-1
Original file line number	Original file line	Diff line number	Diff line change
@@ -12,7 +12,10 @@ const ProfileAssets = React.memo((props: IProps) => {
	React.useEffect(() => {
	React.useEffect(() => {
		(async function () {
		(async function () {
			if (props.profile && !assetIds) {
			if (props.profile && !assetIds) {
				if (props.profile.assets) setAssetIds(props.profile.assets);
				if (props.profile.assets) {
					if (props.profile.isLegacyProfile) setAssetIds(props.profile.assets);
					else setAssetIds(props.profile.assets.map((asset: any) => asset.id));
				}
			}
			}
		})();
		})();
	}, [props.profile]);
	}, [props.profile]);
Diff for:‎src/views/Profile/ProfileCollections/ProfileCollections.tsx
+1
-1
Original file line number	Original file line	Diff line number	Diff line change
@@ -6,7 +6,7 @@ import { IProps } from './types';
export default function ProfileCollections(props: IProps) {
export default function ProfileCollections(props: IProps) {
	return props.address ? (
	return props.address ? (
		<S.Wrapper>
		<S.Wrapper>
			<CollectionsList owner={props.address} />
			<CollectionsList owner={props.address} collectionIds={props.collectionIds} />
		</S.Wrapper>
		</S.Wrapper>
	) : null;
	) : null;
}
}
Diff for:‎src/views/Profile/ProfileCollections/types.ts
+1
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,3 +1,4 @@
export interface IProps {
export interface IProps {
	address: string;
	address: string;
	collectionIds?: string[];
}
}
Diff for:‎src/views/Profile/ProfileHeader/ProfileHeader.tsx
+8
-8
Original file line number	Original file line	Diff line number	Diff line change
@@ -11,8 +11,8 @@ import { Streaks } from 'components/organisms/Streaks';
import { ASSETS, DEFAULTS, URLS } from 'helpers/config';
import { ASSETS, DEFAULTS, URLS } from 'helpers/config';
import { getTxEndpoint } from 'helpers/endpoints';
import { getTxEndpoint } from 'helpers/endpoints';
import { checkValidAddress, formatAddress } from 'helpers/utils';
import { checkValidAddress, formatAddress } from 'helpers/utils';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';
import * as S from './styles';
import { IProps } from './types';
import { IProps } from './types';
@@ -22,7 +22,7 @@ const MAX_BIO_LENGTH = 80;
export default function ProfileHeader(props: IProps) {
export default function ProfileHeader(props: IProps) {
	const navigate = useNavigate();
	const navigate = useNavigate();


	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
	const language = languageProvider.object[languageProvider.current];
	const language = languageProvider.object[languageProvider.current];
@@ -50,7 +50,7 @@ export default function ProfileHeader(props: IProps) {
	}
	}


	// async function handleProfileSrcUpdate() {
	// async function handleProfileSrcUpdate() {
	// 	if (arProvider.profile && arProvider.profile.id) {
	// 	if (permawebProvider.profile && permawebProvider.profile.id) {
	// 		setProfileUpdating(true);
	// 		setProfileUpdating(true);
	// 		const aos = connect();
	// 		const aos = connect();


@@ -62,7 +62,7 @@ export default function ProfileHeader(props: IProps) {


	// 				console.log('Sending source eval...');
	// 				console.log('Sending source eval...');
	// 				const evalMessage = await aos.message({
	// 				const evalMessage = await aos.message({
	// 					process: arProvider.profile.id,
	// 					process: permawebProvider.profile.id,
	// 					signer: createDataItemSigner(arProvider.wallet),
	// 					signer: createDataItemSigner(arProvider.wallet),
	// 					tags: [{ name: 'Action', value: 'Eval' }],
	// 					tags: [{ name: 'Action', value: 'Eval' }],
	// 					data: processSrc,
	// 					data: processSrc,
@@ -72,7 +72,7 @@ export default function ProfileHeader(props: IProps) {


	// 				const evalResult = await aos.result({
	// 				const evalResult = await aos.result({
	// 					message: evalMessage,
	// 					message: evalMessage,
	// 					process: arProvider.profile.id,
	// 					process: permawebProvider.profile.id,
	// 				});
	// 				});


	// 				console.log(evalResult);
	// 				console.log(evalResult);
@@ -131,7 +131,7 @@ export default function ProfileHeader(props: IProps) {
						<S.Action>
						<S.Action>
							<Streaks profile={props.profile} />
							<Streaks profile={props.profile} />
						</S.Action>
						</S.Action>
						{/* {arProvider.profile && arProvider.profile.id && arProvider.profile.id === props.profile.id && (
						{/* {permawebProvider.profile && permawebProvider.profile.id && permawebProvider.profile.id === props.profile.id && (
							<S.Action>
							<S.Action>
								<Button
								<Button
									type={'primary'}
									type={'primary'}
@@ -142,7 +142,7 @@ export default function ProfileHeader(props: IProps) {
								/>
								/>
							</S.Action>
							</S.Action>
						)} */}
						)} */}
						{arProvider.profile && arProvider.profile.id === props.profile.id && (
						{permawebProvider.profile && permawebProvider.profile.id === props.profile.id && (
							<S.Action>
							<S.Action>
								<Button
								<Button
									type={'primary'}
									type={'primary'}
@@ -156,7 +156,7 @@ export default function ProfileHeader(props: IProps) {
					</S.HeaderActions>
					</S.HeaderActions>
				</S.HeaderWrapper>
				</S.HeaderWrapper>
			</S.Wrapper>
			</S.Wrapper>
			{showProfileManage && arProvider.profile && arProvider.profile.id === props.profile.id && (
			{showProfileManage && permawebProvider.profile && permawebProvider.profile.id === props.profile.id && (
				<Panel
				<Panel
					open={showProfileManage}
					open={showProfileManage}
					header={props.profile.id ? language.editProfile : `${language.createProfile}!`}
					header={props.profile.id ? language.editProfile : `${language.createProfile}!`}
Diff for:‎src/views/Profile/index.tsx
+22
-4
Original file line number	Original file line	Diff line number	Diff line change
@@ -9,14 +9,15 @@ import { URLTabs } from 'components/molecules/URLTabs';
import { ASSETS, URLS } from 'helpers/config';
import { ASSETS, URLS } from 'helpers/config';
import { checkValidAddress } from 'helpers/utils';
import { checkValidAddress } from 'helpers/utils';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import { ProfileActivity } from './ProfileActivity';
import { ProfileActivity } from './ProfileActivity';
import { ProfileAssets } from './ProfileAssets';
import { ProfileAssets } from './ProfileAssets';
import { ProfileCollections } from './ProfileCollections';
import { ProfileCollections } from './ProfileCollections';
import { ProfileHeader } from './ProfileHeader';
import { ProfileHeader } from './ProfileHeader';


export default function Profile() {
export default function Profile() {
	const { getProfileById } = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });
	const permawebProvider = usePermawebProvider();


	const location = useLocation();
	const location = useLocation();
	const navigate = useNavigate();
	const navigate = useNavigate();
@@ -43,8 +44,20 @@ export default function Profile() {
		(async function () {
		(async function () {
			if (address && checkValidAddress(address)) {
			if (address && checkValidAddress(address)) {
				try {
				try {
					const fetchedProfile = await getProfileById({ profileId: address });
					let fetchedProfile = null;
					setProfile(fetchedProfile);
					let isLegacyProfile = false;
					fetchedProfile = await permawebProvider.libs.getProfileById(address);
					if (!fetchedProfile?.id || !fetchedProfile?.username) {
						await new Promise((r) => setTimeout(r, 1000));
						console.log('Fetching legacy profile...');
						isLegacyProfile = true;
						const aoProfile = AOProfile.init({ ao: connect({ MODE: 'legacy' }) });
						fetchedProfile = await aoProfile.getProfileById({ profileId: address });
					}
					setProfile({ ...fetchedProfile, isLegacyProfile });
				} catch (e: any) {
				} catch (e: any) {
					console.error(e);
					console.error(e);
				}
				}
@@ -68,7 +81,12 @@ export default function Profile() {
				icon: ASSETS.collection,
				icon: ASSETS.collection,
				disabled: false,
				disabled: false,
				url: URLS.profileCollections(address),
				url: URLS.profileCollections(address),
				view: () => <ProfileCollections address={address} />,
				view: () => (
					<ProfileCollections
						address={address}
						collectionIds={!(profile as any).isLegacyProfile ? (profile as any)?.collections ?? null : null}
					/>
				),
			},
			},
			{
			{
				label: language.activity,
				label: language.activity,
Diff for:‎src/wallet/WalletConnect/WalletConnect.tsx
+29
-21
Original file line number	Original file line	Diff line number	Diff line change
@@ -13,13 +13,15 @@ import { formatAddress, formatCount, getTotalTokenBalance } from 'helpers/utils'
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useArweaveProvider } from 'providers/ArweaveProvider';
import { useCustomThemeProvider } from 'providers/CustomThemeProvider';
import { useCustomThemeProvider } from 'providers/CustomThemeProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { useLanguageProvider } from 'providers/LanguageProvider';
import { usePermawebProvider } from 'providers/PermawebProvider';


import * as S from './styles';
import * as S from './styles';


export default function WalletConnect(_props: { callback?: () => void }) {
export default function WalletConnect(_props: { callback?: () => void }) {
	const navigate = useNavigate();
	const navigate = useNavigate();


	const arProvider = useArweaveProvider();
	const arProvider = useArweaveProvider();
	const permawebProvider = usePermawebProvider();
	const themeProvider = useCustomThemeProvider();
	const themeProvider = useCustomThemeProvider();


	const languageProvider = useLanguageProvider();
	const languageProvider = useLanguageProvider();
@@ -43,16 +45,16 @@ export default function WalletConnect(_props: { callback?: () => void }) {
			setLabel(`${language.fetching}...`);
			setLabel(`${language.fetching}...`);
		} else {
		} else {
			if (arProvider.walletAddress) {
			if (arProvider.walletAddress) {
				if (arProvider.profile && arProvider.profile.username) {
				if (permawebProvider.profile && permawebProvider.profile.username) {
					setLabel(arProvider.profile.username);
					setLabel(permawebProvider.profile.username);
				} else {
				} else {
					setLabel(formatAddress(arProvider.walletAddress, false));
					setLabel(formatAddress(arProvider.walletAddress, false));
				}
				}
			} else {
			} else {
				setLabel(language.connect);
				setLabel(language.connect);
			}
			}
		}
		}
	}, [showWallet, arProvider.walletAddress, arProvider.profile]);
	}, [showWallet, arProvider.walletAddress, permawebProvider.profile]);


	function handlePress() {
	function handlePress() {
		if (arProvider.walletAddress) {
		if (arProvider.walletAddress) {
@@ -70,8 +72,8 @@ export default function WalletConnect(_props: { callback?: () => void }) {
	}
	}


	function handleProfileAction() {
	function handleProfileAction() {
		if (arProvider.profile && arProvider.profile.id) {
		if (permawebProvider.profile && permawebProvider.profile.id) {
			navigate(URLS.profileAssets(arProvider.profile.id));
			navigate(URLS.profileAssets(permawebProvider.profile.id));
		} else {
		} else {
			setShowProfileManage(true);
			setShowProfileManage(true);
		}
		}
@@ -110,7 +112,7 @@ export default function WalletConnect(_props: { callback?: () => void }) {
	};
	};


	function getDropdown() {
	function getDropdown() {
		if (!arProvider.profile) {
		if (!permawebProvider.profile) {
			return (
			return (
				<S.LoadingWrapper>
				<S.LoadingWrapper>
					<span>{`${language.fetchingProfile}...`}</span>
					<span>{`${language.fetchingProfile}...`}</span>
@@ -123,25 +125,27 @@ export default function WalletConnect(_props: { callback?: () => void }) {
				<S.DHeaderWrapper>
				<S.DHeaderWrapper>
					<S.DHeaderFlex className={'border-wrapper-alt1'}>
					<S.DHeaderFlex className={'border-wrapper-alt1'}>
						<Avatar
						<Avatar
							owner={arProvider.profile}
							owner={permawebProvider.profile}
							dimensions={{ wrapper: 35, icon: 21.5 }}
							dimensions={{ wrapper: 35, icon: 21.5 }}
							callback={() => handleDropdownAction(handleProfileAction)}
							callback={() => handleDropdownAction(handleProfileAction)}
						/>
						/>
						<S.DHeader>
						<S.DHeader>
							<S.DNameWrapper>
							<S.DNameWrapper>
								<p onClick={() => handleDropdownAction(handleProfileAction)}>{label}</p>
								<p onClick={() => handleDropdownAction(handleProfileAction)}>{label}</p>
								{arProvider.vouch?.isVouched && (
								{/* {arProvider.vouch?.isVouched && (
									<div id={'vouch-check'}>
									<div id={'vouch-check'}>
										<ReactSVG src={ASSETS.checkmark} />
										<ReactSVG src={ASSETS.checkmark} />
										<S.Tooltip className={'info-text'} useBottom={true}>
										<S.Tooltip className={'info-text'} useBottom={true}>
											<span>{language.userConnectedVouched}</span>
											<span>{language.userConnectedVouched}</span>
										</S.Tooltip>
										</S.Tooltip>
									</div>
									</div>
								)}
								)} */}
							</S.DNameWrapper>
							</S.DNameWrapper>
							<span onClick={() => handleDropdownAction(handleProfileAction)}>
							<span onClick={() => handleDropdownAction(handleProfileAction)}>
								{formatAddress(
								{formatAddress(
									arProvider.profile && arProvider.profile.id ? arProvider.profile.id : arProvider.walletAddress,
									permawebProvider.profile && permawebProvider.profile.id
										? permawebProvider.profile.id
										: arProvider.walletAddress,
									false
									false
								)}
								)}
							</span>
							</span>
@@ -153,13 +157,13 @@ export default function WalletConnect(_props: { callback?: () => void }) {
						<ReactSVG src={ASSETS.ar} />
						<ReactSVG src={ASSETS.ar} />
						<span>{formatCount(arProvider.arBalance ? arProvider.arBalance.toString() : '0')}</span>
						<span>{formatCount(arProvider.arBalance ? arProvider.arBalance.toString() : '0')}</span>
					</S.BalanceLine>
					</S.BalanceLine>
					{arProvider.tokenBalances && Object.keys(arProvider.tokenBalances).length > 0 && (
					{permawebProvider.tokenBalances && Object.keys(permawebProvider.tokenBalances).length > 0 && (
						<>
						<>
							{Object.keys(arProvider.tokenBalances).map((token: string) => {
							{Object.keys(permawebProvider.tokenBalances).map((token: string) => {
								return (
								return (
									<S.BalanceLine key={token}>
									<S.BalanceLine key={token}>
										<CurrencyLine
										<CurrencyLine
											amount={getTotalTokenBalance(arProvider.tokenBalances[token])}
											amount={getTotalTokenBalance(permawebProvider.tokenBalances[token])}
											currency={token}
											currency={token}
											callback={() => handleDropdownAction(() => setShowWalletDropdown(false))}
											callback={() => handleDropdownAction(() => setShowWalletDropdown(false))}
											useReverseLayout
											useReverseLayout
@@ -196,9 +200,9 @@ export default function WalletConnect(_props: { callback?: () => void }) {
					</li>
					</li>
				</S.DBodyWrapper>
				</S.DBodyWrapper>
				<S.DBodyWrapper>
				<S.DBodyWrapper>
					{arProvider.profile && arProvider.profile.id && (
					{permawebProvider.profile && permawebProvider.profile.id && (
						<>
						<>
							<li onClick={() => copyAddress(arProvider.profile.id)}>
							<li onClick={() => copyAddress(permawebProvider.profile.id)}>
								<ReactSVG src={ASSETS.copy} />
								<ReactSVG src={ASSETS.copy} />
								{copied ? `${language.copied}!` : language.copyProfileId}
								{copied ? `${language.copied}!` : language.copyProfileId}
							</li>
							</li>
@@ -209,7 +213,7 @@ export default function WalletConnect(_props: { callback?: () => void }) {
						</>
						</>
					)}
					)}
					<li onClick={() => handleDropdownAction(handleProfileAction)}>
					<li onClick={() => handleDropdownAction(handleProfileAction)}>
						{arProvider.profile && arProvider.profile.id ? (
						{permawebProvider.profile && permawebProvider.profile.id ? (
							<>
							<>
								<ReactSVG src={ASSETS.user} />
								<ReactSVG src={ASSETS.user} />
								{`${language.viewProfile}`}
								{`${language.viewProfile}`}
@@ -246,12 +250,12 @@ export default function WalletConnect(_props: { callback?: () => void }) {
	function getHeader() {
	function getHeader() {
		return (
		return (
			<S.PWrapper>
			<S.PWrapper>
				{arProvider.profile && !arProvider.profile.id && (
				{permawebProvider.profile && !permawebProvider.profile.id && (
					<S.CAction className={'fade-in'}>
					<S.CAction className={'fade-in'}>
						<Button type={'alt1'} label={language.createProfile} handlePress={handleProfileAction} />
						<Button type={'alt1'} label={language.createProfile} handlePress={handleProfileAction} />
					</S.CAction>
					</S.CAction>
				)}
				)}
				{arProvider.walletAddress && !arProvider.profile && (
				{arProvider.walletAddress && !permawebProvider.profile && (
					<S.MessageWrapper className={'update-wrapper'}>
					<S.MessageWrapper className={'update-wrapper'}>
						<span>{`${language.fetchingProfile}...`}</span>
						<span>{`${language.fetchingProfile}...`}</span>
					</S.MessageWrapper>
					</S.MessageWrapper>
@@ -261,7 +265,7 @@ export default function WalletConnect(_props: { callback?: () => void }) {
						<span>{label}</span>
						<span>{label}</span>
					</S.LAction>
					</S.LAction>
				)}
				)}
				<Avatar owner={arProvider.profile} dimensions={{ wrapper: 35, icon: 21.5 }} callback={handlePress} />
				<Avatar owner={permawebProvider.profile} dimensions={{ wrapper: 35, icon: 21.5 }} callback={handlePress} />
			</S.PWrapper>
			</S.PWrapper>
		);
		);
	}
	}
@@ -290,12 +294,16 @@ export default function WalletConnect(_props: { callback?: () => void }) {
			{showProfileManage && (
			{showProfileManage && (
				<Panel
				<Panel
					open={showProfileManage}
					open={showProfileManage}
					header={arProvider.profile && arProvider.profile.id ? language.editProfile : `${language.createProfile}!`}
					header={
						permawebProvider.profile && permawebProvider.profile.id
							? language.editProfile
							: `${language.createProfile}!`
					}
					handleClose={() => setShowProfileManage(false)}
					handleClose={() => setShowProfileManage(false)}
				>
				>
					<S.PManageWrapper>
					<S.PManageWrapper>
						<ProfileManage
						<ProfileManage
							profile={arProvider.profile && arProvider.profile.id ? arProvider.profile : null}
							profile={permawebProvider.profile && permawebProvider.profile.id ? permawebProvider.profile : null}
							handleClose={() => setShowProfileManage(false)}
							handleClose={() => setShowProfileManage(false)}
							handleUpdate={null}
							handleUpdate={null}
						/>
						/>