├── .github
    └── workflows
    │   ├── gitstamp.yaml
    │   └── test.yaml
├── .gitignore
├── .vscode
    └── settings.json
├── LICENSE.md
├── README.md
├── bin
    └── install-git-hooks
├── debug-cli
    ├── README.md
    ├── test-chunk-dl.js
    ├── test-chunk-resume-id.js
    ├── test-chunk-resume.js
    ├── test-chunk-sizing.js
    ├── test-chunk-uploader.js
    ├── test-merkle-gen-time.js
    ├── test-non-generator-interface.js
    └── test-post-upload.js
├── package-lock.json
├── package.json
├── src
    ├── common
    │   ├── ar.ts
    │   ├── blocks.ts
    │   ├── chunks.ts
    │   ├── common.ts
    │   ├── lib
    │   │   ├── api.ts
    │   │   ├── crypto
    │   │   │   ├── crypto-interface.ts
    │   │   │   ├── node-driver.ts
    │   │   │   ├── pem.ts
    │   │   │   └── webcrypto-driver.ts
    │   │   ├── deepHash.ts
    │   │   ├── error.ts
    │   │   ├── merkle.ts
    │   │   ├── transaction-uploader.ts
    │   │   ├── transaction.ts
    │   │   ├── utils.ts
    │   │   └── wallet.ts
    │   ├── network.ts
    │   ├── silo.ts
    │   ├── transactions.ts
    │   └── wallets.ts
    ├── modules.d.ts
    ├── node
    │   └── index.ts
    └── web
    │   ├── index.ts
    │   └── net-config.ts
├── test
    ├── _arweave.ts
    ├── api.ts
    ├── blocks.ts
    ├── builds.ts
    ├── chunks.ts
    ├── common
    │   └── lib
    │   │   └── utils.ts
    ├── encryption.ts
    ├── fixtures
    │   ├── 1mb.bin
    │   ├── arweave-keyfile-fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw.json
    │   ├── block_height_1000000.json
    │   ├── block_zbUPQFA4ybnd8h99KI9Iqh4mogXJibr0syEwuJPrFHhOhld7XBMOUDeXfsIGvYDp.json
    │   ├── lotsofdata.bin
    │   ├── signed_v2_tx.json
    │   ├── smartweave-contracts
    │   │   ├── token-pst.js
    │   │   └── token-pst.json
    │   └── unsigned_v2_tx.json
    ├── index.ts
    ├── net-config.ts
    ├── rebar3
    ├── silo.ts
    ├── transactions-external.ts
    ├── transactions.ts
    ├── wallets.ts
    └── web
    │   ├── web.html
    │   └── web.ts
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.web.json
└── webpack.config.js


/.github/workflows/gitstamp.yaml:
--------------------------------------------------------------------------------
 1 | # See: https://github.com/artob/gitstamp-action
 2 | ---
 3 | name: Gitstamp
 4 | on: [push]
 5 | jobs:
 6 |   gitstamp:
 7 |     runs-on: ubuntu-latest
 8 |     name: Timestamp commit with Gitstamp
 9 |     steps:
10 |       - name: Clone repository
11 |         uses: actions/checkout@v2
12 |       - name: Submit Gitstamp transaction
13 |         uses: weavery/gitstamp-action@1.0.3
14 |         with:
15 |           wallet-key: ${{ secrets.GITSTAMP_KEYFILE }}
16 |           commit-link: true
17 | 


--------------------------------------------------------------------------------
/.github/workflows/test.yaml:
--------------------------------------------------------------------------------
 1 | name: Test
 2 | on: 
 3 |   workflow_dispatch:
 4 |   push: 
 5 |     branches:
 6 |       - master
 7 |   pull_request:
 8 | #     paths-ignore:
 9 | #       - '**.md'
10 | 
11 | jobs:
12 |   build:
13 |     name: Install deps ${{ matrix.os }}. Build only ubuntu
14 |     runs-on: ${{ matrix.os }}
15 |     strategy:
16 |       fail-fast: true
17 |       matrix:
18 |         os: [ubuntu-latest, windows-latest, macos-latest]
19 |     steps:
20 |       - uses: actions/checkout@v2
21 |       - uses: actions/setup-node@v2
22 |         with:
23 |           node-version: "22"
24 | 
25 |       - uses: actions/cache@v4
26 |         id: cache-node-modules
27 |         env:
28 |           cache-name: cache-node-modules
29 |         with:
30 |           path: node_modules
31 |           key:  ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
32 |           restore-keys: |
33 |             ${{ runner.os }}-build-${{ env.cache-name }}-
34 |             ${{ runner.os }}-build-
35 |             ${{ runner.os }}-
36 | 
37 |       - name: Install dependencies
38 |         if: steps.cache-node-modules.outputs.cache-hit != 'true'
39 |         run: npm ci
40 | 
41 |       - name: Build on ubuntu
42 |         if: matrix.os == 'ubuntu-latest'
43 |         run: npm run build
44 |       - name: Upload ubuntu build folders
45 |         if: matrix.os == 'ubuntu-latest'
46 |         uses: actions/upload-artifact@main
47 |         with:
48 |           name: build artifacts
49 |           retention-days: 1
50 |           path: |
51 |             node/
52 |             web/
53 |             bundles/
54 | 
55 |   test:
56 |     needs: build
57 |     name: ${{ matrix.os }} with node ${{ matrix.node-version }}
58 |     runs-on: ${{ matrix.os }}
59 |     strategy:
60 |       fail-fast: true
61 |       matrix:
62 |         node-version: [18, 20, 22]
63 |         os: [ubuntu-latest, windows-latest, macos-latest]
64 |     steps:
65 |       - uses: actions/checkout@v2
66 |       - uses: actions/download-artifact@main
67 |         with:
68 |           name: build artifacts
69 |       - name: Use nodejs ${{ matrix.node-version }}
70 |         uses: actions/setup-node@v2
71 |         with:
72 |           node-version: ${{ matrix.node-version }}
73 | 
74 |       - uses: actions/cache@v4
75 |         id: cache-node-modules
76 |         env:
77 |           cache-name: cache-node-modules
78 |         with:
79 |           path: node_modules
80 |           key:  ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
81 |           restore-keys: |
82 |             ${{ runner.os }}-build-${{ env.cache-name }}-
83 |             ${{ runner.os }}-build-
84 |             ${{ runner.os }}-
85 | 
86 |       - name: test
87 |         run: npm test
88 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | /node_modules
2 | /dist
3 | /node
4 | /web
5 | /bundles
6 | /debug-cli/testfiles/**/*
7 | .idea
8 | yarn.lock
9 | 


--------------------------------------------------------------------------------
/.vscode/settings.json:
--------------------------------------------------------------------------------
1 | {
2 |   "ponicode.testSettings.testLocation.locationType": "Same folder as source file",
3 |   "ponicode.testSettings.testLocation.path": "{rootDir}/{filePath}/{fileName}.test.{ext}"
4 | }


--------------------------------------------------------------------------------
/LICENSE.md:
--------------------------------------------------------------------------------
1 | Copyright 2020 The Arweave Team
2 | Copyright 2020 Minimum Spanning Technologies Limited
3 | 
4 | Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
5 | 
6 | The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
7 | 
8 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
9 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
  1 | # Arweave JS 
  2 | 
  3 | Arweave JS is the JavaScript/TypeScript SDK for interacting with the Arweave network and uploading data to the permaweb. It works in latest browsers and Node JS.
  4 | 
  5 | > **Notes:** 
  6 | > 1. If you are planning to upload large batches of data transactions to the Arweave network, it is strongly advised that you use [@DHA-Team/ArBundles](https://github.com/DHA-Team/arbundles) instead of transactions with Arweave.js. You can read about bundles and their advantages on the [Arwiki](https://arwiki.wiki/#/en/bundles).
  7 | > 2. When working with NodeJS a minimum version of 18+ is required. Bun/Deno not currently working.
  8 | 
  9 | - [Arweave JS](#arweave-js)
 10 |   - [Installation](#installation)
 11 |     - [NPM](#npm)
 12 |     - [Bundles](#bundles)
 13 |   - [Initialisation](#initialisation)
 14 |     - [NPM Node](#npm-node)
 15 |     - [NPM Web](#npm-web)
 16 |     - [Web Bundles](#web-bundles)
 17 |     - [Initialisation options](#initialisation-options)
 18 |   - [Usage](#usage)
 19 |     - [Wallets and Keys](#wallets-and-keys)
 20 |       - [Create a new wallet and private key](#create-a-new-wallet-and-private-key)
 21 |       - [Get the wallet address for a private key](#get-the-wallet-address-for-a-private-key)
 22 |       - [Get an address balance](#get-an-address-balance)
 23 |       - [Get the last transaction ID from a wallet](#get-the-last-transaction-id-from-a-wallet)
 24 |     - [Transactions](#transactions)
 25 |       - [Create a data transaction](#create-a-data-transaction)
 26 |       - [Create a wallet to wallet transaction](#create-a-wallet-to-wallet-transaction)
 27 |       - [Add tags to a transaction](#add-tags-to-a-transaction)
 28 |       - [Sign a transaction](#sign-a-transaction)
 29 |       - [Submit a transaction](#submit-a-transaction)
 30 |         - [Chunked uploading advanced options](#chunked-uploading-advanced-options)
 31 |       - [Get a transaction status](#get-a-transaction-status)
 32 |       - [Get a transaction](#get-a-transaction)
 33 |       - [Get transaction data](#get-transaction-data)
 34 |       - [Decode tags from transactions](#decode-tags-from-transactions)
 35 |     - [Blocks](#blocks)  
 36 |       - [Get a block by indep_hash](#get-a-block-by-indep_hash)
 37 |       - [Get current block](#get-current-block)
 38 |     - [GraphQL](#graphql)
 39 |     - [License](#license)
 40 | 
 41 | ## Installation
 42 | ### NPM
 43 | ```bash
 44 | npm install --save arweave
 45 | ```
 46 | 
 47 | ### Bundles
 48 | Single bundle file (web only - use the NPM method if using Node).
 49 | 
 50 | ```html
 51 | <!-- Latest -->
 52 | <script src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
 53 | 
 54 | <!-- Latest, minified-->
 55 | <script src="https://unpkg.com/arweave/bundles/web.bundle.min.js"></script>
 56 | 
 57 | <!-- Specific version -->
 58 | <script src="https://unpkg.com/arweave@1.2.0/bundles/web.bundle.js"></script>
 59 | 
 60 | <!-- Specific version, minified -->
 61 | <script src="https://unpkg.com/arweave@1.2.0/bundles/web.bundle.min.js"></script>
 62 | ```
 63 | 
 64 | 
 65 | ## Initialisation
 66 | 
 67 | ### NPM Node
 68 | ```js
 69 | const Arweave = require('arweave');
 70 | 
 71 | // If you want to connect directly to a node
 72 | const arweave = Arweave.init({
 73 |     host: '127.0.0.1',
 74 |     port: 1984,
 75 |     protocol: 'http'
 76 | });
 77 | 
 78 | // Or to specify a gateway when running from NodeJS you might use
 79 | const arweave = Arweave.init({
 80 |   host: 'arweave.net',
 81 |   port: 443,
 82 |   protocol: 'https'
 83 | });
 84 | ```
 85 | 
 86 | ### NPM Web
 87 | ```js
 88 | import Arweave from 'arweave';
 89 | 
 90 | // Since v1.5.1 you're now able to call the init function for the web version without options. The current URL path will be used by default. This is recommended when running from a gateway.
 91 | const arweave = Arweave.init({});
 92 | 
 93 | // Or manually specify a host
 94 | const arweave = Arweave.init({
 95 |     host: '127.0.0.1',
 96 |     port: 1984,
 97 |     protocol: 'http'
 98 | });
 99 | ```
100 | 
101 | ### Web Bundles
102 | ```js
103 | <!DOCTYPE html>
104 | <html lang="en">
105 | <head>
106 |     <meta charset="UTF-8">
107 |     <title>Hello world</title>
108 |     <!-- n.b. update the arweave version number. replace @1.15.5 with a more recent version use or @latest, if you're risky :) -->
109 |     <script src="https://unpkg.com/arweave@1.15.5/bundles/web.bundle.js"></script>
110 |     <script>
111 |     const arweave = Arweave.init({});
112 |     arweave.network.getInfo().then(console.log);
113 |     </script>
114 | </head>
115 | <body>
116 | 
117 | </body>
118 | </html>
119 | ```
120 | 
121 | ### Initialisation options
122 | ```js
123 | {
124 |     host: 'arweave.net',// Hostname or IP address for a Arweave host
125 |     port: 443,          // Port
126 |     protocol: 'https',  // Network protocol http or https
127 |     timeout: 20000,     // Network request timeouts in milliseconds
128 |     logging: false,     // Enable network request logging
129 | }
130 | ```
131 | 
132 | ## Usage
133 | 
134 | ### Wallets and Keys
135 | 
136 | #### Create a new wallet and private key
137 | 
138 | Here you can generate a new wallet address and private key ([JWK](https://docs.arweave.org/developers/server/http-api#key-format)), don't expose private keys or make them public as anyone with the key can use the corresponding wallet.
139 | 
140 | Make sure they're stored securely as they can never be recovered if lost.
141 | 
142 | Once AR has been sent to the address for a new wallet, the key can then be used to sign outgoing transactions.
143 | ```js
144 | arweave.wallets.generate().then((key) => {
145 |     console.log(key);
146 |     // {
147 |     //     "kty": "RSA",
148 |     //     "n": "3WquzP5IVTIsv3XYJjfw5L-t4X34WoWHwOuxb9V8w...",
149 |     //     "e": ...
150 | });
151 | ```
152 | 
153 | #### Get the wallet address for a private key
154 | 
155 | ```js
156 | arweave.wallets.jwkToAddress(key).then((address) => {
157 |     console.log(address);
158 |     //1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY
159 | });
160 | ```
161 | 
162 | #### Get an address balance
163 | Get the balance of a wallet address, all amounts by default are returned in [winston](https://docs.arweave.org/developers/server/http-api#ar-and-winston).
164 | ```js
165 | arweave.wallets.getBalance('1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY').then((balance) => {
166 |     let winston = balance;
167 |     let ar = arweave.ar.winstonToAr(balance);
168 | 
169 |     console.log(winston);
170 |     //125213858712
171 | 
172 |     console.log(ar);
173 |     //0.125213858712
174 | });
175 | ```
176 | 
177 | #### Get the last transaction ID from a wallet
178 | 
179 | ```js
180 | arweave.wallets.getLastTransactionID('1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY').then((transactionId) => {
181 |     console.log(transactionId);
182 |     //3pXpj43Tk8QzDAoERjHE3ED7oEKLKephjnVakvkiHF8
183 | });
184 | ```
185 | 
186 | ### Transactions
187 | 
188 | Transactions are the building blocks of the Arweave permaweb. They can send [AR](https://docs.arweave.org/developers/server/http-api#ar-and-winston) between wallet addresses or store data on the Arweave network.
189 | 
190 | The create transaction methods create and return an unsigned transaction object. You must sign the transaction and submit it separately using the `transactions.sign` and `transactions.submit` methods.
191 | 
192 | If you don't pass in a `key` argument when creating a transaction, Arweave.js will attempt to use a browser-based wallet extension, such as [ArConnect](https://arconnect.io) or [Arweave.app](https://arweave.app), to sign the transaction.
193 | 
194 | **Modifying a transaction object after signing it will invalidate the signature,** causing it to be rejected by the network if submitted in that state. Transaction prices are based on the size of the data field, so modifying the data field after a transaction has been created isn't recommended as you'll need to manually update the price.
195 | 
196 | The transaction ID is a hash of the transaction signature, so a transaction ID can't be known until its contents are finalised and it has been signed.
197 | 
198 | #### Create a data transaction
199 | 
200 | **Note:** If you are planning to upload large batches of data transactions to the Arweave network, it is strongly advised that you use [ArBundles](https://github.com/Bundler-Network/arbundles) instead of transactions with Arweave.js. You can read about bundles and their advantages on the [Arwiki](https://arwiki.wiki/#/en/preview/WUAtjfiDQEIqhsUcHXIFTn5ZmeDIE7If9hJREBLRgak).
201 | 
202 | Data transactions are used to store data on the Arweave permaweb. They can contain HTML or any arbitrary data and are served like webpages.
203 | 
204 | ```js
205 | let key = await arweave.wallets.generate();
206 | 
207 | // Plain text
208 | let transactionA = await arweave.createTransaction({
209 |     data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>'
210 | }, key);
211 | 
212 | // Buffer
213 | let transactionB = await arweave.createTransaction({
214 |     data: Buffer.from('Some data', 'utf8')
215 | }, key);
216 | 
217 | 
218 | console.log(transactionA);
219 | // Transaction {
220 | //   format: 2,
221 | //   id: 'ReUohI9tEmXQ6EN9H9IkRjY9bSdgql_OdLUCOeMEte0',
222 | //   last_tx: 'Tk-0c7260Ya5zjfjzl4f6-W-vRO94qiqZMAScKBcYXc68v1Pd8bYfTbKWi7pepUF',
223 | //   owner: 'kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzO...',
224 | //   tags: [],
225 | //   target: '',
226 | //   quantity: '0',
227 | //   data: 'c29tZSBkYXRh',
228 | //   data_size: '9',
229 | //   data_root: 'qwKZUl7qWpCEmB3cpONKTYOcSmnmhb-_s8ggMTZwCU4',
230 | //   data_tree: [],
231 | //   reward: '7489274',
232 | //   signature: 'JYdFPblDuT95ky7_wVss3Ax9e4Qygcd_lEcB07sDPUD_wNslOk...'
233 | // }
234 | ```
235 | 
236 | #### Create a wallet to wallet transaction
237 | 
238 | Wallet to wallet transactions can facilitate payments from one wallet to another, given a target wallet and AR token quantity in Winston.
239 | 
240 | ```js
241 | let key = await arweave.wallets.generate();
242 | 
243 | // Send 10.5 AR to 1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY
244 | let transaction = await arweave.createTransaction({
245 |     target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
246 |     quantity: arweave.ar.arToWinston('10.5')
247 | }, key);
248 | 
249 | console.log(transaction);
250 | // Transaction {
251 | //   format: 2,
252 | //   id: 'v-n7hAc7cubeXSClh0beaOs1RjYFagyvpl2TkUOfbRg',
253 | //   last_tx: 'Tk-0c7260Ya5zjfjzl4f6-W-vRO94qiqZMAScKBcYXc68v1Pd8bYfTbKWi7pepUF',
254 | //   owner: 'kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzOc6W9b...',
255 | //   tags: [],
256 | //   target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
257 | //   quantity: '10500000000000',
258 | //   data: '',
259 | //   data_size: '0',
260 | //   data_root: '',
261 | //   data_tree: [],
262 | //   reward: '7468335',
263 | //   signature: 'DnUOYbRSkhI4ZXg5fpYDCwPv8yvM5toAneSx4Jlg0zjIocqPs8giPP...'
264 | // }
265 | ```
266 | 
267 | #### Add tags to a transaction
268 | 
269 | Metadata can be added to transactions through tags, these are simple key/value attributes that can be used to document the contents of a transaction or provide related data.
270 | 
271 | [GraphQL](#graphql) uses tags when searching for transactions.
272 | 
273 | The `Content-Type` is a reserved tag and is used to set the data content type. For example, a transaction with HTML data and a content type tag of `text/html` will be served as a HTML page and render correctly in browsers,
274 | if the content type is set to `text/plain` then it will be served as a plain text document and not render in browsers.
275 | 
276 | ```js
277 | let key = await arweave.wallets.generate();
278 | 
279 | let transaction = await arweave.createTransaction({
280 |     data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>',
281 | }, key);
282 | 
283 | transaction.addTag('Content-Type', 'text/html');
284 | transaction.addTag('key2', 'value2');
285 | 
286 | console.log(transaction);
287 | // Transaction {
288 | //   format: 2,
289 | //   id: '',
290 | //   last_tx: 'Tk-0c7260Ya5zjfjzl4f6-W-vRO94qiqZMAScKBcYXc68v1Pd8bYfTbKWi7pepUF',
291 | //   owner: 'kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYC...',
292 | //   tags: [
293 | //     Tag { name: 'Q29udGVudC1UeXBl', value: 'dGV4dC9odG1s' },
294 | //     Tag { name: 'a2V5Mg', value: 'dmFsdWUy' }
295 | //   ],
296 | //   target: '',
297 | //   quantity: '0',
298 | //   data: 'PGh0bWw-PGhlYWQ-PG1ldGEgY2hhcnNldD0iVVRGLTgiPjx0aXRsZT5IZWxsbyB3b3JsZCE8L3RpdGxlPjwvaGVhZD48Ym9keT48L2JvZHk-PC9odG1sPg',
299 | //   data_size: '88',
300 | //   data_root: 'GQunzmbwk2_JPU7oJOmLrTMvj8v_7BJaF0weyjVn5Nc',
301 | //   data_tree: [],
302 | //   reward: '7673074',
303 | //   signature: ''
304 | // }
305 | ```
306 | 
307 | #### Sign a transaction
308 | 
309 | ```js
310 | let key = await arweave.wallets.generate();
311 | 
312 | let transaction = await arweave.createTransaction({
313 |     target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
314 |     quantity: arweave.ar.arToWinston('10.5')
315 | }, key);
316 | 
317 | await arweave.transactions.sign(transaction, key);
318 | 
319 | console.log(transaction);
320 | // Transaction {
321 | //   format: 2,
322 | //   id: 'v-n7hAc7cubeXSClh0beaOs1RjYFagyvpl2TkUOfbRg',
323 | //   last_tx: 'Tk-0c7260Ya5zjfjzl4f6-W-vRO94qiqZMAScKBcYXc68v1Pd8bYfTbKWi7pepUF',
324 | //   owner: 'kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzOc6W9b...',
325 | //   tags: [],
326 | //   target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
327 | //   quantity: '10500000000000',
328 | //   data: '',
329 | //   data_size: '0',
330 | //   data_root: '',
331 | //   data_tree: [],
332 | //   reward: '7468335',
333 | //   signature: 'DnUOYbRSkhI4ZXg5fpYDCwPv8yvM5toAneSx4Jlg0zjIocqPs8giPP...'
334 | // }
335 | ```
336 | 
337 | #### Submit a transaction
338 | 
339 | The preferred method of submitting a data transaction is to use chunk uploading. This method will allow larger transaction sizes, resuming a transaction upload if it's interrupted and give progress updates while uploading.
340 | 
341 | Simple example:
342 | 
343 | ```js
344 | 
345 | let data = fs.readFileSync('path/to/file.pdf');
346 | 
347 | let transaction = await arweave.createTransaction({ data: data }, key);
348 | transaction.addTag('Content-Type', 'application/pdf');
349 | 
350 | await arweave.transactions.sign(transaction, key);
351 | 
352 | let uploader = await arweave.transactions.getUploader(transaction);
353 | 
354 | while (!uploader.isComplete) {
355 |   await uploader.uploadChunk();
356 |   console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
357 | }
358 | ```
359 | _**N.B.** The above code has been simplified and ignores potential errors._
360 | 
361 | You can also submit transactions using `transactions.post()` which is suitable for small transactions or token transfers:
362 | 
363 | ```js
364 | let key = await arweave.wallets.generate();
365 | 
366 | let transaction = await arweave.createTransaction({
367 |     target: '1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY',
368 |     quantity: arweave.ar.arToWinston('10.5')
369 | }, key);
370 | 
371 | await arweave.transactions.sign(transaction, key);
372 | 
373 | const response = await arweave.transactions.post(transaction);
374 | 
375 | console.log(response.status);
376 | // 200 : not to be confused with getStatus === 200, see note below**
377 | 
378 | // HTTP response codes (200 - server received the transaction, 4XX - invalid transaction, 5XX - error)
379 | ```
380 | 
381 | **N.B.** 
382 | _This `200` response does not mean that the transaction has mined & confirmed, and that a txid can be used as if it's immutable._ _It just means that a node has received your transaction._ _See [Get a transaction status](#get-a-transaction-status) for more detail on how to correctly determine that your transaction has been mined & confirmed._ _This also applies to the `uploader` method._
383 | 
384 | 
385 | ##### Chunked uploading advanced options
386 | 
387 | You can resume an upload from a saved uploader object, that you have persisted in storage some using 
388 | `JSON.stringify(uploader)` at any stage of the upload. To resume, parse it back into an object and pass it to `getUploader()` along with the transactions data:
389 | 
390 | ```js
391 | 
392 | let data = fs.readFileSync('path/to/file.pdf'); // get the same data
393 | let resumeObject = JSON.parse(savedUploader); // get uploader object from where you stored it.
394 | 
395 | let uploader = await arweave.transactions.getUploader(resumeObject, data);
396 | while (!uploader.isComplete) {
397 |   await uploader.uploadChunk();
398 | }
399 | 
400 | ```
401 | 
402 | When resuming the upload, you *must provide the same data* as the original upload. When you serialize the uploader object with `JSON.stringify()` to save it somewhere, it will not include the data.
403 | 
404 | You can also resume an upload from just the transaction ID and data, once it has been mined into a block. This can be useful if you didn't save the uploader somewhere but the upload got interrupted. This will re-upload all of the data from the beginning, since we don't know which parts have been uploaded:
405 | 
406 | ```js
407 | 
408 | let data = fs.readFileSync('path/to/file.pdf'); // get the same data
409 | let resumeTxId = 'mytxid' // a transaction id for a mined transaction that didn't complete the upload.
410 | 
411 | let uploader = await arweave.transactions.getUploader(resumeTxId, data);
412 | while (!uploader.isComplete) {
413 |   await uploader.uploadChunk();
414 |   console.log(`${uploader.pctComplete}% complete`);
415 | }
416 | ```
417 | 
418 | 
419 | alternatively
420 | 
421 | ```js
422 | // example of tx being accepted and mined, but the network is missing the data
423 | const Arweave = require("./node/index.js"); // assumed locally built nodejs target
424 | const ArweaveTransaction = require("./node/lib/transaction.js");
425 | const fs = require("fs");
426 | 
427 | // initialize a gateway connection
428 | const arweave = Arweave.init({
429 |   host: "arweave.net",
430 |   port: 443,
431 |   protocol: "https",
432 | });
433 | 
434 | // the data that you paid for but is missing in the network
435 | let missingData = fs.readFileSync(
436 |   "./myfile.mov"
437 | );
438 | 
439 | // get the tx headers from arweave.net/tx/{txid}
440 | let txHeaders = require("./txheaders.json");
441 | 
442 | (async () => {
443 |   const tx = new ArweaveTransaction.default(txHeaders);
444 |   let uploader = await arweave.transactions.getUploader(tx, missingData);
445 |   while (!uploader.isComplete) {
446 |     await uploader.uploadChunk();
447 |   }
448 | })();
449 | ```
450 | 
451 | There is also an async iterator interface to chunk uploading, but this method means you'll need to ensure you are using a transpiler and polyfill for the asyncIterator symbol for some environments. (Safari on iOS in particular). This method takes the same arguments for uploading/resuming a transaction as `getUploader()` and just has a slightly shorter syntax:
452 | 
453 | ```js
454 | for await (const uploader of arweave.transactions.upload(tx)) {
455 |   console.log(`${uploader.pctComplete}% Complete`);
456 | }
457 | // done.
458 | ```
459 | 
460 | #### Get a transaction status
461 | 
462 | Remember: Just like other blockchain-style systems (like Bitcoin and Ethereum), you should always ensure that your transaction has received a number of confirmations in blocks before you assume that the transaction has been fully accepted by the network.
463 | 
464 | ```js
465 | arweave.transactions.getStatus('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U').then(res => {
466 |     console.log(res);
467 |     // {
468 |     //  status: 200,
469 |     //  confirmed: {
470 |     //    block_height: 140151,
471 |     //    block_indep_hash: 'OR1wue3oBSg3XWvH0GBlauAtAjBICVs2F_8YLYQ3aoAR7q6_3fFeuBOw7d-JTEdR',
472 |     //    number_of_confirmations: 20
473 |     //  }
474 |     //}
475 | })
476 | ```
477 | _**N.B.** We strongly advise that you check the status and number of confirmations for a given txid before integrating it elsewhere (for example, if you plan to integrate a txid into an NFT contract), even if you have received a ‘200’ status response._
478 | 
479 | 
480 | #### Get a transaction
481 | 
482 | Fetch a transaction from the connected arweave node. The data and tags are base64 encoded, these can be decoded using the built in helper methods.
483 | 
484 | > **Update since v1.9.0**
485 | *Due to how the API has evolved over time and with larger transaction support, the `data` field is no longer _guaranteed_ to be returned from the network as part of the transaction json, therefore, it is not recommended that you use this function for fetching data anymore. You should update your applications to use [`arweave.transactions.getData()`](#get-transaction-data) instead, this will handle small transactions, as well as the reassembling of chunks for larger ones, it can also benefit from gateway optimisations.*
486 | 
487 | ```js
488 | const transaction = arweave.transactions.get('hKMMPNh_emBf8v_at1tFzNYACisyMQNcKzeeE1QE9p8').then(transaction => {
489 |   console.log(transaction);
490 |     // Transaction {
491 |     //   'format': 1,
492 |     //   'id': 'hKMMPNh_emBf8v_at1tFzNYACisyMQNcKzeeE1QE9p8',
493 |     //   'last_tx': 'GW7p6NoGJ495tAoUjU5GLxIH52gqOgk5j78gQv3j0ebvldAlw6VgIUv_lrMNGI72',
494 |     //   'owner': 'warLaSbicZm1nx9ucf-_5i91CWgmNOcnFJfyJdloCtsbenBhLrcGH472kKTZyuEAp2lSKlZ0NFCT2r2z-0...',
495 |     //   'tags': [
496 |     //     {
497 |     //       'name': 'QXBwLU5hbWU',
498 |     //       'value': 'd2VpYm90LXNlYXJjaC13ZWlicw'
499 |     //     }
500 |     //   ],
501 |     //   'target': ',
502 |     //   'quantity': '0',
503 |     //   'data': 'iVBORw0KGgoAAAANSUhEUgAAArIAAADGCAYAAAAuVWN-AAAACXBIWXMAAAsSAAA...'
504 |     //   'data_size': '36795',
505 |     //   'data_tree': [],
506 |     //   'data_root': ',
507 |     //   'reward': '93077980',
508 |     //   'signature': 'RpohCHVl5vzGlG4R5ybeEuhs556Jv7rWOGaZCT69cpIei_j9b9sAetBlr0...'
509 |     // }
510 | });
511 | ```
512 | 
513 | #### Get transaction data
514 | 
515 | You can get the transaction data from a transaction ID without having to get the entire transaction
516 | 
517 | ```js
518 | // Get the base64url encoded string
519 | arweave.transactions.getData('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U').then(data => {
520 |   console.log(data);
521 |   // CjwhRE9DVFlQRSBodG1sPgo...
522 | });
523 | 
524 | // Get the data decoded to a Uint8Array for binary data
525 | arweave.transactions.getData('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U', {decode: true}).then(data => {
526 |   console.log(data);
527 |   // Uint8Array [10, 60, 33, 68, ...]
528 | });
529 | 
530 | // Get the data decode as string data
531 | arweave.transactions.getData('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U', {decode: true, string: true}).then(data => {
532 |   console.log(data);
533 |   // <!DOCTYPE HTML>...
534 | });
535 | ```
536 | 
537 | #### Decode tags from transactions
538 | 
539 | ```js
540 | const transaction = arweave.transactions.get('bNbA3TEQVL60xlgCcqdz4ZPHFZ711cZ3hmkpGttDt_U').then(transaction => {
541 | 
542 |   transaction['tags'].forEach(tag => {
543 |     let key = tag.get('name', {decode: true, string: true});
544 |     let value = tag.get('value', {decode: true, string: true});
545 |     console.log(`${key} : ${value}`);
546 |   });
547 |   // Content-Type : text/html
548 |   // User-Agent : ArweaveDeploy/1.1.0
549 | });
550 | ```
551 | 
552 | ### Blocks
553 | Blocks are base elements of Arweave's blockweave data structure.
554 | Each block is linked to two prior blocks: the previous block in the "chain" (as with traditional blockchain
555 | protocols), and a block from the previous history of the blockchain (the "recall block"). Each block contains
556 | a list of zero to many transactions.
557 | 
558 | 
559 | #### Get a block by indep_hash
560 | Gets block data for given independent hash (see page 63. of [yellow-paper](https://www.arweave.org/yellow-paper.pdf) for details).
561 | 
562 | ```js
563 | const result = await arweave.blocks.get("zbUPQFA4ybnd8h99KI9Iqh4mogXJibr0syEwuJPrFHhOhld7XBMOUDeXfsIGvYDp"); 
564 | console.log(result)
565 | // {
566 | //   "nonce": "6jdzO4FzS4EVaQVcLBEmxm6uN5-1tqBXW24Pzp6JsRQ",
567 | //   "previous_block": "iNgEv6vf9nIrxLWeEu-vPNHFftEh0kfOnx0qd6NKUOc8Z3WeMeOmAmdOHwSUFAGn",
568 | //   "timestamp": 1624183433,
569 | //   "last_retarget": 1624183433,
570 | //   "diff": "115792089220940710686296942055695413965527953310049630981189590430430626054144",
571 | //   "height": 711150,
572 | //   "hash": "_____8V8BkM8Cyja5ZFJcc7HfX33eM4BKDAvcEBn22s",
573 | //   "indep_hash": "zbUPQFA4ybnd8h99KI9Iqh4mogXJibr0syEwuJPrFHhOhld7XBMOUDeXfsIGvYDp",
574 | //   "txs": [ ...
575 | ```
576 | 
577 | #### Get current block
578 | Gets a block data for current block, i.e., block with indep_hash:
579 | ```js
580 | const {current} = await arweave.network.getInfo();
581 | ```
582 | 
583 | ```js
584 | const result = await arweave.blocks.getCurrent(); 
585 | console.log(result)
586 | // {
587 | //   "indep_hash": "qoJwHSpzl6Ouo140HW2DTv1rGOrgfBEnHi5sHv-fJt_TsK7xA70F2QbjMCopLiMd",
588 | //   ...
589 | ```
590 | 
591 | ### GraphQL 
592 | Find your transation ids and tags by searching their metadata. GraphQL (GQL) provides flexible querying and allows you to search for transactions by tags, wallet address, block height, etc. 
593 | 
594 | Please see the [GQL Guide](https://gql-guide.vercel.app/) for further details.
595 | 
596 | 
597 | 
598 | ### License
599 | 
600 | This software is released under MIT license. See [LICENSE.md](./LICENSE.md) for full license details.
601 | 


--------------------------------------------------------------------------------
/bin/install-git-hooks:
--------------------------------------------------------------------------------
1 | #!/bin/bash -e
2 | GIT_DIR="$(git rev-parse --git-dir)"
3 | PRE_COMMIT_HOOK="$GIT_DIR/hooks/pre-commit"
4 | cat > "$PRE_COMMIT_HOOK" <<'EOF'
5 | #!/bin/bash
6 | npm run prettier:check
7 | EOF
8 | chmod +x "$PRE_COMMIT_HOOK"
9 | 


--------------------------------------------------------------------------------
/debug-cli/README.md:
--------------------------------------------------------------------------------
 1 | # debug-cli
 2 | 
 3 | Just some very quick scripts to test things around chunk uploading and downloading. 
 4 | 
 5 | For many of these, you'll need a wallet with funds, just store it as an environment var:
 6 | 
 7 | ```bash
 8 | export WALLET_JSON=$(cat path/to/keyfile.json)
 9 | ``` 
10 | 
11 | ## Upload a file via chunks and print progress.
12 | 
13 | ```bash
14 | ./test-chunk-upload.js <file> 
15 | ```
16 | 
17 | ## Redo an upload from file and txid ( tx must be mined)
18 | 
19 | ```bash
20 | ./test-chunk-resume-id.js <file> <txid>
21 | ```
22 | 
23 | ## Resume an upload from a progress.json file
24 | 
25 | ```bash
26 | ./test-chunk-resume-js <file> <progress.file.json> 
27 | ```
28 | 
29 | ## Download all chunks from a txid
30 | 
31 | ```bash
32 | ./test-chunk-dl.js <txid>
33 | ```
34 | 


--------------------------------------------------------------------------------
/debug-cli/test-chunk-dl.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 5 | 
 6 | async function testIt(id) {
 7 |   
 8 |   const offsetResponse = await arweave.chunks.getTransactionOffset(id); 
 9 |   console.log(offsetResponse);
10 |   let offset = arweave.chunks.firstChunkOffset(offsetResponse);
11 |   let totalSize = 0;
12 |   while (offset < offsetResponse.offset) {
13 |     const chunk = await arweave.chunks.getChunk(offset);
14 |     const data = Arweave.utils.b64UrlToBuffer(chunk.chunk);
15 |     console.log(`Read chunk of size: ${(data.byteLength / 1024).toFixed(2)}KiB`);
16 |     offset += data.byteLength;
17 |     totalSize += data.byteLength;
18 |   }
19 |   console.log(`Finished, read: ${totalSize}.`);
20 | }
21 | 
22 | const id = process.argv.slice(-1)[0];
23 | 
24 | testIt(id)
25 |   .catch(e => console.error(e))
26 | 


--------------------------------------------------------------------------------
/debug-cli/test-chunk-resume-id.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | async function testIt(file, id) {
10 |   const data = fs.readFileSync(file);
11 |   
12 |   for await (const progress of arweave.transactions.upload(id, data)) {
13 |     fs.writeFileSync(`${progress.transaction.id}.progress.json`, JSON.stringify(progress));
14 |     console.log(`${progress.transaction.id} - ${progress.pctComplete}% - ${progress.uploadedChunks}/${progress.totalChunks} - ${progress.lastResponseStatus} ${progress.lastResponseError}`)
15 |     //await new Promise(res => setTimeout(res, 1000 * 1)); 
16 |   }
17 | 
18 |   return
19 | }
20 | 
21 | const file = process.argv.slice(-2)[0];
22 | const id = process.argv.slice(-1)[0];
23 | 
24 | testIt(file, id)
25 |   .then(x => console.log(x))
26 |   .catch(e => console.error(e))
27 | 


--------------------------------------------------------------------------------
/debug-cli/test-chunk-resume.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | async function testIt(file, resume) {
10 |   const data = fs.readFileSync(file);
11 |   
12 |   for await (const progress of arweave.transactions.upload(resume, data)) {
13 |     fs.writeFileSync(`${progress.transaction.id}.progress.json`, JSON.stringify(progress));
14 |     console.log(`${progress.transaction.id} - ${progress.pctComplete}% - ${progress.uploadedChunks}/${progress.totalChunks}`)
15 |   }
16 | 
17 |   return resume.transaction.id;
18 | }
19 | 
20 | const file = process.argv.slice(-2)[0];
21 | const resume = JSON.parse(fs.readFileSync(process.argv.slice(-1)[0]).toString());
22 | 
23 | testIt(file, resume)
24 |   .then(x => console.log(x))
25 |   .catch(e => console.error(e))
26 | 


--------------------------------------------------------------------------------
/debug-cli/test-chunk-sizing.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | async function testIt(file) {
10 |   const data = fs.readFileSync(file);
11 |   const tx = await arweave.createTransaction({ data }, jwk);
12 |   tx.addTag('Test', 'Yes');
13 |   await arweave.transactions.sign(tx, jwk);
14 | 
15 |   tx.chunks.chunks.forEach((chunk, idx) => {
16 |     const size = chunk.maxByteRange - chunk.minByteRange
17 |     console.log(`Chunk: ${idx} - ${size} - ${(size / 1024).toFixed(3)}, ${tx.chunks.proofs[idx].offset}`);
18 |   })
19 |   console.log(tx.data_root);
20 |   console.log(tx.data_size);
21 |   return tx.id;
22 | }
23 | 
24 | const file = process.argv.slice(-1)[0];
25 | 
26 | testIt(file)
27 |   .then(x => console.log(x))
28 |   .catch(e => console.error(e))
29 | 


--------------------------------------------------------------------------------
/debug-cli/test-chunk-uploader.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | async function testIt(file) {
10 |   const data = fs.readFileSync(file);
11 |   const tx = await arweave.createTransaction({ data }, jwk);
12 |   tx.addTag('Test', 'Yes');
13 |   await arweave.transactions.sign(tx, jwk);
14 | 
15 |   console.log(`uploading tx ${tx.id}`);
16 | 
17 |   for await (const progress of arweave.transactions.upload(tx)) {
18 |     fs.writeFileSync(`${tx.id}.progress.json`, JSON.stringify(progress));
19 |     console.log(`${tx.id} - ${progress.pctComplete}% - ${progress.uploadedChunks}/${progress.totalChunks} - ${progress.lastResponseStatus} - ${progress.lastResponseError}`)
20 |   }
21 | 
22 |   return tx.id;
23 | }
24 | 
25 | const file = process.argv.slice(-1)[0];
26 | 
27 | testIt(file)
28 |   .then(x => console.log(x))
29 |   .catch(e => console.error(e))
30 | 


--------------------------------------------------------------------------------
/debug-cli/test-merkle-gen-time.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const { chunkData, generateLeaves , buildLayers, generateProofs } = require('./node/lib/merkle');
 4 | const fs = require('fs');
 5 | 
 6 | async function testIt(file) {
 7 |   const data = fs.readFileSync(file);
 8 |   
 9 |   const t0 = Date.now()
10 |   const chunks = await chunkData(data);
11 |   const t1 = Date.now()
12 |   const leaves = await generateLeaves(chunks);
13 |   const t2 = Date.now()
14 |   const root = await buildLayers(leaves);
15 |   const t3 = Date.now()
16 |   const proofs = await generateProofs(root);
17 |   const t4 = Date.now()
18 |   
19 |   console.log(`Chunking: ${(t1-t0)/1000}`);
20 |   console.log(`Leaves: ${(t2-t1)/1000}`);
21 |   console.log(`Layers: ${(t3-t2)/1000}`);
22 |   console.log(`Proofs: ${(t4-t3)/1000}`);
23 |   console.log(process.memoryUsage());
24 |   //console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
25 | }
26 | 
27 | const file = process.argv.slice(-1)[0];
28 | 
29 | testIt(file)
30 |   .then(x => console.log(x))
31 |   .catch(e => console.error(e))
32 | 


--------------------------------------------------------------------------------
/debug-cli/test-non-generator-interface.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | 
10 | async function testIt(file, id) {
11 |   const data = fs.readFileSync(file);
12 |   
13 |   let uploader = await arweave.transactions.getUploader(id, data);
14 |   while (!uploader.isComplete) {
15 |     await uploader.uploadChunk();
16 |     console.log(`${uploader.transaction.id} - ${uploader.pctComplete}% - ${uploader.uploadedChunks}/${uploader.totalChunks}`)
17 |   }
18 | 
19 |   return uploader.transaction.id;
20 | }
21 | 
22 | const file = process.argv.slice(-2)[0];
23 | const id = process.argv.slice(-1)[0];
24 | 
25 | testIt(file, id)
26 |   .then(x => console.log(x))
27 |   .catch(e => console.error(e))
28 | 


--------------------------------------------------------------------------------
/debug-cli/test-post-upload.js:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | const Arweave = require('../node');
 4 | const fs = require('fs');
 5 | const arweave = Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' });
 6 | 
 7 | const jwk = JSON.parse(process.env.WALLET_JSON)
 8 | 
 9 | 
10 | async function testIt(file) {
11 |   const data = fs.readFileSync(file);
12 |   const tx = await arweave.createTransaction({ data }, jwk);
13 |   tx.addTag('Test', 'Yes');
14 |   await arweave.transactions.sign(tx, jwk);
15 |   tx.addTag('Foo', 'whut');
16 |   
17 |   const resp = await arweave.transactions.post(tx);
18 |   console.log(resp.status);
19 |   console.log(resp.statusText);
20 |   return tx.id;
21 | }
22 | 
23 | const file = process.argv.slice(-1)[0];
24 | 
25 | testIt(file)
26 |   .then(x => console.log(x))
27 |   .catch(e => console.error(e))
28 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "name": "arweave",
  3 |   "version": "1.15.7",
  4 |   "description": "Arweave JS client library",
  5 |   "main": "./node/index.js",
  6 |   "react-native": "./node/index.js",
  7 |   "browser": "./web/index.js",
  8 |   "files": [
  9 |     "node",
 10 |     "web",
 11 |     "bundles"
 12 |   ],
 13 |   "scripts": {
 14 |     "compile:node": "tsc --declaration -project tsconfig.node.json && resolve-tspaths -p tsconfig.node.json",
 15 |     "compile:web": "tsc --declaration -project tsconfig.web.json && resolve-tspaths -p tsconfig.web.json",
 16 |     "bundle:web": "webpack --config-name web",
 17 |     "bundle:web-prod": "webpack --config-name web-prod",
 18 |     "profile:web": "webpack --config-name web --json > ./web.profile.json && webpack-bundle-analyzer ./web.profile.json",
 19 |     "package": "mkdirp node web && ncp dist/node/common/ dist/node/node/ && ncp dist/node/node/ node && ncp dist/web/common/ dist/web/web/ && ncp dist/web/web/ web && npm run clean:dist",
 20 |     "build": "npm run clean && npm run compile:node && npm run compile:web && npm run package && npm run bundle:web && npm run bundle:web-prod",
 21 |     "clean:dist": "rimraf dist",
 22 |     "clean:package": "rimraf node web",
 23 |     "clean:bundle": "rimraf bundles",
 24 |     "clean": "npm run clean:dist && npm run clean:package && npm  run clean:bundle",
 25 |     "prepublishOnly": "npm run clean && npm run build",
 26 |     "test": "mocha test/*.ts && echo \"NOW RUN => 'npm run test:web' <= \" ",
 27 |     "test:web": "npm run bundle:web && webpack --config-name web-tests && opener test/web/web.html",
 28 |     "prettier:check": "prettier --check \"src/**/*.ts\" \"test/**/*.ts\"",
 29 |     "prettier:write": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
 30 |     "version": "npm run prettier:write && git add -A src && git add -A test",
 31 |     "postversion": "git push && git push --tags"
 32 |   },
 33 |   "mocha": {
 34 |     "extension": [
 35 |       "ts"
 36 |     ],
 37 |     "node-option": [
 38 |       "require=ts-node/register",
 39 |       "require=tsconfig-paths/register",
 40 |       "experimental-fetch",
 41 |       "no-warnings"
 42 |     ]
 43 |   },
 44 |   "repository": {
 45 |     "type": "git",
 46 |     "url": "git+https://github.com/ArweaveTeam/arweave-js.git"
 47 |   },
 48 |   "keywords": [
 49 |     "arweave",
 50 |     "js",
 51 |     "blockchain",
 52 |     "crypto",
 53 |     "data",
 54 |     "permanence",
 55 |     "http"
 56 |   ],
 57 |   "author": "Arweave Team <team@arweave.org>",
 58 |   "contributors": [
 59 |     "Kyle Beckles <kyle@arweave.org>",
 60 |     "Aidan O'Kelly <aidan@arweave.org>",
 61 |     "Ros McMahon <ros@arweave.org>",
 62 |     "Cedrik Boudreau <cedrik@arweave.org>"
 63 |   ],
 64 |   "license": "MIT",
 65 |   "bugs": {
 66 |     "url": "https://github.com/ArweaveTeam/arweave-js/issues"
 67 |   },
 68 |   "homepage": "https://github.com/ArweaveTeam/arweave-js#readme",
 69 |   "devDependencies": {
 70 |     "@types/base64-js": "^1.3.0",
 71 |     "@types/chai": "^4.3.1",
 72 |     "@types/mocha": "^10.0.1",
 73 |     "@types/node": "^20.16.5",
 74 |     "buffer": "^6.0.3",
 75 |     "chai": "^4.3.6",
 76 |     "crypto-browserify": "^3.12.0",
 77 |     "mkdirp": "^1.0.4",
 78 |     "mocha": "^10.0.0",
 79 |     "ncp": "^2.0.0",
 80 |     "opener": "^1.5.2",
 81 |     "prettier": "^2.8.1",
 82 |     "process": "^0.11.10",
 83 |     "resolve-tspaths": "^0.6.0",
 84 |     "rimraf": "^3.0.2",
 85 |     "stream-browserify": "^3.0.0",
 86 |     "terser-webpack-plugin": "^5.3.3",
 87 |     "ts-loader": "^9.3.0",
 88 |     "ts-node": "^10.8.0",
 89 |     "tsconfig-paths": "^4.0.0",
 90 |     "typescript": "^5.6.2",
 91 |     "webpack": "^5.72.1",
 92 |     "webpack-bundle-analyzer": "^4.5.0",
 93 |     "webpack-cli": "^4.9.2"
 94 |   },
 95 |   "targets": {
 96 |     "chrome": "70",
 97 |     "node": "18"
 98 |   },
 99 |   "engines": {
100 |     "node": ">=18"
101 |   },
102 |   "dependencies": {
103 |     "arconnect": "^0.4.2",
104 |     "asn1.js": "^5.4.1",
105 |     "base64-js": "^1.5.1",
106 |     "bignumber.js": "^9.0.2"
107 |   }
108 | }
109 | 


--------------------------------------------------------------------------------
/src/common/ar.ts:
--------------------------------------------------------------------------------
 1 | import { BigNumber } from "bignumber.js";
 2 | 
 3 | export default class Ar {
 4 |   /**
 5 |    * Method to take a string value and return a bignumber object.
 6 |    *
 7 |    * @protected
 8 |    * @type {Function}
 9 |    * @memberof Arweave
10 |    */
11 |   protected readonly BigNum: Function;
12 | 
13 |   constructor() {
14 |     // Configure and assign the constructor function for the bignumber library.
15 |     this.BigNum = (value: string, decimals: number): BigNumber => {
16 |       let instance = BigNumber.clone({ DECIMAL_PLACES: decimals });
17 |       return new instance(value);
18 |     };
19 |   }
20 | 
21 |   public winstonToAr(
22 |     winstonString: string,
23 |     { formatted = false, decimals = 12, trim = true } = {}
24 |   ) {
25 |     let number = this.stringToBigNum(winstonString, decimals).shiftedBy(-12);
26 | 
27 |     return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
28 |   }
29 | 
30 |   public arToWinston(arString: string, { formatted = false } = {}) {
31 |     let number = this.stringToBigNum(arString).shiftedBy(12);
32 | 
33 |     return formatted ? number.toFormat() : number.toFixed(0);
34 |   }
35 | 
36 |   public compare(winstonStringA: string, winstonStringB: string): number {
37 |     let a = this.stringToBigNum(winstonStringA);
38 |     let b = this.stringToBigNum(winstonStringB);
39 | 
40 |     return a.comparedTo(b);
41 |   }
42 | 
43 |   public isEqual(winstonStringA: string, winstonStringB: string): boolean {
44 |     return this.compare(winstonStringA, winstonStringB) === 0;
45 |   }
46 | 
47 |   public isLessThan(winstonStringA: string, winstonStringB: string): boolean {
48 |     let a = this.stringToBigNum(winstonStringA);
49 |     let b = this.stringToBigNum(winstonStringB);
50 | 
51 |     return a.isLessThan(b);
52 |   }
53 | 
54 |   public isGreaterThan(
55 |     winstonStringA: string,
56 |     winstonStringB: string
57 |   ): boolean {
58 |     let a = this.stringToBigNum(winstonStringA);
59 |     let b = this.stringToBigNum(winstonStringB);
60 | 
61 |     return a.isGreaterThan(b);
62 |   }
63 | 
64 |   public add(winstonStringA: string, winstonStringB: string): string {
65 |     let a = this.stringToBigNum(winstonStringA);
66 |     let b = this.stringToBigNum(winstonStringB);
67 | 
68 |     return a.plus(winstonStringB).toFixed(0);
69 |   }
70 | 
71 |   public sub(winstonStringA: string, winstonStringB: string): string {
72 |     let a = this.stringToBigNum(winstonStringA);
73 |     let b = this.stringToBigNum(winstonStringB);
74 |     return a.minus(winstonStringB).toFixed(0);
75 |   }
76 | 
77 |   private stringToBigNum(
78 |     stringValue: string,
79 |     decimalPlaces: number = 12
80 |   ): BigNumber {
81 |     return this.BigNum(stringValue, decimalPlaces);
82 |   }
83 | }
84 | 


--------------------------------------------------------------------------------
/src/common/blocks.ts:
--------------------------------------------------------------------------------
 1 | import Api from "./lib/api";
 2 | import ArweaveError, { ArweaveErrorType } from "./lib/error";
 3 | import { Tag } from "./lib/transaction";
 4 | import "arconnect";
 5 | import Network from "./network";
 6 | 
 7 | export interface BlockData {
 8 |   nonce: string;
 9 |   previous_block: string;
10 |   timestamp: number;
11 |   last_retarget: number;
12 |   diff: string;
13 |   height: number;
14 |   hash: string;
15 |   indep_hash: string;
16 |   txs: string[];
17 |   tx_root: string;
18 |   wallet_list: string;
19 |   reward_addr: string;
20 |   tags: Tag[];
21 |   reward_pool: number;
22 |   weave_size: number;
23 |   block_size: number;
24 |   cumulative_diff: string;
25 |   hash_list_merkle: string;
26 | }
27 | 
28 | export default class Blocks {
29 |   private static readonly HASH_ENDPOINT = "block/hash/";
30 |   private static readonly HEIGHT_ENDPOINT = "block/height/";
31 | 
32 |   constructor(private readonly api: Api, private readonly network: Network) {}
33 | 
34 |   /**
35 |    * Gets a block by its "indep_hash"
36 |    */
37 |   public async get(indepHash: string): Promise<BlockData> {
38 |     const response = await this.api.get<BlockData>(
39 |       `${Blocks.HASH_ENDPOINT}${indepHash}`
40 |     );
41 |     if (response.status === 200) {
42 |       return response.data;
43 |     } else {
44 |       if (response.status === 404) {
45 |         throw new ArweaveError(ArweaveErrorType.BLOCK_NOT_FOUND);
46 |       } else {
47 |         throw new Error(`Error while loading block data: ${response}`);
48 |       }
49 |     }
50 |   }
51 | 
52 |   /**
53 |    * Gets a block by its "height"
54 |    */
55 |   public async getByHeight(height: number): Promise<BlockData> {
56 |     const response = await this.api.get<BlockData>(
57 |       `${Blocks.HEIGHT_ENDPOINT}${height}`
58 |     );
59 |     if (response.status === 200) {
60 |       return response.data;
61 |     } else {
62 |       if (response.status === 404) {
63 |         throw new ArweaveError(ArweaveErrorType.BLOCK_NOT_FOUND);
64 |       } else {
65 |         throw new Error(`Error while loading block data: ${response}`);
66 |       }
67 |     }
68 |   }
69 | 
70 |   /**
71 |    * Gets current block data (ie. block with indep_hash = Network.getInfo().current)
72 |    */
73 |   public async getCurrent(): Promise<BlockData> {
74 |     const { current } = await this.network.getInfo();
75 |     return await this.get(current);
76 |   }
77 | }
78 | 


--------------------------------------------------------------------------------
/src/common/chunks.ts:
--------------------------------------------------------------------------------
 1 | import Api from "./lib/api";
 2 | import { getError } from "./lib/error";
 3 | import * as ArweaveUtils from "./lib/utils";
 4 | 
 5 | export interface TransactionOffsetResponse {
 6 |   size: string;
 7 |   offset: string;
 8 | }
 9 | 
10 | export interface TransactionChunkResponse {
11 |   chunk: string;
12 |   data_path: string;
13 |   tx_path: string;
14 | }
15 | 
16 | export default class Chunks {
17 |   constructor(private api: Api) {}
18 | 
19 |   async getTransactionOffset(id: string): Promise<TransactionOffsetResponse> {
20 |     const resp = await this.api.get(`tx/${id}/offset`);
21 |     if (resp.status === 200) {
22 |       return resp.data;
23 |     }
24 |     throw new Error(`Unable to get transaction offset: ${getError(resp)}`);
25 |   }
26 | 
27 |   async getChunk(
28 |     offset: string | number | BigInt
29 |   ): Promise<TransactionChunkResponse> {
30 |     const resp = await this.api.get(`chunk/${offset}`);
31 |     if (resp.status === 200) {
32 |       return resp.data;
33 |     }
34 |     throw new Error(`Unable to get chunk: ${getError(resp)}`);
35 |   }
36 | 
37 |   async getChunkData(offset: string | number | BigInt): Promise<Uint8Array> {
38 |     const chunk = await this.getChunk(offset);
39 |     const buf = ArweaveUtils.b64UrlToBuffer(chunk.chunk);
40 |     return buf;
41 |   }
42 | 
43 |   firstChunkOffset(offsetResponse: TransactionOffsetResponse): number {
44 |     return parseInt(offsetResponse.offset) - parseInt(offsetResponse.size) + 1;
45 |   }
46 | 
47 |   async downloadChunkedData(id: string): Promise<Uint8Array> {
48 |     const offsetResponse = await this.getTransactionOffset(id);
49 |     const size = parseInt(offsetResponse.size);
50 |     const endOffset = parseInt(offsetResponse.offset);
51 |     const startOffset = endOffset - size + 1;
52 | 
53 |     const data = new Uint8Array(size);
54 |     let byte = 0;
55 | 
56 |     while (byte < size) {
57 |       if (this.api.config.logging) {
58 |         console.log(`[chunk] ${byte}/${size}`);
59 |       }
60 | 
61 |       let chunkData;
62 |       try {
63 |         chunkData = await this.getChunkData(startOffset + byte);
64 |       } catch (error) {
65 |         console.error(
66 |           `[chunk] Failed to fetch chunk at offset ${startOffset + byte}`
67 |         );
68 |         console.error(
69 |           `[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gateway/node`
70 |         );
71 |       }
72 | 
73 |       if (chunkData) {
74 |         data.set(chunkData, byte);
75 |         byte += chunkData.length;
76 |       } else {
77 |         throw new Error(`Couldn't complete data download at ${byte}/${size}`);
78 |       }
79 |     }
80 | 
81 |     return data;
82 |   }
83 | }
84 | 


--------------------------------------------------------------------------------
/src/common/common.ts:
--------------------------------------------------------------------------------
  1 | import Ar from "./ar";
  2 | import Api, { ApiConfig } from "./lib/api";
  3 | import CryptoInterface from "./lib/crypto/crypto-interface";
  4 | import CryptoDriver from "@crypto/node-driver";
  5 | import Network from "./network";
  6 | import Transactions from "./transactions";
  7 | import Wallets from "./wallets";
  8 | import Transaction, { TransactionInterface, Tag } from "./lib/transaction";
  9 | import { JWKInterface } from "./lib/wallet";
 10 | import * as ArweaveUtils from "./lib/utils";
 11 | import Silo from "./silo";
 12 | import Chunks from "./chunks";
 13 | import Blocks from "./blocks";
 14 | 
 15 | export interface Config {
 16 |   api: ApiConfig;
 17 |   crypto: CryptoInterface;
 18 | }
 19 | 
 20 | export interface CreateTransactionInterface {
 21 |   format: number;
 22 |   last_tx: string;
 23 |   owner: string;
 24 |   tags: Tag[];
 25 |   target: string;
 26 |   quantity: string;
 27 |   data: string | Uint8Array | ArrayBuffer;
 28 |   data_size: string;
 29 |   data_root: string;
 30 |   reward: string;
 31 | }
 32 | 
 33 | export default class Arweave {
 34 |   public api: Api;
 35 | 
 36 |   public wallets: Wallets;
 37 | 
 38 |   public transactions: Transactions;
 39 | 
 40 |   public network: Network;
 41 | 
 42 |   public blocks: Blocks;
 43 | 
 44 |   public ar: Ar;
 45 | 
 46 |   public silo: Silo;
 47 | 
 48 |   public chunks: Chunks;
 49 | 
 50 |   public static init: (apiConfig: ApiConfig) => Arweave;
 51 | 
 52 |   public static crypto: CryptoInterface = new CryptoDriver();
 53 | 
 54 |   public static utils = ArweaveUtils;
 55 | 
 56 |   constructor(apiConfig: ApiConfig) {
 57 |     this.api = new Api(apiConfig);
 58 |     this.wallets = new Wallets(this.api, Arweave.crypto);
 59 |     this.chunks = new Chunks(this.api);
 60 |     this.transactions = new Transactions(this.api, Arweave.crypto, this.chunks);
 61 |     this.silo = new Silo(this.api, this.crypto, this.transactions);
 62 |     this.network = new Network(this.api);
 63 |     this.blocks = new Blocks(this.api, this.network);
 64 |     this.ar = new Ar();
 65 |   }
 66 | 
 67 |   /** @deprecated */
 68 |   public get crypto(): CryptoInterface {
 69 |     return Arweave.crypto;
 70 |   }
 71 | 
 72 |   /** @deprecated */
 73 |   public get utils(): typeof ArweaveUtils {
 74 |     return Arweave.utils;
 75 |   }
 76 | 
 77 |   public getConfig(): Config {
 78 |     return {
 79 |       api: this.api.getConfig(),
 80 |       crypto: null!,
 81 |     };
 82 |   }
 83 | 
 84 |   public async createTransaction(
 85 |     attributes: Partial<CreateTransactionInterface>,
 86 |     jwk?: JWKInterface | "use_wallet"
 87 |   ): Promise<Transaction> {
 88 |     const transaction: Partial<CreateTransactionInterface> = {};
 89 | 
 90 |     Object.assign(transaction, attributes);
 91 | 
 92 |     if (!attributes.data && !(attributes.target && attributes.quantity)) {
 93 |       throw new Error(
 94 |         `A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.`
 95 |       );
 96 |     }
 97 | 
 98 |     if (attributes.owner == undefined) {
 99 |       if (jwk && jwk !== "use_wallet") {
100 |         transaction.owner = jwk.n;
101 |       }
102 |     }
103 | 
104 |     if (attributes.last_tx == undefined) {
105 |       transaction.last_tx = await this.transactions.getTransactionAnchor();
106 |     }
107 | 
108 |     if (typeof attributes.data === "string") {
109 |       attributes.data = ArweaveUtils.stringToBuffer(attributes.data);
110 |     }
111 | 
112 |     if (attributes.data instanceof ArrayBuffer) {
113 |       attributes.data = new Uint8Array(attributes.data);
114 |     }
115 | 
116 |     if (attributes.data && !(attributes.data instanceof Uint8Array)) {
117 |       throw new Error(
118 |         "Expected data to be a string, Uint8Array or ArrayBuffer"
119 |       );
120 |     }
121 | 
122 |     if (attributes.reward == undefined) {
123 |       const length = attributes.data ? attributes.data.byteLength : 0;
124 |       transaction.reward = await this.transactions.getPrice(
125 |         length,
126 |         transaction.target
127 |       );
128 |     }
129 | 
130 |     // here we should call prepare chunk
131 |     transaction.data_root = "";
132 |     transaction.data_size = attributes.data
133 |       ? attributes.data.byteLength.toString()
134 |       : "0";
135 |     transaction.data = attributes.data || new Uint8Array(0);
136 | 
137 |     const createdTransaction = new Transaction(
138 |       transaction as TransactionInterface
139 |     );
140 |     await createdTransaction.getSignatureData();
141 |     return createdTransaction;
142 |   }
143 | 
144 |   public async createSiloTransaction(
145 |     attributes: Partial<CreateTransactionInterface>,
146 |     jwk: JWKInterface,
147 |     siloUri: string
148 |   ): Promise<Transaction> {
149 |     const transaction: Partial<CreateTransactionInterface> = {};
150 | 
151 |     Object.assign(transaction, attributes);
152 | 
153 |     if (!attributes.data) {
154 |       throw new Error(`Silo transactions must have a 'data' value`);
155 |     }
156 | 
157 |     if (!siloUri) {
158 |       throw new Error(`No Silo URI specified.`);
159 |     }
160 | 
161 |     if (attributes.target || attributes.quantity) {
162 |       throw new Error(
163 |         `Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.`
164 |       );
165 |     }
166 | 
167 |     if (attributes.owner == undefined) {
168 |       if (!jwk || !jwk.n) {
169 |         throw new Error(
170 |           `A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.`
171 |         );
172 |       }
173 |       transaction.owner = jwk.n;
174 |     }
175 | 
176 |     if (attributes.last_tx == undefined) {
177 |       transaction.last_tx = await this.transactions.getTransactionAnchor();
178 |     }
179 | 
180 |     const siloResource = await this.silo.parseUri(siloUri);
181 | 
182 |     if (typeof attributes.data == "string") {
183 |       const encrypted = await this.crypto.encrypt(
184 |         ArweaveUtils.stringToBuffer(attributes.data),
185 |         siloResource.getEncryptionKey()
186 |       );
187 |       transaction.reward = await this.transactions.getPrice(
188 |         encrypted.byteLength
189 |       );
190 |       transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
191 |     }
192 | 
193 |     if (attributes.data instanceof Uint8Array) {
194 |       const encrypted = await this.crypto.encrypt(
195 |         attributes.data,
196 |         siloResource.getEncryptionKey()
197 |       );
198 |       transaction.reward = await this.transactions.getPrice(
199 |         encrypted.byteLength
200 |       );
201 |       transaction.data = ArweaveUtils.bufferTob64Url(encrypted);
202 |     }
203 | 
204 |     const siloTransaction = new Transaction(
205 |       transaction as TransactionInterface
206 |     );
207 | 
208 |     siloTransaction.addTag("Silo-Name", siloResource.getAccessKey());
209 |     siloTransaction.addTag("Silo-Version", `0.1.0`);
210 | 
211 |     return siloTransaction;
212 |   }
213 | 
214 |   public arql(query: object): Promise<string[]> {
215 |     return this.api
216 |       .post("/arql", query)
217 |       .then((response) => response.data || []);
218 |   }
219 | }
220 | 


--------------------------------------------------------------------------------
/src/common/lib/api.ts:
--------------------------------------------------------------------------------
  1 | export interface ApiConfig {
  2 |   host?: string;
  3 |   protocol?: string;
  4 |   port?: string | number;
  5 |   timeout?: number;
  6 |   logging?: boolean;
  7 |   logger?: Function;
  8 |   network?: string;
  9 | }
 10 | 
 11 | export interface ResponseWithData<T = any> extends Response {
 12 |   data: T;
 13 | }
 14 | 
 15 | export interface RequestInitWithAxios extends RequestInit {
 16 |   responseType?: "arraybuffer" | "json" | "text" | "webstream";
 17 | }
 18 | 
 19 | export default class Api {
 20 |   public readonly METHOD_GET = "GET";
 21 |   public readonly METHOD_POST = "POST";
 22 | 
 23 |   public config!: ApiConfig;
 24 | 
 25 |   constructor(config: ApiConfig) {
 26 |     this.applyConfig(config);
 27 |   }
 28 | 
 29 |   public applyConfig(config: ApiConfig) {
 30 |     this.config = this.mergeDefaults(config);
 31 |   }
 32 | 
 33 |   public getConfig() {
 34 |     return this.config;
 35 |   }
 36 | 
 37 |   private mergeDefaults(config: ApiConfig): ApiConfig {
 38 |     const protocol = config.protocol || "http";
 39 |     const port = config.port || (protocol === "https" ? 443 : 80);
 40 | 
 41 |     return {
 42 |       host: config.host || "127.0.0.1",
 43 |       protocol,
 44 |       port,
 45 |       timeout: config.timeout || 20000,
 46 |       logging: config.logging || false,
 47 |       logger: config.logger || console.log,
 48 |       network: config.network,
 49 |     };
 50 |   }
 51 | 
 52 |   public async get<T = any>(
 53 |     endpoint: string,
 54 |     config?: RequestInitWithAxios
 55 |   ): Promise<ResponseWithData<T>> {
 56 |     return await this.request(endpoint, { ...config, method: this.METHOD_GET });
 57 |   }
 58 | 
 59 |   public async post<T = any>(
 60 |     endpoint: string,
 61 |     body: any,
 62 |     config?: RequestInitWithAxios
 63 |   ): Promise<ResponseWithData<T>> {
 64 |     const headers = new Headers(config?.headers || {});
 65 | 
 66 |     if (!headers.get("content-type")?.includes("application/json")) {
 67 |       headers.append("content-type", "application/json");
 68 |     }
 69 |     headers.append("accept", "application/json, text/plain, */*");
 70 | 
 71 |     return await this.request(endpoint, {
 72 |       ...config,
 73 |       method: this.METHOD_POST,
 74 |       body: typeof body !== "string" ? JSON.stringify(body) : body,
 75 |       headers,
 76 |     });
 77 |   }
 78 | 
 79 |   public async request<T = unknown>(
 80 |     endpoint: string,
 81 |     init?: RequestInitWithAxios
 82 |   ): Promise<ResponseWithData<T>> {
 83 |     const headers = new Headers(init?.headers || {});
 84 |     const baseURL = `${this.config.protocol}://${this.config.host}:${this.config.port}`;
 85 | 
 86 |     /* responseType is purely for backwards compatibility with external apps */
 87 |     const responseType = init?.responseType;
 88 |     delete init?.responseType;
 89 | 
 90 |     if (endpoint.startsWith("/")) {
 91 |       endpoint = endpoint.slice(1);
 92 |     }
 93 | 
 94 |     if (this.config.network) {
 95 |       headers.append("x-network", this.config.network);
 96 |     }
 97 | 
 98 |     if (this.config.logging) {
 99 |       this.config.logger!(`Requesting: ${baseURL}/${endpoint}`);
100 |     }
101 | 
102 |     let res = await fetch(`${baseURL}/${endpoint}`, {
103 |       ...(init || {}),
104 |       headers,
105 |     });
106 | 
107 |     if (this.config.logging) {
108 |       this.config.logger!(`Response:   ${res.url} - ${res.status}`);
109 |     }
110 | 
111 |     const contentType = res.headers.get("content-type");
112 |     const charset = contentType?.match(
113 |       /charset=([^()<>@,;:\"/[\]?.=\s]*)/i
114 |     )?.[1];
115 |     const response: Partial<ResponseWithData<T>> = res;
116 | 
117 |     const decodeText = async () => {
118 |       if (charset) {
119 |         try {
120 |           response.data = new TextDecoder(charset).decode(
121 |             await res.arrayBuffer()
122 |           ) as T;
123 |         } catch (e) {
124 |           response.data = (await res.text()) as T;
125 |         }
126 |       } else {
127 |         response.data = (await res.text()) as T;
128 |       }
129 |     };
130 | 
131 |     if (responseType === "arraybuffer") {
132 |       response.data = (await res.arrayBuffer()) as T;
133 |     } else if (responseType === "text") {
134 |       await decodeText();
135 |     } else if (responseType === "webstream") {
136 |       response.data = addAsyncIterator(
137 |         res.body as AsyncIterableReadableStream
138 |       ) as T;
139 |     } else {
140 |       /** axios defaults to JSON, and then text, we mimic the behaviour */
141 |       try {
142 |         let test = await res.clone().json();
143 |         if (typeof test !== "object") {
144 |           await decodeText();
145 |         } else {
146 |           response.data = (await res.json()) as T;
147 |         }
148 |         test = null;
149 |       } catch {
150 |         await decodeText();
151 |       }
152 |     }
153 | 
154 |     return response as ResponseWithData<T>;
155 |   }
156 | }
157 | 
158 | /**
159 |  * *** To be removed when browsers catch up with the whatwg standard. ***
160 |  * [Symbol.AsyncIterator] is needed to use `for-await` on the returned ReadableStream (web stream).
161 |  * Feature is available in nodejs, and should be available in browsers eventually.
162 |  */
163 | type AsyncIterableReadableStream = ReadableStream<Uint8Array> &
164 |   AsyncIterable<Uint8Array>;
165 | // | ReadableStream<Uint8Array>
166 | 
167 | const addAsyncIterator = (
168 |   body: ReadableStream<Uint8Array>
169 | ): AsyncIterableReadableStream => {
170 |   const bodyWithIter = body as ReadableStream<Uint8Array> &
171 |     AsyncIterable<Uint8Array>;
172 |   if (typeof bodyWithIter[Symbol.asyncIterator] === "undefined") {
173 |     bodyWithIter[Symbol.asyncIterator] = webIiterator<Uint8Array>(body);
174 |   }
175 |   return bodyWithIter;
176 | };
177 | 
178 | const webIiterator = function <T>(stream: ReadableStream<T>) {
179 |   return async function* iteratorGenerator(): AsyncIterableIterator<T> {
180 |     const reader = stream.getReader(); //lock
181 |     try {
182 |       while (true) {
183 |         const { done, value } = await reader.read();
184 |         if (done) return;
185 |         yield value as T;
186 |       }
187 |     } finally {
188 |       reader.releaseLock(); //unlock
189 |     }
190 |   };
191 | };
192 | 


--------------------------------------------------------------------------------
/src/common/lib/crypto/crypto-interface.ts:
--------------------------------------------------------------------------------
 1 | import { JWKInterface } from "../wallet";
 2 | 
 3 | export interface SignatureOptions {
 4 |   saltLength?: number;
 5 | }
 6 | 
 7 | export default interface CryptoInterface {
 8 |   generateJWK(): Promise<JWKInterface>;
 9 | 
10 |   sign(
11 |     jwk: JWKInterface,
12 |     data: Uint8Array,
13 |     options?: SignatureOptions
14 |   ): Promise<Uint8Array>;
15 | 
16 |   verify(
17 |     publicModulus: string,
18 |     data: Uint8Array,
19 |     signature: Uint8Array
20 |   ): Promise<boolean>;
21 | 
22 |   encrypt(
23 |     data: Uint8Array,
24 |     key: string | Uint8Array,
25 |     salt?: string
26 |   ): Promise<Uint8Array>;
27 | 
28 |   decrypt(
29 |     encrypted: Uint8Array,
30 |     key: string | Uint8Array,
31 |     salt?: string
32 |   ): Promise<Uint8Array>;
33 | 
34 |   hash(data: Uint8Array, algorithm?: string): Promise<Uint8Array>;
35 | }
36 | 


--------------------------------------------------------------------------------
/src/common/lib/crypto/node-driver.ts:
--------------------------------------------------------------------------------
  1 | import { JWKInterface } from "../wallet";
  2 | import CryptoInterface, { SignatureOptions } from "./crypto-interface";
  3 | import { pemTojwk, jwkTopem } from "./pem";
  4 | import * as crypto from "crypto";
  5 | 
  6 | export default class NodeCryptoDriver implements CryptoInterface {
  7 |   public readonly keyLength = 4096;
  8 |   public readonly publicExponent = 0x10001;
  9 |   public readonly hashAlgorithm = "sha256";
 10 |   public readonly encryptionAlgorithm = "aes-256-cbc";
 11 | 
 12 |   public generateJWK(): Promise<JWKInterface> {
 13 |     if (typeof crypto.generateKeyPair != "function") {
 14 |       throw new Error(
 15 |         "Keypair generation not supported in this version of Node, only supported in versions 10+"
 16 |       );
 17 |     }
 18 | 
 19 |     return new Promise((resolve, reject) => {
 20 |       crypto.generateKeyPair(
 21 |         "rsa",
 22 |         <crypto.RSAKeyPairOptions<"pem", "pem">>{
 23 |           modulusLength: this.keyLength,
 24 |           publicExponent: this.publicExponent,
 25 |           privateKeyEncoding: {
 26 |             type: "pkcs1",
 27 |             format: "pem",
 28 |           },
 29 |           publicKeyEncoding: { type: "pkcs1", format: "pem" },
 30 |         },
 31 |         (err: any, publicKey: string, privateKey: string) => {
 32 |           if (err) {
 33 |             reject(err);
 34 |           }
 35 |           resolve(this.pemToJWK(privateKey));
 36 |         }
 37 |       );
 38 |     });
 39 |   }
 40 | 
 41 |   public sign(
 42 |     jwk: object,
 43 |     data: Uint8Array,
 44 |     { saltLength }: SignatureOptions = {}
 45 |   ): Promise<Uint8Array> {
 46 |     return new Promise((resolve, reject) => {
 47 |       resolve(
 48 |         crypto
 49 |           .createSign(this.hashAlgorithm)
 50 |           .update(data)
 51 |           .sign({
 52 |             key: this.jwkToPem(jwk),
 53 |             padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
 54 |             saltLength,
 55 |           })
 56 |       );
 57 |     });
 58 |   }
 59 | 
 60 |   public verify(
 61 |     publicModulus: string,
 62 |     data: Uint8Array,
 63 |     signature: Uint8Array
 64 |   ): Promise<boolean> {
 65 |     return new Promise((resolve, reject) => {
 66 |       const publicJwk = {
 67 |         kty: "RSA",
 68 |         e: "AQAB",
 69 |         n: publicModulus,
 70 |       };
 71 | 
 72 |       const pem = this.jwkToPem(publicJwk); //?
 73 |       const keyObject = crypto.createPublicKey({
 74 |         key: pem,
 75 |         format: "pem",
 76 |       });
 77 | 
 78 |       const verify = crypto.createVerify(this.hashAlgorithm);
 79 |       verify.update(data);
 80 |       const verifyResult = verify.verify(
 81 |         {
 82 |           key: keyObject,
 83 |           padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
 84 |         },
 85 |         signature
 86 |       );
 87 | 
 88 |       if (!verifyResult) {
 89 |         const details = {
 90 |           asymmetricKeyType: keyObject.asymmetricKeyType,
 91 |           modulusLength: keyObject.asymmetricKeyDetails?.modulusLength,
 92 |         };
 93 |         console.warn(
 94 |           "Transaction Verification Failed! \n" +
 95 |             `Details: ${JSON.stringify(details, null, 2)} \n` +
 96 |             "N.B. ArweaveJS is only guaranteed to verify txs created using ArweaveJS."
 97 |         );
 98 |       }
 99 | 
100 |       resolve(verifyResult);
101 |     });
102 |   }
103 | 
104 |   public hash(
105 |     data: Uint8Array,
106 |     algorithm: string = "SHA-256"
107 |   ): Promise<Uint8Array> {
108 |     if (typeof data === "string") {
109 |       throw new TypeError("Data must be a Uint8Array");
110 |     }
111 |     return new Promise((resolve, reject) => {
112 |       resolve(
113 |         crypto
114 |           .createHash(this.parseHashAlgorithm(algorithm))
115 |           .update(data)
116 |           .digest()
117 |       );
118 |     });
119 |   }
120 | 
121 |   /**
122 |    * If a key is passed as a buffer it *must* be exactly 32 bytes.
123 |    * If a key is passed as a string then any length may be used.
124 |    *
125 |    * @param {Buffer} data
126 |    * @param {(string | Buffer)} key
127 |    * @returns {Promise<Uint8Array>}
128 |    */
129 |   public async encrypt(
130 |     data: Buffer,
131 |     key: string | Buffer,
132 |     salt?: string
133 |   ): Promise<Uint8Array> {
134 |     // create a random string for deriving the key
135 |     // const salt = crypto.randomBytes(16);
136 |     // console.log(salt);
137 | 
138 |     // As we're using CBC with a randomised IV per cypher we don't really need
139 |     // an additional random salt per passphrase.
140 |     const derivedKey = crypto.pbkdf2Sync(
141 |       key,
142 |       (salt = salt ? salt : "salt"),
143 |       100000,
144 |       32,
145 |       this.hashAlgorithm
146 |     );
147 | 
148 |     const iv = crypto.randomBytes(16);
149 | 
150 |     const cipher = crypto.createCipheriv(
151 |       this.encryptionAlgorithm,
152 |       derivedKey,
153 |       iv
154 |     );
155 | 
156 |     const encrypted = Buffer.concat([iv, cipher.update(data), cipher.final()]);
157 | 
158 |     return encrypted;
159 |   }
160 | 
161 |   /**
162 |    * If a key is passed as a buffer it *must* be exactly 32 bytes.
163 |    * If a key is passed as a string then any length may be used.
164 |    *
165 |    * @param {Buffer} encrypted
166 |    * @param {(string | Buffer)} key
167 |    * @returns {Promise<Uint8Array>}
168 |    */
169 |   public async decrypt(
170 |     encrypted: Buffer,
171 |     key: string | Buffer,
172 |     salt?: string
173 |   ): Promise<Uint8Array> {
174 |     try {
175 |       // create a random string for deriving the key
176 |       // const salt = crypto.randomBytes(16).toString('hex');
177 | 
178 |       // As we're using CBC with a randomised IV per cypher we don't really need
179 |       // an additional random salt per passphrase.
180 |       const derivedKey = crypto.pbkdf2Sync(
181 |         key,
182 |         (salt = salt ? salt : "salt"),
183 |         100000,
184 |         32,
185 |         this.hashAlgorithm
186 |       );
187 | 
188 |       const iv = encrypted.slice(0, 16);
189 | 
190 |       const data = encrypted.slice(16);
191 | 
192 |       const decipher = crypto.createDecipheriv(
193 |         this.encryptionAlgorithm,
194 |         derivedKey,
195 |         iv
196 |       );
197 | 
198 |       const decrypted = Buffer.concat([
199 |         decipher.update(data),
200 |         decipher.final(),
201 |       ]);
202 | 
203 |       return decrypted;
204 |     } catch (error) {
205 |       throw new Error("Failed to decrypt");
206 |     }
207 |   }
208 | 
209 |   public jwkToPem(jwk: object): string {
210 |     return jwkTopem(jwk);
211 |   }
212 | 
213 |   private pemToJWK(pem: string): JWKInterface {
214 |     let jwk = pemTojwk(pem);
215 |     return jwk;
216 |   }
217 | 
218 |   private parseHashAlgorithm(algorithm: string): string {
219 |     switch (algorithm) {
220 |       case "SHA-256":
221 |         return "sha256";
222 |       case "SHA-384":
223 |         return "sha384";
224 |       default:
225 |         throw new Error(`Algorithm not supported: ${algorithm}`);
226 |     }
227 |   }
228 | }
229 | 


--------------------------------------------------------------------------------
/src/common/lib/crypto/pem.ts:
--------------------------------------------------------------------------------
  1 | // @ts-ignore
  2 | import * as asn from "asn1.js";
  3 | 
  4 | function urlize(base64: string): string {
  5 |   return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  6 | }
  7 | 
  8 | function hex2b64url(str: string): string {
  9 |   return urlize(Buffer.from(str, "hex").toString("base64"));
 10 | }
 11 | 
 12 | var RSAPublicKey = asn.define("RSAPublicKey", function (this: any) {
 13 |   this.seq().obj(this.key("n").int(), this.key("e").int());
 14 | });
 15 | 
 16 | var AlgorithmIdentifier = asn.define(
 17 |   "AlgorithmIdentifier",
 18 |   function (this: any) {
 19 |     this.seq().obj(
 20 |       this.key("algorithm").objid(),
 21 |       this.key("parameters").optional().any()
 22 |     );
 23 |   }
 24 | );
 25 | 
 26 | var PublicKeyInfo = asn.define("PublicKeyInfo", function (this: any) {
 27 |   this.seq().obj(
 28 |     this.key("algorithm").use(AlgorithmIdentifier),
 29 |     this.key("publicKey").bitstr()
 30 |   );
 31 | });
 32 | 
 33 | var Version = asn.define("Version", function (this: any) {
 34 |   this.int({
 35 |     0: "two-prime",
 36 |     1: "multi",
 37 |   });
 38 | });
 39 | 
 40 | var OtherPrimeInfos = asn.define("OtherPrimeInfos", function (this: any) {
 41 |   this.seq().obj(
 42 |     this.key("ri").int(),
 43 |     this.key("di").int(),
 44 |     this.key("ti").int()
 45 |   );
 46 | });
 47 | 
 48 | var RSAPrivateKey = asn.define("RSAPrivateKey", function (this: any) {
 49 |   this.seq().obj(
 50 |     this.key("version").use(Version),
 51 |     this.key("n").int(),
 52 |     this.key("e").int(),
 53 |     this.key("d").int(),
 54 |     this.key("p").int(),
 55 |     this.key("q").int(),
 56 |     this.key("dp").int(),
 57 |     this.key("dq").int(),
 58 |     this.key("qi").int(),
 59 |     this.key("other").optional().use(OtherPrimeInfos)
 60 |   );
 61 | });
 62 | 
 63 | var PrivateKeyInfo = asn.define("PrivateKeyInfo", function (this: any) {
 64 |   this.seq().obj(
 65 |     this.key("version").use(Version),
 66 |     this.key("algorithm").use(AlgorithmIdentifier),
 67 |     this.key("privateKey").bitstr()
 68 |   );
 69 | });
 70 | 
 71 | const RSA_OID = "1.2.840.113549.1.1.1";
 72 | 
 73 | function addExtras(obj: any, extras?: any): any {
 74 |   extras = extras || {};
 75 |   Object.keys(extras).forEach(function (key) {
 76 |     obj[key] = extras[key];
 77 |   });
 78 |   return obj;
 79 | }
 80 | 
 81 | function pad(hex: string): string {
 82 |   return hex.length % 2 === 1 ? "0" + hex : hex;
 83 | }
 84 | 
 85 | function decodeRsaPublic(buffer: any, extras?: any) {
 86 |   var key = RSAPublicKey.decode(buffer, "der");
 87 |   var e = pad(key.e.toString(16));
 88 |   var jwk = {
 89 |     kty: "RSA",
 90 |     n: bn2base64url(key.n),
 91 |     e: hex2b64url(e),
 92 |   };
 93 |   return addExtras(jwk, extras);
 94 | }
 95 | 
 96 | function decodeRsaPrivate(buffer: any, extras?: any) {
 97 |   var key = RSAPrivateKey.decode(buffer, "der");
 98 |   var e = pad(key.e.toString(16));
 99 |   var jwk = {
100 |     kty: "RSA",
101 |     n: bn2base64url(key.n),
102 |     e: hex2b64url(e),
103 |     d: bn2base64url(key.d),
104 |     p: bn2base64url(key.p),
105 |     q: bn2base64url(key.q),
106 |     dp: bn2base64url(key.dp),
107 |     dq: bn2base64url(key.dq),
108 |     qi: bn2base64url(key.qi),
109 |   };
110 |   return addExtras(jwk, extras);
111 | }
112 | 
113 | function decodePublic(buffer: any, extras?: any): any {
114 |   var info = PublicKeyInfo.decode(buffer, "der");
115 |   return decodeRsaPublic(info.publicKey.data, extras);
116 | }
117 | 
118 | function decodePrivate(buffer: any, extras?: any): any {
119 |   var info = PrivateKeyInfo.decode(buffer, "der");
120 |   return decodeRsaPrivate(info.privateKey.data, extras);
121 | }
122 | 
123 | function getDecoder(header: string): any {
124 |   var match = /^-----BEGIN (RSA )?(PUBLIC|PRIVATE) KEY-----$/.exec(header);
125 |   if (!match) {
126 |     return null;
127 |   }
128 |   var isRSA = !!match[1];
129 |   var isPrivate = match[2] === "PRIVATE";
130 |   if (isPrivate) {
131 |     return isRSA ? decodeRsaPrivate : decodePrivate;
132 |   } else {
133 |     return isRSA ? decodeRsaPublic : decodePublic;
134 |   }
135 | }
136 | function parse(jwk: any): any {
137 |   return {
138 |     n: string2bn(jwk.n),
139 |     e: string2bn(jwk.e),
140 |     d: jwk.d && string2bn(jwk.d),
141 |     p: jwk.p && string2bn(jwk.p),
142 |     q: jwk.q && string2bn(jwk.q),
143 |     dp: jwk.dp && string2bn(jwk.dp),
144 |     dq: jwk.dq && string2bn(jwk.dq),
145 |     qi: jwk.qi && string2bn(jwk.qi),
146 |   };
147 | }
148 | 
149 | function bn2base64url(bn: any): any {
150 |   return hex2b64url(pad(bn.toString(16)));
151 | }
152 | 
153 | function base64url2bn(str: string): any {
154 |   return new asn.bignum(Buffer.from(str, "base64"));
155 | }
156 | 
157 | function string2bn(str: string): any {
158 |   if (/^[0-9]+$/.test(str)) {
159 |     return new asn.bignum(str, 10);
160 |   }
161 |   return base64url2bn(str);
162 | }
163 | 
164 | export function pemTojwk(pem: any, extras?: any): any {
165 |   var text = pem.toString().split(/(\r\n|\r|\n)+/g);
166 |   text = text.filter(function (line: string) {
167 |     return line.trim().length !== 0;
168 |   });
169 |   var decoder = getDecoder(text[0]);
170 | 
171 |   text = text.slice(1, -1).join("");
172 |   return decoder(
173 |     Buffer.from(text.replace(/[^\w\d\+\/=]+/g, ""), "base64"),
174 |     extras
175 |   );
176 | }
177 | 
178 | export function jwkTopem(json: any): any {
179 |   var jwk = parse(json);
180 |   var isPrivate = !!jwk.d;
181 |   var t = isPrivate ? "PRIVATE" : "PUBLIC";
182 |   var header = "-----BEGIN RSA " + t + " KEY-----\n";
183 |   var footer = "\n-----END RSA " + t + " KEY-----\n";
184 |   var data = Buffer.alloc(0);
185 |   if (isPrivate) {
186 |     jwk.version = "two-prime";
187 |     data = RSAPrivateKey.encode(jwk, "der");
188 |   } else {
189 |     data = RSAPublicKey.encode(jwk, "der");
190 |   }
191 |   var body = data
192 |     .toString("base64")
193 |     .match(/.{1,64}/g)!
194 |     .join("\n");
195 |   return header + body + footer;
196 | }
197 | 


--------------------------------------------------------------------------------
/src/common/lib/crypto/webcrypto-driver.ts:
--------------------------------------------------------------------------------
  1 | import { JWKInterface, JWKPublicInterface } from "../wallet";
  2 | import CryptoInterface, { SignatureOptions } from "./crypto-interface";
  3 | import * as ArweaveUtils from "../utils";
  4 | 
  5 | export default class WebCryptoDriver implements CryptoInterface {
  6 |   public readonly keyLength = 4096;
  7 |   public readonly publicExponent = 0x10001;
  8 |   public readonly hashAlgorithm = "sha256";
  9 |   public readonly driver: SubtleCrypto;
 10 | 
 11 |   constructor() {
 12 |     if (!this.detectWebCrypto()) {
 13 |       throw new Error("SubtleCrypto not available!");
 14 |     }
 15 | 
 16 |     this.driver = crypto.subtle;
 17 |   }
 18 | 
 19 |   public async generateJWK(): Promise<JWKInterface> {
 20 |     let cryptoKey = await this.driver.generateKey(
 21 |       {
 22 |         name: "RSA-PSS",
 23 |         modulusLength: 4096,
 24 |         publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
 25 |         hash: {
 26 |           name: "SHA-256",
 27 |         },
 28 |       },
 29 |       true,
 30 |       ["sign"]
 31 |     );
 32 | 
 33 |     let jwk = await this.driver.exportKey("jwk", cryptoKey.privateKey!);
 34 | 
 35 |     return {
 36 |       kty: jwk.kty!,
 37 |       e: jwk.e!,
 38 |       n: jwk.n!,
 39 |       d: jwk.d,
 40 |       p: jwk.p,
 41 |       q: jwk.q,
 42 |       dp: jwk.dp,
 43 |       dq: jwk.dq,
 44 |       qi: jwk.qi,
 45 |     };
 46 |   }
 47 | 
 48 |   public async sign(
 49 |     jwk: JWKInterface,
 50 |     data: Uint8Array,
 51 |     { saltLength }: SignatureOptions = {}
 52 |   ): Promise<Uint8Array> {
 53 |     let signature = await this.driver.sign(
 54 |       {
 55 |         name: "RSA-PSS",
 56 |         saltLength: saltLength ?? 32,
 57 |       },
 58 |       await this.jwkToCryptoKey(jwk),
 59 |       data
 60 |     );
 61 | 
 62 |     return new Uint8Array(signature);
 63 |   }
 64 | 
 65 |   public async hash(
 66 |     data: Uint8Array,
 67 |     algorithm: string = "SHA-256"
 68 |   ): Promise<Uint8Array> {
 69 |     let digest = await this.driver.digest(algorithm, data);
 70 | 
 71 |     return new Uint8Array(digest);
 72 |   }
 73 | 
 74 |   public async verify(
 75 |     publicModulus: string,
 76 |     data: Uint8Array,
 77 |     signature: Uint8Array
 78 |   ): Promise<boolean> {
 79 |     const publicKey = {
 80 |       kty: "RSA",
 81 |       e: "AQAB",
 82 |       n: publicModulus,
 83 |     };
 84 | 
 85 |     const key = await this.jwkToPublicCryptoKey(publicKey);
 86 |     const digest = await this.driver.digest("SHA-256", data);
 87 | 
 88 |     const salt0 = await this.driver.verify(
 89 |       {
 90 |         name: "RSA-PSS",
 91 |         saltLength: 0,
 92 |       },
 93 |       key,
 94 |       signature,
 95 |       data
 96 |     );
 97 | 
 98 |     const salt32 = await this.driver.verify(
 99 |       {
100 |         name: "RSA-PSS",
101 |         saltLength: 32,
102 |       },
103 |       key,
104 |       signature,
105 |       data
106 |     );
107 | 
108 |     // saltN's salt-length is derived from a formula described here
109 |     // https://developer.mozilla.org/en-US/docs/Web/API/RsaPssParams
110 |     const saltLengthN =
111 |       Math.ceil(
112 |         ((key.algorithm as RsaHashedKeyGenParams).modulusLength - 1) / 8
113 |       ) -
114 |       digest.byteLength -
115 |       2;
116 | 
117 |     const saltN = await this.driver.verify(
118 |       {
119 |         name: "RSA-PSS",
120 |         saltLength: saltLengthN,
121 |       },
122 |       key,
123 |       signature,
124 |       data
125 |     );
126 | 
127 |     const result = salt0 || salt32 || saltN;
128 | 
129 |     if (!result) {
130 |       const details = {
131 |         algorithm: key.algorithm.name,
132 |         modulusLength: (key.algorithm as RsaHashedKeyAlgorithm).modulusLength,
133 |         keyUsages: key.usages,
134 |         saltLengthsAttempted: `0, 32, ${saltLengthN}`,
135 |       };
136 |       console.warn(
137 |         "Transaction Verification Failed! \n",
138 |         `Details: ${JSON.stringify(details, null, 2)} \n`,
139 |         "N.B. ArweaveJS is only guaranteed to verify txs created using ArweaveJS."
140 |       );
141 |     }
142 | 
143 |     return result;
144 |   }
145 | 
146 |   private async jwkToCryptoKey(jwk: JWKInterface): Promise<CryptoKey> {
147 |     return this.driver.importKey(
148 |       "jwk",
149 |       jwk,
150 |       {
151 |         name: "RSA-PSS",
152 |         hash: {
153 |           name: "SHA-256",
154 |         },
155 |       },
156 |       false,
157 |       ["sign"]
158 |     );
159 |   }
160 | 
161 |   private async jwkToPublicCryptoKey(
162 |     publicJwk: JWKPublicInterface
163 |   ): Promise<CryptoKey> {
164 |     return this.driver.importKey(
165 |       "jwk",
166 |       publicJwk,
167 |       {
168 |         name: "RSA-PSS",
169 |         hash: {
170 |           name: "SHA-256",
171 |         },
172 |       },
173 |       false,
174 |       ["verify"]
175 |     );
176 |   }
177 | 
178 |   private detectWebCrypto() {
179 |     if (typeof crypto === "undefined") {
180 |       return false;
181 |     }
182 |     const subtle = crypto?.subtle;
183 |     if (subtle === undefined) {
184 |       return false;
185 |     }
186 |     const names = <const>[
187 |       "generateKey",
188 |       "importKey",
189 |       "exportKey",
190 |       "digest",
191 |       "sign",
192 |     ];
193 |     return names.every((name) => typeof subtle[name] === "function");
194 |   }
195 | 
196 |   public async encrypt(
197 |     data: Buffer,
198 |     key: string | Buffer,
199 |     salt?: string
200 |   ): Promise<Uint8Array> {
201 |     const initialKey = await this.driver.importKey(
202 |       "raw",
203 |       typeof key == "string" ? ArweaveUtils.stringToBuffer(key) : key,
204 |       {
205 |         name: "PBKDF2",
206 |         length: 32,
207 |       },
208 |       false,
209 |       ["deriveKey"]
210 |     );
211 | 
212 |     // const salt = ArweaveUtils.stringToBuffer("salt");
213 |     // create a random string for deriving the key
214 |     // const salt = this.driver.randomBytes(16).toString('hex');
215 | 
216 |     const derivedkey = await this.driver.deriveKey(
217 |       {
218 |         name: "PBKDF2",
219 |         salt: salt
220 |           ? ArweaveUtils.stringToBuffer(salt)
221 |           : ArweaveUtils.stringToBuffer("salt"),
222 |         iterations: 100000,
223 |         hash: "SHA-256",
224 |       },
225 |       initialKey,
226 |       {
227 |         name: "AES-CBC",
228 |         length: 256,
229 |       },
230 |       false,
231 |       ["encrypt", "decrypt"]
232 |     );
233 | 
234 |     const iv = new Uint8Array(16);
235 | 
236 |     crypto.getRandomValues(iv);
237 | 
238 |     const encryptedData = await this.driver.encrypt(
239 |       {
240 |         name: "AES-CBC",
241 |         iv: iv,
242 |       },
243 |       derivedkey,
244 |       data
245 |     );
246 | 
247 |     return ArweaveUtils.concatBuffers([iv, encryptedData]);
248 |   }
249 | 
250 |   public async decrypt(
251 |     encrypted: Buffer,
252 |     key: string | Buffer,
253 |     salt?: string
254 |   ): Promise<Uint8Array> {
255 |     const initialKey = await this.driver.importKey(
256 |       "raw",
257 |       typeof key == "string" ? ArweaveUtils.stringToBuffer(key) : key,
258 |       {
259 |         name: "PBKDF2",
260 |         length: 32,
261 |       },
262 |       false,
263 |       ["deriveKey"]
264 |     );
265 | 
266 |     // const salt = ArweaveUtils.stringToBuffer("pepper");
267 | 
268 |     const derivedkey = await this.driver.deriveKey(
269 |       {
270 |         name: "PBKDF2",
271 |         salt: salt
272 |           ? ArweaveUtils.stringToBuffer(salt)
273 |           : ArweaveUtils.stringToBuffer("salt"),
274 |         iterations: 100000,
275 |         hash: "SHA-256",
276 |       },
277 |       initialKey,
278 |       {
279 |         name: "AES-CBC",
280 |         length: 256,
281 |       },
282 |       false,
283 |       ["encrypt", "decrypt"]
284 |     );
285 | 
286 |     const iv = encrypted.slice(0, 16);
287 | 
288 |     const data = await this.driver.decrypt(
289 |       {
290 |         name: "AES-CBC",
291 |         iv: iv,
292 |       },
293 |       derivedkey,
294 |       encrypted.slice(16)
295 |     );
296 | 
297 |     // We're just using concat to convert from an array buffer to uint8array
298 |     return ArweaveUtils.concatBuffers([data]);
299 |   }
300 | }
301 | 


--------------------------------------------------------------------------------
/src/common/lib/deepHash.ts:
--------------------------------------------------------------------------------
 1 | import Arweave from "../common";
 2 | 
 3 | // In TypeScript 3.7, could be written as a single type:
 4 | // `type DeepHashChunk = Uint8Array | DeepHashChunk[];`
 5 | type DeepHashChunk = Uint8Array | DeepHashChunks;
 6 | interface DeepHashChunks extends Array<DeepHashChunk> {}
 7 | 
 8 | export default async function deepHash(
 9 |   data: DeepHashChunk
10 | ): Promise<Uint8Array> {
11 |   if (Array.isArray(data)) {
12 |     const tag = Arweave.utils.concatBuffers([
13 |       Arweave.utils.stringToBuffer("list"),
14 |       Arweave.utils.stringToBuffer(data.length.toString()),
15 |     ]);
16 | 
17 |     return await deepHashChunks(
18 |       data,
19 |       await Arweave.crypto.hash(tag, "SHA-384")
20 |     );
21 |   }
22 | 
23 |   const tag = Arweave.utils.concatBuffers([
24 |     Arweave.utils.stringToBuffer("blob"),
25 |     Arweave.utils.stringToBuffer(data.byteLength.toString()),
26 |   ]);
27 | 
28 |   const taggedHash = Arweave.utils.concatBuffers([
29 |     await Arweave.crypto.hash(tag, "SHA-384"),
30 |     await Arweave.crypto.hash(data, "SHA-384"),
31 |   ]);
32 | 
33 |   return await Arweave.crypto.hash(taggedHash, "SHA-384");
34 | }
35 | 
36 | async function deepHashChunks(
37 |   chunks: DeepHashChunks,
38 |   acc: Uint8Array
39 | ): Promise<Uint8Array> {
40 |   if (chunks.length < 1) {
41 |     return acc;
42 |   }
43 | 
44 |   const hashPair = Arweave.utils.concatBuffers([
45 |     acc,
46 |     await deepHash(chunks[0]),
47 |   ]);
48 |   const newAcc = await Arweave.crypto.hash(hashPair, "SHA-384");
49 |   return await deepHashChunks(chunks.slice(1), newAcc);
50 | }
51 | 


--------------------------------------------------------------------------------
/src/common/lib/error.ts:
--------------------------------------------------------------------------------
 1 | import { ResponseWithData } from "./api";
 2 | 
 3 | export const enum ArweaveErrorType {
 4 |   TX_NOT_FOUND = "TX_NOT_FOUND",
 5 |   TX_FAILED = "TX_FAILED",
 6 |   TX_INVALID = "TX_INVALID",
 7 |   BLOCK_NOT_FOUND = "BLOCK_NOT_FOUND",
 8 | }
 9 | 
10 | export default class ArweaveError extends Error {
11 |   public readonly type: ArweaveErrorType;
12 |   public readonly response?: ResponseWithData;
13 | 
14 |   constructor(
15 |     type: ArweaveErrorType,
16 |     optional: { message?: string; response?: ResponseWithData } = {}
17 |   ) {
18 |     if (optional.message) {
19 |       super(optional.message);
20 |     } else {
21 |       super();
22 |     }
23 | 
24 |     this.type = type;
25 |     this.response = optional.response;
26 |   }
27 | 
28 |   public getType(): ArweaveErrorType {
29 |     return this.type;
30 |   }
31 | }
32 | 
33 | type ResponseLite = {
34 |   status: number;
35 |   statusText?: string;
36 |   data: { error: string } | any;
37 | };
38 | 
39 | // Safely get error string
40 | // from a response, falling back to
41 | // resp.data, statusText or 'unknown'.
42 | // Note: a wrongly set content-type can
43 | // cause what is a json response to be interepted
44 | // as a string or Buffer, so we handle that too.
45 | 
46 | export function getError(resp: ResponseLite) {
47 |   let data = resp.data;
48 | 
49 |   if (typeof resp.data === "string") {
50 |     try {
51 |       data = JSON.parse(resp.data);
52 |     } catch (e) {}
53 |   }
54 | 
55 |   if (resp.data instanceof ArrayBuffer || resp.data instanceof Uint8Array) {
56 |     try {
57 |       data = JSON.parse(data.toString());
58 |     } catch (e) {}
59 |   }
60 | 
61 |   return data ? data.error || data : resp.statusText || "unknown";
62 | }
63 | 


--------------------------------------------------------------------------------
/src/common/lib/merkle.ts:
--------------------------------------------------------------------------------
  1 | /**
  2 |  * @see {@link https://github.com/ArweaveTeam/arweave/blob/fbc381e0e36efffa45d13f2faa6199d3766edaa2/apps/arweave/src/ar_merkle.erl}
  3 |  */
  4 | import Arweave from "../common";
  5 | import { concatBuffers } from "./utils";
  6 | 
  7 | export interface Chunk {
  8 |   dataHash: Uint8Array;
  9 |   minByteRange: number;
 10 |   maxByteRange: number;
 11 | }
 12 | 
 13 | interface BranchNode {
 14 |   readonly id: Uint8Array;
 15 |   readonly type: "branch";
 16 |   readonly byteRange: number;
 17 |   readonly maxByteRange: number;
 18 |   readonly leftChild?: MerkelNode;
 19 |   readonly rightChild?: MerkelNode;
 20 | }
 21 | 
 22 | interface LeafNode {
 23 |   readonly id: Uint8Array;
 24 |   readonly dataHash: Uint8Array;
 25 |   readonly type: "leaf";
 26 | 
 27 |   readonly minByteRange: number;
 28 |   readonly maxByteRange: number;
 29 | }
 30 | 
 31 | export type MerkelNode = BranchNode | LeafNode;
 32 | 
 33 | export const MAX_CHUNK_SIZE = 256 * 1024;
 34 | export const MIN_CHUNK_SIZE = 32 * 1024;
 35 | const NOTE_SIZE = 32;
 36 | const HASH_SIZE = 32;
 37 | 
 38 | /**
 39 |  * Takes the input data and chunks it into (mostly) equal sized chunks.
 40 |  * The last chunk will be a bit smaller as it contains the remainder
 41 |  * from the chunking process.
 42 |  */
 43 | export async function chunkData(data: Uint8Array): Promise<Chunk[]> {
 44 |   let chunks: Chunk[] = [];
 45 | 
 46 |   let rest = data;
 47 |   let cursor = 0;
 48 | 
 49 |   while (rest.byteLength >= MAX_CHUNK_SIZE) {
 50 |     let chunkSize = MAX_CHUNK_SIZE;
 51 | 
 52 |     // If the total bytes left will produce a chunk < MIN_CHUNK_SIZE,
 53 |     // then adjust the amount we put in this 2nd last chunk.
 54 | 
 55 |     let nextChunkSize = rest.byteLength - MAX_CHUNK_SIZE;
 56 |     if (nextChunkSize > 0 && nextChunkSize < MIN_CHUNK_SIZE) {
 57 |       chunkSize = Math.ceil(rest.byteLength / 2);
 58 |       // console.log(`Last chunk will be: ${nextChunkSize} which is below ${MIN_CHUNK_SIZE}, adjusting current to ${chunkSize} with ${rest.byteLength} left.`)
 59 |     }
 60 | 
 61 |     const chunk = rest.slice(0, chunkSize);
 62 |     const dataHash = await Arweave.crypto.hash(chunk);
 63 |     cursor += chunk.byteLength;
 64 |     chunks.push({
 65 |       dataHash,
 66 |       minByteRange: cursor - chunk.byteLength,
 67 |       maxByteRange: cursor,
 68 |     });
 69 |     rest = rest.slice(chunkSize);
 70 |   }
 71 | 
 72 |   chunks.push({
 73 |     dataHash: await Arweave.crypto.hash(rest),
 74 |     minByteRange: cursor,
 75 |     maxByteRange: cursor + rest.byteLength,
 76 |   });
 77 | 
 78 |   return chunks;
 79 | }
 80 | 
 81 | export async function generateLeaves(chunks: Chunk[]): Promise<LeafNode[]> {
 82 |   return Promise.all(
 83 |     chunks.map(
 84 |       async ({ dataHash, minByteRange, maxByteRange }): Promise<LeafNode> => {
 85 |         return {
 86 |           type: "leaf",
 87 |           id: await hash(
 88 |             await Promise.all([hash(dataHash), hash(intToBuffer(maxByteRange))])
 89 |           ),
 90 |           dataHash: dataHash,
 91 |           minByteRange,
 92 |           maxByteRange,
 93 |         };
 94 |       }
 95 |     )
 96 |   );
 97 | }
 98 | 
 99 | /**
100 |  * Builds an arweave merkle tree and gets the root hash for the given input.
101 |  */
102 | export async function computeRootHash(data: Uint8Array): Promise<Uint8Array> {
103 |   const rootNode = await generateTree(data);
104 | 
105 |   return rootNode.id;
106 | }
107 | 
108 | export async function generateTree(data: Uint8Array): Promise<MerkelNode> {
109 |   const rootNode = await buildLayers(
110 |     await generateLeaves(await chunkData(data))
111 |   );
112 | 
113 |   return rootNode;
114 | }
115 | 
116 | /**
117 |  * Generates the data_root, chunks & proofs
118 |  * needed for a transaction.
119 |  *
120 |  * This also checks if the last chunk is a zero-length
121 |  * chunk and discards that chunk and proof if so.
122 |  * (we do not need to upload this zero length chunk)
123 |  *
124 |  * @param data
125 |  */
126 | export async function generateTransactionChunks(data: Uint8Array) {
127 |   const chunks = await chunkData(data);
128 |   const leaves = await generateLeaves(chunks);
129 |   const root = await buildLayers(leaves);
130 |   const proofs = await generateProofs(root);
131 | 
132 |   // Discard the last chunk & proof if it's zero length.
133 |   const lastChunk = chunks.slice(-1)[0];
134 |   if (lastChunk.maxByteRange - lastChunk.minByteRange === 0) {
135 |     chunks.splice(chunks.length - 1, 1);
136 |     proofs.splice(proofs.length - 1, 1);
137 |   }
138 | 
139 |   return {
140 |     data_root: root.id,
141 |     chunks,
142 |     proofs,
143 |   };
144 | }
145 | 
146 | /**
147 |  * Starting with the bottom layer of leaf nodes, hash every second pair
148 |  * into a new branch node, push those branch nodes onto a new layer,
149 |  * and then recurse, building up the tree to it's root, where the
150 |  * layer only consists of two items.
151 |  */
152 | export async function buildLayers(
153 |   nodes: MerkelNode[],
154 |   level = 0
155 | ): Promise<MerkelNode> {
156 |   // If there is only 1 node left, this is going to be the root node
157 |   if (nodes.length < 2) {
158 |     const root = nodes[0];
159 | 
160 |     // console.log("Root layer", root);
161 | 
162 |     return root;
163 |   }
164 | 
165 |   const nextLayer: MerkelNode[] = [];
166 | 
167 |   for (let i = 0; i < nodes.length; i += 2) {
168 |     nextLayer.push(await hashBranch(nodes[i], nodes[i + 1]));
169 |   }
170 | 
171 |   // console.log("Layer", nextLayer);
172 | 
173 |   return buildLayers(nextLayer, level + 1);
174 | }
175 | 
176 | /**
177 |  * Recursively search through all branches of the tree,
178 |  * and generate a proof for each leaf node.
179 |  */
180 | export function generateProofs(root: MerkelNode) {
181 |   const proofs = resolveBranchProofs(root);
182 |   if (!Array.isArray(proofs)) {
183 |     return [proofs];
184 |   }
185 |   return arrayFlatten<Proof>(proofs);
186 | }
187 | 
188 | export interface Proof {
189 |   offset: number;
190 |   proof: Uint8Array;
191 | }
192 | 
193 | function resolveBranchProofs(
194 |   node: MerkelNode,
195 |   proof: Uint8Array = new Uint8Array(),
196 |   depth = 0
197 | ): Proof | Proof[] {
198 |   if (node.type == "leaf") {
199 |     return {
200 |       offset: node.maxByteRange - 1,
201 |       proof: concatBuffers([
202 |         proof,
203 |         node.dataHash,
204 |         intToBuffer(node.maxByteRange),
205 |       ]),
206 |     };
207 |   }
208 | 
209 |   if (node.type == "branch") {
210 |     const partialProof = concatBuffers([
211 |       proof,
212 |       node.leftChild!.id!,
213 |       node.rightChild!.id!,
214 |       intToBuffer(node.byteRange),
215 |     ]);
216 |     return [
217 |       resolveBranchProofs(node.leftChild!, partialProof, depth + 1),
218 |       resolveBranchProofs(node.rightChild!, partialProof, depth + 1),
219 |     ] as [Proof, Proof];
220 |   }
221 | 
222 |   throw new Error(`Unexpected node type`);
223 | }
224 | 
225 | export function arrayFlatten<T = any>(input: T[]): T[] {
226 |   const flat: any[] = [];
227 | 
228 |   input.forEach((item) => {
229 |     if (Array.isArray(item)) {
230 |       flat.push(...arrayFlatten(item));
231 |     } else {
232 |       flat.push(item);
233 |     }
234 |   });
235 | 
236 |   return flat;
237 | }
238 | 
239 | async function hashBranch(
240 |   left: MerkelNode,
241 |   right: MerkelNode
242 | ): Promise<MerkelNode> {
243 |   if (!right) {
244 |     return left as BranchNode;
245 |   }
246 |   let branch = {
247 |     type: "branch",
248 |     id: await hash([
249 |       await hash(left.id),
250 |       await hash(right.id),
251 |       await hash(intToBuffer(left.maxByteRange)),
252 |     ]),
253 |     byteRange: left.maxByteRange,
254 |     maxByteRange: right.maxByteRange,
255 |     leftChild: left,
256 |     rightChild: right,
257 |   } as BranchNode;
258 | 
259 |   return branch;
260 | }
261 | 
262 | async function hash(data: Uint8Array | Uint8Array[]) {
263 |   if (Array.isArray(data)) {
264 |     data = Arweave.utils.concatBuffers(data);
265 |   }
266 | 
267 |   return new Uint8Array(await Arweave.crypto.hash(data));
268 | }
269 | 
270 | export function intToBuffer(note: number): Uint8Array {
271 |   const buffer = new Uint8Array(NOTE_SIZE);
272 | 
273 |   for (var i = buffer.length - 1; i >= 0; i--) {
274 |     var byte = note % 256;
275 |     buffer[i] = byte;
276 |     note = (note - byte) / 256;
277 |   }
278 | 
279 |   return buffer;
280 | }
281 | 
282 | export function bufferToInt(buffer: Uint8Array): number {
283 |   let value = 0;
284 |   for (var i = 0; i < buffer.length; i++) {
285 |     value *= 256;
286 |     value += buffer[i];
287 |   }
288 |   return value;
289 | }
290 | 
291 | export const arrayCompare = (a: Uint8Array | any[], b: Uint8Array | any[]) =>
292 |   a.every((value: any, index: any) => b[index] === value);
293 | 
294 | export async function validatePath(
295 |   id: Uint8Array,
296 |   dest: number,
297 |   leftBound: number,
298 |   rightBound: number,
299 |   path: Uint8Array
300 | ): Promise<
301 |   | false
302 |   | { offset: number; leftBound: number; rightBound: number; chunkSize: number }
303 | > {
304 |   if (rightBound <= 0) {
305 |     return false;
306 |   }
307 | 
308 |   if (dest >= rightBound) {
309 |     return validatePath(id, 0, rightBound - 1, rightBound, path);
310 |   }
311 | 
312 |   if (dest < 0) {
313 |     return validatePath(id, 0, 0, rightBound, path);
314 |   }
315 | 
316 |   if (path.length == HASH_SIZE + NOTE_SIZE) {
317 |     const pathData = path.slice(0, HASH_SIZE);
318 |     const endOffsetBuffer = path.slice(
319 |       pathData.length,
320 |       pathData.length + NOTE_SIZE
321 |     );
322 | 
323 |     const pathDataHash = await hash([
324 |       await hash(pathData),
325 |       await hash(endOffsetBuffer),
326 |     ]);
327 |     let result = arrayCompare(id, pathDataHash);
328 |     if (result) {
329 |       return {
330 |         offset: rightBound - 1,
331 |         leftBound: leftBound,
332 |         rightBound: rightBound,
333 |         chunkSize: rightBound - leftBound,
334 |       };
335 |     }
336 |     return false;
337 |   }
338 | 
339 |   const left = path.slice(0, HASH_SIZE);
340 |   const right = path.slice(left.length, left.length + HASH_SIZE);
341 |   const offsetBuffer = path.slice(
342 |     left.length + right.length,
343 |     left.length + right.length + NOTE_SIZE
344 |   );
345 |   const offset = bufferToInt(offsetBuffer);
346 | 
347 |   const remainder = path.slice(
348 |     left.length + right.length + offsetBuffer.length
349 |   );
350 | 
351 |   const pathHash = await hash([
352 |     await hash(left),
353 |     await hash(right),
354 |     await hash(offsetBuffer),
355 |   ]);
356 | 
357 |   if (arrayCompare(id, pathHash)) {
358 |     if (dest < offset) {
359 |       return await validatePath(
360 |         left,
361 |         dest,
362 |         leftBound,
363 |         Math.min(rightBound, offset),
364 |         remainder
365 |       );
366 |     }
367 |     return await validatePath(
368 |       right,
369 |       dest,
370 |       Math.max(leftBound, offset),
371 |       rightBound,
372 |       remainder
373 |     );
374 |   }
375 | 
376 |   return false;
377 | }
378 | 
379 | /**
380 |  * Inspect an arweave chunk proof.
381 |  * Takes proof, parses, reads and displays the values for console logging.
382 |  * One proof section per line
383 |  * Format: left,right,offset => hash
384 |  */
385 | export async function debug(proof: Uint8Array, output = ""): Promise<string> {
386 |   if (proof.byteLength < 1) {
387 |     return output;
388 |   }
389 | 
390 |   const left = proof.slice(0, HASH_SIZE);
391 |   const right = proof.slice(left.length, left.length + HASH_SIZE);
392 |   const offsetBuffer = proof.slice(
393 |     left.length + right.length,
394 |     left.length + right.length + NOTE_SIZE
395 |   );
396 |   const offset = bufferToInt(offsetBuffer);
397 | 
398 |   const remainder = proof.slice(
399 |     left.length + right.length + offsetBuffer.length
400 |   );
401 | 
402 |   const pathHash = await hash([
403 |     await hash(left),
404 |     await hash(right),
405 |     await hash(offsetBuffer),
406 |   ]);
407 | 
408 |   const updatedOutput = `${output}\n${JSON.stringify(
409 |     Buffer.from(left)
410 |   )},${JSON.stringify(Buffer.from(right))},${offset} => ${JSON.stringify(
411 |     pathHash
412 |   )}`;
413 | 
414 |   return debug(remainder, updatedOutput);
415 | }
416 | 


--------------------------------------------------------------------------------
/src/common/lib/transaction-uploader.ts:
--------------------------------------------------------------------------------
  1 | import Transaction from "./transaction";
  2 | import * as ArweaveUtils from "./utils";
  3 | import Api from "./api";
  4 | import { getError } from "./error";
  5 | import { validatePath } from "./merkle";
  6 | 
  7 | // Maximum amount of chunks we will upload in the body.
  8 | const MAX_CHUNKS_IN_BODY = 1;
  9 | 
 10 | // We assume these errors are intermitment and we can try again after a delay:
 11 | // - not_joined
 12 | // - timeout
 13 | // - data_root_not_found (we may have hit a node that just hasn't seen it yet)
 14 | // - exceeds_disk_pool_size_limit
 15 | // We also try again after any kind of unexpected network errors
 16 | 
 17 | // Errors from /chunk we should never try and continue on.
 18 | const FATAL_CHUNK_UPLOAD_ERRORS = [
 19 |   "invalid_json",
 20 |   "chunk_too_big",
 21 |   "data_path_too_big",
 22 |   "offset_too_big",
 23 |   "data_size_too_big",
 24 |   "chunk_proof_ratio_not_attractive",
 25 |   "invalid_proof",
 26 | ];
 27 | 
 28 | // Amount we will delay on receiving an error response but do want to continue.
 29 | const ERROR_DELAY = 1000 * 40;
 30 | 
 31 | export interface SerializedUploader {
 32 |   chunkIndex: number;
 33 |   txPosted: boolean;
 34 |   transaction: any;
 35 |   lastRequestTimeEnd: number;
 36 |   lastResponseStatus: number;
 37 |   lastResponseError: string;
 38 | }
 39 | 
 40 | export class TransactionUploader {
 41 |   private chunkIndex: number = 0;
 42 |   private txPosted: boolean = false;
 43 |   private transaction: Transaction;
 44 |   private lastRequestTimeEnd: number = 0;
 45 |   private totalErrors = 0; // Not serialized.
 46 | 
 47 |   public data: Uint8Array;
 48 |   public lastResponseStatus: number = 0;
 49 |   public lastResponseError: string = "";
 50 | 
 51 |   public get isComplete(): boolean {
 52 |     return (
 53 |       this.txPosted &&
 54 |       this.chunkIndex === this.transaction.chunks!.chunks.length
 55 |     );
 56 |   }
 57 | 
 58 |   public get totalChunks(): number {
 59 |     return this.transaction.chunks!.chunks.length;
 60 |   }
 61 | 
 62 |   public get uploadedChunks(): number {
 63 |     return this.chunkIndex;
 64 |   }
 65 | 
 66 |   public get pctComplete(): number {
 67 |     return Math.trunc((this.uploadedChunks / this.totalChunks) * 100);
 68 |   }
 69 | 
 70 |   constructor(private api: Api, transaction: Transaction) {
 71 |     if (!transaction.id) {
 72 |       throw new Error(`Transaction is not signed`);
 73 |     }
 74 |     if (!transaction.chunks) {
 75 |       throw new Error(`Transaction chunks not prepared`);
 76 |     }
 77 |     // Make a copy of transaction, zeroing the data so we can serialize.
 78 |     this.data = transaction.data;
 79 |     this.transaction = new Transaction(
 80 |       Object.assign({}, transaction, { data: new Uint8Array(0) })
 81 |     );
 82 |   }
 83 | 
 84 |   /**
 85 |    * Uploads the next part of the transaction.
 86 |    * On the first call this posts the transaction
 87 |    * itself and on any subsequent calls uploads the
 88 |    * next chunk until it completes.
 89 |    */
 90 |   public async uploadChunk(chunkIndex_?: number): Promise<void> {
 91 |     if (this.isComplete) {
 92 |       throw new Error(`Upload is already complete`);
 93 |     }
 94 | 
 95 |     if (this.lastResponseError !== "") {
 96 |       this.totalErrors++;
 97 |     } else {
 98 |       this.totalErrors = 0;
 99 |     }
100 | 
101 |     // We have been trying for about an hour receiving an
102 |     // error every time, so eventually bail.
103 |     if (this.totalErrors === 100) {
104 |       throw new Error(
105 |         `Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`
106 |       );
107 |     }
108 | 
109 |     let delay =
110 |       this.lastResponseError === ""
111 |         ? 0
112 |         : Math.max(
113 |             this.lastRequestTimeEnd + ERROR_DELAY - Date.now(),
114 |             ERROR_DELAY
115 |           );
116 | 
117 |     if (delay > 0) {
118 |       // Jitter delay bcoz networks, subtract up to 30% from 40 seconds
119 |       delay = delay - delay * Math.random() * 0.3;
120 |       await new Promise((res) => setTimeout(res, delay));
121 |     }
122 | 
123 |     this.lastResponseError = "";
124 | 
125 |     if (!this.txPosted) {
126 |       await this.postTransaction();
127 |       return;
128 |     }
129 | 
130 |     if (chunkIndex_) {
131 |       this.chunkIndex = chunkIndex_;
132 |     }
133 | 
134 |     const chunk = this.transaction.getChunk(
135 |       chunkIndex_ || this.chunkIndex,
136 |       this.data
137 |     );
138 | 
139 |     const chunkOk = await validatePath(
140 |       this.transaction.chunks!.data_root,
141 |       parseInt(chunk.offset),
142 |       0,
143 |       parseInt(chunk.data_size),
144 |       ArweaveUtils.b64UrlToBuffer(chunk.data_path)
145 |     );
146 |     if (!chunkOk) {
147 |       throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
148 |     }
149 | 
150 |     // Catch network errors and turn them into objects with status -1 and an error message.
151 |     const resp = await this.api
152 |       .post(`chunk`, this.transaction.getChunk(this.chunkIndex, this.data))
153 |       .catch((e) => {
154 |         console.error(e.message);
155 |         return { status: -1, data: { error: e.message } };
156 |       });
157 | 
158 |     this.lastRequestTimeEnd = Date.now();
159 |     this.lastResponseStatus = resp.status;
160 | 
161 |     if (this.lastResponseStatus == 200) {
162 |       this.chunkIndex++;
163 |     } else {
164 |       this.lastResponseError = getError(resp);
165 |       if (FATAL_CHUNK_UPLOAD_ERRORS.includes(this.lastResponseError)) {
166 |         throw new Error(
167 |           `Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`
168 |         );
169 |       }
170 |     }
171 |   }
172 | 
173 |   /**
174 |    * Reconstructs an upload from its serialized state and data.
175 |    * Checks if data matches the expected data_root.
176 |    *
177 |    * @param serialized
178 |    * @param data
179 |    */
180 |   public static async fromSerialized(
181 |     api: Api,
182 |     serialized: SerializedUploader,
183 |     data: Uint8Array
184 |   ): Promise<TransactionUploader> {
185 |     if (
186 |       !serialized ||
187 |       typeof serialized.chunkIndex !== "number" ||
188 |       typeof serialized.transaction !== "object"
189 |     ) {
190 |       throw new Error(`Serialized object does not match expected format.`);
191 |     }
192 | 
193 |     // Everything looks ok, reconstruct the TransactionUpload,
194 |     // prepare the chunks again and verify the data_root matches
195 |     var transaction = new Transaction(serialized.transaction);
196 |     if (!transaction.chunks) {
197 |       await transaction.prepareChunks(data);
198 |     }
199 | 
200 |     const upload = new TransactionUploader(api, transaction);
201 | 
202 |     // Copy the serialized upload information, and data passed in.
203 |     upload.chunkIndex = serialized.chunkIndex;
204 |     upload.lastRequestTimeEnd = serialized.lastRequestTimeEnd;
205 |     upload.lastResponseError = serialized.lastResponseError;
206 |     upload.lastResponseStatus = serialized.lastResponseStatus;
207 |     upload.txPosted = serialized.txPosted;
208 |     upload.data = data;
209 | 
210 |     if (upload.transaction.data_root !== serialized.transaction.data_root) {
211 |       throw new Error(`Data mismatch: Uploader doesn't match provided data.`);
212 |     }
213 | 
214 |     return upload;
215 |   }
216 | 
217 |   /**
218 |    * Reconstruct an upload from the tx metadata, ie /tx/<id>.
219 |    *
220 |    * @param api
221 |    * @param id
222 |    * @param data
223 |    */
224 |   public static async fromTransactionId(
225 |     api: Api,
226 |     id: string
227 |   ): Promise<SerializedUploader> {
228 |     const resp = await api.get(`tx/${id}`);
229 | 
230 |     if (resp.status !== 200) {
231 |       throw new Error(`Tx ${id} not found: ${resp.status}`);
232 |     }
233 | 
234 |     const transaction = resp.data;
235 |     transaction.data = new Uint8Array(0);
236 | 
237 |     const serialized: SerializedUploader = {
238 |       txPosted: true,
239 |       chunkIndex: 0,
240 |       lastResponseError: "",
241 |       lastRequestTimeEnd: 0,
242 |       lastResponseStatus: 0,
243 |       transaction,
244 |     };
245 | 
246 |     return serialized;
247 |   }
248 | 
249 |   public toJSON() {
250 |     return {
251 |       chunkIndex: this.chunkIndex,
252 |       transaction: this.transaction,
253 |       lastRequestTimeEnd: this.lastRequestTimeEnd,
254 |       lastResponseStatus: this.lastResponseStatus,
255 |       lastResponseError: this.lastResponseError,
256 |       txPosted: this.txPosted,
257 |     };
258 |   }
259 | 
260 |   // POST to /tx
261 |   private async postTransaction(): Promise<void> {
262 |     const uploadInBody = this.totalChunks <= MAX_CHUNKS_IN_BODY;
263 | 
264 |     if (uploadInBody) {
265 |       // Post the transaction with data.
266 |       this.transaction.data = this.data;
267 |       const resp = await this.api.post(`tx`, this.transaction).catch((e) => {
268 |         console.error(e);
269 |         return { status: -1, data: { error: e.message } };
270 |       });
271 | 
272 |       this.lastRequestTimeEnd = Date.now();
273 |       this.lastResponseStatus = resp.status;
274 |       this.transaction.data = new Uint8Array(0);
275 | 
276 |       if (resp.status >= 200 && resp.status < 300) {
277 |         // We are complete.
278 |         this.txPosted = true;
279 |         this.chunkIndex = MAX_CHUNKS_IN_BODY;
280 |         return;
281 |       }
282 |       this.lastResponseError = getError(resp);
283 |       throw new Error(
284 |         `Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`
285 |       );
286 |     }
287 | 
288 |     // Post the transaction with no data.
289 |     const resp = await this.api.post(`tx`, this.transaction);
290 |     this.lastRequestTimeEnd = Date.now();
291 |     this.lastResponseStatus = resp.status;
292 |     if (!(resp.status >= 200 && resp.status < 300)) {
293 |       this.lastResponseError = getError(resp);
294 |       throw new Error(
295 |         `Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`
296 |       );
297 |     }
298 |     this.txPosted = true;
299 |   }
300 | }
301 | 


--------------------------------------------------------------------------------
/src/common/lib/transaction.ts:
--------------------------------------------------------------------------------
  1 | import * as ArweaveUtils from "./utils";
  2 | import deepHash from "./deepHash";
  3 | import { Chunk, Proof, generateTransactionChunks } from "./merkle";
  4 | 
  5 | class BaseObject {
  6 |   [key: string]: any;
  7 | 
  8 |   public get(field: string): string;
  9 |   public get(
 10 |     field: string,
 11 |     options: { decode: true; string: false }
 12 |   ): Uint8Array;
 13 |   public get(field: string, options: { decode: true; string: true }): string;
 14 | 
 15 |   public get(
 16 |     field: string,
 17 |     options?: {
 18 |       string?: boolean;
 19 |       decode?: boolean;
 20 |     }
 21 |   ): string | Uint8Array | Tag[] {
 22 |     if (!Object.getOwnPropertyNames(this).includes(field)) {
 23 |       throw new Error(
 24 |         `Field "${field}" is not a property of the Arweave Transaction class.`
 25 |       );
 26 |     }
 27 | 
 28 |     // Handle fields that are Uint8Arrays.
 29 |     // To maintain compat we encode them to b64url
 30 |     // if decode option is not specificed.
 31 |     if (this[field] instanceof Uint8Array) {
 32 |       if (options && options.decode && options.string) {
 33 |         return ArweaveUtils.bufferToString(this[field]);
 34 |       }
 35 |       if (options && options.decode && !options.string) {
 36 |         return this[field];
 37 |       }
 38 |       return ArweaveUtils.bufferTob64Url(this[field]);
 39 |     }
 40 | 
 41 |     if (this[field] instanceof Array) {
 42 |       if (options?.decode !== undefined || options?.string !== undefined) {
 43 |         if (field === "tags") {
 44 |           console.warn(`Did you mean to use 'transaction["tags"]' ?`);
 45 |         }
 46 |         throw new Error(`Cannot decode or stringify an array.`);
 47 |       }
 48 |       return this[field];
 49 |     }
 50 | 
 51 |     if (options && options.decode == true) {
 52 |       if (options && options.string) {
 53 |         return ArweaveUtils.b64UrlToString(this[field]);
 54 |       }
 55 | 
 56 |       return ArweaveUtils.b64UrlToBuffer(this[field]);
 57 |     }
 58 | 
 59 |     return this[field];
 60 |   }
 61 | }
 62 | 
 63 | export class Tag extends BaseObject {
 64 |   readonly name: string;
 65 |   readonly value: string;
 66 | 
 67 |   public constructor(name: string, value: string, decode = false) {
 68 |     super();
 69 |     this.name = name;
 70 |     this.value = value;
 71 |   }
 72 | }
 73 | 
 74 | export interface TransactionInterface {
 75 |   format: number;
 76 |   id: string;
 77 |   last_tx: string;
 78 |   owner: string;
 79 |   tags: Tag[];
 80 |   target: string;
 81 |   quantity: string;
 82 |   data: Uint8Array;
 83 |   reward: string;
 84 |   signature: string;
 85 |   data_size: string;
 86 |   data_root: string;
 87 | }
 88 | 
 89 | export default class Transaction
 90 |   extends BaseObject
 91 |   implements TransactionInterface
 92 | {
 93 |   public readonly format: number = 2;
 94 |   public id: string = "";
 95 |   public readonly last_tx: string = "";
 96 |   public owner: string = "";
 97 |   public tags: Tag[] = [];
 98 |   public readonly target: string = "";
 99 |   public readonly quantity: string = "0";
100 |   public readonly data_size: string = "0";
101 |   public data: Uint8Array = new Uint8Array();
102 |   public data_root: string = "";
103 |   public reward: string = "0";
104 |   public signature: string = "";
105 | 
106 |   // Computed when needed.
107 |   public chunks?: {
108 |     data_root: Uint8Array;
109 |     chunks: Chunk[];
110 |     proofs: Proof[];
111 |   };
112 | 
113 |   public constructor(attributes: Partial<TransactionInterface> = {}) {
114 |     super();
115 |     Object.assign(this, attributes);
116 | 
117 |     // If something passes in a Tx that has been toJSON'ed and back,
118 |     // or where the data was filled in from /tx/data endpoint.
119 |     // data will be b64url encoded, so decode it.
120 |     if (typeof this.data === "string") {
121 |       this.data = ArweaveUtils.b64UrlToBuffer(this.data as string);
122 |     }
123 | 
124 |     if (attributes.tags) {
125 |       this.tags = attributes.tags.map(
126 |         (tag: { name: string; value: string }) => {
127 |           return new Tag(tag.name, tag.value);
128 |         }
129 |       );
130 |     }
131 |   }
132 | 
133 |   public addTag(name: string, value: string) {
134 |     this.tags.push(
135 |       new Tag(
136 |         ArweaveUtils.stringToB64Url(name),
137 |         ArweaveUtils.stringToB64Url(value)
138 |       )
139 |     );
140 |   }
141 | 
142 |   public toJSON() {
143 |     return {
144 |       format: this.format,
145 |       id: this.id,
146 |       last_tx: this.last_tx,
147 |       owner: this.owner,
148 |       tags: this.tags,
149 |       target: this.target,
150 |       quantity: this.quantity,
151 |       data: ArweaveUtils.bufferTob64Url(this.data),
152 |       data_size: this.data_size,
153 |       data_root: this.data_root,
154 |       data_tree: this.data_tree,
155 |       reward: this.reward,
156 |       signature: this.signature,
157 |     };
158 |   }
159 | 
160 |   public setOwner(owner: string) {
161 |     this.owner = owner;
162 |   }
163 | 
164 |   public setSignature({
165 |     id,
166 |     owner,
167 |     reward,
168 |     tags,
169 |     signature,
170 |   }: {
171 |     id: string;
172 |     owner: string;
173 |     reward?: string;
174 |     tags?: Tag[];
175 |     signature: string;
176 |   }) {
177 |     this.id = id;
178 |     this.owner = owner;
179 |     if (reward) this.reward = reward;
180 |     if (tags) this.tags = tags;
181 |     this.signature = signature;
182 |   }
183 | 
184 |   public async prepareChunks(data: Uint8Array) {
185 |     // Note: we *do not* use `this.data`, the caller may be
186 |     // operating on a transaction with an zero length data field.
187 |     // This function computes the chunks for the data passed in and
188 |     // assigns the result to this transaction. It should not read the
189 |     // data *from* this transaction.
190 | 
191 |     if (!this.chunks && data.byteLength > 0) {
192 |       this.chunks = await generateTransactionChunks(data);
193 |       this.data_root = ArweaveUtils.bufferTob64Url(this.chunks.data_root);
194 |     }
195 | 
196 |     if (!this.chunks && data.byteLength === 0) {
197 |       this.chunks = {
198 |         chunks: [],
199 |         data_root: new Uint8Array(),
200 |         proofs: [],
201 |       };
202 |       this.data_root = "";
203 |     }
204 |   }
205 | 
206 |   // Returns a chunk in a format suitable for posting to /chunk.
207 |   // Similar to `prepareChunks()` this does not operate `this.data`,
208 |   // instead using the data passed in.
209 |   public getChunk(idx: number, data: Uint8Array) {
210 |     if (!this.chunks) {
211 |       throw new Error(`Chunks have not been prepared`);
212 |     }
213 |     const proof = this.chunks.proofs[idx];
214 |     const chunk = this.chunks.chunks[idx];
215 |     return {
216 |       data_root: this.data_root,
217 |       data_size: this.data_size,
218 |       data_path: ArweaveUtils.bufferTob64Url(proof.proof),
219 |       offset: proof.offset.toString(),
220 |       chunk: ArweaveUtils.bufferTob64Url(
221 |         data.slice(chunk.minByteRange, chunk.maxByteRange)
222 |       ),
223 |     };
224 |   }
225 | 
226 |   public async getSignatureData(): Promise<Uint8Array> {
227 |     switch (this.format) {
228 |       case 1:
229 |         let tags = this.tags.reduce((accumulator: Uint8Array, tag: Tag) => {
230 |           return ArweaveUtils.concatBuffers([
231 |             accumulator,
232 |             tag.get("name", { decode: true, string: false }),
233 |             tag.get("value", { decode: true, string: false }),
234 |           ]);
235 |         }, new Uint8Array());
236 | 
237 |         return ArweaveUtils.concatBuffers([
238 |           this.get("owner", { decode: true, string: false }),
239 |           this.get("target", { decode: true, string: false }),
240 |           this.get("data", { decode: true, string: false }),
241 |           ArweaveUtils.stringToBuffer(this.quantity),
242 |           ArweaveUtils.stringToBuffer(this.reward),
243 |           this.get("last_tx", { decode: true, string: false }),
244 |           tags,
245 |         ]);
246 |       case 2:
247 |         if (!this.data_root) {
248 |           await this.prepareChunks(this.data);
249 |         }
250 | 
251 |         const tagList: [Uint8Array, Uint8Array][] = this.tags.map((tag) => [
252 |           tag.get("name", { decode: true, string: false }),
253 |           tag.get("value", { decode: true, string: false }),
254 |         ]);
255 | 
256 |         return await deepHash([
257 |           ArweaveUtils.stringToBuffer(this.format.toString()),
258 |           this.get("owner", { decode: true, string: false }),
259 |           this.get("target", { decode: true, string: false }),
260 |           ArweaveUtils.stringToBuffer(this.quantity),
261 |           ArweaveUtils.stringToBuffer(this.reward),
262 |           this.get("last_tx", { decode: true, string: false }),
263 |           tagList,
264 |           ArweaveUtils.stringToBuffer(this.data_size),
265 |           this.get("data_root", { decode: true, string: false }),
266 |         ]);
267 |       default:
268 |         throw new Error(`Unexpected transaction format: ${this.format}`);
269 |     }
270 |   }
271 | }
272 | 


--------------------------------------------------------------------------------
/src/common/lib/utils.ts:
--------------------------------------------------------------------------------
 1 | import * as B64js from "base64-js";
 2 | 
 3 | export type Base64UrlString = string;
 4 | 
 5 | export function concatBuffers(
 6 |   buffers: Uint8Array[] | ArrayBuffer[]
 7 | ): Uint8Array {
 8 |   let total_length = 0;
 9 | 
10 |   for (let i = 0; i < buffers.length; i++) {
11 |     total_length += buffers[i].byteLength;
12 |   }
13 | 
14 |   let temp = new Uint8Array(total_length);
15 |   let offset = 0;
16 | 
17 |   temp.set(new Uint8Array(buffers[0]), offset);
18 |   offset += buffers[0].byteLength;
19 | 
20 |   for (let i = 1; i < buffers.length; i++) {
21 |     temp.set(new Uint8Array(buffers[i]), offset);
22 |     offset += buffers[i].byteLength;
23 |   }
24 | 
25 |   return temp;
26 | }
27 | 
28 | export function b64UrlToString(b64UrlString: string): string {
29 |   let buffer = b64UrlToBuffer(b64UrlString);
30 | 
31 |   return bufferToString(buffer);
32 | }
33 | 
34 | export function bufferToString(buffer: Uint8Array | ArrayBuffer): string {
35 |   return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
36 | }
37 | 
38 | export function stringToBuffer(string: string): Uint8Array {
39 |   return new TextEncoder().encode(string);
40 | }
41 | 
42 | export function stringToB64Url(string: string): string {
43 |   return bufferTob64Url(stringToBuffer(string));
44 | }
45 | 
46 | export function b64UrlToBuffer(b64UrlString: string): Uint8Array {
47 |   return new Uint8Array(B64js.toByteArray(b64UrlDecode(b64UrlString)));
48 | }
49 | 
50 | export function bufferTob64(buffer: Uint8Array): string {
51 |   return B64js.fromByteArray(new Uint8Array(buffer));
52 | }
53 | 
54 | export function bufferTob64Url(buffer: Uint8Array): string {
55 |   return b64UrlEncode(bufferTob64(buffer));
56 | }
57 | 
58 | export function b64UrlEncode(b64UrlString: string): string {
59 |   try {
60 |     return b64UrlString
61 |       .replace(/\+/g, "-")
62 |       .replace(/\//g, "_")
63 |       .replace(/\=/g, "");
64 |   } catch (error) {
65 |     throw new Error("Failed to encode string", { cause: error });
66 |   }
67 | }
68 | 
69 | export function b64UrlDecode(b64UrlString: string): string {
70 |   try {
71 |     b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
72 |     let padding;
73 |     b64UrlString.length % 4 == 0
74 |       ? (padding = 0)
75 |       : (padding = 4 - (b64UrlString.length % 4));
76 |     return b64UrlString.concat("=".repeat(padding));
77 |   } catch (error) {
78 |     throw new Error("Failed to decode string", { cause: error });
79 |   }
80 | }
81 | 


--------------------------------------------------------------------------------
/src/common/lib/wallet.ts:
--------------------------------------------------------------------------------
 1 | export interface JWKPublicInterface {
 2 |   kty: string;
 3 |   e: string;
 4 |   n: string;
 5 | }
 6 | 
 7 | export interface JWKInterface extends JWKPublicInterface {
 8 |   d?: string;
 9 |   p?: string;
10 |   q?: string;
11 |   dp?: string;
12 |   dq?: string;
13 |   qi?: string;
14 | }
15 | 


--------------------------------------------------------------------------------
/src/common/network.ts:
--------------------------------------------------------------------------------
 1 | import Api from "./lib/api";
 2 | 
 3 | export interface NetworkInfoInterface {
 4 |   network: string;
 5 |   version: number;
 6 |   release: number;
 7 |   height: number;
 8 |   current: string;
 9 |   blocks: number;
10 |   peers: number;
11 |   queue_length: number;
12 |   node_state_latency: number;
13 | }
14 | 
15 | export interface PeerList extends Array<string> {}
16 | 
17 | export default class Network {
18 |   private api: Api;
19 | 
20 |   constructor(api: Api) {
21 |     this.api = api;
22 |   }
23 | 
24 |   public getInfo(): Promise<NetworkInfoInterface> {
25 |     return this.api.get(`info`).then((response) => {
26 |       return response.data;
27 |     });
28 |   }
29 | 
30 |   public getPeers(): Promise<PeerList> {
31 |     return this.api.get(`peers`).then((response) => {
32 |       return response.data;
33 |     });
34 |   }
35 | }
36 | 


--------------------------------------------------------------------------------
/src/common/silo.ts:
--------------------------------------------------------------------------------
  1 | import Api from "./lib/api";
  2 | import CryptoInterface from "./lib/crypto/crypto-interface";
  3 | import Transactions from "./transactions";
  4 | import * as ArweaveUtils from "./lib/utils";
  5 | import Transaction from "./lib/transaction";
  6 | 
  7 | export default class Silo {
  8 |   private api: Api;
  9 | 
 10 |   private crypto: CryptoInterface;
 11 | 
 12 |   private transactions: Transactions;
 13 | 
 14 |   constructor(api: Api, crypto: CryptoInterface, transactions: Transactions) {
 15 |     this.api = api;
 16 |     this.crypto = crypto;
 17 |     this.transactions = transactions;
 18 |   }
 19 | 
 20 |   public async get(siloURI: string): Promise<Uint8Array> {
 21 |     if (!siloURI) {
 22 |       throw new Error(`No Silo URI specified`);
 23 |     }
 24 | 
 25 |     const resource = await this.parseUri(siloURI);
 26 | 
 27 |     const ids = await this.transactions.search(
 28 |       "Silo-Name",
 29 |       resource.getAccessKey()
 30 |     );
 31 | 
 32 |     if (ids.length == 0) {
 33 |       throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
 34 |     }
 35 | 
 36 |     const transaction = await this.transactions.get(ids[0]);
 37 | 
 38 |     if (!transaction) {
 39 |       throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
 40 |     }
 41 | 
 42 |     const encrypted = transaction.get("data", { decode: true, string: false });
 43 | 
 44 |     return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
 45 |   }
 46 | 
 47 |   public async readTransactionData(transaction: Transaction, siloURI: string) {
 48 |     if (!siloURI) {
 49 |       throw new Error(`No Silo URI specified`);
 50 |     }
 51 | 
 52 |     const resource = await this.parseUri(siloURI);
 53 | 
 54 |     const encrypted = transaction.get("data", { decode: true, string: false });
 55 | 
 56 |     return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
 57 |   }
 58 | 
 59 |   public async parseUri(siloURI: string): Promise<SiloResource> {
 60 |     const parsed = siloURI.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
 61 | 
 62 |     if (!parsed) {
 63 |       throw new Error(
 64 |         `Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'`
 65 |       );
 66 |     }
 67 | 
 68 |     const siloName = parsed[1];
 69 | 
 70 |     const hashIterations = Math.pow(2, parseInt(parsed[2]));
 71 | 
 72 |     const digest = await this.hash(
 73 |       ArweaveUtils.stringToBuffer(siloName),
 74 |       hashIterations
 75 |     );
 76 | 
 77 |     const accessKey = ArweaveUtils.bufferTob64(digest.slice(0, 15));
 78 | 
 79 |     const encryptionkey = await this.hash(digest.slice(16, 31), 1);
 80 | 
 81 |     return new SiloResource(siloURI, accessKey, encryptionkey);
 82 |   }
 83 | 
 84 |   private async hash(
 85 |     input: Uint8Array,
 86 |     iterations: number
 87 |   ): Promise<Uint8Array> {
 88 |     let digest = await this.crypto.hash(input);
 89 | 
 90 |     for (let count = 0; count < iterations - 1; count++) {
 91 |       digest = await this.crypto.hash(digest);
 92 |     }
 93 | 
 94 |     return digest;
 95 |   }
 96 | }
 97 | 
 98 | export class SiloResource {
 99 |   private uri: string;
100 | 
101 |   private accessKey: string;
102 | 
103 |   private encryptionKey: Uint8Array;
104 | 
105 |   constructor(uri: string, accessKey: string, encryptionKey: Uint8Array) {
106 |     this.uri = uri;
107 |     this.accessKey = accessKey;
108 |     this.encryptionKey = encryptionKey;
109 |   }
110 | 
111 |   public getUri(): string {
112 |     return this.uri;
113 |   }
114 | 
115 |   public getAccessKey(): string {
116 |     return this.accessKey;
117 |   }
118 | 
119 |   public getEncryptionKey(): Uint8Array {
120 |     return this.encryptionKey;
121 |   }
122 | }
123 | 


--------------------------------------------------------------------------------
/src/common/transactions.ts:
--------------------------------------------------------------------------------
  1 | declare const arweaveWallet: Window["arweaveWallet"];
  2 | 
  3 | import Api from "./lib/api";
  4 | import CryptoInterface, {
  5 |   SignatureOptions,
  6 | } from "./lib/crypto/crypto-interface";
  7 | import ArweaveError, { ArweaveErrorType, getError } from "./lib/error";
  8 | import Transaction from "./lib/transaction";
  9 | import * as ArweaveUtils from "./lib/utils";
 10 | import { JWKInterface } from "./lib/wallet";
 11 | import {
 12 |   TransactionUploader,
 13 |   SerializedUploader,
 14 | } from "./lib/transaction-uploader";
 15 | import Chunks from "./chunks";
 16 | import "arconnect";
 17 | import { allowedNodeEnvironmentFlags } from "process";
 18 | 
 19 | export interface TransactionConfirmedData {
 20 |   block_indep_hash: string;
 21 |   block_height: number;
 22 |   number_of_confirmations: number;
 23 | }
 24 | export interface TransactionStatusResponse {
 25 |   status: number;
 26 |   confirmed: TransactionConfirmedData | null;
 27 | }
 28 | 
 29 | export default class Transactions {
 30 |   private api: Api;
 31 | 
 32 |   private crypto: CryptoInterface;
 33 | 
 34 |   private chunks: Chunks;
 35 | 
 36 |   constructor(api: Api, crypto: CryptoInterface, chunks: Chunks) {
 37 |     this.api = api;
 38 |     this.crypto = crypto;
 39 |     this.chunks = chunks;
 40 |   }
 41 | 
 42 |   public async getTransactionAnchor(): Promise<string> {
 43 |     const res = await this.api.get<string>(`tx_anchor`);
 44 |     if (!res.data.match(/^[a-z0-9_-]{43,}/i) || !res.ok) {
 45 |       throw new Error(
 46 |         `Could not getTransactionAnchor. Received: ${res.data}. Status: ${res.status}, ${res.statusText}`
 47 |       );
 48 |     }
 49 |     return res.data;
 50 |   }
 51 | 
 52 |   public async getPrice(
 53 |     byteSize: number,
 54 |     targetAddress?: string
 55 |   ): Promise<string> {
 56 |     let endpoint = targetAddress
 57 |       ? `price/${byteSize}/${targetAddress}`
 58 |       : `price/${byteSize}`;
 59 | 
 60 |     const res = await this.api.get(endpoint);
 61 | 
 62 |     if (!/^\d+$/.test(res.data) || !res.ok) {
 63 |       throw new Error(
 64 |         `Could not getPrice. Received: ${res.data}. Status: ${res.status}, ${res.statusText}`
 65 |       );
 66 |     }
 67 | 
 68 |     return res.data;
 69 |   }
 70 | 
 71 |   public async get(id: string): Promise<Transaction> {
 72 |     const response = await this.api.get(`tx/${id}`);
 73 | 
 74 |     if (response.status == 200) {
 75 |       const data_size = parseInt(response.data.data_size);
 76 |       if (
 77 |         response.data.format >= 2 &&
 78 |         data_size > 0 &&
 79 |         data_size <= 1024 * 1024 * 12
 80 |       ) {
 81 |         const data = await this.getData(id);
 82 |         return new Transaction({
 83 |           ...response.data,
 84 |           data,
 85 |         });
 86 |       }
 87 |       return new Transaction({
 88 |         ...response.data,
 89 |         format: response.data.format || 1,
 90 |       });
 91 |     }
 92 | 
 93 |     if (response.status == 404) {
 94 |       throw new ArweaveError(ArweaveErrorType.TX_NOT_FOUND);
 95 |     }
 96 | 
 97 |     if (response.status == 410) {
 98 |       throw new ArweaveError(ArweaveErrorType.TX_FAILED);
 99 |     }
100 | 
101 |     throw new ArweaveError(ArweaveErrorType.TX_INVALID);
102 |   }
103 | 
104 |   public fromRaw(attributes: object): Transaction {
105 |     return new Transaction(attributes);
106 |   }
107 | 
108 |   /** @deprecated use GQL https://gql-guide.arweave.net */
109 |   public async search(tagName: string, tagValue: string): Promise<string[]> {
110 |     return this.api
111 |       .post(`arql`, {
112 |         op: "equals",
113 |         expr1: tagName,
114 |         expr2: tagValue,
115 |       })
116 |       .then((response) => {
117 |         if (!response.data) {
118 |           return [];
119 |         }
120 |         return response.data;
121 |       });
122 |   }
123 | 
124 |   public getStatus(id: string): Promise<TransactionStatusResponse> {
125 |     return this.api.get(`tx/${id}/status`).then((response) => {
126 |       if (response.status == 200) {
127 |         return {
128 |           status: 200,
129 |           confirmed: response.data,
130 |         };
131 |       }
132 |       return {
133 |         status: response.status,
134 |         confirmed: null,
135 |       };
136 |     });
137 |   }
138 | 
139 |   public async getData(
140 |     id: string,
141 |     options?: {
142 |       decode?: boolean;
143 |       string?: boolean;
144 |     }
145 |   ): Promise<string | Uint8Array> {
146 |     let data: Uint8Array | undefined = undefined;
147 | 
148 |     try {
149 |       data = await this.chunks.downloadChunkedData(id);
150 |     } catch (error) {
151 |       console.error(`Error while trying to download chunked data for ${id}`);
152 |       console.error(error);
153 |     }
154 | 
155 |     if (!data) {
156 |       console.warn(`Falling back to gateway cache for ${id}`);
157 |       try {
158 |         const {
159 |           data: resData,
160 |           ok,
161 |           status,
162 |           statusText,
163 |         } = await this.api.get(`/${id}`, { responseType: "arraybuffer" });
164 |         if (!ok) {
165 |           throw new Error(`Bad http status code`, {
166 |             cause: { status, statusText },
167 |           });
168 |         }
169 |         data = resData;
170 |       } catch (error) {
171 |         console.error(
172 |           `Error while trying to download contiguous data from gateway cache for ${id}`
173 |         );
174 |         console.error(error);
175 |       }
176 |     }
177 | 
178 |     if (!data) {
179 |       throw new Error(`${id} data was not found!`);
180 |     }
181 | 
182 |     if (options && options.decode && !options.string) {
183 |       return data;
184 |     }
185 |     if (options && options.decode && options.string) {
186 |       return ArweaveUtils.bufferToString(data);
187 |     }
188 |     // Since decode wasn't requested, caller expects b64url encoded data.
189 |     return ArweaveUtils.bufferTob64Url(data);
190 |   }
191 | 
192 |   public async sign(
193 |     transaction: Transaction,
194 |     jwk?: JWKInterface | "use_wallet", //"use_wallet" for backwards compatibility only
195 |     options?: SignatureOptions
196 |   ): Promise<void> {
197 |     /** Non-exhaustive (only checks key names), but previously no jwk checking was done */
198 |     const isJwk = (obj: object): boolean => {
199 |       let valid = true;
200 |       ["n", "e", "d", "p", "q", "dp", "dq", "qi"].map(
201 |         (key) => !(key in obj) && (valid = false)
202 |       );
203 |       return valid;
204 |     };
205 |     const validJwk = typeof jwk === "object" && isJwk(jwk);
206 |     const externalWallet = typeof arweaveWallet === "object";
207 | 
208 |     if (!validJwk && !externalWallet) {
209 |       throw new Error(
210 |         `No valid JWK or external wallet found to sign transaction.`
211 |       );
212 |     } else if (validJwk) {
213 |       transaction.setOwner(jwk.n);
214 | 
215 |       let dataToSign = await transaction.getSignatureData();
216 |       let rawSignature = await this.crypto.sign(jwk, dataToSign, options);
217 |       let id = await this.crypto.hash(rawSignature);
218 | 
219 |       transaction.setSignature({
220 |         id: ArweaveUtils.bufferTob64Url(id),
221 |         owner: jwk.n,
222 |         signature: ArweaveUtils.bufferTob64Url(rawSignature),
223 |       });
224 |     } else if (externalWallet) {
225 |       try {
226 |         const existingPermissions = await arweaveWallet.getPermissions();
227 | 
228 |         if (!existingPermissions.includes("SIGN_TRANSACTION"))
229 |           await arweaveWallet.connect(["SIGN_TRANSACTION"]);
230 |       } catch {
231 |         // Permission is already granted
232 |       }
233 | 
234 |       const signedTransaction = await arweaveWallet.sign(transaction, options);
235 | 
236 |       transaction.setSignature({
237 |         id: signedTransaction.id,
238 |         owner: signedTransaction.owner,
239 |         reward: signedTransaction.reward,
240 |         tags: signedTransaction.tags,
241 |         signature: signedTransaction.signature,
242 |       });
243 |     } else {
244 |       //can't get here, but for sanity we'll throw an error.
245 |       throw new Error(`An error occurred while signing. Check wallet is valid`);
246 |     }
247 |   }
248 | 
249 |   public async verify(transaction: Transaction): Promise<boolean> {
250 |     const signaturePayload = await transaction.getSignatureData();
251 | 
252 |     /**
253 |      * The transaction ID should be a SHA-256 hash of the raw signature bytes, so this needs
254 |      * to be recalculated from the signature and checked against the transaction ID.
255 |      */
256 |     const rawSignature = transaction.get("signature", {
257 |       decode: true,
258 |       string: false,
259 |     });
260 | 
261 |     const expectedId = ArweaveUtils.bufferTob64Url(
262 |       await this.crypto.hash(rawSignature)
263 |     );
264 | 
265 |     if (transaction.id !== expectedId) {
266 |       throw new Error(
267 |         `Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.`
268 |       );
269 |     }
270 | 
271 |     /**
272 |      * Now verify the signature is valid and signed by the owner wallet (owner field = originating wallet public key).
273 |      */
274 |     return this.crypto.verify(
275 |       transaction.owner,
276 |       signaturePayload,
277 |       rawSignature
278 |     );
279 |   }
280 | 
281 |   public async post(
282 |     transaction: Transaction | Buffer | string | object
283 |   ): Promise<{ status: number; statusText: string; data: any }> {
284 |     if (typeof transaction === "string") {
285 |       transaction = new Transaction(JSON.parse(transaction as string));
286 |     } else if (typeof (transaction as any).readInt32BE === "function") {
287 |       transaction = new Transaction(JSON.parse(transaction.toString()));
288 |     } else if (
289 |       typeof transaction === "object" &&
290 |       !(transaction instanceof Transaction)
291 |     ) {
292 |       transaction = new Transaction(transaction as object);
293 |     }
294 | 
295 |     if (!(transaction instanceof Transaction)) {
296 |       throw new Error(`Must be Transaction object`);
297 |     }
298 | 
299 |     if (!transaction.chunks) {
300 |       await transaction.prepareChunks(transaction.data);
301 |     }
302 | 
303 |     const uploader = await this.getUploader(transaction, transaction.data);
304 | 
305 |     // Emulate existing error & return value behavior.
306 |     try {
307 |       while (!uploader.isComplete) {
308 |         await uploader.uploadChunk();
309 |       }
310 |     } catch (e) {
311 |       if (uploader.lastResponseStatus > 0) {
312 |         return {
313 |           status: uploader.lastResponseStatus,
314 |           statusText: uploader.lastResponseError,
315 |           data: {
316 |             error: uploader.lastResponseError,
317 |           },
318 |         };
319 |       }
320 |       throw e;
321 |     }
322 | 
323 |     return {
324 |       status: 200,
325 |       statusText: "OK",
326 |       data: {},
327 |     };
328 |   }
329 | 
330 |   /**
331 |    * Gets an uploader than can be used to upload a transaction chunk by chunk, giving progress
332 |    * and the ability to resume.
333 |    *
334 |    * Usage example:
335 |    *
336 |    * ```
337 |    * const uploader = arweave.transactions.getUploader(transaction);
338 |    * while (!uploader.isComplete) {
339 |    *   await uploader.uploadChunk();
340 |    *   console.log(`${uploader.pctComplete}%`);
341 |    * }
342 |    * ```
343 |    *
344 |    * @param upload a Transaction object, a previously save progress object, or a transaction id.
345 |    * @param data the data of the transaction. Required when resuming an upload.
346 |    */
347 |   public async getUploader(
348 |     upload: Transaction | SerializedUploader | string,
349 |     data?: Uint8Array | ArrayBuffer
350 |   ) {
351 |     let uploader!: TransactionUploader;
352 | 
353 |     if (data instanceof ArrayBuffer) {
354 |       data = new Uint8Array(data);
355 |     }
356 | 
357 |     if (upload instanceof Transaction) {
358 |       if (!data) {
359 |         data = upload.data;
360 |       }
361 | 
362 |       if (!(data instanceof Uint8Array)) {
363 |         throw new Error("Data format is invalid");
364 |       }
365 | 
366 |       if (!upload.chunks) {
367 |         await upload.prepareChunks(data);
368 |       }
369 | 
370 |       uploader = new TransactionUploader(this.api, upload);
371 | 
372 |       if (!uploader.data || uploader.data.length === 0) {
373 |         uploader.data = data;
374 |       }
375 |     } else {
376 |       if (typeof upload === "string") {
377 |         upload = await TransactionUploader.fromTransactionId(this.api, upload);
378 |       }
379 | 
380 |       if (!data || !(data instanceof Uint8Array)) {
381 |         throw new Error(`Must provide data when resuming upload`);
382 |       }
383 | 
384 |       // upload should be a serialized upload.
385 |       uploader = await TransactionUploader.fromSerialized(
386 |         this.api,
387 |         upload,
388 |         data
389 |       );
390 |     }
391 | 
392 |     return uploader;
393 |   }
394 | 
395 |   /**
396 |    * Async generator version of uploader
397 |    *
398 |    * Usage example:
399 |    *
400 |    * ```
401 |    * for await (const uploader of arweave.transactions.upload(tx)) {
402 |    *  console.log(`${uploader.pctComplete}%`);
403 |    * }
404 |    * ```
405 |    *
406 |    * @param upload a Transaction object, a previously save uploader, or a transaction id.
407 |    * @param data the data of the transaction. Required when resuming an upload.
408 |    */
409 |   public async *upload(
410 |     upload: Transaction | SerializedUploader | string,
411 |     data: Uint8Array
412 |   ) {
413 |     const uploader = await this.getUploader(upload, data);
414 | 
415 |     while (!uploader.isComplete) {
416 |       await uploader.uploadChunk();
417 |       yield uploader;
418 |     }
419 | 
420 |     return uploader;
421 |   }
422 | }
423 | 


--------------------------------------------------------------------------------
/src/common/wallets.ts:
--------------------------------------------------------------------------------
 1 | import Api from "./lib/api";
 2 | import CryptoInterface from "./lib/crypto/crypto-interface";
 3 | import { JWKInterface } from "./lib/wallet";
 4 | import * as ArweaveUtils from "./lib/utils";
 5 | import "arconnect";
 6 | 
 7 | export default class Wallets {
 8 |   private api: Api;
 9 | 
10 |   private crypto: CryptoInterface;
11 | 
12 |   constructor(api: Api, crypto: CryptoInterface) {
13 |     this.api = api;
14 |     this.crypto = crypto;
15 |   }
16 | 
17 |   /**
18 |    * Get the wallet balance for the given address.
19 |    *
20 |    * @param {string} address - The arweave address to get the balance for.
21 |    *
22 |    * @returns {Promise<string>} - Promise which resolves with a winston string balance.
23 |    */
24 |   public getBalance(address: string): Promise<string> {
25 |     return this.api.get(`wallet/${address}/balance`).then((response) => {
26 |       return response.data;
27 |     });
28 |   }
29 | 
30 |   /**
31 |    * Get the last transaction ID for the given wallet address.
32 |    *
33 |    * @param {string} address - The arweave address to get the transaction for.
34 |    *
35 |    * @returns {Promise<string>} - Promise which resolves with a transaction ID.
36 |    */
37 |   public getLastTransactionID(address: string): Promise<string> {
38 |     return this.api.get(`wallet/${address}/last_tx`).then((response) => {
39 |       return response.data;
40 |     });
41 |   }
42 | 
43 |   public generate() {
44 |     return this.crypto.generateJWK();
45 |   }
46 | 
47 |   public async jwkToAddress(
48 |     jwk?: JWKInterface | "use_wallet"
49 |   ): Promise<string> {
50 |     if (!jwk || jwk === "use_wallet") {
51 |       return this.getAddress();
52 |     } else {
53 |       return this.getAddress(jwk);
54 |     }
55 |   }
56 | 
57 |   public async getAddress(jwk?: JWKInterface | "use_wallet"): Promise<string> {
58 |     if (!jwk || jwk === "use_wallet") {
59 |       try {
60 |         // @ts-ignore
61 |         await arweaveWallet.connect(["ACCESS_ADDRESS"]);
62 |       } catch {
63 |         // Permission is already granted
64 |       }
65 | 
66 |       // @ts-ignore
67 |       return arweaveWallet.getActiveAddress();
68 |     } else {
69 |       return this.ownerToAddress(jwk.n);
70 |     }
71 |   }
72 | 
73 |   public async ownerToAddress(owner: string): Promise<string> {
74 |     return ArweaveUtils.bufferTob64Url(
75 |       await this.crypto.hash(ArweaveUtils.b64UrlToBuffer(owner))
76 |     );
77 |   }
78 | }
79 | 


--------------------------------------------------------------------------------
/src/modules.d.ts:
--------------------------------------------------------------------------------
1 | declare module "crypto";
2 | declare module "@crypto/node-driver";
3 | declare const arweaveWallet: Window["arweaveWallet"];
4 | 


--------------------------------------------------------------------------------
/src/node/index.ts:
--------------------------------------------------------------------------------
1 | import Arweave from "./common";
2 | import { ApiConfig } from "./lib/api";
3 | 
4 | Arweave.init = function (apiConfig: ApiConfig = {}): Arweave {
5 |   return new Arweave(apiConfig);
6 | };
7 | 
8 | export = Arweave;
9 | 


--------------------------------------------------------------------------------
/src/web/index.ts:
--------------------------------------------------------------------------------
 1 | import Arweave from "./common";
 2 | import { ApiConfig } from "./lib/api";
 3 | import { getDefaultConfig } from "./net-config";
 4 | 
 5 | declare global {
 6 |   interface Window {
 7 |     Arweave: typeof Arweave;
 8 |   }
 9 |   module globalThis {
10 |     var Arweave: unknown;
11 |   }
12 | }
13 | 
14 | Arweave.init = function (apiConfig: ApiConfig = {}): Arweave {
15 |   const defaults = {
16 |     host: "arweave.net",
17 |     port: 443,
18 |     protocol: "https",
19 |   };
20 | 
21 |   if (
22 |     typeof location !== "object" ||
23 |     !location.protocol ||
24 |     !location.hostname
25 |   ) {
26 |     return new Arweave({
27 |       ...apiConfig,
28 |       ...defaults,
29 |     });
30 |   }
31 | 
32 |   // window.location.protocol has a trailing colon (http:, https:, file: etc)
33 |   const locationProtocol = location.protocol.replace(":", "");
34 |   const locationHost = location.hostname;
35 |   const locationPort = location.port
36 |     ? parseInt(location.port)
37 |     : locationProtocol == "https"
38 |     ? 443
39 |     : 80;
40 | 
41 |   const defaultConfig = getDefaultConfig(locationProtocol, locationHost);
42 | 
43 |   const protocol = apiConfig.protocol || defaultConfig.protocol;
44 |   const host = apiConfig.host || defaultConfig.host;
45 |   const port = apiConfig.port || defaultConfig.port || locationPort;
46 | 
47 |   return new Arweave({
48 |     ...apiConfig,
49 |     host,
50 |     protocol,
51 |     port,
52 |   });
53 | };
54 | 
55 | if (typeof globalThis === "object") {
56 |   globalThis.Arweave = Arweave;
57 | } else if (typeof self === "object") {
58 |   self.Arweave = Arweave;
59 | }
60 | 
61 | export * from "./common";
62 | export default Arweave;
63 | 


--------------------------------------------------------------------------------
/src/web/net-config.ts:
--------------------------------------------------------------------------------
 1 | export interface NetConfig {
 2 |   protocol: string;
 3 |   host: string;
 4 |   port?: number;
 5 | }
 6 | 
 7 | /** exhaustive localhost testing */
 8 | const isLocal = (protocol: string, hostname: string) => {
 9 |   const regexLocalIp = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
10 | 
11 |   const split = hostname.split(".");
12 |   const tld = split[split.length - 1]; // check if subdomain on the localhost
13 | 
14 |   const localStrings = ["localhost", "[::1]"];
15 | 
16 |   return (
17 |     localStrings.includes(hostname) ||
18 |     protocol == "file" ||
19 |     localStrings.includes(tld) ||
20 |     !!hostname.match(regexLocalIp) ||
21 |     !!tld.match(regexLocalIp)
22 |   );
23 | };
24 | 
25 | /** simplified tests for ip addresses */
26 | const isIpAdress = (host: string) => {
27 |   // an IPv6 location.hostname (and only IPv6 hostnames) must be surrounded by square brackets
28 |   const isIpv6 = host.charAt(0) === "[";
29 |   // Potential speed-up for IPv4 detection:
30 |   // the tld of a domain name cannot be a number (IDN location.hostnames appear to be converted, needs further clarification)
31 |   const regexMatchIpv4 =
32 |     /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
33 | 
34 |   return !!host.match(regexMatchIpv4) || isIpv6;
35 | };
36 | 
37 | export const getDefaultConfig = (protocol: string, host: string): NetConfig => {
38 |   // If we're running in what looks like a local dev environment
39 |   // then default to using arweave.net
40 |   if (isLocal(protocol, host)) {
41 |     return {
42 |       protocol: "https",
43 |       host: "arweave.net",
44 |       port: 443,
45 |     };
46 |   }
47 | 
48 |   //check if hostname is an IP address before removing first subdomain
49 |   if (!isIpAdress(host)) {
50 |     let split = host.split(".");
51 |     if (split.length >= 3) {
52 |       split.shift();
53 |       const parentDomain = split.join(".");
54 |       return {
55 |         protocol,
56 |         host: parentDomain,
57 |       };
58 |     }
59 |   }
60 | 
61 |   // there are 2 potential garbage returns here:
62 |   // a non-GW ip address & a non-GW hostname without ArNS. garbage in, garbage out.
63 |   // they should be overridden with user inputs in apiConfig.
64 |   // otherwise we have a valid ip based GW address.
65 |   return {
66 |     protocol,
67 |     host,
68 |   };
69 | };
70 | 


--------------------------------------------------------------------------------
/test/_arweave.ts:
--------------------------------------------------------------------------------
 1 | import Arweave from "../src/common/common";
 2 | import NodeCryptoDriver from "../src/common/lib/crypto/node-driver";
 3 | import { ApiConfig } from "../src/common/lib/api";
 4 | 
 5 | Arweave.crypto = new NodeCryptoDriver();
 6 | 
 7 | export function initInstance(config: ApiConfig) {
 8 |   return new Arweave(config);
 9 | }
10 | 
11 | const defaultInstance = initInstance({
12 |   host: "arweave.net",
13 |   protocol: "https",
14 |   port: 443,
15 |   logging: false,
16 |   timeout: 30000,
17 | });
18 | 
19 | export function arweaveInstance() {
20 |   return defaultInstance;
21 | }
22 | 
23 | export function arweaveInstanceDirectNode() {
24 |   console.log(
25 |     `in function ${arweaveInstanceDirectNode.name} : 'arweave.net' is not a direct node`
26 |   );
27 |   return initInstance({
28 |     host: "arweave.net",
29 |     protocol: "https",
30 |     port: 443,
31 |     logging: false,
32 |     timeout: 15000,
33 |   });
34 | }
35 | 


--------------------------------------------------------------------------------
/test/api.ts:
--------------------------------------------------------------------------------
 1 | import { expect } from "chai";
 2 | import "mocha";
 3 | import { arweaveInstance } from "./_arweave";
 4 | const arweave = arweaveInstance();
 5 | 
 6 | const idBinary = "zvpvIoP7TDkf9S3SW6MsxoIvZAMonwAFO_ISSAxBm1A"; //a jpeg image
 7 | const idText = "Lv_IaSYGMma5vvD3jmkwl51ELchQ75rNfukltJw3Hh8"; //html page, utf-8
 8 | const idJson = "t4B9Dufi14vTWl7nS9eiFfxojeNvmNzBwoUZ0IQMar8"; //json file
 9 | 
10 | describe("API", function () {
11 |   this.timeout(10_000);
12 | 
13 |   it("should GET json requests", async function () {
14 |     const res = await arweave.api.get(idJson);
15 |     expect(res.ok).true;
16 |     expect(res.bodyUsed).true;
17 |     expect(res.headers.get("content-type")).eq(
18 |       "application/json; charset=utf-8"
19 |     );
20 |     expect(res.headers.get("content-type")).eq(
21 |       "application/json; charset=utf-8"
22 |     );
23 |     expect(typeof res.data).eq("object");
24 |     expect(res.data).not.instanceof(ArrayBuffer);
25 |   });
26 |   it('should GET binary requests, using "axios" responseType', async function () {
27 |     const res = await arweave.api.get(idBinary, {
28 |       responseType: "arraybuffer",
29 |     });
30 |     expect(res.ok, `!res.ok status: ${res.status}`).true;
31 |     expect(res.bodyUsed, `!res.bodyUsed status: ${res.status}`).true;
32 |     expect(res.headers.get("content-type")).eq("image/jpeg");
33 |     expect(typeof res.data).eq("object");
34 |     expect(res.data).instanceof(ArrayBuffer);
35 |   });
36 |   it("should GET text requests", async function () {
37 |     const res = await arweave.api.get(idText);
38 |     expect(res.ok).true;
39 |     expect(res.bodyUsed).true;
40 |     expect(res.headers.get("content-type")).eq("text/html; charset=utf-8");
41 |     expect(typeof res.data).eq("string");
42 |   });
43 | 
44 |   it("should POST GQL queries return a list of results", async function () {
45 |     const txs = (
46 |       await arweave.api.post("/graphql", {
47 |         query: `
48 |       {
49 |         transactions(
50 |           tags: [
51 |             { name: "App-Name", values: ["CommunityXYZ"] }
52 |           ]
53 |         ) {
54 |           edges {
55 |             node {
56 |               id
57 |             }
58 |           }
59 |         }
60 |       }`,
61 |       })
62 |     ).data.data.transactions.edges;
63 | 
64 |     expect(txs).to.be.an("array");
65 |     expect(txs.length).to.be.greaterThan(0);
66 |   });
67 | });
68 | 


--------------------------------------------------------------------------------
/test/blocks.ts:
--------------------------------------------------------------------------------
 1 | import * as chai from "chai";
 2 | import { arweaveInstance } from "./_arweave";
 3 | 
 4 | const expect = chai.expect;
 5 | 
 6 | const arweave = arweaveInstance();
 7 | 
 8 | describe("Blocks", function () {
 9 |   this.timeout(50000);
10 | 
11 |   const blockTypeFields: string[] = [
12 |     "nonce",
13 |     "previous_block",
14 |     "timestamp",
15 |     "last_retarget",
16 |     "diff",
17 |     "height",
18 |     "hash",
19 |     "indep_hash",
20 |     "txs",
21 |     "tx_root",
22 |     "wallet_list",
23 |     "reward_addr",
24 |     "tags",
25 |     "reward_pool",
26 |     "weave_size",
27 |     "block_size",
28 |     "cumulative_diff",
29 |     "hash_list_merkle",
30 |   ];
31 | 
32 |   it("should get block's data by its indep_hash", async function () {
33 |     // given
34 |     // https://arweave.net/block/hash/zbUPQFA4ybnd8h99KI9Iqh4mogXJibr0syEwuJPrFHhOhld7XBMOUDeXfsIGvYDp
35 |     const blockIndepHash =
36 |       "zbUPQFA4ybnd8h99KI9Iqh4mogXJibr0syEwuJPrFHhOhld7XBMOUDeXfsIGvYDp";
37 |     const expectedResult = require(`./fixtures/block_${blockIndepHash}.json`);
38 | 
39 |     // when
40 |     const result = (await arweave.blocks.get(blockIndepHash)) as any; // note: any to be able to access object values by keys.
41 | 
42 |     // then
43 |     expect(expectedResult).to.deep.equal(result);
44 |   });
45 | 
46 |   it("should get block's data by its height", async function () {
47 |     // given
48 |     // https://arweave.net/block/height/1000000
49 |     const blockHeight = 1000000;
50 |     const expectedResult = require(`./fixtures/block_height_${blockHeight}.json`);
51 | 
52 |     // when
53 |     const result = (await arweave.blocks.getByHeight(blockHeight)) as any; // note: any to be able to access object values by keys.
54 | 
55 |     // then
56 |     expect(expectedResult).to.deep.equal(result);
57 |   });
58 | });
59 | 


--------------------------------------------------------------------------------
/test/builds.ts:
--------------------------------------------------------------------------------
  1 | import * as chai from "chai";
  2 | 
  3 | const expect = chai.expect;
  4 | 
  5 | let globals = <any>global;
  6 | 
  7 | // The web distro will attach to the browser's global object so we just
  8 | // need to mock a global self object with a subtle crypto stub
  9 | // to make this test work.
 10 | if (!globals.crypto) {
 11 |   globals.crypto = {
 12 |     subtle: {
 13 |       generateKey: async () => {},
 14 |       importKey: async () => {},
 15 |       exportKey: async () => {},
 16 |       digest: async () => {},
 17 |       sign: async () => {},
 18 |     },
 19 |   };
 20 | 
 21 |   globals.self = global;
 22 | }
 23 | 
 24 | describe("Node distribution", function () {
 25 |   it("should initialize from compiled node dist", async function () {
 26 |     const dist = require("../node");
 27 | 
 28 |     expect(dist).to.be.a("function");
 29 | 
 30 |     expect(dist.init).to.be.a("function");
 31 | 
 32 |     const instance = dist.init({ host: "arweave.net", logging: false });
 33 | 
 34 |     expect(instance.api.constructor.name).to.equal("Api");
 35 | 
 36 |     expect(instance.transactions.constructor.name).to.equal("Transactions");
 37 | 
 38 |     expect(instance.wallets.constructor.name).to.equal("Wallets");
 39 | 
 40 |     expect(instance.network.constructor.name).to.equal("Network");
 41 | 
 42 |     expect(instance.crypto.constructor.name).to.equal("NodeCryptoDriver");
 43 | 
 44 |     expect(instance.silo.constructor.name).to.equal("Silo");
 45 |   });
 46 | });
 47 | 
 48 | describe("Web distribution", function () {
 49 |   it("should initialize from web compiled dist", async function () {
 50 |     require("../web");
 51 | 
 52 |     const dist = globals.Arweave;
 53 | 
 54 |     expect(dist).to.be.a("function");
 55 | 
 56 |     expect(dist.init).to.be.a("function");
 57 | 
 58 |     const instance = dist.init({
 59 |       host: "arweave.net",
 60 |       protocol: "https",
 61 |       port: "443",
 62 |       logging: false,
 63 |     });
 64 | 
 65 |     expect(instance.api.constructor.name).to.equal("Api");
 66 | 
 67 |     expect(instance.transactions.constructor.name).to.equal("Transactions");
 68 | 
 69 |     expect(instance.wallets.constructor.name).to.equal("Wallets");
 70 | 
 71 |     expect(instance.network.constructor.name).to.equal("Network");
 72 | 
 73 |     expect(instance.crypto.constructor.name).to.equal("WebCryptoDriver");
 74 | 
 75 |     expect(instance.silo.constructor.name).to.equal("Silo");
 76 |   });
 77 | 
 78 |   it("should initialize from web bundle", async function () {
 79 |     require("../bundles/web.bundle");
 80 | 
 81 |     const dist = globals.Arweave;
 82 | 
 83 |     expect(dist).to.be.a("function");
 84 | 
 85 |     expect(dist.init).to.be.a("function");
 86 | 
 87 |     const instance = dist.init({
 88 |       host: "arweave.net",
 89 |       protocol: "https",
 90 |       port: "443",
 91 |       logging: false,
 92 |     });
 93 | 
 94 |     expect(instance.api.constructor.name).to.equal("Api");
 95 | 
 96 |     expect(instance.transactions.constructor.name).to.equal("Transactions");
 97 | 
 98 |     expect(instance.wallets.constructor.name).to.equal("Wallets");
 99 | 
100 |     expect(instance.network.constructor.name).to.equal("Network");
101 | 
102 |     expect(instance.crypto.constructor.name).to.equal("WebCryptoDriver");
103 | 
104 |     expect(instance.silo.constructor.name).to.equal("Silo");
105 |   });
106 | 
107 |   it("should initialize from minified web bundle", async function () {
108 |     require("../bundles/web.bundle.min");
109 | 
110 |     const dist = globals.Arweave;
111 | 
112 |     expect(dist).to.be.a("function");
113 | 
114 |     expect(dist.init).to.be.a("function");
115 | 
116 |     const instance = dist.init({
117 |       host: "arweave.net",
118 |       protocol: "https",
119 |       port: "443",
120 |       logging: false,
121 |     });
122 | 
123 |     expect(instance).to.be.an("object");
124 |   });
125 | });
126 | 


--------------------------------------------------------------------------------
/test/chunks.ts:
--------------------------------------------------------------------------------
  1 | import * as chai from "chai";
  2 | import { b64UrlToBuffer, bufferTob64Url } from "../src/common/lib/utils";
  3 | import {
  4 |   validatePath,
  5 |   generateTree,
  6 |   generateProofs,
  7 |   computeRootHash,
  8 |   chunkData,
  9 |   MAX_CHUNK_SIZE,
 10 |   MIN_CHUNK_SIZE,
 11 |   intToBuffer,
 12 |   bufferToInt,
 13 | } from "../src/common/lib/merkle";
 14 | import { readFileSync } from "fs";
 15 | import { randomBytes } from "crypto";
 16 | import { arweaveInstance } from "./_arweave";
 17 | 
 18 | const expect = chai.expect;
 19 | 
 20 | const rootB64Url = "t-GCOnjPWxdox950JsrFMu3nzOE4RktXpMcIlkqSUTw";
 21 | const root = b64UrlToBuffer(rootB64Url);
 22 | const pathB64Url =
 23 |   "7EAC9FsACQRwe4oIzu7Mza9KjgWKT4toYxDYGjWrCdp0QgsrYS6AueMJ_rM6ZEGslGqjUekzD3WSe7B5_fwipgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAnH6dASdQCigcL43lp0QclqBaSncF4TspuvxoFbn2L18EXpQrP1wkbwdIjSSWQQRt_F31yNvxtc09KkPFtzMKAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIHiHU9QwOImFzjqSlfxkJJCtSbAox6TbbFhQvlEapSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAA";
 24 | const path = b64UrlToBuffer(pathB64Url);
 25 | 
 26 | const offset = 262143;
 27 | const dataSize = 836907;
 28 | 
 29 | describe("Chunks", function () {
 30 |   this.timeout(10000);
 31 | 
 32 |   const data = readFileSync("./test/rebar3");
 33 | 
 34 |   it("should validate all chunks from 1Mb.bin test file", async function () {
 35 |     // this.timeout(5000);
 36 |     const data = readFileSync("./test/fixtures/1mb.bin");
 37 | 
 38 |     const key = await arweaveInstance().wallets.generate();
 39 |     const tx = await arweaveInstance().createTransaction(
 40 |       { data: data, last_tx: "foo", reward: "1" },
 41 |       key
 42 |     );
 43 | 
 44 |     await tx.prepareChunks(tx.data);
 45 |     const tx_data_root = b64UrlToBuffer(tx.data_root);
 46 |     const results = await Promise.all(
 47 |       tx.chunks!.chunks.map((_, idx) => {
 48 |         const chunk = tx.getChunk(idx, data);
 49 |         return validatePath(
 50 |           tx_data_root,
 51 |           parseInt(chunk.offset),
 52 |           0,
 53 |           parseInt(chunk.data_size),
 54 |           b64UrlToBuffer(chunk.data_path)
 55 |         );
 56 |       })
 57 |     );
 58 |     for (let i = 0; i < results.length; i++) {
 59 |       expect(results[i]).to.be.ok;
 60 |     }
 61 |   });
 62 | 
 63 |   it("should validate all chunks from lotsofdata.bin test file", async function () {
 64 |     // this.timeout(5000);
 65 |     const data = readFileSync("./test/fixtures/lotsofdata.bin");
 66 | 
 67 |     const key = await arweaveInstance().wallets.generate();
 68 |     const tx = await arweaveInstance().createTransaction(
 69 |       { data: data, last_tx: "foo", reward: "1" },
 70 |       key
 71 |     );
 72 | 
 73 |     await tx.prepareChunks(tx.data);
 74 |     const tx_data_root = b64UrlToBuffer(tx.data_root);
 75 |     const results = await Promise.all(
 76 |       tx.chunks!.chunks.map((_, idx) => {
 77 |         const chunk = tx.getChunk(idx, data);
 78 |         return validatePath(
 79 |           tx_data_root,
 80 |           parseInt(chunk.offset),
 81 |           0,
 82 |           parseInt(chunk.data_size),
 83 |           b64UrlToBuffer(chunk.data_path)
 84 |         );
 85 |       })
 86 |     );
 87 |     for (let i = 0; i < results.length; i++) {
 88 |       expect(results[i]).to.ok;
 89 |     }
 90 |   });
 91 | 
 92 |   it("should convert ints to buffers and back up to Number.MAX_SAFE_INTEGER", async function () {
 93 |     this.timeout(20000);
 94 |     // we cant test every number :)
 95 |     for (let i = 0; i < 1024 * 1024; i++) {
 96 |       const buf = intToBuffer(i);
 97 |       const ret = bufferToInt(buf);
 98 |       expect(ret).to.equal(i);
 99 |     }
100 |     for (let i = 0; i < Number.MAX_SAFE_INTEGER; i = i + 93444132157) {
101 |       const buf = intToBuffer(i);
102 |       const ret = bufferToInt(buf);
103 |       expect(ret).to.equal(i);
104 |     }
105 |     expect(Number.MAX_SAFE_INTEGER).to.equal(
106 |       bufferToInt(intToBuffer(Number.MAX_SAFE_INTEGER))
107 |     );
108 |   });
109 | 
110 |   it("should infer the end offset when validating a chunk proof", async function () {
111 |     // this.timeout(5000);
112 |     const key = await arweaveInstance().wallets.generate();
113 |     const data = randomBytes(256 * 1024 * 3 - 128);
114 |     const tx = await arweaveInstance().createTransaction(
115 |       { data: data, last_tx: "foo", reward: "1" },
116 |       key
117 |     );
118 |     await tx.prepareChunks(data);
119 |     const tx_data_root = b64UrlToBuffer(tx.data_root);
120 | 
121 |     const chunk1 = await tx.getChunk(1, data);
122 | 
123 |     // save the correct offset
124 |     const correctEndOffset = parseInt(chunk1.offset);
125 |     // use a valid but different offset (this is the minimum valid offset, since the the chunk is 256*1024)
126 |     const validatedChunk = await validatePath(
127 |       tx_data_root,
128 |       correctEndOffset - 256 * 1024 + 1,
129 |       0,
130 |       parseInt(chunk1.data_size),
131 |       b64UrlToBuffer(chunk1.data_path)
132 |     );
133 | 
134 |     if (validatedChunk) {
135 |       expect(validatedChunk.offset).to.equal(correctEndOffset);
136 |     }
137 |     expect(validatedChunk).to.be.ok;
138 |   });
139 | 
140 |   it("should fail to validate a chunk proof when the offset is not within the chunk", async function () {
141 |     // this.timeout(5000);
142 |     const key = await arweaveInstance().wallets.generate();
143 |     const data = randomBytes(256 * 1024 + 256 * 50);
144 |     const tx = await arweaveInstance().createTransaction(
145 |       { data: data, last_tx: "foo", reward: "1" },
146 |       key
147 |     );
148 |     await tx.prepareChunks(data);
149 |     const tx_data_root = b64UrlToBuffer(tx.data_root);
150 |     const chunk1 = await tx.getChunk(1, data);
151 | 
152 |     // offset '4' is in chunk0, not chunk1, so invalid.
153 |     const validatedChunk = await validatePath(
154 |       tx_data_root,
155 |       4,
156 |       0,
157 |       parseInt(chunk1.data_size),
158 |       b64UrlToBuffer(chunk1.data_path)
159 |     );
160 |     expect(validatedChunk).to.be.equal(false);
161 |   });
162 | 
163 |   it("should infer the chunk size when validating a chunk proof", async function () {
164 |     // this.timeout(5000);
165 |     const key = await arweaveInstance().wallets.generate();
166 |     const data = randomBytes(256 * 1024 * 2 - 128);
167 |     const tx = await arweaveInstance().createTransaction(
168 |       { data: data, last_tx: "foo", reward: "1" },
169 |       key
170 |     );
171 |     await tx.prepareChunks(data);
172 |     const tx_data_root = b64UrlToBuffer(tx.data_root);
173 |     const chunk1 = await tx.getChunk(1, data);
174 | 
175 |     const correctEndOffset = parseInt(chunk1.offset);
176 | 
177 |     // Give it a wrong, but valid offset.
178 | 
179 |     const validatedChunk = await validatePath(
180 |       tx_data_root,
181 |       correctEndOffset - 10,
182 |       0,
183 |       parseInt(chunk1.data_size),
184 |       b64UrlToBuffer(chunk1.data_path)
185 |     );
186 |     if (validatedChunk) {
187 |       expect(validatedChunk.chunkSize).to.equal(
188 |         b64UrlToBuffer(chunk1.chunk).byteLength
189 |       );
190 |     }
191 |     expect(validatedChunk).to.be.ok;
192 |   });
193 | 
194 |   it("should build a tree with a valid root", async function () {
195 |     const rootNode = await generateTree(data);
196 | 
197 |     expect(bufferTob64Url(rootNode.id)).to.equal(rootB64Url);
198 |   });
199 | 
200 |   it("should build valid proofs from tree", async function () {
201 |     const rootNode = await generateTree(data);
202 |     const proofs = await generateProofs(rootNode);
203 |     expect(bufferTob64Url(proofs[0].proof)).to.equal(pathB64Url);
204 |   });
205 | 
206 |   it("should validate own proofs and reject invalid verification parameters", async function () {
207 |     const rootNode = await generateTree(data);
208 |     const rootHash = await computeRootHash(data);
209 |     const proofs = await generateProofs(rootNode);
210 | 
211 |     type Args = [Uint8Array, number, number, number, Uint8Array];
212 | 
213 |     const testInput: Args = [
214 |       rootHash,
215 |       proofs[0].offset,
216 |       0,
217 |       data.byteLength,
218 |       proofs[0].proof,
219 |     ];
220 | 
221 |     const didValidate = await validatePath.apply(validatePath, testInput);
222 | 
223 |     expect(didValidate).to.ok;
224 | 
225 |     const invalidInputA: Args = [
226 |       rootHash,
227 |       proofs[0].offset,
228 |       0,
229 |       data.byteLength,
230 |       randomBytes(256), // invalid proof
231 |     ];
232 | 
233 |     const didValidateWithInvalidInputA = await validatePath.apply(
234 |       validatePath,
235 |       invalidInputA
236 |     );
237 | 
238 |     expect(didValidateWithInvalidInputA).to.equal(false);
239 | 
240 |     const invalidInputB: Args = [
241 |       randomBytes(32), // invalid root node
242 |       proofs[0].offset,
243 |       0,
244 |       data.byteLength,
245 |       proofs[0].proof,
246 |     ];
247 | 
248 |     const didValidateWithInvalidInputB = await validatePath.apply(
249 |       validatePath,
250 |       invalidInputB
251 |     );
252 | 
253 |     expect(didValidateWithInvalidInputB).to.equal(false);
254 |   });
255 | 
256 |   it("should validate a valid data path against a valid data root", async function () {
257 |     expect(await validatePath(root, offset, 0, dataSize, path)).to.be.ok;
258 |   });
259 | 
260 |   it("should reject invalid root", async function () {
261 |     const invalidRoot = b64UrlToBuffer(
262 |       "lX5K7gAUlIMt2hYYkoXVrjmVMnnjF6P6c5sov6mPqCm"
263 |     );
264 |     expect(await validatePath(invalidRoot, offset, 0, dataSize, path)).to.equal(
265 |       false
266 |     );
267 |   });
268 | 
269 |   it("should reject invalid path", async function () {
270 |     const invalidPath = b64UrlToBuffer(
271 |       "VUSdubFW2cTvvr5s6VGSU2oxftxma77bRvils5fqikdj4qnP8xEG2HQQKyZeZGW5b9WNFlmDRBTyTJ8NnHQD3tLHc2VwctfdrXbkUODANATrOP6p8RNlSNT50jMKdSKymG0M8yv9g3LCoPB4QXawcRP6q9X5u1nnI7GFMlyuxoC4p21zWi7v68f1r73wXHWdH76VgCNbt0lEUDg1pW8sYvi6pdwAdTNdQIcAhqkO2JBJ2Kwtlxemj4E6NMKg9wi2pQHt6CKlX3T5rQdVd0Tt8czxrkOUBAW9J8XGK9iSLoj4LWZl3z4cKIFyZH7iUgIzCu9Id8jIoO93lVdgaUa4RW"
272 |     );
273 | 
274 |     expect(await validatePath(root, offset, 0, dataSize, invalidPath)).to.equal(
275 |       false
276 |     );
277 |   });
278 | 
279 |   it("should split multiples of MAX_CHUNK_SIZE with one extra zero-length chunk", async function () {
280 |     const data = randomBytes(MAX_CHUNK_SIZE * 4);
281 |     const chunks = await chunkData(data);
282 |     expect(chunks.length).to.equal(5);
283 |     chunks.forEach((chunk, idx) => {
284 |       if (idx < 4) {
285 |         expect(chunk.maxByteRange - chunk.minByteRange).to.equal(
286 |           MAX_CHUNK_SIZE
287 |         );
288 |       } else {
289 |         expect(chunk.maxByteRange - chunk.minByteRange).to.equal(0);
290 |       }
291 |     });
292 |   });
293 | 
294 |   it("should adjust the last two chunks to avoid chunks under MIN_CHUNK_SIZE", async function () {
295 |     const data = randomBytes(MAX_CHUNK_SIZE + MIN_CHUNK_SIZE - 1);
296 |     const chunks = await chunkData(data);
297 |     expect(chunks.length).to.equal(2);
298 |     const chunk0size = chunks[0].maxByteRange - chunks[0].minByteRange;
299 |     const chunk1size = chunks[1].maxByteRange - chunks[1].minByteRange;
300 |     expect(chunk0size).to.be.gt(MIN_CHUNK_SIZE);
301 |     expect(chunk1size).to.be.gte(MIN_CHUNK_SIZE);
302 |     expect(chunk0size).to.be.equal(chunk1size + 1);
303 |   });
304 | });
305 | 


--------------------------------------------------------------------------------
/test/common/lib/utils.ts:
--------------------------------------------------------------------------------
 1 | import * as chai from "chai";
 2 | import * as utils from "../../../src/common/lib/utils";
 3 | 
 4 | const expect = chai.expect;
 5 | 
 6 | describe("Common Utils", function () {
 7 |   describe("b64UrlDecode()", () => {
 8 |     for (const testCase of b64UrlDecodeValues()) {
 9 |       it(`should throw an error on non-strings: ${testCase.value}`, () => {
10 |         try {
11 |           // @ts-ignore Ignoring to test non-strings
12 |           utils.b64UrlDecode(testCase.value);
13 |         } catch (error) {
14 |           expect(error).to.have.property("message");
15 |           expect(error).to.have.property("cause");
16 |           expect((error as Error).message).to.be.string(testCase.message);
17 |         }
18 |       });
19 |     }
20 |   });
21 | 
22 |   describe("b64UrlEncode()", () => {
23 |     for (const testCase of b64UrlEncodeValues()) {
24 |       it(`should throw an error on non-strings: ${testCase.value}`, () => {
25 |         try {
26 |           // @ts-ignore Ignoring to test non-strings
27 |           utils.b64UrlEncode(testCase.value);
28 |         } catch (error) {
29 |           expect(error).to.have.property("message");
30 |           expect(error).to.have.property("cause");
31 |           expect((error as Error).message).to.be.string(testCase.message);
32 |         }
33 |       });
34 |     }
35 |   });
36 | });
37 | 
38 | function b64UrlDecodeValues() {
39 |   return [
40 |     { value: false, message: "Failed to decode string" },
41 |     { value: undefined, message: "Failed to decode string" },
42 |     { value: null, message: "Failed to decode string" },
43 |     { value: true, message: "Failed to decode string" },
44 |     { value: {}, message: "Failed to decode string" },
45 |     { value: { test: "hello" }, message: "Failed to decode string" },
46 |     { value: [], message: "Failed to decode string" },
47 |     { value: ["1"], message: "Failed to decode string" },
48 |   ];
49 | }
50 | 
51 | function b64UrlEncodeValues() {
52 |   return [
53 |     { value: false, message: "Failed to encode string" },
54 |     { value: undefined, message: "Failed to encode string" },
55 |     { value: null, message: "Failed to encode string" },
56 |     { value: true, message: "Failed to encode string" },
57 |     { value: {}, message: "Failed to encode string" },
58 |     { value: { test: "hello" }, message: "Failed to encode string" },
59 |     { value: [], message: "Failed to encode string" },
60 |     { value: ["1"], message: "Failed to encode string" },
61 |   ];
62 | }
63 | 


--------------------------------------------------------------------------------
/test/encryption.ts:
--------------------------------------------------------------------------------
 1 | import * as chai from "chai";
 2 | import * as crypto from "crypto";
 3 | import { arweaveInstance } from "./_arweave";
 4 | 
 5 | const expect = chai.expect;
 6 | 
 7 | const arweave = arweaveInstance();
 8 | describe("Encryption", function () {
 9 |   this.timeout(10000);
10 |   it("should encrypt and decrypt using key round trip", async function () {
11 |     const text = "some data to encrypt";
12 | 
13 |     const data = Buffer.from(text);
14 | 
15 |     const key = crypto.randomBytes(32);
16 | 
17 |     const encrypted = await arweave.crypto.encrypt(data, key);
18 | 
19 |     expect(encrypted).to.have.lengthOf(48);
20 | 
21 |     const decrypted = await arweave.crypto.decrypt(encrypted, key);
22 | 
23 |     expect(decrypted.toString()).to.equal(data.toString());
24 |     expect(decrypted.toString()).to.equal(text);
25 |   });
26 | 
27 |   it("should encrypt and decrypt using passphrase round trip", async function () {
28 |     const text = "some data to encrypt";
29 | 
30 |     const data = Buffer.from(text);
31 | 
32 |     const key = "super-secret-password";
33 | 
34 |     const encrypted = await arweave.crypto.encrypt(data, key);
35 | 
36 |     expect(encrypted).to.have.lengthOf(48);
37 | 
38 |     const decrypted = await arweave.crypto.decrypt(encrypted, key);
39 | 
40 |     expect(decrypted.toString()).to.equal(data.toString());
41 | 
42 |     expect(decrypted.toString()).to.equal(text);
43 |   });
44 | 
45 |   it("should encrypt and decrypt using passphrase round trip and a salt", async function () {
46 |     const text = "some data to encrypt";
47 | 
48 |     const data = Buffer.from(text);
49 | 
50 |     const key = "super-secret-password";
51 | 
52 |     const encrypted = await arweave.crypto.encrypt(data, key, "hello arweave");
53 | 
54 |     expect(encrypted).to.have.lengthOf(48);
55 | 
56 |     const decrypted = await arweave.crypto.decrypt(
57 |       encrypted,
58 |       key,
59 |       "hello arweave"
60 |     );
61 | 
62 |     expect(decrypted.toString()).to.equal(data.toString());
63 | 
64 |     expect(decrypted.toString()).to.equal(text);
65 |   });
66 | });
67 | 


--------------------------------------------------------------------------------
/test/fixtures/1mb.bin:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/ArweaveTeam/arweave-js/39d8ef2799a2c555e6f9b0cc6adabd7cbc411bc8/test/fixtures/1mb.bin


--------------------------------------------------------------------------------
/test/fixtures/arweave-keyfile-fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw.json:
--------------------------------------------------------------------------------
1 | {"kty":"RSA","e":"AQAB","n":"kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzOc6W9bHRrlZ_eDhWO0OdfaRalgLeuYCXx9DV-n1djeerKHdFo2ZAjRv5WjL_b4IxbQnPFnHOSNHVg49yp7CUWUgDQOKtylt3x0YENIW37RQPZJ-Fvyk7Z0jvibj2iZ0K3K8yNenJ4mWswyQdyPaJcbP6AMWvUWT62giWHa3lDgBZNhXqakkYdoaM157kRUfrZDRSWXbilr-4f40PQF1DV5YSj81Fl72N7j30r0vL1yoj0bZn74WRquQ5j3QsiAA-SzhAxpecWniljj1wvZlyIgJpCYCvCrKZCcCq_JW1nYP6to5YM3fAqcYRadbTNdQ3oH0Sjy8vyvLYNe48Ur_TFTTAwZxJV70BgZfkJ00BxiNTb8EhSchejabeExUkCNlOrQsCHDxOig-WXOrjX5fb4NeR3jedeYWbhN922ORLuEwVLeyjc7hBfQXU2-mYraFAVTc0QST201P7rRu-UGtZ4gRavFuOvAyYrMimFVW9dTwTrcYXFK2zKCEv2aRRQAHZanKjBv0Xq9m3BqvxKy-_3Cj1O6ft7FT21drPoDRDzfnkyOeUjlXzRJzn-iQ0nqgHAQr9WBWPzLEcaTFpw3KmwDYHW_6JOkUWDyMW9anuS8cyqt_2O29SK_rHHuucD8","d":"Bq6C13vknF6Ln1MrKI3Ilq-83IuSvQpe7NRAuT69u7i8sv4XwsHOJAV7qpGvp37NXT5R1G3ehEZ6qoSxJbcN4IVrQMKq5mMiCY6DBv5C6fHZGoNZE2gxXV7uydf8I1Vnnw4xYIj5oyC_5nSJlFAc3U-MAcbkfJuvrhGxLVGsrqHmjoqQPGG_hTxCjuAOlOBs-9cmWTujbm1-OyjaAQwfTbXYbUy7hC1TCE05SxLPmTUwaJxY8AXJigpbYqjpWsc15HjRlv38A44tEnIwHjHda_3JpmbSsffSslRej2vPCCgSPHHyLeO437Nc7DraogKStugisRfhoe89yY4QSBVXbtvWJeF1LxPtg8uPtfoKt3wdnGWKaLDqYNDeA3AckbKrPp50kHEMR7hnNHq3lAoMAXTz8BbI_Czo5n9-f9DQpvJC8kpM7gCGG8DptA2nTPuQG02MOx7AsEE99EN8ltD_dA0l0MgG7CDsaQC5IPMHcRs1wyvZMBGA8fvZdURiVv9YSnCddndXjBJuetf5KdES-1EmrSLzo5hobQbkc7dkHMS5dmLm5YtK-aLYXZi31nRIGkA1UfZhf2TtfRxP6uKlRT106EtDX1rT3RgsLqg06y_xoS4SFQ6u-8wHqgbIHBmKdsWVtBkC4SGUlYDPgrJe2V9CaPFAcoSDFK1D_IPvU2U","p":"zhyauK0ISMg9Wk7iZK2ifW2cj5KSr-_k_Em0nfUrtsaKp0iXOsCKxOH__zcAVj7oLxaEP2l8i2Pdi7CzhVRiqrjgVwA1JuLPgxtryuVqwRCYbO_Y_2Xutk404iKmDX6_LQ7BeIzUI8GD6rQCeLq1HBd3Yvok9bPvbbMZjFtUmBf_Kfb0cYP8tewMmV_USGpqwJXdB_4aHF6qBrZBtd1KLoO1E7MNkAPk7pbiA1-KO2Xa6oY6fy2pztNe1MO7tz_QywqlDdymfhnpk41arY3A6US-ZFXOinqXKdh9uEfxiyZwzaLMNWVKEaWxRxbqSUOLV3uZS05N6B2ZqvOp2h9Csw","q":"tdHmYcbJpZ0U27d_j0YvUeb6sdcuFLg2vmDgKwUamC5_vvV41LSm8LIkLuY2DAN5MKg6-HTWetKWQhgbCIbubLtX5164MFrES1YVZI-aggrYohhH8MRn_hwMZZQndv9H07WUVgQ1GZ2ZDvhO7XxPDIXyBNQ46x6V1AikHtyTmqARjgrkgs-1XN55S9rhcffixOlJ-egIDPVei_Z6YNdSpLlhtiqHOp_lX37mrPSYGxjgIZVxevpPgBhVFlnAMqC2iRd87XupmWgiluSos8I7i1VESBzwlFZGk5hRb8och4zwmDBDwx65XWngg6LneSXTWcKjKKGM2NnX7wHrZBuyRQ","dp":"Gfo49fW5CZNTSEKQ_id0R2K9TMsoecw-jB2uCgqQi-TSLOtVRC5oTxA896my_SvIj8bCvEtLSzY3AhgvSCqulN3gSJbaHCCSDvAx0czAe7zfuTsxml76izeoKqg7TZAgAEnP0KXPRwJo4ff2J8lAcl3yyiLE7cLT9nuQSMRqERFVM7DQdk4wV618mQge9VGUStmYlh1MpS65N0dZWNafNuWauPTkTLZw8DFMIyizf3EC-nQYg1b6A_tYBHD3A82jPzQEQY8B3PrfGZ3DRASNv9jONk8qTQHOc5O5pLRMmUErDn_qRQCTKU483bzhooJE2a3WUEt6Pjsc1xMG4Vr3SQ","dq":"cCVai36Yi-06m1cwd8fbkhH9GUpXIvKI2Z5ZRk-smqc7piY0dEZFHftS9BaMyZYu3wM09GDklfdkNLo3mmfXkftv-cbjpvelUa50HYWx0HouKrT9UpVia0sTnmfme7BztjKunuuTcQxTBvfDfxoIi_nmUHIx9Vv1IEaALITzChGnIky3q7O_8ttKR65nFevG1JvsRBeJN6z0tzG9RBQr5mxtx3Wt2Uwcp21XjOCFHVmXjT9nMmpINQNNIC8VrGSSkjaJmNWIw5WGmDnLkKzCG2vpZO1suqIIgCsYN_Ka7ETTdZt3gFdoECUpFSiay4-4MAospvgWLv8XAFXXwfSPXQ","qi":"n-R81MpbwfWfqRSVgD8nDk7D8zlJ-tpMaojfTwNNqDt34Cr-BpMjxaQyEfMnzOd2dY4OV0rKhd29DIuwFEb2UERHdVWF3gM8f2byYGj4357CRkiwq6I050bUxd1ODgAXjVGNpOK_fmaNHDWfe5v3wVIcCmwH0mJxEu9kuz7fr9TJNxGJBGUphpGS6NQZDCbDXg9-FPafMeNV-Jdo0NQaKMwm8uZyW7YGSNpUXYnksrWt4Fa-B9H2KoC4PPSWESPxNooXdxK7Y0J1KbzNyrUmOl4dT6p_oFKcU-1unuDCZ11e6EmMKyUGjpDzTIAZ2XxmyWUJ06yzEw7oLo8noiCE_Q"}


--------------------------------------------------------------------------------
/test/fixtures/signed_v2_tx.json:
--------------------------------------------------------------------------------
1 | {"format":2,"id":"FxgiSM3JOAsjnZF-Yzv2z7h-Io4K6GmCarhQ0qAUL6I","last_tx":"","owner":"kmM4O08BJB85RbxfQ2nkka9VNO6Czm2Tc_IGQNYCTSXRzOc6W9bHRrlZ_eDhWO0OdfaRalgLeuYCXx9DV-n1djeerKHdFo2ZAjRv5WjL_b4IxbQnPFnHOSNHVg49yp7CUWUgDQOKtylt3x0YENIW37RQPZJ-Fvyk7Z0jvibj2iZ0K3K8yNenJ4mWswyQdyPaJcbP6AMWvUWT62giWHa3lDgBZNhXqakkYdoaM157kRUfrZDRSWXbilr-4f40PQF1DV5YSj81Fl72N7j30r0vL1yoj0bZn74WRquQ5j3QsiAA-SzhAxpecWniljj1wvZlyIgJpCYCvCrKZCcCq_JW1nYP6to5YM3fAqcYRadbTNdQ3oH0Sjy8vyvLYNe48Ur_TFTTAwZxJV70BgZfkJ00BxiNTb8EhSchejabeExUkCNlOrQsCHDxOig-WXOrjX5fb4NeR3jedeYWbhN922ORLuEwVLeyjc7hBfQXU2-mYraFAVTc0QST201P7rRu-UGtZ4gRavFuOvAyYrMimFVW9dTwTrcYXFK2zKCEv2aRRQAHZanKjBv0Xq9m3BqvxKy-_3Cj1O6ft7FT21drPoDRDzfnkyOeUjlXzRJzn-iQ0nqgHAQr9WBWPzLEcaTFpw3KmwDYHW_6JOkUWDyMW9anuS8cyqt_2O29SK_rHHuucD8","tags":[],"target":"","quantity":"0","data":"","data_size":"2883584","data_tree":[],"data_root":"3mSWTJfNIRuBKkirYk4Eq-6GnKqzgEcYKbgTnLp1NhQ","reward":"100000000000000","signature":"FeFDOzBxHFRwbmwXVHJFxKM6hS4_8VHupHdZpTmsOZPxqcHJAOrbFzhWJ2uHCjNgWptm7HRqbtaQY8YmlhuPOpHY6zRaSLuvFd7hOePhiQGOo7Sg2txoj4ANdN2iud97Z8AOfWaqQog8jbjxkNZfgSQgsH0Tq-zpslELyQLzYQ5nQHu4gdAJlxy8oyWF4HKxvIc1YF2iW5UiTcfHBoGLnyeveaN1bUhN-HX5JL6JbmU-jT0Msf2hnnZ_u3kjPWy20qvhCBqHjTNlh4e0R-bqcszIonxyXMXB717DxJTvnv9uAKoOA-9BmxeC9_ZBKHevBUkRunQO9KK_SpS91ozsm0vc4km77zTEJNlqTBCjqNmDWQ3ptbuar4qo9SakXjLbtGpm2bSBc0qzMe4Bjh06o1KemSSD5HiNYel_7BusKZNiczDornLkaHkc7Ud1FdAUldXEHNhjcADkQIDptCVF0kQen_WR1dA6Y_n9DRdwtFqbAFKOsZ5u1GGMi-8HZBTP6pvDbg_gIC_W5RG97LVkWIeXLJx7G39mSQBuc840RVFQubwn7_EFpSPIb3cgPeNG7B3vCR9QXvII5PmpgYuplFcrj2x2iJQhVWDHFJxpoYBCc0nafv2uShxikQ8UvLa4OopkODHhHHJ6aCC2Fol6XvI_UM2io7icxLi0KCqtlh8"}
2 | 


--------------------------------------------------------------------------------
/test/fixtures/smartweave-contracts/token-pst.js:
--------------------------------------------------------------------------------
 1 | 
 2 | export function handle (state, action) {
 3 |   const balances = state.balances
 4 |   const input = action.input
 5 |   const caller = action.caller
 6 | 
 7 |   if (input.function === 'transfer') {
 8 |     const target = input.target
 9 |     const qty = input.qty
10 | 
11 |     if (!Number.isInteger(qty)) {
12 |       throw new ContractError('Invalid value for "qty". Must be an integer')
13 |     }
14 | 
15 |     if (!target) {
16 |       throw new ContractError('No target specified')
17 |     }
18 | 
19 |     if (qty <= 0 || caller === target) {
20 |       throw new ContractError('Invalid token transfer')
21 |     }
22 | 
23 |     if (balances[caller] < qty) {
24 |       throw new ContractError(`Caller balance not high enough to send ${qty} token(s)!`)
25 |     }
26 | 
27 |     // Lower the token balance of the caller
28 |     balances[caller] -= qty
29 |     if (target in balances) {
30 |       // Wallet already exists in state, add new tokens
31 |       balances[target] += qty
32 |     } else {
33 |       // Wallet is new, set starting balance
34 |       balances[target] = qty
35 |     }
36 | 
37 |     return { state }
38 |   }
39 | 
40 |   if (input.function === 'balance') {
41 |     const target = input.target
42 |     const ticker = state.ticker
43 | 
44 |     if (typeof target !== 'string') {
45 |       throw new ContractError('Must specificy target to get balance for')
46 |     }
47 | 
48 |     if (typeof balances[target] !== 'number') {
49 |       throw new ContractError('Cannnot get balance, target does not exist')
50 |     }
51 | 
52 |     return { result: { target, ticker, balance: balances[target] } }
53 |   }
54 | 
55 |   throw new ContractError(`No function supplied or function not recognised: "${input.function}"`)
56 | }
57 | 


--------------------------------------------------------------------------------
/test/fixtures/smartweave-contracts/token-pst.json:
--------------------------------------------------------------------------------
1 | {
2 |   "ticker": "EXAMPLE_PST_TOKEN",
3 |   "balances": {
4 |       "uhE-QeYS8i4pmUtnxQyHD7dzXFNaJ9oMK-IM-QPNY6M": 10000000
5 |   }
6 | }


--------------------------------------------------------------------------------
/test/index.ts:
--------------------------------------------------------------------------------
 1 | import * as chai from "chai";
 2 | import Api from "../src/common/lib/api";
 3 | import NodeCryptoDriver from "../src/common/lib/crypto/node-driver";
 4 | import Network from "../src/common/network";
 5 | import Silo from "../src/common/silo";
 6 | import Transactions from "../src/common/transactions";
 7 | import Wallets from "../src/common/wallets";
 8 | 
 9 | import { arweaveInstance, initInstance } from "./_arweave";
10 | 
11 | const expect = chai.expect;
12 | 
13 | const arweave = arweaveInstance();
14 | 
15 | describe("Initialization", function () {
16 |   this.timeout(100000);
17 | 
18 |   it("should have components", function () {
19 |     expect(arweave.api).to.be.an.instanceOf(Api);
20 | 
21 |     expect(arweave.transactions).to.be.an.instanceOf(Transactions);
22 | 
23 |     expect(arweave.wallets).to.be.an.instanceOf(Wallets);
24 | 
25 |     expect(arweave.network).to.be.an.instanceOf(Network);
26 | 
27 |     expect(arweave.crypto).to.be.an.instanceOf(NodeCryptoDriver);
28 | 
29 |     expect(arweave.silo).to.be.an.instanceOf(Silo);
30 |   });
31 | 
32 |   it("should handle default ports", function () {
33 |     expect(initInstance({ port: 1234 }).api.config.port).to.equal(1234);
34 |     expect(initInstance({ protocol: "http" }).api.config.port).to.equal(80);
35 |     expect(initInstance({ protocol: "https" }).api.config.port).to.equal(443);
36 |     expect(initInstance({}).api.config.port).to.equal(80);
37 |   });
38 | 
39 |   it("should handle the default host", function () {
40 |     expect(initInstance({}).api.config.host).to.equal("127.0.0.1");
41 |     expect(
42 |       initInstance({ host: "specific-host.example" }).api.config.host
43 |     ).to.equal("specific-host.example");
44 |   });
45 | });
46 | 
47 | describe("Network Info", function () {
48 |   it("should get network info", async function () {
49 |     this.timeout(10000);
50 | 
51 |     const info = await arweave.network.getInfo();
52 |     const peers = await arweave.network.getPeers();
53 | 
54 |     expect(info).to.be.an("object");
55 | 
56 |     expect(Object.keys(info)).to.contain.members([
57 |       "height",
58 |       "current",
59 |       "release",
60 |       "version",
61 |       "blocks",
62 |     ]);
63 | 
64 |     expect(info.height).to.be.a("number").greaterThan(0);
65 | 
66 |     expect(peers).to.be.an("array");
67 |   });
68 | });
69 | 
70 | // describe('API ', ()=> {
71 | //   it('tests that API can POST requests', async function(){
72 | 
73 | //   })
74 | // })
75 | 


--------------------------------------------------------------------------------
/test/net-config.ts:
--------------------------------------------------------------------------------
 1 | import { expect } from "chai";
 2 | import {} from "mocha";
 3 | import { getDefaultConfig } from "../src/web/net-config";
 4 | 
 5 | describe("Net Config", function () {
 6 |   this.timeout(2_000);
 7 | 
 8 |   it("should detect localhost dev environment", async function () {
 9 |     const file = getDefaultConfig("file", "");
10 |     expect(file.protocol).equal("https");
11 |     expect(file.host).equal("arweave.net");
12 |     expect(file.port).equal(443);
13 |     const localhost = getDefaultConfig("http", "sub.fake.localhost");
14 |     expect(localhost.protocol).equal("https");
15 |     expect(localhost.host).equal("arweave.net");
16 |     expect(localhost.port).equal(443);
17 |     const ipv4 = getDefaultConfig("http", "127.0.0.255");
18 |     expect(ipv4.protocol).equal("https");
19 |     expect(ipv4.host).equal("arweave.net");
20 |     expect(ipv4.port).equal(443);
21 |     const ipv6 = getDefaultConfig("http", "[::1]");
22 |     expect(ipv6.protocol).equal("https");
23 |     expect(ipv6.host).equal("arweave.net");
24 |     expect(ipv6.port).equal(443);
25 |   });
26 | 
27 |   it("should remove first subdomain when appropriate", async () => {
28 |     const subdomain = getDefaultConfig("https", "arnsname.example.com");
29 |     expect(subdomain.protocol).equal("https");
30 |     expect(subdomain.host).equal("example.com");
31 |     expect(subdomain.port).undefined;
32 |     const generated = getDefaultConfig(
33 |       "https",
34 |       "ngnrj2ntoigcuduz2xwowwzaxojwinwb7qugblukljxkhrymozaq.example.com"
35 |     );
36 |     expect(generated.protocol).equal("https");
37 |     expect(generated.host).equal("example.com");
38 |     expect(generated.port).undefined;
39 |   });
40 | 
41 |   it("should let ip addresses pass through", async () => {
42 |     const ipv4 = getDefaultConfig("https", "123.123.123.123");
43 |     expect(ipv4.protocol).equal("https");
44 |     expect(ipv4.host).equal("123.123.123.123");
45 |     expect(ipv4.port).undefined;
46 |     const ipv6 = getDefaultConfig(
47 |       "https",
48 |       "[2001:db8:3333:4444:5555:6666:7777:8888]"
49 |     );
50 |     expect(ipv6.protocol).equal("https");
51 |     expect(ipv6.host).equal("[2001:db8:3333:4444:5555:6666:7777:8888]");
52 |     expect(ipv6.port).undefined;
53 |   });
54 | });
55 | 


--------------------------------------------------------------------------------
/test/rebar3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/ArweaveTeam/arweave-js/39d8ef2799a2c555e6f9b0cc6adabd7cbc411bc8/test/rebar3


--------------------------------------------------------------------------------
/test/silo.ts:
--------------------------------------------------------------------------------
 1 | import * as chai from "chai";
 2 | import { SiloResource } from "../src/common/silo";
 3 | import { arweaveInstance } from "./_arweave";
 4 | 
 5 | const expect = chai.expect;
 6 | 
 7 | const arweave = arweaveInstance();
 8 | 
 9 | describe("Silo", function () {
10 |   this.timeout(10000);
11 |   it("should resolve Silo URIs", async function () {
12 |     const siloResource = await arweave.silo.parseUri("someref.1");
13 | 
14 |     expect(siloResource).to.be.an.instanceOf(SiloResource);
15 | 
16 |     expect(siloResource.getAccessKey()).to.equal("UOJXTuMn08uUlwg3zSnB");
17 | 
18 |     const expectedKey =
19 |       "97e938237d70eda6e88aa0dc3ec14c704505f744c51fbf608e5be1db33c00fb3";
20 | 
21 |     const actualKey = Buffer.from(siloResource.getEncryptionKey()).toString(
22 |       "hex"
23 |     );
24 | 
25 |     expect(actualKey).to.equal(expectedKey);
26 |   });
27 | 
28 |   it("should read and write encrypted data", async function () {
29 |     const siloURI = "some-secret.1";
30 | 
31 |     const wallet = await arweave.wallets.generate();
32 | 
33 |     const siloTransaction = await arweave.createSiloTransaction(
34 |       {
35 |         data: "something",
36 |       },
37 |       wallet,
38 |       siloURI
39 |     );
40 | 
41 |     await arweave.transactions.sign(siloTransaction, wallet);
42 | 
43 |     const verified = await arweave.transactions.verify(siloTransaction);
44 | 
45 |     expect(verified).to.be.a("boolean").and.to.be.true;
46 | 
47 |     expect(siloTransaction.data).to.not.equal("something");
48 | 
49 |     const decrypted = Buffer.from(
50 |       await arweave.silo.readTransactionData(siloTransaction, siloURI)
51 |     );
52 | 
53 |     expect(decrypted.toString()).to.equal("something");
54 | 
55 |     const misdecrypted = await (() => {
56 |       return new Promise((resolve) => {
57 |         arweave.silo
58 |           .readTransactionData(siloTransaction, "wronguri.1")
59 |           .catch((error) => {
60 |             resolve(error);
61 |           });
62 |       });
63 |     })();
64 | 
65 |     expect(misdecrypted)
66 |       .to.be.an.instanceOf(Error)
67 |       .with.property("message")
68 |       .and.match(/^.*failed to decrypt*$/i);
69 |   });
70 | });
71 | 


--------------------------------------------------------------------------------
/test/transactions-external.ts:
--------------------------------------------------------------------------------
 1 | import { expect } from "chai";
 2 | import { arweaveInstance } from "./_arweave";
 3 | 
 4 | const arweave = arweaveInstance();
 5 | 
 6 | const digestRegex = /^[a-z0-9-_]{43}$/i;
 7 | 
 8 | // This transaction was created by using AWS keys
 9 | const externalTransaction = "DheCVCoV7HcZHu5qxQUAlJJRYdfeOkP4oVgFJok2pWg";
10 | 
11 | describe("External Transactions", function () {
12 |   it("should verify transactions created without arweave-js", async function () {
13 |     this.timeout(10000);
14 | 
15 |     // get the transaction created externally
16 |     const transaction = await arweave.transactions.get(
17 |       "DheCVCoV7HcZHu5qxQUAlJJRYdfeOkP4oVgFJok2pWg"
18 |     );
19 | 
20 |     const verified = await arweave.transactions.verify(transaction);
21 | 
22 |     expect(verified).to.be.a("boolean");
23 | 
24 |     expect(verified).to.be.true;
25 |   });
26 | });
27 | 


--------------------------------------------------------------------------------
/test/transactions.ts:
--------------------------------------------------------------------------------
  1 | import * as chai from "chai";
  2 | import * as crypto from "crypto";
  3 | import Transaction from "../src/common/lib/transaction";
  4 | import { arweaveInstance } from "./_arweave";
  5 | 
  6 | const expect = chai.expect;
  7 | 
  8 | const arweave = arweaveInstance();
  9 | // const arweaveDirectNode = arweaveInstanceDirectNode();
 10 | 
 11 | const digestRegex = /^[a-z0-9-_]{43}$/i;
 12 | const liveDataTxid = "s8saLXgvtZ9QO6GJAtVUFS1ROGMlx7IWeOcwGJfqAeo";
 13 | 
 14 | // These are all identical data (test.mp4)
 15 | // const liveDataTxidLarge = "8S0uH6EtRkJOG0b0Q2XsEBSZmbMLnxAwIlNAe_P7ZHg";
 16 | // const liveDataTxidLarge = "P4l6aCN97rt4GoyrpG1oKq3A20B2Y24GqmMLWNZlNIk"
 17 | // const liveDataTxidLarge = "KDKSOaecDl_IM4E0_0XiApwdrElvb9TnwOzeHt65Sno";
 18 | const liveDataTxidLarge = "fvImVd2Lk5lWe0h__qHqMa0iOOsZ9ebzMQy5uQI3HM8";
 19 | 
 20 | describe("Transactions", function () {
 21 |   this.timeout(30000);
 22 | 
 23 |   it("should create and sign data transactions", async function () {
 24 |     const wallet = await arweave.wallets.generate();
 25 | 
 26 |     const transaction = await arweave.createTransaction(
 27 |       { data: "test" },
 28 |       wallet
 29 |     );
 30 | 
 31 |     transaction.addTag("test-tag-1", "test-value-1");
 32 |     transaction.addTag("test-tag-2", "test-value-2");
 33 |     transaction.addTag("test-tag-3", "test-value-3");
 34 | 
 35 |     expect(transaction).to.be.an.instanceOf(Transaction);
 36 | 
 37 |     expect(transaction.get("data")).to.equal("dGVzdA");
 38 | 
 39 |     expect(transaction.last_tx).to.match(/^[a-z0-9-_]{64}$/i);
 40 | 
 41 |     expect(transaction.reward).to.match(/^[0-9]+$/);
 42 | 
 43 |     await arweave.transactions.sign(transaction, wallet);
 44 | 
 45 |     expect(transaction.signature).to.match(/^[a-z0-9-_]+$/i);
 46 | 
 47 |     expect(transaction.id).to.match(digestRegex);
 48 | 
 49 |     const verified = await arweave.transactions.verify(transaction);
 50 | 
 51 |     expect(verified).to.be.a("boolean");
 52 | 
 53 |     expect(verified).to.be.true;
 54 | 
 55 |     //@ts-ignore
 56 |     // Needs ts-ignoring as tags are readonly so chaning the tag like this isn't
 57 |     // normally an allowed operation, but it's a test, so...
 58 |     transaction.tags[1].value = "dGVzdDI";
 59 | 
 60 |     const verifiedWithModififedTags = await arweave.transactions.verify(
 61 |       transaction
 62 |     );
 63 | 
 64 |     expect(verifiedWithModififedTags).to.be.a("boolean");
 65 | 
 66 |     expect(verifiedWithModififedTags).to.be.false;
 67 |   });
 68 | 
 69 |   it("should use JWK.n as transaction owner", async function () {
 70 |     const wallet = await arweave.wallets.generate();
 71 | 
 72 |     const transaction = await arweave.createTransaction(
 73 |       {
 74 |         data: "test",
 75 |       },
 76 |       wallet
 77 |     );
 78 | 
 79 |     expect(transaction.get("owner")).to.equal(wallet.n);
 80 |   });
 81 | 
 82 |   it("should use the provided transaction owner attribute", async function () {
 83 |     const transaction = await arweave.createTransaction({
 84 |       data: "test",
 85 |       owner: "owner-test-abc",
 86 |     });
 87 | 
 88 |     expect(transaction.get("owner")).to.equal("owner-test-abc");
 89 |   });
 90 | 
 91 |   it("should create and sign valid transactions when no owner or JWK provided", async function () {
 92 |     const wallet = await arweave.wallets.generate();
 93 | 
 94 |     const transaction = await arweave.createTransaction({
 95 |       data: "test",
 96 |     });
 97 | 
 98 |     await arweave.transactions.sign(transaction, wallet);
 99 | 
100 |     expect(transaction.get("owner")).to.equal(wallet.n);
101 | 
102 |     const verified = await arweave.transactions.verify(transaction);
103 | 
104 |     expect(verified).to.be.a("boolean");
105 |     expect(verified).to.be.true;
106 |   });
107 | 
108 |   it("should create and sign ar transactions", async function () {
109 |     const wallet = await arweave.wallets.generate();
110 | 
111 |     const transaction = await arweave.createTransaction(
112 |       {
113 |         target: "GRQ7swQO1AMyFgnuAPI7AvGQlW3lzuQuwlJbIpWV7xk",
114 |         quantity: arweave.ar.arToWinston("1.5"),
115 |       },
116 |       wallet
117 |     );
118 | 
119 |     expect(transaction).to.be.an.instanceOf(Transaction);
120 | 
121 |     expect(transaction.quantity).to.be.a("string").and.equal("1500000000000");
122 | 
123 |     expect(transaction.target)
124 |       .to.be.a("string")
125 |       .and.equal("GRQ7swQO1AMyFgnuAPI7AvGQlW3lzuQuwlJbIpWV7xk");
126 |   });
127 | 
128 |   it("should work with buffers", async function () {
129 |     // this.timeout(10000);
130 | 
131 |     const wallet = await arweave.wallets.generate();
132 | 
133 |     let data = crypto.randomBytes(100);
134 | 
135 |     const transaction = await arweave.createTransaction({ data: data }, wallet);
136 | 
137 |     transaction.addTag("test-tag-1", "test-value-1");
138 |     transaction.addTag("test-tag-2", "test-value-2");
139 |     transaction.addTag("test-tag-3", "test-value-3");
140 | 
141 |     expect(transaction).to.be.an.instanceOf(Transaction);
142 | 
143 |     expect(
144 |       Buffer.from(transaction.get("data", { decode: true, string: false }))
145 |     ).to.deep.equal(data);
146 | 
147 |     expect(transaction.last_tx).to.match(/^[a-z0-9-_]{64}$/i);
148 | 
149 |     expect(transaction.reward).to.match(/^[0-9]+$/);
150 | 
151 |     await arweave.transactions.sign(transaction, wallet);
152 | 
153 |     expect(transaction.signature).to.match(/^[a-z0-9-_]+$/i);
154 | 
155 |     expect(transaction.id).to.match(digestRegex);
156 | 
157 |     const verified = await arweave.transactions.verify(transaction);
158 | 
159 |     expect(verified).to.be.a("boolean");
160 | 
161 |     expect(verified).to.be.true;
162 | 
163 |     //@ts-ignore
164 |     // Needs ts-ignoring as tags are readonly so chaning the tag like this isn't
165 |     // normally an allowed operation, but it's a test, so...
166 |     transaction.tags[1].value = "dGVzdDI";
167 | 
168 |     const verifiedWithModififedTags = await arweave.transactions.verify(
169 |       transaction
170 |     );
171 | 
172 |     expect(verifiedWithModififedTags).to.be.a("boolean");
173 | 
174 |     expect(verifiedWithModififedTags).to.be.false;
175 |   });
176 | 
177 |   it("should get transaction info", async function () {
178 |     const transactionStatus = await arweave.transactions.getStatus(
179 |       liveDataTxid
180 |     );
181 |     const transaction = await arweave.transactions.get(
182 |       "erO78Ram7nOEYKdSMfsSho1QWC_iko407AryZdJ2Z3k"
183 |     );
184 | 
185 |     expect(transactionStatus).to.be.a("object");
186 |     expect(transactionStatus.confirmed).to.be.a("object");
187 | 
188 |     expect(Object.keys(transactionStatus.confirmed!)).to.contain.members([
189 |       "block_indep_hash",
190 |       "block_height",
191 |       "number_of_confirmations",
192 |     ]);
193 | 
194 |     expect(transactionStatus.confirmed!.block_indep_hash).to.be.a("string");
195 |     expect(transactionStatus.confirmed!.block_height).to.be.a("number");
196 |     expect(transactionStatus.confirmed!.number_of_confirmations).to.be.a(
197 |       "number"
198 |     );
199 | 
200 |     expect(await arweave.transactions.verify(transaction)).to.be.true;
201 | 
202 |     transaction.signature = "xxx";
203 | 
204 |     const verifyResult = await (() => {
205 |       return new Promise((resolve) => {
206 |         arweave.transactions.verify(transaction).catch((error) => {
207 |           resolve(error);
208 |         });
209 |       });
210 |     })();
211 | 
212 |     expect(verifyResult)
213 |       .to.be.an.instanceOf(Error)
214 |       .with.property("message")
215 |       .and.match(/^.*invalid transaction signature.*$/i);
216 |   });
217 | 
218 |   it("should get transaction data", async function () {
219 |     const txRawData = await arweave.transactions.getData(liveDataTxid);
220 |     expect(txRawData)
221 |       .to.be.a("string")
222 |       .which.contain("eyJtZXNzYWdlIjoiSGVsbG8gV29ybGQifQ");
223 | 
224 |     const txDecodeData = await arweave.transactions.getData(liveDataTxid, {
225 |       decode: true,
226 |     });
227 |     expect(txDecodeData).to.be.a("Uint8Array").to.contain([123, 34, 109, 101]);
228 | 
229 |     const txDecodeStringData = await arweave.transactions.getData(
230 |       liveDataTxid,
231 |       { decode: true, string: true }
232 |     );
233 |     expect(txDecodeStringData)
234 |       .to.be.a("string")
235 |       .which.contain('{"message":"Hello World"}');
236 |   });
237 | 
238 |   it("should get transaction data > 12MiB from chunks or gateway", async function () {
239 |     this.timeout(300_000);
240 |     const data = (await arweave.transactions.getData(liveDataTxidLarge, {
241 |       decode: true,
242 |     })) as Uint8Array;
243 |     expect(data.byteLength).to.equal(14166765);
244 |   });
245 | 
246 |   // it("should get transaction data > 12MiB from a node", async function () {
247 |   //   this.timeout(150000);
248 |   //   const data = (await arweaveDirectNode.transactions.getData(
249 |   //     liveDataTxidLarge,
250 |   //     { decode: true }
251 |   //   )) as Uint8Array;
252 |   //   expect(data.byteLength).to.equal(14166765);
253 |   // });
254 | 
255 |   it("should find transactions", async function () {
256 |     const results = await arweave.transactions.search(
257 |       "Silo-Name",
258 |       "BmjRGIsemI77+eQb4zX8"
259 |     );
260 | 
261 |     expect(results)
262 |       .to.be.an("array")
263 |       .which.contains("Sgmyo7nUqPpVQWUfK72p5yIpd85QQbhGaWAF-I8L6yE");
264 |   });
265 | 
266 |   it("should support format=2 transaction signing", async function () {
267 |     const jwk = require("./fixtures/arweave-keyfile-fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw.json");
268 |     const unsignedV2TxFixture = require("./fixtures/unsigned_v2_tx.json");
269 |     const signedV2TxFixture = require("./fixtures/signed_v2_tx.json");
270 | 
271 |     const data = arweave.utils.b64UrlToBuffer(unsignedV2TxFixture.data);
272 |     const expectedSignature = signedV2TxFixture.signature;
273 |     const expectedDataRoot = signedV2TxFixture.data_root;
274 | 
275 |     const tx = await arweave.createTransaction(
276 |       {
277 |         format: 2,
278 |         last_tx: "",
279 |         data,
280 |         reward: arweave.ar.arToWinston("100"),
281 |       },
282 |       jwk
283 |     );
284 | 
285 |     // Pass an explicit saltLength = 0 to get a deterministic signature
286 |     // that matches the test fixture
287 |     await arweave.transactions.sign(tx, jwk, { saltLength: 0 });
288 | 
289 |     let dataRoot = arweave.utils.bufferTob64Url(
290 |       tx.get("data_root", { decode: true, string: false })
291 |     );
292 |     expect(dataRoot).to.equal(expectedDataRoot);
293 |     expect(tx.signature).to.equal(expectedSignature);
294 |   });
295 | });
296 | 


--------------------------------------------------------------------------------
/test/wallets.ts:
--------------------------------------------------------------------------------
  1 | import * as chai from "chai";
  2 | import { arweaveInstance } from "./_arweave";
  3 | 
  4 | const expect = chai.expect;
  5 | 
  6 | const arweave = arweaveInstance();
  7 | 
  8 | const digestRegex = /^[a-z0-9-_]{43}$/i;
  9 | const liveAddressBalance = "498557055636";
 10 | const liveAddress = "9_666Wkk2GzL0LGd3xhb0jY7HqNy71BaV4sULQlJsBQ";
 11 | const liveTxid = "CE-1SFiXqWUEu0aSTebE6LC0-5JBAc3IAehYGwdF5iI";
 12 | 
 13 | describe("Wallets and keys", function () {
 14 |   this.timeout(20000);
 15 |   it("should generate valid JWKs", async function () {
 16 |     const walletA = await arweave.wallets.generate();
 17 |     const walletB = await arweave.wallets.generate();
 18 | 
 19 |     expect(walletA).to.be.an("object", "New wallet is not an object");
 20 | 
 21 |     expect(walletA).to.have.all.keys(
 22 |       "kty",
 23 |       "n",
 24 |       "e",
 25 |       "d",
 26 |       "p",
 27 |       "q",
 28 |       "dp",
 29 |       "dq",
 30 |       "qi"
 31 |     );
 32 | 
 33 |     expect(walletA.kty).to.equal("RSA");
 34 | 
 35 |     expect(walletA.e).to.equal("AQAB");
 36 | 
 37 |     /** extra tests that private matches public */
 38 |     const sigA = await arweave.crypto.sign(
 39 |       walletA,
 40 |       new Uint8Array([1, 2, 3, 4])
 41 |     );
 42 |     const verifyA = await arweave.crypto.verify(
 43 |       walletA.n,
 44 |       new Uint8Array([1, 2, 3, 4]),
 45 |       sigA
 46 |     );
 47 |     expect(verifyA).true;
 48 |     const sigB = await arweave.crypto.sign(
 49 |       walletB,
 50 |       new Uint8Array([1, 2, 3, 4])
 51 |     );
 52 |     const verifyB = await arweave.crypto.verify(
 53 |       walletB.n,
 54 |       new Uint8Array([1, 2, 3, 4]),
 55 |       sigB
 56 |     );
 57 |     expect(verifyB).true;
 58 | 
 59 |     const addressA = await arweave.wallets.jwkToAddress(walletA);
 60 |     const addressB = await arweave.wallets.jwkToAddress(walletB);
 61 | 
 62 |     expect(addressA).to.be.a("string");
 63 |     expect(addressA).to.match(digestRegex);
 64 |     expect(addressB).to.match(digestRegex);
 65 |     expect(addressA).to.not.equal(addressB);
 66 | 
 67 |     expect(arweave.utils.b64UrlToBuffer(walletA.n).byteLength).eq(4096 / 8);
 68 |     expect(arweave.utils.b64UrlToBuffer(walletB.n).byteLength).eq(4096 / 8);
 69 |   });
 70 | 
 71 |   it("should get wallet info", async function () {
 72 |     const wallet = await arweave.wallets.generate();
 73 | 
 74 |     const address = await arweave.wallets.jwkToAddress(wallet);
 75 | 
 76 |     const balance = await arweave.wallets.getBalance(address);
 77 | 
 78 |     const lastTx = await arweave.wallets.getLastTransactionID(address);
 79 | 
 80 |     expect(balance).to.be.a("string");
 81 | 
 82 |     expect(balance).to.equal("0");
 83 | 
 84 |     expect(lastTx).to.be.a("string");
 85 | 
 86 |     expect(lastTx).to.equal("");
 87 | 
 88 |     const balanceB = await arweave.wallets.getBalance(liveAddress);
 89 | 
 90 |     const lastTxB = await arweave.wallets.getLastTransactionID(liveAddress);
 91 | 
 92 |     expect(balanceB).to.be.a("string");
 93 | 
 94 |     expect(balanceB).to.equal(liveAddressBalance);
 95 | 
 96 |     expect(lastTxB).to.be.a("string");
 97 | 
 98 |     expect(lastTxB).to.equal(liveTxid);
 99 |   });
100 | 
101 |   it("Should resolve JWK to address", async function () {
102 |     const jwk = require("./fixtures/arweave-keyfile-fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw.json");
103 | 
104 |     const address = await arweave.wallets.jwkToAddress(jwk);
105 | 
106 |     expect(address)
107 |       .to.be.a("string")
108 |       .and.equal("fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw");
109 |   });
110 | 
111 |   it("Should resolve public key to address", async function () {
112 |     const jwk = require("./fixtures/arweave-keyfile-fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw.json");
113 | 
114 |     const address = await arweave.wallets.ownerToAddress(jwk.n);
115 | 
116 |     expect(address)
117 |       .to.be.a("string")
118 |       .and.equal("fOVzBRTBnyt4VrUUYadBH8yras_-jhgpmNgg-5b3vEw");
119 |   });
120 | });
121 | 


--------------------------------------------------------------------------------
/test/web/web.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 | 
 4 | <head>
 5 |     <meta charset="UTF-8">
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 7 |     <meta http-equiv="X-UA-Compatible" content="ie=edge">
 8 |     <title>Arweave JS - Tests</title>
 9 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/5.2.0/mocha.js"></script>
10 |     <link href="https://cdnjs.cloudflare.com/ajax/libs/mocha/5.2.0/mocha.css" rel="stylesheet" />
11 |     <script>
12 |         mocha.setup('bdd')
13 |     </script>
14 |     <script src="../../bundles/web.bundle.min.js"></script>
15 |     <script src="../../bundles/webtests.bundle.js"></script>
16 | </head>
17 | 
18 | <body>
19 | 
20 |     <div id="mocha"></div>
21 | 
22 |     <script>
23 |         mocha.run();
24 |     </script>
25 | </body>
26 | 
27 | </html>


--------------------------------------------------------------------------------
/test/web/web.ts:
--------------------------------------------------------------------------------
  1 | import * as chai from "chai";
  2 | import * as crypto from "crypto";
  3 | import Arweave from "../../web";
  4 | import { bufferToString, stringToBuffer } from "../../src/common/lib/utils";
  5 | 
  6 | const expect = chai.expect;
  7 | 
  8 | let globals = <any>global;
  9 | 
 10 | //@ts-ignore
 11 | const arweave: Arweave = self.Arweave.init({
 12 |   host: "arweave.net",
 13 |   protocol: "https",
 14 |   logging: false,
 15 | });
 16 | 
 17 | //@ts-ignore
 18 | self.arweave = arweave;
 19 | 
 20 | const digestRegex = /^[a-z0-9-_]{43}$/i;
 21 | const liveAddressBalance = "498557055636";
 22 | const liveAddress = "9_666Wkk2GzL0LGd3xhb0jY7HqNy71BaV4sULQlJsBQ";
 23 | const liveTxid = "CE-1SFiXqWUEu0aSTebE6LC0-5JBAc3IAehYGwdF5iI";
 24 | 
 25 | const liveDataTxid = "H53lxlOS3ZZ6_yHiTEYIoEkw-aBWjJ-koXssCKCU3z4";
 26 | 
 27 | describe("Initialization", function () {
 28 |   it("should have components", function () {
 29 |     expect(arweave.api).to.an("object");
 30 | 
 31 |     expect(arweave.transactions).to.an("object");
 32 | 
 33 |     expect(arweave.wallets).to.an("object");
 34 | 
 35 |     expect(arweave.network).to.an("object");
 36 | 
 37 |     expect(arweave.crypto).to.an("object");
 38 | 
 39 |     expect(arweave.silo).to.an("object");
 40 |   });
 41 | });
 42 | 
 43 | describe("Network Info", function () {
 44 |   it("should get network info", async function () {
 45 |     this.timeout(10000);
 46 | 
 47 |     const info = await arweave.network.getInfo();
 48 |     const peers = await arweave.network.getPeers();
 49 | 
 50 |     expect(info).to.be.an("object");
 51 | 
 52 |     expect(Object.keys(info)).to.contain.members([
 53 |       "height",
 54 |       "current",
 55 |       "release",
 56 |       "version",
 57 |       "blocks",
 58 |     ]);
 59 | 
 60 |     expect(info.height).to.be.a("number").greaterThan(0);
 61 | 
 62 |     expect(peers).to.be.an("array");
 63 |   });
 64 | });
 65 | 
 66 | describe("Wallets and keys", function () {
 67 |   it("should generate valid JWKs", async function () {
 68 |     this.timeout(15000);
 69 | 
 70 |     const walletA = await arweave.wallets.generate();
 71 |     const walletB = await arweave.wallets.generate();
 72 | 
 73 |     expect(walletA).to.be.an("object", "New wallet is not an object");
 74 | 
 75 |     expect(walletA).to.have.all.keys(
 76 |       "kty",
 77 |       "n",
 78 |       "e",
 79 |       "d",
 80 |       "p",
 81 |       "q",
 82 |       "dp",
 83 |       "dq",
 84 |       "qi"
 85 |     );
 86 | 
 87 |     expect(walletA.kty).to.equal("RSA");
 88 | 
 89 |     expect(walletA.e).to.equal("AQAB");
 90 | 
 91 |     expect(walletA.n).to.match(/^[a-z0-9-_]{683}$/i);
 92 | 
 93 |     expect(walletA.d).to.match(/^[a-z0-9-_]{683}$/i);
 94 | 
 95 |     const addressA = await arweave.wallets.jwkToAddress(walletA);
 96 |     const addressB = await arweave.wallets.jwkToAddress(walletB);
 97 | 
 98 |     expect(addressA).to.be.a("string");
 99 | 
100 |     expect(addressA).to.match(digestRegex);
101 | 
102 |     expect(addressB).to.match(digestRegex);
103 | 
104 |     expect(addressA).to.not.equal(addressB);
105 |   });
106 | 
107 |   it("should get wallet info", async function () {
108 |     this.timeout(5000);
109 | 
110 |     const wallet = await arweave.wallets.generate();
111 | 
112 |     const address = await arweave.wallets.jwkToAddress(wallet);
113 | 
114 |     const balance = await arweave.wallets.getBalance(address);
115 | 
116 |     const lastTx = await arweave.wallets.getLastTransactionID(address);
117 | 
118 |     expect(balance).to.be.a("string");
119 | 
120 |     expect(balance).to.equal("0");
121 | 
122 |     expect(lastTx).to.be.a("string");
123 | 
124 |     expect(lastTx).to.equal("");
125 | 
126 |     const balanceB = await arweave.wallets.getBalance(liveAddress);
127 | 
128 |     const lastTxB = await arweave.wallets.getLastTransactionID(liveAddress);
129 | 
130 |     expect(balanceB).to.be.a("string");
131 | 
132 |     expect(balanceB).to.equal(liveAddressBalance);
133 | 
134 |     expect(lastTxB).to.be.a("string");
135 | 
136 |     expect(lastTxB).to.equal(liveTxid);
137 |   });
138 | });
139 | 
140 | describe("Transactions", function () {
141 |   it("should create and sign transactions", async function () {
142 |     this.timeout(5000);
143 | 
144 |     const wallet = await arweave.wallets.generate();
145 | 
146 |     const transaction = await arweave.createTransaction(
147 |       { data: "test" },
148 |       wallet
149 |     );
150 | 
151 |     transaction.addTag("test-tag-1", "test-value-1");
152 |     transaction.addTag("test-tag-2", "test-value-2");
153 |     transaction.addTag("test-tag-3", "test-value-3");
154 | 
155 |     expect(transaction).to.be.an("object");
156 | 
157 |     expect(transaction.get("data")).to.equal("dGVzdA");
158 | 
159 |     expect(transaction.reward).to.match(/^[0-9]+$/);
160 | 
161 |     await arweave.transactions.sign(transaction, wallet);
162 | 
163 |     expect(Object.keys(transaction)).to.contain.members([
164 |       "id",
165 |       "data",
166 |       "tags",
167 |       "signature",
168 |       "reward",
169 |       "owner",
170 |       "last_tx",
171 |     ]);
172 | 
173 |     expect(transaction.signature).to.match(/^[a-z0-9-_]+$/i);
174 | 
175 |     expect(transaction.id).to.match(digestRegex);
176 | 
177 |     const verified = await arweave.transactions.verify(transaction);
178 | 
179 |     expect(verified).to.be.a("boolean").and.to.be.true;
180 | 
181 |     //@ts-ignore
182 |     // Needs ts-ignoring as tags are readonly so chaning the tag like this isn't
183 |     // normally an allowed operation, but it's a test, so...
184 |     transaction.tags[1].value = "dGVzdDI";
185 | 
186 |     const verifiedWithModififedTags = await arweave.transactions.verify(
187 |       transaction
188 |     );
189 | 
190 |     expect(verifiedWithModififedTags).to.be.a("boolean");
191 | 
192 |     expect(verifiedWithModififedTags).to.be.false;
193 |   });
194 | 
195 |   it("should create and sign transactions using external implicit wallet", async function () {
196 |     this.timeout(120000);
197 | 
198 |     const transaction = await arweave.createTransaction({ data: "test" });
199 |     await arweave.transactions.sign(transaction);
200 | 
201 |     const verified = await arweave.transactions.verify(transaction);
202 |     expect(verified).to.be.a("boolean").and.to.be.true;
203 |   });
204 | 
205 |   it("should get transaction info", async function () {
206 |     this.timeout(5000);
207 | 
208 |     const transactionStatus = await arweave.transactions.getStatus(
209 |       liveDataTxid
210 |     );
211 |     const transaction = await arweave.transactions.get(liveDataTxid);
212 | 
213 |     expect(transactionStatus).to.be.a("object");
214 |     expect(transactionStatus.confirmed).to.be.a("object");
215 | 
216 |     expect(Object.keys(transactionStatus.confirmed!)).to.contain.members([
217 |       "block_indep_hash",
218 |       "block_height",
219 |       "number_of_confirmations",
220 |     ]);
221 | 
222 |     expect(transactionStatus.confirmed!.block_indep_hash).to.be.a("string");
223 |     expect(transactionStatus.confirmed!.block_height).to.be.a("number");
224 |     expect(transactionStatus.confirmed!.number_of_confirmations).to.be.a(
225 |       "number"
226 |     );
227 | 
228 |     expect(transaction.get("data", { decode: true, string: true })).to.contain(
229 |       "<title>CommunityXYZ</title>"
230 |     );
231 | 
232 |     const verify = await arweave.transactions.verify(transaction);
233 |     expect(verify).to.be.a("boolean").and.to.be.true;
234 | 
235 |     transaction.signature = "xxx";
236 | 
237 |     const verifyResult = await (() => {
238 |       return new Promise((resolve) => {
239 |         arweave.transactions.verify(transaction).catch((error: any) => {
240 |           resolve(error);
241 |         });
242 |       });
243 |     })();
244 | 
245 |     expect(verifyResult)
246 |       .to.be.an.instanceOf(Error)
247 |       .with.property("message")
248 |       .and.match(/^.*invalid transaction signature.*$/i);
249 |   });
250 | 
251 |   it("should find transactions", async function () {
252 |     this.timeout(5000);
253 | 
254 |     const results = await arweave.transactions.search(
255 |       "Silo-Name",
256 |       "BmjRGIsemI77+eQb4zX8"
257 |     );
258 | 
259 |     expect(results)
260 |       .to.be.an("array")
261 |       .which.contains("Sgmyo7nUqPpVQWUfK72p5yIpd85QQbhGaWAF-I8L6yE");
262 |   });
263 | });
264 | 
265 | describe("Encryption", function () {
266 |   it("should encrypt and decrypt using key round trip", async function () {
267 |     this.timeout(5000);
268 | 
269 |     const text = "some data to encrypt";
270 | 
271 |     const data = stringToBuffer(text);
272 | 
273 |     const key = crypto.randomBytes(32);
274 | 
275 |     const encrypted = await arweave.crypto.encrypt(data, key);
276 | 
277 |     expect(encrypted).to.have.lengthOf(48);
278 | 
279 |     const decrypted = await arweave.crypto.decrypt(encrypted, key);
280 | 
281 |     expect(bufferToString(decrypted)).to.equal(text);
282 |   });
283 | 
284 |   it("should encrypt and decrypt using passphrase round trip", async function () {
285 |     this.timeout(5000);
286 | 
287 |     const text = "some data to encrypt";
288 | 
289 |     const data = stringToBuffer(text);
290 | 
291 |     const key = "super-secret-password";
292 | 
293 |     const encrypted = await arweave.crypto.encrypt(data, key);
294 | 
295 |     expect(encrypted).to.have.lengthOf(48);
296 | 
297 |     const decrypted = await arweave.crypto.decrypt(encrypted, key);
298 | 
299 |     expect(bufferToString(decrypted)).to.equal(text);
300 |   });
301 | });
302 | 
303 | describe("Silo Web", function () {
304 |   it("should read Silo transaction", async function () {
305 |     this.skip();
306 |     this.timeout(5000);
307 | 
308 |     // This is a manually generated silo transaction
309 |     // data = 'something'
310 |     // uri = 'secret.1'
311 |     const transaction = arweave.transactions.fromRaw({
312 |       last_tx: "Sgmyo7nUqPpVQWUfK72p5yIpd85QQbhGaWAF-I8L6yE",
313 |       owner:
314 |         "pJjRtSRLpHUVAKCtWC9pjajI_VEpiPEEAHX0k1B1jrB_jDlZsMJPyGRVX6n7N16vNyDTnKAofC_aNmTFegW-uyJmdxsteO1TXKrR_KJvuv_vACX4N8BkSgplB7mTTALBMNPmiINHXkDSxZEkBxAGV0GyL8pLd2-0X6TG16wDFShyS7rZzW8xFsQYiAp9-g330hPhCV7KBdVFtCxA0h1RifDYloMUwHbAWCTvzm72aLI1nWaLzotcM4cZTTdzw5VTdGtjo9fMdoT7uTqikIIhM3C4f9Ws-ECqjBUXtZFg7q6jYbUcTVNr1o2UFPKbLnDl4vcUZBaeqkL0FWQuo7F1hw36PVm_b9lVVzSVVkeA_HF2tQotkaITyOQmYfTHi1d31m5fwFZje_M-YgeyvOIuiqX4-lIGz8pohTutY3Z5_LKfO_a8jsJL8_jFLqcjSCRvVZSRmQDpzB4hJ9-W89m95DDmZci2wLbxFR8GwekNbpHeeC2EaJorhU0qBn_Hlcxql30fLveycjhSO03bu3MJwN9moT2q0T222iIXutEjpNezt5VzZKao8_JuI3ZnTFy5dM5GYO773TbgUihlVjVQsnv73FFPZaHfaRssK4sfGlBHjItwkzEQe9gOtFhkAFihiw45ppo6FnBkvmNcD59GfteifKPg5oSGYqMWZWcKPt0",
315 |       tags: [
316 |         { name: "Q29udGVudC1UeXBl", value: "dGV4dC9odG1s" },
317 |         { name: "VXNlci1BZ2VudA", value: "QXJ3ZWF2ZURlcGxveS8xLjAuMA" },
318 |         { name: "U2lsby1WZXJzaW9u", value: "MC4xLjA" },
319 |       ],
320 |       target: "",
321 |       quantity: "0",
322 |       data: "0HgHqou5BTRNYJIsCciZb2-85Qlg9cYpiHO62KbRCEeX_cjSvn--Cex8uksInemd6FWWkczaqjs3SWzr7BRc0BSjHXxlVHkKuQp7WvRRJeNJPk_nC0KZrjkFSIPLIx_oOSeXigaPSEBSC4ry_5Iygt7z0Dgl7z1eFplIs6MlxKuBwiXfCtlwRDQK_fJlPWZhGjOpNLP5dyOLwMKrvG2dbAOeyAYbr117rn19CiDkTQAI3m2gAcJlXDZTNeA-1rJqb6X73u0AQt4Ao-OkktxdZ1UMfMfXnwdlsAEKK14NiKRbL1UbVRGh1nyWjUl90BP5Qj74L6_CKxQc_us7gxdeUhkzIKr4-LMY4LoCr-l0Law_tIGekkRsqb5oN7JiketqWazgsyo-Gq-0Blvhwh8nww",
323 |       reward: "349612332",
324 |       signature:
325 |         "DJ6V8zXFMvkyNS4nNHxdFgXx1cbMuzQfWdtP_navPG1STMUarYKHWnJvFQqNkFl5CekNql0xTOjY5hWLt2AVxfMWgvvi5498vNUpbFoWxjrVl6fk86ARx2lzYB7iQK4YFIuIQ7MdR0w8Dy836hW7c8gXe_FPRAqOI7J_l8fqUSzaUtlcwLSfvhXJM-2a3WmoGLcg8Gvj53B8-RizvM3BrKQQWrcat78zeOgb-Fzl3PQ_Ej3CiRIDgAYnTxmd7M6jI84uck1gBRjMql42n0F8pQuTgMqzDbeXW2iBuvIE5tYVmUgnNrPjkDedLWe0Hp4KLDQyDY9lO-zIJLpiYCbc7kUfDBontxCCJIy9N8XM9gHqQofCItYAEO4v3B7sXgdSAQzcibnM3j6EhB9-mhiDcKKRuTSvyJh3sBTWHFrnWylfq84JOJLNhR4aZA_UfjkccA7Z-yqoiMI0mOB0HaAEmsa6ZsoLs5C-6vDnGaBCqYeVKKqKizfOQGsc9IuzdsSQwY7yTE-C3Xb3eAgnq0BLn6iUNqFU-mkwHi-c_hpxoR0lY91k98Ra9UhrgFS5m_9x3BhCXNhDaUXb16p0fHKGYSggqgqS3FbEcdOnsQlhw3IFEccFOTvuv1xEoE1zYeZ06q6NkFKMik6soXl9LXXgJgZvpEut_2LaHKtojbWqSkc",
326 |       id: "S-9ICDleH3PEx9LXVEbguVffe5dHEM0I3wEr_MJidqU",
327 |     });
328 | 
329 |     const verified = await arweave.transactions.verify(transaction);
330 | 
331 |     expect(verified).to.be.a("boolean").and.to.be.true;
332 | 
333 |     const decrypted = await arweave.silo.readTransactionData(
334 |       transaction,
335 |       "thing.1"
336 |     );
337 | 
338 |     expect(bufferToString(decrypted))
339 |       .to.be.a("string")
340 |       .and.contain("<title>Hello world!</title>");
341 |   });
342 | 
343 |   it("should pass a Silo transaction roundtrip", async function () {
344 |     this.timeout(10000);
345 | 
346 |     const wallet = await arweave.wallets.generate();
347 | 
348 |     const transaction = await arweave.createSiloTransaction(
349 |       { data: "test data" },
350 |       wallet,
351 |       "my-silo-ref.1"
352 |     );
353 | 
354 |     await arweave.transactions.sign(transaction, wallet);
355 | 
356 |     const verified = await arweave.transactions.verify(transaction);
357 | 
358 |     expect(verified).to.be.a("boolean").and.to.be.true;
359 | 
360 |     let decrypted = await arweave.silo.readTransactionData(
361 |       transaction,
362 |       "my-silo-ref.1"
363 |     );
364 | 
365 |     expect(bufferToString(decrypted)).to.be.a("string").and.equal("test data");
366 |   });
367 | });
368 | 
369 | describe("GraphQL", function () {
370 |   this.timeout(20000);
371 |   it("should return a list of results", async function () {
372 |     const txs = (
373 |       await arweave.api.post("/graphql", {
374 |         query: `
375 |       {
376 |         transactions(
377 |           tags: [
378 |             { name: "App-Name", values: ["CommunityXYZ"] }
379 |           ]
380 |         ) {
381 |           edges {
382 |             node {
383 |               id
384 |             }
385 |           }
386 |         }
387 |       }`,
388 |       })
389 |     ).data.data.transactions.edges;
390 | 
391 |     expect(txs).to.be.an("array");
392 |     expect(txs.length).to.be.greaterThan(0);
393 |   });
394 | 
395 |   it("should return an empty list when no results are found", async function () {
396 |     const txs = (
397 |       await arweave.api.post("/graphql", {
398 |         query: `
399 |       {
400 |         transactions(
401 |           owners: ["hnRI7JoN2vpv__w90o4MC_ybE9fse6SUemwQeY8hFxM"]
402 |         ) {
403 |           edges {
404 |             node {
405 |               id
406 |             }
407 |           }
408 |         }
409 |       }`,
410 |       })
411 |     ).data.data.transactions.edges;
412 | 
413 |     expect(txs).to.be.an("array");
414 |     expect(txs.length).to.equal(0);
415 |   });
416 | });
417 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |     "extends": "./tsconfig.node"
3 | }


--------------------------------------------------------------------------------
/tsconfig.node.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "skipLibCheck": true,
 4 |     "outDir": "./dist/node/",
 5 |     "sourceMap": true,
 6 |     "strict": true,
 7 |     "lib": ["ES2022", "DOM"],
 8 |     "target": "ES2022",
 9 |     "moduleResolution": "node",
10 |     "module": "commonjs",
11 |     "baseUrl": "src/common",
12 |     "rootDirs": ["src/common", "src/node"],
13 |     "esModuleInterop": true,
14 |     "resolveJsonModule": true,
15 |     "paths": {
16 |       "@crypto/*": ["lib/crypto/*"]
17 |     }
18 |   },
19 |   "include": ["src/modules.d.ts", "src/common", "src/node"]
20 | }
21 | 


--------------------------------------------------------------------------------
/tsconfig.web.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "skipLibCheck": true,
 4 |     "outDir": "./dist/web/",
 5 |     // "sourceMap": true,
 6 |     "strict": true,
 7 |     "target": "ES2022",
 8 |     "moduleResolution": "node",
 9 |     "module": "commonjs",
10 |     "baseUrl": "src/common",
11 |     "rootDirs": ["src/common", "src/web"],
12 |     "paths": {
13 |       "@crypto/node-driver": ["lib/crypto/webcrypto-driver"]
14 |     }
15 |   },
16 |   "include": ["src/modules.d.ts", "src/common", "src/web"]
17 | }
18 | 


--------------------------------------------------------------------------------
/webpack.config.js:
--------------------------------------------------------------------------------
  1 | const TerserPlugin = require("terser-webpack-plugin");
  2 | const path = require("path");
  3 | const webpack = require("webpack");
  4 | const config = {};
  5 | 
  6 | config.web = {
  7 |   name: "web",
  8 |   entry: "./web/index.js",
  9 |   mode: "development",
 10 |   target: "web",
 11 |   devtool: "inline-source-map",
 12 |   devServer: {
 13 |     contentBase: "./dist",
 14 |   },
 15 |   resolve: {
 16 |     alias: {
 17 |       process: "process/browser",
 18 |       crypto: "crypto-browserify",
 19 |       stream: "stream-browserify",
 20 |       "@crypto/node-driver": path.resolve(
 21 |         __dirname,
 22 |         "./web/lib/crypto/webcrypto-driver"
 23 |       ),
 24 |     },
 25 |     fallback: {
 26 |       process: require.resolve("process/browser"),
 27 |       crypto: require.resolve("crypto-browserify"),
 28 |       stream: require.resolve("stream-browserify"),
 29 |     },
 30 |     extensions: [".ts", ".js"],
 31 |   },
 32 |   plugins: [
 33 |     new webpack.ProvidePlugin({
 34 |       process: "process/browser",
 35 |     }),
 36 |   ],
 37 |   output: {
 38 |     filename: "web.bundle.js",
 39 |     path: path.resolve(__dirname, "bundles"),
 40 |   },
 41 | };
 42 | 
 43 | config.webprod = {
 44 |   name: "web-prod",
 45 |   entry: "./web/index.js",
 46 |   mode: "production",
 47 |   target: "web",
 48 |   devServer: {
 49 |     contentBase: "./dist",
 50 |   },
 51 |   resolve: {
 52 |     alias: {
 53 |       process: "process/browser",
 54 |       crypto: "crypto-browserify",
 55 |       stream: "stream-browserify",
 56 |       "@crypto/node-driver": path.resolve(
 57 |         __dirname,
 58 |         "./web/lib/crypto/webcrypto-driver"
 59 |       ),
 60 |     },
 61 |     fallback: {
 62 |       process: require.resolve("process/browser"),
 63 |       crypto: require.resolve("crypto-browserify"),
 64 |       stream: require.resolve("stream-browserify"),
 65 |     },
 66 |     extensions: [".ts", ".js"],
 67 |   },
 68 |   plugins: [
 69 |     new webpack.ProvidePlugin({
 70 |       process: "process/browser",
 71 |     }),
 72 |   ],
 73 |   optimization: {
 74 |     minimize: true,
 75 |     minimizer: [new TerserPlugin()],
 76 |   },
 77 |   output: {
 78 |     filename: "web.bundle.min.js",
 79 |     path: path.resolve(__dirname, "bundles"),
 80 |   },
 81 | };
 82 | 
 83 | config.webtests = {
 84 |   name: "web-tests",
 85 |   entry: "./test/web/web.ts",
 86 |   mode: "development",
 87 |   target: "web",
 88 |   module: {
 89 |     rules: [
 90 |       {
 91 |         test: /\.ts?$/,
 92 |         use: "ts-loader",
 93 |       },
 94 |     ],
 95 |   },
 96 |   resolve: {
 97 |     extensions: [".tsx", ".ts", ".js"],
 98 |     alias: {
 99 |       process: "process/browser",
100 |       "@crypto/node-driver": path.resolve(
101 |         __dirname,
102 |         "./web/lib/crypto/webcrypto-driver"
103 |       ),
104 |     },
105 |     fallback: {
106 |       process: require.resolve("process/browser"),
107 |       crypto: require.resolve("crypto-browserify"),
108 |       stream: require.resolve("stream-browserify"),
109 |     },
110 |   },
111 |   plugins: [
112 |     new webpack.ProvidePlugin({
113 |       process: "process/browser",
114 |       crypto: "crypto-browserify",
115 |       stream: "stream-browserify",
116 |     }),
117 |   ],
118 |   devtool: "inline-source-map",
119 |   devServer: {
120 |     contentBase: "./dist",
121 |   },
122 |   output: {
123 |     filename: "webtests.bundle.js",
124 |     path: path.resolve(__dirname, "bundles"),
125 |   },
126 | };
127 | 
128 | module.exports = [config.web, config.webprod, config.webtests];
129 | 


--------------------------------------------------------------------------------