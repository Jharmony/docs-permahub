/ Regular order (existing functionality remains unchanged)
const regularOrder: OrderCreateType = {
	orderbookId: "123",
	creatorId: "seller123",
	dominantToken: "AR",
	swapToken: "USDC",
	quantity: "100",
	action: "Transfer",
	unitPrice: "0.5"
};

// ArNS lease order
const arnsOrder: OrderCreateType = {
	orderbookId: "123",
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
};