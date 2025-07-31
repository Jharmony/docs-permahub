import React from 'react';
import { Link } from 'react-router-dom';

function ArIOSDK() {
  return (
    <div className="page-container">
      <h1 id="ar-io-sdk">@ar.io/sdk</h1>
      
      <p>The ArIO SDK provides functionality for interacting with the ar.io ecosystem of services (e.g. gateways and observers) and protocols (e.g. ArNS and AO). It is available for both NodeJS and Web environments.</p>

      <div className="sdk-highlights">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Gateway Management</strong> - Interact with Arweave gateways and observers</li>
          <li><strong>ArNS Integration</strong> - Manage Arweave Name Service domains</li>
          <li><strong>AO Support</strong> - Connect to AO processes and send messages</li>
          <li><strong>Cross-Platform</strong> - Works in NodeJS and Web environments</li>
          <li><strong>TypeScript Support</strong> - Full type safety and IntelliSense</li>
        </ul>
      </div>

      <h2 id="installation">Installation</h2>
      
      <p>Requires <code>node &gt;= v18.0.0</code></p>

      <h3>Using npm</h3>
      <pre><code>{`npm install @ar.io/sdk`}</code></pre>

      <h3>Using yarn</h3>
      <pre><code>{`yarn add @ar.io/sdk --ignore-engines`}</code></pre>
      
      <div className="note">
        <p><strong>Note:</strong> The <code>--ignore-engines</code> flag is required when using yarn, as permaweb/aoconnect recommends only the use of npm. Alternatively, you can add a <code>.yarnrc.yml</code> file to your project containing <code>ignore-engines true</code> to ignore the engines check.</p>
      </div>

      <h2 id="quick-start">Quick Start</h2>

      <h3>Basic Usage</h3>
      <pre><code>{`import { ARIO } from '@ar.io/sdk';

const ario = ARIO.mainnet(); // defaults to mainnet
const gateways = await ario.getGateways();`}</code></pre>

      <h3>Example Output</h3>
      <pre><code>{`{
  "items": [
    {
      "gatewayAddress": "QGWqtJdLLgm2ehFWiiPzMaoFLD50CnGuzZIPEdoDRGQ",
      "observerAddress": "IPdwa3Mb_9pDD8c2IaJx6aad51Ss-_TfStVwBuhtXMs",
      "operatorStake": 250000000000,
      "settings": {
        "fqdn": "ar-io.dev",
        "label": "AR.IO Test",
        "note": "Test Gateway operated by PDS for the AR.IO ecosystem.",
        "port": 443,
        "properties": "raJgvbFU-YAnku-WsupIdbTsqqGLQiYpGzoqk9SCVgY",
        "protocol": "https"
      },
      "startTimestamp": 1720720621424,
      "stats": {
        "failedConsecutiveEpochs": 0,
        "passedEpochCount": 30,
        "submittedEpochCount": 30,
        "totalEpochCount": 31,
        "totalEpochsPrescribedCount": 31
      },
      "status": "joined",
      "vaults": {},
      "weights": {
        "compositeWeight": 0.97688888893556,
        "gatewayPerformanceRatio": 1,
        "tenureWeight": 0.19444444444444,
        "observerRewardRatioWeight": 1,
        "normalizedCompositeWeight": 0.19247316211083,
        "stakeWeight": 5.02400000024
      }
    }
  ],
  "hasMore": true,
  "nextCursor": "-4xgjroXENKYhTWqrBo57HQwvDL51mMdfsdsxJy6Y2Z_sA",
  "totalItems": 316,
  "sortBy": "startTimestamp",
  "sortOrder": "desc"
}`}</code></pre>

      <h2 id="networks">Networks (Mainnet, Testnet, etc.)</h2>

      <p>The ArIO SDK supports multiple networks for development and testing:</p>

      <h3>Available Networks</h3>
      <ul>
        <li><strong>mainnet</strong> - Production Arweave network</li>
        <li><strong>testnet</strong> - Test network for development</li>
        <li><strong>local</strong> - Local development network</li>
      </ul>

      <h3>Network Configuration</h3>
      <pre><code>{`// Use mainnet (default)
const ario = ARIO.mainnet();

// Use testnet
const ario = ARIO.testnet();

// Use local network
const ario = ARIO.local();`}</code></pre>

      <h2 id="ario">ARIO</h2>

      <p>The ARIO class provides the main interface for interacting with the ar.io ecosystem.</p>

      <h3>Gateway Operations</h3>
      <pre><code>{`// Get all gateways
const gateways = await ario.getGateways();

// Get a specific gateway
const gateway = await ario.getGateway('gateway-address');

// Get gateway statistics
const stats = await ario.getGatewayStats('gateway-address');`}</code></pre>

      <h3>Observer Operations</h3>
      <pre><code>{`// Get all observers
const observers = await ario.getObservers();

// Get a specific observer
const observer = await ario.getObserver('observer-address');

// Get observer statistics
const stats = await ario.getObserverStats('observer-address');`}</code></pre>

      <h2 id="arweave-name-tokens">Arweave Name Tokens (ANT's)</h2>

      <p>Arweave Name Tokens (ANTs) are used for the Arweave Name Service (ArNS).</p>

      <h3>ANT Operations</h3>
      <pre><code>{`// Get ANT information
const ant = await ario.getANT('ant-address');

// Get ANT records
const records = await ario.getANTRecords('ant-address');

// Get ANT ownership
const owner = await ario.getANTOwner('ant-address');`}</code></pre>

      <h3>ArNS Operations</h3>
      <pre><code>{`// Resolve a domain name
const result = await ario.resolveName('example.ar');

// Get domain information
const domain = await ario.getDomain('example.ar');

// List domains for an address
const domains = await ario.getDomainsForAddress('wallet-address');`}</code></pre>

      <h2 id="ao-integration">AO Integration</h2>

      <p>The ArIO SDK includes support for AO (Arweave's Actor Oriented) processes.</p>

      <h3>AO Process Operations</h3>
      <pre><code>{`// Send a message to an AO process
const result = await ario.sendMessage({
  target: 'process-id',
  data: 'Hello, AO!',
  tags: [
    { name: 'Content-Type', value: 'text/plain' }
  ]
});

// Get process information
const process = await ario.getProcess('process-id');

// Get process messages
const messages = await ario.getProcessMessages('process-id');`}</code></pre>

      <h2 id="token-conversion">Token Conversion</h2>

      <p>The SDK provides utilities for token conversion and pricing.</p>

      <h3>Conversion Utilities</h3>
      <pre><code>{`// Convert AR to USD
const usdValue = await ario.convertARToUSD(1.5);

// Convert USD to AR
const arValue = await ario.convertUSDToAR(100);

// Get current AR price
const price = await ario.getARPrice();`}</code></pre>

      <h2 id="logging">Logging</h2>

      <p>The SDK includes comprehensive logging capabilities for debugging and monitoring.</p>

      <h3>Logging Configuration</h3>
      <pre><code>{`// Enable debug logging
const ario = ARIO.mainnet({
  logLevel: 'debug'
});

// Custom logger
const ario = ARIO.mainnet({
  logger: {
    debug: (message) => console.log('[DEBUG]', message),
    info: (message) => console.log('[INFO]', message),
    warn: (message) => console.log('[WARN]', message),
    error: (message) => console.log('[ERROR]', message)
  }
});`}</code></pre>

      <h2 id="pagination">Pagination</h2>

      <p>Many API endpoints support pagination for large datasets.</p>

      <h3>Pagination Example</h3>
      <pre><code>{`// Get paginated results
const result = await ario.getGateways({
  limit: 10,
  cursor: 'next-cursor-token'
});

// Check if there are more results
if (result.hasMore) {
  const nextPage = await ario.getGateways({
    limit: 10,
    cursor: result.nextCursor
  });
}`}</code></pre>

      <h2 id="error-handling">Error Handling</h2>

      <p>The SDK provides comprehensive error handling for various scenarios.</p>

      <h3>Error Types</h3>
      <ul>
        <li><strong>NetworkError</strong> - Connection or network issues</li>
        <li><strong>ValidationError</strong> - Invalid input parameters</li>
        <li><strong>AuthenticationError</strong> - Authentication or authorization issues</li>
        <li><strong>RateLimitError</strong> - API rate limiting</li>
      </ul>

      <h3>Error Handling Example</h3>
      <pre><code>{`try {
  const gateways = await ario.getGateways();
} catch (error) {
  if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}`}</code></pre>

      <h2 id="examples">Examples</h2>

      <h3>Complete Example: Gateway Monitor</h3>
      <pre><code>{`import { ARIO } from '@ar.io/sdk';

async function monitorGateways() {
  const ario = ARIO.mainnet();
  
  try {
    // Get all gateways
    const gateways = await ario.getGateways();
    
    console.log(\`Found \${gateways.totalItems} gateways\`);
    
    // Filter active gateways
    const activeGateways = gateways.items.filter(
      gateway => gateway.status === 'joined'
    );
    
    console.log(\`Active gateways: \${activeGateways.length}\`);
    
    // Get detailed stats for each active gateway
    for (const gateway of activeGateways) {
      const stats = await ario.getGatewayStats(gateway.gatewayAddress);
      console.log(\`Gateway \${gateway.settings.label}: \${stats.passedEpochCount}/\${stats.totalEpochCount} epochs passed\`);
    }
  } catch (error) {
    console.error('Error monitoring gateways:', error);
  }
}

monitorGateways();`}</code></pre>

      <h3>Example: ArNS Domain Manager</h3>
      <pre><code>{`import { ARIO } from '@ar.io/sdk';

async function manageDomains(walletAddress) {
  const ario = ARIO.mainnet();
  
  try {
    // Get all domains owned by the wallet
    const domains = await ario.getDomainsForAddress(walletAddress);
    
    console.log(\`Found \${domains.length} domains for \${walletAddress}\`);
    
    // Display domain information
    for (const domain of domains) {
      const domainInfo = await ario.getDomain(domain);
      console.log(\`Domain: \${domain}\`);
      console.log(\`  Records: \${domainInfo.records.length}\`);
      console.log(\`  Created: \${new Date(domainInfo.createdAt).toLocaleDateString()}\`);
    }
  } catch (error) {
    console.error('Error managing domains:', error);
  }
}`}</code></pre>

      <h2 id="resources">Resources</h2>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>Official Documentation</h3>
          <ul>
            <li><a href="https://github.com/ar-io/ar-io-sdk" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://docs.ar.io" target="_blank" rel="noopener noreferrer">ArIO Documentation</a></li>
            <li><a href="https://docs.ar.io/gateways/" target="_blank" rel="noopener noreferrer">Gateway Architecture</a></li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Related Tools</h3>
          <ul>
            <li><Link to="/arweave-js">Arweave.js</Link> - Core Arweave JavaScript library</li>
            <li><Link to="/arx">ARX</Link> - Upload SDK for Arweave</li>
            <li><Link to="/permaweb-libs">Permaweb Libs</Link> - Permaweb development libraries</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Community</h3>
          <ul>
            <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a></li>
            <li><a href="https://github.com/ar-io/ar-io-sdk/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
            <li><a href="https://github.com/ar-io/ar-io-sdk/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></li>
          </ul>
        </div>
      </div>

      <h2 id="developers">Developers</h2>

      <p>For developers contributing to the ArIO SDK:</p>

      <h3>Development Setup</h3>
      <pre><code>{`# Clone the repository
git clone https://github.com/ar-io/ar-io-sdk.git
cd ar-io-sdk

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build`}</code></pre>

      <h3>Contributing</h3>
      <ul>
        <li>Fork the repository</li>
        <li>Create a feature branch</li>
        <li>Make your changes</li>
        <li>Add tests for new functionality</li>
        <li>Submit a pull request</li>
      </ul>

      <hr />
      
      <p>For more information about the ArIO ecosystem, visit the <a href="https://docs.ar.io" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
    </div>
  );
}

export default ArIOSDK; 