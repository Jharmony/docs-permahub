import React from 'react';

const ApiReference = () => {
  return (
    <div className="page-container">
      <h1>API Reference</h1>
      
      <p>This page provides a comprehensive overview of all the methods available in @permaweb/libs. For detailed documentation and examples, click on the method names to navigate to their specific pages.</p>

      <h2>Quick Navigation</h2>
      <ul>
        <li><a href="#zones-api">Zones API</a></li>
        <li><a href="#profiles-api">Profiles API</a></li>
        <li><a href="#atomic-assets-api">Atomic Assets API</a></li>
        <li><a href="#collections-api">Collections API</a></li>
        <li><a href="#comments-api">Comments API</a></li>
      </ul>

      <h2>Initialization</h2>

      <h3><code>Permaweb.init(config)</code></h3>
      <p>Initialize the permaweb SDK with Arweave and AO Connect.</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

const permaweb = Permaweb.init({
  ao: connect(),
  arweave: Arweave.init(),
  signer: createDataItemSigner(wallet),
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>config.ao</code>: AO Connect instance</li>
        <li><code>config.arweave</code>: Arweave instance</li>
        <li><code>config.signer</code>: Data item signer for wallet</li>
      </ul>

      <p><strong>Returns:</strong> Permaweb SDK instance</p>

      <h2 id="zones-api">Zones API</h2>
      <p>Zones are representations of entities on the permaweb that contain relevant information and can perform actions on the entity's behalf.</p>

      <h3><code>createZone(tags?)</code></h3>
      <p>Creates a new zone on the permaweb.</p>

      <pre><code>{`const zoneId = await permaweb.createZone();
// or with tags
const zoneId = await permaweb.createZone({ tags: [...] });`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>tags</code> (optional): Additional tags for the zone</li>
      </ul>

      <p><strong>Returns:</strong> <code>ZoneProcessId</code></p>

      <h3><code>updateZone(args, zoneId)</code></h3>
      <p>Updates an existing zone with new metadata.</p>

      <pre><code>{`const updateId = await permaweb.updateZone({
  name: "Zone Name",
  metadata: { ... }
}, zoneId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Zone data to update</li>
        <li><code>zoneId</code>: The ID of the zone to update</li>
      </ul>

      <p><strong>Returns:</strong> <code>ZoneUpdateId</code></p>

      <h3><code>getZone(zoneId)</code></h3>
      <p>Retrieves zone information and associated data.</p>

      <pre><code>{`const zone = await permaweb.getZone(zoneId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>zoneId</code>: The ID of the zone to fetch</li>
      </ul>

      <p><strong>Returns:</strong> Zone object with store and assets</p>

      <h2 id="profiles-api">Profiles API</h2>
      <p>Profiles are digital representations of entities, such as users, organizations, or channels.</p>

      <h3><code>createProfile(args)</code></h3>
      <p>Creates a new user profile on the permaweb.</p>

      <pre><code>{`const profileId = await permaweb.createProfile({
  username: "myusername",
  displayName: "My Display Name",
  description: "My description",
  thumbnail: "thumbnail-data", // optional
  banner: "banner-data" // optional
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Object containing profile details</li>
      </ul>

      <p><strong>Returns:</strong> <code>ProfileProcessId</code></p>

      <h3><code>updateProfile(args, profileId)</code></h3>
      <p>Updates an existing profile with new information.</p>

      <pre><code>{`const updateId = await permaweb.updateProfile({
  username: "newusername",
  displayName: "New Display Name",
  // ... other fields
}, profileId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Profile details to update</li>
        <li><code>profileId</code>: The ID of the profile to update</li>
      </ul>

      <p><strong>Returns:</strong> <code>ProfileProcessUpdateId</code></p>

      <h3><code>getProfileById(profileId)</code></h3>
      <p>Retrieves a profile by its unique ID.</p>

      <pre><code>{`const profile = await permaweb.getProfileById(profileId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>profileId</code>: The ID of the profile to fetch</li>
      </ul>

      <p><strong>Returns:</strong> Profile object with assets</p>

      <h3><code>getProfileByWalletAddress(walletAddress)</code></h3>
      <p>Retrieves a profile by the associated wallet address.</p>

      <pre><code>{`const profile = await permaweb.getProfileByWalletAddress(walletAddress);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>walletAddress</code>: The wallet address associated with the profile</li>
      </ul>

      <p><strong>Returns:</strong> Profile object with assets</p>

      <h2 id="atomic-assets-api">Atomic Assets API</h2>
      <p>Atomic assets are unique digital items consisting of an AO process and its associated data.</p>

      <h3><code>createAtomicAsset(args)</code></h3>
      <p>Creates a new atomic asset on the permaweb.</p>

      <pre><code>{`const assetId = await permaweb.createAtomicAsset({
  name: "Asset Name",
  description: "Asset Description",
  topics: ["topic1", "topic2"],
  creator: CREATOR_ADDRESS,
  data: "asset-data",
  contentType: "text/plain",
  assetType: "document",
  metadata: { ... } // optional
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Object containing asset details</li>
      </ul>

      <p><strong>Returns:</strong> <code>AssetProcessId</code></p>

      <h3><code>getAtomicAsset(assetId)</code></h3>
      <p>Retrieves a specific atomic asset by its ID.</p>

      <pre><code>{`const asset = await permaweb.getAtomicAsset(assetId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>assetId</code>: The ID of the asset to fetch</li>
      </ul>

      <p><strong>Returns:</strong> Asset object with metadata</p>

      <h3><code>getAtomicAssets(filters?)</code></h3>
      <p>Retrieves multiple atomic assets with optional filtering.</p>

      <pre><code>{`const assets = await permaweb.getAtomicAssets({
  creator: "CreatorAddress",
  assetType: "image",
  topics: ["art", "digital"],
  limit: 10,
  offset: 20
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria</li>
      </ul>

      <p><strong>Returns:</strong> Object with assets array and pagination info</p>

      <h2 id="collections-api">Collections API</h2>
      <p>Collections provide a way to organize and group atomic assets together.</p>

      <h3><code>createCollection(args)</code></h3>
      <p>Creates a new collection to organize atomic assets.</p>

      <pre><code>{`const collectionId = await permaweb.createCollection({
  name: "Collection Name",
  description: "Collection Description",
  topics: ["topic1", "topic2"],
  creator: CREATOR_ADDRESS,
  metadata: { ... } // optional
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Object containing collection details</li>
      </ul>

      <p><strong>Returns:</strong> <code>CollectionProcessId</code></p>

      <h3><code>updateCollectionAssets(args, collectionId)</code></h3>
      <p>Updates the assets within a collection by adding or removing assets.</p>

      <pre><code>{`const updateId = await permaweb.updateCollectionAssets({
  assets: ["asset1", "asset2"],
  action: "add" // or "remove"
}, collectionId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Object containing update details</li>
        <li><code>collectionId</code>: The ID of the collection to update</li>
      </ul>

      <p><strong>Returns:</strong> <code>CollectionUpdateId</code></p>

      <h3><code>getCollection(collectionId)</code></h3>
      <p>Retrieves a specific collection by its ID.</p>

      <pre><code>{`const collection = await permaweb.getCollection(collectionId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>collectionId</code>: The ID of the collection to fetch</li>
      </ul>

      <p><strong>Returns:</strong> Collection object with assets</p>

      <h3><code>getCollections(filters?)</code></h3>
      <p>Retrieves multiple collections with optional filtering.</p>

      <pre><code>{`const collections = await permaweb.getCollections({
  creator: "CreatorAddress",
  topics: ["art", "photography"],
  limit: 10,
  offset: 20
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria</li>
      </ul>

      <p><strong>Returns:</strong> Object with collections array and pagination info</p>

      <h2 id="comments-api">Comments API</h2>
      <p>Comments provide a way to add social features to your permaweb applications.</p>

      <h3><code>createComment(args)</code></h3>
      <p>Creates a new comment on a permaweb entity.</p>

      <pre><code>{`const commentId = await permaweb.createComment({
  content: "Comment content",
  parentId: "parent-comment-id", // optional, for threading
  targetId: "target-entity-id",
  targetType: "asset", // asset, collection, profile, zone
  metadata: { ... } // optional
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>args</code>: Object containing comment details</li>
      </ul>

      <p><strong>Returns:</strong> <code>CommentProcessId</code></p>

      <h3><code>getComment(commentId)</code></h3>
      <p>Retrieves a specific comment by its ID.</p>

      <pre><code>{`const comment = await permaweb.getComment(commentId);`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>commentId</code>: The ID of the comment to fetch</li>
      </ul>

      <p><strong>Returns:</strong> Comment object with replies</p>

      <h3><code>getComments(filters?)</code></h3>
      <p>Retrieves multiple comments with optional filtering.</p>

      <pre><code>{`const comments = await permaweb.getComments({
  targetId: "target-entity-id",
  targetType: "asset",
  parentId: null, // null for top-level comments
  author: "author-address",
  limit: 10,
  offset: 20
});`}</code></pre>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria</li>
      </ul>

      <p><strong>Returns:</strong> Object with comments array and pagination info</p>

      <h2>Data Types</h2>

      <h3>Zone Object</h3>
      <pre><code>{`interface Zone {
  id: string;
  name?: string;
  metadata?: any;
  store: any[];
  assets: any[];
  dateCreated: number;
  lastUpdate: number;
}`}</code></pre>

      <h3>Profile Object</h3>
      <pre><code>{`interface Profile {
  id: string;
  walletAddress: string;
  username: string;
  displayName: string;
  description: string;
  thumbnail?: string;
  banner?: string;
  assets: Asset[];
  dateCreated: number;
  lastUpdate: number;
}`}</code></pre>

      <h3>Asset Object</h3>
      <pre><code>{`interface Asset {
  id: string;
  name: string;
  description: string;
  topics: string[];
  creator: string;
  data: string;
  contentType: string;
  assetType: string;
  metadata?: any;
  dateCreated: number;
  lastUpdate: number;
}`}</code></pre>

      <h3>Collection Object</h3>
      <pre><code>{`interface Collection {
  id: string;
  name: string;
  description: string;
  topics: string[];
  creator: string;
  assets: Asset[];
  metadata?: any;
  dateCreated: number;
  lastUpdate: number;
}`}</code></pre>

      <h3>Comment Object</h3>
      <pre><code>{`interface Comment {
  id: string;
  content: string;
  parentId?: string;
  targetId: string;
  targetType: string;
  author: string;
  metadata?: any;
  replies: Comment[];
  dateCreated: number;
  lastUpdate: number;
}`}</code></pre>

      <h2>Error Handling</h2>
      <p>All methods can throw errors in the following scenarios:</p>
      <ul>
        <li><strong>Network errors</strong>: Connection issues with Arweave or AO</li>
        <li><strong>Authentication errors</strong>: Invalid or missing wallet</li>
        <li><strong>Permission errors</strong>: Insufficient permissions for operation</li>
        <li><strong>Validation errors</strong>: Invalid input data</li>
        <li><strong>Not found errors</strong>: Requested resource doesn't exist</li>
      </ul>

      <h3>Example Error Handling</h3>
      <pre><code>{`try {
  const profile = await permaweb.getProfileById(profileId);
  return profile;
} catch (error) {
  if (error.message.includes("not found")) {
    console.log("Profile not found");
    return null;
  }
  if (error.message.includes("permission")) {
    console.log("Permission denied");
    return null;
  }
  throw error; // Re-throw unexpected errors
}`}</code></pre>

      <h2>Rate Limiting</h2>
      <p>The SDK respects rate limits imposed by Arweave and AO networks. For high-volume applications, consider implementing client-side rate limiting:</p>

      <pre><code>{`class RateLimiter {
  private requests: number[] = [];
  private maxRequests = 10;
  private timeWindow = 60000; // 1 minute

  async throttle() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.timeWindow - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.requests.push(now);
  }
}`}</code></pre>

      <h2>Best Practices</h2>
      <ol>
        <li><strong>Always handle errors</strong>: Wrap API calls in try-catch blocks</li>
        <li><strong>Validate input data</strong>: Check parameters before making API calls</li>
        <li><strong>Use pagination</strong>: For large datasets, use limit and offset parameters</li>
        <li><strong>Cache responses</strong>: Cache frequently accessed data to reduce API calls</li>
        <li><strong>Rate limiting</strong>: Implement client-side rate limiting for high-volume applications</li>
        <li><strong>Type safety</strong>: Use TypeScript for better type safety and developer experience</li>
      </ol>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/getting-started">Getting Started</a> - Set up your development environment</li>
        <li><a href="#/examples">Examples</a> - Real-world usage examples</li>
        <li><a href="#/best-practices">Best Practices</a> - Development guidelines</li>
        <li><a href="#/troubleshooting">Troubleshooting</a> - Common issues and solutions</li>
      </ul>

      <h2>ArDrive Payment API</h2>
      <p><strong>Process ID:</strong> <code>JNC6vBhjHY1EPwV3pEeNmrsgFMxH5d38_LHsZ7jful8</code></p>

      <p>The ArDrive Payment API provides endpoints to manage and determine costs for converting currencies into Turbo credits, which are used for uploading data to Arweave via Turbo. This API helps you:</p>
      <ul>
        <li>Get the cost (in winc, the smallest Turbo credit unit) for uploading a given byte count</li>
        <li>Get Turbo credit quotes for a payment type and amount</li>
        <li>Check your current Turbo credit balance</li>
        <li>Get a payment quote/session for topping up credits</li>
        <li>List supported currencies and countries</li>
        <li>Get current conversion rates for 1GB of storage</li>
      </ul>

      <p><strong>Base URL:</strong> <code>https://payment.ardrive.io/v1</code></p>

      <h3>Endpoints Overview</h3>

      <h4>1. Get Amount of Credits for Byte Count</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/price/bytes/{"{byteCount}"}</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/price/bytes/5242880</code></li>
        <li><strong>Description:</strong> Returns the current amount of winc it will cost to upload a provided byte count worth of data.</li>
      </ul>

      <h4>2. Get winc for Payment Type and Amount</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/price/{"{type}"}/{"{amount}"}</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/price/usd/1000</code></li>
        <li><strong>Description:</strong> Returns the current amount of winc Turbo will quote for a given payment type and amount.</li>
      </ul>

      <h4>3. Get Current Balance of winc</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/balance</code></li>
        <li><strong>Headers:</strong>
          <ul>
            <li><code>x-signature</code>: string (required)</li>
            <li><code>x-nonce</code>: string (required)</li>
            <li><code>x-public-key</code>: string (required)</li>
          </ul>
        </li>
        <li><strong>Description:</strong> Use a signed request of a previously obtained JWT to get the signing wallet's current service balance in winc.</li>
      </ul>

      <h4>4. Get Quote for Credits</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/top-up/{"{method}"}/{"{address}"}/{"{currency}"}/{"{amount}"}</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/top-up/checkout-session/cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q/usd/1000</code></li>
        <li><strong>Description:</strong> Gets a quote and payment session for a given payment method, destination address, currency type, and payment amount.</li>
      </ul>

      <h4>5. Get Supported Currencies</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/currencies</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/currencies</code></li>
        <li><strong>Description:</strong> Returns a list of currency types supported by Turbo.</li>
      </ul>

      <h4>6. Get Supported Countries</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/countries</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/countries</code></li>
        <li><strong>Description:</strong> Returns a list of countries where Turbo is available.</li>
      </ul>

      <h4>7. Get Conversion Rates</h4>
      <ul>
        <li><strong>Endpoint:</strong> <code>/rates</code></li>
        <li><strong>Example:</strong> <code>https://payment.ardrive.io/v1/rates</code></li>
        <li><strong>Description:</strong> Returns supported fiat conversion rates for 1GB of storage based on current market prices.</li>
      </ul>

      <p><strong>Note:</strong> This service is evolving. For the most up-to-date info, see the <a href="https://payment.ardrive.io/v1" target="_blank" rel="noopener noreferrer">official docs</a> or view the raw JSON documentation.</p>
    </div>
  );
};

export default ApiReference; 