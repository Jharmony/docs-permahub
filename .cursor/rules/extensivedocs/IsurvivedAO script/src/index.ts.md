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

// GraphQL query to find Bazar transactions (todo fix fetching of data)
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

// Array of addresses to verify
const addressesToVerify = [
	// Add your addresses here
	'jt19WluLXKr9lcostp_XNmXRmpdxM4VwmXbmyDLoyNM',
	'lk7HLWVGSF0FnqXmAs880wO1RMDYnND7ozUBTKCg70I',
	// etc...
];

async function verifySwaps() {
	try {
		console.log('Starting verification process...');
		console.log(`Checking ${addressesToVerify.length} addresses...`);

		// Check for swap transactions
		const swapData = await client.request<GraphQLResponse>(GET_SWAP_MESSAGES, {
			owners: addressesToVerify
		});

		// Check for bazar transactions
		const bazarData = await client.request<GraphQLResponse>(GET_BAZAR_MESSAGES, {
			owners: addressesToVerify
		});

		// Process results
		const swapResults = new Map();
		const bazarResults = new Map();
		
		// Initialize all addresses as not verified
		addressesToVerify.forEach(address => {
			swapResults.set(address, false);
			bazarResults.set(address, false);
		});

		// Check each swap transaction
		swapData.transactions.edges.forEach(({ node }) => {
			const address = node.owner.address;
			if (addressesToVerify.includes(address)) {
				swapResults.set(address, true);
				console.log(`Found swap transaction for address: ${address}`);
				console.log(`Transaction ID: ${node.id}`);
				console.log(`Timestamp: ${new Date(node.block.timestamp * 1000).toLocaleString()}`);
			}
		});

		// Check each bazar transaction
		bazarData.transactions.edges.forEach(({ node }) => {
			const address = node.owner.address;
			if (addressesToVerify.includes(address)) {
				bazarResults.set(address, true);
				console.log(`Found Bazar transaction for address: ${address}`);
				console.log(`Transaction ID: ${node.id}`);
				console.log(`Timestamp: ${new Date(node.block.timestamp * 1000).toLocaleString()}`);
			}
		});

		// Print results
		console.log('\nVerification Results:');
		console.log('=====================');
		addressesToVerify.forEach(address => {
			const hasSwap = swapResults.get(address);
			const hasBazar = bazarResults.get(address);
			console.log(`\nAddress: ${address}`);
			console.log(`Botega Swap Status: ${hasSwap ? '✅ Verified' : '❌ Not Verified'}`);
			console.log(`Transacted on Bazar Status: ${hasBazar ? '✅ Verified' : '❌ Not Verified'}`);
		});

		// Print summary
		const verifiedSwaps = Array.from(swapResults.values()).filter(Boolean).length;
		const verifiedBazar = Array.from(bazarResults.values()).filter(Boolean).length;
		console.log('\nSummary:');
		console.log(`Total addresses checked: ${addressesToVerify.length}`);
		console.log(`Addresses with swaps: ${verifiedSwaps}`);
		console.log(`Addresses with Bazar transactions: ${verifiedBazar}`);

		return {
			swapResults,
			bazarResults
		};
	} catch (error) {
		console.error('Error verifying transactions:', error);
		throw error;
	}
}

// Run the verification
console.log('Starting Botega Transaction Verification...');
verifySwaps()
	.then(results => {
		console.log('\nVerification complete!');
	})
	.catch(error => {
		console.error('Verification failed:', error);
		process.exit(1);
	});
