@permaweb/libs
This SDK provides a set of libraries designed as foundational building blocks for developers to create and interact with applications on Arweave's permaweb. These libraries aim to contribute building on the composable web, promoting interoperability and reusability across decentralized applications. With libraries for managing profiles, atomic assets, collections, and more, this SDK simplifies the development of decentralized, permanent applications.

Table of Contents
Prerequisites
Installation
Initialization
Usage
Zones
createZone
updateZone
getZone
Profiles
createProfile
updateProfile
getProfileById
getProfileByWalletAddress
Atomic Assets
createAtomicAsset
getAtomicAsset
getAtomicAssets
Comments
createComment
getComment
getComments
Collections
createCollection
updateCollectionAssets
getCollection
getCollections
Examples
Resources
Prerequisites
node >= v18.0
npm or yarn
arweave
@permaweb/aoconnect
Installation
If arweave or @permaweb/aoconnect is not already installed, add them to the installation command below as additional packages

npm install @permaweb/libs
or

yarn add @permaweb/libs
Initialization
import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

// Browser Usage
const wallet = window.arweaveWallet;

// NodeJS Usage
const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET, "utf-8"));

const permaweb = Permaweb.init({
  ao: connect(),
  arweave: Arweave.init(),
  signer: createDataItemSigner(wallet),
});
Usage
Zones
Zones are representations of entities on the permaweb that contain relevant information and can perform actions on the entity"s behalf. A profile is an instance of a zone with specific metadata (Read the spec).

createZone
const zoneId = await permaweb.createZone();
Parameters
tags (optional): Additional tags
Response
ZoneProcessId;
updateZone
const zoneUpdateId = await permaweb.updateZone(
  {
    name: "Sample Zone",
    metadata: {
      description: "A sample zone for testing",
      version: "1.0.0",
    },
  },
  zoneId
);
Parameters
args: Zone data to update, specified in an object
zoneId: The ID of the zone to update
Response
ZoneUpdateId;
getZone
const zone = await permaweb.getZone(zoneId);
Parameters
zoneId: The ID of the zone to fetch
Response
{ store: [], assets: [] };
Profiles
Profiles are a digital representation of entities, such as users, organizations, or channels. They include specific metadata that describes the entity and can be associated with various digital assets and collections. Profiles are created, updated, and fetched using the following functions.

createProfile
const profileId = await permaweb.createProfile({
  username: "My username",
  displayName: "My display name",
  description: "My description",
  thumbnail: "Thumbnail image data",
  banner: "Banner image data",
});
Parameters
args: Object containing profile details, including username, displayName, description, thumbnail (optional), and banner (optional)
callback (optional): Callback function for client use
Response
ProfileProcessId;
updateProfile
const profileId = await permaweb.updateProfile({
    username: "My usename",
    displayName: "My display name",
    description: "My description",
    thumbnail: "Thumbnail image data",
    banner: "Banner image data",
  }, profileId);
Parameters
args: Profile details to update, structured similarly to createProfile
profileId: The ID of the profile to update
callback (optional): Callback function for client use
Response
ProfileProcessUpdateId;
getProfileById
const profile = await permaweb.getProfileById(profileId);
Parameters
profileId: The ID of the profile to fetch
Response
{
  id: "ProfileProcessId",
  walletAddress: "WalletAddress",
  username: "Sample username",
  displayName: "Sample display name",
  description: "Sample description",
  thumbnail: "ThumbnailTxId",
  banner: "BannerTxId",
  assets: [
    { id: "AssetProcessId1", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
    { id: "AssetProcessId2", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
    { id: "AssetProcessId3", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
  ]
}
getProfileByWalletAddress
const profile = await permaweb.getProfileByWalletAddress(walletAddress);
Parameters
walletAddress: The wallet address associated with the profile
Response
{
  id: "ProfileProcessId",
  walletAddress: "WalletAddress",
  username: "Sample username",
  displayName: "Sample display name",
  description: "Sample description",
  thumbnail: "ThumbnailTxId",
  banner: "BannerTxId",
  assets: [
    { id: "AssetProcessId1", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
    { id: "AssetProcessId2", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
    { id: "AssetProcessId3", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
  ]
}
Atomic Assets
Atomic assets are unique digital item consisting of an AO process and its associated data which are stored together in a single transaction on Arweave (Read the spec).

createAtomicAsset
const assetId = await permaweb.createAtomicAsset({
  name: "Example Name",
  description: "Example Description",
  topics: ["Topic 1", "Topic 2", "Topic 3"],
  creator: CREATOR_ADDRESS,
  data: "1234",
  contentType: "text/plain",
  assetType: "Example Atomic Asset Type",
  metadata: {
    status: "Initial Status",
  },
});
Parameters
args: Object containing asset details, including name, description,  topics, creator (wallet or profile address), data, contentType, assetType, metadata (optional), and tags (optional)
callback (optional): Callback function for client use
Response
AssetProcessId;
getAtomicAsset
const asset = await permaweb.getAtomicAsset(assetId);
Parameters
assetId: The ID of the asset to fetch
args (optional): Object for additional options with field useGateway (boolean) to also query the gateway for asset data
Response
{
  id: "htWiEU2Gh2h0Dv8nfXrtVcKZBqDQTi8NTb6hL_e7atg",
  transferable: "true",
  name: "Example Name",
  metadata: {
    status: "Initial Status",
    topics: [ "Topic 1", "Topic 2", "Topic 3" ],
    description: "Example Description"
  },
  creator: "creator",
  balances: { creator: "1" },
  ticker: "ATOMIC",
  denomination: "1",
  dateCreated: "1738002523328"
}
getAtomicAssets
const assets = await permaweb.getAtomicAssets(assetIds);
Parameters
assetIds: A list of the asset IDs to fetch
Response
[
  {
    id: "htWiEU2Gh2h0Dv8nfXrtVcKZBqDQTi8NTb6hL_e7atg",
    owner: "nl5hKKS6qrwaGZST_jAcxzgec9rZcB-pCyNFDiPgPpE",
    authority: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
    onBoot: "XYz8buLR5LQdhOOzWuCt9kBjoXHMowouWpXcGm9wdEE",
    creator: "creator",
    assetType: "Example Atomic Asset Type",
    contentType: "text/plain",
    implements: "ANS-110",
    dateCreated: 1738002523328,
    name: "Example Name",
    description: "Example Description",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    ticker: "ATOMIC",
    denomination: 1,
    totalsupply: 1,
    transferable: true,
    status: "Initial Status",
    dataProtocol: "ao",
    variant: "ao.TN.1",
    type: "Process",
    module: "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM",
    scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
    sdk: "aoconnect",
  },
  {
    id: "tgClfHwR3HqP23vBbKmyXQf3N-LTqsR3-Fm9oH3KCG0",
    owner: "nl5hKKS6qrwaGZST_jAcxzgec9rZcB-pCyNFDiPgPpE",
    authority: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
    onBoot: "XYz8buLR5LQdhOOzWuCt9kBjoXHMowouWpXcGm9wdEE",
    creator: "creator",
    assetType: "Example Atomic Asset Type",
    contentType: "text/plain",
    implements: "ANS-110",
    dateCreated: 1738002535187,
    name: "Example Name",
    description: "Example Description",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    ticker: "ATOMIC",
    denomination: 1,
    totalsupply: 1,
    transferable: true,
    status: "Initial Status",
    dataProtocol: "ao",
    variant: "ao.TN.1",
    type: "Process",
    module: "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM",
    scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
    sdk: "aoconnect",
  },
];
Comments
Comments are an instantiation of atomic assets created with additional tags to link them with other comments / atomic assets with specific data or root contexts.

createComment
const commentId = await permaweb.createComment({
  content: "Sample comment on an atomic asset",
  creator: profileId,
  parentId: atomicAssetId,
});
Parameters
args: Object containing content, creator, parentId, and rootId (optional)
callback (optional): Callback function for status updates.
Response
CommentProcessId;
getComment
const comment = await permaweb.getComment(commentId);
Parameters
commentId: The ID of the comment to fetch.
Response
{
  id: "CommentProcessId",
  title: "Comment Title",
  description: "Comment Description",
  parentId: "ParentProcessId",
  rootId: "RootProcessId",
  content: "My Comment",
  contentType: "text/plain",
  creator: "Creator Identifier",
  collectionId: "Collection Identifier",
  transferable: true,
  tags: [
    { name: "Data-Source", value: "Data Source Identifier" },
    { name: "Root-Source", value: "Root Source Identifier" }
  ]
}
getComments
const comments = await permaweb.getComments({
  parentId: atomicAssetId,
});
Parameters
args: Object containing parentId or rootId
Response
[
  {
    id: "CommentProcessId1",
    title: "Comment Title 1",
    description: "Comment Description 1",
    parentId: "ParentProcessId",
    rootId: "RootProcessId",
    content: "My Comment",
    contentType: "text/plain",
    creator: "Creator Identifier",
    collectionId: "Collection Identifier",
    transferable: true,
    tags: [
      { name: "Data-Source", value: "Data Source Identifier" },
      { name: "Root-Source", value: "Root Source Identifier" },
    ],
  },
  {
    id: "CommentProcessId2",
    title: "Comment Title 2",
    description: "Comment Description 2",
    parentId: "ParentProcessId",
    rootId: "RootProcessId",
    content: "My Comment",
    contentType: "text/plain",
    data: "Comment data 2",
    creator: "Creator Identifier",
    collectionId: "Collection Identifier",
    transferable: true,
    tags: [
      { name: "Data-Source", value: "Data Source Identifier" },
      { name: "Root-Source", value: "Root Source Identifier" },
    ],
  },
];
Collections
Collections are structured groups of atomic assets, allowing for cohesive representation, management, and categorization of digital items. Collections extend the concept of atomic assets by introducing an organized layer to group and manage related assets. (Read the spec).

createCollection
const collectionId = await permaweb.createCollection({
  title: "Example Title",
  description: "Example Description",
  creator: profileId,
});
Parameters
args: Object containing title, description, creator, thumbnail (optional), and banner (optional)
Response
CollectionProcessId;
updateCollectionAssets
const collectionUpdateId = await permaweb.updateCollectionAssets({
  collectionId: collectionId,
  assetIds: ["AssetId1", "AssetId2", "AssetId3"],
  creator: creator,
  updateType: "Add",
});
Parameters
args: Object containing collectionId, assetIds, profileId, and updateType ("Add" | "Remove")
Response
CollectionProcessUpdateId;
getCollection
const collection = await permaweb.getCollection(collectionId);
Parameters
collectionId: The ID of the collection to fetch
Response
{
  id: "Id",
  title: "Title",
  description: "Description",
  creator: "Creator",
  dateCreated: "DateCreated",
  thumbnail: "ThumbnailTx",
  banner: "BannerTx",
  assets: ["AssetId1", "AssetId2", "AssetId3"]
}
getCollections
const collections = await permaweb.getCollections();
Parameters
args: Object containing creator (optional)
Response
[
  {
    id: "Id",
    title: "Title",
    description: "Description",
    creator: "Creator",
    dateCreated: "DateCreated",
    thumbnail: "ThumbnailTx",
    banner: "BannerTx",
    assets: ["AssetId1", "AssetId2", "AssetId3"],
  },
  {
    id: "Id",
    title: "Title",
    description: "Description",
    creator: "Creator",
    dateCreated: "DateCreated",
    thumbnail: "ThumbnailTx",
    banner: "BannerTx",
    assets: ["AssetId1", "AssetId2", "AssetId3"],
  },
];
Examples
To streamline the integration of @permaweb/libs into your React applications, you can use the following PermawebProvider. This provider simplifies dependency management and avoids the need to create multiple SDK instances across different components in your frontend application. By leveraging React Context, the provider ensures the Permaweb SDK is initialized once and is accessible throughout your component tree.

Key Features of This Example:
Global Initialization: The PermawebProvider initializes the necessary dependencies (e.g., Arweave, AO Connect, and optional wallet signing).
React Context Integration: It makes the initialized libs instance globally available to all child components without requiring prop drilling.
Reusable Hook: The usePermawebProvider hook offers a convenient way to access the SDK in any component.
Provider Setup
The following example demonstrates how to create a React Context and Provider for @permaweb/libs.

import React from 'react';

import Arweave from 'arweave';
import { connect, createDataItemSigner } from '@permaweb/aoconnect';
import Permaweb from '@permaweb/libs';

import { useArweaveProvider } from './ArweaveProvider';

interface PermawebContextState {
	libs: any | null;
}

const PermawebContext = React.createContext<PermawebContextState>({
	libs: null,
});

export function usePermawebProvider(): PermawebContextState {
	return React.useContext(PermawebContext);
}

export function PermawebProvider(props: { children: React.ReactNode }) {
	const arProvider = useArweaveProvider();

	const [libs, setLibs] = React.useState<any>(null);

	React.useEffect(() => {
		const dependencies: any = { ao: connect(), arweave: Arweave.init({}) };
		if (arProvider.wallet) {
			dependencies.signer = createDataItemSigner(arProvider.wallet);
		}

		const permawebInstance = Permaweb.init(dependencies);
		setLibs(permawebInstance);
	}, [arProvider.wallet]);

	return <PermawebContext.Provider value={{ libs }}>{props.children}</PermawebContext.Provider>;
}
Explanation:
React Context: The PermawebContext is used to store the initialized libs object, making it accessible across your application.
Dynamic Initialization: In the useEffect hook, the dependencies are initialized once when the provider mounts, including optional wallet signing logic.
Encapsulation: The PermawebProvider ensures the SDK logic is abstracted, keeping the rest of your app clean and focused.
Usage in a Component
Here's how you can use the usePermawebProvider hook to access the libs instance in a React component:

import React from "react";
import { usePermawebProvider } from "providers/PermawebProvider";

export default function MyComponent() {
  const { libs } = usePermawebProvider();

  React.useEffect(() => {
    (async function fetchAsset() {
      if (libs) {
        try {
          const asset = await libs.getAtomicAsset(id);
          console.log("Fetched Asset:", asset);
        } catch (error) {
          console.error("Error fetching asset:", error);
        }
      }
    })();
  }, [libs]);

  return <h1>Permaweb Libs Component</h1>;
}
Contributions
Contributions to @permaweb/libs are welcome! Before submitting a new feature or service, please ensure that it:

Aligns with the ecosystem: Consider how the service can be broadly applicable across decentralized applications on Arweave. We strive to maintain composable, reusable, and interoperable building blocks.
Is interoperable: New services or modules should easily integrate with existing modules (e.g., Profiles, Zones, Atomic Assets) to provide a cohesive developer experience.
Includes documentation and tests: Provide clear documentation, usage examples, and sufficient test coverage to ensure quality and maintainability.
How to Contribute
Open an Issue: Start by creating a new issue describing your proposal or bug fix. This helps gather feedback from the community and maintainers.
Discuss: Collaborate on the issue, refine the idea, and outline a plan.
Implement: Submit a Pull Request once you have a working solution. Please follow the existing code style and conventions.
Review: Engage in the review process—address comments, refine your code, and finalize changes.
By ensuring new contributions are designed with the broader ecosystem in mind, we maintain a robust and versatile platform for permaweb developers.

Resources
AO Connect