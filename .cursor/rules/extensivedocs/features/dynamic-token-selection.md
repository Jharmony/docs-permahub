# Dynamic Token Selection Feature

## Overview

This feature implements dynamic token selection in both `bazar` and `bazar-studio` projects, allowing users to select different tokens for trading and transactions instead of being limited to a hardcoded default token (AO.defaultToken). The implementation includes the new Wander token and provides a comprehensive token management system.

## Architecture

### Token Registry System
- **Location**: `src/helpers/config.ts` in both projects
- **Purpose**: Centralized token management with metadata including logos, denominations, and priorities
- **Tokens Supported**:
  - PIXL Token (default)
  - Wrapped AR (WAR)
  - Wander Token (WANDER) - **NEW**
  - AO Token (process ID and logo: UkS-mdoiG8hcAClhKK8ch4ZhEzla0mCPDOix9hpdSFE) - **NEW**

### Token Provider (React Context)
- **Location**: `src/providers/TokenProvider.tsx`
- **Features**:
  - Global token state management
  - localStorage persistence
  - Token balance fetching for all registered tokens
  - Automatic fallback to default token

### Token Selector Component
- **Location**: `src/components/atoms/TokenSelector/`
- **Features**:
  - Dropdown with token logos and names
  - Real-time token switching
  - Responsive design
  - Language support

## Implementation Details

### 1. Token Registry Configuration

**Files Modified**:
- `bazar/src/helpers/config.ts`
- `bazar-studio/src/helpers/config.ts`

**Key Changes**:
```typescript
export const TOKEN_REGISTRY = {
  'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10': {
    id: 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
    name: 'PIXL Token',
    symbol: 'PIXL',
    logo: 'czR2tJmSr7upPpReXu6IuOc2H7RuHRRAhI7DXAUlszU',
    denomination: 12,
    description: 'PIXL protocol token',
    priority: 1,
  },
  '7GoQfmSOct_aUOWKM4xbKGg6DzAmOgdKwg8Kf-CbHm4': {
    id: '7GoQfmSOct_aUOWKM4xbKGg6DzAmOgdKwg8Kf-CbHm4',
    name: 'Wander Token',
    symbol: 'WANDER',
    logo: 'xUO2tQglSYsW89aLYN8ErGivZqezoDaEn95JniaCBZk', // WANDER token logo on Arweave
    denomination: 12,
    description: 'Wander protocol token',
    priority: 2,
  },
  // ... other tokens
};
```

### 2. Token Provider Implementation

**New Files Created**:
- `bazar/src/providers/TokenProvider.tsx`
- `bazar-studio/src/providers/TokenProvider.tsx`

**Key Features**:
- Context-based state management
- localStorage persistence
- Automatic token balance fetching
- Fallback to default token

### 3. Token Selector Component

**New Files Created**:
- `bazar/src/components/atoms/TokenSelector/TokenSelector.tsx`
- `bazar/src/components/atoms/TokenSelector/types.ts`
- `bazar/src/components/atoms/TokenSelector/styles.ts`
- `bazar/src/components/atoms/TokenSelector/index.ts`
- `bazar-studio/src/components/atoms/TokenSelector/` (same structure)

**Features**:
- Dropdown with token logos
- Real-time switching
- Language support
- Responsive design

### 4. Provider Integration

**Files Modified**:
- `bazar/src/providers/AppProvider.tsx`
- `bazar-studio/src/index.tsx`

**Changes**:
- Added TokenProvider to provider hierarchy
- Ensured proper initialization order

### 5. Balance Fetching Updates

**Files Modified**:
- `bazar/src/providers/PermawebProvider.tsx`
- `bazar/src/providers/ArweaveProvider.tsx`
- `bazar-studio/src/providers/PermawebProvider.tsx`
- `bazar-studio/src/providers/ArweaveProvider.tsx`

**Changes**:
- Updated to fetch balances for all tokens in registry
- Dynamic balance updates based on selected token
- Improved error handling

### 6. Component Integration

**Files Modified**:
- `bazar/src/views/Asset/AssetAction/AssetActionMarket/AssetActionMarketOrders/AssetActionMarketOrders.tsx`
- `bazar/src/views/Asset/index.tsx`
- `bazar/src/api/collections.ts`
- `bazar/src/components/organisms/ActivityTable/ActivityTable.tsx`
- `bazar/src/wallet/WalletConnect/WalletConnect.tsx`
- `bazar-studio/src/components/organisms/CollectionsTable/CollectionsTable.tsx`

**Changes**:
- Replaced hardcoded `AO.defaultToken` with `tokenProvider.selectedToken.id`
- Added TokenSelector component to buy interfaces
- Updated order creation to use selected token
- Enhanced balance checking logic

### 7. Language Support

**Files Modified**:
- `bazar/src/helpers/language.ts`
- `bazar-studio/src/helpers/language.ts`

**New Language Labels**:
```typescript
tradeWander: `Trade WANDER`,
transferWander: `Transfer WANDER`,
selectToken: `Select Token`,
tokenSelection: `Token Selection`,
insufficientTokenBalance: `Insufficient token balance`,
tokenValidationError: `Token validation error`,
invalidTokenSelection: `Invalid token selection`,
```

### 8. Token Validation

**Files Modified**:
- `bazar/src/views/Asset/AssetAction/AssetActionMarket/AssetActionMarketOrders/AssetActionMarketOrders.tsx`
- `bazar-studio/src/components/organisms/CollectionsTable/CollectionsTable.tsx`

**Validation Features**:
- Token existence validation
- Selected token verification
- Error handling with user-friendly messages
- Integration with existing validation flow

## Benefits

### For Users
1. **Flexibility**: Choose from multiple tokens for trading
2. **Better UX**: Visual token selection with logos
3. **Consistency**: Selected token persists across sessions
4. **Transparency**: Clear token information and balances

### For Developers
1. **Maintainability**: Centralized token management
2. **Extensibility**: Easy to add new tokens
3. **Type Safety**: Full TypeScript support
4. **Testing**: Isolated components for easy testing

## Usage Instructions

### For End Users
1. Connect wallet and profile
2. Navigate to asset buy interface
3. Use token selector dropdown to choose preferred token
4. Token selection persists across sessions
5. Balances update automatically for selected token

### For Developers
1. Add new tokens to `TOKEN_REGISTRY` in config
2. Use `useTokenProvider()` hook in components
3. Access selected token via `tokenProvider.selectedToken`
4. Add TokenSelector component where needed

## Testing Checklist

### Functional Testing
- [ ] Token selection persists after page refresh
- [ ] Balance updates when switching tokens
- [ ] Order creation uses selected token
- [ ] Token validation works correctly
- [ ] Error messages display properly
- [ ] Token logos load correctly

### Integration Testing
- [ ] TokenProvider integrates with existing providers
- [ ] Balance fetching works for all tokens
- [ ] Order creation flow works with different tokens
- [ ] Language labels display correctly
- [ ] Responsive design works on all screen sizes

### Edge Cases
- [ ] Invalid token selection handling
- [ ] Network errors during balance fetching
- [ ] Missing token logos fallback
- [ ] localStorage disabled scenarios

## Migration Notes

### Breaking Changes
- None - this is a purely additive feature

### Backward Compatibility
- Default token remains as fallback
- Existing functionality unchanged
- Gradual rollout possible

### Performance Impact
- Minimal - only additional balance fetching
- Cached token data in localStorage
- Optimized re-renders with React.memo

## Future Enhancements

### Planned Features
1. **Token Price Integration**: Real-time price feeds
2. **Token Analytics**: Trading volume, market cap
3. **Custom Token Support**: User-defined tokens
4. **Token Favorites**: Pinned frequently used tokens
5. **Advanced Filtering**: Sort by market cap, volume, etc.

### Technical Improvements
1. **WebSocket Integration**: Real-time balance updates
2. **Token Metadata Caching**: Improved performance
3. **Offline Support**: Cached token data
4. **Multi-language Support**: Additional languages

## File Structure Summary

### New Files Created
```
bazar/src/
├── providers/TokenProvider.tsx
├── components/atoms/TokenSelector/
│   ├── TokenSelector.tsx
│   ├── types.ts
│   ├── styles.ts
│   └── index.ts

bazar-studio/src/
├── providers/TokenProvider.tsx
├── components/atoms/TokenSelector/
│   ├── TokenSelector.tsx
│   ├── types.ts
│   ├── styles.ts
│   └── index.ts
```

### Files Modified
```
bazar/src/
├── helpers/config.ts
├── helpers/language.ts
├── providers/AppProvider.tsx
├── providers/PermawebProvider.tsx
├── providers/ArweaveProvider.tsx
├── views/Asset/AssetAction/AssetActionMarket/AssetActionMarketOrders/AssetActionMarketOrders.tsx
├── views/Asset/index.tsx
├── api/collections.ts
├── components/organisms/ActivityTable/ActivityTable.tsx
└── wallet/WalletConnect/WalletConnect.tsx

bazar-studio/src/
├── helpers/config.ts
├── helpers/language.ts
├── index.tsx
├── providers/PermawebProvider.tsx
├── providers/ArweaveProvider.tsx
└── components/organisms/CollectionsTable/CollectionsTable.tsx
```

## Deployment Notes

### Environment Variables
No new environment variables required - all configuration is in code.

### Build Process
No changes to build process - standard React/TypeScript compilation.

### Deployment Checklist
- [ ] Test token selection in staging environment
- [ ] Verify token logos load correctly
- [ ] Test order creation with different tokens
- [ ] Validate language labels
- [ ] Check responsive design
- [ ] Verify localStorage persistence

## Support and Maintenance

### Monitoring
- Token balance fetching errors
- Token logo loading failures
- User token selection patterns

### Troubleshooting
- Clear localStorage for token reset
- Check network connectivity for balance updates
- Verify token registry configuration

### Updates
- Token registry updates via config changes
- New token additions require logo upload to Arweave
- Language updates via language file modifications 

## Changelog / Implementation Notes

- **2025-07-13:** Updated wAR token logo hash in both `bazar` and `bazar-studio` to `L99jaxRKQKJt9CqoJtPaieGPEhJD3wNhR4iGqc8amXs` for correct logo display.
- **2025-07-13:** Added AO token (process ID and logo: UkS-mdoiG8hcAClhKK8ch4ZhEzla0mCPDOix9hpdSFE) to the token registry in both `bazar` and `bazar-studio` for trading and transfers.
- **2025-07-13:** Created comprehensive TypeScript tests in `bazar/tests/` following the ao-ucm backend testing style to verify token balance fetching, token info retrieval, and order creation with all supported tokens (wAR, PIXL, Wander, AO). 