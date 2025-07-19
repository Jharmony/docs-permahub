import React from 'react';

const AtomicAssets = () => {
  return (
    <div className="page-container">
      <h1>Atomic Assets</h1>
      
      <p>Atomic assets are unique digital items consisting of an AO process and its associated data which are stored together in a single transaction on Arweave. They provide a standardized way to create, manage, and trade digital assets on the permaweb.</p>

      <h2>Overview</h2>
      <p>Atomic assets represent any type of digital content that can be permanently stored on Arweave. This includes images, documents, videos, music, or any other digital file. Each asset is unique and can be associated with metadata, topics, and ownership information.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Permanent Storage</strong>: All assets are stored permanently on Arweave</li>
        <li><strong>Unique Identification</strong>: Each asset has a unique identifier</li>
        <li><strong>Rich Metadata</strong>: Support for custom metadata and topics</li>
        <li><strong>Content Types</strong>: Support for any MIME type</li>
        <li><strong>Creator Attribution</strong>: Track who created each asset</li>
        <li><strong>Asset Types</strong>: Categorize assets by type</li>
      </ul>

      <h2>API Reference</h2>

      <h3><code>createAtomicAsset</code></h3>
      <p>Creates a new atomic asset on the permaweb.</p>

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

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Object containing asset details
          <ul>
            <li><code>name</code>: Name of the asset</li>
            <li><code>description</code>: Description of the asset</li>
            <li><code>topics</code>: Array of topics/tags for the asset</li>
            <li><code>creator</code>: Wallet address of the creator</li>
            <li><code>data</code>: The actual asset data (file content, text, etc.)</li>
            <li><code>contentType</code>: MIME type of the asset</li>
            <li><code>assetType</code>: Type/category of the asset</li>
            <li><code>metadata</code> (optional): Additional metadata object</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`AssetProcessId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Create a text asset
const textAssetId = await permaweb.createAtomicAsset({
  name: "My First Document",
  description: "A simple text document stored on Arweave",
  topics: ["document", "text", "first-asset"],
  creator: walletAddress,
  data: "Hello, this is my first atomic asset on the permaweb!",
  contentType: "text/plain",
  assetType: "document",
  metadata: {
    version: "1.0.0",
    category: "personal"
  }
});

// Create an image asset
const imageAssetId = await permaweb.createAtomicAsset({
  name: "Profile Picture",
  description: "My profile picture for social media",
  topics: ["image", "profile", "avatar"],
  creator: walletAddress,
  data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  contentType: "image/png",
  assetType: "image",
  metadata: {
    dimensions: "400x400",
    format: "PNG"
  }
});

console.log("Text asset created:", textAssetId);
console.log("Image asset created:", imageAssetId);`}</code></pre>

      <h3><code>getAtomicAsset</code></h3>
      <p>Retrieves a specific atomic asset by its ID.</p>

      <pre><code>{`const asset = await permaweb.getAtomicAsset(assetId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>assetId</code>: The ID of the asset to fetch</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  id: "AssetProcessId",
  name: "Asset Name",
  description: "Asset Description",
  topics: ["topic1", "topic2"],
  creator: "CreatorAddress",
  data: "AssetData",
  contentType: "text/plain",
  assetType: "document",
  metadata: {
    // Custom metadata
  },
  dateCreated: 123456789,
  lastUpdate: 123456789
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get asset by ID
const asset = await permaweb.getAtomicAsset(assetId);

console.log("Asset details:", {
  name: asset.name,
  description: asset.description,
  contentType: asset.contentType,
  topics: asset.topics,
  creator: asset.creator
});

// Access the asset data
console.log("Asset data:", asset.data);`}</code></pre>

      <h3><code>getAtomicAssets</code></h3>
      <p>Retrieves multiple atomic assets with optional filtering.</p>

      <pre><code>{`const assets = await permaweb.getAtomicAssets({
  creator: "CreatorAddress",
  assetType: "image",
  topics: ["art", "digital"]
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria
          <ul>
            <li><code>creator</code>: Filter by creator address</li>
            <li><code>assetType</code>: Filter by asset type</li>
            <li><code>topics</code>: Filter by topics</li>
            <li><code>limit</code>: Maximum number of assets to return</li>
            <li><code>offset</code>: Number of assets to skip</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
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
  total: 100,
  hasMore: true
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get all assets by a specific creator
const creatorAssets = await permaweb.getAtomicAssets({
  creator: walletAddress
});

// Get all image assets
const imageAssets = await permaweb.getAtomicAssets({
  assetType: "image"
});

// Get assets with specific topics
const artAssets = await permaweb.getAtomicAssets({
  topics: ["art", "digital", "nft"]
});

// Get assets with pagination
const paginatedAssets = await permaweb.getAtomicAssets({
  limit: 10,
  offset: 20
});

console.log("Creator assets:", creatorAssets.assets.length);
console.log("Image assets:", imageAssets.assets.length);
console.log("Art assets:", artAssets.assets.length);`}</code></pre>

      <h2>Complete Asset Management Example</h2>
      <p>Here's a comprehensive example demonstrating atomic asset lifecycle management:</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function manageAtomicAssets() {
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao: connect(),
    arweave: Arweave.init(),
    signer: createDataItemSigner(wallet),
  });

  const creatorAddress = permaweb.arweave.wallets.getAddress(permaweb.signer);

  try {
    // 1. Create a text asset
    console.log("Creating text asset...");
    const textAssetId = await permaweb.createAtomicAsset({
      name: "My Blog Post",
      description: "A blog post about building on Arweave",
      topics: ["blog", "arweave", "development"],
      creator: creatorAddress,
      data: "# Building on Arweave\\n\\nThis is my first blog post about building decentralized applications on Arweave...",
      contentType: "text/markdown",
      assetType: "document",
      metadata: {
        category: "blog",
        readTime: "5 minutes",
        tags: ["tutorial", "beginner"]
      }
    });
    console.log("Text asset created:", textAssetId);

    // 2. Create an image asset
    console.log("Creating image asset...");
    const imageAssetId = await permaweb.createAtomicAsset({
      name: "Project Screenshot",
      description: "Screenshot of my Arweave project",
      topics: ["screenshot", "project", "arweave"],
      creator: creatorAddress,
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...", // Base64 image data
      contentType: "image/png",
      assetType: "image",
      metadata: {
        dimensions: "1920x1080",
        format: "PNG",
        project: "My Arweave App"
      }
    });
    console.log("Image asset created:", imageAssetId);

    // 3. Retrieve individual assets
    console.log("Fetching text asset...");
    const textAsset = await permaweb.getAtomicAsset(textAssetId);
    console.log("Text asset:", textAsset.name);

    console.log("Fetching image asset...");
    const imageAsset = await permaweb.getAtomicAsset(imageAssetId);
    console.log("Image asset:", imageAsset.name);

    // 4. Get all assets by creator
    console.log("Fetching all creator assets...");
    const allAssets = await permaweb.getAtomicAssets({
      creator: creatorAddress
    });
    console.log("Total assets created:", allAssets.assets.length);

    // 5. Get assets by type
    console.log("Fetching document assets...");
    const documentAssets = await permaweb.getAtomicAssets({
      assetType: "document"
    });
    console.log("Document assets:", documentAssets.assets.length);

    return {
      textAssetId,
      imageAssetId,
      textAsset,
      imageAsset,
      allAssets: allAssets.assets,
      documentAssets: documentAssets.assets
    };

  } catch (error) {
    console.error("Error managing atomic assets:", error);
    throw error;
  }
}

// Run the example
manageAtomicAssets()
  .then(result => console.log("Asset management completed:", result))
  .catch(error => console.error("Asset management failed:", error));`}</code></pre>

      <h2>Asset Data Handling</h2>

      <h3>File Upload Helper</h3>
      <pre><code>{`async function uploadFileAsAsset(file: File, permaweb: any) {
  const creatorAddress = permaweb.arweave.wallets.getAddress(permaweb.signer);
  
  // Convert file to base64
  const base64Data = await fileToBase64(file);
  
  // Create asset
  const assetId = await permaweb.createAtomicAsset({
    name: file.name,
    description: \`Uploaded file: \${file.name}\`,
    topics: ["upload", "file", file.type.split('/')[0]], // e.g., "image", "video", "audio"
    creator: creatorAddress,
    data: base64Data,
    contentType: file.type,
    assetType: file.type.split('/')[0], // Use MIME type category
    metadata: {
      originalName: file.name,
      size: file.size,
      lastModified: file.lastModified
    }
  });
  
  return assetId;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}`}</code></pre>

      <h3>Asset Retrieval Helper</h3>
      <pre><code>{`async function downloadAsset(assetId: string, permaweb: any) {
  const asset = await permaweb.getAtomicAsset(assetId);
  
  // Convert base64 data back to blob
  const base64Response = await fetch(asset.data);
  const blob = await base64Response.blob();
  
  // Create download link
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = asset.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}`}</code></pre>

      <h2>Best Practices</h2>

      <h3>1. Asset Naming and Organization</h3>
      <pre><code>{`const assetNaming = {
  name: "descriptive-asset-name",           // Clear, descriptive names
  description: "Detailed description of what the asset contains and its purpose",
  topics: ["category", "subcategory", "specific-tag"], // Hierarchical topics
  assetType: "image|document|video|audio|data" // Consistent type categories
};`}</code></pre>

      <h3>2. Metadata Structure</h3>
      <pre><code>{`const assetMetadata = {
  // Version information
  version: "1.0.0",
  created: new Date().toISOString(),
  
  // Content information
  category: "art|document|media|data",
  tags: ["tag1", "tag2", "tag3"],
  
  // Technical details
  size: fileSize,
  format: fileFormat,
  dimensions: "1920x1080", // for images/videos
  
  // Custom fields
  customField1: "value1",
  customField2: "value2"
};`}</code></pre>

      <h3>3. Error Handling</h3>
      <pre><code>{`async function safeAssetOperation(assetId: string) {
  try {
    const asset = await permaweb.getAtomicAsset(assetId);
    return asset;
  } catch (error) {
    if (error.message.includes("not found")) {
      console.log("Asset not found:", assetId);
      return null;
    }
    if (error.message.includes("permission")) {
      console.log("Permission denied for asset:", assetId);
      return null;
    }
    throw error;
  }
}`}</code></pre>

      <h3>4. Asset Validation</h3>
      <pre><code>{`function validateAssetData(assetData: any) {
  const errors = [];
  
  if (!assetData.name || assetData.name.length < 1) {
    errors.push("Asset name is required");
  }
  
  if (!assetData.description || assetData.description.length < 10) {
    errors.push("Asset description must be at least 10 characters");
  }
  
  if (!assetData.data) {
    errors.push("Asset data is required");
  }
  
  if (!assetData.contentType) {
    errors.push("Content type is required");
  }
  
  if (assetData.data && assetData.data.length > 100 * 1024 * 1024) { // 100MB limit
    errors.push("Asset data is too large (max 100MB)");
  }
  
  return errors;
}`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/zones">Zones</a> - Learn about the entities that can own assets</li>
        <li><a href="#/profiles">Profiles</a> - Create profiles that can be associated with assets</li>
        <li><a href="#/collections">Collections</a> - Organize assets into collections</li>
        <li><a href="#/comments">Comments</a> - Add social features to assets</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
      </ul>

      <p>Ready to create your first atomic asset? Start with the <a href="#/getting-started">Getting Started</a> guide or explore <a href="#/collections">Collections</a> to organize your assets!</p>
    </div>
  );
};

export default AtomicAssets; 