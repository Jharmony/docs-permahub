import React from 'react';

const Profiles = () => {
  return (
    <div className="page-container">
      <h1>Profiles</h1>
      
      <p>Profiles are a digital representation of entities, such as users, organizations, or channels. They include specific metadata that describes the entity and can be associated with various digital assets and collections.</p>

      <h2>Overview</h2>
      <p>Profiles extend the concept of zones to provide a standardized way to represent users and organizations on the permaweb. They include user-specific metadata like usernames, display names, descriptions, and profile images.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>User Identity</strong>: Represent users with unique usernames and display names</li>
        <li><strong>Profile Images</strong>: Support for thumbnail and banner images</li>
        <li><strong>Asset Association</strong>: Link profiles to atomic assets and collections</li>
        <li><strong>Wallet Integration</strong>: Associate profiles with Arweave wallet addresses</li>
        <li><strong>Metadata Storage</strong>: Store rich profile information permanently</li>
      </ul>

      <h2>API Reference</h2>

      <h3><code>createProfile</code></h3>
      <p>Creates a new user profile on the permaweb.</p>

      <pre><code>{`const profileId = await permaweb.createProfile({
  username: "My username",
  displayName: "My display name",
  description: "My description",
  thumbnail: "Thumbnail image data",
  banner: "Banner image data",
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Object containing profile details
          <ul>
            <li><code>username</code>: Unique username for the profile</li>
            <li><code>displayName</code>: Human-readable display name</li>
            <li><code>description</code>: Profile description</li>
            <li><code>thumbnail</code> (optional): Thumbnail image data</li>
            <li><code>banner</code> (optional): Banner image data</li>
          </ul>
        </li>
        <li><code>callback</code> (optional): Callback function for client use</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`ProfileProcessId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Create a basic profile
const profileId = await permaweb.createProfile({
  username: "alice_dev",
  displayName: "Alice Developer",
  description: "Full-stack developer building on Arweave",
});

// Create a profile with images
const profileId = await permaweb.createProfile({
  username: "bob_artist",
  displayName: "Bob Digital Artist",
  description: "Creating digital art on the permaweb",
  thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  banner: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
});

console.log("Profile created:", profileId);`}</code></pre>

      <h3><code>updateProfile</code></h3>
      <p>Updates an existing profile with new information.</p>

      <pre><code>{`const profileId = await permaweb.updateProfile({
  username: "My username",
  displayName: "My display name",
  description: "My description",
  thumbnail: "Thumbnail image data",
  banner: "Banner image data",
}, profileId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Profile details to update, structured similarly to <code>createProfile</code></li>
        <li><code>profileId</code>: The ID of the profile to update</li>
        <li><code>callback</code> (optional): Callback function for client use</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`ProfileProcessUpdateId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Update profile information
const updateId = await permaweb.updateProfile({
  username: "alice_dev",
  displayName: "Alice Senior Developer",
  description: "Senior full-stack developer specializing in Arweave and blockchain",
  thumbnail: "new-thumbnail-data",
}, profileId);

console.log("Profile updated:", updateId);`}</code></pre>

      <h3><code>getProfileById</code></h3>
      <p>Retrieves a profile by its unique ID.</p>

      <pre><code>{`const profile = await permaweb.getProfileById(profileId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>profileId</code>: The ID of the profile to fetch</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
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
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get profile by ID
const profile = await permaweb.getProfileById(profileId);

console.log("Profile:", {
  username: profile.username,
  displayName: profile.displayName,
  description: profile.description,
  assetCount: profile.assets.length
});`}</code></pre>

      <h3><code>getProfileByWalletAddress</code></h3>
      <p>Retrieves a profile by the associated wallet address.</p>

      <pre><code>{`const profile = await permaweb.getProfileByWalletAddress(walletAddress);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>walletAddress</code>: The wallet address associated with the profile</li>
      </ul>

      <h4>Returns</h4>
      <p>Same structure as <code>getProfileById</code></p>

      <h4>Example</h4>
      <pre><code>{`// Get profile by wallet address
const walletAddress = "abc123...";
const profile = await permaweb.getProfileByWalletAddress(walletAddress);

if (profile) {
  console.log("Found profile:", profile.username);
} else {
  console.log("No profile found for wallet:", walletAddress);
}`}</code></pre>

      <h2>Complete Profile Management Example</h2>
      <p>Here's a comprehensive example demonstrating profile lifecycle management:</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function manageProfile() {
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao: connect(),
    arweave: Arweave.init(),
    signer: createDataItemSigner(wallet),
  });

  try {
    // 1. Create a new profile
    console.log("Creating profile...");
    const profileId = await permaweb.createProfile({
      username: "web3_developer",
      displayName: "Web3 Developer",
      description: "Passionate about building decentralized applications on Arweave",
      thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    });
    console.log("Profile created:", profileId);

    // 2. Update the profile
    console.log("Updating profile...");
    const updateId = await permaweb.updateProfile({
      username: "senior_web3_dev",
      displayName: "Senior Web3 Developer",
      description: "Senior developer with 5+ years experience in blockchain and Arweave",
      banner: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    }, profileId);
    console.log("Profile updated:", updateId);

    // 3. Retrieve profile by ID
    console.log("Fetching profile by ID...");
    const profileById = await permaweb.getProfileById(profileId);
    console.log("Profile by ID:", profileById);

    // 4. Retrieve profile by wallet address
    console.log("Fetching profile by wallet address...");
    const walletAddress = permaweb.arweave.wallets.getAddress(permaweb.signer);
    const profileByWallet = await permaweb.getProfileByWalletAddress(walletAddress);
    console.log("Profile by wallet:", profileByWallet);

    return {
      profileId,
      updateId,
      profileById,
      profileByWallet
    };

  } catch (error) {
    console.error("Error managing profile:", error);
    throw error;
  }
}

// Run the example
manageProfile()
  .then(result => console.log("Profile management completed:", result))
  .catch(error => console.error("Profile management failed:", error));`}</code></pre>

      <h2>Profile Data Structure</h2>

      <h3>Profile Object</h3>
      <pre><code>{`interface Profile {
  id: string;                    // Unique profile identifier
  walletAddress: string;         // Associated wallet address
  username: string;              // Unique username
  displayName: string;           // Human-readable display name
  description: string;           // Profile description
  thumbnail?: string;            // Thumbnail image transaction ID
  banner?: string;               // Banner image transaction ID
  assets: Asset[];               // Associated assets
  dateCreated: number;           // Creation timestamp
  lastUpdate: number;            // Last update timestamp
}

interface Asset {
  id: string;                    // Asset identifier
  quantity: string;              // Asset quantity
  dateCreated: number;           // Asset creation date
  lastUpdate: number;            // Asset last update date
}`}</code></pre>

      <h2>Profile Image Handling</h2>

      <h3>Uploading Images</h3>
      <pre><code>{`async function uploadProfileImage(imageFile: File): Promise<string> {
  // Convert image to base64 or upload to Arweave
  const imageData = await fileToBase64(imageFile);
  
  // Upload to Arweave and get transaction ID
  const transaction = await permaweb.arweave.createTransaction({
    data: imageData
  });
  
  transaction.addTag('Content-Type', imageFile.type);
  transaction.addTag('App-Name', 'Permaweb-Profile');
  
  await permaweb.arweave.transactions.sign(transaction);
  await permaweb.arweave.transactions.post(transaction);
  
  return transaction.id;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}`}</code></pre>

      <h3>Using Images in Profiles</h3>
      <pre><code>{`// Create profile with uploaded images
const thumbnailTxId = await uploadProfileImage(thumbnailFile);
const bannerTxId = await uploadProfileImage(bannerFile);

const profileId = await permaweb.createProfile({
  username: "artist_profile",
  displayName: "Digital Artist",
  description: "Creating unique digital art on the permaweb",
  thumbnail: thumbnailTxId,
  banner: bannerTxId,
});`}</code></pre>

      <h2>Best Practices</h2>

      <h3>1. Username Guidelines</h3>
      <ul>
        <li>Use unique, memorable usernames</li>
        <li>Avoid special characters that might cause issues</li>
        <li>Consider using a consistent naming pattern</li>
        <li>Check for username availability before creation</li>
      </ul>

      <h3>2. Profile Content</h3>
      <pre><code>{`const profileContent = {
  username: "developer_alice",           // Unique identifier
  displayName: "Alice Johnson",          // Real name or preferred name
  description: "Full-stack developer passionate about Web3 and decentralized applications. Building the future on Arweave.", // Detailed description
  thumbnail: "profile-thumbnail-tx-id",  // Square image, recommended 400x400
  banner: "profile-banner-tx-id"         // Wide image, recommended 1200x400
};`}</code></pre>

      <h3>3. Error Handling</h3>
      <pre><code>{`async function safeProfileOperation(profileId: string) {
  try {
    const profile = await permaweb.getProfileById(profileId);
    return profile;
  } catch (error) {
    if (error.message.includes("not found")) {
      console.log("Profile not found:", profileId);
      return null;
    }
    if (error.message.includes("wallet")) {
      console.log("Wallet not connected");
      return null;
    }
    throw error;
  }
}`}</code></pre>

      <h3>4. Profile Validation</h3>
      <pre><code>{`function validateProfileData(profileData: any) {
  const errors = [];
  
  if (!profileData.username || profileData.username.length < 3) {
    errors.push("Username must be at least 3 characters long");
  }
  
  if (!profileData.displayName || profileData.displayName.length < 2) {
    errors.push("Display name must be at least 2 characters long");
  }
  
  if (profileData.description && profileData.description.length > 500) {
    errors.push("Description must be less than 500 characters");
  }
  
  return errors;
}`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/zones">Zones</a> - Learn about the foundation that profiles are built on</li>
        <li><a href="#/atomic-assets">Atomic Assets</a> - Create assets that can be associated with profiles</li>
        <li><a href="#/collections">Collections</a> - Organize profile assets into collections</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
      </ul>

      <p>Ready to create your profile? Start with the <a href="#/getting-started">Getting Started</a> guide or explore <a href="#/atomic-assets">Atomic Assets</a> to add content to your profile!</p>
    </div>
  );
};

export default Profiles; 