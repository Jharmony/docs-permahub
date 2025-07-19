import React from "react";
import { Link } from "react-router-dom";

function GettingStarted() {
  return (
    <div className="page-container">
      <h1>Getting Started</h1>
      
      <p>Welcome to @permaweb/libs! This guide will help you set up your development environment and create your first application using the permaweb libraries.</p>
      
      <h2>Prerequisites</h2>
      
      <p>Before you begin, make sure you have the following installed:</p>
      
      <ul>
        <li><strong>Node.js</strong> &gt;= v18.0</li>
        <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
        <li>Basic knowledge of <strong>TypeScript</strong> (recommended)</li>
        <li>Understanding of <strong>React</strong> (if building web applications)</li>
      </ul>
      
      <h2>Installation</h2>
      
      <p>Install @permaweb/libs along with its required dependencies:</p>
      
      <pre><code>npm install @permaweb/libs arweave @permaweb/aoconnect</code></pre>
      
      <p>Or if you prefer yarn:</p>
      
      <pre><code>yarn add @permaweb/libs arweave @permaweb/aoconnect</code></pre>
      
      <h2>Basic Setup</h2>
      
      <h3>1. Initialize the SDK</h3>
      
      <p>First, you need to initialize the permaweb SDK with Arweave and AO Connect:</p>
      
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
      
      <h3>2. Create Your First Zone</h3>
      
      <p>Zones are the foundation of the permaweb ecosystem. Let's create your first zone:</p>
      
      <pre><code>{`// Create a new zone
const zoneId = await permaweb.createZone();

console.log("Created zone with ID:", zoneId);`}</code></pre>
      
      <h3>3. Create a Profile</h3>
      
      <p>Profiles represent users, organizations, or channels on the permaweb:</p>
      
      <pre><code>{`// Create a profile
const profileId = await permaweb.createProfile({
  username: "myusername",
  displayName: "My Display Name",
  description: "A brief description about me",
  thumbnail: "thumbnail-image-data", // optional
  banner: "banner-image-data", // optional
});

console.log("Created profile with ID:", profileId);`}</code></pre>
      
      <h3>4. Create an Atomic Asset</h3>
      
      <p>Atomic assets are unique digital items stored on Arweave:</p>
      
      <pre><code>{`// Create an atomic asset
const assetId = await permaweb.createAtomicAsset({
  name: "My First Asset",
  description: "This is my first atomic asset on the permaweb",
  topics: ["example", "first-asset"],
  creator: wallet.address,
  data: "Hello, Permaweb!",
  contentType: "text/plain",
  assetType: "text",
  metadata: {
    version: "1.0.0",
    category: "documentation"
  },
});

console.log("Created asset with ID:", assetId);`}</code></pre>
      
      <h2>Complete Example</h2>
      
      <p>Here's a complete example that demonstrates the basic workflow:</p>
      
      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function initializePermaweb() {
  // Initialize Arweave and AO Connect
  const arweave = Arweave.init();
  const ao = connect();
  
  // Get wallet (browser or Node.js)
  const wallet = window.arweaveWallet; // Browser
  // const wallet = JSON.parse(readFileSync('./wallet.json', 'utf-8')); // Node.js
  
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao,
    arweave,
    signer: createDataItemSigner(wallet),
  });
  
  return permaweb;
}

async function createBasicProfile() {
  const permaweb = await initializePermaweb();
  
  try {
    // Create a zone
    const zoneId = await permaweb.createZone();
    console.log("Zone created:", zoneId);
    
    // Create a profile
    const profileId = await permaweb.createProfile({
      username: "developer123",
      displayName: "Web3 Developer",
      description: "Building the future of the web on Arweave",
    });
    console.log("Profile created:", profileId);
    
    // Create an asset
    const assetId = await permaweb.createAtomicAsset({
      name: "My First Permaweb Asset",
      description: "A simple text asset stored permanently on Arweave",
      topics: ["permaweb", "tutorial", "first-asset"],
      creator: permaweb.arweave.wallets.getAddress(permaweb.signer),
      data: "This content will be stored permanently on Arweave!",
      contentType: "text/plain",
      assetType: "document",
    });
    console.log("Asset created:", assetId);
    
    return { zoneId, profileId, assetId };
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
}

// Run the example
createBasicProfile()
  .then(result => console.log("Success:", result))
  .catch(error => console.error("Failed:", error));`}</code></pre>
      
      <h2>Next Steps</h2>
      
      <p>Now that you have the basics set up, explore these topics:</p>
      
      <ul>
        <li><Link to="/zones">Zones</Link> - Learn more about zones and entity management</li>
        <li><Link to="/profiles">Profiles</Link> - Create and manage user profiles</li>
        <li><Link to="/atomic-assets">Atomic Assets</Link> - Work with unique digital assets</li>
        <li><Link to="/collections">Collections</Link> - Organize assets into collections</li>
        <li><Link to="/comments">Comments</Link> - Add social features to your app</li>
      </ul>
      
      <h2>Troubleshooting</h2>
      
      <h3>Common Issues</h3>
      
      <ol>
        <li><strong>Wallet not connected</strong>: Make sure your Arweave wallet is properly connected</li>
        <li><strong>Network errors</strong>: Check your internet connection and Arweave gateway status</li>
        <li><strong>Permission errors</strong>: Ensure your wallet has sufficient AR tokens for transactions</li>
      </ol>
      
      <h3>Getting Help</h3>
      
      <ul>
        <li>Check the <Link to="/api-reference">API Reference</Link> for detailed method documentation</li>
        <li>Visit our <Link to="/examples">Examples</Link> page for more code samples</li>
        <li>Join our <a href="https://discord.gg/permaweb" target="_blank" rel="noreferrer">Discord community</a> for support</li>
        <li>Report issues on <a href="https://github.com/permaweb/libs" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
      
      <hr />
      
      <p>Ready to build something amazing on the permaweb? Let's continue with the <Link to="/zones">Zones documentation</Link>!</p>
    </div>
  );
}

export default GettingStarted; 