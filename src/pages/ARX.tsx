import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

const ARX: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <main className="main-content">
          <div className="page-header">
            <h1>ARX - Permanent Data Upload SDK</h1>
            <p className="page-description">
              ARX is a drop-in replacement SDK/CLI for uploading permanent data to Arweave with support for multiple payment methods.
            </p>
          </div>

          <div className="content-section">
            <h2 id="overview">Overview</h2>
            <p>
              ARX is a powerful SDK and CLI tool that anyone can use to upload permanent data to Arweave. 
              It's designed as a drop-in replacement for prior bundle service SDKs, requiring minimal code changes 
              for most developers.
            </p>

            <div className="info-box">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Drop-in Replacement:</strong> Minimal code changes required</li>
                <li><strong>Multiple Payment Methods:</strong> AR, SOL, ETH, POL, and Fiat support</li>
                <li><strong>Turbo Bundle Service:</strong> Fast and reliable uploads</li>
                <li><strong>CLI & SDK:</strong> Both command-line and programmatic interfaces</li>
                <li><strong>Credit System:</strong> Purchase upload credits for cost-effective uploads</li>
              </ul>
            </div>
          </div>

          <div className="content-section">
            <h2 id="quick-start">Quick Start</h2>
            
            <h3 id="installation">Installation</h3>
            <pre><code>{`npm i -g @permaweb/arx`}</code></pre>

            <h3 id="basic-usage">Basic Usage</h3>
            <p>For most developers, you only need to change two lines:</p>
            
            <h4>Import</h4>
            <pre><code>{`import ARx from '@permaweb/arx'`}</code></pre>
            
            <h4>Initialize</h4>
            <pre><code>{`const arx = new ARx(...)`}</code></pre>
          </div>

          <div className="content-section">
            <h2 id="cli-usage">CLI Usage</h2>
            
            <h3 id="funding">Get Upload Credits</h3>
            <p>Purchase credits with supported tokens:</p>
            
            <h4>Supported Tokens</h4>
            <table className="token-table">
              <thead>
                <tr>
                  <th>Token Symbol</th>
                  <th>Token Option Name</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>AR</td><td>arweave</td></tr>
                <tr><td>ETH</td><td>ethereum</td></tr>
                <tr><td>POL</td><td>matic</td></tr>
                <tr><td>SOL</td><td>solana</td></tr>
              </tbody>
            </table>

            <h4>Purchase Credits</h4>
            <pre><code>{`arx fund \${TOKEN_QUANTITY} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY}`}</code></pre>

            <h4>Check Balance</h4>
            <pre><code>{`arx balance \${PUBLIC_ADDRESS} -t \${TOKEN}`}</code></pre>

            <h3 id="uploading">Uploading Data</h3>
            
            <h4>Upload Single File</h4>
            <pre><code>{`arx upload \${FILENAME} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY}`}</code></pre>

            <h4>Upload Directory</h4>
            <pre><code>{`arx upload-dir \${DIRNAME} -t \${TOKEN} -w \${KEYFILE or PRIVATE_KEY} --index-file index.html`}</code></pre>

            <h4>Get Price Estimate</h4>
            <pre><code>{`arx price \${BYTES}`}</code></pre>
          </div>

          <div className="content-section">
            <h2 id="sdk-usage">SDK Usage</h2>
            
            <h3 id="setup">Setup</h3>
            <pre><code>{`import fs from 'node:fs'
import ARx from '@permaweb/arx'

const arx = async () =>
  new ARx({ 
    url: 'https://turbo.ardrive.io',
    token: 'arweave', 
    key: JSON.parse(fs.readFileSync("wallet.json", "utf-8")) 
  })`}</code></pre>

            <h3 id="purchase-credits">Purchase Credits</h3>
            <pre><code>{`async function main() {
    console.log(
        await arx().fund(10 ** 12)
    )
}

main()`}</code></pre>

            <h3 id="check-balance">Check Credit Balance</h3>
            <pre><code>{`async function main() {
    console.log(
        await arx().getBalance("XoyCWBAygZ1MBTCkgGKf22627txBjsLu0m2FtGwQi0k")
    )
}

main()`}</code></pre>

            <h3 id="upload-file">Upload File</h3>
            <pre><code>{`async function main() {
    console.log(
        await arx().upload("myfile.bin", { tags: ... })
    )
}

main()`}</code></pre>

            <h3 id="upload-directory">Upload Directory</h3>
            <pre><code>{`async function main() { 
    console.log(
        await arx().uploadFolder("./dist")
    )
}

main()`}</code></pre>

            <h3 id="get-price">Get Price</h3>
            <pre><code>{`async function main() {
    console.log(
      await arx().getPrice(1024 * 1024)
    )
}

main()`}</code></pre>
          </div>

          <div className="content-section">
            <h2 id="video-tutorial">Video Tutorial</h2>
            <p>Learn how to use ARX for uploading data to Arweave:</p>
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VFCLxiwGmS4?si=ZKfhHU7nVlgS8uh8" 
                title="ARX Tutorial"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="content-section">
            <h2 id="turbo-bundle-service">Turbo Bundle Service</h2>
            <p>
              By default, ARX uses the turbo bundle service from ArDrive (https://turbo.ardrive.io). 
              This service allows you to purchase non-refundable "upload credits" called "turbo credits" 
              to upload your data to the Arweave Storage Network.
            </p>

            <div className="info-box">
              <h3>Supported Funding Sources</h3>
              <ul>
                <li><strong>Cryptocurrencies:</strong> AR, SOL, ETH, POL</li>
                <li><strong>Fiat:</strong> Purchase credits at https://turbo-topup.com/</li>
              </ul>
            </div>
          </div>

          <div className="content-section">
            <h2 id="development">Development</h2>
            <pre><code>{`npm install
npm run prod:build`}</code></pre>
          </div>

          <div className="content-section">
            <h2 id="resources">Resources</h2>
            <ul>
              <li><a href="https://github.com/permaweb/arx" target="_blank" rel="noopener noreferrer">GitHub Repository</a> - Source code and issues</li>
              <li><a href="https://arweave.org" target="_blank" rel="noopener noreferrer">Arweave.org</a> - Official Arweave website</li>
              <li><a href="https://wiki.arweave.net" target="_blank" rel="noopener noreferrer">Arweave Wiki</a> - Documentation and guides</li>
              <li><a href="https://cookbook.arweave.net" target="_blank" rel="noopener noreferrer">Arweave Cookbook</a> - Development recipes</li>
              <li><a href="https://cookbook_ao.arweave.net" target="_blank" rel="noopener noreferrer">AO Cookbook</a> - AO development guide</li>
              <li><Link to="/weavers-resource-library">Weavers Resource Library</Link> - Complete developer toolkit</li>
            </ul>
          </div>

          <div className="content-section">
            <h2 id="support">Support</h2>
            <p>
              If you run into any usage issues or found a bug, please create an issue at:
            </p>
            <ul>
              <li><a href="https://github.com/permaweb/arx" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - Report bugs and request features</li>
              <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Community support</li>
            </ul>
          </div>
        </main>
        <RightSidebar showToc={true} />
      </div>
    </div>
  );
};

export default ARX; 