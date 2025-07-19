# PIXL Order Issue Analysis

## Current Status

### Problem Summary
PIXL token orders are failing with "Order-Error" while wAR orders work correctly. The issue occurs specifically with market orders when there are no existing orders in the orderbook to match against.

### Error Details
```
[@permaweb/ucm] Processing order...
[@permaweb/ucm] Attempt 1 for results...
[@permaweb/ucm] Attempt 2 for results...
[@permaweb/ucm] Match found: Order-Error
```

## Root Cause Analysis

### 1. UCM Contract Logic
The UCM contract's market order logic requires existing orders in the orderbook to match against. When no matches are found (`sumVolume == 0`), the contract returns "Order-Error" with message "No amount to fill".

### 2. Token-Specific Behavior
- **wAR Orders**: Work because there are typically existing orders in wAR-asset pairs
- **PIXL Orders**: Fail because there are no existing orders in PIXL-asset pairs
- **Wander Orders**: Similar issue (token contract also has connectivity problems)
- **AO Orders**: Similar issue (token contract doesn't support Info action)

### 3. Frontend vs Contract
The frontend order creation logic is working correctly - it's sending the right parameters to the UCM contract. The issue is in the contract's validation and matching logic.

## Current Workarounds

### 1. Limit Orders Instead of Market Orders
Users can create limit orders (with specific prices) instead of market orders. Limit orders are added to the orderbook regardless of existing orders.

### 2. Wait for Existing Orders
Users can wait for someone else to create a matching order in the orderbook before placing their market order.

### 3. Use wAR for Market Orders
Users can switch to wAR token for market orders since wAR-asset pairs typically have existing orders.

## Proposed Solutions

### Solution 1: UCM Contract Modification (Recommended)
**Status**: Documented for future implementation

**Approach**: Modify the UCM contract to convert market orders with no matches into limit orders and add them to the orderbook.

**Benefits**:
- Solves the core issue
- Improves user experience
- Creates liquidity for new token pairs
- Works for all tokens (PIXL, Wander, AO, wAR)

**Implementation**: See [UCM Market Order Fixes](./ucm-market-order-fixes.md)

### Solution 2: Frontend Workaround
**Status**: Partially implemented

**Approach**: Add fallback logic in the frontend to handle "No amount to fill" errors by suggesting limit orders or providing alternative options.

**Benefits**:
- No contract changes required
- Immediate solution
- Better user guidance

**Limitations**:
- Doesn't solve the underlying issue
- Still requires user action to create limit orders

### Solution 3: Token Contract Improvements
**Status**: Long-term consideration

**Approach**: Improve token contracts (Wander, AO) to provide better Info action responses and ensure proper connectivity.

**Benefits**:
- Addresses token-specific issues
- Improves overall system reliability

**Limitations**:
- Requires coordination with token contract owners
- Doesn't solve the core market order issue

## Testing Results

### Network Analysis Tests
```
✅ wAR Token: WORKING (Balance and Info responses received)
✅ PIXL Token: WORKING (Balance and Info responses received)
❌ Wander Token: NETWORK ERROR (fetch failed)
❌ AO Token: NETWORK ERROR (invalid JSON response)
✅ UCM Contract: WORKING (proper responses)
```

### Order Creation Tests
```
✅ wAR Orders: Successfully created and listed in orderbook
❌ PIXL Orders: Fail with "Order-Error" - "No amount to fill"
❌ Wander Orders: Fail due to token contract issues
❌ AO Orders: Fail due to token contract issues
```

## Frontend Fixes Implemented

### 1. Token Registry Updates
- Added all tokens (wAR, PIXL, Wander, AO) to the registry
- Corrected logo hashes for proper display
- Added denomination and priority fields

### 2. Dynamic Token Selection
- Implemented TokenProvider context for dynamic token switching
- Updated UI to show selected token logos and symbols
- Added language support for new tokens

### 3. Denomination Handling
- Added fallback logic for token denomination when Info action fails
- Improved error handling for token balance fetching
- Enhanced order creation with proper denomination calculations

### 4. Error Handling
- Added graceful handling of null token responses
- Implemented token validation system
- Enhanced error logging and user feedback

## Current State

### Working Features
- ✅ Token selection and switching
- ✅ Token balance display (with fallbacks)
- ✅ Token logo and symbol display
- ✅ wAR order creation and execution
- ✅ Limit order creation for all tokens
- ✅ Frontend error handling and validation

### Known Issues
- ❌ PIXL market orders fail with "Order-Error"
- ❌ Wander token contract connectivity issues
- ❌ AO token contract Info action not supported
- ❌ Token balance loading shows "Loading..." for zero balances

### Pending Solutions
- 🔄 UCM contract modification (documented for future implementation)
- 🔄 Frontend workarounds for market order failures
- 🔄 Token contract improvements (long-term)

## Next Steps

### Immediate Actions
1. **User Education**: Inform users about using limit orders instead of market orders for PIXL
2. **Error Handling**: Improve frontend error messages to guide users to alternatives
3. **Testing**: Continue monitoring order success rates and user feedback

### Short-term Actions
1. **Frontend Workarounds**: Implement automatic suggestions for limit orders when market orders fail
2. **Token Validation**: Add better validation and fallback mechanisms for problematic tokens
3. **User Interface**: Add indicators for token health and order compatibility

### Long-term Actions
1. **UCM Contract Update**: Implement the documented market order fixes
2. **Token Contract Coordination**: Work with token contract owners to improve compatibility
3. **Advanced Features**: Implement sophisticated price estimation and order management

## Technical Details

### Token Registry Configuration
```typescript
// Current token configuration in config.ts
export const TOKENS = {
  wAR: {
    id: 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
    symbol: 'wAR',
    name: 'Wrapped AR',
    denomination: 12,
    priority: 1,
    logo: 'ar-logo.svg'
  },
  PIXL: {
    id: 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
    symbol: 'PIXL',
    name: 'PIXL Token',
    denomination: 6,
    priority: 2,
    logo: 'pixl-logo.svg'
  },
  // ... other tokens
}
```

### Order Creation Flow
```typescript
// Current order creation logic
const orderParams = {
  orderId: generateOrderId(),
  dominantToken: tokenProvider.selectedToken.id, // Dynamic token selection
  swapToken: assetId,
  sender: walletAddress,
  quantity: getTransferQuantity(),
  price: orderType === 'Market' ? undefined : price,
  timestamp: Date.now(),
  blockheight: currentBlockHeight,
  transferDenomination: transferDenomination || '1'
}
```

### Error Handling
```typescript
// Current error handling for token operations
try {
  const balance = await getTokenBalance(tokenId, walletAddress)
  return balance || '0'
} catch (error) {
  console.warn(`Failed to fetch balance for token ${tokenId}:`, error)
  return '0' // Fallback to zero balance
}
```

## References

- [UCM Market Order Fixes](./ucm-market-order-fixes.md)
- [Dynamic Token Selection](./dynamic-token-selection.md)
- [Token Registry Configuration](../bazar/src/helpers/config.ts)
- [Order Creation Logic](../bazar/src/views/Asset/AssetAction/AssetActionMarket/AssetActionMarketOrders/AssetActionMarketOrders.tsx) 