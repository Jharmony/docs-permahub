import React from 'react';

function LoadNetwork() {
  return (
    <div className="page-container">
      <h1 id="load-network-atomic-assets">Load Network & Atomic Assets</h1>
      <p>Load Network (formerly WeaveVM) is an innovative fork of Ethereum that can read and write directly to Arweave, enabling new possibilities for decentralized applications and asset management.</p>

      <h2 id="what-is-load-network">What is Load Network?</h2>
      <ul>
        <li><strong>Ethereum-compatible</strong>: Fork of Ethereum with Arweave integration</li>
        <li><strong>Read/write to Arweave</strong>: Store and retrieve data permanently</li>
        <li><strong>Open for builders</strong>: Use familiar Ethereum tools with permaweb storage</li>
        <li><strong>Rebranded from WeaveVM</strong>: WeaveVM has officially rebranded to Load Network</li>
      </ul>

      <h2 id="creating-and-uploading-atomic-assets">Creating and Uploading Atomic Assets</h2>
      <p>With <code>@permaweb/libs</code> and Load Network, you can easily create and upload atomic assets to Arweave:</p>
      <pre><code>{`import { createAtomicAsset } from '@permaweb/libs';

const assetId = await createAtomicAsset({
  name: 'My Asset',
  description: 'Demo asset for Load Network',
  data: 'Hello, Arweave!',
  contentType: 'text/plain',
  assetType: 'document',
  creator: '0xYourEthereumAddress',
});`}</code></pre>

      <h2 id="benjimens-presentation">Benjimen's Presentation</h2>
      <p>Watch Benjimen's talk on Load Network and atomic assets from Arweave Day:</p>
      <div style={{textAlign: 'center', margin: '2em 0'}}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bazRjf2G1GY"
          title="Benjimen's Arweave Day Presentation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <ul>
        <li><a href="https://youtu.be/bazRjf2G1GY?si=CpkuD9XO0upzJf-U" target="_blank" rel="noopener noreferrer">Watch the video on YouTube</a></li>
      </ul>

      <h2 id="load-network-resources">Load Network Resources</h2>
      <ul>
        <li><a href="https://www.load.network/" target="_blank" rel="noopener noreferrer">Load Network Landing</a> - Official website</li>
        <li><a href="https://docs.load.network/" target="_blank" rel="noopener noreferrer">Load Network Documentation</a> - Complete documentation</li>
        <li><a href="https://blog.load.network/" target="_blank" rel="noopener noreferrer">Load Network Blog</a> - Latest updates and announcements</li>
        <li><a href="https://blog.load.network/load-network-arweave-precompiles/" target="_blank" rel="noopener noreferrer">Load Network Read and Write to Arweave from Solidity</a> - Technical guide</li>
        <li><a href="https://docs.load.network/using-load-network/load-network-precompiles" target="_blank" rel="noopener noreferrer">Load Network Precompiles</a> - Precompile documentation</li>
        <li><a href="https://blog.load.network/exex-rs-announcement/" target="_blank" rel="noopener noreferrer">EXEX.rs open-source directory of Reth</a> - Open source tools</li>
      </ul>

      <h2 id="legacy-weavevm-resources">Legacy: WeaveVM Resources</h2>
      <p><strong>Note:</strong> WeaveVM has rebranded to Load Network. For historical reference, here are the legacy WeaveVM resources:</p>
      <ul>
        <li><a href="https://www.wvm.dev/" target="_blank" rel="noopener noreferrer">WeaveVM Landing (Legacy)</a> - <strong>DEPRECATED: Now Load Network</strong></li>
        <li><a href="https://docs.wvm.dev/" target="_blank" rel="noopener noreferrer">WeaveVM Documentation (Legacy)</a> - <strong>DEPRECATED: Now Load Network docs</strong></li>
        <li><a href="https://blog.wvm.dev/" target="_blank" rel="noopener noreferrer">WeaveVM Blog (Legacy)</a> - <strong>DEPRECATED: Now Load Network blog</strong></li>
      </ul>
      <p><strong>For current information, please visit <a href="https://www.load.network/" target="_blank" rel="noopener noreferrer">Load Network</a></strong></p>

      <h2 id="learn-more">Learn More</h2>
      <ul>
        <li><a href="#/docs/developers/atomic-assets">Atomic Assets Guide</a></li>
        <li><a href="https://docs.load.network/using-load-network/load-network-precompiles" target="_blank" rel="noopener noreferrer">EVM Compatibility Guide</a></li>
      </ul>

      <hr />
      <p>Load Network and <code>@permaweb/libs</code> make it easy to build powerful, permanent dApps. Explore the docs and start building today!</p>
    </div>
  );
}

export default LoadNetwork; 