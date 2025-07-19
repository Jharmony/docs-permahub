import React from 'react';

const Collections = () => {
  return (
    <div className="page-container">
      <h1>Collections</h1>
      
      <p>Collections provide a way to organize and group atomic assets together. They allow you to create curated sets of assets that can be shared, discovered, and managed as a single unit.</p>

      <h2>Overview</h2>
      <p>Collections are containers that hold multiple atomic assets with shared metadata and organization. They're perfect for creating galleries, portfolios, albums, or any group of related assets that should be presented together.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Asset Grouping</strong>: Organize multiple assets into logical collections</li>
        <li><strong>Shared Metadata</strong>: Apply common metadata to all assets in a collection</li>
        <li><strong>Curated Content</strong>: Create themed collections for discovery</li>
        <li><strong>Flexible Organization</strong>: Add or remove assets from collections dynamically</li>
        <li><strong>Collection Discovery</strong>: Find and explore collections by various criteria</li>
      </ul>

      <h2>API Reference</h2>

      <h3><code>createCollection</code></h3>
      <p>Creates a new collection to organize atomic assets.</p>

      <pre><code>{`const collectionId = await permaweb.createCollection({
  name: "My Art Collection",
  description: "A collection of my digital artwork",
  topics: ["art", "digital", "collection"],
  creator: CREATOR_ADDRESS,
  metadata: {
    category: "art",
    style: "digital"
  }
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Object containing collection details
          <ul>
            <li><code>name</code>: Name of the collection</li>
            <li><code>description</code>: Description of the collection</li>
            <li><code>topics</code>: Array of topics/tags for the collection</li>
            <li><code>creator</code>: Wallet address of the creator</li>
            <li><code>metadata</code> (optional): Additional metadata object</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`CollectionProcessId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Create a basic collection
const collectionId = await permaweb.createCollection({
  name: "Nature Photography",
  description: "A collection of beautiful nature photographs",
  topics: ["photography", "nature", "landscape"],
  creator: walletAddress,
  metadata: {
    category: "photography",
    location: "Various",
    season: "All seasons"
  }
});

console.log("Collection created:", collectionId);`}</code></pre>

      <h3><code>updateCollectionAssets</code></h3>
      <p>Updates the assets within a collection by adding or removing assets.</p>

      <pre><code>{`const updateId = await permaweb.updateCollectionAssets(
  {
    assets: ["asset1", "asset2", "asset3"],
    action: "add" // or "remove"
  },
  collectionId
);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Object containing update details
          <ul>
            <li><code>assets</code>: Array of asset IDs to add or remove</li>
            <li><code>action</code>: Either "add" or "remove"</li>
          </ul>
        </li>
        <li><code>collectionId</code>: The ID of the collection to update</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`CollectionUpdateId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Add assets to collection
const addUpdateId = await permaweb.updateCollectionAssets(
  {
    assets: [assetId1, assetId2, assetId3],
    action: "add"
  },
  collectionId
);

// Remove assets from collection
const removeUpdateId = await permaweb.updateCollectionAssets(
  {
    assets: [assetId1],
    action: "remove"
  },
  collectionId
);

console.log("Assets added:", addUpdateId);
console.log("Assets removed:", removeUpdateId);`}</code></pre>

      <h3><code>getCollection</code></h3>
      <p>Retrieves a specific collection by its ID.</p>

      <pre><code>{`const collection = await permaweb.getCollection(collectionId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>collectionId</code>: The ID of the collection to fetch</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  id: "CollectionProcessId",
  name: "Collection Name",
  description: "Collection Description",
  topics: ["topic1", "topic2"],
  creator: "CreatorAddress",
  assets: [
    {
      id: "AssetProcessId1",
      name: "Asset Name 1",
      description: "Asset Description 1",
      // ... other asset properties
    },
    {
      id: "AssetProcessId2",
      name: "Asset Name 2",
      description: "Asset Description 2",
      // ... other asset properties
    }
  ],
  metadata: {
    // Custom metadata
  },
  dateCreated: 123456789,
  lastUpdate: 123456789
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get collection by ID
const collection = await permaweb.getCollection(collectionId);

console.log("Collection:", {
  name: collection.name,
  description: collection.description,
  assetCount: collection.assets.length,
  creator: collection.creator
});

// List all assets in the collection
collection.assets.forEach(asset => {
  console.log(\`- \${asset.name}: \${asset.description}\`);
});`}</code></pre>

      <h3><code>getCollections</code></h3>
      <p>Retrieves multiple collections with optional filtering.</p>

      <pre><code>{`const collections = await permaweb.getCollections({
  creator: "CreatorAddress",
  topics: ["art", "photography"]
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria
          <ul>
            <li><code>creator</code>: Filter by creator address</li>
            <li><code>topics</code>: Filter by topics</li>
            <li><code>limit</code>: Maximum number of collections to return</li>
            <li><code>offset</code>: Number of collections to skip</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  collections: [
    {
      id: "CollectionProcessId1",
      name: "Collection Name 1",
      description: "Collection Description 1",
      // ... other collection properties
    },
    {
      id: "CollectionProcessId2",
      name: "Collection Name 2",
      description: "Collection Description 2",
      // ... other collection properties
    }
  ],
  total: 50,
  hasMore: true
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get all collections by a specific creator
const creatorCollections = await permaweb.getCollections({
  creator: walletAddress
});

// Get collections with specific topics
const artCollections = await permaweb.getCollections({
  topics: ["art", "digital"]
});

// Get collections with pagination
const paginatedCollections = await permaweb.getCollections({
  limit: 10,
  offset: 20
});

console.log("Creator collections:", creatorCollections.collections.length);
console.log("Art collections:", artCollections.collections.length);`}</code></pre>

      <h2>Complete Collection Management Example</h2>
      <p>Here's a comprehensive example demonstrating collection lifecycle management:</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function manageCollections() {
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao: connect(),
    arweave: Arweave.init(),
    signer: createDataItemSigner(wallet),
  });

  const creatorAddress = permaweb.arweave.wallets.getAddress(permaweb.signer);

  try {
    // 1. Create some atomic assets first
    console.log("Creating assets...");
    const asset1 = await permaweb.createAtomicAsset({
      name: "Sunset Photo 1",
      description: "Beautiful sunset over the ocean",
      topics: ["photography", "sunset", "ocean"],
      creator: creatorAddress,
      data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
      contentType: "image/jpeg",
      assetType: "image"
    });

    const asset2 = await permaweb.createAtomicAsset({
      name: "Sunset Photo 2",
      description: "Another stunning sunset view",
      topics: ["photography", "sunset", "mountains"],
      creator: creatorAddress,
      data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
      contentType: "image/jpeg",
      assetType: "image"
    });

    const asset3 = await permaweb.createAtomicAsset({
      name: "Sunset Photo 3",
      description: "Golden hour photography",
      topics: ["photography", "sunset", "golden-hour"],
      creator: creatorAddress,
      data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
      contentType: "image/jpeg",
      assetType: "image"
    });

    console.log("Assets created:", [asset1, asset2, asset3]);

    // 2. Create a collection
    console.log("Creating collection...");
    const collectionId = await permaweb.createCollection({
      name: "Sunset Photography Collection",
      description: "A curated collection of beautiful sunset photographs from around the world",
      topics: ["photography", "sunset", "collection", "nature"],
      creator: creatorAddress,
      metadata: {
        category: "photography",
        theme: "sunset",
        location: "Various",
        season: "All seasons",
        equipment: "Digital camera"
      }
    });
    console.log("Collection created:", collectionId);

    // 3. Add assets to the collection
    console.log("Adding assets to collection...");
    const addUpdateId = await permaweb.updateCollectionAssets(
      {
        assets: [asset1, asset2, asset3],
        action: "add"
      },
      collectionId
    );
    console.log("Assets added to collection:", addUpdateId);

    // 4. Retrieve the collection
    console.log("Fetching collection...");
    const collection = await permaweb.getCollection(collectionId);
    console.log("Collection details:", {
      name: collection.name,
      description: collection.description,
      assetCount: collection.assets.length,
      topics: collection.topics
    });

    // 5. Get all collections by creator
    console.log("Fetching all creator collections...");
    const allCollections = await permaweb.getCollections({
      creator: creatorAddress
    });
    console.log("Total collections created:", allCollections.collections.length);

    // 6. Get collections by topic
    console.log("Fetching photography collections...");
    const photoCollections = await permaweb.getCollections({
      topics: ["photography"]
    });
    console.log("Photography collections:", photoCollections.collections.length);

    return {
      assets: [asset1, asset2, asset3],
      collectionId,
      addUpdateId,
      collection,
      allCollections: allCollections.collections,
      photoCollections: photoCollections.collections
    };

  } catch (error) {
    console.error("Error managing collections:", error);
    throw error;
  }
}

// Run the example
manageCollections()
  .then(result => console.log("Collection management completed:", result))
  .catch(error => console.error("Collection management failed:", error));`}</code></pre>

      <h2>Collection Organization Strategies</h2>

      <h3>1. Thematic Collections</h3>
      <pre><code>{`// Create collections based on themes
const thematicCollections = [
  {
    name: "Abstract Art",
    description: "Collection of abstract digital artwork",
    topics: ["art", "abstract", "digital"],
    metadata: { category: "art", style: "abstract" }
  },
  {
    name: "Portrait Photography",
    description: "Professional portrait photography",
    topics: ["photography", "portrait", "professional"],
    metadata: { category: "photography", style: "portrait" }
  },
  {
    name: "Nature Sounds",
    description: "Relaxing nature sound recordings",
    topics: ["audio", "nature", "relaxation"],
    metadata: { category: "audio", style: "ambient" }
  }
];`}</code></pre>

      <h3>2. Time-based Collections</h3>
      <pre><code>{`// Create collections based on time periods
const timeBasedCollection = await permaweb.createCollection({
  name: "2024 Portfolio",
  description: "My work from 2024",
  topics: ["portfolio", "2024", "yearly"],
  creator: creatorAddress,
  metadata: {
    year: "2024",
    type: "portfolio",
    status: "active"
  }
});`}</code></pre>

      <h3>3. Project-based Collections</h3>
      <pre><code>{`// Create collections for specific projects
const projectCollection = await permaweb.createCollection({
  name: "Arweave Tutorial Series",
  description: "Complete tutorial series for building on Arweave",
  topics: ["tutorial", "arweave", "development", "series"],
  creator: creatorAddress,
  metadata: {
    project: "Arweave Tutorials",
    status: "in-progress",
    totalParts: 10,
    currentPart: 3
  }
});`}</code></pre>

      <h2>Collection Management Helpers</h2>

      <h3>Batch Asset Operations</h3>
      <pre><code>{`async function addMultipleAssetsToCollection(
  assetIds: string[],
  collectionId: string,
  permaweb: any
) {
  const batchSize = 10; // Process in batches to avoid timeouts
  const results = [];

  for (let i = 0; i < assetIds.length; i += batchSize) {
    const batch = assetIds.slice(i, i + batchSize);
    
    const updateId = await permaweb.updateCollectionAssets(
      {
        assets: batch,
        action: "add"
      },
      collectionId
    );
    
    results.push(updateId);
  }

  return results;
}`}</code></pre>

      <h3>Collection Validation</h3>
      <pre><code>{`function validateCollectionData(collectionData: any) {
  const errors = [];
  
  if (!collectionData.name || collectionData.name.length < 3) {
    errors.push("Collection name must be at least 3 characters long");
  }
  
  if (!collectionData.description || collectionData.description.length < 10) {
    errors.push("Collection description must be at least 10 characters");
  }
  
  if (!collectionData.topics || collectionData.topics.length === 0) {
    errors.push("Collection must have at least one topic");
  }
  
  if (collectionData.topics && collectionData.topics.length > 10) {
    errors.push("Collection cannot have more than 10 topics");
  }
  
  return errors;
}`}</code></pre>

      <h2>Best Practices</h2>

      <h3>1. Collection Naming and Organization</h3>
      <pre><code>{`const collectionGuidelines = {
  name: "descriptive-collection-name",     // Clear, descriptive names
  description: "Detailed description of what the collection contains and its purpose",
  topics: ["category", "subcategory", "specific-tag"], // Hierarchical topics
  metadata: {
    category: "art|photography|audio|video|document",
    status: "active|archived|draft",
    visibility: "public|private|unlisted"
  }
};`}</code></pre>

      <h3>2. Asset Management</h3>
      <pre><code>{`// Keep collections focused and well-organized
const collectionManagement = {
  maxAssetsPerCollection: 100,           // Reasonable limit
  regularMaintenance: true,              // Review and update regularly
  qualityControl: true,                  // Ensure all assets meet standards
  metadataConsistency: true              // Maintain consistent metadata
};`}</code></pre>

      <h3>3. Error Handling</h3>
      <pre><code>{`async function safeCollectionOperation(collectionId: string) {
  try {
    const collection = await permaweb.getCollection(collectionId);
    return collection;
  } catch (error) {
    if (error.message.includes("not found")) {
      console.log("Collection not found:", collectionId);
      return null;
    }
    if (error.message.includes("permission")) {
      console.log("Permission denied for collection:", collectionId);
      return null;
    }
    throw error;
  }
}`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/zones">Zones</a> - Learn about the entities that can own collections</li>
        <li><a href="#/profiles">Profiles</a> - Create profiles that can be associated with collections</li>
        <li><a href="#/atomic-assets">Atomic Assets</a> - Create assets that can be organized into collections</li>
        <li><a href="#/comments">Comments</a> - Add social features to collections</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
      </ul>

      <p>Ready to create your first collection? Start with the <a href="#/getting-started">Getting Started</a> guide or explore <a href="#/atomic-assets">Atomic Assets</a> to add content to your collections!</p>
    </div>
  );
};

export default Collections; 