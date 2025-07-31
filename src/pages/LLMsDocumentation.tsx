import React from 'react';
import { Link } from 'react-router-dom';

const LLMsDocumentation = () => {
  return (
    <div className="page-container">
      <h1>AI Documentation for LLMs</h1>
      
      <p>
        Welcome to the AI documentation section of Arweave Guides. These files are specifically designed 
        to help AI tools, chatbots, and developers quickly understand and navigate our documentation ecosystem.
      </p>

      <div className="info-box">
        <h3>What are these files?</h3>
        <p>
          These structured documentation files provide comprehensive coverage of the Arweave ecosystem 
          in formats optimized for AI processing and automated documentation tools.
        </p>
      </div>

      <div className="ai-docs-grid">
        <div className="ai-doc-card">
          <h3>ai-docs-overview.txt</h3>
          <p>
            <strong>Structured overview of the Arweave Guides ecosystem.</strong>
          </p>
          <ul>
            <li>Ideal for AI tools navigating documentation or answering general questions</li>
            <li>Suited for agents with web search capabilities</li>
            <li>Complete directory of all documentation pages with descriptions</li>
            <li>Organized by categories: Core SDKs, AI Agents, Asset Management, etc.</li>
          </ul>
          <div className="ai-doc-links">
            <a 
              href="/ai-docs-overview.txt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              View ai-docs-overview.txt
            </a>
          </div>
        </div>

        <div className="ai-doc-card">
          <h3>ai-docs-technical.txt</h3>
          <p>
            <strong>Complete technical documentation and implementation details.</strong>
          </p>
          <ul>
            <li>Designed for in-depth analysis, troubleshooting, or chatbot integration</li>
            <li>Provides exhaustive details for complex queries</li>
            <li>Complete API references with code examples</li>
            <li>Implementation guides and best practices</li>
          </ul>
          <div className="ai-doc-links">
            <a 
              href="/ai-docs-technical.txt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              View ai-docs-technical.txt
            </a>
          </div>
        </div>
      </div>

      <div className="info-box">
        <h3>How to Use These Files</h3>
        <div className="usage-grid">
          <div className="usage-item">
            <h4>For AI Tools & Chatbots</h4>
            <ul>
              <li>Use <code>ai-docs-overview.txt</code> for general questions about Arweave</li>
              <li>Use <code>ai-docs-technical.txt</code> for detailed technical queries</li>
              <li>Reference specific sections for targeted responses</li>
              <li>Follow code examples for implementation guidance</li>
            </ul>
          </div>
          
          <div className="usage-item">
            <h4>For Developers</h4>
            <ul>
              <li>Quick reference for API functions and parameters</li>
              <li>Copy-paste ready code examples</li>
              <li>Best practices and implementation patterns</li>
              <li>Troubleshooting guides and error handling</li>
            </ul>
          </div>
          
          <div className="usage-item">
            <h4>For Hackathon Participants</h4>
            <ul>
              <li>Ready-to-use AI agent examples</li>
              <li>Quick start guides for AO processes</li>
              <li>HyperBEAM integration patterns</li>
              <li>Complete implementation workflows</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-overview">
        <h2>Content Overview</h2>
        
        <div className="content-sections">
          <div className="content-section">
            <h3>Core SDKs & Libraries</h3>
            <ul>
              <li><strong>Arweave.js:</strong> JavaScript SDK for Arweave network interaction</li>
              <li><strong>AO Connect:</strong> Official client library for AO processes</li>
              <li><strong>HyperBEAM:</strong> Modular runtime for AO processes</li>
              <li><strong>ArIO SDK:</strong> Identity and data management tools</li>
              <li><strong>WAuth SDK:</strong> Authentication and authorization services</li>
              <li><strong>Wallet Tools:</strong> Wallet integration utilities</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>AI Agents & AO Development</h3>
            <ul>
              <li><strong>Building AI Agents:</strong> Complete guide to autonomous agents</li>
              <li><strong>Agent Examples:</strong> Cron scheduling, monitoring, ML prediction</li>
              <li><strong>HyperBEAM Integration:</strong> Advanced cache management</li>
              <li><strong>Lua Patterns:</strong> Message handling and state management</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Development Tools</h3>
            <ul>
              <li><strong>Bazar:</strong> Comprehensive platform for Arweave applications</li>
              <li><strong>WeaveDrive:</strong> File storage and management</li>
              <li><strong>Atomic Assets:</strong> Asset creation and management</li>
              <li><strong>Token Blueprint:</strong> Token creation and management</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Resources & Examples</h3>
            <ul>
              <li><strong>Code Examples:</strong> Practical implementation examples</li>
              <li><strong>Best Practices:</strong> Development guidelines and patterns</li>
              <li><strong>Troubleshooting:</strong> Common issues and solutions</li>
              <li><strong>API Reference:</strong> Complete function documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="integration-examples">
        <h2>Integration Examples</h2>
        
        <div className="example-grid">
          <div className="example-card">
            <h4>AI Agent with Cron Scheduling</h4>
            <pre><code>{`-- Spawn process with 5-minute cron interval
aos [myProcess] --cron 5-minutes

-- Handle cron messages for autonomous operation
Handlers.add(
  "CronTick",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  function ()
    local reading = ao.data.get("temperature-sensor-1")
    if reading > 30 then
      ao.send({
        Target = "alert-handler",
        Action = "alert",
        Data = { reading = reading, timestamp = os.time() }
      })
    end
  end
)`}</code></pre>
          </div>

          <div className="example-card">
            <h4>HyperBEAM Cache Management</h4>
            <pre><code>{`-- Initialize agent state in cache
Send({
  device = "patch@1.0",
  cache = {
    ["ai-agent-state"] = {
      lastCheck = os.time(),
      alertCount = 0,
      readings = {}
    }
  }
})

-- Update cache with new data
Send({
  device = "patch@1.0",
  cache = {
    ["ai-agent-state"] = {
      lastCheck = os.time(),
      alertCount = alertCount + 1
    }
  }
})`}</code></pre>
          </div>

          <div className="example-card">
            <h4>AO Connect JavaScript</h4>
            <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const ao = connect();
const signer = createDataItemSigner();

const result = await ao.send({
  process: 'process-id-here',
  signer: signer,
  data: {
    action: 'hello',
    message: 'Hello from AO Connect!'
  }
});`}</code></pre>
          </div>
        </div>
      </div>

      <div className="related-resources">
        <h2>Related Resources</h2>
        
        <div className="resources-grid">
          <div className="resource-item">
            <h4>Documentation</h4>
            <ul>
              <li><Link to="/hackathon">Hackathon Resources</Link> - AI agent examples and guides</li>
              <li><Link to="/ao-connect">AO Connect Documentation</Link> - Complete SDK reference</li>
              <li><Link to="/hyperbeam">HyperBEAM Documentation</Link> - Device specifications and usage</li>
              <li><Link to="/building-ai-agents">Building AI Agents</Link> - Comprehensive agent development guide</li>
            </ul>
          </div>

          <div className="resource-item">
            <h4>External Resources</h4>
            <ul>
              <li><a href="https://cookbook_ao.arweave.net" target="_blank" rel="noopener noreferrer">AO Cookbook</a> - Official AO documentation</li>
              <li><a href="https://docs.arweave.org" target="_blank" rel="noopener noreferrer">Arweave Documentation</a> - Core Arweave docs</li>
              <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Community Discord</a> - Get help and share projects</li>
              <li><a href="https://github.com/permaweb/ao" target="_blank" rel="noopener noreferrer">AO GitHub</a> - Source code and issues</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="info-box">
        <h3>Pro Tip</h3>
        <p>
          These AI documentation files are automatically generated and updated to ensure they always 
          reflect the latest state of our documentation. For the most up-to-date information, 
          always refer to the main documentation pages linked within these files.
        </p>
      </div>
    </div>
  );
};

export default LLMsDocumentation; 