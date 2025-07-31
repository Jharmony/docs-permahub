import React from "react";
import { Link } from "react-router-dom";

function WalletTools() {
  return (
    <div className="page-container">
      <h1>Wallet Connection Tools & SDKs</h1>
      
      <p>Connect your dApp to Arweave wallets seamlessly with these powerful tools and SDKs. Whether you're building for web browsers, mobile apps, or desktop applications, these solutions provide unified APIs for wallet interactions.</p>

      <h2>Overview</h2>
      
      <p>Wallet connection tools in the Arweave ecosystem provide standardized ways to interact with various wallet implementations. They abstract away the complexity of different wallet APIs and provide a consistent developer experience across different platforms.</p>

      <h2>Arweave Wallet Kit</h2>
      
      <p>The Arweave Wallet Kit provides hooks and components for unified interaction with Arweave wallets. It simplifies the process of connecting dApps to various wallet implementations through a standardized API.</p>

      <h3>Key Features</h3>
      
      <ul>
        <li><strong>Unified API:</strong> Single interface for all supported wallets</li>
        <li><strong>Modular Architecture:</strong> Core package with React hooks and components</li>
        <li><strong>Extensible Design:</strong> Support for custom wallet strategies</li>
        <li><strong>Framework Agnostic:</strong> Core package can be used with any framework</li>
      </ul>

      <h3>Supported Wallets</h3>
      
      <ul>
        <li><strong>Wander.app</strong> - Modern Arweave wallet with advanced features</li>
        <li><strong>Arweave.app</strong> - Official Arweave wallet</li>
        <li><strong>General Browser Wallets</strong> - Any wallet following the standard</li>
        <li><em>Note: Othent support will be deprecated by end of 2025</em></li>
      </ul>

      <h3>Architecture</h3>
      
      <p>The kit uses a "strategy" pattern where each wallet implementation is a separate strategy. This allows developers to communicate with all wallets using a common API while maintaining the flexibility to add new wallet types.</p>

      <div className="info-box">
        <h4>💡 Strategy Pattern</h4>
        <p>A strategy in Arweave Wallet Kit is an implementation of an Arweave wallet within the kit. These strategies allow users to communicate with all wallets in a standard way with a common API.</p>
      </div>

      <h2>Wander Connect</h2>
      
      <p>Wander Connect is a simplified, lightweight, and customizable embedded wallet for Arweave and AO that bridges the gap between web2 and web3, helping non-crypto native users onboard easily.</p>

      <h3>User Experience Features</h3>
      
      <ul>
        <li><strong>🪪 Familiar Authentication:</strong> Email/password, passkeys, and social providers (Facebook, Twitter/X, Apple)</li>
        <li><strong>🔑 No Seed Phrases:</strong> 5 clicks to get a fully functional wallet</li>
        <li><strong>📱 Simplified UI:</strong> Clean interface with essential functionality</li>
        <li><strong>✨ Responsive Design:</strong> Light and dark themes, works on any device</li>
      </ul>

      <h3>Developer Experience</h3>
      
      <ul>
                    <li><strong>Easy Integration:</strong> Simple SDK for embedding in dApps</li>
                    <li><strong>Customizable UI:</strong> Extensive customization and white-label options</li>
            <li><strong>Secure Architecture:</strong> Advanced cryptography with Shamir Secret Sharing</li>
      </ul>

      <h3>Quick Start</h3>
      
      <pre><code>{`npm install @wanderapp/connect

import { WanderConnect } from "@wanderapp/connect";

// Initialize Wander Connect
const wander = new WanderConnect({
  clientId: "FREE_TRIAL",
});

// Listen for wallet ready event
window.addEventListener("arweaveWalletLoaded", async (e) => {
  // Handle wallet connection
});`}</code></pre>

      <h3>Advanced Customization</h3>
      
      <p>Wander Connect offers extensive customization options for the iframe interface, allowing you to match your app's design and user experience requirements.</p>

      <h4>Iframe Layout Configuration</h4>
      
      <pre><code>{`const wander = new WanderConnect({
  iframe: {
    routeLayout: {
      // Different layouts for different routes
      default: {
        type: "popup",
        position: "bottom-right",
      },
      auth: {
        type: "modal",
      },
      "auth-request": {
        type: "sidebar",
        position: "right",
        expanded: true,
      },
    },
    cssVars: {
      background: "#f5f5f5",
      borderRadius: 12,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    },
  },
});`}</code></pre>

      <h4>Iframe Options Interface</h4>
      
      <pre><code>{`interface IframeOptions {
  id?: string;
  theme?: ThemeSetting;
  cssVars?: Partial<T> | Partial<Record<ThemeVariant, Partial<T>>>;
  customStyles?: string;
  routeLayout?:
    | LayoutType
    | LayoutConfig
    | Partial<Record<RouteType, LayoutType | LayoutConfig>>;
  clickOutsideBehavior?: boolean;
}`}</code></pre>

      <h4>Layout Types</h4>
      
      <ul>
        <li><strong>popup:</strong> Floating popup window with customizable position</li>
        <li><strong>modal:</strong> Full-screen modal overlay</li>
        <li><strong>sidebar:</strong> Side panel that can be expanded or collapsed</li>
        <li><strong>inline:</strong> Embedded directly in your page layout</li>
      </ul>

      <h3>Security Architecture</h3>
      
      <p>Wander Connect uses Shamir Secret Sharing to split users' private keys into 2 shares - one stored on the user's device and one on servers. Users authenticate to prove they have their device share without transferring it, ensuring private keys never reach the servers.</p>

      <h2>AO-Sync (Beacon Integration)</h2>
      
      <p>AO-Sync provides seamless integration between Beacon Wallet and AO applications, enabling secure message signing and transaction management for the AO network.</p>

      <h3>Key Features</h3>
      
      <ul>
        <li><strong>QR Code Connection:</strong> Secure wallet connection via QR code scanning</li>
        <li><strong>AO Message Signing:</strong> Sign and submit ANS-104 items to AO network</li>
        <li><strong>AR Transfers:</strong> Send AR between addresses</li>
        <li><strong>React Integration:</strong> Built-in React hooks for easy development</li>
      </ul>

      <h3>Setup</h3>
      
      <pre><code>{`npm install @vela-ventures/aosync-sdk-react

import { AOSyncProvider } from "@vela-ventures/aosync-sdk-react";

function App() {
  return (
    <AOSyncProvider
      gatewayConfig={{
        host: "arweave.net",
        port: 443,
        protocol: "https",
      }}
      appInfo={{ name: "Your App Name" }}
      muUrl="https://mu.ao-testnet.xyz"
    >
      <YourApp />
    </AOSyncProvider>
  );
}`}</code></pre>

      <h3>Usage Examples</h3>
      
      <h4>Connecting a Wallet</h4>
      
      <pre><code>{`import { useWallet } from '@vela-ventures/aosync-sdk-react'

function ConnectWalletDemo() {
  const { isConnected, connect, disconnect } = useWallet()

  return isConnected ? (
    <Button onClick={disconnect}>Disconnect Beacon</Button>
  ) : (
    <Button onClick={connect}>Connect Beacon</Button>
  )
}`}</code></pre>

      <h4>Signing AO Messages</h4>
      
      <pre><code>{`const { signAOMessage } = useWallet()

await signAOMessage({
  target: "process-id",
  tags: [
    {
      name: "Action",
      value: "Your-Action"
    }
  ],
  data: "data-item"
})`}</code></pre>

      <h2>Othent (Deprecated)</h2>
      
      <div className="warning-box">
        <h4>Deprecation Notice</h4>
        <p><strong>Othent will be deprecated by the end of 2025.</strong> For new projects, we recommend using <a href="https://wander.app/connect" target="_blank" rel="noopener noreferrer">Wander Connect</a> as an alternative.</p>
      </div>
      
      <p>Othent (pronounced OH-thent) was a service that merged Web2 to Web3 user logins with a familiar and simple interface. The name is a neologism of "OAuth" and "Authenticate". It provided a bridge between traditional authentication methods and blockchain wallet functionality.</p>

      <h3>How Othent Worked</h3>
      
      <p>Othent managed Arweave & AO wallets backed by Auth0 and Google Key Management Service, enabling access to blockchain networks through familiar Web2 authentication processes. It leveraged existing encryption standards like RS-256 and JSON Web Tokens generated by Auth0.</p>

      <h3>Supported Authentication Methods</h3>
      
      <ul>
        <li><strong>Social Logins:</strong> Google, Twitter, GitHub, LinkedIn, Microsoft, Apple</li>
        <li><strong>Email/Password:</strong> Traditional email-based authentication</li>
        <li><strong>64+ Social Connections:</strong> Supporting over 5 billion potential user logins</li>
      </ul>

      <h3>Key Features</h3>
      
      <ul>
        <li><strong>Web2 to Web3 Bridge:</strong> Familiar authentication for blockchain access</li>
        <li><strong>No Seed Phrases:</strong> Users didn't need to manage private keys directly</li>
        <li><strong>Password Recovery:</strong> Traditional password reset mechanisms</li>
        <li><strong>Backend Security:</strong> Google KMS for secure key storage</li>
        <li><strong>Easy Integration:</strong> Minimal code changes for existing Web2 apps</li>
      </ul>

      <h3>Technical Architecture</h3>
      
      <p>Othent created an Arweave wallet (address + public-private key pair) for every account and stored it securely in Google KMS. When users needed to perform cryptographic operations, they would:</p>
      
      <ol>
        <li>Request an access token from Auth0 containing a hash of the data</li>
        <li>Send the token and data to Othent's API</li>
        <li>Othent would use the JWT token to authenticate and perform the operation</li>
        <li>The access token would be invalidated after use</li>
      </ol>

      <h3>Limitations and Considerations</h3>
      
      <ul>
        <li><strong>Arweave/AO Only:</strong> No support for other blockchains</li>
        <li><strong>Single Address:</strong> No multiple address management per account</li>
        <li><strong>No Key Export:</strong> Users couldn't import/export private keys</li>
        <li><strong>Limited Encryption:</strong> Only symmetric encryption support</li>
        <li><strong>Hardcoded Permissions:</strong> No customizable permission management</li>
        <li><strong>Custodial Nature:</strong> Users gave full wallet control to dApps</li>
      </ul>

      <h3>Comparison with Alternatives</h3>
      
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Wallet Type</th>
              <th>Key Management</th>
              <th>User Control</th>
              <th>Recovery Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Non-custodial (ArConnect)</strong></td>
              <td>User controls keys</td>
              <td>Full autonomy</td>
              <td>Seed phrase backup</td>
            </tr>
            <tr>
              <td><strong>Othent (Deprecated)</strong></td>
              <td>Google KMS + Auth0</td>
              <td>Limited autonomy</td>
              <td>Password reset</td>
            </tr>
            <tr>
              <td><strong>Wander Connect</strong></td>
              <td>Shamir Secret Sharing</td>
              <td>User controls keys</td>
              <td>Social recovery</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Migration Path</h3>
      
      <p>If you're currently using Othent, consider migrating to <a href="https://wander.app/connect" target="_blank" rel="noopener noreferrer">Wander Connect</a> which provides similar functionality with improved security and user control.</p>

      <h2>Vento SDK - AO DEX Aggregation</h2>
      
      <p>Vento SDK is a lightweight TypeScript SDK for AO DEX aggregation that works in both browsers and Node.js environments. It provides best prices across the AO DEX ecosystem through a unified interface.</p>

      <h3>Key Features</h3>
      
      <ul>
                    <li><strong>Universal Compatibility:</strong> Works in browsers and Node.js</li>
            <li><strong>Multiple DEX Support:</strong> Botega, Permaswap, and more</li>
            <li><strong>Route Optimization:</strong> Automatically finds the best swap routes</li>
            <li><strong>Slippage Protection:</strong> Built-in protection against price movements</li>
            <li><strong>TypeScript Support:</strong> Full type safety and IntelliSense</li>
            <li><strong>Signer-based Architecture:</strong> Flexible authentication options</li>
      </ul>

      <h3>Installation</h3>
      
      <pre><code>{`npm install @vela-ventures/vento-sdk`}</code></pre>

      <h3>Quick Start</h3>
      
      <h4>Browser Usage</h4>
      
      <pre><code>{`import { VentoClient } from '@vela-ventures/vento-sdk';
import { createSigner } from '@permaweb/aoconnect';

// Connect wallet and create signer
await window.arweaveWallet.connect();
const signer = createSigner(window.arweaveWallet);

// Initialize client
const client = new VentoClient({
  signer
});

// Get user address
const userAddress = await window.arweaveWallet.getActiveAddress();

// Get swap quote
const quote = await client.getSwapQuote({
  fromTokenId: '0syT13r0s0tgPmIed95bJnuSqaD29HQNN8D3ElLSrsc', // AO
  toTokenId: 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',   // wAR
  amount: 1000000000000,
  userAddress
});

// Execute swap
const minAmount = VentoClient.calculateMinAmount(quote.bestRoute.estimatedOutput, 1);
const result = await client.executeSwap(
  quote.bestRoute,
  quote.fromTokenId,
  quote.toTokenId,
  quote.inputAmount,
  minAmount,
  userAddress
);

console.log('Swap completed:', result.messageId);`}</code></pre>

      <h4>Node.js Usage</h4>
      
      <pre><code>{`import { VentoClient } from '@vela-ventures/vento-sdk';

// Initialize without signer for read operations
const client = new VentoClient();

// Get pools
const pools = await client.getPools();

// Get quotes
const quote = await client.getSwapQuote({
  fromTokenId: 'token1',
  toTokenId: 'token2',
  amount: 1000000,
  userAddress: 'user-address'
});

// Prepare message for external signing
const minAmount = VentoClient.calculateMinAmount(quote.bestRoute.estimatedOutput, 1);
const messageResponse = await client.prepareSwapMessage({
  route: quote.bestRoute,
  fromTokenId: 'token1',
  toTokenId: 'token2',
  amount: 1000000,
  minAmount,
  userAddress: 'user-address'
});`}</code></pre>

      <h3>API Reference</h3>
      
      <h4>Constructor</h4>
      
      <pre><code>{`new VentoClient({ apiBaseUrl?, timeout?, signer? })`}</code></pre>

      <h4>Core Methods</h4>
      
      <ul>
        <li><strong>getSwapQuote(request)</strong> - Get swap quotes with route optimization</li>
        <li><strong>executeSwap(route, fromTokenId, toTokenId, amount, minAmount, userAddress)</strong> - Execute swap transaction</li>
        <li><strong>prepareSwapMessage(request)</strong> - Prepare unsigned message for external signing</li>
        <li><strong>signAndSendMessage(unsignedMessage)</strong> - Sign and send prepared message</li>
      </ul>

      <h4>Utility Methods</h4>
      
      <ul>
        <li><strong>getPools(forceRefresh?)</strong> - Get available liquidity pools</li>
        <li><strong>getBestRoute(fromTokenId, toTokenId, amount, userAddress?)</strong> - Find optimal swap route</li>
        <li><strong>hasValidPair(fromTokenId, toTokenId)</strong> - Check if trading pair exists</li>
        <li><strong>VentoClient.calculateMinAmount(estimatedOutput, slippagePercent)</strong> - Calculate minimum output with slippage</li>
      </ul>

      <h3>Usage Modes</h3>
      
      <h4>With Signer (Full Functionality)</h4>
      
      <pre><code>{`const client = new VentoClient({ signer }); // Can execute swaps`}</code></pre>

      <h4>Without Signer (Read-only)</h4>
      
      <pre><code>{`const client = new VentoClient(); // Can get quotes and prepare messages`}</code></pre>

      <h3>Error Handling</h3>
      
      <pre><code>{`try {
  const result = await client.executeSwap(route, fromToken, toToken, amount, minAmount, userAddress);
} catch (error) {
  if (error.message.includes('No signer provided')) {
    console.log('Please initialize client with a signer');
  } else {
    console.error('Swap failed:', error.message);
  }
}`}</code></pre>

      <h3>Requirements</h3>
      
      <ul>
        <li><strong>Browser:</strong> ArConnect extension or compatible wallet</li>
        <li><strong>Node.js:</strong> 16+</li>
        <li><strong>Dependencies:</strong> @permaweb/aoconnect for signer creation</li>
      </ul>

      <div className="info-box">
        <h4>💡 Best Practices</h4>
        <ul>
          <li>Always check for valid trading pairs before attempting swaps</li>
          <li>Use appropriate slippage tolerance based on market conditions</li>
          <li>Handle errors gracefully, especially network-related issues</li>
          <li>Consider using read-only mode for price checking and route discovery</li>
        </ul>
      </div>

      <h2>Choosing the Right Tool</h2>
      
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Best For</th>
              <th>Key Strengths</th>
              <th>Platform Support</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Arweave Wallet Kit</strong></td>
              <td>Multi-wallet support</td>
              <td>Unified API, extensible</td>
              <td>Web, React</td>
              <td>Active</td>
            </tr>
            <tr>
              <td><strong>Wander Connect</strong></td>
              <td>User onboarding</td>
              <td>Easy setup, familiar auth</td>
              <td>Web, mobile</td>
              <td>Active</td>
            </tr>
            <tr>
              <td><strong>AO-Sync</strong></td>
              <td>AO applications</td>
              <td>AO message signing</td>
              <td>Web, React</td>
              <td>Active</td>
            </tr>
            <tr>
              <td><strong>Vento SDK</strong></td>
              <td>DEX aggregation</td>
              <td>Best prices, route optimization</td>
              <td>Web, Node.js</td>
              <td>Active</td>
            </tr>
            <tr>
              <td><strong>Othent</strong></td>
              <td>Web2 to Web3 bridge</td>
              <td>Social logins, familiar auth</td>
              <td>Web</td>
              <td>Deprecated (2025)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Best Practices</h2>
      
      <ul>
        <li><strong>User Experience:</strong> Choose tools that match your target audience's technical comfort level</li>
        <li><strong>Security:</strong> Always verify wallet connections and implement proper error handling</li>
        <li><strong>Fallbacks:</strong> Provide multiple wallet options when possible</li>
        <li><strong>Testing:</strong> Test with multiple wallet implementations during development</li>
        <li><strong>Documentation:</strong> Provide clear instructions for users on wallet setup</li>
      </ul>

      <h2>Integration Examples</h2>
      
      <h3>React Hook Pattern</h3>
      
      <pre><code>{`// Custom hook for wallet management
function useWalletConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState(null);
  
  const connect = async () => {
    // Implementation specific to chosen tool
  };
  
  const disconnect = () => {
    // Clean up connection
  };
  
  return { isConnected, address, connect, disconnect };
}`}</code></pre>

      <h2>Resources</h2>
      
      <ul>
        <li><a href="https://docs.arweavekit.com/" target="_blank" rel="noopener noreferrer">Arweave Wallet Kit Documentation</a> - Complete API reference and guides</li>
        <li><a href="https://docs.wander.app/wander-connect/intro" target="_blank" rel="noopener noreferrer">Wander Connect Documentation</a> - Setup and customization guide</li>
        <li><a href="https://docs.beaconwallet.app/ao-sync/standalone" target="_blank" rel="noopener noreferrer">AO-Sync Documentation</a> - Beacon integration guide</li>
        <li><a href="https://www.npmjs.com/package/@vela-ventures/vento-sdk" target="_blank" rel="noopener noreferrer">Vento SDK NPM Package</a> - AO DEX aggregation SDK</li>
        <li><a href="https://docs.othent.io/" target="_blank" rel="noopener noreferrer">Othent Documentation</a> - Legacy Web2 to Web3 bridge (deprecated)</li>
        <li><a href="https://playground.othent.io/" target="_blank" rel="noopener noreferrer">Othent Playground</a> - Interactive testing environment for developers</li>
        <li><Link to="/arweave-js">Arweave.js SDK</Link> - JavaScript SDK for Arweave interactions</li>
        <li><Link to="/examples">Examples</Link> - See how others implement wallet connections</li>
      </ul>

      <div className="info-box">
        <h3>For In-Depth Details</h3>
        <p>This page provides an overview of wallet connection tools. For complete documentation, advanced features, and detailed API reference, visit the official documentation links above.</p>
      </div>

      <hr />
      
      <p><Link to="/">← Back to Home</Link></p>
    </div>
  );
}

export default WalletTools; 