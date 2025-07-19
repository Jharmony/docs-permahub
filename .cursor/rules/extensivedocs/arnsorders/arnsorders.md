// Create an ArNS lease order
const leaseOrder = await createOrder(deps, {
    orderbookId: "orderbook123",
    creatorId: "seller123",
    dominantToken: "AR",
    swapToken: "USDC",
    quantity: "1",
    action: "ArNS-Transfer",
    unitPrice: "100",
    arns: {
        name: "myapp",
        type: "lease",
        years: 1,
        undernameLimit: 10
    }
}, callback);

// Create an ArNS permanent purchase order
const permabuyOrder = await createOrder(deps, {
    orderbookId: "orderbook123",
    creatorId: "seller123",
    dominantToken: "AR",
    swapToken: "USDC",
    quantity: "1",
    action: "ArNS-Transfer",
    unitPrice: "1000",
    arns: {
        name: "myapp",
        type: "permabuy",
        undernameLimit: 100
    }
}, callback);