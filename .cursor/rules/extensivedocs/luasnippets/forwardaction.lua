const transferResult = await permaweb.sendMessage({
    processId: PROFILE_ID,
    action: "Run-Action",
    tags: [
      { name: "Action", value: "Run-Action" },
      { name: "ForwardAction", value: "Transfer" },
      { name: "ForwardTo", value: assetId },
      { name: "Target", value: assetId },
      { name: "Recipient", value: bazarProfileId },
      { name: "Quantity", value: "1" },
    ],
    data: {
      Target: assetId,
      Action: "Transfer"
    }
});