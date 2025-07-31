import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

function Hyperbeam() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1 id="hyperbeam">HyperBEAM</h1>
      
      <p><strong>HyperBEAM</strong> is a client implementation of the AO-Core protocol, written in Erlang. It serves as the 'node' software for the decentralized operating system that AO enables, abstracting hardware provisioning and details from the execution of individual programs.</p>

      <div className="content-section">
        <h2 id="what-is-hyperbeam">What is HyperBEAM?</h2>
        
        <p>HyperBEAM is a reference implementation of AO-Core, offering a series of universal primitives for decentralized computations. Instead of enforcing a single, monolithic architecture, AO-Core provides a framework into which any number of different computational models, encapsulated as primitive <code>devices</code>, can be attached.</p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Decentralized computations</strong> - Enable trustless execution across the network</li>
          <li><strong>Modular devices</strong> - 25+ preloaded devices for different use cases</li>
          <li><strong>WebAssembly support</strong> - Execute WASM code using WAMR</li>
          <li><strong>Payment framework</strong> - Monetize your node's computational services</li>
          <li><strong>Trusted Execution Environments</strong> - TEE support for enhanced security</li>
          <li><strong>Legacy compatibility</strong> - Support for older AO systems</li>
        </ul>

        <h3>AO-Core Protocol Fundamentals</h3>
        <p>AO-Core is built upon these fundamental primitives:</p>
        <ol>
          <li><strong>Hashpaths</strong> - Mechanism for referencing locations in a program's state-space prior to execution</li>
          <li><strong>HTTP documents</strong> - Unified data structure for representing program states</li>
          <li><strong>Commitments</strong> - Protocol for expressing commitments of states at particular hashpaths</li>
          <li><strong>Meta-VM</strong> - Allows different virtual machines and computational models to be executed</li>
        </ol>
      </div>

      <div className="content-section">
        <h2 id="installation">Installation & Setup</h2>
        
        <h3>Prerequisites</h3>
        <ul>
          <li><strong>Erlang runtime</strong> (OTP 27)</li>
          <li><strong>Rebar3</strong> - Erlang build tool</li>
          <li><strong>Git</strong></li>
          <li><strong>Docker</strong> (optional, for containerized deployment)</li>
          <li><strong>Wallet and keyfile</strong> - Generate with <a href="https://www.wander.app" target="_blank" rel="noopener noreferrer">Wander</a></li>
        </ul>

        <h3>Building from Source</h3>
        <pre><code>{`# Clone the repository
git clone https://github.com/permaweb/HyperBEAM.git
cd HyperBEAM

# Compile the project
rebar3 compile`}</code></pre>

        <h3>Docker Deployment</h3>
        <pre><code>{`# Build container image
docker build -t hyperbeam .

# Run container
docker run -p 10000:10000 hyperbeam`}</code></pre>

        <h3>Optional Build Profiles</h3>
        <p>HyperBEAM supports several optional build profiles for additional features:</p>
        <ul>
          <li><strong>genesis_wasm</strong> - Enables Genesis WebAssembly support</li>
          <li><strong>rocksdb</strong> - Enables RocksDB storage backend</li>
          <li><strong>http3</strong> - Enables HTTP/3 support via QUIC protocol</li>
        </ul>

        <pre><code>{`# Single profile
rebar3 as rocksdb shell

# Multiple profiles
rebar3 as rocksdb,genesis_wasm shell

# Create release with profiles
rebar3 as rocksdb,genesis_wasm release`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="running-hyperbeam">Running HyperBEAM</h2>
        
        <h3>Basic Startup</h3>
        <pre><code>{`# Start with default configuration
rebar3 shell`}</code></pre>

        <h3>Custom Configuration</h3>
        <pre><code>{`# Start with custom port and wallet
rebar3 shell --eval "hb:start_mainnet(#{ port => 9001, key_location => 'path/to/my/wallet.key' })."`}</code></pre>

        <h3>Configuration File</h3>
        <p>Create a <code>config.flat</code> file in the project directory:</p>
        <pre><code>{`port: 10000
priv_key_location: /path/to/wallet.json`}</code></pre>

        <h3>Verify Installation</h3>
        <pre><code>{`# Check if node is running
curl http://localhost:10000/~meta@1.0/info`}</code></pre>

        <h3>Production Deployment</h3>
        <pre><code>{`# Create standalone release
rebar3 release

# Release is created in _build/default/rel/hb`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="devices">Devices Overview</h2>
        
        <p>HyperBEAM includes 25+ preloaded devices, each providing specific functionality. Devices are modular components that can be attached to the AO-Core protocol framework.</p>

        <h3>Core Devices</h3>
        
        <h4>~meta@1.0</h4>
        <p>The core configuration device used to configure the node's hardware, supported devices, metering, and payments information. Required for all nodes.</p>

        <h4>~relay@1.0</h4>
        <p>Handles message relaying between nodes and the wider HTTP network. Offers interfaces for sending and receiving messages using various execution strategies.</p>

        <h4>dev_message</h4>
        <p>The identity device that handles message processing. Every message that doesn't specify a device uses this as the implied device.</p>

        <h3>Computation Devices</h3>
        
        <h4>~wasm64@1.0</h4>
        <p>Executes WebAssembly code using the Web Assembly Micro-Runtime (WAMR). WASM modules can be called from any other device and support languages like Rust, C, and C++.</p>

        <h4>~process@1.0</h4>
        <p>Enables users to create persistent, shared executions accessible by multiple users. Allows customization of execution and scheduler devices.</p>

        <h4>dev_stack</h4>
        <p>Manages execution of a stack of devices in either fold or map mode, allowing complex combinations of devices to be applied as a single unit.</p>

        <h4>dev_scheduler</h4>
        <p>Implements a simple scheduling scheme for handling process execution, assigning linear hashpaths to executions.</p>

        <h3>Payment & Metering Devices</h3>
        
        <h4>p4@1.0</h4>
        <p>Core payment framework that works with pricing and ledger devices, enabling node operators to sell usage of their machine's hardware.</p>

        <h4>~simple-pay@1.0</h4>
        <p>Implements simple, flexible pricing for flat-fee execution of AO-Core messages.</p>

        <h4>~faff@1.0</h4>
        <p>Simple pricing and ledger device that allows nodes to restrict access to specific users, useful for personal nodes or specific applications.</p>

        <h3>Security Devices</h3>
        
        <h4>~snp@1.0</h4>
        <p>Generates and validates proofs that a node is executing inside a Trusted Execution Environment (TEE), enabling trust-minimized computations.</p>

        <h4>dev_codec_httpsig</h4>
        <p>Implements HTTP Message Signatures as described in RFC-9421 for secure message authentication.</p>

        <h3>Legacy Compatibility Devices</h3>
        
        <h4>~json-iface@1.0</h4>
        <p>Translation layer between JSON-encoded message format used by AOS 2.0 and prior versions to HyperBEAM's native HTTP message format.</p>

        <h4>~compute-lite@1.0</h4>
        <p>Lightweight device wrapping a local WASM executor, used for executing legacynet AO processes inside HyperBEAM.</p>

        <h4>dev_genesis_wasm</h4>
        <p>Provides an environment suitable for legacynet AO processes, enabling backward compatibility.</p>

        <h4>patch@1.0</h4>
        <p>Enables patching and updating cache state in legacynet AO processes through HyperBEAM. Allows you to add patches to any legacynet token blueprint and manage state updates.</p>
      </div>

      <div className="content-section">
        <h2 id="device-selection">Choosing Devices for Your Use Case</h2>
        
        <h3>Basic Node Operation</h3>
        <p>For a functional HyperBEAM node, include these core devices:</p>
        <ul>
          <li><strong>~meta@1.0</strong> - Core configuration (required)</li>
          <li><strong>~relay@1.0</strong> - Message relaying</li>
          <li><strong>dev_message</strong> - Message processing</li>
        </ul>

        <h3>Computation Services</h3>
        <p>To offer computation services to the network:</p>
        <ul>
          <li><strong>~wasm64@1.0</strong> - WebAssembly execution</li>
          <li><strong>dev_stack</strong> - Device stacking</li>
          <li><strong>dev_scheduler</strong> - Process scheduling</li>
          <li><strong>~process@1.0</strong> - Persistent executions</li>
        </ul>

        <h3>Monetization</h3>
        <p>To monetize your node's services:</p>
        <ul>
          <li><strong>p4@1.0</strong> - Payment framework</li>
          <li><strong>~simple-pay@1.0</strong> - Flat-fee pricing</li>
          <li><strong>~faff@1.0</strong> - User-restricted access</li>
        </ul>

        <h3>Enhanced Security</h3>
        <p>For security-focused deployments:</p>
        <ul>
          <li><strong>~snp@1.0</strong> - Trusted Execution Environment</li>
          <li><strong>dev_codec_httpsig</strong> - HTTP message signatures</li>
        </ul>

        <h3>Legacy Support</h3>
        <p>For backward compatibility:</p>
        <ul>
          <li><strong>~json-iface@1.0</strong> - JSON translation layer</li>
          <li><strong>~compute-lite@1.0</strong> - Legacy AO processes</li>
          <li><strong>dev_genesis_wasm</strong> - Genesis WASM support</li>
          <li><strong>patch@1.0</strong> - Cache patching for legacynet processes</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 id="messages">Understanding Messages</h2>
        
        <p>HyperBEAM describes every piece of data as a <code>message</code>, which can be interpreted as a binary term or as a collection of named functions (a Map of functions).</p>

        <h3>Message Structure</h3>
        <ul>
          <li><strong>Device specification</strong> - Messages may specify a device for processing</li>
          <li><strong>Function application</strong> - Executing named functions with arguments results in new messages</li>
          <li><strong>Combinator system</strong> - Similar to traditional combinator programming models</li>
          <li><strong>Lazy evaluation</strong> - Keys may be lazily evaluated by interested computors</li>
        </ul>

        <h3>Message Examples</h3>
        <pre><code>{`# Basic message without device (uses message@1.0)
{
  "data": "Hello, HyperBEAM!"
}

# Message with specific device
{
  "device": "~wasm64@1.0",
  "function": "process",
  "args": {
    "input": "data to process"
  }
}

# Relay message
{
  "device": "~relay@1.0",
  "function": "call",
  "args": {
    "method": "GET",
    "path": "https://www.arweave.net/"
  }
}`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="configuration">Advanced Configuration</h2>
        
        <h3>Runtime Configuration Changes</h3>
        <p>Modify a running node's configuration by sending HTTP Signed Messages:</p>
        <pre><code>{`POST /~meta@1.0/info
Your-Config-Tag: Your-Config-Value`}</code></pre>

        <h3>Device Stacking</h3>
        <p>Create complex computational models by stacking devices:</p>
        <pre><code>{`# Stack multiple devices for complex processing
{
  "device": "dev_stack",
  "function": "fold",
  "args": {
    "devices": ["~wasm64@1.0", "~relay@1.0", "dev_scheduler"],
    "input": "data to process"
  }
}`}</code></pre>

        <h3>Payment Configuration</h3>
        <p>Set up payment devices for monetization:</p>
        <pre><code>{`# Simple payment configuration
{
  "device": "~simple-pay@1.0",
  "function": "configure",
  "args": {
    "price_per_execution": 0.001,
    "currency": "AR"
  }
}`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="use-cases">Use Cases & Examples</h2>
        
        <h3>WebAssembly Execution</h3>
        <pre><code>{`# Execute WASM module
{
  "device": "~wasm64@1.0",
  "function": "execute",
  "args": {
    "module": "wasm-module-id",
    "function": "process_data",
    "input": "data to process"
  }
}`}</code></pre>

        <h3>Message Relaying</h3>
        <pre><code>{`# Relay HTTP request
curl -X POST http://localhost:10000/~relay@1.0/call \\
  -d '{"method": "GET", "path": "https://api.example.com/data"}'`}</code></pre>

        <h3>Process Management</h3>
        <pre><code>{`# Create persistent process
{
  "device": "~process@1.0",
  "function": "create",
  "args": {
    "execution": "~wasm64@1.0",
    "scheduler": "dev_scheduler"
  }
}`}</code></pre>

        <h3>Trusted Execution Environment</h3>
        <pre><code>{`# Generate TEE proof
{
  "device": "~snp@1.0",
  "function": "generate_proof",
  "args": {
    "execution": "computation_to_prove"
  }
}`}</code></pre>

        <h3>Legacy AO Process Integration with patch@1.0</h3>
        <p>HyperBEAM allows you to connect to legacy AO processes and use the <code>patch@1.0</code> device to update cache state in legacynet token blueprints.</p>

        <h4>Connecting to Legacy Processes</h4>
        <p>To connect to a legacy process through HyperBEAM, use the HyperBEAM node domain URL:</p>
        <pre><code>{`# Connect to legacy process through HyperBEAM
# Use HyperBEAM node domain URL instead of legacy endpoints
# Example: arweave.nyc, localhost:8734, etc.`}</code></pre>

        <h4>Sending Messages with patch@1.0</h4>
        <p>Send messages to legacy processes using the patch device:</p>
        <pre><code>{`# Send message with patch device
Send({
  device = "patch@1.0",
  cache = {
    hello = "world"
  }
})`}</code></pre>

        <h4>Fetching Process State</h4>
        <p>Use HTTP tools to fetch the state of your process:</p>
        <pre><code>{`# Local node
curl http://localhost:8734/<process_id>~process@1.0/now/cache/serialize~json@1.0

# Node operators
curl http://arweave.nyc/<process_id>~process@1.0/now/cache/serialize~json@1.0`}</code></pre>

        <h4>Patch Transfer Function Example</h4>
        <p>Create a patch transfer function in your Lua token blueprint:</p>
        <pre><code>{`-- Patch Transfer Function with cache management
function patchTransfer(msg)
  -- Perform the transfer logic
  local fromBalance = Balances[msg.From] or 0
  local quantity = tonumber(msg.Quantity)

  -- Validate transfer
  if fromBalance < quantity then
    return { error = "Insufficient balance" }
  end

  -- Update balances
  Balances[msg.From] = fromBalance - quantity
  Balances[msg.Recipient] = (Balances[msg.Recipient] or 0) + quantity

  -- Send patch to HyperBEAM cache
  Send({
    device = "patch@1.0",
    cache = {
      Balances = {
        [msg.Recipient] = Balances[msg.Recipient],
        [msg.From] = Balances[msg.From]
      }
    }
  })

  return { success = true, transferred = quantity }
end`}</code></pre>

        <h4>Complete Integration Workflow</h4>
        <ol>
          <li><strong>Create a HyperBEAM device</strong> - Use <code>patch@1.0</code> for cache management</li>
          <li><strong>Connect to legacy process</strong> - Use HyperBEAM node domain URL</li>
          <li><strong>Send patch messages</strong> - Update cache state with <code>Send(&#123; device = "patch@1.0", cache = &#123;...&#125; &#125;)</code></li>
          <li><strong>Fetch state</strong> - Use curl or HTTP tools to get process state</li>
          <li><strong>Add patch functions</strong> - Implement transfer and cache management in your Lua blueprint</li>
        </ol>
      </div>

      <div className="content-section">
        <h2 id="integration">Integration with AO</h2>
        
        <h3>HyperBEAM vs Legacy AO</h3>
        <p>HyperBEAM represents the new architecture for AO, offering several advantages:</p>
        <ul>
          <li><strong>Better performance</strong> - Optimized for high-throughput computations</li>
          <li><strong>Enhanced security</strong> - TEE support and improved message signing</li>
          <li><strong>Modular design</strong> - Device-based architecture for flexibility</li>
          <li><strong>Payment integration</strong> - Built-in monetization capabilities</li>
        </ul>

        <h3>Migration from Legacy AO</h3>
        <p>If you're using the new HyperBEAM architecture:</p>
        <ul>
          <li><strong>New endpoints</strong> - Use <code>https://hyperbeam.arweave.net</code> for HyperBEAM processes</li>
          <li><strong>Device-based approach</strong> - Specify devices in your messages</li>
          <li><strong>Enhanced capabilities</strong> - Access to new computational models</li>
        </ul>

        <h3>AO Connect Integration</h3>
        <pre><code>{`import { connect } from '@permaweb/aoconnect';

const ao = connect();

// Connect to HyperBEAM node
const result = await ao.send({
  process: 'hyperbeam-process-id',
  data: {
    device: '~wasm64@1.0',
    function: 'execute',
    args: { /* execution args */ }
  }
});`}</code></pre>
      </div>

      <div className="content-section">
        <h2 id="troubleshooting">Troubleshooting</h2>
        
        <h3>Common Issues</h3>
        
        <h4>Node Won't Start</h4>
        <p><strong>Problem:</strong> HyperBEAM fails to start</p>
        <p><strong>Solution:</strong> Check Erlang version (OTP 27 required), verify wallet key file path, ensure port is available</p>

        <h4>Device Not Found</h4>
        <p><strong>Problem:</strong> "Device not available" error</p>
        <p><strong>Solution:</strong> Ensure the device is included in your node's preloaded devices configuration</p>

        <h4>WASM Execution Fails</h4>
        <p><strong>Problem:</strong> WebAssembly modules fail to execute</p>
        <p><strong>Solution:</strong> Verify WASM module format, check module permissions, ensure WAMR is properly configured</p>

        <h3>Debug Tips</h3>
        <ul>
          <li>Check node logs for detailed error messages</li>
          <li>Use <code>curl</code> to test device endpoints directly</li>
          <li>Verify configuration with <code>~meta@1.0/info</code> endpoint</li>
          <li>Test with simple messages before complex device stacks</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 id="resources">Additional Resources</h2>
        
        <ul>
          <li><a href="https://github.com/permaweb/HyperBEAM" target="_blank" rel="noopener noreferrer">HyperBEAM GitHub Repository</a> - Source code and issues</li>
          <li><a href="https://github.com/permaweb/hb-os" target="_blank" rel="noopener noreferrer">HyperBEAM OS</a> - Operating system for HyperBEAM nodes</li>
          <li><Link to="/building-ai-agents">Building AI Agents</Link> - AI agent development with HyperBEAM</li>
          <li><Link to="/ao-connect">AO Connect</Link> - Client library for AO/HyperBEAM</li>
          <li><a href="https://ao.arweave.net" target="_blank" rel="noopener noreferrer">AO Documentation</a> - Official AO documentation</li>
          <li><a href="https://fwd.arweave.net" target="_blank" rel="noopener noreferrer">Forward Research</a> - HyperBEAM development team</li>
        </ul>

        <h3>Community & Support</h3>
        <ul>
          <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a> - Community discussions</li>
          <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Developer support</li>
          <li><a href="https://github.com/permaweb/HyperBEAM/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> - Bug reports and feature requests</li>
        </ul>
      </div>
    </div>
  );
}

export default Hyperbeam; 