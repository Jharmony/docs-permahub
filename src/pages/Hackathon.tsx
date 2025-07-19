import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

function Hackathon() {
  return (
    <div className="page-container">
      <h1 id="ao-hackathon-2025">AO Hackathon 2025: Agents of the Permaweb</h1>
      
      <p>Build Autonomous AI Agents That Live Forever! Join the AO Hackathon for a chance at $39,000 in prizes.</p>

      <div style={{textAlign: 'center', margin: '2em 0'}}>
        <video width="100%" controls>
          <source src="https://video.twimg.com/amplify_video/1943671437673275392/vid/avc1/1280x720/YvOXjd5jXEEjxhHL.mp4?tag=14" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hackathon-highlights">
        <ul>
          <li><strong>Registration:</strong> <a href="https://permahub.ar.io/#/hackathon" target="_blank" rel="noopener noreferrer">Register for AO Hackathon</a></li>
          <li><strong>Dates:</strong> August 11 - September 2, 2025</li>
          <li><strong>Grand Prize:</strong> $25,000</li>
          <li><strong>Tracks:</strong>
            <ul>
              <li>Practical Utility Agents</li>
              <li>Multi-Agent Systems</li>
              <li>AI-Enhanced Applications</li>
              <li>Agent Infrastructure</li>
              <li>Special Awards: Community Choice, Best Documentation, Most Practical Use Case</li>
            </ul>
          </li>
        </ul>
      </div>

      <h2 id="prerequisites-quick-setup">Prerequisites: Quick Setup</h2>
      
      <h3 id="system-requirements">System Requirements</h3>
      <ul>
        <li><strong>Node.js v20 or later</strong> - <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Download here</a></li>
        <li><strong>Git</strong> - <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Download here</a></li>
        <li><strong>Terminal/Command Line</strong> - Built into macOS/Linux, <a href="https://apps.microsoft.com/detail/9n0dx20hk701" target="_blank" rel="noopener noreferrer">Windows Terminal</a> recommended</li>
      </ul>

      <h3 id="install-ao-and-aos">Install AO and AOS</h3>
      
      <h4>Step 1: Install AO CLI</h4>
      <pre><code>{`npm install -g https://get_ao.arweave.net`}</code></pre>

      <h4>Step 2: Install AOS (AO System)</h4>
      <pre><code>{`npm install -g aos`}</code></pre>

      <h4>Step 3: Verify Installation</h4>
      <pre><code>{`# Check AO version
ao --version

# Check AOS version
aos --version`}</code></pre>

      <h4>Step 4: Start AOS</h4>
      <pre><code>{`# Launch AOS interactive environment
aos`}</code></pre>
      
      <p>You should see the AOS prompt: <code>aos{'>'}</code></p>

      <h3 id="quick-test">Quick Test</h3>
      <p>Once in AOS, try this simple test:</p>
      
      <pre><code>{`-- Test basic functionality
print("Hello, AO World!")

-- Test message sending (optional)
Send({ Target = "test", Data = "Hello from AOS!" })`}</code></pre>

      <h3 id="alternative-web-ide">Alternative: Use BetterIDEa Web IDE</h3>
      <p>If you prefer a web-based environment:</p>
      <ul>
        <li>Visit <a href="https://ide.betteridea.dev/" target="_blank" rel="noopener noreferrer">BetterIDEa Web IDE</a></li>
        <li>No local installation required</li>
        <li>Full AO development environment in your browser</li>
      </ul>

      <h3 id="alternative-tools">Alternative Tools & Explorers</h3>
      
      <h4 id="aosweb">AOSWeb: Web-Based AO Process Connection</h4>
      <p>AOSWeb is a powerful web tool that allows you to connect to your AO processes directly from your browser:</p>
      <ul>
        <li><strong>Web Interface:</strong> <a href="https://aosweb.arweave.net" target="_blank" rel="noopener noreferrer">aosweb.arweave.net</a></li>
        <li><strong>Features:</strong> Connect to AO processes, send messages, view process state</li>
        <li><strong>No Installation:</strong> Works directly in your browser</li>
        <li><strong>Real-time Interaction:</strong> Communicate with your AI agents and processes</li>
        <li><strong>Perfect for Testing:</strong> Great for debugging and testing your hackathon projects</li>
      </ul>

      <h4 id="block-explorers">Block Explorers & Transaction Viewers</h4>
      
      <h5>Arweave L1 Transactions</h5>
      <ul>
        <li><strong>ViewBlock:</strong> <a href="http://viewblock.io/arweave/" target="_blank" rel="noopener noreferrer">viewblock.io/arweave/</a> - Explore Arweave L1 transactions and blocks</li>
        <li><strong>Features:</strong> Block explorer, transaction history, wallet tracking</li>
        <li><strong>Use Cases:</strong> Verify data uploads, track Arweave transactions, monitor network activity</li>
      </ul>

      <h5>AO Transaction & Message Explorers</h5>
      <ul>
        <li><strong>AO.Link:</strong> <a href="https://ao.link" target="_blank" rel="noopener noreferrer">ao.link</a> - Explore AO transactions and process interactions</li>
        <li><strong>Lunar:</strong> <a href="https://lunar.arweave.net" target="_blank" rel="noopener noreferrer">lunar.arweave.net</a> - View messages sent in AO (The Hyper Parallel Computer)</li>
        <li><strong>Features:</strong> Message history, process communication tracking, AO network monitoring</li>
        <li><strong>Use Cases:</strong> Debug agent communications, track message flows, monitor AO network activity</li>
      </ul>

      <h4 id="development-workflow">Development Workflow with These Tools</h4>
      <ol>
        <li><strong>Development:</strong> Use BetterIDEa or local AOS for coding</li>
        <li><strong>Testing:</strong> Use AOSWeb to interact with your deployed processes</li>
        <li><strong>Debugging:</strong> Use AO.Link and Lunar to track messages and transactions</li>
        <li><strong>Verification:</strong> Use ViewBlock to verify Arweave data uploads</li>
      </ol>

      <h3 id="get-help">Get Help</h3>
      <ul>
        <li><strong>Discord:</strong> <a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> for real-time support</li>
        <li><strong>Documentation:</strong> <a href="https://cookbook_ao.arweave.net/welcome/getting-started.html" target="_blank" rel="noopener noreferrer">AO Getting Started</a></li>
        <li><strong>Tutorials:</strong> <a href="https://cookbook_ao.arweave.net/tutorials/begin/index.html" target="_blank" rel="noopener noreferrer">AO Tutorials</a></li>
      </ul>

      <h2 id="ai-tools-llm-integration">AI Tools & LLM Integration</h2>
      
      <h3 id="llama-herder">Llama-Herder: Decentralized LLM Inference</h3>
      <p>Llama-Herder provides AO users with a fully decentralized LLM inference environment. Send one simple AO message to the Llama herder and receive responses from inference workers.</p>

      <ul>
        <li><strong>What it is:</strong> 'Llama as a Service' infrastructure using AOS-Llama (port of Llama.cpp)</li>
        <li><strong>Models supported:</strong> Meta's Llama models, Microsoft's Phi models, and many others</li>
        <li><strong>How it works:</strong> Herds worker processes running AOS-Llama inference asynchronously and in parallel</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/permaweb/llama-herder" target="_blank" rel="noopener noreferrer">permaweb/llama-herder</a></li>
        <li><strong>Installation:</strong> <code>APM.install("@sam/Llama-Herder")</code></li>
        <li><strong>Usage:</strong> <code>Llama.run("Your prompt", tokenCount)</code></li>
      </ul>

      <h3 id="ao-llms-documentation">AO LLMs Documentation</h3>
      <ul>
        <li><a href="https://cookbook_ao.defi.ao/llms-explanation.html" target="_blank" rel="noopener noreferrer">AO LLMs Official Docs</a> - Complete guide to AI tools and agents</li>
        <li><Link to="/building-ai-agents">Building AI Agents Guide</Link> - Complete guide to building AI agents from simple to advanced</li>
        <li><Link to="/ai-tools">AI Tools & LLMs</Link> - Comprehensive AI development resources</li>
      </ul>

      <h3 id="early-ao-automation">Early AO Automation & AI Agents</h3>
      <ul>
        <li><a href="https://cookbook_ao.arweave.net/tutorials/begin/messaging.html#check-the-morpheus-variable" target="_blank" rel="noopener noreferrer">Messaging in AO Tutorial</a> - Learn to communicate with Morpheus, an early AI agent</li>
        <li><a href="https://cookbook_ao.arweave.net/tutorials/begin/rabbithole.html#_3-locate-trinity" target="_blank" rel="noopener noreferrer">Enter The Construct Tutorial</a> - Work with Trinity and complete AI agent challenges</li>
        <li><strong>Morpheus Process ID:</strong> <code>Fvan28CFY0JYl5f_ETB7d3PDwBhGS8Yq5IA0vcWulUc</code> (LegacyNet)</li>
        <li><strong>Trinity Process ID:</strong> <code>9yOQrYNwIfIOeSswRDGUMd5gvMWJKxleInD_95DEC4A</code> (LegacyNet)</li>
      </ul>

      <p>These tutorials demonstrate early examples of automation and AI agents in AO, teaching fundamental concepts like:</p>
      <ul>
        <li><strong>Message-based communication</strong> between processes</li>
        <li><strong>Handler-based AI responses</strong> and task completion</li>
        <li><strong>Token-gated access</strong> to AI-powered environments</li>
        <li><strong>Multi-agent workflows</strong> and coordination</li>
        <li><strong>Interactive AI challenges</strong> and skill validation</li>
      </ul>

      <h3 id="ai-development-resources">AI Development Resources</h3>
      <ul>
        <li><a href="https://cookbook_ao.arweave.net/references/lua.html" target="_blank" rel="noopener noreferrer">Understanding Lua for AI</a> - Lua programming for AO processes</li>
        <li><a href="https://github.com/Autonomous-Finance/ao-process-testing" target="_blank" rel="noopener noreferrer">AO Process Testing</a> - Testing framework for AI agents</li>
        <li><a href="https://www.npmjs.com/package/aoform" target="_blank" rel="noopener noreferrer">AOForm for AI Applications</a> - Form handling for AI interfaces</li>
      </ul>

      <h2 id="how-to-participate">How to Participate</h2>
      <ol>
        <li>Register by August 7</li>
        <li>Build your agent (Aug 11 - Sep 2)</li>
        <li>Submit your repo, deployed agent, demo video, and writeup</li>
      </ol>

      <h2 id="key-resources">Key Resources</h2>
      <ul>
        <li><Link to="/weavers-resource-library">Weavers Resource Library</Link></li>
        <li><Link to="/starter-kits">Starter Kits & Tools</Link></li>
        <li><Link to="/building-ai-agents">Building AI Agents Guide</Link> - Complete AI agent development guide</li>
        <li><Link to="/ai-tools">AI Tools & LLMs</Link></li>
        <li><a href="https://www.youtube.com/@Weavers_Org/" target="_blank" rel="noopener noreferrer">Workshops & Videos</a></li>
        <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Join the Bazar Discord</a></li>
      </ul>

      <h2 id="reality-protocol-resources">Reality Protocol: Build Your Own AI World</h2>
      
      <p><strong>Reality Protocol</strong> is a powerful framework for building AI agents and creating immersive worlds on AO. It's perfect for hackathon participants who want to build autonomous agents that can interact with users in custom environments.</p>

      <h3 id="what-is-reality-protocol">What is Reality Protocol?</h3>
      <p>Reality Protocol allows anyone to build their own world populated with AI agents. It provides:</p>
      <ul>
        <li><strong>World Creation</strong> - Build 2D/3D environments with custom tilesets and maps</li>
        <li><strong>AI Agent Development</strong> - Create autonomous agents that can interact with users</li>
        <li><strong>Multi-Agent Systems</strong> - Build complex ecosystems with multiple AI agents</li>
        <li><strong>Interactive Experiences</strong> - Create games, simulations, and social spaces</li>
        <li><strong>Permanent Storage</strong> - All worlds and agents are stored permanently on Arweave</li>
      </ul>

      <h3 id="reality-protocol-documentation">Documentation & Guides</h3>
      <ul>
        <li><a href="https://github.com/elliotsayes/Reality/tree/main/docs" target="_blank" rel="noopener noreferrer">Reality Protocol Documentation</a> - Complete documentation and guides</li>
        <li><a href="https://github.com/elliotsayes/Reality/blob/main/docs/WorldGuide.md" target="_blank" rel="noopener noreferrer">World Guide</a> - How to create your own world</li>
        <li><a href="https://github.com/elliotsayes/Reality/blob/main/docs/AgentGuide.md" target="_blank" rel="noopener noreferrer">Agent Guide</a> - Building AI agents for your world</li>
        <li><a href="https://github.com/elliotsayes/Reality/blob/main/docs/Reality.md" target="_blank" rel="noopener noreferrer">Reality Protocol Specification</a> - Technical protocol details</li>
        <li><a href="https://github.com/elliotsayes/Reality/blob/main/docs/Schema.md" target="_blank" rel="noopener noreferrer">Schema Protocol</a> - Data structures and schemas</li>
        <li><a href="https://github.com/elliotsayes/Reality/blob/main/docs/Chat.md" target="_blank" rel="noopener noreferrer">Chat Protocol</a> - Communication between agents</li>
      </ul>

      <h3 id="reality-protocol-examples">Example Projects & Templates</h3>
      <ul>
        <li><a href="https://github.com/elliotsayes/Reality/tree/main/process/npc" target="_blank" rel="noopener noreferrer">NPC Examples</a> - Sample AI agents (LlamaBanker, LlamaKing, etc.)</li>
        <li><a href="https://github.com/elliotsayes/Reality/tree/main/process/world" target="_blank" rel="noopener noreferrer">World Examples</a> - Sample worlds (LlamaLand, PalmIsland, RpgLand)</li>
        <li><a href="https://github.com/elliotsayes/Reality/tree/main/process/llm" target="_blank" rel="noopener noreferrer">LLM Integration</a> - AI model integration examples</li>
        <li><a href="https://github.com/elliotsayes/Reality/tree/main/docs/dl/TemplateTiledProject.zip" target="_blank" rel="noopener noreferrer">Tiled Project Template</a> - Map creation template</li>
      </ul>

      <h3 id="reality-protocol-quick-start">Quick Start with Reality Protocol</h3>
      
      <h4>1. Set Up Your Development Environment</h4>
      <pre><code>{`# Clone the Reality Protocol repository
git clone https://github.com/elliotsayes/Reality.git
cd Reality

# Install dependencies
npm install`}</code></pre>

      <h4>2. Create Your First World</h4>
      <ul>
        <li>Use the <a href="https://github.com/elliotsayes/Reality/blob/main/docs/src/WorldTemplate.lua" target="_blank" rel="noopener noreferrer">World Template</a> as a starting point</li>
        <li>Design your world using <a href="https://www.mapeditor.org/" target="_blank" rel="noopener noreferrer">Tiled Map Editor</a></li>
        <li>Upload your tilesets and maps to Arweave</li>
        <li>Configure your world parameters in Lua</li>
      </ul>

      <h4>3. Build Your First AI Agent</h4>
      <ul>
        <li>Start with the <a href="https://github.com/elliotsayes/Reality/blob/main/process/npc/LlamaWanderer.lua" target="_blank" rel="noopener noreferrer">LlamaWanderer</a> example</li>
        <li>Integrate with <a href="#llama-herder">Llama-Herder</a> for AI responses</li>
        <li>Add interaction handlers for user communication</li>
        <li>Deploy your agent to AO</li>
      </ul>

      <h4>4. Connect Agents to Your World</h4>
      <pre><code>{`-- Example: Adding an agent to your world
RealityEntitiesStatic = {
  ['your-agent-process-id'] = {
    Position = { 10, 10 },
    Type = 'Avatar',
    Metadata = {
      DisplayName = 'Your AI Agent',
      SkinNumber = 1,
      Interaction = {
        Type = 'Default',
      },
    },
  },
}`}</code></pre>

      <h3 id="reality-protocol-advanced-features">Advanced Features</h3>
      
      <h4>Multi-Agent Systems</h4>
      <ul>
        <li><strong>Agent Communication</strong> - Agents can send messages to each other</li>
        <li><strong>Coordinated Behaviors</strong> - Create complex interactions between agents</li>
        <li><strong>Ecosystem Simulation</strong> - Build realistic AI societies</li>
      </ul>

      <h4>AI Integration</h4>
      <ul>
        <li><strong>Llama-Herder Integration</strong> - Connect to decentralized LLM inference</li>
        <li><strong>Custom AI Models</strong> - Use your own trained models</li>
        <li><strong>Context-Aware Responses</strong> - Agents remember conversation history</li>
        <li><strong>Multi-Modal AI</strong> - Support for text, image, and audio</li>
      </ul>

      <h4>World Features</h4>
      <ul>
        <li><strong>Dynamic Environments</strong> - Worlds that change over time</li>
        <li><strong>User Interactions</strong> - Players can interact with agents and objects</li>
        <li><strong>Persistence</strong> - All state is stored permanently on Arweave</li>
        <li><strong>Scalability</strong> - Support for thousands of concurrent users</li>
      </ul>

      <h3 id="reality-protocol-hackathon-ideas">Hackathon Project Ideas</h3>
      
      <h4>Practical Utility Agents</h4>
      <ul>
        <li><strong>AI Customer Service World</strong> - Virtual store with AI assistants</li>
        <li><strong>Educational Simulation</strong> - Interactive learning environments</li>
        <li><strong>Health & Wellness Coach</strong> - AI-powered fitness and wellness guidance</li>
      </ul>

      <h4>Multi-Agent Systems</h4>
      <ul>
        <li><strong>Virtual City</strong> - Multiple AI agents running different services</li>
        <li><strong>Ecosystem Simulation</strong> - Wildlife or economic simulation</li>
        <li><strong>Collaborative Workspace</strong> - AI agents working together on tasks</li>
      </ul>

      <h4>AI-Enhanced Applications</h4>
      <ul>
        <li><strong>AI Art Gallery</strong> - AI agents creating and curating art</li>
        <li><strong>Virtual Events</strong> - AI hosts and attendees for virtual conferences</li>
        <li><strong>Gaming Worlds</strong> - AI-powered NPCs and dynamic storytelling</li>
      </ul>

      <h3 id="reality-protocol-additional-resources">Additional Resources</h3>
      <ul>
        <li><a href="https://github.com/elliotsayes/Reality" target="_blank" rel="noopener noreferrer">Reality Protocol GitHub</a> - Source code and examples</li>
        <li><a href="https://www.mapeditor.org/" target="_blank" rel="noopener noreferrer">Tiled Map Editor</a> - Create world maps and tilesets</li>
        <li><a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer">AO Documentation</a> - Learn AO fundamentals</li>
        <li><Link to="/ai-tools">AI Tools & LLMs</Link> - AI integration resources</li>
        <li><Link to="/weavedrive">WeaveDrive</Link> - File system for world assets</li>
      </ul>

      <h3 id="reality-protocol-community">Community & Support</h3>
      <ul>
        <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Get help and share your projects</li>
        <li><a href="https://github.com/elliotsayes/Reality/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - Report bugs and request features</li>
        <li><a href="https://github.com/elliotsayes/Reality/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> - Community discussions</li>
      </ul>

      <h2 id="more-details">More Details</h2>
      <ul>
        <li><a href="https://permahub.ar.io/#/hackathon" target="_blank" rel="noopener noreferrer">Full Hackathon Website</a></li>
        <li><Link to="/weavers-resource-library">Hackathon Resources</Link></li>
        <li><Link to="/starter-kits">Development Tools</Link></li>
      </ul>

      <hr />
      
      <p>Good luck, builders! For questions, join the Bazar Discord or check the hackathon site for rules and FAQs.</p>
    </div>
  );
}

export default Hackathon; 