import React from 'react';
import { Link } from 'react-router-dom';

function WAuthSDK() {
  return (
    <div className="page-container">
      <h1 id="wauth-sdk">@wauth/sdk</h1>
      
      <p>The WAuth SDK provides seamless Web2 social authentication for Arweave applications. It creates arweaveWallet compatible wallet instances for users after they authenticate with popular social providers.</p>

      <div className="wauth-highlights">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Social Authentication</strong> - Login with Google, GitHub, Discord, and more</li>
          <li><strong>Arweave Wallet Compatible</strong> - Creates standard arweaveWallet instances</li>
          <li><strong>Cross-Platform</strong> - Works in browsers and Node.js environments</li>
          <li><strong>TypeScript Support</strong> - Full type safety and IntelliSense</li>
          <li><strong>Easy Integration</strong> - Simple API for quick implementation</li>
          <li><strong>Secure</strong> - Industry-standard OAuth2 authentication</li>
        </ul>
      </div>

      <h2 id="installation">Installation</h2>

      <h3>Using npm</h3>
      <pre><code>{`npm i @wauth/sdk@latest`}</code></pre>

      <h3>Using yarn</h3>
      <pre><code>{`yarn add @wauth/sdk@latest`}</code></pre>

      <h2 id="quick-start">Quick Start</h2>

      <h3>Basic Setup</h3>
      <pre><code>{`import { WAuth, WAuthProviders } from "@wauth/sdk";

// Initialize the SDK
const wauth = new WAuth({
  providers: [
    WAuthProviders.GOOGLE({
      clientId: "your-google-client-id",
      clientSecret: "your-google-client-secret"
    }),
    WAuthProviders.GITHUB({
      clientId: "your-github-client-id",
      clientSecret: "your-github-client-secret"
    })
  ]
});`}</code></pre>

      <h3>Authentication Flow</h3>
      <pre><code>{`// Start authentication
const authUrl = await wauth.authenticate("google");

// Redirect user to auth URL
window.location.href = authUrl;

// Handle callback (in your callback route)
const wallet = await wauth.callback(code, state);

// Use the wallet
console.log("User wallet address:", wallet.address);`}</code></pre>

      <h2 id="providers">Supported Providers</h2>

      <h3 id="google">Google</h3>
      <pre><code>{`WAuthProviders.GOOGLE({
  clientId: "your-google-client-id",
  clientSecret: "your-google-client-secret",
  redirectUri: "https://your-app.com/callback"
})`}</code></pre>

      <h3 id="github">GitHub</h3>
      <pre><code>{`WAuthProviders.GITHUB({
  clientId: "your-github-client-id",
  clientSecret: "your-github-client-secret",
  redirectUri: "https://your-app.com/callback"
})`}</code></pre>

      <h3 id="discord">Discord</h3>
      <pre><code>{`WAuthProviders.DISCORD({
  clientId: "your-discord-client-id",
  clientSecret: "your-discord-client-secret",
  redirectUri: "https://your-app.com/callback"
})`}</code></pre>

      <h3 id="twitter">Twitter</h3>
      <pre><code>{`WAuthProviders.TWITTER({
  clientId: "your-twitter-client-id",
  clientSecret: "your-twitter-client-secret",
  redirectUri: "https://your-app.com/callback"
})`}</code></pre>

      <h3 id="custom-provider">Custom Provider</h3>
      <pre><code>{`WAuthProviders.CUSTOM({
  name: "custom-provider",
  clientId: "your-client-id",
  clientSecret: "your-client-secret",
  redirectUri: "https://your-app.com/callback",
  authUrl: "https://provider.com/oauth/authorize",
  tokenUrl: "https://provider.com/oauth/token",
  userInfoUrl: "https://provider.com/userinfo"
})`}</code></pre>

      <h2 id="configuration">Configuration</h2>

      <h3 id="sdk-options">SDK Options</h3>
      <pre><code>{`const wauth = new WAuth({
  providers: [...],           // Array of providers
  redirectUri: "https://your-app.com/callback",  // Default redirect URI
  stateSecret: "your-state-secret",              // Secret for state validation
  walletConfig: {            // Wallet configuration
    algorithm: "RSA",        // Key generation algorithm
    keyLength: 2048,         // Key length in bits
    // ... other wallet options
  }
});`}</code></pre>

      <h3 id="environment-variables">Environment Variables</h3>
      <p>You can configure WAuth using environment variables:</p>
      <pre><code>{`WAUTH_GOOGLE_CLIENT_ID=your-google-client-id
WAUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret
WAUTH_GITHUB_CLIENT_ID=your-github-client-id
WAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
WAUTH_REDIRECT_URI=https://your-app.com/callback
WAUTH_STATE_SECRET=your-state-secret`}</code></pre>

      <h2 id="authentication-flow">Authentication Flow</h2>

      <h3 id="step-1-initiate">Step 1: Initiate Authentication</h3>
      <pre><code>{`// Generate authentication URL
const authUrl = await wauth.authenticate("google");

// Redirect user to provider
window.location.href = authUrl;`}</code></pre>

      <h3 id="step-2-callback">Step 2: Handle Callback</h3>
      <pre><code>{`// In your callback route
const { code, state } = req.query;

try {
  // Validate callback and create wallet
  const wallet = await wauth.callback(code, state);
  
  // Store wallet or session
  req.session.wallet = wallet;
  
  // Redirect to app
  res.redirect("/dashboard");
} catch (error) {
  console.error("Authentication failed:", error);
  res.redirect("/login?error=auth_failed");
}`}</code></pre>

      <h3 id="step-3-use-wallet">Step 3: Use the Wallet</h3>
      <pre><code>{`// The wallet is compatible with arweaveWallet
const wallet = req.session.wallet;

// Sign a transaction
const transaction = await arweave.createTransaction({
  data: "Hello, Arweave!"
});

await arweave.transactions.sign(transaction, wallet);

// Submit transaction
const response = await arweave.transactions.post(transaction);`}</code></pre>

      <h2 id="examples">Examples</h2>

      <h3 id="react-example">React Example</h3>
      <pre><code>{`import React, { useState } from 'react';
import { WAuth, WAuthProviders } from '@wauth/sdk';

function LoginComponent() {
  const [loading, setLoading] = useState(false);
  
  const wauth = new WAuth({
    providers: [
      WAuthProviders.GOOGLE({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET
      })
    ]
  });

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const authUrl = await wauth.authenticate("google");
      window.location.href = authUrl;
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleGoogleLogin} 
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Login with Google'}
      </button>
    </div>
  );
}`}</code></pre>

      <h3 id="express-example">Express.js Example</h3>
      <pre><code>{`import express from 'express';
import { WAuth, WAuthProviders } from '@wauth/sdk';

const app = express();
const wauth = new WAuth({
  providers: [
    WAuthProviders.GOOGLE({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
});

// Initiate login
app.get('/login', async (req, res) => {
  try {
    const authUrl = await wauth.authenticate("google");
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Handle callback
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  
  try {
    const wallet = await wauth.callback(code, state);
    
    // Store wallet in session
    req.session.wallet = wallet;
    
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Callback error:', error);
    res.redirect('/login?error=auth_failed');
  }
});

// Protected route
app.get('/dashboard', (req, res) => {
  if (!req.session.wallet) {
    return res.redirect('/login');
  }
  
  res.json({
    message: 'Welcome to dashboard',
    address: req.session.wallet.address
  });
});`}</code></pre>

      <h3 id="nextjs-example">Next.js Example</h3>
      <pre><code>{`// pages/api/auth/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { WAuth, WAuthProviders } from '@wauth/sdk';

const wauth = new WAuth({
  providers: [
    WAuthProviders.GOOGLE({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { code, state } = req.query;

  try {
    const wallet = await wauth.callback(code as string, state as string);
    
    // Store wallet in session or database
    // For this example, we'll use cookies
    res.setHeader('Set-Cookie', [
      \`wallet=\${JSON.stringify(wallet)}; Path=/; HttpOnly; Secure\`
    ]);
    
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Authentication error:', error);
    res.redirect('/login?error=auth_failed');
  }
}`}</code></pre>

      <h2 id="wallet-integration">Wallet Integration</h2>

      <h3 id="arweave-wallet-compatibility">Arweave Wallet Compatibility</h3>
      <p>The wallet created by WAuth is fully compatible with the arweaveWallet standard:</p>
      <pre><code>{`// Standard arweaveWallet interface
interface ArweaveWallet {
  address: string;
  sign(transaction: Transaction): Promise<void>;
  signMessage(message: Uint8Array): Promise<Signature>;
  verify(message: Uint8Array, signature: Signature): Promise<boolean>;
}`}</code></pre>

      <h3 id="ao-integration">AO Integration</h3>
      <pre><code>{`import { connect, createDataItemSigner } from '@permaweb/aoconnect';
import { createAoSigner } from '@ar.io/sdk';

// Create AO signer from WAuth wallet
const aoSigner = createAoSigner(wallet);

// Connect to AO
const ao = connect();

// Send message with WAuth wallet
const result = await ao.sendMessage({
  target: 'process-id',
  data: 'Hello, AO!',
  signer: aoSigner
});`}</code></pre>

      <h2 id="security">Security Considerations</h2>

      <h3 id="state-validation">State Validation</h3>
      <p>Always validate the state parameter to prevent CSRF attacks:</p>
      <pre><code>{`const wauth = new WAuth({
  providers: [...],
  stateSecret: process.env.WAUTH_STATE_SECRET  // Required for security
});`}</code></pre>

      <h3 id="secure-storage">Secure Storage</h3>
      <ul>
        <li>Store wallets securely (HTTPS-only cookies, encrypted sessions)</li>
        <li>Never expose private keys to client-side code</li>
        <li>Use secure session management</li>
        <li>Implement proper logout functionality</li>
      </ul>

      <h3 id="provider-security">Provider Security</h3>
      <ul>
        <li>Use HTTPS for all OAuth redirects</li>
        <li>Validate OAuth tokens on the server side</li>
        <li>Implement proper error handling</li>
        <li>Monitor for suspicious authentication attempts</li>
      </ul>

      <h2 id="error-handling">Error Handling</h2>

      <h3 id="common-errors">Common Errors</h3>
      <ul>
        <li><strong>Invalid Client ID/Secret</strong> - Check your OAuth app configuration</li>
        <li><strong>Invalid Redirect URI</strong> - Ensure redirect URI matches OAuth app settings</li>
        <li><strong>State Mismatch</strong> - Verify state validation is working correctly</li>
        <li><strong>Network Errors</strong> - Check internet connection and provider availability</li>
        <li><strong>User Denied Access</strong> - Handle user cancellation gracefully</li>
      </ul>

      <h3 id="error-handling-example">Error Handling Example</h3>
      <pre><code>{`try {
  const wallet = await wauth.callback(code, state);
  // Handle successful authentication
} catch (error) {
  if (error.code === 'INVALID_CLIENT') {
    console.error('Invalid OAuth credentials');
  } else if (error.code === 'STATE_MISMATCH') {
    console.error('State validation failed');
  } else if (error.code === 'USER_DENIED') {
    console.error('User denied access');
  } else {
    console.error('Authentication failed:', error);
  }
}`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>

      <h3 id="user-experience">User Experience</h3>
      <ul>
        <li>Provide clear login options with recognizable provider icons</li>
        <li>Show loading states during authentication</li>
        <li>Handle errors gracefully with user-friendly messages</li>
        <li>Implement proper logout functionality</li>
        <li>Remember user preferences when possible</li>
      </ul>

      <h3 id="development">Development</h3>
      <ul>
        <li>Use environment variables for sensitive configuration</li>
        <li>Test with multiple providers during development</li>
        <li>Implement proper logging for debugging</li>
        <li>Use TypeScript for better type safety</li>
        <li>Follow OAuth2 best practices</li>
      </ul>

      <h2 id="resources">Resources</h2>

      <div className="resources-grid">
        <div className="resource-card">
          <h3>Official Documentation</h3>
          <ul>
            <li><a href="https://github.com/subspace-dev/wauth" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://www.npmjs.com/package/@wauth/sdk" target="_blank" rel="noopener noreferrer">npm Package</a></li>
            <li><a href="https://github.com/subspace-dev/wauth/tree/main/sdk" target="_blank" rel="noopener noreferrer">SDK Documentation</a></li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Related Tools</h3>
          <ul>
            <li><Link to="/wallet-tools">Wallet Tools</Link> - Arweave wallet utilities</li>
            <li><Link to="/arweave-js">Arweave.js</Link> - Core Arweave JavaScript library</li>
            <li><Link to="/ar-io-sdk">ArIO SDK</Link> - Arweave ecosystem SDK</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Community</h3>
          <ul>
            <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a></li>
            <li><a href="https://github.com/subspace-dev/wauth/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
            <li><a href="https://github.com/subspace-dev/wauth/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></li>
          </ul>
        </div>
      </div>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <h3 id="common-issues">Common Issues</h3>

      <h4>OAuth App Configuration</h4>
      <p>Ensure your OAuth app is properly configured with the correct redirect URIs and scopes.</p>

      <h4>Environment Variables</h4>
      <p>Verify all required environment variables are set correctly.</p>

      <h4>HTTPS Requirements</h4>
      <p>Most OAuth providers require HTTPS for production use.</p>

      <h4>State Validation</h4>
      <p>Make sure state validation is working and the state secret is properly configured.</p>

      <hr />
      
      <p>For more information about WAuth and social authentication on Arweave, visit the <a href="https://github.com/subspace-dev/wauth" target="_blank" rel="noopener noreferrer">official repository</a>.</p>
    </div>
  );
}

export default WAuthSDK; 