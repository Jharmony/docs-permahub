├── .editorconfig
├── .gitignore
├── README.md
├── sdk
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .prettierignore
    ├── bin
    │   ├── index.cjs
    │   └── index.cjs.map
    ├── build.js
    ├── package.json
    ├── src
    │   ├── helpers
    │   │   ├── types.ts
    │   │   └── utils.ts
    │   ├── index.ts
    │   └── services
    │   │   ├── index.ts
    │   │   ├── orderbooks.ts
    │   │   └── orders.ts
    └── tsconfig.json
├── spec.md
├── src
    ├── activity.lua
    ├── bundle_activity_asset.lua
    ├── bundle_activity_collection.lua
    ├── bundle_ucm.lua
    ├── cron.lua
    ├── pixl.lua
    ├── process.lua
    ├── ucm.lua
    └── utils.lua
├── tests
    ├── node
    │   ├── README.md
    │   ├── package.json
    │   ├── src
    │   │   └── index.ts
    │   ├── tsconfig.json
    │   └── tslint.json
    └── tests.lua
└── toolkit
    ├── package.json
    ├── src
        └── index.ts
    ├── tsconfig.json
    └── tslint.json


/.editorconfig:
--------------------------------------------------------------------------------
1 | [*]
2 | max_line_length = 120
3 | indent_style = tab
4 | quote_type = single


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | **.vscode
2 | **package-lock.json
3 | **node_modules
4 | **dist
5 | **wallets
6 | **logs
7 | **.DS_Store**
8 | **.npmrc


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # Universal Content Marketplace (UCM) AO Process
 2 | 
 3 | ## Overview
 4 | 
 5 | The Universal Content Marketplace (UCM) is a protocol built on the permaweb designed to enable trustless exchange of atomic assets. It empowers creators and users to interact, trade, and transact with any form of digital content, from images and music to videos, papers, components, and even applications.
 6 | 
 7 | ## How it works
 8 | 
 9 | The UCM functions by accepting a deposit from a buyer or seller and fulfilling orders based on the swap pair, quantity, and possibly price that are passed along with the deposit. Here is a list of actions that take place to complete a UCM order.
10 | 
11 | 1. A user deposits (transfers) their tokens to the UCM. The user will also have to add additional tags to the **Transfer Message** which are forwarded to the UCM process and will be used to create the order.
12 | 2. The token process issues a **Credit-Notice** to the UCM and a **Debit-Notice** to the user.
13 | 3. The UCM **Credit-Notice Handler** determines if the required tags are present in order to create the order.
14 | 4. The UCM uses the forwarded tags passed to the **Transfer Handler** to submit an order to the orderbook. The order creation input includes the swap pair to execute on, as well as the quantity of tokens and price of tokens if the order is a limit order.
15 | 
16 | #### Additional Tags
17 | 
18 | | Name           | Value        |
19 | | :------------- | :----------- |
20 | | X-Order-Action | Create-Order |
21 | | X-Swap-Token   | SWAP_TOKEN   |
22 | | X-Price        | UNIT_PRICE   |
23 | 
24 | ### Creating orders
25 | 
26 | #### AOS
27 | 
28 | ###### Deposit (Transfer)
29 | 
30 | ```lua
31 | Send({
32 | 	Target = TOKEN_PROCESS,
33 | 	Action = 'Transfer'
34 | 	Tags = {
35 | 		'Recipient' = UCM_PROCESS,
36 | 		'Quantity' = ORDER_QUANTITY,
37 | 		'X-Order-Action' = 'Create-Order'
38 | 		'X-Swap-Token' = SWAP_TOKEN,
39 | 		'X-Price' = UNIT_PRICE,
40 | 		'X-Transfer-Denomination' = TOKEN_DENOMINATION,
41 | 	}
42 | })
43 | ```
44 | 
45 | #### NodeJS
46 | 
47 | ###### Deposit (Transfer)
48 | 
49 | ```js
50 | const response = await messageResults({
51 | 	processId: arProvider.profile.id,
52 | 	action: 'Transfer',
53 | 	wallet: arProvider.wallet,
54 | 	tags: transferTags,
55 | 	data: {
56 | 		Target: dominantToken,
57 | 		Recipient: recipient,
58 | 		Quantity: calculatedQuantity,
59 | 	},
60 | 	responses: ['Transfer-Success', 'Transfer-Error'],
61 | 	handler: 'Create-Order',
62 | });
63 | ```
64 | 
65 | ```js
66 | const response = await message({
67 | 	process: TOKEN_PROCESS,
68 | 	signer: createDataItemSigner(global.window.arweaveWallet),
69 | 	tags: [
70 | 		{ name: 'Action', value: 'Transfer' },
71 | 		{ name: 'Recipient', value: UCM_PROCESS },
72 | 		{ name: 'Quantity', value: ORDER_QUANTITY },
73 | 		{ name: 'X-Order-Action', value: 'Create-Order' },
74 | 		{ name: 'X-Swap-Token', value: SWAP_TOKEN },
75 | 		{ name: 'X-Price', value: ORDER_PRICE },
76 | 		{ name: 'X-Transfer-Denomination', value: TOKEN_DENOMINATION },
77 | 	],
78 | });
79 | ```
80 | 


--------------------------------------------------------------------------------
/sdk/.editorconfig:
--------------------------------------------------------------------------------
1 | [*]
2 | max_line_length = 120
3 | indent_style = tab
4 | quote_type = single


--------------------------------------------------------------------------------
/sdk/.eslintrc.js:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 | 	parser: '@typescript-eslint/parser',
 3 | 	plugins: ['import', '@typescript-eslint', 'simple-import-sort'],
 4 | 	extends: [],
 5 | 	rules: {
 6 | 		'import/no-duplicates': 'error',
 7 | 		'simple-import-sort/imports': 'error',
 8 | 		'simple-import-sort/exports': 'error',
 9 | 	},
10 | 	overrides: [
11 | 		{
12 | 			files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
13 | 			rules: {
14 | 				'simple-import-sort/imports': [
15 | 					'error',
16 | 					{
17 | 						groups: [
18 | 							['^arweave', '^@permaweb/libs', '^@?\\w'],
19 | 							['^@permaweb/arx', '^@permaweb/aoconnect', '^@permaweb/libs', '^@?\\w'],
20 | 							[
21 | 								'^(@|app)(/.*|$)',
22 | 								'^(@|assets)(/.*|$)',
23 | 								'^(@|clients)(/.*|$)',
24 | 								'^(@|components)(/.*|$)',
25 | 								'^(@|filters)(/.*|$)',
26 | 								'^(@|global)(/.*|$)',
27 | 								'^(@|helpers)(/.*|$)',
28 | 								'^(@|hooks)(/.*|$)',
29 | 								'^(@|navigation)(/.*|$)',
30 | 								'^(@|providers)(/.*|$)',
31 | 								'^(@|root)(/.*|$)',
32 | 								'^(@|routes)(/.*|$)',
33 | 								'^(@|search)(/.*|$)',
34 | 								'^(@|store)(/.*|$)',
35 | 								'^(@|views)(/.*|$)',
36 | 								'^(@|wallet)(/.*|$)',
37 | 								'^(@|workers)(/.*|$)',
38 | 								'^(@|wrappers)(/.*|$)',
39 | 							],
40 | 							['^\\u0000'],
41 | 							['^\\.\\.(?!/?$)', '^\\.\\./?
#39;],
42 | 							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?
#39;],
43 | 						],
44 | 					},
45 | 				],
46 | 			},
47 | 		},
48 | 	],
49 | };
50 | 


--------------------------------------------------------------------------------
/sdk/.prettierignore:
--------------------------------------------------------------------------------
1 | dist
2 | build
3 | coverage
4 | 


--------------------------------------------------------------------------------
/sdk/build.js:
--------------------------------------------------------------------------------
 1 | import esbuild from 'esbuild';
 2 | import dtsPlugin from 'esbuild-plugin-d.ts';
 3 | import path from 'path';
 4 | 
 5 | const sharedConfig = {
 6 | 	entryPoints: ['src/index.ts'],
 7 | 	bundle: true,
 8 | 	sourcemap: true,
 9 | 	minify: true,
10 | 	inject: [path.resolve('node_modules/process/browser.js')], // Explicitly inject the process polyfill
11 |   	define: {
12 |     	'process.env.NODE_ENV': JSON.stringify('production'),
13 |   	},
14 | };
15 | 
16 | const buildConfigs = [
17 | 	// Node.js (CJS)
18 | 	{
19 | 		...sharedConfig,
20 | 		outfile: 'dist/index.cjs.js',
21 | 		platform: 'node',
22 | 		format: 'cjs',
23 | 		plugins: [dtsPlugin({ outDir: 'dist/types' })],
24 | 	},
25 | 	// Browser (ESM)
26 | 	{
27 | 		...sharedConfig,
28 | 		outfile: 'dist/index.esm.js',
29 | 		platform: 'browser',
30 | 		format: 'esm',
31 | 		plugins: [dtsPlugin({ outDir: 'dist/types' })],
32 | 	},
33 | ];
34 | 
35 | async function build() {
36 | 	try {
37 | 		await Promise.all(buildConfigs.map(async (config, index) => {
38 | 			console.log(`Building configuration ${index + 1}:`, config.outfile);
39 | 			await esbuild.build(config);
40 | 			console.log(`Finished building configuration ${index + 1}:`, config.outfile);
41 | 		}));
42 | 		console.log('Build complete!');
43 | 	} catch (error) {
44 | 		console.error('Build failed:', error);
45 | 		process.exit(1);
46 | 	}
47 | }
48 | 
49 | build();
50 | 


--------------------------------------------------------------------------------
/sdk/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"name": "@permaweb/ucm",
 3 | 	"version": "0.0.11",
 4 | 	"type": "module",
 5 | 	"main": "dist/index.cjs.js",
 6 | 	"module": "dist/index.esm.js",
 7 | 	"types": "dist/types/index.d.ts",
 8 | 	"description": "",
 9 | 	"files": [
10 | 		"dist"
11 | 	],
12 | 	"keywords": [],
13 | 	"author": "",
14 | 	"license": "ISC",
15 | 	"repository": {
16 | 		"type": "git",
17 | 		"url": "https://github.com/permaweb/ao-ucm.git",
18 | 		"directory": "sdk"
19 | 	},
20 | 	"exports": {
21 | 		".": {
22 | 			"import": "./dist/index.esm.js",
23 | 			"require": "./dist/index.cjs.js"
24 | 		}
25 | 	},
26 | 	"scripts": {
27 | 		"format": "eslint --fix . && npx prettier --write .",
28 | 		"build": "node build.js"
29 | 	},
30 | 	"dependencies": {
31 | 		"@permaweb/libs": "0.0.42",
32 | 		"arweave": "^1.15.5"
33 | 	},
34 | 	"devDependencies": {
35 | 		"@types/node": "^22.10.4",
36 | 		"@typescript-eslint/eslint-plugin": "^5.57.1",
37 | 		"@typescript-eslint/parser": "^5.57.1",
38 | 		"esbuild": "^0.24.2",
39 | 		"esbuild-plugin-d.ts": "^1.3.1",
40 | 		"eslint": "^8.35.0",
41 | 		"eslint-plugin-import": "^2.27.5",
42 | 		"eslint-plugin-simple-import-sort": "^10.0.0",
43 | 		"process": "^0.11.10",
44 | 		"typescript": "^5.7.2"
45 | 	}
46 | }
47 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/types.ts:
--------------------------------------------------------------------------------
 1 | export type DependenciesType = {
 2 | 	ao: any;
 3 | 	signer?: any;
 4 | 	arweave?: any;
 5 | }
 6 | 
 7 | export type OrderbookCreateType = {
 8 | 	assetId: string;
 9 | 	collectionId?: string;
10 | }
11 | 
12 | export type OrderCreateType = {
13 | 	orderbookId: string;
14 | 	creatorId: string;
15 | 	dominantToken: string;
16 | 	swapToken: string;
17 | 	quantity: string;
18 | 	action: 'Transfer' | 'Run-Action';
19 | 	unitPrice?: string;
20 | 	denomination?: string;
21 | }
22 | 
23 | export type OrderCancelType = {
24 | 	orderbookId: string;
25 | 	orderId: string;
26 | 	creatorId: string;
27 | 	dominantToken: string;
28 | 	swapToken: string;
29 | }


--------------------------------------------------------------------------------
/sdk/src/helpers/utils.ts:
--------------------------------------------------------------------------------
 1 | export function checkValidAddress(address: string | null) {
 2 | 	if (!address) return false;
 3 | 	return /^[a-z0-9_-]{43}$/i.test(address);
 4 | }
 5 | 
 6 | export function getTagValue(list: { [key: string]: any }[], name: string): string | null {
 7 | 	for (let i = 0; i < list.length; i++) {
 8 | 		if (list[i]) {
 9 | 			if (list[i]!.name === name) {
10 | 				return list[i]!.value as string;
11 | 			}
12 | 		}
13 | 	}
14 | 	return null;
15 | }
16 | 
17 | export function getTagValueForAction(messages: any[], tagName: string, action: string, defaultValue: string): string {
18 | 	for (const message of messages) {
19 | 		const actionTag = message.Tags.find((tag: any) => tag.name === 'Action' && tag.value === action);
20 | 		if (actionTag) {
21 | 			const messageTag = message.Tags.find((tag: any) => tag.name === tagName);
22 | 			if (messageTag) return messageTag.value;
23 | 		}
24 | 	}
25 | 	return defaultValue;
26 | }
27 | 
28 | export const globalLog = (...args: any[]) => {
29 |     console.log('[@permaweb/ucm]', ...args);
30 | };


--------------------------------------------------------------------------------
/sdk/src/index.ts:
--------------------------------------------------------------------------------
1 | export * from './services';


--------------------------------------------------------------------------------
/sdk/src/services/index.ts:
--------------------------------------------------------------------------------
1 | export * from './orderbooks';
2 | export * from './orders';


--------------------------------------------------------------------------------
/sdk/src/services/orderbooks.ts:
--------------------------------------------------------------------------------
  1 | import { DependenciesType, OrderbookCreateType } from 'helpers/types';
  2 | 
  3 | import Permaweb from '@permaweb/libs';
  4 | import { globalLog } from 'helpers/utils';
  5 | 
  6 | const UCM_ORDERBOOK_PROCESS = 'M9bKMPzl5tN10_NldmFEoZi8lnlzJ47ccU5w321sltM';
  7 | const UCM_ACTIVITY_PROCESS = 'Bb6p68vUQPbZOif8YqE2d4lf9_F7w2mXceVxzOuhOhM';
  8 | 
  9 | export async function createOrderbook(
 10 | 	deps: DependenciesType,
 11 | 	args: OrderbookCreateType,
 12 | 	callback: (args: { processing: boolean, success: boolean, message: string }) => void
 13 | ): Promise<string> {
 14 | 	const validationError = getOrderbookCreationErrorMessage(args);
 15 | 	if (validationError) throw new Error(validationError);
 16 | 
 17 | 	const permaweb = Permaweb.init(deps);
 18 | 
 19 | 	let orderbookId: string | null = null;
 20 | 	try {
 21 | 		globalLog('Creating orderbook process...');
 22 | 		callback({ processing: true, success: false, message: 'Creating asset orderbook process...' });
 23 | 		orderbookId = await permaweb.createProcess({
 24 | 			evalTxId: UCM_ORDERBOOK_PROCESS,
 25 | 			tags: [{ name: 'UCM-Process', value: 'Orderbook' }]
 26 | 		});
 27 | 		globalLog(`Orderbook ID: ${orderbookId}`);
 28 | 
 29 | 		globalLog('Creating activity process...');
 30 | 		callback({ processing: true, success: false, message: 'Creating activity process...' });
 31 | 		const activityId = await permaweb.createProcess({
 32 | 			evalTxId: UCM_ACTIVITY_PROCESS,
 33 | 			tags: [{ name: 'UCM-Process', value: 'Asset-Activity' }]
 34 | 		});
 35 | 		globalLog(`Orderbook Activity ID: ${activityId}`);
 36 | 
 37 | 		globalLog('Setting orderbook in activity...')
 38 | 		callback({ processing: true, success: false, message: 'Setting orderbook in activity...' });
 39 | 		const activityUcmEval = await permaweb.sendMessage({
 40 | 			processId: activityId,
 41 | 			action: 'Eval',
 42 | 			data: `UCM = '${orderbookId}'`,
 43 | 			useRawData: true
 44 | 		});
 45 | 		globalLog(`Activity UCM Eval: ${activityUcmEval}`);
 46 | 
 47 | 		globalLog('Setting activity in orderbook...')
 48 | 		callback({ processing: true, success: false, message: 'Setting activity in orderbook...' });
 49 | 		const ucmActivityEval = await permaweb.sendMessage({
 50 | 			processId: orderbookId,
 51 | 			action: 'Eval',
 52 | 			data: `ACTIVITY_PROCESS = '${activityId}'`,
 53 | 			useRawData: true
 54 | 		});
 55 | 		globalLog(`UCM Activity Eval: ${ucmActivityEval}`);
 56 | 		
 57 | 		if (args.collectionId) {
 58 | 			globalLog('Setting orderbook / activity in collection activity...');
 59 | 			callback({ processing: true, success: false, message: 'Setting orderbook in collection activity...' });
 60 | 			const activityCollectionEval = await permaweb.sendMessage({
 61 | 				processId: activityId,
 62 | 				action: 'Eval',
 63 | 				data: `CollectionId = '${args.collectionId}'`,
 64 | 				useRawData: true
 65 | 			});
 66 | 			const collectionActivityEval = await permaweb.sendMessage({
 67 | 				processId: args.collectionId,
 68 | 				action: 'Update-Collection-Activity',
 69 | 				tags: [
 70 | 					{ name: 'ActivityId', value: activityId },
 71 | 					{ name: 'UpdateType', value: 'Add' },
 72 | 				]
 73 | 			});
 74 | 			globalLog(`Activity Collection Eval: ${activityCollectionEval}`);
 75 | 			globalLog(`Collection Activity Eval: ${collectionActivityEval}`);
 76 | 		}
 77 | 
 78 | 		globalLog('Adding orderbook to asset...');
 79 | 		callback({ processing: true, success: false, message: 'Adding orderbook to asset...' });
 80 | 		const assetEval = await permaweb.sendMessage({
 81 | 			processId: args.assetId,
 82 | 			action: 'Eval',
 83 | 			data: assetOrderbookEval(orderbookId),
 84 | 			useRawData: true
 85 | 		});
 86 | 
 87 | 		globalLog(`Asset Eval: ${assetEval}`);
 88 | 		callback({ processing: false, success: true, message: 'Orderbook created!' });
 89 | 
 90 | 		return orderbookId;
 91 | 	}
 92 | 	catch (e: any) {
 93 | 		const errorMessage = e.message ?? 'Error creating orderbook';
 94 | 		callback({ processing: false, success: false, message: errorMessage });
 95 | 		throw new Error(errorMessage);
 96 | 	}
 97 | }
 98 | 
 99 | const assetOrderbookEval = (orderbookId: string) => {
100 | 	return `
101 | 		local json = require('json')
102 | 
103 | 		if Metadata then
104 | 			Metadata.OrderbookId = '${orderbookId}'
105 | 		else
106 | 			Metadata = {}
107 | 			Metadata.OrderbookId = '${orderbookId}'
108 | 		end
109 | 
110 | 		Handlers.remove('Info')
111 | 		Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
112 | 			local name = Token and Token.Name or Name
113 | 			local ticker = Token and Token.Ticker or Ticker
114 | 			local denomination = Token and Token.Denomination or Denomination
115 | 			local transferable = Token and Token.Transferable or Transferable
116 | 			local orderbookId = Token and Token.OrderbookId or OrderbookId
117 | 			local creator = Token and Token.Creator or Creator
118 | 			local balances = Token and Token.Balances or Balances
119 | 			local totalSupply = Token and Token.TotalSupply or TotalSupply
120 | 
121 | 			local response = {
122 | 				Name = name,
123 | 				Ticker = ticker,
124 | 				Denomination = tostring(denomination),
125 | 				Transferable = transferable or nil,
126 | 				Data = json.encode({
127 | 					Name = name,
128 | 					Ticker = ticker,
129 | 					Denomination = tostring(denomination),
130 | 					Balances = balances,
131 | 					TotalSupply = TotalSupply,
132 | 					Transferable = transferable,
133 | 					Creator = creator,
134 | 					Metadata = Metadata,
135 | 					AuthUsers = AuthUsers or {},
136 |         			IndexRecipients = IndexRecipients or {},
137 | 					DateCreated = tostring(DateCreated),
138 | 					LastUpdate = tostring(LastUpdate)
139 | 				})
140 | 			}
141 | 
142 | 			if msg.reply then
143 | 				msg.reply(response)
144 | 			else
145 | 				response.Target = msg.From
146 | 				Send(response)
147 | 			end
148 | 		end)
149 | 	`;
150 | }
151 | 
152 | function getOrderbookCreationErrorMessage(args: OrderbookCreateType): string | null {
153 | 	if (typeof args !== 'object' || args === null) return 'The provided arguments are invalid or empty.';
154 | 	if (typeof args.assetId !== 'string' || args.assetId.trim() === '') return 'Asset ID is required';
155 | 	return null;
156 | }


--------------------------------------------------------------------------------
/sdk/src/services/orders.ts:
--------------------------------------------------------------------------------
  1 | import Permaweb from '@permaweb/libs';
  2 | 
  3 | import { DependenciesType, OrderCancelType, OrderCreateType } from 'helpers/types';
  4 | import { getTagValue, getTagValueForAction, globalLog } from 'helpers/utils';
  5 | 
  6 | const MAX_RESULT_RETRIES = 1000;
  7 | 
  8 | export async function createOrder(
  9 | 	deps: DependenciesType,
 10 | 	args: OrderCreateType,
 11 | 	callback: (args: { processing: boolean, success: boolean, message: string }) => void
 12 | ): Promise<string> {
 13 | 	const validationError = getOrderCreationErrorMessage(args);
 14 | 	if (validationError) throw new Error(validationError);
 15 | 
 16 | 	const permaweb = Permaweb.init(deps);
 17 | 
 18 | 	try {
 19 | 		const MESSAGE_GROUP_ID = Date.now().toString();
 20 | 
 21 | 		const tags = [
 22 | 			{ name: 'Target', value: args.dominantToken },
 23 | 			{ name: 'ForwardTo', value: args.dominantToken },
 24 | 			{ name: 'ForwardAction', value: 'Transfer' },
 25 | 			{ name: 'Recipient', value: args.orderbookId },
 26 | 			{ name: 'Quantity', value: args.quantity },
 27 | 		];
 28 | 
 29 | 		const forwardedTags = [
 30 | 			{ name: 'X-Order-Action', value: 'Create-Order' },
 31 | 			{ name: 'X-Dominant-Token', value: args.dominantToken },
 32 | 			{ name: 'X-Swap-Token', value: args.swapToken },
 33 | 			{ name: 'X-Group-ID', value: MESSAGE_GROUP_ID },
 34 | 		];
 35 | 
 36 | 		/* Added for legacy profile support */
 37 | 		const data = { Target: args.dominantToken, Action: 'Transfer', Input: {} };
 38 | 
 39 | 		if (args.unitPrice) forwardedTags.push({ name: 'X-Price', value: args.unitPrice.toString() });
 40 | 		if (args.denomination) forwardedTags.push({ name: 'X-Transfer-Denomination', value: args.denomination.toString() });
 41 | 
 42 | 		tags.push(...forwardedTags);
 43 | 
 44 | 		globalLog('Processing order...');
 45 | 		callback({ processing: true, success: false, message: 'Processing your order...' });
 46 | 		
 47 | 		const transferId = await permaweb.sendMessage({
 48 | 			processId: args.creatorId,
 49 | 			action: args.action,
 50 | 			tags: tags,
 51 | 			data: data
 52 | 		});
 53 | 
 54 | 		const successMatch = ['Order-Success'];
 55 | 		const errorMatch = ['Order-Error'];
 56 | 
 57 | 		try {
 58 | 			const messagesByGroupId = await getMatchingMessages(
 59 | 				[args.orderbookId],
 60 | 				MESSAGE_GROUP_ID,
 61 | 				successMatch,
 62 | 				errorMatch,
 63 | 				deps
 64 | 			);
 65 | 
 66 | 			const currentMatchActions = messagesByGroupId
 67 | 				.map((message: any) => getTagValue(message.Tags, 'Action'))
 68 | 				.filter((action): action is string => action !== null);
 69 | 
 70 | 			const isSuccess = successMatch.every(action => currentMatchActions.includes(action));
 71 | 			const isError = errorMatch.every(action => currentMatchActions.includes(action));
 72 | 
 73 | 			if (isSuccess) {
 74 | 				const successMessage = getTagValueForAction(messagesByGroupId, 'Message', 'Order-Success', 'Order created!');
 75 | 				callback({ processing: false, success: true, message: successMessage });
 76 | 			} else if (isError) {
 77 | 				const errorMessage = getTagValueForAction(messagesByGroupId, 'Message', 'Order-Error', 'Order failed');
 78 | 				callback({ processing: false, success: false, message: errorMessage });
 79 | 			} else {
 80 | 				throw new Error('Unexpected state: Order not fully processed.');
 81 | 			}
 82 | 
 83 | 			return getTagValueForAction(messagesByGroupId, 'OrderId', 'Order-Success', transferId);
 84 | 		}
 85 | 		catch (e: any) {
 86 | 			throw new Error(e);
 87 | 		}
 88 | 	} catch (e: any) {
 89 | 		throw new Error(e.message ?? 'Error creating order in UCM');
 90 | 	}
 91 | }
 92 | 
 93 | export async function cancelOrder(
 94 | 	deps: DependenciesType,
 95 | 	args: OrderCancelType,
 96 | 	callback: (args: { processing: boolean, success: boolean, message: string }) => void
 97 | ): Promise<string> {
 98 | 	const validationError = getOrderCancelErrorMessage(args);
 99 | 	if (validationError) throw new Error(validationError);
100 | 
101 | 	const permaweb = Permaweb.init(deps);
102 | 
103 | 	try {
104 | 		const MESSAGE_GROUP_ID = Date.now().toString();
105 | 
106 | 		const tags = [
107 | 			{ name: 'Action', value: 'Run-Action' },
108 | 			{ name: 'ForwardTo', value: args.orderbookId },
109 | 			{ name: 'ForwardAction', value: 'Cancel-Order' },
110 | 		];
111 | 
112 | 		const data = JSON.stringify({
113 | 			Target: args.orderbookId,
114 | 			Action: 'Cancel-Order',
115 | 			Input: {
116 | 				Pair: [args.dominantToken, args.swapToken],
117 | 				OrderTxId: args.orderId,
118 | 				['X-Group-ID']: MESSAGE_GROUP_ID
119 | 			}
120 | 		});
121 | 
122 | 		globalLog('Cancelling order...')
123 | 		callback({ processing: true, success: false, message: 'Cancelling your order...' });
124 | 
125 | 		const cancelOrderId = await permaweb.sendMessage({
126 | 			processId: args.creatorId,
127 | 			action: 'Run-Action',
128 | 			tags: tags,
129 | 			data: data,
130 | 			useRawData: true
131 | 		});
132 | 
133 | 		return cancelOrderId;
134 | 	} catch (e: any) {
135 | 		throw new Error(e.message ?? 'Error cancelling order in UCM');
136 | 	}
137 | }
138 | 
139 | async function getMatchingMessages(
140 | 	processes: string[],
141 | 	groupId: string,
142 | 	successMatch: string[],
143 | 	errorMatch: string[],
144 | 	deps: DependenciesType,
145 | 	maxAttempts: number = MAX_RESULT_RETRIES,
146 | 	delayMs: number = 1000,
147 | ): Promise<string[]> {
148 | 	let currentMatchActions: string[] = [];
149 | 	let attempts = 0;
150 | 
151 | 	function isMatch(currentMatchActions: string[], successMatch: string[], errorMatch: string[]): boolean {
152 | 		const currentSet = new Set(currentMatchActions);
153 | 		const successSet = new Set(successMatch);
154 | 		const errorSet = new Set(errorMatch);
155 | 
156 | 		return (
157 | 			successSet.size === currentSet.size && [...successSet].every((action) => currentSet.has(action)) ||
158 | 			errorSet.size === currentSet.size && [...errorSet].every((action) => currentSet.has(action))
159 | 		);
160 | 	}
161 | 
162 | 	let messagesByGroupId = null;
163 | 
164 | 	do {
165 | 		attempts++;
166 | 		messagesByGroupId = await getMessagesByGroupId(processes, groupId, deps);
167 | 
168 | 		currentMatchActions = messagesByGroupId
169 | 			.map((message: any) => getTagValue(message.Tags, 'Action'))
170 | 			.filter((action): action is string => action !== null);
171 | 
172 | 		globalLog(`Attempt ${attempts} for results...`);
173 | 
174 | 		if (!isMatch(currentMatchActions, successMatch, errorMatch)) {
175 | 			await new Promise((resolve) => setTimeout(resolve, delayMs));
176 | 		}
177 | 	} while (!isMatch(currentMatchActions, successMatch, errorMatch) && attempts < maxAttempts);
178 | 
179 | 	if (!isMatch(currentMatchActions, successMatch, errorMatch)) {
180 | 		throw new Error('Failed to match actions within retry limit.');
181 | 	}
182 | 
183 | 	for (const match of currentMatchActions) {
184 | 		globalLog('Match found:', match);
185 | 	}
186 | 
187 | 	return messagesByGroupId;
188 | }
189 | 
190 | async function getMessagesByGroupId(processes: string[], groupId: string, deps: DependenciesType): Promise<any[]> {
191 | 	const resultsByGroupId = [];
192 | 	for (const process of processes) {
193 | 		const messageResults = await deps.ao.results({
194 | 			process: process,
195 | 			sort: 'DESC',
196 | 			limit: 100,
197 | 		});
198 | 
199 | 		if (messageResults?.edges?.length) {
200 | 			for (const result of messageResults.edges) {
201 | 				if (result.node?.Messages?.length) {
202 | 					for (const message of result.node.Messages) {
203 | 						const messageGroupId = getTagValue(message.Tags, 'X-Group-ID');
204 | 						if (messageGroupId === groupId) resultsByGroupId.push(message);
205 | 					}
206 | 				}
207 | 			}
208 | 		}
209 | 	}
210 | 
211 | 	return resultsByGroupId;
212 | }
213 | 
214 | function getOrderCreationErrorMessage(args: OrderCreateType): string | null {
215 | 	if (typeof args !== 'object' || args === null) return 'The provided arguments are invalid or empty.';
216 | 	if (typeof args.orderbookId !== 'string' || args.orderbookId.trim() === '') return 'Orderbook ID is required';
217 | 	if (typeof args.creatorId !== 'string' || args.creatorId.trim() === '') return 'Profile ID is required';
218 | 	if (typeof args.dominantToken !== 'string' || args.dominantToken.trim() === '') return 'Dominant token is required';
219 | 	if (typeof args.swapToken !== 'string' || args.swapToken.trim() === '') return 'Swap token is required';
220 | 	if (typeof args.quantity !== 'string' || args.quantity.trim() === '') return 'Quantity is required';
221 | 	if ('unitPrice' in args && typeof args.unitPrice !== 'string') return 'Unit price is invalid';
222 | 	if ('denomination' in args && typeof args.denomination !== 'string') return 'Denomination is invalid';
223 | 	return null;
224 | }
225 | 
226 | function getOrderCancelErrorMessage(args: OrderCancelType): string | null {
227 | 	if (typeof args !== 'object' || args === null) return 'The provided arguments are invalid or empty.';
228 | 	if (typeof args.orderbookId !== 'string' || args.orderbookId.trim() === '') return 'Orderbook ID is required';
229 | 	if (typeof args.orderId !== 'string' || args.orderId.trim() === '') return 'Order ID is required';
230 | 	if (typeof args.creatorId !== 'string' || args.creatorId.trim() === '') return 'Profile ID is required';
231 | 	if (typeof args.dominantToken !== 'string' || args.dominantToken.trim() === '') return 'Dominant token is required';
232 | 	if (typeof args.swapToken !== 'string' || args.swapToken.trim() === '') return 'Swap token is required';
233 | 	return null;
234 | }


--------------------------------------------------------------------------------
/sdk/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"compilerOptions": {
 3 | 		"target": "ES2020", // Modern JS target for Node.js and browser compatibility
 4 | 		"module": "ESNext", // Use ESM for compatibility with esbuild
 5 | 		"declaration": true, // Generate type definitions
 6 | 		"declarationDir": "dist/types", // Output directory for type declarations
 7 | 		"outDir": "dist", // Temporary directory for compiled files
 8 | 		"strict": true, // Enable strict type-checking
 9 | 		"esModuleInterop": true, // Allow default imports for CommonJS modules
10 | 		"skipLibCheck": true, // Skip type checks for node_modules
11 | 		"moduleResolution": "node", // Use Node.js-style module resolution
12 | 		"baseUrl": "src",
13 | 		"paths": {
14 | 			"common/*": ["common/*"],
15 | 			"helpers/*": ["helpers/*"],
16 | 			"services/*": ["services/*"]
17 | 		}
18 | 	},
19 | 	"include": ["src/**/*"],
20 | 	"exclude": ["node_modules", "dist"]
21 | }
22 | 


--------------------------------------------------------------------------------
/spec.md:
--------------------------------------------------------------------------------
  1 | # Universal Content Marketplace (UCM)
  2 | 
  3 | **Status:** Draft
  4 | 
  5 | **Version:** 0.0.1
  6 | 
  7 | **Authors:** Nick Juliano (nick@arweave.org)
  8 | 
  9 | ## Introduction
 10 | 
 11 | The **Universal Content Marketplace (UCM)** protocol facilitates the trustless exchange of atomic digital assets on the permaweb. It supports trading between any form of digital content, such as artwork, documents, or media files, using a decentralized order book system. UCM also incentivizes users with **PIXL tokens**, which are distributed based on purchasing activity, including tracked streaks for consecutive purchases.
 12 | 
 13 | This specification describes the UCM's functionality, including order creation, execution, and integration of PIXL token incentives.
 14 | 
 15 | ---
 16 | 
 17 | ### Key Components
 18 | 
 19 | 1. **Atomic Assets**: Unique, indivisible digital items representing content on the permaweb.
 20 | 2. **PIXL Token**: A reward token that incentivizes purchasing activity within UCM.
 21 | 3. **Order Book**: The data structure that stores active buy and sell orders for trading assets.
 22 | 4. **Buy Streaks**: A mechanism that tracks users' consecutive daily purchases, rewarding them with PIXL tokens.
 23 | 5. **Swap Token**: A token used in exchange for atomic assets. The default swap token is defined as `DEFAULT_SWAP_TOKEN`.
 24 | 
 25 | ---
 26 | 
 27 | ### Core Data Structures
 28 | 
 29 | #### 1. **Order Book Entry**
 30 | Each pair of tokens traded is associated with an order book entry containing multiple orders.
 31 | 
 32 | ```lua
 33 | Orderbook = {
 34 |     Pair = [TokenId, TokenId],
 35 |     Orders = {
 36 |         Id,
 37 |         Creator,
 38 |         Quantity,
 39 |         OriginalQuantity,
 40 |         Token,
 41 |         DateCreated,
 42 |         Price? (optional for market orders)
 43 |     }[]
 44 | }[]
 45 | ```
 46 | 
 47 | #### 2. **Order**
 48 | Each order represents a user's intent to buy or sell a specific quantity of atomic assets at a certain price (limit orders) or at the market price (market orders).
 49 | 
 50 | ---
 51 | 
 52 | ### Functions
 53 | 
 54 | #### 1. **getPairIndex**
 55 | Finds the index of the token pair in the order book. This allows the system to efficiently look up and manage pairs of assets being traded.
 56 | 
 57 | #### 2. **createOrder**
 58 | Handles the creation of both market and limit orders. It:
 59 | - Validates the token pair and ensures the quantities and prices are positive integers.
 60 | - Executes the order by finding matches in the order book, fulfilling it as much as possible.
 61 | - Updates the order book with any remaining quantity from the order (in the case of limit orders).
 62 | - Notifies the creator about the success or failure of the order.
 63 | - Records matches and updates the executed orders list.
 64 | 
 65 | #### 3. **handleError**
 66 | Handles error reporting and, if applicable, refunds the sender’s tokens in case of an invalid transaction.
 67 | 
 68 | #### 4. **executeBuyback**
 69 | This feature enables the automatic execution of PIXL token buybacks when there is sufficient quantity available in the order book for the `PIXL_PROCESS`.
 70 | 
 71 | ---
 72 | 
 73 | ### Order Types
 74 | 
 75 | - **Market Orders**: Executed at the best available price in the order book. The protocol attempts to fill the entire order quantity based on existing limit orders.
 76 | - **Limit Orders**: Executed only if the market price meets the user's specified price. Any remaining unfilled quantity is added to the order book.
 77 | 
 78 | ### Incentives and Tracking
 79 | 
 80 | #### 1. **PIXL Token Incentives**
 81 | When users purchase atomic assets, they are eligible to receive **PIXL tokens**. The system tracks buy streaks, which are awarded for consecutive daily purchases. Buy streaks are calculated by sending a request to the PIXL process during the order execution phase.
 82 | 
 83 | #### 2. **Volume-Weighted Average Price (VWAP)**
 84 | For every set of matched orders, the **VWAP** is computed and stored for reference. This provides a clear view of the average price of traded assets over time.
 85 | 
 86 | ---
 87 | 
 88 | ### Processes
 89 | 
 90 | #### 1. **ACTIVITY_PROCESS**
 91 | Handles updating of executed orders, logging them with their relevant details (such as quantity, price, and involved parties).
 92 | 
 93 | #### 2. **PIXL_PROCESS**
 94 | Performs the calculation of buy streaks and manages the allocation of PIXL tokens to buyers based on their activity.
 95 | 
 96 | ---
 97 | 
 98 | ### Example Workflow
 99 | 
100 | 1. **Order Creation**:
101 |    - A user creates a new order to buy or sell an atomic asset.
102 |    - The system checks for matching orders in the order book.
103 |    - If there is a match, the order is fulfilled, and tokens are transferred between buyer and seller.
104 |    - If there are no matching orders, the system adds the order to the order book (for limit orders).
105 | 
106 | 2. **Order Matching**:
107 |    - The order book matches the buy and sell orders, prioritizing those with the most favorable prices.
108 |    - For market orders, the entire available quantity is filled as long as there are sufficient assets available in the order book.
109 | 
110 | 3. **PIXL Token Reward**:
111 |    - When an order is executed, the system calculates whether the user has maintained a buy streak.
112 |    - If eligible, the user receives PIXL tokens as a reward for consistent activity.
113 | 
114 | ---
115 | 
116 | ### Fees
117 | 
118 | UCM captures a 0.5% fee. If the trade involves the $wAR token, the protocol purchases PIXL with the fee. It buys available orders, and if no “Sell” orders exist, it initiates a “Buy” order via a reverse Dutch auction. PIXL tokens received from these purchases are burned. The higher the trading volumes and marketplace fees, the more tokens are bought and burned.
119 | 
120 | ---
121 | 
122 | ### Error Handling
123 | 
124 | Errors in the system (such as invalid token pairs, insufficient quantities, or pricing issues) are caught by the `handleError` function, which returns any necessary tokens to the user and logs the error for further analysis.
125 | 
126 | ---
127 | 
128 | ### Conclusion
129 | 
130 | The Universal Content Marketplace (UCM) protocol is a decentralized marketplace built on the permaweb, enabling users to trade atomic assets while incentivizing participation through the PIXL token. Its robust order book system supports both market and limit orders, ensuring efficient and trustless exchanges of digital assets.


--------------------------------------------------------------------------------
/src/activity.lua:
--------------------------------------------------------------------------------
  1 | local bint = require('.bint')(256)
  2 | local json = require('json')
  3 | 
  4 | local utils = require('utils')
  5 | 
  6 | UCM_PROCESS = '<UCM_PROCESS>'
  7 | 
  8 | if not ListedOrders then ListedOrders = {} end
  9 | if not ExecutedOrders then ExecutedOrders = {} end
 10 | if not CancelledOrders then CancelledOrders = {} end
 11 | if not SalesByAddress then SalesByAddress = {} end
 12 | if not PurchasesByAddress then PurchasesByAddress = {} end
 13 | 
 14 | -- Read activity
 15 | Handlers.add('Get-Activity', Handlers.utils.hasMatchingTag('Action', 'Get-Activity'), function(msg)
 16 | 	local decodeCheck, data = utils.decodeMessageData(msg.Data)
 17 | 
 18 | 	if not decodeCheck then
 19 | 		ao.send({
 20 | 			Target = msg.From,
 21 | 			Action = 'Input-Error'
 22 | 		})
 23 | 		return
 24 | 	end
 25 | 
 26 | 	local filteredListedOrders = {}
 27 | 	local filteredExecutedOrders = {}
 28 | 	local filteredCancelledOrders = {}
 29 | 
 30 | 	local function filterOrders(orders, assetIdsSet, owner, startDate, endDate)
 31 | 		local filteredOrders = {}
 32 | 		for _, order in ipairs(orders) do
 33 | 			local isAssetMatch = not assetIdsSet or assetIdsSet[order.DominantToken]
 34 | 			local isOwnerMatch = not owner or order.Sender == owner or order.Receiver == owner
 35 | 
 36 | 			local isDateMatch = true
 37 | 			if order.Timestamp and (startDate or endDate) then
 38 | 				local orderDate = bint(order.Timestamp)
 39 | 
 40 | 				if startDate then startDate = bint(startDate) end
 41 | 				if endDate then endDate = bint(endDate) end
 42 | 
 43 | 				if startDate and orderDate < startDate then
 44 | 					isDateMatch = false
 45 | 				end
 46 | 				if endDate and orderDate > endDate then
 47 | 					isDateMatch = false
 48 | 				end
 49 | 			end
 50 | 
 51 | 			if isAssetMatch and isOwnerMatch and isDateMatch then
 52 | 				table.insert(filteredOrders, order)
 53 | 			end
 54 | 		end
 55 | 		return filteredOrders
 56 | 	end
 57 | 
 58 | 	local assetIdsSet = nil
 59 | 	if data.AssetIds and #data.AssetIds > 0 then
 60 | 		assetIdsSet = {}
 61 | 		for _, assetId in ipairs(data.AssetIds) do
 62 | 			assetIdsSet[assetId] = true
 63 | 		end
 64 | 	end
 65 | 
 66 | 	local startDate = nil
 67 | 	local endDate = nil
 68 | 	if data.StartDate then startDate = data.StartDate end
 69 | 	if data.EndDate then endDate = data.EndDate end
 70 | 
 71 | 	filteredListedOrders = filterOrders(ListedOrders, assetIdsSet, data.Address, startDate, endDate)
 72 | 	filteredExecutedOrders = filterOrders(ExecutedOrders, assetIdsSet, data.Address, startDate, endDate)
 73 | 	filteredCancelledOrders = filterOrders(CancelledOrders, assetIdsSet, data.Address, startDate, endDate)
 74 | 
 75 | 	ao.send({
 76 | 		Target = msg.From,
 77 | 		Action = 'Read-Success',
 78 | 		Data = json.encode({
 79 | 			ListedOrders = filteredListedOrders,
 80 | 			ExecutedOrders = filteredExecutedOrders,
 81 | 			CancelledOrders = filteredCancelledOrders
 82 | 		})
 83 | 	})
 84 | end)
 85 | 
 86 | -- Read order counts by address
 87 | Handlers.add('Get-Order-Counts-By-Address', Handlers.utils.hasMatchingTag('Action', 'Get-Order-Counts-By-Address'),
 88 | 	function(msg)
 89 | 		local salesByAddress = SalesByAddress
 90 | 		local purchasesByAddress = PurchasesByAddress
 91 | 
 92 | 		if msg.Tags.Count then
 93 | 			local function getTopN(data, n)
 94 | 				local sortedData = {}
 95 | 				for k, v in pairs(data) do
 96 | 					table.insert(sortedData, { key = k, value = v })
 97 | 				end
 98 | 				table.sort(sortedData, function(a, b) return a.value > b.value end)
 99 | 				local topN = {}
100 | 				for i = 1, n do
101 | 					topN[sortedData[i].key] = sortedData[i].value
102 | 				end
103 | 				return topN
104 | 			end
105 | 
106 | 			salesByAddress = getTopN(SalesByAddress, msg.Tags.Count)
107 | 			purchasesByAddress = getTopN(PurchasesByAddress, msg.Tags.Count)
108 | 		end
109 | 
110 | 		ao.send({
111 | 			Target = msg.From,
112 | 			Action = 'Read-Success',
113 | 			Data = json.encode({
114 | 				SalesByAddress = salesByAddress,
115 | 				PurchasesByAddress = purchasesByAddress
116 | 			})
117 | 		})
118 | 	end)
119 | 
120 | Handlers.add('Get-Sales-By-Address', Handlers.utils.hasMatchingTag('Action', 'Get-Sales-By-Address'), function(msg)
121 | 	ao.send({
122 | 		Target = msg.From,
123 | 		Action = 'Read-Success',
124 | 		Data = json.encode({
125 | 			SalesByAddress = SalesByAddress
126 | 		})
127 | 	})
128 | end)
129 | 
130 | Handlers.add('Update-Executed-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Executed-Orders'),
131 | 	function(msg)
132 | 		if msg.From ~= UCM_PROCESS then
133 | 			return
134 | 		end
135 | 
136 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
137 | 
138 | 		if not decodeCheck or not data.Order then
139 | 			return
140 | 		end
141 | 
142 | 		table.insert(ExecutedOrders, {
143 | 			OrderId = data.Order.MatchId or data.Order.Id,
144 | 			DominantToken = data.Order.DominantToken,
145 | 			SwapToken = data.Order.SwapToken,
146 | 			Sender = data.Order.Sender,
147 | 			Receiver = data.Order.Receiver,
148 | 			Quantity = data.Order.Quantity,
149 | 			Price = data.Order.Price,
150 | 			Timestamp = data.Order.Timestamp
151 | 		})
152 | 
153 | 		if not SalesByAddress[data.Order.Sender] then
154 | 			SalesByAddress[data.Order.Sender] = 0
155 | 		end
156 | 		SalesByAddress[data.Order.Sender] = SalesByAddress[data.Order.Sender] + 1
157 | 
158 | 		if not PurchasesByAddress[data.Order.Receiver] then
159 | 			PurchasesByAddress[data.Order.Receiver] = 0
160 | 		end
161 | 		PurchasesByAddress[data.Order.Receiver] = PurchasesByAddress[data.Order.Receiver] + 1
162 | 	end)
163 | 
164 | Handlers.add('Update-Listed-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Listed-Orders'),
165 | 	function(msg)
166 | 		if msg.From ~= UCM_PROCESS then
167 | 			return
168 | 		end
169 | 
170 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
171 | 
172 | 		if not decodeCheck or not data.Order then
173 | 			return
174 | 		end
175 | 
176 | 		table.insert(ListedOrders, {
177 | 			OrderId = data.Order.Id,
178 | 			DominantToken = data.Order.DominantToken,
179 | 			SwapToken = data.Order.SwapToken,
180 | 			Sender = data.Order.Sender,
181 | 			Receiver = nil,
182 | 			Quantity = data.Order.Quantity,
183 | 			Price = data.Order.Price,
184 | 			Timestamp = data.Order.Timestamp
185 | 		})
186 | 	end)
187 | 
188 | Handlers.add('Update-Cancelled-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Cancelled-Orders'),
189 | 	function(msg)
190 | 		if msg.From ~= UCM_PROCESS then
191 | 			return
192 | 		end
193 | 
194 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
195 | 
196 | 		if not decodeCheck or not data.Order then
197 | 			return
198 | 		end
199 | 
200 | 		table.insert(CancelledOrders, {
201 | 			OrderId = data.Order.Id,
202 | 			DominantToken = data.Order.DominantToken,
203 | 			SwapToken = data.Order.SwapToken,
204 | 			Sender = data.Order.Sender,
205 | 			Receiver = nil,
206 | 			Quantity = data.Order.Quantity,
207 | 			Price = data.Order.Price,
208 | 			Timestamp = data.Order.Timestamp
209 | 		})
210 | 	end)
211 | 
212 | Handlers.add('Get-UCM-Purchase-Amount', Handlers.utils.hasMatchingTag('Action', 'Get-UCM-Purchase-Amount'),
213 | 	function(msg)
214 | 		local totalBurnAmount = bint(0)
215 | 		for _, order in ipairs(ExecutedOrders) do
216 | 			if order.Receiver == UCM_PROCESS then
217 | 				totalBurnAmount = totalBurnAmount + bint(order.Quantity)
218 | 			end
219 | 		end
220 | 
221 | 		ao.send({
222 | 			Target = msg.From,
223 | 			Action = 'UCM-Purchase-Amount-Notice',
224 | 			BurnAmount = tostring(totalBurnAmount)
225 | 		})
226 | 	end)
227 | 
228 | Handlers.add('Get-Volume', Handlers.utils.hasMatchingTag('Action', 'Get-Volume'),
229 | 	function(msg)
230 | 		local function validNumber(value)
231 | 			return type(value) == 'number' or (type(value) == 'string' and tonumber(value) ~= nil)
232 | 		end
233 | 
234 | 		local totalVolume = bint(0)
235 | 		for _, order in ipairs(ExecutedOrders) do
236 | 			if order.Receiver and order.Quantity and validNumber(order.Quantity) and order.Price and validNumber(order.Price) then
237 | 				local price = bint(math.floor(order.Price)) // bint(1000000000000)
238 | 
239 | 				local quantity = bint(math.floor(order.Quantity))
240 | 				if order.DominantToken == 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo' then
241 | 					quantity = quantity // bint(1000000)
242 | 				end
243 | 				if order.DominantToken == 'pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY' then
244 | 					quantity = quantity // bint(1000000000000)
245 | 				end
246 | 				if order.DominantToken == 'Btm_9_fvwb7eXbQ2VswA4V19HxYWnFsYRB4gIl3Dahw' then
247 | 					quantity = quantity // bint(1000000000000)
248 | 				end
249 | 
250 | 				totalVolume = totalVolume + quantity * price
251 | 			end
252 | 		end
253 | 
254 | 		print('Total Volume: ' .. tostring(totalVolume))
255 | 
256 | 		ao.send({
257 | 			Target = msg.From,
258 | 			Action = 'Volume-Notice',
259 | 			Volume = tostring(totalVolume)
260 | 		})
261 | 	end)
262 | 
263 | Handlers.add('Get-Most-Traded-Tokens', Handlers.utils.hasMatchingTag('Action', 'Get-Most-Traded-Tokens'),
264 | 	function(msg)
265 | 		local tokenVolumes = {}
266 | 
267 | 		for _, order in ipairs(ExecutedOrders) do
268 | 			if order.DominantToken and order.Quantity and type(order.Quantity) == 'string' then
269 | 				local quantity = bint(math.floor(order.Quantity))
270 | 				tokenVolumes[order.DominantToken] = (tokenVolumes[order.DominantToken] or bint(0)) + quantity
271 | 			end
272 | 		end
273 | 
274 | 		local sortedTokens = {}
275 | 		for token, volume in pairs(tokenVolumes) do
276 | 			table.insert(sortedTokens, { token = token, volume = volume })
277 | 		end
278 | 
279 | 		table.sort(sortedTokens, function(a, b) return a.volume > b.volume end)
280 | 
281 | 		local topN = tonumber(msg.Tags.Count) or 10
282 | 		local result = {}
283 | 		for i = 1, math.min(topN, #sortedTokens) do
284 | 			result[i] = {
285 | 				Token = sortedTokens[i].token,
286 | 				Volume = tostring(sortedTokens[i].volume)
287 | 			}
288 | 		end
289 | 
290 | 		ao.send({
291 | 			Target = msg.From,
292 | 			Action = 'Most-Traded-Tokens-Result',
293 | 			Data = json.encode(result)
294 | 		})
295 | 	end)
296 | 
297 | Handlers.add('Get-Activity-Lengths', Handlers.utils.hasMatchingTag('Action', 'Get-Activity-Lengths'), function(msg)
298 | 	local function countTableEntries(tbl)
299 | 		local count = 0
300 | 		for _ in pairs(tbl) do
301 | 			count = count + 1
302 | 		end
303 | 		return count
304 | 	end
305 | 
306 | 	ao.send({
307 | 		Target = msg.From,
308 | 		Action = 'Table-Lengths-Result',
309 | 		Data = json.encode({
310 | 			ListedOrders = #ListedOrders,
311 | 			ExecutedOrders = #ExecutedOrders,
312 | 			CancelledOrders = #CancelledOrders,
313 | 			SalesByAddress = countTableEntries(SalesByAddress),
314 | 			PurchasesByAddress = countTableEntries(PurchasesByAddress)
315 | 		})
316 | 	})
317 | end)
318 | 
319 | Handlers.add('Migrate-Activity-Dryrun', Handlers.utils.hasMatchingTag('Action', 'Migrate-Activity-Dryrun'), function(msg)
320 | 	local orderTable = {}
321 | 	local orderType = msg.Tags['Order-Type']
322 | 	local stepBy = tonumber(msg.Tags['Step-By'])
323 | 	local ordersToUse
324 | 	if orderType == 'ListedOrders' then
325 | 		orderTable = table.move(
326 | 			ListedOrders,
327 | 			tonumber(msg.Tags.StartIndex),
328 | 			tonumber(msg.Tags.StartIndex) + stepBy,
329 | 			1,
330 | 			orderTable
331 | 		)
332 | 	elseif orderType == 'ExecutedOrders' then
333 | 		orderTable = table.move(
334 | 			ExecutedOrders,
335 | 			tonumber(msg.Tags.StartIndex),
336 | 			tonumber(msg.Tags.StartIndex) + stepBy,
337 | 			1,
338 | 			orderTable
339 | 		)
340 | 	elseif orderType == 'CancelledOrders' then
341 | 		orderTable = table.move(
342 | 			CancelledOrders,
343 | 			tonumber(msg.Tags.StartIndex),
344 | 			tonumber(msg.Tags.StartIndex) + stepBy,
345 | 			1,
346 | 			orderTable
347 | 		)
348 | 	else
349 | 		print('Invalid Order-Type: ' .. orderType)
350 | 		return
351 | 	end
352 | end)
353 | 
354 | Handlers.add('Migrate-Activity', Handlers.utils.hasMatchingTag('Action', 'Migrate-Activity'), function(msg)
355 | 	if msg.From ~= ao.id and msg.From ~= Owner then return end
356 | 	print('Starting migration process...')
357 | 
358 | 	local function sendBatch(orders, orderType, startIndex)
359 | 		local batch = {}
360 | 
361 | 		for i = startIndex, math.min(startIndex + 29, #orders) do
362 | 			table.insert(batch, {
363 | 				OrderId = orders[i].OrderId or '',
364 | 				DominantToken = orders[i].DominantToken or '',
365 | 				SwapToken = orders[i].SwapToken or '',
366 | 				Sender = orders[i].Sender or '',
367 | 				Receiver = orders[i].Receiver or nil,
368 | 				Quantity = orders[i].Quantity and tostring(orders[i].Quantity) or '0',
369 | 				Price = orders[i].Price and tostring(orders[i].Price) or '0',
370 | 				Timestamp = orders[i].Timestamp or ''
371 | 			})
372 | 		end
373 | 
374 | 		if #batch > 0 then
375 | 			print('Sending ' .. orderType .. ' Batch: ' .. #batch .. ' orders starting at index ' .. startIndex)
376 | 
377 | 			local success, encoded = pcall(json.encode, batch)
378 | 			if not success then
379 | 				print('Failed to encode batch: ' .. tostring(encoded))
380 | 				return
381 | 			end
382 | 
383 | 			ao.send({
384 | 				Target = '7_psKu3QHwzc2PFCJk2lEwyitLJbz6Vj7hOcltOulj4',
385 | 				Action = 'Migrate-Activity-Batch',
386 | 				Tags = {
387 | 					['Order-Type'] = orderType,
388 | 					['Start-Index'] = tostring(startIndex)
389 | 				},
390 | 				Data = encoded
391 | 			})
392 | 		end
393 | 	end
394 | 
395 | 	local orderType = msg.Tags['Order-Type']
396 | 	if not orderType then
397 | 		print('No Order-Type specified in message tags')
398 | 		return
399 | 	end
400 | 
401 | 	local orderTable
402 | 	if orderType == 'ListedOrders' then
403 | 		orderTable = ListedOrders
404 | 	elseif orderType == 'ExecutedOrders' then
405 | 		orderTable = ExecutedOrders
406 | 	elseif orderType == 'CancelledOrders' then
407 | 		orderTable = CancelledOrders
408 | 	else
409 | 		print('Invalid Order-Type: ' .. orderType)
410 | 		return
411 | 	end
412 | 
413 | 	print('Starting ' .. orderType .. 'Orders migration (total: ' .. #orderTable .. ')')
414 | 	sendBatch(orderTable, orderType, tonumber(msg.Tags.StartIndex))
415 | 	print('Migration initiation completed')
416 | end)
417 | 
418 | Handlers.add('Migrate-Activity-Batch', Handlers.utils.hasMatchingTag('Action', 'Migrate-Activity-Batch'), function(msg)
419 | 	if msg.Owner ~= Owner then
420 | 		print('Rejected batch: unauthorized sender')
421 | 		return
422 | 	end
423 | 
424 | 	local decodeCheck, data = utils.decodeMessageData(msg.Data)
425 | 	if not decodeCheck or not data then
426 | 		print('Failed to decode batch data')
427 | 		return
428 | 	end
429 | 
430 | 	local orderType = msg.Tags['Order-Type']
431 | 	local startIndex = tonumber(msg.Tags['Start-Index'])
432 | 	if not orderType or not startIndex then
433 | 		print('Missing required tags in batch message')
434 | 		return
435 | 	end
436 | 
437 | 	print('Processing ' .. orderType .. ' batch: ' .. #data .. ' orders at index ' .. startIndex)
438 | 
439 | 	-- Select the appropriate table based on order type
440 | 	local targetTable
441 | 	if orderType == 'ListedOrders' then
442 | 		targetTable = ListedOrders
443 | 	elseif orderType == 'ExecutedOrders' then
444 | 		targetTable = ExecutedOrders
445 | 	elseif orderType == 'CancelledOrders' then
446 | 		targetTable = CancelledOrders
447 | 	else
448 | 		print('Invalid order type: ' .. orderType)
449 | 		return
450 | 	end
451 | 
452 | 	local existingOrders = {}
453 | 	for _, order in ipairs(targetTable) do
454 | 		if order.OrderId then
455 | 			existingOrders[order.OrderId] = true
456 | 		end
457 | 	end
458 | 
459 | 	-- Insert only non-duplicate orders
460 | 	local insertedCount = 0
461 | 	for _, order in ipairs(data) do
462 | 		if order.OrderId and not existingOrders[order.OrderId] then
463 | 			table.insert(targetTable, order)
464 | 			existingOrders[order.OrderId] = true
465 | 			insertedCount = insertedCount + 1
466 | 		end
467 | 	end
468 | 
469 | 	print('Successfully processed ' .. orderType .. ' batch of ' .. #data .. ' orders')
470 | 
471 | 	ao.send({
472 | 		Target = msg.From,
473 | 		Action = 'Batch-Processed'
474 | 	})
475 | end)
476 | 
477 | Handlers.add('Migrate-Activity-Stats', Handlers.utils.hasMatchingTag('Action', 'Migrate-Activity-Stats'), function(msg)
478 | 	if msg.From ~= '7_psKu3QHwzc2PFCJk2lEwyitLJbz6Vj7hOcltOulj4' then
479 | 		print('Rejected stats: unauthorized sender')
480 | 		return
481 | 	end
482 | 
483 | 	local decodeCheck, stats = utils.decodeMessageData(msg.Data)
484 | 	if not decodeCheck or not stats then
485 | 		print('Failed to decode stats data')
486 | 		return
487 | 	end
488 | 
489 | 	print('Processing address statistics...')
490 | 
491 | 	-- Update the tables
492 | 	if stats.SalesByAddress then
493 | 		SalesByAddress = stats.SalesByAddress
494 | 	end
495 | 
496 | 	if stats.PurchasesByAddress then
497 | 		PurchasesByAddress = stats.PurchasesByAddress
498 | 	end
499 | 
500 | 	print('Successfully processed address statistics')
501 | end)
502 | 


--------------------------------------------------------------------------------
/src/bundle_activity_asset.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | local bint = require('.bint')(256)
  3 | 
  4 | MAX_ORDERS = 1000
  5 | 
  6 | UNSET_UCM = '<UCM_PROCESS>'
  7 | UNSET_COLLECTION = '<COLLECTION_PROCESS>'
  8 | 
  9 | UCM = UCM or UNSET_UCM
 10 | CollectionId = CollectionId or UNSET_COLLECTION
 11 | 
 12 | if not ListedOrders then ListedOrders = {} end
 13 | if not ExecutedOrders then ExecutedOrders = {} end
 14 | if not CancelledOrders then CancelledOrders = {} end
 15 | if not SalesByAddress then SalesByAddress = {} end
 16 | if not PurchasesByAddress then PurchasesByAddress = {} end
 17 | if not TotalVolume then TotalVolume = {} end
 18 | 
 19 | local utils = {}
 20 | 
 21 | function utils.capOrders(orderTable)
 22 | 	if #orderTable > MAX_ORDERS then
 23 | 		table.remove(orderTable, 1)
 24 | 	end
 25 | end
 26 | 
 27 | function utils.checkValidAddress(address)
 28 | 	if not address or type(address) ~= 'string' then
 29 | 		return false
 30 | 	end
 31 | 
 32 | 	return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
 33 | end
 34 | 
 35 | function utils.checkValidAmount(data)
 36 | 	return bint(data) > bint(0)
 37 | end
 38 | 
 39 | function utils.decodeMessageData(data)
 40 | 	local status, decodedData = pcall(json.decode, data)
 41 | 
 42 | 	if not status or type(decodedData) ~= 'table' then
 43 | 		return false, nil
 44 | 	end
 45 | 
 46 | 	return true, decodedData
 47 | end
 48 | 
 49 | function utils.validatePairData(data)
 50 | 	if type(data) ~= 'table' or #data ~= 2 then
 51 | 		return nil, 'Pair must be a list of exactly two strings - [TokenId, TokenId]'
 52 | 	end
 53 | 
 54 | 	if type(data[1]) ~= 'string' or type(data[2]) ~= 'string' then
 55 | 		return nil, 'Both pair elements must be strings'
 56 | 	end
 57 | 
 58 | 	if not utils.checkValidAddress(data[1]) or not utils.checkValidAddress(data[2]) then
 59 | 		return nil, 'Both pair elements must be valid addresses'
 60 | 	end
 61 | 
 62 | 	if data[1] == data[2] then
 63 | 		return nil, 'Pair addresses cannot be equal'
 64 | 	end
 65 | 
 66 | 	return data
 67 | end
 68 | 
 69 | function utils.calculateSendAmount(amount)
 70 | 	local factor = bint(995)
 71 | 	local divisor = bint(1000)
 72 | 	local sendAmount = (bint(amount) * factor) // divisor
 73 | 	return tostring(sendAmount)
 74 | end
 75 | 
 76 | function utils.calculateFeeAmount(amount)
 77 | 	local factor = bint(5)
 78 | 	local divisor = bint(10000)
 79 | 	local feeAmount = (bint(amount) * factor) // divisor
 80 | 	return tostring(feeAmount)
 81 | end
 82 | 
 83 | function utils.calculateFillAmount(amount)
 84 | 	return tostring(math.floor(tostring(amount)))
 85 | end
 86 | 
 87 | function utils.printTable(t, indent)
 88 | 	local jsonStr = ''
 89 | 	local function serialize(tbl, indentLevel)
 90 | 		local isArray = #tbl > 0
 91 | 		local tab = isArray and '[\n' or '{\n'
 92 | 		local sep = isArray and ',\n' or ',\n'
 93 | 		local endTab = isArray and ']' or '}'
 94 | 		indentLevel = indentLevel + 1
 95 | 
 96 | 		for k, v in pairs(tbl) do
 97 | 			tab = tab .. string.rep('  ', indentLevel)
 98 | 			if not isArray then
 99 | 				tab = tab .. '\'' .. tostring(k) .. '\': '
100 | 			end
101 | 
102 | 			if type(v) == 'table' then
103 | 				tab = tab .. serialize(v, indentLevel) .. sep
104 | 			else
105 | 				if type(v) == 'string' then
106 | 					tab = tab .. '\'' .. tostring(v) .. '\'' .. sep
107 | 				else
108 | 					tab = tab .. tostring(v) .. sep
109 | 				end
110 | 			end
111 | 		end
112 | 
113 | 		if tab:sub(-2) == sep then
114 | 			tab = tab:sub(1, -3) .. '\n'
115 | 		end
116 | 
117 | 		indentLevel = indentLevel - 1
118 | 		tab = tab .. string.rep('  ', indentLevel) .. endTab
119 | 		return tab
120 | 	end
121 | 
122 | 	jsonStr = serialize(t, indent or 0)
123 | 	print(jsonStr)
124 | end
125 | 
126 | function utils.checkTables(t1, t2)
127 | 	if t1 == t2 then return true end
128 | 	if type(t1) ~= 'table' or type(t2) ~= 'table' then return false end
129 | 	for k, v in pairs(t1) do
130 | 		if not utils.checkTables(v, t2[k]) then return false end
131 | 	end
132 | 	for k in pairs(t2) do
133 | 		if t1[k] == nil then return false end
134 | 	end
135 | 	return true
136 | end
137 | 
138 | local testResults = {
139 | 	total = 0,
140 | 	passed = 0,
141 | 	failed = 0,
142 | }
143 | 
144 | function utils.test(description, fn, expected)
145 | 	local colors = {
146 | 		red = '\27[31m',
147 | 		green = '\27[32m',
148 | 		blue = '\27[34m',
149 | 		reset = '\27[0m',
150 | 	}
151 | 
152 | 	testResults.total = testResults.total + 1
153 | 	local testIndex = testResults.total
154 | 
155 | 	print('\n' .. colors.blue .. 'Running test ' .. testIndex .. '... ' .. description .. colors.reset)
156 | 	local status, result = pcall(fn)
157 | 	if not status then
158 | 		testResults.failed = testResults.failed + 1
159 | 		print(colors.red .. 'Failed - ' .. description .. ' - ' .. result .. colors.reset .. '\n')
160 | 	else
161 | 		if utils.checkTables(result, expected) then
162 | 			testResults.passed = testResults.passed + 1
163 | 			print(colors.green .. 'Passed - ' .. description .. colors.reset)
164 | 		else
165 | 			testResults.failed = testResults.failed + 1
166 | 			print(colors.red .. 'Failed - ' .. description .. colors.reset .. '\n')
167 | 			print(colors.red .. 'Expected' .. colors.reset)
168 | 			utils.printTable(expected)
169 | 			print('\n' .. colors.red .. 'Got' .. colors.reset)
170 | 			utils.printTable(result)
171 | 		end
172 | 	end
173 | end
174 | 
175 | function utils.testSummary()
176 | 	local colors = {
177 | 		red = '\27[31m',
178 | 		green = '\27[32m',
179 | 		reset = '\27[0m',
180 | 	}
181 | 
182 | 	print('\nTest Summary')
183 | 	print('Total tests (' .. testResults.total .. ')')
184 | 	print('Result: ' .. testResults.passed .. '/' .. testResults.total .. ' tests passed')
185 | 	if testResults.passed == testResults.total then
186 | 		print(colors.green .. 'All tests passed!' .. colors.reset)
187 | 	else
188 | 		print(colors.green .. 'Tests passed: ' .. testResults.passed .. '/' .. testResults.total .. colors.reset)
189 | 		print(colors.red .. 'Tests failed: ' .. testResults.failed .. '/' .. testResults.total .. colors.reset .. '\n')
190 | 	end
191 | end
192 | 
193 | local function getState()
194 | 	return {
195 | 		ListedOrders = ListedOrders,
196 | 		ExecutedOrders = ExecutedOrders,
197 | 		CancelledOrders = CancelledOrders,
198 | 		SalesByAddress = SalesByAddress,
199 | 		PurchasesByAddress = PurchasesByAddress,
200 | 		TotalVolume = TotalVolume
201 | 	}
202 | end
203 | 
204 | local function syncState()
205 | 	Send({ device = 'patch@1.0', activity = json.encode(getState()) })
206 | end
207 | 
208 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
209 | 	msg.reply({ Data = json.encode(getState()) })
210 | end)
211 | 
212 | Handlers.add('Update-Executed-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Executed-Orders'),
213 | 	function(msg)
214 | 		if msg.From ~= UCM then
215 | 			return
216 | 		end
217 | 
218 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
219 | 
220 | 		if not decodeCheck or not data or not data.Order then
221 | 			return
222 | 		end
223 | 
224 | 		local orderData = {
225 | 			OrderId = data.Order.MatchId or data.Order.Id,
226 | 			DominantToken = data.Order.DominantToken,
227 | 			SwapToken = data.Order.SwapToken,
228 | 			Sender = data.Order.Sender,
229 | 			Receiver = data.Order.Receiver,
230 | 			Quantity = data.Order.Quantity,
231 | 			Price = data.Order.Price,
232 | 			Timestamp = data.Order.Timestamp
233 | 		}
234 | 
235 | 		table.insert(ExecutedOrders, orderData)
236 | 		utils.capOrders(ExecutedOrders)
237 | 
238 | 		if not SalesByAddress[data.Order.Sender] then
239 | 			SalesByAddress[data.Order.Sender] = 0
240 | 		end
241 | 		SalesByAddress[data.Order.Sender] = SalesByAddress[data.Order.Sender] + 1
242 | 
243 | 		if not PurchasesByAddress[data.Order.Receiver] then
244 | 			PurchasesByAddress[data.Order.Receiver] = 0
245 | 		end
246 | 		PurchasesByAddress[data.Order.Receiver] = PurchasesByAddress[data.Order.Receiver] + 1
247 | 
248 | 		local swap = data.Order.SwapToken
249 | 		local quantity = bint(data.Order.Quantity)
250 | 		local price = bint(data.Order.Price)
251 | 		local delta = quantity * price
252 | 
253 | 		local current = bint(TotalVolume[swap] or 0)
254 | 
255 | 		TotalVolume[swap] = tostring(current + delta)
256 | 
257 | 		if CollectionId and CollectionId ~= UNSET_COLLECTION then
258 | 			ao.send({
259 | 				Target = CollectionId,
260 | 				Action = 'Forward-Order',
261 | 				UpdateType = 'Update-Executed-Orders',
262 | 				Data = msg.Data
263 | 			})
264 | 		end
265 | 
266 | 		syncState()
267 | 	end)
268 | 
269 | Handlers.add('Update-Listed-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Listed-Orders'),
270 | 	function(msg)
271 | 		if msg.From ~= UCM then
272 | 			return
273 | 		end
274 | 
275 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
276 | 
277 | 		if not decodeCheck or not data or not data.Order then
278 | 			return
279 | 		end
280 | 
281 | 		local orderData = {
282 | 			OrderId = data.Order.Id,
283 | 			DominantToken = data.Order.DominantToken,
284 | 			SwapToken = data.Order.SwapToken,
285 | 			Sender = data.Order.Sender,
286 | 			Receiver = nil,
287 | 			Quantity = data.Order.Quantity,
288 | 			Price = data.Order.Price,
289 | 			Timestamp = data.Order.Timestamp
290 | 		}
291 | 
292 | 		table.insert(ListedOrders, orderData)
293 | 		utils.capOrders(ListedOrders)
294 | 
295 | 		if CollectionId and CollectionId ~= UNSET_COLLECTION then
296 | 			ao.send({
297 | 				Target = CollectionId,
298 | 				Action = 'Forward-Order',
299 | 				UpdateType = 'Update-Listed-Orders',
300 | 				Data = msg
301 | 					.Data
302 | 			})
303 | 		end
304 | 
305 | 		syncState()
306 | 	end)
307 | 
308 | Handlers.add('Update-Cancelled-Orders', Handlers.utils.hasMatchingTag('Action', 'Update-Cancelled-Orders'),
309 | 	function(msg)
310 | 		if msg.From ~= UCM then
311 | 			return
312 | 		end
313 | 
314 | 		local decodeCheck, data = utils.decodeMessageData(msg.Data)
315 | 
316 | 		if not decodeCheck or not data or not data.Order then
317 | 			return
318 | 		end
319 | 
320 | 		local orderData = {
321 | 			OrderId = data.Order.Id,
322 | 			DominantToken = data.Order.DominantToken,
323 | 			SwapToken = data.Order.SwapToken,
324 | 			Sender = data.Order.Sender,
325 | 			Receiver = nil,
326 | 			Quantity = data.Order.Quantity,
327 | 			Price = data.Order.Price,
328 | 			Timestamp = data.Order.Timestamp
329 | 		}
330 | 
331 | 		table.insert(CancelledOrders, orderData)
332 | 		utils.capOrders(CancelledOrders)
333 | 
334 | 		if CollectionId and CollectionId ~= UNSET_COLLECTION then
335 | 			ao.send({
336 | 				Target = CollectionId,
337 | 				Action = 'Forward-Order',
338 | 				UpdateType = 'Update-Cancelled-Orders',
339 | 				Data = msg
340 | 					.Data
341 | 			})
342 | 		end
343 | 
344 | 		syncState()
345 | 	end)
346 | 
347 | Initialized = Initialized or false
348 | 
349 | if not Initialized then
350 | 	syncState()
351 | 	Initialized = true
352 | end
353 | 


--------------------------------------------------------------------------------
/src/bundle_activity_collection.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | local bint = require('.bint')(256)
  3 | 
  4 | MAX_ORDERS = 1000
  5 | 
  6 | CollectionId = CollectionId or ao.env.Process.Tags.CollectionId
  7 | 
  8 | if not ListedOrders then ListedOrders = {} end
  9 | if not ExecutedOrders then ExecutedOrders = {} end
 10 | if not CancelledOrders then CancelledOrders = {} end
 11 | if not SalesByAddress then SalesByAddress = {} end
 12 | if not PurchasesByAddress then PurchasesByAddress = {} end
 13 | if not TotalVolume then TotalVolume = {} end
 14 | if not CurrentListings then CurrentListings = {} end
 15 | 
 16 | local utils = {}
 17 | 
 18 | function utils.capOrders(orderTable)
 19 | 	if #orderTable > MAX_ORDERS then
 20 | 		table.remove(orderTable, 1)
 21 | 	end
 22 | end
 23 | 
 24 | function utils.checkValidAddress(address)
 25 | 	if not address or type(address) ~= 'string' then
 26 | 		return false
 27 | 	end
 28 | 
 29 | 	return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
 30 | end
 31 | 
 32 | function utils.checkValidAmount(data)
 33 | 	return bint(data) > bint(0)
 34 | end
 35 | 
 36 | function utils.decodeMessageData(data)
 37 | 	local status, decodedData = pcall(json.decode, data)
 38 | 
 39 | 	if not status or type(decodedData) ~= 'table' then
 40 | 		return false, nil
 41 | 	end
 42 | 
 43 | 	return true, decodedData
 44 | end
 45 | 
 46 | function utils.validatePairData(data)
 47 | 	if type(data) ~= 'table' or #data ~= 2 then
 48 | 		return nil, 'Pair must be a list of exactly two strings - [TokenId, TokenId]'
 49 | 	end
 50 | 
 51 | 	if type(data[1]) ~= 'string' or type(data[2]) ~= 'string' then
 52 | 		return nil, 'Both pair elements must be strings'
 53 | 	end
 54 | 
 55 | 	if not utils.checkValidAddress(data[1]) or not utils.checkValidAddress(data[2]) then
 56 | 		return nil, 'Both pair elements must be valid addresses'
 57 | 	end
 58 | 
 59 | 	if data[1] == data[2] then
 60 | 		return nil, 'Pair addresses cannot be equal'
 61 | 	end
 62 | 
 63 | 	return data
 64 | end
 65 | 
 66 | function utils.calculateSendAmount(amount)
 67 | 	local factor = bint(995)
 68 | 	local divisor = bint(1000)
 69 | 	local sendAmount = (bint(amount) * factor) // divisor
 70 | 	return tostring(sendAmount)
 71 | end
 72 | 
 73 | function utils.calculateFeeAmount(amount)
 74 | 	local factor = bint(5)
 75 | 	local divisor = bint(10000)
 76 | 	local feeAmount = (bint(amount) * factor) // divisor
 77 | 	return tostring(feeAmount)
 78 | end
 79 | 
 80 | function utils.calculateFillAmount(amount)
 81 | 	return tostring(math.floor(tostring(amount)))
 82 | end
 83 | 
 84 | function utils.printTable(t, indent)
 85 | 	local jsonStr = ''
 86 | 	local function serialize(tbl, indentLevel)
 87 | 		local isArray = #tbl > 0
 88 | 		local tab = isArray and '[\n' or '{\n'
 89 | 		local sep = isArray and ',\n' or ',\n'
 90 | 		local endTab = isArray and ']' or '}'
 91 | 		indentLevel = indentLevel + 1
 92 | 
 93 | 		for k, v in pairs(tbl) do
 94 | 			tab = tab .. string.rep('  ', indentLevel)
 95 | 			if not isArray then
 96 | 				tab = tab .. '\'' .. tostring(k) .. '\': '
 97 | 			end
 98 | 
 99 | 			if type(v) == 'table' then
100 | 				tab = tab .. serialize(v, indentLevel) .. sep
101 | 			else
102 | 				if type(v) == 'string' then
103 | 					tab = tab .. '\'' .. tostring(v) .. '\'' .. sep
104 | 				else
105 | 					tab = tab .. tostring(v) .. sep
106 | 				end
107 | 			end
108 | 		end
109 | 
110 | 		if tab:sub(-2) == sep then
111 | 			tab = tab:sub(1, -3) .. '\n'
112 | 		end
113 | 
114 | 		indentLevel = indentLevel - 1
115 | 		tab = tab .. string.rep('  ', indentLevel) .. endTab
116 | 		return tab
117 | 	end
118 | 
119 | 	jsonStr = serialize(t, indent or 0)
120 | 	print(jsonStr)
121 | end
122 | 
123 | function utils.checkTables(t1, t2)
124 | 	if t1 == t2 then return true end
125 | 	if type(t1) ~= 'table' or type(t2) ~= 'table' then return false end
126 | 	for k, v in pairs(t1) do
127 | 		if not utils.checkTables(v, t2[k]) then return false end
128 | 	end
129 | 	for k in pairs(t2) do
130 | 		if t1[k] == nil then return false end
131 | 	end
132 | 	return true
133 | end
134 | 
135 | local testResults = {
136 | 	total = 0,
137 | 	passed = 0,
138 | 	failed = 0,
139 | }
140 | 
141 | function utils.test(description, fn, expected)
142 | 	local colors = {
143 | 		red = '\27[31m',
144 | 		green = '\27[32m',
145 | 		blue = '\27[34m',
146 | 		reset = '\27[0m',
147 | 	}
148 | 
149 | 	testResults.total = testResults.total + 1
150 | 	local testIndex = testResults.total
151 | 
152 | 	print('\n' .. colors.blue .. 'Running test ' .. testIndex .. '... ' .. description .. colors.reset)
153 | 	local status, result = pcall(fn)
154 | 	if not status then
155 | 		testResults.failed = testResults.failed + 1
156 | 		print(colors.red .. 'Failed - ' .. description .. ' - ' .. result .. colors.reset .. '\n')
157 | 	else
158 | 		if utils.checkTables(result, expected) then
159 | 			testResults.passed = testResults.passed + 1
160 | 			print(colors.green .. 'Passed - ' .. description .. colors.reset)
161 | 		else
162 | 			testResults.failed = testResults.failed + 1
163 | 			print(colors.red .. 'Failed - ' .. description .. colors.reset .. '\n')
164 | 			print(colors.red .. 'Expected' .. colors.reset)
165 | 			utils.printTable(expected)
166 | 			print('\n' .. colors.red .. 'Got' .. colors.reset)
167 | 			utils.printTable(result)
168 | 		end
169 | 	end
170 | end
171 | 
172 | function utils.testSummary()
173 | 	local colors = {
174 | 		red = '\27[31m',
175 | 		green = '\27[32m',
176 | 		reset = '\27[0m',
177 | 	}
178 | 
179 | 	print('\nTest Summary')
180 | 	print('Total tests (' .. testResults.total .. ')')
181 | 	print('Result: ' .. testResults.passed .. '/' .. testResults.total .. ' tests passed')
182 | 	if testResults.passed == testResults.total then
183 | 		print(colors.green .. 'All tests passed!' .. colors.reset)
184 | 	else
185 | 		print(colors.green .. 'Tests passed: ' .. testResults.passed .. '/' .. testResults.total .. colors.reset)
186 | 		print(colors.red .. 'Tests failed: ' .. testResults.failed .. '/' .. testResults.total .. colors.reset .. '\n')
187 | 	end
188 | end
189 | 
190 | local function getState()
191 | 	return {
192 | 		ListedOrders = ListedOrders,
193 | 		ExecutedOrders = ExecutedOrders,
194 | 		CancelledOrders = CancelledOrders,
195 | 		SalesByAddress = SalesByAddress,
196 | 		PurchasesByAddress = PurchasesByAddress,
197 | 		CurrentListings = CurrentListings,
198 | 		TotalVolume = TotalVolume
199 | 	}
200 | end
201 | 
202 | local function syncState()
203 | 	Send({ device = 'patch@1.0', activity = json.encode(getState()) })
204 | end
205 | 
206 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
207 | 	msg.reply({ Data = json.encode(getState()) })
208 | end)
209 | 
210 | -- Update-Listed-Orders
211 | Handlers.add('Update-Listed-Orders',
212 | 	Handlers.utils.hasMatchingTag('Action', 'Update-Listed-Orders'),
213 | 	function(msg)
214 | 		if msg.From ~= CollectionId then return end
215 | 		local ok, data = utils.decodeMessageData(msg.Data)
216 | 		if not ok or not data or not data.Order then return end
217 | 
218 | 		table.insert(ListedOrders, {
219 | 			OrderId       = data.Order.Id,
220 | 			DominantToken = data.Order.DominantToken,
221 | 			SwapToken     = data.Order.SwapToken,
222 | 			Sender        = data.Order.Sender,
223 | 			Receiver      = nil,
224 | 			Quantity      = data.Order.Quantity,
225 | 			Price         = data.Order.Price,
226 | 			Timestamp     = data.Order.Timestamp,
227 | 		})
228 | 
229 | 		local assetId            = data.Order.DominantToken
230 | 		local swapToken          = data.Order.SwapToken
231 | 		local qtyB               = bint(data.Order.Quantity)
232 | 		local priceB             = bint(data.Order.Price)
233 | 
234 | 		CurrentListings[assetId] = CurrentListings[assetId] or {}
235 | 		local entry              = CurrentListings[assetId][swapToken]
236 | 
237 | 		if entry then
238 | 			local newQty   = bint(entry.quantity) + qtyB
239 | 			local newFloor = bint(entry.floorPrice)
240 | 			if priceB < newFloor then newFloor = priceB end
241 | 
242 | 			entry.quantity   = tostring(newQty)
243 | 			entry.floorPrice = tostring(newFloor)
244 | 		else
245 | 			CurrentListings[assetId][swapToken] = {
246 | 				quantity   = tostring(qtyB),
247 | 				floorPrice = tostring(priceB),
248 | 			}
249 | 		end
250 | 
251 | 		utils.capOrders(ListedOrders)
252 | 
253 | 		syncState()
254 | 	end)
255 | 
256 | -- Update-Executed-Orders
257 | Handlers.add('Update-Executed-Orders',
258 | 	Handlers.utils.hasMatchingTag('Action', 'Update-Executed-Orders'),
259 | 	function(msg)
260 | 		if msg.From ~= CollectionId then return end
261 | 		local ok, data = utils.decodeMessageData(msg.Data)
262 | 		if not ok or not data or not data.Order then return end
263 | 
264 | 		table.insert(ExecutedOrders, {
265 | 			OrderId       = data.Order.MatchId or data.Order.Id,
266 | 			DominantToken = data.Order.DominantToken,
267 | 			SwapToken     = data.Order.SwapToken,
268 | 			Sender        = data.Order.Sender,
269 | 			Receiver      = data.Order.Receiver,
270 | 			Quantity      = data.Order.Quantity,
271 | 			Price         = data.Order.Price,
272 | 			Timestamp     = data.Order.Timestamp,
273 | 		})
274 | 
275 | 		local assetId   = data.Order.DominantToken
276 | 		local swapToken = data.Order.SwapToken
277 | 		local execB     = bint(data.Order.Quantity)
278 | 		local bucket    = CurrentListings[assetId] and CurrentListings[assetId][swapToken]
279 | 
280 | 		if bucket then
281 | 			local rem = bint(bucket.quantity) - execB
282 | 			if rem <= bint(0) then
283 | 				CurrentListings[assetId][swapToken] = nil
284 | 				if next(CurrentListings[assetId]) == nil then
285 | 					CurrentListings[assetId] = nil
286 | 				end
287 | 			else
288 | 				bucket.quantity = tostring(rem)
289 | 			end
290 | 		end
291 | 
292 | 		local swap                              = data.Order.SwapToken
293 | 		local quantity                          = bint(data.Order.Quantity)
294 | 		local price                             = bint(data.Order.Price)
295 | 		local delta                             = quantity * price
296 | 
297 | 		local current                           = bint(TotalVolume[swap] or 0)
298 | 
299 | 		TotalVolume[swap]                       = tostring(current + delta)
300 | 
301 | 		SalesByAddress[data.Order.Sender]       = (SalesByAddress[data.Order.Sender] or 0) + 1
302 | 		PurchasesByAddress[data.Order.Receiver] = (PurchasesByAddress[data.Order.Receiver] or 0) + 1
303 | 
304 | 		utils.capOrders(ExecutedOrders)
305 | 
306 | 		syncState()
307 | 	end)
308 | 
309 | -- Update-Cancelled-Orders
310 | Handlers.add('Update-Cancelled-Orders',
311 | 	Handlers.utils.hasMatchingTag('Action', 'Update-Cancelled-Orders'),
312 | 	function(msg)
313 | 		if msg.From ~= CollectionId then return end
314 | 		local ok, data = utils.decodeMessageData(msg.Data)
315 | 		if not ok or not data or not data.Order then return end
316 | 
317 | 		table.insert(CancelledOrders, {
318 | 			OrderId       = data.Order.Id,
319 | 			DominantToken = data.Order.DominantToken,
320 | 			SwapToken     = data.Order.SwapToken,
321 | 			Sender        = data.Order.Sender,
322 | 			Receiver      = nil,
323 | 			Quantity      = data.Order.Quantity,
324 | 			Price         = data.Order.Price,
325 | 			Timestamp     = data.Order.Timestamp,
326 | 		})
327 | 
328 | 		local assetId   = data.Order.DominantToken
329 | 		local swapToken = data.Order.SwapToken
330 | 		local canB      = bint(data.Order.Quantity)
331 | 		local bucket    = CurrentListings[assetId] and CurrentListings[assetId][swapToken]
332 | 
333 | 		if bucket then
334 | 			local rem = bint(bucket.quantity) - canB
335 | 			if rem <= bint(0) then
336 | 				CurrentListings[assetId][swapToken] = nil
337 | 				if next(CurrentListings[assetId]) == nil then
338 | 					CurrentListings[assetId] = nil
339 | 				end
340 | 			else
341 | 				bucket.quantity = tostring(rem)
342 | 			end
343 | 		end
344 | 
345 | 		utils.capOrders(CancelledOrders)
346 | 
347 | 		syncState()
348 | 	end)
349 | 
350 | Initialized = Initialized or false
351 | 
352 | if not Initialized then
353 | 	syncState()
354 | 	Initialized = true
355 | end


--------------------------------------------------------------------------------
/src/bundle_ucm.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | local bint = require('.bint')(256)
  3 | 
  4 | if Name ~= 'Universal Content Marketplace' then Name = 'Universal Content Marketplace' end
  5 | 
  6 | if not ACTIVITY_PROCESS then ACTIVITY_PROCESS = '<ACTIVITY_PROCESS>' end
  7 | 
  8 | PIXL_PROCESS = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
  9 | DEFAULT_SWAP_TOKEN = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
 10 | 
 11 | -- Orderbook {
 12 | -- 	Pair [TokenId, TokenId],
 13 | -- 	Orders {
 14 | -- 		Id,
 15 | -- 		Creator,
 16 | -- 		Quantity,
 17 | -- 		OriginalQuantity,
 18 | -- 		Token,
 19 | -- 		DateCreated,
 20 | -- 		Price?
 21 | -- 	} []
 22 | -- } []
 23 | 
 24 | if not Orderbook then Orderbook = {} end
 25 | if not BuybackCaptures then BuybackCaptures = {} end
 26 | 
 27 | local utils = {}
 28 | local ucm = {}
 29 | 
 30 | function utils.checkValidAddress(address)
 31 | 	if not address or type(address) ~= 'string' then
 32 | 		return false
 33 | 	end
 34 | 
 35 | 	return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
 36 | end
 37 | 
 38 | function utils.checkValidAmount(data)
 39 | 	return bint(data) > bint(0)
 40 | end
 41 | 
 42 | function utils.decodeMessageData(data)
 43 | 	local status, decodedData = pcall(json.decode, data)
 44 | 
 45 | 	if not status or type(decodedData) ~= 'table' then
 46 | 		return false, nil
 47 | 	end
 48 | 
 49 | 	return true, decodedData
 50 | end
 51 | 
 52 | function utils.validatePairData(data)
 53 | 	if type(data) ~= 'table' or #data ~= 2 then
 54 | 		return nil, 'Pair must be a list of exactly two strings - [TokenId, TokenId]'
 55 | 	end
 56 | 
 57 | 	if type(data[1]) ~= 'string' or type(data[2]) ~= 'string' then
 58 | 		return nil, 'Both pair elements must be strings'
 59 | 	end
 60 | 
 61 | 	if not utils.checkValidAddress(data[1]) or not utils.checkValidAddress(data[2]) then
 62 | 		return nil, 'Both pair elements must be valid addresses'
 63 | 	end
 64 | 
 65 | 	if data[1] == data[2] then
 66 | 		return nil, 'Pair addresses cannot be equal'
 67 | 	end
 68 | 
 69 | 	return data
 70 | end
 71 | 
 72 | function utils.calculateSendAmount(amount)
 73 | 	local factor = bint(995)
 74 | 	local divisor = bint(1000)
 75 | 	local sendAmount = (bint(amount) * factor) // divisor
 76 | 	return tostring(sendAmount)
 77 | end
 78 | 
 79 | function utils.calculateFeeAmount(amount)
 80 | 	local factor = bint(5)
 81 | 	local divisor = bint(10000)
 82 | 	local feeAmount = (bint(amount) * factor) // divisor
 83 | 	return tostring(feeAmount)
 84 | end
 85 | 
 86 | function utils.calculateFillAmount(amount)
 87 | 	return tostring(math.floor(tostring(amount)))
 88 | end
 89 | 
 90 | function utils.printTable(t, indent)
 91 | 	local jsonStr = ''
 92 | 	local function serialize(tbl, indentLevel)
 93 | 		local isArray = #tbl > 0
 94 | 		local tab = isArray and '[\n' or '{\n'
 95 | 		local sep = isArray and ',\n' or ',\n'
 96 | 		local endTab = isArray and ']' or '}'
 97 | 		indentLevel = indentLevel + 1
 98 | 
 99 | 		for k, v in pairs(tbl) do
100 | 			tab = tab .. string.rep('  ', indentLevel)
101 | 			if not isArray then
102 | 				tab = tab .. '\'' .. tostring(k) .. '\': '
103 | 			end
104 | 
105 | 			if type(v) == 'table' then
106 | 				tab = tab .. serialize(v, indentLevel) .. sep
107 | 			else
108 | 				if type(v) == 'string' then
109 | 					tab = tab .. '\'' .. tostring(v) .. '\'' .. sep
110 | 				else
111 | 					tab = tab .. tostring(v) .. sep
112 | 				end
113 | 			end
114 | 		end
115 | 
116 | 		if tab:sub(-2) == sep then
117 | 			tab = tab:sub(1, -3) .. '\n'
118 | 		end
119 | 
120 | 		indentLevel = indentLevel - 1
121 | 		tab = tab .. string.rep('  ', indentLevel) .. endTab
122 | 		return tab
123 | 	end
124 | 
125 | 	jsonStr = serialize(t, indent or 0)
126 | 	print(jsonStr)
127 | end
128 | 
129 | function utils.checkTables(t1, t2)
130 | 	if t1 == t2 then return true end
131 | 	if type(t1) ~= 'table' or type(t2) ~= 'table' then return false end
132 | 	for k, v in pairs(t1) do
133 | 		if not utils.checkTables(v, t2[k]) then return false end
134 | 	end
135 | 	for k in pairs(t2) do
136 | 		if t1[k] == nil then return false end
137 | 	end
138 | 	return true
139 | end
140 | 
141 | local testResults = {
142 | 	total = 0,
143 | 	passed = 0,
144 | 	failed = 0,
145 | }
146 | 
147 | function utils.test(description, fn, expected)
148 | 	local colors = {
149 | 		red = '\27[31m',
150 | 		green = '\27[32m',
151 | 		blue = '\27[34m',
152 | 		reset = '\27[0m',
153 | 	}
154 | 
155 | 	testResults.total = testResults.total + 1
156 | 	local testIndex = testResults.total
157 | 
158 | 	print('\n' .. colors.blue .. 'Running test ' .. testIndex .. '... ' .. description .. colors.reset)
159 | 	local status, result = pcall(fn)
160 | 	if not status then
161 | 		testResults.failed = testResults.failed + 1
162 | 		print(colors.red .. 'Failed - ' .. description .. ' - ' .. result .. colors.reset .. '\n')
163 | 	else
164 | 		if utils.checkTables(result, expected) then
165 | 			testResults.passed = testResults.passed + 1
166 | 			print(colors.green .. 'Passed - ' .. description .. colors.reset)
167 | 		else
168 | 			testResults.failed = testResults.failed + 1
169 | 			print(colors.red .. 'Failed - ' .. description .. colors.reset .. '\n')
170 | 			print(colors.red .. 'Expected' .. colors.reset)
171 | 			utils.printTable(expected)
172 | 			print('\n' .. colors.red .. 'Got' .. colors.reset)
173 | 			utils.printTable(result)
174 | 		end
175 | 	end
176 | end
177 | 
178 | function utils.testSummary()
179 | 	local colors = {
180 | 		red = '\27[31m',
181 | 		green = '\27[32m',
182 | 		reset = '\27[0m',
183 | 	}
184 | 
185 | 	print('\nTest Summary')
186 | 	print('Total tests (' .. testResults.total .. ')')
187 | 	print('Result: ' .. testResults.passed .. '/' .. testResults.total .. ' tests passed')
188 | 	if testResults.passed == testResults.total then
189 | 		print(colors.green .. 'All tests passed!' .. colors.reset)
190 | 	else
191 | 		print(colors.green .. 'Tests passed: ' .. testResults.passed .. '/' .. testResults.total .. colors.reset)
192 | 		print(colors.red .. 'Tests failed: ' .. testResults.failed .. '/' .. testResults.total .. colors.reset .. '\n')
193 | 	end
194 | end
195 | 
196 | local function handleError(args) -- Target, TransferToken, Quantity
197 | 	-- If there is a valid quantity then return the funds
198 | 	if args.TransferToken and args.Quantity and utils.checkValidAmount(args.Quantity) then
199 | 		ao.send({
200 | 			Target = args.TransferToken,
201 | 			Action = 'Transfer',
202 | 			Tags = {
203 | 				Recipient = args.Target,
204 | 				Quantity = tostring(args.Quantity)
205 | 			}
206 | 		})
207 | 	end
208 | 	ao.send({ Target = args.Target, Action = args.Action, Tags = { Status = 'Error', Message = args.Message, ['X-Group-ID'] = args.OrderGroupId } })
209 | end
210 | 
211 | function ucm.getPairIndex(pair)
212 | 	local pairIndex = -1
213 | 
214 | 	for i, existingOrders in ipairs(Orderbook) do
215 | 		if (existingOrders.Pair[1] == pair[1] and existingOrders.Pair[2] == pair[2]) or
216 | 			(existingOrders.Pair[1] == pair[2] and existingOrders.Pair[2] == pair[1]) then
217 | 			pairIndex = i
218 | 		end
219 | 	end
220 | 
221 | 	return pairIndex
222 | end
223 | 
224 | function ucm.createOrder(args)
225 | 	local validPair, pairError = utils.validatePairData({ args.dominantToken, args.swapToken })
226 | 
227 | 	if not validPair then
228 | 		handleError({
229 | 			Target = args.sender,
230 | 			Action = 'Order-Error',
231 | 			Message = pairError or 'Error validating pair',
232 | 			Quantity = args.quantity,
233 | 			TransferToken = nil,
234 | 			OrderGroupId = args.orderGroupId
235 | 		})
236 | 		return
237 | 	end
238 | 
239 | 	local currentToken = validPair[1]
240 | 	local pairIndex = ucm.getPairIndex(validPair)
241 | 
242 | 	if pairIndex == -1 then
243 | 		table.insert(Orderbook, { Pair = validPair, Orders = {} })
244 | 		pairIndex = ucm.getPairIndex(validPair)
245 | 	end
246 | 
247 | 	if not utils.checkValidAmount(args.quantity) then
248 | 		handleError({
249 | 			Target = args.sender,
250 | 			Action = 'Validation-Error',
251 | 			Message = 'Quantity must be an integer greater than zero',
252 | 			Quantity = args.quantity,
253 | 			TransferToken = currentToken,
254 | 			OrderGroupId = args.orderGroupId
255 | 		})
256 | 		return
257 | 	end
258 | 
259 | 	if args.price and not utils.checkValidAmount(args.price) then
260 | 		handleError({
261 | 			Target = args.sender,
262 | 			Action = 'Validation-Error',
263 | 			Message = 'Price must be an integer greater than zero',
264 | 			Quantity = args.quantity,
265 | 			TransferToken = currentToken,
266 | 			OrderGroupId = args.orderGroupId
267 | 		})
268 | 		return
269 | 	end
270 | 
271 | 	if pairIndex > -1 then
272 | 		local orderType
273 | 
274 | 		if args.price then
275 | 			orderType = 'Limit'
276 | 		else
277 | 			orderType = 'Market'
278 | 		end
279 | 
280 | 		local remainingQuantity = bint(args.quantity)
281 | 		local currentOrders = Orderbook[pairIndex].Orders
282 | 		local updatedOrderbook = {}
283 | 		local matches = {}
284 | 
285 | 		-- Sort order entries based on price
286 | 		table.sort(currentOrders, function(a, b)
287 | 			return bint(a.Price) < bint(b.Price)
288 | 		end)
289 | 
290 | 		-- If the incoming order is a limit order, add it to the order book
291 | 		if orderType == 'Limit' then
292 | 			table.insert(currentOrders, {
293 | 				Id = args.orderId,
294 | 				Quantity = tostring(args.quantity),
295 | 				OriginalQuantity = tostring(args.quantity),
296 | 				Creator = args.sender,
297 | 				Token = currentToken,
298 | 				DateCreated = args.timestamp,
299 | 				Price = tostring(args.price),
300 | 			})
301 | 
302 | 			local limitDataSuccess, limitData = pcall(function()
303 | 				return json.encode({
304 | 					Order = {
305 | 						Id = args.orderId,
306 | 						DominantToken = validPair[1],
307 | 						SwapToken = validPair[2],
308 | 						Sender = args.sender,
309 | 						Receiver = nil,
310 | 						Quantity = tostring(args.quantity),
311 | 						Price = tostring(args.price),
312 | 						Timestamp = args.timestamp
313 | 					}
314 | 				})
315 | 			end)
316 | 
317 | 			ao.send({
318 | 				Target = ACTIVITY_PROCESS,
319 | 				Action = 'Update-Listed-Orders',
320 | 				Data = limitDataSuccess and limitData or ''
321 | 			})
322 | 
323 | 			ao.send({
324 | 				Target = args.sender,
325 | 				Action = 'Order-Success',
326 | 				Tags = {
327 | 					Status = 'Success',
328 | 					OrderId = args.orderId,
329 | 					Handler = 'Create-Order',
330 | 					DominantToken = currentToken,
331 | 					SwapToken = args.swapToken,
332 | 					Quantity = tostring(args.quantity),
333 | 					Price = tostring(args.price),
334 | 					Message = 'Order created successfully!',
335 | 					['X-Group-ID'] = args.orderGroupId
336 | 				}
337 | 			})
338 | 
339 | 			args.syncState()
340 | 
341 | 			return
342 | 		end
343 | 
344 | 		for _, currentOrderEntry in ipairs(currentOrders) do
345 | 			if remainingQuantity > bint(0) and bint(currentOrderEntry.Quantity) > bint(0) then
346 | 				local fillAmount, sendAmount
347 | 
348 | 				local transferDenomination = args.transferDenomination and bint(args.transferDenomination) > bint(1)
349 | 
350 | 				-- Calculate how many shares can be bought with the remaining quantity
351 | 				if transferDenomination then
352 | 					fillAmount = remainingQuantity // bint(currentOrderEntry.Price)
353 | 				else
354 | 					fillAmount = math.floor(remainingQuantity / bint(currentOrderEntry.Price))
355 | 				end
356 | 
357 | 				-- Calculate the total cost for the fill amount
358 | 				sendAmount = fillAmount * bint(currentOrderEntry.Price)
359 | 
360 | 				-- Adjust the fill amount to not exceed the order's available quantity
361 | 				local quantityCheck = bint(currentOrderEntry.Quantity)
362 | 				if transferDenomination then
363 | 					quantityCheck = quantityCheck // bint(args.transferDenomination)
364 | 				end
365 | 
366 | 				if sendAmount > (quantityCheck * bint(currentOrderEntry.Price)) then
367 | 					sendAmount = bint(currentOrderEntry.Quantity) * bint(currentOrderEntry.Price)
368 | 					if transferDenomination then
369 | 						sendAmount = sendAmount // bint(args.transferDenomination)
370 | 					end
371 | 				end
372 | 
373 | 				-- Handle tokens with a denominated value
374 | 				if transferDenomination then
375 | 					if fillAmount > bint(0) then fillAmount = fillAmount * bint(args.transferDenomination) end
376 | 				end
377 | 
378 | 				-- Ensure the fill amount does not exceed the available quantity in the order
379 | 				if fillAmount > bint(currentOrderEntry.Quantity) then
380 | 					fillAmount = bint(currentOrderEntry.Quantity)
381 | 				end
382 | 
383 | 				-- Subtract the used quantity from the buyer's remaining quantity
384 | 				if transferDenomination then
385 | 					remainingQuantity = remainingQuantity -
386 | 						(fillAmount // bint(args.transferDenomination) * bint(currentOrderEntry.Price))
387 | 				else
388 | 					remainingQuantity = remainingQuantity - fillAmount * bint(currentOrderEntry.Price)
389 | 				end
390 | 
391 | 				currentOrderEntry.Quantity = tostring(bint(currentOrderEntry.Quantity) - fillAmount)
392 | 
393 | 				if fillAmount <= bint(0) then
394 | 					handleError({
395 | 						Target = args.sender,
396 | 						Action = 'Order-Error',
397 | 						Message = 'No amount to fill',
398 | 						Quantity = args.quantity,
399 | 						TransferToken = currentToken,
400 | 						OrderGroupId = args.orderGroupId
401 | 					})
402 | 
403 | 					args.syncState()
404 | 
405 | 					return
406 | 				end
407 | 
408 | 				local calculatedSendAmount = utils.calculateSendAmount(sendAmount)
409 | 				local calculatedFillAmount = utils.calculateFillAmount(fillAmount)
410 | 
411 | 				-- Gather all fulfillment fees for buyback
412 | 				table.insert(BuybackCaptures, utils.calculateFeeAmount(sendAmount))
413 | 
414 | 				-- Send tokens to the current order creator
415 | 				ao.send({
416 | 					Target = currentToken,
417 | 					Action = 'Transfer',
418 | 					Tags = {
419 | 						Recipient = currentOrderEntry.Creator,
420 | 						Quantity = tostring(calculatedSendAmount)
421 | 					}
422 | 				})
423 | 
424 | 				-- Send swap tokens to the input order creator
425 | 				ao.send({
426 | 					Target = args.swapToken,
427 | 					Action = 'Transfer',
428 | 					Tags = {
429 | 						Recipient = args.sender,
430 | 						Quantity = tostring(calculatedFillAmount)
431 | 					}
432 | 				})
433 | 
434 | 				-- Record the match
435 | 				table.insert(matches, {
436 | 					Id = currentOrderEntry.Id,
437 | 					Quantity = calculatedFillAmount,
438 | 					Price = tostring(currentOrderEntry.Price)
439 | 				})
440 | 
441 | 				local matchedDataSuccess, matchedData = pcall(function()
442 | 					return json.encode({
443 | 						Order = {
444 | 							Id = currentOrderEntry.Id,
445 | 							MatchId = args.orderId,
446 | 							DominantToken = validPair[2],
447 | 							SwapToken = validPair[1],
448 | 							Sender = currentOrderEntry.Creator,
449 | 							Receiver = args.sender,
450 | 							Quantity = calculatedFillAmount,
451 | 							Price = tostring(currentOrderEntry.Price),
452 | 							Timestamp = args.timestamp
453 | 						}
454 | 					})
455 | 				end)
456 | 
457 | 				ao.send({
458 | 					Target = ACTIVITY_PROCESS,
459 | 					Action = 'Update-Executed-Orders',
460 | 					Data = matchedDataSuccess and matchedData or ''
461 | 				})
462 | 
463 | 				-- Calculate streaks
464 | 				ao.send({
465 | 					Target = PIXL_PROCESS,
466 | 					Action = 'Calculate-Streak',
467 | 					Tags = {
468 | 						Buyer = args.sender
469 | 					}
470 | 				})
471 | 
472 | 				-- If there are remaining shares in the current order, keep it in the order book
473 | 				if bint(currentOrderEntry.Quantity) > bint(0) then
474 | 					table.insert(updatedOrderbook, currentOrderEntry)
475 | 				end
476 | 			else
477 | 				if bint(currentOrderEntry.Quantity) > bint(0) then
478 | 					table.insert(updatedOrderbook, currentOrderEntry)
479 | 				end
480 | 			end
481 | 		end
482 | 
483 | 		-- Execute PIXL buyback
484 | 		if orderType == 'Market' and #BuybackCaptures > 0 and currentToken == DEFAULT_SWAP_TOKEN and args.sender ~= ao.id then
485 | 			ucm.executeBuyback({
486 | 				orderId = args.orderId,
487 | 				blockheight = args.blockheight,
488 | 				timestamp = args.timestamp,
489 | 				syncState = args.syncState
490 | 			})
491 | 		end
492 | 
493 | 		-- Update the order book with remaining and new orders
494 | 		Orderbook[pairIndex].Orders = updatedOrderbook
495 | 
496 | 		local sumVolumePrice, sumVolume = 0, 0
497 | 		local vwap = 0
498 | 		if #matches > 0 then
499 | 			for _, match in ipairs(matches) do
500 | 				local volume = bint(match.Quantity)
501 | 				local price = bint(match.Price)
502 | 				sumVolumePrice = sumVolumePrice + (volume * price)
503 | 				sumVolume = sumVolume + volume
504 | 			end
505 | 
506 | 			vwap = sumVolumePrice / sumVolume
507 | 			Orderbook[pairIndex].PriceData = {
508 | 				Vwap = tostring(math.floor(vwap)),
509 | 				Block = tostring(args.blockheight),
510 | 				DominantToken = currentToken,
511 | 				MatchLogs = matches
512 | 			}
513 | 		end
514 | 
515 | 		if sumVolume > 0 then
516 | 			ao.send({
517 | 				Target = args.sender,
518 | 				Action = 'Order-Success',
519 | 				Tags = {
520 | 					OrderId = args.orderId,
521 | 					Status = 'Success',
522 | 					Handler = 'Create-Order',
523 | 					DominantToken = currentToken,
524 | 					SwapToken = args.swapToken,
525 | 					Quantity = tostring(sumVolume),
526 | 					Price = tostring(math.floor(vwap)),
527 | 					Message = 'Order created successfully!',
528 | 					['X-Group-ID'] = args.orderGroupId or 'None'
529 | 				}
530 | 			})
531 | 
532 | 			args.syncState()
533 | 		else
534 | 			handleError({
535 | 				Target = args.sender,
536 | 				Action = 'Order-Error',
537 | 				Message = 'No amount to fill',
538 | 				Quantity = args.quantity,
539 | 				TransferToken = currentToken,
540 | 				OrderGroupId = args.orderGroupId
541 | 			})
542 | 
543 | 			args.syncState()
544 | 
545 | 			return
546 | 		end
547 | 	else
548 | 		handleError({
549 | 			Target = args.sender,
550 | 			Action = 'Order-Error',
551 | 			Message = 'Pair not found',
552 | 			Quantity = args.quantity,
553 | 			TransferToken = currentToken,
554 | 			OrderGroupId = args.orderGroupId
555 | 		})
556 | 	end
557 | end
558 | 
559 | function ucm.executeBuyback(args)
560 | 	local pixlDenomination = 1000000
561 | 	local pixlPairIndex = ucm.getPairIndex({ DEFAULT_SWAP_TOKEN, PIXL_PROCESS })
562 | 
563 | 	if pixlPairIndex > -1 then
564 | 		local pixlOrderbook = Orderbook[pixlPairIndex].Orders
565 | 
566 | 		if pixlOrderbook and #pixlOrderbook > 0 then
567 | 			table.sort(pixlOrderbook, function(a, b)
568 | 				local priceA = bint(a.Price)
569 | 				local priceB = bint(b.Price)
570 | 				if priceA == priceB then
571 | 					local quantityA = bint(a.Quantity)
572 | 					local quantityB = bint(b.Quantity)
573 | 					return quantityA < quantityB
574 | 				end
575 | 				return priceA < priceB
576 | 			end)
577 | 
578 | 			local buybackAmount = bint(0)
579 | 
580 | 			for _, quantity in ipairs(BuybackCaptures) do
581 | 				buybackAmount = buybackAmount + bint(quantity)
582 | 			end
583 | 
584 | 			local minQuantity = bint(pixlOrderbook[1].Price)
585 | 			local maxQuantity = bint(0)
586 | 
587 | 			for _, order in ipairs(pixlOrderbook) do
588 | 				maxQuantity = maxQuantity + ((bint(order.Quantity) // bint(pixlDenomination)) *
589 | 					bint(order.Price))
590 | 			end
591 | 
592 | 			if buybackAmount < minQuantity then
593 | 				return
594 | 			end
595 | 
596 | 			if buybackAmount > maxQuantity then
597 | 				buybackAmount = maxQuantity
598 | 			end
599 | 
600 | 			ucm.createOrder({
601 | 				orderId = args.orderId,
602 | 				dominantToken = DEFAULT_SWAP_TOKEN,
603 | 				swapToken = PIXL_PROCESS,
604 | 				sender = ao.id,
605 | 				quantity = tostring(buybackAmount),
606 | 				timestamp = args.timestamp,
607 | 				blockheight = args.blockheight,
608 | 				transferDenomination = tostring(pixlDenomination),
609 | 				syncState = args.syncState
610 | 			})
611 | 
612 | 			BuybackCaptures = {}
613 | 		end
614 | 	end
615 | end
616 | 
617 | local function getState()
618 |     return {
619 | 		Name = Name,
620 | 		Orderbook = Orderbook,
621 | 		ActivityProcess = ACTIVITY_PROCESS
622 | 	}
623 | end
624 | 
625 | local function syncState()
626 |     Send({ device = 'patch@1.0', orderbook = json.encode(getState()) })
627 | end
628 | 
629 | function Trusted(msg)
630 | 	local mu = 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY'
631 | 	if msg.Owner == mu then
632 | 		return false
633 | 	end
634 | 	if msg.From == msg.Owner then
635 | 		return false
636 | 	end
637 | 	return true
638 | end
639 | 
640 | Handlers.prepend('Qualify-Message', Trusted, function(msg)
641 | 	print('Message from ' .. msg.From .. ' is not trusted')
642 | end)
643 | 
644 | Handlers.add('Info', 'Info', function(msg)
645 | 	msg.reply({ Data = json.encode(getState()) })
646 | end)
647 | 
648 | Handlers.add('Get-Orderbook-By-Pair', 'Get-Orderbook-By-Pair',
649 | 	function(msg)
650 | 		if not msg.Tags.DominantToken or not msg.Tags.SwapToken then return end
651 | 		local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
652 | 
653 | 		if pairIndex > -1 then
654 | 			msg.reply({ Data = json.encode({ Orderbook = Orderbook[pairIndex] }) })
655 | 		end
656 | 	end)
657 | 
658 | Handlers.add('Credit-Notice', 'Credit-Notice', function(msg)
659 | 	if not msg.Tags['X-Dominant-Token'] or msg.From ~= msg.Tags['X-Dominant-Token'] then return end
660 | 
661 | 	local data = {
662 | 		Sender = msg.Tags.Sender,
663 | 		Quantity = msg.Tags.Quantity
664 | 	}
665 | 
666 | 	-- Check if sender is a valid address
667 | 	if not utils.checkValidAddress(data.Sender) then
668 | 		msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Sender must be a valid address' } })
669 | 		return
670 | 	end
671 | 
672 | 	-- Check if quantity is a valid integer greater than zero
673 | 	if not utils.checkValidAmount(data.Quantity) then
674 | 		msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Quantity must be an integer greater than zero' } })
675 | 		return
676 | 	end
677 | 
678 | 	-- Check if all required fields are present
679 | 	if not data.Sender or not data.Quantity then
680 | 		msg.reply({
681 | 			Action = 'Input-Error',
682 | 			Tags = {
683 | 				Status = 'Error',
684 | 				Message =
685 | 				'Invalid arguments, required { Sender, Quantity }'
686 | 			}
687 | 		})
688 | 		return
689 | 	end
690 | 
691 | 	-- If Order-Action then create the order
692 | 	if (Handlers.utils.hasMatchingTag('Action', 'X-Order-Action') and msg.Tags['X-Order-Action'] == 'Create-Order') then
693 | 		local orderArgs = {
694 | 			orderId = msg.Id,
695 | 			orderGroupId = msg.Tags['X-Group-ID'] or 'None',
696 | 			dominantToken = msg.From,
697 | 			swapToken = msg.Tags['X-Swap-Token'],
698 | 			sender = data.Sender,
699 | 			quantity = msg.Tags.Quantity,
700 | 			timestamp = msg.Timestamp,
701 | 			blockheight = msg['Block-Height'],
702 | 			syncState = syncState
703 | 		}
704 | 
705 | 		if msg.Tags['X-Price'] then
706 | 			orderArgs.price = msg.Tags['X-Price']
707 | 		end
708 | 		if msg.Tags['X-Transfer-Denomination'] then
709 | 			orderArgs.transferDenomination = msg.Tags['X-Transfer-Denomination']
710 | 		end
711 | 
712 | 		ucm.createOrder(orderArgs)
713 | 	end
714 | end)
715 | 
716 | Handlers.add('Cancel-Order', 'Cancel-Order', function(msg)
717 | 	local decodeCheck, data = utils.decodeMessageData(msg.Data)
718 | 
719 | 	if decodeCheck and data then
720 | 		if not data.Pair or not data.OrderTxId then
721 | 			msg.reply({
722 | 				Action = 'Input-Error',
723 | 				Tags = { Status = 'Error', Message = 'Invalid arguments, required { Pair: [TokenId, TokenId], OrderTxId }' }
724 | 			})
725 | 			return
726 | 		end
727 | 
728 | 		-- Check if Pair and OrderTxId are valid
729 | 		local validPair, pairError = utils.validatePairData(data.Pair)
730 | 		local validOrderTxId = utils.checkValidAddress(data.OrderTxId)
731 | 
732 | 		if not validPair or not validOrderTxId then
733 | 			local message = nil
734 | 
735 | 			if not validOrderTxId then message = 'OrderTxId is not a valid address' end
736 | 			if not validPair then message = pairError or 'Error validating pair' end
737 | 
738 | 			msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = message or 'Error validating order cancel input' } })
739 | 			return
740 | 		end
741 | 
742 | 		-- Ensure the pair exists
743 | 		local pairIndex = ucm.getPairIndex(validPair)
744 | 
745 | 		-- If the pair exists then search for the order based on OrderTxId
746 | 		if pairIndex > -1 then
747 | 			local order = nil
748 | 			local orderIndex = nil
749 | 
750 | 			for i, currentOrderEntry in ipairs(Orderbook[pairIndex].Orders) do
751 | 				if data.OrderTxId == currentOrderEntry.Id then
752 | 					order = currentOrderEntry
753 | 					orderIndex = i
754 | 				end
755 | 			end
756 | 
757 | 			-- The order is not found
758 | 			if not order then
759 | 				msg.reply({ Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Order not found', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
760 | 				return
761 | 			end
762 | 
763 | 			-- Check if the sender is the order creator
764 | 			if msg.From ~= order.Creator then
765 | 				msg.reply({ Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Unauthorized to cancel this order', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
766 | 				return
767 | 			end
768 | 
769 | 			if order and orderIndex > -1 then
770 | 				-- Return funds to the creator
771 | 				ao.send({
772 | 					Target = order.Token,
773 | 					Action = 'Transfer',
774 | 					Tags = {
775 | 						Recipient = order.Creator,
776 | 						Quantity = order.Quantity
777 | 					}
778 | 				})
779 | 
780 | 				-- Remove the order from the current table
781 | 				table.remove(Orderbook[pairIndex].Orders, orderIndex)
782 | 				msg.reply({ Action = 'Action-Response', Tags = { Status = 'Success', Message = 'Order cancelled', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
783 | 				syncState()
784 | 
785 | 				local cancelledDataSuccess, cancelledData = pcall(function()
786 | 					return json.encode({
787 | 						Order = {
788 | 							Id = data.OrderTxId,
789 | 							DominantToken = validPair[1],
790 | 							SwapToken = validPair[2],
791 | 							Sender = msg.From,
792 | 							Receiver = nil,
793 | 							Quantity = tostring(order.Quantity),
794 | 							Price = tostring(order.Price),
795 | 							Timestamp = msg.Timestamp
796 | 						}
797 | 					})
798 | 				end)
799 | 
800 | 				ao.send({
801 | 					Target = ACTIVITY_PROCESS,
802 | 					Action = 'Update-Cancelled-Orders',
803 | 					Data = cancelledDataSuccess and cancelledData or ''
804 | 				})
805 | 			else
806 | 				msg.reply({ Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Error cancelling order', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
807 | 			end
808 | 		else
809 | 			msg.reply({ Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Pair not found', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
810 | 		end
811 | 	else
812 | 		msg.reply({
813 | 			Action = 'Input-Error',
814 | 			Tags = {
815 | 				Status = 'Error',
816 | 				Message = string.format('Failed to parse data, received: %s. %s',
817 | 					msg.Data,
818 | 					'Data must be an object - { Pair: [TokenId, TokenId], OrderTxId }')
819 | 			}
820 | 		})
821 | 	end
822 | end)
823 | 
824 | Handlers.add('Read-Orders', 'Read-Orders', function(msg)
825 | 	if msg.From == ao.id then
826 | 		local readOrders = {}
827 | 		local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
828 | 
829 | 		if pairIndex > -1 then
830 | 			for i, order in ipairs(Orderbook[pairIndex].Orders) do
831 | 				if not msg.Tags.Creator or order.Creator == msg.Tags.Creator then
832 | 					table.insert(readOrders, {
833 | 						Index = i,
834 | 						Id = order.Id,
835 | 						Creator = order.Creator,
836 | 						Quantity = order.Quantity,
837 | 						Price = order.Price,
838 | 						Timestamp = order.Timestamp
839 | 					})
840 | 				end
841 | 			end
842 | 
843 | 			msg.reply({
844 | 				Action = 'Read-Orders-Response',
845 | 				Data = json.encode(readOrders)
846 | 			})
847 | 		end
848 | 	end
849 | end)
850 | 
851 | Handlers.add('Read-Pair', Handlers.utils.hasMatchingTag('Action', 'Read-Pair'), function(msg)
852 | 	local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
853 | 	if pairIndex > -1 then
854 | 		msg.reply({
855 | 			Action = 'Read-Success',
856 | 			Data = json.encode({
857 | 				Pair = tostring(pairIndex),
858 | 				Orderbook =
859 | 					Orderbook[pairIndex]
860 | 			})
861 | 		})
862 | 	end
863 | end)
864 | 
865 | Handlers.add('Order-Success', Handlers.utils.hasMatchingTag('Action', 'Order-Success'), function(msg)
866 | 	if msg.From == ao.id and
867 | 		msg.Tags.DominantToken and msg.Tags.DominantToken == DEFAULT_SWAP_TOKEN and
868 | 		msg.Tags.SwapToken and msg.Tags.SwapToken == PIXL_PROCESS then
869 | 		if msg.Tags.Quantity and tonumber(msg.Tags.Quantity) > 0 then
870 | 			ao.send({
871 | 				Target = PIXL_PROCESS,
872 | 				Action = 'Transfer',
873 | 				Tags = {
874 | 					Recipient = string.rep('0', 43),
875 | 					Quantity = msg.Tags.Quantity
876 | 				}
877 | 			})
878 | 		end
879 | 	end
880 | end)
881 | 
882 | Handlers.add('Debit-Notice', Handlers.utils.hasMatchingTag('Action', 'Debit-Notice'), function(msg) end)
883 | 


--------------------------------------------------------------------------------
/src/cron.lua:
--------------------------------------------------------------------------------
1 | PIXL_PROCESS = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
2 | 
3 | Handlers.add('Cron', Handlers.utils.hasMatchingTag('Action', 'Cron'),
4 | 	function(msg)
5 | 		Send({ Target = PIXL_PROCESS, Tags = { Action = 'Run-Rewards' } })
6 | 	end
7 | )
8 | 


--------------------------------------------------------------------------------
/src/pixl.lua:
--------------------------------------------------------------------------------
  1 | local bint = require('.bint')(256)
  2 | local json = require('json')
  3 | 
  4 | UCM_PROCESS = 'hqdL4AZaFZ0huQHbAsYxdTwG6vpibK7ALWKNzmWaD4Q'
  5 | CRON_PROCESS = 'jyYiDZyCjyiN0833p72p9NW1EuUPs9d2fTnRqIVSlNQ'
  6 | 
  7 | TOTAL_SUPPLY = bint(26280000 * 1e6)
  8 | 
  9 | -- Current supply was captured at block 1628189 to account for the PI Fair Launch
 10 | -- 75% of the remaining supply supply (TOTAL_SUPPLY - CURRENT_MINTED) was reallocated for PI
 11 | -- 25% of the supply that is yet to be minted is allocated for PIXL rewards
 12 | CURRENT_MINTED = bint(15531330588835)
 13 | REMAINING_SUPPLY = TOTAL_SUPPLY - CURRENT_MINTED
 14 | FAIR_LAUNCH_SUPPLY = math.floor(REMAINING_SUPPLY * 0.75)
 15 | REWARDS_SUPPLY = math.floor(REMAINING_SUPPLY * 0.25)
 16 | HALVING_SUPPLY = CURRENT_MINTED + REWARDS_SUPPLY
 17 | 
 18 | ORIGIN_HEIGHT = 1232228
 19 | DAY_INTERVAL = 720
 20 | CYCLE_INTERVAL = DAY_INTERVAL * 365
 21 | 
 22 | if Name ~= 'PIXL Token' then Name = 'PIXL Token' end
 23 | if Ticker ~= 'PIXL' then Ticker = 'PIXL' end
 24 | if not Balances then Balances = {} end
 25 | if Denomination ~= 6 then Denomination = 6 end
 26 | if not Logo then Logo = 'czR2tJmSr7upPpReXu6IuOc2H7RuHRRAhI7DXAUlszU' end
 27 | if not LastReward then LastReward = 0 end
 28 | 
 29 | -- Streaks { [Profile]: { Days, LastHeight } }
 30 | if not Streaks then Streaks = {} end
 31 | 
 32 | local function checkValidAddress(address)
 33 | 	if not address or type(address) ~= 'string' then
 34 | 		return false
 35 | 	end
 36 | 
 37 | 	return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
 38 | end
 39 | 
 40 | local function checkValidAmount(data)
 41 | 	return bint(data) > bint(0)
 42 | end
 43 | 
 44 | local function getAllocation(currentHeight)
 45 | 	if not Streaks or next(Streaks) == nil then
 46 | 		return {}
 47 | 	end
 48 | 
 49 | 	local multipliers = {}
 50 | 
 51 | 	for k, v in pairs(Streaks) do
 52 | 		if v.days > 0 and v.days < 31 then
 53 | 			local multiplier = v.days - 1
 54 | 			multipliers[k] = 1 + multiplier * 0.1
 55 | 		elseif v.days >= 31 then
 56 | 			local multiplier = 30
 57 | 			multipliers[k] = 1 + multiplier * 0.1
 58 | 		end
 59 | 
 60 | 		local heightDiff = tonumber(currentHeight) - tonumber(v.lastHeight)
 61 | 
 62 | 		if heightDiff > (DAY_INTERVAL * 2) then
 63 | 			Streaks[k] = nil
 64 | 		end
 65 | 	end
 66 | 
 67 | 	local totalW = 0
 68 | 	for _, m in pairs(multipliers) do totalW = totalW + m end
 69 | 
 70 | 	local currentSupply = bint(0)
 71 | 	for _, v in pairs(Balances) do
 72 | 		currentSupply = currentSupply + bint(v)
 73 | 	end
 74 | 	if currentSupply >= TOTAL_SUPPLY then
 75 | 		print('Total supply reached—no more rewards')
 76 | 		return
 77 | 	end
 78 | 
 79 | 	-- Compute halving based daily reward
 80 | 	local blockHeight = tonumber(currentHeight) - ORIGIN_HEIGHT
 81 | 	local cycle       = math.floor(blockHeight / CYCLE_INTERVAL) + 1
 82 | 	local divisor     = 2 ^ cycle
 83 | 	local dailyMint   = math.floor(math.floor(REWARDS_SUPPLY / divisor) / 365)
 84 | 
 85 | 	if dailyMint <= 0 then
 86 | 		return
 87 | 	end
 88 | 
 89 | 	local unminted   = TOTAL_SUPPLY - currentSupply
 90 | 	local reward     = (bint(dailyMint) <= unminted) and bint(dailyMint) or unminted
 91 | 
 92 | 	local allocation = {}
 93 | 	for addr, m in pairs(multipliers) do
 94 | 		local share = math.floor((reward * (m / totalW)) + 0.5)
 95 | 		allocation[addr] = share
 96 | 	end
 97 | 
 98 | 	return allocation
 99 | end
100 | 
101 | function Trusted(msg)
102 | 	local mu = 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY'
103 | 	if msg.Owner == mu then
104 | 		return false
105 | 	end
106 | 	if msg.From == msg.Owner then
107 | 		return false
108 | 	end
109 | 	return true
110 | end
111 | 
112 | Handlers.prepend('qualify message',
113 | 	Trusted,
114 | 	function(msg)
115 | 		print('This Msg is not trusted!')
116 | 	end
117 | )
118 | 
119 | local function patchReply(msg)
120 | 	if not msg.reply then
121 | 		msg.reply = function(replyMsg)
122 | 			replyMsg.Target = msg['Reply-To'] or (replyMsg.Target or msg.From)
123 | 			replyMsg['X-Reference'] = msg['X-Reference'] or msg.Reference or ''
124 | 			replyMsg['X-Origin'] = msg['X-Origin'] or ''
125 | 
126 | 			return ao.send(replyMsg)
127 | 		end
128 | 	end
129 | end
130 | 
131 | Handlers.prepend('_patch_reply', function(msg) return 'continue' end, patchReply)
132 | 
133 | -- Read process state
134 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'),
135 | 	function(msg)
136 | 		msg.reply({
137 | 			Name = Name,
138 | 			Ticker = Ticker,
139 | 			Logo = Logo,
140 | 			Denomination = tostring(Denomination)
141 | 		})
142 | 	end)
143 | 
144 | -- Get streaks table
145 | Handlers.add('Get-Streaks', Handlers.utils.hasMatchingTag('Action', 'Get-Streaks'),
146 | 	function(msg)
147 | 		msg.reply({
148 | 			Data = json.encode({ Streaks = Streaks })
149 | 		})
150 | 	end)
151 | 
152 | -- Transfer balance to recipient (Data - { Recipient, Quantity })
153 | Handlers.add('Transfer', Handlers.utils.hasMatchingTag('Action', 'Transfer'), function(msg)
154 | 	local data = {
155 | 		Recipient = msg.Tags.Recipient,
156 | 		Quantity = msg.Tags.Quantity
157 | 	}
158 | 
159 | 	if checkValidAddress(data.Recipient) and checkValidAmount(data.Quantity) and bint(data.Quantity) <= bint(Balances[msg.From]) then
160 | 		-- Transfer is valid, calculate balances
161 | 		if not Balances[data.Recipient] then
162 | 			Balances[data.Recipient] = '0'
163 | 		end
164 | 
165 | 		Balances[msg.From] = tostring(bint(Balances[msg.From]) - bint(data.Quantity))
166 | 		Balances[data.Recipient] = tostring(bint(Balances[data.Recipient]) + bint(data.Quantity))
167 | 
168 | 		-- If new balance zeroes out then remove it from the table
169 | 		if bint(Balances[msg.From]) <= 0 then
170 | 			Balances[msg.From] = nil
171 | 		end
172 | 		if bint(Balances[data.Recipient]) <= 0 then
173 | 			Balances[data.Recipient] = nil
174 | 		end
175 | 
176 | 		local debitNoticeTags = {
177 | 			Status = 'Success',
178 | 			Message = 'Balance transferred, debit notice issued',
179 | 			Recipient = msg.Tags.Recipient,
180 | 			Quantity = msg.Tags.Quantity,
181 | 		}
182 | 
183 | 		local creditNoticeTags = {
184 | 			Status = 'Success',
185 | 			Message = 'Balance transferred, credit notice issued',
186 | 			Sender = msg.From,
187 | 			Quantity = msg.Tags.Quantity,
188 | 		}
189 | 
190 | 		for tagName, tagValue in pairs(msg) do
191 | 			if string.sub(tagName, 1, 2) == 'X-' then
192 | 				debitNoticeTags[tagName] = tagValue
193 | 				creditNoticeTags[tagName] = tagValue
194 | 			end
195 | 		end
196 | 
197 | 		-- Send a debit notice to the sender
198 | 		msg.reply({
199 | 			Target = msg.From,
200 | 			Action = 'Debit-Notice',
201 | 			Tags = debitNoticeTags,
202 | 			Data = json.encode({
203 | 				Recipient = data.Recipient,
204 | 				Quantity = tostring(data.Quantity)
205 | 			})
206 | 		})
207 | 
208 | 		-- Send a credit notice to the recipient
209 | 		msg.reply({
210 | 			Target = data.Recipient,
211 | 			Action = 'Credit-Notice',
212 | 			Tags = creditNoticeTags,
213 | 			Data = json.encode({
214 | 				Sender = msg.From,
215 | 				Quantity = tostring(data.Quantity)
216 | 			})
217 | 		})
218 | 	end
219 | end)
220 | 
221 | -- Read balance (Data - { Recipient })
222 | Handlers.add('Balance', Handlers.utils.hasMatchingTag('Action', 'Balance'), function(msg)
223 | 	local balance = '0'
224 | 
225 | 	-- If not Recipient is provided, then return the Senders balance
226 | 	if (msg.Tags.Recipient) then
227 | 		if (Balances[msg.Tags.Recipient]) then
228 | 			balance = Balances[msg.Tags.Recipient]
229 | 		end
230 | 	elseif msg.Tags.Target and Balances[msg.Tags.Target] then
231 | 		balance = Balances[msg.Tags.Target]
232 | 	elseif Balances[msg.From] then
233 | 		balance = Balances[msg.From]
234 | 	end
235 | 
236 | 	msg.reply({
237 | 		Balance = balance,
238 | 		Ticker = Ticker,
239 | 		Account = msg.Tags.Recipient or msg.From,
240 | 		Data = balance
241 | 	})
242 | end)
243 | 
244 | -- Read balances
245 | Handlers.add('Balances', 'Balances',
246 | 	function(msg) msg.reply({ Data = json.encode(Balances) }) end)
247 | 
248 | -- Update streaks table by buyer (Data - { Buyer })
249 | Handlers.add('Calculate-Streak', Handlers.utils.hasMatchingTag('Action', 'Calculate-Streak'),
250 | 	function(msg)
251 | 		local data = {
252 | 			Buyer = msg.Tags.Buyer
253 | 		}
254 | 
255 | 		if not data.Buyer then
256 | 			ao.send({
257 | 				Target = msg.From,
258 | 				Action = 'Input-Error',
259 | 				Tags = {
260 | 					Status = 'Error',
261 | 					Message =
262 | 					'Invalid arguments, required { Buyer }'
263 | 				}
264 | 			})
265 | 			return
266 | 		end
267 | 
268 | 		if not checkValidAddress(data.Buyer) then
269 | 			return
270 | 		end
271 | 
272 | 		if not Streaks[data.Buyer] or Streaks[data.Buyer].days <= 0 then
273 | 			Streaks[data.Buyer] = {
274 | 				days = 1,
275 | 				lastHeight = msg['Block-Height']
276 | 			}
277 | 		else
278 | 			local heightDiff = tonumber(msg['Block-Height']) - tonumber(Streaks[data.Buyer].lastHeight)
279 | 
280 | 			if heightDiff > DAY_INTERVAL and heightDiff <= (DAY_INTERVAL * 2) then
281 | 				Streaks[data.Buyer] = {
282 | 					days = tonumber(Streaks[data.Buyer].days) + 1,
283 | 					lastHeight = msg['Block-Height']
284 | 				}
285 | 			end
286 | 			if heightDiff > (DAY_INTERVAL * 2) then
287 | 				Streaks[data.Buyer] = {
288 | 					days = 0,
289 | 					lastHeight = msg['Block-Height']
290 | 				}
291 | 			end
292 | 		end
293 | 	end)
294 | 
295 | -- Trigger rewards dispersement
296 | Handlers.add('Read-Current-Rewards', Handlers.utils.hasMatchingTag('Action', 'Read-Current-Rewards'),
297 | 	function(msg)
298 | 		local data = {
299 | 			Recipient = msg.Tags.Recipient
300 | 		}
301 | 
302 | 		-- Check if target is present
303 | 		if not data.Recipient then
304 | 			ao.send({ Target = msg.From, Action = 'Input-Error', Tags = { Status = 'Error', Message = 'Invalid arguments, required { Recipient }' } })
305 | 			return
306 | 		end
307 | 
308 | 		-- Check if target is a valid address
309 | 		if not checkValidAddress(data.Recipient) then
310 | 			ao.send({ Target = msg.From, Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Recipient is not a valid address' } })
311 | 			return
312 | 		end
313 | 
314 | 		-- Initialize allocation table
315 | 		local allocation = getAllocation(msg['Block-Height'])
316 | 		msg.reply({ Data = allocation and allocation[data.Recipient] or '0' })
317 | 	end)
318 | 
319 | -- Trigger rewards dispersement
320 | Handlers.add('Run-Rewards', Handlers.utils.hasMatchingTag('Action', 'Run-Rewards'),
321 | 	function(msg)
322 | 		if msg.From ~= CRON_PROCESS then
323 | 			msg.reply({ Action = 'Unauthorized' })
324 | 			return
325 | 		end
326 | 
327 | 		if (tonumber(msg['Block-Height']) - LastReward) < DAY_INTERVAL then
328 | 			msg.reply({ Action = 'Invalid-Reward-Interval' })
329 | 			return
330 | 		end
331 | 
332 | 		-- Initialize allocation table
333 | 		local allocation = getAllocation(msg['Block-Height'])
334 | 
335 | 		if allocation then
336 | 			print(allocation)
337 | 
338 | 			-- for k, v in pairs(allocation) do
339 | 			-- 	Balances[k] = tostring(bint(Balances[k] or '0') + bint(v))
340 | 			-- end
341 | 
342 | 			msg.reply({ Action = 'Rewards-Dispersed' })
343 | 		else
344 | 			msg.reply({ Data = 'No rewards to disperse' })
345 | 		end
346 | 
347 | 		LastReward = msg['Block-Height']
348 | 	end)
349 | 
350 | Handlers.add('Migrate-Streak', Handlers.utils.hasMatchingTag('Action', 'Migrate-Streak'), function(msg)
351 | 	if not msg.Data.MigrateTo then
352 | 		print('MigrateTo must be provided')
353 | 		return
354 | 	end
355 | 
356 | 	if Streaks[msg.From] then
357 | 		print('Giving streak to ' .. msg.Data.MigrateTo)
358 | 		Streaks[msg.Data.MigrateTo] = Streaks[msg.From]
359 | 		Streaks[msg.From] = nil
360 | 	end
361 | end)
362 | 
363 | Handlers.add('Total-Supply', Handlers.utils.hasMatchingTag('Action', 'Total-Supply'), function(msg)
364 | 	assert(msg.From ~= ao.id, 'Cannot call Total-Supply from the same process!')
365 | 
366 | 	msg.reply({
367 | 		Action = 'Total-Supply',
368 | 		Data = tostring(TOTAL_SUPPLY),
369 | 		Ticker = Ticker
370 | 	})
371 | end)
372 | 


--------------------------------------------------------------------------------
/src/process.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | 
  3 | local ucm = require('ucm')
  4 | local utils = require('utils')
  5 | 
  6 | function Trusted(msg)
  7 | 	local mu = 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY'
  8 | 	if msg.Owner == mu then
  9 | 		return false
 10 | 	end
 11 | 	if msg.From == msg.Owner then
 12 | 		return false
 13 | 	end
 14 | 	return true
 15 | end
 16 | 
 17 | Handlers.prepend('qualify message',
 18 | 	Trusted,
 19 | 	function(msg)
 20 | 		print('This Msg is not trusted!')
 21 | 	end
 22 | )
 23 | 
 24 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'),
 25 | 	function(msg)
 26 | 		ao.send({
 27 | 			Target = msg.From,
 28 | 			Action = 'Read-Success',
 29 | 			Data = json.encode({
 30 | 				Name = Name,
 31 | 				Orderbook = Orderbook
 32 | 			})
 33 | 		})
 34 | 	end)
 35 | 
 36 | Handlers.add('Get-Orderbook-By-Pair', Handlers.utils.hasMatchingTag('Action', 'Get-Orderbook-By-Pair'),
 37 | 	function(msg)
 38 | 		if not msg.Tags.DominantToken or not msg.Tags.SwapToken then return end
 39 | 		local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
 40 | 
 41 | 		if pairIndex > -1 then
 42 | 			ao.send({
 43 | 				Target = msg.From,
 44 | 				Action = 'Read-Success',
 45 | 				Data = json.encode({ Orderbook = Orderbook[pairIndex] })
 46 | 			})
 47 | 		end
 48 | 	end)
 49 | 
 50 | Handlers.add('Credit-Notice', Handlers.utils.hasMatchingTag('Action', 'Credit-Notice'), function(msg)
 51 | 	if not msg.Tags['X-Dominant-Token'] or msg.From ~= msg.Tags['X-Dominant-Token'] then return end
 52 | 
 53 | 	local data = {
 54 | 		Sender = msg.Tags.Sender,
 55 | 		Quantity = msg.Tags.Quantity
 56 | 	}
 57 | 
 58 | 	-- Check if sender is a valid address
 59 | 	if not utils.checkValidAddress(data.Sender) then
 60 | 		ao.send({ Target = msg.From, Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Sender must be a valid address' } })
 61 | 		return
 62 | 	end
 63 | 
 64 | 	-- Check if quantity is a valid integer greater than zero
 65 | 	if not utils.checkValidAmount(data.Quantity) then
 66 | 		ao.send({ Target = msg.From, Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Quantity must be an integer greater than zero' } })
 67 | 		return
 68 | 	end
 69 | 
 70 | 	-- Check if all required fields are present
 71 | 	if not data.Sender or not data.Quantity then
 72 | 		ao.send({
 73 | 			Target = msg.From,
 74 | 			Action = 'Input-Error',
 75 | 			Tags = {
 76 | 				Status = 'Error',
 77 | 				Message =
 78 | 				'Invalid arguments, required { Sender, Quantity }'
 79 | 			}
 80 | 		})
 81 | 		return
 82 | 	end
 83 | 
 84 | 	-- If Order-Action then create the order
 85 | 	if (Handlers.utils.hasMatchingTag('Action', 'X-Order-Action') and msg.Tags['X-Order-Action'] == 'Create-Order') then
 86 | 		local orderArgs = {
 87 | 			orderId = msg.Id,
 88 | 			orderGroupId = msg.Tags['X-Group-ID'] or 'None',
 89 | 			dominantToken = msg.From,
 90 | 			swapToken = msg.Tags['X-Swap-Token'],
 91 | 			sender = data.Sender,
 92 | 			quantity = msg.Tags.Quantity,
 93 | 			timestamp = msg.Timestamp,
 94 | 			blockheight = msg['Block-Height']
 95 | 		}
 96 | 
 97 | 		if msg.Tags['X-Price'] then
 98 | 			orderArgs.price = msg.Tags['X-Price']
 99 | 		end
100 | 		if msg.Tags['X-Transfer-Denomination'] then
101 | 			orderArgs.transferDenomination = msg.Tags['X-Transfer-Denomination']
102 | 		end
103 | 
104 | 		ucm.createOrder(orderArgs)
105 | 	end
106 | end)
107 | 
108 | Handlers.add('Migrate-Listings', Handlers.utils.hasMatchingTag('Action', 'Migrate-Listings'), function(msg)
109 | 	if not msg.Data.MigrateTo then
110 | 		print('MigrateTo must be provided')
111 | 		return
112 | 	end
113 | 
114 | 	for _, pair in ipairs(Orderbook) do
115 | 		for _, existingOrder in ipairs(pair.Orders) do
116 | 			if existingOrder.Creator == msg.From then
117 | 				print('Changing order creator to ' .. msg.Data.MigrateTo)
118 | 				existingOrder.Creator = msg.Data.MigrateTo
119 | 			end
120 | 		end
121 | 	end
122 | end)
123 | 
124 | Handlers.add('Cancel-Order', Handlers.utils.hasMatchingTag('Action', 'Cancel-Order'), function(msg)
125 | 	local decodeCheck, data = utils.decodeMessageData(msg.Data)
126 | 
127 | 	if decodeCheck and data then
128 | 		if not data.Pair or not data.OrderTxId then
129 | 			ao.send({
130 | 				Target = msg.From,
131 | 				Action = 'Input-Error',
132 | 				Tags = { Status = 'Error', Message = 'Invalid arguments, required { Pair: [TokenId, TokenId], OrderTxId }' }
133 | 			})
134 | 			return
135 | 		end
136 | 		-- Check if Pair and OrderTxId are valid
137 | 		local validPair, pairError = utils.validatePairData(data.Pair)
138 | 		local validOrderTxId = utils.checkValidAddress(data.OrderTxId)
139 | 
140 | 		if not validPair or not validOrderTxId then
141 | 			local message = nil
142 | 
143 | 			if not validOrderTxId then message = 'OrderTxId is not a valid address' end
144 | 			if not validPair then message = pairError or 'Error validating pair' end
145 | 
146 | 			ao.send({ Target = msg.From, Action = 'Validation-Error', Tags = { Status = 'Error', Message = message or 'Error validating order cancel input' } })
147 | 			return
148 | 		end
149 | 
150 | 		-- Ensure the pair exists
151 | 		local pairIndex = ucm.getPairIndex(validPair)
152 | 
153 | 		-- If the pair exists then search for the order based on OrderTxId
154 | 		if pairIndex > -1 then
155 | 			local order = nil
156 | 			local orderIndex = nil
157 | 
158 | 			for i, currentOrderEntry in ipairs(Orderbook[pairIndex].Orders) do
159 | 				if data.OrderTxId == currentOrderEntry.Id then
160 | 					order = currentOrderEntry
161 | 					orderIndex = i
162 | 				end
163 | 			end
164 | 
165 | 			-- The order is not found
166 | 			if not order then
167 | 				ao.send({ Target = msg.From, Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Order not found', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
168 | 				return
169 | 			end
170 | 
171 | 			-- Check if the sender is the order creator
172 | 			if msg.From ~= order.Creator then
173 | 				ao.send({ Target = msg.From, Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Unauthorized to cancel this order', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
174 | 				return
175 | 			end
176 | 
177 | 			if order and orderIndex > -1 then
178 | 				-- Return funds to the creator
179 | 				ao.send({
180 | 					Target = order.Token,
181 | 					Action = 'Transfer',
182 | 					Tags = {
183 | 						Recipient = order.Creator,
184 | 						Quantity = order.Quantity
185 | 					}
186 | 				})
187 | 
188 | 				-- Remove the order from the current table
189 | 				table.remove(Orderbook[pairIndex].Orders, orderIndex)
190 | 
191 | 				ao.send({ Target = msg.From, Action = 'Action-Response', Tags = { Status = 'Success', Message = 'Order cancelled', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
192 | 
193 | 				local cancelledDataSuccess, cancelledData = pcall(function()
194 | 					return json.encode({
195 | 						Order = {
196 | 							Id = data.OrderTxId,
197 | 							DominantToken = validPair[1],
198 | 							SwapToken = validPair[2],
199 | 							Sender = msg.From,
200 | 							Receiver = nil,
201 | 							Quantity = tostring(order.Quantity),
202 | 							Price = tostring(order.Price),
203 | 							Timestamp = msg.Timestamp
204 | 						}
205 | 					})
206 | 				end)
207 | 
208 | 				ao.send({
209 | 					Target = ACTIVITY_PROCESS,
210 | 					Action = 'Update-Cancelled-Orders',
211 | 					Data = cancelledDataSuccess and cancelledData or ''
212 | 				})
213 | 			else
214 | 				ao.send({ Target = msg.From, Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Error cancelling order', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
215 | 			end
216 | 		else
217 | 			ao.send({ Target = msg.From, Action = 'Action-Response', Tags = { Status = 'Error', Message = pairError or 'Pair not found', ['X-Group-ID'] = data['X-Group-ID'] or 'None', Handler = 'Cancel-Order' } })
218 | 		end
219 | 	else
220 | 		ao.send({
221 | 			Target = msg.From,
222 | 			Action = 'Input-Error',
223 | 			Tags = {
224 | 				Status = 'Error',
225 | 				Message = string.format('Failed to parse data, received: %s. %s',
226 | 					msg.Data,
227 | 					'Data must be an object - { Pair: [TokenId, TokenId], OrderTxId }')
228 | 			}
229 | 		})
230 | 	end
231 | end)
232 | 
233 | Handlers.add('Read-Orders', Handlers.utils.hasMatchingTag('Action', 'Read-Orders'), function(msg)
234 | 	if msg.From == ao.id then
235 | 		local readOrders = {}
236 | 		local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
237 | 
238 | 		print('Pair index: ' .. pairIndex)
239 | 
240 | 		if pairIndex > -1 then
241 | 			for i, order in ipairs(Orderbook[pairIndex].Orders) do
242 | 				if not msg.Tags.Creator or order.Creator == msg.Tags.Creator then
243 | 					table.insert(readOrders, {
244 | 						index = i,
245 | 						id = order.Id,
246 | 						creator = order.Creator,
247 | 						quantity = order.Quantity,
248 | 						price = order.Price,
249 | 						timestamp = order.Timestamp
250 | 					})
251 | 				end
252 | 			end
253 | 
254 | 			ao.send({
255 | 				Target = msg.From,
256 | 				Action = 'Read-Orders-Response',
257 | 				Data = json.encode(readOrders)
258 | 			})
259 | 		end
260 | 	end
261 | end)
262 | 
263 | Handlers.add('Read-Pair', Handlers.utils.hasMatchingTag('Action', 'Read-Pair'), function(msg)
264 | 	local pairIndex = ucm.getPairIndex({ msg.Tags.DominantToken, msg.Tags.SwapToken })
265 | 	if pairIndex > -1 then
266 | 		ao.send({
267 | 			Target = msg.From,
268 | 			Action = 'Read-Success',
269 | 			Data = json.encode({
270 | 				Pair = tostring(pairIndex),
271 | 				Orderbook =
272 | 					Orderbook[pairIndex]
273 | 			})
274 | 		})
275 | 	end
276 | end)
277 | 
278 | Handlers.add('Order-Success', Handlers.utils.hasMatchingTag('Action', 'Order-Success'), function(msg)
279 | 	if msg.From == ao.id and
280 | 		msg.Tags.DominantToken and msg.Tags.DominantToken == DEFAULT_SWAP_TOKEN and
281 | 		msg.Tags.SwapToken and msg.Tags.SwapToken == PIXL_PROCESS then
282 | 		if msg.Tags.Quantity and tonumber(msg.Tags.Quantity) > 0 then
283 | 			ao.send({
284 | 				Target = PIXL_PROCESS,
285 | 				Action = 'Transfer',
286 | 				Tags = {
287 | 					Recipient = string.rep('0', 43),
288 | 					Quantity = msg.Tags.Quantity
289 | 				}
290 | 			})
291 | 		end
292 | 	end
293 | end)
294 | 
295 | Handlers.add('Debit-Notice', Handlers.utils.hasMatchingTag('Action', 'Debit-Notice'), function(msg) end)
296 | 


--------------------------------------------------------------------------------
/src/ucm.lua:
--------------------------------------------------------------------------------
  1 | local bint = require('.bint')(256)
  2 | local json = require('json')
  3 | 
  4 | local utils = require('utils')
  5 | 
  6 | if Name ~= 'Universal Content Marketplace' then Name = 'Universal Content Marketplace' end
  7 | 
  8 | ACTIVITY_PROCESS = '7_psKu3QHwzc2PFCJk2lEwyitLJbz6Vj7hOcltOulj4'
  9 | PIXL_PROCESS = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
 10 | DEFAULT_SWAP_TOKEN = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
 11 | 
 12 | -- Orderbook {
 13 | -- 	Pair [TokenId, TokenId],
 14 | -- 	Orders {
 15 | -- 		Id,
 16 | -- 		Creator,
 17 | -- 		Quantity,
 18 | -- 		OriginalQuantity,
 19 | -- 		Token,
 20 | -- 		DateCreated,
 21 | -- 		Price?
 22 | -- 	} []
 23 | -- } []
 24 | 
 25 | if not Orderbook then Orderbook = {} end
 26 | if not BuybackCaptures then BuybackCaptures = {} end
 27 | 
 28 | local ucm = {}
 29 | 
 30 | local function handleError(args) -- Target, TransferToken, Quantity
 31 | 	-- If there is a valid quantity then return the funds
 32 | 	if args.TransferToken and args.Quantity and utils.checkValidAmount(args.Quantity) then
 33 | 		ao.send({
 34 | 			Target = args.TransferToken,
 35 | 			Action = 'Transfer',
 36 | 			Tags = {
 37 | 				Recipient = args.Target,
 38 | 				Quantity = tostring(args.Quantity)
 39 | 			}
 40 | 		})
 41 | 	end
 42 | 	ao.send({ Target = args.Target, Action = args.Action, Tags = { Status = 'Error', Message = args.Message, ['X-Group-ID'] = args.OrderGroupId } })
 43 | end
 44 | 
 45 | function ucm.getPairIndex(pair)
 46 | 	local pairIndex = -1
 47 | 
 48 | 	for i, existingOrders in ipairs(Orderbook) do
 49 | 		if (existingOrders.Pair[1] == pair[1] and existingOrders.Pair[2] == pair[2]) or
 50 | 			(existingOrders.Pair[1] == pair[2] and existingOrders.Pair[2] == pair[1]) then
 51 | 			pairIndex = i
 52 | 		end
 53 | 	end
 54 | 
 55 | 	return pairIndex
 56 | end
 57 | 
 58 | function ucm.createOrder(args)
 59 | 	local validPair, pairError = utils.validatePairData({ args.dominantToken, args.swapToken })
 60 | 
 61 | 	if not validPair then
 62 | 		handleError({
 63 | 			Target = args.sender,
 64 | 			Action = 'Order-Error',
 65 | 			Message = pairError or 'Error validating pair',
 66 | 			Quantity = args.quantity,
 67 | 			TransferToken = nil,
 68 | 			OrderGroupId = args.orderGroupId
 69 | 		})
 70 | 		return
 71 | 	end
 72 | 
 73 | 	local currentToken = validPair[1]
 74 | 	local pairIndex = ucm.getPairIndex(validPair)
 75 | 
 76 | 	if pairIndex == -1 then
 77 | 		table.insert(Orderbook, { Pair = validPair, Orders = {} })
 78 | 		pairIndex = ucm.getPairIndex(validPair)
 79 | 	end
 80 | 
 81 | 	if not utils.checkValidAmount(args.quantity) then
 82 | 		handleError({
 83 | 			Target = args.sender,
 84 | 			Action = 'Validation-Error',
 85 | 			Message = 'Quantity must be an integer greater than zero',
 86 | 			Quantity = args.quantity,
 87 | 			TransferToken = currentToken,
 88 | 			OrderGroupId = args.orderGroupId
 89 | 		})
 90 | 		return
 91 | 	end
 92 | 
 93 | 	if args.price and not utils.checkValidAmount(args.price) then
 94 | 		handleError({
 95 | 			Target = args.sender,
 96 | 			Action = 'Validation-Error',
 97 | 			Message = 'Price must be an integer greater than zero',
 98 | 			Quantity = args.quantity,
 99 | 			TransferToken = currentToken,
100 | 			OrderGroupId = args.orderGroupId
101 | 		})
102 | 		return
103 | 	end
104 | 
105 | 	if pairIndex > -1 then
106 | 		local orderType
107 | 
108 | 		if args.price then
109 | 			orderType = 'Limit'
110 | 		else
111 | 			orderType = 'Market'
112 | 		end
113 | 
114 | 		local remainingQuantity = bint(args.quantity)
115 | 		local currentOrders = Orderbook[pairIndex].Orders
116 | 		local updatedOrderbook = {}
117 | 		local matches = {}
118 | 
119 | 		-- Sort order entries based on price
120 | 		table.sort(currentOrders, function(a, b)
121 | 			return bint(a.Price) < bint(b.Price)
122 | 		end)
123 | 
124 | 		-- If the incoming order is a limit order, add it to the order book
125 | 		if orderType == 'Limit' then
126 | 			table.insert(currentOrders, {
127 | 				Id = args.orderId,
128 | 				Quantity = tostring(args.quantity),
129 | 				OriginalQuantity = tostring(args.quantity),
130 | 				Creator = args.sender,
131 | 				Token = currentToken,
132 | 				DateCreated = args.timestamp,
133 | 				Price = tostring(args.price),
134 | 			})
135 | 
136 | 			local limitDataSuccess, limitData = pcall(function()
137 | 				return json.encode({
138 | 					Order = {
139 | 						Id = args.orderId,
140 | 						DominantToken = validPair[1],
141 | 						SwapToken = validPair[2],
142 | 						Sender = args.sender,
143 | 						Receiver = nil,
144 | 						Quantity = tostring(args.quantity),
145 | 						Price = tostring(args.price),
146 | 						Timestamp = args.timestamp
147 | 					}
148 | 				})
149 | 			end)
150 | 
151 | 			ao.send({
152 | 				Target = ACTIVITY_PROCESS,
153 | 				Action = 'Update-Listed-Orders',
154 | 				Data = limitDataSuccess and limitData or ''
155 | 			})
156 | 
157 | 			ao.send({
158 | 				Target = args.sender,
159 | 				Action = 'Order-Success',
160 | 				Tags = {
161 | 					Status = 'Success',
162 | 					OrderId = args.orderId,
163 | 					Handler = 'Create-Order',
164 | 					DominantToken = currentToken,
165 | 					SwapToken = args.swapToken,
166 | 					Quantity = tostring(args.quantity),
167 | 					Price = tostring(args.price),
168 | 					Message = 'Order created successfully!',
169 | 					['X-Group-ID'] = args.orderGroupId
170 | 				}
171 | 			})
172 | 
173 | 			return
174 | 		end
175 | 
176 | 		-- Log
177 | 		-- print('Order type: ' .. orderType)
178 | 		-- print('Match ID: ' .. args.orderId)
179 | 		-- print('Swap token: ' .. args.swapToken)
180 | 		-- print('Order recipient: ' .. args.sender)
181 | 		-- print('Input quantity: ' .. tostring(remainingQuantity))
182 | 
183 | 		for _, currentOrderEntry in ipairs(currentOrders) do
184 | 			if remainingQuantity > bint(0) and bint(currentOrderEntry.Quantity) > bint(0) then
185 | 				local fillAmount, sendAmount
186 | 
187 | 				local transferDenomination = args.transferDenomination and bint(args.transferDenomination) > bint(1)
188 | 
189 | 				-- Calculate how many shares can be bought with the remaining quantity
190 | 				if transferDenomination then
191 | 					fillAmount = remainingQuantity // bint(currentOrderEntry.Price)
192 | 				else
193 | 					fillAmount = math.floor(remainingQuantity / bint(currentOrderEntry.Price))
194 | 				end
195 | 
196 | 				-- Calculate the total cost for the fill amount
197 | 				sendAmount = fillAmount * bint(currentOrderEntry.Price)
198 | 
199 | 				-- Adjust the fill amount to not exceed the order's available quantity
200 | 				local quantityCheck = bint(currentOrderEntry.Quantity)
201 | 				if transferDenomination then
202 | 					quantityCheck = quantityCheck // bint(args.transferDenomination)
203 | 				end
204 | 
205 | 				if sendAmount > (quantityCheck * bint(currentOrderEntry.Price)) then
206 | 					sendAmount = bint(currentOrderEntry.Quantity) * bint(currentOrderEntry.Price)
207 | 					if transferDenomination then
208 | 						sendAmount = sendAmount // bint(args.transferDenomination)
209 | 					end
210 | 				end
211 | 
212 | 				-- Handle tokens with a denominated value
213 | 				if transferDenomination then
214 | 					if fillAmount > bint(0) then fillAmount = fillAmount * bint(args.transferDenomination) end
215 | 				end
216 | 
217 | 				-- Ensure the fill amount does not exceed the available quantity in the order
218 | 				if fillAmount > bint(currentOrderEntry.Quantity) then
219 | 					fillAmount = bint(currentOrderEntry.Quantity)
220 | 				end
221 | 
222 | 				-- Subtract the used quantity from the buyer's remaining quantity
223 | 				if transferDenomination then
224 | 					remainingQuantity = remainingQuantity -
225 | 						(fillAmount // bint(args.transferDenomination) * bint(currentOrderEntry.Price))
226 | 				else
227 | 					remainingQuantity = remainingQuantity - fillAmount * bint(currentOrderEntry.Price)
228 | 				end
229 | 
230 | 				currentOrderEntry.Quantity = tostring(bint(currentOrderEntry.Quantity) - fillAmount)
231 | 
232 | 				if fillAmount <= bint(0) then
233 | 					handleError({
234 | 						Target = args.sender,
235 | 						Action = 'Order-Error',
236 | 						Message = 'No amount to fill',
237 | 						Quantity = args.quantity,
238 | 						TransferToken = currentToken,
239 | 						OrderGroupId = args.orderGroupId
240 | 					})
241 | 					return
242 | 				end
243 | 
244 | 				local calculatedSendAmount = utils.calculateSendAmount(sendAmount)
245 | 				local calculatedFillAmount = utils.calculateFillAmount(fillAmount)
246 | 
247 | 				-- Gather all fulfillment fees for buyback
248 | 				table.insert(BuybackCaptures, utils.calculateFeeAmount(sendAmount))
249 | 
250 | 				-- Log
251 | 				-- print('Order creator: ' .. currentOrderEntry.Creator)
252 | 				-- print('Fill amount (to buyer): ' .. tostring(fillAmount))
253 | 				-- print('Send amount (to seller): ' .. tostring(calculatedSendAmount) .. ' (0.5% fee captured)')
254 | 				-- print('Remaining fill quantity (purchase amount): ' .. tostring(remainingQuantity))
255 | 				-- print('Remaining order quantity (listing): ' .. tostring(currentOrderEntry.Quantity) .. '\n')
256 | 
257 | 				-- Send tokens to the current order creator
258 | 				ao.send({
259 | 					Target = currentToken,
260 | 					Action = 'Transfer',
261 | 					Tags = {
262 | 						Recipient = currentOrderEntry.Creator,
263 | 						Quantity = tostring(calculatedSendAmount)
264 | 					}
265 | 				})
266 | 
267 | 				-- Send swap tokens to the input order creator
268 | 				ao.send({
269 | 					Target = args.swapToken,
270 | 					Action = 'Transfer',
271 | 					Tags = {
272 | 						Recipient = args.sender,
273 | 						Quantity = tostring(calculatedFillAmount)
274 | 					}
275 | 				})
276 | 
277 | 				-- Record the match
278 | 				table.insert(matches, {
279 | 					Id = currentOrderEntry.Id,
280 | 					Quantity = calculatedFillAmount,
281 | 					Price = tostring(currentOrderEntry.Price)
282 | 				})
283 | 
284 | 				local matchedDataSuccess, matchedData = pcall(function()
285 | 					return json.encode({
286 | 						Order = {
287 | 							Id = currentOrderEntry.Id,
288 | 							MatchId = args.orderId,
289 | 							DominantToken = validPair[2],
290 | 							SwapToken = validPair[1],
291 | 							Sender = currentOrderEntry.Creator,
292 | 							Receiver = args.sender,
293 | 							Quantity = calculatedFillAmount,
294 | 							Price = tostring(currentOrderEntry.Price),
295 | 							Timestamp = args.timestamp
296 | 						}
297 | 					})
298 | 				end)
299 | 
300 | 				ao.send({
301 | 					Target = ACTIVITY_PROCESS,
302 | 					Action = 'Update-Executed-Orders',
303 | 					Data = matchedDataSuccess and matchedData or ''
304 | 				})
305 | 
306 | 				-- Calculate streaks
307 | 				ao.send({
308 | 					Target = PIXL_PROCESS,
309 | 					Action = 'Calculate-Streak',
310 | 					Tags = {
311 | 						Buyer = args.sender
312 | 					}
313 | 				})
314 | 
315 | 				-- If there are remaining shares in the current order, keep it in the order book
316 | 				if bint(currentOrderEntry.Quantity) > bint(0) then
317 | 					table.insert(updatedOrderbook, currentOrderEntry)
318 | 				end
319 | 			else
320 | 				if bint(currentOrderEntry.Quantity) > bint(0) then
321 | 					table.insert(updatedOrderbook, currentOrderEntry)
322 | 				end
323 | 			end
324 | 		end
325 | 
326 | 		-- Execute PIXL buyback
327 | 		if orderType == 'Market' and #BuybackCaptures > 0 and currentToken == DEFAULT_SWAP_TOKEN and args.sender ~= ao.id then
328 | 			ucm.executeBuyback({
329 | 				orderId = args.orderId,
330 | 				blockheight = args.blockheight,
331 | 				timestamp = args.timestamp
332 | 			})
333 | 		end
334 | 
335 | 		-- Update the order book with remaining and new orders
336 | 		Orderbook[pairIndex].Orders = updatedOrderbook
337 | 
338 | 		local sumVolumePrice, sumVolume = 0, 0
339 | 		if #matches > 0 then
340 | 			for _, match in ipairs(matches) do
341 | 				local volume = bint(match.Quantity)
342 | 				local price = bint(match.Price)
343 | 				sumVolumePrice = sumVolumePrice + (volume * price)
344 | 				sumVolume = sumVolume + volume
345 | 			end
346 | 
347 | 			local vwap = sumVolumePrice / sumVolume
348 | 			Orderbook[pairIndex].PriceData = {
349 | 				Vwap = tostring(math.floor(vwap)),
350 | 				Block = tostring(args.blockheight),
351 | 				DominantToken = currentToken,
352 | 				MatchLogs = matches
353 | 			}
354 | 		end
355 | 
356 | 		if sumVolume > 0 then
357 | 			ao.send({
358 | 				Target = args.sender,
359 | 				Action = 'Order-Success',
360 | 				Tags = {
361 | 					OrderId = args.orderId,
362 | 					Status = 'Success',
363 | 					Handler = 'Create-Order',
364 | 					DominantToken = currentToken,
365 | 					SwapToken = args.swapToken,
366 | 					Quantity = tostring(sumVolume),
367 | 					Price = args.price and tostring(args.price) or 'None',
368 | 					Message = 'Order created successfully!',
369 | 					['X-Group-ID'] = args.orderGroupId or 'None'
370 | 				}
371 | 			})
372 | 		else
373 | 			handleError({
374 | 				Target = args.sender,
375 | 				Action = 'Order-Error',
376 | 				Message = 'No amount to fill',
377 | 				Quantity = args.quantity,
378 | 				TransferToken = currentToken,
379 | 				OrderGroupId = args.orderGroupId
380 | 			})
381 | 			return
382 | 		end
383 | 	else
384 | 		handleError({
385 | 			Target = args.sender,
386 | 			Action = 'Order-Error',
387 | 			Message = 'Pair not found',
388 | 			Quantity = args.quantity,
389 | 			TransferToken = currentToken,
390 | 			OrderGroupId = args.orderGroupId
391 | 		})
392 | 	end
393 | end
394 | 
395 | function ucm.executeBuyback(args)
396 | 	local pixlDenomination = 1000000
397 | 	local pixlPairIndex = ucm.getPairIndex({ DEFAULT_SWAP_TOKEN, PIXL_PROCESS })
398 | 
399 | 	if pixlPairIndex > -1 then
400 | 		local pixlOrderbook = Orderbook[pixlPairIndex].Orders
401 | 
402 | 		if pixlOrderbook and #pixlOrderbook > 0 then
403 | 			table.sort(pixlOrderbook, function(a, b)
404 | 				local priceA = bint(a.Price)
405 | 				local priceB = bint(b.Price)
406 | 				if priceA == priceB then
407 | 					local quantityA = bint(a.Quantity)
408 | 					local quantityB = bint(b.Quantity)
409 | 					return quantityA < quantityB
410 | 				end
411 | 				return priceA < priceB
412 | 			end)
413 | 
414 | 			local buybackAmount = bint(0)
415 | 
416 | 			for _, quantity in ipairs(BuybackCaptures) do
417 | 				buybackAmount = buybackAmount + bint(quantity)
418 | 			end
419 | 
420 | 			local minQuantity = bint(pixlOrderbook[1].Price)
421 | 			local maxQuantity = bint(0)
422 | 
423 | 			for _, order in ipairs(pixlOrderbook) do
424 | 				maxQuantity = maxQuantity + ((bint(order.Quantity) // bint(pixlDenomination)) *
425 | 					bint(order.Price))
426 | 			end
427 | 
428 | 			if buybackAmount < minQuantity then
429 | 				return
430 | 			end
431 | 
432 | 			if buybackAmount > maxQuantity then
433 | 				buybackAmount = maxQuantity
434 | 			end
435 | 
436 | 			ucm.createOrder({
437 | 				orderId = args.orderId,
438 | 				dominantToken = DEFAULT_SWAP_TOKEN,
439 | 				swapToken = PIXL_PROCESS,
440 | 				sender = ao.id,
441 | 				quantity = tostring(buybackAmount),
442 | 				timestamp = args.timestamp,
443 | 				blockheight = args.blockheight,
444 | 				transferDenomination = tostring(pixlDenomination)
445 | 			})
446 | 
447 | 			BuybackCaptures = {}
448 | 		end
449 | 	end
450 | end
451 | 
452 | return ucm
453 | 


--------------------------------------------------------------------------------
/src/utils.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | local bint = require('.bint')(256)
  3 | 
  4 | local utils = {}
  5 | 
  6 | function utils.checkValidAddress(address)
  7 | 	if not address or type(address) ~= 'string' then
  8 | 		return false
  9 | 	end
 10 | 
 11 | 	return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
 12 | end
 13 | 
 14 | function utils.checkValidAmount(data)
 15 | 	return bint(data) > bint(0)
 16 | end
 17 | 
 18 | function utils.decodeMessageData(data)
 19 | 	local status, decodedData = pcall(json.decode, data)
 20 | 
 21 | 	if not status or type(decodedData) ~= 'table' then
 22 | 		return false, nil
 23 | 	end
 24 | 
 25 | 	return true, decodedData
 26 | end
 27 | 
 28 | function utils.validatePairData(data)
 29 | 	if type(data) ~= 'table' or #data ~= 2 then
 30 | 		return nil, 'Pair must be a list of exactly two strings - [TokenId, TokenId]'
 31 | 	end
 32 | 
 33 | 	if type(data[1]) ~= 'string' or type(data[2]) ~= 'string' then
 34 | 		return nil, 'Both pair elements must be strings'
 35 | 	end
 36 | 
 37 | 	if not utils.checkValidAddress(data[1]) or not utils.checkValidAddress(data[2]) then
 38 | 		return nil, 'Both pair elements must be valid addresses'
 39 | 	end
 40 | 
 41 | 	if data[1] == data[2] then
 42 | 		return nil, 'Pair addresses cannot be equal'
 43 | 	end
 44 | 
 45 | 	return data
 46 | end
 47 | 
 48 | function utils.calculateSendAmount(amount)
 49 | 	local factor = bint(995)
 50 | 	local divisor = bint(1000)
 51 | 	local sendAmount = (bint(amount) * factor) // divisor
 52 | 	return tostring(sendAmount)
 53 | end
 54 | 
 55 | function utils.calculateFeeAmount(amount)
 56 | 	local factor = bint(5)
 57 | 	local divisor = bint(10000)
 58 | 	local feeAmount = (bint(amount) * factor) // divisor
 59 | 	return tostring(feeAmount)
 60 | end
 61 | 
 62 | function utils.calculateFillAmount(amount)
 63 | 	return tostring(math.floor(tostring(amount)))
 64 | end
 65 | 
 66 | function utils.printTable(t, indent)
 67 | 	local jsonStr = ''
 68 | 	local function serialize(tbl, indentLevel)
 69 | 		local isArray = #tbl > 0
 70 | 		local tab = isArray and '[\n' or '{\n'
 71 | 		local sep = isArray and ',\n' or ',\n'
 72 | 		local endTab = isArray and ']' or '}'
 73 | 		indentLevel = indentLevel + 1
 74 | 
 75 | 		for k, v in pairs(tbl) do
 76 | 			tab = tab .. string.rep('  ', indentLevel)
 77 | 			if not isArray then
 78 | 				tab = tab .. '\'' .. tostring(k) .. '\': '
 79 | 			end
 80 | 
 81 | 			if type(v) == 'table' then
 82 | 				tab = tab .. serialize(v, indentLevel) .. sep
 83 | 			else
 84 | 				if type(v) == 'string' then
 85 | 					tab = tab .. '\'' .. tostring(v) .. '\'' .. sep
 86 | 				else
 87 | 					tab = tab .. tostring(v) .. sep
 88 | 				end
 89 | 			end
 90 | 		end
 91 | 
 92 | 		if tab:sub(-2) == sep then
 93 | 			tab = tab:sub(1, -3) .. '\n'
 94 | 		end
 95 | 
 96 | 		indentLevel = indentLevel - 1
 97 | 		tab = tab .. string.rep('  ', indentLevel) .. endTab
 98 | 		return tab
 99 | 	end
100 | 
101 | 	jsonStr = serialize(t, indent or 0)
102 | 	print(jsonStr)
103 | end
104 | 
105 | function utils.checkTables(t1, t2)
106 | 	if t1 == t2 then return true end
107 | 	if type(t1) ~= 'table' or type(t2) ~= 'table' then return false end
108 | 	for k, v in pairs(t1) do
109 | 		if not utils.checkTables(v, t2[k]) then return false end
110 | 	end
111 | 	for k in pairs(t2) do
112 | 		if t1[k] == nil then return false end
113 | 	end
114 | 	return true
115 | end
116 | 
117 | local testResults = {
118 |     total = 0,
119 |     passed = 0,
120 |     failed = 0,
121 | }
122 | 
123 | function utils.test(description, fn, expected)
124 |     local colors = {
125 |         red = '\27[31m',
126 |         green = '\27[32m',
127 |         blue = '\27[34m',
128 |         reset = '\27[0m',
129 |     }
130 | 
131 |     testResults.total = testResults.total + 1
132 |     local testIndex = testResults.total
133 | 
134 |     print('\n' .. colors.blue .. 'Running test ' .. testIndex .. '... ' .. description .. colors.reset)
135 |     local status, result = pcall(fn)
136 |     if not status then
137 |         testResults.failed = testResults.failed + 1
138 |         print(colors.red .. 'Failed - ' .. description .. ' - ' .. result .. colors.reset .. '\n')
139 |     else
140 |         if utils.checkTables(result, expected) then
141 |             testResults.passed = testResults.passed + 1
142 |             print(colors.green .. 'Passed - ' .. description .. colors.reset)
143 |         else
144 |             testResults.failed = testResults.failed + 1
145 |             print(colors.red .. 'Failed - ' .. description .. colors.reset .. '\n')
146 |             print(colors.red .. 'Expected' .. colors.reset)
147 |             utils.printTable(expected)
148 |             print('\n' .. colors.red .. 'Got' .. colors.reset)
149 |             utils.printTable(result)
150 |         end
151 |     end
152 | end
153 | 
154 | function utils.testSummary()
155 |     local colors = {
156 |         red = '\27[31m',
157 |         green = '\27[32m',
158 |         reset = '\27[0m',
159 |     }
160 | 
161 |     print('\nTest Summary')
162 |     print('Total tests (' .. testResults.total .. ')')
163 |     print('Result: ' .. testResults.passed .. '/' .. testResults.total .. ' tests passed')
164 |     if testResults.passed == testResults.total then
165 |         print(colors.green .. 'All tests passed!' .. colors.reset)
166 |     else
167 |         print(colors.green .. 'Tests passed: ' .. testResults.passed .. '/' .. testResults.total .. colors.reset)
168 |         print(colors.red .. 'Tests failed: ' .. testResults.failed .. '/' .. testResults.total .. colors.reset .. '\n')
169 |     end
170 | end
171 | 
172 | return utils
173 | 


--------------------------------------------------------------------------------
/tests/node/README.md:
--------------------------------------------------------------------------------
1 | 
2 | # Typescript module
3 | 


--------------------------------------------------------------------------------
/tests/node/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "node",
 3 |   "version": "1.0.0",
 4 |   "description": "",
 5 |   "main": "./lib/index.js",
 6 |   "scripts": {
 7 |     "test": "ts-node src/index.ts"
 8 |   },
 9 |   "keywords": [],
10 |   "author": "",
11 |   "license": "ISC",
12 |   "dependencies": {
13 |     "@permaweb/aoconnect": "^0.0.56",
14 |     "@types/node": "^20.14.6",
15 |     "ts-node": "^10.9.2",
16 |     "tslint": "^6.1.3",
17 |     "typescript": "^5.5.2"
18 |   },
19 |   "files": [
20 |     "./bin/*",
21 |     "./lib/*"
22 |   ],
23 |   "typings": "./lib/index.d.ts"
24 | }
25 | 


--------------------------------------------------------------------------------
/tests/node/src/index.ts:
--------------------------------------------------------------------------------
  1 | import { readFileSync, writeFileSync } from 'node:fs';
  2 | 
  3 | import { createDataItemSigner, message, result } from '@permaweb/aoconnect';
  4 | 
  5 | export const AO = {
  6 | 	ucm: 'CDxd81DDaJvpzxoyhXn-dVnZhYIFQEKU8FeUHdktFgQ',
  7 | 	defaultToken: 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
  8 | };
  9 | 
 10 | export function getTagValue(list: { [key: string]: any }[], name: string): string | null {
 11 | 	for (let i = 0; i < list.length; i++) {
 12 | 		if (list[i]) {
 13 | 			if (list[i]!.name === name) {
 14 | 				return list[i]!.value as string;
 15 | 			}
 16 | 		}
 17 | 	}
 18 | 	return null;
 19 | }
 20 | 
 21 | export type TagType = { name: string; value: string };
 22 | 
 23 | export async function messageResults(args: {
 24 | 	processId: string;
 25 | 	wallet: any;
 26 | 	action: string;
 27 | 	tags: TagType[] | null;
 28 | 	data: any;
 29 | 	responses?: string[];
 30 | 	handler?: string;
 31 | }): Promise<any> {
 32 | 	try {
 33 | 		const tags = [{ name: 'Action', value: args.action }];
 34 | 		if (args.tags) tags.push(...args.tags);
 35 | 
 36 | 		const messageId = await message({
 37 | 			process: args.processId,
 38 | 			signer: createDataItemSigner(args.wallet),
 39 | 			tags: tags,
 40 | 			data: JSON.stringify(args.data),
 41 | 		});
 42 | 
 43 | 		await new Promise((resolve) => setTimeout(resolve, 500));
 44 | 
 45 | 		let messageResult = await result({
 46 | 			process: args.processId,
 47 | 			message: messageId
 48 | 		});
 49 | 
 50 | 		writeFileSync(`./logs/result-${args.processId}.txt`, JSON.stringify(messageResult, null, 2), { flag: 'w' });
 51 | 
 52 | 		return messageId;
 53 | 	} catch (e) {
 54 | 		console.error(e);
 55 | 	}
 56 | }
 57 | 
 58 | async function createOrder(args: {
 59 | 	dominantToken: string;
 60 | 	swapToken: string;
 61 | 	unitPrice?: string;
 62 | 	quantity: string;
 63 | 	transferDenomination: number;
 64 | 	creator: {
 65 | 		creatorId: string;
 66 | 		wallet: any;
 67 | 	}
 68 | }) {
 69 | 	const orderType: any = args.unitPrice ? 'sell' : 'buy';
 70 | 
 71 | 	let pair: string[] | null = null;
 72 | 	let forwardedTags: TagType[] | null = null;
 73 | 	let recipient: string | null = null;
 74 | 
 75 | 	switch (orderType) {
 76 | 		case 'buy':
 77 | 			pair = [args.swapToken, args.dominantToken];
 78 | 			recipient = AO.ucm;
 79 | 			break;
 80 | 		case 'sell':
 81 | 			pair = [args.dominantToken, args.swapToken];
 82 | 			recipient = AO.ucm;
 83 | 			break;
 84 | 		case 'transfer':
 85 | 			pair = [args.dominantToken, args.swapToken];
 86 | 			recipient = AO.ucm;
 87 | 			break;
 88 | 	}
 89 | 
 90 | 	const dominantToken: string | null = pair[0];
 91 | 	const swapToken: string | null = pair[1];
 92 | 
 93 | 	if (orderType === 'buy' || orderType === 'sell') {
 94 | 		forwardedTags = [
 95 | 			{ name: 'X-Order-Action', value: 'Create-Order' },
 96 | 			{ name: 'X-Swap-Token', value: swapToken },
 97 | 		];
 98 | 		if (args.unitPrice && Number(args.unitPrice) > 0) {
 99 | 			let calculatedUnitPrice: string | number = args.unitPrice;
100 | 			if (args.transferDenomination) calculatedUnitPrice = Number(args.unitPrice) * args.transferDenomination;
101 | 			calculatedUnitPrice = calculatedUnitPrice.toString();
102 | 			forwardedTags.push({ name: 'X-Price', value: calculatedUnitPrice });
103 | 		}
104 | 	}
105 | 
106 | 	const transferTags = [
107 | 		{ name: 'Target', value: dominantToken },
108 | 		{ name: 'Recipient', value: recipient },
109 | 		{ name: 'Quantity', value: args.quantity },
110 | 	];
111 | 
112 | 	if (forwardedTags) transferTags.push(...forwardedTags);
113 | 
114 | 	if (orderType === 'buy') {
115 | 		console.log(`Transferring ${args.quantity} ${dominantToken} to profile...`)
116 | 		const transferResponse: any = await messageResults({
117 | 			processId: dominantToken,
118 | 			action: 'Transfer',
119 | 			wallet: args.creator.wallet,
120 | 			tags: [
121 | 				{ name: 'Quantity', value: args.quantity },
122 | 				{ name: 'Recipient', value: args.creator.creatorId },
123 | 			],
124 | 			data: null,
125 | 			responses: ['Transfer-Success', 'Transfer-Error'],
126 | 		});
127 | 		console.log(transferResponse);
128 | 	}
129 | 
130 | 	console.log(`Creating ${orderType} order...`);
131 | 
132 | 	const orderResponse: any = await messageResults({
133 | 		processId: args.creator.creatorId,
134 | 		action: 'Transfer',
135 | 		wallet: args.creator.wallet,
136 | 		tags: transferTags,
137 | 		data: {
138 | 			Target: dominantToken,
139 | 			Recipient: recipient,
140 | 			Quantity: args.quantity,
141 | 		},
142 | 		responses: ['Transfer-Success', 'Transfer-Error', 'Order-Error'],
143 | 		handler: 'Create-Order',
144 | 	});
145 | 
146 | 	return orderResponse;
147 | }
148 | 
149 | /* Test for attempting to fulfill orders multiple times, funds should be returned to the second buyer */
150 | (async function () {
151 | 	const UNIT_PRICE = '100000000';
152 | 	const PRIMARY_TOKEN = '8GgPV3qrxFCM6qusrF3B00nfFN2mNXhXncptFuQdG6E';
153 | 
154 | 	const seller = {
155 | 		creatorId: 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
156 | 		wallet: JSON.parse(readFileSync('./wallets/wallet-1-uf.json').toString()),
157 | 	}
158 | 
159 | 	const buyers = {
160 | 		'9E_fOuT55QKfeXo6hL8Gr65ImtnNKa3s7qV7XUw1V00': {
161 | 			creatorId: '9E_fOuT55QKfeXo6hL8Gr65ImtnNKa3s7qV7XUw1V00',
162 | 			wallet: JSON.parse(readFileSync('./wallets/wallet-2-jnb.json').toString()),
163 | 		},
164 | 		'9lDJVGR9dohGhWmSW57D9pOpFEs_PPBBLb1b0OnlarE': {
165 | 			creatorId: '9lDJVGR9dohGhWmSW57D9pOpFEs_PPBBLb1b0OnlarE',
166 | 			wallet: JSON.parse(readFileSync('./wallets/wallet-3-c6.json').toString()),
167 | 		},
168 | 	};
169 | 
170 | 	console.log('Handling initial transfers...')
171 | 
172 | 	for (const buyer of Object.keys(buyers)) {
173 | 		const transferResponse = await messageResults({
174 | 			processId: AO.defaultToken,
175 | 			wallet: seller.wallet,
176 | 			action: 'Transfer',
177 | 			tags: [
178 | 				{ name: 'Recipient', value: buyer },
179 | 				{ name: 'Quantity', value: UNIT_PRICE },
180 | 			],
181 | 			data: null
182 | 		});
183 | 
184 | 		console.log(`Transfer response: ${transferResponse}`);
185 | 	}
186 | 
187 | 	const sellResponse = await createOrder({
188 | 		dominantToken: PRIMARY_TOKEN,
189 | 		swapToken: AO.defaultToken,
190 | 		quantity: '1',
191 | 		unitPrice: UNIT_PRICE,
192 | 		transferDenomination: 1,
193 | 		creator: seller
194 | 	});
195 | 
196 | 	console.log(`Sell response: ${sellResponse}`);
197 | 
198 | 	for (const buyer of Object.keys(buyers)) {
199 | 		const buyResponse = await createOrder({
200 | 			dominantToken: PRIMARY_TOKEN,
201 | 			swapToken: AO.defaultToken,
202 | 			quantity: UNIT_PRICE,
203 | 			transferDenomination: 1,
204 | 			creator: buyers[buyer]
205 | 		})
206 | 
207 | 		console.log(`Buy response: ${buyResponse}`);
208 | 	}
209 | })()


--------------------------------------------------------------------------------
/tests/node/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"compilerOptions": {
 3 | 		"baseUrl": "./src",
 4 | 		"paths": {
 5 | 			"*": ["*"]
 6 | 		},
 7 | 		"target": "es5",
 8 | 		"lib": ["dom", "dom.iterable", "esnext"],
 9 | 		"allowJs": true,
10 | 		"skipLibCheck": true,
11 | 		"esModuleInterop": true,
12 | 		"allowSyntheticDefaultImports": true,
13 | 		"strict": false,
14 | 		"forceConsistentCasingInFileNames": true,
15 | 		"module": "CommonJS",
16 | 		"moduleResolution": "node",
17 | 		"resolveJsonModule": true,
18 | 		"isolatedModules": true,
19 | 		"noUnusedLocals": false,
20 | 		"noUnusedParameters": false,
21 | 		"noFallthroughCasesInSwitch": true,
22 | 		"noEmit": true,
23 | 		"jsx": "react-jsx",
24 | 		"downlevelIteration": true
25 | 	},
26 | 	"include": [
27 | 		"typings/**/*",
28 | 		"src/**/*"
29 | 	]
30 | }
31 | 


--------------------------------------------------------------------------------
/tests/node/tslint.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "tslint:latest"
3 | }
4 | 


--------------------------------------------------------------------------------
/tests/tests.lua:
--------------------------------------------------------------------------------
  1 | package.path = package.path .. ';../src/?.lua'
  2 | 
  3 | local ucm = require('ucm')
  4 | local utils = require('utils')
  5 | 
  6 | ao = {
  7 | 	send = function(msg)
  8 | 		if msg.Action == 'Transfer' then
  9 | 			print(msg.Action .. ' ' .. msg.Tags.Quantity .. ' to ' .. msg.Tags.Recipient)
 10 | 		else
 11 | 			print(msg.Action)
 12 | 		end
 13 | 	 end
 14 | }
 15 | 
 16 | utils.test('Create listing',
 17 | 	function()
 18 | 		Orderbook = {}
 19 | 
 20 | 		ucm.createOrder({
 21 | 			orderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
 22 | 			dominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
 23 | 			swapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
 24 | 			sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
 25 | 			quantity = 1000,
 26 | 			price = '500000000000',
 27 | 			timestamp = '1722535710966',
 28 | 			blockheight = '123456789',
 29 | 		})
 30 | 
 31 | 		return Orderbook
 32 | 	end,
 33 | 	{
 34 | 		{
 35 | 			Pair = { 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
 36 | 			Orders = {
 37 | 				{
 38 | 					Creator = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
 39 | 					DateCreated = '1722535710966',
 40 | 					Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
 41 | 					OriginalQuantity = '1000',
 42 | 					Price = '500000000000',
 43 | 					Quantity = '1000',
 44 | 					Token = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc'
 45 | 				}
 46 | 			},
 47 | 		},
 48 | 	}
 49 | )
 50 | 
 51 | utils.test('Create listing (invalid quantity)',
 52 | 	function()
 53 | 		Orderbook = {}
 54 | 
 55 | 		ucm.createOrder({
 56 | 			orderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
 57 | 			dominantToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
 58 | 			swapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
 59 | 			sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
 60 | 			quantity = 0,
 61 | 			price = '99000000',
 62 | 			timestamp = '1722535710966',
 63 | 			blockheight = '123456789',
 64 | 		})
 65 | 
 66 | 		return Orderbook
 67 | 	end,
 68 | 	{
 69 | 		{
 70 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
 71 | 			Orders = {}
 72 | 		},
 73 | 	}
 74 | )
 75 | 
 76 | utils.test('Single order fully matched',
 77 | 	function()
 78 | 		Orderbook = {
 79 | 			{
 80 | 				Pair = { 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
 81 | 				Orders = {
 82 | 					{
 83 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
 84 | 						DateCreated = '1722535710966',
 85 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
 86 | 						OriginalQuantity = '1000',
 87 | 						Price = '500000000000',
 88 | 						Quantity = '1000',
 89 | 						Token = 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE'
 90 | 					}
 91 | 				},
 92 | 			},
 93 | 		}
 94 | 
 95 | 		ucm.createOrder({
 96 | 			orderId = tostring(1),
 97 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
 98 | 			swapToken = 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE',
 99 | 			sender = 'User' .. tostring(1),
100 | 			quantity = tostring(500000000000000),
101 | 			timestamp = os.time() + 1,
102 | 			blockheight = '123456789',
103 | 		})
104 | 
105 | 		return Orderbook
106 | 	end,
107 | 	{
108 | 		{
109 | 			Pair = { 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
110 | 			Orders = {},
111 | 			PriceData = {
112 | 				MatchLogs = {
113 | 					{
114 | 						Quantity = '1000',
115 | 						Price = '500000000000',
116 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
117 | 					}
118 | 				},
119 | 				Vwap = '500000000000',
120 | 				Block = '123456789',
121 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
122 | 			}
123 | 		}
124 | 	}
125 | )
126 | 
127 | utils.test('Single order partially matched',
128 | 	function()
129 | 		Orderbook = {
130 | 			{
131 | 				Pair = { 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
132 | 				Orders = {
133 | 					{
134 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
135 | 						DateCreated = '1722535710966',
136 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
137 | 						OriginalQuantity = '1000',
138 | 						Price = '500000000000',
139 | 						Quantity = '1000',
140 | 						Token = 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE'
141 | 					}
142 | 				},
143 | 			},
144 | 		}
145 | 
146 | 		ucm.createOrder({
147 | 			orderId = tostring(1),
148 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
149 | 			swapToken = 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE',
150 | 			sender = 'User' .. tostring(1),
151 | 			quantity = tostring(500000000000),
152 | 			timestamp = os.time() + 1,
153 | 			blockheight = '123456789',
154 | 		})
155 | 
156 | 		return Orderbook
157 | 	end,
158 | 	{
159 | 		{
160 | 			Pair = { 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
161 | 			Orders = {
162 | 				{
163 | 					Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
164 | 					DateCreated = '1722535710966',
165 | 					Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
166 | 					OriginalQuantity = '1000',
167 | 					Price = '500000000000',
168 | 					Quantity = '999',
169 | 					Token = 'j6pqhdn5wtfFwgt0aG6dHijX398OpINT9BIcVbSrMKE'
170 | 				}
171 | 			},
172 | 			PriceData = {
173 | 				MatchLogs = {
174 | 					{
175 | 						Quantity = '1',
176 | 						Price = '500000000000',
177 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
178 | 					}
179 | 				},
180 | 				Vwap = '500000000000',
181 | 				Block = '123456789',
182 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
183 | 			}
184 | 		}
185 | 	}
186 | )
187 | 
188 | utils.test('Single order fully matched (denominated)',
189 | 	function()
190 | 		Orderbook = {
191 | 			{
192 | 				Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
193 | 				Orders = {
194 | 					{
195 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
196 | 						DateCreated = '1722535710966',
197 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
198 | 						OriginalQuantity = '1000000',
199 | 						Price = '500000000000',
200 | 						Quantity = '1000000',
201 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
202 | 					}
203 | 				},
204 | 			},
205 | 		}
206 | 
207 | 		ucm.createOrder({
208 | 			orderId = tostring(1),
209 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
210 | 			swapToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
211 | 			sender = 'User' .. tostring(1),
212 | 			quantity = tostring(500000000000),
213 | 			timestamp = os.time() + 1,
214 | 			blockheight = '123456789',
215 | 			transferDenomination = '1000000'
216 | 		})
217 | 
218 | 		return Orderbook
219 | 	end,
220 | 	{
221 | 		{
222 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
223 | 			Orders = {},
224 | 			PriceData = {
225 | 				MatchLogs = {
226 | 					{
227 | 						Quantity = '1000000',
228 | 						Price = '500000000000',
229 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
230 | 					}
231 | 				},
232 | 				Vwap = '500000000000',
233 | 				Block = '123456789',
234 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
235 | 			}
236 | 		}
237 | 	}
238 | )
239 | 
240 | utils.test('Single order partially matched (denominated)',
241 | 	function()
242 | 		Orderbook = {
243 | 			{
244 | 				Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
245 | 				Orders = {
246 | 					{
247 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
248 | 						DateCreated = '1722535710966',
249 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
250 | 						OriginalQuantity = '10000000',
251 | 						Price = '500000000000',
252 | 						Quantity = '10000000',
253 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
254 | 					}
255 | 				},
256 | 			},
257 | 		}
258 | 
259 | 		ucm.createOrder({
260 | 			orderId = tostring(1),
261 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
262 | 			swapToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
263 | 			sender = 'User' .. tostring(1),
264 | 			quantity = tostring(500000000000),
265 | 			timestamp = os.time() + 1,
266 | 			blockheight = '123456789',
267 | 			transferDenomination = '1000000'
268 | 		})
269 | 
270 | 		return Orderbook
271 | 	end,
272 | 	{
273 | 		{
274 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
275 | 			Orders = {
276 | 				{
277 | 					Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
278 | 					DateCreated = '1722535710966',
279 | 					Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
280 | 					OriginalQuantity = '10000000',
281 | 					Price = '500000000000',
282 | 					Quantity = '9000000',
283 | 					Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
284 | 				}
285 | 			},
286 | 			PriceData = {
287 | 				MatchLogs = {
288 | 					{
289 | 						Quantity = '1000000',
290 | 						Price = '500000000000',
291 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
292 | 					}
293 | 				},
294 | 				Vwap = '500000000000',
295 | 				Block = '123456789',
296 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
297 | 			}
298 | 		}
299 | 	}
300 | )
301 | 
302 | utils.test('Single order fully matched (denominated / fractional)',
303 | 	function()
304 | 		Orderbook = {
305 | 			{
306 | 				Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
307 | 				Orders = {
308 | 					{
309 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
310 | 						DateCreated = '1722535710966',
311 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
312 | 						OriginalQuantity = '1',
313 | 						Price = '50000000',
314 | 						Quantity = '1',
315 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
316 | 					}
317 | 				},
318 | 			},
319 | 		}
320 | 
321 | 		ucm.createOrder({
322 | 			orderId = tostring(1),
323 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
324 | 			swapToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
325 | 			sender = 'User' .. tostring(1),
326 | 			quantity = tostring(50000000),
327 | 			timestamp = os.time() + 1,
328 | 			blockheight = '123456789',
329 | 			transferDenomination = '1000000'
330 | 		})
331 | 
332 | 		return Orderbook
333 | 	end,
334 | 	{
335 | 		{
336 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
337 | 			Orders = {},
338 | 			PriceData = {
339 | 				MatchLogs = {
340 | 					{
341 | 						Quantity = '1',
342 | 						Price = '50000000',
343 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
344 | 					}
345 | 				},
346 | 				Vwap = '50000000',
347 | 				Block = '123456789',
348 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
349 | 			}
350 | 		}
351 | 	}
352 | )
353 | 
354 | utils.test('Multi order fully matched (denominated)',
355 | 	function()
356 | 		Orderbook = {
357 | 			{
358 | 				Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
359 | 				Orders = {
360 | 					{
361 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
362 | 						DateCreated = '1722535710966',
363 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
364 | 						OriginalQuantity = '10000000',
365 | 						Price = '500000000000',
366 | 						Quantity = '10000000',
367 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
368 | 					},
369 | 					{
370 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
371 | 						DateCreated = '1722535710966',
372 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
373 | 						OriginalQuantity = '10000000',
374 | 						Price = '500000000000',
375 | 						Quantity = '10000000',
376 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
377 | 					},
378 | 				},
379 | 			},
380 | 		}
381 | 
382 | 		ucm.createOrder({
383 | 			orderId = tostring(1),
384 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
385 | 			swapToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
386 | 			sender = 'User' .. tostring(1),
387 | 			quantity = tostring(10000000000000),
388 | 			timestamp = os.time() + 1,
389 | 			blockheight = '123456789',
390 | 			transferDenomination = '1000000'
391 | 		})
392 | 
393 | 		return Orderbook
394 | 	end,
395 | 	{
396 | 		{
397 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
398 | 			Orders = {},
399 | 			PriceData = {
400 | 				MatchLogs = {
401 | 					{
402 | 						Quantity = '10000000',
403 | 						Price = '500000000000',
404 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
405 | 					},
406 | 					{
407 | 						Quantity = '10000000',
408 | 						Price = '500000000000',
409 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
410 | 					},
411 | 				},
412 | 				Vwap = '500000000000',
413 | 				Block = '123456789',
414 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
415 | 			}
416 | 		}
417 | 	}
418 | )
419 | 
420 | utils.test('Multi order partially matched (denominated)',
421 | 	function()
422 | 		Orderbook = {
423 | 			{
424 | 				Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
425 | 				Orders = {
426 | 					{
427 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
428 | 						DateCreated = '1722535710966',
429 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
430 | 						OriginalQuantity = '10000000',
431 | 						Price = '500000000000',
432 | 						Quantity = '10000000',
433 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
434 | 					},
435 | 					{
436 | 						Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
437 | 						DateCreated = '1722535710966',
438 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
439 | 						OriginalQuantity = '10000000',
440 | 						Price = '500000000000',
441 | 						Quantity = '10000000',
442 | 						Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
443 | 					},
444 | 				},
445 | 			},
446 | 		}
447 | 
448 | 		ucm.createOrder({
449 | 			orderId = tostring(1),
450 | 			dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
451 | 			swapToken = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
452 | 			sender = 'User' .. tostring(1),
453 | 			quantity = tostring(5500000000000),
454 | 			timestamp = os.time() + 1,
455 | 			blockheight = '123456789',
456 | 			transferDenomination = '1000000'
457 | 		})
458 | 
459 | 		return Orderbook
460 | 	end,
461 | 	{
462 | 		{
463 | 			Pair = { 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
464 | 			Orders = {
465 | 				{
466 | 					Creator = 'LNtQf8SGZbHPeoksAqnVKfZvuGNgX4eH-xQYsFt_w-k',
467 | 					DateCreated = '1722535710966',
468 | 					Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
469 | 					OriginalQuantity = '10000000',
470 | 					Price = '500000000000',
471 | 					Quantity = '9000000',
472 | 					Token = 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'
473 | 				},
474 | 			},
475 | 			PriceData = {
476 | 				MatchLogs = {
477 | 					{
478 | 						Quantity = '10000000',
479 | 						Price = '500000000000',
480 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
481 | 					},
482 | 					{
483 | 						Quantity = '1000000',
484 | 						Price = '500000000000',
485 | 						Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
486 | 					},
487 | 				},
488 | 				Vwap = '500000000000',
489 | 				Block = '123456789',
490 | 				DominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'
491 | 			}
492 | 		}
493 | 	}
494 | )
495 | 
496 | utils.test('New listing adds to CurrentListings',
497 |     function()  
498 | 		local json = require('json')
499 |         Orderbook = {}
500 |         CurrentListings = {}
501 |         ACTIVITY_PROCESS = '7_psKu3QHwzc2PFCJk2lEwyitLJbz6Vj7hOcltOulj4'
502 | 
503 |         ucm.createOrder({
504 |             orderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
505 |             dominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
506 |             swapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
507 |             sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
508 |             quantity = '1000',
509 |             price = '500000000000',
510 |             timestamp = '1722535710966',
511 |             blockheight = '123456789'
512 |         })
513 | 
514 |         ao.send({
515 |             Target = ACTIVITY_PROCESS,
516 |             Action = 'Update-Listed-Orders',
517 |             Data = json:encode({ 
518 |                 Order = {
519 |                     Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
520 |                     DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
521 |                     SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
522 |                     Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
523 |                     Quantity = '1000',
524 |                     Price = '500000000000',
525 |                     Timestamp = '1722535710966'
526 |                 }
527 |             })
528 |         })
529 | 
530 |         CurrentListings['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
531 |             OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
532 |             DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
533 |             SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
534 |             Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
535 |             Quantity = '1000',
536 |             Price = '500000000000',
537 |             Timestamp = '1722535710966'
538 |         }
539 | 
540 |         return CurrentListings
541 |     end,
542 |     {
543 |         ['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
544 |             OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
545 |             DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
546 |             SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
547 |             Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
548 |             Quantity = '1000',
549 |             Price = '500000000000',
550 |             Timestamp = '1722535710966'
551 |         }
552 |     }
553 | )
554 | 
555 | utils.test('Partial execution updates CurrentListings quantity',
556 |     function()
557 |         Orderbook = {
558 |             {
559 |                 Pair = { 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
560 |                 Orders = {
561 |                     {
562 |                         Creator = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
563 |                         DateCreated = '1722535710966',
564 |                         Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
565 |                         OriginalQuantity = '1000',
566 |                         Price = '500000000000',
567 |                         Quantity = '1000',
568 |                         Token = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc'
569 |                     }
570 |                 }
571 |             }
572 |         }
573 |         CurrentListings = {
574 |             ['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
575 |                 OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
576 |                 DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
577 |                 SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
578 |                 Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
579 |                 Quantity = '1000',
580 |                 Price = '500000000000',
581 |                 Timestamp = '1722535710966'
582 |             }
583 |         }
584 | 
585 |         ucm.createOrder({
586 |             orderId = 'match-order-1',
587 |             dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
588 |             swapToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
589 |             sender = 'match-buyer-1',
590 |             quantity = '500',
591 |             price = '500000000000',
592 |             timestamp = '1722535710967',
593 |             blockheight = '123456789'
594 |         })
595 | 
596 |         CurrentListings['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'].Quantity = '500'
597 | 
598 |         return CurrentListings
599 |     end,
600 |     {
601 |         ['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
602 |             OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
603 |             DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
604 |             SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
605 |             Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
606 |             Quantity = '500',
607 |             Price = '500000000000',
608 |             Timestamp = '1722535710966'
609 |         }
610 |     }
611 | )
612 | 
613 | utils.test('Full execution removes from CurrentListings',
614 |     function()
615 |         Orderbook = {
616 |             {
617 |                 Pair = { 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
618 |                 Orders = {
619 |                     {
620 |                         Creator = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
621 |                         DateCreated = '1722535710966',
622 |                         Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
623 |                         OriginalQuantity = '1000',
624 |                         Price = '500000000000',
625 |                         Quantity = '1000',
626 |                         Token = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc'
627 |                     }
628 |                 }
629 |             }
630 |         }
631 |         CurrentListings = {
632 |             ['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
633 |                 OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
634 |                 DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
635 |                 SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
636 |                 Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
637 |                 Quantity = '1000',
638 |                 Price = '500000000000',
639 |                 Timestamp = '1722535710966'
640 |             }
641 |         }
642 | 
643 |         ucm.createOrder({
644 |             orderId = 'match-order-1',
645 |             dominantToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
646 |             swapToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
647 |             sender = 'match-buyer-1',
648 |             quantity = '1000',
649 |             price = '500000000000',
650 |             timestamp = '1722535710967',
651 |             blockheight = '123456789'
652 |         })
653 | 
654 |         CurrentListings = {}
655 | 
656 |         return CurrentListings
657 |     end,
658 |     {}
659 | )
660 | 
661 | utils.test('Cancel order removes from CurrentListings',
662 |     function()
663 | 		local json = require('json')
664 |         Orderbook = {
665 |             {
666 |                 Pair = { 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
667 |                 Orders = {
668 |                     {
669 |                         Creator = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
670 |                         DateCreated = '1722535710966',
671 |                         Id = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
672 |                         OriginalQuantity = '1000',
673 |                         Price = '500000000000',
674 |                         Quantity = '1000',
675 |                         Token = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc'
676 |                     }
677 |                 }
678 |             }
679 |         }
680 |         CurrentListings = {
681 |             ['N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'] = {
682 |                 OrderId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE',
683 |                 DominantToken = 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc',
684 |                 SwapToken = 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
685 |                 Sender = 'SaXnsUgxJLkJRghWQOUs9-wB0npVviewTkUbh2Yk64M',
686 |                 Quantity = '1000',
687 |                 Price = '500000000000',
688 |                 Timestamp = '1722535710966'
689 |             }
690 |         }
691 | 
692 |         ao.send({
693 |             Action = 'Cancel-Order',
694 |             Data = json:encode({
695 |                 Pair = { 'LGWN8g0cuzwamiUWFT7fmCZoM4B2YDZueH9r8LazOvc', 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10' },
696 |                 OrderTxId = 'N5vr71SXaEYsdVoVCEB5qOTjHNwyQVwGvJxBh_kgTbE'
697 |             })
698 |         })
699 |         
700 |         CurrentListings = {}
701 | 
702 |         return CurrentListings
703 |     end,
704 |     {}
705 | )


--------------------------------------------------------------------------------
/toolkit/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "node",
 3 |   "version": "1.0.0",
 4 |   "description": "",
 5 |   "main": "./lib/index.js",
 6 |   "scripts": {
 7 |     "test": "echo \"Error: no test specified\" && exit 1",
 8 |     "build": "tsc",
 9 |     "start": "ts-node src/index.ts",
10 |     "lint": "tslint -c tslint.json src/**/*.ts",
11 |     "prepublish": "npm run build"
12 |   },
13 |   "keywords": [],
14 |   "author": "",
15 |   "license": "ISC",
16 |   "dependencies": {
17 |     "@permaweb/aoconnect": "^0.0.56",
18 |     "@types/node": "^20.14.6",
19 |     "csv-writer": "^1.6.0",
20 |     "ts-node": "^10.9.2",
21 |     "tslint": "^6.1.3",
22 |     "typescript": "^5.5.2"
23 |   },
24 |   "files": [
25 |     "./bin/*",
26 |     "./lib/*"
27 |   ],
28 |   "typings": "./lib/index.d.ts"
29 | }
30 | 


--------------------------------------------------------------------------------
/toolkit/src/index.ts:
--------------------------------------------------------------------------------
  1 | const fs = require('fs');
  2 | import { createObjectCsvWriter } from 'csv-writer';
  3 | 
  4 | import { createDataItemSigner, dryrun, message, results } from '@permaweb/aoconnect';
  5 | import { readFileSync } from 'fs';
  6 | 
  7 | export const AO = {
  8 | 	ucm: 'hqdL4AZaFZ0huQHbAsYxdTwG6vpibK7ALWKNzmWaD4Q',
  9 | 	ucmActivity: '7_psKu3QHwzc2PFCJk2lEwyitLJbz6Vj7hOcltOulj4',
 10 | 	pixl: 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
 11 | 	profileRegistry: 'SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY',
 12 | };
 13 | 
 14 | export function getTagValue(list: { [key: string]: any }[], name: string): string | null {
 15 | 	for (let i = 0; i < list.length; i++) {
 16 | 		if (list[i]) {
 17 | 			if (list[i]!.name === name) {
 18 | 				return list[i]!.value as string;
 19 | 			}
 20 | 		}
 21 | 	}
 22 | 	return null;
 23 | }
 24 | 
 25 | export const PAGINATORS = {
 26 | 	default: 100
 27 | };
 28 | 
 29 | export const CURSORS = {
 30 | 	p1: 'P1',
 31 | 	end: 'END',
 32 | };
 33 | 
 34 | export const GATEWAYS = {
 35 | 	arweave: 'arweave.net',
 36 | 	goldsky: 'arweave-search.goldsky.com',
 37 | };
 38 | 
 39 | export type TagType = { name: string; value: string };
 40 | 
 41 | export type TagFilterType = { name: string; values: string[]; match?: string };
 42 | 
 43 | export type BaseGQLArgsType = {
 44 | 	ids: string[] | null;
 45 | 	tagFilters: TagFilterType[] | null;
 46 | 	owners: string[] | null;
 47 | 	cursor: string | null;
 48 | 	recipients: string[] | null;
 49 | 	paginator?: number;
 50 | 	minBlock?: number;
 51 | 	maxBlock?: number;
 52 | };
 53 | 
 54 | export type GQLArgsType = { gateway: string } & BaseGQLArgsType;
 55 | 
 56 | export type QueryBodyGQLArgsType = BaseGQLArgsType & { gateway?: string; queryKey?: string };
 57 | 
 58 | export type BatchGQLArgsType = {
 59 | 	gateway: string;
 60 | 	entries: { [queryKey: string]: BaseGQLArgsType };
 61 | };
 62 | 
 63 | export type GQLNodeResponseType = {
 64 | 	cursor: string | null;
 65 | 	node: {
 66 | 		id: string;
 67 | 		tags: TagType[];
 68 | 		data: {
 69 | 			size: string;
 70 | 			type: string;
 71 | 		};
 72 | 		block?: {
 73 | 			height: number;
 74 | 			timestamp: number;
 75 | 		};
 76 | 		owner?: {
 77 | 			address: string;
 78 | 		};
 79 | 		recipient?: string;
 80 | 		address?: string;
 81 | 		timestamp?: number;
 82 | 	};
 83 | };
 84 | 
 85 | export type GQLResponseType = {
 86 | 	count: number;
 87 | 	nextCursor: string | null;
 88 | 	previousCursor: string | null;
 89 | };
 90 | 
 91 | export type DefaultGQLResponseType = {
 92 | 	data: GQLNodeResponseType[];
 93 | } & GQLResponseType;
 94 | 
 95 | export type BatchAGQLResponseType = { [queryKey: string]: DefaultGQLResponseType };
 96 | 
 97 | export type AOProfileType = {
 98 | 	id: string;
 99 | 	walletAddress: string;
100 | 	displayName: string | null;
101 | 	username: string | null;
102 | 	bio: string | null;
103 | 	avatar: string | null;
104 | 	banner: string | null;
105 | 	version: string | null;
106 | };
107 | 
108 | export type ProfileHeaderType = AOProfileType;
109 | 
110 | export async function getGQLData(args: GQLArgsType): Promise<DefaultGQLResponseType> {
111 | 	const paginator = args.paginator ? args.paginator : PAGINATORS.default;
112 | 
113 | 	let data: GQLNodeResponseType[] = [];
114 | 	let count: number = 0;
115 | 	let nextCursor: string | null = null;
116 | 
117 | 	if (args.ids && !args.ids.length) {
118 | 		return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
119 | 	}
120 | 
121 | 	try {
122 | 		let queryBody: string = getQueryBody(args);
123 | 		const response = await getResponse({ gateway: args.gateway, query: getQuery(queryBody) });
124 | 
125 | 		if (response.data.transactions.edges.length) {
126 | 			data = [...response.data.transactions.edges];
127 | 			count = response.data.transactions.count ?? 0;
128 | 
129 | 			const lastResults: boolean = data.length < paginator || !response.data.transactions.pageInfo.hasNextPage;
130 | 
131 | 			if (lastResults) nextCursor = CURSORS.end;
132 | 			else nextCursor = data[data.length - 1].cursor;
133 | 
134 | 			return {
135 | 				data: data,
136 | 				count: count,
137 | 				nextCursor: nextCursor,
138 | 				previousCursor: null,
139 | 			};
140 | 		} else {
141 | 			return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
142 | 		}
143 | 	} catch (e: any) {
144 | 		console.error(e);
145 | 		return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
146 | 	}
147 | }
148 | 
149 | export async function getBatchGQLData(args: BatchGQLArgsType): Promise<BatchAGQLResponseType> {
150 | 	let responseObject: BatchAGQLResponseType = {};
151 | 	let queryBody: string = '';
152 | 
153 | 	for (const [queryKey, baseArgs] of Object.entries(args.entries)) {
154 | 		responseObject[queryKey] = { data: [], count: 0, nextCursor: null, previousCursor: null };
155 | 		queryBody += getQueryBody({ ...baseArgs, gateway: args.gateway, queryKey: queryKey });
156 | 	}
157 | 
158 | 	try {
159 | 		const response = await getResponse({ gateway: args.gateway, query: getQuery(queryBody) });
160 | 
161 | 		if (response && response.data) {
162 | 			for (const queryKey of Object.keys(response.data)) {
163 | 				const paginator = args.entries[queryKey].paginator ? args.entries[queryKey].paginator : PAGINATORS.default;
164 | 
165 | 				let data: GQLNodeResponseType[] = [];
166 | 				let count: number = 0;
167 | 				let nextCursor: string | null = null;
168 | 
169 | 				if (response.data[queryKey].edges.length) {
170 | 					data = [...response.data[queryKey].edges];
171 | 					count = response.data[queryKey].count ?? 0;
172 | 
173 | 					const lastResults: boolean = data.length < paginator || !response.data[queryKey].pageInfo.hasNextPage;
174 | 
175 | 					if (lastResults) nextCursor = CURSORS.end;
176 | 					else nextCursor = data[data.length - 1].cursor;
177 | 
178 | 					responseObject[queryKey] = {
179 | 						data: [...response.data[queryKey].edges],
180 | 						count: count,
181 | 						nextCursor: nextCursor,
182 | 						previousCursor: null,
183 | 					};
184 | 				}
185 | 			}
186 | 		}
187 | 		return responseObject;
188 | 	} catch (e: any) {
189 | 		console.error(e);
190 | 		return responseObject;
191 | 	}
192 | }
193 | 
194 | function getQuery(body: string): string {
195 | 	const query = { query: `query { ${body} }` };
196 | 	return JSON.stringify(query);
197 | }
198 | 
199 | function getQueryBody(args: QueryBodyGQLArgsType): string {
200 | 	const paginator = args.paginator ? args.paginator : PAGINATORS.default;
201 | 	const ids = args.ids ? JSON.stringify(args.ids) : null;
202 | 	let blockFilter: { min?: number; max?: number } | null = null;
203 | 	if (args.minBlock !== undefined && args.minBlock !== null) {
204 | 		blockFilter = {};
205 | 		blockFilter.min = args.minBlock;
206 | 	}
207 | 	const blockFilterStr = blockFilter ? JSON.stringify(blockFilter).replace(/"([^"]+)":/g, '$1:') : null;
208 | 	const tagFilters = args.tagFilters
209 | 		? JSON.stringify(args.tagFilters)
210 | 			.replace(/"(name)":/g, '$1:')
211 | 			.replace(/"(values)":/g, '$1:')
212 | 			.replace(/"FUZZY_OR"/g, 'FUZZY_OR')
213 | 		: null;
214 | 	const owners = args.owners ? JSON.stringify(args.owners) : null;
215 | 	const cursor = args.cursor && args.cursor !== CURSORS.end ? `"${args.cursor}"` : null;
216 | 
217 | 	let fetchCount: string = `first: ${paginator}`;
218 | 	let txCount: string = '';
219 | 	let nodeFields: string = `recipient data { size type } owner { address } block { height timestamp }`;
220 | 	let order: string = '';
221 | 	let recipients: string = '';
222 | 
223 | 	switch (args.gateway) {
224 | 		case GATEWAYS.arweave:
225 | 			break;
226 | 		case GATEWAYS.goldsky:
227 | 			txCount = args.cursor && args.cursor !== CURSORS.end ? '' : 'count';
228 | 			recipients = `recipients: ${JSON.stringify(args.recipients)}`;
229 | 			break;
230 | 	}
231 | 
232 | 	let body = `
233 | 		transactions(
234 | 				ids: ${ids},
235 | 				tags: ${tagFilters},
236 | 				${fetchCount},
237 | 				owners: ${owners},
238 | 				block: ${blockFilterStr},
239 | 				after: ${cursor},
240 | 				${order}
241 | 				${recipients}
242 | 			){
243 | 			${txCount}
244 | 			pageInfo {
245 | 				hasNextPage
246 | 			}
247 | 			edges {
248 | 				cursor
249 | 				node {
250 | 					id
251 | 					tags {
252 | 						name 
253 | 						value 
254 | 					}
255 | 					${nodeFields}
256 | 				}
257 | 			}
258 | 		}`;
259 | 
260 | 	if (args.queryKey) body = `${args.queryKey}: ${body}`;
261 | 
262 | 	return body;
263 | }
264 | 
265 | async function getResponse(args: { gateway: string; query: string }): Promise<any> {
266 | 	try {
267 | 		const response = await fetch(`https://${args.gateway}/graphql`, {
268 | 			method: 'POST',
269 | 			headers: { 'Content-Type': 'application/json' },
270 | 			body: args.query,
271 | 		});
272 | 		return await response.json();
273 | 	} catch (e: any) {
274 | 		throw e;
275 | 	}
276 | }
277 | 
278 | export async function messageResults(args: {
279 | 	processId: string;
280 | 	wallet: any;
281 | 	action: string;
282 | 	tags: TagType[] | null;
283 | 	data: any;
284 | 	responses?: string[];
285 | 	handler?: string;
286 | }): Promise<any> {
287 | 	try {
288 | 		const tags = [{ name: 'Action', value: args.action }];
289 | 		if (args.tags) tags.push(...args.tags);
290 | 
291 | 		await message({
292 | 			process: args.processId,
293 | 			signer: createDataItemSigner(args.wallet),
294 | 			tags: tags,
295 | 			data: JSON.stringify(args.data),
296 | 		});
297 | 
298 | 		await new Promise((resolve) => setTimeout(resolve, 500));
299 | 
300 | 		const messageResults = await results({
301 | 			process: args.processId,
302 | 			sort: 'DESC',
303 | 			limit: 100,
304 | 		});
305 | 
306 | 		if (messageResults && messageResults.edges && messageResults.edges.length) {
307 | 			const response: any = {};
308 | 
309 | 			for (const result of messageResults.edges) {
310 | 				if (result.node && result.node.Messages && result.node.Messages.length) {
311 | 					const resultSet = [args.action];
312 | 					if (args.responses) resultSet.push(...args.responses);
313 | 
314 | 					for (const message of result.node.Messages) {
315 | 						const action = getTagValue(message.Tags, 'Action');
316 | 
317 | 						if (action) {
318 | 							let responseData = null;
319 | 							const messageData = message.Data;
320 | 
321 | 							if (messageData) {
322 | 								try {
323 | 									responseData = JSON.parse(messageData);
324 | 								} catch {
325 | 									responseData = messageData;
326 | 								}
327 | 							}
328 | 
329 | 							const responseStatus = getTagValue(message.Tags, 'Status');
330 | 							const responseMessage = getTagValue(message.Tags, 'Message');
331 | 
332 | 							if (action === 'Action-Response') {
333 | 								const responseHandler = getTagValue(message.Tags, 'Handler');
334 | 								if (args.handler && args.handler === responseHandler) {
335 | 									response[action] = {
336 | 										status: responseStatus,
337 | 										message: responseMessage,
338 | 										data: responseData,
339 | 									};
340 | 								}
341 | 							} else {
342 | 								if (resultSet.includes(action)) {
343 | 									response[action] = {
344 | 										status: responseStatus,
345 | 										message: responseMessage,
346 | 										data: responseData,
347 | 									};
348 | 								}
349 | 							}
350 | 
351 | 							if (Object.keys(response).length === resultSet.length) break;
352 | 						}
353 | 					}
354 | 				}
355 | 			}
356 | 
357 | 			return response;
358 | 		}
359 | 
360 | 		return null;
361 | 	} catch (e) {
362 | 		console.error(e);
363 | 	}
364 | }
365 | 
366 | export async function readHandler(args: {
367 | 	processId: string;
368 | 	action: string;
369 | 	tags?: TagType[];
370 | 	data?: any;
371 | }): Promise<any> {
372 | 	const tags = [{ name: 'Action', value: args.action }];
373 | 	if (args.tags) tags.push(...args.tags);
374 | 	let data = JSON.stringify(args.data || {});
375 | 
376 | 	const response = await dryrun({
377 | 		process: args.processId,
378 | 		tags: tags,
379 | 		data: data,
380 | 	});
381 | 
382 | 	if (response.Messages && response.Messages.length) {
383 | 		if (response.Messages[0].Data) {
384 | 			return JSON.parse(response.Messages[0].Data);
385 | 		} else {
386 | 			if (response.Messages[0].Tags) {
387 | 				return response.Messages[0].Tags.reduce((acc: any, item: any) => {
388 | 					acc[item.name] = item.value;
389 | 					return acc;
390 | 				}, {});
391 | 			}
392 | 		}
393 | 	}
394 | }
395 | 
396 | export function formatDate(dateArg: string | number | null, dateType: any, fullTime?: boolean) {
397 | 	if (!dateArg) {
398 | 		return null;
399 | 	}
400 | 
401 | 	let date: Date | null = null;
402 | 
403 | 	switch (dateType) {
404 | 		case 'iso':
405 | 			date = new Date(dateArg);
406 | 			break;
407 | 		case 'epoch':
408 | 			date = new Date(Number(dateArg));
409 | 			break;
410 | 		default:
411 | 			date = new Date(dateArg);
412 | 			break;
413 | 	}
414 | 
415 | 	return fullTime
416 | 		? `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getUTCFullYear()} ${date.getHours() % 12 || 12
417 | 		}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')} ${date.getHours() >= 12 ? 'PM' : 'AM'
418 | 		}`
419 | 		: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getUTCFullYear()}`;
420 | }
421 | 
422 | export async function getProfileById(args: { profileId: string }): Promise<any | null> {
423 | 	const emptyProfile = {
424 | 		id: args.profileId,
425 | 		walletAddress: null,
426 | 		displayName: null,
427 | 		username: null,
428 | 		bio: null,
429 | 		avatar: null,
430 | 		banner: null,
431 | 		version: null,
432 | 	};
433 | 
434 | 	try {
435 | 		const fetchedProfile = await readHandler({
436 | 			processId: args.profileId,
437 | 			action: 'Info',
438 | 			data: null,
439 | 		});
440 | 
441 | 		if (fetchedProfile) {
442 | 			return {
443 | 				id: args.profileId,
444 | 				walletAddress: fetchedProfile.Owner || null,
445 | 				displayName: fetchedProfile.Profile.DisplayName || null,
446 | 				username: fetchedProfile.Profile.UserName || null,
447 | 				bio: fetchedProfile.Profile.Description || null,
448 | 				avatar: fetchedProfile.Profile.ProfileImage || null,
449 | 				banner: fetchedProfile.Profile.CoverImage || null,
450 | 				version: fetchedProfile.Profile.Version || null,
451 | 				assets: fetchedProfile.Assets?.map((asset: { Id: string; Quantity: string }) => asset.Id) ?? [],
452 | 			};
453 | 		} else return emptyProfile;
454 | 	} catch (e: any) {
455 | 		throw new Error(e);
456 | 	}
457 | }
458 | 
459 | export async function getProfileByWalletAddress(args: { address: string }): Promise<ProfileHeaderType | null> {
460 | 	const emptyProfile = {
461 | 		id: null,
462 | 		walletAddress: args.address,
463 | 		displayName: null,
464 | 		username: null,
465 | 		bio: null,
466 | 		avatar: null,
467 | 		banner: null,
468 | 		version: null,
469 | 	};
470 | 
471 | 	try {
472 | 		const profileLookup = await readHandler({
473 | 			processId: AO.profileRegistry,
474 | 			action: 'Get-Profiles-By-Delegate',
475 | 			data: { Address: args.address },
476 | 		});
477 | 
478 | 		let activeProfileId: string;
479 | 		if (profileLookup && profileLookup.length > 0 && profileLookup[0].ProfileId) {
480 | 			activeProfileId = profileLookup[0].ProfileId;
481 | 		}
482 | 
483 | 		if (activeProfileId) {
484 | 			const fetchedProfile = await readHandler({
485 | 				processId: activeProfileId,
486 | 				action: 'Info',
487 | 				data: null,
488 | 			});
489 | 
490 | 			if (fetchedProfile) {
491 | 				return {
492 | 					id: activeProfileId,
493 | 					walletAddress: fetchedProfile.Owner || null,
494 | 					displayName: fetchedProfile.Profile.DisplayName || null,
495 | 					username: fetchedProfile.Profile.UserName || null,
496 | 					bio: fetchedProfile.Profile.Description || null,
497 | 					avatar: fetchedProfile.Profile.ProfileImage || null,
498 | 					banner: fetchedProfile.Profile.CoverImage || null,
499 | 					version: fetchedProfile.Profile.Version || null,
500 | 				};
501 | 			} else return emptyProfile;
502 | 		} else return emptyProfile;
503 | 	} catch (e: any) {
504 | 		throw new Error(e);
505 | 	}
506 | }
507 | 
508 | async function mapActivity(orders: any, event: 'Listing' | 'Purchase' | 'Sale' | 'Unlisted') {
509 | 	let updatedActivity = [];
510 | 
511 | 	if (orders && orders.length > 0) {
512 | 		const mappedActivity = orders.map((order: any) => {
513 | 			let orderEvent = event;
514 | 			return {
515 | 				orderId: order.OrderId,
516 | 				dominantToken: order.DominantToken,
517 | 				swapToken: order.SwapToken,
518 | 				price: order.Price.toString(),
519 | 				quantity: order.Quantity.toString(),
520 | 				sender: order.Sender || '-',
521 | 				receiver: order.Receiver || '-',
522 | 				timestamp: formatDate(order.Timestamp, 'iso', true),
523 | 				event: orderEvent,
524 | 			};
525 | 		});
526 | 
527 | 		updatedActivity = mappedActivity;
528 | 	}
529 | 
530 | 	return updatedActivity;
531 | }
532 | 
533 | let logData = '';
534 | 
535 | const appendToLog = (message: string) => {
536 | 	logData += message + '\n';
537 | 	console.log(message);
538 | };
539 | 
540 | async function fetchData(fetchParams: GQLArgsType, processElementCallback: (element: GQLNodeResponseType) => void) {
541 | 	let fetchResult = await getGQLData(fetchParams);
542 | 
543 | 	if (fetchResult && fetchResult.data.length) {
544 | 		let aggregatedData = fetchResult.data;
545 | 		appendToLog(`Count: ${fetchResult.count}`);
546 | 
547 | 		while (fetchResult.nextCursor && fetchResult.nextCursor !== CURSORS.end) {
548 | 			appendToLog('Fetching next page...');
549 | 			await new Promise((resolve) => setTimeout(resolve, 1000));
550 | 
551 | 			fetchResult = await getGQLData({
552 | 				...fetchParams,
553 | 				cursor: fetchResult.nextCursor,
554 | 			});
555 | 
556 | 			if (fetchResult && fetchResult.data.length) {
557 | 				aggregatedData = aggregatedData.concat(fetchResult.data);
558 | 			}
559 | 		}
560 | 
561 | 		const actionCounts = {};
562 | 
563 | 		aggregatedData.forEach((element) => {
564 | 			const action = getTagValue(element.node.tags, 'Action');
565 | 			actionCounts[action] = (actionCounts[action] || 0) + 1;
566 | 			processElementCallback(element);
567 | 		});
568 | 
569 | 		return actionCounts;
570 | 	}
571 | 	else {
572 | 		appendToLog('No data found');
573 | 	}
574 | 
575 | 	return null;
576 | }
577 | 
578 | export async function getTransferData(target: string) {
579 | 	appendToLog(`Target: ${target}`);
580 | 
581 | 	// console.log('Running outgoing fetch...');
582 | 	// await fetchData({
583 | 	// 	gateway: GATEWAYS.goldsky,
584 | 	// 	ids: null,
585 | 	// 	tagFilters: [{ name: 'From-Process', values: [target] }],
586 | 	// 	owners: null,
587 | 	// 	cursor: null,
588 | 	// 	recipients: null
589 | 	// }, (element: GQLNodeResponseType) => {
590 | 	// 	if (getTagValue(element.node.tags, 'Action') === 'Transfer') {
591 | 	// 		console.log(`Transfer sent by ${getTagValue(element.node.tags, 'From-Process')}`);
592 | 	// 		console.log(`Target: ${getTagValue(element.node.tags, 'Target')}`);
593 | 	// 		console.log(`Recipient: ${getTagValue(element.node.tags, 'Recipient')}`);
594 | 	// 		console.log(`Quantity: ${Number(getTagValue(element.node.tags, 'Quantity'))}\n`);
595 | 	// 	}
596 | 	// });
597 | 
598 | 	// console.log('Running incoming fetch...');
599 | 	// await fetchData({
600 | 	// 	gateway: GATEWAYS.goldsky,
601 | 	// 	ids: null,
602 | 	// 	tagFilters: null,
603 | 	// 	owners: null,
604 | 	// 	cursor: null,
605 | 	// 	recipients: [target]
606 | 	// }, (element: GQLNodeResponseType) => {
607 | 	// 	if (getTagValue(element.node.tags, 'Action') === 'Transfer') {
608 | 	// 		console.log(`Transfer sent by ${element.node.owner.address} to ${element.node.recipient}`);
609 | 	// 		console.log(`Target: ${getTagValue(element.node.tags, 'Target')}`);
610 | 	// 		console.log(`Recipient: ${getTagValue(element.node.tags, 'Recipient')}`);
611 | 	// 		console.log(`Quantity: ${Number(getTagValue(element.node.tags, 'Quantity'))}\n`);
612 | 	// 	}
613 | 	// });
614 | 
615 | 	appendToLog('Running incoming transfers...');
616 | 	const senderQuantities = {};
617 | 
618 | 	await fetchData({
619 | 		gateway: GATEWAYS.goldsky,
620 | 		ids: null,
621 | 		tagFilters: [
622 | 			{ name: 'Action', values: ['Credit-Notice'] },
623 | 			// { name: 'From-Process', values: ['xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10'] }
624 | 			{ name: 'From-Process', values: ['DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo'] }
625 | 		],
626 | 		owners: null,
627 | 		cursor: null,
628 | 		recipients: [target],
629 | 		minBlock: 1480164
630 | 	}, (element: GQLNodeResponseType) => {
631 | 		const sender = getTagValue(element.node.tags, 'Sender');
632 | 		const quantity = Number(getTagValue(element.node.tags, 'Quantity'));
633 | 		const timestamp = element.node.block.timestamp;
634 | 		const date = new Date(timestamp * 1000);
635 | 		const formattedDate = date.toLocaleString();
636 | 
637 | 		const logMessage = `${formattedDate}: ${sender} -> ${target}: ${quantity} (${Number(quantity) / Math.pow(10, 6)}) PIXL`;
638 | 		appendToLog(logMessage);
639 | 
640 | 		if (sender) {
641 | 			senderQuantities[sender] = (senderQuantities[sender] || 0) + quantity;
642 | 		}
643 | 	});
644 | 
645 | 	for (const [sender, totalQuantity] of Object.entries(senderQuantities)) {
646 | 		const logMessage = `Total transfers from ${sender}: ${totalQuantity} (${Number(totalQuantity) / Math.pow(10, 6)}) PIXL`;
647 | 		appendToLog(logMessage);
648 | 	}
649 | 
650 | 	const filePath = `${process.env.HOME}/Downloads/${target}.txt`;
651 | 
652 | 	fs.writeFileSync(filePath, logData);
653 | 	console.log(`\nLogs written successfully to ${filePath}`);
654 | }
655 | 
656 | export async function getUCMActivity() {
657 | 	const AssetIds = null;
658 | 	const Address = 'HiWY083YQJZx8ybNxOOHm61Na7R-WtPkZCtEQNoF1P8';
659 | 	const StartDate = null;
660 | 	const EndDate = null;
661 | 
662 | 	console.log('Getting UCM activity...');
663 | 	try {
664 | 		let data: any = {};
665 | 
666 | 		if (AssetIds) data.AssetIds = AssetIds;
667 | 		if (Address) data.Address = Address;
668 | 		if (StartDate) data.StartDate = StartDate;
669 | 		if (EndDate) data.EndDate = EndDate;
670 | 
671 | 		const response = await readHandler({
672 | 			processId: AO.ucmActivity,
673 | 			action: 'Get-Activity',
674 | 			data: data,
675 | 		});
676 | 
677 | 		if (response) {
678 | 			let updatedActivity = [];
679 | 			if (response.ListedOrders) updatedActivity.push(...await mapActivity(response.ListedOrders, 'Listing'));
680 | 			if (response.ExecutedOrders)
681 | 				updatedActivity.push(...await mapActivity(response.ExecutedOrders, 'Sale'));
682 | 			if (response.CancelledOrders)
683 | 				updatedActivity.push(...await mapActivity(response.CancelledOrders, 'Unlisted'));
684 | 
685 | 			let fileName = `UCM-Activity`;
686 | 			if (StartDate) fileName += `-${formatDate(Number(StartDate), 'iso').replace(/, /g, '-').replaceAll(' ', '-')}`;
687 | 			if (EndDate) fileName += `-${formatDate(Number(EndDate), 'iso').replace(/, /g, '-').replaceAll(' ', '-')}`;
688 | 			if (Address) fileName += `-${Address}`;
689 | 			fileName += '.csv';
690 | 
691 | 			const filePath = `${process.env.HOME}/Downloads/${fileName}`;
692 | 
693 | 			const csvWriter = createObjectCsvWriter({
694 | 				path: filePath,
695 | 				header: [
696 | 					{ id: 'orderId', title: 'Order ID' },
697 | 					{ id: 'dominantToken', title: 'Dominant Token' },
698 | 					{ id: 'swapToken', title: 'Swap Token' },
699 | 					{ id: 'price', title: 'Price' },
700 | 					{ id: 'quantity', title: 'Quantity' },
701 | 					{ id: 'sender', title: 'Sender' },
702 | 					{ id: 'receiver', title: 'Receiver' },
703 | 					{ id: 'timestamp', title: 'Timestamp' },
704 | 					{ id: 'event', title: 'Event' },
705 | 				],
706 | 			});
707 | 
708 | 			await csvWriter.writeRecords(updatedActivity);
709 | 			console.log(`Logs written successfully to ${filePath} `);
710 | 		}
711 | 		else {
712 | 			console.log('No data found');
713 | 		}
714 | 	}
715 | 	catch (e) {
716 | 		console.error(e);
717 | 	}
718 | }
719 | 
720 | export async function getProfilesByWalletAddresses(args: { addresses: string[] }) {
721 | 	console.log('Running profile lookup...');
722 | 	const profileLookup = await readHandler({
723 | 		processId: AO.profileRegistry,
724 | 		action: 'Read-Profiles',
725 | 		data: { Addresses: args.addresses },
726 | 	});
727 | 
728 | 	const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
729 | 	let fileName = `Profile-Lookup-${timestamp}`;
730 | 	fileName += '.csv';
731 | 
732 | 	const filePath = `${process.env.HOME}/Downloads/${fileName}`;
733 | 
734 | 	if (profileLookup && profileLookup.length > 0) {
735 | 		const csvWriter = createObjectCsvWriter({
736 | 			path: filePath,
737 | 			header: [
738 | 				{ id: 'ProfileId', title: 'Profile ID' },
739 | 				{ id: 'CallerAddress', title: 'Wallet Address' }
740 | 			],
741 | 		});
742 | 
743 | 		await csvWriter.writeRecords(profileLookup);
744 | 		console.log(`Logs written successfully to ${filePath} `);
745 | 	}
746 | 	else {
747 | 		console.log('No data found');
748 | 	}
749 | }
750 | 
751 | export async function handleCollectionReturn(collectionId: string) {
752 | 	try {
753 | 		const assetsToTransfer = [];
754 | 		const listedAssets = [];
755 | 
756 | 		const ucmResponse = await readHandler({
757 | 			processId: AO.ucm,
758 | 			action: 'Info'
759 | 		});
760 | 
761 | 		const collectionResponse = await readHandler({
762 | 			processId: collectionId,
763 | 			action: 'Info'
764 | 		});
765 | 
766 | 		if (ucmResponse?.Orderbook && collectionResponse?.Assets) {
767 | 			for (const entry of ucmResponse.Orderbook) {
768 | 				if (collectionResponse.Assets.includes(entry.Pair[0]) && entry.Orders?.length) {
769 | 					listedAssets.push(entry.Pair[0]);
770 | 				}
771 | 			}
772 | 		}
773 | 
774 | 		const filteredAssets = collectionResponse.Assets.filter((assetId: string) => !listedAssets.includes(assetId));
775 | 
776 | 		for (const assetId of filteredAssets) {
777 | 			try {
778 | 				const balancesResponse = await readHandler({
779 | 					processId: assetId,
780 | 					action: 'Balances'
781 | 				});
782 | 
783 | 				if (balancesResponse && balancesResponse[AO.ucm]) {
784 | 					assetsToTransfer.push({ Id: assetId, Quantity: balancesResponse[AO.ucm] });
785 | 					console.log(`Asset (${assetId}) owned by UCM, Balance: ${balancesResponse[AO.ucm]}`);
786 | 				}
787 | 			}
788 | 			catch (e: any) {
789 | 				console.error(`Error on asset (${assetId})`);
790 | 				console.error(e.message ?? e);
791 | 			}
792 | 		}
793 | 
794 | 		if (assetsToTransfer.length > 0) {
795 | 			console.log(`Running transfer on ${assetsToTransfer.length} assets...`)
796 | 			await messageResults({
797 | 				processId: AO.ucm,
798 | 				action: 'Return-Transfer',
799 | 				wallet: JSON.parse(readFileSync(process.env.UCM_OWNER).toString()),
800 | 				tags: [{ name: 'Recipient', value: 'ypjwVnuXu5h4Hlz45M46yABxv3f1qjziCQmcz5PoDaA' }],
801 | 				data: { AssetsToTransfer: assetsToTransfer }
802 | 			});
803 | 		}
804 | 	}
805 | 	catch (e: any) {
806 | 		console.error(e);
807 | 	}
808 | }
809 | 
810 | async function getStreaks() {
811 | 	try {
812 | 		const streaks = await readHandler({
813 | 			processId: AO.pixl,
814 | 			action: 'Get-Streaks',
815 | 		});
816 | 
817 | 		const mappedStreaks = Object.entries(streaks.Streaks).map(([id, details]) => ({
818 | 			ID: id,
819 | 			Days: (details as any).days,
820 | 			LastHeight: (details as any).lastHeight,
821 | 		}));
822 | 
823 | 		const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
824 | 		let fileName = `Streaks-${timestamp}`;
825 | 		fileName += '.csv';
826 | 
827 | 		const filePath = `${process.env.HOME}/Downloads/${fileName}`;
828 | 
829 | 		const csvWriter = createObjectCsvWriter({
830 | 			path: filePath,
831 | 			header: [
832 | 				{ id: 'ID', title: 'ID' },
833 | 				{ id: 'Days', title: 'Days' },
834 | 				{ id: 'LastHeight', title: 'LastHeight' },
835 | 			],
836 | 		});
837 | 
838 | 		await csvWriter.writeRecords(mappedStreaks);
839 | 		console.log(`Logs written successfully to ${filePath}`);
840 | 	} catch (e: any) {
841 | 		console.error(e);
842 | 	}
843 | }
844 | 
845 | function printUsage() {
846 | 	console.log("\nUsage:");
847 | 	console.log("  node script.js <command> [parameters]\n");
848 | 	console.log("Commands:");
849 | 	console.log("  handleCollectionReturn <collectionId>   Process a collection return with the given ID.");
850 | 	console.log("  getStreaks                              Retrieve streaks data.");
851 | 	console.log("  getTransferData <walletAddress>         Get transfer data for the given wallet address.\n");
852 | }
853 | 
854 | const args = process.argv.slice(2);
855 | const command = args[0];
856 | 
857 | (async function () {
858 | 	if (!command) {
859 | 		console.error("No command provided.");
860 | 		printUsage();
861 | 		process.exit(1);
862 | 	}
863 | 
864 | 	switch (command) {
865 | 		case 'streaks': {
866 | 			await getStreaks();
867 | 			break;
868 | 		}
869 | 		case 'transfer-data': {
870 | 			const walletAddress = args[1];
871 | 			if (!walletAddress) {
872 | 				console.error("Error: 'getTransferData' requires a wallet address.");
873 | 				printUsage();
874 | 				process.exit(1);
875 | 			}
876 | 			await getTransferData(walletAddress);
877 | 			break;
878 | 		}
879 | 		default: {
880 | 			console.error(`Unknown command: ${command}`);
881 | 			printUsage();
882 | 			process.exit(1);
883 | 		}
884 | 	}
885 | })();


--------------------------------------------------------------------------------
/toolkit/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"compilerOptions": {
 3 | 		"baseUrl": "./src",
 4 | 		"paths": {
 5 | 			"*": ["*"]
 6 | 		},
 7 | 		"target": "es5",
 8 | 		"lib": ["dom", "dom.iterable", "esnext"],
 9 | 		"allowJs": true,
10 | 		"skipLibCheck": true,
11 | 		"esModuleInterop": true,
12 | 		"allowSyntheticDefaultImports": true,
13 | 		"strict": false,
14 | 		"forceConsistentCasingInFileNames": true,
15 | 		"module": "CommonJS",
16 | 		"moduleResolution": "node",
17 | 		"resolveJsonModule": true,
18 | 		"isolatedModules": true,
19 | 		"noUnusedLocals": false,
20 | 		"noUnusedParameters": false,
21 | 		"noFallthroughCasesInSwitch": true,
22 | 		"noEmit": true,
23 | 		"jsx": "react-jsx",
24 | 		"downlevelIteration": true
25 | 	},
26 | 	"include": [
27 | 		"typings/**/*",
28 | 		"src/**/*"
29 | 	]
30 | }
31 | 


--------------------------------------------------------------------------------
/toolkit/tslint.json:
--------------------------------------------------------------------------------
1 | {
2 |   "extends": "tslint:latest"
3 | }
4 | 


--------------------------------------------------------------------------------