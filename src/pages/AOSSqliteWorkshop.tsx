import React from 'react';

function AOSSqliteWorkshop() {
  return (
    <div className="page-container">
      <h1 id="aos-sqlite-workshop">AOS-Sqlite Workshop</h1>
      
      <p>Learn how to use SQLite with AO (Arweave Operating System) for database indexing and data management in your permaweb applications.</p>

      <h2 id="workshop-overview">Workshop Overview</h2>
      
      <p>This workshop covers database indexing with AO using SQLite, presented by Tom Wilson. You'll learn how to efficiently store, query, and manage data in your AO processes.</p>

      <h2 id="workshop-materials">Workshop Materials</h2>
      
      <ul>
        <li><a href="https://hackmd.io/@ao-docs/rkM1C9m40" target="_blank" rel="noopener noreferrer">AOS-Sqlite Workshop by Tom Wilson</a> - Complete workshop documentation</li>
        <li><a href="https://www.crowdcast.io/c/aoventureskeynote6" target="_blank" rel="noopener noreferrer">AOS Release v1.0.25</a> - Latest AOS release information</li>
        <li><a href="https://mirror.xyz/0xCf673b87aFBed6091617331cC895376209d3b923/M4XoQFFCAKBH54bwIsCFT3Frxd575-plCg2o4H1Tujs" target="_blank" rel="noopener noreferrer">Installing packages on ao processes using APM</a> - Package management guide</li>
      </ul>

      <h2 id="key-concepts">Key Concepts</h2>
      
      <h3>Database Indexing</h3>
      <p>Learn how to create efficient database indexes for fast data retrieval in AO processes.</p>

      <h3>SQLite Integration</h3>
      <p>Understand how to integrate SQLite databases with AO for persistent data storage.</p>

      <h3>Data Management</h3>
      <p>Explore best practices for managing data in decentralized applications.</p>

      <h2 id="prerequisites">Prerequisites</h2>
      
      <ul>
        <li>Basic understanding of AO and AOS</li>
        <li>Familiarity with SQL and database concepts</li>
        <li>Node.js development environment</li>
        <li>AO CLI installed</li>
      </ul>

      <h2 id="workshop-content">Workshop Content</h2>
      
      <h3>Part 1: Introduction to AOS and SQLite</h3>
      <ul>
        <li>What is AOS?</li>
        <li>Why use SQLite with AO?</li>
        <li>Setting up your development environment</li>
      </ul>

      <h3>Part 2: Database Setup and Configuration</h3>
      <ul>
        <li>Installing SQLite in AO processes</li>
        <li>Creating and configuring databases</li>
        <li>Basic SQL operations</li>
      </ul>

      <h3>Part 3: Indexing Strategies</h3>
      <ul>
        <li>Understanding database indexes</li>
        <li>Creating efficient indexes</li>
        <li>Performance optimization</li>
      </ul>

      <h3>Part 4: Real-world Applications</h3>
      <ul>
        <li>Building a data-driven dApp</li>
        <li>Handling complex queries</li>
        <li>Scaling considerations</li>
      </ul>

      <h2 id="hands-on-exercises">Hands-on Exercises</h2>
      
      <h3>Exercise 1: Basic Database Setup</h3>
      <p>Create a simple SQLite database in an AO process and perform basic CRUD operations.</p>

      <h3>Exercise 2: Indexing Implementation</h3>
      <p>Implement database indexes for a sample application and measure performance improvements.</p>

      <h3>Exercise 3: Complex Queries</h3>
      <p>Build complex queries and optimize them using proper indexing strategies.</p>

      <h2 id="advanced-topics">Advanced Topics</h2>
      
      <ul>
        <li><strong>Distributed Databases</strong> - Managing data across multiple AO processes</li>
        <li><strong>Data Migration</strong> - Updating database schemas in production</li>
        <li><strong>Backup and Recovery</strong> - Ensuring data persistence and recovery</li>
        <li><strong>Performance Monitoring</strong> - Tracking database performance metrics</li>
      </ul>

      <h2 id="resources">Additional Resources</h2>
      
      <ul>
        <li><a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer">AO Documentation</a> - Official AO documentation</li>
        <li><a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer">SQLite Documentation</a> - SQLite reference</li>
        <li><a href="/weavedrive">WeaveDrive: Virtual File System</a> - AOP-5 specification</li>
        <li><a href="https://hackmd.io/@ao-docs/H1JK_WezR" target="_blank" rel="noopener noreferrer">AOP-5: WeaveDrive Specification</a></li>
      </ul>

      <h2 id="community">Community</h2>
      
      <ul>
        <li><a href="https://discord.gg/permaweb" target="_blank" rel="noopener noreferrer">Permaweb Discord</a> - Join the AO development community</li>
        <li><a href="https://github.com/permaweb/ao-community" target="_blank" rel="noopener noreferrer">AO Community Repository</a> - Share and discover AO projects</li>
        <li><a href="https://twitter.com/permaweb" target="_blank" rel="noopener noreferrer">Permaweb Twitter</a> - Stay updated on AO developments</li>
      </ul>

      <h2 id="next-steps">Next Steps</h2>
      
      <p>After completing this workshop, you should be able to:</p>
      
      <ul>
        <li>Set up SQLite databases in AO processes</li>
        <li>Create efficient database indexes</li>
        <li>Optimize database performance</li>
        <li>Build data-driven applications on the permaweb</li>
      </ul>

      <p>Continue your learning journey with:</p>
      
      <ul>
        <li><a href="/weavedrive">WeaveDrive Workshop</a> - Virtual file system implementation</li>
        <li><a href="/ai-tools">AI Tools & LLMs</a> - AI integration with AO</li>
        <li><a href="/starter-kits">Starter Kits</a> - More development resources</li>
      </ul>

      <hr />
      
      <p>Ready to dive into database development on AO? Start with the <a href="https://hackmd.io/@ao-docs/rkM1C9m40" target="_blank" rel="noopener noreferrer">workshop materials</a> and join the <a href="https://discord.gg/permaweb" target="_blank" rel="noopener noreferrer">community</a>!</p>
    </div>
  );
}

export default AOSSqliteWorkshop; 