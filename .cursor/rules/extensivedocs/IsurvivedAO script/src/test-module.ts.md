import { GraphQLClient, gql } from 'graphql-request';

// Define types for our GraphQL response
interface TransactionNode {
  id: string;
  owner: {
    address: string;
  };
  recipient: string;
  tags: Array<{
    name: string;
    value: string;
  }>;
  block: {
    height: number;
    timestamp: number;
  };
}

interface GraphQLResponse {
  transactions: {
    count: number;
    edges: Array<{
      node: TransactionNode;
    }>;
  };
}

// Initialize GraphQL client
const client = new GraphQLClient('https://arweave.net/graphql');

// GraphQL query to find messages with the specific tag
const GET_SWAP_MESSAGES = gql`
  query GetSwapMessages($owners: [String!]!) {
    transactions(
      owners: $owners
      tags: [
        { name: "X-Action", values: ["Multi-Hop-Swap"] }
        { name: "Data-Protocol", values: ["ao"] }
        { name: "Type", values: ["Message"] }
        { name: "Variant", values: ["ao.TN.1"] }
      ]
    ) {
      count
      edges {
        node {
          id
          owner {
            address
          }
          recipient
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
`;

// GraphQL query to find Bazar transactions
const GET_BAZAR_MESSAGES = gql`
  query GetBazarMessages($owners: [String!]!) {
    transactions(
      owners: $owners
      tags: [
        { name: "Data-Protocol", values: ["ao"] }
        { name: "Type", values: ["Message"] }
        { name: "Variant", values: ["ao.TN.1"] }
        { name: "X-Order-Action", values: ["Create-Order"] }
      ]
    ) {
      count
      edges {
        node {
          id
          owner {
            address
          }
          recipient
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
`;

async function testSingleAddress(address: string) {
  try {
    console.log(`\n=== Testing Single Address: ${address} ===`);
    
    // Check for swap transactions
    const swapData = await client.request<GraphQLResponse>(GET_SWAP_MESSAGES, {
      owners: [address]
    });

    // Check for bazar transactions
    const bazarData = await client.request<GraphQLResponse>(GET_BAZAR_MESSAGES, {
      owners: [address]
    });

    console.log('\nQuery Results:');
    console.log('=============');
    
    // Check swap transactions
    if (swapData.transactions.edges.length === 0) {
      console.log('❌ No swap transactions found for this address');
    } else {
      console.log('✅ Found swap transactions:');
      swapData.transactions.edges.forEach(({ node }) => {
        console.log(`\nTransaction ID: ${node.id}`);
        console.log(`Timestamp: ${new Date(node.block.timestamp * 1000).toLocaleString()}`);
        console.log('Tags:');
        node.tags.forEach(tag => {
          console.log(`  ${tag.name}: ${tag.value}`);
        });
      });
    }

    // Check bazar transactions
    if (bazarData.transactions.edges.length === 0) {
      console.log('\n❌ No Bazar transactions found for this address');
    } else {
      console.log('\n✅ Found Bazar transactions:');
      bazarData.transactions.edges.forEach(({ node }) => {
        console.log(`\nTransaction ID: ${node.id}`);
        console.log(`Timestamp: ${new Date(node.block.timestamp * 1000).toLocaleString()}`);
        console.log('Tags:');
        node.tags.forEach(tag => {
          console.log(`  ${tag.name}: ${tag.value}`);
        });
      });
    }

    return {
      hasSwap: swapData.transactions.edges.length > 0,
      hasBazar: bazarData.transactions.edges.length > 0
    };
  } catch (error) {
    console.error('\n=== Error Details ===');
    console.error('Error Type:', error.constructor.name);
    console.error('Error Message:', error.message);
    console.error('Full Error:', error);
    console.error('=== End Error Details ===');
    return {
      hasSwap: false,
      hasBazar: false
    };
  }
}

async function testGraphQLConnection() {
  try {
    console.log('\n=== Testing GraphQL Connection ===');
    
    // Test with a known valid address
    const testAddress = 'your-test-address-here';
    
    // Test both queries
    const swapResult = await client.request<GraphQLResponse>(GET_SWAP_MESSAGES, {
      owners: [testAddress]
    });

    const bazarResult = await client.request<GraphQLResponse>(GET_BAZAR_MESSAGES, {
      owners: [testAddress]
    });

    console.log('✅ GraphQL connection successful');
    console.log('Swap query response structure:', Object.keys(swapResult));
    console.log('Bazar query response structure:', Object.keys(bazarResult));
    return true;
  } catch (error) {
    console.error('\n=== GraphQL Connection Error ===');
    console.error('Error Type:', error.constructor.name);
    console.error('Error Message:', error.message);
    console.error('Full Error:', error);
    return false;
  }
}

// Test addresses to verify
const testAddresses = [
  // Add your test addresses here
  'address1',
  'address2'
];

async function runTests() {
  console.log('=== Starting Transaction Verification Tests ===');
  
  // Test GraphQL connection first
  const connectionTest = await testGraphQLConnection();
  if (!connectionTest) {
    console.error('GraphQL connection test failed. Stopping further tests.');
    return;
  }

  // Test each address
  console.log('\n=== Testing Individual Addresses ===');
  for (const address of testAddresses) {
    const result = await testSingleAddress(address);
    console.log(`\nSummary for ${address}:`);
    console.log(`Swap Status: ${result.hasSwap ? '✅ Verified' : '❌ Not Verified'}`);
    console.log(`Bazar Status: ${result.hasBazar ? '✅ Verified' : '❌ Not Verified'}`);
  }

  console.log('\n=== Test Suite Complete ===');
}

// Execute the tests
runTests().catch(error => {
  console.error('Test suite failed:', error);
  process.exit(1);
});