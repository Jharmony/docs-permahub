import React from 'react';

function ANS110() {
  return (
    <div className="page-container">
      <h1 id="ans-110-asset-discoverability">ANS-110: Asset Discoverability</h1>
      
      <p>ANS-110 is a data protocol that allows assets to be discovered and uniformly displayed on the permaweb. This standard enables discoverability for dashboards, exchanges, and higher-level permaweb services by providing an extensible data protocol for transactions.</p>

      <div className="info-box">
        <p><strong>Status:</strong> Draft</p>
        <p><strong>Authors:</strong> Tom Wilson (tom@hyper.io), Sam Williams (sam@arweave.org), Abhav Kedia (abhav@arweave.org)</p>
      </div>

      <h2 id="motivation">Motivation</h2>
      
      <p>The permaweb is a rich collection of various kinds of data -- media, content, functions, and applications. A standard protocol for identifying assets enables discoverability for dashboards, exchanges, and higher-level permaweb services. By providing an extensible data protocol for transactions, creators and publishers can harness the power of permaweb-wide content discoverability -- making it easily appear in various applications and contexts across the permaweb.</p>

      <p>This protocol would enable, for example, a marketplace or exchange where users trade media assets to render them in a user-friendly way. By extending asset transactions using these identifiers, creators provide a clear and composable set of identifiers that marketplaces or exchanges can use to give a detailed description of the asset. Another example would be a search engine service that may want to index specific types of assets.</p>

      <h2 id="specification">Specification</h2>
      
      <h3 id="transaction-format">Transaction Format</h3>
      
      <p>To utilize Asset Discoverability, a creator or publisher can dispatch or post an Arweave transaction specifying the following tags.</p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tag Name</th>
              <th>Optional?</th>
              <th>Tag Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Title</strong></td>
              <td>False</td>
              <td>A maximum of 150 characters used to identify the content, this title can provide a quick eye catching description of the asset</td>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <td>False</td>
              <td>Type of asset. One or more of: <code>meme</code>, <code>image</code>, <code>video</code>, <code>podcast</code>, <code>blog-post</code>, <code>social-post</code>, <code>music</code>, <code>token</code>, <code>web-page</code>, <code>profile</code></td>
            </tr>
            <tr>
              <td><strong>Topic</strong></td>
              <td>True</td>
              <td>Zero to many topics that can be used to locate assets of a given type by a specific topic. For example: an asset of type meme might have the following two topics, <code>Funny</code>, <code>Sports</code>.</td>
            </tr>
            <tr>
              <td><strong>Description</strong></td>
              <td>True</td>
              <td>A longer description of 300 characters that can provide a set of details further describing the asset</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="usage">Usage</h2>
      
      <p>The primary purpose of these tags is to allow content developers to leverage GraphQL to find asset transactions of a specific type or topic for use in their applications.</p>

      <h3 id="graphql-query-example">GraphQL Query Example</h3>
      
      <pre><code>{`query {
  transactions(
      first: 100, 
        tags: [
          { name: "Type", values: ["meme", "blog-post"] }, 
          { name: "Topic:Funny", values: ["Funny"] },
          { name: "Topic:Jokes", values: ["Jokes"] }
        ]) {
      edges {
          node {
              id
                owner {
                  address
                }
                tags {
                  name
                    value
                }
        }}
    }
}`}</code></pre>

      <p>This GraphQL query filters based on <code>Type</code> and <code>Topic</code> tags to filter Assets for an aggregate list display.</p>

      <h2 id="asset-types">Asset Types</h2>
      
      <p>The ANS-110 standard supports the following asset types:</p>

      <div className="grid-container">
        <div className="grid-item">
          <h4>Content Types</h4>
          <ul>
            <li><code>meme</code> - Memes and humorous images</li>
            <li><code>image</code> - General images and artwork</li>
            <li><code>video</code> - Video content</li>
            <li><code>podcast</code> - Audio podcast content</li>
            <li><code>music</code> - Musical compositions and audio</li>
          </ul>
        </div>
        <div className="grid-item">
          <h4>Document Types</h4>
          <ul>
            <li><code>blog-post</code> - Blog articles and written content</li>
            <li><code>social-post</code> - Social media style posts</li>
            <li><code>web-page</code> - Complete web pages and applications</li>
          </ul>
        </div>
        <div className="grid-item">
          <h4>Identity Types</h4>
          <ul>
            <li><code>profile</code> - User profiles and identity information</li>
            <li><code>token</code> - Token and cryptocurrency assets</li>
          </ul>
        </div>
      </div>

      <h2 id="implementation-examples">Implementation Examples</h2>
      
      <h3 id="uploading-an-asset">Uploading an Asset</h3>
      
      <p>Here's an example of how to upload an asset with ANS-110 tags using JavaScript:</p>

      <pre><code>{`import Arweave from 'arweave';

const arweave = Arweave.init({});

// Create a transaction with ANS-110 tags
const transaction = await arweave.createTransaction({
  data: assetData, // Your asset data
  tags: [
    { name: 'Title', value: 'My Amazing Meme' },
    { name: 'Type', value: 'meme' },
    { name: 'Topic:Funny', value: 'Funny' },
    { name: 'Topic:Viral', value: 'Viral' },
    { name: 'Description', value: 'A hilarious meme that went viral on social media' }
  ]
});

// Sign and post the transaction
await arweave.transactions.sign(transaction);
await arweave.transactions.post(transaction);`}</code></pre>

      <h3 id="querying-assets">Querying Assets</h3>
      
      <p>Example of querying for specific asset types:</p>

      <pre><code>{`// Query for all memes
const memeQuery = \`{
  transactions(
    first: 50,
    tags: [
      { name: "Type", values: ["meme"] }
    ]
  ) {
    edges {
      node {
        id
        owner {
          address
        }
        tags {
          name
          value
        }
      }
    }
  }
}\`;

// Query for funny content
const funnyQuery = \`{
  transactions(
    first: 50,
    tags: [
      { name: "Topic:Funny", values: ["Funny"] }
    ]
  ) {
    edges {
      node {
        id
        owner {
          address
        }
        tags {
          name
          value
        }
      }
    }
  }
}\`;`}</code></pre>

      <h2 id="best-practices">Best Practices</h2>
      
      <ul>
        <li><strong>Use Descriptive Titles</strong>: Make titles clear and engaging (max 150 characters)</li>
        <li><strong>Choose Appropriate Types</strong>: Select the most specific asset type that applies</li>
        <li><strong>Add Relevant Topics</strong>: Include topics that will help users discover your content</li>
        <li><strong>Write Clear Descriptions</strong>: Provide detailed descriptions (max 300 characters)</li>
        <li><strong>Be Consistent</strong>: Use consistent tagging across related assets</li>
        <li><strong>Follow Standards</strong>: Adhere to the ANS-110 specification for compatibility</li>
      </ul>

      <h2 id="use-cases">Use Cases</h2>
      
      <div className="use-cases-grid">
        <div className="use-case">
          <h4>Marketplaces</h4>
          <p>Enable discoverable trading of digital assets with standardized metadata</p>
        </div>
        <div className="use-case">
          <h4>Search Engines</h4>
          <p>Index and search across different types of permaweb content</p>
        </div>
        <div className="use-case">
          <h4>Content Aggregators</h4>
          <p>Collect and display content by type or topic</p>
        </div>
        <div className="use-case">
          <h4>Social Platforms</h4>
          <p>Organize and categorize user-generated content</p>
        </div>
        <div className="use-case">
          <h4>NFT Collections</h4>
          <p>Standardize metadata for NFT discoverability</p>
        </div>
        <div className="use-case">
          <h4>Content Discovery</h4>
          <p>Help users find relevant content across the permaweb</p>
        </div>
      </div>

      <h2 id="graphql-integration">GraphQL Integration</h2>
      
      <p>ANS-110 works seamlessly with Arweave's GraphQL API to enable powerful content discovery:</p>

      <h3 id="advanced-queries">Advanced Queries</h3>
      
      <pre><code>{`# Query for recent blog posts about AI
query {
  transactions(
    first: 20,
    sort: HEIGHT_DESC,
    tags: [
      { name: "Type", values: ["blog-post"] },
      { name: "Topic:AI", values: ["AI"] }
    ]
  ) {
    edges {
      node {
        id
        owner {
          address
        }
        tags {
          name
          value
        }
        block {
          height
          timestamp
        }
      }
    }
  }
}

# Query for popular content by owner
query {
  transactions(
    first: 10,
    owners: ["YOUR_WALLET_ADDRESS"],
    tags: [
      { name: "Type", values: ["meme", "image", "video"] }
    ]
  ) {
    edges {
      node {
        id
        tags {
          name
          value
        }
      }
    }
  }
}`}</code></pre>

      <h2 id="resources">Resources</h2>
      
      <ul>
        <li><a href="https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-110.md" target="_blank" rel="noopener noreferrer">Official ANS-110 Specification</a> - Complete standard documentation</li>
        <li><a href="https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/" target="_blank" rel="noopener noreferrer">Arweave Standards Repository</a> - All ANS standards and specifications</li>
        <li><a href="/#/api-reference">GraphQL API Reference</a> - Learn more about querying Arweave data</li>
        <li><a href="/#/examples">Implementation Examples</a> - See real-world ANS-110 usage</li>
        <li><a href="/#/atomic-assets">Atomic Assets Guide</a> - How ANS-110 relates to Atomic Assets</li>
      </ul>

      <h2 id="related-standards">Related Standards</h2>
      
      <p>ANS-110 is part of the broader Arweave standards ecosystem. Other related standards include:</p>

      <ul>
        <li><strong>ANS-104</strong> - Data Item specification for bundling transactions</li>
        <li><strong>ANS-105</strong> - SmartWeave contract specification</li>
        <li><strong>ANS-106</strong> - SmartWeave contract deployment specification</li>
        <li><strong>ANS-107</strong> - SmartWeave contract interaction specification</li>
        <li><strong>ANS-108</strong> - SmartWeave contract evaluation specification</li>
        <li><strong>ANS-109</strong> - SmartWeave contract state specification</li>
      </ul>

      <p>For a complete list of all Arweave standards, visit the <a href="https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/" target="_blank" rel="noopener noreferrer">Arweave Standards Repository</a>.</p>

      <hr />
      
      <p>Ready to implement ANS-110 in your project? Check out the <a href="/#/examples">Examples</a> section for implementation guides and explore the <a href="/#/api-reference">API Reference</a> for GraphQL query patterns!</p>
    </div>
  );
}

export default ANS110; 