import React from 'react';
import { Link } from 'react-router-dom';

function ARX() {
  return (
    <div className="page-container">
      <h1 id="arx">ARX - Arweave Upload SDK</h1>
      
      <p>ARX is a powerful SDK/CLI that anyone can use to upload permanent data to Arweave. It's designed as a drop-in replacement for prior bundle service SDKs, making migration seamless for most developers.</p>

      <div className="arx-highlights">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Drop-in Replacement</strong> - Minimal code changes required for migration</li>
          <li><strong>Turbo Bundle Service</strong> - Fast, reliable uploads with credit system</li>
          <li><strong>Multi-Token Support</strong> - AR, SOL, ETH, and POL payment options</li>
          <li><strong>CLI & SDK</strong> - Both command-line and programmatic interfaces</li>
          <li><strong>Directory Uploads</strong> - Upload entire directories with index file support</li>
          <li><strong>Credit System</strong> - Purchase non-refundable upload credits</li>
        </ul>
      </div>

      <h2 id="installation">Installation</h2>

      <h3>Global CLI Installation</h3>
      <pre><code>{`npm i -g @permaweb/arx`}</code></pre>

      <h3>Project Installation</h3>
      <pre><code>{`npm install @permaweb/arx`}</code></pre>

      <h2 id="quick-start">Quick Start</h2>

      <h3>CLI Usage</h3>
      <p>By default, the <code>arx</code> CLI points to the turbo bundle service from ArDrive (https://turbo.ardrive.io), which allows you to purchase non-refundable "upload credits" called "turbo credits" to upload your data to the Arweave Storage Network.</p>

      <h4>Supported Payment Tokens</h4>
      <table className="token-table">
        <thead>
          <tr>
            <th>Token Symbol</th>
            <th>Token Option Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AR</td>
            <td>arweave</td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>ethereum</td>
          </tr>
          <tr>
            <td>POL</td>
            <td>matic</td>
          </tr>
          <tr>
            <td>SOL</td>
            <td>solana</td>
          </tr>
        </tbody>
      </table>

      <div className="note">
        <p><strong>Note:</strong> You can also purchase "turbo credits" using Fiat at <a href="https://turbo-topup.com/" target="_blank" rel="noopener noreferrer">https://turbo-topup.com/</a></p>
      </div>

      <h2 id="cli-commands">CLI Commands</h2>

      <h3 id="fund-credits">Get Upload Credits</h3>
      <p>Purchase credits with your preferred token:</p>
      <pre><code>{`arx fund \${TOKEN_QUANTITY} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY}`}</code></pre>

      <h4>Examples</h4>
      <pre><code>{`# Purchase 1 AR worth of credits
arx fund 1000000000000 -t arweave -w wallet.json

# Purchase 0.1 ETH worth of credits
arx fund 100000000000000000 -t ethereum -w wallet.json

# Purchase 1 SOL worth of credits
arx fund 1000000000 -t solana -w wallet.json`}</code></pre>

      <h3 id="check-balance">Check Credit Balance</h3>
      <pre><code>{`arx balance \${PUBLIC_ADDRESS} -t \${TOKEN}`}</code></pre>

      <h3 id="upload-single-file">Upload Single File</h3>
      <pre><code>{`arx upload \${FILENAME} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`arx upload my-file.txt -t arweave -w wallet.json`}</code></pre>

      <h3 id="upload-directory">Upload Directory</h3>
      <pre><code>{`arx upload-dir \${DIRNAME} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY} --index-file index.html`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`arx upload-dir ./my-website -t arweave -w wallet.json --index-file index.html`}</code></pre>

      <h3 id="get-price">Get Credits by Bytes</h3>
      <pre><code>{`arx price \${BYTES}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`arx price 1048576  # Check price for 1MB`}</code></pre>

      <h2 id="sdk-usage">SDK Usage</h2>

      <p>The ARX SDK provides a programmatic interface for the same functionality as the CLI.</p>

      <h3 id="sdk-setup">Setup</h3>
      <pre><code>{`import fs from 'node:fs'
import ARx from '@permaweb/arx'

const arx = async () =>
  new ARx({ 
    url: 'https://turbo.ardrive.io',
    token: 'arweave', 
    key: JSON.parse(fs.readFileSync("wallet.json", "utf-8")) 
  })`}</code></pre>

      <h3 id="purchase-credits-sdk">Purchase Credits (SDK)</h3>
      <pre><code>{`async function main() {
    console.log(
        await arx().fund(10 ** 12)  // Purchase 1 AR worth of credits
    )
}

main()`}</code></pre>

      <h3 id="upload-file-sdk">Upload File (SDK)</h3>
      <pre><code>{`async function uploadFile() {
    try {
        const result = await arx().upload('./my-file.txt')
        console.log('Upload successful:', result)
    } catch (error) {
        console.error('Upload failed:', error)
    }
}

uploadFile()`}</code></pre>

      <h3 id="upload-directory-sdk">Upload Directory (SDK)</h3>
      <pre><code>{`async function uploadDirectory() {
    try {
        const result = await arx().uploadDir('./my-website', {
            indexFile: 'index.html'
        })
        console.log('Directory upload successful:', result)
    } catch (error) {
        console.error('Directory upload failed:', error)
    }
}

uploadDirectory()`}</code></pre>

      <h2 id="migration-guide">Migration Guide</h2>

      <p>ARX is designed as a drop-in replacement for prior bundle service SDKs. Most developers will only need to change two lines:</p>

      <h3>Before (Old SDK)</h3>
      <pre><code>{`import OldBundleSDK from 'old-bundle-sdk'

const bundleSDK = new OldBundleSDK(...)`}</code></pre>

      <h3>After (ARX)</h3>
      <pre><code>{`import ARx from '@permaweb/arx'

const arx = new ARx(...)`}</code></pre>

      <h2 id="configuration">Configuration</h2>

      <h3 id="sdk-options">SDK Options</h3>
      <pre><code>{`const arx = new ARx({
    url: 'https://turbo.ardrive.io',  // Bundle service URL
    token: 'arweave',                 // Payment token
    key: walletKey,                   // Wallet key or keyfile
    // Optional configurations
    timeout: 30000,                   // Request timeout in ms
    retries: 3,                       // Number of retry attempts
    chunkSize: 262144                 // Chunk size for large files
})`}</code></pre>

      <h3 id="environment-variables">Environment Variables</h3>
      <p>You can also configure ARX using environment variables:</p>
      <pre><code>{`ARX_URL=https://turbo.ardrive.io
ARX_TOKEN=arweave
ARX_KEYFILE=./wallet.json`}</code></pre>

      <h2 id="examples">Examples</h2>

      <h3 id="complete-upload-example">Complete Upload Example</h3>
      <pre><code>{`import fs from 'node:fs'
import ARx from '@permaweb/arx'

async function uploadWebsite() {
    // Initialize ARX
    const arx = new ARx({
        url: 'https://turbo.ardrive.io',
        token: 'arweave',
        key: JSON.parse(fs.readFileSync('./wallet.json', 'utf-8'))
    })

    try {
        // Check current balance
        const balance = await arx.balance()
        console.log('Current balance:', balance)

        // Upload website directory
        const result = await arx.uploadDir('./dist', {
            indexFile: 'index.html',
            tags: [
                { name: 'Content-Type', value: 'text/html' },
                { name: 'App-Name', value: 'My Website' }
            ]
        })

        console.log('Website uploaded successfully!')
        console.log('Transaction ID:', result.id)
        console.log('URL:', \`https://arweave.net/\${result.id}\`)
        
    } catch (error) {
        console.error('Upload failed:', error)
    }
}

uploadWebsite()`}</code></pre>

      <h3 id="batch-upload-example">Batch Upload Example</h3>
      <pre><code>{`import fs from 'node:fs'
import path from 'path'
import ARx from '@permaweb/arx'

async function batchUpload() {
    const arx = new ARx({
        url: 'https://turbo.ardrive.io',
        token: 'arweave',
        key: JSON.parse(fs.readFileSync('./wallet.json', 'utf-8'))
    })

    const files = [
        './assets/image1.jpg',
        './assets/image2.png',
        './documents/file1.pdf'
    ]

    const results = []

    for (const file of files) {
        try {
            const result = await arx.upload(file, {
                tags: [
                    { name: 'Content-Type', value: getContentType(file) },
                    { name: 'App-Name', value: 'Batch Upload' }
                ]
            })
            
            results.push({
                file,
                success: true,
                id: result.id
            })
            
            console.log(\`Uploaded \${file}: \${result.id}\`)
        } catch (error) {
            results.push({
                file,
                success: false,
                error: error.message
            })
            
            console.error(\`Failed to upload \${file}: \${error.message}\`)
        }
    }

    console.log('Batch upload completed:', results)
}

function getContentType(filename) {
    const ext = path.extname(filename).toLowerCase()
    const contentTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.pdf': 'application/pdf',
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    }
    return contentTypes[ext] || 'application/octet-stream'
}

batchUpload()`}</code></pre>

      <h2 id="error-handling">Error Handling</h2>

      <h3 id="common-errors">Common Errors</h3>
      <ul>
        <li><strong>Insufficient Credits</strong> - Purchase more credits before uploading</li>
        <li><strong>Invalid Wallet</strong> - Ensure your wallet file or key is valid</li>
        <li><strong>Network Issues</strong> - Check your internet connection and try again</li>
        <li><strong>File Not Found</strong> - Verify the file path is correct</li>
        <li><strong>Invalid Token</strong> - Use one of the supported token types</li>
      </ul>

      <h3 id="error-handling-example">Error Handling Example</h3>
      <pre><code>{`async function uploadWithErrorHandling() {
    const arx = new ARx({
        url: 'https://turbo.ardrive.io',
        token: 'arweave',
        key: JSON.parse(fs.readFileSync('./wallet.json', 'utf-8'))
    })

    try {
        const result = await arx.upload('./large-file.zip')
        console.log('Upload successful:', result.id)
    } catch (error) {
        if (error.message.includes('insufficient credits')) {
            console.error('Please purchase more credits before uploading')
        } else if (error.message.includes('network')) {
            console.error('Network error, please try again')
        } else {
            console.error('Upload failed:', error.message)
        }
    }
}`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>

      <h3 id="file-organization">File Organization</h3>
      <ul>
        <li>Use descriptive file names and organize files in logical directories</li>
        <li>Include an <code>index.html</code> file for website uploads</li>
        <li>Add appropriate content-type tags for better compatibility</li>
        <li>Consider using compression for large text files</li>
      </ul>

      <h3 id="credit-management">Credit Management</h3>
      <ul>
        <li>Monitor your credit balance regularly</li>
        <li>Purchase credits in advance for large uploads</li>
        <li>Use the <code>arx price</code> command to estimate costs</li>
        <li>Consider bulk purchases for better rates</li>
      </ul>

      <h3 id="security">Security</h3>
      <ul>
        <li>Keep your wallet file secure and never share it</li>
        <li>Use environment variables for sensitive configuration</li>
        <li>Regularly rotate your wallet keys</li>
        <li>Test uploads on testnet before mainnet</li>
      </ul>

      <h2 id="resources">Resources</h2>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>Official Documentation</h3>
          <ul>
            <li><a href="https://github.com/permaweb/arx" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://docs.ardrive.io/docs/turbo/turbo-sdk/" target="_blank" rel="noopener noreferrer">Turbo SDK Documentation</a></li>
            <li><a href="https://turbo.ardrive.io" target="_blank" rel="noopener noreferrer">Turbo Bundle Service</a></li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Related Tools</h3>
          <ul>
            <li><Link to="/arweave-js">Arweave.js</Link> - Core Arweave JavaScript library</li>
            <li><Link to="/ar-io-sdk">ArIO SDK</Link> - Arweave ecosystem SDK</li>
            <li><Link to="/permaweb-libs">Permaweb Libs</Link> - Permaweb development libraries</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Community</h3>
          <ul>
            <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a></li>
            <li><a href="https://github.com/permaweb/arx/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
            <li><a href="https://turbo-topup.com/" target="_blank" rel="noopener noreferrer">Turbo Credit Purchase</a></li>
          </ul>
        </div>
      </div>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <h3 id="common-issues">Common Issues</h3>

      <h4>Upload Fails with "Insufficient Credits"</h4>
      <p>Purchase more credits using the <code>arx fund</code> command or visit <a href="https://turbo-topup.com/" target="_blank" rel="noopener noreferrer">turbo-topup.com</a></p>

      <h4>CLI Command Not Found</h4>
      <p>Ensure ARX is installed globally: <code>npm i -g @permaweb/arx</code></p>

      <h4>Wallet File Not Found</h4>
      <p>Verify the wallet file path and ensure the file exists and is readable</p>

      <h4>Network Timeout</h4>
      <p>Check your internet connection and try again. Large files may take longer to upload</p>

      <hr />
      
      <p>For more information about ARX and the Turbo bundle service, visit the <a href="https://docs.ardrive.io/docs/turbo/turbo-sdk/" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
    </div>
  );
}

export default ARX; 