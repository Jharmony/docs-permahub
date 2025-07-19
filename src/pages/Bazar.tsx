import React from 'react';
import bazarlanding from '../assets/bazarlanding.png';
import bazardocs from '../assets/bazardocs.png';
import bazarstudio from '../assets/bazarstudio.png';
import bazarprofile from '../assets/bazarprofile.png';
import bazarcollection from '../assets/bazarcollection.png';
import bazaruploaddash from '../assets/bazaruploaddash.png';

function Bazar() {
  return (
    <div className="page-container">
      <h1 id="bazar-bazar-studio">Bazar & Bazar Studio: Build Your Own Marketplace</h1>
      
      <p>Bazar and Bazar Studio are flagship applications built on Arweave, showcasing the power of @permaweb/libs and the composable permaweb ecosystem. Perfect for hackathon participants looking to build marketplace applications!</p>

      <h2 id="what-is-bazar">What is Bazar?</h2>
      
      <p>Bazar is a decentralized marketplace for digital goods, collectibles, and more. It leverages Arweave's permanent storage and @permaweb/libs for asset management, profiles, and collections.</p>

      <ul>
        <li><strong>Decentralized marketplace</strong>: Buy, sell, and trade digital assets</li>
        <li><strong>Permanent storage</strong>: All listings and assets are stored on Arweave</li>
        <li><strong>Open source</strong>: Anyone can build on or extend Bazar</li>
        <li><strong>React + TypeScript</strong>: Modern frontend built with React and TypeScript</li>
        <li><strong>@permaweb/libs integration</strong>: Uses zones, profiles, atomic assets, and collections</li>
      </ul>

      <h2 id="what-is-bazar-studio">What is Bazar Studio?</h2>
      
      <p>Bazar Studio is a creator-focused platform for minting, managing, and showcasing digital assets. It provides advanced tools for artists, musicians, and creators to launch their own collections and interact with the permaweb.</p>

      <ul>
        <li><strong>Minting tools</strong>: Easily create atomic assets and collections</li>
        <li><strong>Profile management</strong>: Showcase your work and connect with fans</li>
        <li><strong>Integration with Bazar</strong>: Seamless listing and trading</li>
        <li><strong>Creator dashboard</strong>: Manage your assets and track performance</li>
      </ul>

      <h2 id="video-tutorial">Video Tutorial</h2>
      <p>Learn how to use Bazar Studio (formerly called Helix) for uploading and managing your digital assets:</p>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/bhLlFepA7LU?si=ZuHJ89kH3No4_Au2" 
          title="Bazar Studio Tutorial (formerly Helix)"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
      <p><em><strong>Note:</strong> In this video tutorial, the tool is referred to as "Helix" but has since been renamed to "Bazar Studio". The functionality remains the same.</em></p>

      <h2 id="ui-examples">UI Examples & Learning Resources</h2>
      
      <p>These screenshots show different aspects of the Bazar ecosystem, providing inspiration for your hackathon projects:</p>

      <div className="bazar-screenshots">
        <div className="screenshot-item">
          <h3>Bazar Landing Page</h3>
          <img src={bazarlanding} alt="Bazar Landing Page" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> Clean marketplace interface, featured collections, search functionality</p>
        </div>

        <div className="screenshot-item">
          <h3>Bazar Documentation</h3>
          <img src={bazardocs} alt="Bazar Documentation" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> Comprehensive docs, API references, integration guides</p>
        </div>

        <div className="screenshot-item">
          <h3>Bazar Studio - Creator Dashboard</h3>
          <img src={bazarstudio} alt="Bazar Studio Dashboard" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> Asset management, collection creation, analytics dashboard</p>
        </div>

        <div className="screenshot-item">
          <h3>Profile Management</h3>
          <img src={bazarprofile} alt="Bazar Profile Management" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> User profiles, social features, reputation system</p>
        </div>

        <div className="screenshot-item">
          <h3>Collection Management</h3>
          <img src={bazarcollection} alt="Bazar Collection Management" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> Collection organization, metadata management, bulk operations</p>
        </div>

        <div className="screenshot-item">
          <h3>Upload Dashboard</h3>
          <img src={bazaruploaddash} alt="Bazar Upload Dashboard" style={{maxWidth: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: '8px'}} />
          <p><strong>Key Features:</strong> Drag-and-drop uploads, batch processing, progress tracking</p>
        </div>
      </div>

      <h2 id="hackathon-project-ideas">Hackathon Project Ideas</h2>
      
      <p>Use Bazar and Bazar Studio as inspiration for your hackathon projects:</p>

      <h3>Marketplace Applications</h3>
      <ul>
        <li><strong>Specialized Marketplaces</strong> - Build marketplaces for specific niches (art, music, gaming, etc.)</li>
        <li><strong>Social Marketplaces</strong> - Add social features like following, recommendations, and discovery</li>
        <li><strong>Subscription Services</strong> - Create subscription-based content platforms</li>
        <li><strong>Rental Marketplaces</strong> - Build platforms for renting digital assets</li>
      </ul>

      <h3>Creator Tools</h3>
      <ul>
        <li><strong>Creator Analytics</strong> - Advanced analytics and insights for creators</li>
        <li><strong>Collaboration Tools</strong> - Multi-creator collaboration platforms</li>
        <li><strong>Fan Engagement</strong> - Tools for creators to engage with their audience</li>
        <li><strong>Revenue Optimization</strong> - AI-powered pricing and marketing tools</li>
      </ul>

      <h3>AI-Enhanced Features</h3>
      <ul>
        <li><strong>AI Curation</strong> - Use AI to recommend and curate content</li>
        <li><strong>Smart Pricing</strong> - AI-powered dynamic pricing algorithms</li>
        <li><strong>Content Generation</strong> - AI tools for creators to generate content</li>
        <li><strong>Fraud Detection</strong> - AI systems to detect and prevent fraud</li>
      </ul>

      <h2 id="technical-architecture">Technical Architecture</h2>
      
      <h3>Frontend Stack</h3>
      <ul>
        <li><strong>React 18</strong> - Modern React with hooks and concurrent features</li>
        <li><strong>TypeScript</strong> - Type-safe development</li>
        <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
        <li><strong>React Router</strong> - Client-side routing</li>
        <li><strong>React Query</strong> - Data fetching and caching</li>
      </ul>

      <h3>@permaweb/libs Integration</h3>
      <ul>
        <li><strong>Zones</strong> - Organize content and create communities</li>
        <li><strong>Profiles</strong> - User identity and social features</li>
        <li><strong>Atomic Assets</strong> - Digital asset creation and management</li>
        <li><strong>Collections</strong> - Asset organization and curation</li>
        <li><strong>Comments</strong> - Social interactions and discussions</li>
      </ul>

      <h3>Key Components</h3>
      <ul>
        <li><strong>Wallet Integration</strong> - ArConnect, Beacon, and other Arweave wallets</li>
        <li><strong>File Upload</strong> - Direct upload to Arweave with progress tracking</li>
        <li><strong>Search & Discovery</strong> - Advanced search with filters and sorting</li>
        <li><strong>Real-time Updates</strong> - Live updates using WebSocket connections</li>
      </ul>

      <h2 id="getting-started">Getting Started for Hackathon</h2>
      
      <h3>1. Study the Architecture</h3>
      <ul>
        <li>Review the <a href="https://github.com/permaweb/bazar" target="_blank" rel="noopener noreferrer">Bazar source code</a></li>
        <li>Understand the <a href="/atomic-assets">Atomic Assets</a> system</li>
        <li>Learn about <a href="/collections">Collections</a> and organization</li>
        <li>Explore <a href="/profiles">Profiles</a> for user management</li>
      </ul>

      <h3>2. Build Your MVP</h3>
      <ul>
        <li>Start with a simple marketplace using <a href="/starter-kits">Starter Kits</a></li>
        <li>Integrate <a href="/atomic-assets">Atomic Assets</a> for digital goods</li>
        <li>Add <a href="/profiles">user profiles</a> and social features</li>
        <li>Implement <a href="/collections">collections</a> for organization</li>
      </ul>

      <h3>3. Add Advanced Features</h3>
      <ul>
        <li>Integrate <a href="/ai-tools">AI tools</a> for recommendations</li>
        <li>Add <a href="/comments">comment systems</a> for community</li>
        <li>Implement <a href="/zones">zones</a> for content organization</li>
        <li>Use <a href="/weavedrive">WeaveDrive</a> for file management</li>
      </ul>

      <h2 id="example-flow">Complete User Flow</h2>
      
      <ol>
        <li><strong>Connect your wallet</strong> (ArConnect, Beacon, etc.)</li>
        <li><strong>Create a profile</strong> using @permaweb/libs profiles</li>
        <li><strong>Upload assets</strong> directly to Arweave</li>
        <li><strong>Create atomic assets</strong> with metadata and properties</li>
        <li><strong>Organize into collections</strong> for better discovery</li>
        <li><strong>List on marketplace</strong> with pricing and descriptions</li>
        <li><strong>Manage sales</strong> through creator dashboard</li>
        <li><strong>Engage with community</strong> through comments and social features</li>
      </ol>

      <h2 id="resources">Resources for Hackathon Builders</h2>
      
      <ul>
        <li><a href="https://bazar.ar.io/#/docs" target="_blank" rel="noopener noreferrer">Official Bazar Documentation</a></li>
        <li><a href="https://github.com/permaweb/bazar" target="_blank" rel="noopener noreferrer">Bazar Source Code</a></li>
        <li><a href="/starter-kits">Starter Kits</a> - Quick start templates</li>
        <li><a href="/atomic-assets">Atomic Assets Guide</a> - Asset creation</li>
        <li><a href="/collections">Collections Guide</a> - Asset organization</li>
        <li><a href="/profiles">Profiles Guide</a> - User management</li>
        <li><a href="/weavers-resource-library">Weavers Resource Library</a> - Complete toolkit</li>
      </ul>

      <h2 id="community">Community & Support</h2>
      
      <ul>
        <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Get help and share your projects</li>
        <li><a href="https://github.com/permaweb/bazar/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - Report bugs and request features</li>
        <li><a href="https://twitter.com/bazar_ar" target="_blank" rel="noopener noreferrer">Bazar Twitter</a> - Stay updated</li>
      </ul>

      <hr />
      
      <p><strong>Ready to build your own marketplace?</strong> Use Bazar and Bazar Studio as inspiration, leverage @permaweb/libs for the backend, and create something amazing for the hackathon!</p>
    </div>
  );
}

export default Bazar; 