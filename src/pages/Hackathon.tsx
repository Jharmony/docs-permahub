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

      <h3 id="ai-agent-examples">AI Agent Examples</h3>
      <p>Ready to build autonomous AI agents? Here are practical examples to get you started:</p>

      <h4 id="agent-scheduling-with-cron">Agent Scheduling with Cron</h4>
      <p>AO provides cron-like scheduling for autonomous operation through command-line setup and message handlers:</p>
      
      <div className="code-block">
        <h5>Setting up a cron process:</h5>
        <pre><code>{`# Spawn process with 5-minute cron interval
aos [myProcess] --cron 5-minutes

# Activate cron monitoring
.monitor`}</code></pre>
      </div>

      <div className="code-block">
        <h5>Handling cron messages:</h5>
        <pre><code>{`-- Handle cron messages for autonomous operation
Handlers.add(
  "CronTick", -- Handler name
  Handlers.utils.hasMatchingTag("Action", "Cron"), -- Pattern to identify cron message
  function () -- Handler task to execute on cron message
    -- Check data every cron interval
    local reading = ao.data.get("temperature-sensor-1")
    if reading > 30 then
      ao.send({
        Target = "alert-handler",
        Action = "alert",
        Data = {
          reading = reading,
          timestamp = os.time()
        }
      })
    end
  end
)`}</code></pre>
      </div>

      <h4 id="simple-monitoring-agent">Simple Monitoring Agent</h4>
      <pre><code>{`local Agent = {}

Agent.config = {
  dataSource = "temperature-sensor-1",
  threshold = 30,
  alertRecipient = "alert-handler"
}

function Agent.checkReading()
  local reading = ao.data.get(Agent.config.dataSource)
  
  if reading > Agent.config.threshold then
    ao.send({
      Target = Agent.config.alertRecipient,
      Action = "alert",
      Data = {
        source = Agent.config.dataSource,
        reading = reading,
        threshold = Agent.config.threshold,
        timestamp = os.time()
      }
    })
  end
end

-- Set up cron handler for autonomous monitoring
Handlers.add(
  "MonitoringCron",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  Agent.checkReading
)

-- Note: Process must be spawned with --cron flag and .monitor called
-- Example: aos [myMonitoringAgent] --cron 5-minutes`}</code></pre>

      <h4 id="prediction-agent-with-machine-learning">Prediction Agent with Machine Learning</h4>
      <pre><code>{`local PredictionAgent = {}
local aolearn = require('aolearn')

PredictionAgent.config = {
  modelType = "knn", -- Using k-Nearest Neighbors algorithm
  dataSource = "sensor-readings",
  k = 5, -- Number of neighbors to consider
  features = {"temperature", "humidity", "pressure"}
}

-- Initialize and train the model
function PredictionAgent.initialize()
  -- Load training data from permanent storage
  local trainingData = ao.data.get(PredictionAgent.config.dataSource)
  
  -- Create and train KNN model
  PredictionAgent.model = aolearn.knn.new({
    k = PredictionAgent.config.k,
    features = #PredictionAgent.config.features
  })
  
  -- Train the model with historical data
  PredictionAgent.model:train(trainingData.x, trainingData.y)
  ao.log("Prediction model initialized and trained")
end

-- Make predictions based on new data
function PredictionAgent.predict(newData)
  -- Validate input
  if not newData or #newData ~= #PredictionAgent.config.features then
    return { error = "Invalid input data format" }
  end
  
  -- Make prediction using the trained model
  local prediction = PredictionAgent.model:predict(newData)
  
  -- Store the prediction and input for future model improvements
  ao.data.append(PredictionAgent.config.dataSource .. "-predictions", {
    input = newData,
    prediction = prediction,
    timestamp = os.time()
  })
  
  return {
    prediction = prediction,
    confidence = PredictionAgent.model:confidence(),
    timestamp = os.time()
  }
end

-- Handle incoming prediction requests
Handlers.add(
  "PredictionRequest",
  Handlers.utils.hasMatchingTag("Action", "predict"),
  function(msg)
    if msg.Data and msg.Data.features then
      local result = PredictionAgent.predict(msg.Data.features)
      ao.send({
        Target = msg.From,
        Action = "prediction-result",
        Data = result
      })
    else
      ao.send({
        Target = msg.From,
        Action = "error",
        Data = { error = "Missing feature data" }
      })
    end
  end
)

-- Set up periodic model retraining via cron
Handlers.add(
  "ModelRetraining",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  function()
    PredictionAgent.initialize() -- Retrain with latest data
    ao.log("Model retrained at " .. os.time())
  end
)

-- Initialize the model when the agent starts
PredictionAgent.initialize()

-- Note: For daily retraining, spawn with: aos [myPredictionAgent] --cron 1-day`}</code></pre>

      <h4 id="ai-agent-development-tips">AI Agent Development Tips</h4>
      <ul>
        <li><strong>Start Simple:</strong> Begin with basic monitoring agents before building complex ML models</li>
        <li><strong>Use Cron Scheduling:</strong> Set up autonomous operation with the <code>--cron</code> flag</li>
        <li><strong>Persistent Storage:</strong> Use <code>ao.data</code> to store agent state and training data</li>
        <li><strong>Message Handlers:</strong> Create handlers for different types of interactions</li>
        <li><strong>Error Handling:</strong> Always validate inputs and handle edge cases</li>
        <li><strong>Testing:</strong> Use AOSWeb to test your agents before deployment</li>
      </ul>

      <h4 id="hyperbeam-ai-agent-example">HyperBEAM AI Agent with Cache Management</h4>
      <p>Here's how to create an AI agent that works with HyperBEAM, using cache management for persistent state:</p>

      <div className="code-block">
        <h5>HyperBEAM AI Agent with Cron and Cache</h5>
        <pre><code>{`-- HyperBEAM AI Agent with cache management
local AIAgent = {}

AIAgent.config = {
  dataSource = "sensor-data",
  threshold = 30,
  cacheKey = "ai-agent-state"
}

-- Initialize agent state in cache
function AIAgent.initialize()
  -- Set up initial cache state
  Send({
    device = "patch@1.0",
    cache = {
      [AIAgent.config.cacheKey] = {
        lastCheck = os.time(),
        alertCount = 0,
        readings = {}
      }
    }
  })
  ao.log("HyperBEAM AI Agent initialized with cache")
end

-- Check sensor data and update cache
function AIAgent.checkReading()
  local reading = ao.data.get(AIAgent.config.dataSource)
  
  if reading > AIAgent.config.threshold then
    -- Update cache with new alert
    Send({
      device = "patch@1.0",
      cache = {
        [AIAgent.config.cacheKey] = {
          lastCheck = os.time(),
          alertCount = (ao.data.get(AIAgent.config.cacheKey .. ".alertCount") or 0) + 1,
          readings = ao.data.get(AIAgent.config.cacheKey .. ".readings") or {},
          lastAlert = {
            reading = reading,
            timestamp = os.time(),
            threshold = AIAgent.config.threshold
          }
        }
      }
    })
    
    -- Send alert message
    ao.send({
      Target = "alert-handler",
      Action = "hyperbeam-alert",
      Data = {
        source = AIAgent.config.dataSource,
        reading = reading,
        threshold = AIAgent.config.threshold,
        timestamp = os.time(),
        cacheKey = AIAgent.config.cacheKey
      }
    })
    
    ao.log("HyperBEAM AI Agent: Alert sent, cache updated")
  end
end

-- Set up cron handler for autonomous monitoring
Handlers.add(
  "HyperBEAMMonitoringCron",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  AIAgent.checkReading
)

-- Handle cache state requests
Handlers.add(
  "CacheStateRequest",
  Handlers.utils.hasMatchingTag("Action", "get-cache"),
  function(msg)
    local cacheState = ao.data.get(AIAgent.config.cacheKey)
    ao.send({
      Target = msg.From,
      Action = "cache-state",
      Data = cacheState
    })
  end
)

-- Initialize the agent
AIAgent.initialize()

-- Note: Deploy with HyperBEAM node and use:
-- aos [myHyperBEAMAIAgent] --cron 5-minutes`}</code></pre>
      </div>

      <div className="code-block">
        <h5>Testing the HyperBEAM AI Agent</h5>
        <pre><code>{`# Check agent state via HTTP
curl http://localhost:8734/<process_id>~process@1.0/now/cache/serialize~json@1.0

# Or for node operators
curl http://arweave.nyc/<process_id>~process@1.0/now/cache/serialize~json@1.0

# Send test message to get cache state
Send({
  Target = "your-ai-agent-process-id",
  Action = "get-cache"
})`}</code></pre>
      </div>

      <h4 id="next-steps-for-ai-agents">Next Steps for AI Agents</h4>
      <ul>
        <li><Link to="/building-ai-agents">Complete AI Agent Development Guide</Link> - Learn advanced techniques</li>
        <li><Link to="/ai-tools">AI Tools & LLMs</Link> - Integrate with Llama-Herder and other AI services</li>
        <li><a href="#reality-protocol-resources">Reality Protocol</a> - Build AI agents in virtual worlds</li>
        <li><a href="https://cookbook_ao.arweave.net/tutorials/begin/messaging.html" target="_blank" rel="noopener noreferrer">AO Messaging Tutorial</a> - Master agent communication</li>
        <li><Link to="/hyperbeam">HyperBEAM Documentation</Link> - Learn more about HyperBEAM devices and cache management</li>
      </ul>

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

      <h2 id="quick-links">Quick Links & Resources</h2>
      
      <div className="quick-links-grid">
        <div className="quick-link-section">
          <h3>Essential SDKs & Tools</h3>
          <ul>
            <li><Link to="/ar-io-sdk">ArIO SDK</Link> - Gateway and ArNS management</li>
            <li><Link to="/arx">ARX</Link> - Upload SDK for permanent data</li>
            <li><Link to="/wauth-sdk">WAuth SDK</Link> - Social authentication</li>
            <li><Link to="/arweave-js">Arweave.js</Link> - Core Arweave library</li>
            <li><Link to="/permaweb-libs">Permaweb Libs</Link> - Permaweb development</li>
          </ul>
        </div>

        <div className="quick-link-section">
          <h3>Development Resources</h3>
          <ul>
            <li><Link to="/getting-started">Getting Started</Link> - Complete onboarding guide</li>
            <li><Link to="/installation">Installation</Link> - Setup instructions</li>
            <li><Link to="/examples">Examples</Link> - Real-world implementations</li>
            <li><Link to="/api-reference">API Reference</Link> - Complete API documentation</li>
            <li><Link to="/best-practices">Best Practices</Link> - Development guidelines</li>
          </ul>
        </div>

        <div className="quick-link-section">
          <h3>AI & AO Resources</h3>
          <ul>
            <li><Link to="/building-ai-agents">Building AI Agents</Link> - AO agent development</li>
            <li><Link to="/ai-tools">AI Tools</Link> - LLM integration resources</li>
            <li><Link to="/aos-sqlite-workshop">AO SQLite Workshop</Link> - Database integration</li>
            <li><Link to="/weavedrive">WeaveDrive</Link> - File system for AO</li>
          </ul>
        </div>

        <div className="quick-link-section">
          <h3>Asset & Content Management</h3>
          <ul>
            <li><Link to="/atomic-assets">Atomic Assets</Link> - Digital asset creation</li>
            <li><Link to="/collections">Collections</Link> - Asset organization</li>
            <li><Link to="/profiles">Profiles</Link> - User identity management</li>
            <li><Link to="/zones">Zones</Link> - Content organization</li>
            <li><Link to="/comments">Comments</Link> - Social interactions</li>
          </ul>
        </div>

        <div className="quick-link-section">
          <h3>Marketplace & Tools</h3>
          <ul>
            <li><Link to="/bazar">Bazar</Link> - Marketplace platform</li>
            <li><Link to="/beacon-mini-bazar">Beacon Mini Bazar</Link> - Lightweight marketplace</li>
            <li><Link to="/weavers-resource-library">Weavers Resource Library</Link> - Complete toolkit</li>
            <li><Link to="/starter-kits">Starter Kits</Link> - Quick start templates</li>
          </ul>
        </div>

        <div className="quick-link-section">
          <h3>Advanced Topics</h3>
          <ul>
            <li><Link to="/arx">ARX</Link> - Advanced upload capabilities</li>
            <li><Link to="/token-blueprint">Token Blueprint</Link> - Token creation guide</li>
            <li><Link to="/ans-110">ANS-110</Link> - Asset metadata standard</li>
            <li><Link to="/wallet-tools">Wallet Tools</Link> - Wallet utilities</li>
            <li><Link to="/load-network">Load Network</Link> - Network configuration</li>
          </ul>
        </div>
      </div>

      <h3 id="external-resources">External Resources</h3>
      <ul>
        <li><a href="https://permahub.ar.io/#/hackathon" target="_blank" rel="noopener noreferrer">Full Hackathon Website</a></li>
        <li><a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer">AO Documentation</a></li>
        <li><a href="https://docs.arweave.org/" target="_blank" rel="noopener noreferrer">Arweave Documentation</a></li>
        <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a></li>
        <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a></li>
      </ul>

      <h3 id="troubleshooting-resources">Troubleshooting</h3>
      <ul>
        <li><Link to="/troubleshooting">Troubleshooting Guide</Link> - Common issues and solutions</li>
        <li><Link to="/best-practices">Best Practices</Link> - Development guidelines</li>
        <li><a href="https://github.com/permaweb/arx/issues" target="_blank" rel="noopener noreferrer">ARX Issues</a></li>
        <li><a href="https://github.com/ar-io/ar-io-sdk/issues" target="_blank" rel="noopener noreferrer">ArIO SDK Issues</a></li>
      </ul>

      <hr />
      
      <p>Good luck, builders! For questions, join the Bazar Discord or check the hackathon site for rules and FAQs.</p>
    </div>
  );
}

export default Hackathon; 