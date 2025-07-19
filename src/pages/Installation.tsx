import React from 'react';

const Installation = () => {
  return (
    <div className="page-container">
      <h1>Installation</h1>
      
      <p>This guide will help you install and set up @permaweb/libs in your project.</p>

      <h2>Prerequisites</h2>
      <p>Before installing @permaweb/libs, make sure you have:</p>
      <ul>
        <li><strong>Node.js</strong> &gt;= v18.0</li>
        <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
        <li>Basic knowledge of <strong>TypeScript</strong> (recommended)</li>
        <li>Understanding of <strong>Arweave</strong> and <strong>AO Connect</strong></li>
      </ul>

      <h2>Setting Up AO and AOS Locally</h2>
      <p>To work with AO (Arweave Operating System) and AOS (AO Shell) locally, follow these steps:</p>

      <h3>System Requirements</h3>
      <p>The local client of AOS is super simple to install. Just make sure you have:</p>
      <ul>
        <li><strong>NodeJS version 20+</strong>. (If you haven't yet installed it, check out <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js installation page</a> to find instructions for your OS).</li>
        <li>A code editor of your choice.</li>
      </ul>

      <h3>Installing AOS</h3>
      <p>Once you have NodeJS on your machine, all you need to do is install AOS and run it:</p>

      <pre><code>{`npm i -g https://get_ao.arweave.net`}</code></pre>

      <p>After installation, we can simply run the command itself to start a new AOS process!</p>

      <pre><code>{`aos`}</code></pre>

      <p>You authenticate yourself to your AOS process using a keyfile. If you have an Arweave wallet you can specify it by adding a <code>--wallet [location]</code> flag. If you don't, a new keyfile will be generated and stored locally for you at <code>~/.aos.json</code>.</p>

      <h3>Quick Test</h3>
      <p>To verify your AOS installation is working:</p>

      <pre><code>{`# Start AOS
aos

# In the AOS shell, try a simple command
> .help`}</code></pre>

      <p>This should display the available AOS commands and confirm your installation is working correctly.</p>

      <h2>Installation</h2>

      <h3>Install @permaweb/libs</h3>
      <p>Install the main package along with its required dependencies:</p>

      <pre><code>{`npm install @permaweb/libs arweave @permaweb/aoconnect`}</code></pre>

      <p>Or if you prefer yarn:</p>

      <pre><code>{`yarn add @permaweb/libs arweave @permaweb/aoconnect`}</code></pre>

      <h3>Install Development Dependencies (Optional)</h3>
      <p>For TypeScript support and development tools:</p>

      <pre><code>{`npm install --save-dev @types/node typescript`}</code></pre>

      <h2>Basic Setup</h2>

      <h3>1. Import Dependencies</h3>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";`}</code></pre>

      <h3>2. Initialize the SDK</h3>

      <pre><code>{`// Browser Usage
const wallet = window.arweaveWallet;

// NodeJS Usage
const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET, "utf-8"));

const permaweb = Permaweb.init({
  ao: connect(),
  arweave: Arweave.init(),
  signer: createDataItemSigner(wallet),
});`}</code></pre>

      <h3>3. Verify Installation</h3>
      <p>Test that everything is working:</p>

      <pre><code>{`// Test the installation
async function testInstallation() {
  try {
    // Create a simple zone to test
    const zoneId = await permaweb.createZone();
    console.log("✅ Installation successful! Created zone:", zoneId);
    return true;
  } catch (error) {
    console.error("❌ Installation failed:", error);
    return false;
  }
}

testInstallation();`}</code></pre>

      <h2>Environment Setup</h2>

      <h3>Browser Environment</h3>
      <p>For browser-based applications, you'll need to connect an Arweave wallet:</p>

      <pre><code>{`// Check if Arweave wallet is available
if (typeof window !== 'undefined' && window.arweaveWallet) {
  const wallet = window.arweaveWallet;
  // Initialize permaweb with browser wallet
} else {
  console.error("Arweave wallet not found. Please install ArConnect or another Arweave wallet.");
}`}</code></pre>

      <h3>Node.js Environment</h3>
      <p>For server-side applications:</p>

      <pre><code>{`import { readFileSync } from 'fs';

// Load wallet from file
const walletPath = process.env.WALLET_PATH || './wallet.json';
const wallet = JSON.parse(readFileSync(walletPath, 'utf-8'));

// Initialize permaweb
const permaweb = Permaweb.init({
  ao: connect(),
  arweave: Arweave.init(),
  signer: createDataItemSigner(wallet),
});`}</code></pre>

      <h2>Configuration Options</h2>

      <h3>Arweave Configuration</h3>
      <p>You can customize the Arweave connection:</p>

      <pre><code>{`const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
  timeout: 20000,
  logging: false,
});`}</code></pre>

      <h3>AO Connect Configuration</h3>
      <p>Customize AO Connect settings:</p>

      <pre><code>{`const ao = connect({
  MU_URL: "https://mu.ao-testnet.xyz",
  CU_URL: "https://cu.ao-testnet.xyz",
  GATEWAY_URL: "https://arweave.net",
});`}</code></pre>

      <h2>Troubleshooting</h2>

      <h3>Common Installation Issues</h3>

      <ol>
        <li>
          <strong>Module not found errors</strong>
          <pre><code>{`# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}</code></pre>
        </li>
        <li>
          <strong>TypeScript errors</strong>
          <pre><code>{`# Install TypeScript types
npm install --save-dev @types/node`}</code></pre>
        </li>
        <li>
          <strong>Wallet connection issues</strong>
          <ul>
            <li>Make sure your wallet is properly connected</li>
            <li>Check that you have sufficient AR tokens</li>
            <li>Verify wallet permissions</li>
          </ul>
        </li>
      </ol>

      <h3>Version Compatibility</h3>
      <p>Check version compatibility:</p>

      <pre><code>{`# Check installed versions
npm list @permaweb/libs arweave @permaweb/aoconnect`}</code></pre>

      <h3>Getting Help</h3>
      <p>If you encounter issues:</p>
      <ol>
        <li>Check the <a href="#/getting-started">Getting Started</a> guide</li>
        <li>Review the <a href="#/api-reference">API Reference</a></li>
        <li>Look at <a href="#/examples">Examples</a> for usage patterns</li>
        <li>Join our <a href="https://discord.gg/permaweb" target="_blank" rel="noopener noreferrer">Discord community</a></li>
        <li>Report issues on <a href="https://github.com/permaweb/libs" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ol>

      <h2>Next Steps</h2>
      <p>Now that you have @permaweb/libs installed, you can:</p>
      <ul>
        <li><a href="#/getting-started">Get Started</a> with basic usage</li>
        <li>Learn about <a href="#/zones">Zones</a> for entity management</li>
        <li>Create <a href="#/profiles">Profiles</a> for user representation</li>
        <li>Work with <a href="#/atomic-assets">Atomic Assets</a></li>
        <li>Organize content with <a href="#/collections">Collections</a></li>
        <li>Add social features with <a href="#/comments">Comments</a></li>
      </ul>

      <p>For more detailed AO setup and tutorials, visit the <a href="https://cookbook_ao.arweave.net/welcome/getting-started.html" target="_blank" rel="noopener noreferrer">AO Cookbook Getting Started Guide</a>.</p>

      <p>Ready to build something amazing on the permaweb? Check out the <a href="#/getting-started">Getting Started</a> guide!</p>
    </div>
  );
};

export default Installation; 