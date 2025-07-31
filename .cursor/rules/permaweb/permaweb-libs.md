├── .github
    └── workflows
    │   └── deploy.yml
├── .gitignore
├── LICENSE
├── README.md
├── sdk
    ├── .editorconfig
    ├── .eslintrc.cjs
    ├── .prettierignore
    ├── build.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── common
    │   │   ├── ao.ts
    │   │   ├── arweave.ts
    │   │   ├── gql.ts
    │   │   └── index.ts
    │   ├── helpers
    │   │   ├── config.ts
    │   │   ├── endpoints.ts
    │   │   ├── index.ts
    │   │   ├── types.ts
    │   │   └── utils.ts
    │   ├── index.ts
    │   └── services
    │   │   ├── assets.ts
    │   │   ├── collections.ts
    │   │   ├── comments.ts
    │   │   ├── index.ts
    │   │   ├── profiles.ts
    │   │   └── zones.ts
    ├── tests
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    └── tsconfig.json
├── services
    ├── bundler
    │   └── bundle.sh
    └── src
    │   ├── package_asset_manager.lua
    │   ├── package_kv.lua
    │   ├── package_kv_batch.lua
    │   ├── process_asset.lua
    │   ├── process_collection.lua
    │   ├── process_zone.lua
    │   ├── registry_process_collection.lua
    │   └── registry_process_zone.lua
└── specs
    ├── README.md
    ├── spec-atomic-assets.md
    ├── spec-collections.md
    ├── spec-comments.md
    ├── spec-profiles.md
    └── spec-zones.md


/.github/workflows/deploy.yml:
--------------------------------------------------------------------------------
 1 | name: Deploy AOS Process
 2 | 
 3 | on:
 4 |   push:
 5 |     branches:
 6 |       - deploy
 7 | 
 8 | jobs:
 9 |   deploy:
10 |     runs-on: ubuntu-latest
11 |     steps:
12 |       - name: ⬇️ Checkout repo
13 |         uses: actions/checkout@v4
14 | 
15 |       - name: ⎔ Setup node
16 |         uses: actions/setup-node@v4
17 |         with:
18 |           node-version: 20
19 | 
20 |       - name: 📥 Download deps
21 |         working-directory: deploy
22 |         run: |
23 |           npm i
24 | 
25 |       - name: Deploy AOS Process
26 |         working-directory: deploy
27 |         run: node index.js
28 |         env:
29 |           KEYFILE: ${{ secrets.KEYFILE }}
30 |           AOS: ${{ secrets.AOS }}
31 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
1 | **.vscode
2 | **node_modules
3 | **wallets
4 | **.DS_Store
5 | **dist/
6 | !**/packages/bundler/dist
7 | **.idea/
8 | **.npmrc


--------------------------------------------------------------------------------
/LICENSE:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 permaweb
 4 | 
 5 | Permission is hereby granted, free of charge, to any person obtaining a copy
 6 | of this software and associated documentation files (the "Software"), to deal
 7 | in the Software without restriction, including without limitation the rights
 8 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 9 | copies of the Software, and to permit persons to whom the Software is
10 | furnished to do so, subject to the following conditions:
11 | 
12 | The above copyright notice and this permission notice shall be included in all
13 | copies or substantial portions of the Software.
14 | 
15 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
16 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
17 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
18 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
19 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
20 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
21 | SOFTWARE.
22 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
  1 | # @permaweb/libs
  2 | 
  3 | This SDK provides a set of libraries designed as foundational building blocks for developers to create and interact with applications on Arweave's permaweb. These libraries aim to contribute building on the composable web, promoting interoperability and reusability across decentralized applications. With libraries for managing profiles, atomic assets, collections, and more, this SDK simplifies the development of decentralized, permanent applications.
  4 | 
  5 | ## Table of Contents
  6 | 
  7 | - [Prerequisites](#prerequisites)
  8 | - [Installation](#installation)
  9 | - [Initialization](#initialization)
 10 | - [Usage](#usage)
 11 |   - [Zones](#zones)
 12 |     - [createZone](#createzone)
 13 |     - [updateZone](#updatezone)
 14 |     - [getZone](#getzone)
 15 |   - [Profiles](#profiles)
 16 |     - [createProfile](#createprofile)
 17 |     - [updateProfile](#updateprofile)
 18 |     - [getProfileById](#getprofilebyid)
 19 |     - [getProfileByWalletAddress](#getprofilebywalletaddress)
 20 |   - [Atomic Assets](#atomic-assets)
 21 |     - [createAtomicAsset](#createatomicasset)
 22 |     - [getAtomicAsset](#getatomicasset)
 23 |     - [getAtomicAssets](#getatomicassets)
 24 |   - [Comments](#comments)
 25 |     - [createComment](#createcomment)
 26 |     - [getComment](#getcomment)
 27 |     - [getComments](#getcomments)
 28 |   - [Collections](#collections)
 29 |     - [createCollection](#createcollection)
 30 |     - [updateCollectionAssets](#updatecollectionassets)
 31 |     - [getCollection](#getcollection)
 32 |     - [getCollections](#getcollections)
 33 | - [Examples](#examples)
 34 | - [Resources](#resources)
 35 | 
 36 | ## Prerequisites
 37 | 
 38 | - `node >= v18.0`
 39 | - `npm` or `yarn`
 40 | - `arweave`
 41 | - `@permaweb/aoconnect`
 42 | 
 43 | ## Installation
 44 | 
 45 | If `arweave` or `@permaweb/aoconnect` is not already installed, add them to the installation command below as additional packages
 46 | 
 47 | ```bash
 48 | npm install @permaweb/libs
 49 | ```
 50 | 
 51 | or
 52 | 
 53 | ```bash
 54 | yarn add @permaweb/libs
 55 | ```
 56 | 
 57 | ## Initialization
 58 | 
 59 | ```typescript
 60 | import Arweave from "arweave";
 61 | import { connect, createDataItemSigner } from "@permaweb/aoconnect";
 62 | import Permaweb from "@permaweb/libs";
 63 | 
 64 | // Browser Usage
 65 | const wallet = window.arweaveWallet;
 66 | 
 67 | // NodeJS Usage
 68 | const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET, "utf-8"));
 69 | 
 70 | const permaweb = Permaweb.init({
 71 |   ao: connect(),
 72 |   arweave: Arweave.init(),
 73 |   signer: createDataItemSigner(wallet),
 74 | });
 75 | ```
 76 | 
 77 | ## Usage
 78 | 
 79 | ### Zones
 80 | 
 81 | Zones are representations of entities on the permaweb that contain relevant information and can perform actions on the entity"s behalf. A profile is an instance of a zone with specific metadata ([Read the spec](./specs/spec-zones.md)).
 82 | 
 83 | #### `createZone`
 84 | 
 85 | ```typescript
 86 | const zoneId = await permaweb.createZone();
 87 | ```
 88 | 
 89 | <details>
 90 |   <summary><strong>Parameters</strong></summary>
 91 | 
 92 | - `tags (optional)`: Additional tags
 93 | 
 94 | </details>
 95 | 
 96 | <details>
 97 |   <summary><strong>Response</strong></summary>
 98 | 
 99 | ```typescript
100 | ZoneProcessId;
101 | ```
102 | 
103 | </details>
104 | 
105 | #### `updateZone`
106 | 
107 | ```typescript
108 | const zoneUpdateId = await permaweb.updateZone(
109 |   {
110 |     name: "Sample Zone",
111 |     metadata: {
112 |       description: "A sample zone for testing",
113 |       version: "1.0.0",
114 |     },
115 |   },
116 |   zoneId
117 | );
118 | ```
119 | 
120 | <details>
121 |   <summary><strong>Parameters</strong></summary>
122 | 
123 | - `args`: Zone data to update, specified in an object
124 | - `zoneId`: The ID of the zone to update
125 | 
126 | </details>
127 | 
128 | <details>
129 |   <summary><strong>Response</strong></summary>
130 | 
131 | ```typescript
132 | ZoneUpdateId;
133 | ```
134 | 
135 | </details>
136 | 
137 | #### `getZone`
138 | 
139 | ```typescript
140 | const zone = await permaweb.getZone(zoneId);
141 | ```
142 | 
143 | <details>
144 |   <summary><strong>Parameters</strong></summary>
145 | 
146 | - `zoneId`: The ID of the zone to fetch
147 | 
148 | </details>
149 | 
150 | <details>
151 |   <summary><strong>Response</strong></summary>
152 | 
153 | ```typescript
154 | { store: [], assets: [] };
155 | ```
156 | 
157 | </details>
158 | 
159 | ### Profiles
160 | 
161 | Profiles are a digital representation of entities, such as users, organizations, or channels. They include specific metadata that describes the entity and can be associated with various digital assets and collections. Profiles are created, updated, and fetched using the following functions.
162 | 
163 | #### `createProfile`
164 | 
165 | ```typescript
166 | const profileId = await permaweb.createProfile({
167 |   username: "My username",
168 |   displayName: "My display name",
169 |   description: "My description",
170 |   thumbnail: "Thumbnail image data",
171 |   banner: "Banner image data",
172 | });
173 | ```
174 | 
175 | <details>
176 |   <summary><strong>Parameters</strong></summary>
177 | 
178 | - `args`: Object containing profile details, including `username`, `displayName`, `description`, `thumbnail (optional)`, and `banner (optional)`
179 | - `callback (optional)`: Callback function for client use
180 | 
181 | </details>
182 | 
183 | <details>
184 |   <summary><strong>Response</strong></summary>
185 | 
186 | ```typescript
187 | ProfileProcessId;
188 | ```
189 | 
190 | </details>
191 | 
192 | #### `updateProfile`
193 | 
194 | ```typescript
195 | const profileId = await permaweb.updateProfile({
196 |     username: "My usename",
197 |     displayName: "My display name",
198 |     description: "My description",
199 |     thumbnail: "Thumbnail image data",
200 |     banner: "Banner image data",
201 |   }, profileId);
202 | ```
203 | 
204 | <details>
205 |   <summary><strong>Parameters</strong></summary>
206 | 
207 | - `args`: Profile details to update, structured similarly to `createProfile`
208 | - `profileId`: The ID of the profile to update
209 | - `callback (optional)`: Callback function for client use
210 | 
211 | </details>
212 | 
213 | <details>
214 |   <summary><strong>Response</strong></summary>
215 | 
216 | ```typescript
217 | ProfileProcessUpdateId;
218 | ```
219 | 
220 | </details>
221 | 
222 | #### `getProfileById`
223 | 
224 | ```typescript
225 | const profile = await permaweb.getProfileById(profileId);
226 | ```
227 | 
228 | <details>
229 |   <summary><strong>Parameters</strong></summary>
230 | 
231 | - `profileId`: The ID of the profile to fetch
232 | 
233 | </details>
234 | 
235 | <details>
236 |   <summary><strong>Response</strong></summary>
237 | 
238 | ```typescript
239 | {
240 |   id: "ProfileProcessId",
241 |   walletAddress: "WalletAddress",
242 |   username: "Sample username",
243 |   displayName: "Sample display name",
244 |   description: "Sample description",
245 |   thumbnail: "ThumbnailTxId",
246 |   banner: "BannerTxId",
247 |   assets: [
248 |     { id: "AssetProcessId1", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
249 |     { id: "AssetProcessId2", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
250 |     { id: "AssetProcessId3", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
251 |   ]
252 | }
253 | ```
254 | 
255 | </details>
256 | 
257 | #### `getProfileByWalletAddress`
258 | 
259 | ```typescript
260 | const profile = await permaweb.getProfileByWalletAddress(walletAddress);
261 | ```
262 | 
263 | <details>
264 |   <summary><strong>Parameters</strong></summary>
265 | 
266 | - `walletAddress`: The wallet address associated with the profile
267 | 
268 | </details>
269 | 
270 | <details>
271 |   <summary><strong>Response</strong></summary>
272 | 
273 | ```typescript
274 | {
275 |   id: "ProfileProcessId",
276 |   walletAddress: "WalletAddress",
277 |   username: "Sample username",
278 |   displayName: "Sample display name",
279 |   description: "Sample description",
280 |   thumbnail: "ThumbnailTxId",
281 |   banner: "BannerTxId",
282 |   assets: [
283 |     { id: "AssetProcessId1", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
284 |     { id: "AssetProcessId2", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
285 |     { id: "AssetProcessId3", quantity: "1", dateCreated: 123456789, lastUpdate: 123456789 },
286 |   ]
287 | }
288 | ```
289 | 
290 | </details>
291 | 
292 | ### Atomic Assets
293 | 
294 | Atomic assets are unique digital item consisting of an AO process and its associated data which are stored together in a single transaction on Arweave ([Read the spec](./specs/spec-atomic-assets.md)).
295 | 
296 | #### `createAtomicAsset`
297 | 
298 | ```typescript
299 | const assetId = await permaweb.createAtomicAsset({
300 |   name: "Example Name",
301 |   description: "Example Description",
302 |   topics: ["Topic 1", "Topic 2", "Topic 3"],
303 |   creator: CREATOR_ADDRESS,
304 |   data: "1234",
305 |   contentType: "text/plain",
306 |   assetType: "Example Atomic Asset Type",
307 |   metadata: {
308 |     status: "Initial Status",
309 |   },
310 | });
311 | ```
312 | 
313 | <details>
314 |   <summary><strong>Parameters</strong></summary>
315 | 
316 | - `args`: Object containing asset details, including `name`, `description`, ` topics`, `creator (wallet or profile address)`, `data`, `contentType`, `assetType`, `metadata (optional)`, and `tags (optional)`
317 | - `callback (optional)`: Callback function for client use
318 | 
319 | </details>
320 | 
321 | <details>
322 |   <summary>
323 |     <strong>Response</strong>
324 |   </summary>
325 | 
326 | ```typescript
327 | AssetProcessId;
328 | ```
329 | 
330 | </details>
331 | 
332 | #### `getAtomicAsset`
333 | 
334 | ```typescript
335 | const asset = await permaweb.getAtomicAsset(assetId);
336 | ```
337 | 
338 | <details>
339 |   <summary><strong>Parameters</strong></summary>
340 | 
341 | - `assetId`: The ID of the asset to fetch
342 | - `args (optional)`: Object for additional options with field `useGateway (boolean)` to also query the gateway for asset data
343 | 
344 | </details>
345 | 
346 | <details>
347 |   <summary>
348 |     <strong>Response</strong>
349 |   </summary>
350 | 
351 | ```typescript
352 | {
353 |   id: "htWiEU2Gh2h0Dv8nfXrtVcKZBqDQTi8NTb6hL_e7atg",
354 |   transferable: "true",
355 |   name: "Example Name",
356 |   metadata: {
357 |     status: "Initial Status",
358 |     topics: [ "Topic 1", "Topic 2", "Topic 3" ],
359 |     description: "Example Description"
360 |   },
361 |   creator: "creator",
362 |   balances: { creator: "1" },
363 |   ticker: "ATOMIC",
364 |   denomination: "1",
365 |   dateCreated: "1738002523328"
366 | }
367 | ```
368 | 
369 | </details>
370 | 
371 | #### `getAtomicAssets`
372 | 
373 | ```typescript
374 | const assets = await permaweb.getAtomicAssets(assetIds);
375 | ```
376 | 
377 | <details>
378 |   <summary><strong>Parameters</strong></summary>
379 | 
380 | - `assetIds`: A list of the asset IDs to fetch
381 | 
382 | </details>
383 | 
384 | <details>
385 |   <summary>
386 |     <strong>Response</strong>
387 |   </summary>
388 | 
389 | ```typescript
390 | [
391 |   {
392 |     id: "htWiEU2Gh2h0Dv8nfXrtVcKZBqDQTi8NTb6hL_e7atg",
393 |     owner: "nl5hKKS6qrwaGZST_jAcxzgec9rZcB-pCyNFDiPgPpE",
394 |     authority: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
395 |     onBoot: "XYz8buLR5LQdhOOzWuCt9kBjoXHMowouWpXcGm9wdEE",
396 |     creator: "creator",
397 |     assetType: "Example Atomic Asset Type",
398 |     contentType: "text/plain",
399 |     implements: "ANS-110",
400 |     dateCreated: 1738002523328,
401 |     name: "Example Name",
402 |     description: "Example Description",
403 |     topics: ["Topic 1", "Topic 2", "Topic 3"],
404 |     ticker: "ATOMIC",
405 |     denomination: 1,
406 |     totalsupply: 1,
407 |     transferable: true,
408 |     status: "Initial Status",
409 |     dataProtocol: "ao",
410 |     variant: "ao.TN.1",
411 |     type: "Process",
412 |     module: "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM",
413 |     scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
414 |     sdk: "aoconnect",
415 |   },
416 |   {
417 |     id: "tgClfHwR3HqP23vBbKmyXQf3N-LTqsR3-Fm9oH3KCG0",
418 |     owner: "nl5hKKS6qrwaGZST_jAcxzgec9rZcB-pCyNFDiPgPpE",
419 |     authority: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
420 |     onBoot: "XYz8buLR5LQdhOOzWuCt9kBjoXHMowouWpXcGm9wdEE",
421 |     creator: "creator",
422 |     assetType: "Example Atomic Asset Type",
423 |     contentType: "text/plain",
424 |     implements: "ANS-110",
425 |     dateCreated: 1738002535187,
426 |     name: "Example Name",
427 |     description: "Example Description",
428 |     topics: ["Topic 1", "Topic 2", "Topic 3"],
429 |     ticker: "ATOMIC",
430 |     denomination: 1,
431 |     totalsupply: 1,
432 |     transferable: true,
433 |     status: "Initial Status",
434 |     dataProtocol: "ao",
435 |     variant: "ao.TN.1",
436 |     type: "Process",
437 |     module: "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM",
438 |     scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
439 |     sdk: "aoconnect",
440 |   },
441 | ];
442 | ```
443 | 
444 | </details>
445 | 
446 | ### Comments
447 | 
448 | Comments are an instantiation of atomic assets created with additional tags to link them with other comments / atomic assets with specific data or root contexts.
449 | 
450 | #### `createComment`
451 | 
452 | ```typescript
453 | const commentId = await permaweb.createComment({
454 |   content: "Sample comment on an atomic asset",
455 |   creator: profileId,
456 |   parentId: atomicAssetId,
457 | });
458 | ```
459 | 
460 | <details>
461 |   <summary><strong>Parameters</strong></summary>
462 | 
463 | - `args`: Object containing `content`, `creator`, `parentId`, and `rootId (optional)`
464 | - `callback (optional)`: Callback function for status updates.
465 | 
466 | </details>
467 | 
468 | <details>
469 |   <summary>
470 |     <strong>Response</strong>
471 |   </summary>
472 | 
473 | ```typescript
474 | CommentProcessId;
475 | ```
476 | 
477 | </details>
478 | 
479 | #### `getComment`
480 | 
481 | ```typescript
482 | const comment = await permaweb.getComment(commentId);
483 | ```
484 | 
485 | <details>
486 |   <summary><strong>Parameters</strong></summary>
487 | 
488 | - `commentId`: The ID of the comment to fetch.
489 | 
490 | </details>
491 | 
492 | <details>
493 |   <summary>
494 |     <strong>Response</strong>
495 |   </summary>
496 | 
497 | ```typescript
498 | {
499 |   id: "CommentProcessId",
500 |   title: "Comment Title",
501 |   description: "Comment Description",
502 |   parentId: "ParentProcessId",
503 |   rootId: "RootProcessId",
504 |   content: "My Comment",
505 |   contentType: "text/plain",
506 |   creator: "Creator Identifier",
507 |   collectionId: "Collection Identifier",
508 |   transferable: true,
509 |   tags: [
510 |     { name: "Data-Source", value: "Data Source Identifier" },
511 |     { name: "Root-Source", value: "Root Source Identifier" }
512 |   ]
513 | }
514 | ```
515 | 
516 | </details>
517 | 
518 | #### `getComments`
519 | 
520 | ```typescript
521 | const comments = await permaweb.getComments({
522 |   parentId: atomicAssetId,
523 | });
524 | ```
525 | 
526 | <details>
527 |   <summary><strong>Parameters</strong></summary>
528 | 
529 | - `args`: Object containing `parentId` or `rootId`
530 | 
531 | </details>
532 | 
533 | <details>
534 |   <summary>
535 |     <strong>Response</strong>
536 |   </summary>
537 | 
538 | ```typescript
539 | [
540 |   {
541 |     id: "CommentProcessId1",
542 |     title: "Comment Title 1",
543 |     description: "Comment Description 1",
544 |     parentId: "ParentProcessId",
545 |     rootId: "RootProcessId",
546 |     content: "My Comment",
547 |     contentType: "text/plain",
548 |     creator: "Creator Identifier",
549 |     collectionId: "Collection Identifier",
550 |     transferable: true,
551 |     tags: [
552 |       { name: "Data-Source", value: "Data Source Identifier" },
553 |       { name: "Root-Source", value: "Root Source Identifier" },
554 |     ],
555 |   },
556 |   {
557 |     id: "CommentProcessId2",
558 |     title: "Comment Title 2",
559 |     description: "Comment Description 2",
560 |     parentId: "ParentProcessId",
561 |     rootId: "RootProcessId",
562 |     content: "My Comment",
563 |     contentType: "text/plain",
564 |     data: "Comment data 2",
565 |     creator: "Creator Identifier",
566 |     collectionId: "Collection Identifier",
567 |     transferable: true,
568 |     tags: [
569 |       { name: "Data-Source", value: "Data Source Identifier" },
570 |       { name: "Root-Source", value: "Root Source Identifier" },
571 |     ],
572 |   },
573 | ];
574 | ```
575 | 
576 | </details>
577 | 
578 | ### Collections
579 | 
580 | Collections are structured groups of atomic assets, allowing for cohesive representation, management, and categorization of digital items. Collections extend the concept of atomic assets by introducing an organized layer to group and manage related assets. ([Read the spec](./specs/spec-collections.md)).
581 | 
582 | #### `createCollection`
583 | 
584 | ```typescript
585 | const collectionId = await permaweb.createCollection({
586 |   title: "Example Title",
587 |   description: "Example Description",
588 |   creator: profileId,
589 | });
590 | ```
591 | 
592 | <details>
593 |   <summary><strong>Parameters</strong></summary>
594 | 
595 | - `args`: Object containing `title`, `description`, `creator`, `thumbnail (optional)`, and `banner (optional)`
596 | 
597 | </details>
598 | 
599 | <details>
600 |   <summary>
601 |     <strong>Response</strong>
602 |   </summary>
603 | 
604 | ```typescript
605 | CollectionProcessId;
606 | ```
607 | 
608 | </details>
609 | 
610 | #### `updateCollectionAssets`
611 | 
612 | ```typescript
613 | const collectionUpdateId = await permaweb.updateCollectionAssets({
614 |   collectionId: collectionId,
615 |   assetIds: ["AssetId1", "AssetId2", "AssetId3"],
616 |   creator: creator,
617 |   updateType: "Add",
618 | });
619 | ```
620 | 
621 | <details>
622 |   <summary><strong>Parameters</strong></summary>
623 | 
624 | - `args`: Object containing `collectionId`, `assetIds`, `profileId`, and `updateType ("Add" | "Remove")`
625 | 
626 | </details>
627 | 
628 | <details>
629 |   <summary>
630 |     <strong>Response</strong>
631 |   </summary>
632 | 
633 | ```typescript
634 | CollectionProcessUpdateId;
635 | ```
636 | 
637 | </details>
638 | 
639 | #### `getCollection`
640 | 
641 | ```typescript
642 | const collection = await permaweb.getCollection(collectionId);
643 | ```
644 | 
645 | <details>
646 |   <summary><strong>Parameters</strong></summary>
647 | 
648 | - `collectionId`: The ID of the collection to fetch
649 | 
650 | </details>
651 | 
652 | <details>
653 |   <summary><strong>Response</strong></summary>
654 | 
655 | ```typescript
656 | {
657 |   id: "Id",
658 |   title: "Title",
659 |   description: "Description",
660 |   creator: "Creator",
661 |   dateCreated: "DateCreated",
662 |   thumbnail: "ThumbnailTx",
663 |   banner: "BannerTx",
664 |   assets: ["AssetId1", "AssetId2", "AssetId3"]
665 | }
666 | ```
667 | 
668 | </details>
669 | 
670 | #### `getCollections`
671 | 
672 | ```typescript
673 | const collections = await permaweb.getCollections();
674 | ```
675 | 
676 | <details>
677 |   <summary><strong>Parameters</strong></summary>
678 | 
679 | - `args`: Object containing `creator (optional)`
680 | 
681 | </details>
682 | 
683 | <details>
684 |   <summary><strong>Response</strong></summary>
685 | 
686 | ```typescript
687 | [
688 |   {
689 |     id: "Id",
690 |     title: "Title",
691 |     description: "Description",
692 |     creator: "Creator",
693 |     dateCreated: "DateCreated",
694 |     thumbnail: "ThumbnailTx",
695 |     banner: "BannerTx",
696 |     assets: ["AssetId1", "AssetId2", "AssetId3"],
697 |   },
698 |   {
699 |     id: "Id",
700 |     title: "Title",
701 |     description: "Description",
702 |     creator: "Creator",
703 |     dateCreated: "DateCreated",
704 |     thumbnail: "ThumbnailTx",
705 |     banner: "BannerTx",
706 |     assets: ["AssetId1", "AssetId2", "AssetId3"],
707 |   },
708 | ];
709 | ```
710 | 
711 | </details>
712 | 
713 | ## Examples
714 | 
715 | To streamline the integration of `@permaweb/libs` into your React applications, you can use the following `PermawebProvider`. This provider simplifies dependency management and avoids the need to create multiple SDK instances across different components in your frontend application. By leveraging React Context, the provider ensures the Permaweb SDK is initialized once and is accessible throughout your component tree.
716 | 
717 | ### Key Features of This Example:
718 | 
719 | - **Global Initialization**: The `PermawebProvider` initializes the necessary dependencies (e.g., Arweave, AO Connect, and optional wallet signing).
720 | - **React Context Integration**: It makes the initialized `libs` instance globally available to all child components without requiring prop drilling.
721 | - **Reusable Hook**: The `usePermawebProvider` hook offers a convenient way to access the SDK in any component.
722 | 
723 | ---
724 | 
725 | ### Provider Setup
726 | 
727 | The following example demonstrates how to create a React Context and Provider for `@permaweb/libs`.
728 | 
729 | ```typescript
730 | import React from 'react';
731 | 
732 | import Arweave from 'arweave';
733 | import { connect, createDataItemSigner } from '@permaweb/aoconnect';
734 | import Permaweb from '@permaweb/libs';
735 | 
736 | import { useArweaveProvider } from './ArweaveProvider';
737 | 
738 | interface PermawebContextState {
739 | 	libs: any | null;
740 | }
741 | 
742 | const PermawebContext = React.createContext<PermawebContextState>({
743 | 	libs: null,
744 | });
745 | 
746 | export function usePermawebProvider(): PermawebContextState {
747 | 	return React.useContext(PermawebContext);
748 | }
749 | 
750 | export function PermawebProvider(props: { children: React.ReactNode }) {
751 | 	const arProvider = useArweaveProvider();
752 | 
753 | 	const [libs, setLibs] = React.useState<any>(null);
754 | 
755 | 	React.useEffect(() => {
756 | 		const dependencies: any = { ao: connect(), arweave: Arweave.init({}) };
757 | 		if (arProvider.wallet) {
758 | 			dependencies.signer = createDataItemSigner(arProvider.wallet);
759 | 		}
760 | 
761 | 		const permawebInstance = Permaweb.init(dependencies);
762 | 		setLibs(permawebInstance);
763 | 	}, [arProvider.wallet]);
764 | 
765 | 	return <PermawebContext.Provider value={{ libs }}>{props.children}</PermawebContext.Provider>;
766 | }
767 | 
768 | ```
769 | 
770 | ### Explanation:
771 | 
772 | 1. **React Context**: The `PermawebContext` is used to store the initialized `libs` object, making it accessible across your application.
773 | 2. **Dynamic Initialization**: In the `useEffect` hook, the dependencies are initialized once when the provider mounts, including optional wallet signing logic.
774 | 3. **Encapsulation**: The `PermawebProvider` ensures the SDK logic is abstracted, keeping the rest of your app clean and focused.
775 | 
776 | ---
777 | 
778 | ### Usage in a Component
779 | 
780 | Here's how you can use the `usePermawebProvider` hook to access the `libs` instance in a React component:
781 | 
782 | ```typescript
783 | import React from "react";
784 | import { usePermawebProvider } from "providers/PermawebProvider";
785 | 
786 | export default function MyComponent() {
787 |   const { libs } = usePermawebProvider();
788 | 
789 |   React.useEffect(() => {
790 |     (async function fetchAsset() {
791 |       if (libs) {
792 |         try {
793 |           const asset = await libs.getAtomicAsset(id);
794 |           console.log("Fetched Asset:", asset);
795 |         } catch (error) {
796 |           console.error("Error fetching asset:", error);
797 |         }
798 |       }
799 |     })();
800 |   }, [libs]);
801 | 
802 |   return <h1>Permaweb Libs Component</h1>;
803 | }
804 | ```
805 | 
806 | ## Contributions
807 | 
808 | Contributions to **@permaweb/libs** are welcome! Before submitting a new feature or service, please ensure that it:
809 | 
810 | - **Aligns with the ecosystem**: Consider how the service can be broadly applicable across decentralized applications on Arweave. We strive to maintain composable, reusable, and interoperable building blocks.  
811 | - **Is interoperable**: New services or modules should easily integrate with existing modules (e.g., Profiles, Zones, Atomic Assets) to provide a cohesive developer experience.  
812 | - **Includes documentation and tests**: Provide clear documentation, usage examples, and sufficient test coverage to ensure quality and maintainability.
813 | 
814 | ### How to Contribute
815 | 
816 | 1. **Open an Issue**: Start by creating a new issue describing your proposal or bug fix. This helps gather feedback from the community and maintainers.  
817 | 2. **Discuss**: Collaborate on the issue, refine the idea, and outline a plan.  
818 | 3. **Implement**: Submit a Pull Request once you have a working solution. Please follow the existing code style and conventions.  
819 | 4. **Review**: Engage in the review process—address comments, refine your code, and finalize changes.  
820 | 
821 | By ensuring new contributions are designed with the broader ecosystem in mind, we maintain a robust and versatile platform for permaweb developers.
822 | 
823 | ## Resources
824 | 
825 | - [AO Connect](https://github.com/permaweb/ao)
826 | - [ArweaveJS](https://github.com/ArweaveTeam/arweave-js)
827 | 


--------------------------------------------------------------------------------
/sdk/.editorconfig:
--------------------------------------------------------------------------------
1 | [*]
2 | max_line_length = 120
3 | indent_style = tab
4 | quote_type = single


--------------------------------------------------------------------------------
/sdk/.eslintrc.cjs:
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
18 | 							['^web-streams-polyfill', '^arweave', '^@ardrive/turbo-sdk', '^@permaweb/arx', '^@permaweb/aoconnect', '^@permaweb/libs', '^@?\\w'],
19 | 							[
20 | 								'^(@|app)(/.*|$)',
21 | 								'^(@|assets)(/.*|$)',
22 | 								'^(@|clients)(/.*|$)',
23 | 								'^(@|components)(/.*|$)',
24 | 								'^(@|filters)(/.*|$)',
25 | 								'^(@|global)(/.*|$)',
26 | 								'^(@|helpers)(/.*|$)',
27 | 								'^(@|hooks)(/.*|$)',
28 | 								'^(@|navigation)(/.*|$)',
29 | 								'^(@|providers)(/.*|$)',
30 | 								'^(@|root)(/.*|$)',
31 | 								'^(@|routes)(/.*|$)',
32 | 								'^(@|search)(/.*|$)',
33 | 								'^(@|store)(/.*|$)',
34 | 								'^(@|views)(/.*|$)',
35 | 								'^(@|wallet)(/.*|$)',
36 | 								'^(@|workers)(/.*|$)',
37 | 								'^(@|wrappers)(/.*|$)',
38 | 							],
39 | 							['^\\u0000'],
40 | 							['^\\.\\.(?!/?$)', '^\\.\\./?
#39;],
41 | 							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?
#39;],
42 | 						],
43 | 					},
44 | 				],
45 | 			},
46 | 		},
47 | 	],
48 | };
49 | 


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
 1 | import { createRequire } from 'module';
 2 | const require = createRequire(import.meta.url);
 3 | import esbuild from 'esbuild';
 4 | import alias from 'esbuild-plugin-alias';
 5 | import dtsPlugin from 'esbuild-plugin-d.ts';
 6 | import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
 7 | import path from 'path';
 8 | 
 9 | const sharedConfig = {
10 | 	entryPoints: ['src/index.ts'],
11 | 	bundle: true,
12 | 	sourcemap: true,
13 | 	minify: true,
14 | 	inject: [path.resolve('node_modules/process/browser.js')],
15 | 	define: {
16 | 		'process.env.NODE_ENV': JSON.stringify('production'),
17 | 	},
18 | };
19 | 
20 | const buildConfigs = [
21 | 	{
22 | 		...sharedConfig,
23 | 		outfile: 'dist/index.cjs',
24 | 		platform: 'node',
25 | 		format: 'cjs',
26 | 		plugins: [dtsPlugin({ outDir: 'dist/types' })],
27 | 	},
28 | 	{
29 | 		...sharedConfig,
30 | 		outfile: 'dist/index.js',
31 | 		platform: 'node',
32 | 		format: 'esm',
33 | 		plugins: [dtsPlugin({ outDir: 'dist/types' })],
34 | 	},
35 | 	{
36 | 		...sharedConfig,
37 | 		outfile: 'dist/index.esm.js',
38 | 		platform: 'browser',
39 | 		format: 'esm',
40 | 		external: [
41 | 			'fs', 'os', 'path', 'http', 'https', 'zlib'
42 | 		],
43 | 		plugins: [
44 | 			alias({
45 | 				'node:process': require.resolve('process/browser'),
46 | 			}),
47 | 			nodeModulesPolyfillPlugin({
48 | 				globals: { process: true, Buffer: true },
49 | 				modules: {
50 | 					crypto: true,
51 | 					stream: true,
52 | 					events: true,
53 | 					util: true,
54 | 					buffer: true
55 | 				},
56 | 			}),
57 | 			dtsPlugin({ outDir: 'dist/types' })
58 | 		],
59 | 
60 | 	},
61 | ];
62 | 
63 | async function build() {
64 | 	try {
65 | 		for (let i = 0; i < buildConfigs.length; i++) {
66 | 			const cfg = buildConfigs[i];
67 | 			console.log(`Building configuration ${i + 1}: ${cfg.outfile}`);
68 | 			await esbuild.build(cfg);
69 | 			console.log(`Finished building configuration ${i + 1}: ${cfg.outfile}`);
70 | 		}
71 | 		console.log('Build complete!');
72 | 	} catch (err) {
73 | 		console.error('Build failed:', err);
74 | 		process.exit(1);
75 | 	}
76 | }
77 | 
78 | build();


--------------------------------------------------------------------------------
/sdk/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"name": "@permaweb/libs",
 3 | 	"version": "0.0.42",
 4 | 	"type": "module",
 5 | 	"main": "./dist/index.cjs",
 6 | 	"module": "./dist/index.js",
 7 | 	"browser": "./dist/index.esm.js",
 8 | 	"types": "./dist/types/index.d.ts",
 9 | 	"typesVersions": {
10 | 		"*": {
11 | 			"browser": [
12 | 				"./dist/types/index.d.ts"
13 | 			],
14 | 			".": [
15 | 				"./dist/types/index.d.ts"
16 | 			]
17 | 		}
18 | 	},
19 | 	"description": "",
20 | 	"files": [
21 | 		"dist",
22 | 		"README.md"
23 | 	],
24 | 	"keywords": [],
25 | 	"author": "",
26 | 	"license": "ISC",
27 | 	"repository": {
28 | 		"type": "git",
29 | 		"url": "https://github.com/permaweb/permaweb-libs.git",
30 | 		"directory": "sdk"
31 | 	},
32 | 	"exports": {
33 | 		".": {
34 | 			"import": "./dist/index.esm.js",
35 | 			"require": "./dist/index.cjs"
36 | 		},
37 | 		"./browser": "./dist/index.esm.js",
38 | 		"./node": "./dist/index.js"
39 | 	},
40 | 	"scripts": {
41 | 		"format": "eslint --fix . && npx prettier --write .",
42 | 		"build": "node build.js"
43 | 	},
44 | 	"dependencies": {
45 | 		"@dha-team/arbundles": "^1.0.3"
46 | 	},
47 | 	"devDependencies": {
48 | 		"@types/async-retry": "^1.4.9",
49 | 		"@types/node": "^22.10.4",
50 | 		"@typescript-eslint/eslint-plugin": "^5.57.1",
51 | 		"@typescript-eslint/parser": "^5.57.1",
52 | 		"buffer": "^6.0.3",
53 | 		"crypto-browserify": "^3.12.1",
54 | 		"esbuild": "^0.24.2",
55 | 		"esbuild-plugin-alias": "^0.2.1",
56 | 		"esbuild-plugin-d.ts": "^1.3.1",
57 | 		"esbuild-plugin-polyfill-node": "^0.3.0",
58 | 		"esbuild-plugins-node-modules-polyfill": "^1.7.0",
59 | 		"eslint": "^8.35.0",
60 | 		"eslint-plugin-import": "^2.27.5",
61 | 		"eslint-plugin-simple-import-sort": "^10.0.0",
62 | 		"os-browserify": "^0.3.0",
63 | 		"process": "^0.11.10",
64 | 		"stream-browserify": "^3.0.0",
65 | 		"tsc-alias": "^1.8.10",
66 | 		"typescript": "^5.7.2",
67 | 		"util": "^0.12.5",
68 | 		"web-streams-polyfill": "^4.1.0"
69 | 	}
70 | }
71 | 


--------------------------------------------------------------------------------
/sdk/src/common/ao.ts:
--------------------------------------------------------------------------------
  1 | import { AO, GATEWAYS, HB } from '../helpers/config.ts';
  2 | import { getTxEndpoint } from '../helpers/endpoints.ts';
  3 | import {
  4 | 	DependencyType,
  5 | 	MessageDryRunType,
  6 | 	MessageResultType,
  7 | 	MessageSendType,
  8 | 	ProcessCreateType,
  9 | 	ProcessReadType,
 10 | 	ProcessSpawnType,
 11 | 	TagType,
 12 | } from '../helpers/types.ts';
 13 | import { getTagValue, globalLog } from '../helpers/utils.ts';
 14 | 
 15 | import { getGQLData } from './gql.ts';
 16 | 
 17 | const GATEWAY = GATEWAYS.goldsky;
 18 | 
 19 | const GATEWAY_RETRY_COUNT = 100;
 20 | 
 21 | export async function aoSpawn(deps: DependencyType, args: ProcessSpawnType): Promise<string> {
 22 | 	const tags = [{ name: 'Authority', value: AO.mu }];
 23 | 	if (args.tags && args.tags.length > 0) args.tags.forEach((tag: TagType) => tags.push(tag));
 24 | 
 25 | 	try {
 26 | 		const processId = await deps.ao.spawn({
 27 | 			module: args.module,
 28 | 			scheduler: args.scheduler,
 29 | 			signer: deps.signer,
 30 | 			tags: tags,
 31 | 			data: args.data,
 32 | 		});
 33 | 
 34 | 		globalLog(`Process ID: ${processId}`);
 35 | 		
 36 | 		globalLog('Sending initial message...');
 37 | 		await aoSend(deps, {
 38 | 			processId: processId,
 39 | 			action: 'Init'
 40 | 		})
 41 | 
 42 | 
 43 | 		return processId;
 44 | 	} catch (e: any) {
 45 | 		console.log(e)
 46 | 		throw new Error(e.message ?? 'Error spawning process');
 47 | 	}
 48 | }
 49 | 
 50 | export function aoSendWith(deps: DependencyType) {
 51 | 	return async (args: MessageSendType) => {
 52 | 		return await aoSend(deps, args);
 53 | 	}
 54 | }
 55 | 
 56 | export async function aoSend(deps: DependencyType, args: MessageSendType): Promise<string> {
 57 | 	try {
 58 | 		const tags: TagType[] = [{ name: 'Action', value: args.action }];
 59 | 		if (args.tags) tags.push(...args.tags);
 60 | 
 61 | 		const data = args.useRawData ? args.data : JSON.stringify(args.data);
 62 | 
 63 | 		const txId = await deps.ao.message({
 64 | 			process: args.processId,
 65 | 			signer: deps.signer,
 66 | 			tags: tags,
 67 | 			data: data,
 68 | 		});
 69 | 
 70 | 		return txId;
 71 | 	} catch (e: any) {
 72 | 		throw new Error(e);
 73 | 	}
 74 | }
 75 | 
 76 | export function readProcessWith(deps: DependencyType) {
 77 | 	return async (args: ProcessReadType) => {
 78 | 		return await readProcess(deps, args)
 79 | 	}
 80 | }
 81 | 
 82 | export async function readProcess(
 83 | 	deps: DependencyType,
 84 | 	args: ProcessReadType
 85 | ) {
 86 | 	const node = args.node ?? HB.defaultNode
 87 | 	const url = `${node}/${args.processId}~process@1.0/now/${args.path}`;
 88 | 	console.log('Fetching state from HyperBEAM:', url);
 89 | 
 90 | 	try {
 91 | 		const res = await fetch(url);
 92 | 		if (res.ok) {
 93 | 			console.log('Returning state from HyperBEAM.');
 94 | 			return res.json();
 95 | 		}
 96 | 		throw new Error(`Unexpected status ${res.status}`);
 97 | 	} catch (err: any) {
 98 | 		console.error(err.message);
 99 | 		if (args.fallbackAction) {
100 | 			console.log('State not found, dryrunning...');
101 | 			const result = await aoDryRun(deps, { processId: args.processId, action: args.fallbackAction });
102 | 			console.log('Returning state from dryrun.');
103 | 			return result;
104 | 		}
105 | 		throw err;
106 | 	}
107 | }
108 | 
109 | export function aoDryRunWith(deps: DependencyType) {
110 | 	return async (args: MessageSendType) => {
111 | 		return await aoDryRun(deps, args);
112 | 	}
113 | }
114 | 
115 | export async function aoDryRun(deps: DependencyType, args: MessageDryRunType): Promise<any> {
116 | 	try {
117 | 		const tags = [{ name: 'Action', value: args.action }];
118 | 		if (args.tags) tags.push(...args.tags);
119 | 		let dataPayload;
120 | 		if (typeof args.data === 'object') {
121 | 			dataPayload = JSON.stringify(args.data || {});
122 | 		} else if (typeof args.data === 'string') {
123 | 			try {
124 | 				JSON.parse(args.data);
125 | 			} catch (e) {
126 | 				console.error(e);
127 | 				throw new Error('Invalid JSON data');
128 | 			}
129 | 			dataPayload = args.data;
130 | 		}
131 | 
132 | 		const response = await deps.ao.dryrun({
133 | 			process: args.processId,
134 | 			tags: tags,
135 | 			data: dataPayload,
136 | 		});
137 | 
138 | 		if (response.Messages && response.Messages.length) {
139 | 			if (response.Messages[0].Data) {
140 | 				return JSON.parse(response.Messages[0].Data);
141 | 			} else {
142 | 				if (response.Messages[0].Tags) {
143 | 					return response.Messages[0].Tags.reduce((acc: any, item: any) => {
144 | 						acc[item.name] = item.value;
145 | 						return acc;
146 | 					}, {});
147 | 				}
148 | 			}
149 | 		}
150 | 	} catch (e: any) {
151 | 		throw new Error(e.message ?? 'Error dryrunning process');
152 | 	}
153 | }
154 | 
155 | export async function aoMessageResult(deps: DependencyType, args: MessageResultType): Promise<any> {
156 | 	try {
157 | 		const { Messages } = await deps.ao.result({ message: args.messageId, process: args.processId });
158 | 
159 | 		if (Messages && Messages.length) {
160 | 			const response: { [key: string]: any } = {};
161 | 
162 | 			Messages.forEach((message: any) => {
163 | 				const action = getTagValue(message.Tags, 'Action') || args.action;
164 | 
165 | 				let responseData = null;
166 | 				const messageData = message.Data;
167 | 
168 | 				if (messageData) {
169 | 					try {
170 | 						responseData = JSON.parse(messageData);
171 | 					} catch {
172 | 						responseData = messageData;
173 | 					}
174 | 				}
175 | 
176 | 				const responseStatus = getTagValue(message.Tags, 'Status');
177 | 				const responseMessage = getTagValue(message.Tags, 'Message');
178 | 
179 | 				response[action] = {
180 | 					id: args.messageId,
181 | 					status: responseStatus,
182 | 					message: responseMessage,
183 | 					data: responseData,
184 | 				};
185 | 			});
186 | 
187 | 			return response;
188 | 		} else return null;
189 | 	} catch (e) {
190 | 		console.error(e);
191 | 	}
192 | }
193 | 
194 | export async function aoMessageResults(
195 | 	deps: DependencyType,
196 | 	args: {
197 | 		processId: string;
198 | 		action: string;
199 | 		tags: TagType[] | null;
200 | 		data: any;
201 | 		responses?: string[];
202 | 		handler?: string;
203 | 	},
204 | ): Promise<any> {
205 | 	try {
206 | 		const tags = [{ name: 'Action', value: args.action }];
207 | 		if (args.tags) tags.push(...args.tags);
208 | 
209 | 		await deps.ao.message({
210 | 			process: args.processId,
211 | 			signer: deps.signer,
212 | 			tags: tags,
213 | 			data: JSON.stringify(args.data),
214 | 		});
215 | 
216 | 		await new Promise((resolve) => setTimeout(resolve, 1000));
217 | 
218 | 		const messageResults = await deps.ao.results({
219 | 			process: args.processId,
220 | 			sort: 'DESC',
221 | 			limit: 100,
222 | 		});
223 | 
224 | 		if (messageResults && messageResults.edges && messageResults.edges.length) {
225 | 			const response: any = {};
226 | 
227 | 			for (const result of messageResults.edges) {
228 | 				if (result.node && result.node.Messages && result.node.Messages.length) {
229 | 					const resultSet: any[] = [args.action];
230 | 					if (args.responses) resultSet.push(...args.responses);
231 | 
232 | 					for (const message of result.node.Messages) {
233 | 						const action = getTagValue(message.Tags, 'Action');
234 | 
235 | 						if (action) {
236 | 							let responseData = null;
237 | 							const messageData = message.Data;
238 | 
239 | 							if (messageData) {
240 | 								try {
241 | 									responseData = JSON.parse(messageData);
242 | 								} catch {
243 | 									responseData = messageData;
244 | 								}
245 | 							}
246 | 
247 | 							const responseStatus = getTagValue(message.Tags, 'Status');
248 | 							const responseMessage = getTagValue(message.Tags, 'Message');
249 | 
250 | 							if (action === 'Action-Response') {
251 | 								const responseHandler = getTagValue(message.Tags, 'Handler');
252 | 								if (args.handler && args.handler === responseHandler) {
253 | 									response[action] = {
254 | 										status: responseStatus,
255 | 										message: responseMessage,
256 | 										data: responseData,
257 | 									};
258 | 								}
259 | 							} else {
260 | 								if (resultSet.indexOf(action) !== -1) {
261 | 									response[action] = {
262 | 										status: responseStatus,
263 | 										message: responseMessage,
264 | 										data: responseData,
265 | 									};
266 | 								}
267 | 							}
268 | 
269 | 							if (Object.keys(response).length === resultSet.length) break;
270 | 						}
271 | 					}
272 | 				}
273 | 			}
274 | 
275 | 			return response;
276 | 		}
277 | 
278 | 		return null;
279 | 	} catch (e) {
280 | 		console.error(e);
281 | 	}
282 | }
283 | 
284 | export async function handleProcessEval(
285 | 	deps: DependencyType,
286 | 	args: {
287 | 		processId: string;
288 | 		evalTxId?: string | null;
289 | 		evalSrc?: string | null;
290 | 		evalTags?: TagType[];
291 | 	},
292 | ): Promise<string | null> {
293 | 	let src: string | null = null;
294 | 
295 | 	if (args.evalSrc) src = args.evalSrc;
296 | 	else if (args.evalTxId) src = await fetchProcessSrc(args.evalTxId);
297 | 
298 | 	if (src) {
299 | 		try {
300 | 			const evalMessage = await aoSend(deps, {
301 | 				processId: args.processId,
302 | 				action: 'Eval',
303 | 				data: src,
304 | 				tags: args.evalTags || null,
305 | 				useRawData: true,
306 | 			});
307 | 
308 | 			globalLog(`Eval: ${evalMessage}`);
309 | 
310 | 			const evalResult = await aoMessageResult(deps, {
311 | 				processId: args.processId,
312 | 				messageId: evalMessage,
313 | 				action: 'Eval',
314 | 			});
315 | 
316 | 			return evalResult;
317 | 		} catch (e: any) {
318 | 			throw new Error(e.message ?? 'Error sending process eval');
319 | 		}
320 | 	}
321 | 
322 | 	return null;
323 | }
324 | 
325 | export function aoCreateProcessWith(deps: DependencyType) {
326 | 	return async (args: ProcessCreateType, statusCB?: (status: any) => void) => {
327 | 		try {
328 | 			const spawnArgs: any = {
329 | 				module: args.module || AO.module,
330 | 				scheduler: args.scheduler || AO.scheduler,
331 | 			};
332 | 
333 | 			if (args.data) spawnArgs.data = args.data;
334 | 			if (args.tags) spawnArgs.tags = args.tags;
335 | 
336 | 			statusCB && statusCB(`Spawning process...`);
337 | 			const processId = await aoSpawn(deps, spawnArgs);
338 | 
339 | 			if (args.evalTxId || args.evalSrc) {
340 | 				statusCB && statusCB(`Process retrieved!`);
341 | 				statusCB && statusCB('Sending eval...');
342 | 
343 | 				try {
344 | 					const evalResult = await handleProcessEval(deps, {
345 | 						processId: processId,
346 | 						evalTxId: args.evalTxId || null,
347 | 						evalSrc: args.evalSrc || null,
348 | 						evalTags: args.evalTags,
349 | 					});
350 | 
351 | 					if (evalResult && statusCB) statusCB('Eval complete');
352 | 				} catch (e: any) {
353 | 					throw new Error(e.message ?? 'Error creating process');
354 | 				}
355 | 			}
356 | 
357 | 			return processId;
358 | 		} catch (e: any) {
359 | 			throw new Error(e.message ?? 'Error creating process');
360 | 		}
361 | 	};
362 | }
363 | 
364 | export async function aoCreateProcess(
365 | 	deps: DependencyType,
366 | 	args: ProcessCreateType,
367 | 	statusCB?: (status: any) => void,
368 | ): Promise<string> {
369 | 	try {
370 | 		const spawnArgs: any = {
371 | 			module: args.module || AO.module,
372 | 			scheduler: args.scheduler || AO.scheduler,
373 | 		};
374 | 
375 | 		if (args.data) spawnArgs.data = args.data;
376 | 		if (args.tags) spawnArgs.tags = args.tags;
377 | 
378 | 		statusCB && statusCB(`Spawning process...`);
379 | 		const processId = await aoSpawn(deps, spawnArgs);
380 | 
381 | 		if (args.evalTxId || args.evalSrc) {
382 | 			statusCB && statusCB(`Process retrieved!`);
383 | 			statusCB && statusCB('Sending eval...');
384 | 
385 | 			try {
386 | 				const evalResult = await handleProcessEval(deps, {
387 | 					processId: processId,
388 | 					evalTxId: args.evalTxId || null,
389 | 					evalSrc: args.evalSrc || null,
390 | 					evalTags: args.evalTags,
391 | 				});
392 | 
393 | 				if (evalResult && statusCB) statusCB('Eval complete');
394 | 			} catch (e: any) {
395 | 				throw new Error(e.message ?? 'Error creating process');
396 | 			}
397 | 		}
398 | 
399 | 		return processId;
400 | 	} catch (e: any) {
401 | 		throw new Error(e.message ?? 'Error creating process');
402 | 	}
403 | }
404 | 
405 | export async function fetchProcessSrc(txId: string): Promise<string> {
406 | 	try {
407 | 		const srcFetch = await fetch(getTxEndpoint(txId));
408 | 		return await srcFetch.text();
409 | 	} catch (e: any) {
410 | 		throw new Error(e);
411 | 	}
412 | }
413 | 
414 | export async function waitForProcess(args: { processId: string, noRetryLimit?: boolean }) {
415 | 	let retries = 0;
416 | 	const retryLimit = args.noRetryLimit ? Infinity : GATEWAY_RETRY_COUNT;
417 | 
418 | 	while (retries < retryLimit) {
419 | 		await new Promise((resolve) => setTimeout(resolve, 2000));
420 | 
421 | 		const gqlResponse = await getGQLData({
422 | 			gateway: GATEWAY,
423 | 			ids: [args.processId],
424 | 		});
425 | 
426 | 		if (gqlResponse?.data?.length) {
427 | 			const foundProcess = gqlResponse.data[0].node.id;
428 | 			globalLog(`Process found: ${foundProcess} (Try ${retries + 1})`);
429 | 			return foundProcess;
430 | 		} else {
431 | 			globalLog(`Process not found: ${args.processId} (Try ${retries + 1})`);
432 | 			retries++;
433 | 		}
434 | 	}
435 | 
436 | 	if (retryLimit !== Infinity) {
437 | 		throw new Error(`Process not found, please try again`);
438 | 	}
439 | }


--------------------------------------------------------------------------------
/sdk/src/common/arweave.ts:
--------------------------------------------------------------------------------
  1 | import { ArconnectSigner, createData } from '@dha-team/arbundles/web';
  2 | 
  3 | import { TAGS, UPLOAD } from '../helpers/config.ts';
  4 | import { DependencyType, TagType } from '../helpers/types.ts';
  5 | import { checkValidAddress, getBase64Data, getByteSize, getDataURLContentType } from '../helpers/utils.ts';
  6 | 
  7 | export function resolveTransactionWith(deps: DependencyType) {
  8 | 	return async (data: any) => {
  9 | 		if (checkValidAddress(data)) return data;
 10 | 		if (!deps.arweave) throw new Error(`Must initialize with Arweave in order to create transactions`);
 11 | 		try {
 12 | 			return await createTransaction(deps, { data: data });
 13 | 		} catch (e: any) {
 14 | 			throw new Error(e.message ?? 'Error resolving transaction');
 15 | 		}
 16 | 	};
 17 | }
 18 | 
 19 | export async function createTransaction(
 20 | 	deps: DependencyType,
 21 | 	args: {
 22 | 		data: File | string;
 23 | 		tags?: TagType[];
 24 | 	},
 25 | ): Promise<string> {
 26 | 	let content: any = null;
 27 | 	let contentType: string | null = null;
 28 | 	let contentSize: number | null = null;
 29 | 
 30 | 	if (typeof args.data === 'string') {
 31 | 		content = Buffer.from(getBase64Data(args.data), 'base64');
 32 | 		contentType = getDataURLContentType(args.data);
 33 | 		contentSize = getByteSize(content);
 34 | 	}
 35 | 
 36 | 	if (args.data instanceof File) {
 37 | 		content = new Uint8Array(await args.data.arrayBuffer());
 38 | 		contentType = args.data.type;
 39 | 		contentSize = args.data.size;
 40 | 	}
 41 | 
 42 | 	if (content && contentType && contentSize) {
 43 | 		if (contentSize < Number(UPLOAD.dispatchUploadSize)) {
 44 | 			try {
 45 | 				const tx = await deps.arweave.createTransaction({ data: content }, 'use_wallet');
 46 | 				tx.addTag(TAGS.keys.contentType, contentType);
 47 | 				if (args.tags && args.tags.length > 0) args.tags.forEach((tag: TagType) => tx.addTag(tag.name, tag.value));
 48 | 
 49 | 				const response = await (global.window as any).arweaveWallet.dispatch(tx);
 50 | 				return response.id;
 51 | 			}
 52 | 			catch (e: any) {
 53 | 				throw new Error(e.message ?? 'Error dispatching transaction');
 54 | 			}
 55 | 		} else {
 56 | 			try {
 57 | 				const uploadResponse = await runUpload(
 58 | 					args.data as any,
 59 | 					{
 60 | 						tags: [
 61 | 							{ name: 'Content-Type', value: contentType },
 62 | 							{ name: 'App-Name', value: '@permaweb/libs' }
 63 | 						]
 64 | 					},
 65 | 					{
 66 | 						apiUrl: UPLOAD.node1,
 67 | 						token: 'arweave',
 68 | 						chunkSize: 5 * 1024 * 1024,
 69 | 						batchSize: 3,
 70 | 					}
 71 | 				);
 72 | 
 73 | 				console.log(uploadResponse)
 74 | 
 75 | 				console.log('Uploaded dataItem ID:', uploadResponse.id);
 76 | 
 77 | 				return uploadResponse.id;
 78 | 			}
 79 | 			catch (e: any) {
 80 | 				throw new Error(e.message ?? 'Error uploading transaction');
 81 | 			}
 82 | 		}
 83 | 	} else {
 84 | 		throw new Error('Error preparing transaction data');
 85 | 	}
 86 | }
 87 | 
 88 | export async function runUpload(
 89 | 	fileBlob: Blob,
 90 | 	txOpts: any & { upload?: any },
 91 | 	uploadOpts: {
 92 | 		apiUrl: string;
 93 | 		token: string;
 94 | 		chunkSize: number;
 95 | 		batchSize?: number;
 96 | 	}
 97 | ): Promise<any> {
 98 | 	const {
 99 | 		apiUrl,
100 | 		token,
101 | 		chunkSize,
102 | 		batchSize = 3,
103 | 	} = uploadOpts;
104 | 
105 | 	let signer = new ArconnectSigner(window.arweaveWallet);
106 | 	const pubKey = await (signer as any).signer.getActivePublicKey()
107 | 	signer.publicKey = Buffer.from(pubKey, 'base64');
108 | 
109 | 	const rawFile = new Uint8Array(await fileBlob.arrayBuffer());
110 | 	const dataItem = createData(rawFile, signer, {
111 | 		...txOpts,
112 | 		anchor:
113 | 			txOpts.anchor ||
114 | 			(() => {
115 | 				const a = new Uint8Array(32);
116 | 				crypto.getRandomValues(a);
117 | 				return btoa(String.fromCharCode(...a))
118 | 					.replace(/\+/g, '-')
119 | 					.replace(/\//g, '_')
120 | 					.slice(0, 32);
121 | 			})(),
122 | 	});
123 | 
124 | 	await dataItem.sign(signer)
125 | 
126 | 	const rawBytes = dataItem.getRaw();
127 | 
128 | 	const fullBlob = new Blob([rawBytes], {
129 | 		type: 'application/octet-stream',
130 | 	});
131 | 
132 | 	const commonHeaders = { 'x-chunking-version': '2' };
133 | 	let infoRes = await fetch(
134 | 		`${apiUrl}/chunks/${token}/-1/-1`,
135 | 		{ headers: commonHeaders }
136 | 	);
137 | 	if (!infoRes.ok) {
138 | 		throw new Error(
139 | 			`Failed to get upload ID: ${infoRes.status} ${await infoRes.text()}`
140 | 		);
141 | 	}
142 | 	const info = await infoRes.json() as {
143 | 		id: string;
144 | 		min: number;
145 | 		max: number;
146 | 		chunks?: [string, number][];
147 | 	};
148 | 	const uploadId = info.id;
149 | 	if (chunkSize < info.min || chunkSize > info.max) {
150 | 		throw new Error(
151 | 			`Configured chunkSize ${chunkSize} is out of allowed range ${info.min}-${info.max}`
152 | 		);
153 | 	}
154 | 
155 | 	const totalSize = fullBlob.size;
156 | 	const offsets: number[] = [];
157 | 	for (let off = 0; off < totalSize; off += chunkSize) {
158 | 		offsets.push(off);
159 | 	}
160 | 	const present = new Set<number>();
161 | 	(info.chunks ?? []).forEach(([off]) => present.add(Number(off)));
162 | 
163 | 	const dataOffsets = offsets.filter((o) => o > 0 && !present.has(o));
164 | 	const headerOffset = !present.has(0) ? [0] : [];
165 | 	const toUpload = dataOffsets.concat(headerOffset);
166 | 
167 | 	const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));
168 | 
169 | 	for (let i = 0; i < toUpload.length; i += batchSize) {
170 | 		const batch = toUpload.slice(i, i + batchSize);
171 | 		await Promise.all(batch.map(async off => {
172 | 			const slice = fullBlob.slice(off, off + chunkSize);
173 | 			const body = await slice.arrayBuffer();
174 | 
175 | 			let lastError: any = null;
176 | 			for (let attempt = 1; attempt <= 3; attempt++) {
177 | 				try {
178 | 					const up = await fetch(`${apiUrl}/chunks/${token}/${uploadId}/${off}`, {
179 | 						method: 'POST',
180 | 						headers: { 'Content-Type': 'application/octet-stream', ...commonHeaders },
181 | 						body
182 | 					});
183 | 					if (!up.ok) {
184 | 						const text = await up.text();
185 | 						if (up.status === 402) {
186 | 							throw new Error(`402 payment required: ${text}`);
187 | 						}
188 | 						throw new Error(`Chunk upload error ${up.status}: ${text}`);
189 | 					}
190 | 					return;
191 | 				} catch (err: any) {
192 | 					lastError = err;
193 | 					if (attempt < 3) {
194 | 						await sleep(1000 * attempt);
195 | 						continue;
196 | 					}
197 | 				}
198 | 			}
199 | 			throw lastError;
200 | 		}));
201 | 	}
202 | 
203 | 	const finalHeaders: Record<string, string> = {
204 | 		'Content-Type': 'application/octet-stream',
205 | 		...commonHeaders,
206 | 	};
207 | 
208 | 	const finishRes = await fetch(
209 | 		`${apiUrl}/chunks/${token}/${uploadId}/-1`,
210 | 		{
211 | 			method: 'POST',
212 | 			headers: finalHeaders,
213 | 		}
214 | 	);
215 | 	if (!finishRes.ok) {
216 | 		const txt = await finishRes.text();
217 | 		throw new Error(
218 | 			`Finalizing upload failed ${finishRes.status}: ${txt}`
219 | 		);
220 | 	}
221 | 
222 | 	return finishRes.json();
223 | }


--------------------------------------------------------------------------------
/sdk/src/common/gql.ts:
--------------------------------------------------------------------------------
  1 | import { GATEWAYS } from '../helpers/config.ts';
  2 | import {
  3 | 	BatchAGQLResponseType,
  4 | 	BatchGQLArgsType,
  5 | 	DefaultGQLResponseType,
  6 | 	GQLArgsType,
  7 | 	GQLNodeResponseType,
  8 | 	QueryBodyGQLArgsType,
  9 | } from '../helpers/types.ts';
 10 | 
 11 | const CURSORS = {
 12 | 	p1: 'P1',
 13 | 	end: 'END',
 14 | };
 15 | 
 16 | const PAGINATORS = {
 17 | 	default: 100,
 18 | };
 19 | 
 20 | export async function getGQLData(args: GQLArgsType): Promise<DefaultGQLResponseType> {
 21 | 	const paginator = args.paginator ? args.paginator : PAGINATORS.default;
 22 | 	let data: GQLNodeResponseType[] = [];
 23 | 	let count: number = 0;
 24 | 	let nextCursor: string | null = null;
 25 | 
 26 | 	if (args.ids && !args.ids.length) {
 27 | 		return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
 28 | 	}
 29 | 
 30 | 	try {
 31 | 		let queryBody: string = getQueryBody(args);
 32 | 		const response = await getResponse({ gateway: args.gateway ?? GATEWAYS.goldsky, query: getQuery(queryBody) });
 33 | 
 34 | 		if (response?.data?.transactions?.edges?.length) {
 35 | 			data = [...response.data.transactions.edges];
 36 | 			count = response.data.transactions.count ?? 0;
 37 | 
 38 | 			const lastResults: boolean = data.length < paginator || !response.data.transactions.pageInfo.hasNextPage;
 39 | 
 40 | 			if (lastResults) nextCursor = CURSORS.end;
 41 | 			else nextCursor = data[data.length - 1].cursor;
 42 | 
 43 | 			return {
 44 | 				data: data,
 45 | 				count: count,
 46 | 				nextCursor: nextCursor,
 47 | 				previousCursor: null,
 48 | 			};
 49 | 		} else {
 50 | 			return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
 51 | 		}
 52 | 	} catch (e: any) {
 53 | 		console.error(e);
 54 | 		return { data: data, count: count, nextCursor: nextCursor, previousCursor: null };
 55 | 	}
 56 | }
 57 | 
 58 | export async function getAggregatedGQLData(args: GQLArgsType, callback?: (message: string) => void) {
 59 | 	let index = 1;
 60 | 	let fetchResult = await getGQLData(args);
 61 | 
 62 | 	if (fetchResult && fetchResult.data.length) {
 63 | 		let aggregatedData = fetchResult.data;
 64 | 		callback && callback(`Count: ${fetchResult.count}`);
 65 | 		callback && callback(`Pages to fetch: ${Math.ceil(fetchResult.count / (args.paginator ?? PAGINATORS.default))}`);
 66 | 		callback && callback(`Page ${index} fetched`);
 67 | 
 68 | 		while (fetchResult.nextCursor && fetchResult.nextCursor !== CURSORS.end) {
 69 | 			index += 1;
 70 | 			callback && callback(`Fetching page ${index}...`);
 71 | 
 72 | 			fetchResult = await getGQLData({
 73 | 				...args,
 74 | 				cursor: fetchResult.nextCursor,
 75 | 			});
 76 | 
 77 | 			if (fetchResult && fetchResult.data.length) {
 78 | 				aggregatedData = aggregatedData.concat(fetchResult.data);
 79 | 			}
 80 | 		}
 81 | 
 82 | 		callback && callback(`All pages fetched!`);
 83 | 		return aggregatedData;
 84 | 	}
 85 | 	else {
 86 | 		callback && callback('No data found');
 87 | 	}
 88 | 
 89 | 	return null;
 90 | }
 91 | 
 92 | export async function getBatchGQLData(args: BatchGQLArgsType): Promise<BatchAGQLResponseType> {
 93 | 	let responseObject: BatchAGQLResponseType = {};
 94 | 	let queryBody: string = '';
 95 | 
 96 | 	for (const [queryKey, baseArgs] of Object.entries(args.entries)) {
 97 | 		responseObject[queryKey] = { data: [], count: 0, nextCursor: null, previousCursor: null };
 98 | 		queryBody += getQueryBody({ ...baseArgs, gateway: args.gateway ?? GATEWAYS.goldsky, queryKey: queryKey });
 99 | 	}
100 | 
101 | 	try {
102 | 		const response = await getResponse({ gateway: args.gateway ?? GATEWAYS.goldsky, query: getQuery(queryBody) });
103 | 
104 | 		if (response && response.data) {
105 | 			for (const queryKey of Object.keys(response.data)) {
106 | 				const paginator = args.entries[queryKey].paginator ? args.entries[queryKey].paginator : PAGINATORS.default;
107 | 
108 | 				let data: GQLNodeResponseType[] = [];
109 | 				let count: number = 0;
110 | 				let nextCursor: string | null = null;
111 | 
112 | 				if (response.data[queryKey].edges.length) {
113 | 					data = [...response.data[queryKey].edges];
114 | 					count = response.data[queryKey].count ?? 0;
115 | 
116 | 					const lastResults: boolean = data.length < paginator || !response.data[queryKey].pageInfo.hasNextPage;
117 | 
118 | 					if (lastResults) nextCursor = CURSORS.end;
119 | 					else nextCursor = data[data.length - 1].cursor;
120 | 
121 | 					responseObject[queryKey] = {
122 | 						data: [...response.data[queryKey].edges],
123 | 						count: count,
124 | 						nextCursor: nextCursor,
125 | 						previousCursor: null,
126 | 					};
127 | 				}
128 | 			}
129 | 		}
130 | 		return responseObject;
131 | 	} catch (e: any) {
132 | 		console.error(e);
133 | 		return responseObject;
134 | 	}
135 | }
136 | 
137 | function getQuery(body: string): string {
138 | 	const query = { query: `query { ${body} }` };
139 | 	return JSON.stringify(query);
140 | }
141 | 
142 | function getQueryBody(args: QueryBodyGQLArgsType): string {
143 | 	const paginator = args.paginator ? args.paginator : PAGINATORS.default;
144 | 	const ids = args.ids ? JSON.stringify(args.ids) : null;
145 | 	let blockFilter: { min?: number; max?: number } | null = null;
146 | 	if (args.minBlock !== undefined && args.minBlock !== null) {
147 | 		blockFilter = {};
148 | 		blockFilter.min = args.minBlock;
149 | 	}
150 | 	const blockFilterStr = blockFilter ? JSON.stringify(blockFilter).replace(/"([^"]+)":/g, '$1:') : null;
151 | 	const tags = args.tags
152 | 		? JSON.stringify(args.tags)
153 | 				.replace(/"(name)":/g, '$1:')
154 | 				.replace(/"(values)":/g, '$1:')
155 | 				.replace(/"match"/g, 'match')
156 | 				.replace(/"FUZZY_OR"/g, 'FUZZY_OR')
157 | 				.replace(/"WILDCARD"/g, 'WILDCARD')
158 | 		: null;
159 | 	const owners = args.owners ? JSON.stringify(args.owners) : null;
160 | 	const recipients = args.recipients ? JSON.stringify(args.recipients) : null;
161 | 	const cursor = args.cursor && args.cursor !== CURSORS.end ? `"${args.cursor}"` : null;
162 | 	
163 | 	let sort: string = '';
164 | 	if (args.sort) {
165 | 		sort += 'sort: '
166 | 		switch (args.sort) {
167 | 			case 'ascending':
168 | 				sort += 'HEIGHT_ASC';
169 | 				break;
170 | 			case 'descending':
171 | 				sort += 'HEIGHT_DESC';
172 | 				break;
173 | 		}
174 | 	}
175 | 
176 | 	let fetchCount: string = `first: ${paginator}`;
177 | 	let txCount: string = '';
178 | 	let nodeFields: string = `data { size type } owner { address } block { height timestamp }`;
179 | 	let recipientsfield: string = '';
180 | 
181 | 	const gateway = args.gateway ?? GATEWAYS.goldsky;
182 | 	switch (gateway) {
183 | 		case GATEWAYS.arweave:
184 | 			break;
185 | 		case GATEWAYS.goldsky:
186 | 			if (!cursor) txCount = `count`;
187 | 			if (recipients) recipientsfield = `recipients: ${recipients}`;
188 | 			nodeFields += ` recipient`
189 | 			break;
190 | 	}
191 | 
192 | 	let body = `
193 | 		transactions(
194 | 				ids: ${ids},
195 | 				tags: ${tags},
196 | 				${fetchCount}
197 | 				owners: ${owners},
198 | 				${recipientsfield},
199 | 				block: ${blockFilterStr},
200 | 				after: ${cursor},
201 | 				${sort}
202 | 			){
203 | 			${txCount}
204 | 				pageInfo {
205 | 					hasNextPage
206 | 				}
207 | 				edges {
208 | 					cursor
209 | 					node {
210 | 						id
211 | 						tags {
212 | 							name 
213 | 							value 
214 | 						}
215 | 						${nodeFields}
216 | 					}
217 | 				}
218 | 		}`;
219 | 
220 | 	if (args.queryKey) body = `${args.queryKey}: ${body}`;
221 | 
222 | 	return body;
223 | }
224 | 
225 | async function getResponse(args: { gateway: string; query: string }): Promise<any> {
226 | 	try {
227 | 		const response = await fetch(`https://${args.gateway}/graphql`, {
228 | 			method: 'POST',
229 | 			headers: { 'Content-Type': 'application/json' },
230 | 			body: args.query,
231 | 		});
232 | 		return await response.json();
233 | 	} catch (e: any) {
234 | 		throw e;
235 | 	}
236 | }
237 | 


--------------------------------------------------------------------------------
/sdk/src/common/index.ts:
--------------------------------------------------------------------------------
1 | export * from './ao.ts';
2 | export * from './arweave.ts';
3 | export * from './gql.ts';
4 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/config.ts:
--------------------------------------------------------------------------------
 1 | export const AO = {
 2 | 	module: 'URgYpPQzvxxfYQtjrIQ116bl3YBfcImo3JEnNo8Hlrk', 
 3 | 	scheduler: '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA',
 4 | 	mu: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY',
 5 | 	src: {
 6 | 		asset: 'dvlU-5HfAPWcukvnRHwSzMSEsoCqkZAEQsykMQgQ-wE',
 7 | 		collection: 'EmeE2B70hVDdhr9fWou3i_nKARSb_6LXvxRFTH67qvU',
 8 | 		collectionActivity: '8cQtC9TsWURFzboq1aozm8VbzRBc5GGVt7yB80kapfc',
 9 | 		zone: {
10 | 			id: 'fAmxq5HS8V3ijkgTWHRcXtXzU0RPzKK9fmeVi1UwIs0',
11 | 			version: '0.0.2'
12 | 		}
13 | 	},
14 | 	collectionRegistry: 'zwKi27GuKS3GOlwL3EhNGH02SJDDAO5Uy43ZJwomhZ4'
15 | };
16 | 
17 | export const HB = {
18 | 	defaultNode: 'https://tee-4.forward.computer'
19 | };
20 | 
21 | export const CONTENT_TYPES: { [key: string]: { type: string; serialize: (data: any) => any } } = {
22 | 	'application/json': {
23 | 		type: 'application/json',
24 | 		serialize: (data: any) => JSON.stringify(data),
25 | 	},
26 | };
27 | 
28 | export const GATEWAYS = {
29 | 	arweave: 'arweave.net',
30 | 	goldsky: 'arweave-search.goldsky.com',
31 | };
32 | 
33 | export const LICENSES = {
34 | 	udl: {
35 | 		label: 'Universal Data License',
36 | 		address: 'dE0rmDfl9_OWjkDznNEXHaSO_JohJkRolvMzaCroUdw',
37 | 	},
38 | };
39 | 
40 | export const TAGS = {
41 | 	keys: {
42 | 		access: 'Access-Fee',
43 | 		ans110: {
44 | 			title: 'Title',
45 | 			description: 'Description',
46 | 			topic: 'Topic:*',
47 | 			type: 'Type',
48 | 			implements: 'Implements',
49 | 			license: 'License',
50 | 		},
51 | 		assetType: 'Asset-Type',
52 | 		banner: 'Banner',
53 | 		bootloader: 'Bootloader',
54 | 		collectionId: 'Collection-Id',
55 | 		collectionName: 'Collection-Name',
56 | 		commericalUse: 'Commercial-Use',
57 | 		contentType: 'Content-Type',
58 | 		creator: 'Creator',
59 | 		currency: 'Currency',
60 | 		dataModelTraining: 'Data-Model-Training',
61 | 		dataProtocol: 'Data-Protocol',
62 | 		dateCreated: 'Date-Created',
63 | 		derivations: 'Derivations',
64 | 		description: 'Description',
65 | 		displayName: 'Display-Name',
66 | 		handle: 'Handle',
67 | 		implements: 'Implements',
68 | 		initialOwner: 'Initial-Owner',
69 | 		license: 'License',
70 | 		name: 'Name',
71 | 		onBoot: 'On-Boot',
72 | 		paymentAddress: 'Payment-Address',
73 | 		paymentMode: 'Payment-Mode',
74 | 		profileCreator: 'Profile-Creator',
75 | 		profileIndex: 'Profile-Index',
76 | 		protocolName: 'Protocol-Name',
77 | 		renderWith: 'Render-With',
78 | 		thumbnail: 'Thumbnail',
79 | 		title: 'Title',
80 | 		topic: 'Topic',
81 | 		type: 'Type',
82 | 		zoneType: 'Zone-Type',
83 | 	},
84 | 	values: {
85 | 		document: 'Document',
86 | 		user: 'User',
87 | 		zone: 'Permaweb-Zone'
88 | 	},
89 | };
90 | 
91 | export const UPLOAD = {
92 | 	node1: 'https://turbo.ardrive.io',
93 | 	batchSize: 1,
94 | 	chunkSize: 7500000,
95 | 	dispatchUploadSize: 100 * 1024,
96 | };
97 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/endpoints.ts:
--------------------------------------------------------------------------------
 1 | import { checkValidAddress } from './utils.ts';
 2 | 
 3 | const arweaveEndpoint = 'https://arweave.net';
 4 | 
 5 | export function getARBalanceEndpoint(walletAddress: string) {
 6 | 	return `${arweaveEndpoint}/wallet/${walletAddress}/balance`;
 7 | }
 8 | 
 9 | export function getTxEndpoint(txId: string) {
10 | 	return `${arweaveEndpoint}/${txId}`;
11 | }
12 | 
13 | export function getRendererEndpoint(renderWith: string, tx: string) {
14 | 	if (checkValidAddress(renderWith)) {
15 | 		return `${arweaveEndpoint}/${renderWith}/?tx=${tx}`;
16 | 	} else {
17 | 		return `https://${renderWith}.arweave.net/?tx=${tx}`;
18 | 	}
19 | }
20 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/index.ts:
--------------------------------------------------------------------------------
1 | export * from './config.ts';
2 | export * from './endpoints.ts';
3 | export * from './types.ts';
4 | export * from './utils.ts';
5 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/types.ts:
--------------------------------------------------------------------------------
  1 | export type DependencyType = {
  2 | 	ao: any;
  3 | 	signer?: any;
  4 | 	arweave?: any;
  5 | };
  6 | 
  7 | export type ProcessReadType = {
  8 | 	processId: string,
  9 | 	path: string,
 10 | 	fallbackAction: string,
 11 | 	node?: string,
 12 | }
 13 | 
 14 | export type ProcessSpawnType = {
 15 | 	module: string;
 16 | 	scheduler: string;
 17 | 	data: any;
 18 | 	tags: TagType[];
 19 | 	wallet: any;
 20 | };
 21 | 
 22 | export type ProcessCreateType = {
 23 | 	module?: string;
 24 | 	scheduler?: string;
 25 | 	data?: any;
 26 | 	tags?: TagType[];
 27 | 	evalTags?: TagType[];
 28 | 	evalTxId?: string;
 29 | 	evalSrc?: string;
 30 | };
 31 | 
 32 | export type MessageSendType = {
 33 | 	processId: string;
 34 | 	action: string;
 35 | 	tags?: TagType[] | null;
 36 | 	data?: any;
 37 | 	useRawData?: boolean;
 38 | };
 39 | 
 40 | export type MessageResultType = {
 41 | 	messageId: string;
 42 | 	processId: string;
 43 | 	action: string;
 44 | };
 45 | 
 46 | export type MessageDryRunType = {
 47 | 	processId: string;
 48 | 	action: string;
 49 | 	tags?: TagType[] | null;
 50 | 	data?: string | object;
 51 | };
 52 | 
 53 | export type ZoneType = { store: any; assets: ZoneAssetType[] };
 54 | 
 55 | export type ZoneAssetType = { id: string; balance: string; dateCreated: number; lastUpdate: number };
 56 | 
 57 | export type ProfileArgsType = {
 58 | 	username: string;
 59 | 	displayName: string;
 60 | 	description: string;
 61 | 	thumbnail?: any;
 62 | 	banner?: any;
 63 | };
 64 | 
 65 | export type ProfileType = {
 66 | 	id: string;
 67 | 	walletAddress: string;
 68 | 	username: string;
 69 | 	displayName: string;
 70 | 	description: string;
 71 | 	thumbnail?: any;
 72 | 	banner?: any;
 73 | 	assets: { id: string; quantity: string }[];
 74 | } & any;
 75 | 
 76 | export type AssetCreateArgsType = {
 77 | 	name: string;
 78 | 	description: string;
 79 | 	topics: string[];
 80 | 	creator: string;
 81 | 	data: any;
 82 | 	contentType: string;
 83 | 	assetType: string;
 84 | 	supply?: number;
 85 | 	denomination?: number;
 86 | 	transferable?: boolean;
 87 | 	metadata?: object;	
 88 | 	tags?: TagType[];
 89 | 	src?: string;
 90 | 	users?: string[];
 91 | };
 92 | 
 93 | export type AssetHeaderType = {
 94 | 	id: string;
 95 | 	owner: string | null
 96 | };
 97 | 
 98 | export type AssetDetailType = {
 99 | 	id: string;
100 | 	name: string;
101 | 	ticker: string;
102 | 	denomination: string;
103 | 	totalSupply: string;
104 | 	transferable: string;
105 | 	creator: string;
106 | 	balances: object;
107 | 	metadata: any;
108 | 	dateCreated: string;
109 | 	lastUpdate: string;
110 | }
111 | 
112 | export type CommentHeaderType = {
113 | 	id: string; 
114 | 	content: string;
115 | 	parentId: string; 
116 | 	rootId: string
117 | };
118 | 
119 | export type CommentDetailType = {
120 | 	content: string;
121 | 	parentId: string;
122 | 	rootId: string;
123 | }
124 | 
125 | export type CommentCreateArgType = { content: string; creator: string;  parentId: string; rootId?: string, tags?: TagType[] };
126 | 
127 | export type CollectionManifestType = {
128 | 	type: string;
129 | 	items: string[];
130 | };
131 | 
132 | export type CollectionType = {
133 | 	id: string;
134 | 	title: string;
135 | 	description: string | null;
136 | 	creator: string;
137 | 	dateCreated: string;
138 | 	banner: string | null;
139 | 	thumbnail: string | null;
140 | };
141 | 
142 | export type CollectionDetailType = CollectionType & {
143 | 	assetIds: string[];
144 | };
145 | 
146 | export type UDLicenseType = {
147 | 	access: UDLicenseValueType | null;
148 | 	derivations: UDLicenseValueType | null;
149 | 	commercialUse: UDLicenseValueType | null;
150 | 	dataModelTraining: UDLicenseValueType | null;
151 | 	paymentMode: string | null;
152 | 	paymentAddress: string | null;
153 | 	currency: string | null;
154 | };
155 | 
156 | export type UDLicenseValueType = {
157 | 	value: string | null;
158 | 	icon?: string;
159 | 	endText?: string;
160 | };
161 | 
162 | export type BaseGQLArgsType = {
163 | 	ids?: string[] | null;
164 | 	tags?: TagFilterType[] | null;
165 | 	owners?: string[] | null;
166 | 	recipients?: string[] | null;
167 | 	cursor?: string | null;
168 | 	paginator?: number;
169 | 	minBlock?: number;
170 | 	maxBlock?: number;
171 | 	sort?: GQLSortType;
172 | };
173 | 
174 | export type GQLArgsType = { gateway: string } & BaseGQLArgsType;
175 | 
176 | export type QueryBodyGQLArgsType = BaseGQLArgsType & { gateway?: string; queryKey?: string };
177 | 
178 | export type BatchGQLArgsType = {
179 | 	gateway: string;
180 | 	entries: { [queryKey: string]: BaseGQLArgsType };
181 | };
182 | 
183 | export type GQLNodeResponseType = {
184 | 	cursor: string | null;
185 | 	node: {
186 | 		id: string;
187 | 		tags: TagType[];
188 | 		recipient?: string;
189 | 		data: {
190 | 			size: string;
191 | 			type: string;
192 | 		};
193 | 		owner: {
194 | 			address: string;
195 | 		};
196 | 		block: {
197 | 			height: number;
198 | 			timestamp: number;
199 | 		};
200 | 	};
201 | };
202 | 
203 | export type GQLResponseType = {
204 | 	count: number;
205 | 	nextCursor: string | null;
206 | 	previousCursor: string | null;
207 | };
208 | 
209 | export type DefaultGQLResponseType = {
210 | 	data: GQLNodeResponseType[];
211 | } & GQLResponseType;
212 | 
213 | export type BatchAGQLResponseType = { [queryKey: string]: DefaultGQLResponseType };
214 | 
215 | export type TagType = { name: string; value: string };
216 | 
217 | export type TagFilterType = { name: string; values: string[]; match?: string };
218 | 
219 | export type GQLSortType = 'ascending' | 'descending';
220 | 


--------------------------------------------------------------------------------
/sdk/src/helpers/utils.ts:
--------------------------------------------------------------------------------
  1 | import { TAGS } from './config.ts';
  2 | 
  3 | declare const InstallTrigger: any;
  4 | 
  5 | export function checkValidAddress(address: string | null) {
  6 | 	if (!address) return false;
  7 | 	return /^[a-z0-9_-]{43}$/i.test(address);
  8 | }
  9 | 
 10 | export function formatAddress(address: string | null, wrap: boolean) {
 11 | 	if (!address) return '';
 12 | 	if (!checkValidAddress(address)) return address;
 13 | 	const formattedAddress = address.substring(0, 5) + '...' + address.substring(36, address.length);
 14 | 	return wrap ? `(${formattedAddress})` : formattedAddress;
 15 | }
 16 | 
 17 | export function getTagValue(list: { [key: string]: any }[], name: string): string | null {
 18 | 	for (let i = 0; i < list.length; i++) {
 19 | 		if (list[i]) {
 20 | 			if (list[i]!.name === name) {
 21 | 				return list[i]!.value as string;
 22 | 			}
 23 | 		}
 24 | 	}
 25 | 	return null;
 26 | }
 27 | 
 28 | export function formatCount(count: string): string {
 29 | 	if (count === '0' || !Number(count)) return '0';
 30 | 
 31 | 	if (count.includes('.')) {
 32 | 		let parts = count.split('.');
 33 | 		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 34 | 
 35 | 		// Find the position of the last non-zero digit within the first 6 decimal places
 36 | 		let index = 0;
 37 | 		for (let i = 0; i < Math.min(parts[1].length, 6); i++) {
 38 | 			if (parts[1][i] !== '0') {
 39 | 				index = i + 1;
 40 | 			}
 41 | 		}
 42 | 
 43 | 		if (index === 0) {
 44 | 			// If all decimals are zeros, keep two decimal places
 45 | 			parts[1] = '00';
 46 | 		} else {
 47 | 			// Otherwise, truncate to the last non-zero digit
 48 | 			parts[1] = parts[1].substring(0, index);
 49 | 
 50 | 			// If the decimal part is longer than 4 digits, truncate to 4 digits
 51 | 			if (parts[1].length > 4 && parts[1].substring(0, 4) !== '0000') {
 52 | 				parts[1] = parts[1].substring(0, 4);
 53 | 			}
 54 | 		}
 55 | 
 56 | 		return parts.join('.');
 57 | 	} else {
 58 | 		return count.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 59 | 	}
 60 | }
 61 | 
 62 | export function formatPercentage(percentage: any) {
 63 | 	if (isNaN(percentage)) return '0%';
 64 | 
 65 | 	let multiplied = percentage * 100;
 66 | 	let decimalPart = multiplied.toString().split('.')[1];
 67 | 
 68 | 	if (!decimalPart) {
 69 | 		return `${multiplied.toFixed(0)}%`;
 70 | 	}
 71 | 
 72 | 	if (decimalPart.length > 6 && decimalPart.substring(0, 6) === '000000') {
 73 | 		return `${multiplied.toFixed(0)}%`;
 74 | 	}
 75 | 
 76 | 	let nonZeroIndex = decimalPart.length;
 77 | 	for (let i = 0; i < decimalPart.length; i++) {
 78 | 		if (decimalPart[i] !== '0') {
 79 | 			nonZeroIndex = i + 1;
 80 | 			break;
 81 | 		}
 82 | 	}
 83 | 
 84 | 	return `${multiplied.toFixed(nonZeroIndex)}%`;
 85 | }
 86 | 
 87 | export function formatDate(dateArg: string | number | null, dateType: 'iso' | 'epoch', fullTime?: boolean) {
 88 | 	if (!dateArg) {
 89 | 		return null;
 90 | 	}
 91 | 
 92 | 	let date: Date | null = null;
 93 | 
 94 | 	switch (dateType) {
 95 | 		case 'iso':
 96 | 			date = new Date(dateArg);
 97 | 			break;
 98 | 		case 'epoch':
 99 | 			date = new Date(Number(dateArg));
100 | 			break;
101 | 		default:
102 | 			date = new Date(dateArg);
103 | 			break;
104 | 	}
105 | 
106 | 	return fullTime
107 | 		? `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getUTCFullYear()} at ${
108 | 				date.getHours() % 12 || 12
109 | 			}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() >= 12 ? 'PM' : 'AM'}`
110 | 		: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getUTCFullYear()}`;
111 | }
112 | 
113 | export function getRelativeDate(timestamp: number) {
114 | 	if (!timestamp) return '-';
115 | 	const currentDate = new Date();
116 | 	const inputDate = new Date(timestamp);
117 | 
118 | 	const timeDifference: number = currentDate.getTime() - inputDate.getTime();
119 | 	const secondsDifference = Math.floor(timeDifference / 1000);
120 | 	const minutesDifference = Math.floor(secondsDifference / 60);
121 | 	const hoursDifference = Math.floor(minutesDifference / 60);
122 | 	const daysDifference = Math.floor(hoursDifference / 24);
123 | 	const monthsDifference = Math.floor(daysDifference / 30.44); // Average days in a month
124 | 	const yearsDifference = Math.floor(monthsDifference / 12);
125 | 
126 | 	if (yearsDifference > 0) {
127 | 		return `${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
128 | 	} else if (monthsDifference > 0) {
129 | 		return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
130 | 	} else if (daysDifference > 0) {
131 | 		return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
132 | 	} else if (hoursDifference > 0) {
133 | 		return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
134 | 	} else if (minutesDifference > 0) {
135 | 		return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
136 | 	} else {
137 | 		return `${secondsDifference} second${secondsDifference !== 1 ? 's' : ''} ago`;
138 | 	}
139 | }
140 | 
141 | export function formatRequiredField(field: string) {
142 | 	return `${field} *`;
143 | }
144 | 
145 | export function splitTagValue(tag: any) {
146 | 	let parts = tag.split('-');
147 | 
148 | 	let lastPart = parts[parts.length - 1];
149 | 	if (!isNaN(lastPart)) {
150 | 		parts = parts.slice(0, -1).join(' ') + ': ' + lastPart;
151 | 	} else {
152 | 		parts = parts.join(' ');
153 | 	}
154 | 
155 | 	return parts;
156 | }
157 | 
158 | export function getTagDisplay(value: string) {
159 | 	let result = value.replace(/([A-Z])/g, ' $1').trim();
160 | 	result = result.charAt(0).toUpperCase() + result.slice(1);
161 | 	return result;
162 | }
163 | 
164 | export function getDataURLContentType(dataURL: string) {
165 | 	const result = dataURL.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
166 | 	return result ? result[1] : null;
167 | }
168 | 
169 | export function getBase64Data(dataURL: string) {
170 | 	return dataURL.split(',')[1];
171 | }
172 | 
173 | export function getByteSize(input: string | Buffer): number {
174 | 	let sizeInBytes: number;
175 | 	if (Buffer.isBuffer(input)) {
176 | 		sizeInBytes = input.length;
177 | 	} else if (typeof input === 'string') {
178 | 		sizeInBytes = Buffer.byteLength(input, 'utf-8');
179 | 	} else {
180 | 		throw new Error('Input must be a string or a Buffer');
181 | 	}
182 | 
183 | 	return sizeInBytes;
184 | }
185 | 
186 | export function getTotalTokenBalance(tokenBalances: { profileBalance: number; walletBalance: number } | null) {
187 | 	if (!tokenBalances) return null;
188 | 	const total = (tokenBalances.profileBalance || 0) + (tokenBalances.walletBalance || 0);
189 | 	return total;
190 | }
191 | 
192 | export function isFirefox(): boolean {
193 | 	return typeof InstallTrigger !== 'undefined';
194 | }
195 | 
196 | export function reverseDenomination(number: number) {
197 | 	let count = 0;
198 | 
199 | 	while (number > 0 && number % 10 === 0) {
200 | 		count++;
201 | 		number /= 10;
202 | 	}
203 | 
204 | 	return count;
205 | }
206 | 
207 | export function cleanProcessField(value: string) {
208 | 	let updatedValue: string;
209 | 	updatedValue = value.replace(/\[|\]/g, '');
210 | 	return `[[${updatedValue}]]`;
211 | }
212 | 
213 | export function cleanTagValue(value: string) {
214 | 	let updatedValue: string;
215 | 	updatedValue = value.replace(/\[|\]/g, '');
216 | 	return updatedValue;
217 | }
218 | 
219 | /**
220 |  * Extracts all values from a key-value store that match a given prefix
221 |  * @param store The key-value store object to search
222 |  * @param prefix The prefix to filter keys by (e.g., 'portal')
223 |  * @returns Array of values whose keys match the prefix
224 |  */
225 | export function getStoreNamespace<T = any>(prefix: string, store: Record<string, T>): T[] {
226 | 	if (!store) return [];
227 | 
228 | 	const searchPrefix = `${prefix}:`;
229 | 	return Object.keys(store)
230 | 		.filter((key) => key.startsWith(searchPrefix))
231 | 		.map((key) => store[key]) as any;
232 | }
233 | 
234 | export function buildStoreNamespace(prefix: string, value: string) {
235 | 	return `${prefix}:${value.toLowerCase().replace(/\s+/g, '-')}`;
236 | }
237 | 
238 | export const globalLog = (...args: any[]) => {
239 | 	console.log('[@permaweb/libs]', ...args);
240 | };
241 | 
242 | function toProcessCase(str: string): string {
243 | 	return str.replace(/^[a-z]/, (match) => match.toUpperCase());
244 | }
245 | 
246 | /* Maps an object from camel case to pascal case */
247 | export function mapToProcessCase(obj: any): any {
248 | 	if (Array.isArray(obj)) {
249 | 		return obj.map(mapToProcessCase);
250 | 	} else if (obj && typeof obj === 'object') {
251 | 		return Object.entries(obj).reduce((acc: any, [key, value]) => {
252 | 			const toKey = toProcessCase(key);
253 | 			acc[toKey] = checkValidAddress(value as any) ? value : mapToProcessCase(value);
254 | 			return acc;
255 | 		}, {});
256 | 	}
257 | 	return obj;
258 | }
259 | 
260 | function fromProcessCase(str: string) {
261 | 	return str.charAt(0).toLowerCase() + str.slice(1);
262 | }
263 | 
264 | /* Maps an object from pascal case to camel case */
265 | export function mapFromProcessCase(obj: any): any {
266 | 	if (Array.isArray(obj)) {
267 | 		return obj.map(mapFromProcessCase);
268 | 	} else if (obj && typeof obj === 'object') {
269 | 		return Object.entries(obj).reduce((acc: any, [key, value]) => {
270 | 			const fromKey = checkValidAddress(key as any) || key.includes('-') ? key : fromProcessCase(key);
271 | 			acc[fromKey] = checkValidAddress(value as any) ? value : mapFromProcessCase(value);
272 | 			return acc;
273 | 		}, {});
274 | 	}
275 | 	return obj;
276 | }
277 | 
278 | export function getBootTag(key: string, value: string) {
279 | 	const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
280 | 	return { name: `${TAGS.keys.bootloader}-${capitalizedKey}`, value };
281 | }
282 | 


--------------------------------------------------------------------------------
/sdk/src/index.ts:
--------------------------------------------------------------------------------
 1 | import * as Common from './common/index.ts';
 2 | import * as Helpers from './helpers/index.ts';
 3 | import * as Services from './services/index.ts';
 4 | 
 5 | export * as Types from './helpers/types.ts';
 6 | 
 7 | /* For clients to be able to detect new zone versions */
 8 | export const CurrentZoneVersion = Helpers.AO.src.zone.version;
 9 | 
10 | function init(deps: Helpers.DependencyType) {
11 | 	return {
12 | 		/* Zones */
13 | 		createZone: Services.createZoneWith(deps),
14 | 		updateZone: Services.updateZoneWith(deps),
15 | 		addToZone: Services.addToZoneWith(deps),
16 | 		getZone: Services.getZoneWith(deps),
17 | 		setZoneRoles: Services.setZoneRolesWith(deps),
18 | 		joinZone: Services.joinZoneWith(deps),
19 | 		updateZoneVersion: Services.updateZoneVersionWith(deps),
20 | 		
21 | 		/* Profiles */
22 | 		createProfile: Services.createProfileWith(deps),
23 | 		updateProfile: Services.updateProfileWith(deps),
24 | 		updateProfileVersion: Services.updateProfileVersionWith(deps),
25 | 		getProfileById: Services.getProfileByIdWith(deps),
26 | 		getProfileByWalletAddress: Services.getProfileByWalletAddressWith(deps),
27 | 		
28 | 		/* Assets */
29 | 		createAtomicAsset: Services.createAtomicAssetWith(deps),
30 | 		getAtomicAsset: Services.getAtomicAssetWith(deps),
31 | 		getAtomicAssets: Services.getAtomicAssets,
32 | 		
33 | 		/* Comments */
34 | 		createComment: Services.createCommentWith(deps),
35 | 		getComment: Services.getCommentWith(deps),
36 | 		getComments: Services.getCommentsWith(deps),
37 | 		
38 | 		/* Collections */
39 | 		createCollection: Services.createCollectionWith(deps),
40 | 		updateCollectionAssets: Services.updateCollectionAssetsWith(deps),
41 | 		getCollection: Services.getCollectionWith(deps),
42 | 		getCollections: Services.getCollectionsWith(deps),
43 | 		
44 | 		/* Common */
45 | 		resolveTransaction: Common.resolveTransactionWith(deps),
46 | 		getGQLData: Common.getGQLData,
47 | 		getAggregatedGQLData: Common.getAggregatedGQLData,
48 | 		createProcess: Common.aoCreateProcessWith(deps),
49 | 		readProcess: Common.aoDryRunWith(deps),
50 | 		readState: Common.readProcessWith(deps),
51 | 		sendMessage: Common.aoSendWith(deps),
52 | 		
53 | 		/* Utils */
54 | 		mapFromProcessCase: Helpers.mapFromProcessCase,
55 | 		mapToProcessCase: Helpers.mapToProcessCase,
56 | 	};
57 | }
58 | 
59 | export default { init };
60 | 


--------------------------------------------------------------------------------
/sdk/src/services/assets.ts:
--------------------------------------------------------------------------------
  1 | import { aoCreateProcess, aoDryRun, readProcess } from '../common/ao.ts';
  2 | import { getGQLData } from '../common/gql.ts';
  3 | import { AO, CONTENT_TYPES, GATEWAYS, TAGS } from '../helpers/config.ts';
  4 | import {
  5 | 	AssetCreateArgsType,
  6 | 	AssetDetailType,
  7 | 	AssetHeaderType,
  8 | 	DependencyType,
  9 | 	GQLNodeResponseType,
 10 | 	TagType
 11 | } from '../helpers/types.ts';
 12 | import { getBootTag, mapFromProcessCase, mapToProcessCase } from '../helpers/utils.ts';
 13 | 
 14 | export function createAtomicAssetWith(deps: DependencyType) {
 15 | 	return async (args: AssetCreateArgsType, callback?: (status: any) => void) => {
 16 | 		const validationError = getValidationErrorMessage(args);
 17 | 		if (validationError) throw new Error(validationError);
 18 | 
 19 | 		const data = CONTENT_TYPES[args.contentType]?.serialize(args.data) ?? args.data;
 20 | 		const tags = buildAssetCreateTags(args);
 21 | 
 22 | 		try {
 23 | 			const assetId = await aoCreateProcess(
 24 | 				deps,
 25 | 				{ tags: tags, data: data },
 26 | 				callback ? (status: any) => callback(status) : undefined,
 27 | 			);
 28 | 
 29 | 			return assetId;
 30 | 		} catch (e: any) {
 31 | 			throw new Error(e.message ?? 'Error creating asset');
 32 | 		}
 33 | 	};
 34 | }
 35 | 
 36 | export async function getAtomicAsset(
 37 | 	deps: DependencyType,
 38 | 	id: string,
 39 | 	args?: { useGateway?: boolean }
 40 | ): Promise<AssetDetailType | null> {
 41 | 	try {
 42 | 		const processInfo = mapFromProcessCase(await readProcess(deps, {
 43 | 			processId: id,
 44 | 			path: 'asset',
 45 | 			fallbackAction: 'Info',
 46 | 		}));
 47 | 
 48 | 		if (args?.useGateway) {
 49 | 			const gqlResponse = await getGQLData({
 50 | 				gateway: GATEWAYS.goldsky,
 51 | 				ids: [id],
 52 | 				tags: null,
 53 | 				owners: null,
 54 | 				cursor: null,
 55 | 			});
 56 | 
 57 | 			const gatewayAsset = gqlResponse?.data?.[0]
 58 | 				? buildAsset(gqlResponse.data[0])
 59 | 				: {};
 60 | 			
 61 | 			return {
 62 | 				...gatewayAsset,
 63 | 				...processInfo,
 64 | 			};
 65 | 		}
 66 | 
 67 | 		return {
 68 | 			id: id,
 69 | 			...processInfo
 70 | 		}
 71 | 	} catch (e: any) {
 72 | 		throw new Error(e.message || 'Error fetching atomic asset');
 73 | 	}
 74 | }
 75 | 
 76 | export function getAtomicAssetWith(deps: DependencyType) {
 77 | 	return async (id: string, args?: { useGateway?: boolean }): Promise<AssetDetailType | null> => {
 78 | 		return await getAtomicAsset(deps, id, args);
 79 | 	};
 80 | }
 81 | 
 82 | export async function getAtomicAssets(ids: string[]): Promise<AssetHeaderType[] | null> {
 83 | 	try {
 84 | 		const gqlResponse = await getGQLData({
 85 | 			gateway: GATEWAYS.arweave,
 86 | 			ids: ids ?? null,
 87 | 			tags: null,
 88 | 			owners: null,
 89 | 			cursor: null,
 90 | 		});
 91 | 
 92 | 		if (gqlResponse && gqlResponse.data.length) {
 93 | 			return gqlResponse.data.map((element: GQLNodeResponseType) => buildAsset(element));
 94 | 		}
 95 | 
 96 | 		return null;
 97 | 	} catch (e: any) {
 98 | 		throw new Error(e);
 99 | 	}
100 | }
101 | 
102 | export function buildAsset(element: GQLNodeResponseType): any {
103 | 	const asset: any = { id: element.node.id, owner: element.node.owner.address };
104 | 
105 | 	for (const tag of element.node.tags) {
106 | 		const originalKey = tag.name;
107 | 
108 | 		const keyWithoutPrefix = originalKey.startsWith(`${TAGS.keys.bootloader}-`)
109 | 			? originalKey.slice(`${TAGS.keys.bootloader}-`.length)
110 | 			: originalKey;
111 | 
112 | 		const formattedKey = keyWithoutPrefix
113 | 			.split('-')
114 | 			.map((part, index) =>
115 | 				index === 0
116 | 					? part.toLowerCase()
117 | 					: part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
118 | 			)
119 | 			.join('');
120 | 
121 | 		let decodedValue;
122 | 		try {
123 | 			decodedValue = JSON.parse(tag.value);
124 | 		} catch {
125 | 			decodedValue = tag.value.toString();
126 | 		}
127 | 
128 | 		asset[formattedKey] = decodedValue;
129 | 	}
130 | 
131 | 	return asset;
132 | }
133 | 
134 | function buildAssetCreateTags(args: AssetCreateArgsType): { name: string; value: string }[] {
135 | 	const tags = [
136 | 		{ name: TAGS.keys.onBoot, value: args.src ?? AO.src.asset },
137 | 		{ name: TAGS.keys.creator, value: args.creator },
138 | 		{ name: TAGS.keys.assetType, value: args.assetType },
139 | 		{ name: TAGS.keys.contentType, value: args.contentType },
140 | 		{ name: TAGS.keys.implements, value: 'ANS-110' },
141 | 		{ name: TAGS.keys.dateCreated, value: new Date().getTime().toString() },
142 | 		getBootTag('Name', args.name),
143 | 		getBootTag('Description', args.description),
144 | 		getBootTag('Topics', JSON.stringify(args.topics)),
145 | 		getBootTag('Ticker', 'ATOMIC'),
146 | 		getBootTag('Denomination', args.denomination?.toString() ?? '1'),
147 | 		getBootTag('TotalSupply', args.supply?.toString() ?? '1'),
148 | 		getBootTag('Transferable', args.transferable?.toString() ?? 'true'),
149 | 		getBootTag('Creator', args.creator),
150 | 	];
151 | 
152 | 	if (args.metadata) {
153 | 		for (const entry in args.metadata) {
154 | 			tags.push(getBootTag(mapToProcessCase(entry), (args.metadata as any)[entry].toString()));
155 | 		}
156 | 	}
157 | 	
158 | 	if (args.users) {
159 | 		for (const user of args.users) {
160 | 			tags.push({ name: 'Auth-User', value: user });
161 | 		}
162 | 	}
163 | 
164 | 	if (args.tags) args.tags.forEach((tag: TagType) => tags.push(tag));
165 | 
166 | 	return tags;
167 | }
168 | 
169 | function getValidationErrorMessage(args: AssetCreateArgsType): string | null {
170 | 	if (typeof args !== 'object' || args === null) return 'The provided arguments are invalid or empty.';
171 | 
172 | 	const requiredFields = ['name', 'description', 'topics', 'creator', 'data', 'contentType', 'assetType'];
173 | 	for (const field of requiredFields) {
174 | 		if (!(field in args)) return `Missing field '${field}'`;
175 | 	}
176 | 
177 | 	if (typeof args.name !== 'string' || args.name.trim() === '') return 'Name is required';
178 | 	if (typeof args.description !== 'string') return 'The description must be a valid string';
179 | 	if (!Array.isArray(args.topics) || args.topics.length === 0) return 'Topics are required';
180 | 	if (typeof args.creator !== 'string' || args.creator.trim() === '') return 'Creator is required';
181 | 	if (args.data === undefined || args.data === null) return 'Data field is required';
182 | 	if (typeof args.contentType !== 'string' || args.contentType.trim() === '')
183 | 		return 'Content type must be a non-empty string';
184 | 	if (typeof args.assetType !== 'string' || args.assetType.trim() === '') return 'Type must be a non-empty string';
185 | 
186 | 	if ('supply' in args && (typeof args.supply !== 'number' || args.supply <= 0))
187 | 		return 'Supply must be a positive number';
188 | 	if ('denomination' in args && (typeof args.denomination !== 'number' || args.denomination <= 0))
189 | 		return 'Denomination must be a positive number';
190 | 	if ('transferable' in args && typeof args.transferable !== 'boolean') return 'Transferable must be a boolean value';
191 | 	if ('metadata' in args && typeof args.metadata !== 'object') return 'Metadata must be an object';
192 | 	if ('tags' in args && (!Array.isArray(args.tags) || args.tags.some((tag) => typeof tag !== 'object')))
193 | 		return 'Tags must be an array of objects';
194 | 	if ('src' in args && typeof args.src !== 'string') return 'Source must be a valid string';
195 | 
196 | 	return null;
197 | }
198 | 


--------------------------------------------------------------------------------
/sdk/src/services/collections.ts:
--------------------------------------------------------------------------------
  1 | import { aoCreateProcess, aoDryRun, aoSend, readProcess } from '../common/ao.ts';
  2 | import { resolveTransactionWith } from '../common/arweave.ts';
  3 | import { AO, TAGS } from '../helpers/config.ts';
  4 | import { getTxEndpoint } from '../helpers/endpoints.ts';
  5 | import { CollectionDetailType, CollectionType, DependencyType, TagType } from '../helpers/types.ts';
  6 | import { cleanProcessField, cleanTagValue, globalLog, mapFromProcessCase } from '../helpers/utils.ts';
  7 | 
  8 | const DEFAULT_COLLECTION_BANNER = 'eXCtpVbcd_jZ0dmU2PZ8focaKxBGECBQ8wMib7sIVPo';
  9 | const DEFAULT_COLLECTION_THUMBNAIL = 'lJovHqM9hwNjHV5JoY9NGWtt0WD-5D4gOqNL2VWW5jk';
 10 | 
 11 | export function createCollectionWith(deps: DependencyType) {
 12 | 	return async (args: {
 13 | 		title: string;
 14 | 		description: string;
 15 | 		creator: string;
 16 | 		thumbnail: any;
 17 | 		banner: any;
 18 | 		skipRegistry?: boolean;
 19 | 		skipActivity?: boolean;
 20 | 	}, callback?: (status: any) => void) => {
 21 | 		if (!deps.signer) throw new Error(`No signer provided`);
 22 | 
 23 | 		const resolveTransaction = resolveTransactionWith(deps);
 24 | 
 25 | 		const dateTime = new Date().getTime().toString();
 26 | 		const tags: TagType[] = [
 27 | 			{ name: TAGS.keys.creator, value: args.creator },
 28 | 			{
 29 | 				name: TAGS.keys.ans110.title,
 30 | 				value: cleanTagValue(args.title),
 31 | 			},
 32 | 			{
 33 | 				name: TAGS.keys.name,
 34 | 				value: cleanTagValue(args.title),
 35 | 			},
 36 | 			{
 37 | 				name: TAGS.keys.ans110.description,
 38 | 				value: cleanTagValue(args.description),
 39 | 			}
 40 | 		];
 41 | 
 42 | 		let thumbnailTx = null;
 43 | 		let bannerTx = null;
 44 | 
 45 | 		try {
 46 | 			thumbnailTx = args.banner ? await resolveTransaction(args.thumbnail) : DEFAULT_COLLECTION_THUMBNAIL;
 47 | 			bannerTx = args.banner ? await resolveTransaction(args.banner) : DEFAULT_COLLECTION_BANNER;
 48 | 
 49 | 			if (args.thumbnail)
 50 | 				tags.push({
 51 | 					name: TAGS.keys.thumbnail,
 52 | 					value: thumbnailTx,
 53 | 				});
 54 | 
 55 | 			if (args.banner)
 56 | 				tags.push({
 57 | 					name: TAGS.keys.banner,
 58 | 					value: bannerTx,
 59 | 				});
 60 | 		}
 61 | 		catch (e: any) {
 62 | 			console.error(e);
 63 | 		}
 64 | 
 65 | 		const processSrcFetch = await fetch(getTxEndpoint(AO.src.collection));
 66 | 		if (!processSrcFetch.ok) throw new Error(`Unable to fetch process src`);
 67 | 
 68 | 		let processSrc = await processSrcFetch.text();
 69 | 
 70 | 		processSrc = processSrc.replace(/'<NAME>'/g, cleanProcessField(args.title));
 71 | 		processSrc = processSrc.replace(/'<DESCRIPTION>'/g, cleanProcessField(args.description));
 72 | 		processSrc = processSrc.replace(/<CREATOR>/g, args.creator);
 73 | 		processSrc = processSrc.replace(/<THUMBNAIL>/g, thumbnailTx ? thumbnailTx : DEFAULT_COLLECTION_THUMBNAIL);
 74 | 		processSrc = processSrc.replace(/<BANNER>/g, bannerTx ? bannerTx : DEFAULT_COLLECTION_THUMBNAIL);
 75 | 		processSrc = processSrc.replace(/<DATECREATED>/g, dateTime);
 76 | 		processSrc = processSrc.replace(/<LASTUPDATE>/g, dateTime);
 77 | 
 78 | 		try {
 79 | 			const collectionId = await aoCreateProcess(
 80 | 				deps,
 81 | 				{ tags: tags },
 82 | 				callback ? (status) => callback(status) : undefined,
 83 | 			);
 84 | 
 85 | 			globalLog('Sending eval message to collection...');
 86 | 			if (callback) callback('Sending eval message to collection...');
 87 | 			await deps.ao.message({
 88 | 				process: collectionId,
 89 | 				signer: deps.signer,
 90 | 				tags: [{ name: 'Action', value: 'Eval' }],
 91 | 				data: processSrc,
 92 | 			});
 93 | 
 94 | 			if (!args.skipRegistry) {
 95 | 				globalLog('Sending collection to registry...');
 96 | 				if (callback) callback('Sending collection to registry...');
 97 | 
 98 | 				const registryTags = [
 99 | 					{ name: 'Action', value: 'Add-Collection' },
100 | 					{ name: 'CollectionId', value: collectionId },
101 | 					{ name: 'Name', value: cleanTagValue(args.title) },
102 | 					{ name: 'Creator', value: args.creator },
103 | 					{ name: 'DateCreated', value: dateTime },
104 | 				];
105 | 
106 | 				if (bannerTx) registryTags.push({ name: 'Banner', value: bannerTx });
107 | 				if (thumbnailTx) registryTags.push({ name: 'Thumbnail', value: thumbnailTx });
108 | 
109 | 				await deps.ao.message({
110 | 					process: AO.collectionRegistry,
111 | 					signer: deps.signer,
112 | 					tags: registryTags,
113 | 				});
114 | 			}
115 | 
116 | 			if (!args.skipActivity) {
117 | 				globalLog('Creating collection activity process...');
118 | 				if (callback) callback('Creating collection activity process...');
119 | 
120 | 				const activityTags = [
121 | 					{ name: 'CollectionId', value: collectionId },
122 | 					{ name: 'DateCreated', value: dateTime },
123 | 					{ name: 'UCM-Process', value: 'Collection-Activity' },
124 | 					{ name: 'On-Boot', value: AO.src.collectionActivity },
125 | 				];
126 | 
127 | 				const collectionActivityId = await aoCreateProcess(
128 | 					deps,
129 | 					{ tags: activityTags },
130 | 					callback ? (status) => callback(status) : undefined,
131 | 				);
132 | 
133 | 				globalLog('Adding activity to collection process...');
134 | 				if (callback) callback('Adding activity to collection process...');
135 | 				await deps.ao.message({
136 | 					process: collectionId,
137 | 					signer: deps.signer,
138 | 					tags: [{ name: 'Action', value: 'Eval' }],
139 | 					data: `ActivityProcess = '${collectionActivityId}'`,
140 | 				});
141 | 			}
142 | 
143 | 			return collectionId;
144 | 		}
145 | 		catch (e: any) {
146 | 			throw new Error(e.message ?? 'Error creating collection')
147 | 		}
148 | 	};
149 | }
150 | 
151 | export function updateCollectionAssetsWith(deps: DependencyType) {
152 | 	return async (args: { collectionId: string; assetIds: string[]; creator: string; updateType: 'Add' | 'Remove' }): Promise<string> => {
153 | 		return await aoSend(deps, {
154 | 			processId: args.creator,
155 | 			action: 'Run-Action',
156 | 			tags: [
157 | 				{ name: 'ForwardTo', value: args.collectionId },
158 | 				{ name: 'ForwardAction', value: 'Update-Assets' }
159 | 			],
160 | 			data: {
161 | 				Target: args.collectionId,
162 | 				Action: 'Update-Assets',
163 | 				Input: {
164 | 					AssetIds: args.assetIds,
165 | 					UpdateType: args.updateType,
166 | 				},
167 | 			},
168 | 		});
169 | 	};
170 | }
171 | 
172 | export function getCollectionWith(deps: DependencyType) {
173 | 	return async (collectionId: string): Promise<CollectionDetailType | null> => {
174 | 		const response = await readProcess(deps, {
175 | 			processId: collectionId,
176 | 			path: 'collection',
177 | 			fallbackAction: 'Info',
178 | 		});
179 | 
180 | 		if (response) {
181 | 			return mapFromProcessCase(response)
182 | 		}
183 | 
184 | 		return null
185 | 	};
186 | }
187 | 
188 | export function getCollectionsWith(deps: DependencyType) {
189 | 	return async (args: { creator?: string }): Promise<CollectionType[] | null> => {
190 | 		const action = args.creator ? 'Get-Collections-By-User' : 'Get-Collections';
191 | 
192 | 		const response = await aoDryRun(deps, {
193 | 			processId: AO.collectionRegistry,
194 | 			action: action,
195 | 			tags: args.creator ? [{ name: 'Creator', value: args.creator }] : null,
196 | 		});
197 | 
198 | 		if (response && response.Collections && response.Collections.length) {
199 | 			const collections = response.Collections.map((collection: any) => {
200 | 				return {
201 | 					id: collection.Id,
202 | 					title: collection.Name.replace(/\[|\]/g, ''),
203 | 					description: collection.Description,
204 | 					creator: collection.Creator,
205 | 					dateCreated: collection.DateCreated,
206 | 					banner: collection.Banner,
207 | 					thumbnail: collection.Thumbnail,
208 | 				};
209 | 			});
210 | 
211 | 			return collections;
212 | 		}
213 | 
214 | 		return null;
215 | 	};
216 | }
217 | 


--------------------------------------------------------------------------------
/sdk/src/services/comments.ts:
--------------------------------------------------------------------------------
  1 | import { getGQLData } from '../common/gql.ts';
  2 | import { GATEWAYS } from '../helpers/config.ts';
  3 | import { getTxEndpoint } from '../helpers/endpoints.ts';
  4 | import {
  5 | 	AssetCreateArgsType,
  6 | 	CommentCreateArgType,
  7 | 	CommentDetailType,
  8 | 	DependencyType,
  9 | 	GQLNodeResponseType,
 10 | 	TagFilterType,
 11 | } from '../helpers/types.ts';
 12 | 
 13 | import { buildAsset, createAtomicAssetWith, getAtomicAsset } from './assets.ts';
 14 | 
 15 | export function createCommentWith(deps: DependencyType) {
 16 | 	const createAtomicAsset = createAtomicAssetWith(deps);
 17 | 	return async (args: CommentCreateArgType, callback?: (status: any) => void) => {
 18 | 		const tags = args.tags ? args.tags : [];
 19 | 
 20 | 		tags.push({ name: 'Data-Source', value: args.parentId });
 21 | 		tags.push({ name: 'Root-Source', value: args.rootId ?? args.parentId });
 22 | 
 23 | 		const assetArgs: AssetCreateArgsType = {
 24 | 			name: `Comment on ${args.parentId}`,
 25 | 			description: `Comment on ${args.parentId}`,
 26 | 			topics: ['comment'],
 27 | 			creator: args.creator,
 28 | 			data: args.content,
 29 | 			contentType: 'text/plain',
 30 | 			assetType: 'comment',
 31 | 			tags,
 32 | 		};
 33 | 
 34 | 		return createAtomicAsset(assetArgs, callback);
 35 | 	};
 36 | }
 37 | 
 38 | export function getCommentWith(deps: DependencyType) {
 39 | 	return async (id: string): Promise<CommentDetailType | null> => {
 40 | 		try {
 41 | 			const asset: any = await getAtomicAsset(deps, id, { useGateway: true });
 42 | 
 43 | 			const dataSource = asset?.dataSource
 44 | 			const rootSource = asset?.rootSource
 45 | 
 46 | 			if (!dataSource || !rootSource) throw new Error(`dataSource and rootSource must be present on a comment`);
 47 | 
 48 | 			return {
 49 | 				content: await getCommentData(id),
 50 | 				parentId: dataSource,
 51 | 				rootId: rootSource,
 52 | 			};
 53 | 		}
 54 | 		catch (e: any) {
 55 | 			throw new Error(e.message ?? 'Error getting comment');
 56 | 		}
 57 | 	};
 58 | }
 59 | 
 60 | export function getCommentsWith(_deps: DependencyType) {
 61 | 	return async (args: { parentId?: string; rootId?: string }) => {
 62 | 		if (!args.parentId && !args.rootId) {
 63 | 			throw new Error(`Must provide either parentId or rootId`);
 64 | 		}
 65 | 
 66 | 		const tags: TagFilterType[] = [];
 67 | 
 68 | 		if (args.parentId)
 69 | 			tags.push({
 70 | 				name: 'Data-Source',
 71 | 				values: [args.parentId ?? ''],
 72 | 			});
 73 | 
 74 | 		if (args.rootId)
 75 | 			tags.push({
 76 | 				name: 'Root-Source',
 77 | 				values: [args.rootId ?? ''],
 78 | 			});
 79 | 
 80 | 		const gqlResponse = await getGQLData({
 81 | 			gateway: GATEWAYS.goldsky,
 82 | 			ids: null,
 83 | 			tags,
 84 | 			owners: null,
 85 | 			cursor: null,
 86 | 		});
 87 | 
 88 | 		let assets: any[] = [];
 89 | 
 90 | 		if (gqlResponse && gqlResponse.data.length) {
 91 | 			assets = gqlResponse.data.map((element: GQLNodeResponseType) => buildAsset(element));
 92 | 		}
 93 | 
 94 | 		const comments = [];
 95 | 		for (const asset of assets) {
 96 | 			const dataSource = asset?.dataSource;
 97 | 			const rootSource = asset?.rootSource;
 98 | 
 99 | 			if (!dataSource || !rootSource) throw new Error(`dataSource and rootSource must be present on a comment`);
100 | 
101 | 			comments.push({
102 | 				id: asset.id,
103 | 				content: await getCommentData(asset.id),
104 | 				parentId: dataSource,
105 | 				rootId: rootSource,
106 | 			})
107 | 		}
108 | 
109 | 		return comments;
110 | 	};
111 | }
112 | 
113 | async function getCommentData(id: string) {
114 | 	try {
115 | 		return await (await fetch(getTxEndpoint(id))).text();
116 | 	}
117 | 	catch (e: any) {
118 | 		throw new Error(e.message ?? 'Error getting comment data')
119 | 	}
120 | }
121 | 


--------------------------------------------------------------------------------
/sdk/src/services/index.ts:
--------------------------------------------------------------------------------
1 | export * from './assets.ts';
2 | export * from './collections.ts';
3 | export * from './comments.ts';
4 | export * from './profiles.ts';
5 | export * from './zones.ts';
6 | 


--------------------------------------------------------------------------------
/sdk/src/services/profiles.ts:
--------------------------------------------------------------------------------
  1 | import { GATEWAYS, TAGS } from 'helpers/config.ts';
  2 | 
  3 | import { resolveTransactionWith } from '../common/arweave.ts';
  4 | import { getGQLData } from '../common/gql.ts';
  5 | import { DependencyType, GQLNodeResponseType, ProfileArgsType, ProfileType } from '../helpers/types.ts';
  6 | import { getBootTag } from '../helpers/utils.ts';
  7 | 
  8 | import { createZoneWith, getZoneWith, updateZoneVersionWith, updateZoneWith } from './zones.ts';
  9 | 
 10 | export function createProfileWith(deps: DependencyType) {
 11 | 	const createZone = createZoneWith(deps);
 12 | 	const resolveTransaction = resolveTransactionWith(deps);
 13 | 
 14 | 	return async (args: ProfileArgsType, callback?: (status: any) => void): Promise<string | null> => {
 15 | 		let profileId: string | null = null;
 16 | 
 17 | 		const tags: { name: string; value: string }[] = [
 18 | 			{ name: TAGS.keys.dataProtocol, value: TAGS.values.zone },
 19 | 			{ name: TAGS.keys.zoneType, value: TAGS.values.user },
 20 | 		];
 21 | 
 22 | 		const addImageTag = async (imageKey: 'Thumbnail' | 'Banner') => {
 23 | 			const key: any = imageKey.toLowerCase();
 24 | 			if ((args as any)[key]) {
 25 | 				try {
 26 | 					const resolvedImage = await resolveTransaction((args as any)[key]);
 27 | 					tags.push(getBootTag(imageKey, resolvedImage));
 28 | 				} catch (e: any) {
 29 | 					if (callback) callback(`Failed to resolve ${imageKey}: ${e.message}`);
 30 | 					else console.error(e);
 31 | 				}
 32 | 			}
 33 | 		};
 34 | 
 35 | 		if (args.username) tags.push(getBootTag('Username', args.username));
 36 | 		if (args.displayName) tags.push(getBootTag('DisplayName', args.displayName));
 37 | 		if (args.description) tags.push(getBootTag('Description', args.description));
 38 | 
 39 | 		await Promise.all([addImageTag('Thumbnail'), addImageTag('Banner')]);
 40 | 
 41 | 		try {
 42 | 			profileId = await createZone({ tags: tags }, callback);
 43 | 		} catch (e: any) {
 44 | 			throw new Error(e.message ?? 'Error creating profile');
 45 | 		}
 46 | 
 47 | 		return profileId;
 48 | 	};
 49 | }
 50 | 
 51 | export function updateProfileWith(deps: DependencyType) {
 52 | 	const updateZone = updateZoneWith(deps);
 53 | 	const resolveTransaction = resolveTransactionWith(deps);
 54 | 
 55 | 	return async (args: ProfileArgsType, profileId: string, callback?: (status: any) => void): Promise<string | null> => {
 56 | 		if (profileId) {
 57 | 			let data: any = {
 58 | 				Username: args.username,
 59 | 				DisplayName: args.displayName,
 60 | 				Description: args.description,
 61 | 			};
 62 | 
 63 | 			if (args.thumbnail) {
 64 | 				try {
 65 | 					data.Thumbnail = await resolveTransaction(args.thumbnail);
 66 | 				} catch (e: any) {
 67 | 					if (callback) callback(`Failed to resolve thumbnail: ${e.message}`);
 68 | 				}
 69 | 			}
 70 | 
 71 | 			if (args.banner) {
 72 | 				try {
 73 | 					data.Banner = await resolveTransaction(args.banner);
 74 | 				} catch (e: any) {
 75 | 					if (callback) callback(`Failed to resolve banner: ${e.message}`);
 76 | 				}
 77 | 			}
 78 | 
 79 | 			try {
 80 | 				return await updateZone(data, profileId);
 81 | 			} catch (e: any) {
 82 | 				throw new Error(e.message ?? 'Error creating profile');
 83 | 			}
 84 | 		} else {
 85 | 			throw new Error('No profile provided');
 86 | 		}
 87 | 	};
 88 | }
 89 | 
 90 | export function updateProfileVersionWith(deps: DependencyType) {
 91 | 	const updateZoneVersion = updateZoneVersionWith(deps);
 92 | 
 93 | 	return async (args: { profileId: string }): Promise<string | null> => {
 94 | 		try {
 95 | 			return await updateZoneVersion({ zoneId: args.profileId });
 96 | 		}
 97 | 		catch (e: any) {
 98 | 			throw new Error(e);
 99 | 		}
100 | 	}
101 | }
102 | 
103 | export function getProfileByIdWith(deps: DependencyType) {
104 | 	const getZone = getZoneWith(deps);
105 | 
106 | 	return async (profileId: string): Promise<ProfileType | null> => {
107 | 		try {
108 | 			const zone = await getZone(profileId);
109 | 			if (!zone) {
110 | 				throw new Error('Error fetching profile - Not found');
111 | 			}
112 | 			return {
113 | 				id: profileId,
114 | 				owner: zone.owner,
115 | 				assets: zone.assets,
116 | 				roles: zone.roles,
117 | 				invites: zone.invites,
118 | 				version: zone.version,
119 | 				...zone.store,
120 | 			};
121 | 		} catch (e: any) {
122 | 			throw new Error(e.message ?? 'Error fetching profile');
123 | 		}
124 | 	};
125 | }
126 | 
127 | export function getProfileByWalletAddressWith(deps: DependencyType) {
128 | 	const getProfileById = getProfileByIdWith(deps);
129 | 
130 | 	return async (walletAddress: string): Promise<(ProfileType & any) | null> => {
131 | 		try {
132 | 			const gqlResponse = await getGQLData({
133 | 				gateway: GATEWAYS.goldsky,
134 | 				tags: [
135 | 					{ name: TAGS.keys.dataProtocol, values: [TAGS.values.zone] },
136 | 					{ name: TAGS.keys.zoneType, values: [TAGS.values.user] },
137 | 				],
138 | 				owners: [walletAddress],
139 | 			});
140 | 
141 | 			if (gqlResponse?.data?.length > 0) {
142 | 				gqlResponse.data.sort((a: GQLNodeResponseType, b: GQLNodeResponseType) => {
143 | 					const timestampA = a.node.block?.timestamp ?? 0;
144 | 					const timestampB = b.node.block?.timestamp ?? 0;
145 | 					return timestampB - timestampA;
146 | 				});
147 | 
148 | 				return await getProfileById(gqlResponse.data[0].node.id);
149 | 			}
150 | 
151 | 			return { id: null };
152 | 		} catch (e: any) {
153 | 			throw new Error(e.message ?? 'Error fetching profile');
154 | 		}
155 | 	};
156 | }


--------------------------------------------------------------------------------
/sdk/src/services/zones.ts:
--------------------------------------------------------------------------------
  1 | import { aoCreateProcess, aoDryRun, aoSend, handleProcessEval, readProcess } from '../common/ao.ts';
  2 | import { AO, TAGS } from '../helpers/config.ts';
  3 | import { DependencyType, TagType } from '../helpers/types.ts';
  4 | import { checkValidAddress, mapFromProcessCase } from '../helpers/utils.ts';
  5 | 
  6 | export function createZoneWith(deps: DependencyType) {
  7 | 	return async (args: { data?: any; tags?: TagType[] }, callback?: (status: any) => void): Promise<string | null> => {
  8 | 		try {
  9 | 			const tags = [{ name: TAGS.keys.onBoot, value: AO.src.zone.id }];
 10 | 			if (args.tags && args.tags.length) args.tags.forEach((tag: TagType) => tags.push(tag));
 11 | 
 12 | 			const zoneId = await aoCreateProcess(
 13 | 				deps,
 14 | 				{ data: args.data, tags: tags },
 15 | 				callback ? (status: any) => callback(status) : undefined,
 16 | 			);
 17 | 
 18 | 			return zoneId;
 19 | 		} catch (e: any) {
 20 | 			throw new Error(e.message ?? 'Error creating zone');
 21 | 		}
 22 | 	};
 23 | }
 24 | 
 25 | export function updateZoneWith(deps: DependencyType) {
 26 | 	return async (args: object, zoneId: string): Promise<string | null> => {
 27 | 		try {
 28 | 			const mappedData = Object.entries(args).map(([key, value]) => ({ key, value }));
 29 | 
 30 | 			const zoneUpdateId = await aoSend(deps, {
 31 | 				processId: zoneId,
 32 | 				action: 'Zone-Update',
 33 | 				data: mappedData,
 34 | 			});
 35 | 
 36 | 			return zoneUpdateId;
 37 | 		} catch (e: any) {
 38 | 			throw new Error(e);
 39 | 		}
 40 | 	};
 41 | }
 42 | 
 43 | export function addToZoneWith(deps: DependencyType) {
 44 | 	return async (args: { path: string; data: object }, zoneId: string): Promise<string | null> => {
 45 | 		try {
 46 | 			const zoneUpdateId = await aoSend(deps, {
 47 | 				processId: zoneId,
 48 | 				action: 'Zone-Append',
 49 | 				tags: [{ name: 'Path', value: args.path }],
 50 | 				data: args.data,
 51 | 			});
 52 | 
 53 | 			return zoneUpdateId;
 54 | 		} catch (e: any) {
 55 | 			throw new Error(e);
 56 | 		}
 57 | 	};
 58 | }
 59 | 
 60 | export function setZoneRolesWith(deps: DependencyType) {
 61 | 	return async (args: { granteeId: string, roles: string[], type: 'wallet' | 'process', sendInvite: boolean }[], zoneId: string): Promise<string | null> => {
 62 | 		const zoneValid = checkValidAddress(zoneId);
 63 | 		if (!zoneValid) throw new Error('Invalid zone address');
 64 | 
 65 | 		const data = [];
 66 | 		for (const entry of args) {
 67 | 			const granteeValid = checkValidAddress(entry.granteeId);
 68 | 
 69 | 			if (!granteeValid) throw new Error('Invalid granteeId address');
 70 | 			if (entry.type !== 'wallet' && entry.type !== 'process') throw new Error('Invalid role type');
 71 | 
 72 | 			data.push({
 73 | 				Id: entry.granteeId,
 74 | 				Roles: entry.roles,
 75 | 				Type: entry.type,
 76 | 				SendInvite: entry.sendInvite
 77 | 			})
 78 | 		}
 79 | 
 80 | 		try {
 81 | 			const zoneUpdateId = await aoSend(deps, {
 82 | 				processId: zoneId,
 83 | 				action: 'Role-Set',
 84 | 				tags: [],
 85 | 				data: data,
 86 | 			});
 87 | 
 88 | 			return zoneUpdateId;
 89 | 		} catch (e: any) {
 90 | 			throw new Error(e);
 91 | 		}
 92 | 	};
 93 | }
 94 | 
 95 | export function joinZoneWith(deps: DependencyType) {
 96 | 	return async (args: { zoneToJoinId: string, path?: string }, zoneId: string): Promise<string | null> => {
 97 | 		const zoneValid = checkValidAddress(zoneId) && checkValidAddress(args.zoneToJoinId);
 98 | 
 99 | 		if (!zoneValid) throw new Error('Invalid zone address');
100 | 
101 | 		const tags = [{ name: 'ZoneId', value: args.zoneToJoinId }];
102 | 		if (args.path) tags.push({ name: 'Path', value: args.path });
103 | 
104 | 		try {
105 | 			const zoneUpdateId = await aoSend(deps, {
106 | 				processId: zoneId,
107 | 				action: 'Zone-Join',
108 | 				tags: tags,
109 | 			});
110 | 
111 | 			return zoneUpdateId;
112 | 		} catch (e: any) {
113 | 			throw new Error(e);
114 | 		}
115 | 	};
116 | }
117 | 
118 | export function updateZoneVersionWith(deps: DependencyType) {
119 | 	return async (args: { zoneId: string }): Promise<string | null> => {
120 | 		try {
121 | 			await handleProcessEval(deps, {
122 | 				processId: args.zoneId,
123 | 				evalTxId: AO.src.zone.id
124 | 			});
125 | 
126 | 			const versionUpdate = await handleProcessEval(deps, {
127 | 				processId: args.zoneId,
128 | 				evalSrc: `Zone.Version = '${AO.src.zone.version}'; SyncState()`
129 | 			});
130 | 
131 | 			return versionUpdate;
132 | 		}
133 | 		catch (e: any) {
134 | 			throw new Error(e);
135 | 		}
136 | 	}
137 | }
138 | 
139 | export function getZoneWith(deps: DependencyType) {
140 | 	return async (zoneId: string): Promise<any | null> => {
141 | 		try {
142 | 			const processInfo = await readProcess(deps, { processId: zoneId, path: 'zone', fallbackAction: 'Info' });
143 | 
144 | 			return mapFromProcessCase(processInfo);
145 | 		} catch (e: any) {
146 | 			throw new Error(e.message ?? 'Error getting zone');
147 | 		}
148 | 	};
149 | }


--------------------------------------------------------------------------------
/sdk/tests/index.js:
--------------------------------------------------------------------------------
  1 | import Arweave from 'arweave';
  2 | import { connect, createSigner } from '@permaweb/aoconnect';
  3 | import Permaweb from '@permaweb/libs';
  4 | import fs from 'fs';
  5 | 
  6 | const CREATOR = 'RhguwWmQJ-wWCXhRH_NtTDHRRgfCqNDZckXtJK52zKs';
  7 | 
  8 | function expect(actual) {
  9 | 	return {
 10 | 		toBeDefined: () => {
 11 | 			console.log('\x1b[90m%s\x1b[0m', `Checking if value is defined: ${JSON.stringify(actual)}`);
 12 | 			if (actual === undefined) {
 13 | 				throw new Error(`Expected value to be defined, but it was undefined`);
 14 | 			}
 15 | 			console.log('\x1b[32m%s\x1b[0m', 'Success: Value is defined');
 16 | 		},
 17 | 		toHaveProperty: (prop) => {
 18 | 			console.log('\x1b[90m%s\x1b[0m', `Checking if object ${JSON.stringify(actual)} has property '${prop}'`);
 19 | 			if (!(prop in actual)) {
 20 | 				throw new Error(`Expected object to have property '${prop}', but it was not found`);
 21 | 			}
 22 | 			console.log('\x1b[32m%s\x1b[0m', `Success: Object has property '${prop}'`);
 23 | 		},
 24 | 		toEqualType: (expected) => {
 25 | 			const actualType = typeof actual;
 26 | 			const expectedType = typeof expected;
 27 | 			console.log('\x1b[90m%s\x1b[0m', `Checking type, actual: ${actualType}, expected: ${expectedType}`);
 28 | 			if (actualType !== expectedType) {
 29 | 				throw new Error(`Type mismatch: expected ${expectedType}, but got ${actualType}`);
 30 | 			}
 31 | 			if (actualType === 'object' && actual !== null && expected !== null) {
 32 | 				if (Array.isArray(actual) !== Array.isArray(expected)) {
 33 | 					throw new Error(
 34 | 						`Type mismatch: expected ${Array.isArray(expected) ? 'array' : 'object'}, but got ${Array.isArray(actual) ? 'array' : 'object'}`
 35 | 					);
 36 | 				}
 37 | 			}
 38 | 			console.log('\x1b[32m%s\x1b[0m', `Success: Types match (${actualType})`);
 39 | 		},
 40 | 		toEqualLength: (expected) => {
 41 | 			console.log('\x1b[90m%s\x1b[0m', `Checking length, actual: ${actual.length}, expected: ${expected}`);
 42 | 			if (actual.length !== expected) {
 43 | 				throw new Error(`Array length mismatch: expected length ${expected}, but got ${actual.length}`);
 44 | 			}
 45 | 			console.log('\x1b[32m%s\x1b[0m', `Success: Array length is equal (${actual.length})`);
 46 | 		},
 47 | 		toEqual: (expected) => {
 48 | 			console.log('\x1b[90m%s\x1b[0m', `Checking equality, actual: ${JSON.stringify(actual)}, expected: ${JSON.stringify(expected)}`);
 49 | 			const actualType = typeof actual;
 50 | 			const expectedType = typeof expected;
 51 | 			if (actualType !== expectedType) {
 52 | 				throw new Error(`Type mismatch: expected ${expectedType}, but got ${actualType}`);
 53 | 			}
 54 | 
 55 | 			if (actualType === 'object' && actual !== null && expected !== null) {
 56 | 				const actualKeys = Object.keys(actual);
 57 | 				const expectedKeys = Object.keys(expected);
 58 | 				console.log('\x1b[90m%s\x1b[0m', `Checking object keys, actual keys: ${JSON.stringify(actualKeys)}, expected keys: ${JSON.stringify(expectedKeys)}`);
 59 | 				if (actualKeys.length !== expectedKeys.length) {
 60 | 					throw new Error(`Object key count mismatch: expected ${expectedKeys.length}, but got ${actualKeys.length}`);
 61 | 				}
 62 | 
 63 | 				for (const key of actualKeys) {
 64 | 					if (!(key in expected)) {
 65 | 						throw new Error(`Expected object is missing key: ${key}`);
 66 | 					}
 67 | 					// Recursive equality check on the property value
 68 | 					expect(actual[key]).toEqual(expected[key]);
 69 | 				}
 70 | 			} else if (actual !== expected) {
 71 | 				throw new Error(`Value mismatch: expected ${expected}, but got ${actual}`);
 72 | 			}
 73 | 			console.log('\x1b[32m%s\x1b[0m', 'Success: Values are equal');
 74 | 		},
 75 | 	};
 76 | }
 77 | 
 78 | function logTest(message) {
 79 | 	console.log('\x1b[90m%s\x1b[0m', `\n${message}`);
 80 | }
 81 | 
 82 | function logError(message) {
 83 | 	console.error('\x1b[31m%s\x1b[0m', `Error (${message})`);
 84 | }
 85 | 
 86 | (async function () {
 87 | 	const ao = connect({ MODE: 'legacy' });
 88 | 	const arweave = Arweave.init();
 89 | 
 90 | 	let wallet;
 91 | 
 92 | 	if (!fs.existsSync(process.env.PATH_TO_WALLET)) {
 93 | 		console.log('Generating wallet...');
 94 | 		wallet = await arweave.wallets.generate();
 95 | 	} else {
 96 | 		wallet = JSON.parse(fs.readFileSync(process.env.PATH_TO_WALLET, 'utf-8'));
 97 | 	}
 98 | 
 99 | 	console.log(`Wallet address: ${await arweave.wallets.jwkToAddress(wallet)}`);
100 | 
101 | 	const permaweb = Permaweb.init({
102 | 		ao: ao,
103 | 		arweave: arweave,
104 | 		signer: createSigner(wallet),
105 | 	});
106 | 
107 | 	async function testZones() {
108 | 		try {
109 | 			logTest('Testing zone creation...');
110 | 			const zoneId = await permaweb.createZone({}, (status) => console.log(`Callback: ${status}`));
111 | 
112 | 			expect(zoneId).toBeDefined();
113 | 			expect(zoneId).toEqualType('string');
114 | 
115 | 			logTest('Testing zone update...');
116 | 			const zoneUpdateId = await permaweb.updateZone({
117 | 				name: 'Sample Zone',
118 | 				metadata: {
119 | 					description: 'A test zone for unit testing',
120 | 					version: '1.0.0',
121 | 				},
122 | 			}, zoneId);
123 | 
124 | 			expect(zoneUpdateId).toBeDefined();
125 | 			expect(zoneUpdateId).toEqualType('string');
126 | 
127 | 			logTest('Testing zone fetch...');
128 | 			const zone = await permaweb.getZone(zoneId);
129 | 
130 | 			expect(zone).toEqual({
131 | 				store: {
132 | 					name: 'Sample Zone',
133 | 					metadata: {
134 | 						description: 'A test zone for unit testing',
135 | 						version: '1.0.0',
136 | 					},
137 | 				},
138 | 				assets: [],
139 | 			});
140 | 		}
141 | 		catch (e) {
142 | 			logError(e.message ?? 'Zone tests failed');
143 | 		}
144 | 	}
145 | 
146 | 	async function testProfiles() {
147 | 		try {
148 | 			logTest('Testing profile creation...');
149 | 			const profileId = await permaweb.createProfile({
150 | 				username: 'My username',
151 | 				displayName: 'My display name',
152 | 				description: 'My description'
153 | 			}, (status) => console.log(`Callback: ${status}`));
154 | 
155 | 			expect(profileId).toBeDefined();
156 | 			expect(profileId).toEqualType('string');
157 | 
158 | 			logTest('Testing profile fetch by ID...');
159 | 			const profileById = await permaweb.getProfileById(profileId);
160 | 
161 | 			expect(profileById).toBeDefined();
162 | 			expect(profileById.username).toEqual('My username');
163 | 
164 | 			logTest('Testing profile fetch by address...');
165 | 			const profileByWalletAddress = await permaweb.getProfileByWalletAddress(await arweave.wallets.jwkToAddress(wallet));
166 | 
167 | 			expect(profileByWalletAddress).toBeDefined();
168 | 			expect(profileByWalletAddress.username).toEqual('My username');
169 | 
170 | 			logTest('Testing profile update...');
171 | 			const profileUpdateId = await permaweb.updateProfile({
172 | 				username: 'My updated username',
173 | 				displayName: 'My updated display name',
174 | 				description: 'My updated description'
175 | 			}, profileId, (status) => console.log(`Callback: ${status}`));
176 | 
177 | 			expect(profileUpdateId).toBeDefined();
178 | 			expect(profileUpdateId).toEqualType('string');
179 | 
180 | 			logTest('Testing updated profile fetch...');
181 | 			const updatedProfileById = await permaweb.getProfileById(profileId);
182 | 
183 | 			expect(updatedProfileById).toBeDefined();
184 | 			expect(updatedProfileById.username).toEqual('My updated username');
185 | 
186 | 		}
187 | 		catch (e) {
188 | 			logError(e.message ?? 'Profile tests failed');
189 | 		}
190 | 	}
191 | 
192 | 	async function testAssets() {
193 | 		try {
194 | 			logTest('Testing asset creation...');
195 | 			const assetId1 = await permaweb.createAtomicAsset({
196 | 				name: 'Example Name',
197 | 				description: 'Example Description',
198 | 				topics: ['Topic 1', 'Topic 2', 'Topic 3'],
199 | 				creator: CREATOR,
200 | 				data: 'Atomic Asset Data',
201 | 				contentType: 'text/plain',
202 | 				assetType: 'Example Atomic Asset Type',
203 | 				metadata: {
204 | 					status: 'Initial Status'
205 | 				}
206 | 			});
207 | 
208 | 			expect(assetId1).toBeDefined();
209 | 			expect(assetId1).toEqualType('string');
210 | 
211 | 			logTest('Testing asset fetch...')
212 | 			const asset1 = await permaweb.getAtomicAsset(assetId1);
213 | 
214 | 			expect(asset1).toBeDefined();
215 | 			expect(asset1.name).toEqual('Example Name');
216 | 
217 | 			logTest('Creating asset for batch query...');
218 | 			const assetId2 = await permaweb.createAtomicAsset({
219 | 				name: 'Example Name',
220 | 				description: 'Example Description',
221 | 				topics: ['Topic 1', 'Topic 2', 'Topic 3'],
222 | 				creator: CREATOR,
223 | 				data: 'Atomic Asset Data',
224 | 				contentType: 'text/plain',
225 | 				assetType: 'Example Atomic Asset Type',
226 | 				metadata: {
227 | 					status: 'Initial Status'
228 | 				}
229 | 			});
230 | 
231 | 			expect(assetId2).toBeDefined();
232 | 			expect(assetId2).toEqualType('string');
233 | 
234 | 			logTest('Testing batch asset query...');
235 | 			const assets = await permaweb.getAtomicAssets([assetId1, assetId2]);
236 | 
237 | 			expect(assets).toEqualLength(2);
238 | 
239 | 			logTest('Testing asset update...');
240 | 			const data = permaweb.mapToProcessCase({
241 | 				name: 'Updated Name',
242 | 				description: 'Updated Description'
243 | 			});
244 | 
245 | 			await permaweb.sendMessage({
246 | 				processId: assetId1,
247 | 				wallet: wallet,
248 | 				action: 'Update-Asset',
249 | 				data: data,
250 | 			});
251 | 
252 | 			logTest('Testing updated asset fetch...');
253 | 			const updatedAsset = await permaweb.getAtomicAsset(assetId1);
254 | 
255 | 			console.log(updatedAsset);
256 | 
257 | 			expect(updatedAsset).toBeDefined();
258 | 			expect(updatedAsset.name).toEqual('Updated Name');
259 | 		}
260 | 		catch (e) {
261 | 			logError(e.message ?? 'Asset tests failed');
262 | 		}
263 | 	}
264 | 
265 | 	async function testComments() {
266 | 		const PARENT_ID = (new Date().getTime()).toString();
267 | 
268 | 		try {
269 | 			logTest('Testing comment creation...');
270 | 			const commentId1 = await permaweb.createComment({
271 | 				creator: CREATOR,
272 | 				content: 'My first comment',
273 | 				parentId: PARENT_ID
274 | 			}, (status) => console.log(`Callback: ${status}`));
275 | 
276 | 			expect(commentId1).toBeDefined();
277 | 			expect(commentId1).toEqualType('string');
278 | 
279 | 			logTest('Testing comment fetch...');
280 | 			const comment = await permaweb.getComment(commentId1);
281 | 
282 | 			expect(comment).toBeDefined();
283 | 			expect(comment.parentId).toEqual(Number(PARENT_ID));
284 | 
285 | 			logTest('Creating comment for batch query...');
286 | 			const commentId2 = await permaweb.createComment({
287 | 				creator: CREATOR,
288 | 				content: 'My second comment',
289 | 				parentId: PARENT_ID
290 | 			}, (status) => console.log(`Callback: ${status}`));
291 | 
292 | 			expect(commentId2).toBeDefined();
293 | 			expect(commentId2).toEqualType('string');
294 | 
295 | 			logTest('Testing comments fetch...');
296 | 			const comments = await permaweb.getComments({ parentId: PARENT_ID });
297 | 
298 | 			expect(comments).toEqualLength(2);
299 | 		}
300 | 		catch (e) {
301 | 			logError(e.message ?? 'Comment tests failed');
302 | 		}
303 | 	}
304 | 
305 | 	async function testCollections() {
306 | 		try {
307 | 			logTest('Creating profile to own collection...')
308 | 			const profileId = await permaweb.createProfile({
309 | 				username: 'My username',
310 | 				displayName: 'My display name',
311 | 				description: 'My description'
312 | 			}, (status) => console.log(`Callback: ${status}`));
313 | 
314 | 			logTest('Testing collection creation...');
315 | 			const collectionId = await permaweb.createCollection({
316 | 				title: 'Sample collection title',
317 | 				description: 'Sample collection description',
318 | 				creator: profileId,
319 | 				skipRegistry: true
320 | 			});
321 | 
322 | 			expect(collectionId).toBeDefined();
323 | 			expect(collectionId).toEqualType('string');
324 | 
325 | 			logTest('Testing collection fetch...');
326 | 			const collection = await permaweb.getCollection(collectionId);
327 | 
328 | 			expect(collection).toBeDefined();
329 | 			expect(collection.id).toEqual(collectionId);
330 | 
331 | 			logTest('Testing collection assets update...');
332 | 			const collectionUpdateId = await permaweb.updateCollectionAssets({
333 | 				collectionId: collectionId,
334 | 				assetIds: [
335 | 					'BvKq3F8psspbAvIDBAlgiG3E_XwiszSfJIYSg3kl0BU',
336 | 					'Loe-SwVioq8_xqbbzM-0TxMC4Lq8IobHNLyHQWgxaGk',
337 | 				],
338 | 				creator: profileId,
339 | 				updateType: 'Add',
340 | 			});
341 | 
342 | 			expect(collectionUpdateId).toBeDefined();
343 | 			expect(collectionUpdateId).toEqualType('string');
344 | 
345 | 			logTest('Sleeping for collection update...');
346 | 			await new Promise((r) => setTimeout(r, 5000));
347 | 
348 | 			logTest('Testing updated collection fetch...');
349 | 			const updatedCollection = await permaweb.getCollection(collectionId);
350 | 
351 | 			expect(updatedCollection).toBeDefined();
352 | 
353 | 			const expectedAssets = [
354 | 				'BvKq3F8psspbAvIDBAlgiG3E_XwiszSfJIYSg3kl0BU',
355 | 				'Loe-SwVioq8_xqbbzM-0TxMC4Lq8IobHNLyHQWgxaGk',
356 | 			].sort();
357 | 
358 | 			const actualAssets = updatedCollection.assetIds.sort();
359 | 
360 | 			expect(actualAssets).toEqual(expectedAssets);
361 | 		}
362 | 		catch (e) {
363 | 			logError(e.message ?? 'Collection tests failed');
364 | 		}
365 | 	}
366 | 
367 | 	const testMap = {
368 | 		zones: { key: 'zones', fn: testZones },
369 | 		profiles: { key: 'profiles', fn: testProfiles },
370 | 		assets: { key: 'assets', fn: testAssets },
371 | 		comments: { key: 'comments', fn: testComments },
372 | 		collections: { key: 'assets', fn: testCollections }
373 | 	};
374 | 
375 | 	(async function () {
376 | 		const testType = process.argv[2];
377 | 		if (!testType || testType === 'all') {
378 | 			for (const testKey in testMap) {
379 | 				await testMap[testKey].fn();
380 | 			}
381 | 		} else if (testMap[testType]) {
382 | 			await testMap[testType].fn();
383 | 		} else {
384 | 			console.log(`Invalid test type. Specify one of: ${Object.keys(testMap).join(', ')}, or 'all'.`);
385 | 		}
386 | 	})();
387 | })();


--------------------------------------------------------------------------------
/sdk/tests/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"name": "node",
 3 | 	"type": "module",
 4 | 	"version": "1.0.0",
 5 | 	"description": "",
 6 | 	"main": "tests.ts",
 7 | 	"scripts": {
 8 | 		"tests": "node index.js"
 9 | 	},
10 | 	"keywords": [],
11 | 	"author": "",
12 | 	"license": "ISC",
13 | 	"dependencies": {
14 | 		"@permaweb/aoconnect": "^0.0.79",
15 | 		"@permaweb/libs": "file:..",
16 | 		"arweave": "^1.15.5"
17 | 	},
18 | 	"devDependencies": {
19 | 		"@types/node": "^22.7.9"
20 | 	}
21 | }
22 | 


--------------------------------------------------------------------------------
/sdk/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"compilerOptions": {
 3 | 		"target": "ES2020", // Modern JS target for Node.js and browser compatibility
 4 | 		"module": "nodenext", // Use ESM for compatibility with esbuild
 5 | 		"declaration": true, // Generate type definitions
 6 | 		"declarationDir": "dist/types", // Output directory for type declarations
 7 | 		"outDir": "dist", // Temporary directory for compiled files
 8 | 		"strict": true, // Enable strict type-checking
 9 | 		"esModuleInterop": true, // Allow default imports for CommonJS modules
10 | 		"skipLibCheck": true, // Skip type checks for node_modules
11 | 		"moduleResolution": "nodenext", // Use Node.js-style module resolution
12 | 		"baseUrl": "src",
13 | 		"emitDeclarationOnly": true,
14 | 		"allowImportingTsExtensions": true,
15 | 		"paths": {
16 | 			"common/*": ["common/*"],
17 | 			"helpers/*": ["helpers/*"],
18 | 			"services/*": ["services/*"],
19 | 			"@ardrive/turbo-sdk/web": ["node_modules/@ardrive/turbo-sdk/lib/types/web/index.d.ts"]
20 | 		}
21 | 	},
22 | 	"include": ["src/**/*"],
23 | 	"exclude": ["node_modules", "dist"]
24 | }
25 | 


--------------------------------------------------------------------------------
/services/bundler/bundle.sh:
--------------------------------------------------------------------------------
 1 | #!/bin/bash
 2 | 
 3 | set -e
 4 | 
 5 | # Define the target file
 6 | TARGET_FILE="./dist/bundle_zone.lua"
 7 | 
 8 | # Create the target directory if it doesn't exist
 9 | mkdir -p "dist"
10 | 
11 | # Clear the target file if it exists
12 | if [ -f "$TARGET_FILE" ]; then
13 |   rm "$TARGET_FILE"
14 | fi
15 | 
16 | # Array of files to bundle
17 | FILES=(
18 |     "../src/package_kv.lua"
19 |     "../src/package_kv_batch.lua"
20 |     "../src/package_asset_manager.lua"
21 |     "../src/process_zone.lua"
22 | )
23 | 
24 | # Array of corresponding package names, must match length of FILES
25 | PACKAGE_NAMES=(
26 |     "@permaweb/kv-base"
27 |     "@permaweb/kv-batch"
28 |     "@permaweb/asset-manager"
29 |     "@permaweb/zone"
30 | )
31 | 
32 | print_header() {
33 |     HEADER="$1"
34 |     echo "-- $HEADER"
35 | }
36 | 
37 | # Function to indent lines, skipping empty lines
38 | indent_lines() {
39 |     while IFS= read -r line; do
40 |         if [[ -n "$line" ]]; then
41 |             echo "    $line"
42 |         else
43 |             echo ""
44 |         fi
45 |     done
46 | }
47 | 
48 | # Add dependencies
49 | echo "local json = require('json')" >> "$TARGET_FILE"
50 | 
51 | # Append each file's content to the target file
52 | for i in "${!FILES[@]}"; do
53 |     echo "Processing file: ${FILES[$i]}"
54 | 
55 |     FILE="${FILES[$i]}"
56 |     PACKAGE_NAME="${PACKAGE_NAMES[$i]}"
57 | 
58 |     if [ -f "$FILE" ]; then
59 |         echo "" >> "$TARGET_FILE"   # Add a newline for separation
60 |         
61 |         FILE_NAME=$(basename "$FILE" .lua)
62 |         FUNCTION_NAME="load_${FILE_NAME//-/_}"
63 | 
64 |         # Add header to target file if a package name is provided
65 |         if [ -n "$PACKAGE_NAME" ]; then
66 |             print_header "$PACKAGE_NAME" >> "$TARGET_FILE"
67 |         fi
68 | 
69 |         echo "local function $FUNCTION_NAME()" >> "$TARGET_FILE"
70 |         indent_lines < "$FILE" >> "$TARGET_FILE"
71 |         echo "end" >> "$TARGET_FILE"
72 |         echo "package.loaded['$PACKAGE_NAME'] = $FUNCTION_NAME()" >> "$TARGET_FILE"
73 |     else
74 |         echo "File '$FILE' does not exist."
75 |     fi
76 | done
77 | 
78 | echo "Bundling complete. Output written to $TARGET_FILE."
79 | 


--------------------------------------------------------------------------------
/services/src/package_asset_manager.lua:
--------------------------------------------------------------------------------
  1 | local bint = require('.bint')(256)
  2 | 
  3 | local AssetManagerPackageName = '@permaweb/asset-manager'
  4 | 
  5 | local AssetManager = {}
  6 | AssetManager.__index = AssetManager
  7 | 
  8 | function AssetManager.new()
  9 |     local self = setmetatable({}, AssetManager)
 10 |     self.Assets = {}
 11 |     return self
 12 | end
 13 | 
 14 | local utils = {
 15 |     add = function(a, b)
 16 |         return tostring(bint(a) + bint(b))
 17 |     end,
 18 |     subtract = function(a, b)
 19 |         return tostring(bint(a) - bint(b))
 20 |     end,
 21 |     to_balance_value = function(a)
 22 |         return tostring(bint(a))
 23 |     end,
 24 |     to_number = function(a)
 25 |         return bint.tonumber(a)
 26 |     end
 27 | }
 28 | 
 29 | local function check_valid_address(address)
 30 |     if not address or type(address) ~= 'string' then
 31 |         return false
 32 |     end
 33 | 
 34 |     return string.match(address, "^[%w%-_]+
quot;) ~= nil and #address == 43
 35 | end
 36 | 
 37 | local function check_valid_update_type(type)
 38 |     return type == 'Add' or type == 'Remove'
 39 | end
 40 | 
 41 | local function check_required_args(args, required_args)
 42 |     print('Checking required args...')
 43 | 
 44 |     local required_args_met = true
 45 |     for _, arg in ipairs(required_args) do
 46 |         if not args[arg] then
 47 |             print('Missing required argument: ' .. arg)
 48 |             required_args_met = false
 49 |         end
 50 |     end
 51 | 
 52 |     return required_args_met
 53 | end
 54 | 
 55 | local function get_asset_index(self, asset_id)
 56 |     for i, asset in ipairs(self.Assets) do
 57 |         if asset.Id == asset_id then
 58 |             return i
 59 |         end
 60 |     end
 61 | 
 62 |     return -1
 63 | end
 64 | 
 65 | function AssetManager:get()
 66 |     return json.encode(self.Assets)
 67 | end
 68 | 
 69 | function AssetManager:update(args)
 70 |     print('Running asset update...')
 71 | 
 72 |     if not self.Assets then self.Assets = {} end
 73 | 
 74 |     if not check_required_args(args, { 'Type', 'AssetId', 'Timestamp' }) then
 75 |         return
 76 |     end
 77 | 
 78 |     if not check_valid_address(args.AssetId) then
 79 |         print('Invalid AssetId')
 80 |         return
 81 |     end
 82 | 
 83 |     if not check_valid_update_type(args.Type) then
 84 |         print('Invalid Update Type')
 85 |         return
 86 |     end
 87 | 
 88 |     local asset_index = get_asset_index(self, args.AssetId)
 89 | 
 90 |     if asset_index > -1 then
 91 |         print('Updating existing asset...')
 92 |         if args.Type == 'Add' then
 93 |             self.Assets[asset_index].Quantity = utils.add(self.Assets[asset_index].Quantity, args.Quantity)
 94 |         end
 95 |         if args.Type == 'Remove' then
 96 |             self.Assets[asset_index].Quantity = utils.subtract(self.Assets[asset_index].Quantity, args.Quantity)
 97 |         end
 98 |         self.Assets[asset_index].LastUpdate = args.Timestamp
 99 | 
100 |         args.SyncState()
101 |         print('Asset updated')
102 |     else
103 |         if args.Type == 'Add' and utils.to_number(args.Quantity) > 0 then
104 |             print('Adding new asset...')
105 | 
106 |             table.insert(self.Assets, {
107 |                 Id = args.AssetId,
108 |                 Quantity = utils.to_balance_value(args.Quantity),
109 |                 DateCreated = args.Timestamp,
110 |                 LastUpdate = args.Timestamp,
111 |                 Type = args.AssetType,
112 |                 ContentType = args.ContentType
113 |             })
114 | 
115 |             args.SyncState()
116 |             print('Asset added')
117 |         else
118 |             print('No asset found to update...')
119 |         end
120 |         if args.Type == 'Remove' then
121 |             print('No asset found to update...')
122 |             return
123 |         end
124 |     end
125 | end
126 | 
127 | package.loaded[AssetManagerPackageName] = AssetManager
128 | 
129 | return AssetManager
130 | 


--------------------------------------------------------------------------------
/services/src/package_kv.lua:
--------------------------------------------------------------------------------
  1 | local KVPackageName = "@permaweb/kv-base"
  2 | local KV = {}
  3 | 
  4 | KV.__index = KV
  5 | 
  6 | --- Creates a new KV instance.
  7 | -- @param plugins Optional table of plugins, each with a register function.
  8 | -- @return A new KV instance.
  9 | function KV.new(plugins)
 10 |     if type(plugins) ~= "table" and type(plugins) ~= "nil" then
 11 |         print("Invalid plugins")
 12 |         error("Invalid plugins arg, must be table or nil")
 13 |     end
 14 | 
 15 |     local self = setmetatable({}, KV)
 16 | 
 17 |     if plugins and type(plugins) == "table" then
 18 |         for _, plugin in ipairs(plugins) do
 19 |             if type(plugin) == "table" and plugin.register then
 20 |                 plugin.register(self)
 21 |             end
 22 |         end
 23 |     end
 24 |     self.Store = {}
 25 |     return self
 26 | end
 27 | 
 28 | --- Returns a copy of the entire key-value store.
 29 | -- @return A table representing the current state of the key-value store.
 30 | function KV:dump()
 31 |     local copy = {}
 32 |     for k, v in pairs(self.Store) do
 33 |         copy[k] = v
 34 |     end
 35 |     return copy
 36 | end
 37 | 
 38 | --- Retrieves a value from the key-value store.
 39 | -- @param keyString A dot-separated string representing the key path.
 40 | -- @return The value at the specified key path, or nil if not found.
 41 | function KV:get(keyString)
 42 |     local keys = self:_splitKeyString(keyString)
 43 |     local current = self.Store
 44 | 
 45 |     for _, key in ipairs(keys) do
 46 |         if type(current) ~= "table" or current[key] == nil then
 47 |             return nil
 48 |         end
 49 |         current = current[key]
 50 |     end
 51 | 
 52 |     return current
 53 | end
 54 | 
 55 | --- Sets a value in the key-value store.
 56 | -- @param keyString A dot-separated string representing the key path.
 57 | -- @param value The value to set at the specified key path.
 58 | function KV:set(keyString, value)
 59 |     if keyString == "" then
 60 |         self.Store = value  -- Set the entire store to the value
 61 |         return
 62 |     end
 63 | 
 64 |     local keys = self:_splitKeyString(keyString)
 65 |     local current = self.Store
 66 | 
 67 |     for i = 1, #keys - 1 do
 68 |         local key = keys[i]
 69 |         if type(current[key]) ~= "table" then
 70 |             current[key] = {}  -- Create table if it doesn't exist
 71 |         end
 72 |         current = current[key]
 73 |     end
 74 | 
 75 |     current[keys[#keys]] = value
 76 | end
 77 | 
 78 | 
 79 | --- Appends a value to an array stored at the given key path.
 80 | -- @param keyString A dot-separated string representing the key path.
 81 | -- @param value The value to append to the array.
 82 | function KV:append(keyString, value)
 83 |     local array = self:get(keyString)
 84 |     if type(array) ~= "table" then
 85 |         array = {}
 86 |         self:set(keyString, array)
 87 |     end
 88 | 
 89 |     table.insert(array, value)
 90 | end
 91 | 
 92 | --- Splits a dot-separated key string into individual keys.
 93 | -- @param keyString The dot-separated key string.
 94 | -- @return A table containing individual keys.
 95 | function KV:_splitKeyString(keyString)
 96 |     local keys = {}
 97 |     for key in string.gmatch(keyString, "[^%.]+") do
 98 |         table.insert(keys, key)
 99 |     end
100 |     return keys
101 | end
102 | 
103 | --- Removes a value from the key-value store.
104 | --- Use `"."` to clear the entire store (root level).
105 | -- @param keyString A dot-separated string for the key path, or `"."` to clear the root.
106 | -- @raise Error if `keyString` is `""`.
107 | function KV:remove(keyString)
108 |     if keyString == "." then
109 |         self.Store = {}  -- Clear the entire store
110 |         return
111 |     elseif keyString == "" then
112 |         error("Invalid keyString: an empty string is not allowed. Use '.' to clear the root.")
113 |     end
114 | 
115 |     local keys = self:_splitKeyString(keyString)
116 |     local current = self.Store
117 | 
118 |     -- Traverse to the second-to-last key
119 |     for i = 1, #keys - 1 do
120 |         local key = keys[i]
121 |         if type(current) ~= "table" or current[key] == nil then
122 |             return -- Key path doesn't exist, nothing to remove
123 |         end
124 |         current = current[key]
125 |     end
126 | 
127 |     -- Remove the final key in the path
128 |     current[keys[#keys]] = nil
129 | end
130 | 
131 | 
132 | --- Returns the number of top-level keys in the store.
133 | -- @return The count of top-level keys in the key-value store.
134 | function KV:len()
135 |     local count = 0
136 |     for _ in pairs(self.Store) do
137 |         count = count + 1
138 |     end
139 |     return count
140 | end
141 | 
142 | --- Returns a list of keys at a specified path.
143 | -- @param path Optional dot-separated string representing the key path.
144 | -- @return A table containing keys at the specified path, or top-level keys if no path is specified.
145 | function KV:keys(path)
146 |     -- Helper function to recursively gather keys from a table
147 |     local function recurse(store)
148 |         local keys = {}
149 |         for k, _ in pairs(store) do
150 |             table.insert(keys, k)
151 |         end
152 |         return keys
153 |     end
154 | 
155 |     -- If a path is specified, traverse to that nested level
156 |     if path and type(path) == "string" then
157 |         local keys = self:_splitKeyString(path)
158 |         local current = self.Store
159 | 
160 |         -- Traverse the store according to the keys in the path
161 |         for _, key in ipairs(keys) do
162 |             if type(current) == "table" and current[key] then
163 |                 current = current[key]
164 |             else
165 |                 return {}  -- If the path does not exist, return an empty table
166 |             end
167 |         end
168 | 
169 |         -- If the value at the path is not a table, return an empty table
170 |         if type(current) ~= "table" then
171 |             return {}
172 |         end
173 | 
174 |         -- Return the keys of the nested object
175 |         return recurse(current)
176 |     else
177 |         -- If no path is specified, return top-level keys
178 |         return recurse(self.Store)
179 |     end
180 | end
181 | 
182 | --- Registers a new plugin function in the KV instance.
183 | -- @param pluginName The name of the plugin.
184 | -- @param pluginFunction The function to be registered as a plugin.
185 | function KV:registerPlugin(pluginName, pluginFunction)
186 |     if type(pluginName) ~= "string" or type(pluginFunction) ~= "function" then
187 |         error("Invalid plugin name or function")
188 |     end
189 |     if self[pluginName] then
190 |         error(pluginName .. " already exists")
191 |     end
192 | 
193 |     self[pluginName] = pluginFunction
194 | end
195 | 
196 | --- Filters the store based on a given condition function.
197 | -- @param store The table to filter.
198 | -- @param fn The condition function that takes key and value and returns a boolean.
199 | -- @return A new table containing only the key-value pairs that match the condition.
200 | function KV.filter_store(store, fn)
201 |     local results = {}
202 |     for k, v in pairs(store) do
203 |         if fn(k, v) then
204 |             results[k] = v
205 |         end
206 |     end
207 |     return results
208 | end
209 | 
210 | --- Checks if a string starts with a specified prefix.
211 | -- @param str The string to check.
212 | -- @param prefix The prefix to look for.
213 | -- @return True if the string starts with the prefix, otherwise false.
214 | function KV.starts_with(str, prefix)
215 |     return str:sub(1, #prefix) == prefix
216 | end
217 | 
218 | --- Gets all keys that start with a specified prefix.
219 | -- @param str The prefix string to filter keys.
220 | -- @return A table containing all keys that start with the specified prefix.
221 | function KV:getPrefix(str)
222 |     return KV.filter_store(self.Store, function(k, _)
223 |         return KV.starts_with(k, str)
224 |     end)
225 | end
226 | 
227 | return KV
228 | 


--------------------------------------------------------------------------------
/services/src/package_kv_batch.lua:
--------------------------------------------------------------------------------
 1 | package.loaded["@permaweb/kv-batch"] = nil
 2 | 
 3 | do
 4 |     local PackageName = "@permaweb/kv-batch"
 5 | 
 6 |     local BatchPlugin = {}
 7 | 
 8 |     function BatchPlugin.new()
 9 |         local plugin = {}
10 | 
11 |         -- Register the plugin methods to a KV instance
12 |         function plugin.register(kv)
13 |             kv:registerPlugin("batchInit", function()
14 |                 return plugin.createBatch(kv)
15 |             end)
16 |         end
17 | 
18 |         function plugin.createBatch(kv)
19 |             local batch = {}
20 |             batch.operations = {}
21 | 
22 |             function batch:set(keyString, value)
23 |                 table.insert(self.operations, { op = "set", key = keyString, value = value })
24 |             end
25 |             -- TODO probably implement del?
26 | 
27 |             -- Execute all batched operations
28 |             function batch:execute()
29 |                 for _, operation in ipairs(self.operations) do
30 |                     if operation.op == "set" then
31 |                         kv:set(operation.key, operation.value)
32 |                     end
33 |                 end
34 |                 self:clear()  -- Optionally clear the batch after execution
35 |             end
36 | 
37 |             -- Clear all batched operations
38 |             function batch:clear()
39 |                 self.operations = {}
40 |             end
41 | 
42 |             return batch
43 |         end
44 | 
45 |         return plugin
46 |     end
47 | 
48 |     return BatchPlugin
49 | end
50 | 


--------------------------------------------------------------------------------
/services/src/process_asset.lua:
--------------------------------------------------------------------------------
  1 | local bint = require('.bint')(256)
  2 | local json = require('json')
  3 | 
  4 | local unsetPlaceholder = '!UNSET!'
  5 | 
  6 | Token = Token or {
  7 |     Name = Name or unsetPlaceholder,
  8 |     Ticker = Ticker or unsetPlaceholder,
  9 |     Denomination = Denomination or unsetPlaceholder,
 10 |     Balances = Balances or {},
 11 |     TotalSupply = TotalSupply or unsetPlaceholder,
 12 |     Transferable = true,
 13 |     Creator = Creator or unsetPlaceholder,
 14 | }
 15 | 
 16 | AuthUsers = AuthUsers or {}
 17 | Metadata = Metadata or {}
 18 | IndexRecipients = IndexRecipients or {}
 19 | 
 20 | DateCreated = DateCreated or nil
 21 | LastUpdate = LastUpdate or nil
 22 | 
 23 | local function checkValidAddress(address)
 24 |     if not address or type(address) ~= 'string' then
 25 |         return false
 26 |     end
 27 | 
 28 |     return string.match(address, "^[%w%-_]+
quot;) ~= nil and #address == 43
 29 | end
 30 | 
 31 | local function checkValidAmount(data)
 32 |     return (math.type(tonumber(data)) == 'integer' or math.type(tonumber(data)) == 'float') and bint(data) > 0
 33 | end
 34 | 
 35 | local function decodeMessageData(data)
 36 |     local status, decodedData = pcall(json.decode, data)
 37 | 
 38 |     if not status or type(decodedData) ~= 'table' then
 39 |         return false, nil
 40 |     end
 41 | 
 42 |     return true, decodedData
 43 | end
 44 | 
 45 | local function hasUpdatePermissions(from)
 46 |     if from == Creator or from == Owner or from == ao.id then
 47 |         return true
 48 |     end
 49 | 
 50 |     for _, user in ipairs(AuthUsers) do
 51 |         if from == user then
 52 |             return true
 53 |         end
 54 |     end
 55 | 
 56 |     return false
 57 | end
 58 | 
 59 | local function getState()
 60 |     return {
 61 |         Name = Token.Name,
 62 |         Ticker = Token.Ticker,
 63 |         Denomination = tostring(Token.Denomination),
 64 |         Balances = Token.Balances,
 65 |         TotalSupply = Token.TotalSupply,
 66 |         Transferable = Token.Transferable,
 67 |         Creator = Token.Creator,
 68 |         Metadata = Metadata,
 69 |         AuthUsers = AuthUsers,
 70 |         IndexRecipients = IndexRecipients,
 71 |         DateCreated = tostring(DateCreated),
 72 |         LastUpdate = tostring(LastUpdate),
 73 |     }
 74 | end
 75 | 
 76 | local function syncState()
 77 |     Send({ device = 'patch@1.0', asset = json.encode(getState()) })
 78 | end
 79 | 
 80 | -- Read process state
 81 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
 82 |     msg.reply({
 83 |         Name = Token.Name,
 84 |         Ticker = Token.Ticker,
 85 |         Denomination = tostring(Token.Denomination),
 86 |         Transferable = tostring(Token.Transferable),
 87 |         Data = json.encode(getState())
 88 |     })
 89 | end)
 90 | 
 91 | -- Transfer balance to recipient (Data - { Recipient, Quantity })
 92 | Handlers.add('Transfer', Handlers.utils.hasMatchingTag('Action', 'Transfer'), function(msg)
 93 |     if not Token.Transferable and msg.From ~= ao.id then
 94 |         msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Transfers are not allowed' } })
 95 |         return
 96 |     end
 97 | 
 98 |     local data = {
 99 |         Recipient = msg.Tags.Recipient,
100 |         Quantity = msg.Tags.Quantity
101 |     }
102 | 
103 |     if checkValidAddress(data.Recipient) and checkValidAmount(data.Quantity) and bint(data.Quantity) <= bint(Token.Balances[msg.From] or '0') then
104 |         -- Transfer is valid, calculate balances
105 |         if not Token.Balances[msg.From] then
106 |             Token.Balances[msg.From] = '0'
107 |         end
108 | 
109 |         if not Token.Balances[data.Recipient] then
110 |             Token.Balances[data.Recipient] = '0'
111 |         end
112 | 
113 |         Token.Balances[msg.From] = tostring(bint(Token.Balances[msg.From]) - bint(data.Quantity))
114 |         Token.Balances[data.Recipient] = tostring(bint(Token.Balances[data.Recipient]) + bint(data.Quantity))
115 | 
116 |         -- If new balance zeroes out then remove it from the table
117 |         if bint(Token.Balances[msg.From]) <= bint(0) then
118 |             Token.Balances[msg.From] = nil
119 |         end
120 |         if bint(Token.Balances[data.Recipient]) <= bint(0) then
121 |             Token.Balances[data.Recipient] = nil
122 |         end
123 | 
124 |         local debitNoticeTags = {
125 |             Status = 'Success',
126 |             Message = 'Balance transferred, debit notice issued',
127 |             Recipient = msg.Tags.Recipient,
128 |             Quantity = msg.Tags.Quantity,
129 |         }
130 | 
131 |         local creditNoticeTags = {
132 |             Status = 'Success',
133 |             Message = 'Balance transferred, credit notice issued',
134 |             Sender = msg.From,
135 |             Quantity = msg.Tags.Quantity,
136 |         }
137 | 
138 |         for tagName, tagValue in pairs(msg) do
139 |             if string.sub(tagName, 1, 2) == 'X-' then
140 |                 debitNoticeTags[tagName] = tagValue
141 |                 creditNoticeTags[tagName] = tagValue
142 |             end
143 |         end
144 | 
145 |         -- Send a debit notice to the sender
146 |         ao.send({
147 |             Target = msg.From,
148 |             Action = 'Debit-Notice',
149 |             Tags = debitNoticeTags,
150 |             Data = json.encode({
151 |                 Recipient = data.Recipient,
152 |                 Quantity = tostring(data.Quantity)
153 |             })
154 |         })
155 | 
156 |         -- Send a credit notice to the recipient
157 |         ao.send({
158 |             Target = data.Recipient,
159 |             Action = 'Credit-Notice',
160 |             Tags = creditNoticeTags,
161 |             Data = json.encode({
162 |                 Sender = msg.From,
163 |                 Quantity = tostring(data.Quantity)
164 |             })
165 |         })
166 | 
167 |         syncState()
168 |     end
169 | end)
170 | 
171 | -- Mint new tokens (Data - { Quantity })
172 | Handlers.add('Mint', Handlers.utils.hasMatchingTag('Action', 'Mint'), function(msg)
173 |     local decodeCheck, data = decodeMessageData(msg.Data)
174 | 
175 |     if decodeCheck and data then
176 |         -- Check if quantity is present
177 |         if not data.Quantity then
178 |             msg.reply({ Action = 'Input-Error', Tags = { Status = 'Error', Message = 'Invalid arguments, required { Quantity }' } })
179 |             return
180 |         end
181 | 
182 |         -- Check if quantity is a valid integer greater than zero
183 |         if not checkValidAmount(data.Quantity) then
184 |             msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Quantity must be an integer greater than zero' } })
185 |             return
186 |         end
187 | 
188 |         -- Check if owner is sender
189 |         if msg.From ~= Owner then
190 |             msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Only the process owner can mint new tokens' } })
191 |             return
192 |         end
193 | 
194 |         if not Token.Balances[Owner] then
195 |             Token.Balances[Owner] = '0'
196 |         end
197 | 
198 |         Token.Balances[Owner] = tostring(bint(Token.Balances[Owner]) + bint(data.Quantity))
199 | 
200 |         msg.reply({ Action = 'Mint-Success', Tags = { Status = 'Success', Message = 'Tokens minted' } })
201 | 
202 |         syncState()
203 |     else
204 |         msg.reply({
205 |             Action = 'Input-Error',
206 |             Tags = {
207 |                 Status = 'Error',
208 |                 Message = string.format('Failed to parse data, received: %s. %s', msg.Data,
209 |                     'Data must be an object - { Quantity }')
210 |             }
211 |         })
212 |     end
213 | end)
214 | 
215 | -- Read balance ({ Recipient | Target })
216 | Handlers.add('Balance', Handlers.utils.hasMatchingTag('Action', 'Balance'), function(msg)
217 |     local data
218 | 
219 |     if msg.Tags.Recipient then
220 |         data = { Target = msg.Tags.Recipient }
221 |     elseif msg.Tags.Target then
222 |         data = { Target = msg.Tags.Target }
223 |     else
224 |         data = { Target = msg.From }
225 |     end
226 | 
227 |     if data then
228 |         -- Check if target is present
229 |         if not data.Target then
230 |             msg.reply({ Action = 'Input-Error', Tags = { Status = 'Error', Message = 'Invalid arguments, required { Target }' } })
231 |             return
232 |         end
233 | 
234 |         -- Check if target is a valid address
235 |         if not checkValidAddress(data.Target) then
236 |             msg.reply({ Action = 'Validation-Error', Tags = { Status = 'Error', Message = 'Target is not a valid address' } })
237 |             return
238 |         end
239 | 
240 |         local balance = Token.Balances[data.Target] or '0'
241 | 
242 |         msg.reply({
243 |             Action = 'Balance-Notice',
244 |             Tags = {
245 |                 Status = 'Success',
246 |                 Message = 'Balance received',
247 |                 Account = data.Target
248 |             },
249 |             Data = balance
250 |         })
251 |     else
252 |         msg.reply({
253 |             Action = 'Input-Error',
254 |             Tags = {
255 |                 Status = 'Error',
256 |                 Message = string.format('Failed to parse data, received: %s. %s', msg.Data,
257 |                     'Data must be an object - { Target }')
258 |             }
259 |         })
260 |     end
261 | end)
262 | 
263 | -- Read balances
264 | Handlers.add('Balances', Handlers.utils.hasMatchingTag('Action', 'Balances'),
265 |     function(msg)
266 |         msg.reply({ Data = json.encode(Token.Balances) })
267 |     end)
268 | 
269 | -- Read total supply of token
270 | Handlers.add('Total-Supply', Handlers.utils.hasMatchingTag('Action', 'Total-Supply'), function(msg)
271 |     assert(msg.From ~= ao.id, 'Cannot call Total-Supply from the same process!')
272 | 
273 |     msg.reply({
274 |         Action = 'Total-Supply',
275 |         Data = tostring(Token.TotalSupply),
276 |         Ticker = Token.Ticker
277 |     })
278 | end)
279 | 
280 | local function getIndexData(args) -- AssetType, ContentType
281 |     local indexData = {
282 |         Name = Token.Name,
283 |         Ticker = Token.Ticker,
284 |         Denomination = tostring(Token.Denomination),
285 |         TotalSupply = Token.TotalSupply,
286 |         Balances = Token.Balances,
287 |         Transferable = Token.Transferable,
288 |         Creator = Token.Creator,
289 |         Metadata = Metadata,
290 |         ProcessType = 'atomic-asset',
291 |         DateCreated = DateCreated,
292 |         LastUpdate = LastUpdate,
293 |     }
294 | 
295 |     if args then
296 |         if args.AssetType then indexData.AssetType = args.AssetType end;
297 |         if args.ContentType then indexData.ContentType = args.ContentType end;
298 |     end
299 | 
300 |     return json.encode(indexData)
301 | end
302 | 
303 | -- Update asset token / metadata
304 | Handlers.add('Update-Asset', 'Update-Asset', function(msg)
305 |     if not hasUpdatePermissions(msg.From) then return end
306 | 
307 |     local decodeCheck, data = decodeMessageData(msg.Data)
308 | 
309 |     if decodeCheck and data then
310 |         LastUpdate = tostring(msg.Timestamp)
311 | 
312 |         for key, value in pairs(data) do
313 |             if Token[key] ~= nil then
314 |                 Token[key] = value
315 |             elseif Metadata[key] ~= nil or type(value) == 'string' or type(value) == 'table' then
316 |                 Metadata[key] = value
317 |             end
318 |         end
319 | 
320 |         for _, recipient in ipairs(IndexRecipients) do
321 |             ao.send({
322 |                 Target = recipient,
323 |                 Action = 'Index-Notice',
324 |                 Recipient = recipient,
325 |                 Data = getIndexData()
326 |             })
327 |         end
328 | 
329 |         msg.reply({
330 |             Action = 'Update-Asset-Notice',
331 |             Tags = { Status = 'Success', Message = 'Asset updated!' }
332 |         })
333 | 
334 |         syncState()
335 |     end
336 | end)
337 | 
338 | -- Initialize a request to index this asset data in another process
339 | Handlers.add('Send-Index', 'Send-Index', function(msg)
340 |     if not hasUpdatePermissions(msg.From) then return end
341 | 
342 |     local decodeCheck, data = decodeMessageData(msg.Data)
343 | 
344 |     if decodeCheck and data then
345 |         if data.Recipients then
346 |             for _, recipient in ipairs(data.Recipients) do
347 |                 local exists = false
348 |                 for _, existingRecipient in ipairs(IndexRecipients) do
349 |                     if existingRecipient == recipient then
350 |                         exists = true
351 |                         break
352 |                     end
353 |                 end
354 | 
355 |                 if not exists then
356 |                     table.insert(IndexRecipients, recipient)
357 |                 end
358 | 
359 |                 ao.send({
360 |                     Target = recipient,
361 |                     Action = 'Index-Notice',
362 |                     Recipient = recipient,
363 |                     Data = getIndexData({
364 |                         AssetType = msg.Tags.AssetType,
365 |                         ContentType = msg.Tags.ContentType
366 |                     }),
367 |                 })
368 |             end
369 |         end
370 |     end
371 | end)
372 | 
373 | -- Parse the key string to determine the nested structure:
374 | -- Split the key by . to get each 'level'.
375 | -- For the last part, check if it ends with []. If so, we are dealing with an array field.
376 | -- Traverse store according to the split key parts, creating sub-tables as needed.
377 | -- At the final level:
378 | -- If it’s a normal field (no []), assign the value directly.
379 | -- If it ends with [], append the value to an array at that field.
380 | -- Examples:
381 | -- setStoreValue('User.Name', 'Alice')
382 | -- setStoreValue('User.Address.City', 'New York')
383 | -- setStoreValue('Tags[]', 'tag1')
384 | -- setStoreValue('Tags[]', 'tag2')
385 | -- setStoreValue('User.Hobbies[]', 'gaming')
386 | -- setStoreValue('User.Hobbies[]', 'chess')
387 | local function setStoreValue(key, value)
388 |     -- Split by '.'
389 |     local parts = {}
390 |     for part in string.gmatch(key, "[^%.]+") do
391 |         table.insert(parts, part)
392 |     end
393 | 
394 |     local lastPart = parts[#parts]
395 | 
396 |     local isAppend = false
397 |     if string.sub(lastPart, -3) == '+++' then
398 |         isAppend = true
399 |         lastPart = string.sub(lastPart, 1, -4) -- remove '+++'
400 |     end
401 | 
402 |     local isArray = false
403 |     if string.sub(lastPart, -2) == '[]' then
404 |         isArray = true
405 |         lastPart = string.sub(lastPart, 1, -3)
406 |     end
407 | 
408 |     parts[#parts] = lastPart
409 | 
410 |     -- Traverse the structure in Metadata
411 |     local current = Metadata
412 |     for i = 1, #parts - 1 do
413 |         local segment = parts[i]
414 |         if current[segment] == nil then
415 |             current[segment] = {}
416 |         end
417 |         current = current[segment]
418 |     end
419 | 
420 |     local finalKey = parts[#parts]
421 | 
422 |     local status, decodedValue = pcall(json.decode, value)
423 | 
424 |     if not status or decodedValue == nil then
425 |         decodedValue = value
426 |     end
427 | 
428 |     if isAppend then
429 |         -- Append mode
430 |         if type(current[finalKey]) == 'table' then
431 |             -- Append to an existing table
432 |             table.insert(current[finalKey], decodedValue)
433 |         elseif isArray then
434 |             -- Append to the last array element
435 |             local arr = current[finalKey]
436 |             arr[#arr] = arr[#arr] .. value
437 |         else
438 |             -- Append to a string or create a new array
439 |             current[finalKey] = current[finalKey] and { current[finalKey], decodedValue } or { decodedValue }
440 |         end
441 |     else
442 |         -- Normal mode
443 |         if type(decodedValue) == 'table' then
444 |             if current[finalKey] == nil then
445 |                 current[finalKey] = decodedValue
446 |             else
447 |                 -- Merge tables
448 |                 for k, v in pairs(decodedValue) do
449 |                     current[finalKey][k] = v
450 |                 end
451 |             end
452 |         elseif isArray then
453 |             if current[finalKey] == nil then
454 |                 current[finalKey] = { value }
455 |             else
456 |                 table.insert(current[finalKey], value)
457 |             end
458 |         else
459 |             current[finalKey] = decodedValue
460 |         end
461 |     end
462 | end
463 | 
464 | -- setTokenProps adjusts the Token table based on the bootloader values
465 | local function setTokenProps(collectedValues)
466 |     for key, values in pairs(collectedValues) do
467 |         if Token[key] ~= nil then
468 |             if #values == 1 then
469 |                 if type(Token[key]) == 'table' then
470 |                     table.insert(Token[key], values[1])
471 |                 else
472 |                     Token[key] = values[1]
473 |                 end
474 |             else
475 |                 if type(Token[key]) == 'table' then
476 |                     for _, value in ipairs(values) do
477 |                         table.insert(Token[key], value)
478 |                     end
479 |                 else
480 |                     Token[key] = values
481 |                 end
482 |             end
483 |         end
484 |     end
485 | 
486 |     -- Replace unset placeholders in Token with nil
487 |     for k, v in pairs(Token) do
488 |         if v == unsetPlaceholder then
489 |             Token[k] = nil
490 |         end
491 |     end
492 | end
493 | 
494 | local isInitialized = false
495 | 
496 | -- Boot Initialization
497 | if not isInitialized and #Inbox >= 1 and Inbox[1]['On-Boot'] ~= nil then
498 |     isInitialized = true
499 | 
500 |     local collectedValues = {}
501 |     for _, tag in ipairs(Inbox[1].TagArray) do
502 |         if tag.name == 'Date-Created' then
503 |             DateCreated = tostring(tag.value)
504 |         end
505 | 
506 |         if tag.name == 'Auth-User' then
507 |             if not AuthUsers[tag.value] and checkValidAddress(tag.value) then
508 |                 table.insert(AuthUsers, tag.value)
509 |             end
510 |         end
511 | 
512 |         local bootLoaderPrefix = 'Bootloader-'
513 |         if string.sub(tag.name, 1, string.len(bootLoaderPrefix)) == bootLoaderPrefix then
514 |             local keyWithoutPrefix = string.sub(tag.name, string.len(bootLoaderPrefix) + 1)
515 |             if not Token[keyWithoutPrefix] then
516 |                 setStoreValue(keyWithoutPrefix, tag.value)
517 |             end
518 | 
519 |             if not collectedValues[keyWithoutPrefix] then
520 |                 collectedValues[keyWithoutPrefix] = { tag.value }
521 |             else
522 |                 table.insert(collectedValues[keyWithoutPrefix], tag.value)
523 |             end
524 |         end
525 |     end
526 | 
527 |     setTokenProps(collectedValues)
528 | 
529 |     -- Initialize balances if needed
530 |     if Token.Creator and Token.TotalSupply then
531 |         Token.Balances = { [Token.Creator] = tostring(Token.TotalSupply) }
532 | 
533 |         -- Notify creator of the asset
534 |         ao.send({
535 |             Target = Token.Creator,
536 |             Action = 'Add-Uploaded-Asset',
537 |             AssetId = ao.id,
538 |             Quantity = tostring(Token.TotalSupply)
539 |         })
540 |     end
541 | 
542 |     syncState()
543 | end
544 | 


--------------------------------------------------------------------------------
/services/src/process_collection.lua:
--------------------------------------------------------------------------------
  1 | local json      = require('json')
  2 | 
  3 | Name            = Name or '<NAME>'
  4 | Description     = Description or '<DESCRIPTION>'
  5 | Creator         = Creator or '<CREATOR>'
  6 | Banner          = Banner or '<BANNER>'
  7 | Thumbnail       = Thumbnail or '<THUMBNAIL>'
  8 | 
  9 | DateCreated     = DateCreated or '<DATECREATED>'
 10 | LastUpdate      = LastUpdate or '<LASTUPDATE>'
 11 | 
 12 | Assets          = Assets or {}
 13 | ActivityIds     = ActivityIds or {}
 14 | ActivityProcess = ActivityProcess or '<ACTIVITY_ID>'
 15 | 
 16 | local function decodeMessageData(data)
 17 | 	local status, decodedData = pcall(json.decode, data)
 18 | 
 19 | 	if not status or type(decodedData) ~= 'table' then
 20 | 		return false, nil
 21 | 	end
 22 | 
 23 | 	return true, decodedData
 24 | end
 25 | 
 26 | local function assetExists(assetId)
 27 | 	for _, id in ipairs(Assets) do
 28 | 		if id == assetId then
 29 | 			return true
 30 | 		end
 31 | 	end
 32 | 	return false
 33 | end
 34 | 
 35 | local function checkValidAddress(address)
 36 | 	if not address or type(address) ~= 'string' then
 37 | 		return false
 38 | 	end
 39 | 
 40 | 	return string.match(address, "^[%w%-_]+
quot;) ~= nil and #address == 43
 41 | end
 42 | 
 43 | local function getState()
 44 | 	return {
 45 | 		Name = Name,
 46 | 		Description = Description,
 47 | 		Creator = Creator,
 48 | 		Banner = Banner,
 49 | 		Thumbnail = Thumbnail,
 50 | 		DateCreated = DateCreated,
 51 | 		Assets = Assets,
 52 | 		ActivityProcess = ActivityProcess
 53 | 	}
 54 | end
 55 | 
 56 | local function syncState()
 57 | 	Send({ device = 'patch@1.0', collection = json.encode(getState()) })
 58 | end
 59 | 
 60 | Handlers.add('Info', Handlers.utils.hasMatchingTag('Action', 'Info'), function(msg)
 61 | 	ao.send({
 62 | 		Target = msg.From,
 63 | 		Data = json.encode(getState())
 64 | 	})
 65 | end)
 66 | 
 67 | -- Add or remove assets
 68 | Handlers.add('Update-Assets', Handlers.utils.hasMatchingTag('Action', 'Update-Assets'), function(msg)
 69 | 	if msg.From ~= Owner and msg.From ~= ao.id and msg.From ~= Creator then
 70 | 		ao.send({
 71 | 			Target = msg.From,
 72 | 			Action = 'Authorization-Error',
 73 | 			Tags = {
 74 | 				Status = 'Error',
 75 | 				Message = 'Unauthorized to access this handler'
 76 | 			}
 77 | 		})
 78 | 		return
 79 | 	end
 80 | 
 81 | 	local decodeCheck, data = decodeMessageData(msg.Data)
 82 | 
 83 | 	if decodeCheck and data then
 84 | 		if not data.AssetIds or type(data.AssetIds) ~= 'table' or #data.AssetIds == 0 then
 85 | 			ao.send({
 86 | 				Target = msg.From,
 87 | 				Action = 'Action-Response',
 88 | 				Tags = {
 89 | 					Status = 'Error',
 90 | 					Message = 'Invalid or empty AssetIds list'
 91 | 				}
 92 | 			})
 93 | 			return
 94 | 		end
 95 | 
 96 | 		if not data.UpdateType or (data.UpdateType ~= 'Add' and data.UpdateType ~= 'Remove') then
 97 | 			ao.send({
 98 | 				Target = msg.From,
 99 | 				Action = 'Action-Response',
100 | 				Tags = {
101 | 					Status = 'Error',
102 | 					Message = 'UpdateType argument required (Add | Remove)'
103 | 				}
104 | 			})
105 | 			return
106 | 		end
107 | 
108 | 		if data.UpdateType == 'Add' then
109 | 			for _, assetId in ipairs(data.AssetIds) do
110 | 				if not assetExists(assetId) then
111 | 					table.insert(Assets, assetId)
112 | 				end
113 | 			end
114 | 		end
115 | 
116 | 		if data.UpdateType == 'Remove' then
117 | 			for _, assetId in ipairs(data.AssetIds) do
118 | 				for i, id in ipairs(Assets) do
119 | 					if id == assetId then
120 | 						table.remove(Assets, i)
121 | 						break
122 | 					end
123 | 				end
124 | 			end
125 | 		end
126 | 
127 | 		LastUpdate = msg.Timestamp
128 | 
129 | 		ao.send({
130 | 			Target = msg.From,
131 | 			Action = 'Action-Response',
132 | 			Tags = {
133 | 				Status = 'Success',
134 | 				Message = 'Assets updated successfully'
135 | 			}
136 | 		})
137 | 
138 | 		syncState()
139 | 	else
140 | 		ao.send({
141 | 			Target = msg.From,
142 | 			Action = 'Input-Error',
143 | 			Tags = {
144 | 				Status = 'Error',
145 | 				Message = string.format('Failed to parse data, received: %s. %s',
146 | 					msg.Data,
147 | 					'Data must be an object - { AssetIds: [], UpdateType }')
148 | 			}
149 | 		})
150 | 	end
151 | end)
152 | 
153 | -- Initialize a request to add a new orderbook to collection activity
154 | Handlers.add('Update-Collection-Activity', Handlers.utils.hasMatchingTag('Action', 'Update-Collection-Activity'),
155 | 	function(msg)
156 | 		if msg.From ~= Owner and msg.From ~= Creator and msg.From ~= ao.id then
157 | 			ao.send({
158 | 				Target = msg.From,
159 | 				Action = 'Authorization-Error',
160 | 				Tags = {
161 | 					Status = 'Error',
162 | 					Message = 'Unauthorized to access this handler'
163 | 				}
164 | 			})
165 | 			return
166 | 		end
167 | 
168 | 		if msg.Tags.ActivityId and msg.Tags.UpdateType then
169 | 			if msg.Tags.UpdateType == 'Add' then
170 | 				local exists = false
171 | 				for _, existingId in ipairs(ActivityIds) do
172 | 					if existingId == msg.Tags.ActivityId then
173 | 						exists = true
174 | 						break
175 | 					end
176 | 				end
177 | 				if not exists then
178 | 					table.insert(ActivityIds, msg.Tags.ActivityId)
179 | 				end
180 | 			end
181 | 
182 | 			if msg.Tags.UpdateType == 'Remove' then
183 | 				for _, id in ipairs(ActivityIds) do
184 | 					for i, existingId in ipairs(ActivityIds) do
185 | 						if existingId == id then
186 | 							table.remove(ActivityIds, i)
187 | 							break
188 | 						end
189 | 					end
190 | 				end
191 | 			end
192 | 
193 | 			syncState()
194 | 		end
195 | 	end)
196 | 
197 | Handlers.add('Forward-Order', Handlers.utils.hasMatchingTag('Action', 'Forward-Order'),
198 | 	function(msg)
199 | 		local isAllowed = false
200 | 		for _, allowedActivityId in ipairs(ActivityIds) do
201 | 			if msg.From == allowedActivityId then isAllowed = true end
202 | 		end
203 | 
204 | 		if not isAllowed then return end
205 | 
206 | 		ao.send({ Target = ActivityProcess, Action = msg.Tags.UpdateType, Data = msg.Data })
207 | 	end)
208 | 
209 | -- Initialize a request to add the collection to a profile
210 | Handlers.add('Add-Collection-To-Profile', Handlers.utils.hasMatchingTag('Action', 'Add-Collection-To-Profile'),
211 | 	function(msg)
212 | 		if msg.From ~= Owner and msg.From ~= Creator and msg.From ~= ao.id then
213 | 			ao.send({
214 | 				Target = msg.From,
215 | 				Action = 'Authorization-Error',
216 | 				Tags = {
217 | 					Status = 'Error',
218 | 					Message = 'Unauthorized to access this handler'
219 | 				}
220 | 			})
221 | 			return
222 | 		end
223 | 		if checkValidAddress(Creator) then
224 | 			ao.assign({ Processes = { Creator }, Message = ao.id })
225 | 		else
226 | 			ao.send({
227 | 				Target = msg.From,
228 | 				Action = 'Input-Error',
229 | 				Tags = {
230 | 					Status = 'Error',
231 | 					Message = 'ProfileProcess tag not specified or not a valid Process ID'
232 | 				}
233 | 			})
234 | 		end
235 | 	end)
236 | 
237 | Initialized = Initialized or false
238 | 
239 | if not Initialized then
240 | 	syncState()
241 | 	Initialized = true
242 | end
243 | 


--------------------------------------------------------------------------------
/services/src/process_zone.lua:
--------------------------------------------------------------------------------
  1 | local KV = require('@permaweb/kv-base')
  2 | if not KV then
  3 |     error('KV Not found, install it')
  4 | end
  5 | 
  6 | local BatchPlugin = require('@permaweb/kv-batch')
  7 | if not BatchPlugin then
  8 |     error('BatchPlugin not found, install it')
  9 | end
 10 | 
 11 | local AssetManager = require('@permaweb/asset-manager')
 12 | if not AssetManager then
 13 |     error('AssetManager not found, install it')
 14 | end
 15 | 
 16 | Zone = Zone or {}
 17 | 
 18 | Zone.Functions = Zone.Functions or {}
 19 | 
 20 | Zone.Constants = {
 21 |     H_ZONE_ERROR = 'Zone-Error',
 22 |     H_ZONE_SUCCESS = 'Zone-Success',
 23 |     H_ZONE_KEYS = 'Zone-Keys',
 24 |     H_ZONE_GET = 'Info',
 25 |     H_ZONE_CREDIT_NOTICE = 'Credit-Notice',
 26 |     H_ZONE_DEBIT_NOTICE = 'Debit-Notice',
 27 |     H_ZONE_RUN_ACTION = 'Run-Action',
 28 |     H_ZONE_ADD_INDEX_ID = 'Add-Index-Id',
 29 |     H_ZONE_ADD_INDEX_REQUEST = 'Add-Index-Request',
 30 |     H_ZONE_INDEX_NOTICE = 'Index-Notice',
 31 |     H_ZONE_UPDATE = 'Zone-Update',
 32 |     H_ZONE_ROLE_SET = 'Role-Set',
 33 |     H_ZONE_SET = 'Zone-Set',
 34 |     H_ZONE_JOIN = 'Zone-Join',
 35 |     H_ZONE_ADD_INVITE = 'Zone-Add-Invite',
 36 |     H_ZONE_APPEND = 'Zone-Append',
 37 |     H_ZONE_REMOVE = 'Zone-Remove',
 38 |     H_ZONE_ADD_UPLOAD = 'Add-Uploaded-Asset'
 39 | }
 40 | 
 41 | Zone.RoleOptions = {
 42 |     Admin = 'Admin',
 43 |     Contributor = 'Contributor',
 44 |     ExternalContributor = 'ExternalContributor',
 45 |     Moderator = 'Moderator',
 46 | }
 47 | 
 48 | HandlerRoles = {
 49 |     [Zone.Constants.H_ZONE_ROLE_SET] = {
 50 |         Zone.RoleOptions.Admin
 51 |     },
 52 |     [Zone.Constants.H_ZONE_UPDATE] = {
 53 |         Zone.RoleOptions.Admin
 54 |     },
 55 |     [Zone.Constants.H_ZONE_ADD_INDEX_ID] = {
 56 |         Zone.RoleOptions.Admin,
 57 |         Zone.RoleOptions.Moderator
 58 |     },
 59 |     [Zone.Constants.H_ZONE_ADD_INDEX_REQUEST] = {
 60 |         Zone.RoleOptions.Admin,
 61 |         Zone.RoleOptions.Contributor,
 62 |         Zone.RoleOptions.ExternalContributor
 63 |     },
 64 |     [Zone.Constants.H_ZONE_ADD_UPLOAD] = {
 65 |         Zone.RoleOptions.Admin
 66 |     },
 67 |     [Zone.Constants.H_ZONE_RUN_ACTION] = {
 68 |         Zone.RoleOptions.Admin
 69 |     },
 70 | }
 71 | 
 72 | Zone.Data = Zone.Data or {
 73 |     KV = KV.new({ BatchPlugin }),
 74 |     AssetManager = AssetManager.new()
 75 | }
 76 | 
 77 | -- Roles: { <Id>: string = { Roles = roles, Type = 'wallet' | 'process' } } :. Roles[<id>] = {...}
 78 | Zone.Roles = Zone.Roles or {}
 79 | 
 80 | -- Invites: { <Id>, <Name>, <Logo> }
 81 | Zone.Invites = Zone.Invites or {}
 82 | 
 83 | Zone.Version = '0.0.1'
 84 | 
 85 | function GetState()
 86 |     return {
 87 |         Owner = Owner,
 88 |         Store = Zone.Data.KV:dump(),
 89 |         Assets = Zone.Data.AssetManager.Assets,
 90 |         Roles = Zone.Roles,
 91 |         RoleOptions = Zone.RoleOptions,
 92 |         Permissions = HandlerRoles,
 93 |         Invites = Zone.Invites,
 94 |         Version = Zone.Version
 95 |     }
 96 | end
 97 | 
 98 | function SyncState()
 99 |     Send({ device = 'patch@1.0', zone = json.encode(GetState()) })
100 | end
101 | 
102 | function Zone.Functions.tableLength(t)
103 |     local count = 0
104 |     for _ in pairs(t) do
105 |         count = count + 1
106 |     end
107 |     return count
108 | end
109 | 
110 | function Zone.Functions.rolesHasValue(roles, role)
111 |     for _, r in ipairs(roles) do
112 |         if r == role then
113 |             return true
114 |         end
115 |     end
116 |     return false
117 | end
118 | 
119 | function Zone.Functions.getActorRoles(actor)
120 |     for id, entry in pairs(Zone.Roles) do
121 |         if id == actor then
122 |             return entry.Roles
123 |         end
124 |     end
125 |     return nil
126 | end
127 | 
128 | function Zone.Functions.actorHasRole(actor, role)
129 |     local actorRoles = Zone.Functions.getActorRoles(actor)
130 |     if Zone.Functions.rolesHasValue(actorRoles, role) then
131 |         return true
132 |     end
133 |     return false
134 | end
135 | 
136 | function Zone.Functions.authRunAction(msg)
137 |     -- True if caller has role to call ForwardAction
138 |     if not msg.ForwardTo or not msg.ForwardAction then
139 |         return false, 'ForwardTo and ForwardAction are required'
140 |     end
141 | 
142 |     -- A wallet user calling run-action must be an owner or admin
143 |     if msg.From == Owner or msg.From == ao.id then
144 |         return true
145 |     end
146 | 
147 |     local rolesForHandler = Zone.Functions.getRolesForAction(msg.ForwardAction)
148 |     if not rolesForHandler then
149 |         return false, 'AuthRoles: Sender ' .. msg.From .. ' not Authorized to run action ' .. msg.ForwardAction .. '.'
150 |     end
151 | 
152 |     local actorRoles = Zone.Functions.getActorRoles(msg.From)
153 | 
154 |     if actorRoles then
155 |         for _, role in pairs(rolesForHandler) do
156 |             if Zone.Functions.rolesHasValue(actorRoles, role) then
157 |                 return true
158 |             end
159 |         end
160 |     end
161 | 
162 |     return true
163 | end
164 | 
165 | function Zone.Functions.isAuthorized(msg)
166 |     if msg.From ~= Owner and msg.From ~= ao.id and Zone.Functions.tableLength(Zone.Roles) == 0 then
167 |         return false, 'Not Authorized'
168 |     end
169 | 
170 |     if msg.From == Owner or msg.From == ao.id then
171 |         return true
172 |     end
173 | 
174 |     local rolesForHandler = HandlerRoles[msg.Action]
175 | 
176 |     if not rolesForHandler then
177 |         return msg.From == Owner or false,
178 |             'AuthRoles: Sender ' .. msg.From .. ' not Authorized. Only Owner can access the handler ' .. msg.Action
179 |     end
180 | 
181 |     local actorRoles = Zone.Functions.getActorRoles(msg.From)
182 | 
183 |     if actorRoles then
184 |         for _, role in pairs(rolesForHandler) do
185 |             if Zone.Functions.rolesHasValue(actorRoles, role) then
186 |                 return true
187 |             end
188 |         end
189 |     end
190 | 
191 |     if not actorRoles then
192 |         return false, 'AuthRoles: ' .. msg.From .. ' Not Authorized'
193 |     end
194 | 
195 |     return false, 'AuthRoles: Sender ' .. msg.From .. ' not Authorized.'
196 | end
197 | 
198 | -- Utility Functions
199 | function Zone.Functions.decodeMessageData(data)
200 |     local status, decodedData = pcall(json.decode, data)
201 |     if not status or type(decodedData) ~= 'table' then
202 |         return { success = false, data = nil }
203 |     end
204 | 
205 |     return { success = true, data = decodedData }
206 | end
207 | 
208 | function Zone.Functions.mergeTables(original, updates)
209 |     for key, value in pairs(updates) do
210 |         if type(value) == 'table' and type(original[key]) == 'table' then
211 |             original[key] = Zone.Functions.mergeTables(original[key], value)
212 |         else
213 |             original[key] = value
214 |         end
215 |     end
216 |     return original
217 | end
218 | 
219 | function Zone.Functions.sendError(target, errorMessage)
220 |     ao.send({
221 |         Target = target,
222 |         Action = Zone.H_ZONE_ERROR,
223 |         Tags = {
224 |             Status = 'Error',
225 |             Message = errorMessage
226 |         }
227 |     })
228 | end
229 | 
230 | function Zone.Functions.runAction(msg)
231 |     if not Zone.Functions.isAuthorized(msg) then
232 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
233 |         return
234 |     end
235 | 
236 |     if not msg.ForwardTo or not msg.ForwardAction then
237 |         ao.send({
238 |             Target = msg.From,
239 |             Action = 'Input-Error',
240 |             Tags = {
241 |                 Status = 'Error',
242 |                 Message = 'Invalid arguments, required { ForwardTo, ForwardAction }'
243 |             }
244 |         })
245 |         return
246 |     end
247 | 
248 |     local decodeResult = Zone.Functions.decodeMessageData(msg.Data)
249 | 
250 |     -- Clear out Run-Action
251 |     msg.Tags.Action = nil
252 | 
253 |     local messageToSend = {
254 |         Target = msg.ForwardTo,
255 |         Action = msg.ForwardAction,
256 |         Tags = msg.Tags
257 |     }
258 | 
259 |     if decodeResult.data and decodeResult.data.Input then
260 |         messageToSend.Data = json.encode(decodeResult.data.Input)
261 |     end
262 | 
263 |     ao.send(messageToSend)
264 | end
265 | 
266 | function Zone.Functions.zoneGet(msg)
267 |     msg.reply({
268 |         Action = Zone.Constants.H_ZONE_SUCCESS,
269 |         Data = GetState()
270 |     })
271 | end
272 | 
273 | function Zone.Functions.keysHandler(msg)
274 |     if not Zone.Functions.isAuthorized(msg) then
275 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
276 |         return
277 |     end
278 | 
279 |     local path = msg.Tags.Path or nil
280 |     local keys = Zone.Data.KV:keys(path)
281 | 
282 |     msg.reply({
283 |         Target = msg.From,
284 |         Action = Zone.Constants.H_ZONE_SUCCESS,
285 |         Data = { Keys = keys }
286 |     })
287 | end
288 | 
289 | function Zone.Functions.zoneUpdate(msg)
290 |     local authorized, message = Zone.Functions.isAuthorized(msg)
291 |     if not authorized then
292 |         Zone.Functions.sendError(msg.From, 'Not Authorized' .. ' ' .. message)
293 |         return
294 |     end
295 | 
296 |     local decodedData = Zone.Functions.decodeMessageData(msg.Data)
297 | 
298 |     if not decodedData.success then
299 |         Zone.Functions.sendError(msg.From, 'Invalid Data')
300 |         return
301 |     end
302 | 
303 |     local entries = decodedData.data
304 |     if entries and #entries then
305 |         for _, entry in ipairs(entries) do
306 |             if entry.key and entry.value then
307 |                 local updateType = msg.UpdateType or 'Add-Or-Update'
308 |                 if updateType == 'Add-Or-Update' then
309 |                     Zone.Data.KV:set(entry.key, entry.value)
310 |                 elseif updateType == 'Remove' then
311 |                     Zone.Data.KV:remove(entry.key)
312 |                 end
313 |             end
314 |         end
315 | 
316 |         SyncState()
317 |         ao.send({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
318 |     end
319 | end
320 | 
321 | function Zone.Functions.zoneRoleSet(msg)
322 |     -- Data: { Id=<id>, Roles=<{ <role>, <role>, Type=<wallet> | <process> }> }[]
323 |     local function check_valid_address(address)
324 |         if not address or type(address) ~= 'string' then
325 |             return false
326 |         end
327 |         return string.match(address, '^[%w%-_]+
#39;) ~= nil and #address == 43
328 |     end
329 | 
330 |     local function check_valid_roles(roles)
331 |         if not roles then
332 |             return true
333 |         end
334 | 
335 |         if #roles == 0 then
336 |             return true
337 |         end
338 | 
339 |         for _, role in ipairs(roles) do
340 |             if type(role) ~= 'string' then
341 |                 return false
342 |             end
343 |         end
344 | 
345 |         return true
346 |     end
347 | 
348 |     local authorized, message = Zone.Functions.isAuthorized(msg)
349 |     if not authorized then
350 |         print('Not Authorized', message)
351 |         Zone.Functions.sendError(msg.From, message)
352 |         return
353 |     end
354 | 
355 |     local decodeResult = Zone.Functions.decodeMessageData(msg.Data)
356 | 
357 |     if decodeResult.success and decodeResult.data then
358 |         for _, entry in ipairs(decodeResult.data) do
359 |             local actorId = entry.Id
360 |             local roles = entry.Roles
361 |             local type = entry.Type
362 |             local sendInvite = entry.SendInvite
363 | 
364 |             if not actorId then
365 |                 ao.send({
366 |                     Target = msg.From,
367 |                     Action = 'Input-Error',
368 |                     Tags = {
369 |                         Status = 'Error',
370 |                         Message =
371 |                         'Invalid arguments, required { Id=<id>, Roles=<{ <role>, <role> }> or {} or nil} in data'
372 |                     }
373 |                 })
374 |                 return
375 |             end
376 | 
377 |             if not check_valid_address(actorId) then
378 |                 Zone.Functions.sendError(msg.From, 'Id must be a valid address')
379 |                 return
380 |             end
381 | 
382 |             if not check_valid_roles(roles) then
383 |                 Zone.Functions.sendError(msg.From, 'Role must be a table of strings')
384 |                 return
385 |             end
386 | 
387 |             Zone.Roles[actorId] = {
388 |                 Roles = roles,
389 |                 Type = type
390 |             }
391 | 
392 |             if sendInvite then
393 |                 ao.send({
394 |                     Target = actorId,
395 |                     Action = Zone.Constants.H_ZONE_ADD_INVITE,
396 |                     Tags = {
397 |                         Name = Zone.Data.KV.Store.Name,
398 |                         Logo = Zone.Data.KV.Store.Logo
399 |                     }
400 |                 })
401 |             end
402 |         end
403 | 
404 |         ao.send({
405 |             Target = msg.From,
406 |             Action = Zone.Constants.H_ZONE_SUCCESS,
407 |             Tags = {
408 |                 Status = 'Success',
409 |                 Message = 'Roles updated'
410 |             }
411 |         })
412 | 
413 |         SyncState()
414 |     else
415 |         Zone.Functions.sendError(msg.From, string.format(
416 |             'Failed to parse role update data, received: %s. %s.', msg.Data,
417 |             'Data must be an object - { Id, Roles, Type }'))
418 |     end
419 | end
420 | 
421 | function Zone.Functions.addZoneInvite(msg)
422 |     for _, invite in ipairs(Zone.Invites) do
423 |         if invite.Id == msg.From then
424 |             print('Invite from this zone is already set')
425 |             return
426 |         end
427 |     end
428 | 
429 |     table.insert(Zone.Invites, {
430 |         Id = msg.From,
431 |         Name = msg.Tags.Name,
432 |         Logo = msg.Tags.Logo
433 |     })
434 | 
435 |     ao.send({
436 |         Target = msg.From,
437 |         Action = 'Invite-Acknowledged'
438 |     })
439 | 
440 |     SyncState()
441 | end
442 | 
443 | function Zone.Functions.joinZone(msg)
444 |     local index = -1
445 |     for i, invite in ipairs(Zone.Invites) do
446 |         if invite.Id == msg.Tags.ZoneId then
447 |             index = i
448 |         end
449 |     end
450 | 
451 | 
452 |     if index > -1 then
453 |         local store = Zone.Data.KV.Store
454 |         local path = nil
455 | 
456 |         if msg.Tags.Path then
457 |             if not store[msg.Tags.Path] then
458 |                 store[msg.Tags.Path] = {}
459 |             end
460 | 
461 |             path = store[msg.Tags.Path]
462 |         else
463 |             if not store.JoinedZones then
464 |                 store.JoinedZones = {}
465 |             end
466 | 
467 |             path = store.JoinedZones
468 |         end
469 | 
470 |         table.insert(path, Zone.Invites[index])
471 |         table.remove(Zone.Invites, index)
472 | 
473 |         ao.send({
474 |             Target = msg.From,
475 |             Action = 'Joined-Zone'
476 |         })
477 | 
478 |         SyncState()
479 |     end
480 | end
481 | 
482 | function Zone.Functions.addUpload(msg)
483 |     Zone.Data.AssetManager:update({
484 |         Type = 'Add',
485 |         AssetId = msg.AssetId,
486 |         Timestamp = msg.Timestamp,
487 |         AssetType = msg.AssetType,
488 |         ContentType = msg.ContentType,
489 |         Quantity = msg.Quantity,
490 |         SyncState = SyncState,
491 |     })
492 | end
493 | 
494 | function Zone.Functions.creditNotice(msg)
495 |     Zone.Data.AssetManager:update({
496 |         Type = 'Add',
497 |         AssetId = msg.From,
498 |         Timestamp = msg.Timestamp,
499 |         Quantity = msg.Quantity,
500 |         SyncState = SyncState
501 |     })
502 | end
503 | 
504 | function Zone.Functions.debitNotice(msg)
505 |     Zone.Data.AssetManager:update({
506 |         Type = 'Remove',
507 |         AssetId = msg.From,
508 |         Timestamp = msg.Timestamp,
509 |         Quantity = msg.Quantity,
510 |         SyncState = SyncState,
511 |     })
512 | end
513 | 
514 | function Zone.Functions.addIndexId(msg)
515 |     if not Zone.Functions.isAuthorized(msg) then
516 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
517 |         return
518 |     end
519 | 
520 |     if not msg.IndexId then
521 |         Zone.Functions.sendError(msg.From, 'Invalid Data')
522 |         return
523 |     end
524 | 
525 |     if not Zone.Data.KV.Store.Index then
526 |         Zone.Data.KV.Store.Index = {}
527 |     end
528 | 
529 |     for _, index in ipairs(Zone.Data.KV.Store.Index) do
530 |         if index.Id == msg.IndexId then
531 |             Zone.Functions.sendError(msg.From, 'Id already exists')
532 |             return
533 |         end
534 |     end
535 | 
536 |     table.insert(Zone.Data.KV.Store.Index, { Id = msg.IndexId })
537 | 
538 |     SyncState()
539 |     msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
540 | end
541 | 
542 | function Zone.Functions.addIndexRequest(msg)
543 |     if not Zone.Functions.isAuthorized(msg) then
544 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
545 |         return
546 |     end
547 | 
548 |     if not msg.IndexId then
549 |         Zone.Functions.sendError(msg.From, 'Invalid Data')
550 |         return
551 |     end
552 | 
553 |     if not Zone.Data.KV.Store.IndexRequests then
554 |         Zone.Data.KV.Store.IndexRequests = {}
555 |     end
556 | 
557 |     for _, index in ipairs(Zone.Data.KV.Store.IndexRequests) do
558 |         if index.Id == msg.IndexId then
559 |             Zone.Functions.sendError(msg.From, 'Id already exists')
560 |             return
561 |         end
562 |     end
563 | 
564 |     table.insert(Zone.Data.KV.Store.IndexRequests, { Id = msg.IndexId })
565 | 
566 |     SyncState()
567 |     msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
568 | end
569 | 
570 | -- TODO: Add original sender (asset owner) to asset Send-Index and verify role
571 | function Zone.Functions.indexNotice(msg)
572 |     local entryIndex = -1
573 | 
574 |     for i, entry in ipairs(Zone.Data.KV.Store.Index) do
575 |         if entry.Id == msg.From then
576 |             entryIndex = i
577 |             break
578 |         end
579 |     end
580 | 
581 |     if entryIndex == -1 then
582 |         for reqIndex, reqEntry in ipairs(Zone.Data.KV.Store.IndexRequests) do
583 |             if reqEntry.Id == msg.From then
584 |                 table.remove(Zone.Data.KV.Store.IndexRequests, reqIndex)
585 |                 table.insert(Zone.Data.KV.Store.Index, reqEntry)
586 |                 entryIndex = #Zone.Data.KV.Store.Index
587 |                 break
588 |             end
589 |         end
590 |     end
591 | 
592 |     if entryIndex > -1 then
593 |         local decodedData = Zone.Functions.decodeMessageData(msg.Data)
594 |         if not decodedData.success or not decodedData.data then
595 |             Zone.Functions.sendError(msg.From, 'Invalid Data')
596 |             return
597 |         end
598 | 
599 |         local existingEntry = Zone.Data.KV.Store.Index[entryIndex]
600 |         local newData = decodedData.data or {}
601 | 
602 |         for key, value in pairs(newData) do
603 |             if type(value) == 'table' and type(existingEntry[key]) == 'table' then
604 |                 existingEntry[key] = Zone.Functions.mergeTables(existingEntry[key], value)
605 |             else
606 |                 existingEntry[key] = value
607 |             end
608 |         end
609 | 
610 |         Zone.Data.KV.Store.Index[entryIndex] = existingEntry
611 | 
612 |         SyncState()
613 |         msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
614 |     else
615 |         Zone.Functions.sendError(msg.From, 'Entry not found')
616 |     end
617 | end
618 | 
619 | function Zone.Functions.setHandler(msg)
620 |     if not Zone.Functions.isAuthorized(msg) then
621 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
622 |         return
623 |     end
624 | 
625 |     local path = msg.Tags.Path or ''
626 |     local decodedData = Zone.Functions.decodeMessageData(msg.Data)
627 |     if not decodedData.success or not decodedData.data then
628 |         Zone.Functions.sendError(msg.From, 'Invalid Data')
629 |         return
630 |     end
631 | 
632 |     Zone.Data.KV:set(path, decodedData.data)
633 | 
634 |     SyncState()
635 |     msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
636 | end
637 | 
638 | function Zone.Functions.appendHandler(msg)
639 |     if not Zone.Functions.isAuthorized(msg) then
640 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
641 |         return
642 |     end
643 | 
644 |     local path = msg.Tags.Path or ''
645 |     local decodedData = Zone.Functions.decodeMessageData(msg.Data)
646 | 
647 |     if not decodedData.success or not decodedData.data then
648 |         Zone.Functions.sendError(msg.From, 'Invalid Data')
649 |         return
650 |     end
651 | 
652 |     Zone.Data.KV:append(path, decodedData.data)
653 | 
654 |     SyncState()
655 |     msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
656 | end
657 | 
658 | function Zone.Functions.removeHandler(msg)
659 |     if not Zone.Functions.isAuthorized(msg) then
660 |         Zone.Functions.sendError(msg.From, 'Not Authorized')
661 |         return
662 |     end
663 | 
664 |     local path = msg.Tags.Path or ''
665 |     if path == '' then
666 |         Zone.Functions.sendError(msg.From, 'Invalid Path: Path required to remove')
667 |         return
668 |     end
669 | 
670 |     Zone.Data.KV:remove(path)
671 | 
672 |     SyncState()
673 |     msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
674 | end
675 | 
676 | Handlers.add(Zone.Constants.H_ZONE_GET, Zone.Constants.H_ZONE_GET, Zone.Functions.zoneGet)
677 | Handlers.add(Zone.Constants.H_ZONE_KEYS, Zone.Constants.H_ZONE_KEYS, Zone.Functions.keysHandler)
678 | Handlers.add(Zone.Constants.H_ZONE_CREDIT_NOTICE, Zone.Constants.H_ZONE_CREDIT_NOTICE, Zone.Functions.creditNotice)
679 | Handlers.add(Zone.Constants.H_ZONE_DEBIT_NOTICE, Zone.Constants.H_ZONE_DEBIT_NOTICE, Zone.Functions.debitNotice)
680 | Handlers.add(Zone.Constants.H_ZONE_UPDATE, Zone.Constants.H_ZONE_UPDATE, Zone.Functions.zoneUpdate)
681 | Handlers.add(Zone.Constants.H_ZONE_ADD_UPLOAD, Zone.Constants.H_ZONE_ADD_UPLOAD, Zone.Functions.addUpload)
682 | Handlers.add(Zone.Constants.H_ZONE_RUN_ACTION, Zone.Constants.H_ZONE_RUN_ACTION, Zone.Functions.runAction)
683 | Handlers.add(Zone.Constants.H_ZONE_ADD_INDEX_ID, Zone.Constants.H_ZONE_ADD_INDEX_ID, Zone.Functions.addIndexId)
684 | Handlers.add(Zone.Constants.H_ZONE_ADD_INDEX_REQUEST, Zone.Constants.H_ZONE_ADD_INDEX_REQUEST,
685 |     Zone.Functions.addIndexRequest)
686 | Handlers.add(Zone.Constants.H_ZONE_INDEX_NOTICE, Zone.Constants.H_ZONE_INDEX_NOTICE, Zone.Functions.indexNotice)
687 | Handlers.add(Zone.Constants.H_ZONE_SET, Zone.Constants.H_ZONE_SET, Zone.Functions.setHandler)
688 | Handlers.add(Zone.Constants.H_ZONE_APPEND, Zone.Constants.H_ZONE_APPEND, Zone.Functions.appendHandler)
689 | Handlers.add(Zone.Constants.H_ZONE_REMOVE, Zone.Constants.H_ZONE_REMOVE, Zone.Functions.removeHandler)
690 | Handlers.add(Zone.Constants.H_ZONE_ROLE_SET, Zone.Constants.H_ZONE_ROLE_SET, Zone.Functions.zoneRoleSet)
691 | Handlers.add(Zone.Constants.H_ZONE_JOIN, Zone.Constants.H_ZONE_JOIN, Zone.Functions.joinZone)
692 | Handlers.add(Zone.Constants.H_ZONE_ADD_INVITE, Zone.Constants.H_ZONE_ADD_INVITE, Zone.Functions.addZoneInvite)
693 | 
694 | --------------------------------------------------------------------------------
695 | -- Helper function: setStoreValue
696 | -- This function takes a dot-notated key and a value, then sets it in the
697 | -- Zone.Data.KV store with the following behaviors:
698 | --   1) If the final segment ends with '[]', we treat it as an array field and
699 | --      append the new value.
700 | --   2) If the final segment ends with '+++', we treat it as an instruction to
701 | --      'append the string' to whatever already exists at that key. If it is an
702 | --      array field (with '[]'), we append to the last element.
703 | --   3) Otherwise, we just set/overwrite the value at that key in the KV store.
704 | --------------------------------------------------------------------------------
705 | local function setStoreValue(keyString, value)
706 |     -- 1) Split the input keyString on dots
707 |     local parts = {}
708 |     for part in string.gmatch(keyString, '[^%.]+') do
709 |         table.insert(parts, part)
710 |     end
711 | 
712 |     -- 2) Check for trailing '+++' or '[]'
713 |     local lastPart = parts[#parts]
714 | 
715 |     -- Check if we want to append to an existing string
716 |     local isStringAppend = false
717 |     if string.sub(lastPart, -3) == '+++' then
718 |         isStringAppend = true
719 |         lastPart = string.sub(lastPart, 1, -4) -- remove '+++'
720 |     end
721 | 
722 |     -- Check if we are dealing with an array
723 |     local isArray = false
724 |     if string.sub(lastPart, -2) == '[]' then
725 |         isArray = true
726 |         lastPart = string.sub(lastPart, 1, -3) -- remove '[]'
727 |     end
728 | 
729 |     -- Update the last segment in our parts table
730 |     parts[#parts]      = lastPart
731 | 
732 |     -- 3) Build a dot-notated key up to (but not including) the last part
733 |     --    We'll use this later to navigate or set in the KV store.
734 |     local pathUpToLast = table.concat(parts, '.', 1, #parts - 1)
735 |     local finalKey     = parts[#parts]
736 | 
737 |     -- A small helper to rejoin the entire path so KV can handle the nested structure:
738 |     local function recombinePath(upTo, last)
739 |         if upTo == nil or upTo == '' then
740 |             return last
741 |         else
742 |             return upTo .. '.' .. last
743 |         end
744 |     end
745 | 
746 |     local fullKey = recombinePath(pathUpToLast, finalKey)
747 | 
748 |     --------------------------------------------------------------------
749 |     -- 4) Handling for the '+++' case (string appending)
750 |     --------------------------------------------------------------------
751 |     if isStringAppend then
752 |         local currentValue = Zone.Data.KV:get(fullKey)
753 | 
754 |         if isArray then
755 |             -- If no array yet, create it with a single element
756 |             if type(currentValue) ~= 'table' then
757 |                 Zone.Data.KV:set(fullKey, { value })
758 |                 return
759 |             end
760 |             -- Otherwise, append the incoming string to the last element
761 |             local lastIndex = #currentValue
762 |             if lastIndex == 0 then
763 |                 -- If array is empty, just add this as the first element
764 |                 table.insert(currentValue, value)
765 |             else
766 |                 -- Append to the last string in the array
767 |                 currentValue[lastIndex] = currentValue[lastIndex] .. value
768 |             end
769 |             Zone.Data.KV:set(fullKey, currentValue)
770 |         else
771 |             -- Not an array, just a single field
772 |             if currentValue == nil then
773 |                 -- Nothing was there, just set it
774 |                 Zone.Data.KV:set(fullKey, value)
775 |             elseif type(currentValue) == 'string' then
776 |                 -- Append to existing string
777 |                 Zone.Data.KV:set(fullKey, currentValue .. value)
778 |             else
779 |                 -- If it wasn't a string, simply overwrite
780 |                 Zone.Data.KV:set(fullKey, value)
781 |             end
782 |         end
783 | 
784 |         --------------------------------------------------------------------
785 |         -- 5) Handling for a normal set, with or without '[]'
786 |         --------------------------------------------------------------------
787 |     else
788 |         if isArray then
789 |             Zone.Data.KV:append(fullKey, value)
790 |         else
791 |             -- Normal field, just set (overwrite) it
792 |             Zone.Data.KV:set(fullKey, value)
793 |         end
794 |     end
795 | end
796 | 
797 | ZoneInitCompleted = ZoneInitCompleted or false
798 | 
799 | if not ZoneInitCompleted then
800 |     if #Inbox >= 1 and Inbox[1]['On-Boot'] ~= nil then
801 |         for _, tag in ipairs(Inbox[1].TagArray) do
802 |             local prefix = 'Bootloader-'
803 |             if string.sub(tag.name, 1, string.len(prefix)) == prefix then
804 |                 local keyWithoutPrefix = string.sub(tag.name, string.len(prefix) + 1)
805 |                 setStoreValue(keyWithoutPrefix, tag.value)
806 |             end
807 |         end
808 |     end
809 | 
810 |     SyncState()
811 |     ZoneInitCompleted = true
812 | end
813 | 
814 | return Zone
815 | 


--------------------------------------------------------------------------------
/services/src/registry_process_collection.lua:
--------------------------------------------------------------------------------
  1 | local json = require('json')
  2 | 
  3 | -- Collections { Id, Name, Description, Creator, DateCreated, Banner, Thumbnail }[]
  4 | if not Collections then Collections = {} end
  5 | 
  6 | InitialSync = InitialSync or 'INCOMPLETE'
  7 | if InitialSync == 'INCOMPLETE' then
  8 | 	Send({
  9 | 		device = 'patch@1.0',
 10 | 		cache = json.encode({ Collections = Collections })
 11 | 	})
 12 | 	InitialSync = 'COMPLETE'
 13 | end
 14 | 
 15 | -- Add collection to registry
 16 | Handlers.add('Add-Collection', Handlers.utils.hasMatchingTag('Action', 'Add-Collection'), function(msg)
 17 | 	local data = {
 18 | 		Id = msg.Tags.CollectionId,
 19 | 		Name = msg.Tags.Name,
 20 | 		Description = msg.Tags.Description,
 21 | 		Creator = msg.Tags.Creator,
 22 | 		DateCreated = msg.Tags.DateCreated,
 23 | 		Banner = msg.Tags.Banner,
 24 | 		Thumbnail = msg.Tags.Thumbnail
 25 | 	}
 26 | 
 27 | 	local requiredFields = {
 28 | 		{ key = 'Id',      name = 'CollectionId' },
 29 | 		{ key = 'Name',    name = 'Name' },
 30 | 		{ key = 'Creator', name = 'Creator' }
 31 | 	}
 32 | 
 33 | 	for _, field in ipairs(requiredFields) do
 34 | 		if not data[field.key] or data[field.key] == '' then
 35 | 			ao.send({
 36 | 				Target = msg.From,
 37 | 				Action = 'Action-Response',
 38 | 				Tags = {
 39 | 					Status = 'Error',
 40 | 					Message = 'Invalid or missing ' .. field.name
 41 | 				}
 42 | 			})
 43 | 			return
 44 | 		end
 45 | 	end
 46 | 
 47 | 	for _, collection in ipairs(Collections) do
 48 | 		if collection.Id == data.Id then
 49 | 			ao.send({
 50 | 				Target = msg.From,
 51 | 				Action = 'Action-Response',
 52 | 				Tags = {
 53 | 					Status = 'Error',
 54 | 					Message = 'Collection with this ID already exists'
 55 | 				}
 56 | 			})
 57 | 			return
 58 | 		end
 59 | 	end
 60 | 
 61 | 	table.insert(Collections, {
 62 | 		Id = data.Id,
 63 | 		Name = data.Name,
 64 | 		Description = data.Description,
 65 | 		Creator = data.Creator,
 66 | 		DateCreated = data.DateCreated,
 67 | 		Banner = data.Banner,
 68 | 		Thumbnail = data.Thumbnail
 69 | 	})
 70 | 
 71 | 	Send({
 72 | 		device = 'patch@1.0',
 73 | 		cache = json.encode({ Collections = Collections })
 74 | 	})
 75 | 
 76 | 	ao.send({
 77 | 		Target = msg.From,
 78 | 		Action = 'Action-Response',
 79 | 		Tags = {
 80 | 			Status = 'Success',
 81 | 			Message = 'Collection added successfully'
 82 | 		}
 83 | 	})
 84 | end)
 85 | 
 86 | Handlers.add('Get-Collections', Handlers.utils.hasMatchingTag('Action', 'Get-Collections'), function(msg)
 87 | 	ao.send({
 88 | 		Target = msg.From,
 89 | 		Action = 'Action-Response',
 90 | 		Tags = {
 91 | 			Status = 'Success',
 92 | 			Message = 'Collections fetched successfully'
 93 | 		},
 94 | 		Data = json.encode({ Collections = Collections })
 95 | 	})
 96 | end)
 97 | 
 98 | Handlers.add('Remove-Collection', Handlers.utils.hasMatchingTag('Action', 'Remove-Collection'), function(msg)
 99 | 	local collectionId = msg.Tags.CollectionId
100 | 
101 | 	local collectionIndex = nil
102 | 	local collectionOwner = nil
103 | 
104 | 	for index, collection in ipairs(Collections) do
105 | 		if collection.Id == collectionId then
106 | 			collectionIndex = index
107 | 			collectionOwner = collection.Creator
108 | 			break
109 | 		end
110 | 	end
111 | 
112 | 	if msg.From ~= Owner and msg.From ~= ao.id and msg.From ~= collectionOwner then
113 | 		ao.send({
114 | 			Target = msg.From,
115 | 			Action = 'Authorization-Error',
116 | 			Tags = {
117 | 				Status = 'Error',
118 | 				Message = 'Unauthorized to access this handler'
119 | 			}
120 | 		})
121 | 		return
122 | 	end
123 | 
124 | 	if not collectionId or collectionId == '' then
125 | 		ao.send({
126 | 			Target = msg.From,
127 | 			Action = 'Action-Response',
128 | 			Tags = {
129 | 				Status = 'Error',
130 | 				Message = 'Invalid or missing CollectionId'
131 | 			}
132 | 		})
133 | 		return
134 | 	end
135 | 
136 | 	if not collectionIndex then
137 | 		ao.send({
138 | 			Target = msg.From,
139 | 			Action = 'Action-Response',
140 | 			Tags = {
141 | 				Status = 'Error',
142 | 				Message = 'Collection not found'
143 | 			}
144 | 		})
145 | 		return
146 | 	end
147 | 
148 | 	table.remove(Collections, collectionIndex)
149 | 
150 | 	Send({
151 | 		device = 'patch@1.0',
152 | 		cache = json.encode({ Collections = Collections })
153 | 	})
154 | 
155 | 	ao.send({
156 | 		Target = msg.From,
157 | 		Action = 'Action-Response',
158 | 		Tags = {
159 | 			Status = 'Success',
160 | 			Message = 'Collection removed successfully'
161 | 		}
162 | 	})
163 | end)
164 | 
165 | Handlers.add('Filter-Inactive-Collections', Handlers.utils.hasMatchingTag('Action', 'Filter-Inactive-Collections'),
166 | 	function(msg)
167 | 		if msg.From ~= ao.id and msg.From ~= Owner then return end
168 | 
169 | 		local stampProcess = 'LaC2VtxqGekpRPuJh-TkI_ByAqCS2_KB3YuhMJ5yBtc'
170 | 
171 | 		local collections = {
172 | 			{ Id = 'fRHIxUYl8Z3v8_j7s9P80XZ1K0iAVqnFTMC1HeTRp18' },
173 | 			{ Id = 'e0pAZzSfBzHiIOVzJsz5qOpGeZM2wPMu4qD-t0z8FEM' },
174 | 			{ Id = 'JAHF1fo4MECRZZFKGcT0B6XM94Lqe-3FtB4Ht_kTEK0' },
175 | 		}
176 | 
177 | 		for _, collection in ipairs(collections) do
178 | 			print('Running stamp lookup on (' .. collection.Id .. ')')
179 | 			ao.send({
180 | 				Target = stampProcess,
181 | 				Action = 'Read-Stamps-By-Asset',
182 | 				['Data-Source'] = collection.Id
183 | 			})
184 | 
185 | 			local result = Receive({ From = stampProcess })
186 | 
187 | 			if result and result.Data and result.Data.stampsByAsset and #result.Data.stampsByAsset > 1 then
188 | 				print('Stamp count on collection (' .. collection.Id .. ') - ' .. #result.Data.stampsByAsset)
189 | 			else
190 | 				print('No stamps on collection (' .. collection.Id .. ') Removing...')
191 | 			end
192 | 		end
193 | 	end)


--------------------------------------------------------------------------------
/specs/README.md:
--------------------------------------------------------------------------------
1 | # Specifications and Protocols
2 | 
3 | This folder contains the specifications and / or data protocol of each library built inside @permaweb/libs.
4 | 
5 | [Zones](./spec-zones.md)
6 | 
7 | [Atomic Assets](./spec-atomic-assets.md)
8 | 
9 | [Collections](./spec-collections.md)


--------------------------------------------------------------------------------
/specs/spec-atomic-assets.md:
--------------------------------------------------------------------------------
 1 | # Atomic Assets
 2 | 
 3 | **Status:** Draft  
 4 | **Version:** 0.0.1  
 5 | **Authors:** Nick Juliano (nick@arweave.org)
 6 | 
 7 | ## Introduction
 8 | 
 9 | This document specifies **Atomic Assets** in the AO / Arweave ecosystem. An Atomic Asset is a unique, self-contained digital item that consists of an AO process and its associated data stored together in a single Arweave transaction. These assets are designed to be **ownable** and **transferable**, adhering to the [AO Token Blueprint](https://cookbook_ao.arweave.net/guides/aos/blueprints/token.html). Atomic Assets include additional data and metadata to represent a wide range of digital items, such as art, music, videos, domain names, applications, and more.
10 | 
11 | ## Motivation
12 | 
13 | Atomic Assets serve as foundational building blocks for the permaweb, providing a standardized way to represent digital ownership and facilitate seamless interoperability across decentralized applications. The need for Atomic Assets arises from the following key motivations:
14 | 
15 | 1. **Unique Representation**:  
16 |    Atomic Assets uniquely represent digital items, ensuring authenticity and enabling ownership tracking across the permaweb.
17 | 
18 | 2. **Tokenization of Digital Assets**:  
19 |    By adhering to the AO Token Blueprint, Atomic Assets simplify the creation, transfer, and management of tokenized items, enabling efficient trade and integration with marketplaces.
20 | 
21 | 3. **Extensibility**:  
22 |    Including metadata and additional data allows Atomic Assets to be extended for use cases beyond basic token functionality, such as embedding application logic or representing complex digital goods.
23 | 
24 | 4. **Interoperability**:  
25 |    Atomic Assets provide a consistent standard that ensures compatibility across diverse platforms and applications within the AO ecosystem.
26 | 
27 | ## Specification
28 | 
29 | An Atomic Asset consists of the following components:
30 | 
31 | ### 1. **AO Token Process**
32 | 
33 | - Atomic Assets are defined as AO processes adhering to the [AO Token Blueprint](https://cookbook_ao.arweave.net/guides/aos/blueprints/token.html).
34 | - This ensures compliance with standards for token creation, transfer, and ownership management.
35 | 
36 | ### 2. **Metadata**
37 | 
38 | - Metadata describes the asset and follows the [ANS-110 Standard](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-110.md).
39 | - Required metadata includes:
40 |   - **Name**: The asset's name.
41 |   - **Ticker**: A unique identifier for the asset.
42 |   - **Denomination**: The smallest divisible unit of the asset.
43 |   - **Creator**: The asset's creator.
44 |   - **Collection**: (Optional) The Collection ID if the asset belongs to a group.
45 | 
46 | ### 4. **Transferability**
47 | 
48 | - Assets may optionally be non-transferable, in which case only the creator or AO system can modify their state.
49 | 
50 | ### 5. **Data**
51 | 
52 | - Atomic Assets include the actual data they represent (e.g., digital artwork, application code, or metadata) within their transaction.
53 | 
54 | ## Use Cases
55 | 
56 | 1. **Digital Art**:  
57 |    Represent and trade unique pieces of digital artwork with embedded metadata.
58 | 
59 | 2. **Tokenized Applications**:  
60 |    Create tokens tied to software or application processes.
61 | 
62 | 3. **Memberships**:  
63 |    Use Atomic Assets as non-transferable membership tokens with specific privileges.
64 | 
65 | 4. **Domain Names**:  
66 |    Tokenize and manage ownership of decentralized domain names.
67 | 
68 | ## Conclusion
69 | 
70 | By combining metadata, tokenization, and state management, Atomic Assets provide a comprehensive framework for representing and managing digital items in the AO / Arweave ecosystem. This specification ensures a scalable and interoperable foundation for developers and users alike.
71 | 


--------------------------------------------------------------------------------
/specs/spec-collections.md:
--------------------------------------------------------------------------------
 1 | # Collections
 2 | 
 3 | **Status:** Draft  
 4 | **Version:** 0.0.1  
 5 | **Authors:** Nick Juliano (nick@arweave.org)
 6 | 
 7 | ## Introduction
 8 | 
 9 | This document defines **Collections** in the AO / Arweave ecosystem. A Collection is a structured grouping of atomic assets, allowing for cohesive representation, management, and categorization of digital items. Collections extend the concept of atomic assets by introducing an organized layer to group and manage related assets.
10 | 
11 | ## Motivation
12 | 
13 | As the use of atomic assets grows within the AO / Arweave ecosystem, there is a clear need for a standardized way to group and manage related assets. Collections enable creators and users to:
14 | 
15 | - Group assets into meaningful categories (e.g., art series, digital music albums, or curated asset sets).
16 | - Manage multiple assets efficiently under a single entity.
17 | - Provide contextual metadata for grouped assets, enhancing discoverability and user experience.
18 | - Simplify integration into user profiles and decentralized applications.
19 | 
20 | Collections add value by allowing developers to create higher-order organizational structures, ensuring scalability and ease of management for large datasets.
21 | 
22 | ## Specification
23 | 
24 | A Collection is a logical grouping of atomic assets, represented by metadata and references to the underlying assets. The following elements define a Collection:
25 | 
26 | ### 1. **Metadata**
27 | Each Collection includes metadata that describes its purpose and context:
28 | - **Name**: The name of the Collection.
29 | - **Description**: A description of the Collection's purpose or content.
30 | - **Creator**: The ID of the creator of the Collection.
31 | - **Banner**: A visual banner representing the Collection.
32 | - **Thumbnail**: A smaller image used to visually identify the Collection.
33 | - **DateCreated**: The timestamp when the Collection was created.
34 | - **LastUpdate**: The timestamp when the Collection was last updated.
35 | 
36 | ### 2. **Assets**
37 | A Collection contains a list of asset IDs (`AssetIds`) representing the atomic assets included in the Collection. Each asset ID is validated and checked for uniqueness within the Collection.
38 | 
39 | ### 3. **Handlers**
40 | The Collection provides several handlers to manage its metadata and assets:
41 | - **Info**: Retrieves the Collection's metadata and assets.
42 | - **Update-Assets**: Adds or removes atomic assets from the Collection.
43 | - **Add-Collection-To-Profile**: Associates the Collection with a user profile.
44 | 
45 | ## Example Workflow
46 | 
47 | 1. **Create a Collection**:
48 |    Initialize metadata for the Collection, such as `Name`, `Description`, `Banner`, and `Thumbnail`.
49 | 
50 | 2. **Add Assets**:
51 |    Use the `Update-Assets` handler with `UpdateType: "Add"` to populate the Collection with atomic assets.
52 | 
53 | 3. **Retrieve Information**:
54 |    Use the `Info` handler to fetch metadata and the list of assets in the Collection.
55 | 
56 | 4. **Associate with Profile**:
57 |    Link the Collection to a user profile using the `Add-Collection-To-Profile` handler.
58 | 
59 | 5. **Update or Remove Assets**:
60 |    Modify the Collection by adding or removing assets via the `Update-Assets` handler.
61 | 
62 | ## Use Cases
63 | 
64 | 1. **Art Collections**:
65 |    Group multiple pieces of digital artwork into a cohesive collection for sale or exhibition.
66 | 
67 | 2. **Music Albums**:
68 |    Organize tracks into an album with shared metadata like album art and release date.
69 | 
70 | 3. **Curated Sets**:
71 |    Enable curators to create and manage themed asset collections for marketplaces or applications.
72 | 
73 | ## Conclusion
74 | 
75 | By providing a standardized way to group and manage atomic assets, Collections enhance the functionality and usability of the AO / Arweave ecosystem, enabling developers and users to create richer experiences and applications.


--------------------------------------------------------------------------------
/specs/spec-comments.md:
--------------------------------------------------------------------------------
 1 | # Comments
 2 | 
 3 | **Status:** Draft  
 4 | **Version:** 0.0.1  
 5 | **Authors:** Nick Juliano (nick@arweave.org)
 6 | 
 7 | This document specifies **Comments** in the AO / Arweave ecosystem. A comment can be created on any atomic asset created on the permaweb, and interestingly is also an instantiation of an [atomic asset](./spec-atomic-assets.md) itself. By leveraging the Atomic Asset framework, each comment is a unique, ownable, and transferable digital object recorded on the permaweb. This approach ensures that interactions are both immutable and verifiable.
 8 | 
 9 | ## Introduction
10 | 
11 | In the AO / Arweave ecosystem, comments are designed as specialized Atomic Assets that enable users to engage in discussions and provide feedback on digital items.
12 | 
13 | ## Motivation
14 | 
15 | Comments play a critical role in fostering community engagement and dialogue around digital assets. Key motivations for implementing comments as Atomic Assets include:
16 | 
17 | **Interoperability**:
18 | Comments adhere to the same standards as other atomic assets, ensuring seamless integration across various decentralized applications within the AO ecosystem.
19 | 
20 | **Digital Ownership and Authenticity**:
21 | 
22 | Each comment is uniquely associated with its creator, providing clear provenance and accountability.
23 | 
24 | Specification
25 | 
26 | 1. Comments as Atomic Assets
27 | 
28 | Comments are implemented using the Atomic Asset model, with additional metadata to establish their relationships with other assets. In this context, every comment contains specific fields that link it to the asset it comments on:
29 | • Data-Source (parentId):
30 | This field identifies the immediate parent asset or comment that the new comment is directly responding to.
31 | • Root-Source (rootId):
32 | This field points to the original asset that initiated the conversation thread. For a top-level comment, the Root-Source is the same as the Data-Source. For replies within a thread, the Root-Source remains consistent with the initial asset.
33 | 
34 | 2. Data Model
35 | 
36 | A comment, as an atomic asset, comprises the following elements:
37 | • Identifier (ID):
38 | A unique transaction identifier that serves as the comment’s permanent record on the permaweb.
39 | • Creator:
40 | The address or unique identifier of the user who created the comment.
41 | • Content:
42 | The textual body of the comment. Typically stored as plain text, the content forms the core of the comment.
43 | • Relationship Tags:
44 | • Data-Source:
45 | Indicates the parent asset (or comment) that the comment is associated with.
46 | • Root-Source:
47 | Indicates the root asset of the conversation, providing context for the thread.
48 | • Metadata:
49 | Additional descriptive information may be included (such as a human-readable name or description) to assist in indexing, searching, or extending functionality.
50 | 
51 | 3. Comment Creation Process
52 | 
53 | When a user creates a comment, the following steps are followed: 1. User Submission:
54 | The user supplies the comment text along with identifiers for:
55 | • The parent asset or comment (parentId).
56 | • Optionally, the original asset (rootId) if replying within an ongoing conversation. If rootId is omitted, the system defaults to using parentId. 2. Atomic Asset Generation:
57 | The comment is minted as an Atomic Asset with the assetType explicitly set to "comment". During this process, the system attaches the required tags:
58 | • The Data-Source tag is set to the provided parentId.
59 | • The Root-Source tag is set to the provided rootId (or parentId if no root is specified). 3. Data Storage:
60 | The comment’s content is embedded within the asset’s data field, ensuring that it is permanently stored on the permaweb. 4. Recording:
61 | Once created, the comment is broadcast and recorded on the Arweave blockchain, where it becomes an immutable part of the digital record.
62 | 
63 | 4. Comment Retrieval and Querying
64 | 
65 | Comments can be retrieved by querying the permaweb for transactions with specific tags:
66 | • Filtering by Relationship:
67 | Developers can filter comment queries by the Data-Source and/or Root-Source tags. For example:
68 | • To obtain all comments made directly on a particular asset, a query would filter for transactions where Data-Source matches the asset’s ID.
69 | • To fetch an entire conversation thread, a query would filter using the Root-Source tag.
70 | • Data Reconstruction:
71 | Once retrieved, each comment’s details (such as content, creator, and relationship identifiers) are reconstructed from the associated transaction data.
72 | 
73 | 5. Use Cases
74 | 
75 | The ability to add comments as Atomic Assets opens up various practical applications:
76 | • Digital Art and Media:
77 | Users can comment on creative works, such as digital art, music, or videos, directly on the permaweb.
78 | • Social Interactions:
79 | Decentralized social platforms can leverage this model to enable robust, immutable threaded discussions.
80 | • Feedback Systems:
81 | Providing verifiable and permanent feedback on products, services, or content.
82 | • Collaborative Applications:
83 | Facilitating discussions and annotations within decentralized project management or collaborative tools.
84 | 
85 | 6. Security and Ownership
86 |    • Immutability:
87 |    Once created, a comment cannot be altered or deleted, ensuring the integrity of the conversation history.
88 |    • Ownership:
89 |    The comment is permanently associated with its creator, providing a clear record of authorship.
90 |    • Verifiability:
91 |    Using cryptographic techniques inherent to the Arweave blockchain, comments are tamper-proof and fully auditable.
92 | 
93 | ## Conclusion
94 | 
95 | This specification outlines a robust framework for implementing comments on the permaweb by leveraging the Atomic Asset model. By embedding relationship tags—Data-Source (parentId) and Root-Source (rootId)—each comment is clearly associated with the digital asset it references, providing a reliable, immutable, and interoperable means of recording social interactions. This design not only supports current use cases but also offers a scalable foundation for future enhancements within the AO / Arweave ecosystem.
96 | 


--------------------------------------------------------------------------------
/specs/spec-profiles.md:
--------------------------------------------------------------------------------
 1 | # Profiles
 2 | 
 3 | **Status:** Draft
 4 | 
 5 | **Version:** 0.0.1
 6 | 
 7 | **Authors:** Nick Juliano (nick@arweave.org)
 8 | 
 9 | ## Introduction
10 | 
11 | Profiles represent digital identities on the permaweb. They serve as unique, self-contained entities that describe but are not limited to users, organizations, or channels. Each Profile is an AO process capable of storing and updating relevant metadata as well as atomic assets that are associated with the profile.
12 | 
13 | ## Motivation
14 | 
15 | Profiles are a core component of decentralized identity and digital representation. The key motivations for Profiles include:
16 | 
17 | 1. **Digital Identity**  
18 |    Profiles uniquely identify entities on the permaweb, enabling verifiable ownership and facilitating reputation or identity-based interactions.
19 | 
20 | 2. **Extensible Metadata**  
21 |    By including user-defined metadata (e.g., username, display name, description, images), Profiles can be tailored to different use cases—from social identities to brand representations.
22 | 
23 | 3. **Interoperability**  
24 |    Profiles follow the AO process pattern, making them compatible with the broader ecosystem of AO-compliant assets and services.
25 | 
26 | 4. **Asset Association**  
27 |    Profiles can be linked with various digital assets (e.g., NFTs, memberships), providing a unified identity that aggregates a user’s digital portfolio.
28 | 
29 | ## Specification
30 | 
31 | A Profile is composed of the following components:
32 | 
33 | ### 1. **AO Process**
34 | 
35 | - **State Management**:  
36 |   Profiles are mutable in the sense that they can be updated by their owner via defined actions. Each update is recorded as an action on the Profile process.
37 | 
38 | ### 2. **Metadata**
39 | 
40 | Profiles include metadata that describe the associated entity. The metadata fields include:
41 | 
42 | - **UserName**:  
43 |   A unique identifier chosen by the user.
44 | 
45 | - **DisplayName**:  
46 |   A human-readable name for display purposes.
47 | 
48 | - **Description**:  
49 |   A short description or bio about the profile holder.
50 | 
51 | - **Profile Images** (optional):  
52 |   - **Thumbnail / ProfileImage**: A reference (transaction ID) to a small image representing the profile.
53 |   - **Banner / CoverImage**: A reference (transaction ID) to a larger banner or cover image.
54 | 
55 | ### 3. **Data**
56 | 
57 | - **Associated Data**:  
58 |   Profiles may include additional data, such as links to digital assets or collections. This allows a profile to serve as a hub for the holder’s digital items.
59 | 
60 | ### 4. **Interoperability and Lookup**
61 | 
62 | - **Direct Lookup**:  
63 |   Profiles are retrievable by their unique process ID.
64 | 
65 | - **Wallet Address Lookup**:  
66 |   Profiles can be associated with a wallet address so that a profile can be fetched by querying for the delegate address via a central profile registry process.
67 | 
68 | ## Use Cases
69 | 
70 | Profiles serve a wide range of applications within the AO ecosystem:
71 | 
72 | 1. **Digital Identity & Reputation**:  
73 |    Establish a verifiable identity for users, organizations, or communities.
74 | 
75 | 2. **Social & Community Platforms**:  
76 |    Allow individuals or groups to represent themselves with personalized data and imagery.
77 | 
78 | 3. **Marketplace Integration**:  
79 |    Link Profiles with owned digital assets, facilitating marketplace transactions and asset management.
80 | 
81 | 4. **Content Creation & Curation**:  
82 |    Provide a centralized identity for content creators to showcase their work, linking to various assets or NFTs.
83 | 
84 | ## Conclusion
85 | 
86 | Profiles provide a robust, decentralized framework for managing digital identities on the AO/Arweave ecosystem. By integrating metadata, asset linkage, and AO process-based state management, Profiles support a diverse range of use cases—from social identity to asset aggregation—ensuring a scalable and interoperable identity solution for decentralized applications.
87 | 
88 | *Note: This specification is provided as a starting point and may be updated as the AO ecosystem and its associated processes evolve.*


--------------------------------------------------------------------------------
/specs/spec-zones.md:
--------------------------------------------------------------------------------
 1 | # Zones
 2 | 
 3 | **Status:** Draft
 4 | 
 5 | **Version:** 0.0.1
 6 | 
 7 | **Authors:** Nick Juliano (nick@arweave.org)
 8 | 
 9 | ## Introduction
10 | 
11 | This document defines the concept of **Zones** on Arweave / AO. A Zone is a modular, programmable representation of an **entity** within the ecosystem. These entities could be but are not limited to user profiles, organizations, channels, and more. Zones serve as a container for storing and managing information relevant to the entity, and as a medium for executing actions on its behalf.
12 | 
13 | ## Motivation
14 | 
15 | **Zones** address several challenges and unmet needs within Arweave / AO. As the ecosystem grows and diversifies, the need for a standardized approach toward storing entity-specific data and executing their actions becomes more apparent.
16 | 
17 | ## Specification
18 | 
19 | An AO process can be identified as a **Zone** by including the following tags and data structures which meet a specific [**Data-Protocol**](https://arweave.net/F63wJCavB_sN2xxW-qtQ1Vv7_eRgmYCdcoQPMp_-N0w)
20 | 
21 | #### Zone Data-Protocol
22 | 
23 | The transaction tags and relevant data structures that make up the **Zone Data-Protocol** are as follows:
24 | 
25 | **Transaction Tags**
26 | 
27 | | **Tag Name**  | **Required** | **Tag Value**                                |
28 | | ------------- | ------------ | -------------------------------------------- |
29 | | Data-Protocol | True         | Zone                                         |
30 | | Zone-Type     | True         | (Not limited to) User, Organization, Channel |
31 | | Variant       | False        | (Label describing the variant)               |
32 | 
33 | **Data Structures**
34 | 
35 | **Store**: This table in the AO Process holds the data relevant to the Zone, which could look something like **{ Title: MyTitle, Description: MyDescription }**
36 | 
37 | **Assets**: This table holds up to date information regarding the tokens / assets on AO that this zone has created or received.
38 | 
39 | ## Conclusion
40 | 
41 | Zones provide a foundational framework for creating programmable, and interoperable entities within the AO / Arweave ecosystem, empowering developers and users to build and interact with decentralized applications.
42 | 


--------------------------------------------------------------------------------