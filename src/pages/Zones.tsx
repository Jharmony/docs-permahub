import React from 'react';

const Zones = () => {
  return (
    <div className="page-container">
      <h1>Zones</h1>
      
      <p>Zones are representations of entities on the permaweb that contain relevant information and can perform actions on the entity's behalf. A profile is an instance of a zone with specific metadata.</p>

      <h2>Overview</h2>
      <p>Zones serve as the foundational building blocks for creating digital entities on the permaweb. They provide a standardized way to represent and interact with various types of entities, from individual users to organizations and applications.</p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Entity Representation</strong>: Zones represent real-world or digital entities</li>
        <li><strong>Metadata Storage</strong>: Store structured data about the entity</li>
        <li><strong>Action Execution</strong>: Perform operations on behalf of the entity</li>
        <li><strong>Interoperability</strong>: Standardized format for cross-application compatibility</li>
      </ul>

      <h2>API Reference</h2>

      <h3><code>createZone</code></h3>
      <p>Creates a new zone on the permaweb.</p>

      <pre><code>{`const zoneId = await permaweb.createZone();`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>tags (optional)</code>: Additional tags for the zone</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`ZoneProcessId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Create a basic zone
const zoneId = await permaweb.createZone();

// Create a zone with custom tags
const zoneId = await permaweb.createZone({
  tags: [
    { name: "Type", value: "Organization" },
    { name: "Category", value: "Technology" }
  ]
});

console.log("Created zone:", zoneId);`}</code></pre>

      <h3><code>updateZone</code></h3>
      <p>Updates an existing zone with new metadata.</p>

      <pre><code>{`const zoneUpdateId = await permaweb.updateZone(
  {
    name: "Sample Zone",
    metadata: {
      description: "A sample zone for testing",
      version: "1.0.0",
    },
  },
  zoneId
);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Zone data to update, specified in an object
          <ul>
            <li><code>name</code>: The name of the zone</li>
            <li><code>metadata</code>: Additional metadata object</li>
          </ul>
        </li>
        <li><code>zoneId</code>: The ID of the zone to update</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`ZoneUpdateId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Update zone with new information
const updateId = await permaweb.updateZone(
  {
    name: "My Organization",
    metadata: {
      description: "A technology company building on Arweave",
      website: "https://example.com",
      founded: "2024",
      industry: "Blockchain"
    }
  },
  zoneId
);

console.log("Zone updated:", updateId);`}</code></pre>

      <h3><code>getZone</code></h3>
      <p>Retrieves zone information and associated data.</p>

      <pre><code>{`const zone = await permaweb.getZone(zoneId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>zoneId</code>: The ID of the zone to fetch</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  store: [],
  assets: []
};`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get zone information
const zone = await permaweb.getZone(zoneId);

console.log("Zone store:", zone.store);
console.log("Zone assets:", zone.assets);`}</code></pre>

      <h2>Complete Zone Management Example</h2>
      <p>Here's a complete example demonstrating zone lifecycle management:</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function manageZones() {
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao: connect(),
    arweave: Arweave.init(),
    signer: createDataItemSigner(wallet),
  });

  try {
    // 1. Create a new zone
    console.log("Creating zone...");
    const zoneId = await permaweb.createZone();
    console.log("Zone created with ID:", zoneId);

    // 2. Update the zone with metadata
    console.log("Updating zone...");
    const updateId = await permaweb.updateZone(
      {
        name: "Tech Startup Zone",
        metadata: {
          description: "A startup building decentralized applications",
          industry: "Technology",
          founded: "2024",
          teamSize: "5",
          website: "https://startup.example.com"
        }
      },
      zoneId
    );
    console.log("Zone updated with ID:", updateId);

    // 3. Retrieve zone information
    console.log("Fetching zone data...");
    const zoneData = await permaweb.getZone(zoneId);
    console.log("Zone data:", zoneData);

    return {
      zoneId,
      updateId,
      zoneData
    };

  } catch (error) {
    console.error("Error managing zones:", error);
    throw error;
  }
}

// Run the example
manageZones()
  .then(result => console.log("Zone management completed:", result))
  .catch(error => console.error("Zone management failed:", error));`}</code></pre>

      <h2>Zone Metadata Structure</h2>
      <p>When updating zones, you can include various types of metadata:</p>

      <pre><code>{`const zoneMetadata = {
  // Basic information
  name: "Zone Name",
  description: "Zone description",
  
  // Contact information
  email: "contact@example.com",
  website: "https://example.com",
  
  // Business information
  industry: "Technology",
  founded: "2024",
  location: "San Francisco, CA",
  
  // Custom fields
  customField1: "value1",
  customField2: "value2",
  
  // Version information
  version: "1.0.0",
  lastUpdated: new Date().toISOString()
};`}</code></pre>

      <h2>Best Practices</h2>

      <h3>1. Naming Conventions</h3>
      <ul>
        <li>Use descriptive, unique names for zones</li>
        <li>Include organization or project prefixes when appropriate</li>
        <li>Keep names concise but informative</li>
      </ul>

      <h3>2. Metadata Organization</h3>
      <ul>
        <li>Group related metadata fields together</li>
        <li>Use consistent field naming conventions</li>
        <li>Include version information for tracking changes</li>
      </ul>

      <h3>3. Error Handling</h3>
      <pre><code>{`async function safeZoneOperation(zoneId: string) {
  try {
    const zone = await permaweb.getZone(zoneId);
    return zone;
  } catch (error) {
    if (error.message.includes("not found")) {
      console.log("Zone not found:", zoneId);
      return null;
    }
    throw error;
  }
}`}</code></pre>

      <h3>4. Zone Lifecycle Management</h3>
      <pre><code>{`class ZoneManager {
  constructor(private permaweb: any) {}

  async createZoneWithMetadata(name: string, metadata: any) {
    const zoneId = await this.permaweb.createZone();
    
    await this.permaweb.updateZone(
      { name, metadata },
      zoneId
    );
    
    return zoneId;
  }

  async updateZoneMetadata(zoneId: string, metadata: any) {
    const currentZone = await this.permaweb.getZone(zoneId);
    
    const updatedMetadata = {
      ...currentZone.metadata,
      ...metadata,
      lastUpdated: new Date().toISOString()
    };
    
    return await this.permaweb.updateZone(
      { metadata: updatedMetadata },
      zoneId
    );
  }
}`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/profiles">Profiles</a> - Learn how profiles extend zones for user representation</li>
        <li><a href="#/atomic-assets">Atomic Assets</a> - Create and manage digital assets within zones</li>
        <li><a href="#/collections">Collections</a> - Organize assets into collections</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
      </ul>

      <p>Ready to create your first zone? Check out the <a href="#/getting-started">Getting Started</a> guide or explore <a href="#/profiles">Profiles</a> to see how zones are used for user representation!</p>
    </div>
  );
};

export default Zones; 