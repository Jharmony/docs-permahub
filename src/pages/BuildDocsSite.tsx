import React from 'react';

const BuildDocsSite: React.FC = () => {
  return (
    <div className="page-container">
      <h1 id="build-react-apps-for-arweave">Build React Apps for Arweave Deployment</h1>
      
      <p>Learn how to build modern React applications that work perfectly on Arweave's permaweb. This guide is specifically designed for hackathon participants who want to create permanent, decentralized applications.</p>

      <div className="hackathon-highlights">
        <h2>Why This Matters for Hackathons</h2>
        <ul>
          <li><strong>Permanent Deployment:</strong> Your hackathon project lives forever on Arweave</li>
          <li><strong>No Server Costs:</strong> Once deployed, your app runs without ongoing expenses</li>
          <li><strong>Decentralized:</strong> True ownership of your application and data</li>
          <li><strong>Hash Routing:</strong> Works perfectly with Arweave's static hosting</li>
          <li><strong>Modern Stack:</strong> Use React, TypeScript, and modern tooling</li>
        </ul>
      </div>

      <h2 id="quick-start-guide">Quick Start Guide</h2>
      
      <h3 id="prerequisites">Prerequisites</h3>
      <ul>
        <li><strong>Node.js v20+</strong> - <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Download here</a></li>
        <li><strong>Git</strong> - <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Download here</a></li>
        <li><strong>Arweave Wallet</strong> - For deployment (we'll help you create one)</li>
        <li><strong>Basic React Knowledge</strong> - Familiarity with React hooks and components</li>
      </ul>

      <h3 id="step-1-create-react-app">Step 1: Create Your React App</h3>
      
      <pre><code>{`# Create a new Vite React TypeScript project
npm create vite@latest my-arweave-app -- --template react-ts

# Navigate to the project
cd my-arweave-app

# Install dependencies
npm install

# Install React Router for navigation
npm install react-router-dom`}</code></pre>

      <h3 id="step-2-configure-for-arweave">Step 2: Configure for Arweave</h3>
      
      <p>Update your <code>vite.config.ts</code> for Arweave compatibility:</p>
      
      <pre><code>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "", // CRITICAL: Empty base for Arweave deployment
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined // Ensures single bundle for Arweave
      }
    }
  }
})`}</code></pre>

      <h3 id="step-3-setup-hash-routing">Step 3: Setup Hash Routing</h3>
      
      <p>Create your main App component with HashRouter:</p>
      
      <pre><code>{`import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <nav className="navbar">
          <a href="#/home">Home</a>
          <a href="#/about">About</a>
          <a href="#/projects">Projects</a>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;`}</code></pre>

      <h3 id="step-4-add-arweave-integration">Step 4: Add Arweave Integration</h3>
      
      <p>Install Arweave SDK for data storage:</p>
      
      <pre><code>{`# Install Arweave SDK
npm install arweave

# Install permaweb libraries (optional but recommended)
npm install @permaweb/libs`}</code></pre>

      <p>Create an Arweave service:</p>
      
      <pre><code>{`// src/services/arweave.ts
import Arweave from 'arweave';

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

export const uploadToArweave = async (data: any) => {
  try {
    const transaction = await arweave.createTransaction({
      data: JSON.stringify(data)
    });
    
    // Add tags for better organization
    transaction.addTag('Content-Type', 'application/json');
    transaction.addTag('App-Name', 'My-Hackathon-App');
    
    // Sign and post transaction
    await arweave.transactions.sign(transaction);
    const response = await arweave.transactions.post(transaction);
    
    return transaction.id;
  } catch (error) {
    console.error('Error uploading to Arweave:', error);
    throw error;
  }
};

export const getFromArweave = async (transactionId: string) => {
  try {
    const data = await arweave.transactions.getData(transactionId, {
      decode: true
    });
    return JSON.parse(data as string);
  } catch (error) {
    console.error('Error fetching from Arweave:', error);
    throw error;
  }
};`}</code></pre>

      <h2 id="hackathon-project-ideas">Hackathon Project Ideas</h2>
      
      <h3 id="ai-powered-apps">AI-Powered Applications</h3>
      <ul>
        <li><strong>AI Chatbot Portfolio</strong> - Personal AI assistant that lives on Arweave</li>
        <li><strong>Decentralized AI Art Gallery</strong> - Generate and store AI art permanently</li>
        <li><strong>AI Learning Platform</strong> - Educational content with AI tutors</li>
        <li><strong>Multi-Agent Collaboration Tool</strong> - Multiple AI agents working together</li>
      </ul>

      <h3 id="social-applications">Social Applications</h3>
      <ul>
        <li><strong>Decentralized Social Network</strong> - Posts stored permanently on Arweave</li>
        <li><strong>Community Voting Platform</strong> - Transparent voting with permanent records</li>
        <li><strong>Event Management System</strong> - Organize and track events permanently</li>
        <li><strong>Collaborative Story Platform</strong> - Community-written stories on Arweave</li>
      </ul>

      <h3 id="utility-apps">Utility Applications</h3>
      <ul>
        <li><strong>Document Storage & Sharing</strong> - Secure, permanent document storage</li>
        <li><strong>Task Management System</strong> - Personal productivity app</li>
        <li><strong>Knowledge Base</strong> - Personal or community knowledge repository</li>
        <li><strong>Portfolio Tracker</strong> - Track investments with permanent records</li>
      </ul>

      <h2 id="advanced-features">Advanced Features</h2>
      
      <h3 id="ao-integration">AO Integration</h3>
      <p>Connect your React app to AO processes for real-time functionality:</p>
      
      <pre><code>{`// src/services/ao.ts
import { connect } from '@arweave/ao';

const ao = connect();

export const sendMessage = async (processId: string, message: any) => {
  try {
    const result = await ao.message({
      process: processId,
      data: message
    });
    return result;
  } catch (error) {
    console.error('Error sending AO message:', error);
    throw error;
  }
};

export const createProcess = async (source: string) => {
  try {
    const processId = await ao.spawn({
      module: source
    });
    return processId;
  } catch (error) {
    console.error('Error creating AO process:', error);
    throw error;
  }
};`}</code></pre>

      <h3 id="file-upload">File Upload to Arweave</h3>
      <p>Handle file uploads in your React app:</p>
      
      <pre><code>{`// src/components/FileUpload.tsx
import React, { useState } from 'react';
import { uploadToArweave } from '../services/arweave';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [transactionId, setTransactionId] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        const txId = await uploadToArweave({
          file: data,
          name: file.name,
          type: file.type,
          size: file.size
        });
        setTransactionId(txId);
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload to Arweave'}
      </button>
      {transactionId && (
        <div>
          <p>File uploaded! Transaction ID: {transactionId}</p>
          <a href={\`https://arweave.net/\${transactionId}\`} target="_blank" rel="noopener noreferrer">
            View on Arweave
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;`}</code></pre>

      <h3 id="real-time-updates">Real-time Updates</h3>
      <p>Use AO for real-time features:</p>
      
      <pre><code>{`// src/hooks/useAORealtime.ts
import { useState, useEffect } from 'react';
import { connect } from '@arweave/ao';

const ao = connect();

export const useAORealtime = (processId: string) => {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const connectToProcess = async () => {
      try {
        // Connect to AO process for real-time updates
        const result = await ao.result({
          process: processId,
          from: 'latest'
        });
        
        setMessages(result.Messages || []);
        setConnected(true);
      } catch (error) {
        console.error('Failed to connect to AO process:', error);
      }
    };

    if (processId) {
      connectToProcess();
    }
  }, [processId]);

  const sendMessage = async (message: any) => {
    try {
      await ao.message({
        process: processId,
        data: message
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return { messages, connected, sendMessage };
};`}</code></pre>

      <h2 id="deployment-guide">Deployment Guide</h2>
      
      <h3 id="step-1-build-app">Step 1: Build Your App</h3>
      
      <pre><code>{`# Build your React app
npm run build

# This creates a 'dist' folder with your static files`}</code></pre>

      <h3 id="step-2-setup-wallet">Step 2: Setup Arweave Wallet</h3>
      
      <pre><code>{`# Install permaweb-deploy
npm install -g permaweb-deploy

# Generate a new wallet (or use existing)
node -e "require('arweave').init({}).wallets.generate().then(JSON.stringify).then(console.log.bind(console))" > wallet.json`}</code></pre>

      <h3 id="step-3-deploy">Step 3: Deploy to Arweave</h3>
      
      <pre><code>{`# Deploy using permaweb-deploy
DEPLOY_KEY=$(base64 -i wallet.json) permaweb-deploy --ant-process YOUR_ANT_PROCESS_ID

# Or add to package.json scripts
{
  "scripts": {
    "deploy": "DEPLOY_KEY=$(base64 -i wallet.json) permaweb-deploy --ant-process YOUR_ANT_PROCESS_ID"
  }
}`}</code></pre>

      <h3 id="step-4-custom-domain">Step 4: Custom Domain (Optional)</h3>
      
      <pre><code>{`# Deploy with custom ArNS name
permaweb-deploy --ant-process YOUR_ANT_PROCESS_ID --arns-name your-app-name

# Deploy to subdomain
permaweb-deploy --ant-process YOUR_ANT_PROCESS_ID --arns-name your-app-name --undername hackathon`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>
      
      <h3 id="performance">Performance</h3>
      <ul>
        <li><strong>Optimize Bundle Size:</strong> Use code splitting and lazy loading</li>
        <li><strong>Compress Images:</strong> Use WebP format and optimize sizes</li>
        <li><strong>Minimize Dependencies:</strong> Only include what you need</li>
        <li><strong>Use CDN:</strong> Load external libraries from CDNs when possible</li>
      </ul>

      <h3 id="user-experience">User Experience</h3>
      <ul>
        <li><strong>Loading States:</strong> Show progress for Arweave operations</li>
        <li><strong>Error Handling:</strong> Graceful error messages for network issues</li>
        <li><strong>Offline Support:</strong> Consider offline-first design</li>
        <li><strong>Responsive Design:</strong> Work on all device sizes</li>
      </ul>

      <h3 id="security">Security</h3>
      <ul>
        <li><strong>Validate Inputs:</strong> Sanitize user inputs before storing</li>
        <li><strong>Secure Keys:</strong> Never expose private keys in client code</li>
        <li><strong>Content Verification:</strong> Verify data integrity when loading</li>
        <li><strong>Rate Limiting:</strong> Implement client-side rate limiting</li>
      </ul>

      <h2 id="troubleshooting">Troubleshooting</h2>
      
      <h3 id="common-issues">Common Issues</h3>
      
      <h4>Build Errors</h4>
      <ul>
        <li><strong>Base Path Issues:</strong> Ensure <code>base: ""</code> in vite.config.ts</li>
        <li><strong>Hash Routing:</strong> Use HashRouter, not BrowserRouter</li>
        <li><strong>Asset Paths:</strong> Use relative paths for assets</li>
      </ul>

      <h4>Deployment Issues</h4>
      <ul>
        <li><strong>Wallet Funding:</strong> Ensure wallet has AR tokens</li>
        <li><strong>ANT Process:</strong> Verify ANT process ID is correct</li>
        <li><strong>Network Issues:</strong> Check Arweave network status</li>
      </ul>

      <h4>Runtime Issues</h4>
      <ul>
        <li><strong>CORS Errors:</strong> Use Arweave gateway URLs</li>
        <li><strong>AO Connection:</strong> Check AO network connectivity</li>
        <li><strong>Transaction Failures:</strong> Verify transaction format</li>
      </ul>

      <h2 id="resources">Additional Resources</h2>
      
      <h3 id="documentation">Documentation</h3>
      <ul>
        <li><a href="https://docs.arweave.org/" target="_blank" rel="noopener noreferrer">Arweave Documentation</a></li>
        <li><a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer">AO Documentation</a></li>
        <li><a href="https://cookbook.arweave.dev/" target="_blank" rel="noopener noreferrer">Arweave Cookbook</a></li>
        <li><a href="/weavers-resource-library">Weavers Resource Library</a></li>
      </ul>

      <h3 id="tools">Development Tools</h3>
      <ul>
        <li><a href="https://create-ao-dapp.arweave.net/" target="_blank" rel="noopener noreferrer">Create AO Dapp</a> - Fullstack tool</li>
        <li><a href="https://aosweb.arweave.net" target="_blank" rel="noopener noreferrer">AOSWeb</a> - Web-based AO development</li>
        <li><a href="https://ao.link" target="_blank" rel="noopener noreferrer">AO.Link</a> - AO transaction explorer</li>
        <li><a href="http://viewblock.io/arweave/" target="_blank" rel="noopener noreferrer">ViewBlock</a> - Arweave block explorer</li>
      </ul>

      <h3 id="community">Community</h3>
      <ul>
        <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a> - Get help and share projects</li>
        <li><a href="https://github.com/ar-io" target="_blank" rel="noopener noreferrer">ARIO GitHub</a> - Source code and examples</li>
        <li><a href="https://forum.arweave.org/" target="_blank" rel="noopener noreferrer">Arweave Forum</a> - Community discussions</li>
      </ul>

      <h2 id="next-steps">Next Steps</h2>
      
      <p>Now that you understand how to build React apps for Arweave:</p>
      
      <ol>
        <li><strong>Start Building:</strong> Create your hackathon project using this guide</li>
        <li><strong>Integrate AI:</strong> Add AO processes and AI agents to your app</li>
        <li><strong>Test Thoroughly:</strong> Ensure everything works before submission</li>
        <li><strong>Deploy Early:</strong> Get your app on Arweave and test the live version</li>
        <li><strong>Document Well:</strong> Create clear documentation for your project</li>
        <li><strong>Share Your Work:</strong> Post your project in the community</li>
      </ol>

      <div className="hackathon-highlights">
        <h3>Ready to Build?</h3>
        <p>You now have everything you need to create amazing, permanent applications for the AO Hackathon 2025. Your app will live forever on Arweave and showcase the power of decentralized, permanent web applications!</p>
        
        <div style={{textAlign: 'center', margin: '2em 0'}}>
          <a href="/hackathon" className="cta-button">
            🏆 Join the AO Hackathon 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuildDocsSite; 