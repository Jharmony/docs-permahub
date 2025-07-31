import React from 'react';
import { Link } from 'react-router-dom';

const PermawebLibs: React.FC = () => {
  return (
    <div className="page-container">
      <h1>@permaweb/libs</h1>
      
      <p className="lead">
        A comprehensive SDK providing foundational building blocks for developers to create and interact with applications on Arweave's permaweb. 
        These libraries promote interoperability and reusability across decentralized applications.
      </p>

      <div className="content-section">
        <h2>Overview</h2>
        <p>
          The @permaweb/libs SDK simplifies the development of decentralized, permanent applications by providing 
          libraries for managing profiles, atomic assets, collections, zones, and comments. It integrates seamlessly 
          with Arweave and AO Connect to provide a cohesive developer experience.
        </p>
      </div>

      <div className="content-section">
        <h2>Prerequisites</h2>
        <ul>
          <li><code>node &gt;= v18.0</code></li>
          <li><code>npm</code> or <code>yarn</code></li>
          <li><code>arweave</code></li>
          <li><code>@permaweb/aoconnect</code></li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Installation</h2>
        <div className="code-block">
          <pre><code>npm install @permaweb/libs</code></pre>
        </div>
        <p>Or with yarn:</p>
        <div className="code-block">
          <pre><code>yarn add @permaweb/libs</code></pre>
        </div>
      </div>

      <div className="content-section">
        <h2>Initialization</h2>
        <div className="code-block">
          <pre><code>{`import Arweave from "arweave";
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
});`}</code></pre>
        </div>
      </div>

      <div className="content-section">
        <h2>Core Features</h2>
        
        <h3>Zones</h3>
        <p>
          Zones are representations of entities on the permaweb that contain relevant information and can perform 
          actions on the entity's behalf. A profile is an instance of a zone with specific metadata.
        </p>

        <h4>createZone</h4>
        <div className="code-block">
          <pre><code>{`const zoneId = await permaweb.createZone();`}</code></pre>
        </div>

        <h4>updateZone</h4>
        <div className="code-block">
          <pre><code>{`const zoneUpdateId = await permaweb.updateZone(
  {
    name: "Sample Zone",
    metadata: {
      description: "A sample zone for testing",
      version: "1.0.0",
    },
  },
  zoneId
);`}</code></pre>
        </div>

        <h4>getZone</h4>
        <div className="code-block">
          <pre><code>{`const zone = await permaweb.getZone(zoneId);`}</code></pre>
        </div>

        <h3>Profiles</h3>
        <p>
          Profiles are digital representations of entities, such as users, organizations, or channels. 
          They include specific metadata that describes the entity and can be associated with various digital assets and collections.
        </p>

        <h4>createProfile</h4>
        <div className="code-block">
          <pre><code>{`const profileId = await permaweb.createProfile({
  username: "My username",
  displayName: "My display name",
  description: "My description",
  thumbnail: "Thumbnail image data",
  banner: "Banner image data",
});`}</code></pre>
        </div>

        <h4>updateProfile</h4>
        <div className="code-block">
          <pre><code>{`const profileId = await permaweb.updateProfile({
  username: "My username",
  displayName: "My display name",
  description: "My description",
  thumbnail: "Thumbnail image data",
  banner: "Banner image data",
}, profileId);`}</code></pre>
        </div>

        <h4>getProfileById</h4>
        <div className="code-block">
          <pre><code>{`const profile = await permaweb.getProfileById(profileId);`}</code></pre>
        </div>

        <h4>getProfileByWalletAddress</h4>
        <div className="code-block">
          <pre><code>{`const profile = await permaweb.getProfileByWalletAddress(walletAddress);`}</code></pre>
        </div>

        <h3>Atomic Assets</h3>
        <p>
          Atomic assets are unique digital items consisting of an AO process and its associated data which are 
          stored together in a single transaction on Arweave.
        </p>

        <h4>createAtomicAsset</h4>
        <div className="code-block">
          <pre><code>{`const assetId = await permaweb.createAtomicAsset({
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
});`}</code></pre>
        </div>

        <h4>getAtomicAsset</h4>
        <div className="code-block">
          <pre><code>{`const asset = await permaweb.getAtomicAsset(assetId);`}</code></pre>
        </div>

        <h4>getAtomicAssets</h4>
        <div className="code-block">
          <pre><code>{`const assets = await permaweb.getAtomicAssets(assetIds);`}</code></pre>
        </div>

        <h3>Comments</h3>
        <p>
          Comments are instantiations of atomic assets created with additional tags to link them with other 
          comments or atomic assets with specific data or root contexts.
        </p>

        <h4>createComment</h4>
        <div className="code-block">
          <pre><code>{`const commentId = await permaweb.createComment({
  content: "Sample comment on an atomic asset",
  creator: profileId,
  parentId: atomicAssetId,
});`}</code></pre>
        </div>

        <h4>getComment</h4>
        <div className="code-block">
          <pre><code>{`const comment = await permaweb.getComment(commentId);`}</code></pre>
        </div>

        <h4>getComments</h4>
        <div className="code-block">
          <pre><code>{`const comments = await permaweb.getComments({
  parentId: atomicAssetId,
});`}</code></pre>
        </div>

        <h3>Collections</h3>
        <p>
          Collections are structured groups of atomic assets, allowing for cohesive representation, management, 
          and categorization of digital items.
        </p>

        <h4>createCollection</h4>
        <div className="code-block">
          <pre><code>{`const collectionId = await permaweb.createCollection({
  title: "Example Title",
  description: "Example Description",
  creator: profileId,
});`}</code></pre>
        </div>

        <h4>updateCollectionAssets</h4>
        <div className="code-block">
          <pre><code>{`const collectionUpdateId = await permaweb.updateCollectionAssets({
  collectionId: collectionId,
  assetIds: ["AssetId1", "AssetId2", "AssetId3"],
  creator: creator,
  updateType: "Add",
});`}</code></pre>
        </div>

        <h4>getCollection</h4>
        <div className="code-block">
          <pre><code>{`const collection = await permaweb.getCollection(collectionId);`}</code></pre>
        </div>

        <h4>getCollections</h4>
        <div className="code-block">
          <pre><code>{`const collections = await permaweb.getCollections();`}</code></pre>
        </div>
      </div>

      <div className="content-section">
        <h2>React Integration</h2>
        <p>
          To streamline the integration of @permaweb/libs into your React applications, you can use the following 
          PermawebProvider. This provider simplifies dependency management and avoids the need to create multiple 
          SDK instances across different components.
        </p>

        <h3>Provider Setup</h3>
        <div className="code-block">
          <pre><code>{`import React from 'react';
import Arweave from 'arweave';
import { connect, createDataItemSigner } from '@permaweb/aoconnect';
import Permaweb from '@permaweb/libs';

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
  const [libs, setLibs] = React.useState<any>(null);

  React.useEffect(() => {
    const dependencies: any = { 
      ao: connect(), 
      arweave: Arweave.init({}) 
    };
    
    if (window.arweaveWallet) {
      dependencies.signer = createDataItemSigner(window.arweaveWallet);
    }

    const permawebInstance = Permaweb.init(dependencies);
    setLibs(permawebInstance);
  }, []);

  return (
    <PermawebContext.Provider value={{ libs }}>
      {props.children}
    </PermawebContext.Provider>
  );
}`}</code></pre>
        </div>

        <h3>Usage in Components</h3>
        <div className="code-block">
          <pre><code>{`import React from "react";
import { usePermawebProvider } from "./PermawebProvider";

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
}`}</code></pre>
        </div>
      </div>

      <div className="content-section">
        <h2>Additional Utilities</h2>
        
        <h3>Common Functions</h3>
        <ul>
          <li><code>resolveTransaction</code> - Resolves transaction data or creates new transactions</li>
          <li><code>getGQLData</code> - Query Arweave GraphQL endpoints</li>
          <li><code>getAggregatedGQLData</code> - Fetch paginated data with callbacks</li>
          <li><code>createProcess</code> - Create AO processes with optional eval</li>
          <li><code>readProcess</code> - Read process state via dryrun</li>
          <li><code>readState</code> - Read process state via HyperBEAM</li>
          <li><code>sendMessage</code> - Send messages to AO processes</li>
        </ul>

        <h3>Utility Functions</h3>
        <ul>
          <li><code>mapFromProcessCase</code> - Convert PascalCase to camelCase</li>
          <li><code>mapToProcessCase</code> - Convert camelCase to PascalCase</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Configuration</h2>
        <p>
          The SDK includes built-in configurations for AO modules, schedulers, gateways, and content types. 
          These can be customized as needed for your specific use case.
        </p>

        <h3>Key Configuration Options</h3>
        <ul>
          <li><strong>AO Module:</strong> Default module for process creation</li>
          <li><strong>Scheduler:</strong> Default scheduler for AO processes</li>
          <li><strong>Gateways:</strong> Arweave and Goldsky GraphQL endpoints</li>
          <li><strong>Content Types:</strong> Supported content type serialization</li>
          <li><strong>Upload Settings:</strong> Turbo.ardrive.io integration</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Error Handling</h2>
        <p>
          The SDK provides comprehensive error handling with descriptive error messages for validation failures, 
          network issues, and process creation problems. All functions throw errors with meaningful messages 
          to help with debugging.
        </p>
      </div>

      <div className="content-section">
        <h2>Contributing</h2>
        <p>
          Contributions to @permaweb/libs are welcome! Before submitting a new feature or service, please ensure that it:
        </p>
        <ul>
          <li><strong>Aligns with the ecosystem:</strong> Consider how the service can be broadly applicable across decentralized applications on Arweave</li>
          <li><strong>Is interoperable:</strong> New services should easily integrate with existing modules</li>
          <li><strong>Includes documentation and tests:</strong> Provide clear documentation, usage examples, and sufficient test coverage</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Resources</h2>
        <ul>
          <li><a href="https://github.com/permaweb/ao" target="_blank" rel="noopener noreferrer">AO Connect</a></li>
          <li><a href="https://github.com/ArweaveTeam/arweave-js" target="_blank" rel="noopener noreferrer">ArweaveJS</a></li>
          <li><a href="https://github.com/permaweb/permaweb-libs" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Related Documentation</h2>
        <ul>
          <li><Link to="/ao-connect">AO Connect</Link> - Official AO client library</li>
          <li><Link to="/hyperbeam">HyperBEAM</Link> - Client implementation of AO-Core protocol</li>
          <li><Link to="/arweave-js">ArweaveJS</Link> - JavaScript SDK for Arweave</li>
        </ul>
      </div>
    </div>
  );
};

export default PermawebLibs; 