import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Hub Docs</h1>
      
      <p>Welcome to <strong>Hub Docs</strong>—the definitive community-driven documentation hub for the entire Arweave ecosystem. Think of this as your comprehensive guidebook for building the future of permanent, decentralized applications.</p>
      
      <h2>Your Single Source of Truth</h2>
      
      <p>While official documentation exists for individual projects like AO and Arweave, <strong>Hub Docs serves as the community's unified knowledge base</strong>—curated, tested, and maintained by builders for builders. Here you'll find:</p>
      
      <ul>
        <li><strong>Cross-ecosystem integration guides</strong> - How to combine multiple Arweave technologies</li>
        <li><strong>Real-world patterns and examples</strong> - Tested solutions from actual projects</li>
        <li><strong>Community best practices</strong> - Lessons learned from successful builders</li>
        <li><strong>Starter kits and templates</strong> - Jump-start your development journey</li>
        <li><strong>Comprehensive API references</strong> - All the tools you need in one place</li>
      </ul>
      
      <h2>The Complete Arweave Ecosystem</h2>
      
      <p>Hub Docs brings together everything you need to build on the permaweb:</p>
      <ul>
        <li><strong>Arweave</strong> - Permanent data storage and decentralized web infrastructure</li>
        <li><strong>AO (Actor Oriented)</strong> - Autonomous agents, smart contracts, and the Hyper Parallel Computer</li>
        <li><strong>@permaweb/libs</strong> - Core SDK for zones, profiles, atomic assets, and collections</li>
        <li><strong>@permaweb/aoconnect</strong> - AO client library for browser and Node.js</li>
        <li><strong>arweave.js</strong> - JavaScript SDK for Arweave interactions</li>
        <li><strong>Hyperbeam</strong> - High-performance data streaming and processing with HTTP</li>
        <li><strong>WeaveDrive</strong> - Virtual file system for Arweave (AOP-5)</li>
        <li><strong>Llama-Herder</strong> - Decentralized LLM inference on AO</li>
        <li><strong>Load Network</strong> - Ethereum-compatible Arweave integration</li>
        <li><strong>0rbit Oracle Network</strong> - Decentralized data feeds</li>
        <li><strong>ASTRO</strong> - Stablecoin protocol on Arweave</li>
        <li><strong>ArIO</strong> - Gateway services and infrastructure</li>
      </ul>
      
      <p>Whether you're a newcomer exploring the ecosystem or a seasoned developer building the next big thing, Hub Docs is your roadmap to success in the permaweb.</p>
      
      <h2>Why Hub Docs?</h2>
      
      <div className="quick-start">
        <h3>Community-Driven</h3>
        <p>Curated by the builders who actually use these tools daily. No corporate speak—just practical, battle-tested knowledge.</p>
        
        <h3>Ecosystem-First</h3>
        <p>Unlike official docs that focus on individual projects, we show you how everything works together. Learn the synergies between AO, Arweave, and the broader ecosystem.</p>
        
        <h3>Always Up-to-Date</h3>
        <p>As the fastest-moving ecosystem in Web3, we keep pace with the latest developments, tools, and best practices.</p>
        
        <h3>Practical Focus</h3>
        <p>Every guide, example, and tutorial is designed to get you building real applications, not just reading theory.</p>
      </div>
      
      <h2>AO Hackathon 2025: Agents of the Permaweb</h2>
      
      <div className="hackathon-highlight">
        <p><strong>Build Autonomous AI Agents That Live Forever!</strong> Join the AO Hackathon for a chance at $39,000 in prizes.</p>
        
        <div className="hackathon-details">
          <ul>
            <li><strong>Registration:</strong> <a href="https://permahub.ar.io/#/hackathon" target="_blank" rel="noopener noreferrer">Register Now</a></li>
            <li><strong>Dates:</strong> August 11 - September 2, 2025</li>
            <li><strong>Grand Prize:</strong> $25,000</li>
            <li><strong>Tracks:</strong> Practical Utility Agents, Multi-Agent Systems, AI-Enhanced Applications, Agent Infrastructure</li>
          </ul>
        </div>
        
        <p><Link to="/hackathon" className="cta-button">View Hackathon Details & Resources</Link></p>
      </div>
      
      <h2>Start Your Journey</h2>
      
      <p>Ready to build the future? Here's how to navigate Hub Docs:</p>
      
      <ul>
        <li><Link to="/starter-kits">Starter Kits</Link> — Get up and running in minutes</li>
        <li><Link to="/weavers-resource-library">Weavers Resource Library</Link> — The complete toolkit for permaweb builders</li>
        <li><Link to="/ai-tools">AI Tools & LLMs</Link> — Build intelligent, autonomous applications</li>
        <li><Link to="/api-reference">API Reference</Link> — Complete technical documentation</li>
        <li><Link to="/examples">Examples</Link> — See how others are building</li>
        <li><Link to="/best-practices">Best Practices</Link> — Learn from the community's experience</li>
        <li><Link to="/troubleshooting">Troubleshooting</Link> — Solve common problems quickly</li>
      </ul>
      
      <h2>Core Development Tools</h2>
      
      <ul>
        <li><Link to="/zones">Zones</Link> — Entity management and organization</li>
        <li><Link to="/profiles">Profiles</Link> — User identity and metadata</li>
        <li><Link to="/atomic-assets">Atomic Assets</Link> — Digital asset creation and management</li>
        <li><Link to="/collections">Collections</Link> — Asset organization and curation</li>
        <li><Link to="/comments">Comments</Link> — Social features and discussions</li>
      </ul>
      
      <h2>Advanced Development</h2>
      
      <ul>
        <li><Link to="/aos-sqlite-workshop">AOS-Sqlite Workshop</Link> — Database indexing with AO</li>
        <li><Link to="/weavedrive">WeaveDrive</Link> — Virtual file system implementation</li>
        <li><Link to="/load-network">Load Network</Link> — Ethereum-compatible Arweave integration</li>
        <li><Link to="/bazar">Bazar & Bazar Studio</Link> — Marketplace and creator tools</li>
        <li><Link to="/beacon-mini-bazar">Beacon Mini Bazar</Link> — Mobile marketplace app</li>
      </ul>
      
      <h2>Library Sections</h2>
      
      <ul>
        <li><Link to="/permaweb-libs">permaweb-libs</Link> — SDK and API documentation</li>
        <li><em>More libraries coming soon...</em></li>
      </ul>
      
      <h2>Quick Start for Hackathon Participants</h2>
      
      <div className="quick-start">
        <h3>1. Install AO and AOS</h3>
        <pre><code>{`npm install -g https://get_ao.arweave.net
npm install -g aos`}</code></pre>
        
        <h3>2. Start Building</h3>
        <ul>
          <li><a href="https://ide.betteridea.dev/" target="_blank" rel="noopener noreferrer">BetterIDEa Web IDE</a> - No installation required</li>
          <li><a href="https://cookbook_ao.arweave.net/tutorials/begin/index.html" target="_blank" rel="noopener noreferrer">AO Tutorials</a> - Learn the basics</li>
          <li><a href="https://cookbook_ao.defi.ao/llms-explanation.html" target="_blank" rel="noopener noreferrer">AO LLMs</a> - AI integration guide</li>
        </ul>
        
        <h3>3. Get Help</h3>
        <ul>
          <li><a href="https://discord.gg/dYXtHwc9dc" target="_blank" rel="noopener noreferrer">AO Discord</a> - AO community support</li>
          <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Real-time support</li>
          <li><Link to="/weavers-resource-library">Weavers Resource Library</Link> - Comprehensive resources</li>
          <li><Link to="/starter-kits">Starter Kits</Link> - Quick setup guides</li>
        </ul>
      </div>
      
      <hr />
      
      <p><a href="https://permahub.ar.io" target="_blank" rel="noreferrer">Back to PermaHub</a></p>
    </div>
  );
}

export default Home; 