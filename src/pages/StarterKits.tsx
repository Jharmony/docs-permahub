import React from 'react';

function StarterKits() {
  return (
    <div className="page-container">
      <h1 id="starter-kits">Starter Kits for the Arweave Ecosystem</h1>
      
      <p>Welcome! This page collects the best starter kits and guides for building on Arweave, AO, and the permaweb ecosystem. Whether you're new or experienced, these resources will help you get started quickly.</p>

      <h2 id="quick-start-guides">Quick Start Guides</h2>
      
      <ul>
        <li><strong><a href="https://cookbook.arweave.dev/kits/react/index.html" target="_blank" rel="noopener noreferrer">Vite + ArDrive React Starter</a></strong><br />
          Step-by-step guide to set up a Vite React app with ArDrive and deploy to Arweave. Includes wallet setup, deployment, and best practices.</li>
        
        <li><strong><a href="https://cookbook.arweave.dev/kits/svelte/index.html" target="_blank" rel="noopener noreferrer">Vite Do Show How-To</a></strong><br />
          A concise guide for building and deploying a Vite app on Arweave.</li>
        
        <li><strong><a href="/permaweb-libs">Permaweb Libs Starter</a></strong><br />
          In-depth documentation and starter code for using @permaweb/libs in your projects.</li>
        
        <li><strong><a href="/zones">Process Zone Lua</a></strong><br />
          Advanced: How to use Lua scripts for zone management on Arweave.</li>
        
        <li><strong><a href="/atomic-assets">Process Asset Lua</a></strong><br />
          Advanced: Managing atomic assets with Lua and Arweave.</li>
      </ul>

      <h2 id="fullstack-permadapp-tools">Fullstack PermaDapp Tools</h2>
      
      <h3 id="create-ao-dapp">Create-ao-dapp</h3>
      <ul>
        <li><a href="https://create-ao-dapp.arweave.net/" target="_blank" rel="noopener noreferrer">Create-ao-dapp | Fullstack PermaDapp tool</a> - Complete fullstack development tool for AO applications</li>
      </ul>

      <h2 id="framework-starter-kits">Framework Starter Kits</h2>
      
      <h3 id="react-starter-kits">React Starter Kits</h3>
      <ul>
        <li><a href="https://cookbook.arweave.dev/kits/react/index.html" target="_blank" rel="noopener noreferrer">React Starter Kits</a> - Official React starter kits for Arweave development</li>
      </ul>

      <h3 id="svelte-starter-kits">Svelte Starter Kits</h3>
      <ul>
        <li><a href="https://cookbook.arweave.dev/kits/svelte/index.html" target="_blank" rel="noopener noreferrer">Svelte Starter Kits</a> - Official Svelte starter kits for Arweave development</li>
      </ul>

      <h3 id="vue-starter-kits">Vue Starter Kits</h3>
      <ul>
        <li><a href="https://cookbook.arweave.dev/kits/vue/index.html" target="_blank" rel="noopener noreferrer">Vue Starter Kits</a> - Official Vue starter kits for Arweave development</li>
      </ul>

      <h2 id="ao-development-tools">AO Development Tools</h2>
      
      <h3 id="aos-ao-system">AOS (AO System)</h3>
      <ul>
        <li><a href="https://www.crowdcast.io/c/aoventureskeynote6" target="_blank" rel="noopener noreferrer">AOS Release v1.0.25</a> - Latest AOS release information</li>
        <li><a href="https://hackmd.io/@ao-docs/rkM1C9m40" target="_blank" rel="noopener noreferrer">AOS-Sqlite Workshop by Tom Wilson</a> - Database indexing workshop</li>
        <li><a href="https://mirror.xyz/0xCf673b87aFBed6091617331cC895376209d3b923/M4XoQFFCAKBH54bwIsCFT3Frxd575-plCg2o4H1Tujs" target="_blank" rel="noopener noreferrer">Installing packages on ao processes using APM</a> - Package management for AO processes</li>
      </ul>

      <h2 id="recommended-steps">Recommended Steps for New Developers</h2>
      
      <ol>
        <li><strong>Read the Vite + ArDrive Starter</strong> for a modern React setup.</li>
        <li><strong>Explore the Permaweb Libs Starter</strong> for SDK usage and API examples.</li>
        <li><strong>Try the Lua guides</strong> if you want to go deeper with scripting and automation.</li>
      </ol>

      <h2 id="more-resources">More Resources</h2>
      
      <ul>
        <li><a href="/api-reference">Arweave Data Protocol</a></li>
        <li><a href="/best-practices">Style Guide</a></li>
        <li><a href="/examples">Open Proposals & Ideas</a></li>
      </ul>

      <hr />
      
      <p>Need help? Check out the <a href="/getting-started">Getting Started</a> page or join the Arweave developer community!</p>
    </div>
  );
}

export default StarterKits; 