├── .github
    └── workflows
    │   └── main.yml
├── .gitignore
├── README.md
├── assets
    ├── awk.gif
    ├── connect-modal.png
    ├── sdk.gif
    └── wauth.png
├── backend
    ├── .env.template
    ├── .gitignore
    ├── README.md
    ├── bin
    │   └── .gitkeep
    ├── bun.lock
    ├── index.ts
    ├── package.json
    ├── pb_hooks
    │   ├── main.pb.js
    │   └── utils.js
    ├── pb_migrations
    │   ├── 1751099448_updated_users.js
    │   ├── 1751099706_created_wallets.js
    │   ├── 1751099740_updated_wallets.js
    │   ├── 1751100326_updated_wallets.js
    │   ├── 1751101068_updated_wallets.js
    │   ├── 1751101779_updated_wallets.js
    │   ├── 1751102000_updated_wallets.js
    │   ├── 1751102575_updated_wallets.js
    │   ├── 1751103049_updated_wallets.js
    │   ├── 1751103279_updated_wallets.js
    │   ├── 1751103940_updated_wallets.js
    │   ├── 1751103980_updated_wallets.js
    │   ├── 1751108208_updated_wallets.js
    │   ├── 1751108763_updated_wallets.js
    │   ├── 1752038070_created_connected_wallets.js
    │   ├── 1752038125_updated_connected_wallets.js
    │   ├── 1752038141_updated_connected_wallets.js
    │   ├── 1752050224_updated_connected_wallets.js
    │   ├── 1752050733_updated_wallets.js
    │   ├── 1752050771_updated_connected_wallets.js
    │   ├── 1753173370_updated_users.js
    │   ├── 1753360325_updated_wallets.js
    │   └── 1753362085_updated_wallets.js
    └── tsconfig.json
├── bun.lock
├── demo
    ├── .gitignore
    ├── README.md
    ├── bun.lock
    ├── index.html
    ├── lib
    │   └── strategy.ts
    ├── package.json
    ├── public
    │   └── wauth.png
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   └── wauth.png
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
├── modals-ref
    ├── confirm-tx.html
    ├── password-existing.html
    └── password-new.html
├── package.json
├── publish-npm.sh
├── sdk
    ├── .gitignore
    ├── README.md
    ├── generate-version.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── index.ts
    │   ├── modal-helper.ts
    │   └── version.ts
    └── tsconfig.json
└── strategy
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── src
        └── index.ts
    └── tsconfig.json


/.github/workflows/main.yml:
--------------------------------------------------------------------------------
 1 | # Simple workflow for deploying static content to GitHub Pages
 2 | name: Deploy static content to Pages
 3 | 
 4 | on:
 5 |   # Runs on pushes targeting the default branch
 6 |   push:
 7 |     branches: ['main']
 8 | 
 9 |   # Allows you to run this workflow manually from the Actions tab
10 |   workflow_dispatch:
11 | 
12 | # Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
13 | permissions:
14 |   contents: read
15 |   pages: write
16 |   id-token: write
17 | 
18 | # Allow one concurrent deployment
19 | concurrency:
20 |   group: 'pages'
21 |   cancel-in-progress: true
22 | 
23 | jobs:
24 |   deploy:
25 |     environment:
26 |       name: github-pages
27 |       url: ${{ steps.deployment.outputs.page_url }}
28 |     runs-on: ubuntu-latest
29 |     steps:
30 |       - name: Checkout
31 |         uses: actions/checkout@v4
32 | 
33 |       - name: Setup Bun
34 |         uses: oven-sh/setup-bun@v2
35 |         with:
36 |           bun-version: latest
37 | 
38 |       # Skipping the install step since your build command handles it
39 | 
40 |       - name: Build
41 |         run: bun run build
42 | 
43 |       - name: Setup Pages
44 |         uses: actions/configure-pages@v5
45 | 
46 |       - name: Upload artifact
47 |         uses: actions/upload-pages-artifact@v3
48 |         with:
49 |           path: './dist'
50 | 
51 |       - name: Deploy to GitHub Pages
52 |         id: deployment
53 |         uses: actions/deploy-pages@v4
54 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # dependencies (bun install)
 2 | node_modules
 3 | 
 4 | # output
 5 | out
 6 | *.tgz
 7 | 
 8 | # code coverage
 9 | coverage
10 | *.lcov
11 | 
12 | # logs
13 | logs
14 | _.log
15 | report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json
16 | 
17 | # dotenv environment variable files
18 | .env
19 | .env.development.local
20 | .env.test.local
21 | .env.production.local
22 | .env.local
23 | 
24 | # caches
25 | .eslintcache
26 | .cache
27 | *.tsbuildinfo
28 | 
29 | # IntelliJ based IDEs
30 | .idea
31 | 
32 | # Finder (MacOS) folder config
33 | .DS_Store
34 | 
35 | dist


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # WAuth <img src="./assets/wauth.png" height="24px"/>
 2 | 
 3 | Seamless Social auth for Arweave Ecosystem
 4 | 
 5 | Try demo at [wauth_ankush.ar.io](https://wauth_ankush.ar.io)
 6 | 
 7 | ## Social Auth through Arweave Wallet Kit
 8 | 
 9 | Usage Docs : [@wauth/strategy](./strategy/README.md)
10 | 
11 | ![arweave-wallet-kit-demo](./assets/awk.gif)
12 | 
13 | ## Social Auth through @wauth/sdk
14 | 
15 | Usage Docs : [@wauth/sdk](./sdk/README.md)
16 | 
17 | ![wauth-sdk-demo](./assets/sdk.gif)


--------------------------------------------------------------------------------
/assets/awk.gif:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/assets/awk.gif


--------------------------------------------------------------------------------
/assets/connect-modal.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/assets/connect-modal.png


--------------------------------------------------------------------------------
/assets/sdk.gif:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/assets/sdk.gif


--------------------------------------------------------------------------------
/assets/wauth.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/assets/wauth.png


--------------------------------------------------------------------------------
/backend/.env.template:
--------------------------------------------------------------------------------
1 | SU_EMAIL=
2 | SU_PASS=
3 | BOT_TOKEN=


--------------------------------------------------------------------------------
/backend/.gitignore:
--------------------------------------------------------------------------------
 1 | # dependencies (bun install)
 2 | node_modules
 3 | 
 4 | # output
 5 | out
 6 | dist
 7 | *.tgz
 8 | 
 9 | # code coverage
10 | coverage
11 | *.lcov
12 | 
13 | # logs
14 | logs
15 | _.log
16 | report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json
17 | 
18 | # dotenv environment variable files
19 | .env
20 | .env.development.local
21 | .env.test.local
22 | .env.production.local
23 | .env.local
24 | 
25 | # caches
26 | .eslintcache
27 | .cache
28 | *.tsbuildinfo
29 | 
30 | # IntelliJ based IDEs
31 | .idea
32 | 
33 | # Finder (MacOS) folder config
34 | .DS_Store
35 | 
36 | bin/*
37 | !.gitkeep
38 | 
39 | pb_data


--------------------------------------------------------------------------------
/backend/README.md:
--------------------------------------------------------------------------------
 1 | # backend
 2 | 
 3 | To install dependencies:
 4 | 
 5 | ```bash
 6 | bun install
 7 | ```
 8 | 
 9 | To run:
10 | 
11 | ```bash
12 | bun run index.ts
13 | ```
14 | 
15 | This project was created using `bun init` in bun v1.2.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
16 | 


--------------------------------------------------------------------------------
/backend/bin/.gitkeep:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/backend/bin/.gitkeep


--------------------------------------------------------------------------------
/backend/index.ts:
--------------------------------------------------------------------------------
  1 | import { Hono } from 'hono'
  2 | import Arweave from 'arweave/web'
  3 | import Pocketbase from 'pocketbase'
  4 | import dotenv from 'dotenv'
  5 | import { cors } from 'hono/cors'
  6 | import crypto from "node:crypto"
  7 | import Transaction from 'arweave/node/lib/transaction'
  8 | import { createData, DataItem, type DataItemCreateOptions } from "@dha-team/arbundles"
  9 | import { ArweaveSigner } from '@dha-team/arbundles'
 10 | import { connect, createDataItemSigner } from "@permaweb/aoconnect"
 11 | import fs from "fs"
 12 | import { createAoSigner } from "@ar.io/sdk"
 13 | 
 14 | dotenv.config()
 15 | const ar = Arweave.init({})
 16 | 
 17 | // Generate RSA key pair for password encryption/decryption
 18 | let serverKeyPair: CryptoKeyPair;
 19 | let serverPublicKeyJWK: JsonWebKey;
 20 | 
 21 | async function initializeServerKeys() {
 22 |     console.log("Generating server RSA key pair for password encryption...")
 23 |     serverKeyPair = await crypto.subtle.generateKey(
 24 |         {
 25 |             name: "RSA-OAEP",
 26 |             modulusLength: 2048,
 27 |             publicExponent: new Uint8Array([1, 0, 1]),
 28 |             hash: "SHA-256",
 29 |         },
 30 |         true,
 31 |         ["encrypt", "decrypt"]
 32 |     );
 33 | 
 34 |     serverPublicKeyJWK = await crypto.subtle.exportKey("jwk", serverKeyPair.publicKey);
 35 |     console.log("Server RSA key pair generated successfully");
 36 | }
 37 | 
 38 | // Initialize keys on startup
 39 | await initializeServerKeys();
 40 | 
 41 | // Enhanced nonce tracking for replay attack prevention
 42 | const usedNonces = new Map<string, number>(); // nonce -> timestamp
 43 | const NONCE_EXPIRY_MS = 1 * 60 * 1000; // 1 minutes (restored to original secure value)
 44 | const CLEANUP_INTERVAL_MS = 1 * 60 * 1000; // Clean up every 1 minute
 45 | 
 46 | function cleanupExpiredNonces() {
 47 |     const now = Date.now();
 48 |     let cleanedCount = 0;
 49 | 
 50 |     // Remove only expired nonces
 51 |     for (const [nonce, timestamp] of usedNonces.entries()) {
 52 |         if (now - timestamp > NONCE_EXPIRY_MS) {
 53 |             usedNonces.delete(nonce);
 54 |             cleanedCount++;
 55 |         }
 56 |     }
 57 | 
 58 |     if (cleanedCount > 0) {
 59 |         console.log(`[Security] Cleaned up ${cleanedCount} expired nonces. Active nonces: ${usedNonces.size}`);
 60 |     }
 61 | 
 62 |     // Schedule next cleanup
 63 |     setTimeout(cleanupExpiredNonces, CLEANUP_INTERVAL_MS);
 64 | }
 65 | 
 66 | // Start the cleanup process
 67 | cleanupExpiredNonces();
 68 | 
 69 | const app = new Hono()
 70 | app.use(cors({
 71 |     origin: '*',
 72 |     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
 73 |     allowHeaders: ['Content-Type', 'Authorization', 'encrypted-password', 'encrypted-confirm-password']
 74 | }))
 75 | 
 76 | // delay 2 seconds to let pocketbase start
 77 | await new Promise(resolve => setTimeout(resolve, 2000))
 78 | 
 79 | const pbUrl = 'http://localhost:8090'
 80 | const pb = new Pocketbase(pbUrl)
 81 | pb.autoCancellation(true)
 82 | 
 83 | // adming auth pocketbase
 84 | await pb.collection("_superusers").authWithPassword(process.env.SU_EMAIL!, process.env.SU_PASS!, {
 85 |     noNotify: true,
 86 |     // This will trigger auto refresh or auto reauthentication in case
 87 |     // the token has expired or is going to expire in the next 30 minutes.
 88 |     autoRefreshThreshold: 30 * 60
 89 | })
 90 | 
 91 | 
 92 | app.get('/', (c) => {
 93 |     return c.json({
 94 |         message: "Backend OK!",
 95 |         timestamp: new Date().toISOString()
 96 |     });
 97 | })
 98 | 
 99 | // Endpoint to serve public key for password encryption
100 | app.get('/public-key', (c) => {
101 |     if (!serverPublicKeyJWK) {
102 |         return c.json({ error: "Server not properly initialized" }, 500);
103 |     }
104 |     return c.json({ publicKey: serverPublicKeyJWK })
105 | })
106 | 
107 | // Utility functions for password and JWK encryption/decryption
108 | async function decryptPassword(encryptedData: string): Promise<{ password: string, nonce: string, timestamp: number }> {
109 |     try {
110 |         const encryptedBuffer = Buffer.from(encryptedData, 'base64');
111 | 
112 |         const decryptedBuffer = await crypto.subtle.decrypt(
113 |             { name: "RSA-OAEP" },
114 |             serverKeyPair.privateKey,
115 |             encryptedBuffer
116 |         );
117 | 
118 |         const decryptedData = JSON.parse(new TextDecoder().decode(decryptedBuffer));
119 | 
120 |         // Validate timestamp (must be within 5 minutes)
121 |         const now = Date.now();
122 |         const age = now - decryptedData.timestamp;
123 | 
124 |         if (age > NONCE_EXPIRY_MS) {
125 |             throw new Error(`Request expired - age: ${age}ms, limit: ${NONCE_EXPIRY_MS}ms`);
126 |         }
127 | 
128 |         // Check for nonce reuse
129 |         if (usedNonces.has(decryptedData.nonce)) {
130 |             throw new Error("Nonce already used");
131 |         }
132 | 
133 |         // Mark nonce as used with its timestamp
134 |         usedNonces.set(decryptedData.nonce, decryptedData.timestamp);
135 | 
136 |         return decryptedData;
137 |     } catch (error) {
138 |         console.error("Password decryption failed:", error instanceof Error ? error.message : error);
139 |         throw new Error("Invalid encrypted password: " + (error instanceof Error ? error.message : error));
140 |     }
141 | }
142 | 
143 | async function encryptJWK(jwk: any, password: string): Promise<{ encryptedJWK: string, salt: string }> {
144 |     try {
145 |         // Generate a random salt
146 |         const salt = crypto.randomBytes(32).toString('hex');
147 | 
148 |         // Derive key from password using PBKDF2
149 |         const key = await crypto.subtle.importKey(
150 |             'raw',
151 |             new TextEncoder().encode(password),
152 |             'PBKDF2',
153 |             false,
154 |             ['deriveKey']
155 |         );
156 | 
157 |         const derivedKey = await crypto.subtle.deriveKey(
158 |             {
159 |                 name: 'PBKDF2',
160 |                 salt: Buffer.from(salt, 'hex'),
161 |                 iterations: 100000,
162 |                 hash: 'SHA-256'
163 |             },
164 |             key,
165 |             { name: 'AES-GCM', length: 256 },
166 |             false,
167 |             ['encrypt']
168 |         );
169 | 
170 |         // Generate IV for AES-GCM
171 |         const iv = crypto.randomBytes(12);
172 | 
173 |         // Encrypt the JWK (excluding the public key 'n' field)
174 |         const jwkToEncrypt = { ...jwk };
175 |         const publicKey = jwkToEncrypt.n; // Save public key separately
176 |         delete jwkToEncrypt.n; // Remove from encryption
177 | 
178 |         const encrypted = await crypto.subtle.encrypt(
179 |             { name: 'AES-GCM', iv },
180 |             derivedKey,
181 |             new TextEncoder().encode(JSON.stringify(jwkToEncrypt))
182 |         );
183 | 
184 |         // Combine IV and encrypted data
185 |         const combined = Buffer.concat([iv, Buffer.from(encrypted)]);
186 | 
187 |         return {
188 |             encryptedJWK: combined.toString('base64'),
189 |             salt
190 |         };
191 |     } catch (error) {
192 |         console.error("JWK encryption failed:", error);
193 |         throw new Error("Failed to encrypt JWK");
194 |     }
195 | }
196 | 
197 | async function decryptJWK(encryptedJWK: string, salt: string, password: string, publicKey: string): Promise<any> {
198 |     try {
199 |         // Derive key from password using PBKDF2
200 |         const key = await crypto.subtle.importKey(
201 |             'raw',
202 |             new TextEncoder().encode(password),
203 |             'PBKDF2',
204 |             false,
205 |             ['deriveKey']
206 |         );
207 | 
208 |         const derivedKey = await crypto.subtle.deriveKey(
209 |             {
210 |                 name: 'PBKDF2',
211 |                 salt: Buffer.from(salt, 'hex'),
212 |                 iterations: 100000,
213 |                 hash: 'SHA-256'
214 |             },
215 |             key,
216 |             { name: 'AES-GCM', length: 256 },
217 |             false,
218 |             ['decrypt']
219 |         );
220 | 
221 |         // Extract IV and encrypted data
222 |         const combined = Buffer.from(encryptedJWK, 'base64');
223 |         const iv = combined.slice(0, 12);
224 |         const encrypted = combined.slice(12);
225 | 
226 |         // Decrypt the JWK
227 |         const decrypted = await crypto.subtle.decrypt(
228 |             { name: 'AES-GCM', iv },
229 |             derivedKey,
230 |             encrypted
231 |         );
232 | 
233 |         const jwkData = JSON.parse(new TextDecoder().decode(decrypted));
234 | 
235 |         // Add back the public key
236 |         jwkData.n = publicKey;
237 | 
238 |         return jwkData;
239 |     } catch (error) {
240 |         console.error("JWK decryption failed:", error);
241 |         throw new Error("Failed to decrypt JWK - invalid password");
242 |     }
243 | }
244 | 
245 | app.get('/jwk', async (c) => {
246 |     const encryptedPassword = c.req.header("encrypted-password")
247 |     const encryptedConfirmPassword = c.req.header("encrypted-confirm-password")
248 | 
249 |     if (!encryptedPassword || !encryptedConfirmPassword) {
250 |         return c.json({ error: "Missing required fields: encrypted-password, encrypted-confirm-password" }, 400)
251 |     }
252 | 
253 |     try {
254 |         // Decrypt both passwords
255 |         const { password } = await decryptPassword(encryptedPassword)
256 |         const { password: confirmPassword } = await decryptPassword(encryptedConfirmPassword)
257 | 
258 |         // Verify passwords match
259 |         if (password !== confirmPassword) {
260 |             return c.json({ error: "Passwords do not match" }, 400)
261 |         }
262 | 
263 |         // Generate new JWK
264 |         const jwk = await ar.wallets.generate()
265 |         const publicKey = jwk.n
266 |         const address = await ar.wallets.jwkToAddress(jwk)
267 | 
268 |         // Encrypt the JWK with the password
269 |         const { encryptedJWK, salt } = await encryptJWK(jwk, password)
270 | 
271 |         return c.json({
272 |             encryptedJWK,
273 |             salt,
274 |             address,
275 |             publicKey
276 |         })
277 |     } catch (error: any) {
278 |         console.error("JWK generation error:", error)
279 |         return c.json({ error: error.message || "Failed to generate wallet" }, 400)
280 |     }
281 | })
282 | 
283 | // Endpoint to verify if a password can decrypt user's JWK
284 | app.post('/verify-password', async (c) => {
285 |     const encryptedPassword = c.req.header("encrypted-password");
286 |     const bearerToken = c.req.header("Authorization")?.replace("Bearer ", "");
287 | 
288 |     if (!encryptedPassword) {
289 |         return c.json({ error: "Missing encrypted-password header" }, 400);
290 |     }
291 | 
292 |     if (!bearerToken) {
293 |         return c.json({ error: "Missing authentication token" }, 401);
294 |     }
295 | 
296 |     try {
297 |         // Decrypt the password
298 |         const { password } = await decryptPassword(encryptedPassword);
299 | 
300 |         // Validate the token and find out which user it belongs to
301 |         const userClient = new Pocketbase(pbUrl);
302 |         userClient.authStore.save(bearerToken, null);
303 |         const user = await userClient.collection("users").authRefresh();
304 |         const userId = user.record.id;
305 | 
306 |         // Get the user's wallet from the database
307 |         const walletResult = await pb.collection("wallets").getList(1, 1, {
308 |             filter: `user = "${userId}"`
309 |         });
310 | 
311 |         if (walletResult.totalItems === 0) {
312 |             return c.json({ error: "No wallet found" }, 400);
313 |         }
314 | 
315 |         const walletRow = walletResult.items[0];
316 |         const encryptedJWK = walletRow.encrypted_jwk;
317 |         const salt = walletRow.salt;
318 |         const publicKey = walletRow.public_key;
319 | 
320 |         if (!encryptedJWK || !salt || !publicKey) {
321 |             return c.json({ error: "Invalid wallet data" }, 400);
322 |         }
323 | 
324 |         // Try to decrypt the JWK with the provided password
325 |         await decryptJWK(encryptedJWK, salt, password, publicKey);
326 | 
327 |         // If we get here, the password is correct
328 |         return c.json({ valid: true });
329 |     } catch (error: any) {
330 |         // Password is incorrect or other error occurred
331 |         return c.json({ valid: false, error: error.message || "Password verification failed" }, 400);
332 |     }
333 | });
334 | 
335 | // 1. validate the publicKeyString is the public key of the address
336 | // 2. validate the signature is signed by the public key
337 | async function validateSignature(address: string, publicKeyString: string, signatureBase64String: string): Promise<boolean> {
338 |     try {
339 |         // Convert signature from base64 to Uint8Array
340 |         const signature = new Uint8Array(Buffer.from(signatureBase64String, 'base64'));
341 | 
342 |         // Recreate the exact data that was signed
343 |         const data = new TextEncoder().encode(JSON.stringify({ address, pkey: publicKeyString }));
344 | 
345 |         // Hash the message using SHA-256 (same as Wander does internally)
346 |         const hash = await crypto.subtle.digest("SHA-256", data);
347 | 
348 |         // Import the public key for verification
349 |         const publicJWK: JsonWebKey = {
350 |             e: "AQAB",
351 |             ext: true,
352 |             kty: "RSA",
353 |             n: publicKeyString
354 |         };
355 | 
356 |         // Import public key for verification - exactly as in docs
357 |         const verificationKey = await crypto.subtle.importKey(
358 |             "jwk",
359 |             publicJWK,
360 |             {
361 |                 name: "RSA-PSS",
362 |                 hash: "SHA-256"
363 |             },
364 |             false,
365 |             ["verify"]
366 |         );
367 | 
368 |         // Verify the signature by matching it with the hash - exactly as in docs
369 |         const isValid = await crypto.subtle.verify(
370 |             { name: "RSA-PSS", saltLength: 32 },
371 |             verificationKey,
372 |             signature,
373 |             hash
374 |         );
375 | 
376 |         if (!isValid) {
377 |             console.error('Signature validation failed');
378 |         } else {
379 |             console.log('Signature validation successful');
380 |         }
381 | 
382 |         return isValid;
383 |     } catch (error) {
384 |         console.error('Error in validation process:', error);
385 |         return false;
386 |     }
387 | }
388 | 
389 | app.post('/connect-wallet', async (c) => {
390 |     const { address, pkey, signature } = await c.req.json()
391 |     const token = c.req.header("Authorization")
392 |     const bearerToken = (token?.split(" ")[1])?.trim()
393 | 
394 |     if (!bearerToken) {
395 |         return c.json({ error: "No bearer token" }, 400)
396 |     }
397 | 
398 |     if (!address || !pkey || !signature) {
399 |         return c.json({ error: "Missing required fields: address, pkey, signature" }, 400)
400 |     }
401 | 
402 |     // verify signature is signed by address
403 |     const verified = await validateSignature(address, pkey, signature)
404 | 
405 |     if (!verified) {
406 |         return c.json({ error: "Invalid signature" }, 400)
407 |     }
408 | 
409 |     // add record to pocketbase connected_wallets collection
410 |     // the record should be created using the auth users id
411 |     const userClient = new Pocketbase(pbUrl)
412 |     userClient.authStore.save(bearerToken!, null)
413 | 
414 |     let user;
415 |     try {
416 |         user = await userClient.collection("users").authRefresh()
417 |     } catch (error) {
418 |         console.error('Auth refresh failed:', error)
419 |         return c.json({ error: "Token is expired or invalid. Please log in again." }, 401)
420 |     }
421 | 
422 |     const userId = user.record.id
423 | 
424 |     let impersonatedClient;
425 |     try {
426 |         impersonatedClient = await pb.collection("users").impersonate(userId, 5 * 60)
427 |     } catch (error) {
428 |         console.error('User impersonation failed:', error)
429 |         return c.json({ error: "Failed to authenticate user. Please try again." }, 500)
430 |     }
431 | 
432 |     try {
433 |         const res = await impersonatedClient.collection('connected_wallets').create({ address, public_key: pkey })
434 |         return c.json({ success: true }, 200)
435 |     } catch (e) {
436 |         console.error(e)
437 |         return c.json({ error: (e as any).message + ". Make sure you dont already have the same wallet connected" }, (e as any).status)
438 |     }
439 | 
440 | })
441 | 
442 | app.get("/check-bot/:guildId", async (c) => {
443 | 
444 |     // get the guild id from the url
445 |     const guildId = c.req.param("guildId")
446 | 
447 |     // get the bot token from the env
448 |     const botToken = process.env.BOT_TOKEN
449 | 
450 |     // return true if the bot is in the guild
451 |     const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}`, {
452 |         headers: {
453 |             Authorization: `Bot ${botToken}`
454 |         }
455 |     })
456 | 
457 |     return c.json({ exists: res.status === 200 }, 200)
458 | })
459 | 
460 | export enum WalletActions {
461 |     SIGN = "sign",
462 |     ENCRYPT = "encrypt",
463 |     DECRYPT = "decrypt",
464 |     DISPATCH = "dispatch",
465 |     SIGN_DATA_ITEM = "signDataItem",
466 |     SIGNATURE = "signature"
467 | }
468 | 
469 | app.post('/wallet-action', async (c) => {
470 |     const { action, payload, encryptedPassword } = await c.req.json()
471 |     const token = c.req.header("Authorization")
472 |     const bearerToken = (token?.split(" ")[1])?.trim()
473 | 
474 |     if (!bearerToken) {
475 |         return c.json({ error: "No bearer token" }, 400)
476 |     }
477 | 
478 |     if (!encryptedPassword) {
479 |         return c.json({ error: "Missing encrypted password" }, 400)
480 |     }
481 | 
482 |     try {
483 |         // Decrypt the password
484 |         const { password } = await decryptPassword(encryptedPassword)
485 | 
486 |         // validate the token and find out which user it belongs to
487 |         const userClient = new Pocketbase(pbUrl)
488 |         userClient.authStore.save(bearerToken!, null)
489 |         const user = await userClient.collection("users").authRefresh()
490 |         const userId = user.record.id
491 | 
492 |         // then get the users wallet from the database
493 |         const walletResult = await pb.collection("wallets").getList(1, 1, {
494 |             filter: `user = "${userId}"`
495 |         });
496 | 
497 |         if (walletResult.totalItems === 0) {
498 |             return c.json({ error: "No wallet found" }, 400)
499 |         }
500 | 
501 |         const walletRow = walletResult.items[0];
502 |         const encryptedJWK = walletRow.encrypted_jwk
503 |         const salt = walletRow.salt
504 |         const publicKey = walletRow.public_key
505 | 
506 |         if (!encryptedJWK || !salt || !publicKey) {
507 |             return c.json({ error: "Invalid wallet data" }, 400)
508 |         }
509 | 
510 |         // Decrypt the JWK using the password
511 |         const jwk = await decryptJWK(encryptedJWK, salt, password, publicKey)
512 |         const signer = new ArweaveSigner(jwk)
513 | 
514 |         switch (action) {
515 |             case WalletActions.SIGN:
516 |                 const txPayload = payload.transaction
517 |                 const tx = ar.transactions.fromRaw(txPayload)
518 |                 await ar.transactions.sign(tx, jwk)
519 |                 return c.json({ ...tx.toJSON() }, 200)
520 |                 // await ar.transactions.sign(transaction, jwk)
521 |                 // return c.json({ ...transaction }, 200)
522 |                 break;
523 |             case WalletActions.ENCRYPT:
524 |                 break;
525 |             case WalletActions.DECRYPT:
526 |                 break;
527 |             case WalletActions.DISPATCH:
528 |                 break;
529 |             case WalletActions.SIGN_DATA_ITEM:
530 |                 const dataItem = payload.dataItem
531 | 
532 |                 const createdDataItem = createData(dataItem.data, signer, { tags: dataItem.tags, anchor: dataItem.anchor, target: dataItem.target })
533 |                 await createdDataItem.sign(signer)
534 | 
535 |                 const isValid = await createdDataItem.isValid()
536 | 
537 |                 if (!isValid) {
538 |                     return c.json({ error: "Invalid data item" }, 400)
539 |                 }
540 | 
541 |                 function decimalAsciiToString(decimals: number[]) {
542 |                     return decimals.map(d => String.fromCharCode(d)).join('')
543 |                 }
544 | 
545 |                 const id = createdDataItem.id
546 |                 const raw = createdDataItem.getRaw()
547 |                 const rawIntArray = Array.from(raw)
548 |                 const data = decimalAsciiToString(rawIntArray)
549 | 
550 |                 const newdataitem = new DataItem(raw)
551 |                 const valid = await newdataitem.isValid()
552 |                 if (!valid) {
553 |                     return c.json({ error: "Invalid data item" }, 400)
554 |                 }
555 | 
556 | 
557 |                 return c.json({ id: newdataitem.id, raw: newdataitem.getRaw() }, 200)
558 |                 break;
559 |             case WalletActions.SIGNATURE:
560 |                 const uint8array = Buffer.from(Object.values(payload.data))
561 |                 const signature = await signer.sign(uint8array)
562 | 
563 |                 return c.json({ ...signature }, 200)
564 |                 break;
565 |             default:
566 |                 return c.json({ error: "Invalid action" }, 400)
567 |         }
568 | 
569 |         return c.json({ success: true }, 200)
570 |     } catch (error: any) {
571 |         console.error("Wallet action error:", error)
572 |         return c.json({ error: error.message || "Wallet action failed" }, 400)
573 |     }
574 | })
575 | 
576 | console.log("Backend started")
577 | 
578 | export default {
579 |     port: 8091,
580 |     fetch: app.fetch,
581 | }


--------------------------------------------------------------------------------
/backend/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "backend",
 3 |   "module": "index.ts",
 4 |   "type": "module",
 5 |   "private": true,
 6 |   "scripts": {
 7 |     "start:pocketbase": "bin/pocketbase serve --dir ./pb_data --dev",
 8 |     "start:backend": "bun run index.ts",
 9 |     "dev:backend": "bun run index.ts --watch",
10 |     "start": "concurrently \"bun run start:pocketbase\" \"bun run start:backend\"",
11 |     "dev": "concurrently \"bun run start:pocketbase\" \"bun run dev:backend\""
12 |   },
13 |   "devDependencies": {
14 |     "@types/bun": "latest"
15 |   },
16 |   "peerDependencies": {
17 |     "typescript": "^5"
18 |   },
19 |   "dependencies": {
20 |     "@ar.io/sdk": "^3.14.1-alpha.2",
21 |     "@dha-team/arbundles": "^1.0.3",
22 |     "@permaweb/aoconnect": "0.0.69",
23 |     "@types/node": "^24.0.15",
24 |     "arconnect": "^1.0.4",
25 |     "arweave": "2.0.0-ec.1",
26 |     "axios": "^1.10.0",
27 |     "concurrently": "^9.2.0",
28 |     "cross-fetch": "^4.1.0",
29 |     "dotenv": "^17.1.0",
30 |     "eventsource": "^4.0.0",
31 |     "hono": "^4.8.3",
32 |     "pocketbase": "^0.26.1"
33 |   }
34 | }


--------------------------------------------------------------------------------
/backend/pb_hooks/main.pb.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | 
 3 | onBootstrap((e) => {
 4 |     console.log("PocketBase hooks initialized")
 5 |     e.next()
 6 | })
 7 | 
 8 | 
 9 | onRecordAuthWithOAuth2Request((e) => {
10 |     e.next()
11 | })
12 | 
13 | onRecordCreateRequest((e) => {
14 |     const authId = e.auth.get("id")
15 |     e.record.set("user", authId)
16 |     e.next()
17 | }, "connected_wallets")
18 | 
19 | onRecordCreateRequest((e) => {
20 |     const utils = require(`${__hooks}/utils.js`)
21 |     const authId = e.auth.get("id")
22 | 
23 |     // Get encrypted passwords from request headers
24 |     let encryptedPassword = null
25 |     let encryptedConfirmPassword = null
26 | 
27 |     if (e.requestEvent && e.requestEvent.request && e.requestEvent.request.header) {
28 |         encryptedPassword = e.requestEvent.request.header.get("encrypted-password")
29 |         encryptedConfirmPassword = e.requestEvent.request.header.get("encrypted-confirm-password")
30 |     }
31 | 
32 |     e.record.set("user", authId)
33 | 
34 |     // if user already has a wallet, skip
35 |     // else get new jwk and address and set in record
36 |     if (!encryptedPassword || !encryptedConfirmPassword) {
37 |         throw new Error("Missing encrypted password headers")
38 |     }
39 | 
40 |     try {
41 |         const res = $http.send({
42 |             url: "http://localhost:8091/jwk",
43 |             method: "GET",
44 |             headers: {
45 |                 "encrypted-password": encryptedPassword,
46 |                 "encrypted-confirm-password": encryptedConfirmPassword
47 |             }
48 |         })
49 | 
50 |         if (res.statusCode !== 200) {
51 |             throw new Error(`Backend returned status ${res.statusCode}: ${res.body}`)
52 |         }
53 | 
54 |         const body = res.body
55 |         const bodyJson = utils.bodyToJson(body)
56 | 
57 |         // Store the encrypted JWK and related data
58 |         e.record.set("encrypted_jwk", bodyJson.encryptedJWK)
59 |         e.record.set("salt", bodyJson.salt)
60 |         e.record.set("public_key", bodyJson.publicKey)
61 |         e.record.set("address", bodyJson.address)
62 |     } catch (error) {
63 |         console.error("Error creating wallet:", error)
64 |         throw error
65 |     }
66 |     e.next()
67 | }, "wallets")
68 | 
69 | onRecordAfterCreateSuccess((e) => {
70 |     e.next()
71 | }, "wallets")
72 | 
73 | onRecordEnrich((e) => {
74 |     e.record.hide("encrypted_jwk")
75 |     e.record.hide("salt")
76 |     e.next()
77 | }, "wallets")
78 | 
79 | 


--------------------------------------------------------------------------------
/backend/pb_hooks/utils.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | 
 3 | 
 4 | module.exports = {
 5 |     bodyToJson: (body) => {
 6 |         let str = ""
 7 |         for (const chunk of body) {
 8 |             str += String.fromCharCode(chunk)
 9 |         }
10 |         return JSON.parse(str)
11 |     }
12 | }


--------------------------------------------------------------------------------
/backend/pb_migrations/1751099448_updated_users.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("_pb_users_auth_")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "oauth2": {
 8 |       "enabled": true
 9 |     },
10 |     "passwordAuth": {
11 |       "enabled": false
12 |     }
13 |   }, collection)
14 | 
15 |   return app.save(collection)
16 | }, (app) => {
17 |   const collection = app.findCollectionByNameOrId("_pb_users_auth_")
18 | 
19 |   // update collection data
20 |   unmarshal({
21 |     "oauth2": {
22 |       "enabled": false
23 |     },
24 |     "passwordAuth": {
25 |       "enabled": true
26 |     }
27 |   }, collection)
28 | 
29 |   return app.save(collection)
30 | })
31 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751099706_created_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = new Collection({
 4 |     "createRule": "user = @request.auth.id",
 5 |     "deleteRule": "user = @request.auth.id",
 6 |     "fields": [
 7 |       {
 8 |         "autogeneratePattern": "[a-z0-9]{15}",
 9 |         "hidden": false,
10 |         "id": "text3208210256",
11 |         "max": 15,
12 |         "min": 15,
13 |         "name": "id",
14 |         "pattern": "^[a-z0-9]+
quot;,
15 |         "presentable": false,
16 |         "primaryKey": true,
17 |         "required": true,
18 |         "system": true,
19 |         "type": "text"
20 |       },
21 |       {
22 |         "cascadeDelete": false,
23 |         "collectionId": "_pb_users_auth_",
24 |         "hidden": false,
25 |         "id": "relation2375276105",
26 |         "maxSelect": 1,
27 |         "minSelect": 0,
28 |         "name": "user",
29 |         "presentable": false,
30 |         "required": false,
31 |         "system": false,
32 |         "type": "relation"
33 |       },
34 |       {
35 |         "hidden": false,
36 |         "id": "json2080773",
37 |         "maxSize": 0,
38 |         "name": "jwk",
39 |         "presentable": false,
40 |         "required": false,
41 |         "system": false,
42 |         "type": "json"
43 |       },
44 |       {
45 |         "autogeneratePattern": "",
46 |         "hidden": false,
47 |         "id": "text223244161",
48 |         "max": 0,
49 |         "min": 0,
50 |         "name": "address",
51 |         "pattern": "",
52 |         "presentable": false,
53 |         "primaryKey": false,
54 |         "required": false,
55 |         "system": false,
56 |         "type": "text"
57 |       },
58 |       {
59 |         "hidden": false,
60 |         "id": "autodate2990389176",
61 |         "name": "created",
62 |         "onCreate": true,
63 |         "onUpdate": false,
64 |         "presentable": false,
65 |         "system": false,
66 |         "type": "autodate"
67 |       },
68 |       {
69 |         "hidden": false,
70 |         "id": "autodate3332085495",
71 |         "name": "updated",
72 |         "onCreate": true,
73 |         "onUpdate": true,
74 |         "presentable": false,
75 |         "system": false,
76 |         "type": "autodate"
77 |       }
78 |     ],
79 |     "id": "pbc_120182150",
80 |     "indexes": [],
81 |     "listRule": "user = @request.auth.id",
82 |     "name": "wallets",
83 |     "system": false,
84 |     "type": "base",
85 |     "updateRule": "",
86 |     "viewRule": "user = @request.auth.id"
87 |   });
88 | 
89 |   return app.save(collection);
90 | }, (app) => {
91 |   const collection = app.findCollectionByNameOrId("pbc_120182150");
92 | 
93 |   return app.delete(collection);
94 | })
95 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751099740_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "createRule": "id = @request.auth.id",
 8 |     "deleteRule": "id = @request.auth.id",
 9 |     "listRule": "id = @request.auth.id",
10 |     "viewRule": "id = @request.auth.id"
11 |   }, collection)
12 | 
13 |   return app.save(collection)
14 | }, (app) => {
15 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
16 | 
17 |   // update collection data
18 |   unmarshal({
19 |     "createRule": "user = @request.auth.id",
20 |     "deleteRule": "user = @request.auth.id",
21 |     "listRule": "user = @request.auth.id",
22 |     "viewRule": "user = @request.auth.id"
23 |   }, collection)
24 | 
25 |   return app.save(collection)
26 | })
27 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751100326_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "deleteRule": null,
 8 |     "updateRule": null
 9 |   }, collection)
10 | 
11 |   return app.save(collection)
12 | }, (app) => {
13 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
14 | 
15 |   // update collection data
16 |   unmarshal({
17 |     "deleteRule": "id = @request.auth.id",
18 |     "updateRule": ""
19 |   }, collection)
20 | 
21 |   return app.save(collection)
22 | })
23 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751101068_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(1, new Field({
 7 |     "cascadeDelete": false,
 8 |     "collectionId": "_pb_users_auth_",
 9 |     "hidden": false,
10 |     "id": "relation2375276105",
11 |     "maxSelect": 1,
12 |     "minSelect": 0,
13 |     "name": "user",
14 |     "presentable": false,
15 |     "required": true,
16 |     "system": false,
17 |     "type": "relation"
18 |   }))
19 | 
20 |   // update field
21 |   collection.fields.addAt(2, new Field({
22 |     "hidden": false,
23 |     "id": "json2080773",
24 |     "maxSize": 0,
25 |     "name": "jwk",
26 |     "presentable": false,
27 |     "required": true,
28 |     "system": false,
29 |     "type": "json"
30 |   }))
31 | 
32 |   // update field
33 |   collection.fields.addAt(3, new Field({
34 |     "autogeneratePattern": "",
35 |     "hidden": false,
36 |     "id": "text223244161",
37 |     "max": 0,
38 |     "min": 0,
39 |     "name": "address",
40 |     "pattern": "",
41 |     "presentable": false,
42 |     "primaryKey": false,
43 |     "required": true,
44 |     "system": false,
45 |     "type": "text"
46 |   }))
47 | 
48 |   return app.save(collection)
49 | }, (app) => {
50 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
51 | 
52 |   // update field
53 |   collection.fields.addAt(1, new Field({
54 |     "cascadeDelete": false,
55 |     "collectionId": "_pb_users_auth_",
56 |     "hidden": false,
57 |     "id": "relation2375276105",
58 |     "maxSelect": 1,
59 |     "minSelect": 0,
60 |     "name": "user",
61 |     "presentable": false,
62 |     "required": false,
63 |     "system": false,
64 |     "type": "relation"
65 |   }))
66 | 
67 |   // update field
68 |   collection.fields.addAt(2, new Field({
69 |     "hidden": false,
70 |     "id": "json2080773",
71 |     "maxSize": 0,
72 |     "name": "jwk",
73 |     "presentable": false,
74 |     "required": false,
75 |     "system": false,
76 |     "type": "json"
77 |   }))
78 | 
79 |   // update field
80 |   collection.fields.addAt(3, new Field({
81 |     "autogeneratePattern": "",
82 |     "hidden": false,
83 |     "id": "text223244161",
84 |     "max": 0,
85 |     "min": 0,
86 |     "name": "address",
87 |     "pattern": "",
88 |     "presentable": false,
89 |     "primaryKey": false,
90 |     "required": false,
91 |     "system": false,
92 |     "type": "text"
93 |   }))
94 | 
95 |   return app.save(collection)
96 | })
97 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751101779_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "listRule": null
 8 |   }, collection)
 9 | 
10 |   return app.save(collection)
11 | }, (app) => {
12 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
13 | 
14 |   // update collection data
15 |   unmarshal({
16 |     "listRule": "id = @request.auth.id"
17 |   }, collection)
18 | 
19 |   return app.save(collection)
20 | })
21 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751102000_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "listRule": "id = @request.auth.id"
 8 |   }, collection)
 9 | 
10 |   return app.save(collection)
11 | }, (app) => {
12 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
13 | 
14 |   // update collection data
15 |   unmarshal({
16 |     "listRule": null
17 |   }, collection)
18 | 
19 |   return app.save(collection)
20 | })
21 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751102575_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "createRule": "@request.auth.id != \"\""
 8 |   }, collection)
 9 | 
10 |   return app.save(collection)
11 | }, (app) => {
12 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
13 | 
14 |   // update collection data
15 |   unmarshal({
16 |     "createRule": "id = @request.auth.id"
17 |   }, collection)
18 | 
19 |   return app.save(collection)
20 | })
21 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751103049_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "listRule": "user.id = @request.auth.id",
 8 |     "viewRule": "user.id = @request.auth.id"
 9 |   }, collection)
10 | 
11 |   return app.save(collection)
12 | }, (app) => {
13 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
14 | 
15 |   // update collection data
16 |   unmarshal({
17 |     "listRule": "id = @request.auth.id",
18 |     "viewRule": "id = @request.auth.id"
19 |   }, collection)
20 | 
21 |   return app.save(collection)
22 | })
23 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751103279_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(2, new Field({
 7 |     "hidden": true,
 8 |     "id": "json2080773",
 9 |     "maxSize": 0,
10 |     "name": "jwk",
11 |     "presentable": false,
12 |     "required": true,
13 |     "system": false,
14 |     "type": "json"
15 |   }))
16 | 
17 |   return app.save(collection)
18 | }, (app) => {
19 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
20 | 
21 |   // update field
22 |   collection.fields.addAt(2, new Field({
23 |     "hidden": false,
24 |     "id": "json2080773",
25 |     "maxSize": 0,
26 |     "name": "jwk",
27 |     "presentable": false,
28 |     "required": true,
29 |     "system": false,
30 |     "type": "json"
31 |   }))
32 | 
33 |   return app.save(collection)
34 | })
35 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751103940_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "indexes": [
 8 |       "CREATE INDEX `idx_e77dZ3vqHD` ON `wallets` (\n  `user`,\n  `jwk`,\n  `address`\n)"
 9 |     ]
10 |   }, collection)
11 | 
12 |   return app.save(collection)
13 | }, (app) => {
14 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
15 | 
16 |   // update collection data
17 |   unmarshal({
18 |     "indexes": []
19 |   }, collection)
20 | 
21 |   return app.save(collection)
22 | })
23 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751103980_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "indexes": [
 8 |       "CREATE UNIQUE INDEX `idx_e77dZ3vqHD` ON `wallets` (`user`)"
 9 |     ]
10 |   }, collection)
11 | 
12 |   return app.save(collection)
13 | }, (app) => {
14 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
15 | 
16 |   // update collection data
17 |   unmarshal({
18 |     "indexes": [
19 |       "CREATE INDEX `idx_e77dZ3vqHD` ON `wallets` (\n  `user`,\n  `jwk`,\n  `address`\n)"
20 |     ]
21 |   }, collection)
22 | 
23 |   return app.save(collection)
24 | })
25 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751108208_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(2, new Field({
 7 |     "hidden": false,
 8 |     "id": "json2080773",
 9 |     "maxSize": 0,
10 |     "name": "jwk",
11 |     "presentable": false,
12 |     "required": true,
13 |     "system": false,
14 |     "type": "json"
15 |   }))
16 | 
17 |   return app.save(collection)
18 | }, (app) => {
19 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
20 | 
21 |   // update field
22 |   collection.fields.addAt(2, new Field({
23 |     "hidden": true,
24 |     "id": "json2080773",
25 |     "maxSize": 0,
26 |     "name": "jwk",
27 |     "presentable": false,
28 |     "required": true,
29 |     "system": false,
30 |     "type": "json"
31 |   }))
32 | 
33 |   return app.save(collection)
34 | })
35 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1751108763_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(1, new Field({
 7 |     "cascadeDelete": true,
 8 |     "collectionId": "_pb_users_auth_",
 9 |     "hidden": false,
10 |     "id": "relation2375276105",
11 |     "maxSelect": 1,
12 |     "minSelect": 0,
13 |     "name": "user",
14 |     "presentable": false,
15 |     "required": true,
16 |     "system": false,
17 |     "type": "relation"
18 |   }))
19 | 
20 |   return app.save(collection)
21 | }, (app) => {
22 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
23 | 
24 |   // update field
25 |   collection.fields.addAt(1, new Field({
26 |     "cascadeDelete": false,
27 |     "collectionId": "_pb_users_auth_",
28 |     "hidden": false,
29 |     "id": "relation2375276105",
30 |     "maxSelect": 1,
31 |     "minSelect": 0,
32 |     "name": "user",
33 |     "presentable": false,
34 |     "required": true,
35 |     "system": false,
36 |     "type": "relation"
37 |   }))
38 | 
39 |   return app.save(collection)
40 | })
41 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752038070_created_connected_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = new Collection({
 4 |     "createRule": null,
 5 |     "deleteRule": null,
 6 |     "fields": [
 7 |       {
 8 |         "autogeneratePattern": "[a-z0-9]{15}",
 9 |         "hidden": false,
10 |         "id": "text3208210256",
11 |         "max": 15,
12 |         "min": 15,
13 |         "name": "id",
14 |         "pattern": "^[a-z0-9]+
quot;,
15 |         "presentable": false,
16 |         "primaryKey": true,
17 |         "required": true,
18 |         "system": true,
19 |         "type": "text"
20 |       },
21 |       {
22 |         "cascadeDelete": false,
23 |         "collectionId": "_pb_users_auth_",
24 |         "hidden": false,
25 |         "id": "relation2375276105",
26 |         "maxSelect": 1,
27 |         "minSelect": 0,
28 |         "name": "user",
29 |         "presentable": false,
30 |         "required": false,
31 |         "system": false,
32 |         "type": "relation"
33 |       },
34 |       {
35 |         "autogeneratePattern": "",
36 |         "hidden": false,
37 |         "id": "text223244161",
38 |         "max": 0,
39 |         "min": 0,
40 |         "name": "address",
41 |         "pattern": "",
42 |         "presentable": false,
43 |         "primaryKey": false,
44 |         "required": false,
45 |         "system": false,
46 |         "type": "text"
47 |       },
48 |       {
49 |         "hidden": false,
50 |         "id": "autodate2990389176",
51 |         "name": "created",
52 |         "onCreate": true,
53 |         "onUpdate": false,
54 |         "presentable": false,
55 |         "system": false,
56 |         "type": "autodate"
57 |       },
58 |       {
59 |         "hidden": false,
60 |         "id": "autodate3332085495",
61 |         "name": "updated",
62 |         "onCreate": true,
63 |         "onUpdate": true,
64 |         "presentable": false,
65 |         "system": false,
66 |         "type": "autodate"
67 |       }
68 |     ],
69 |     "id": "pbc_2554787204",
70 |     "indexes": [],
71 |     "listRule": null,
72 |     "name": "connected_wallets",
73 |     "system": false,
74 |     "type": "base",
75 |     "updateRule": null,
76 |     "viewRule": null
77 |   });
78 | 
79 |   return app.save(collection);
80 | }, (app) => {
81 |   const collection = app.findCollectionByNameOrId("pbc_2554787204");
82 | 
83 |   return app.delete(collection);
84 | })
85 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752038125_updated_connected_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "createRule": "user.id != \"\" ",
 8 |     "deleteRule": "user.id = @request.auth.id",
 9 |     "listRule": "user.id = @request.auth.id",
10 |     "viewRule": "user.id = @request.auth.id"
11 |   }, collection)
12 | 
13 |   return app.save(collection)
14 | }, (app) => {
15 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
16 | 
17 |   // update collection data
18 |   unmarshal({
19 |     "createRule": null,
20 |     "deleteRule": null,
21 |     "listRule": null,
22 |     "viewRule": null
23 |   }, collection)
24 | 
25 |   return app.save(collection)
26 | })
27 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752038141_updated_connected_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "createRule": "@request.auth.id != \"\""
 8 |   }, collection)
 9 | 
10 |   return app.save(collection)
11 | }, (app) => {
12 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
13 | 
14 |   // update collection data
15 |   unmarshal({
16 |     "createRule": "user.id != \"\" "
17 |   }, collection)
18 | 
19 |   return app.save(collection)
20 | })
21 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752050224_updated_connected_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "indexes": [
 8 |       "CREATE UNIQUE INDEX `idx_VyuoakusLV` ON `connected_wallets` (`address`)",
 9 |       "CREATE INDEX `idx_LxTNAwin5F` ON `connected_wallets` (`public_key`)"
10 |     ]
11 |   }, collection)
12 | 
13 |   // add field
14 |   collection.fields.addAt(3, new Field({
15 |     "autogeneratePattern": "",
16 |     "hidden": false,
17 |     "id": "text1727648867",
18 |     "max": 0,
19 |     "min": 0,
20 |     "name": "public_key",
21 |     "pattern": "",
22 |     "presentable": false,
23 |     "primaryKey": false,
24 |     "required": false,
25 |     "system": false,
26 |     "type": "text"
27 |   }))
28 | 
29 |   return app.save(collection)
30 | }, (app) => {
31 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
32 | 
33 |   // update collection data
34 |   unmarshal({
35 |     "indexes": []
36 |   }, collection)
37 | 
38 |   // remove field
39 |   collection.fields.removeById("text1727648867")
40 | 
41 |   return app.save(collection)
42 | })
43 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752050733_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // add field
 6 |   collection.fields.addAt(4, new Field({
 7 |     "autogeneratePattern": "",
 8 |     "hidden": false,
 9 |     "id": "text1727648867",
10 |     "max": 0,
11 |     "min": 0,
12 |     "name": "public_key",
13 |     "pattern": "",
14 |     "presentable": false,
15 |     "primaryKey": false,
16 |     "required": true,
17 |     "system": false,
18 |     "type": "text"
19 |   }))
20 | 
21 |   return app.save(collection)
22 | }, (app) => {
23 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
24 | 
25 |   // remove field
26 |   collection.fields.removeById("text1727648867")
27 | 
28 |   return app.save(collection)
29 | })
30 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1752050771_updated_connected_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(1, new Field({
 7 |     "cascadeDelete": true,
 8 |     "collectionId": "_pb_users_auth_",
 9 |     "hidden": false,
10 |     "id": "relation2375276105",
11 |     "maxSelect": 1,
12 |     "minSelect": 0,
13 |     "name": "user",
14 |     "presentable": false,
15 |     "required": false,
16 |     "system": false,
17 |     "type": "relation"
18 |   }))
19 | 
20 |   return app.save(collection)
21 | }, (app) => {
22 |   const collection = app.findCollectionByNameOrId("pbc_2554787204")
23 | 
24 |   // update field
25 |   collection.fields.addAt(1, new Field({
26 |     "cascadeDelete": false,
27 |     "collectionId": "_pb_users_auth_",
28 |     "hidden": false,
29 |     "id": "relation2375276105",
30 |     "maxSelect": 1,
31 |     "minSelect": 0,
32 |     "name": "user",
33 |     "presentable": false,
34 |     "required": false,
35 |     "system": false,
36 |     "type": "relation"
37 |   }))
38 | 
39 |   return app.save(collection)
40 | })
41 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1753173370_updated_users.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("_pb_users_auth_")
 4 | 
 5 |   // update field
 6 |   collection.fields.addAt(3, new Field({
 7 |     "exceptDomains": null,
 8 |     "hidden": false,
 9 |     "id": "email3885137012",
10 |     "name": "email",
11 |     "onlyDomains": null,
12 |     "presentable": false,
13 |     "required": false,
14 |     "system": true,
15 |     "type": "email"
16 |   }))
17 | 
18 |   return app.save(collection)
19 | }, (app) => {
20 |   const collection = app.findCollectionByNameOrId("_pb_users_auth_")
21 | 
22 |   // update field
23 |   collection.fields.addAt(3, new Field({
24 |     "exceptDomains": null,
25 |     "hidden": false,
26 |     "id": "email3885137012",
27 |     "name": "email",
28 |     "onlyDomains": null,
29 |     "presentable": false,
30 |     "required": true,
31 |     "system": true,
32 |     "type": "email"
33 |   }))
34 | 
35 |   return app.save(collection)
36 | })
37 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1753360325_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // remove field
 6 |   collection.fields.removeById("json2080773")
 7 | 
 8 |   // add field
 9 |   collection.fields.addAt(4, new Field({
10 |     "autogeneratePattern": "",
11 |     "hidden": false,
12 |     "id": "text1452109028",
13 |     "max": 0,
14 |     "min": 0,
15 |     "name": "encrypted_jwk",
16 |     "pattern": "",
17 |     "presentable": false,
18 |     "primaryKey": false,
19 |     "required": true,
20 |     "system": false,
21 |     "type": "text"
22 |   }))
23 | 
24 |   // add field
25 |   collection.fields.addAt(5, new Field({
26 |     "autogeneratePattern": "",
27 |     "hidden": false,
28 |     "id": "text2415649015",
29 |     "max": 0,
30 |     "min": 0,
31 |     "name": "salt",
32 |     "pattern": "",
33 |     "presentable": false,
34 |     "primaryKey": false,
35 |     "required": true,
36 |     "system": false,
37 |     "type": "text"
38 |   }))
39 | 
40 |   return app.save(collection)
41 | }, (app) => {
42 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
43 | 
44 |   // add field
45 |   collection.fields.addAt(2, new Field({
46 |     "hidden": false,
47 |     "id": "json2080773",
48 |     "maxSize": 0,
49 |     "name": "jwk",
50 |     "presentable": false,
51 |     "required": true,
52 |     "system": false,
53 |     "type": "json"
54 |   }))
55 | 
56 |   // remove field
57 |   collection.fields.removeById("text1452109028")
58 | 
59 |   // remove field
60 |   collection.fields.removeById("text2415649015")
61 | 
62 |   return app.save(collection)
63 | })
64 | 


--------------------------------------------------------------------------------
/backend/pb_migrations/1753362085_updated_wallets.js:
--------------------------------------------------------------------------------
 1 | /// <reference path="../pb_data/types.d.ts" />
 2 | migrate((app) => {
 3 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
 4 | 
 5 |   // update collection data
 6 |   unmarshal({
 7 |     "deleteRule": "@request.auth.id != \"\" && user.id = @request.auth.id",
 8 |     "listRule": "@request.auth.id != \"\" && user.id = @request.auth.id",
 9 |     "updateRule": "@request.auth.id != \"\" && user.id = @request.auth.id",
10 |     "viewRule": "@request.auth.id != \"\" && user.id = @request.auth.id"
11 |   }, collection)
12 | 
13 |   return app.save(collection)
14 | }, (app) => {
15 |   const collection = app.findCollectionByNameOrId("pbc_120182150")
16 | 
17 |   // update collection data
18 |   unmarshal({
19 |     "deleteRule": null,
20 |     "listRule": "user.id = @request.auth.id",
21 |     "updateRule": null,
22 |     "viewRule": "user.id = @request.auth.id"
23 |   }, collection)
24 | 
25 |   return app.save(collection)
26 | })
27 | 


--------------------------------------------------------------------------------
/backend/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     // Enable latest features
 4 |     "lib": ["ESNext", "DOM"],
 5 |     "target": "ESNext",
 6 |     "module": "ESNext",
 7 |     "moduleDetection": "force",
 8 |     "jsx": "react-jsx",
 9 |     "allowJs": true,
10 | 
11 |     // Bundler mode
12 |     "moduleResolution": "bundler",
13 |     "allowImportingTsExtensions": true,
14 |     "verbatimModuleSyntax": true,
15 |     "noEmit": true,
16 | 
17 |     // Best practices
18 |     "strict": true,
19 |     "skipLibCheck": true,
20 |     "noFallthroughCasesInSwitch": true,
21 | 
22 |     // Some stricter flags (disabled by default)
23 |     "noUnusedLocals": false,
24 |     "noUnusedParameters": false,
25 |     "noPropertyAccessFromIndexSignature": false
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/bun.lock:
--------------------------------------------------------------------------------
 1 | {
 2 |   "lockfileVersion": 1,
 3 |   "workspaces": {
 4 |     "": {
 5 |       "name": "wauth",
 6 |       "dependencies": {
 7 |         "concurrently": "^9.2.0",
 8 |       },
 9 |       "devDependencies": {
10 |         "@types/bun": "latest",
11 |       },
12 |       "peerDependencies": {
13 |         "typescript": "^5",
14 |       },
15 |     },
16 |   },
17 |   "packages": {
18 |     "@types/bun": ["@types/bun@1.2.17", "", { "dependencies": { "bun-types": "1.2.17" } }, "sha512-l/BYs/JYt+cXA/0+wUhulYJB6a6p//GTPiJ7nV+QHa8iiId4HZmnu/3J/SowP5g0rTiERY2kfGKXEK5Ehltx4Q=="],
19 | 
20 |     "@types/node": ["@types/node@24.0.7", "", { "dependencies": { "undici-types": "~7.8.0" } }, "sha512-YIEUUr4yf8q8oQoXPpSlnvKNVKDQlPMWrmOcgzoduo7kvA2UF0/BwJ/eMKFTiTtkNL17I0M6Xe2tvwFU7be6iw=="],
21 | 
22 |     "ansi-regex": ["ansi-regex@5.0.1", "", {}, "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="],
23 | 
24 |     "ansi-styles": ["ansi-styles@4.3.0", "", { "dependencies": { "color-convert": "^2.0.1" } }, "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg=="],
25 | 
26 |     "bun-types": ["bun-types@1.2.17", "", { "dependencies": { "@types/node": "*" } }, "sha512-ElC7ItwT3SCQwYZDYoAH+q6KT4Fxjl8DtZ6qDulUFBmXA8YB4xo+l54J9ZJN+k2pphfn9vk7kfubeSd5QfTVJQ=="],
27 | 
28 |     "chalk": ["chalk@4.1.2", "", { "dependencies": { "ansi-styles": "^4.1.0", "supports-color": "^7.1.0" } }, "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA=="],
29 | 
30 |     "cliui": ["cliui@8.0.1", "", { "dependencies": { "string-width": "^4.2.0", "strip-ansi": "^6.0.1", "wrap-ansi": "^7.0.0" } }, "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ=="],
31 | 
32 |     "color-convert": ["color-convert@2.0.1", "", { "dependencies": { "color-name": "~1.1.4" } }, "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ=="],
33 | 
34 |     "color-name": ["color-name@1.1.4", "", {}, "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="],
35 | 
36 |     "concurrently": ["concurrently@9.2.0", "", { "dependencies": { "chalk": "^4.1.2", "lodash": "^4.17.21", "rxjs": "^7.8.1", "shell-quote": "^1.8.1", "supports-color": "^8.1.1", "tree-kill": "^1.2.2", "yargs": "^17.7.2" }, "bin": { "concurrently": "dist/bin/concurrently.js", "conc": "dist/bin/concurrently.js" } }, "sha512-IsB/fiXTupmagMW4MNp2lx2cdSN2FfZq78vF90LBB+zZHArbIQZjQtzXCiXnvTxCZSvXanTqFLWBjw2UkLx1SQ=="],
37 | 
38 |     "emoji-regex": ["emoji-regex@8.0.0", "", {}, "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="],
39 | 
40 |     "escalade": ["escalade@3.2.0", "", {}, "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA=="],
41 | 
42 |     "get-caller-file": ["get-caller-file@2.0.5", "", {}, "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="],
43 | 
44 |     "has-flag": ["has-flag@4.0.0", "", {}, "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="],
45 | 
46 |     "is-fullwidth-code-point": ["is-fullwidth-code-point@3.0.0", "", {}, "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="],
47 | 
48 |     "lodash": ["lodash@4.17.21", "", {}, "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="],
49 | 
50 |     "require-directory": ["require-directory@2.1.1", "", {}, "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q=="],
51 | 
52 |     "rxjs": ["rxjs@7.8.2", "", { "dependencies": { "tslib": "^2.1.0" } }, "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA=="],
53 | 
54 |     "shell-quote": ["shell-quote@1.8.3", "", {}, "sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw=="],
55 | 
56 |     "string-width": ["string-width@4.2.3", "", { "dependencies": { "emoji-regex": "^8.0.0", "is-fullwidth-code-point": "^3.0.0", "strip-ansi": "^6.0.1" } }, "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g=="],
57 | 
58 |     "strip-ansi": ["strip-ansi@6.0.1", "", { "dependencies": { "ansi-regex": "^5.0.1" } }, "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A=="],
59 | 
60 |     "supports-color": ["supports-color@8.1.1", "", { "dependencies": { "has-flag": "^4.0.0" } }, "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q=="],
61 | 
62 |     "tree-kill": ["tree-kill@1.2.2", "", { "bin": { "tree-kill": "cli.js" } }, "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A=="],
63 | 
64 |     "tslib": ["tslib@2.8.1", "", {}, "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="],
65 | 
66 |     "typescript": ["typescript@5.8.3", "", { "bin": { "tsc": "bin/tsc", "tsserver": "bin/tsserver" } }, "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ=="],
67 | 
68 |     "undici-types": ["undici-types@7.8.0", "", {}, "sha512-9UJ2xGDvQ43tYyVMpuHlsgApydB8ZKfVYTsLDhXkFL/6gfkp+U8xTGdh8pMJv1SpZna0zxG1DwsKZsreLbXBxw=="],
69 | 
70 |     "wrap-ansi": ["wrap-ansi@7.0.0", "", { "dependencies": { "ansi-styles": "^4.0.0", "string-width": "^4.1.0", "strip-ansi": "^6.0.0" } }, "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q=="],
71 | 
72 |     "y18n": ["y18n@5.0.8", "", {}, "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="],
73 | 
74 |     "yargs": ["yargs@17.7.2", "", { "dependencies": { "cliui": "^8.0.1", "escalade": "^3.1.1", "get-caller-file": "^2.0.5", "require-directory": "^2.1.1", "string-width": "^4.2.3", "y18n": "^5.0.5", "yargs-parser": "^21.1.1" } }, "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w=="],
75 | 
76 |     "yargs-parser": ["yargs-parser@21.1.1", "", {}, "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw=="],
77 | 
78 |     "chalk/supports-color": ["supports-color@7.2.0", "", { "dependencies": { "has-flag": "^4.0.0" } }, "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw=="],
79 |   }
80 | }
81 | 


--------------------------------------------------------------------------------
/demo/.gitignore:
--------------------------------------------------------------------------------
 1 | # Logs
 2 | logs
 3 | *.log
 4 | npm-debug.log*
 5 | yarn-debug.log*
 6 | yarn-error.log*
 7 | pnpm-debug.log*
 8 | lerna-debug.log*
 9 | 
10 | node_modules
11 | dist
12 | dist-ssr
13 | *.local
14 | 
15 | # Editor directories and files
16 | .vscode/*
17 | !.vscode/extensions.json
18 | .idea
19 | .DS_Store
20 | *.suo
21 | *.ntvs*
22 | *.njsproj
23 | *.sln
24 | *.sw?
25 | 


--------------------------------------------------------------------------------
/demo/README.md:
--------------------------------------------------------------------------------
  1 | # WAuth Demo
  2 | 
  3 | A comprehensive demo showcasing Web2 social authentication for Arweave applications using WAuth and Arweave Wallet Kit.
  4 | 
  5 | ## Features
  6 | 
  7 | - 🔐 Social Authentication with multiple providers:
  8 |   - Google
  9 |   - GitHub
 10 |   - Discord
 11 | - 🔑 Multiple Wallet Management
 12 | - 📝 Transaction Signing
 13 | - 🔏 Data Signing
 14 | - 🌐 AO Protocol Integration
 15 | - 🎨 Modern UI with Dark Mode
 16 | 
 17 | ## Getting Started
 18 | 
 19 | ### Prerequisites
 20 | 
 21 | - Node.js 16+
 22 | - npm or bun
 23 | 
 24 | ### Installation
 25 | 
 26 | 1. Clone the repository:
 27 | ```bash
 28 | git clone https://github.com/ankushKun/wauth.git
 29 | cd wauth/demo
 30 | ```
 31 | 
 32 | 2. Install dependencies:
 33 | ```bash
 34 | npm install
 35 | # or
 36 | bun install
 37 | ```
 38 | 
 39 | 3. Start the development server:
 40 | ```bash
 41 | npm run dev
 42 | # or
 43 | bun run dev
 44 | ```
 45 | 
 46 | The app will be available at `http://localhost:5174`
 47 | 
 48 | ## Implementation Details
 49 | 
 50 | ### 1. Dependencies
 51 | 
 52 | ```json
 53 | {
 54 |   "dependencies": {
 55 |     "@arweave-wallet-kit/core": "^0.1.1",
 56 |     "@arweave-wallet-kit/react": "^0.3.2",
 57 |     "@permaweb/aoconnect": "^0.0.85",
 58 |     "@wauth/strategy": "../strategy",
 59 |     "arweave": "2.0.0-ec.1"
 60 |   }
 61 | }
 62 | ```
 63 | 
 64 | ### 2. WAuth Strategy Setup
 65 | 
 66 | ```ts
 67 | // lib/strategy.ts
 68 | import WAuthStrategy, { WAuthProviders } from "@wauth/strategy";
 69 | 
 70 | const strategies = {
 71 |     [WAuthProviders.Google]: new WAuthStrategy({ provider: WAuthProviders.Google }),
 72 |     [WAuthProviders.Github]: new WAuthStrategy({ provider: WAuthProviders.Github }),
 73 |     [WAuthProviders.Discord]: new WAuthStrategy({ provider: WAuthProviders.Discord })
 74 | };
 75 | 
 76 | export function getStrategy(provider: WAuthProviders): WAuthStrategy {
 77 |     return strategies[provider]
 78 | }
 79 | ```
 80 | 
 81 | ### 3. Arweave Wallet Kit Integration
 82 | 
 83 | ```tsx
 84 | // main.tsx
 85 | export default function Main() {
 86 |     const strategies = [
 87 |         getStrategy(WAuthProviders.Github),
 88 |         getStrategy(WAuthProviders.Google),
 89 |         getStrategy(WAuthProviders.Discord)
 90 |     ]
 91 | 
 92 |     return (
 93 |         <ArweaveWalletKit
 94 |             config={{
 95 |                 strategies: strategies as Strategy[],
 96 |                 permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"]
 97 |             }}>
 98 |             <App />
 99 |         </ArweaveWalletKit>
100 |     )
101 | }
102 | ```
103 | 
104 | ### 4. Features Implementation
105 | 
106 | - **Wallet Connection**: Uses `ConnectButton` from Arweave Wallet Kit
107 | - **Multiple Wallets**: Manage multiple wallets per account
108 | - **Transaction Signing**: Sign and post Arweave transactions
109 | - **Data Signing**: Sign arbitrary data
110 | - **AO Protocol**: Send messages to AO processes
111 | 
112 | ## Learn More
113 | 
114 | - [@wauth/sdk Documentation](../sdk/README.md)
115 | - [@wauth/strategy Documentation](../strategy/README.md)
116 | - [Arweave Wallet Kit Documentation](https://docs.arweavekit.com/wallets/introduction)
117 | 


--------------------------------------------------------------------------------
/demo/index.html:
--------------------------------------------------------------------------------
 1 | <!doctype html>
 2 | <html lang="en">
 3 | 
 4 | <head>
 5 |   <meta charset="UTF-8" />
 6 |   <link rel="icon" type="image/png" href="/wauth.png" />
 7 |   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 8 |   <title>WAuth Demo</title>
 9 | </head>
10 | 
11 | <body>
12 |   <div id="root"></div>
13 |   <script type="module" src="/src/main.tsx"></script>
14 | </body>
15 | 
16 | </html>


--------------------------------------------------------------------------------
/demo/lib/strategy.ts:
--------------------------------------------------------------------------------
 1 | import WAuthStrategy, { WAuthProviders } from "@wauth/strategy";
 2 | 
 3 | const strategies: { [key: string]: WAuthStrategy } = {
 4 |     [WAuthProviders.Google]: new WAuthStrategy({ provider: WAuthProviders.Google }),
 5 |     [WAuthProviders.Github]: new WAuthStrategy({ provider: WAuthProviders.Github, scopes: ["read:org"] }),
 6 |     [WAuthProviders.Discord]: new WAuthStrategy({ provider: WAuthProviders.Discord }),
 7 |     [WAuthProviders.X]: new WAuthStrategy({ provider: WAuthProviders.X })
 8 | }
 9 | 
10 | export function getStrategy(provider: WAuthProviders): WAuthStrategy {
11 |     return strategies[provider]
12 | }
13 | 
14 | export function getActiveWAuthProvider(): WAuthProviders {
15 |     let provider = localStorage.getItem("wallet_kit_strategy_id")
16 |     if (!provider) return null
17 | 
18 |     if (!provider.startsWith("wauth")) return null
19 |     provider = provider.split("-")[1]
20 | 
21 |     switch (provider) {
22 |         case WAuthProviders.Google:
23 |             return WAuthProviders.Google
24 |         case WAuthProviders.Github:
25 |             return WAuthProviders.Github
26 |         case WAuthProviders.Discord:
27 |             return WAuthProviders.Discord
28 |         case WAuthProviders.X:
29 |             return WAuthProviders.X
30 |         default:
31 |             return null
32 |     }
33 | }


--------------------------------------------------------------------------------
/demo/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "demo",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "dev": "vite",
 8 |     "build": "tsc -b && vite build",
 9 |     "lint": "eslint .",
10 |     "preview": "vite preview"
11 |   },
12 |   "dependencies": {
13 |     "@arweave-wallet-kit/core": "^0.1.1",
14 |     "@arweave-wallet-kit/react": "^0.3.2",
15 |     "@arweave-wallet-kit/wander-strategy": "^0.1.2",
16 |     "@dha-team/arbundles": "^1.0.3",
17 |     "@permaweb/aoconnect": "^0.0.85",
18 |     "@wauth/strategy": "../strategy",
19 |     "arweave": "2.0.0-ec.1",
20 |     "react": "^19.1.0",
21 |     "react-dom": "^19.1.0",
22 |     "vite-plugin-node-polyfills": "^0.24.0"
23 |   },
24 |   "devDependencies": {
25 |     "@eslint/js": "^9.29.0",
26 |     "@types/react": "^19.1.8",
27 |     "@types/react-dom": "^19.1.6",
28 |     "@vitejs/plugin-react-swc": "^3.10.2",
29 |     "eslint": "^9.29.0",
30 |     "eslint-plugin-react-hooks": "^5.2.0",
31 |     "eslint-plugin-react-refresh": "^0.4.20",
32 |     "globals": "^16.2.0",
33 |     "typescript": "~5.8.3",
34 |     "typescript-eslint": "^8.34.1",
35 |     "vite": "^7.0.0"
36 |   }
37 | }


--------------------------------------------------------------------------------
/demo/public/wauth.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/demo/public/wauth.png


--------------------------------------------------------------------------------
/demo/src/App.tsx:
--------------------------------------------------------------------------------
  1 | import { ConnectButton, useActiveAddress, useApi, useConnection } from "@arweave-wallet-kit/react"
  2 | import { fixConnection, WAuthProviders } from "@wauth/strategy"
  3 | import { useEffect, useState } from "react"
  4 | // import { getActiveWAuthProvider, getStrategy } from "../lib/strategy"
  5 | import { connect, createDataItemSigner, createSigner, message } from "@permaweb/aoconnect"
  6 | import Arweave from "arweave/web"
  7 | 
  8 | function App() {
  9 |   const address = useActiveAddress()
 10 |   const api = useApi()
 11 |   const [accessToken, setAccessToken] = useState<string | null>(null)
 12 |   const [email, setEmail] = useState<string | null>(null)
 13 |   const [connectedWallets, setConnectedWallets] = useState<any[]>([])
 14 |   const [isLoadingWallets, setIsLoadingWallets] = useState(false)
 15 |   const [isAddingWallet, setIsAddingWallet] = useState(false)
 16 |   const [dataToSign, setDataToSign] = useState<string | null>(null)
 17 |   const [signedData, setSignedData] = useState<string | null>(null)
 18 |   const [processId, setProcessId] = useState<string | null>("0syT13r0s0tgPmIed95bJnuSqaD29HQNN8D3ElLSrsc")
 19 |   const [dataText, setDataText] = useState<string | null>("Hello WAuth!")
 20 |   const [actionText, setActionText] = useState<string | null>("Info")
 21 |   const [aoMsgId, setAoMsgId] = useState<string | null>(null)
 22 |   const [signatureInput, setSignatureInput] = useState<string | null>(null)
 23 |   const [signatureOutput, setSignatureOutput] = useState<string | null>(null)
 24 | 
 25 |   // Token transfer states
 26 |   const [tokenProcessId, setTokenProcessId] = useState<string>("0syT13r0s0tgPmIed95bJnuSqaD29HQNN8D3ElLSrsc")
 27 |   const [transferQuantity, setTransferQuantity] = useState<string>("1")
 28 |   const [transferRecipient, setTransferRecipient] = useState<string>("")
 29 |   const [transferMsgId, setTransferMsgId] = useState<string | null>(null)
 30 |   const [isTransferring, setIsTransferring] = useState(false)
 31 | 
 32 |   const { connected, disconnect } = useConnection()
 33 | 
 34 |   // const githubStrategy = getStrategy(WAuthProviders.Github)
 35 |   // githubStrategy.onAuthDataChange((data) => {
 36 |   //   console.log("[app] auth data changed", data)
 37 |   //   setAccessToken(data.accessToken)
 38 |   //   setEmail(data.email)
 39 |   // })
 40 |   // const googleStrategy = getStrategy(WAuthProviders.Google)
 41 |   // googleStrategy.onAuthDataChange((data) => {
 42 |   //   console.log("[app] auth data changed", data)
 43 |   //   setAccessToken(data.accessToken)
 44 |   //   setEmail(data.email)
 45 |   // })
 46 |   // const discordStrategy = getStrategy(WAuthProviders.Discord)
 47 |   // discordStrategy.onAuthDataChange((data) => {
 48 |   //   console.log("[app] auth data changed", data)
 49 |   //   setAccessToken(data.accessToken)
 50 |   //   setEmail(data.email)
 51 |   // })
 52 |   api?.onAuthDataChange && api?.onAuthDataChange((data) => {
 53 |     console.log("[app] auth data changed", data)
 54 |     setAccessToken(data.accessToken)
 55 |     setEmail(data.email)
 56 |   })
 57 | 
 58 |   // Function to fetch connected wallets
 59 |   const fetchConnectedWallets = async () => {
 60 |     try {
 61 |       setIsLoadingWallets(true)
 62 |       // const strategy = getStrategy(getActiveWAuthProvider())
 63 |       const wallets = await api.getConnectedWallets()
 64 |       setConnectedWallets(wallets || [])
 65 |     } catch (error) {
 66 |       console.error("Error fetching connected wallets:", error)
 67 |       setConnectedWallets([])
 68 |     } finally {
 69 |       setIsLoadingWallets(false)
 70 |     }
 71 |   }
 72 | 
 73 |   // Function to add a connected wallet
 74 |   const addConnectedWallet = async () => {
 75 |     try {
 76 |       setIsAddingWallet(true)
 77 | 
 78 |       if (!window.arweaveWallet) {
 79 |         alert("No Arweave wallet found. Please install an Arweave wallet extension.")
 80 |         return
 81 |       }
 82 | 
 83 |       await window.arweaveWallet.disconnect()
 84 | 
 85 |       // Connect to the wallet with required permissions
 86 |       await window.arweaveWallet.connect(["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGNATURE"])
 87 | 
 88 |       // const strategy = getStrategy(getActiveWAuthProvider())
 89 |       const result = await api.addConnectedWallet(window.arweaveWallet)
 90 | 
 91 |       console.log("Wallet connected:", result)
 92 | 
 93 |       // Refresh the connected wallets list
 94 |       await fetchConnectedWallets()
 95 | 
 96 |       alert("Wallet connected successfully!")
 97 |     } catch (error) {
 98 |       console.error("Error adding connected wallet:", error)
 99 |       alert(`Failed to connect wallet: ${error}`)
100 |     } finally {
101 |       setIsAddingWallet(false)
102 |     }
103 |   }
104 | 
105 |   // Function to remove a connected wallet
106 |   const removeConnectedWallet = async (walletId: string, walletAddress: string) => {
107 |     try {
108 |       const confirmRemove = confirm(`Are you sure you want to disconnect wallet ${walletAddress.slice(0, 8)}...${walletAddress.slice(-8)}?`)
109 |       if (!confirmRemove) return
110 | 
111 |       // const strategy = getStrategy(getActiveWAuthProvider())
112 |       await api.removeConnectedWallet(walletId)
113 | 
114 |       console.log("Wallet disconnected:", walletId)
115 | 
116 |       // Refresh the connected wallets list
117 |       await fetchConnectedWallets()
118 | 
119 |       alert("Wallet disconnected successfully!")
120 |     } catch (error) {
121 |       console.error("Error removing connected wallet:", error)
122 |       alert(`Failed to disconnect wallet: ${error}`)
123 |     }
124 |   }
125 | 
126 |   // without this, on refresh the wallet shows the connected UI even if its disconnected
127 |   useEffect(() => fixConnection(address, connected, disconnect), [address, connected, disconnect])
128 | 
129 |   useEffect(() => {
130 |     if (!connected) {
131 |       setAccessToken(null)
132 |       setEmail(null)
133 |       setConnectedWallets([])
134 |     } else {
135 |       // Fetch connected wallets when user connects
136 |       fetchConnectedWallets()
137 |     }
138 |   }, [connected])
139 | 
140 |   async function signTransaction() {
141 |     const ar = Arweave.init({})
142 | 
143 |     const dataUint8Array = new TextEncoder().encode(dataToSign)
144 |     const transaction = await ar.createTransaction({
145 |       data: dataUint8Array
146 |     })
147 |     transaction.addTag("Action", "Info")
148 |     const signedTransaction = await api.sign(transaction)
149 |     console.log(signedTransaction)
150 |     setSignedData("signature: " + signedTransaction.signature)
151 |     // submit transaction
152 |     const res = await ar.transactions.post(signedTransaction)
153 |     console.log("res", res)
154 | 
155 | 
156 |     // sample using ar
157 |     // const ar = Arweave.init({})
158 |     // console.log("----------- sample ------------")
159 |     // const jwk = await ar.wallets.generate()
160 |     // const tx = await ar.createTransaction({
161 |     //   data: dataToSign
162 |     // })
163 |     // console.log("transaction", tx)
164 |     // await ar.transactions.sign(tx, jwk)
165 |     // console.log("transaction", tx)
166 |     // const res1 = await ar.transactions.post(tx)
167 |     // console.log("res1", res1)
168 |   }
169 | 
170 | 
171 | 
172 |   async function sendAoMessage() {
173 |     const signer = api.getAoSigner()
174 | 
175 |     const ao = connect({ MODE: "legacy" })
176 |     const res = await ao.message({
177 |       process: processId,
178 |       data: dataText,
179 |       tags: [{ name: "Action", value: actionText }],
180 |       signer: signer
181 |     })
182 |     console.log(res)
183 |     setAoMsgId(res)
184 |   }
185 | 
186 |   async function signData() {
187 |     // const uint8array = new TextEncoder().encode(signatureInput)
188 |     const signature = await api.signature(signatureInput)
189 |     console.log(signature)
190 |     setSignatureOutput(Buffer.from(signature).toString("hex"))
191 |   }
192 | 
193 |   async function transferTokens() {
194 |     if (!transferRecipient.trim()) {
195 |       alert("Please enter a recipient address")
196 |       return
197 |     }
198 | 
199 |     if (!transferQuantity.trim() || isNaN(Number(transferQuantity))) {
200 |       alert("Please enter a valid quantity")
201 |       return
202 |     }
203 | 
204 |     if (!tokenProcessId.trim()) {
205 |       alert("Please enter a token process ID")
206 |       return
207 |     }
208 | 
209 |     try {
210 |       setIsTransferring(true)
211 |       const signer = api.getAoSigner()
212 |       const ao = connect({ MODE: "legacy" })
213 | 
214 |       const res = await ao.message({
215 |         process: tokenProcessId,
216 |         tags: [
217 |           { name: "Action", value: "Transfer" },
218 |           { name: "Recipient", value: transferRecipient },
219 |           { name: "Quantity", value: transferQuantity }
220 |         ],
221 |         signer: signer
222 |       })
223 | 
224 |       console.log("Transfer result:", res)
225 |       setTransferMsgId(res)
226 |       // alert("Transfer initiated successfully!")
227 |     } catch (error) {
228 |       console.error("Transfer error:", error)
229 |       // alert(`Transfer failed: ${error}`)
230 |     } finally {
231 |       setIsTransferring(false)
232 |     }
233 |   }
234 | 
235 |   return (
236 |     <div className="app">
237 |       <div className="container">
238 |         <header className="header">
239 |           <h1 className="title">WAuth Demo</h1>
240 |           <p className="subtitle">Web2 Authentication for Arweave</p>
241 |         </header>
242 | 
243 |         <main className="main">
244 |           <div className="connect-section">
245 |             <ConnectButton />
246 |           </div>
247 | 
248 |           <div className="info-cards">
249 |             <div className="card">
250 |               <h3 className="card-title">🔗 Wallet Connection</h3>
251 |               <div className="info-item">
252 |                 <span className="label">Address:</span>
253 |                 <span className="value">{address ? `${address.slice(0, 8)}...${address.slice(-8)}` : "Not connected"}</span>
254 |               </div>
255 |               <div className="info-item">
256 |                 <span className="label">Status:</span>
257 |                 <span className={`status ${connected ? 'connected' : 'disconnected'}`}>
258 |                   {connected ? '🟢 Connected' : '🔴 Disconnected'}
259 |                 </span>
260 |               </div>
261 |             </div>
262 | 
263 |             <div className="card">
264 |               <h3 className="card-title">🔐 Authentication Data</h3>
265 |               <div className="info-item">
266 |                 <span className="label">Email:</span>
267 |                 <span className="value">{email || "Not available"}</span>
268 |               </div>
269 |               <div className="info-item">
270 |                 <span className="label">Access Token:</span>
271 |                 <span className="value token">
272 |                   {accessToken ? `${accessToken.slice(0, 20)}...` : "Not available"}
273 |                 </span>
274 |               </div>
275 |             </div>
276 | 
277 |             {connected && <div className="card">
278 |               <h3 className="card-title">🔐 Sign Transaction (WIP, BETA)</h3>
279 |               <div className="info-item">
280 |                 <span className="label">Test sign a transaction with custom data</span>
281 |                 <input type="text" className="input" placeholder="Enter data to sign" onChange={(e) => setDataToSign(e.target.value)} />
282 |               </div>
283 |               <div className="info-item">
284 |                 <span className="label">Signed Data:</span>
285 |                 <span className="value" style={{ wordBreak: "break-all", width: "100%", minWidth: "500px" }}>{signedData ? signedData : "Not available"}</span>
286 |               </div>
287 |               <button className="btn" onClick={signTransaction}>Sign Transaction</button>
288 | 
289 |               <div className="ao-message-section">
290 |                 <div className="info-item">
291 |                   <span className="label">Process ID:</span>
292 |                   <input type="text" className="input" placeholder="Enter process id"
293 |                     defaultValue={processId}
294 |                     onChange={(e) => setProcessId(e.target.value)} />
295 |                 </div>
296 |                 <div className="info-item">
297 |                   <span className="label">Data:</span>
298 |                   <input type="text" className="input" placeholder="Enter data"
299 |                     defaultValue={"Hello WAuth!"}
300 |                     onChange={(e) => setDataText(e.target.value)} />
301 |                 </div>
302 |                 <div className="info-item">
303 |                   <span className="label">Action:</span>
304 |                   <input type="text" className="input" placeholder="Enter action"
305 |                     defaultValue={"Info"}
306 |                     onChange={(e) => setActionText(e.target.value)} />
307 |                 </div>
308 |                 <button className="btn ao-btn" onClick={sendAoMessage}>Send Ao Message</button>
309 |                 {aoMsgId && <a href={`https://aolink.arnode.asia/#/message/${aoMsgId}`} target="_blank" rel="noopener noreferrer">
310 |                   <button className="btn">View on AO Link</button>
311 |                 </a>}
312 |               </div>
313 |             </div>}
314 | 
315 |             {
316 |               connected && <div className="card">
317 |                 <h3 className="card-title">🔐 Sign Data</h3>
318 |                 <div className="info-item">
319 |                   <span className="label">Data:</span>
320 |                   <input type="text" className="input" placeholder="Enter data"
321 |                     onChange={(e) => setSignatureInput(e.target.value)} />
322 |                 </div>
323 |                 <button className="btn" onClick={signData}>Sign Data</button>
324 |                 <div className="info-item">
325 |                   <span className="label">Signature:</span>
326 |                   <span className="value" style={{ wordBreak: "break-all", width: "100%", minWidth: "500px" }}>{signatureOutput ? signatureOutput : "Not available"}</span>
327 |                 </div>
328 |               </div>
329 |             }
330 | 
331 |             {connected && (
332 |               <div className="card">
333 |                 <h3 className="card-title">💼 Connected Wallets</h3>
334 |                 <p className="label">These are wallets that are connected to your account</p>
335 |                 <br />
336 |                 <div className="wallet-actions">
337 |                   <button
338 |                     onClick={addConnectedWallet}
339 |                     disabled={isAddingWallet}
340 |                     className="add-wallet-btn"
341 |                   >
342 |                     {isAddingWallet ? "Adding..." : "➕ Connect Window Wallet"}
343 |                   </button>
344 |                   <button
345 |                     onClick={fetchConnectedWallets}
346 |                     disabled={isLoadingWallets}
347 |                     className="refresh-btn"
348 |                   >
349 |                     {isLoadingWallets ? "Loading..." : "🔄 Refresh"}
350 |                   </button>
351 |                 </div>
352 | 
353 |                 <div className="connected-wallets-list">
354 |                   {isLoadingWallets ? (
355 |                     <div className="loading">Loading connected wallets...</div>
356 |                   ) : connectedWallets.length > 0 ? (
357 |                     connectedWallets.map((wallet, index) => (
358 |                       <div key={wallet.id || index} className="wallet-item">
359 |                         <div className="wallet-info">
360 |                           <div className="wallet-address">
361 |                             <span className="label">Address:</span>
362 |                             <span className="value">
363 |                               {wallet.address ? `${wallet.address.slice(0, 8)}...${wallet.address.slice(-8)}` : "Unknown"}
364 |                             </span>
365 |                           </div>
366 |                           <div className="wallet-created">
367 |                             <span className="label">Connected:</span>
368 |                             <span className="value">
369 |                               {wallet.created ? new Date(wallet.created).toLocaleDateString() : "Unknown"}
370 |                             </span>
371 |                           </div>
372 |                         </div>
373 |                         <div className="wallet-item-actions">
374 |                           <button
375 |                             onClick={() => removeConnectedWallet(wallet.id, wallet.address)}
376 |                             className="remove-wallet-btn"
377 |                           >
378 |                             ❌ Disconnect
379 |                           </button>
380 |                         </div>
381 |                       </div>
382 |                     ))
383 |                   ) : (
384 |                     <div className="no-wallets">
385 |                       <p>No connected wallets found.</p>
386 |                       <p>Click "Add Arweave Wallet" to connect your first wallet.</p>
387 |                     </div>
388 |                   )}
389 |                 </div>
390 |               </div>
391 |             )}
392 | 
393 |             {connected && <div className="card">
394 |               <h3 className="card-title">💸 Token Transfer</h3>
395 |               <div className="info-item">
396 |                 <span className="label">Token Process ID:</span>
397 |                 <input
398 |                   type="text"
399 |                   className="input"
400 |                   placeholder="Enter token process ID"
401 |                   value={tokenProcessId}
402 |                   onChange={(e) => setTokenProcessId(e.target.value)}
403 |                 />
404 |               </div>
405 |               <div className="info-item">
406 |                 <span className="label">Quantity:</span>
407 |                 <input
408 |                   type="text"
409 |                   className="input"
410 |                   placeholder="Enter quantity to transfer"
411 |                   value={transferQuantity}
412 |                   onChange={(e) => setTransferQuantity(e.target.value)}
413 |                 />
414 |               </div>
415 |               <div className="info-item">
416 |                 <span className="label">Recipient Address:</span>
417 |                 <input
418 |                   type="text"
419 |                   className="input"
420 |                   placeholder="Enter recipient wallet address"
421 |                   value={transferRecipient}
422 |                   onChange={(e) => setTransferRecipient(e.target.value)}
423 |                 />
424 |               </div>
425 |               <button
426 |                 className="btn"
427 |                 onClick={transferTokens}
428 |                 disabled={isTransferring}
429 |               >
430 |                 {isTransferring ? "Transferring..." : "💸 Transfer Tokens"}
431 |               </button>
432 |               {transferMsgId && (
433 |                 <div className="info-item">
434 |                   <span className="label">Transfer Message:</span>
435 |                   <a href={`https://aolink.arnode.asia/#/message/${transferMsgId}`} target="_blank" rel="noopener noreferrer">
436 |                     <button className="btn">View on AO Link</button>
437 |                   </a>
438 |                 </div>
439 |               )}
440 |             </div>}
441 |           </div>
442 |         </main>
443 | 
444 |         <footer className="footer">
445 |           <div className="powered-by">
446 |             <p className="powered-text">Powered by <strong>WAuth</strong></p>
447 |             <div className="packages">
448 |               <div className="package">
449 |                 <h4>@wauth/sdk</h4>
450 |                 <div className="links">
451 |                   <a href="https://github.com/ankushKun/wauth/tree/main/sdk" target="_blank" rel="noopener noreferrer">
452 |                     📁 GitHub
453 |                   </a>
454 |                   <a href="https://www.npmjs.com/package/@wauth/sdk" target="_blank" rel="noopener noreferrer">
455 |                     📦 npm
456 |                   </a>
457 |                 </div>
458 |               </div>
459 |               <div className="package">
460 |                 <h4>@wauth/strategy - ArweaveWalletKit</h4>
461 |                 <div className="links">
462 |                   <a href="https://github.com/ankushKun/wauth/tree/main/strategy" target="_blank" rel="noopener noreferrer">
463 |                     📁 GitHub
464 |                   </a>
465 |                   <a href="https://www.npmjs.com/package/@wauth/strategy" target="_blank" rel="noopener noreferrer">
466 |                     📦 npm
467 |                   </a>
468 |                 </div>
469 |               </div>
470 |             </div>
471 |           </div>
472 |         </footer>
473 |       </div>
474 |     </div>
475 |   )
476 | }
477 | 
478 | export default App
479 | 


--------------------------------------------------------------------------------
/demo/src/assets/wauth.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/subspace-dev/wauth/d750ae59a565aa3ebac099483759c4abcb607db9/demo/src/assets/wauth.png


--------------------------------------------------------------------------------
/demo/src/index.css:
--------------------------------------------------------------------------------
  1 | * {
  2 |     box-sizing: border-box;
  3 |     margin: 0;
  4 |     padding: 0;
  5 | }
  6 | 
  7 | body {
  8 |     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  9 |         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
 10 |         sans-serif;
 11 |     -webkit-font-smoothing: antialiased;
 12 |     -moz-osx-font-smoothing: grayscale;
 13 |     background:
 14 |         linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%),
 15 |         url('./assets/wauth.png');
 16 |     background-size: cover;
 17 |     background-position: center;
 18 |     background-repeat: no-repeat;
 19 |     background-attachment: fixed;
 20 |     min-height: 100vh;
 21 | }
 22 | 
 23 | button {
 24 |     cursor: pointer;
 25 | }
 26 | 
 27 | .app {
 28 |     min-height: 100vh;
 29 |     display: flex;
 30 |     align-items: center;
 31 |     justify-content: center;
 32 |     padding: 20px;
 33 | }
 34 | 
 35 | .container {
 36 |     max-width: 800px;
 37 |     width: 100%;
 38 |     background: rgba(0, 0, 0, 0.4);
 39 |     backdrop-filter: blur(20px);
 40 |     -webkit-backdrop-filter: blur(20px);
 41 |     border: 1px solid rgba(255, 255, 255, 0.15);
 42 |     border-radius: 20px;
 43 |     box-shadow:
 44 |         0 20px 40px rgba(0, 0, 0, 0.3),
 45 |         0 0 0 1px rgba(255, 255, 255, 0.1) inset;
 46 |     padding: 40px;
 47 |     display: flex;
 48 |     flex-direction: column;
 49 |     gap: 32px;
 50 | }
 51 | 
 52 | .header {
 53 |     text-align: center;
 54 | }
 55 | 
 56 | .title {
 57 |     font-size: 2.5rem;
 58 |     font-weight: 700;
 59 |     color: #ffffff;
 60 |     margin-bottom: 8px;
 61 |     text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
 62 | }
 63 | 
 64 | .subtitle {
 65 |     font-size: 1.1rem;
 66 |     color: rgba(255, 255, 255, 0.9);
 67 |     font-weight: 400;
 68 |     text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
 69 | }
 70 | 
 71 | .main {
 72 |     display: flex;
 73 |     flex-direction: column;
 74 |     gap: 24px;
 75 | }
 76 | 
 77 | .connect-section {
 78 |     display: flex;
 79 |     justify-content: center;
 80 | }
 81 | 
 82 | .info-cards {
 83 |     display: grid;
 84 |     grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
 85 |     gap: 20px;
 86 | }
 87 | 
 88 | .card {
 89 |     background: rgba(0, 0, 0, 0.6);
 90 |     backdrop-filter: blur(15px);
 91 |     -webkit-backdrop-filter: blur(15px);
 92 |     border-radius: 16px;
 93 |     padding: 24px;
 94 |     border: 1px solid rgba(255, 255, 255, 0.2);
 95 |     box-shadow:
 96 |         0 8px 16px rgba(0, 0, 0, 0.3),
 97 |         0 0 0 1px rgba(255, 255, 255, 0.1) inset;
 98 |     transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
 99 | }
100 | 
101 | .card:hover {
102 |     transform: translateY(-2px);
103 |     background: rgba(0, 0, 0, 0.7);
104 |     box-shadow:
105 |         0 12px 20px rgba(0, 0, 0, 0.4),
106 |         0 0 0 1px rgba(255, 255, 255, 0.15) inset;
107 | }
108 | 
109 | .card-title {
110 |     font-size: 1.2rem;
111 |     font-weight: 600;
112 |     color: #ffffff;
113 |     margin-bottom: 16px;
114 |     display: flex;
115 |     align-items: center;
116 |     gap: 8px;
117 |     text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
118 | }
119 | 
120 | .info-item {
121 |     display: flex;
122 |     justify-content: space-between;
123 |     align-items: center;
124 |     padding: 12px 0;
125 |     border-bottom: 1px solid rgba(255, 255, 255, 0.15);
126 | }
127 | 
128 | .info-item:last-child {
129 |     border-bottom: none;
130 | }
131 | 
132 | .label {
133 |     font-weight: 500;
134 |     color: rgba(255, 255, 255, 0.9);
135 |     font-size: 0.9rem;
136 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
137 | }
138 | 
139 | .value {
140 |     font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
141 |     background: rgba(0, 0, 0, 0.4);
142 |     padding: 6px 10px;
143 |     border-radius: 6px;
144 |     font-size: 0.85rem;
145 |     color: #ffffff;
146 |     max-width: 200px;
147 |     overflow: hidden;
148 |     text-overflow: ellipsis;
149 |     white-space: nowrap;
150 |     border: 1px solid rgba(255, 255, 255, 0.2);
151 |     backdrop-filter: blur(5px);
152 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
153 | }
154 | 
155 | .token {
156 |     background: rgba(139, 69, 19, 0.6);
157 |     color: #ffffff;
158 |     border: 1px solid rgba(255, 193, 7, 0.3);
159 | }
160 | 
161 | .status {
162 |     font-weight: 500;
163 |     padding: 6px 14px;
164 |     border-radius: 20px;
165 |     font-size: 0.8rem;
166 |     backdrop-filter: blur(5px);
167 |     border: 1px solid rgba(255, 255, 255, 0.2);
168 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
169 | }
170 | 
171 | .status.connected {
172 |     background: rgba(16, 185, 129, 0.6);
173 |     color: #ffffff;
174 |     border-color: rgba(16, 185, 129, 0.8);
175 | }
176 | 
177 | .status.disconnected {
178 |     background: rgba(239, 68, 68, 0.6);
179 |     color: #ffffff;
180 |     border-color: rgba(239, 68, 68, 0.8);
181 | }
182 | 
183 | .footer {
184 |     border-top: 1px solid rgba(255, 255, 255, 0.2);
185 |     padding-top: 24px;
186 | }
187 | 
188 | .powered-by {
189 |     text-align: center;
190 | }
191 | 
192 | .powered-text {
193 |     font-size: 1.1rem;
194 |     color: #ffffff;
195 |     margin-bottom: 20px;
196 |     text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
197 | }
198 | 
199 | .packages {
200 |     display: grid;
201 |     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
202 |     gap: 16px;
203 | }
204 | 
205 | .package {
206 |     background: rgba(0, 0, 0, 0.5);
207 |     backdrop-filter: blur(10px);
208 |     -webkit-backdrop-filter: blur(10px);
209 |     border-radius: 12px;
210 |     padding: 16px;
211 |     border: 1px solid rgba(255, 255, 255, 0.2);
212 |     transition: background 0.2s ease;
213 | }
214 | 
215 | .package:hover {
216 |     background: rgba(0, 0, 0, 0.6);
217 | }
218 | 
219 | .package h4 {
220 |     font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
221 |     font-size: 0.9rem;
222 |     color: #ffffff;
223 |     margin-bottom: 8px;
224 |     text-align: center;
225 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
226 | }
227 | 
228 | .links {
229 |     display: flex;
230 |     justify-content: center;
231 |     gap: 12px;
232 | }
233 | 
234 | .links a {
235 |     color: rgba(255, 255, 255, 0.9);
236 |     text-decoration: none;
237 |     font-size: 0.85rem;
238 |     font-weight: 500;
239 |     padding: 6px 10px;
240 |     border-radius: 6px;
241 |     transition: all 0.2s ease;
242 |     background: rgba(0, 0, 0, 0.4);
243 |     border: 1px solid rgba(255, 255, 255, 0.2);
244 |     backdrop-filter: blur(5px);
245 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
246 | }
247 | 
248 | .links a:hover {
249 |     background: rgba(0, 0, 0, 0.6);
250 |     color: #ffffff;
251 |     transform: translateY(-1px);
252 |     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
253 | }
254 | 
255 | /* Responsive design */
256 | @media (max-width: 768px) {
257 |     .container {
258 |         padding: 24px;
259 |         margin: 10px;
260 |         background: rgba(0, 0, 0, 0.5);
261 |     }
262 | 
263 |     .title {
264 |         font-size: 2rem;
265 |     }
266 | 
267 |     .info-cards {
268 |         grid-template-columns: 1fr;
269 |     }
270 | 
271 |     .packages {
272 |         grid-template-columns: 1fr;
273 |     }
274 | 
275 |     .info-item {
276 |         flex-direction: column;
277 |         align-items: flex-start;
278 |         gap: 4px;
279 |     }
280 | 
281 |     .value {
282 |         max-width: 100%;
283 |     }
284 | }
285 | 
286 | /* ArConnect button styling override */
287 | .arweave-wallet-kit button {
288 |     background: rgba(0, 0, 0, 0.6) !important;
289 |     backdrop-filter: blur(10px) !important;
290 |     -webkit-backdrop-filter: blur(10px) !important;
291 |     border: 1px solid rgba(255, 255, 255, 0.3) !important;
292 |     border-radius: 12px !important;
293 |     padding: 12px 24px !important;
294 |     font-weight: 600 !important;
295 |     font-size: 1rem !important;
296 |     color: #ffffff !important;
297 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;
298 |     transition: all 0.2s ease !important;
299 | }
300 | 
301 | .arweave-wallet-kit button:hover {
302 |     background: rgba(139, 69, 19, 0.8);
303 |     transform: translateY(-1px);
304 |     box-shadow:
305 |         0 6px 12px rgba(139, 69, 19, 0.3),
306 |         0 0 0 1px rgba(255, 193, 7, 0.4) inset;
307 | }
308 | 
309 | /* Connected Wallets Styles */
310 | .wallet-actions {
311 |     display: flex;
312 |     gap: 12px;
313 |     margin-bottom: 20px;
314 |     flex-wrap: wrap;
315 | }
316 | 
317 | .add-wallet-btn,
318 | .refresh-btn {
319 |     flex: 1;
320 |     min-width: 140px;
321 |     padding: 10px 16px;
322 |     border: none;
323 |     border-radius: 8px;
324 |     font-size: 0.9rem;
325 |     font-weight: 500;
326 |     cursor: pointer;
327 |     transition: all 0.2s ease;
328 |     backdrop-filter: blur(10px);
329 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
330 |     border: 1px solid rgba(255, 255, 255, 0.2);
331 | }
332 | 
333 | .add-wallet-btn {
334 |     background: rgba(16, 185, 129, 0.6);
335 |     color: #ffffff;
336 |     border-color: rgba(16, 185, 129, 0.8);
337 | }
338 | 
339 | .add-wallet-btn:hover:not(:disabled) {
340 |     background: rgba(16, 185, 129, 0.8);
341 |     transform: translateY(-1px);
342 |     box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
343 | }
344 | 
345 | .add-wallet-btn:disabled {
346 |     opacity: 0.6;
347 |     cursor: not-allowed;
348 |     background: rgba(16, 185, 129, 0.4);
349 | }
350 | 
351 | .refresh-btn {
352 |     background: rgba(59, 130, 246, 0.6);
353 |     color: #ffffff;
354 |     border-color: rgba(59, 130, 246, 0.8);
355 | }
356 | 
357 | .refresh-btn:hover:not(:disabled) {
358 |     background: rgba(59, 130, 246, 0.8);
359 |     transform: translateY(-1px);
360 |     box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
361 | }
362 | 
363 | .refresh-btn:disabled {
364 |     opacity: 0.6;
365 |     cursor: not-allowed;
366 |     background: rgba(59, 130, 246, 0.4);
367 | }
368 | 
369 | .connected-wallets-list {
370 |     display: flex;
371 |     flex-direction: column;
372 |     gap: 12px;
373 | }
374 | 
375 | .wallet-item {
376 |     background: rgba(0, 0, 0, 0.4);
377 |     border: 1px solid rgba(255, 255, 255, 0.15);
378 |     border-radius: 10px;
379 |     padding: 16px;
380 |     transition: all 0.2s ease;
381 |     backdrop-filter: blur(5px);
382 | }
383 | 
384 | .wallet-item:hover {
385 |     background: rgba(0, 0, 0, 0.6);
386 |     border-color: rgba(255, 255, 255, 0.25);
387 |     transform: translateY(-1px);
388 | }
389 | 
390 | .wallet-info {
391 |     display: flex;
392 |     flex-direction: column;
393 |     gap: 8px;
394 | }
395 | 
396 | .wallet-item-actions {
397 |     display: flex;
398 |     justify-content: flex-end;
399 |     margin-top: 12px;
400 |     padding-top: 12px;
401 |     border-top: 1px solid rgba(255, 255, 255, 0.1);
402 | }
403 | 
404 | .remove-wallet-btn {
405 |     padding: 6px 12px;
406 |     border: none;
407 |     border-radius: 6px;
408 |     font-size: 0.8rem;
409 |     font-weight: 500;
410 |     cursor: pointer;
411 |     transition: all 0.2s ease;
412 |     backdrop-filter: blur(10px);
413 |     text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
414 |     border: 1px solid rgba(239, 68, 68, 0.5);
415 |     background: rgba(239, 68, 68, 0.6);
416 |     color: #ffffff;
417 | }
418 | 
419 | .remove-wallet-btn:hover {
420 |     background: rgba(239, 68, 68, 0.8);
421 |     border-color: rgba(239, 68, 68, 0.8);
422 |     transform: translateY(-1px);
423 |     box-shadow: 0 3px 6px rgba(239, 68, 68, 0.3);
424 | }
425 | 
426 | .wallet-address,
427 | .wallet-created {
428 |     display: flex;
429 |     justify-content: space-between;
430 |     align-items: center;
431 |     padding: 4px 0;
432 | }
433 | 
434 | .wallet-address .label,
435 | .wallet-created .label {
436 |     font-weight: 500;
437 |     color: rgba(255, 255, 255, 0.9);
438 |     font-size: 0.85rem;
439 | }
440 | 
441 | .wallet-address .value,
442 | .wallet-created .value {
443 |     font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
444 |     background: rgba(0, 0, 0, 0.5);
445 |     padding: 4px 8px;
446 |     border-radius: 4px;
447 |     font-size: 0.8rem;
448 |     color: #ffffff;
449 |     border: 1px solid rgba(255, 255, 255, 0.2);
450 | }
451 | 
452 | .loading {
453 |     text-align: center;
454 |     padding: 20px;
455 |     color: rgba(255, 255, 255, 0.8);
456 |     font-style: italic;
457 | }
458 | 
459 | .no-wallets {
460 |     text-align: center;
461 |     padding: 24px;
462 |     color: rgba(255, 255, 255, 0.7);
463 |     background: rgba(0, 0, 0, 0.3);
464 |     border-radius: 8px;
465 |     border: 1px dashed rgba(255, 255, 255, 0.3);
466 | }
467 | 
468 | .no-wallets p {
469 |     margin-bottom: 8px;
470 |     line-height: 1.5;
471 | }
472 | 
473 | .no-wallets p:first-child {
474 |     font-weight: 500;
475 |     color: rgba(255, 255, 255, 0.9);
476 | }
477 | 
478 | @media (max-width: 768px) {
479 |     .wallet-actions {
480 |         flex-direction: column;
481 |     }
482 | 
483 |     .add-wallet-btn,
484 |     .refresh-btn {
485 |         min-width: unset;
486 |     }
487 | 
488 |     .wallet-address,
489 |     .wallet-created {
490 |         flex-direction: column;
491 |         align-items: flex-start;
492 |         gap: 4px;
493 |     }
494 | 
495 |     .wallet-address .value,
496 |     .wallet-created .value {
497 |         width: 100%;
498 |         text-align: center;
499 |     }
500 | 
501 |     .wallet-item-actions {
502 |         justify-content: center;
503 |     }
504 | 
505 |     .remove-wallet-btn {
506 |         width: 100%;
507 |         padding: 10px;
508 |         font-size: 0.9rem;
509 |     }
510 | }
511 | 
512 | .input {
513 |     width: 90%;
514 |     padding: 10px;
515 |     border-radius: 6px;
516 |     border: 1px solid rgba(255, 255, 255, 0.2);
517 |     background: rgba(0, 0, 0, 0.4);
518 |     color: #ffffff;
519 | }
520 | 
521 | .btn {
522 |     padding: 10px;
523 |     border-radius: 6px;
524 |     border: 1px solid rgba(255, 255, 255, 0.2);
525 |     background: rgba(0, 0, 0, 0.4);
526 |     color: #ffffff;
527 | }
528 | 
529 | /* --- Sign Transaction Section --- */
530 | .card .info-item {
531 |     margin-bottom: 12px;
532 |     gap: 8px;
533 |     flex-direction: column;
534 |     align-items: flex-start;
535 |     justify-content: center;
536 |     width: 100%;
537 | }
538 | 
539 | .card .btn {
540 |     background: #10b981;
541 |     margin: 12px 0 20px 0;
542 |     width: 100%;
543 |     font-size: 1rem;
544 |     font-weight: 600;
545 |     border: none;
546 |     color: #fff;
547 |     box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
548 |     transition: background 0.2s, box-shadow 0.2s;
549 | }
550 | 
551 | .card .btn:hover {
552 |     box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
553 | }
554 | 
555 | .ao-message-section {
556 |     margin-top: 18px;
557 |     padding: 16px;
558 |     background: rgba(59, 130, 246, 0.08);
559 |     border-radius: 10px;
560 |     border: 1px solid rgba(59, 130, 246, 0.15);
561 |     display: flex;
562 |     flex-direction: column;
563 |     gap: 10px;
564 | }
565 | 
566 | .ao-message-section .input {
567 |     width: 100%;
568 |     margin-bottom: 8px;
569 | }
570 | 
571 | .ao-message-section .ao-btn {
572 |     color: #fff;
573 |     font-weight: 600;
574 |     border: none;
575 |     margin-top: 8px;
576 |     width: 100%;
577 |     transition: background 0.2s, box-shadow 0.2s;
578 | }
579 | 
580 | .ao-message-section .ao-btn:hover {
581 |     box-shadow: 0 4px 16px rgba(16, 185, 129, 0.18);
582 | }


--------------------------------------------------------------------------------
/demo/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import { createRoot } from 'react-dom/client'
 2 | import './index.css'
 3 | import App from './App.tsx'
 4 | import { ArweaveWalletKit } from '@arweave-wallet-kit/react'
 5 | import { getStrategy } from '../lib/strategy.ts'
 6 | import { WAuthProviders } from '@wauth/strategy'
 7 | import type { Strategy } from '@arweave-wallet-kit/core/strategy'
 8 | import WanderStrategy from "@arweave-wallet-kit/wander-strategy"
 9 | 
10 | 
11 | export default function Main() {
12 |   const strategies = [
13 |     getStrategy(WAuthProviders.Github),
14 |     getStrategy(WAuthProviders.Google),
15 |     getStrategy(WAuthProviders.Discord),
16 |     getStrategy(WAuthProviders.X),
17 |   ]
18 | 
19 |   // if (process.env.NODE_ENV === "development") {
20 |   //   // for comparison during development
21 |   //   // strategies.push(new WanderStrategy() as any)
22 |   // }
23 | 
24 |   return <ArweaveWalletKit
25 |     config={{
26 |       appInfo: {
27 |         name: "WAuth Demo",
28 |         logo: "4R-dRRMdFerUnt8HuQzWT48ktgKsgjQ0uH6zlMFXVw",
29 |       },
30 |       strategies: strategies as Strategy[],
31 |       permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"]
32 |     }}
33 | 
34 |     theme={{
35 |       displayTheme: "dark",
36 |       accent: { r: 110, g: 169, b: 100 },
37 |     }}>
38 |     <App />
39 |   </ArweaveWalletKit>
40 | }
41 | 
42 | createRoot(document.getElementById('root')!).render(<Main />)
43 | 


--------------------------------------------------------------------------------
/demo/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 


--------------------------------------------------------------------------------
/demo/tsconfig.app.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
 4 |     "target": "ES2022",
 5 |     "useDefineForClassFields": true,
 6 |     "lib": ["ES2022", "DOM", "DOM.Iterable"],
 7 |     "module": "ESNext",
 8 |     "skipLibCheck": true,
 9 | 
10 |     /* Bundler mode */
11 |     "moduleResolution": "bundler",
12 |     "allowImportingTsExtensions": true,
13 |     "verbatimModuleSyntax": true,
14 |     "moduleDetection": "force",
15 |     "noEmit": true,
16 |     "jsx": "react-jsx",
17 | 
18 |     /* Linting */
19 |     "strict": false,
20 |     "noUnusedLocals": false,
21 |     "noUnusedParameters": false,
22 |     "noFallthroughCasesInSwitch": false,
23 |     "noUncheckedSideEffectImports": false
24 |   },
25 |   "include": ["src"]
26 | }
27 | 


--------------------------------------------------------------------------------
/demo/tsconfig.json:
--------------------------------------------------------------------------------
1 | {
2 |   "files": [],
3 |   "references": [
4 |     { "path": "./tsconfig.app.json" },
5 |     { "path": "./tsconfig.node.json" }
6 |   ]
7 | }
8 | 


--------------------------------------------------------------------------------
/demo/tsconfig.node.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
 4 |     "target": "ES2023",
 5 |     "lib": ["ES2023"],
 6 |     "module": "ESNext",
 7 |     "skipLibCheck": true,
 8 | 
 9 |     /* Bundler mode */
10 |     "moduleResolution": "bundler",
11 |     "allowImportingTsExtensions": true,
12 |     "verbatimModuleSyntax": true,
13 |     "moduleDetection": "force",
14 |     "noEmit": true,
15 | 
16 |     /* Linting */
17 |     "strict": false,
18 |     "noUnusedLocals": false,
19 |     "noUnusedParameters": false,
20 |     "noFallthroughCasesInSwitch": false,
21 |     "noUncheckedSideEffectImports": false
22 |   },
23 |   "include": ["vite.config.ts"]
24 | }
25 | 


--------------------------------------------------------------------------------
/demo/vite.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vite'
 2 | import react from '@vitejs/plugin-react-swc'
 3 | import { nodePolyfills } from "vite-plugin-node-polyfills"
 4 | 
 5 | // https://vite.dev/config/
 6 | export default defineConfig({
 7 |   plugins: [react(), nodePolyfills()],
 8 |   base: "./",
 9 |   server: {
10 |     port: 5174
11 |   },
12 | })
13 | 


--------------------------------------------------------------------------------
/modals-ref/confirm-tx.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | 
  4 | <head>
  5 |     <meta charset="UTF-8">
  6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  7 |     <title>Transfer Modal Example</title>
  8 |     <style>
  9 |         body {
 10 |             height: 100vh;
 11 |             margin: 0;
 12 |             background: white;
 13 |             display: flex;
 14 |             justify-content: center;
 15 |             align-items: center;
 16 |         }
 17 | 
 18 |         #modal-container {
 19 |             font-family: 'Inter', sans-serif;
 20 |             position: fixed;
 21 |             top: 0;
 22 |             left: 0;
 23 |             width: 100vw;
 24 |             height: 100vh;
 25 |             background-color: rgba(0, 0, 0, 0.5);
 26 |             display: flex;
 27 |             flex-direction: column;
 28 |             justify-content: center;
 29 |             align-items: center;
 30 |             z-index: 9999;
 31 |             backdrop-filter: blur(3px);
 32 |             color: #fff;
 33 |         }
 34 | 
 35 |         .wauth-powered {
 36 |             position: absolute;
 37 |             /* left: 0;
 38 |             right: 0; */
 39 |             bottom: 15px;
 40 |             text-align: center;
 41 |             font-size: 0.95rem;
 42 |             color: #b3b3b3;
 43 |             opacity: 0.7;
 44 |             letter-spacing: 0.02em;
 45 |         }
 46 | 
 47 |         .wauth-powered a {
 48 |             color: inherit;
 49 |             text-decoration: inherit;
 50 |         }
 51 | 
 52 |         #modal-content {
 53 |             background: #222;
 54 |             padding: 32px 28px 24px 28px;
 55 |             width: 370px;
 56 |             border-radius: 18px;
 57 |             border: 1px solid #333;
 58 |             box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.5);
 59 |             position: relative;
 60 |             display: flex;
 61 |             flex-direction: column;
 62 |             gap: 18px;
 63 |         }
 64 | 
 65 |         .modal-header {
 66 |             display: flex;
 67 |             justify-content: space-between;
 68 |             align-items: flex-start;
 69 |             margin-bottom: 8px;
 70 |         }
 71 | 
 72 |         .modal-title {
 73 |             font-size: 2rem;
 74 |             font-weight: 600;
 75 |             letter-spacing: 0.01em;
 76 |         }
 77 | 
 78 |         .modal-appicon {
 79 |             width: 32px;
 80 |             height: 32px;
 81 |             border-radius: 8px;
 82 |             object-fit: cover;
 83 |             background: #444;
 84 |         }
 85 | 
 86 |         .modal-desc {
 87 |             font-size: 1rem;
 88 |             color: #cfcfd1;
 89 |             margin-bottom: 10px;
 90 |         }
 91 | 
 92 |         .modal-center {
 93 |             display: flex;
 94 |             flex-direction: column;
 95 |             align-items: center;
 96 |             margin: 10px 0 18px 0;
 97 |         }
 98 | 
 99 |         .token-logo {
100 |             width: 64px;
101 |             height: 64px;
102 |             border-radius: 20%;
103 |             background: #fff;
104 |             display: flex;
105 |             align-items: center;
106 |             justify-content: center;
107 |             margin-bottom: 8px;
108 |             border: 3px solid #6c63ff;
109 |         }
110 | 
111 |         .token-logo-text {
112 |             font-size: 2.5rem;
113 |             font-weight: bold;
114 |             color: #6c63ff;
115 |         }
116 | 
117 |         .token-amount {
118 |             font-size: 2.5rem;
119 |             font-weight: 700;
120 |             color: #fff;
121 |             margin-bottom: 2px;
122 |         }
123 | 
124 |         .token-unit {
125 |             font-size: 1.2rem;
126 |             color: #cfcfd1;
127 |             margin-left: 4px;
128 |         }
129 | 
130 |         .modal-details {
131 |             margin: 0 0 10px 0;
132 |         }
133 | 
134 |         .modal-details-row {
135 |             display: flex;
136 |             justify-content: space-between;
137 |             margin-bottom: 4px;
138 |             font-size: 1rem;
139 |         }
140 | 
141 |         .modal-details-label {
142 |             color: #b3b3b3;
143 |         }
144 | 
145 |         .modal-details-value {
146 |             color: #fff;
147 |             font-family: 'JetBrains Mono', monospace;
148 |         }
149 | 
150 |         .modal-tags {
151 |             color: #a3a3a3;
152 |             font-size: 0.95rem;
153 |             margin-bottom: 8px;
154 |         }
155 | 
156 |         .modal-status {
157 |             background: #18181b;
158 |             border-radius: 8px;
159 |             padding: 8px 0;
160 |             text-align: center;
161 |             color: #b3b3b3;
162 |             font-size: 0.98rem;
163 |             margin-bottom: 10px;
164 |         }
165 | 
166 |         .modal-actions {
167 |             display: flex;
168 |             flex-direction: column;
169 |             gap: 12px;
170 |         }
171 | 
172 |         .modal-btn {
173 |             width: 100%;
174 |             padding: 14px 0;
175 |             border: none;
176 |             border-radius: 10px;
177 |             font-size: 1.1rem;
178 |             font-weight: 600;
179 |             cursor: pointer;
180 |             transition: background 0.2s;
181 |         }
182 | 
183 |         .modal-btn-primary {
184 |             background: linear-gradient(90deg, #6c63ff 0%, #7f6fff 100%);
185 |             color: #fff;
186 |         }
187 | 
188 |         .modal-btn-primary:hover {
189 |             background: linear-gradient(90deg, #7f6fff 0%, #6c63ff 100%);
190 |         }
191 | 
192 |         .modal-btn-secondary {
193 |             background: #18181b;
194 |             color: #fff;
195 |             border: 1px solid #333;
196 |         }
197 | 
198 |         .modal-btn-secondary:hover {
199 |             background: #232326;
200 |         }
201 | 
202 |         .modal-tags {
203 |             display: flex;
204 |             flex-direction: column;
205 |             gap: 4px;
206 |             margin-top: 8px;
207 |             max-height: 100px;
208 |             overflow-y: auto;
209 |         }
210 | 
211 |         .modal-tags-title {
212 |             color: #b3b3b3;
213 |             font-size: 1.1rem;
214 |             margin-bottom: 4px;
215 |         }
216 | 
217 |         .modal-tag-label {
218 |             color: #b3b3b3;
219 |             font-size: 0.95rem;
220 |         }
221 | 
222 |         .modal-tag-value {
223 |             color: #fff;
224 |         }
225 | 
226 |         .modal-tag {
227 |             display: flex;
228 |             justify-content: space-between;
229 |             align-items: center;
230 |             margin-bottom: 4px;
231 |             font-size: 1rem;
232 |         }
233 |     </style>
234 |     <script>
235 |         function proceed() {
236 |             console.log("proceed")
237 |         }
238 | 
239 |         function cancel() {
240 |             console.log("cancel")
241 |         }
242 |     </script>
243 | </head>
244 | 
245 | <body>
246 |     <div id="modal-container">
247 |         <div id="modal-content">
248 |             <div class="modal-header">
249 |                 <div class="modal-title">Transfer</div>
250 |                 <!-- this will be the website icon -->
251 |                 <img class="modal-appicon" src="https://placehold.co/32x32" alt="App Icon" />
252 |             </div>
253 |             <div class="modal-desc">
254 |                 'window hostname' wants to sign a transaction. Review the details below.
255 |             </div>
256 |             <div class="modal-center">
257 |                 <!-- <div class="ao-logo">
258 |                     <span class="ao-logo-text">AO</span>
259 |                 </div> -->
260 |                 <img class="token-logo" src="https://placehold.co/64x64" alt="App Icon" />
261 |                 <div class="token-amount">0 <span class="token-unit">AO</span></div>
262 |             </div>
263 |             <div class="modal-details">
264 |                 <div class="modal-details-row">
265 |                     <span class="modal-details-label">Process ID</span>
266 |                     <span class="modal-details-value">0syT13...ILSrsc</span>
267 |                 </div>
268 |                 <div class="modal-details-row">
269 |                     <span class="modal-details-label">From</span>
270 |                     <span class="modal-details-value">8iD-Gy...b63YHg</span>
271 |                 </div>
272 |                 <!-- TAG LIST (scrollable, max height 100px) -->
273 |                 <div class="modal-tags">
274 |                     <div class="modal-tags-title">Tags</div>
275 |                     <div class="modal-tag">
276 |                         <span class="modal-tag-label">Action</span>
277 |                         <span class="modal-tag-value">Transfer</span>
278 |                     </div>
279 |                     <div class="modal-tag">
280 |                         <span class="modal-tag-label">Recipient</span>
281 |                         <span class="modal-tag-value">8iD-Gy...b63YHg</span>
282 |                     </div>
283 |                     <div class="modal-tag">
284 |                         <span class="modal-tag-label">Quantity</span>
285 |                         <span class="modal-tag-value">100</span>
286 |                     </div>
287 |                 </div>
288 |             </div>
289 |             <div class="modal-actions">
290 |                 <button class="modal-btn modal-btn-primary" onclick="proceed()">Sign</button>
291 |                 <button class="modal-btn modal-btn-secondary" onclick="cancel()">Cancel</button>
292 |             </div>
293 |         </div>
294 |         <div class="wauth-powered"><a href="https://wauth_subspace.ar.io" target="_blank">powered by wauth</a></div>
295 |     </div>
296 | </body>
297 | 
298 | </html>


--------------------------------------------------------------------------------
/modals-ref/password-existing.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | 
  4 | <head>
  5 |     <meta charset="UTF-8">
  6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  7 |     <title>Enter Wallet Password</title>
  8 |     <style>
  9 |         body {
 10 |             height: 100vh;
 11 |             margin: 0;
 12 |             background: white;
 13 |             display: flex;
 14 |             justify-content: center;
 15 |             align-items: center;
 16 |         }
 17 | 
 18 |         #modal-container {
 19 |             font-family: 'Inter', sans-serif;
 20 |             position: fixed;
 21 |             top: 0;
 22 |             left: 0;
 23 |             width: 100vw;
 24 |             height: 100vh;
 25 |             background-color: rgba(0, 0, 0, 0.5);
 26 |             display: flex;
 27 |             flex-direction: column;
 28 |             justify-content: center;
 29 |             align-items: center;
 30 |             z-index: 9999;
 31 |             backdrop-filter: blur(3px);
 32 |             color: #fff;
 33 |         }
 34 | 
 35 |         .wauth-powered {
 36 |             position: absolute;
 37 |             bottom: 15px;
 38 |             text-align: center;
 39 |             font-size: 0.95rem;
 40 |             color: #b3b3b3;
 41 |             opacity: 0.7;
 42 |             letter-spacing: 0.02em;
 43 |         }
 44 | 
 45 |         .wauth-powered a {
 46 |             color: inherit;
 47 |             text-decoration: inherit;
 48 |         }
 49 | 
 50 |         #modal-content {
 51 |             background: #222;
 52 |             padding: 32px 28px 24px 28px;
 53 |             width: 370px;
 54 |             border-radius: 18px;
 55 |             border: 1px solid #333;
 56 |             box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.5);
 57 |             position: relative;
 58 |             display: flex;
 59 |             flex-direction: column;
 60 |             gap: 18px;
 61 |         }
 62 | 
 63 |         .modal-header {
 64 |             display: flex;
 65 |             justify-content: space-between;
 66 |             align-items: flex-start;
 67 |             margin-bottom: 8px;
 68 |         }
 69 | 
 70 |         .modal-title {
 71 |             font-size: 2rem;
 72 |             font-weight: 600;
 73 |             letter-spacing: 0.01em;
 74 |         }
 75 | 
 76 |         .modal-appicon {
 77 |             width: 32px;
 78 |             height: 32px;
 79 |             border-radius: 8px;
 80 |             object-fit: cover;
 81 |             background: #444;
 82 |         }
 83 | 
 84 |         .modal-desc {
 85 |             font-size: 1rem;
 86 |             color: #cfcfd1;
 87 |             margin-bottom: 10px;
 88 |         }
 89 | 
 90 |         .modal-center {
 91 |             display: flex;
 92 |             flex-direction: column;
 93 |             align-items: center;
 94 |             margin: 10px 0 18px 0;
 95 |         }
 96 | 
 97 |         .modal-form {
 98 |             display: flex;
 99 |             flex-direction: column;
100 |             gap: 16px;
101 |             margin-bottom: 10px;
102 |         }
103 | 
104 |         .modal-label {
105 |             color: #b3b3b3;
106 |             font-size: 1rem;
107 |             margin-bottom: 4px;
108 |         }
109 | 
110 |         .modal-input {
111 |             width: 93%;
112 |             padding: 12px 10px;
113 |             border-radius: 8px;
114 |             border: 1px solid #333;
115 |             background: #18181b;
116 |             color: #fff;
117 |             font-size: 1rem;
118 |             margin-bottom: 2px;
119 |             outline: none;
120 |             transition: border 0.2s;
121 |         }
122 | 
123 |         .modal-input:focus {
124 |             border: 1.5px solid #6c63ff;
125 |         }
126 | 
127 |         .modal-actions {
128 |             display: flex;
129 |             flex-direction: column;
130 |             gap: 12px;
131 |         }
132 | 
133 |         .modal-btn {
134 |             width: 100%;
135 |             padding: 14px 0;
136 |             border: none;
137 |             border-radius: 10px;
138 |             font-size: 1.1rem;
139 |             font-weight: 600;
140 |             cursor: pointer;
141 |             transition: background 0.2s;
142 |         }
143 | 
144 |         .modal-btn-primary {
145 |             background: linear-gradient(90deg, #6c63ff 0%, #7f6fff 100%);
146 |             color: #fff;
147 |         }
148 | 
149 |         .modal-btn-primary:hover {
150 |             background: linear-gradient(90deg, #7f6fff 0%, #6c63ff 100%);
151 |         }
152 | 
153 |         .modal-btn-secondary {
154 |             background: #18181b;
155 |             color: #fff;
156 |             border: 1px solid #333;
157 |         }
158 | 
159 |         .modal-btn-secondary:hover {
160 |             background: #232326;
161 |         }
162 | 
163 |         .modal-error {
164 |             color: #ff6b6b;
165 |             font-size: 0.98rem;
166 |             margin-bottom: 6px;
167 |             text-align: center;
168 |         }
169 |     </style>
170 |     <script>
171 |         function proceed() {
172 |             const pw = document.getElementById('password').value;
173 |             const error = document.getElementById('modal-error');
174 |             if (!pw) {
175 |                 error.textContent = 'Please enter your password.';
176 |                 return;
177 |             }
178 |             error.textContent = '';
179 |             // Proceed with password logic
180 |             alert('Password entered!');
181 |         }
182 |     </script>
183 | </head>
184 | 
185 | <body>
186 |     <div id="modal-container">
187 |         <div id="modal-content">
188 |             <div class="modal-header">
189 |                 <div class="modal-title">Enter Wallet Password</div>
190 |                 <img class="modal-appicon" src="https://placehold.co/32x32" alt="App Icon" />
191 |             </div>
192 |             <div class="modal-desc">
193 |                 Please enter your wallet password to continue.
194 |             </div>
195 |             <form class="modal-form" onsubmit="event.preventDefault(); proceed();">
196 |                 <div>
197 |                     <label class="modal-label" for="password">Password</label>
198 |                     <input class="modal-input" type="password" id="password" autocomplete="current-password" required />
199 |                 </div>
200 |                 <div id="modal-error" class="modal-error"></div>
201 |                 <div class="modal-actions">
202 |                     <button class="modal-btn modal-btn-primary" type="submit">Proceed</button>
203 |                 </div>
204 |             </form>
205 |         </div>
206 |         <div class="wauth-powered"><a href="https://wauth_subspace.ar.io" target="_blank">powered by wauth</a></div>
207 |     </div>
208 | </body>
209 | 
210 | </html>


--------------------------------------------------------------------------------
/modals-ref/password-new.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | 
  4 | <head>
  5 |     <meta charset="UTF-8">
  6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  7 |     <title>Set New Password</title>
  8 |     <style>
  9 |         body {
 10 |             height: 100vh;
 11 |             margin: 0;
 12 |             background: white;
 13 |             display: flex;
 14 |             justify-content: center;
 15 |             align-items: center;
 16 |         }
 17 | 
 18 |         #modal-container {
 19 |             font-family: 'Inter', sans-serif;
 20 |             position: fixed;
 21 |             top: 0;
 22 |             left: 0;
 23 |             width: 100vw;
 24 |             height: 100vh;
 25 |             background-color: rgba(0, 0, 0, 0.5);
 26 |             display: flex;
 27 |             flex-direction: column;
 28 |             justify-content: center;
 29 |             align-items: center;
 30 |             z-index: 9999;
 31 |             backdrop-filter: blur(3px);
 32 |             color: #fff;
 33 |         }
 34 | 
 35 |         .wauth-powered {
 36 |             position: absolute;
 37 |             /* left: 0;
 38 |             right: 0; */
 39 |             bottom: 15px;
 40 |             text-align: center;
 41 |             font-size: 0.95rem;
 42 |             color: #b3b3b3;
 43 |             opacity: 0.7;
 44 |             letter-spacing: 0.02em;
 45 |         }
 46 | 
 47 |         .wauth-powered a {
 48 |             color: inherit;
 49 |             text-decoration: inherit;
 50 |         }
 51 | 
 52 |         #modal-content {
 53 |             background: #222;
 54 |             padding: 32px 28px 24px 28px;
 55 |             width: 370px;
 56 |             border-radius: 18px;
 57 |             border: 1px solid #333;
 58 |             box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.5);
 59 |             position: relative;
 60 |             display: flex;
 61 |             flex-direction: column;
 62 |             gap: 18px;
 63 |         }
 64 | 
 65 |         .modal-header {
 66 |             display: flex;
 67 |             justify-content: space-between;
 68 |             align-items: flex-start;
 69 |             margin-bottom: 8px;
 70 |         }
 71 | 
 72 |         .modal-title {
 73 |             font-size: 2rem;
 74 |             font-weight: 600;
 75 |             letter-spacing: 0.01em;
 76 |         }
 77 | 
 78 |         .modal-appicon {
 79 |             width: 32px;
 80 |             height: 32px;
 81 |             border-radius: 8px;
 82 |             object-fit: cover;
 83 |             background: #444;
 84 |         }
 85 | 
 86 |         .modal-desc {
 87 |             font-size: 1rem;
 88 |             color: #cfcfd1;
 89 |             margin-bottom: 10px;
 90 |         }
 91 | 
 92 |         .modal-center {
 93 |             display: flex;
 94 |             flex-direction: column;
 95 |             align-items: center;
 96 |             margin: 10px 0 18px 0;
 97 |         }
 98 | 
 99 |         .modal-form {
100 |             display: flex;
101 |             flex-direction: column;
102 |             gap: 16px;
103 |             margin-bottom: 10px;
104 |         }
105 | 
106 |         .modal-label {
107 |             color: #b3b3b3;
108 |             font-size: 1rem;
109 |             margin-bottom: 4px;
110 |         }
111 | 
112 |         .modal-input {
113 |             width: 93%;
114 |             padding: 12px 10px;
115 |             border-radius: 8px;
116 |             border: 1px solid #333;
117 |             background: #18181b;
118 |             color: #fff;
119 |             font-size: 1rem;
120 |             margin-bottom: 2px;
121 |             outline: none;
122 |             transition: border 0.2s;
123 |         }
124 | 
125 |         .modal-input:focus {
126 |             border: 1.5px solid #6c63ff;
127 |         }
128 | 
129 |         .modal-actions {
130 |             display: flex;
131 |             flex-direction: column;
132 |             gap: 12px;
133 |         }
134 | 
135 |         .modal-btn {
136 |             width: 100%;
137 |             padding: 14px 0;
138 |             border: none;
139 |             border-radius: 10px;
140 |             font-size: 1.1rem;
141 |             font-weight: 600;
142 |             cursor: pointer;
143 |             transition: background 0.2s;
144 |         }
145 | 
146 |         .modal-btn-primary {
147 |             background: linear-gradient(90deg, #6c63ff 0%, #7f6fff 100%);
148 |             color: #fff;
149 |         }
150 | 
151 |         .modal-btn-primary:hover {
152 |             background: linear-gradient(90deg, #7f6fff 0%, #6c63ff 100%);
153 |         }
154 | 
155 |         .modal-btn-secondary {
156 |             background: #18181b;
157 |             color: #fff;
158 |             border: 1px solid #333;
159 |         }
160 | 
161 |         .modal-btn-secondary:hover {
162 |             background: #232326;
163 |         }
164 | 
165 |         .modal-error {
166 |             color: #ff6b6b;
167 |             font-size: 0.98rem;
168 |             margin-bottom: 6px;
169 |             text-align: center;
170 |         }
171 |     </style>
172 |     <script>
173 |         function proceed() {
174 |             const pw = document.getElementById('password').value;
175 |             const cpw = document.getElementById('confirm-password').value;
176 |             const error = document.getElementById('modal-error');
177 |             if (!pw || !cpw) {
178 |                 error.textContent = 'Please fill in both fields.';
179 |                 return;
180 |             }
181 |             if (pw !== cpw) {
182 |                 error.textContent = 'Passwords do not match.';
183 |                 return;
184 |             }
185 |             error.textContent = '';
186 |             // Proceed with password logic
187 |             alert('Password set!');
188 |         }
189 |     </script>
190 | </head>
191 | 
192 | <body>
193 |     <div id="modal-container">
194 |         <div id="modal-content">
195 |             <div class="modal-header">
196 |                 <div class="modal-title">Set Wallet Password</div>
197 |                 <img class="modal-appicon" src="https://placehold.co/32x32" alt="App Icon" />
198 |             </div>
199 |             <div class="modal-desc">
200 |                 Your wallet will be encrypted with this password.<br /><br />
201 |                 You will not be able to access your wallet without this password.<br />
202 |                 Feel free to save this in a password manager.
203 |             </div>
204 |             <form class="modal-form" onsubmit="event.preventDefault(); proceed();">
205 |                 <div>
206 |                     <label class="modal-label" for="password">Password</label>
207 |                     <input class="modal-input" type="password" id="password" autocomplete="new-password" required />
208 |                 </div>
209 |                 <div>
210 |                     <label class="modal-label" for="confirm-password">Confirm Password</label>
211 |                     <input class="modal-input" type="password" id="confirm-password" autocomplete="new-password"
212 |                         required />
213 |                 </div>
214 |                 <div id="modal-error" class="modal-error"></div>
215 |                 <div class="modal-actions">
216 |                     <button class="modal-btn modal-btn-primary" type="submit">Proceed</button>
217 |                 </div>
218 |             </form>
219 |         </div>
220 |         <div class="wauth-powered"><a href="https://wauth_subspace.ar.io" target="_blank">powered by wauth</a></div>
221 |     </div>
222 | </body>
223 | 
224 | </html>


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "wauth",
 3 |   "module": "index.ts",
 4 |   "type": "module",
 5 |   "private": true,
 6 |   "scripts": {
 7 |     "backend": "cd backend && bun run start",
 8 |     "start": "cd backend && bun run start",
 9 |     "demo": "cd demo && bun run dev",
10 |     "dev": "concurrently \"cd backend && bun run dev\" \"cd sdk && npm run dev\" \"cd strategy && npm run dev\" \"cd demo && bun run dev\"",
11 |     "build": "cd sdk; npm i; npm run build; cd ../strategy; npm i; npm run build; cd ../demo; bun i; bun run build; cp -r dist ..",
12 |     "refresh": "cd sdk; npm run build; cd ../strategy; npm remove @wauth/sdk; rm -rf node_modules; npm i ../sdk; npm run build; cd ../demo; bun remove @wauth/strategy;rm -rf node_modules;bun i ../strategy;",
13 |     "publish:sdk": "cd sdk && npm run publish-npm",
14 |     "publish:strategy": "cd strategy && npm run publish-npm"
15 |   },
16 |   "devDependencies": {
17 |     "@types/bun": "latest"
18 |   },
19 |   "peerDependencies": {
20 |     "typescript": "^5"
21 |   },
22 |   "dependencies": {
23 |     "concurrently": "^9.2.0"
24 |   }
25 | }


--------------------------------------------------------------------------------
/publish-npm.sh:
--------------------------------------------------------------------------------
 1 | #! /bin/bash
 2 | 
 3 | # Colors
 4 | RED='\033[0;31m'
 5 | GREEN='\033[0;32m'
 6 | YELLOW='\033[1;33m'
 7 | BLUE='\033[0;34m'
 8 | CYAN='\033[0;36m'
 9 | BOLD='\033[1m'
10 | RESET='\033[0m'
11 | 
12 | # Print beautiful header
13 | printf "${BOLD}${CYAN}==============================\n"
14 | printf "        PUBLISHING SDK      \n"
15 | printf "==============================${RESET}\n"
16 | 
17 | npm run publish:sdk
18 | 
19 | # wait 15 seconds to make sure the package is published
20 | printf "${YELLOW}Waiting 15 seconds for package to publish...${RESET}\n"
21 | sleep 15
22 | 
23 | # install the latest package in the strategy
24 | cd strategy
25 | printf "${BOLD}${BLUE}Installing SDK in Strategy${RESET}\n"
26 | npm i @wauth/sdk@latest
27 | npm run build
28 | 
29 | cd ..
30 | 
31 | printf "${BOLD}${CYAN}==============================\n"
32 | printf "      PUBLISHING STRATEGY     \n"
33 | printf "==============================${RESET}\n"
34 | npm run publish:strategy
35 | 
36 | printf "${GREEN}${BOLD}Published successfully!${RESET}\n"
37 | 
38 | git reset --hard
39 | 
40 | printf "${BOLD}${CYAN}Done!${RESET}\n"


--------------------------------------------------------------------------------
/sdk/.gitignore:
--------------------------------------------------------------------------------
 1 | # dependencies (bun install)
 2 | node_modules
 3 | 
 4 | # output
 5 | out
 6 | *.tgz
 7 | 
 8 | # code coverage
 9 | coverage
10 | *.lcov
11 | 
12 | # logs
13 | logs
14 | _.log
15 | report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json
16 | 
17 | # dotenv environment variable files
18 | .env
19 | .env.development.local
20 | .env.test.local
21 | .env.production.local
22 | .env.local
23 | 
24 | # caches
25 | .eslintcache
26 | .cache
27 | *.tsbuildinfo
28 | 
29 | # IntelliJ based IDEs
30 | .idea
31 | 
32 | # Finder (MacOS) folder config
33 | .DS_Store
34 | 
35 | dist


--------------------------------------------------------------------------------
/sdk/README.md:
--------------------------------------------------------------------------------
  1 | # @wauth/sdk
  2 | 
  3 | The WAuth SDK provides seamless Web2 social authentication for Arweave applications. It creates arweaveWallet compatible wallet instances for users after they authenticate with popular social providers.
  4 | 
  5 | ## Installation
  6 | 
  7 | Install the SDK in your project:
  8 | 
  9 | ```bash
 10 | npm i @wauth/sdk@latest
 11 | ```
 12 | 
 13 | ## Setup & Usage
 14 | 
 15 | ### Basic Setup
 16 | 
 17 | ```ts
 18 | import { WAuth, WAuthProviders } from "@wauth/sdk";
 19 | 
 20 | // Initialize the SDK
 21 | const wauth = new WAuth({ dev: false });
 22 | 
 23 | // Optional: Listen for authentication state changes
 24 | wauth.onAuthDataChange((authData) => {
 25 |     if (authData) {
 26 |         console.log("User authenticated:", authData);
 27 |     } else {
 28 |         console.log("User logged out");
 29 |     }
 30 | });
 31 | ```
 32 | 
 33 | ### Authentication
 34 | 
 35 | ```ts
 36 | // Connect with social provider
 37 | async function connectWithGoogle() {
 38 |     try {
 39 |         const authData = await wauth.connect({ 
 40 |             provider: WAuthProviders.Google 
 41 |         });
 42 |         
 43 |         if (authData) {
 44 |             console.log("Successfully authenticated!");
 45 |             const address = await wauth.getActiveAddress();
 46 |             console.log("Wallet address:", address);
 47 |         }
 48 |     } catch (error) {
 49 |         console.error("Authentication failed:", error);
 50 |     }
 51 | }
 52 | 
 53 | // Available providers
 54 | WAuthProviders.Google   // "google"
 55 | WAuthProviders.Github   // "github" 
 56 | WAuthProviders.Discord  // "discord"
 57 | ```
 58 | 
 59 | ### Wallet Management
 60 | 
 61 | ```ts
 62 | // Get connected wallets
 63 | const wallets = await wauth.getConnectedWallets();
 64 | 
 65 | // Add a new wallet
 66 | await wauth.addConnectedWallet(window.arweaveWallet);
 67 | 
 68 | // Remove a wallet
 69 | await wauth.removeConnectedWallet(walletId);
 70 | ```
 71 | 
 72 | ### Transaction & Data Signing
 73 | 
 74 | ```ts
 75 | // Sign a transaction
 76 | const transaction = await arweave.createTransaction({
 77 |     data: new TextEncoder().encode("Hello WAuth!")
 78 | });
 79 | const signedTx = await wauth.sign(transaction);
 80 | 
 81 | // Sign raw data
 82 | const signature = await wauth.signature("Data to sign");
 83 | 
 84 | // Get AO Protocol signer
 85 | const signer = wauth.getAoSigner();
 86 | const ao = connect({ MODE: "legacy" });
 87 | const res = await ao.message({
 88 |     process: processId,
 89 |     data: "Hello AO!",
 90 |     tags: [{ name: "Action", value: "Info" }],
 91 |     signer: signer
 92 | });
 93 | ```
 94 | 
 95 | ## Integration with Arweave Wallet Kit
 96 | 
 97 | For React applications, we recommend using `@wauth/strategy` with Arweave Wallet Kit for a seamless integration. Check out the [strategy package](https://github.com/ankushKun/wauth/tree/main/strategy) for more details.
 98 | 
 99 | ## Demo
100 | 
101 | Check out our [live demo](https://github.com/ankushKun/wauth/tree/main/demo) to see WAuth in action with all features:
102 | - Social Authentication
103 | - Wallet Management
104 | - Transaction Signing
105 | - Data Signing
106 | - AO Protocol Integration
107 | 
108 | ![WAuth SDK Demo](https://raw.githubusercontent.com/ankushKun/wauth/refs/heads/main/assets/sdk.gif)
109 | 
110 | 


--------------------------------------------------------------------------------
/sdk/generate-version.js:
--------------------------------------------------------------------------------
1 | import fs from 'fs';
2 | 
3 | const packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
4 | 
5 | console.log(`SDK version: ${packageJSON.version}`);
6 | fs.writeFileSync('./src/version.ts', `export const WAUTH_VERSION = "${packageJSON.version}";\n`);


--------------------------------------------------------------------------------
/sdk/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@wauth/sdk",
 3 |   "version": "0.0.12",
 4 |   "description": "Web2 auth sdk for Arweave",
 5 |   "repository": {
 6 |     "type": "git",
 7 |     "url": "git+https://github.com/subspace-dev/wauth.git#main"
 8 |   },
 9 |   "homepage": "https://github.com/subspace-dev/wauth/tree/main/sdk",
10 |   "type": "module",
11 |   "main": "./dist/index.js",
12 |   "module": "./dist/index.js",
13 |   "types": "./dist/index.d.ts",
14 |   "exports": {
15 |     ".": {
16 |       "types": "./dist/index.d.ts",
17 |       "import": "./dist/index.js"
18 |     }
19 |   },
20 |   "files": [
21 |     "dist"
22 |   ],
23 |   "scripts": {
24 |     "generate-version": "node generate-version.js",
25 |     "prebuild": "npm run generate-version",
26 |     "build": "npm run clean && npm run generate-version && tsc",
27 |     "clean": "rm -rf dist",
28 |     "dev": "tsc --watch",
29 |     "typecheck": "tsc --noEmit",
30 |     "prepublishOnly": "npm run build",
31 |     "publish-npm": "npm run build && npm publish --access public"
32 |   },
33 |   "keywords": [
34 |     "arweave",
35 |     "ao",
36 |     "auth",
37 |     "decentralized",
38 |     "web2"
39 |   ],
40 |   "author": "Ankush Singh <ankush@arweave.org>",
41 |   "license": "MIT",
42 |   "peerDependencies": {
43 |     "pocketbase": "^0.26.1"
44 |   },
45 |   "devDependencies": {
46 |     "@types/node": "^24.0.4",
47 |     "typescript": "^5.8.3"
48 |   },
49 |   "engines": {
50 |     "node": ">=20.0.0"
51 |   },
52 |   "dependencies": {
53 |     "@dha-team/arbundles": "^1.0.3",
54 |     "@permaweb/aoconnect": "^0.0.85",
55 |     "arconnect": "^1.0.4",
56 |     "arweave": "^2.0.0-ec.1",
57 |     "axios": "^1.10.0",
58 |     "vite-plugin-node-polyfills": "^0.24.0"
59 |   }
60 | }


--------------------------------------------------------------------------------
/sdk/src/index.ts:
--------------------------------------------------------------------------------
   1 | import PocketBase, { type RecordAuthResponse, type RecordModel } from "pocketbase"
   2 | import Arweave from "arweave"
   3 | import type { GatewayConfig, PermissionType } from "arconnect";
   4 | import type { Tag } from "arweave/web/lib/transaction";
   5 | import Transaction from "arweave/web/lib/transaction";
   6 | import type { SignatureOptions } from "arweave/web/lib/crypto/crypto-interface";
   7 | import { type DataItem as ArConnectDataItem } from "arconnect";
   8 | import { DataItem } from "@dha-team/arbundles";
   9 | import axios from "axios";
  10 | import base64url from "base64url";
  11 | import { WAUTH_VERSION } from "./version";
  12 | import { createModal, createModalContainer } from "./modal-helper";
  13 | import { dryrun } from "@permaweb/aoconnect";
  14 | 
  15 | // HTML Sanitization Utility
  16 | class HTMLSanitizer {
  17 |     /**
  18 |      * Escapes HTML entities to prevent XSS attacks
  19 |      * @param text - The text to escape
  20 |      * @returns Escaped text safe for innerHTML
  21 |      */
  22 |     static escapeHTML(text: string): string {
  23 |         const div = document.createElement('div');
  24 |         div.textContent = text;
  25 |         return div.innerHTML;
  26 |     }
  27 | 
  28 |     /**
  29 |      * Creates a safe HTML string with basic formatting
  30 |      * @param text - The text content
  31 |      * @param allowedTags - Array of allowed HTML tags (default: ['br', 'strong', 'em'])
  32 |      * @returns Sanitized HTML string
  33 |      */
  34 |     static sanitizeHTML(text: string, allowedTags: string[] = ['br', 'strong', 'em']): string {
  35 |         // First escape all HTML
  36 |         let sanitized = this.escapeHTML(text);
  37 | 
  38 |         // Then allow specific tags back in a controlled way
  39 |         allowedTags.forEach(tag => {
  40 |             const escapedOpenTag = `&lt;${tag}&gt;`;
  41 |             const escapedCloseTag = `&lt;/${tag}&gt;`;
  42 |             const openTagRegex = new RegExp(escapedOpenTag, 'gi');
  43 |             const closeTagRegex = new RegExp(escapedCloseTag, 'gi');
  44 | 
  45 |             sanitized = sanitized.replace(openTagRegex, `<${tag}>`);
  46 |             sanitized = sanitized.replace(closeTagRegex, `</${tag}>`);
  47 |         });
  48 | 
  49 |         return sanitized;
  50 |     }
  51 | 
  52 |     /**
  53 |      * Safely sets innerHTML with sanitization
  54 |      * @param element - The DOM element
  55 |      * @param html - The HTML content to set
  56 |      * @param allowedTags - Array of allowed HTML tags
  57 |      */
  58 |     static safeSetInnerHTML(element: HTMLElement, html: string, allowedTags?: string[]): void {
  59 |         element.innerHTML = this.sanitizeHTML(html, allowedTags);
  60 |     }
  61 | 
  62 |     /**
  63 |      * Creates a safe link element
  64 |      * @param href - The URL (will be validated)
  65 |      * @param text - The link text (will be escaped)
  66 |      * @param target - Link target (default: '_blank')
  67 |      * @returns HTMLAnchorElement
  68 |      */
  69 |     static createSafeLink(href: string, text: string, target: string = '_blank'): HTMLAnchorElement {
  70 |         const link = document.createElement('a');
  71 | 
  72 |         // Validate URL - only allow http/https
  73 |         try {
  74 |             const url = new URL(href);
  75 |             if (url.protocol !== 'http:' && url.protocol !== 'https:') {
  76 |                 throw new Error('Invalid protocol');
  77 |             }
  78 |             link.href = url.toString();
  79 |         } catch {
  80 |             // If URL is invalid, don't set href
  81 |             link.href = '#';
  82 |             console.warn('Invalid URL provided to createSafeLink:', href);
  83 |         }
  84 | 
  85 |         link.textContent = text; // textContent automatically escapes
  86 |         link.target = target;
  87 | 
  88 |         // Security attributes for external links
  89 |         if (target === '_blank') {
  90 |             link.rel = 'noopener noreferrer';
  91 |         }
  92 | 
  93 |         return link;
  94 |     }
  95 | }
  96 | 
  97 | // Export HTMLSanitizer for external use
  98 | export { HTMLSanitizer };
  99 | 
 100 | // Frontend password encryption utilities
 101 | class PasswordEncryption {
 102 |     private static publicKey: CryptoKey | null = null;
 103 | 
 104 |     static async getBackendPublicKey(backendUrl: string): Promise<CryptoKey> {
 105 |         if (this.publicKey) {
 106 |             return this.publicKey;
 107 |         }
 108 | 
 109 |         try {
 110 |             const response = await fetch(`${backendUrl}/public-key`);
 111 | 
 112 |             if (!response.ok) {
 113 |                 throw new Error(`HTTP ${response.status}: ${response.statusText}`);
 114 |             }
 115 | 
 116 |             const data = await response.json();
 117 | 
 118 |             if (data.error) {
 119 |                 throw new Error(`Backend error: ${data.error}`);
 120 |             }
 121 | 
 122 |             if (!data.publicKey) {
 123 |                 throw new Error("No public key in response");
 124 |             }
 125 | 
 126 |             this.publicKey = await crypto.subtle.importKey(
 127 |                 "jwk",
 128 |                 data.publicKey,
 129 |                 {
 130 |                     name: "RSA-OAEP",
 131 |                     hash: "SHA-256",
 132 |                 },
 133 |                 false,
 134 |                 ["encrypt"]
 135 |             );
 136 | 
 137 |             return this.publicKey;
 138 |         } catch (error) {
 139 |             console.error("Failed to get backend public key:", error);
 140 |             throw new Error("Failed to initialize password encryption: " + (error as Error).message);
 141 |         }
 142 |     }
 143 | 
 144 |     static async encryptPassword(password: string, backendUrl: string): Promise<string> {
 145 |         try {
 146 |             const publicKey = await this.getBackendPublicKey(backendUrl);
 147 | 
 148 |             // Generate nonce and timestamp for anti-replay protection
 149 |             const nonce = crypto.randomUUID();
 150 |             const timestamp = Date.now();
 151 | 
 152 |             const payload = {
 153 |                 password,
 154 |                 nonce,
 155 |                 timestamp
 156 |             };
 157 | 
 158 |             const encrypted = await crypto.subtle.encrypt(
 159 |                 { name: "RSA-OAEP" },
 160 |                 publicKey,
 161 |                 new TextEncoder().encode(JSON.stringify(payload))
 162 |             );
 163 | 
 164 |             return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
 165 |         } catch (error) {
 166 |             console.error("Password encryption failed:", error);
 167 |             throw new Error("Failed to encrypt password: " + (error as Error).message);
 168 |         }
 169 |     }
 170 | }
 171 | 
 172 | export enum WAuthProviders {
 173 |     Google = "google",
 174 |     Github = "github",
 175 |     Discord = "discord",
 176 |     X = "twitter"
 177 | }
 178 | 
 179 | export enum WalletActions {
 180 |     SIGN = "sign",
 181 |     ENCRYPT = "encrypt",
 182 |     DECRYPT = "decrypt",
 183 |     DISPATCH = "dispatch",
 184 |     SIGN_DATA_ITEM = "signDataItem",
 185 |     SIGNATURE = "signature"
 186 | }
 187 | 
 188 | type ModalTypes = "confirm-tx" | "password-new" | "password-existing"
 189 | export type { ModalTypes }
 190 | 
 191 | type ModalPayload = {
 192 |     transaction?: Transaction
 193 |     dataItem?: ArConnectDataItem
 194 |     tokenDetails?: any
 195 |     errorMessage?: string
 196 | }
 197 | export type { ModalPayload }
 198 | 
 199 | type ModalResult = {
 200 |     proceed: boolean,
 201 |     password?: string
 202 | }
 203 | export type { ModalResult }
 204 | 
 205 | export class WauthSigner {
 206 |     private wauth: WAuth;
 207 |     public publicKey: Buffer;
 208 |     public ownerLength = 512;
 209 |     public signatureLength = 512;
 210 |     public signatureType = 1;
 211 | 
 212 |     constructor(wauth: WAuth) {
 213 |         this.wauth = wauth;
 214 |         // Initialize publicKey as empty buffer, will be set in setPublicKey
 215 |         this.publicKey = Buffer.alloc(0);
 216 |         // Immediately set the public key
 217 |         this.setPublicKey().catch(error => {
 218 |             console.error("Failed to set initial public key:", error);
 219 |             throw error;
 220 |         });
 221 |     }
 222 | 
 223 |     async setPublicKey() {
 224 |         try {
 225 |             const arOwner = await this.wauth.getActivePublicKey();
 226 |             this.publicKey = base64url.toBuffer(arOwner);
 227 |             if (this.publicKey.length !== this.ownerLength) {
 228 |                 throw new Error(`Public key length mismatch. Expected ${this.ownerLength} bytes but got ${this.publicKey.length} bytes`);
 229 |             }
 230 |         } catch (error) {
 231 |             console.error("Failed to set public key:", error);
 232 |             throw error;
 233 |         }
 234 |     }
 235 | 
 236 |     async sign(message: Uint8Array): Promise<Uint8Array> {
 237 |         try {
 238 |             if (!this.publicKey.length || this.publicKey.length !== this.ownerLength) {
 239 |                 await this.setPublicKey();
 240 |             }
 241 | 
 242 |             const signature = await this.wauth.signature(message);
 243 |             const buf = new Uint8Array(Object.values(signature).map((v) => +v));
 244 | 
 245 |             if (buf.length !== this.signatureLength) {
 246 |                 throw new Error(`Signature length mismatch. Expected ${this.signatureLength} bytes but got ${buf.length} bytes`);
 247 |             }
 248 | 
 249 |             return buf;
 250 |         } catch (error) {
 251 |             console.error("Sign operation failed:", error);
 252 |             throw error;
 253 |         }
 254 |     }
 255 | 
 256 |     static async verify(pk: string | Buffer, message: Uint8Array, signature: Uint8Array): Promise<boolean> {
 257 |         try {
 258 |             // Convert Buffer to string if needed
 259 |             const publicKeyString = Buffer.isBuffer(pk) ? pk.toString() : pk;
 260 | 
 261 |             // Import the public key for verification
 262 |             const publicJWK: JsonWebKey = {
 263 |                 e: "AQAB",
 264 |                 ext: true,
 265 |                 kty: "RSA",
 266 |                 n: publicKeyString
 267 |             };
 268 | 
 269 |             // Import public key for verification
 270 |             const verificationKey = await crypto.subtle.importKey(
 271 |                 "jwk",
 272 |                 publicJWK,
 273 |                 {
 274 |                     name: "RSA-PSS",
 275 |                     hash: "SHA-256"
 276 |                 },
 277 |                 false,
 278 |                 ["verify"]
 279 |             );
 280 | 
 281 |             // Verify the signature
 282 |             const result = await crypto.subtle.verify(
 283 |                 { name: "RSA-PSS", saltLength: 32 },
 284 |                 verificationKey,
 285 |                 signature,
 286 |                 message
 287 |             );
 288 | 
 289 |             return result;
 290 |         } catch (error: any) {
 291 |             console.error("Verify operation failed:", error?.message || "Unknown error");
 292 |             return false;
 293 |         }
 294 |     }
 295 | }
 296 | 
 297 | async function getTokenDetails(token: string) {
 298 |     const res = await dryrun({
 299 |         process: token,
 300 |         tags: [{ name: "Action", value: "Info" }]
 301 |     })
 302 |     if (res.Messages.length < 1) throw new Error("No info message found")
 303 | 
 304 |     const msg = res.Messages[0]
 305 |     const tags = msg.Tags
 306 |     // transform tags {name,value}[] to {name:value}
 307 |     const tagsObj = tags.reduce((acc: any, tag: any) => {
 308 |         acc[tag.name] = tag.value
 309 |         return acc
 310 |     }, {})
 311 | 
 312 |     return tagsObj
 313 | }
 314 | 
 315 | export class WAuth {
 316 |     static devUrl = "http://localhost:8090"
 317 |     static devBackendUrl = "http://localhost:8091"
 318 |     static prodUrl = "https://wauth.arnode.asia"
 319 |     static prodBackendUrl = "https://wauth-backend.arnode.asia"
 320 | 
 321 |     private pb: PocketBase;
 322 |     private authData: RecordAuthResponse<RecordModel> | null;
 323 |     private wallet: RecordModel | null;
 324 |     private authRecord: RecordModel | null;
 325 |     private backendUrl: string;
 326 |     public static version: string = WAUTH_VERSION;
 327 |     public version: string = WAuth.version;
 328 | 
 329 |     private authDataListeners: ((data: any) => void)[] = [];
 330 |     private sessionPassword: string | null = null; // Store decrypted password in memory only
 331 |     private sessionKey: CryptoKey | null = null; // Key for local session encryption
 332 | 
 333 |     private async initializeSessionKey(): Promise<CryptoKey> {
 334 |         if (this.sessionKey) return this.sessionKey;
 335 | 
 336 |         // Try to load existing session key
 337 |         const storedKey = sessionStorage.getItem('wauth_session_key');
 338 |         if (storedKey) {
 339 |             try {
 340 |                 const keyData = JSON.parse(storedKey);
 341 |                 this.sessionKey = await crypto.subtle.importKey(
 342 |                     'jwk',
 343 |                     keyData,
 344 |                     { name: 'AES-GCM' },
 345 |                     false,
 346 |                     ['encrypt', 'decrypt']
 347 |                 );
 348 |                 return this.sessionKey;
 349 |             } catch (error) {
 350 |                 // If key loading fails, generate a new one
 351 |                 sessionStorage.removeItem('wauth_session_key');
 352 |                 sessionStorage.removeItem('wauth_encrypted_password');
 353 |             }
 354 |         }
 355 | 
 356 |         // Generate new session key
 357 |         this.sessionKey = await crypto.subtle.generateKey(
 358 |             { name: 'AES-GCM', length: 256 },
 359 |             true,
 360 |             ['encrypt', 'decrypt']
 361 |         );
 362 | 
 363 |         // Store the key for the session
 364 |         const exportedKey = await crypto.subtle.exportKey('jwk', this.sessionKey);
 365 |         sessionStorage.setItem('wauth_session_key', JSON.stringify(exportedKey));
 366 | 
 367 |         return this.sessionKey;
 368 |     }
 369 | 
 370 |     private async storePasswordInSession(password: string): Promise<void> {
 371 |         if (typeof window === 'undefined' || !password) return;
 372 | 
 373 |         try {
 374 |             const sessionKey = await this.initializeSessionKey();
 375 |             const encoder = new TextEncoder();
 376 |             const data = encoder.encode(password);
 377 | 
 378 |             // Generate a random IV for each encryption
 379 |             const iv = crypto.getRandomValues(new Uint8Array(12));
 380 | 
 381 |             const encrypted = await crypto.subtle.encrypt(
 382 |                 { name: 'AES-GCM', iv },
 383 |                 sessionKey,
 384 |                 data
 385 |             );
 386 | 
 387 |             // Store encrypted password with IV
 388 |             const encryptedData = {
 389 |                 encrypted: Array.from(new Uint8Array(encrypted)),
 390 |                 iv: Array.from(iv)
 391 |             };
 392 | 
 393 |             sessionStorage.setItem('wauth_encrypted_password', JSON.stringify(encryptedData));
 394 |         } catch (error) {
 395 |             console.error("Failed to store password in session:", error);
 396 |         }
 397 |     }
 398 | 
 399 |     private async loadPasswordFromSession(): Promise<string | null> {
 400 |         if (typeof window === 'undefined') return null;
 401 | 
 402 |         try {
 403 |             const storedData = sessionStorage.getItem('wauth_encrypted_password');
 404 |             if (!storedData) return null;
 405 | 
 406 |             const { encrypted, iv } = JSON.parse(storedData);
 407 |             const sessionKey = await this.initializeSessionKey();
 408 | 
 409 |             const decrypted = await crypto.subtle.decrypt(
 410 |                 { name: 'AES-GCM', iv: new Uint8Array(iv) },
 411 |                 sessionKey,
 412 |                 new Uint8Array(encrypted)
 413 |             );
 414 | 
 415 |             const decoder = new TextDecoder();
 416 |             return decoder.decode(decrypted);
 417 |         } catch (error) {
 418 |             console.error("Failed to load password from session:", error);
 419 |             // Clear invalid data
 420 |             sessionStorage.removeItem('wauth_encrypted_password');
 421 |             return null;
 422 |         }
 423 |     }
 424 | 
 425 |     private clearSessionPassword(): void {
 426 |         if (typeof window !== 'undefined') {
 427 |             sessionStorage.removeItem('wauth_encrypted_password');
 428 |             sessionStorage.removeItem('wauth_session_key');
 429 |         }
 430 |         this.sessionPassword = null;
 431 |         this.sessionKey = null;
 432 |     }
 433 | 
 434 |     private clearAllAuthData(): void {
 435 |         // Clear session password and storage
 436 |         this.clearSessionPassword();
 437 | 
 438 |         // Clear PocketBase auth data
 439 |         this.pb.authStore.clear();
 440 | 
 441 |         // Clear additional localStorage items if any
 442 |         if (typeof window !== 'undefined') {
 443 |             // Clear any PocketBase auth data from localStorage
 444 |             localStorage.removeItem('pocketbase_auth');
 445 |             // Clear any other wauth-related items
 446 |             Object.keys(localStorage).forEach(key => {
 447 |                 if (key.startsWith('wauth_')) {
 448 |                     localStorage.removeItem(key);
 449 |                 }
 450 |             });
 451 |         }
 452 | 
 453 |         // Reset instance variables
 454 |         this.authData = null;
 455 |         this.wallet = null;
 456 |         this.authRecord = null;
 457 | 
 458 |         console.log("[wauth] Cleared all authentication data");
 459 |     }
 460 | 
 461 |     constructor({ dev = false, url, backendUrl }: { dev?: boolean, url?: string, backendUrl?: string }) {
 462 |         this.pb = new PocketBase(url || (dev ? WAuth.devUrl : WAuth.prodUrl));
 463 |         this.backendUrl = backendUrl || (dev ? WAuth.devBackendUrl : WAuth.prodBackendUrl);
 464 |         this.authData = null;
 465 |         this.wallet = null;
 466 |         this.authRecord = null;
 467 |         this.sessionPassword = null;
 468 |         this.sessionKey = null;
 469 | 
 470 |         // Load password from session storage on initialization
 471 |         if (typeof window !== 'undefined') {
 472 |             this.loadPasswordFromSession().then(async password => {
 473 |                 if (password) {
 474 |                     this.sessionPassword = password;
 475 |                     // Try to load wallet if user is already authenticated
 476 |                     if (this.isLoggedIn()) {
 477 |                         try {
 478 |                             this.wallet = await this.getWallet();
 479 |                         } catch (error) {
 480 |                             console.warn("Could not load wallet after session restore:", error);
 481 |                         }
 482 |                     }
 483 |                 }
 484 |             }).catch(error => {
 485 |                 console.error("Failed to load session password:", error);
 486 |             });
 487 |         }
 488 | 
 489 |         this.pb.authStore.onChange(async (token, record) => {
 490 |             if (!record || !localStorage.getItem("pocketbase_auth")) {
 491 |                 return
 492 |             }
 493 |             this.authRecord = record;
 494 |             this.authData = this.getAuthData();
 495 | 
 496 |             // Only try to get wallet if we have a session password
 497 |             // This prevents the race condition during connect()
 498 |             if (this.sessionPassword) {
 499 |                 try {
 500 |                     this.wallet = await this.getWallet();
 501 |                 } catch (error) {
 502 |                     console.warn("[wauth] Could not get wallet in auth change handler:", error);
 503 |                 }
 504 |             }
 505 | 
 506 |             this.authDataListeners.forEach(listener => listener(this.getAuthData()));
 507 |         }, true)
 508 |     }
 509 | 
 510 |     onAuthDataChange(callback: (data: any) => void): void {
 511 |         this.authDataListeners.push(callback);
 512 |         if (this.authData) {
 513 |             callback(this.authData);
 514 |         }
 515 |     }
 516 | 
 517 |     private async runAction(action: WalletActions, payload: any = {}) {
 518 |         // make sure the user is logged in
 519 |         if (!this.isLoggedIn()) throw new Error("[wauth] Not logged in")
 520 | 
 521 |         // make sure the wallet is connected
 522 |         if (!this.wallet) this.wallet = await this.getWallet()
 523 |         if (!this.wallet) throw new Error("[wauth] No wallet found")
 524 | 
 525 |         // Helper to show modal and await result
 526 |         const showModal = (type: ModalTypes, payload: ModalPayload): Promise<ModalResult> => {
 527 |             return new Promise((resolve) => {
 528 |                 this.createModal(type, payload, (result) => {
 529 |                     resolve(result)
 530 |                 })
 531 |             })
 532 |         }
 533 | 
 534 |         switch (action) {
 535 |             case WalletActions.SIGN:
 536 |                 // check for Action=Transfer Tag and ask user for approval
 537 |                 if (payload && payload.transaction && payload.transaction.tags) {
 538 |                     const actionTag = payload.transaction.tags.find((tag: Tag) => tag.name === "Action");
 539 |                     if (actionTag?.value === "Transfer") {
 540 |                         // Show modal and await user confirmation
 541 |                         const result = await showModal("confirm-tx", { transaction: payload.transaction })
 542 |                         if (!result.proceed) {
 543 |                             throw new Error("[wauth] Transaction cancelled by user")
 544 |                         }
 545 |                     }
 546 |                 }
 547 |                 break;
 548 |             case WalletActions.SIGN_DATA_ITEM:
 549 |                 // check for Action=Transfer Tag and ask user for approval
 550 |                 if (payload && payload.dataItem && payload.dataItem.tags) {
 551 |                     const actionTag = payload.dataItem.tags.find((tag: Tag) => tag.name === "Action");
 552 |                     if (actionTag?.value === "Transfer") {
 553 |                         // Show modal and await user confirmation
 554 |                         const result = await showModal("confirm-tx", { dataItem: payload.dataItem })
 555 |                         if (!result.proceed) {
 556 |                             throw new Error("[wauth] Transaction cancelled by user")
 557 |                         }
 558 |                     }
 559 |                 }
 560 |                 break;
 561 |         }
 562 | 
 563 |         // Encrypt session password for backend
 564 |         if (!this.sessionPassword) {
 565 |             throw new Error("Session password not available - please reconnect");
 566 |         }
 567 | 
 568 |         const encryptedPassword = await PasswordEncryption.encryptPassword(this.sessionPassword, this.backendUrl);
 569 | 
 570 |         // send the action, payload, and encrypted password to the backend
 571 |         const res = await axios.post(`${this.backendUrl}/wallet-action`, {
 572 |             action,
 573 |             payload,
 574 |             encryptedPassword
 575 |         }, {
 576 |             headers: {
 577 |                 "Content-Type": "application/json",
 578 |                 "Accept": "application/json",
 579 |                 "Authorization": `Bearer ${this.getAuthToken()}`
 580 |             },
 581 |             responseType: 'json'
 582 |         })
 583 |         return res.data
 584 |     }
 585 | 
 586 |     // There can be 2 types of modals:
 587 |     // 1. Transaction verification- for when the user is about to transfer tokens and needs user confirmation,
 588 |     //    this modal would have info text, amount to be transfered, and proceed/cancel buttons
 589 |     // 2. Password input modal- either when user is connecting for the first time (ask for password and confirm password)
 590 |     //    or when they already have an account and just logging in (ask for password),
 591 |     //    this will be send in an encrypted way to the backend for use with decoding JWK
 592 |     public async createModal(type: ModalTypes, payload: ModalPayload = {}, callback: (result: ModalResult) => void) {
 593 |         // if type is confirm-tx, check payload.transaction or payload.dataItem and tell the user that some tokens are being transferred and its details, and ask for confirmation
 594 |         // if type is password-new, ask for password and confirm password
 595 |         // if type is password-existing, ask for password and return it
 596 |         // based on the users actions, call the callback with the result
 597 | 
 598 |         const container = createModalContainer()
 599 | 
 600 |         // Create modal immediately with current payload
 601 |         const modal = createModal(type, payload, (result) => {
 602 |             // Remove the modal container from the DOM after callback
 603 |             if (container.parentNode) {
 604 |                 container.parentNode.removeChild(container)
 605 |             }
 606 |             callback(result)
 607 |         })
 608 |         container.appendChild(modal)
 609 | 
 610 |         // Add powered by element as sibling to modal content
 611 |         const powered = document.createElement("div")
 612 |         powered.className = "wauth-powered"
 613 | 
 614 |         // Use secure link creation instead of innerHTML
 615 |         const poweredLink = HTMLSanitizer.createSafeLink("https://wauth_subspace.ar.io", "powered by wauth", "_blank")
 616 |         powered.appendChild(poweredLink)
 617 | 
 618 |         powered.style.position = "absolute"
 619 |         powered.style.bottom = "20px"
 620 |         powered.style.textAlign = "center"
 621 |         powered.style.fontSize = "0.9rem"
 622 |         powered.style.color = "rgba(255, 255, 255, 0.5)"
 623 |         powered.style.opacity = "0.8"
 624 |         powered.style.letterSpacing = "0.5px"
 625 |         powered.style.fontWeight = "500"
 626 |         powered.style.left = "0"
 627 |         powered.style.right = "0"
 628 |         powered.style.transition = "all 0.2s ease"
 629 |         powered.style.textShadow = "0 1px 2px rgba(0, 0, 0, 0.5)"
 630 | 
 631 |         // Style the link directly
 632 |         poweredLink.style.color = "inherit"
 633 |         poweredLink.style.textDecoration = "none"
 634 |         poweredLink.style.transition = "all 0.2s ease"
 635 |         poweredLink.style.borderRadius = "8px"
 636 |         poweredLink.style.padding = "6px 12px"
 637 |         poweredLink.style.background = "rgba(255, 255, 255, 0.05)"
 638 |         poweredLink.style.backdropFilter = "blur(10px)"
 639 |         poweredLink.style.border = "1px solid rgba(255, 255, 255, 0.1)"
 640 | 
 641 |         poweredLink.onmouseover = () => {
 642 |             poweredLink.style.color = "rgba(255, 255, 255, 0.9)"
 643 |             poweredLink.style.background = "rgba(255, 255, 255, 0.1)"
 644 |             poweredLink.style.borderColor = "rgba(255, 255, 255, 0.2)"
 645 |             poweredLink.style.transform = "translateY(-1px)"
 646 |             poweredLink.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
 647 |         }
 648 |         poweredLink.onmouseleave = () => {
 649 |             poweredLink.style.color = "rgba(255, 255, 255, 0.5)"
 650 |             poweredLink.style.background = "rgba(255, 255, 255, 0.05)"
 651 |             poweredLink.style.borderColor = "rgba(255, 255, 255, 0.1)"
 652 |             poweredLink.style.transform = "translateY(0)"
 653 |             poweredLink.style.boxShadow = "none"
 654 |         }
 655 |         container.appendChild(powered)
 656 | 
 657 |         document.body.appendChild(container)
 658 | 
 659 |         // Now fetch token details asynchronously and update the modal
 660 |         if (type === "confirm-tx") {
 661 |             const data = payload.transaction || payload.dataItem
 662 | 
 663 |             if (data && data.target) {
 664 |                 try {
 665 |                     const tokenDetails = await getTokenDetails(data.target)
 666 | 
 667 |                     // Update the modal with token details
 668 |                     const enhancedPayload = { ...payload, tokenDetails }
 669 |                     const updatedModal = createModal(type, enhancedPayload, (result) => {
 670 |                         // Remove the modal container from the DOM after callback
 671 |                         if (container.parentNode) {
 672 |                             container.parentNode.removeChild(container)
 673 |                         }
 674 |                         callback(result)
 675 |                     })
 676 | 
 677 |                     // Replace the existing modal content (keep powered by element)
 678 |                     container.replaceChild(updatedModal, modal)
 679 | 
 680 |                 } catch (error) {
 681 |                     console.warn("[wauth] Failed to fetch token details:", error)
 682 |                     // Modal continues to work without token details
 683 |                 }
 684 |             }
 685 |         }
 686 |     }
 687 | 
 688 |     public async connect({ provider, scopes }: { provider: WAuthProviders, scopes?: string[] }) {
 689 |         if (!Object.values(WAuthProviders).includes(provider)) throw new Error(`Invalid provider: ${provider}. Valid providers are: ${Object.values(WAuthProviders).join(", ")}`)
 690 | 
 691 |         try {
 692 |             this.authData = await this.pb.collection("users").authWithOAuth2({ provider, scopes })
 693 |             this.authDataListeners.forEach(listener => listener(this.getAuthData()));
 694 |         } catch (e) {
 695 |             console.error("[wauth] error logging in,", e)
 696 |             return null;
 697 |         }
 698 | 
 699 |         if (!this.isLoggedIn()) return null;
 700 | 
 701 |         // Small delay to ensure OAuth process is fully completed
 702 |         await new Promise(resolve => setTimeout(resolve, 100));
 703 | 
 704 |         // Verify backend connectivity
 705 |         try {
 706 |             const response = await fetch(`${this.backendUrl}/`);
 707 |             if (!response.ok) {
 708 |                 throw new Error(`Backend not accessible: ${response.status}`);
 709 |             }
 710 |         } catch (error) {
 711 |             console.error("Backend connectivity check failed:", error);
 712 |             throw new Error("Cannot connect to backend server. Please try again later.");
 713 |         }
 714 | 
 715 |         try {
 716 |             // Check if user has an existing wallet
 717 |             const existingWallet = await this.checkExistingWallet();
 718 | 
 719 |             if (existingWallet) {
 720 |                 // Existing user - ask for password to decrypt wallet using modal
 721 |                 let passwordResult: ModalResult;
 722 |                 let attempts = 0;
 723 |                 const maxAttempts = 3;
 724 |                 let errorMessage = "";
 725 | 
 726 |                 do {
 727 |                     passwordResult = await new Promise<ModalResult>((resolve) => {
 728 |                         this.createModal("password-existing", { errorMessage }, resolve);
 729 |                     });
 730 | 
 731 |                     if (!passwordResult.proceed || !passwordResult.password) {
 732 |                         // User cancelled - clear all authentication data
 733 |                         this.clearAllAuthData();
 734 |                         throw new Error("Password required to access existing wallet");
 735 |                     }
 736 | 
 737 |                     // Verify password before storing it
 738 |                     const isValidPassword = await this.verifyPassword(passwordResult.password);
 739 |                     if (isValidPassword) {
 740 |                         break; // Password is valid, exit loop
 741 |                     }
 742 | 
 743 |                     attempts++;
 744 |                     if (attempts >= maxAttempts) {
 745 |                         throw new Error("Too many failed password attempts. Please try again later.");
 746 |                     }
 747 | 
 748 |                     // Set error message for next modal display
 749 |                     errorMessage = `Invalid password. Please try again. (${maxAttempts - attempts} attempts remaining)`;
 750 |                 } while (attempts < maxAttempts);
 751 | 
 752 |                 // Store password in session for future use
 753 |                 this.sessionPassword = passwordResult.password;
 754 |                 await this.storePasswordInSession(passwordResult.password);
 755 | 
 756 |                 // Get wallet (password is already verified)
 757 |                 this.wallet = await this.getWallet();
 758 |             } else {
 759 |                 // New user - ask for password to create wallet using modal
 760 |                 const result = await new Promise<ModalResult>((resolve) => {
 761 |                     this.createModal("password-new", {}, resolve);
 762 |                 });
 763 | 
 764 |                 if (!result.proceed || !result.password) {
 765 |                     // User cancelled - clear all authentication data
 766 |                     this.clearAllAuthData();
 767 |                     throw new Error("Password required to create wallet");
 768 |                 }
 769 | 
 770 |                 // Store password in session
 771 |                 this.sessionPassword = result.password;
 772 |                 await this.storePasswordInSession(result.password);
 773 | 
 774 |                 // Create new wallet
 775 |                 this.wallet = await this.getWallet();
 776 |             }
 777 | 
 778 |             if (!this.wallet) {
 779 |                 console.error("[wauth] no wallet found")
 780 |                 throw new Error("Failed to create or access wallet")
 781 |             }
 782 |         } catch (e) {
 783 |             console.error("[wauth]", e)
 784 |             // Clear all authentication data on error
 785 |             this.clearAllAuthData();
 786 |             throw e;
 787 |         }
 788 | 
 789 |         return this.getAuthData();
 790 |     }
 791 | 
 792 |     private async checkExistingWallet(): Promise<boolean> {
 793 |         try {
 794 |             // Ensure we have a user record
 795 |             if (!this.pb.authStore.record?.id) {
 796 |                 return false;
 797 |             }
 798 | 
 799 |             const userId = this.pb.authStore.record.id;
 800 | 
 801 |             // Use getList instead of getFirstListItem to avoid 404 when no records exist
 802 |             const result = await this.pb.collection("wallets").getList(1, 1, {
 803 |                 filter: `user.id = "${userId}"`
 804 |             });
 805 | 
 806 |             return result.totalItems > 0;
 807 |         } catch (e) {
 808 |             console.error("Error checking for existing wallet:", e);
 809 |             return false;
 810 |         }
 811 |     }
 812 | 
 813 |     private async verifyPassword(password: string): Promise<boolean> {
 814 |         try {
 815 |             // Encrypt password for backend
 816 |             const encryptedPassword = await PasswordEncryption.encryptPassword(password, this.backendUrl);
 817 | 
 818 |             // Call verification endpoint
 819 |             const response = await fetch(`${this.backendUrl}/verify-password`, {
 820 |                 method: 'POST',
 821 |                 headers: {
 822 |                     'Content-Type': 'application/json',
 823 |                     'encrypted-password': encryptedPassword,
 824 |                     'Authorization': `Bearer ${this.getAuthToken()}`
 825 |                 }
 826 |             });
 827 | 
 828 |             if (!response.ok) {
 829 |                 return false;
 830 |             }
 831 | 
 832 |             const result = await response.json();
 833 |             return result.valid === true;
 834 |         } catch (error) {
 835 |             console.error("Password verification failed:", error);
 836 |             return false;
 837 |         }
 838 |     }
 839 | 
 840 |     public async addConnectedWallet(address: string, pkey: string, signature: string) {
 841 |         if (!this.isLoggedIn()) throw new Error("Not logged in")
 842 |         if (!this.wallet) this.wallet = await this.getWallet()
 843 |         if (!this.wallet) throw new Error("No wallet found")
 844 | 
 845 |         const token = this.getAuthToken()
 846 |         if (!token) throw new Error("No auth token")
 847 | 
 848 |         const res = await fetch(`${this.backendUrl}/connect-wallet`, {
 849 |             method: "POST",
 850 |             headers: {
 851 |                 "Content-Type": "application/json",
 852 |                 "Authorization": `Bearer ${token}`
 853 |             },
 854 |             body: JSON.stringify({ address, pkey, signature })
 855 |         })
 856 |         const data = await res.json()
 857 |         return data
 858 |     }
 859 | 
 860 |     public isLoggedIn() {
 861 |         return this.pb.authStore.isValid;
 862 |     }
 863 | 
 864 |     public async getActiveAddress(): Promise<string> {
 865 |         if (!this.isLoggedIn()) throw new Error("Not logged in")
 866 |         if (!this.wallet) this.wallet = await this.getWallet()
 867 |         return this.wallet?.address || ""
 868 |     }
 869 | 
 870 |     public async getActivePublicKey(): Promise<string> {
 871 |         if (!this.isLoggedIn()) throw new Error("Not logged in")
 872 |         if (!this.wallet) this.wallet = await this.getWallet()
 873 |         return this.wallet?.public_key || ""
 874 |     }
 875 | 
 876 |     public async getPermissions(): Promise<PermissionType[]> {
 877 |         return ["ACCESS_ADDRESS" as PermissionType, "SIGN_TRANSACTION" as PermissionType]
 878 |     }
 879 | 
 880 |     public async getWalletNames() {
 881 |         return { [await this.getActiveAddress()]: "WAuth" }
 882 |     }
 883 | 
 884 |     public async getArweaveConfig(): Promise<GatewayConfig> {
 885 |         // TODO: make this configurable
 886 |         const config: GatewayConfig = {
 887 |             host: "arweave.net",
 888 |             port: 443,
 889 |             protocol: "https",
 890 |         };
 891 | 
 892 |         return config
 893 |     }
 894 | 
 895 |     public getAuthData() {
 896 |         if (!this.isLoggedIn()) return null;
 897 |         return this.authData
 898 |     }
 899 | 
 900 |     public getAuthToken(): string | null {
 901 |         if (!this.isLoggedIn()) return null;
 902 |         if (!this.pb.authStore.token) return null;
 903 |         return this.pb.authStore.token
 904 |     }
 905 | 
 906 |     public async getWallet() {
 907 |         if (!this.isLoggedIn()) {
 908 |             return null;
 909 |         }
 910 | 
 911 |         if (!this.sessionPassword) {
 912 |             throw new Error("Session password not available - please reconnect");
 913 |         }
 914 | 
 915 |         // Ensure we have a user record
 916 |         if (!this.pb.authStore.record?.id) {
 917 |             throw new Error("User record not available - please log in again");
 918 |         }
 919 | 
 920 |         const userId = this.pb.authStore.record.id;
 921 | 
 922 |         try {
 923 |             // Use getList instead of getFirstListItem to avoid 404 when no records exist
 924 |             const result = await this.pb.collection("wallets").getList(1, 1, {
 925 |                 filter: `user.id = "${userId}"`
 926 |             });
 927 | 
 928 |             if (result.totalItems > 0) {
 929 |                 // Existing wallet found
 930 |                 this.wallet = result.items[0];
 931 |                 return this.wallet;
 932 |             } else {
 933 |                 // No wallet exists, create one
 934 |                 const encryptedPassword = await PasswordEncryption.encryptPassword(this.sessionPassword, this.backendUrl);
 935 |                 const encryptedConfirmPassword = await PasswordEncryption.encryptPassword(this.sessionPassword, this.backendUrl);
 936 | 
 937 |                 await this.pb.collection("wallets").create({}, {
 938 |                     headers: {
 939 |                         "encrypted-password": encryptedPassword,
 940 |                         "encrypted-confirm-password": encryptedConfirmPassword
 941 |                     }
 942 |                 });
 943 | 
 944 |                 // Use getList instead of getFirstListItem to avoid 404 if creation failed
 945 |                 const createdResult = await this.pb.collection("wallets").getList(1, 1, {
 946 |                     filter: `user.id = "${userId}"`
 947 |                 });
 948 | 
 949 |                 if (createdResult.totalItems === 0) {
 950 |                     throw new Error("Failed to create wallet - no record found after creation");
 951 |                 }
 952 | 
 953 |                 this.wallet = createdResult.items[0];
 954 |                 return this.wallet;
 955 |             }
 956 |         } catch (e: any) {
 957 |             if (`${e}`.includes("autocancelled")) return null
 958 | 
 959 |             // Check if this is a password-related error
 960 |             if (e.message && e.message.includes("decrypt") || e.message.includes("password")) {
 961 |                 this.clearSessionPassword(); // Clear invalid password
 962 |                 throw new Error("Invalid password - please reconnect and try again");
 963 |             }
 964 | 
 965 |             console.error("Error in getWallet:", e.message || e);
 966 |             throw e; // Re-throw to preserve error handling in connect()
 967 |         }
 968 |     }
 969 | 
 970 |     public async getConnectedWallets() {
 971 |         const res = await this.pb.collection("connected_wallets").getFullList({
 972 |             filter: `user.id = "${this.pb.authStore.record?.id}"`
 973 |         })
 974 |         return res
 975 |     }
 976 | 
 977 |     public async removeConnectedWallet(walletId: string) {
 978 |         if (!this.isLoggedIn()) throw new Error("Not logged in")
 979 | 
 980 |         try {
 981 |             // First verify the wallet belongs to the current user
 982 |             const wallet = await this.pb.collection("connected_wallets").getOne(walletId, {
 983 |                 filter: `user.id = "${this.pb.authStore.record?.id}"`
 984 |             })
 985 | 
 986 |             if (!wallet) {
 987 |                 throw new Error("Wallet not found or not owned by current user")
 988 |             }
 989 | 
 990 |             // Delete the wallet record
 991 |             await this.pb.collection("connected_wallets").delete(walletId)
 992 | 
 993 |             return { success: true, walletId }
 994 |         } catch (error) {
 995 |             console.error("Error removing connected wallet:", error)
 996 |             throw error
 997 |         }
 998 |     }
 999 | 
1000 |     getAuthRecord() {
1001 |         if (!this.isLoggedIn()) return null;
1002 |         return this.authRecord
1003 |     }
1004 | 
1005 |     pocketbase() {
1006 |         return this.pb;
1007 |     }
1008 | 
1009 |     public async sign(transaction: Transaction, options?: SignatureOptions) {
1010 |         if (options) console.warn("[wauth] Signature options are not supported yet")
1011 | 
1012 |         return await this.runAction(WalletActions.SIGN, { transaction: transaction.toJSON() })
1013 |     }
1014 | 
1015 |     public async signature(data: Uint8Array, algorithm?: AlgorithmIdentifier | RsaPssParams | EcdsaParams): Promise<Uint8Array> {
1016 |         if (algorithm) {
1017 |             console.warn("[wauth] Signature algorithm is not supported and Rsa4096Pss will be used by default")
1018 |         }
1019 |         return Object.values(await this.runAction(WalletActions.SIGNATURE, { data })) as any
1020 |     }
1021 | 
1022 |     public async signAns104(dataItem: ArConnectDataItem): Promise<{ id: string, raw: ArrayBuffer }> {
1023 |         return await this.runAction(WalletActions.SIGN_DATA_ITEM, { dataItem })
1024 |     }
1025 | 
1026 |     public async signDataItem(dataItem: ArConnectDataItem): Promise<ArrayBuffer> {
1027 |         return (await this.runAction(WalletActions.SIGN_DATA_ITEM, { dataItem })).raw
1028 |     }
1029 | 
1030 |     public getWauthSigner(): WauthSigner {
1031 |         return new WauthSigner(this)
1032 |     }
1033 | 
1034 |     public getAoSigner() {
1035 |         if (!this.isLoggedIn()) throw new Error("Not logged in")
1036 |         if (!this.wallet) throw new Error("No wallet found")
1037 | 
1038 |         return async (create: any, createDataItem: any) => {
1039 |             const { data, tags, target, anchor } = await create({ alg: 'rsa-v1_5-sha256', passthrough: true });
1040 |             const signedDataItem = await this.signAns104({ data, tags, target, anchor })
1041 |             const dataItem = new DataItem(Buffer.from(signedDataItem.raw))
1042 |             return { id: dataItem.id, raw: dataItem.getRaw() }
1043 |         }
1044 |     }
1045 | 
1046 |     public hasSessionPassword(): boolean {
1047 |         return this.sessionPassword !== null;
1048 |     }
1049 | 
1050 |     public async refreshWallet(): Promise<void> {
1051 |         if (this.isLoggedIn() && this.sessionPassword) {
1052 |             try {
1053 |                 this.wallet = await this.getWallet();
1054 |             } catch (error) {
1055 |                 console.error("Failed to refresh wallet:", error);
1056 |                 throw error;
1057 |             }
1058 |         }
1059 |     }
1060 | 
1061 |     public logout() {
1062 |         this.clearAllAuthData();
1063 |     }
1064 | }


--------------------------------------------------------------------------------
/sdk/src/version.ts:
--------------------------------------------------------------------------------
1 | export const WAUTH_VERSION = "0.0.12";
2 | 


--------------------------------------------------------------------------------
/sdk/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "lib": ["ES2022", "DOM", "DOM.Iterable"],
 5 |     "module": "ESNext",
 6 |     "moduleResolution": "bundler",
 7 |     "allowSyntheticDefaultImports": true,
 8 |     "esModuleInterop": true,
 9 |     "allowJs": false,
10 |     "skipLibCheck": true,
11 |     "strict": true,
12 |     "forceConsistentCasingInFileNames": true,
13 |     "resolveJsonModule": true,
14 |     "isolatedModules": true,
15 |     "declaration": true,
16 |     "declarationMap": true,
17 |     "sourceMap": true,
18 |     "outDir": "./dist",
19 |     "removeComments": false,
20 |     "importHelpers": true,
21 |     "verbatimModuleSyntax": true
22 |   },
23 |   "include": [
24 |     "src/index.ts"
25 |   ],
26 |   "exclude": [
27 |     "node_modules",
28 |     "dist"
29 |   ]
30 | }
31 | 


--------------------------------------------------------------------------------
/strategy/.gitignore:
--------------------------------------------------------------------------------
 1 | # dependencies (bun install)
 2 | node_modules
 3 | 
 4 | # output
 5 | out
 6 | *.tgz
 7 | 
 8 | # code coverage
 9 | coverage
10 | *.lcov
11 | 
12 | # logs
13 | logs
14 | _.log
15 | report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json
16 | 
17 | # dotenv environment variable files
18 | .env
19 | .env.development.local
20 | .env.test.local
21 | .env.production.local
22 | .env.local
23 | 
24 | # caches
25 | .eslintcache
26 | .cache
27 | *.tsbuildinfo
28 | 
29 | # IntelliJ based IDEs
30 | .idea
31 | 
32 | # Finder (MacOS) folder config
33 | .DS_Store
34 | 
35 | dist


--------------------------------------------------------------------------------
/strategy/README.md:
--------------------------------------------------------------------------------
  1 | # @wauth/strategy
  2 | 
  3 | The WAuthStrategy is a wrapper around [@wauth/sdk](../sdk) that makes the Social Auth SDK compatible with [Arweave Wallet Kit](https://www.npmjs.com/package/@arweave-wallet-kit/react). It provides a seamless integration for React applications to use Web2 social authentication with Arweave.
  4 | 
  5 | ## Installation
  6 | 
  7 | ```bash
  8 | npm i @wauth/strategy@latest
  9 | ```
 10 | 
 11 | ## Setup & Usage
 12 | 
 13 | ### 1. Create Strategy Helper
 14 | 
 15 | First, create a helper file to manage your social auth strategies:
 16 | 
 17 | ```ts
 18 | // lib/strategy.ts
 19 | import WAuthStrategy, { WAuthProviders } from "@wauth/strategy";
 20 | 
 21 | const strategies: { [key: string]: WAuthStrategy } = {
 22 |     [WAuthProviders.Google]: new WAuthStrategy({ provider: WAuthProviders.Google }),
 23 |     [WAuthProviders.Github]: new WAuthStrategy({ provider: WAuthProviders.Github }),
 24 |     [WAuthProviders.Discord]: new WAuthStrategy({ provider: WAuthProviders.Discord })
 25 | }
 26 | 
 27 | export function getStrategy(provider: WAuthProviders): WAuthStrategy {
 28 |     return strategies[provider]
 29 | }
 30 | 
 31 | // Optional: Helper to get active provider
 32 | export function getActiveWAuthProvider(): WAuthProviders {
 33 |     let provider = localStorage.getItem("wallet_kit_strategy_id")
 34 |     if (!provider || !provider.startsWith("wauth")) return null
 35 |     
 36 |     provider = provider.split("-")[1]
 37 |     switch (provider) {
 38 |         case WAuthProviders.Google: return WAuthProviders.Google
 39 |         case WAuthProviders.Github: return WAuthProviders.Github
 40 |         case WAuthProviders.Discord: return WAuthProviders.Discord
 41 |         default: return null
 42 |     }
 43 | }
 44 | ```
 45 | 
 46 | ### 2. Add to Arweave Wallet Kit
 47 | 
 48 | Add the strategies to your Arweave Wallet Kit configuration:
 49 | 
 50 | ```tsx
 51 | // App.tsx or main.tsx
 52 | import { ArweaveWalletKit } from '@arweave-wallet-kit/react'
 53 | import { getStrategy } from './lib/strategy'
 54 | import { WAuthProviders } from '@wauth/strategy'
 55 | import type { Strategy } from '@arweave-wallet-kit/core/strategy'
 56 | 
 57 | export default function Main() {
 58 |     const strategies = [
 59 |         getStrategy(WAuthProviders.Github),
 60 |         getStrategy(WAuthProviders.Google),
 61 |         getStrategy(WAuthProviders.Discord)
 62 |     ]
 63 | 
 64 |     return (
 65 |         <ArweaveWalletKit
 66 |             config={{
 67 |                 strategies: strategies as Strategy[],
 68 |                 permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"],
 69 |                 appInfo: {
 70 |                     name: "Your App",
 71 |                     logo: "your-logo-url"
 72 |                 }
 73 |             }}>
 74 |             <App />
 75 |         </ArweaveWalletKit>
 76 |     )
 77 | }
 78 | ```
 79 | 
 80 | ### 3. Fix Connection State
 81 | 
 82 | Add the connection fix to your app component to handle page refreshes correctly:
 83 | 
 84 | ```tsx
 85 | // App.tsx
 86 | import { useActiveAddress, useConnection } from "@arweave-wallet-kit/react"
 87 | import { fixConnection } from "@wauth/strategy"
 88 | 
 89 | export default function App() {
 90 |     const address = useActiveAddress()
 91 |     const { connected, disconnect } = useConnection()
 92 | 
 93 |     // Fix connection state on page refresh
 94 |     useEffect(() => fixConnection(address, connected, disconnect), [address, connected, disconnect])
 95 | 
 96 |     return (
 97 |         // Your app content
 98 |     )
 99 | }
100 | ```
101 | 
102 | ### 4. Using the Wallet Features
103 | 
104 | Access all wallet features through the Arweave Wallet Kit hooks:
105 | 
106 | ```tsx
107 | import { useApi } from "@arweave-wallet-kit/react"
108 | 
109 | function YourComponent() {
110 |     const api = useApi()
111 | 
112 |     // Sign transactions
113 |     const signedTx = await api.sign(transaction)
114 | 
115 |     // Sign data
116 |     const signature = await api.signature(data)
117 | 
118 |     // Use AO Protocol
119 |     const signer = api.getAoSigner()
120 |     const ao = connect({ MODE: "legacy" })
121 |     const res = await ao.message({
122 |         process: processId,
123 |         data: "Hello AO!",
124 |         tags: [{ name: "Action", value: "Info" }],
125 |         signer: signer
126 |     })
127 | 
128 |     // Manage connected wallets
129 |     // This is just a QOL feature that allows users to declare any other wallets that they own
130 |     const wallets = await api.getConnectedWallets()
131 |     await api.addConnectedWallet(window.arweaveWallet)
132 |     await api.removeConnectedWallet(walletId)
133 |     console.log(wallets)
134 | }
135 | ```
136 | 
137 | ## Demo
138 | 
139 | Check out our [live demo](https://subspace-dev.github.io/wauth) to see all features in action:
140 | 
141 | ![WAuth with Arweave Wallet Kit](https://raw.githubusercontent.com/ankushKun/wauth/refs/heads/main/assets/awk.gif)
142 | 
143 | ## Learn More
144 | 
145 | - [SDK Documentation](../sdk/README.md)
146 | - [Demo Implementation](../demo/)
147 | 


--------------------------------------------------------------------------------
/strategy/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@wauth/strategy",
 3 |   "version": "0.0.12",
 4 |   "description": "WAuth strategy for Arweave Wallet Kit",
 5 |   "repository": {
 6 |     "type": "git",
 7 |     "url": "git+https://github.com/subspace-dev/wauth.git#main"
 8 |   },
 9 |   "homepage": "https://github.com/subspace-dev/wauth/tree/main/strategy",
10 |   "type": "module",
11 |   "publishConfig": {
12 |     "access": "public"
13 |   },
14 |   "scripts": {
15 |     "build": "npm run clean && tsc",
16 |     "clean": "rm -rf dist",
17 |     "dev": "tsc --watch",
18 |     "prepublishOnly": "npm run build",
19 |     "publish-npm": "npm run build && npm publish --access public"
20 |   },
21 |   "files": [
22 |     "dist"
23 |   ],
24 |   "main": "./dist/index.js",
25 |   "module": "./dist/index.js",
26 |   "types": "./dist/index.d.ts",
27 |   "exports": {
28 |     ".": {
29 |       "types": "./dist/index.d.ts",
30 |       "import": "./dist/index.js"
31 |     }
32 |   },
33 |   "keywords": [
34 |     "arweave",
35 |     "ao",
36 |     "auth",
37 |     "decentralized",
38 |     "web2"
39 |   ],
40 |   "author": "Ankush Singh <ankush@arweave.org>",
41 |   "license": "MIT",
42 |   "dependencies": {
43 |     "@arweave-wallet-kit/core": "^0.1.1",
44 |     "@dha-team/arbundles": "^1.0.3",
45 |     "@wauth/sdk": "file:../sdk",
46 |     "axios": "^1.10.0",
47 |     "vite-plugin-node-polyfills": "^0.24.0"
48 |   },
49 |   "devDependencies": {
50 |     "@types/node": "^24.0.7",
51 |     "arconnect": "^1.0.4",
52 |     "arweave": "^2.0.0-ec.1",
53 |     "typescript": "^5.8.3"
54 |   }
55 | }


--------------------------------------------------------------------------------
/strategy/src/index.ts:
--------------------------------------------------------------------------------
  1 | import { Strategy } from "@arweave-wallet-kit/core/strategy";
  2 | import type {
  3 |     AppInfo,
  4 |     DispatchResult,
  5 |     GatewayConfig,
  6 |     PermissionType,
  7 |     DataItem as ArConnectDataItem
  8 | } from "arconnect";
  9 | import Transaction from "arweave/web/lib/transaction";
 10 | import type { SignatureOptions } from "arweave/web/lib/crypto/crypto-interface";
 11 | import { WAuth, WAuthProviders } from "@wauth/sdk";
 12 | import { DataItem } from "@dha-team/arbundles/web";
 13 | 
 14 | export default class WAuthStrategy implements Strategy {
 15 |     public id: string = "wauth";
 16 |     public name = "WAuth";
 17 |     public description = "WAuth";
 18 |     public theme = "25,25,25";
 19 |     public logo = "94R-dRRMdFerUnt8HuQzWT48ktgKsgjQ0uH6zlMFXVw";
 20 |     public url = "https://subspace.ar.io"
 21 |     private walletRef: WAuth;
 22 |     private provider: WAuthProviders;
 23 |     private addressListeners: ((address: string) => void)[] = [];
 24 |     private scopes: string[];
 25 | 
 26 |     private authData: any;
 27 |     private authDataListeners: ((data: any) => void)[] = [];
 28 | 
 29 |     private windowArweaveWalletBackup: any;
 30 | 
 31 |     private logos: { [key in WAuthProviders]: string } = {
 32 |         [WAuthProviders.Google]: "mc-lqDefUJZdDSOOqepLICrfEoQCACnS51tB3kKqvlk",
 33 |         [WAuthProviders.Github]: "2bcLcWjuuRFDqFHlUvgvX2MzA2hOlZL1ED-T8OFBwCY",
 34 |         [WAuthProviders.Discord]: "i4Lw4kXr5t57p8E1oOVGMO4vR35TlYsaJ9XYbMMVd8I",
 35 |         [WAuthProviders.X]: "WEcpgXgwGO1PwuIAucwXHUiJ5HWHwkaYTUaAN4wlqQA"
 36 |     }
 37 | 
 38 |     getWindowWalletInterface() {
 39 |         return {
 40 |             walletName: "WAuth",
 41 |             walletVersion: this.walletRef.version,
 42 |             connect: this.connect,
 43 |             disconnect: this.disconnect,
 44 |             getActiveAddress: this.getActiveAddress,
 45 |             getAllAddresses: this.getAllAddresses,
 46 |             sign: this.sign,
 47 |             getPermissions: this.getPermissions,
 48 |             getWalletNames: this.getWalletNames,
 49 |             encrypt: this.encrypt,
 50 |             decrypt: this.decrypt,
 51 |             getArweaveConfig: this.getArweaveConfig,
 52 |             isAvailable: this.isAvailable,
 53 |             dispatch: this.dispatch,
 54 |             signDataItem: this.signDataItem,
 55 |             addAddressEvent: this.addAddressEvent,
 56 |             removeAddressEvent: this.removeAddressEvent,
 57 |             getActivePublicKey: this.getActivePublicKey,
 58 |             getConnectedWallets: this.getConnectedWallets,
 59 |             removeConnectedWallet: this.removeConnectedWallet
 60 |         }
 61 |     }
 62 | 
 63 | 
 64 |     constructor({ provider, scopes = [] }: { provider: WAuthProviders, scopes?: string[] }) {
 65 |         this.provider = provider
 66 |         this.scopes = scopes
 67 |         console.log("provider", provider)
 68 |         this.id = this.id + "-" + this.provider
 69 |         this.name = `${this.provider.charAt(0).toUpperCase() + this.provider.slice(1).toLowerCase()}`
 70 |         this.walletRef = new WAuth({}) // auto reconnects based on localStorage
 71 |         this.authData = this.walletRef.getAuthData();
 72 |         this.logo = this.logos[provider]
 73 |         this.windowArweaveWalletBackup = null;
 74 |         if (window.arweaveWallet && window.arweaveWallet.walletName != "WAuth") {
 75 |             this.windowArweaveWalletBackup = window.arweaveWallet
 76 |             // window.arweaveWallet = this.getWindowWalletInterface() as any
 77 |             // console.log("injected wauth into window.arweaveWallet")
 78 |         }
 79 |     }
 80 | 
 81 |     public async connect(permissions?: PermissionType[]): Promise<void> {
 82 |         if (permissions) {
 83 |             console.warn("WAuth does not support custom permissions")
 84 |         }
 85 |         console.log("scopes", this.scopes)
 86 |         const data = await this.walletRef.connect({ provider: this.provider, scopes: this.scopes })
 87 |         if (data) {
 88 |             this.authData = data?.meta
 89 |             this.authDataListeners.forEach(listener => listener(data?.meta));
 90 |         }
 91 |     }
 92 | 
 93 |     public async reconnect(): Promise<any> {
 94 |         const data = await this.walletRef.connect({ provider: this.provider, scopes: this.scopes })
 95 |         if (data) {
 96 |             this.authData = data?.meta
 97 |             this.authDataListeners.forEach(listener => listener(this.authData));
 98 |         }
 99 |         return this.authData
100 |     }
101 | 
102 |     public onAuthDataChange(callback: (data: any) => void): void {
103 |         this.authDataListeners.push(callback);
104 |     }
105 | 
106 |     public getAuthData(): any {
107 |         return this.walletRef.getAuthData();
108 |     }
109 | 
110 |     public async addConnectedWallet(ArweaveWallet: any) {
111 |         const address = await ArweaveWallet.getActiveAddress()
112 |         const pkey = await ArweaveWallet.getActivePublicKey()
113 |         if (!address) { throw new Error("No address found") }
114 |         if (!pkey) { throw new Error("No public key found") }
115 | 
116 |         // Connect with SIGNATURE permission if not already connected
117 |         await ArweaveWallet.connect(["SIGNATURE"])
118 | 
119 |         // Create message data and encode it - exactly as shown in docs
120 |         const data = new TextEncoder().encode(JSON.stringify({ address, pkey }));
121 | 
122 |         // Sign the message - Wander will hash it internally with SHA-256
123 |         const signature = await ArweaveWallet.signMessage(data);
124 |         const signatureString = Buffer.from(signature).toString("base64")
125 | 
126 |         const resData = await this.walletRef.addConnectedWallet(address, pkey, signatureString)
127 |         return resData
128 |     }
129 | 
130 |     public async removeConnectedWallet(walletId: string) {
131 |         const resData = await this.walletRef.removeConnectedWallet(walletId)
132 |         console.log(resData)
133 |         return resData
134 |     }
135 | 
136 |     public async disconnect(): Promise<void> {
137 |         this.walletRef.logout()
138 |         this.authData = null;
139 |     }
140 | 
141 |     public async getActiveAddress(): Promise<string> {
142 |         return await this.walletRef.getActiveAddress();
143 |     }
144 | 
145 |     public async getAllAddresses(): Promise<string[]> {
146 |         return [await this.getActiveAddress()]
147 |     }
148 | 
149 |     public async getActivePublicKey(): Promise<string> {
150 |         return await this.walletRef.getActivePublicKey()
151 |     }
152 | 
153 |     public async getConnectedWallets(): Promise<any[]> {
154 |         return await this.walletRef.getConnectedWallets()
155 |     }
156 | 
157 |     public async sign(transaction: Transaction, options?: SignatureOptions): Promise<Transaction> {
158 |         return await this.walletRef.sign(transaction as any, options)
159 |     }
160 | 
161 |     public async getPermissions(): Promise<PermissionType[]> {
162 |         return await this.walletRef.getPermissions()
163 |     }
164 | 
165 |     public async getWalletNames(): Promise<Record<string, string>> {
166 |         return await this.walletRef.getWalletNames()
167 |     }
168 | 
169 |     public encrypt(
170 |         data: BufferSource,
171 |         options: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams
172 |     ): Promise<Uint8Array> {
173 |         throw new Error("Encrypt is not implemented in WAuth yet");
174 |     }
175 | 
176 |     public decrypt(
177 |         data: BufferSource,
178 |         options: RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams
179 |     ): Promise<Uint8Array> {
180 |         throw new Error("Decrypt is not implemented in WAuth yet");
181 |     }
182 | 
183 |     public async getArweaveConfig(): Promise<GatewayConfig> {
184 |         return await this.walletRef.getArweaveConfig();
185 |     }
186 | 
187 |     public async isAvailable(): Promise<boolean> {
188 |         return true
189 |     }
190 | 
191 |     public async dispatch(transaction: Transaction): Promise<DispatchResult> {
192 |         throw new Error("Dispatch is not implemented in WAuth yet")
193 |     }
194 | 
195 |     public async signDataItem(dataItem: ArConnectDataItem): Promise<ArrayBuffer> {
196 |         return (await this.walletRef.signDataItem(dataItem))
197 |     }
198 | 
199 |     public async signature(data: Uint8Array, algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams): Promise<Uint8Array> {
200 |         return (await this.walletRef.signature(data, algorithm))
201 |     }
202 | 
203 |     public async signAns104(dataItem: ArConnectDataItem): Promise<{ id: string, raw: ArrayBuffer }> {
204 |         return (await this.walletRef.signAns104(dataItem))
205 |     }
206 | 
207 |     public addAddressEvent(listener: (address: string) => void): (e: CustomEvent<{ address: string }>) => void {
208 |         this.addressListeners.push(listener);
209 |         return listener as any;
210 |     }
211 | 
212 |     public removeAddressEvent(listener: (e: CustomEvent<{ address: string }>) => void): void {
213 |         this.addressListeners.splice(this.addressListeners.indexOf(listener as any), 1);
214 |     }
215 | 
216 |     public getAoSigner() {
217 |         return async (create: any, createDataItem: any) => {
218 |             const { data, tags, target, anchor } = await create({ alg: 'rsa-v1_5-sha256', passthrough: true });
219 |             const signedDataItem = await this.signAns104({ data, tags, target, anchor })
220 |             const dataItem = new DataItem(Buffer.from(signedDataItem.raw))
221 |             return { id: dataItem.id, raw: dataItem.getRaw() }
222 |         }
223 |     }
224 | }
225 | 
226 | function shouldDisconnect(address: string | undefined, connected: boolean) {
227 |     if (connected && !address && !localStorage.getItem("pocketbase_auth")) {
228 |         return true
229 |     }
230 |     return false
231 | }
232 | 
233 | function fixConnection(address: string | undefined, connected: boolean, disconnect: () => void) {
234 |     if (shouldDisconnect(address, connected)) {
235 |         localStorage.removeItem("pocketbase_auth")
236 |         localStorage.removeItem("wallet_kit_strategy_id")
237 |         disconnect()
238 |     }
239 | }
240 | 
241 | export { WAuthProviders, fixConnection }
242 | 
243 | 


--------------------------------------------------------------------------------
/strategy/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2022",
 4 |     "lib": ["ES2022", "DOM", "DOM.Iterable"],
 5 |     "module": "ESNext",
 6 |     "moduleResolution": "bundler",
 7 |     "allowSyntheticDefaultImports": true,
 8 |     "esModuleInterop": true,
 9 |     "allowJs": false,
10 |     "skipLibCheck": true,
11 |     "strict": true,
12 |     "forceConsistentCasingInFileNames": true,
13 |     "resolveJsonModule": true,
14 |     "isolatedModules": true,
15 |     "declaration": true,
16 |     "declarationMap": true,
17 |     "sourceMap": true,
18 |     "outDir": "./dist",
19 |     "removeComments": false,
20 |     "importHelpers": true,
21 |     "verbatimModuleSyntax": true
22 |   },
23 |   "include": ["src/**/*"],
24 |   "exclude": [
25 |     "node_modules",
26 |     "dist"
27 |   ]
28 | }


--------------------------------------------------------------------------------