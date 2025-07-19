# UCM Contract Market Order Fixes

## Overview

This document outlines the necessary changes to the AO UCM contract to fix issues with market orders for non-wAR tokens (specifically PIXL, Wander, and AO tokens).

## Current Problem

### Issue Description
When users attempt to create market orders with PIXL, Wander, or AO tokens, the orders fail with "Order-Error" and message "No amount to fill". This happens because:

1. **Market Order Logic**: Market orders (no price specified) require existing orders in the orderbook to match against
2. **Empty Orderbook**: When there are no existing sell orders for the token-asset pair, `sumVolume` remains 0
3. **Error Return**: The contract returns "Order-Error" with message "No amount to fill"

### Current Behavior
```lua
if sumVolume > 0 then
    -- Send success response
else
    handleError({
        Target = args.sender,
        Action = 'Order-Error',
        Message = 'No amount to fill',
        Quantity = args.quantity,
        TransferToken = currentToken,
        OrderGroupId = args.orderGroupId
    })
    return
end
```

## Proposed Solution

### Market Order Conversion to Limit Order

When a market order has no matches (`sumVolume == 0`), instead of returning an error, convert it to a limit order and add it to the orderbook.

### Implementation Details

#### 1. File: `ao-ucm/src/ucm.lua`

**Location**: Around line 380-420 in the order creation logic

**Current Code**:
```lua
if sumVolume > 0 then
    ao.send({
        Target = args.sender,
        Action = 'Order-Success',
        Tags = {
            OrderId = args.orderId,
            Status = 'Success',
            Handler = 'Create-Order',
            DominantToken = currentToken,
            SwapToken = args.swapToken,
            Quantity = tostring(sumVolume),
            Price = args.price and tostring(args.price) or 'None',
            Message = 'Order created successfully!',
            ['X-Group-ID'] = args.orderGroupId or 'None'
        }
    })
else
    handleError({
        Target = args.sender,
        Action = 'Order-Error',
        Message = 'No amount to fill',
        Quantity = args.quantity,
        TransferToken = currentToken,
        OrderGroupId = args.orderGroupId
    })
    return
end
```

**Proposed Change**:
```lua
if sumVolume > 0 then
    ao.send({
        Target = args.sender,
        Action = 'Order-Success',
        Tags = {
            OrderId = args.orderId,
            Status = 'Success',
            Handler = 'Create-Order',
            DominantToken = currentToken,
            SwapToken = args.swapToken,
            Quantity = tostring(sumVolume),
            Price = args.price and tostring(args.price) or 'None',
            Message = 'Order created successfully!',
            ['X-Group-ID'] = args.orderGroupId or 'None'
        }
    })
else
    -- For market orders with no matches, convert to limit order and add to orderbook
    if orderType == 'Market' then
        -- Calculate a reasonable price based on the quantity and add as limit order
        local estimatedPrice = bint(args.quantity) // bint(1000000) -- Simple price estimation
        if estimatedPrice <= bint(0) then estimatedPrice = bint(1) end
        
        table.insert(currentOrders, {
            Id = args.orderId,
            Quantity = tostring(args.quantity),
            OriginalQuantity = tostring(args.quantity),
            Creator = args.sender,
            Token = currentToken,
            DateCreated = args.timestamp,
            Price = tostring(estimatedPrice),
        })

        local limitDataSuccess, limitData = pcall(function()
            return json.encode({
                Order = {
                    Id = args.orderId,
                    DominantToken = validPair[1],
                    SwapToken = validPair[2],
                    Sender = args.sender,
                    Receiver = nil,
                    Quantity = tostring(args.quantity),
                    Price = tostring(estimatedPrice),
                    Timestamp = args.timestamp
                }
            })
        end)

        ao.send({
            Target = ACTIVITY_PROCESS,
            Action = 'Update-Listed-Orders',
            Data = limitDataSuccess and limitData or ''
        })

        ao.send({
            Target = args.sender,
            Action = 'Order-Success',
            Tags = {
                Status = 'Success',
                OrderId = args.orderId,
                Handler = 'Create-Order',
                DominantToken = currentToken,
                SwapToken = args.swapToken,
                Quantity = tostring(args.quantity),
                Price = tostring(estimatedPrice),
                Message = 'Market order converted to limit order and added to orderbook',
                ['X-Group-ID'] = args.orderGroupId
            }
        })
    else
        handleError({
            Target = args.sender,
            Action = 'Order-Error',
            Message = 'No amount to fill',
            Quantity = args.quantity,
            TransferToken = currentToken,
            OrderGroupId = args.orderGroupId
        })
        return
    end
end
```

#### 2. File: `ao-ucm/src/bundle_ucm.lua`

**Location**: Around line 530-580 in the bundled order creation logic

**Current Code**:
```lua
if sumVolume > 0 then
    ao.send({
        Target = args.sender,
        Action = 'Order-Success',
        Tags = {
            OrderId = args.orderId,
            Status = 'Success',
            Handler = 'Create-Order',
            DominantToken = currentToken,
            SwapToken = args.swapToken,
            Quantity = tostring(sumVolume),
            Price = tostring(math.floor(vwap)),
            Message = 'Order created successfully!',
            ['X-Group-ID'] = args.orderGroupId or 'None'
        }
    })

    args.syncState()
else
    handleError({
        Target = args.sender,
        Action = 'Order-Error',
        Message = 'No amount to fill',
        Quantity = args.quantity,
        TransferToken = currentToken,
        OrderGroupId = args.orderGroupId
    })

    args.syncState()

    return
end
```

**Proposed Change**:
```lua
if sumVolume > 0 then
    ao.send({
        Target = args.sender,
        Action = 'Order-Success',
        Tags = {
            OrderId = args.orderId,
            Status = 'Success',
            Handler = 'Create-Order',
            DominantToken = currentToken,
            SwapToken = args.swapToken,
            Quantity = tostring(sumVolume),
            Price = tostring(math.floor(vwap)),
            Message = 'Order created successfully!',
            ['X-Group-ID'] = args.orderGroupId or 'None'
        }
    })

    args.syncState()
else
    -- For market orders with no matches, convert to limit order and add to orderbook
    if orderType == 'Market' then
        -- Calculate a reasonable price based on the quantity and add as limit order
        local estimatedPrice = bint(args.quantity) // bint(1000000) -- Simple price estimation
        if estimatedPrice <= bint(0) then estimatedPrice = bint(1) end
        
        table.insert(currentOrders, {
            Id = args.orderId,
            Quantity = tostring(args.quantity),
            OriginalQuantity = tostring(args.quantity),
            Creator = args.sender,
            Token = currentToken,
            SwapToken = args.swapToken,
            Price = tostring(estimatedPrice),
            Type = 'Limit',
            Blockheight = args.blockheight,
            Timestamp = args.timestamp,
            OrderGroupId = args.orderGroupId
        })
        
        ao.send({
            Target = args.sender,
            Action = 'Order-Success',
            Tags = {
                OrderId = args.orderId,
                Status = 'Success',
                Handler = 'Create-Order',
                DominantToken = currentToken,
                SwapToken = args.swapToken,
                Quantity = tostring(args.quantity),
                Price = tostring(estimatedPrice),
                Message = 'Market order converted to limit order and added to orderbook',
                ['X-Group-ID'] = args.orderGroupId or 'None'
            }
        })
    else
        handleError({
            Target = args.sender,
            Action = 'Order-Error',
            Message = 'No amount to fill',
            Quantity = args.quantity,
            TransferToken = currentToken,
            OrderGroupId = args.orderGroupId
        })

        args.syncState()

        return
    end
end
```

## Key Changes Summary

### 1. Market Order Handling
- **Before**: Market orders with no matches return "Order-Error"
- **After**: Market orders with no matches are converted to limit orders and added to orderbook

### 2. Price Estimation
- **Logic**: `estimatedPrice = quantity // 1000000` (simple division-based estimation)
- **Fallback**: If estimated price ≤ 0, set to 1
- **Rationale**: Provides a reasonable starting price for the orderbook

### 3. Order Creation
- **Type**: Convert from 'Market' to 'Limit'
- **Price**: Use estimated price instead of 'None'
- **Message**: Update success message to indicate conversion

### 4. Activity Tracking
- **Update**: Send order data to ACTIVITY_PROCESS for tracking
- **Data**: Include order details in JSON format

## Benefits

### 1. Improved User Experience
- Market orders no longer fail when orderbook is empty
- Users can create orders that will be filled when matching orders arrive

### 2. Better Liquidity
- Empty orderbooks get populated with initial orders
- Creates a foundation for price discovery

### 3. Token Support
- Enables market orders for all tokens (PIXL, Wander, AO, wAR)
- No special handling required for different tokens

## Considerations

### 1. Price Estimation Algorithm
- **Current**: Simple division-based estimation
- **Future**: Could be improved with more sophisticated algorithms
- **Options**: Historical price data, external price feeds, user-specified fallback prices

### 2. Order Type Conversion
- **Impact**: Users expecting immediate execution may get limit orders instead
- **Mitigation**: Clear messaging about conversion in success response

### 3. Orderbook Management
- **Consideration**: May need cleanup mechanisms for stale orders
- **Future**: Could add expiration times or cancellation mechanisms

## Testing Requirements

### 1. Unit Tests
- Test market order conversion logic
- Verify price estimation accuracy
- Ensure proper error handling

### 2. Integration Tests
- Test with empty orderbooks
- Test with various token types (PIXL, Wander, AO, wAR)
- Verify orderbook updates correctly

### 3. End-to-End Tests
- Test complete order flow from frontend to contract
- Verify order appears in orderbook
- Test order matching when counter-orders arrive

## Deployment Notes

### 1. Contract Updates
- Update both `ucm.lua` and `bundle_ucm.lua`
- Ensure changes are synchronized between files
- Test thoroughly before deployment

### 2. Frontend Compatibility
- Frontend should handle new success message format
- Consider updating UI to show converted order status
- No breaking changes to existing APIs

### 3. Monitoring
- Monitor order conversion rates
- Track price estimation accuracy
- Watch for any unexpected behavior

## Future Enhancements

### 1. Advanced Price Estimation
- Implement more sophisticated pricing algorithms
- Consider market conditions and volatility
- Add configurable estimation parameters

### 2. Order Expiration
- Add expiration times to converted orders
- Implement automatic cleanup of stale orders
- Provide user control over order lifetime

### 3. Partial Fills
- Support partial fills for converted orders
- Implement order splitting logic
- Handle remaining quantities appropriately

## Related Issues

- **Frontend**: Token balance display issues
- **Token Contracts**: Info action response variations
- **Order Matching**: Cross-token order compatibility
- **Price Discovery**: Initial pricing for new token pairs

## References

- [UCM Contract Source](../ao-ucm/src/ucm.lua)
- [Bundle Contract Source](../ao-ucm/src/bundle_ucm.lua)
- [Dynamic Token Selection](./dynamic-token-selection.md)
- [Token Registry Configuration](../bazar/src/helpers/config.ts) 