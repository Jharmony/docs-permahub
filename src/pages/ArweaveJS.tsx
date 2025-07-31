import React from 'react';

function ArweaveJS() {
  return (
    <div className="page-container">
      <h1 id="arweave-js">Arweave.js</h1>
      
      <p>Arweave.js is the official JavaScript/TypeScript SDK for interacting with the Arweave network. It provides a comprehensive set of tools for uploading data, managing transactions, and building decentralized applications on the permaweb.</p>

      <h2 id="installation">Installation</h2>
      
      <p>Install Arweave.js using npm or yarn:</p>
      
      <pre><code>{`npm install arweave
# or
yarn add arweave`}</code></pre>

      <h2 id="quick-start">Quick Start</h2>
      
      <pre><code>{`import Arweave from 'arweave';

// Initialize Arweave
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

// Create a transaction
const transaction = await arweave.createTransaction({
  data: 'Hello, Arweave!'
});

// Sign the transaction
await arweave.transactions.sign(transaction);

// Post the transaction
const result = await arweave.transactions.post(transaction);
console.log('Transaction ID:', result.status);`}</code></pre>

      <h2 id="core-features">Core Features</h2>
      
      <h3 id="transactions">Transactions</h3>
      
      <p>Arweave.js provides comprehensive transaction management:</p>
      
      <ul>
        <li><strong>Create Transactions</strong>: Build and configure transactions</li>
        <li><strong>Sign Transactions</strong>: Sign with wallets or keys</li>
        <li><strong>Post Transactions</strong>: Submit to the network</li>
        <li><strong>Query Transactions</strong>: Search and retrieve data</li>
      </ul>

      <pre><code>{`// Create a transaction with tags
const transaction = await arweave.createTransaction({
  data: fileData,
  tags: [
    { name: 'Content-Type', value: 'image/png' },
    { name: 'Title', value: 'My Image' }
  ]
});

// Add a reward multiplier
transaction.reward = arweave.ar.arToWinston('0.1');

// Sign and post
await arweave.transactions.sign(transaction);
await arweave.transactions.post(transaction);`}</code></pre>

      <h3 id="wallets">Wallets</h3>
      
      <p>Manage wallets and keys:</p>
      
      <pre><code>{`// Generate a new wallet
const wallet = await arweave.wallets.generate();

// Load wallet from file
const wallet = JSON.parse(fs.readFileSync('wallet.json', 'utf8'));

// Get wallet address
const address = await arweave.wallets.jwkToAddress(wallet);

// Get wallet balance
const balance = await arweave.wallets.getBalance(address);
console.log('Balance:', arweave.ar.winstonToAr(balance));`}</code></pre>

      <h3 id="data-retrieval">Data Retrieval</h3>
      
      <p>Retrieve data from the Arweave network:</p>
      
      <pre><code>{`// Get transaction data
const data = await arweave.transactions.getData(transactionId, {
  decode: true
});

// Get transaction info
const transaction = await arweave.transactions.get(transactionId);

// Get transaction status
const status = await arweave.transactions.getStatus(transactionId);

// Search transactions
const results = await arweave.arql({
  op: 'and',
  expr1: {
    op: 'equals',
    expr1: 'from',
    expr2: address
  },
  expr2: {
    op: 'equals',
    expr1: 'App-Name',
    expr2: 'MyApp'
  }
});`}</code></pre>

      <h2 id="advanced-features">Advanced Features</h2>
      
      <h3 id="chunked-uploads">Chunked Uploads</h3>
      
      <p>Upload large files efficiently:</p>
      
      <pre><code>{`// Upload large file in chunks
const uploader = await arweave.transactions.getUploader(transaction, fileData);

while (!uploader.isComplete) {
  await uploader.uploadChunk();
  console.log(\`\${uploader.pctComplete}% complete\`);
}

console.log('Upload complete!');`}</code></pre>

      <h3 id="encryption">Encryption</h3>
      
      <p>Encrypt data before uploading:</p>
      
      <pre><code>{`// Encrypt data
const encryptedData = await arweave.crypto.encrypt(data, key);

// Decrypt data
const decryptedData = await arweave.crypto.decrypt(encryptedData, key);`}</code></pre>

      <h3 id="bundles">Bundles</h3>
      
      <p>Use ANS-104 bundles for efficient data uploads:</p>
      
      <pre><code>{`// Create a bundle
const bundle = await arweave.createBundle([
  { data: 'Item 1', tags: [{ name: 'Type', value: 'text' }] },
  { data: 'Item 2', tags: [{ name: 'Type', value: 'text' }] }
]);

// Sign and post bundle
await arweave.transactions.sign(bundle);
await arweave.transactions.post(bundle);`}</code></pre>

      <h2 id="api-reference">API Reference</h2>
      
      <h3 id="arweave-instance">Arweave Instance</h3>
      
      <pre><code>{`// Initialize with custom config
const arweave = Arweave.init({
  host: 'arweave.net',        // Arweave gateway
  port: 443,                  // Port number
  protocol: 'https',          // Protocol (http/https)
  timeout: 20000,             // Request timeout
  logging: false              // Enable logging
});`}</code></pre>

      <h3 id="transaction-methods">Transaction Methods</h3>
      
      <ul>
        <li><code>arweave.createTransaction(data, options)</code> - Create a new transaction</li>
        <li><code>arweave.transactions.sign(transaction, wallet)</code> - Sign a transaction</li>
        <li><code>arweave.transactions.post(transaction)</code> - Post a transaction</li>
        <li><code>arweave.transactions.get(id)</code> - Get transaction info</li>
        <li><code>arweave.transactions.getData(id, options)</code> - Get transaction data</li>
        <li><code>arweave.transactions.getStatus(id)</code> - Get transaction status</li>
      </ul>

      <h3 id="wallet-methods">Wallet Methods</h3>
      
      <ul>
        <li><code>arweave.wallets.generate()</code> - Generate new wallet</li>
        <li><code>arweave.wallets.jwkToAddress(wallet)</code> - Get wallet address</li>
        <li><code>arweave.wallets.getBalance(address)</code> - Get wallet balance</li>
        <li><code>arweave.wallets.ownerToAddress(owner)</code> - Convert owner to address</li>
      </ul>

      <h2 id="examples">Examples</h2>
      
      <h3 id="upload-image">Upload an Image</h3>
      
      <pre><code>{`// Upload image with metadata
async function uploadImage(imageFile) {
  const imageData = await imageFile.arrayBuffer();
  
  const transaction = await arweave.createTransaction({
    data: imageData,
    tags: [
      { name: 'Content-Type', value: imageFile.type },
      { name: 'Title', value: 'My Image' },
      { name: 'Description', value: 'Uploaded with Arweave.js' }
    ]
  });

  await arweave.transactions.sign(transaction);
  await arweave.transactions.post(transaction);
  
  return transaction.id;
}`}</code></pre>

      <h3 id="build-app">Build a Simple App</h3>
      
      <pre><code>{`// Simple permaweb app
class PermawebApp {
  constructor() {
    this.arweave = Arweave.init();
  }

  async savePost(content) {
    const transaction = await this.arweave.createTransaction({
      data: content,
      tags: [
        { name: 'Content-Type', value: 'text/plain' },
        { name: 'App-Name', value: 'MyBlog' },
        { name: 'Date', value: new Date().toISOString() }
      ]
    });

    await this.arweave.transactions.sign(transaction);
    await this.arweave.transactions.post(transaction);
    
    return transaction.id;
  }

  async getPosts() {
    const query = {
      op: 'equals',
      expr1: 'App-Name',
      expr2: 'MyBlog'
    };
    
    const results = await this.arweave.arql(query);
    return results;
  }
}`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>
      
      <ul>
        <li><strong>Use Tags</strong>: Always add relevant tags to your transactions for discoverability</li>
        <li><strong>Handle Errors</strong>: Implement proper error handling for network requests</li>
        <li><strong>Optimize Uploads</strong>: Use chunked uploads for large files</li>
        <li><strong>Cache Data</strong>: Cache frequently accessed data to reduce network calls</li>
        <li><strong>Validate Inputs</strong>: Always validate user inputs before creating transactions</li>
        <li><strong>Use HTTPS</strong>: Always use HTTPS in production environments</li>
      </ul>

      <h2 id="troubleshooting">Troubleshooting</h2>
      
      <h3 id="common-issues">Common Issues</h3>
      
      <ul>
        <li><strong>Network Errors</strong>: Check your internet connection and gateway settings</li>
        <li><strong>Insufficient Balance</strong>: Ensure your wallet has enough AR for transaction fees</li>
        <li><strong>Invalid Tags</strong>: Make sure tags follow the correct format</li>
        <li><strong>Large File Uploads</strong>: Use chunked uploads for files larger than 1MB</li>
      </ul>

      <h2 id="resources">Resources</h2>
      
      <ul>
        <li><a href="https://github.com/ArweaveTeam/arweave-js" target="_blank" rel="noopener noreferrer">Official Arweave.js Repository</a> - Complete source code, issues, and detailed documentation</li>
        <li><a href="https://docs.arweave.org/developers/tools/arweave-js" target="_blank" rel="noopener noreferrer">Official Arweave Documentation</a> - Comprehensive API reference and guides</li>
        <li><a href="/#/examples">Our Examples</a> - Additional examples and use cases</li>
        <li><a href="/#/api-reference">API Reference</a> - Detailed API documentation</li>
      </ul>

      <div className="info-box">
        <h3>For In-Depth Details</h3>
        <p>This page provides an overview and quick start guide for Arweave.js. For complete documentation, advanced features, and detailed API reference, visit the <a href="https://github.com/ArweaveTeam/arweave-js" target="_blank" rel="noopener noreferrer">official Arweave.js repository</a>.</p>
      </div>

      <hr />
      
      <p>Ready to build with Arweave.js? Check out the <a href="/#/examples">Examples</a> section for more code samples and explore the <a href="/#/starter-kits">Starter Kits</a> to get started quickly!</p>
    </div>
  );
}

export default ArweaveJS; 