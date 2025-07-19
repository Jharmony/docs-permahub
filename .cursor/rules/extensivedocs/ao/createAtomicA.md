**How to implement**

See the following implementation details for how to create atomic assets.

```js

try {
	const processSrcFetch = await fetch(getTxEndpoint(AO.assetSrc));
	if (processSrcFetch.ok) {
		processSrc = await processSrcFetch.text();
	}
} catch (e: any) {
	console.error(e);
}

if (processSrc) {
	processSrc = processSrc.replace('[Owner]', `['${permawebProvider.profile.id}']`);
	processSrc = processSrc.replaceAll('<NAME>', title);
	processSrc = processSrc.replaceAll('<TICKER>', 'ATOMIC');
	processSrc = processSrc.replaceAll('<DENOMINATION>', '1');
	processSrc = processSrc.replaceAll('<BALANCE>', balance.toString());
}

const processId = await aos.spawn({
	module: AO.module,
	scheduler: AO.scheduler,
	signer: createDataItemSigner(globalThis.arweaveWallet),
	tags: assetTags,
	data: buffer,
});

let fetchedAssetId: string;
let retryCount: number = 0;
while (!fetchedAssetId) {
	await new Promise((r) => setTimeout(r, 2000));
	const gqlResponse = await getGQLData({
		gateway: GATEWAYS.goldsky,
		ids: [processId],
		tagFilters: null,
		owners: null,
		cursor: null,
		reduxCursor: null,
		cursorObjectKey: null,
	});

	if (gqlResponse && gqlResponse.data.length) {
		console.log(`Fetched transaction`, gqlResponse.data[0].node.id, 0);
		fetchedAssetId = gqlResponse.data[0].node.id;
	} else {
		console.log(`Transaction not found`, processId, 0);
		retryCount++;
		if (retryCount >= 10) {
			throw new Error(`Transaction not found after 10 attempts, contract deployment retries failed`);
		}
	}
}

const evalMessage = await aos.message({
	process: processId,
	signer: createDataItemSigner(globalThis.arweaveWallet),
	tags: [{ name: 'Action', value: 'Eval' }],
	data: processSrc,
});

const evalResult = await aos.result({
	message: evalMessage,
	process: processId,
});
```