import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

const BuildingAIAgents: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <main className="main-content">
          <div className="page-header">
            <h1>Building AI Agents</h1>
            <p className="page-description">
              A comprehensive guide to building AI agents on Arweave and AO, from simple chatbots to complex autonomous systems.
            </p>
          </div>

          <div className="content-section">
            <h2 id="overview">Overview</h2>
            <p>
              This guide walks you through building AI agents using the Reality Protocol examples, 
              progressing from simple interaction patterns to sophisticated LLM worker orchestration. 
              Perfect for hackers who want to understand and build AI systems on decentralized infrastructure.
            </p>
          </div>

          <div className="content-section">
            <h2 id="simple-agents">Level 1: Simple AI Agents</h2>
            <p>
              Start with basic interaction patterns that demonstrate core AI agent concepts.
            </p>

            <h3 id="fantasy-llama">Fantasy Llama Example</h3>
            <p>
              The FantasyLlama.lua demonstrates a simple AI agent with basic interaction capabilities:
            </p>

            <div className="code-block">
              <h4>Key Components:</h4>
              <ul>
                <li><strong>State Management:</strong> Tracks user interactions and game state</li>
                <li><strong>Response Generation:</strong> Simple pattern matching and text generation</li>
                <li><strong>Memory System:</strong> Basic conversation history</li>
                <li><strong>Action System:</strong> Handles user commands and game actions</li>
              </ul>
            </div>

            <h4>Core Architecture:</h4>
            <pre><code>{`-- Simple AI Agent Structure
function handleMessage(message)
  -- Parse user input
  local intent = parseIntent(message)
  
  -- Generate response based on intent
  local response = generateResponse(intent)
  
  -- Update state
  updateState(intent, response)
  
  -- Return response
  return response
end`}</code></pre>

            <h4>Building Blocks for Hackers:</h4>
            <ul>
              <li><strong>Intent Recognition:</strong> Understand what users want</li>
              <li><strong>Context Management:</strong> Remember conversation history</li>
              <li><strong>Response Templates:</strong> Generate appropriate replies</li>
              <li><strong>State Persistence:</strong> Save and restore agent state</li>
            </ul>
          </div>

          <div className="content-section">
            <h2 id="advanced-agents">Level 2: Advanced AI Systems</h2>
            <p>
              Progress to sophisticated AI systems with LLM worker orchestration and complex decision-making.
            </p>

            <h3 id="llama-king">Llama King Architecture</h3>
            <p>
              The LlamaKing.lua demonstrates advanced AI agent capabilities with multiple LLM workers:
            </p>

            <div className="code-block">
              <h4>Advanced Components:</h4>
              <ul>
                <li><strong>LLM Worker Pool:</strong> Multiple specialized AI workers</li>
                <li><strong>Task Orchestration:</strong> Intelligent task distribution</li>
                <li><strong>State Grading:</strong> AI-powered state evaluation</li>
                <li><strong>Memory Management:</strong> Sophisticated conversation memory</li>
                <li><strong>Response Synthesis:</strong> Multi-worker response coordination</li>
              </ul>
            </div>

            <h4>LLM Worker System:</h4>
            <pre><code>{`-- Advanced LLM Worker Configuration
LLM_WORKERS = {
  LLMGraderJsonState = {
    model = "llama-3.1-8b-instruct",
    temperature = 0.1,
    max_tokens = 1000,
    system_prompt = "You are a state evaluator..."
  },
  LLMResponseGenerator = {
    model = "llama-3.1-8b-instruct", 
    temperature = 0.7,
    max_tokens = 2000,
    system_prompt = "You are a creative response generator..."
  }
}`}</code></pre>

            <h4>Advanced Features for Hackers:</h4>
            <ul>
              <li><strong>Worker Specialization:</strong> Different AI models for different tasks</li>
              <li><strong>Task Routing:</strong> Intelligent distribution of work</li>
              <li><strong>State Evaluation:</strong> AI-powered quality assessment</li>
              <li><strong>Response Synthesis:</strong> Combining multiple AI outputs</li>
              <li><strong>Memory Optimization:</strong> Efficient conversation storage</li>
            </ul>
          </div>

          <div className="content-section">
            <h2 id="implementation-guide">Implementation Guide</h2>
            
            <h3 id="step-1-basic">Step 1: Basic Agent Setup</h3>
            <ol>
              <li><strong>Define State Structure:</strong> Plan what data your agent needs to track</li>
              <li><strong>Create Message Handlers:</strong> Build functions to process user input</li>
              <li><strong>Implement Response Logic:</strong> Generate appropriate responses</li>
              <li><strong>Add Memory System:</strong> Store conversation history</li>
            </ol>

            <h3 id="step-2-enhancement">Step 2: Enhancement</h3>
            <ol>
              <li><strong>Add Intent Recognition:</strong> Use pattern matching or simple NLP</li>
              <li><strong>Implement Context Awareness:</strong> Consider conversation history</li>
              <li><strong>Add Action System:</strong> Handle commands and state changes</li>
              <li><strong>Optimize Performance:</strong> Efficient data structures and algorithms</li>
            </ol>

            <h3 id="step-3-advanced">Step 3: Advanced Features</h3>
            <ol>
              <li><strong>Integrate LLM Workers:</strong> Add AI model integration</li>
              <li><strong>Implement Task Orchestration:</strong> Distribute work intelligently</li>
              <li><strong>Add State Grading:</strong> AI-powered quality assessment</li>
              <li><strong>Optimize Memory Management:</strong> Efficient storage and retrieval</li>
            </ol>
          </div>

          <div className="content-section">
            <h2 id="best-practices">Best Practices for Hackers</h2>
            
            <h3 id="architecture">Architecture Design</h3>
            <ul>
              <li><strong>Modular Design:</strong> Separate concerns into distinct components</li>
              <li><strong>State Management:</strong> Use immutable state patterns</li>
              <li><strong>Error Handling:</strong> Graceful degradation and recovery</li>
              <li><strong>Performance Monitoring:</strong> Track response times and resource usage</li>
            </ul>

            <h3 id="ai-integration">AI Integration</h3>
            <ul>
              <li><strong>Model Selection:</strong> Choose appropriate models for your use case</li>
              <li><strong>Prompt Engineering:</strong> Design effective system prompts</li>
              <li><strong>Temperature Tuning:</strong> Balance creativity vs consistency</li>
              <li><strong>Token Management:</strong> Optimize for cost and performance</li>
            </ul>

            <h3 id="decentralization">Decentralization Considerations</h3>
            <ul>
              <li><strong>State Persistence:</strong> Store data on Arweave for permanence</li>
              <li><strong>AO Integration:</strong> Use AO for real-time processing</li>
              <li><strong>Worker Distribution:</strong> Distribute AI workers across nodes</li>
              <li><strong>Fault Tolerance:</strong> Handle network and node failures</li>
            </ul>
          </div>

          <div className="content-section">
            <h2 id="examples">Practical Examples</h2>
            
            <h3 id="ao-agenda-keeper">AO Agenda Keeper</h3>
            <p>A complete example of an autonomous AO agent that collects daily agenda entries and uploads them to Arweave every 24 hours.</p>
            
            <div className="info-box">
              <h4>🗓️ AO Agenda Keeper</h4>
              <p>An autonomous AO agent that collects daily agenda entries and uploads them to Arweave every 24 hours. Built on Arweave's AO hyper-parallel computer.</p>
            </div>
            
            <h4>🛠 Components</h4>
            
            <h5>1. `agenda-agent.lua`</h5>
            <ul>
              <li>Accepts entries tagged with <code>Action: AddAgenda</code></li>
              <li>Stores entries in in-memory SQLite by date</li>
              <li>Flushes current day's entries every 24h</li>
              <li>Sends entries to <code>arweave-uploader</code></li>
            </ul>
            
            <h5>2. `arweave-uploader.lua`</h5>
            <ul>
              <li>Listens for <code>Action: UploadAgenda</code></li>
              <li>Wraps agenda data in Arweave metadata tags</li>
              <li>Sends upload request to <code>ao.arweave-upload</code></li>
            </ul>
            
            <h5>3. `scripts/deploy.js`</h5>
            <ul>
              <li>Deploys both agents</li>
              <li>Uses environment config and signer wallet</li>
            </ul>
            
            <h4>🚀 Deployment</h4>
            
            <h5>Prerequisites</h5>
            <ul>
              <li>Node.js + Deno</li>
              <li>Wallet JSON file (Arweave keyfile)</li>
              <li><code>.env</code> with configuration</li>
            </ul>
            
            <h5>Environment Setup</h5>
            <p>Choose the appropriate AO endpoint for your use case:</p>
            
            <h6>Production (Recommended)</h6>
            <pre><code>{`.env
WALLET_PATH=./wallet.json
AO_SCHEDULER=https://ao.arweave.net`}</code></pre>
            
            <h6>Development/Testing</h6>
            <pre><code>{`.env
WALLET_PATH=./wallet.json
AO_SCHEDULER=https://ao.g8way.io`}</code></pre>
            
            <h6>HyperBEAM (New Architecture)</h6>
            <pre><code>{`.env
WALLET_PATH=./wallet.json
AO_SCHEDULER=https://hyperbeam.arweave.net`}</code></pre>
            
            <div className="info-box">
              <h6>Endpoint Differences</h6>
              <ul>
                <li><strong>ao.arweave.net</strong> - Main production network, most stable</li>
                <li><strong>ao.g8way.io</strong> - Alternative gateway, good for development</li>
                <li><strong>hyperbeam.arweave.net</strong> - New HyperBEAM architecture (deprecates dryrun)</li>
              </ul>
            </div>
            
            <h5>Install Dependencies</h5>
            <pre><code>{`npm install @permaweb/aoconnect dotenv`}</code></pre>
            
            <h5>Run Deployment</h5>
            <pre><code>{`node scripts/deploy.js`}</code></pre>
            
            <p>Copy the <code>arweave-uploader</code> ID into <code>agenda-agent.lua</code> under <code>Target = "arweave-uploader"</code>.</p>
            
            <h4>✏️ Usage</h4>
            
            <h5>Add Agenda Entry (HTTP)</h5>
            <p>Replace <code>[agenda-agent-id]</code> with your deployed agent's ID and use the appropriate endpoint:</p>
            
            <h6>Production</h6>
            <pre><code>{`curl -X POST https://ao.arweave.net/[agenda-agent-id] \\
  -H "Content-Type: application/json" \\
  -d '{
    "Action": "AddAgenda",
    "Date": "2025-07-19",
    "Data": "Finish AO project"
  }'`}</code></pre>
            
            <h6>Development</h6>
            <pre><code>{`curl -X POST https://ao.g8way.io/[agenda-agent-id] \\
  -H "Content-Type: application/json" \\
  -d '{
    "Action": "AddAgenda",
    "Date": "2025-07-19",
    "Data": "Finish AO project"
  }'`}</code></pre>
            
            <h5>Trigger Init (if not using cron)</h5>
            <pre><code>{`curl -X POST https://ao.arweave.net/[agenda-agent-id] \\
  -d '{"Action": "Init"}'`}</code></pre>
            
            <h4>📄 Schema Support</h4>
            <p>UI tools like Bazar will render a form from the <code>SchemaExternal</code> response automatically.</p>
            
            <h4>🔄 HyperBEAM Migration</h4>
            <p>If you're using the new HyperBEAM architecture, note that:</p>
            <ul>
              <li><strong>Dryrun is deprecated</strong> - Use State Patching instead for reading process state</li>
              <li><strong>New endpoints</strong> - Use <code>https://hyperbeam.arweave.net</code> for HyperBEAM processes</li>
              <li><strong>Better performance</strong> - Direct state access without simulation overhead</li>
              <li><strong>Web API support</strong> - Processes can expose HTTP endpoints directly</li>
            </ul>
            
            <div className="info-box">
              <h6>State Patching Example</h6>
              <p>Instead of dryrun, use the <code>~patch@1.0</code> device to expose state:</p>
              <pre><code>{`-- In your agent code
Handlers.add("SchemaExternal", function(msg)
  return {
    schema = {
      type = "object",
      properties = {
        Action = { type = "string", enum = ["AddAgenda"] },
        Date = { type = "string", format = "date" },
        Data = { type = "string" }
      }
    }
  }
end)`}</code></pre>
            </div>
            
            <h3 id="chatbot">Simple Chatbot</h3>
            <p>Build a basic chatbot that can handle conversations and remember context.</p>

            <h3 id="game-agent">Game Agent</h3>
            <p>Create an AI agent that can play games, make decisions, and interact with players.</p>

            <h3 id="assistant">Personal Assistant</h3>
            <p>Develop an AI assistant that can help with tasks, answer questions, and manage information.</p>

            <h3 id="autonomous-system">Autonomous System</h3>
            <p>Build a fully autonomous AI system that can operate independently and make complex decisions.</p>
          </div>

          <div className="content-section">
            <h2 id="video-tutorials">Video Tutorials</h2>
            
            <h3 id="full-workshop">Full AI Agent Workshop</h3>
            <p>Complete workshop covering AI agent development from start to finish:</p>
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/s9dpb1ogz_Y?si=J3hjtkraqvVj8JgK" 
                title="Full AI Agent Workshop"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>

            <h3 id="view-tutorial">AI Agent View Tutorial</h3>
            <p>Quick tutorial on viewing and understanding AI agent interactions:</p>
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Aqu1r4XsEjg?si=ySCeCtFOhCfrdDqJ" 
                title="AI Agent View Tutorial"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="content-section">
            <h2 id="resources">Additional Resources</h2>
            <ul>
              <li><Link to="/ai-tools">AI Tools & LLMs Guide</Link> - Comprehensive AI development resources</li>
              <li><Link to="/hackathon">AO Hackathon 2025</Link> - Build autonomous AI agents</li>
              <li><Link to="/weavers-resource-library">Weavers Resource Library</Link> - Complete developer toolkit</li>
              <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Community Discord</a> - Get help and share projects</li>
            </ul>
          </div>
        </main>
        <RightSidebar showToc={true} />
      </div>
    </div>
  );
};

export default BuildingAIAgents; 