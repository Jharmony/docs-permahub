import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

function AOConnect() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1 id="ao-connect">AO Connect</h1>
      
      <p><strong>@permaweb/aoconnect</strong> is the official AO client library for browser and Node.js environments. It provides a simple and powerful interface for connecting to AO processes, sending messages, and managing data items on the Arweave network.</p>

      <div className="content-section">
        <h2 id="installation">Installation</h2>
        
        <h3>Using npm</h3>
        <pre><code>{`npm install @permaweb/aoconnect`}</code></pre>

        <h3>Using yarn</h3>
        <pre><code>{`yarn add @permaweb/aoconnect`}</code></pre>

        <h3>With other permaweb packages</h3>
        <pre><code>{`npm install @permaweb/libs arweave @permaweb/aoconnect`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="basic-usage">Basic Usage</h2>
        
        <h3>Import and Connect</h3>
        <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

// Create a connection to AO
const ao = connect();

// Create a signer for transactions
const signer = createDataItemSigner();`}</code></pre>

        <h3>Send Messages to Processes</h3>
        <pre><code>{`// Send a message to an AO process
const result = await ao.send({
  process: 'process-id-here',
  signer: signer,
  data: {
    action: 'hello',
    message: 'Hello from AO Connect!'
  }
});

console.log('Message sent:', result);`}</code></pre>

        <h3>Get Results from Messages</h3>
        <pre><code>{`// Get the result of a message
const messageResult = await ao.result({
  message: result.message,
  process: 'process-id-here'
});

console.log('Message result:', messageResult);`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="advanced-usage">Advanced Usage</h2>
        
        <h3>Dry Run Messages</h3>
        <p>Test your messages without actually sending them to the network:</p>
        <pre><code>{`import { dryrun } from "@permaweb/aoconnect";

const dryRunResult = await dryrun({
  process: 'process-id-here',
  data: {
    action: 'test',
    input: 'test data'
  }
});

console.log('Dry run result:', dryRunResult);`}</code></pre>

        <h3>Spawning New Processes</h3>
        <pre><code>{`import { spawn, message, result } from "@permaweb/aoconnect";

// Spawn a new AO process
const processId = await spawn({
  module: 'module-id-here',
  scheduler: 'scheduler-id-here',
  signer: signer
});

console.log('New process spawned:', processId);`}</code></pre>

        <h3>Working with Data Items</h3>
        <pre><code>{`import { createDataItemSigner, message } from "@permaweb/aoconnect";

// Create a signer for data items
const signer = createDataItemSigner();

// Send a message with data item
const messageResult = await message({
  process: 'process-id-here',
  signer: signer,
  data: {
    action: 'store',
    data: 'some data to store'
  }
});`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="api-reference">API Reference</h2>
        
        <h3>Core Functions</h3>
        
        <h4>connect()</h4>
        <p>Creates a connection to the AO network.</p>
        <pre><code>{`const ao = connect();`}</code></pre>

        <h4>createDataItemSigner()</h4>
        <p>Creates a signer for data item transactions.</p>
        <pre><code>{`const signer = createDataItemSigner();`}</code></pre>

        <h4>createSigner()</h4>
        <p>Creates a general-purpose signer for AO operations.</p>
        <pre><code>{`import { createSigner } from '@permaweb/aoconnect';
const signer = createSigner();`}</code></pre>

        <h3>Message Functions</h3>
        
        <h4>ao.send()</h4>
        <p>Sends a message to an AO process.</p>
        <pre><code>{`const result = await ao.send({
  process: 'process-id',
  signer: signer,
  data: { /* message data */ }
});`}</code></pre>

        <h4>ao.result()</h4>
        <p>Gets the result of a previously sent message.</p>
        <pre><code>{`const messageResult = await ao.result({
  message: result.message,
  process: 'process-id'
});`}</code></pre>

        <h4>message()</h4>
        <p>Direct message function for sending messages.</p>
        <pre><code>{`import { message } from "@permaweb/aoconnect";

const result = await message({
  process: 'process-id',
  signer: signer,
  data: { /* message data */ }
});`}</code></pre>

        <h4>dryrun()</h4>
        <p>Simulates message execution without sending to network.</p>
        <pre><code>{`import { dryrun } from "@permaweb/aoconnect";

const result = await dryrun({
  process: 'process-id',
  data: { /* message data */ }
});`}</code></pre>

        <h3>Process Management</h3>
        
        <h4>spawn()</h4>
        <p>Creates a new AO process.</p>
        <pre><code>{`import { spawn } from "@permaweb/aoconnect";

const processId = await spawn({
  module: 'module-id',
  scheduler: 'scheduler-id',
  signer: signer
});`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="real-world-examples">Real-World Examples</h2>
        
        <h3>Creating and Managing Atomic Assets</h3>
        <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const ao = connect();
const signer = createDataItemSigner();

// Create an atomic asset
const assetResult = await ao.send({
  process: 'atomic-asset-process-id',
  signer: signer,
  data: {
    action: 'create',
    asset: {
      title: 'My Digital Asset',
      description: 'A unique digital asset on Arweave',
      tags: ['art', 'digital', 'unique']
    }
  }
});`}</code></pre>

        <h3>Working with Profiles</h3>
        <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const ao = connect();
const signer = createDataItemSigner();

// Update user profile
const profileResult = await ao.send({
  process: 'profile-process-id',
  signer: signer,
  data: {
    action: 'update',
    profile: {
      name: 'John Doe',
      bio: 'Web3 developer',
      avatar: 'avatar-url'
    }
  }
});`}</code></pre>

        <h3>Managing Collections</h3>
        <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const ao = connect();
const signer = createDataItemSigner();

// Add asset to collection
const collectionResult = await ao.send({
  process: 'collection-process-id',
  signer: signer,
  data: {
    action: 'add-asset',
    collectionId: 'collection-id',
    assetId: 'asset-id'
  }
});`}</code></pre>

        <h3>AI Agent Integration</h3>
        <pre><code>{`import { connect } from '@permaweb/aoconnect';

const ao = connect();

// Send message to AI agent
const aiResult = await ao.send({
  process: 'ai-agent-process-id',
  data: {
    prompt: 'Hello, how are you?',
    model: 'llama-2-7b'
  }
});

// Get AI response
const response = await ao.result({
  message: aiResult.message,
  process: 'ai-agent-process-id'
});`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="error-handling">Error Handling</h2>
        
        <pre><code>{`import { connect, createDataItemSigner } from "@permaweb/aoconnect";

const ao = connect();
const signer = createDataItemSigner();

try {
  const result = await ao.send({
    process: 'process-id',
    signer: signer,
    data: { action: 'test' }
  });
  
  console.log('Success:', result);
} catch (error) {
  console.error('Error sending message:', error);
  
  // Handle specific error types
  if (error.message.includes('Process not found')) {
    console.error('Process does not exist');
  } else if (error.message.includes('Invalid signer')) {
    console.error('Signer is invalid');
  }
}`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="best-practices">Best Practices</h2>
        
        <h3>Connection Management</h3>
        <ul>
          <li><strong>Reuse connections:</strong> Create one connection and reuse it throughout your application</li>
          <li><strong>Handle errors:</strong> Always wrap AO operations in try-catch blocks</li>
          <li><strong>Validate inputs:</strong> Validate data before sending to AO processes</li>
        </ul>

        <h3>Signer Management</h3>
        <ul>
          <li><strong>Secure storage:</strong> Store private keys securely and never expose them</li>
          <li><strong>Key rotation:</strong> Regularly rotate your signing keys</li>
          <li><strong>Environment variables:</strong> Use environment variables for sensitive data</li>
        </ul>

        <h3>Message Patterns</h3>
        <ul>
          <li><strong>Consistent structure:</strong> Use consistent message structures across your application</li>
          <li><strong>Action-based:</strong> Include an 'action' field in your messages for clarity</li>
          <li><strong>Validation:</strong> Validate message results before processing</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 id="integration-examples">Integration Examples</h2>
        
        <h3>With React</h3>
        <pre><code>{`import React, { useState, useEffect } from 'react';
import { connect, createDataItemSigner } from "@permaweb/aoconnect";

function AOComponent() {
  const [result, setResult] = useState(null);
  const ao = connect();
  const signer = createDataItemSigner();

  const sendMessage = async () => {
    try {
      const response = await ao.send({
        process: 'process-id',
        signer: signer,
        data: { action: 'hello' }
      });
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}`}</code></pre>

        <h3>With Node.js</h3>
        <pre><code>{`const { connect, createDataItemSigner } = require("@permaweb/aoconnect");

async function main() {
  const ao = connect();
  const signer = createDataItemSigner();

  try {
    const result = await ao.send({
      process: 'process-id',
      signer: signer,
      data: { action: 'hello' }
    });
    
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="related-resources">Related Resources</h2>
        
        <ul>
          <li><Link to="/arweave-js">Arweave.js</Link> - Core Arweave JavaScript SDK</li>
          <li><Link to="/ar-io-sdk">ArIO SDK</Link> - Gateway and ArNS management</li>
          <li><Link to="/wauth-sdk">WAuth SDK</Link> - Social authentication</li>
          <li><Link to="/building-ai-agents">Building AI Agents</Link> - AI agent development with AO</li>
          <li><Link to="/ai-tools">AI Tools & LLMs</Link> - AI integration resources</li>
          <li><a href="https://cookbook_ao.arweave.net/guides/aoconnect/connecting.html" target="_blank" rel="noopener noreferrer">AO Connect Official Guide</a> - Official documentation</li>
          <li><a href="https://github.com/permaweb/ao/tree/main/connect" target="_blank" rel="noopener noreferrer">AO Connect GitHub</a> - Source code and issues</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 id="troubleshooting">Troubleshooting</h2>
        
        <h3>Common Issues</h3>
        
        <h4>Process Not Found</h4>
        <p><strong>Error:</strong> "Process not found"</p>
        <p><strong>Solution:</strong> Verify the process ID is correct and the process exists on the network.</p>

        <h4>Invalid Signer</h4>
        <p><strong>Error:</strong> "Invalid signer"</p>
        <p><strong>Solution:</strong> Ensure you're using the correct signer type and it's properly initialized.</p>

        <h4>Network Connection Issues</h4>
        <p><strong>Error:</strong> "Network error" or timeout</p>
        <p><strong>Solution:</strong> Check your internet connection and try using a different gateway if available.</p>

        <h3>Debug Tips</h3>
        <ul>
          <li>Use <code>dryrun()</code> to test messages without sending them</li>
          <li>Check the AO network status before sending messages</li>
          <li>Validate your message structure before sending</li>
          <li>Use console.log to debug message data and results</li>
        </ul>
      </div>
    </div>
  );
}

export default AOConnect; 