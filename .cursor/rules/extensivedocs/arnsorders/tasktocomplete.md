Based on the codebase structure and the changes needed, let's create a comprehensive plan. I'll break it down into phases:
Phase 1: Contract Updates

Update Orderbook Contract
// Location: ao-ucm/src/ucm.lua
- Add ArNS transfer handling
- Add ArNS ownership verification
- Add ArNS-specific validation

Tasks:
a. Add new message handlers for ArNS transfers
b. Implement ownership verification against AR.IO contract
c. Add validation for ArNS parameters (years, undername limits)
d. Add ArNS transfer execution logic

Phase 2: UI Updates
Create ArNS Order Form Component
// New file: bazar/src/components/organisms/ArNSOrderForm/ArNSOrderForm.tsx
- Add form for creating ArNS orders
- Add validation for ArNS parameters
- Add ArNS type selection (lease/permabuy)

Update Order Display Components
// Update: bazar/src/components/organisms/ActivityTable/ActivityTable.tsx
- Add ArNS-specific activity display
- Add ArNS metadata display

// Update: bazar/src/components/organisms/AssetsTable/AssetsTable.tsx
- Add ArNS listing display
- Add ArNS-specific metadata

Add ArNS Order Validation
// New file: bazar/src/helpers/arnsValidation.ts
- Add client-side validation for ArNS orders
- Add ownership verification helpers

Phase 3: Integration
Update API Layer
// Update: bazar/src/api/index.ts
- Add ArNS-specific API endpoints
- Add ArNS ownership verification

Update Redux Store
// New file: bazar/src/store/arns/actions.ts
// New file: bazar/src/store/arns/reducers.ts
- Add ArNS-specific state management
- Add ArNS order tracking