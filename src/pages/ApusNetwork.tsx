import React from 'react';

function ApusNetwork() {
  return (
    <div className="page-container">
      <h1 id="apus-network">APUS Network</h1>
      
      <p>APUS Network enables verifiable decentralized AI for the AO ecosystem by integrating deterministic GPU computing. By providing direct, on-chain access to accelerated computing, APUS unlocks the next generation of autonomous agents—making them more intelligent, capable, and powerful than ever before.</p>

      <h2 id="what-is-apus-network">What is APUS Network?</h2>
      <ul>
        <li><strong>AI Inference Service</strong>: On-chain access to large language models through simple messages</li>
        <li><strong>Deterministic GPU Computing</strong>: Verifiable and consistent AI responses</li>
        <li><strong>AO Ecosystem Integration</strong>: Seamlessly works with AO processes and autonomous agents</li>
      </ul>

      <h2 id="quick-start-guide">Quick Start Guide</h2>
      
      <p>Get started with APUS AI Inference Service in just 5 minutes:</p>

      <h3>1. Install aos</h3>
      <pre><code>{`npm i -g https://preview_ao.arweave.net`}</code></pre>

      <h3>2. Spawn Your Process & Trust APUS HyperBEAM Node</h3>
      <ol>
        <li>Open your terminal</li>
        <li>Spawn your process:
          <pre><code>{`aos my_process`}</code></pre>
        </li>
        <li>Trust APUS node operator:
          <pre><code>{`ao.authorities[2] = "lpJ5Edz_8DbNnVDL0XdbsY9vCOs45NACzfI4jvo4Ba8"`}</code></pre>
        </li>
      </ol>

      <h3>3. Install APM & APUS Lua Lib</h3>
      <ol>
        <li>Install APM:
          <pre><code>{`.load-blueprint apm`}</code></pre>
        </li>
        <li>Wait for APM Loaded (about 2 minutes)
        <img src="https://mintlify.s3.us-west-1.amazonaws.com/apusnetwork/sdk/images/image.png" alt="APM Loaded" style={{maxWidth: '100%', height: 'auto', maxHeight: '400px'}} />
          <p><em>Note: Please wait for the <code>APM client loaded</code> logs to load. If they do not appear after a long time, try entering any command in the AOS console to check if the system is stuck.</em></p>
        </li>
        <li>Install Lua Lib:
          <pre><code>{`apm.install "@apus/ai"`}</code></pre>
        </li>
        <li>Wait for Lua Lib Installed
          <p><em>Note: Download may take a while. Please wait.</em></p>
          <img src="https://mintlify.s3.us-west-1.amazonaws.com/apusnetwork/sdk/images/image1.png" alt="Lua Lib Installed" style={{maxWidth: '100%', height: 'auto', maxHeight: '400px'}} />
        </li>
      </ol>

      <h3>4. Get Your Credits</h3>
      <ul>
        <li><strong>Default Credits</strong>: You have 5 default test credits, allowing up to 5 inference calls</li>
        <li><strong>Apply for More Credits</strong> (Recommended):
          <ol>
            <li>Join APUS Discord <a href="https://discord.gg/r3aQcJRH5A" target="_blank" rel="noopener noreferrer">https://discord.gg/r3aQcJRH5A</a></li>
            <li>Go to the <code>#📥｜apus-hackathon-agent</code> channel</li>
            <li>Submit Your Application</li>
          </ol>
        </li>
      </ul>

      <h4>Sample Application Format</h4>
      <pre><code>{`Project Name: MyChatAgent
Description: A Chat AI Agent built using the APUS SDK
GitHub Repo: https://github.com/xxx/xxx
Twitter Handle: xxxx
Process ID: process_3rrphxxxxxx
Wallet Address: abc123…
Application Type: Plan A (Free Credits) / Plan B (Token Rebate)`}</code></pre>

      <h3>5. Reconnect & Run AI Inference</h3>
      <ol>
        <li>Reconnect your process to APUS HyperBEAM Node:
          <pre><code>{`aos my_process --mainnet http://72.46.85.207:8734`}</code></pre>
        </li>
        <li>Load AI Lib:
          <pre><code>{`ApusAI = require('@apus/ai')`}</code></pre>
        </li>
        <li>Set debug mode for inference result logging:
          <pre><code>{`ApusAI_Debug = true`}</code></pre>
        </li>
        <li>Check your balance:
          <pre><code>{`ApusAI.getBalance()`}</code></pre>
          <p><strong>Default balance:</strong> 5,000,000,000,000 units (equals 5 credits for 5 inference calls). Credits are non-transferable.</p>
        </li>
        <li>Run AI Inference (takes about 50 seconds):
          <pre><code>{`ApusAI.infer("What is Arweave?")`}</code></pre>
        </li>
        <li>Wait for AI Response
          <img src="https://mintlify.s3.us-west-1.amazonaws.com/apusnetwork/sdk/images/image2.png" alt="AI Response" style={{maxWidth: '100%', height: 'auto', maxHeight: '400px'}} />
        </li>
      </ol>

      <h2 id="key-features">Key Features</h2>
      
      <ul>
        <li><strong>Tee Protected</strong>: Secure and verifiable AI inference with GPU Tee attestaion</li>
        <li><strong>On-Chain AI</strong>: Direct access to large language models through AO messages</li>
        <li><strong>Deterministic Results</strong>: Consistent and verifiable AI responses</li>
        <li><strong>HyperBEAM Integration</strong>: Optimized for AO network performance and security</li>
      </ul>


      <h2 id="next-steps">Next Steps</h2>
      
      <p>Congratulations! You have successfully run your first AI inference call. Now you can view our complete project example to learn how to build real AI applications:</p>

      <div style={{textAlign: 'center', margin: '2em 0', padding: '2em', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
        <h3 style={{marginTop: '0', color: '#495057'}}>🚀 Ready to build more?</h3>
        <p style={{fontSize: '1.1em', marginBottom: '1.5em'}}>View our complete project examples to learn:</p>
        <ul style={{textAlign: 'left', display: 'inline-block', marginBottom: '1.5em'}}>
          <li>How to deploy AI chat agents on the AO network</li>
          <li>How to integrate APUS AI inference services</li>
          <li>How to build frontend interfaces to interact with AO agents</li>
          <li>Complete developer guides and best practices</li>
        </ul>
        <div style={{marginTop: '1.5em'}}>
          <a 
            href="https://docs.apus.network/sdk/showcase" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '1.1em',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            📖 View Complete Project Example →
          </a>
        </div>
      </div>

      <h2 id="resources">Resources</h2>
      
      <ul>
        <li><a href="https://docs.apus.network/sdk/introduction" target="_blank" rel="noopener noreferrer">Apus complete sdk docs</a></li>
        <li><a href="https://docs.apus.network/sdk/showcase">Apus SDK Showcase</a> - See real-world implementations</li>
        <li><a href="https://www.apus.network/">Apus network website</a> - more introduction and resources</li>
      </ul>


      <hr />
      
    </div>
  );
}

export default ApusNetwork;
