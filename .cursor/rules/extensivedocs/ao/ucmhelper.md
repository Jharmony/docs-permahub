import { readHandler } from '../api';
import { AO } from './config';
import { GQLNodeResponseType, TagType, GQLArgsType } from './types';
import { getGQLData } from '../api/gql';

interface UCMDataProps {
  AssetIds?: string[];
  Address?: string;
  StartDate?: number;
  EndDate?: number;
}

interface ProcessedActivityType {
  ListedOrders: any[];
  ExecutedOrders: any[];
  CancelledOrders: any[];
}

function extractTagValue(tags: TagType[], name: string): string | null {
  const tag = tags.find(t => t.name === name || t.name === `Bootloader-${name}`);
  return tag ? tag.value : null;
}

function processGQLResponse(nodes: GQLNodeResponseType[]): ProcessedActivityType {
  const result: ProcessedActivityType = {
    ListedOrders: [],
    ExecutedOrders: [],
    CancelledOrders: []
  };

  for (const node of nodes) {
    const { node: gqlNode } = node;
    if (!gqlNode || !gqlNode.tags || !gqlNode.block || !gqlNode.owner) continue;

    const type = extractTagValue(gqlNode.tags, 'Type');
    const protocol = extractTagValue(gqlNode.tags, 'Protocol');
    const handler = extractTagValue(gqlNode.tags, 'Handler');
    const price = extractTagValue(gqlNode.tags, 'Price');
    const quantity = extractTagValue(gqlNode.tags, 'Quantity');
    const token = extractTagValue(gqlNode.tags, 'Token');
    const orderId = extractTagValue(gqlNode.tags, 'Order-Id');

    // Skip if not a Bazar transaction
    if (protocol !== 'bazar' || handler !== 'order') continue;

    const activityItem = {
      id: gqlNode.id,
      dateCreated: gqlNode.block.timestamp,
      creator: gqlNode.owner.address,
      price: price,
      quantity: quantity,
      token: token,
      orderId: orderId
    };

    if (type === 'List') {
      result.ListedOrders.push(activityItem);
    } else if (type === 'Execute') {
      result.ExecutedOrders.push(activityItem);
    } else if (type === 'Cancel') {
      result.CancelledOrders.push(activityItem);
    }
  }

  return result;
}

export async function getUCMData(props: UCMDataProps) {
  try {
    console.log('Fetching activity data for address:', props.Address);
    
    if (!props.Address) {
      console.error('No address provided for activity query');
      return null;
    }

    // Base filters for all queries
    const baseFilters = [
      { name: 'Data-Protocol', values: ['ao'] },
      { name: 'Type', values: ['Process-Step'] }
    ];

    // Add address filters for both sender and receiver
    const addressFilters = [
      { name: 'Sender', values: [props.Address] },
      { name: 'Receiver', values: [props.Address] }
    ];

    // Query for regular marketplace transactions
    const listedFilters = [
      ...baseFilters,
      { name: 'Protocol', values: ['bazar'] },
      { name: 'Handler', values: ['order'] },
      { name: 'Type', values: ['List'] }
    ];

    // Query for alternative purchase transactions
    const executedFilters = [
      ...baseFilters,
      { name: 'Protocol', values: ['bazar'] },
      { name: 'Handler', values: ['order'] },
      { name: 'Type', values: ['Execute'] }
    ];

    // Query for cancelled listings
    const cancelledFilters = [
      ...baseFilters,
      { name: 'Protocol', values: ['bazar'] },
      { name: 'Handler', values: ['order'] },
      { name: 'Type', values: ['Cancel'] }
    ];

    // Execute all queries in parallel
    const [listedResponse, executedResponse, cancelledResponse] = await Promise.all([
      getGQLData({
        gateway: 'https://arweave.net/graphql',
        tagFilters: [...listedFilters, ...addressFilters],
        owners: null,
        ids: null,
        cursor: null
      }),
      getGQLData({
        gateway: 'https://arweave.net/graphql',
        tagFilters: [...executedFilters, ...addressFilters],
        owners: null,
        ids: null,
        cursor: null
      }),
      getGQLData({
        gateway: 'https://arweave.net/graphql',
        tagFilters: [...cancelledFilters, ...addressFilters],
        owners: null,
        ids: null,
        cursor: null
      })
    ]);

    console.log('Listed orders response:', listedResponse);
    console.log('Executed orders response:', executedResponse);
    console.log('Cancelled orders response:', cancelledResponse);

    // Process the responses
    const listedOrders = listedResponse?.data || [];
    const executedOrders = executedResponse?.data || [];
    const cancelledOrders = cancelledResponse?.data || [];

    // Process each type of order
    const processedListed = processGQLResponse(listedOrders);
    const processedExecuted = processGQLResponse(executedOrders);
    const processedCancelled = processGQLResponse(cancelledOrders);

    // Return the combined results
    return {
      ListedOrders: processedListed.ListedOrders,
      ExecutedOrders: processedExecuted.ExecutedOrders,
      CancelledOrders: processedCancelled.CancelledOrders
    };
  } catch (e) {
    console.error('Error fetching activity data:', e);
    return null;
  }
} 