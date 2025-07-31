├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
    └── vite.svg
├── src
    ├── App.css
    ├── App.tsx
    ├── appConfig.ts
    ├── assets
    │   └── react.svg
    ├── data
    │   ├── genres.ts
    │   └── license.ts
    ├── hooks
    │   ├── useConnect.tsx
    │   ├── useDynamicForm.tsx
    │   ├── useIrys.tsx
    │   ├── useTurbo.tsx
    │   └── useWallet.tsx
    ├── index.css
    ├── lib
    │   ├── account
    │   │   ├── api.ts
    │   │   └── index.ts
    │   ├── arweave.ts
    │   ├── audioDuration.ts
    │   ├── irys.ts
    │   ├── turbo.ts
    │   └── upload.ts
    ├── main.tsx
    ├── modules
    │   ├── home
    │   │   └── index.tsx
    │   ├── layout
    │   │   ├── AppHeader.tsx
    │   │   └── HeaderDropdown.tsx
    │   ├── upload
    │   │   ├── DetailsDialog.tsx
    │   │   ├── UploadDialog.tsx
    │   │   ├── components
    │   │   │   ├── Dropzone.tsx
    │   │   │   ├── FormHelperAccordion.tsx
    │   │   │   ├── FormSelect.tsx
    │   │   │   ├── ImageDropContainer.tsx
    │   │   │   └── TrackItem.tsx
    │   │   ├── index.tsx
    │   │   └── schema.ts
    │   └── wallet
    │   │   ├── CheckBalances.tsx
    │   │   ├── ConnectWallet.tsx
    │   │   ├── ConnectWalletDialog.tsx
    │   │   ├── FundNodeDialog.tsx
    │   │   ├── TurboDialog.tsx
    │   │   └── components
    │   │       ├── ArconnectLogo.tsx
    │   │       ├── ArweaveLogo.tsx
    │   │       └── ConnectIcon.tsx
    ├── router
    │   └── index.tsx
    ├── stitches.config.ts
    ├── styles
    │   ├── Home.module.css
    │   ├── colors
    │   │   ├── alpha.ts
    │   │   ├── blue.ts
    │   │   ├── green.ts
    │   │   ├── red.ts
    │   │   ├── slate.ts
    │   │   ├── violet.ts
    │   │   └── yellow.ts
    │   └── globals.css
    ├── types
    │   ├── arconnect.d.ts
    │   ├── ardrive.d.ts
    │   ├── declaration.d.ts
    │   ├── env.d.ts
    │   └── index.ts
    ├── ui
    │   ├── Accordion.tsx
    │   ├── Avatar.ts
    │   ├── Box.ts
    │   ├── Button.ts
    │   ├── Container.tsx
    │   ├── ControlGroup.ts
    │   ├── Dialog.tsx
    │   ├── Dropdown.ts
    │   ├── Flex.ts
    │   ├── Form.tsx
    │   ├── IconButton.ts
    │   ├── Image.ts
    │   ├── Label.tsx
    │   ├── Loader.ts
    │   ├── Popover.tsx
    │   ├── Progress.ts
    │   ├── RadioGroup.tsx
    │   ├── Select.tsx
    │   ├── Skeleton.ts
    │   ├── Slider.ts
    │   ├── Tabs.ts
    │   ├── TextField.ts
    │   ├── Textarea.ts
    │   ├── Typography.ts
    │   └── animations
    │   │   └── SuccessCheckmark.tsx
    ├── utils
    │   └── index.ts
    └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


/.eslintrc.cjs:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   env: { browser: true, es2020: true },
 3 |   extends: [
 4 |     'eslint:recommended',
 5 |     // 'plugin:@typescript-eslint/recommended',
 6 |     'plugin:react-hooks/recommended',
 7 |   ],
 8 |   // parser: '@typescript-eslint/parser',
 9 |   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
10 |   plugins: ['react-refresh'],
11 |   rules: {
12 |     'react-refresh/only-export-components': 'warn',
13 |   },
14 | }
15 | 


--------------------------------------------------------------------------------
/.gitignore:
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
11 | dist*
12 | dist-ssr
13 | *.local
14 | tsconfig.tsbuildinfo
15 | 
16 | # Editor directories and files
17 | .vscode/*
18 | !.vscode/extensions.json
19 | .idea
20 | .DS_Store
21 | *.suo
22 | *.ntvs*
23 | *.njsproj
24 | *.sln
25 | *.sw?
26 | 


--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
1 | {}


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
1 | Permaweb Vite template ⚡


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en" class="dark-theme">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 7 |     <title>Permaweb Music Uploader</title>
 8 |   </head>
 9 |   <body>
10 |     <div id="root"></div>
11 |     <script type="module" src="/src/main.tsx"></script>
12 |   </body>
13 | </html>
14 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "permaweb-vite",
 3 |   "private": true,
 4 |   "version": "0.0.0",
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "dev": "vite",
 8 |     "build": "tsc && rm -rf dist* && vite build",
 9 |     "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
10 |     "preview": "vite preview --port 8080",
11 |     "upload": "pnpm build && irys upload-dir ./dist -h https://node2.irys.xyz --wallet /Users/Shared/wallet1.json -t arweave --index-file index.html --no-confirmation"
12 |   },
13 |   "dependencies": {
14 |     "@hookform/resolvers": "3.3.2",
15 |     "@irys/sdk": "0.0.4",
16 |     "@next/font": "13.1.6",
17 |     "@radix-ui/react-accordion": "1.1.2",
18 |     "@radix-ui/react-avatar": "1.0.4",
19 |     "@radix-ui/react-dialog": "1.0.5",
20 |     "@radix-ui/react-dropdown-menu": "2.0.6",
21 |     "@radix-ui/react-label": "0.1.5",
22 |     "@radix-ui/react-popover": "1.0.7",
23 |     "@radix-ui/react-progress": "1.0.3",
24 |     "@radix-ui/react-radio-group": "1.1.3",
25 |     "@radix-ui/react-select": "2.0.0",
26 |     "@radix-ui/react-slider": "1.1.2",
27 |     "@radix-ui/react-tabs": "1.0.4",
28 |     "@stitches/react": "1.2.8",
29 |     "@tanstack/react-query": "4.28.0",
30 |     "arbundles": "0.10.0",
31 |     "arconnect": "1.0.3",
32 |     "arweave": "1.13.7",
33 |     "arweave-account": "1.4.3",
34 |     "arweave-graphql": "0.0.5",
35 |     "arweave-wallet-connector": "1.0.2",
36 |     "bignumber.js": "9.1.2",
37 |     "filereader-stream": "2.0.0",
38 |     "react": "18.2.0",
39 |     "react-beautiful-dnd": "13.1.1",
40 |     "react-dom": "18.2.0",
41 |     "react-dropzone": "14.2.3",
42 |     "react-hook-form": "7.47.0",
43 |     "react-icons": "4.7.1",
44 |     "react-router-dom": "6.11.2",
45 |     "sonner": "1.1.0",
46 |     "vite-plugin-node-polyfills": "0.17.0",
47 |     "warp-contracts": "1.4.25",
48 |     "warp-contracts-plugin-deploy": "1.0.12",
49 |     "zod": "3.22.4"
50 |   },
51 |   "devDependencies": {
52 |     "@types/react": "18.0.37",
53 |     "@types/react-dom": "18.0.11",
54 |     "@typescript-eslint/eslint-plugin": "5.59.0",
55 |     "@typescript-eslint/parser": "5.59.0",
56 |     "@vitejs/plugin-react": "4.0.0",
57 |     "eslint": "8.38.0",
58 |     "eslint-plugin-react-hooks": "4.6.0",
59 |     "eslint-plugin-react-refresh": "0.3.4",
60 |     "typescript": "5.0.2",
61 |     "vite": "4.3.9"
62 |   },
63 |   "homepage": "./"
64 | }
65 | 


--------------------------------------------------------------------------------
/public/vite.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>


--------------------------------------------------------------------------------
/src/App.css:
--------------------------------------------------------------------------------
 1 | #root {
 2 |   max-width: 1280px;
 3 |   margin: 0 auto;
 4 |   padding: 2rem;
 5 |   text-align: center;
 6 | }
 7 | 
 8 | .container {
 9 |   display: grid;
10 |   place-items: center;
11 | }
12 | 
13 | .logo {
14 |   height: 6em;
15 |   padding: 1.5em;
16 |   will-change: filter;
17 |   transition: filter 300ms;
18 | }
19 | .logo:hover {
20 |   filter: drop-shadow(0 0 2em #646cffaa);
21 | }
22 | .logo.react:hover {
23 |   filter: drop-shadow(0 0 2em #61dafbaa);
24 | }
25 | 
26 | @keyframes logo-spin {
27 |   from {
28 |     transform: rotate(0deg);
29 |   }
30 |   to {
31 |     transform: rotate(360deg);
32 |   }
33 | }
34 | 
35 | @media (prefers-reduced-motion: no-preference) {
36 |   a:nth-of-type(2) .logo {
37 |     animation: logo-spin infinite 20s linear;
38 |   }
39 | }
40 | 
41 | .card {
42 |   padding: 2em;
43 | }
44 | 
45 | .read-the-docs {
46 |   color: #888;
47 | }
48 | 


--------------------------------------------------------------------------------
/src/App.tsx:
--------------------------------------------------------------------------------
 1 | import { RouterProvider, createHashRouter } from "react-router-dom";
 2 | import { AppRouter } from "./router";
 3 | import { Home } from "./modules/home";
 4 | import { Upload } from "./modules/upload";
 5 | 
 6 | const router = createHashRouter([
 7 |   {
 8 |     path: "/",
 9 |     element: <Home />,
10 |   },
11 |   {
12 |     path: "/upload",
13 |     element: <Upload />,
14 |   },
15 | ]);
16 | 
17 | function App() {
18 |   return <RouterProvider router={router} />;
19 | }
20 | 
21 | export default App;
22 | 


--------------------------------------------------------------------------------
/src/appConfig.ts:
--------------------------------------------------------------------------------
 1 | export const appConfig = {
 2 |   defaultGateway: "https://g8way.io",
 3 |   goldskyUrl: "https://arweave-search.goldsky.com",
 4 |   dreU: "https://dre-u.warp.cc/contract",
 5 |   U: "KTzTXT_ANmF84fWEKHzWURD1LWd9QaFR9yfYUwH2Lxw",
 6 |   UCM: "tfalT8Z-88riNtoXdF5ldaBtmsfcSmbMqWLh2DHJIbg",
 7 |   UDL: "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8",
 8 |   accountBannerDefault:
 9 |     "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
10 |   accountAvatarDefault:
11 |     "https://arweave.net:443/OrG-ZG2WN3wdcwvpjz1ihPe4MI24QBJUpsJGIdL85wA",
12 | };
13 | 


--------------------------------------------------------------------------------
/src/assets/react.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>


--------------------------------------------------------------------------------
/src/data/genres.ts:
--------------------------------------------------------------------------------
 1 | export const genres = [
 2 |   "none",
 3 |   "acoustic",
 4 |   "afrobeat",
 5 |   "alternative",
 6 |   "ambient",
 7 |   "classical",
 8 |   "country",
 9 |   "dance/edm",
10 |   "electronic",
11 |   "hip-hop/rap",
12 |   "jazz",
13 |   "pop",
14 |   "punk",
15 |   "r&b/soul",
16 |   "reggae",
17 |   "rock",
18 | ] as const;
19 | 


--------------------------------------------------------------------------------
/src/data/license.ts:
--------------------------------------------------------------------------------
 1 | export const udl = {
 2 |   type: ["public-use", "attribution", "allowed", "noncommercial"] as const,
 3 |   derivationOpts: [
 4 |     "with-credit",
 5 |     "with-indication",
 6 |     "with-passthrough",
 7 |     "with-revenue-share",
 8 |   ] as const,
 9 |   commercialOpts: ["with-credit", "with-fee"] as const,
10 |   feeRecurrenceOpts: ["one-time", "monthly"] as const,
11 |   currencyOpts: ["AR", "U"] as const,
12 |   paymentModeOpts: ["global", "random"] as const,
13 | };
14 | 
15 | export type UDLValues = typeof udl;
16 | 


--------------------------------------------------------------------------------
/src/hooks/useConnect.tsx:
--------------------------------------------------------------------------------
  1 | import React, { useEffect, useState } from "react";
  2 | import {
  3 |   ArweaveConfig,
  4 |   ConnectProps,
  5 |   PermaProfile,
  6 |   Vouched,
  7 |   WebWallet,
  8 | } from "../types";
  9 | import { account } from "../lib/account";
 10 | import { PermissionType } from "arconnect";
 11 | 
 12 | const ConnectContext = React.createContext<{
 13 |   walletAddress?: string;
 14 |   addresses?: string[];
 15 |   profile?: PermaProfile;
 16 |   connecting?: boolean;
 17 |   reconnect?: boolean;
 18 |   currentProvider?: "arweave.app" | "arconnect";
 19 |   vouched?: Vouched;
 20 |   config?: ArweaveConfig;
 21 |   connect: (props: ConnectProps) => void;
 22 |   disconnect: () => void;
 23 |   completeConnection: (
 24 |     address: string,
 25 |     addresses: [],
 26 |     config?: ArweaveConfig
 27 |   ) => void;
 28 |   setState: React.Dispatch<
 29 |     React.SetStateAction<{
 30 |       connecting?: boolean;
 31 |       reconnect?: boolean;
 32 |       currentProvider?: "arweave.app" | "arconnect";
 33 |       walletAddress?: string | undefined;
 34 |       addresses?: string[] | [];
 35 |       profile?: PermaProfile | undefined;
 36 |       vouched?: Vouched | undefined;
 37 |       config?: ArweaveConfig | undefined;
 38 |     }>
 39 |   >;
 40 | }>({
 41 |   connecting: false,
 42 |   setState: () => {},
 43 |   connect: () => {},
 44 |   disconnect: () => {},
 45 |   completeConnection: () => {},
 46 | });
 47 | 
 48 | interface ConnectProviderProps {
 49 |   webWallet?: typeof WebWallet;
 50 |   includeProfile?: boolean;
 51 |   shouldReconnect?: string | null;
 52 |   detectWalletSwitch?: boolean;
 53 |   children: React.ReactNode;
 54 | }
 55 | 
 56 | const ConnectProvider = ({
 57 |   children,
 58 |   webWallet,
 59 |   includeProfile,
 60 |   shouldReconnect,
 61 |   detectWalletSwitch,
 62 | }: ConnectProviderProps) => {
 63 |   const [state, setState] = useState<{
 64 |     connecting?: boolean;
 65 |     reconnect?: boolean;
 66 |     currentProvider?: "arweave.app" | "arconnect";
 67 |     walletAddress?: string;
 68 |     addresses?: string[];
 69 |     profile?: PermaProfile;
 70 |     vouched?: Vouched;
 71 |     config?: ArweaveConfig;
 72 |   }>({
 73 |     connecting: false,
 74 |   });
 75 | 
 76 |   useEffect(() => {
 77 |     window.addEventListener("walletSwitch", (e) => handleWalletSwitch(e));
 78 |     return window.removeEventListener("walletSwitch", handleWalletSwitch);
 79 |   }, []);
 80 | 
 81 |   const handleWalletSwitch = (e: CustomEvent<{ address: string }>) => {
 82 |     const address = e.detail.address;
 83 |     if (detectWalletSwitch) {
 84 |       setState((prevValues) => ({ ...prevValues, walletAddress: address }));
 85 |     }
 86 |   };
 87 | 
 88 |   useEffect(() => {
 89 |     if (shouldReconnect) {
 90 |       setState((prevValues) => ({
 91 |         ...prevValues,
 92 |         reconnect: true,
 93 |         currentProvider: shouldReconnect as "arweave.app" | "arconnect",
 94 |         connecting: true,
 95 |       }));
 96 | 
 97 |       if (shouldReconnect === "arweave.app") {
 98 |         handleArweaveAppAutoConnect();
 99 |       } else {
100 |         handleArconnectAutoConnect();
101 |       }
102 |     } else {
103 |       setState((prevValues) => ({ ...prevValues, reconnect: false }));
104 |     }
105 |   }, [shouldReconnect]);
106 | 
107 |   const handleArweaveAppAutoConnect = async () => {
108 |     webWallet?.on("connect", async (params) => {
109 |       let permaProfile: PermaProfile | undefined = undefined;
110 | 
111 |       if (includeProfile) {
112 |         const acc = account.init({ gateway: undefined });
113 |         permaProfile = await acc.get(params);
114 |       }
115 | 
116 |       if (permaProfile) {
117 |         setState((prevValues) => ({
118 |           ...prevValues,
119 |           walletAddress: params,
120 |           profile: permaProfile,
121 |           connecting: false,
122 |         }));
123 |       } else {
124 |         setState((prevValues) => ({
125 |           ...prevValues,
126 |           walletAddress: params,
127 |           connecting: false,
128 |         }));
129 |       }
130 |     });
131 |   };
132 | 
133 |   const handleArconnectAutoConnect = async () => {
134 |     if (shouldReconnect && shouldReconnect === "arconnect") {
135 |       try {
136 |         const address = await window.arweaveWallet.getActiveAddress();
137 | 
138 |         let permaProfile: PermaProfile | undefined = undefined;
139 | 
140 |         if (includeProfile) {
141 |           const acc = account.init({ gateway: undefined });
142 |           permaProfile = await acc.get(address);
143 |         }
144 | 
145 |         if (permaProfile) {
146 |           setState((prevValues) => ({
147 |             ...prevValues,
148 |             walletAddress: address,
149 |             profile: permaProfile,
150 |             connecting: false,
151 |           }));
152 |         } else {
153 |           setState((prevValues) => ({
154 |             ...prevValues,
155 |             walletAddress: address,
156 |             connecting: false,
157 |           }));
158 |         }
159 |       } catch (error) {
160 |         console.error(error);
161 |         setState((prevValues) => ({ ...prevValues, connecting: false }));
162 |       }
163 |     }
164 |   };
165 | 
166 |   const connect = async (props: ConnectProps) => {
167 |     try {
168 |       if (props.walletProvider === "arweave.app") {
169 |         await connectWithArweaveApp(props.permissions);
170 |       }
171 |       if (props.walletProvider === "arconnect") {
172 |         await connectWithArconnect(props.permissions);
173 |       }
174 |     } catch (e) {
175 |       console.error(e);
176 |       setState((prevValues) => ({ ...prevValues, connecting: false }));
177 |     }
178 |   };
179 | 
180 |   const connectWithArweaveApp = async (
181 |     requestedPermissions?: PermissionType[]
182 |   ) => {
183 |     if (!webWallet) {
184 |       throw new Error("Must provide an instance of ArweaveWebWallet");
185 |     }
186 | 
187 |     setState((prevValues) => ({
188 |       ...prevValues,
189 |       currentProvider: "arweave.app",
190 |     }));
191 | 
192 |     try {
193 |       if (!webWallet.url) {
194 |         webWallet.setUrl("https://arweave.app");
195 |       }
196 | 
197 |       await webWallet.connect();
198 | 
199 |       const address = webWallet.address;
200 | 
201 |       let config: ArweaveConfig | undefined = undefined;
202 | 
203 |       if (requestedPermissions?.includes("ACCESS_ARWEAVE_CONFIG")) {
204 |         config = (await webWallet.getArweaveConfig()) as ArweaveConfig;
205 |       }
206 | 
207 |       if (!address) {
208 |         throw new Error(
209 |           "Oops something went wrong when connecting with Arweave.app! Please try again."
210 |         );
211 |       }
212 | 
213 |       completeConnection(address, [], config);
214 |     } catch (error) {
215 |       throw new Error(error as any);
216 |     }
217 |   };
218 | 
219 |   const connectWithArconnect = async (
220 |     requestedPermissions?: PermissionType[]
221 |   ) => {
222 |     if (!requestedPermissions) {
223 |       throw new Error("You must at least add one permission");
224 |     }
225 | 
226 |     setState((preValues) => ({ ...preValues, currentProvider: "arconnect" }));
227 | 
228 |     let currentPermissions: PermissionType[] = [];
229 | 
230 |     let address = "";
231 |     let config = {} as ArweaveConfig;
232 |     let addresses: string[] = [];
233 | 
234 |     currentPermissions = await window.arweaveWallet.getPermissions();
235 | 
236 |     try {
237 |       if (currentPermissions.length <= 0) {
238 |         await window.arweaveWallet.connect(requestedPermissions);
239 | 
240 |         address = await window.arweaveWallet.getActiveAddress();
241 | 
242 |         currentPermissions = await window.arweaveWallet.getPermissions();
243 | 
244 |         if (currentPermissions.includes("ACCESS_ALL_ADDRESSES")) {
245 |           addresses = await window.arweaveWallet.getAllAddresses();
246 |         }
247 | 
248 |         if (currentPermissions.includes("ACCESS_ARWEAVE_CONFIG")) {
249 |           config = await window.arweaveWallet.getArweaveConfig();
250 |         }
251 | 
252 |         await completeConnection(address, addresses, config);
253 |       } else {
254 |         address = await window.arweaveWallet.getActiveAddress();
255 | 
256 |         if (currentPermissions.includes("ACCESS_ALL_ADDRESSES")) {
257 |           addresses = await window.arweaveWallet.getAllAddresses();
258 |         }
259 | 
260 |         if (currentPermissions.includes("ACCESS_ARWEAVE_CONFIG")) {
261 |           config = await window.arweaveWallet.getArweaveConfig();
262 |         }
263 | 
264 |         await completeConnection(address, addresses, config);
265 |       }
266 |     } catch (error) {
267 |       console.error(error);
268 |       await window.arweaveWallet.connect(requestedPermissions);
269 |     }
270 |   };
271 | 
272 |   const completeConnection = async (
273 |     address: string,
274 |     addresses: string[],
275 |     config?: ArweaveConfig
276 |   ) => {
277 |     const walletConfig = config && `${config?.protocol}://${config?.host}`;
278 |     const stateConfig =
279 |       state.config && `${state.config?.protocol}://${state.config?.host}`;
280 |     const gateway = walletConfig || stateConfig || undefined;
281 |     let permaProfile: PermaProfile | undefined = undefined;
282 | 
283 |     if (!address) {
284 |       throw new Error("No address found");
285 |     }
286 | 
287 |     if (includeProfile) {
288 |       const acc = account.init({ gateway });
289 |       permaProfile = await acc.get(address);
290 |     }
291 | 
292 |     if (permaProfile) {
293 |       setState((prevValues) => ({
294 |         ...prevValues,
295 |         walletAddress: address,
296 |         addresses,
297 |         profile: permaProfile,
298 |         config: config || state.config,
299 |         connecting: false,
300 |       }));
301 |     } else {
302 |       setState((prevValues) => ({
303 |         ...prevValues,
304 |         walletAddress: address,
305 |         addresses,
306 |         config: config || state.config,
307 |         connecting: false,
308 |       }));
309 |     }
310 |   };
311 | 
312 |   const disconnect = () => {
313 |     window.arweaveWallet.disconnect().then(() => {
314 |       setState((prevValues) => ({
315 |         walletAddress: "",
316 |         reconnect: prevValues.reconnect,
317 |         currentProvider: prevValues.currentProvider,
318 |       }));
319 |     });
320 |   };
321 | 
322 |   return (
323 |     <ConnectContext.Provider
324 |       value={{
325 |         walletAddress: state.walletAddress,
326 |         addresses: state.addresses,
327 |         profile: state.profile,
328 |         connecting: state.connecting,
329 |         reconnect: state.reconnect,
330 |         currentProvider: state.currentProvider,
331 |         setState: setState,
332 |         vouched: state.vouched,
333 |         config: state.config,
334 |         connect,
335 |         disconnect,
336 |         completeConnection,
337 |       }}
338 |     >
339 |       {children}
340 |     </ConnectContext.Provider>
341 |   );
342 | };
343 | 
344 | const useConnect = () => React.useContext(ConnectContext);
345 | 
346 | export { ConnectProvider, useConnect };
347 | 


--------------------------------------------------------------------------------
/src/hooks/useDynamicForm.tsx:
--------------------------------------------------------------------------------
 1 | import { Track, UploadSchema, uploadSchema } from "@/modules/upload/schema";
 2 | import { useFieldArray, useForm } from "react-hook-form";
 3 | import { zodResolver } from "@hookform/resolvers/zod";
 4 | 
 5 | export const useDynamicForm = () => {
 6 |   const form = useForm<UploadSchema>({
 7 |     // resolver: zodResolver(uploadSchema),
 8 |     defaultValues: {
 9 |       genre: "none",
10 |       // test: [{ name: "Hello", value: "World" }],
11 |     },
12 |   });
13 | 
14 |   const { fields, append, remove } = useFieldArray({
15 |     control: form.control,
16 |     name: "tracklist",
17 |   });
18 | 
19 |   // const handleAppend = (track: Track) => append(track);
20 | 
21 |   // const handleRemove = (index: number) => {
22 |   //   remove(index);
23 |   // };
24 | 
25 |   return { form, fields, append, remove };
26 | };
27 | 


--------------------------------------------------------------------------------
/src/hooks/useIrys.tsx:
--------------------------------------------------------------------------------
 1 | import { IrysOpts } from "@/types";
 2 | import React, { useEffect, useState } from "react";
 3 | 
 4 | const IrysContext = React.createContext<IrysOpts>({
 5 |   init: {
 6 |     token: "arweave",
 7 |     node: "node2",
 8 |   },
 9 |   setState: () => {},
10 | });
11 | 
12 | interface IrysProviderProps {
13 |   children: React.ReactNode;
14 | }
15 | 
16 | const IrysProvider = ({ children }: IrysProviderProps) => {
17 |   const [state, setState] = useState<Omit<IrysOpts, "setState">>({
18 |     init: {
19 |       token: "arweave",
20 |       node: "node2",
21 |     },
22 |   });
23 | 
24 |   return (
25 |     <IrysContext.Provider
26 |       value={{
27 |         init: state.init,
28 |         uploader: state.uploader,
29 |         setState: setState,
30 |       }}
31 |     >
32 |       {children}
33 |     </IrysContext.Provider>
34 |   );
35 | };
36 | 
37 | const useIrys = () => React.useContext(IrysContext);
38 | 
39 | export { IrysProvider, useIrys };
40 | 


--------------------------------------------------------------------------------
/src/hooks/useTurbo.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useEffect, useState } from "react";
 2 | 
 3 | const TurboContext = React.createContext<{
 4 |   balance?: string;
 5 |   setState: React.Dispatch<
 6 |     React.SetStateAction<{
 7 |       balance?: string;
 8 |     }>
 9 |   >;
10 | }>({
11 |   setState: () => {},
12 | });
13 | 
14 | interface TurboProviderProps {
15 |   children: React.ReactNode;
16 | }
17 | 
18 | const TurboProvider = ({ children }: TurboProviderProps) => {
19 |   const [state, setState] = useState<{
20 |     balance?: string;
21 |   }>({});
22 | 
23 |   useEffect(() => {
24 |     window.addEventListener("walletSwitch", (e) => handleWalletSwitch(e));
25 |     return window.removeEventListener("walletSwitch", handleWalletSwitch);
26 |   }, []);
27 | 
28 |   const handleWalletSwitch = (e: CustomEvent<{ address: string }>) => {
29 |     setState({ balance: undefined });
30 |   };
31 | 
32 |   return (
33 |     <TurboContext.Provider
34 |       value={{
35 |         balance: state.balance,
36 |         setState: setState,
37 |       }}
38 |     >
39 |       {children}
40 |     </TurboContext.Provider>
41 |   );
42 | };
43 | 
44 | const useTurbo = () => React.useContext(TurboContext);
45 | 
46 | export { TurboProvider, useTurbo };
47 | 


--------------------------------------------------------------------------------
/src/hooks/useWallet.tsx:
--------------------------------------------------------------------------------
 1 | import { PermissionType } from "arconnect";
 2 | import { useEffect, useState } from "react";
 3 | 
 4 | export const useWallet = () => {
 5 |   const [walletAddress, setWalletAddress] = useState<string>();
 6 | 
 7 |   function checkPermissions(arr: PermissionType[], values: PermissionType[]) {
 8 |     return values.every((value) => {
 9 |       return arr.includes(value);
10 |     });
11 |   }
12 | 
13 |   useEffect(() => {
14 |     window.addEventListener("arweaveWalletLoaded", handleArweaveWalletLoaded);
15 |     window.addEventListener("walletSwitch", handleWalletSwitch);
16 | 
17 |     return () => {
18 |       window.removeEventListener(
19 |         "arweaveWalletLoaded",
20 |         handleArweaveWalletLoaded
21 |       );
22 |       window.removeEventListener("walletSwitch", handleWalletSwitch);
23 |     };
24 |   }, []);
25 | 
26 |   const handleWalletSwitch = (e: CustomEvent<{ address: string }>) => {
27 |     const address = e.detail.address;
28 | 
29 |     setWalletAddress(address);
30 |   };
31 | 
32 |   const handleArweaveWalletLoaded = async () => {
33 |     const permissions = await window.arweaveWallet.getPermissions();
34 | 
35 |     if (checkPermissions(permissions, ["ACCESS_ADDRESS"])) {
36 |       const address = await window.arweaveWallet.getActiveAddress();
37 | 
38 |       setWalletAddress(address);
39 |     }
40 |   };
41 | 
42 |   const connect = async (permissions: PermissionType[]) => {
43 |     await window.arweaveWallet.connect(permissions).then(async () => {
44 |       const address = await window.arweaveWallet.getActiveAddress();
45 | 
46 |       setWalletAddress(address);
47 |     });
48 |   };
49 | 
50 |   return { walletAddress, connect };
51 | };
52 | 


--------------------------------------------------------------------------------
/src/index.css:
--------------------------------------------------------------------------------
 1 | :root {
 2 |   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
 3 |   line-height: 1.5;
 4 |   font-weight: 400;
 5 | 
 6 |   color-scheme: light dark;
 7 |   color: rgba(255, 255, 255, 0.87);
 8 |   background-color: #242424;
 9 | 
10 |   font-synthesis: none;
11 |   text-rendering: optimizeLegibility;
12 |   -webkit-font-smoothing: antialiased;
13 |   -moz-osx-font-smoothing: grayscale;
14 |   -webkit-text-size-adjust: 100%;
15 | }
16 | 
17 | a {
18 |   font-weight: 500;
19 |   color: #646cff;
20 |   text-decoration: inherit;
21 | }
22 | a:hover {
23 |   color: #535bf2;
24 | }
25 | 
26 | body {
27 |   margin: 0;
28 |   display: flex;
29 |   place-items: center;
30 |   min-width: 320px;
31 |   min-height: 100vh;
32 | }
33 | 
34 | h1 {
35 |   font-size: 3.2em;
36 |   line-height: 1.1;
37 | }
38 | 
39 | button {
40 |   border-radius: 8px;
41 |   border: 1px solid transparent;
42 |   padding: 0.6em 1.2em;
43 |   font-size: 1em;
44 |   font-weight: 500;
45 |   font-family: inherit;
46 |   background-color: #1a1a1a;
47 |   cursor: pointer;
48 |   transition: border-color 0.25s;
49 | }
50 | button:hover {
51 |   border-color: #646cff;
52 | }
53 | button:focus,
54 | button:focus-visible {
55 |   outline: 4px auto -webkit-focus-ring-color;
56 | }
57 | 
58 | @media (prefers-color-scheme: light) {
59 |   :root {
60 |     color: #213547;
61 |     background-color: #ffffff;
62 |   }
63 |   a:hover {
64 |     color: #747bff;
65 |   }
66 |   button {
67 |     background-color: #f9f9f9;
68 |   }
69 | }
70 | 


--------------------------------------------------------------------------------
/src/lib/account/api.ts:
--------------------------------------------------------------------------------
 1 | import arweaveGql, { Transaction } from "arweave-graphql";
 2 | import { Env, PermaProfile } from "../../types";
 3 | import { appConfig } from "../../appConfig";
 4 | // import { isVouched } from 'vouchdao';
 5 | 
 6 | export const getAccount = async (address: string, env: Env) => {
 7 |   try {
 8 |     const res = await arweaveGql(
 9 |       `${env.gateway || appConfig.defaultGateway}/graphql`
10 |     ).getTransactions({
11 |       owners: [address],
12 |       tags: [
13 |         { name: "Content-Type", values: ["application/json"] },
14 |         { name: "Protocol", values: ["PermaProfile-v0.1"] },
15 |       ],
16 |     });
17 |     const data = res.transactions.edges.map((edge) =>
18 |       transform(edge.node as Transaction)
19 |     );
20 | 
21 |     const profileRes = await Promise.all(data);
22 |     return profileRes[0];
23 |   } catch (error) {
24 |     console.error(error);
25 |     throw new Error("Error occured whilst fetching data");
26 |   }
27 | };
28 | 
29 | const transform = async (node: Transaction): Promise<PermaProfile> => {
30 |   const address = node.owner.address;
31 |   const handle = node.tags.find((x) => x.name === "Profile-Name")?.value;
32 |   const uniqueHandle =
33 |     handle && handle + `#${address.slice(0, 3)}` + address.slice(40, 43);
34 |   const bio = node.tags.find((x) => x.name === "Profile-Bio")?.value;
35 |   const avatar = node.tags.find((x) => x.name === "Profile-Avatar")?.value;
36 |   const banner = node.tags.find((x) => x.name === "Profile-Background")?.value;
37 |   // const vouched = await isVouched(address);
38 | 
39 |   return {
40 |     address,
41 |     handle,
42 |     uniqueHandle,
43 |     bio,
44 |     avatar,
45 |     banner,
46 |     // vouched,
47 |   };
48 | };
49 | 


--------------------------------------------------------------------------------
/src/lib/account/index.ts:
--------------------------------------------------------------------------------
 1 | import { Env } from '../../types';
 2 | import { getAccount } from './api';
 3 | 
 4 | export const account = {
 5 |   init(env: Env) {
 6 |     return {
 7 |       get(address: string) {
 8 |         return getAccount(address, env);
 9 |       },
10 |     };
11 |   },
12 | };
13 | 


--------------------------------------------------------------------------------
/src/lib/arweave.ts:
--------------------------------------------------------------------------------
 1 | import Arweave from "arweave";
 2 | import { WarpFactory } from "warp-contracts";
 3 | import { DeployPlugin } from "warp-contracts-plugin-deploy";
 4 | import BigNumber from "bignumber.js";
 5 | 
 6 | export const arweave = Arweave.init({
 7 |   host: "ar-io.dev",
 8 |   port: 443,
 9 |   protocol: "https",
10 | });
11 | 
12 | export const getArBalance = async (address: string) => {
13 |   const winstonBalance = await arweave.wallets.getBalance(address);
14 |   const arBalance = await arweave.ar.winstonToAr(winstonBalance);
15 | 
16 |   return new BigNumber(arBalance);
17 | };
18 | 
19 | export const warp = WarpFactory.forMainnet().use(new DeployPlugin());
20 | 


--------------------------------------------------------------------------------
/src/lib/audioDuration.ts:
--------------------------------------------------------------------------------
 1 | import { Track } from "@/modules/upload/schema";
 2 | 
 3 | export const getDuration = async (url: string) => {
 4 |   try {
 5 |     const response = await fetch(url);
 6 |     const blob = await response.blob();
 7 | 
 8 |     const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
 9 |       const reader = new FileReader();
10 |       reader.onload = (event) => {
11 |         if (event.target) {
12 |           resolve(event.target.result as ArrayBuffer);
13 |         } else {
14 |           reject(new Error("Error reading ArrayBuffer"));
15 |         }
16 |       };
17 |       reader.readAsArrayBuffer(blob);
18 |     });
19 | 
20 |     const audioContext = new window.AudioContext();
21 | 
22 |     const audioBuffer = await audioContext.decodeAudioData(buffer);
23 | 
24 |     const duration = audioBuffer.duration;
25 | 
26 |     return duration;
27 |   } catch (error) {
28 |     console.error("Error fetching or processing audio:", error);
29 |     throw error;
30 |   }
31 | };
32 | 
33 | export const getTotalDuration = async (tracklist: Track[]) => {
34 |   try {
35 |     const durations = await Promise.all(
36 |       tracklist.map(async (track) => await getDuration(track.url))
37 |     );
38 | 
39 |     const totalDuration = durations.reduce(
40 |       (acc, duration) => acc + duration,
41 |       0
42 |     );
43 | 
44 |     return totalDuration;
45 |   } catch (error) {
46 |     console.error("Error getting total duration:", error);
47 |     throw error;
48 |   }
49 | };
50 | 


--------------------------------------------------------------------------------
/src/lib/irys.ts:
--------------------------------------------------------------------------------
 1 | import { IrysNode, IrysOpts, TransactionTags } from "@/types";
 2 | import { WebIrys } from "@irys/sdk";
 3 | 
 4 | type GetIrys = Pick<IrysOpts, "init">;
 5 | 
 6 | export const getIrys = async (irysOptions?: GetIrys) => {
 7 |   const irys = new WebIrys({
 8 |     token: irysOptions?.init?.token || "arweave",
 9 |     wallet: { provider: irysOptions?.init?.provider || window.arweaveWallet },
10 |     url: `https://${irysOptions?.init?.node || "node2"}.irys.xyz`,
11 |   });
12 | 
13 |   await irys.ready();
14 | 
15 |   return irys;
16 | };
17 | 
18 | export const uploadData = async (data: string, tags: TransactionTags) => {
19 |   const irys = await getIrys();
20 | 
21 |   const response = await irys.upload(data, { tags });
22 |   return response;
23 | };
24 | 
25 | export const uploadFile = async (data: File, tags: TransactionTags) => {
26 |   const irys = await getIrys();
27 | 
28 |   const response = await irys.uploadFile(data, { tags });
29 |   return response;
30 | };
31 | 
32 | export const uploadChunks = async (
33 |   data: ArrayBuffer,
34 |   tags: TransactionTags
35 | ) => {
36 |   const irys = await getIrys();
37 | 
38 |   const transaction = irys.createTransaction(Buffer.from(data), { tags });
39 |   await transaction.sign();
40 |   let uploader = irys.uploader.chunkedUploader;
41 | 
42 |   const upload = uploader.uploadTransaction(transaction);
43 | 
44 |   uploader.on("chunkUpload", (chunkInfo) => {
45 |     console.log(
46 |       `Uploaded Chunk number ${chunkInfo.id}, offset of ${chunkInfo.offset}, size ${chunkInfo.size} Bytes, with a total of ${chunkInfo.totalUploaded} bytes uploaded.`
47 |     );
48 |   });
49 | 
50 |   uploader.on("chunkError", (e) => {
51 |     console.error(`Error uploading chunk number ${e.id} - ${e.res.statusText}`);
52 |   });
53 | 
54 |   uploader.on("done", (finishRes) => {
55 |     console.log(`Upload completed with ID ${finishRes.id}`);
56 |   });
57 | 
58 |   const response = await upload;
59 |   return response;
60 | };
61 | 
62 | export const getIrysBalance = async (node: IrysNode) => {
63 |   const irys = await getIrys({ init: { node } });
64 | 
65 |   const atomicBalance = await irys.getLoadedBalance();
66 | 
67 |   const convertedBalance = irys.utils.fromAtomic(atomicBalance);
68 | 
69 |   return convertedBalance;
70 | };
71 | 
72 | export const fundIrysNode = async ({
73 |   node,
74 |   amount,
75 | }: {
76 |   node: IrysNode;
77 |   amount: number;
78 | }) => {
79 |   const irys = await getIrys({ init: { node } });
80 | 
81 |   const fundTx = await irys.fund(irys.utils.toAtomic(amount));
82 |   return {
83 |     quantity: irys.utils.fromAtomic(fundTx.quantity),
84 |     token: irys.token,
85 |   };
86 | };
87 | 
88 | export const getIrysUploadCost = async (byteCount: number) => {
89 |   const irys = await getIrys();
90 | 
91 |   const priceAtomic = await irys.getPrice(byteCount);
92 | 
93 |   // Convert from atomic units to standard units
94 |   const priceConverted = irys.utils.fromAtomic(priceAtomic);
95 | 
96 |   return priceConverted;
97 | };
98 | 


--------------------------------------------------------------------------------
/src/lib/turbo.ts:
--------------------------------------------------------------------------------
  1 | export const getTurboBalance = async () => {
  2 |   if (typeof window === "undefined") {
  3 |     return;
  4 |   }
  5 | 
  6 |   try {
  7 |     const wallet = window.arweaveWallet;
  8 |     const publicKey = await window.arweaveWallet.getActivePublicKey();
  9 |     const nonce = crypto.randomUUID();
 10 |     const signature = await signNonceAndData(nonce, wallet);
 11 | 
 12 |     const res = await fetch("https://payment.ardrive.io/v1/balance", {
 13 |       headers: {
 14 |         "x-signature": signature,
 15 |         "x-nonce": nonce,
 16 |         "x-public-key": publicKey,
 17 |       },
 18 |     });
 19 | 
 20 |     const data: { winc: string } = await res.json();
 21 |     console.log({ data });
 22 |     return data;
 23 |   } catch (error) {
 24 |     throw error;
 25 |   }
 26 | };
 27 | 
 28 | const signNonceAndData = async (
 29 |   nonce: string,
 30 |   wallet: typeof window.arweaveWallet
 31 | ) => {
 32 |   const signature = await wallet.signature(new TextEncoder().encode(nonce), {
 33 |     name: "RSA-PSS",
 34 |     saltLength: 0,
 35 |   });
 36 | 
 37 |   const b64encodedSignature = await bufferToBase64(signature);
 38 | 
 39 |   return b64encodedSignature;
 40 | };
 41 | 
 42 | async function bufferToBase64(
 43 |   buffer: ArrayBuffer | Uint8Array
 44 | ): Promise<string> {
 45 |   // use a FileReader to generate a base64 data URI:
 46 |   const base64url = await new Promise((r) => {
 47 |     const reader = new FileReader();
 48 |     reader.onload = () => r(reader.result);
 49 |     reader.readAsDataURL(new Blob([buffer]));
 50 |   });
 51 |   // remove the `data:...;base64,` part from the start
 52 |   //@ts-ignore
 53 |   return base64url.slice(base64url.indexOf(",") + 1);
 54 | }
 55 | 
 56 | // export const getTurbo = async () => {
 57 | //   const turbo = TurboFactory.unauthenticated();
 58 | 
 59 | //   return turbo;
 60 | // };
 61 | 
 62 | // export const getSupportedCurrencies = async () => {
 63 | //   const turbo = await getTurbo();
 64 | //   const currencies = await turbo.getSupportedCurrencies();
 65 | //   const fiatToAr = await turbo.getFiatToAR({ currency: "gbp" });
 66 | 
 67 | //   console.log({ currencies });
 68 | //   console.log({ fiatToAr });
 69 | // };
 70 | 
 71 | export const getSupportedCurrencies = async (): Promise<Currency> => {
 72 |   const res = await fetch("https://payment.ardrive.io/v1/currencies");
 73 | 
 74 |   const data = await res.json();
 75 |   return data.supportedCurrencies;
 76 | };
 77 | 
 78 | type Currency =
 79 |   | "aud"
 80 |   | "brl"
 81 |   | "cad"
 82 |   | "eur"
 83 |   | "gbp"
 84 |   | "hkd"
 85 |   | "inr"
 86 |   | "jpy"
 87 |   | "sgd"
 88 |   | "usd";
 89 | 
 90 | interface CreateCheckoutSession {
 91 |   address: string | undefined;
 92 |   currency: Currency;
 93 |   amount: number | undefined;
 94 | }
 95 | 
 96 | interface CheckoutResponse {
 97 |   paymentSession: {
 98 |     url: string;
 99 |   };
100 | }
101 | 
102 | export const createCheckoutSession = async ({
103 |   address,
104 |   currency,
105 |   amount,
106 | }: CreateCheckoutSession) => {
107 |   if (!address) {
108 |     throw new Error("No address connected");
109 |   }
110 | 
111 |   if (!amount) {
112 |     throw new Error("No amount provided");
113 |   }
114 | 
115 |   const res = await fetch(
116 |     `https://payment.ardrive.io/v1/top-up/checkout-session/${address}/${currency}/${
117 |       amount * 100
118 |     }`
119 |   );
120 | 
121 |   const data: CheckoutResponse = await res.json();
122 |   return data;
123 | };
124 | 
125 | interface TurboUploadResponse {
126 |   id: string;
127 |   owner: string;
128 |   timestamp: number;
129 | }
130 | 
131 | export const uploadFileTurbo = async (data: Buffer): Promise<string> => {
132 |   const res = await fetch("https://upload.ardrive.io/v1/tx", {
133 |     method: "POST",
134 |     headers: {
135 |       "content-type": "application/octet-stream",
136 |       accept: "application/json",
137 |     },
138 |     body: data,
139 |   });
140 | 
141 |   if (!res.ok) {
142 |     throw new Error(`${res.status} ${res.statusText}`);
143 |   }
144 | 
145 |   const uploadInfo: TurboUploadResponse = await res.json();
146 |   console.log({ uploadInfo });
147 | 
148 |   return uploadInfo.id;
149 | };
150 | 
151 | export const getTurboUploadCost = async (byteCount: number) => {
152 |   const res = await fetch(
153 |     `https://payment.ardrive.io/v1/price/bytes/${byteCount}`
154 |   );
155 | 
156 |   if (!res.ok) {
157 |     throw new Error(`${res.status} ${res.statusText}`);
158 |   }
159 | 
160 |   const cost: { winc: string } = await res.json();
161 |   console.log({ cost });
162 | 
163 |   return cost;
164 | };
165 | 


--------------------------------------------------------------------------------
/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import React from "react";
 2 | import ReactDOM from "react-dom/client";
 3 | import App from "./App";
 4 | // import "./index.css";
 5 | import { ConnectProvider } from "@/hooks/useConnect";
 6 | import { darkTheme, globalCss } from "@/stitches.config";
 7 | import { ArweaveWebWallet } from "arweave-wallet-connector";
 8 | import { Toaster } from "sonner";
 9 | import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
10 | import { IrysProvider } from "@/hooks/useIrys";
11 | import { TurboProvider } from "@/hooks/useTurbo";
12 | 
13 | const globalStyles = globalCss({
14 |   "*, *::before, *::after": {
15 |     boxSizing: "border-box",
16 |   },
17 |   "*": {
18 |     "*:focus:not(.focus-visible)": {
19 |       outline: "none",
20 |     },
21 |   },
22 |   "html, body, #root, #__next": {
23 |     minHeight: "100vh",
24 |     fontFamily: "$body",
25 |     margin: 0,
26 |     backgroundColor: "$slate1",
27 |     color: "$slate11",
28 |   },
29 |   "& a": {
30 |     "&:focus-visible": {
31 |       boxShadow: "0 0 0 2px $colors$blue8",
32 |     },
33 |   },
34 | });
35 | 
36 | const queryClient = new QueryClient();
37 | 
38 | globalStyles();
39 | 
40 | const webWallet = new ArweaveWebWallet({
41 |   name: "Radar",
42 | });
43 | 
44 | ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
45 |   <React.StrictMode>
46 |     <QueryClientProvider client={queryClient}>
47 |       <TurboProvider>
48 |         <IrysProvider>
49 |           <ConnectProvider
50 |             webWallet={webWallet}
51 |             includeProfile
52 |             detectWalletSwitch
53 |           >
54 |             <Toaster richColors position="bottom-right" />
55 |             <App />
56 |           </ConnectProvider>
57 |         </IrysProvider>
58 |       </TurboProvider>
59 |     </QueryClientProvider>
60 |   </React.StrictMode>
61 | );
62 | 


--------------------------------------------------------------------------------
/src/modules/home/index.tsx:
--------------------------------------------------------------------------------
 1 | import styles from "@/styles/Home.module.css";
 2 | import { Button } from "@/ui/Button";
 3 | import { styled } from "@/stitches.config";
 4 | import { Link } from "react-router-dom";
 5 | import { useConnect } from "@/hooks/useConnect";
 6 | import { ConnectWallet } from "../wallet/ConnectWallet";
 7 | 
 8 | const LinkButton = styled(Link, Button, {
 9 |   cursor: "pointer",
10 |   // fix issue with gradient on top of button
11 |   zIndex: 1,
12 |   defaultVariants: {
13 |     variant: "solid",
14 |   },
15 | });
16 | 
17 | export const Home = () => {
18 |   const { walletAddress, connecting } = useConnect();
19 |   return (
20 |     <>
21 |       {/* <Head>
22 |         <title>Create Next App</title>
23 |         <meta name="description" content="Generated by create next app" />
24 |         <meta name="viewport" content="width=device-width, initial-scale=1" />
25 |         <link rel="icon" href="favicon.ico" />
26 |       </Head> */}
27 |       <main className={styles.main}>
28 |         <div className={styles.center}>
29 |           <h1 className={styles.heading}>Make your music live forever</h1>
30 |         </div>
31 |         {!walletAddress ? (
32 |           <ConnectWallet
33 |             permissions={[
34 |               "ACCESS_ADDRESS",
35 |               "DISPATCH",
36 |               "SIGN_TRANSACTION",
37 |               "ACCESS_ARWEAVE_CONFIG",
38 |               "ACCESS_PUBLIC_KEY",
39 |               "SIGNATURE",
40 |             ]}
41 |             providers={{
42 |               arconnect: true,
43 |               arweaveApp: false,
44 |             }}
45 |             appName="Radar"
46 |           >
47 |             <Button
48 |               css={{
49 |                 zIndex: 0,
50 |                 fontWeight: 400,
51 |                 fontSize: "$3",
52 |               }}
53 |               variant="solid"
54 |             >
55 |               {connecting ? "Connecting..." : "Connect wallet"}
56 |             </Button>
57 |           </ConnectWallet>
58 |         ) : (
59 |           <LinkButton
60 |             to={{
61 |               pathname: "/upload",
62 |             }}
63 |           >
64 |             Create a new release
65 |           </LinkButton>
66 |         )}
67 |       </main>
68 |     </>
69 |   );
70 | };
71 | 


--------------------------------------------------------------------------------
/src/modules/layout/AppHeader.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/ui/Button";
 2 | import { Flex } from "@/ui/Flex";
 3 | import { HeaderDropdown } from "./HeaderDropdown";
 4 | import { ConnectWallet } from "../wallet/ConnectWallet";
 5 | import { useConnect } from "@/hooks/useConnect";
 6 | import { CheckBalances } from "../wallet/CheckBalances";
 7 | 
 8 | export const AppHeader = () => {
 9 |   const { walletAddress, connecting } = useConnect();
10 | 
11 |   return (
12 |     <Flex
13 |       as="header"
14 |       css={{
15 |         width: "100%",
16 |         display: "flex",
17 |         py: "$3",
18 |         px: "$10",
19 |       }}
20 |       justify="end"
21 |       align="center"
22 |     >
23 |       <Flex align="center" justify="end" gap="2">
24 |         {walletAddress && <CheckBalances />}
25 |         {walletAddress ? (
26 |           <HeaderDropdown walletAddress={walletAddress} />
27 |         ) : (
28 |           <ConnectWallet
29 |             permissions={[
30 |               "ACCESS_ADDRESS",
31 |               "DISPATCH",
32 |               "SIGN_TRANSACTION",
33 |               "ACCESS_ARWEAVE_CONFIG",
34 |               "ACCESS_PUBLIC_KEY",
35 |               "SIGNATURE",
36 |             ]}
37 |             options={{
38 |               connectButtonVariant: "ghost",
39 |               connectButtonLabel: "connect wallet",
40 |               connectButtonStyles: {
41 |                 "&:hover": {
42 |                   backgroundColor: "transparent",
43 |                   color: "$slate12",
44 |                 },
45 |               },
46 |             }}
47 |             providers={{
48 |               arconnect: true,
49 |               arweaveApp: false,
50 |             }}
51 |             appName="Radar"
52 |           >
53 |             <Button
54 |               css={{
55 |                 fontWeight: 400,
56 |                 fontSize: "$3",
57 |               }}
58 |               variant="transparent"
59 |             >
60 |               {connecting ? "connecting..." : "connect wallet"}
61 |             </Button>
62 |           </ConnectWallet>
63 |         )}
64 |       </Flex>
65 |     </Flex>
66 |   );
67 | };
68 | 


--------------------------------------------------------------------------------
/src/modules/layout/HeaderDropdown.tsx:
--------------------------------------------------------------------------------
  1 | import { abbreviateAddress, userPreferredGateway } from "../../utils";
  2 | import {
  3 |   RxChevronDown,
  4 |   RxChevronLeft,
  5 |   RxDotFilled,
  6 |   RxPencil2,
  7 | } from "react-icons/rx";
  8 | import { BsCurrencyDollar, BsPlug } from "react-icons/bs";
  9 | import { useEffect, useRef, useState } from "react";
 10 | import { appConfig } from "../../appConfig";
 11 | import { ArAccount } from "arweave-account";
 12 | import {
 13 |   DropdownMenuContent,
 14 |   DropdownMenuItem,
 15 |   DropdownMenuItemIndicator,
 16 |   DropdownMenuLabel,
 17 |   DropdownMenuPortal,
 18 |   DropdownMenuRadioGroup,
 19 |   DropdownMenuRadioItem,
 20 |   DropdownMenuRoot,
 21 |   DropdownMenuSeparator,
 22 |   DropdownMenuSubContent,
 23 |   DropdownMenuSubRoot,
 24 |   DropdownMenuSubTrigger,
 25 |   DropdownMenuTrigger,
 26 | } from "@/ui/Dropdown";
 27 | import { Button } from "@/ui/Button";
 28 | import { Avatar, AvatarImage } from "@/ui/Avatar";
 29 | import { Flex } from "@/ui/Flex";
 30 | import { Link } from "react-router-dom";
 31 | import { styled } from "@/stitches.config";
 32 | import { useConnect } from "@/hooks/useConnect";
 33 | import { PermaProfile } from "@/types";
 34 | import { FundNodeDialog } from "../wallet/FundNodeDialog";
 35 | import { useQuery } from "@tanstack/react-query";
 36 | import { getAccount } from "@/lib/account/api";
 37 | import { useIrys } from "@/hooks/useIrys";
 38 | 
 39 | const StyledLink = styled(Link);
 40 | 
 41 | interface HeaderDropdownProps {
 42 |   walletAddress: string;
 43 | }
 44 | 
 45 | type DialogName = "fundNode" | "checkBalance";
 46 | 
 47 | interface DialogOpenProps {
 48 |   name?: DialogName;
 49 |   open: boolean;
 50 | }
 51 | 
 52 | export const HeaderDropdown = ({ walletAddress }: HeaderDropdownProps) => {
 53 |   const { setState } = useConnect();
 54 |   const { init: irysInitOpts, setState: setIrys } = useIrys();
 55 |   const [currentGateway, setCurrentGateway] = useState(
 56 |     userPreferredGateway || appConfig.defaultGateway
 57 |   );
 58 |   const [dropdownOpen, setDropdownOpen] = useState(false);
 59 |   const [dialogOpen, setDialogOpen] = useState<DialogOpenProps>({
 60 |     open: false,
 61 |   });
 62 |   const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null);
 63 | 
 64 |   const { data: profile, isError } = useQuery({
 65 |     queryKey: [`profile-${walletAddress}`],
 66 |     queryFn: () => {
 67 |       if (!walletAddress) {
 68 |         throw new Error("No profile has been found");
 69 |       }
 70 | 
 71 |       return getAccount(walletAddress, { gateway: appConfig.defaultGateway });
 72 |     },
 73 |   });
 74 | 
 75 |   const openDialog = (name: DialogName) => setDialogOpen({ name, open: true });
 76 |   const closeDialog = (name: DialogName) => {
 77 |     setDialogOpen({ name, open: false });
 78 |   };
 79 | 
 80 |   useEffect(() => {
 81 |     if (dialogOpen.open) {
 82 |       setDropdownOpen(false);
 83 |     }
 84 |   }, [dialogOpen.open]);
 85 | 
 86 |   const name =
 87 |     profile && profile.handle
 88 |       ? profile.handle
 89 |       : abbreviateAddress({ address: profile?.address || walletAddress });
 90 |   return (
 91 |     <>
 92 |       <DropdownMenuRoot
 93 |         modal={dropdownOpen}
 94 |         open={dropdownOpen}
 95 |         onOpenChange={setDropdownOpen}
 96 |       >
 97 |         <DropdownMenuTrigger ref={dropdownTriggerRef} asChild>
 98 |           <Button
 99 |             css={{
100 |               fontWeight: 400,
101 |               "&:hover": {
102 |                 backgroundColor: "transparent",
103 |                 color: "$slate12",
104 |               },
105 |               "&:active": { backgroundColor: "transparent" },
106 |             }}
107 |             variant="ghost"
108 |           >
109 |             <Avatar size="1">
110 |               <AvatarImage
111 |                 src={
112 |                   profile && profile.avatar
113 |                     ? profile.avatar
114 |                     : `https://source.boringavatars.com/marble/40/${
115 |                         profile?.address || walletAddress
116 |                       }`
117 |                 }
118 |               />
119 |             </Avatar>
120 |             {name}
121 |             <RxChevronDown />
122 |           </Button>
123 |         </DropdownMenuTrigger>
124 |         <DropdownMenuPortal>
125 |           <DropdownMenuContent
126 |             css={{
127 |               minWidth: 200,
128 |             }}
129 |             sideOffset={8}
130 |             collisionPadding={8}
131 |           >
132 |             <DropdownMenuItem asChild>
133 |               <Flex align="center" gap="2">
134 |                 <RxPencil2 />
135 |                 Edit Profile
136 |               </Flex>
137 |             </DropdownMenuItem>
138 |             <DropdownMenuSubRoot>
139 |               <DropdownMenuSubTrigger>
140 |                 <Flex align="center" gap="2">
141 |                   <RxChevronLeft />
142 |                   Wallet
143 |                 </Flex>
144 |               </DropdownMenuSubTrigger>
145 |               <DropdownMenuPortal>
146 |                 <DropdownMenuSubContent
147 |                   css={{
148 |                     minWidth: 200,
149 |                   }}
150 |                   sideOffset={8}
151 |                 >
152 |                   <DropdownMenuItem onSelect={() => openDialog("fundNode")}>
153 |                     Fund Irys node
154 |                   </DropdownMenuItem>
155 |                   <DropdownMenuSeparator />
156 |                   <DropdownMenuLabel>choose Irys node</DropdownMenuLabel>
157 |                   <DropdownMenuRadioGroup
158 |                     value={irysInitOpts?.node}
159 |                     onValueChange={(v: any) =>
160 |                       setIrys({ init: { node: v as "node1" | "node2" } })
161 |                     }
162 |                   >
163 |                     <DropdownMenuRadioItem
164 |                       css={{
165 |                         height: 30,
166 |                         color:
167 |                           irysInitOpts?.node === "node1"
168 |                             ? "$slate12"
169 |                             : "$slate11",
170 |                       }}
171 |                       value="node1"
172 |                     >
173 |                       <DropdownMenuItemIndicator>
174 |                         <RxDotFilled />
175 |                       </DropdownMenuItemIndicator>
176 |                       node1
177 |                     </DropdownMenuRadioItem>
178 |                     <DropdownMenuRadioItem
179 |                       css={{
180 |                         height: 30,
181 |                         color:
182 |                           irysInitOpts?.node === "node2"
183 |                             ? "$slate12"
184 |                             : "$slate11",
185 |                       }}
186 |                       value="node2"
187 |                     >
188 |                       <DropdownMenuItemIndicator>
189 |                         <RxDotFilled />
190 |                       </DropdownMenuItemIndicator>
191 |                       node2
192 |                     </DropdownMenuRadioItem>
193 |                   </DropdownMenuRadioGroup>
194 |                 </DropdownMenuSubContent>
195 |               </DropdownMenuPortal>
196 |             </DropdownMenuSubRoot>
197 | 
198 |             <DropdownMenuItem
199 |               onSelect={() => {
200 |                 window.arweaveWallet.disconnect().then(() => {
201 |                   setState({ walletAddress: "" });
202 |                 });
203 |               }}
204 |             >
205 |               <Flex align="center" gap="2">
206 |                 <BsPlug />
207 |                 Disconnect
208 |               </Flex>
209 |             </DropdownMenuItem>
210 |           </DropdownMenuContent>
211 |         </DropdownMenuPortal>
212 |       </DropdownMenuRoot>
213 | 
214 |       <FundNodeDialog
215 |         modal={dialogOpen.name === "fundNode" && dialogOpen.open}
216 |         open={dialogOpen.name === "fundNode" && dialogOpen.open}
217 |         onClose={() => closeDialog("fundNode")}
218 |         dropdownTriggerRef={dropdownTriggerRef}
219 |       />
220 |     </>
221 |   );
222 | };
223 | 


--------------------------------------------------------------------------------
/src/modules/upload/components/Dropzone.tsx:
--------------------------------------------------------------------------------
  1 | import { Controller, useFormContext } from "react-hook-form";
  2 | import { useDropzone } from "react-dropzone";
  3 | import { ChangeEventHandler, FC, useCallback } from "react";
  4 | import {
  5 |   ImageDropContainer,
  6 |   ImageDropContainerVariants,
  7 | } from "./ImageDropContainer";
  8 | import { CSS } from "@/stitches.config";
  9 | 
 10 | interface ImageDropzoneProps extends ImageDropContainerVariants {
 11 |   name: string;
 12 |   multiple?: boolean;
 13 |   children: React.ReactNode;
 14 |   css?: CSS;
 15 | }
 16 | 
 17 | export const ImageDropzone = ({
 18 |   name,
 19 |   multiple = false,
 20 |   children,
 21 |   css,
 22 |   hidden,
 23 |   size,
 24 |   ...rest
 25 | }: ImageDropzoneProps) => {
 26 |   const { control } = useFormContext();
 27 | 
 28 |   return (
 29 |     <Controller
 30 |       render={({ field: { onChange } }) => (
 31 |         <Dropzone
 32 |           hidden={hidden}
 33 |           size={size}
 34 |           css={css}
 35 |           multiple={multiple}
 36 |           onChange={(e) =>
 37 |             onChange(multiple ? e.target.files : e.target.files?.[0] ?? null)
 38 |           }
 39 |           {...rest}
 40 |         >
 41 |           {children}
 42 |         </Dropzone>
 43 |       )}
 44 |       name={name}
 45 |       control={control}
 46 |     />
 47 |   );
 48 | };
 49 | 
 50 | const Dropzone: FC<{
 51 |   multiple?: boolean;
 52 |   onChange?: ChangeEventHandler<HTMLInputElement>;
 53 |   children: React.ReactNode;
 54 |   css?: CSS;
 55 |   hidden: ImageDropContainerVariants["hidden"];
 56 |   size: ImageDropContainerVariants["size"];
 57 | }> = ({ multiple, css, children, onChange, hidden, size, ...rest }) => {
 58 |   const { setValue } = useFormContext();
 59 | 
 60 |   const onImageDrop = useCallback((acceptedFiles: File[]) => {
 61 |     // Do something with the files
 62 |     const imageFile = acceptedFiles[0];
 63 | 
 64 |     console.log(imageFile);
 65 | 
 66 |     const reader = new FileReader();
 67 | 
 68 |     reader.onabort = () => console.log("file reading was aborted");
 69 |     reader.onerror = () => console.log("file reading has failed");
 70 | 
 71 |     reader.onload = () => {
 72 |       let blob;
 73 |       let url;
 74 |       blob = new Blob([imageFile], { type: imageFile.type });
 75 |       url = window.URL.createObjectURL(blob);
 76 | 
 77 |       let imageFileInfo = {
 78 |         data: imageFile,
 79 |         name: imageFile.name,
 80 |         size: imageFile.size,
 81 |         type: imageFile.type,
 82 |         url,
 83 |       };
 84 | 
 85 |       console.log(reader.result);
 86 | 
 87 |       //   setReleaseArtwork(url);
 88 |       //   return imageFile;
 89 |       setValue("releaseArtwork.file", imageFile);
 90 |       setValue("releaseArtwork.url", url);
 91 |       // setValue("releaseArtwork.data", reader.result as ArrayBuffer);
 92 |     };
 93 | 
 94 |     reader.readAsArrayBuffer(imageFile);
 95 |   }, []);
 96 | 
 97 |   const { getRootProps, getInputProps, isDragActive } = useDropzone({
 98 |     multiple,
 99 |     accept: { "image/*": [".jpeg", ".png", ".webp", ".avif"] },
100 |     maxFiles: 1,
101 |     ...rest,
102 |     onDrop: onImageDrop,
103 |   });
104 | 
105 |   return (
106 |     <ImageDropContainer
107 |       css={css}
108 |       hovered={isDragActive}
109 |       hidden={hidden}
110 |       size={size}
111 |       {...getRootProps()}
112 |     >
113 |       <input {...getInputProps({ onChange })} />
114 |       {children}
115 |     </ImageDropContainer>
116 |   );
117 | };
118 | 


--------------------------------------------------------------------------------
/src/modules/upload/components/FormHelperAccordion.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Accordion,
 3 |   AccordionContent,
 4 |   AccordionItem,
 5 |   AccordionTrigger,
 6 | } from "@/ui/Accordion";
 7 | 
 8 | interface FormHelperAccordionProps {
 9 |   value: string;
10 |   triggerLabel: string;
11 |   children: React.ReactNode;
12 | }
13 | 
14 | export const FormHelperAccordion = ({
15 |   value,
16 |   triggerLabel,
17 |   children,
18 | }: FormHelperAccordionProps) => {
19 |   return (
20 |     <Accordion type="single" collapsible>
21 |       <AccordionItem value={value}>
22 |         <AccordionTrigger
23 |           css={{
24 |             fontSize: "$1",
25 |             gap: "$1",
26 | 
27 |             "& svg": {
28 |               color: "$slate11",
29 |             },
30 | 
31 |             "[data-state=open] &": { color: "$slate11" },
32 |           }}
33 |         >
34 |           {triggerLabel}
35 |         </AccordionTrigger>
36 |         <AccordionContent
37 |           css={{
38 |             fontSize: "$1",
39 |             lineHeight: "$2",
40 |             maxWidth: "48ch",
41 | 
42 |             "& div": {
43 |               px: 0,
44 |             },
45 |           }}
46 |         >
47 |           {children}
48 |         </AccordionContent>
49 |       </AccordionItem>
50 |     </Accordion>
51 |   );
52 | };
53 | 


--------------------------------------------------------------------------------
/src/modules/upload/components/FormSelect.tsx:
--------------------------------------------------------------------------------
 1 | import { Controller, useFormContext } from "react-hook-form";
 2 | import {
 3 |   Select,
 4 |   SelectContent,
 5 |   SelectIcon,
 6 |   SelectItem,
 7 |   SelectPortal,
 8 |   SelectTrigger,
 9 |   SelectValue,
10 |   SelectViewport,
11 | } from "@/ui/Select";
12 | import { RxChevronDown } from "react-icons/rx";
13 | import { genres } from "@/data/genres";
14 | import { UDLValues, udl } from "@/data/license";
15 | import { formatSchemaValue } from "@/utils";
16 | 
17 | interface FormSelectProps {
18 |   name: string;
19 |   values: typeof genres | UDLValues[keyof UDLValues] | any[];
20 |   disabled?: boolean;
21 |   capitalizeItems?: boolean;
22 | }
23 | 
24 | export const FormSelect = ({
25 |   values,
26 |   name,
27 |   disabled,
28 |   capitalizeItems,
29 | }: FormSelectProps) => {
30 |   const { control, getValues } = useFormContext();
31 | 
32 |   return (
33 |     <Controller
34 |       render={({ field: { onChange } }) => (
35 |         <Select
36 |           defaultValue={getValues(name)}
37 |           onValueChange={(e) => onChange(e)}
38 |           value={getValues(name)}
39 |         >
40 |           <SelectTrigger disabled={disabled}>
41 |             <SelectValue />
42 |             <SelectIcon>
43 |               <RxChevronDown />
44 |             </SelectIcon>
45 |           </SelectTrigger>
46 |           <SelectPortal>
47 |             <SelectContent sideOffset={8}>
48 |               <SelectViewport>
49 |                 {values.map((value) => (
50 |                   <SelectItem key={value} value={value}>
51 |                     {values === genres ? value : formatSchemaValue(value)}
52 |                   </SelectItem>
53 |                 ))}
54 |               </SelectViewport>
55 |             </SelectContent>
56 |           </SelectPortal>
57 |         </Select>
58 |       )}
59 |       name={name}
60 |       control={control}
61 |     />
62 |   );
63 | };
64 | 


--------------------------------------------------------------------------------
/src/modules/upload/components/ImageDropContainer.tsx:
--------------------------------------------------------------------------------
 1 | import { VariantProps, styled } from "@/stitches.config";
 2 | 
 3 | export type ImageDropContainerVariants = VariantProps<
 4 |   typeof ImageDropContainer
 5 | >;
 6 | 
 7 | export const ImageDropContainer = styled("div", {
 8 |   display: "flex",
 9 |   alignItems: "center",
10 |   justifyContent: "center",
11 |   py: "$4",
12 |   px: "$4",
13 |   cursor: "pointer",
14 |   border: "2px dashed $colors$slate6",
15 |   position: "relative",
16 |   backgroundSize: "contain",
17 |   backgroundRepeat: "no-repeat",
18 |   backgroundPosition: "center center",
19 | 
20 |   "&:hover": {
21 |     border: "2px dashed $colors$slate7",
22 |   },
23 | 
24 |   variants: {
25 |     size: {
26 |       1: {
27 |         width: 200,
28 |         height: 200,
29 |         // fontSize: "$1",
30 |         "& svg": {
31 |           width: 40,
32 |           height: 40,
33 |         },
34 |       },
35 |       2: {
36 |         width: 300,
37 |         height: 300,
38 |         // fontSize: "$2",
39 |         "& svg": {
40 |           width: 80,
41 |           height: 80,
42 |         },
43 |       },
44 |       3: {
45 |         width: 400,
46 |         height: 400,
47 |         // fontSize: "$2",
48 |         "& svg": {
49 |           width: 140,
50 |           height: 140,
51 |         },
52 |       },
53 |     },
54 |     hovered: {
55 |       true: {
56 |         border: "2px dashed $colors$focus",
57 |       },
58 |     },
59 |     hidden: {
60 |       true: {
61 |         border: "none",
62 | 
63 |         "&:hover": {
64 |           border: "none",
65 | 
66 |           "& img": {
67 |             opacity: 0.7,
68 |           },
69 |         },
70 |         "& svg": {
71 |           display: "none",
72 |         },
73 |         "& p": {
74 |           display: "none",
75 |         },
76 |       },
77 |     },
78 |   },
79 |   compoundVariants: [
80 |     {
81 |       hovered: true,
82 |       hidden: true,
83 |       css: {
84 |         border: "none",
85 |         opacity: 0.7,
86 |       },
87 |     },
88 |   ],
89 | 
90 |   defaultVariants: {
91 |     size: "2",
92 |   },
93 | });
94 | 


--------------------------------------------------------------------------------
/src/modules/upload/components/TrackItem.tsx:
--------------------------------------------------------------------------------
  1 | import { getDuration } from "@/lib/audioDuration";
  2 | import { Box } from "@/ui/Box";
  3 | import { Button } from "@/ui/Button";
  4 | import { Flex } from "@/ui/Flex";
  5 | import { Image } from "@/ui/Image";
  6 | import { Progress, ProgressIndicator } from "@/ui/Progress";
  7 | import { Typography } from "@/ui/Typography";
  8 | import { formatDuration } from "@/utils";
  9 | import { useQuery } from "@tanstack/react-query";
 10 | import { useEffect } from "react";
 11 | import {
 12 |   RxCheck,
 13 |   RxCheckCircled,
 14 |   RxCrossCircled,
 15 |   RxLapTimer,
 16 | } from "react-icons/rx";
 17 | import { Track } from "../schema";
 18 | 
 19 | interface TrackItemProps {
 20 |   track: Track;
 21 | }
 22 | 
 23 | export const TrackItem = ({ track }: TrackItemProps) => {
 24 |   const { data: duration, isLoading: durationLoading } = useQuery({
 25 |     queryKey: [`track-${track.url}`],
 26 |     queryFn: () => getDuration(track.url),
 27 |   });
 28 | 
 29 |   let currentColor = "";
 30 |   let statusText = "";
 31 | 
 32 |   switch (track.upload.status) {
 33 |     case "idle":
 34 |       currentColor = "$slate10";
 35 |       statusText = "Not uploaded";
 36 |       break;
 37 |     case "in-progress":
 38 |       currentColor = "$yellow10";
 39 |       statusText = "In progress";
 40 |       break;
 41 |     case "success":
 42 |       currentColor = "$green10";
 43 |       statusText = "Uploaded";
 44 |       break;
 45 |     case "failed":
 46 |       currentColor = "$red10";
 47 |       statusText = "Failed";
 48 | 
 49 |       break;
 50 |     default:
 51 |       currentColor = "$slate10";
 52 |       statusText = "Not uploaded";
 53 |       break;
 54 |   }
 55 | 
 56 |   useEffect(() => {
 57 |     console.log(track);
 58 |   }, []);
 59 | 
 60 |   return (
 61 |     <Box
 62 |       css={{
 63 |         px: "$2",
 64 |         pt: "$1",
 65 |         pb: "$10",
 66 |         mb: "$7",
 67 |         position: "relative",
 68 |       }}
 69 |     >
 70 |       <Flex justify="between" align="center">
 71 |         <Flex align="center" gap="5">
 72 |           <Image
 73 |             css={{
 74 |               boxSize: "$10",
 75 |             }}
 76 |             src={track.metadata.artwork.url}
 77 |           />
 78 |           <Typography size="2" contrast="hi">
 79 |             {track.metadata.title}
 80 |           </Typography>
 81 |         </Flex>
 82 |         <Flex align="center" gap="3">
 83 |           {track.upload.status === "success" && track.upload.tx && (
 84 |             <Button
 85 |               css={{
 86 |                 cursor: "pointer",
 87 |               }}
 88 |               target="_blank"
 89 |               rel="noreferrer"
 90 |               href={`https://arcadia.arweave.dev/#/track?tx=${track.upload.tx}`}
 91 |               as="a"
 92 |               variant="solid"
 93 |               size="1"
 94 |             >
 95 |               View Track
 96 |             </Button>
 97 |           )}
 98 |           {track.metadata.genre !== "none" && (
 99 |             <Typography
100 |               size="1"
101 |               css={{
102 |                 px: "$2",
103 |                 py: "$1",
104 |                 br: 2,
105 |                 boxShadow: "0 0 0 1px $colors$slate6",
106 |               }}
107 |             >
108 |               {track.metadata.genre}
109 |             </Typography>
110 |           )}
111 |           <Typography
112 |             css={{
113 |               maxWidth: 80,
114 |               textOverflow: "ellipsis",
115 |               overflow: "hidden",
116 |               whiteSpace: "nowrap",
117 |             }}
118 |             size="1"
119 |           >
120 |             {duration ? `${formatDuration({ duration })}` : "-"}
121 |           </Typography>
122 |         </Flex>
123 |       </Flex>
124 |       <Flex
125 |         css={{
126 |           position: "absolute",
127 |           left: 0,
128 |           right: 0,
129 |           bottom: 0,
130 |         }}
131 |         direction="column"
132 |         gap="2"
133 |       >
134 |         <Box css={{ position: "relative" }}>
135 |           <Progress value={track.upload.progress}>
136 |             <ProgressIndicator
137 |               css={{
138 |                 transform: `translateX(-${100 - track.upload.progress}%)`,
139 |                 backgroundColor: currentColor,
140 |               }}
141 |             />
142 |           </Progress>
143 |         </Box>
144 |         <Typography
145 |           size="1"
146 |           css={{
147 |             color: currentColor,
148 |             display: "inline-flex",
149 |             alignItems: "center",
150 |             gap: "$1",
151 |           }}
152 |         >
153 |           {statusText}
154 |           {track.upload.status === "failed" ||
155 |             (track.upload.status === "idle" && <RxCrossCircled />)}
156 |           {track.upload.status === "success" && <RxCheckCircled />}
157 |           {track.upload.status === "in-progress" && <RxLapTimer />}
158 |           {/* {track.upload.status === "success" &&
159 |             !track.upload.registered &&
160 |             " - (not registered)"} */}
161 |         </Typography>
162 |       </Flex>
163 |     </Box>
164 |   );
165 | };
166 | 


--------------------------------------------------------------------------------
/src/modules/upload/schema.ts:
--------------------------------------------------------------------------------
 1 | import { genres } from "@/data/genres";
 2 | import { udl } from "@/data/license";
 3 | import { z } from "Zod";
 4 | 
 5 | const licenseSchema = z
 6 |   .object({
 7 |     type: z.enum(udl.type).default("public-use"),
 8 |     derivation: z.enum(udl.derivationOpts),
 9 |     commercial: z.enum(udl.commercialOpts),
10 |     revShare: z.coerce
11 |       .number()
12 |       .nonnegative()
13 |       .min(1)
14 |       .max(100, "Percentage cannot exceed 100."),
15 |     commercialFee: z.coerce.number().min(1).nonnegative(),
16 |     feeRecurrence: z.enum(udl.feeRecurrenceOpts),
17 |     currency: z.enum(udl.currencyOpts),
18 |     paymentMode: z.enum(udl.paymentModeOpts),
19 |   })
20 |   .optional();
21 | 
22 | export type UploadSchema = z.infer<typeof uploadSchema>;
23 | 
24 | const artworkSchema = z.object(
25 |   {
26 |     file: z.custom<File>().refine((data) => !!data, {
27 |       message: "Cover Art is required",
28 |     }),
29 |     url: z.string().optional(),
30 |   },
31 |   { required_error: "Image is required" }
32 | );
33 | 
34 | const trackMetadataSchema = z.object({
35 |   title: z
36 |     .string()
37 |     .min(1, "Title is required")
38 |     .max(80, "Title must contain less than 80 characters")
39 |     .default(""),
40 |   description: z
41 |     .string()
42 |     .max(1000, "Description must contain less than 300 characters")
43 |     .optional()
44 |     .default(""),
45 |   genre: z.enum(genres).default("none"),
46 |   topics: z.string().optional(),
47 |   artwork: artworkSchema,
48 | });
49 | 
50 | export type Track = z.infer<typeof trackSchema>;
51 | 
52 | const trackSchema = z.object({
53 |   // data: z.custom<ArrayBuffer>(),
54 |   file: z.custom<File>(),
55 |   url: z.string(),
56 |   metadata: trackMetadataSchema,
57 |   upload: z.object({
58 |     status: z
59 |       .enum(["idle", "in-progress", "success", "failed"] as const)
60 |       .default("idle"),
61 |     progress: z.number().default(0),
62 |     tx: z.string().nullish(),
63 |     registered: z.boolean(),
64 |   }),
65 | });
66 | 
67 | export const uploadSchema = z.object({
68 |   title: z
69 |     .string()
70 |     .min(1, "Title is required")
71 |     .max(80, "Title must contain less than 80 characters")
72 |     .default(""),
73 |   description: z
74 |     .string()
75 |     .max(1000, "Description must contain less than 300 characters")
76 |     .optional()
77 |     .default(""),
78 |   genre: z.enum(genres).default("none"),
79 |   topics: z.string().optional(),
80 |   collectionCode: z.string().optional(),
81 |   releaseDate: z.string().optional(),
82 |   releaseArtwork: artworkSchema,
83 |   tracklist: z.array(trackSchema).min(1, "At least 1 track is required"),
84 |   license: licenseSchema,
85 |   tokenQuantity: z.coerce.number().min(1).max(100),
86 |   uploadProvider: z.enum(["irys", "turbo"] as const),
87 | });
88 | 


--------------------------------------------------------------------------------
/src/modules/wallet/CheckBalances.tsx:
--------------------------------------------------------------------------------
  1 | import { Button } from "@/ui/Button";
  2 | import {
  3 |   PopoverClose,
  4 |   PopoverContent,
  5 |   PopoverRoot,
  6 |   PopoverTrigger,
  7 | } from "@/ui/Popover";
  8 | import { RxChevronDown, RxCross2, RxReload } from "react-icons/rx";
  9 | import { ArweaveLogo } from "./components/ArweaveLogo";
 10 | import { useConnect } from "@/hooks/useConnect";
 11 | import { useMutation, useQuery } from "@tanstack/react-query";
 12 | import { getArBalance } from "@/lib/arweave";
 13 | import { getTurboBalance } from "@/lib/turbo";
 14 | import { toast } from "sonner";
 15 | import { useEffect, useState } from "react";
 16 | import { Flex } from "@/ui/Flex";
 17 | import { Typography } from "@/ui/Typography";
 18 | import { Box } from "@/ui/Box";
 19 | import { LoadingSpinner } from "@/ui/Loader";
 20 | import { IconButton } from "@/ui/IconButton";
 21 | import { TurboDialog } from "./TurboDialog";
 22 | import { useTurbo } from "@/hooks/useTurbo";
 23 | import { formatCredits } from "@/utils";
 24 | 
 25 | export const CheckBalances = () => {
 26 |   const { walletAddress } = useConnect();
 27 |   const [showTurboDialog, setShowTurboDialog] = useState(false);
 28 |   const { balance, setState } = useTurbo();
 29 | 
 30 |   const handleShowTurboDialog = () => setShowTurboDialog(true);
 31 |   const handleCancelTurboDialog = () => setShowTurboDialog(false);
 32 | 
 33 |   const {
 34 |     data: arBalance,
 35 |     isLoading: arBalanceLoading,
 36 |     isError: arBalanceError,
 37 |   } = useQuery({
 38 |     queryKey: [`AR-balance-${walletAddress}`],
 39 |     enabled: !!walletAddress,
 40 |     queryFn: () => {
 41 |       if (!walletAddress) {
 42 |         return;
 43 |       }
 44 | 
 45 |       return getArBalance(walletAddress);
 46 |     },
 47 |   });
 48 | 
 49 |   const turboBalance = useMutation({
 50 |     mutationFn: getTurboBalance,
 51 |     mutationKey: ["turboBalance"],
 52 |     onSuccess: (data) => {
 53 |       setState({ balance: data?.winc });
 54 |     },
 55 |     onError: (error) => {
 56 |       console.error(error);
 57 |       // toast.error("Error getting balance");
 58 |     },
 59 |   });
 60 | 
 61 |   const handleRetry = async () => {
 62 |     if (
 63 |       typeof turboBalance.error === "string" &&
 64 |       turboBalance.error.includes("signature")
 65 |     ) {
 66 |       await window.arweaveWallet
 67 |         .connect(["SIGNATURE"])
 68 |         .then(() => {
 69 |           turboBalance.mutate();
 70 |         })
 71 |         .catch((error) => {
 72 |           console.error(error);
 73 |           if (error.includes("User cancelled")) {
 74 |             toast.error(error);
 75 |           }
 76 |         });
 77 |     }
 78 |   };
 79 | 
 80 |   const userNotFound =
 81 |     turboBalance.error instanceof Error &&
 82 |     turboBalance.error.message.includes("User");
 83 | 
 84 |   const signatureError =
 85 |     typeof turboBalance.error === "string" &&
 86 |     turboBalance.error.includes("signature");
 87 | 
 88 |   useEffect(() => {
 89 |     if (turboBalance) {
 90 |       turboBalance.reset();
 91 |     }
 92 |   }, [walletAddress]);
 93 | 
 94 |   return (
 95 |     <PopoverRoot>
 96 |       <PopoverTrigger asChild>
 97 |         <Button
 98 |           css={{
 99 |             "& svg": { boxSize: 15 },
100 |             "&:hover": {
101 |               backgroundColor: "transparent",
102 |               color: "$slate12",
103 |             },
104 |           }}
105 |           variant="ghost"
106 |         >
107 |           {arBalance ? arBalance.toFixed(2).toString() : "-"}
108 |           <ArweaveLogo />
109 |           <RxChevronDown />
110 |         </Button>
111 |       </PopoverTrigger>
112 |       <PopoverContent>
113 |         <Flex direction="column" gap="10">
114 |           <Flex direction="column" gap="1">
115 |             <Typography size="1">AR balance:</Typography>
116 |             {arBalanceError ||
117 |               (arBalanceLoading && (
118 |                 <Typography size="5" contrast="hi">
119 |                   -
120 |                 </Typography>
121 |               ))}
122 |             {arBalance && (
123 |               <Typography contrast="hi">
124 |                 {arBalance.toString()}
125 |                 <Box css={{ color: "$slate11" }} as="span">
126 |                   {" "}
127 |                   AR
128 |                 </Box>
129 |               </Typography>
130 |             )}
131 |           </Flex>
132 | 
133 |           <Flex direction="column" gap="3">
134 |             <Typography size="1">Turbo credits:</Typography>
135 |             {turboBalance.isLoading && (
136 |               <Flex align="center" gap="2">
137 |                 <LoadingSpinner />
138 |                 <Typography size="2">Fetching balance...</Typography>
139 |               </Flex>
140 |             )}
141 |             {turboBalance.isSuccess && (
142 |               <>
143 |                 <Typography contrast="hi">
144 |                   {formatCredits(turboBalance.data?.winc)}
145 |                   <Box css={{ color: "$slate11" }} as="span">
146 |                     {" "}
147 |                     Credits
148 |                   </Box>
149 |                 </Typography>
150 |               </>
151 |             )}
152 |             {turboBalance.isIdle && (
153 |               <Button
154 |                 size="1"
155 |                 onClick={() => turboBalance.mutate()}
156 |                 disabled={turboBalance.isLoading}
157 |                 css={{ alignSelf: "start" }}
158 |                 variant="solid"
159 |               >
160 |                 {turboBalance.isLoading
161 |                   ? "Fetching balance..."
162 |                   : "Check Credits"}
163 |               </Button>
164 |             )}
165 |             {turboBalance.isError && (
166 |               <>
167 |                 {userNotFound ? (
168 |                   <Typography contrast="hi">
169 |                     0
170 |                     <Box css={{ color: "$slate11" }} as="span">
171 |                       {" "}
172 |                       Credits
173 |                     </Box>
174 |                   </Typography>
175 |                 ) : (
176 |                   <Flex
177 |                     align={signatureError ? "start" : "center"}
178 |                     gap="2"
179 |                     direction={signatureError ? "column" : "row"}
180 |                   >
181 |                     <Typography size="2" css={{ color: "$red11" }}>
182 |                       {signatureError
183 |                         ? "Signature permission is required."
184 |                         : "Error occurred getting balance."}
185 |                     </Typography>
186 |                     <Button
187 |                       onClick={handleRetry}
188 |                       disabled={turboBalance.isLoading}
189 |                       size="1"
190 |                       variant="solid"
191 |                     >
192 |                       <RxReload />
193 |                       {signatureError ? "Enable permission and retry" : "Retry"}
194 |                     </Button>
195 |                   </Flex>
196 |                 )}
197 |               </>
198 |             )}
199 |             <>
200 |               {turboBalance.isSuccess && (
201 |                 <Flex gap="2">
202 |                   <Button
203 |                     onClick={handleShowTurboDialog}
204 |                     variant="solid"
205 |                     css={{
206 |                       alignSelf: "start",
207 |                     }}
208 |                     size="1"
209 |                   >
210 |                     Purchase turbo credits
211 |                   </Button>
212 |                   <IconButton
213 |                     title="Refresh balance"
214 |                     disabled={turboBalance.isLoading}
215 |                     size="1"
216 |                     onClick={() => turboBalance.mutate()}
217 |                     aria-label="Refresh credits"
218 |                   >
219 |                     <RxReload />
220 |                   </IconButton>
221 |                 </Flex>
222 |               )}
223 |               {userNotFound && (
224 |                 <Flex gap="2">
225 |                   <Button
226 |                     onClick={handleShowTurboDialog}
227 |                     variant="solid"
228 |                     css={{
229 |                       alignSelf: "start",
230 |                     }}
231 |                     size="1"
232 |                   >
233 |                     Purchase turbo credits
234 |                   </Button>
235 |                   <IconButton
236 |                     title="Refresh balance"
237 |                     disabled={turboBalance.isLoading}
238 |                     size="1"
239 |                     onClick={() => turboBalance.mutate()}
240 |                     aria-label="Refresh credits"
241 |                   >
242 |                     <RxReload />
243 |                   </IconButton>
244 |                 </Flex>
245 |               )}
246 |             </>
247 |           </Flex>
248 |         </Flex>
249 |         <PopoverClose asChild>
250 |           <IconButton size="1" css={{ br: "$round" }}>
251 |             <RxCross2 />
252 |           </IconButton>
253 |         </PopoverClose>
254 | 
255 |         <TurboDialog
256 |           open={showTurboDialog && !!walletAddress}
257 |           onClose={handleCancelTurboDialog}
258 |           balance={turboBalance.data}
259 |           noCredits={userNotFound}
260 |         />
261 |       </PopoverContent>
262 |     </PopoverRoot>
263 |   );
264 | };
265 | 


--------------------------------------------------------------------------------
/src/modules/wallet/ConnectWallet.tsx:
--------------------------------------------------------------------------------
  1 | import * as React from "react";
  2 | import { PermissionType } from "arconnect";
  3 | import { ConnectWalletDialog } from "./ConnectWalletDialog";
  4 | import { useConnect } from "../../hooks/useConnect";
  5 | import { CSS } from "@/stitches.config";
  6 | import { Button, ButtonProps } from "@/ui/Button";
  7 | import { IconButton } from "@/ui/IconButton";
  8 | 
  9 | export interface ConnectWalletProps {
 10 |   appName?: string;
 11 |   permissions: PermissionType[];
 12 |   appLogo?: string;
 13 |   className?: string | undefined;
 14 |   providers?: {
 15 |     arweaveApp: boolean;
 16 |     arconnect: boolean;
 17 |   };
 18 |   options?: {
 19 |     connectButtonLabel?: string;
 20 |     connectButtonStyles?: CSS;
 21 |     connectButtonVariant?: ButtonProps["variant"];
 22 |     connectButtonSize?: ButtonProps["size"];
 23 |     connectButtonColorScheme?: ButtonProps["colorScheme"];
 24 |     connectButtonType?: "normal" | "icon";
 25 |   };
 26 |   children?: React.ReactNode;
 27 | }
 28 | 
 29 | export const ConnectWallet = (props: ConnectWalletProps) => {
 30 |   const { setState, profile, walletAddress, connecting, disconnect } =
 31 |     useConnect();
 32 |   const { options, permissions, appName, providers } = props;
 33 |   const [showConnectDialog, setShowConnectDialog] = React.useState(false);
 34 | 
 35 |   React.useEffect(() => {
 36 |     if (showConnectDialog) {
 37 |       setState((prevValues) => ({ ...prevValues, connecting: true }));
 38 |     } else {
 39 |       setState((prevValues) => ({ ...prevValues, connecting: false }));
 40 |     }
 41 |   }, [showConnectDialog]);
 42 | 
 43 |   const handleShowConnectDialog = () => setShowConnectDialog(true);
 44 |   const handleCancelConnectDialog = () => setShowConnectDialog(false);
 45 | 
 46 |   const type = options?.connectButtonType;
 47 | 
 48 |   const label = options?.connectButtonLabel
 49 |     ? options.connectButtonLabel
 50 |     : "Connect Wallet";
 51 | 
 52 |   const user = profile ? profile : walletAddress;
 53 | 
 54 |   const childButton = React.Children.map(props.children, (child) => {
 55 |     if (React.isValidElement(child)) {
 56 |       return React.cloneElement(child, {
 57 |         ...child.props,
 58 |         onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
 59 |           if (walletAddress) {
 60 |             disconnect();
 61 |             handleCancelConnectDialog();
 62 |           } else {
 63 |             handleShowConnectDialog();
 64 |           }
 65 | 
 66 |           if (child.props.onClick) {
 67 |             child.props.onClick(event);
 68 |           }
 69 |         },
 70 |       });
 71 |     }
 72 |   });
 73 | 
 74 |   return (
 75 |     <>
 76 |       {props.children ? (
 77 |         childButton
 78 |       ) : (
 79 |         <>
 80 |           {user ? (
 81 |             // <>
 82 |             //   {type && type === 'icon' ? (
 83 |             //     <IconButton
 84 |             //       variant={options?.connectButtonVariant}
 85 |             //       size={options?.connectButtonSize}
 86 |             //       colorScheme={options?.connectButtonColorScheme}
 87 |             //       css={{ ...options?.connectButtonStyles }}
 88 |             //       onClick={disconnect}
 89 |             //       title="Disconnect wallet"
 90 |             //     >
 91 |             //       <BsArrowBarRight />
 92 |             //     </IconButton>
 93 |             //   ) : (
 94 |             <Button
 95 |               variant={options?.connectButtonVariant}
 96 |               size={options?.connectButtonSize}
 97 |               colorScheme={options?.connectButtonColorScheme}
 98 |               css={{
 99 |                 display: "flex",
100 |                 gap: "$4",
101 |                 ...options?.connectButtonStyles,
102 |               }}
103 |               onClick={disconnect}
104 |             >
105 |               Disconnect
106 |             </Button>
107 |           ) : (
108 |             //   )}
109 |             // </>
110 |             // <>
111 |             //   {type && type === 'icon' ? (
112 |             //     <IconButton
113 |             //       onClick={handleShowConnectDialog}
114 |             //       variant={options?.connectButtonVariant}
115 |             //       size={options?.connectButtonSize}
116 |             //       colorScheme={options?.connectButtonColorScheme}
117 |             //       css={{
118 |             //         ...options?.connectButtonStyles,
119 |             //       }}
120 |             //       disabled={connecting}
121 |             //       title="Connect wallet"
122 |             //     >
123 |             //       {connecting ? <BsThreeDots /> : <BsWallet2 />}
124 |             //     </IconButton>
125 |             //   ) : (
126 |             <Button
127 |               onClick={handleShowConnectDialog}
128 |               variant={options?.connectButtonVariant}
129 |               size={options?.connectButtonSize}
130 |               colorScheme={options?.connectButtonColorScheme}
131 |               css={{
132 |                 ...options?.connectButtonStyles,
133 |               }}
134 |               disabled={connecting}
135 |             >
136 |               {connecting ? "Connecting..." : label}
137 |             </Button>
138 |             //   )}
139 |             // </>
140 |           )}
141 |         </>
142 |       )}
143 |       <ConnectWalletDialog
144 |         open={showConnectDialog}
145 |         onClose={handleCancelConnectDialog}
146 |         permissions={permissions}
147 |         appName={appName}
148 |         profile={profile}
149 |         providers={providers}
150 |       />
151 |     </>
152 |   );
153 | };
154 | 


--------------------------------------------------------------------------------
/src/modules/wallet/ConnectWalletDialog.tsx:
--------------------------------------------------------------------------------
  1 | import * as React from "react";
  2 | import { PermissionType } from "arconnect";
  3 | import { RxCross1 } from "react-icons/rx";
  4 | import { useConnect } from "../../hooks/useConnect";
  5 | import { PermaProfile } from "../../types";
  6 | import { ArweaveLogo } from "./components/ArweaveLogo";
  7 | import { ArconnectLogo } from "./components/ArconnectLogo";
  8 | import { ConnectIcon } from "./components/ConnectIcon";
  9 | import { Button } from "@/ui/Button";
 10 | import {
 11 |   Dialog,
 12 |   DialogClose,
 13 |   DialogContent,
 14 |   DialogDescription,
 15 |   DialogTitle,
 16 | } from "@/ui/Dialog";
 17 | import { IconButton } from "@/ui/IconButton";
 18 | import { Typography } from "@/ui/Typography";
 19 | import { Flex } from "@/ui/Flex";
 20 | 
 21 | interface WalletServiceProps {
 22 |   name: "Arweave.app" | "Arconnect";
 23 |   logo: any;
 24 | }
 25 | 
 26 | const walletItems: WalletServiceProps[] = [
 27 |   {
 28 |     name: "Arconnect",
 29 |     logo: "https://arweave.net/dKJd2vi7RXG3kxaotGDLD6VZjLn58AD4xan5L9cN9es",
 30 |   },
 31 |   {
 32 |     name: "Arweave.app",
 33 |     logo: "https://arweave.net/9ENUQI5qIZDH5C9Ot7SjgRRgKwNIMETanueDKudxIRU",
 34 |   },
 35 | ];
 36 | 
 37 | interface WalletItemProps {
 38 |   name: string | WalletServiceProps["name"];
 39 |   logo: any;
 40 |   connect: (name: string) => void;
 41 | }
 42 | 
 43 | const WalletItem = React.forwardRef<HTMLButtonElement, WalletItemProps>(
 44 |   ({ name, logo, connect }, ref) => {
 45 |     return (
 46 |       <Button
 47 |         onClick={() => connect(name.toLowerCase())}
 48 |         variant="ghost"
 49 |         css={{
 50 |           br: "$3",
 51 |           height: "$12",
 52 |           alignItems: "center",
 53 |           gap: "$2",
 54 |           fontWeight: "$5",
 55 |           letterSpacing: "-0.4px",
 56 |           "& svg": {
 57 |             size: "$7",
 58 |             color: name === "Arconnect" ? "#fff" : "$slate1",
 59 |           },
 60 |           color: name === "Arconnect" ? "#fff" : "$slate1",
 61 |           backgroundColor:
 62 |             name === "Arconnect"
 63 |               ? "$violet9"
 64 |               : name === "Arweave.app"
 65 |               ? "$slate12"
 66 |               : "$slate2",
 67 | 
 68 |           "&:hover": {
 69 |             backgroundColor:
 70 |               name === "Arconnect"
 71 |                 ? "$violet10"
 72 |                 : name === "Arweave.app"
 73 |                 ? "$slate11"
 74 |                 : "$slate4",
 75 |           },
 76 |         }}
 77 |         size="3"
 78 |         ref={ref}
 79 |       >
 80 |         {name === "Arweave.app" ? <ArweaveLogo /> : <ArconnectLogo />}
 81 |         Connect with {name}
 82 |       </Button>
 83 |     );
 84 |   }
 85 | );
 86 | 
 87 | interface ConnectWalletDialogProps {
 88 |   open: boolean;
 89 |   onClose: () => void;
 90 |   permissions: PermissionType[];
 91 |   profile: PermaProfile | undefined;
 92 |   appName?: string;
 93 |   providers?: {
 94 |     arweaveApp: boolean;
 95 |     arconnect: boolean;
 96 |   };
 97 | }
 98 | 
 99 | export const ConnectWalletDialog = (props: ConnectWalletDialogProps) => {
100 |   const {
101 |     connect,
102 |     walletAddress,
103 |     addresses,
104 |     completeConnection,
105 |     setState,
106 |     reconnect,
107 |   } = useConnect();
108 |   const {
109 |     permissions,
110 |     profile,
111 |     appName,
112 |     providers = { arconnect: true, arweaveApp: true },
113 |   } = props;
114 | 
115 |   const handleConnect = (name: string) => {
116 |     props.onClose();
117 |     return connect({
118 |       appName: appName || "this app",
119 |       walletProvider: name as "arweave.app" | "arconnect",
120 |       permissions,
121 |     });
122 |   };
123 | 
124 |   const providerName = (name: string) => {
125 |     if (name === "Arconnect") {
126 |       return providers?.arconnect ? "Arconnect" : "";
127 |     }
128 |     if (name === "Arweave.app") {
129 |       return providers?.arweaveApp ? "Arweave.app" : "";
130 |     }
131 |   };
132 | 
133 |   return (
134 |     <Dialog
135 |       open={props.open}
136 |       onOpenChange={() => {
137 |         setState((prevValues) => ({ ...prevValues }));
138 |         props.onClose();
139 |       }}
140 |     >
141 |       <DialogContent
142 |         css={{
143 |           maxWidth: 420,
144 |           px: "$7",
145 |           py: "$5",
146 |           display: "flex",
147 |           flexDirection: "column",
148 |           gap: "$5",
149 |           br: "$4",
150 |         }}
151 |       >
152 |         <DialogClose asChild>
153 |           <IconButton aria-label="Close Dialog" variant="subtle" size="1">
154 |             <RxCross1 />
155 |           </IconButton>
156 |         </DialogClose>
157 |         <DialogTitle asChild>
158 |           <Typography size="4" weight="6" contrast="hi">
159 |             Connect a Wallet
160 |           </Typography>
161 |         </DialogTitle>
162 |         <Flex
163 |           css={{
164 |             width: "100%",
165 |             color: "$slate12",
166 |           }}
167 |           justify="center"
168 |         >
169 |           <ConnectIcon width={150} height={150} />
170 |         </Flex>
171 |         <DialogDescription asChild>
172 |           <Typography css={{ textAlign: "center" }} size="4">
173 |             Choose a wallet to connect to <br />
174 |             <Typography size="4" as="span" weight="6" contrast="hi">
175 |               {appName || "this app"}
176 |             </Typography>
177 |             :
178 |           </Typography>
179 |         </DialogDescription>
180 |         {/* <Box
181 |             css={{
182 |               $minusMargin: '28px',
183 |               width: 'calc(100% + $minusMargin * 2)',
184 |               height: 1,
185 |               backgroundColor: '$slate5',
186 |               mx: '-$minusMargin',
187 |               position: 'relative',
188 |             }}
189 |           /> */}
190 |         <Flex css={{ br: "$4", width: "100%" }} direction="column" gap="2">
191 |           {walletItems
192 |             .filter(
193 |               (walletItem) => walletItem.name === providerName(walletItem.name)
194 |             )
195 |             .map((wallet) => (
196 |               <DialogClose key={wallet.name} asChild>
197 |                 <WalletItem
198 |                   connect={handleConnect}
199 |                   name={wallet.name}
200 |                   logo={wallet.logo}
201 |                 />
202 |               </DialogClose>
203 |             ))}
204 |           {/* <Checkbox
205 |               defaultChecked={reconnect}
206 |               onCheckedChange={(e) => {
207 |                 if (e) {
208 |                   setState((prevValues) => ({
209 |                     ...prevValues,
210 |                     reconnect: true,
211 |                   }));
212 |                 } else {
213 |                   setState((prevValues) => ({
214 |                     ...prevValues,
215 |                     reconnect: false,
216 |                   }));
217 |                 }
218 |               }}
219 |               size="3"
220 |               variant="outline"
221 |               css={{
222 |                 my: "$3",
223 |               }}
224 |             >
225 |               Stay connected (Arweave.app)
226 |             </Checkbox> */}
227 |           <Typography
228 |             as="a"
229 |             css={{ color: "$slate11", textAlign: "center", my: "$5" }}
230 |             href="https://arconnect.io/"
231 |             //   external
232 |           >
233 |             I don't have a wallet
234 |           </Typography>
235 |         </Flex>
236 |       </DialogContent>
237 |     </Dialog>
238 |   );
239 | };
240 | 


--------------------------------------------------------------------------------
/src/modules/wallet/components/ArweaveLogo.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import { IconProps } from "../../../types";
 3 | 
 4 | export const ArweaveLogo = ({ width = 28, height = 28 }: IconProps) => (
 5 |   <svg
 6 |     width={width}
 7 |     height={height}
 8 |     viewBox="0 0 28 28"
 9 |     fill="none"
10 |     xmlns="http://www.w3.org/2000/svg"
11 |   >
12 |     <g clipPath="url(#clip0_436_22520)">
13 |       <path
14 |         fillRule="evenodd"
15 |         clipRule="evenodd"
16 |         d="M13.995 0C21.719 0 27.9899 6.27094 27.9899 13.995C27.9899 21.719 21.719 27.9899 13.995 27.9899C6.27091 27.9899 0 21.719 0 13.995C0 6.27091 6.27094 0 13.995 0ZM13.995 2.17989C20.5159 2.17989 25.8101 7.47405 25.8101 13.995C25.8101 20.5159 20.5159 25.8101 13.995 25.8101C7.47402 25.8101 2.17985 20.5159 2.17985 13.995C2.17985 7.47405 7.47402 2.17989 13.995 2.17989Z"
17 |         fill="currentColor"
18 |       />
19 |       <path
20 |         d="M16.1314 18.4629C16.0792 18.3329 16.027 18.2029 15.9747 18.0468C15.9224 17.8907 15.8963 17.7087 15.8702 17.5526C15.7396 17.7087 15.5567 17.8387 15.3738 17.9948C15.1909 18.1248 14.9819 18.2548 14.7467 18.3589C14.5377 18.4629 14.2764 18.541 14.0152 18.593C13.754 18.645 13.4666 18.697 13.153 18.697C12.6566 18.697 12.1863 18.619 11.7422 18.489C11.3242 18.3329 10.9584 18.1508 10.6449 17.8647C10.3314 17.6046 10.0962 17.2925 9.93952 16.9284C9.75663 16.5643 9.67822 16.1741 9.67822 15.7319C9.67822 14.6915 10.0702 13.8853 10.8539 13.3131C11.6377 12.7409 12.8134 12.4548 14.3549 12.4548H15.7918V11.8565C15.7918 11.3884 15.635 10.9982 15.3215 10.7381C15.008 10.452 14.5639 10.322 13.963 10.322C13.4404 10.322 13.0747 10.426 12.8134 10.6601C12.5783 10.8681 12.4476 11.1803 12.4476 11.5444H9.88726C9.88726 11.1282 9.99175 10.7121 10.1746 10.348C10.3575 9.95781 10.6449 9.64569 10.9846 9.35958C11.3503 9.07348 11.7945 8.83942 12.2909 8.68335C12.8134 8.50128 13.4143 8.42328 14.0675 8.42328C14.6684 8.42328 15.217 8.50128 15.7396 8.63132C16.2621 8.78739 16.7062 8.99548 17.0981 9.28158C17.49 9.56769 17.7774 9.93184 17.9864 10.374C18.1954 10.8162 18.3 11.3103 18.3 11.8825V16.1221C18.3 16.6423 18.326 17.0844 18.4044 17.4486C18.4828 17.7867 18.5612 18.0988 18.6918 18.3329L18.792 18.489H16.1429L16.1314 18.4629ZM13.7017 16.6683C13.963 16.6683 14.1981 16.6423 14.4071 16.5643C14.6161 16.5122 14.8251 16.4342 15.008 16.3301C15.1909 16.2261 15.3476 16.1221 15.4783 15.9921C15.6089 15.862 15.7134 15.7319 15.7918 15.6019V13.9113H14.4855C14.0936 13.9113 13.754 13.9633 13.4666 14.0413C13.1792 14.1193 12.944 14.2234 12.7872 14.3535C12.6044 14.4835 12.4738 14.6396 12.3954 14.8476C12.317 15.0297 12.2648 15.2378 12.2648 15.4718C12.2648 15.81 12.3954 16.0961 12.6305 16.3301C12.8395 16.5643 13.2053 16.6683 13.7017 16.6683Z"
21 |         fill="currentColor"
22 |       />
23 |     </g>
24 |     <defs>
25 |       <clipPath id="clip0_436_22520">
26 |         <rect width={width} height={height} fill="currentColor" />
27 |       </clipPath>
28 |     </defs>
29 |   </svg>
30 | );
31 | 


--------------------------------------------------------------------------------
/src/modules/wallet/components/ConnectIcon.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import { IconProps } from "../../../types";
 3 | 
 4 | export const ConnectIcon = ({ width = 28, height = 28 }: IconProps) => (
 5 |   <svg
 6 |     xmlns="http://www.w3.org/2000/svg"
 7 |     width={width}
 8 |     height={height}
 9 |     fill="none"
10 |     viewBox="0 0 200 200"
11 |   >
12 |     <path
13 |       fill="currentColor"
14 |       d="M76.9 100.2a3.283 3.283 0 0 0-4.64 0 3.283 3.283 0 0 0 0 4.64l.52.52-16.18 16.18c-.88.88-.88 2.34 0 3.22l1.84 1.84-.56.56a5.865 5.865 0 0 0-.64 7.52l-4.56 4.56 1.58 1.58c-.22.24-.44.479-.66.74-1.06-.94-1.86-1.52-2-1.4-.14.14.48.96 1.46 2.06-.199.26-.399.52-.58.78-.98-.74-1.74-1.18-1.86-1.04-.119.14.461.86 1.381 1.74l-.48.78c-.72-.5-1.24-.759-1.34-.64-.12.14.28.66.96 1.34l-.18.36c-1.82 3.601-2.5 7.66-1.539 11.62.9 3.72 3.14 7.12 6.38 9.18 3.56 2.26 7.92 2.26 11.92 1.48 1.88-.361 3.72-.98 5.62-1.28h.04c.06 0 .22-.021.26-.021.24-.02.46-.039.7-.039.24 0 .46 0 .7.02.1 0 .2.02.3.02.48.08.94.22 1.4.38.1.04.18.08.28.14.24.12.46.24.68.36.36.22.72.461 1.06.7 1.66 1.32 3.14 2.88 4.62 4.4 1.66 1.679 3.28 3.42 4.74 5.28.54.72 1.04 1.46 1.52 2.22l2.84-2.84c-2-2.98-4.48-5.62-7.02-8.14-2.56-2.56-5.34-5.66-9.101-6.28-3.58-.6-6.96.86-10.44 1.44-.22.04-.42.06-.64.1h-.02c-.1 0-.18.02-.28.02-.48.04-.96.081-1.44.101-.48.02-.94 0-1.42-.02-.2-.021-.4-.04-.62-.06-.1-.021-.2-.021-.3-.04-.46-.08-.92-.18-1.38-.32-.2-.06-.4-.12-.58-.2-.02 0-.02 0-.04-.02.04.02.08.02.08.02s-.08-.02-.22-.08h.04a.283.283 0 0 0-.12-.04c.04.02.08.02.1.04-.68-.3-1.32-.68-1.94-1.12-.7-.56-1.34-1.22-1.9-1.92-.3-.42-.58-.86-.84-1.3-.14-.24-.259-.48-.38-.74-.08-.14-.14-.301-.2-.441-.02-.059-.08-.199-.119-.3 0-.02-.02-.039-.02-.06v.021c-.16-.461-.34-.941-.46-1.42-.08-.28-.14-.58-.2-.86-.02-.12-.04-.26-.08-.381-.02-.08-.02-.16-.04-.22v-.02c-.06-.56-.08-1.14-.08-1.7 0-.28.02-.56.04-.839 0-.12.02-.241.04-.361v.04-.14c0-.06.02-.12.02-.14-.02.08-.02.14-.04.22v.02c.02-.16.04-.24.04-.24.1-.64.24-1.26.42-1.86.08-.3.18-.62.3-.92.04-.14.1-.28.16-.42.02-.059.06-.14.06-.16.1-.24.2-.46.32-.679.42.259.7.36.78.28.08-.101-.1-.42-.48-.86.16-.301.34-.62.52-.9.68.46 1.16.7 1.24.6.1-.12-.24-.58-.86-1.22.14-.2.28-.42.42-.62.98.86 1.7 1.36 1.82 1.24.12-.119-.42-.88-1.32-1.899.22-.26.42-.5.66-.76l1.58 1.58 4.52-4.52c2.3 1.98 5.78 1.9 7.961-.3l.56-.56 1.84 1.84c.88.88 2.34.88 3.22 0l16.18-16.18.617.538a3.283 3.283 0 0 0 4.64 0 3.283 3.283 0 0 0 0-4.64L76.9 100.2Zm47.92-4.48c.64.64 1.48.96 2.32.96.84 0 1.68-.32 2.321-.96a3.283 3.283 0 0 0 0-4.64l-.461-.46 9.06-9.06c4.44-4.44 5.34-11.1 2.66-16.42l4.64-4.64-1.58-1.58c.22-.24.44-.48.66-.74 1.06.94 1.86 1.52 2 1.4.14-.14-.479-.961-1.46-2.06.2-.26.4-.52.58-.78.98.74 1.74 1.18 1.86 1.04.12-.14-.46-.86-1.38-1.741l.48-.78c.72.5 1.24.76 1.34.64.12-.14-.28-.66-.961-1.34l.18-.36c1.82-3.6 2.5-7.66 1.54-11.62-.9-3.72-3.14-7.12-6.38-9.18-3.56-2.26-7.92-2.26-11.92-1.48-1.881.36-3.72.98-5.62 1.28h-.041c-.059 0-.22.021-.259.021-.241.02-.461.04-.7.04-.24 0-.46 0-.7-.02-.1 0-.2-.02-.3-.02-.48-.08-.94-.22-1.4-.38-.1-.04-.18-.081-.28-.14-.24-.12-.46-.241-.68-.36-.36-.22-.72-.461-1.059-.7-1.661-1.321-3.14-2.88-4.62-4.4-1.66-1.68-3.28-3.42-4.74-5.28-.48-.64-.941-1.3-1.381-1.98l-2.839 2.84c1.96 2.88 4.38 5.44 6.839 7.9 2.56 2.56 5.34 5.66 9.101 6.28 3.58.6 6.96-.86 10.44-1.44.22-.04.42-.06.64-.101h.02c.1 0 .18-.02.28-.02.48-.04.96-.08 1.44-.1.48-.02.94 0 1.42.02.2.02.4.04.62.06.1.02.2.02.3.04.46.08.92.179 1.38.32.2.06.4.12.58.2.02 0 .02 0 .04.02h-.121s.081.021.221.081h-.041c.04.02.08.04.12.04-.04-.02-.08-.02-.1-.04.679.3 1.32.68 1.94 1.12.7.56 1.34 1.22 1.9 1.92.3.42.58.86.839 1.3.14.24.26.48.381.74.08.14.14.3.199.44.021.06.081.2.12.28v.02c0 .02 0 .02.02.04v-.02c.161.46.34.94.461 1.42.08.28.14.58.2.86.02.12.039.26.08.38.02.08.02.16.039.22v.02c.06.56.08 1.14.08 1.7 0 .28-.02.56-.039.84 0 .12-.02.24-.04.36v-.04.14c0 .04-.02.12-.02.14.02-.08.02-.14.04-.22v-.02c-.021.16-.04.24-.04.24-.1.64-.24 1.26-.42 1.86-.08.3-.18.62-.3.92-.04.14-.1.28-.16.42-.021.06-.06.14-.06.16-.101.24-.2.46-.321.68-.42-.26-.699-.36-.78-.28-.08.1.101.42.48.86-.16.3-.34.62-.52.9-.68-.46-1.16-.7-1.24-.6-.1.12.24.58.86 1.22-.14.2-.28.42-.42.62-.98-.86-1.7-1.36-1.82-1.24-.12.119.42.88 1.32 1.899-.22.26-.42.5-.66.76l-1.58-1.58-4.5 4.5c-5.4-3-12.36-2.2-16.94 2.38l-9.06 9.06-.6-.6a3.272 3.272 0 0 0-2.321-.961c-.84 0-1.679.32-2.32.96a3.283 3.283 0 0 0 0 4.64L124.82 95.72Zm-17.9 5.74c-.86.86-.86 2.26 0 3.1.42.42 1 .64 1.56.64s1.12-.22 1.56-.64l10.82-10.82-3.1-3.1-10.84 10.82ZM95.4 93.04c.42.42 1 .64 1.56.64s1.12-.22 1.56-.64l10.82-10.82-3.1-3.1-10.82 10.82c-.88.86-.88 2.24-.02 3.1ZM75.1 76.76c.48.48 1.3.42 1.84-.14.54-.54.6-1.38.14-1.84L66.34 64.04c-.48-.48-1.3-.42-1.84.14-.54.54-.6 1.38-.14 1.84L75.1 76.76Zm8.82-7.18c.26.64 1.02.86 1.7.5.14-.08.28-.16.38-.28.4-.4.58-1 .36-1.5l-3.76-9.2c-.26-.64-1.02-.86-1.7-.5-.68.36-1.02 1.16-.76 1.78l3.78 9.2Zm11.66-2.98c.32-.06.62-.22.84-.44.28-.28.46-.66.46-1.06l-.24-16.22c-.02-.72-.6-1.2-1.32-1.08-.72.12-1.3.78-1.3 1.5l.24 16.22c0 .7.6 1.2 1.32 1.08ZM59.1 82.62l9.8 3.96c.5.2 1.1.04 1.5-.36.12-.12.22-.24.28-.4.36-.68.12-1.44-.5-1.7l-9.8-3.96c-.64-.26-1.44.08-1.78.76-.36.68-.12 1.44.5 1.7Zm-9.18 14.6 16.22.24c.4 0 .78-.18 1.06-.46.22-.22.38-.52.44-.84.12-.72-.38-1.32-1.08-1.32l-16.22-.24c-.72-.02-1.38.56-1.5 1.3-.12.72.38 1.3 1.08 1.32Zm74.24 24.64c-.48-.48-1.3-.42-1.84.14-.54.54-.6 1.38-.14 1.84l10.74 10.74c.48.48 1.3.42 1.84-.14s.6-1.38.14-1.84l-10.74-10.74Zm15.68-5.52-9.2-3.76c-.5-.2-1.1-.04-1.5.36-.12.12-.2.24-.28.38-.36.68-.14 1.44.5 1.7l9.2 3.76c.64.26 1.44-.08 1.78-.76.36-.66.12-1.42-.5-1.68Zm10.24-14.02-16.22-.24c-.4 0-.78.179-1.06.46-.22.22-.38.52-.44.84-.12.72.38 1.32 1.08 1.32l16.22.24c.72.02 1.38-.56 1.5-1.3.12-.721-.38-1.32-1.08-1.32Zm-35.26 26.44c-.26-.64-1.02-.86-1.7-.5-.14.08-.28.18-.4.28-.399.4-.559 1-.36 1.5l3.961 9.8c.259.64 1.02.86 1.7.5.679-.36 1.02-1.16.759-1.78l-3.96-9.8Zm-12.04 2.54c-.32.06-.62.22-.84.44-.28.28-.46.66-.46 1.06l.24 16.22c.02.72.6 1.2 1.32 1.08.72-.12 1.301-.78 1.301-1.5l-.241-16.22c0-.72-.58-1.2-1.32-1.08Z"
15 |     />
16 |   </svg>
17 | );
18 | 


--------------------------------------------------------------------------------
/src/router/index.tsx:
--------------------------------------------------------------------------------
 1 | import { Home } from "@/modules/home";
 2 | import { Upload } from "@/modules/upload";
 3 | import { HashRouter, Route, Routes } from "react-router-dom";
 4 | 
 5 | export const AppRouter = () => (
 6 |   <HashRouter>
 7 |     <Routes>
 8 |       <Route path={"/"} element={<Home />} />
 9 |       <Route path={"/upload"} element={<Upload />} />
10 |     </Routes>
11 |   </HashRouter>
12 | );
13 | 


--------------------------------------------------------------------------------
/src/stitches.config.ts:
--------------------------------------------------------------------------------
  1 | import type * as Stitches from "@stitches/react";
  2 | import { createStitches } from "@stitches/react";
  3 | import { slate, slateDark } from "@/styles/colors/slate";
  4 | import { blue, blueDark } from "@/styles/colors/blue";
  5 | import { green, greenDark } from "@/styles/colors/green";
  6 | import { red, redDark } from "@/styles/colors/red";
  7 | import { violet, violetDark } from "@/styles/colors/violet";
  8 | import { yellow, yellowDark } from "@/styles/colors/yellow";
  9 | import {
 10 |   blackA,
 11 |   neutralA,
 12 |   neutralADark,
 13 |   neutralInvertedA,
 14 |   neutralInvertedADark,
 15 |   whiteA,
 16 | } from "@/styles/colors/alpha";
 17 | 
 18 | export const {
 19 |   styled,
 20 |   css,
 21 |   theme,
 22 |   globalCss,
 23 |   keyframes,
 24 |   getCssText,
 25 |   config,
 26 |   createTheme,
 27 | } = createStitches({
 28 |   theme: {
 29 |     colors: {
 30 |       ...slate,
 31 |       ...blue,
 32 |       ...green,
 33 |       ...red,
 34 |       ...violet,
 35 |       ...yellow,
 36 |       ...blackA,
 37 |       ...whiteA,
 38 |       ...neutralA,
 39 |       ...neutralInvertedA,
 40 | 
 41 |       focus: "$colors$blue8",
 42 |       slateSolidHover: "hsl(206, 6.0%, 15.0%)",
 43 |       slateSolidActive: "hsl(206, 6.0%, 24.0%)",
 44 |     },
 45 |     fonts: {
 46 |       heading: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
 47 |       body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
 48 |     },
 49 |     space: {
 50 |       1: "4px",
 51 |       2: "8px",
 52 |       3: "12px",
 53 |       4: "16px",
 54 |       5: "20px",
 55 |       6: "24px",
 56 |       7: "28px",
 57 |       8: "32px",
 58 |       9: "36px",
 59 |       10: "40px",
 60 |       15: "60px",
 61 |       20: "80px",
 62 |     },
 63 |     sizes: {
 64 |       1: "4px",
 65 |       2: "8px",
 66 |       3: "12px",
 67 |       4: "16px",
 68 |       5: "20px",
 69 |       6: "24px",
 70 |       7: "28px",
 71 |       8: "32px",
 72 |       9: "36px",
 73 |       10: "40px",
 74 |       11: "44px",
 75 |     },
 76 |     fontSizes: {
 77 |       1: "13px",
 78 |       2: "15px",
 79 |       3: "16px",
 80 |       4: "21px",
 81 |       5: "24px",
 82 |       6: "30px",
 83 |       7: "36px",
 84 |       8: "48px",
 85 |       9: "72px",
 86 |     },
 87 |     lineHeights: {
 88 |       none: 1,
 89 |       1: "1rem",
 90 |       2: "1.25rem",
 91 |       3: "1.5rem",
 92 |       4: "1.75rem",
 93 |       5: "1.75rem",
 94 |       6: "2rem",
 95 |       7: "2.25rem",
 96 |       8: "2.5rem",
 97 |       9: "3rem",
 98 |       10: "4rem",
 99 |       11: "4.5rem",
100 |       12: "6rem",
101 |     },
102 |     fontWeights: {
103 |       1: 100,
104 |       2: 200,
105 |       3: 300,
106 |       4: 400,
107 |       5: 500,
108 |       6: 600,
109 |       7: 700,
110 |       8: 800,
111 |       9: 900,
112 |     },
113 |     radii: {
114 |       1: "4px",
115 |       2: "6px",
116 |       3: "8px",
117 |       4: "12px",
118 |       round: "50%",
119 |       pill: "9999px",
120 |     },
121 |   },
122 |   media: {
123 |     bp1: "(min-width: 520px)",
124 |     bp2: "(min-width: 768px)",
125 |     bp3: "(min-width: 1024px)",
126 |     bp4: "(min-width: 1280px)",
127 |     bp5: "(min-width: 1536px)",
128 |     motionOK: "(prefers-reduced-motion: no-preference)",
129 |     hover: "(any-hover: hover)",
130 |     dark: "(prefers-color-scheme: dark)",
131 |     light: "(prefers-color-scheme: light)",
132 |   },
133 |   utils: {
134 |     p: (value: Stitches.PropertyValue<"padding">) => ({
135 |       paddingTop: value,
136 |       paddingBottom: value,
137 |       paddingLeft: value,
138 |       paddingRight: value,
139 |     }),
140 |     pt: (value: Stitches.PropertyValue<"padding">) => ({
141 |       paddingTop: value,
142 |     }),
143 |     pr: (value: Stitches.PropertyValue<"padding">) => ({
144 |       paddingRight: value,
145 |     }),
146 |     pb: (value: Stitches.PropertyValue<"padding">) => ({
147 |       paddingBottom: value,
148 |     }),
149 |     pl: (value: Stitches.PropertyValue<"padding">) => ({
150 |       paddingLeft: value,
151 |     }),
152 |     px: (value: Stitches.PropertyValue<"padding">) => ({
153 |       paddingLeft: value,
154 |       paddingRight: value,
155 |     }),
156 |     py: (value: Stitches.PropertyValue<"padding">) => ({
157 |       paddingTop: value,
158 |       paddingBottom: value,
159 |     }),
160 | 
161 |     m: (value: Stitches.PropertyValue<"margin">) => ({
162 |       marginTop: value,
163 |       marginBottom: value,
164 |       marginLeft: value,
165 |       marginRight: value,
166 |     }),
167 |     mt: (value: Stitches.PropertyValue<"margin">) => ({
168 |       marginTop: value,
169 |     }),
170 |     mr: (value: Stitches.PropertyValue<"margin">) => ({
171 |       marginRight: value,
172 |     }),
173 |     mb: (value: Stitches.PropertyValue<"margin">) => ({
174 |       marginBottom: value,
175 |     }),
176 |     ml: (value: Stitches.PropertyValue<"margin">) => ({
177 |       marginLeft: value,
178 |     }),
179 |     mx: (value: Stitches.PropertyValue<"margin">) => ({
180 |       marginLeft: value,
181 |       marginRight: value,
182 |     }),
183 |     my: (value: Stitches.PropertyValue<"margin">) => ({
184 |       marginTop: value,
185 |       marginBottom: value,
186 |     }),
187 | 
188 |     br: (value: Stitches.PropertyValue<"borderRadius">) => ({
189 |       borderRadius: value,
190 |     }),
191 |     boxSize: (value: Stitches.PropertyValue<"width">) => ({
192 |       width: value,
193 |       height: value,
194 |     }),
195 |   },
196 | });
197 | 
198 | export const darkTheme = createTheme("dark-theme", {
199 |   colors: {
200 |     ...slateDark,
201 |     ...blueDark,
202 |     ...greenDark,
203 |     ...redDark,
204 |     ...violetDark,
205 |     ...yellowDark,
206 |     ...blackA,
207 |     ...whiteA,
208 |     ...neutralADark,
209 |     ...neutralInvertedADark,
210 | 
211 |     focus: "$colors$blue10",
212 |     slateSolidHover: "hsl(206, 6.0%, 85.0%)",
213 |     slateSolidActive: "hsl(206, 6.0%, 75.0%)",
214 |   },
215 | });
216 | 
217 | export type CSS = Stitches.CSS<typeof config>;
218 | export type {
219 |   ComponentProps,
220 |   VariantProps,
221 |   PropertyValue,
222 |   ScaleValue,
223 | } from "@stitches/react";
224 | 


--------------------------------------------------------------------------------
/src/styles/Home.module.css:
--------------------------------------------------------------------------------
  1 | .main {
  2 |   display: flex;
  3 |   flex-direction: column;
  4 |   justify-content: center;
  5 |   align-items: center;
  6 |   padding: 6rem;
  7 |   min-height: 100vh;
  8 | }
  9 | 
 10 | .heading {
 11 |   font-size: 4rem;
 12 |   font-weight: 600;
 13 |   letter-spacing: -3px;
 14 |   background: linear-gradient(
 15 |     to right,
 16 |     #fff 10%,
 17 |     #6783df 30%,
 18 |     #90a6ee 60%,
 19 |     #fff 90%
 20 |   );
 21 |   background-size: 200% auto;
 22 |   background-clip: text;
 23 |   color: #000;
 24 |   text-fill-color: transparent;
 25 |   -webkit-background-clip: text;
 26 |   -webkit-text-fill-color: transparent;
 27 |   animation: shine 5s linear infinite;
 28 | }
 29 | 
 30 | @keyframes shine {
 31 |   to {
 32 |     background-position: 200% center;
 33 |   }
 34 | }
 35 | 
 36 | .description {
 37 |   display: inherit;
 38 |   justify-content: inherit;
 39 |   align-items: inherit;
 40 |   font-size: 0.85rem;
 41 |   max-width: var(--max-width);
 42 |   width: 100%;
 43 |   z-index: 2;
 44 |   font-family: var(--font-mono);
 45 | }
 46 | 
 47 | .description a {
 48 |   display: flex;
 49 |   justify-content: center;
 50 |   align-items: center;
 51 |   gap: 0.5rem;
 52 | }
 53 | 
 54 | .description p {
 55 |   position: relative;
 56 |   margin: 0;
 57 |   padding: 1rem;
 58 |   background-color: rgba(var(--callout-rgb), 0.5);
 59 |   border: 1px solid rgba(var(--callout-border-rgb), 0.3);
 60 |   border-radius: var(--border-radius);
 61 | }
 62 | 
 63 | .code {
 64 |   font-weight: 700;
 65 |   font-family: var(--font-mono);
 66 | }
 67 | 
 68 | .grid {
 69 |   display: grid;
 70 |   grid-template-columns: repeat(4, minmax(25%, auto));
 71 |   width: var(--max-width);
 72 |   max-width: 100%;
 73 |   margin-top: 4rem;
 74 | }
 75 | 
 76 | .card {
 77 |   padding: 1rem 1.2rem;
 78 |   border-radius: var(--border-radius);
 79 |   background: rgba(var(--card-rgb), 0);
 80 |   border: 1px solid rgba(var(--card-border-rgb), 0);
 81 |   transition: background 200ms, border 200ms;
 82 | }
 83 | 
 84 | .card span {
 85 |   display: inline-block;
 86 |   transition: transform 200ms;
 87 | }
 88 | 
 89 | .card h2 {
 90 |   font-weight: 600;
 91 |   margin-bottom: 0.7rem;
 92 | }
 93 | 
 94 | .card p {
 95 |   margin: 0;
 96 |   opacity: 0.6;
 97 |   font-size: 0.9rem;
 98 |   line-height: 1.5;
 99 |   max-width: 30ch;
100 | }
101 | 
102 | .center {
103 |   display: flex;
104 |   justify-content: center;
105 |   align-items: center;
106 |   position: relative;
107 |   padding: 4rem 0;
108 | }
109 | 
110 | .center::before {
111 |   background: var(--secondary-glow);
112 |   border-radius: 50%;
113 |   width: 480px;
114 |   height: 360px;
115 |   margin-left: -400px;
116 | }
117 | 
118 | .center::after {
119 |   background: var(--primary-glow);
120 |   width: 240px;
121 |   height: 180px;
122 |   z-index: -1;
123 | }
124 | 
125 | .center::before,
126 | .center::after {
127 |   content: "";
128 |   left: 50%;
129 |   position: absolute;
130 |   filter: blur(45px);
131 |   transform: translateZ(0);
132 | }
133 | 
134 | .logo,
135 | .thirteen {
136 |   position: relative;
137 | }
138 | 
139 | .thirteen {
140 |   display: flex;
141 |   justify-content: center;
142 |   align-items: center;
143 |   width: 75px;
144 |   height: 75px;
145 |   padding: 25px 10px;
146 |   margin-left: 16px;
147 |   transform: translateZ(0);
148 |   border-radius: var(--border-radius);
149 |   overflow: hidden;
150 |   box-shadow: 0px 2px 8px -1px #0000001a;
151 | }
152 | 
153 | .thirteen::before,
154 | .thirteen::after {
155 |   content: "";
156 |   position: absolute;
157 |   z-index: -1;
158 | }
159 | 
160 | /* Conic Gradient Animation */
161 | .thirteen::before {
162 |   animation: 6s rotate linear infinite;
163 |   width: 200%;
164 |   height: 200%;
165 |   background: var(--tile-border);
166 | }
167 | 
168 | /* Inner Square */
169 | .thirteen::after {
170 |   inset: 0;
171 |   padding: 1px;
172 |   border-radius: var(--border-radius);
173 |   background: linear-gradient(
174 |     to bottom right,
175 |     rgba(var(--tile-start-rgb), 1),
176 |     rgba(var(--tile-end-rgb), 1)
177 |   );
178 |   background-clip: content-box;
179 | }
180 | 
181 | /* Enable hover only on non-touch devices */
182 | @media (hover: hover) and (pointer: fine) {
183 |   .card:hover {
184 |     background: rgba(var(--card-rgb), 0.1);
185 |     border: 1px solid rgba(var(--card-border-rgb), 0.15);
186 |   }
187 | 
188 |   .card:hover span {
189 |     transform: translateX(4px);
190 |   }
191 | }
192 | 
193 | @media (prefers-reduced-motion) {
194 |   .thirteen::before {
195 |     animation: none;
196 |   }
197 | 
198 |   .card:hover span {
199 |     transform: none;
200 |   }
201 | }
202 | 
203 | /* Mobile */
204 | @media (max-width: 700px) {
205 |   .content {
206 |     padding: 4rem;
207 |   }
208 | 
209 |   .grid {
210 |     grid-template-columns: 1fr;
211 |     margin-bottom: 120px;
212 |     max-width: 320px;
213 |     text-align: center;
214 |   }
215 | 
216 |   .card {
217 |     padding: 1rem 2.5rem;
218 |     z-index: 1;
219 |   }
220 | 
221 |   .card h2 {
222 |     margin-bottom: 0.5rem;
223 |   }
224 | 
225 |   .center {
226 |     padding: 8rem 0 6rem;
227 |   }
228 | 
229 |   .center::before {
230 |     transform: none;
231 |     height: 300px;
232 |   }
233 | 
234 |   .description {
235 |     font-size: 0.8rem;
236 |   }
237 | 
238 |   .description a {
239 |     padding: 1rem;
240 |   }
241 | 
242 |   .description p,
243 |   .description div {
244 |     display: flex;
245 |     justify-content: center;
246 |     position: fixed;
247 |     width: 100%;
248 |   }
249 | 
250 |   .description p {
251 |     align-items: center;
252 |     inset: 0 0 auto;
253 |     padding: 2rem 1rem 1.4rem;
254 |     border-radius: 0;
255 |     border: none;
256 |     border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
257 |     background: linear-gradient(
258 |       to bottom,
259 |       rgba(var(--background-start-rgb), 1),
260 |       rgba(var(--callout-rgb), 0.5)
261 |     );
262 |     background-clip: padding-box;
263 |     backdrop-filter: blur(24px);
264 |   }
265 | 
266 |   .description div {
267 |     align-items: flex-end;
268 |     pointer-events: none;
269 |     inset: auto 0 0;
270 |     padding: 2rem;
271 |     height: 200px;
272 |     background: linear-gradient(
273 |       to bottom,
274 |       transparent 0%,
275 |       rgb(var(--background-end-rgb)) 40%
276 |     );
277 |     z-index: 1;
278 |   }
279 | }
280 | 
281 | /* Tablet and Smaller Desktop */
282 | @media (min-width: 701px) and (max-width: 1120px) {
283 |   .grid {
284 |     grid-template-columns: repeat(2, 50%);
285 |   }
286 | }
287 | 
288 | @media (prefers-color-scheme: dark) {
289 |   .vercelLogo {
290 |     filter: invert(1);
291 |   }
292 | 
293 |   .logo,
294 |   .thirteen img {
295 |     filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
296 |   }
297 | }
298 | 
299 | @keyframes rotate {
300 |   from {
301 |     transform: rotate(360deg);
302 |   }
303 |   to {
304 |     transform: rotate(0deg);
305 |   }
306 | }
307 | 


--------------------------------------------------------------------------------
/src/styles/colors/alpha.ts:
--------------------------------------------------------------------------------
 1 | export const blackA = {
 2 |   blackA1: "hsla(0, 0%, 0%, 0.012)",
 3 |   blackA2: "hsla(0, 0%, 0%, 0.027)",
 4 |   blackA3: "hsla(0, 0%, 0%, 0.047)",
 5 |   blackA4: "hsla(0, 0%, 0%, 0.071)",
 6 |   blackA5: "hsla(0, 0%, 0%, 0.090)",
 7 |   blackA6: "hsla(0, 0%, 0%, 0.114)",
 8 |   blackA7: "hsla(0, 0%, 0%, 0.141)",
 9 |   blackA8: "hsla(0, 0%, 0%, 0.220)",
10 |   blackA9: "hsla(0, 0%, 0%, 0.439)",
11 |   blackA10: "hsla(0, 0%, 0%, 0.478)",
12 |   blackA11: "hsla(0, 0%, 0%, 0.565)",
13 |   blackA12: "hsla(0, 0%, 0%, 0.910)",
14 | };
15 | 
16 | export const whiteA = {
17 |   whiteA1: "hsla(0, 0%, 100%, 0)",
18 |   whiteA2: "hsla(0, 0%, 100%, 0.013)",
19 |   whiteA3: "hsla(0, 0%, 100%, 0.034)",
20 |   whiteA4: "hsla(0, 0%, 100%, 0.056)",
21 |   whiteA5: "hsla(0, 0%, 100%, 0.086)",
22 |   whiteA6: "hsla(0, 0%, 100%, 0.124)",
23 |   whiteA7: "hsla(0, 0%, 100%, 0.176)",
24 |   whiteA8: "hsla(0, 0%, 100%, 0.249)",
25 |   whiteA9: "hsla(0, 0%, 100%, 0.386)",
26 |   whiteA10: "hsla(0, 0%, 100%, 0.446)",
27 |   whiteA11: "hsla(0, 0%, 100%, 0.592)",
28 |   whiteA12: "hsla(0, 0%, 100%, 0.923)",
29 | };
30 | 
31 | export const neutralA = {
32 |   neutralA1: "hsla(0, 0%, 100%, 0)",
33 |   neutralA2: "hsla(0, 0%, 100%, 0.013)",
34 |   neutralA3: "hsla(0, 0%, 100%, 0.034)",
35 |   neutralA4: "hsla(0, 0%, 100%, 0.056)",
36 |   neutralA5: "hsla(0, 0%, 100%, 0.086)",
37 |   neutralA6: "hsla(0, 0%, 100%, 0.124)",
38 |   neutralA7: "hsla(0, 0%, 100%, 0.176)",
39 |   neutralA8: "hsla(0, 0%, 100%, 0.249)",
40 |   neutralA9: "hsla(0, 0%, 100%, 0.386)",
41 |   neutralA10: "hsla(0, 0%, 100%, 0.446)",
42 |   neutralA11: "hsla(0, 0%, 100%, 0.592)",
43 |   neutralA12: "hsla(0, 0%, 100%, 0.923)",
44 | };
45 | 
46 | export const neutralADark = {
47 |   neutralA1: "hsla(0, 0%, 0%, 0.012)",
48 |   neutralA2: "hsla(0, 0%, 0%, 0.027)",
49 |   neutralA3: "hsla(0, 0%, 0%, 0.047)",
50 |   neutralA4: "hsla(0, 0%, 0%, 0.071)",
51 |   neutralA5: "hsla(0, 0%, 0%, 0.090)",
52 |   neutralA6: "hsla(0, 0%, 0%, 0.114)",
53 |   neutralA7: "hsla(0, 0%, 0%, 0.141)",
54 |   neutralA8: "hsla(0, 0%, 0%, 0.220)",
55 |   neutralA9: "hsla(0, 0%, 0%, 0.439)",
56 |   neutralA10: "hsla(0, 0%, 0%, 0.478)",
57 |   neutralA11: "hsla(0, 0%, 0%, 0.565)",
58 |   neutralA12: "hsla(0, 0%, 0%, 0.910)",
59 | };
60 | 
61 | export const neutralInvertedA = {
62 |   neutralInvertedA1: "hsla(0, 0%, 0%, 0.012)",
63 |   neutralInvertedA2: "hsla(0, 0%, 0%, 0.027)",
64 |   neutralInvertedA3: "hsla(0, 0%, 0%, 0.047)",
65 |   neutralInvertedA4: "hsla(0, 0%, 0%, 0.071)",
66 |   neutralInvertedA5: "hsla(0, 0%, 0%, 0.090)",
67 |   neutralInvertedA6: "hsla(0, 0%, 0%, 0.114)",
68 |   neutralInvertedA7: "hsla(0, 0%, 0%, 0.141)",
69 |   neutralInvertedA8: "hsla(0, 0%, 0%, 0.220)",
70 |   neutralInvertedA9: "hsla(0, 0%, 0%, 0.439)",
71 |   neutralInvertedA10: "hsla(0, 0%, 0%, 0.478)",
72 |   neutralInvertedA11: "hsla(0, 0%, 0%, 0.565)",
73 |   neutralInvertedA12: "hsla(0, 0%, 0%, 0.910)",
74 | };
75 | 
76 | export const neutralInvertedADark = {
77 |   neutralInvertedA1: "hsla(0, 0%, 100%, 0)",
78 |   neutralInvertedA2: "hsla(0, 0%, 100%, 0.013)",
79 |   neutralInvertedA3: "hsla(0, 0%, 100%, 0.034)",
80 |   neutralInvertedA4: "hsla(0, 0%, 100%, 0.056)",
81 |   neutralInvertedA5: "hsla(0, 0%, 100%, 0.086)",
82 |   neutralInvertedA6: "hsla(0, 0%, 100%, 0.124)",
83 |   neutralInvertedA7: "hsla(0, 0%, 100%, 0.176)",
84 |   neutralInvertedA8: "hsla(0, 0%, 100%, 0.249)",
85 |   neutralInvertedA9: "hsla(0, 0%, 100%, 0.386)",
86 |   neutralInvertedA10: "hsla(0, 0%, 100%, 0.446)",
87 |   neutralInvertedA11: "hsla(0, 0%, 100%, 0.592)",
88 |   neutralInvertedA12: "hsla(0, 0%, 100%, 0.923)",
89 | };
90 | 


--------------------------------------------------------------------------------
/src/styles/colors/blue.ts:
--------------------------------------------------------------------------------
 1 | export const blue = {
 2 |   blue1: 'hsl(206, 100%, 99.2%)',
 3 |   blue2: 'hsl(210, 100%, 98.0%)',
 4 |   blue3: 'hsl(209, 100%, 96.5%)',
 5 |   blue4: 'hsl(210, 98.8%, 94.0%)',
 6 |   blue5: 'hsl(209, 95.0%, 90.1%)',
 7 |   blue6: 'hsl(209, 81.2%, 84.5%)',
 8 |   blue7: 'hsl(208, 77.5%, 76.9%)',
 9 |   blue8: 'hsl(206, 81.9%, 65.3%)',
10 |   blue9: 'hsl(206, 100%, 50.0%)',
11 |   blue10: 'hsl(208, 100%, 47.3%)',
12 |   blue11: 'hsl(211, 100%, 43.2%)',
13 |   blue12: 'hsl(211, 100%, 15.0%)',
14 | };
15 | 
16 | export const blueDark = {
17 |   blue1: 'hsl(212, 35.0%, 9.2%)',
18 |   blue2: 'hsl(216, 50.0%, 11.8%)',
19 |   blue3: 'hsl(214, 59.4%, 15.3%)',
20 |   blue4: 'hsl(214, 65.8%, 17.9%)',
21 |   blue5: 'hsl(213, 71.2%, 20.2%)',
22 |   blue6: 'hsl(212, 77.4%, 23.1%)',
23 |   blue7: 'hsl(211, 85.1%, 27.4%)',
24 |   blue8: 'hsl(211, 89.7%, 34.1%)',
25 |   blue9: 'hsl(206, 100%, 50.0%)',
26 |   blue10: 'hsl(209, 100%, 60.6%)',
27 |   blue11: 'hsl(210, 100%, 66.1%)',
28 |   blue12: 'hsl(206, 98.0%, 95.8%)',
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/colors/green.ts:
--------------------------------------------------------------------------------
 1 | export const green = {
 2 |   green1: 'hsl(136, 50.0%, 98.9%)',
 3 |   green2: 'hsl(138, 62.5%, 96.9%)',
 4 |   green3: 'hsl(139, 55.2%, 94.5%)',
 5 |   green4: 'hsl(140, 48.7%, 91.0%)',
 6 |   green5: 'hsl(141, 43.7%, 86.0%)',
 7 |   green6: 'hsl(143, 40.3%, 79.0%)',
 8 |   green7: 'hsl(146, 38.5%, 69.0%)',
 9 |   green8: 'hsl(151, 40.2%, 54.1%)',
10 |   green9: 'hsl(151, 55.0%, 41.5%)',
11 |   green10: 'hsl(152, 57.5%, 37.6%)',
12 |   green11: 'hsl(153, 67.0%, 28.5%)',
13 |   green12: 'hsl(155, 40.0%, 14.0%)',
14 | };
15 | 
16 | export const greenDark = {
17 |   green1: 'hsl(146, 30.0%, 7.4%)',
18 |   green2: 'hsl(155, 44.2%, 8.4%)',
19 |   green3: 'hsl(155, 46.7%, 10.9%)',
20 |   green4: 'hsl(154, 48.4%, 12.9%)',
21 |   green5: 'hsl(154, 49.7%, 14.9%)',
22 |   green6: 'hsl(154, 50.9%, 17.6%)',
23 |   green7: 'hsl(153, 51.8%, 21.8%)',
24 |   green8: 'hsl(151, 51.7%, 28.4%)',
25 |   green9: 'hsl(151, 55.0%, 41.5%)',
26 |   green10: 'hsl(151, 49.3%, 46.5%)',
27 |   green11: 'hsl(151, 50.0%, 53.2%)',
28 |   green12: 'hsl(137, 72.0%, 94.0%)',
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/colors/red.ts:
--------------------------------------------------------------------------------
 1 | export const red = {
 2 |   red1: 'hsl(359, 100%, 99.4%)',
 3 |   red2: 'hsl(359, 100%, 98.6%)',
 4 |   red3: 'hsl(360, 100%, 96.8%)',
 5 |   red4: 'hsl(360, 97.9%, 94.8%)',
 6 |   red5: 'hsl(360, 90.2%, 91.9%)',
 7 |   red6: 'hsl(360, 81.7%, 87.8%)',
 8 |   red7: 'hsl(359, 74.2%, 81.7%)',
 9 |   red8: 'hsl(359, 69.5%, 74.3%)',
10 |   red9: 'hsl(358, 75.0%, 59.0%)',
11 |   red10: 'hsl(358, 69.4%, 55.2%)',
12 |   red11: 'hsl(358, 65.0%, 48.7%)',
13 |   red12: 'hsl(354, 50.0%, 14.6%)',
14 | };
15 | 
16 | export const redDark = {
17 |   red1: 'hsl(353, 23.0%, 9.8%)',
18 |   red2: 'hsl(357, 34.4%, 12.0%)',
19 |   red3: 'hsl(356, 43.4%, 16.4%)',
20 |   red4: 'hsl(356, 47.6%, 19.2%)',
21 |   red5: 'hsl(356, 51.1%, 21.9%)',
22 |   red6: 'hsl(356, 55.2%, 25.9%)',
23 |   red7: 'hsl(357, 60.2%, 31.8%)',
24 |   red8: 'hsl(358, 65.0%, 40.4%)',
25 |   red9: 'hsl(358, 75.0%, 59.0%)',
26 |   red10: 'hsl(358, 85.3%, 64.0%)',
27 |   red11: 'hsl(358, 100%, 69.5%)',
28 |   red12: 'hsl(351, 89.0%, 96.0%)',
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/colors/slate.ts:
--------------------------------------------------------------------------------
 1 | export const slate = {
 2 |   slate1: "hsl(206, 30.0%, 98.8%)",
 3 |   slate2: "hsl(210, 16.7%, 97.6%)",
 4 |   slate3: "hsl(209, 13.3%, 95.3%)",
 5 |   slate4: "hsl(209, 12.2%, 93.2%)",
 6 |   slate5: "hsl(208, 11.7%, 91.1%)",
 7 |   slate6: "hsl(208, 11.3%, 88.9%)",
 8 |   slate7: "hsl(207, 11.1%, 85.9%)",
 9 |   slate8: "hsl(205, 10.7%, 78.0%)",
10 |   slate9: "hsl(206, 6.0%, 56.1%)",
11 |   slate10: "hsl(206, 5.8%, 52.3%)",
12 |   slate11: "hsl(206, 6.0%, 43.5%)",
13 |   slate12: "hsl(206, 24.0%, 9.0%)",
14 | };
15 | 
16 | export const slateDark = {
17 |   slate1: "hsl(200, 6.0%, 5.0%)",
18 |   slate2: "hsl(195, 7.1%, 9.0%)",
19 |   slate3: "hsl(197, 6.8%, 13.6%)",
20 |   slate4: "hsl(198, 6.6%, 15.8%)",
21 |   slate5: "hsl(199, 6.4%, 17.9%)",
22 |   slate6: "hsl(201, 6.2%, 20.5%)",
23 |   slate7: "hsl(203, 6.0%, 24.3%)",
24 |   slate8: "hsl(207, 5.6%, 31.6%)",
25 |   slate9: "hsl(206, 6.0%, 43.9%)",
26 |   slate10: "hsl(206, 5.2%, 49.5%)",
27 |   slate11: "hsl(206, 6.0%, 63.0%)",
28 |   slate12: "hsl(210, 6.0%, 93.0%)",
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/colors/violet.ts:
--------------------------------------------------------------------------------
 1 | export const violet = {
 2 |   violet1: 'hsl(255, 65.0%, 99.4%)',
 3 |   violet2: 'hsl(252, 100%, 99.0%)',
 4 |   violet3: 'hsl(252, 96.9%, 97.4%)',
 5 |   violet4: 'hsl(252, 91.5%, 95.5%)',
 6 |   violet5: 'hsl(252, 85.1%, 93.0%)',
 7 |   violet6: 'hsl(252, 77.8%, 89.4%)',
 8 |   violet7: 'hsl(252, 71.0%, 83.7%)',
 9 |   violet8: 'hsl(252, 68.6%, 76.3%)',
10 |   violet9: 'hsl(252, 56.0%, 57.5%)',
11 |   violet10: 'hsl(251, 48.1%, 53.5%)',
12 |   violet11: 'hsl(250, 43.0%, 48.0%)',
13 |   violet12: 'hsl(254, 60.0%, 18.5%)',
14 | };
15 | 
16 | export const violetDark = {
17 |   violet1: 'hsl(250, 20.0%, 10.2%)',
18 |   violet2: 'hsl(255, 30.3%, 12.9%)',
19 |   violet3: 'hsl(253, 37.0%, 18.4%)',
20 |   violet4: 'hsl(252, 40.1%, 22.5%)',
21 |   violet5: 'hsl(252, 42.2%, 26.2%)',
22 |   violet6: 'hsl(251, 44.3%, 31.1%)',
23 |   violet7: 'hsl(250, 46.8%, 38.9%)',
24 |   violet8: 'hsl(250, 51.8%, 51.2%)',
25 |   violet9: 'hsl(252, 56.0%, 57.5%)',
26 |   violet10: 'hsl(251, 63.2%, 63.2%)',
27 |   violet11: 'hsl(250, 95.0%, 76.8%)',
28 |   violet12: 'hsl(252, 87.0%, 96.4%)',
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/colors/yellow.ts:
--------------------------------------------------------------------------------
 1 | export const yellow = {
 2 |   yellow1: 'hsl(60, 54.0%, 98.5%)',
 3 |   yellow2: 'hsl(52, 100%, 95.5%)',
 4 |   yellow3: 'hsl(55, 100%, 90.9%)',
 5 |   yellow4: 'hsl(54, 100%, 86.6%)',
 6 |   yellow5: 'hsl(52, 97.9%, 82.0%)',
 7 |   yellow6: 'hsl(50, 89.4%, 76.1%)',
 8 |   yellow7: 'hsl(47, 80.4%, 68.0%)',
 9 |   yellow8: 'hsl(48, 100%, 46.1%)',
10 |   yellow9: 'hsl(53, 92.0%, 50.0%)',
11 |   yellow10: 'hsl(50, 100%, 48.5%)',
12 |   yellow11: 'hsl(42, 100%, 29.0%)',
13 |   yellow12: 'hsl(40, 55.0%, 13.5%)',
14 | };
15 | 
16 | export const yellowDark = {
17 |   yellow1: 'hsl(45, 100%, 5.5%)',
18 |   yellow2: 'hsl(46, 100%, 6.7%)',
19 |   yellow3: 'hsl(45, 100%, 8.7%)',
20 |   yellow4: 'hsl(45, 100%, 10.4%)',
21 |   yellow5: 'hsl(47, 100%, 12.1%)',
22 |   yellow6: 'hsl(49, 100%, 14.3%)',
23 |   yellow7: 'hsl(49, 90.3%, 18.4%)',
24 |   yellow8: 'hsl(50, 100%, 22.0%)',
25 |   yellow9: 'hsl(53, 92.0%, 50.0%)',
26 |   yellow10: 'hsl(54, 100%, 68.0%)',
27 |   yellow11: 'hsl(48, 100%, 47.0%)',
28 |   yellow12: 'hsl(53, 100%, 91.0%)',
29 | };
30 | 


--------------------------------------------------------------------------------
/src/styles/globals.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |   --max-width: 1100px;
  3 |   --border-radius: 12px;
  4 |   --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
  5 |     'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
  6 |     'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
  7 | 
  8 |   --foreground-rgb: 0, 0, 0;
  9 |   --background-start-rgb: 214, 219, 220;
 10 |   --background-end-rgb: 255, 255, 255;
 11 | 
 12 |   --primary-glow: conic-gradient(
 13 |     from 180deg at 50% 50%,
 14 |     #16abff33 0deg,
 15 |     #0885ff33 55deg,
 16 |     #54d6ff33 120deg,
 17 |     #0071ff33 160deg,
 18 |     transparent 360deg
 19 |   );
 20 |   --secondary-glow: radial-gradient(
 21 |     rgba(255, 255, 255, 1),
 22 |     rgba(255, 255, 255, 0)
 23 |   );
 24 | 
 25 |   --tile-start-rgb: 239, 245, 249;
 26 |   --tile-end-rgb: 228, 232, 233;
 27 |   --tile-border: conic-gradient(
 28 |     #00000080,
 29 |     #00000040,
 30 |     #00000030,
 31 |     #00000020,
 32 |     #00000010,
 33 |     #00000010,
 34 |     #00000080
 35 |   );
 36 | 
 37 |   --callout-rgb: 238, 240, 241;
 38 |   --callout-border-rgb: 172, 175, 176;
 39 |   --card-rgb: 180, 185, 188;
 40 |   --card-border-rgb: 131, 134, 135;
 41 | }
 42 | 
 43 | @media (prefers-color-scheme: dark) {
 44 |   :root {
 45 |     --foreground-rgb: 255, 255, 255;
 46 |     --background-start-rgb: 0, 0, 0;
 47 |     --background-end-rgb: 0, 0, 0;
 48 | 
 49 |     --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
 50 |     --secondary-glow: linear-gradient(
 51 |       to bottom right,
 52 |       rgba(1, 65, 255, 0),
 53 |       rgba(1, 65, 255, 0),
 54 |       rgba(1, 65, 255, 0.3)
 55 |     );
 56 | 
 57 |     --tile-start-rgb: 2, 13, 46;
 58 |     --tile-end-rgb: 2, 5, 19;
 59 |     --tile-border: conic-gradient(
 60 |       #ffffff80,
 61 |       #ffffff40,
 62 |       #ffffff30,
 63 |       #ffffff20,
 64 |       #ffffff10,
 65 |       #ffffff10,
 66 |       #ffffff80
 67 |     );
 68 | 
 69 |     --callout-rgb: 20, 20, 20;
 70 |     --callout-border-rgb: 108, 108, 108;
 71 |     --card-rgb: 100, 100, 100;
 72 |     --card-border-rgb: 200, 200, 200;
 73 |   }
 74 | }
 75 | 
 76 | * {
 77 |   box-sizing: border-box;
 78 |   padding: 0;
 79 |   margin: 0;
 80 | }
 81 | 
 82 | html,
 83 | body {
 84 |   max-width: 100vw;
 85 |   overflow-x: hidden;
 86 | }
 87 | 
 88 | body {
 89 |   color: rgb(var(--foreground-rgb));
 90 |   background: linear-gradient(
 91 |       to bottom,
 92 |       transparent,
 93 |       rgb(var(--background-end-rgb))
 94 |     )
 95 |     rgb(var(--background-start-rgb));
 96 |   font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 97 | }
 98 | 
 99 | a {
100 |   color: inherit;
101 |   text-decoration: none;
102 | }
103 | 
104 | @media (prefers-color-scheme: dark) {
105 |   html {
106 |     color-scheme: dark;
107 |   }
108 | }
109 | 


--------------------------------------------------------------------------------
/src/types/arconnect.d.ts:
--------------------------------------------------------------------------------
  1 | import type { SignatureOptions } from "arweave/node/lib/crypto/crypto-interface";
  2 | import type Transaction from "arweave/node/lib/transaction";
  3 | import type { Emitter } from "mitt";
  4 | 
  5 | /**
  6 |  * Arweave wallet declarations
  7 |  */
  8 | declare global {
  9 |   interface Window {
 10 |     /**
 11 |      * Documentation for this API is available at https://docs.arconnect.io
 12 |      */
 13 |     arweaveWallet: {
 14 |       /**
 15 |        * Name of the wallet the API was provided by.
 16 |        */
 17 |       walletName: string;
 18 | 
 19 |       /**
 20 |        * Semver type version of the wallet
 21 |        */
 22 |       walletVersion: string;
 23 | 
 24 |       /**
 25 |        * Connect to ArConnect and request permissions. This function can always be
 26 |        * called again if you want to request more permissions for your site.
 27 |        *
 28 |        * @param permissions
 29 |        * @param appInfo
 30 |        */
 31 |       connect(
 32 |         permissions: PermissionType[],
 33 |         appInfo?: AppInfo,
 34 |         gateway?: GatewayConfig
 35 |       ): Promise<void>;
 36 | 
 37 |       /**
 38 |        * Disconnect from ArConnect. Removes all permissions from your site.
 39 |        */
 40 |       disconnect(): Promise<void>;
 41 | 
 42 |       /**
 43 |        * Get the currently used wallet's address in the extension.
 44 |        *
 45 |        * @returns Promise of wallet address string
 46 |        */
 47 |       getActiveAddress(): Promise<string>;
 48 | 
 49 |       /**
 50 |        * Get all addresses added to the ArConnect extension
 51 |        *
 52 |        * @returns Promise of a list of the added wallets' addresses.
 53 |        */
 54 |       getAllAddresses(): Promise<string[]>;
 55 | 
 56 |       /**
 57 |        * Get wallet names for addresses.
 58 |        *
 59 |        * @returns Promise of an object with addresses and wallet names
 60 |        */
 61 |       getWalletNames(): Promise<{ [addr: string]: string }>;
 62 | 
 63 |       /**
 64 |        * Sign a transaction.
 65 |        *
 66 |        * @param transaction A valid Arweave transaction without a wallet keyfile added to it
 67 |        * @param options Arweave signing options
 68 |        *
 69 |        * @returns Promise of a signed transaction instance
 70 |        */
 71 |       sign(
 72 |         transaction: Transaction,
 73 |         options?: SignatureOptions
 74 |       ): Promise<Transaction>;
 75 | 
 76 |       /**
 77 |        * Get the permissions allowed for you site by the user.
 78 |        *
 79 |        * @returns Promise of a list of permissions allowed for your dApp.
 80 |        */
 81 |       getPermissions(): Promise<PermissionType[]>;
 82 | 
 83 |       /**
 84 |        * Encrypt a string, using the user's wallet.
 85 |        *
 86 |        * @param data String to encrypt
 87 |        * @param options Encrypt options
 88 |        *
 89 |        * @returns Promise of the encrypted string
 90 |        */
 91 |       encrypt(
 92 |         data: string,
 93 |         options: {
 94 |           algorithm: string;
 95 |           hash: string;
 96 |           salt?: string;
 97 |         }
 98 |       ): Promise<Uint8Array>;
 99 | 
100 |       /**
101 |        * Decrypt a string encrypted with the user's wallet.
102 |        *
103 |        * @param data `Uint8Array` data to decrypt to a string
104 |        * @param options Decrypt options
105 |        *
106 |        * @returns Promise of the decrypted string
107 |        */
108 |       decrypt(
109 |         data: Uint8Array,
110 |         options: {
111 |           algorithm: string;
112 |           hash: string;
113 |           salt?: string;
114 |         }
115 |       ): Promise<string>;
116 | 
117 |       /**
118 |        * Get the user's custom Arweave config set in the extension
119 |        *
120 |        * @returns Promise of the user's Arweave config
121 |        */
122 |       getArweaveConfig(): Promise<{
123 |         host: string;
124 |         port: number;
125 |         protocol: "http" | "https";
126 |       }>;
127 | 
128 |       /**
129 |        * @deprecated Find alternatives at https://docs.arconnect.io/api/signature
130 |        */
131 |       signature(
132 |         data: Uint8Array,
133 |         // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign#parameters
134 |         algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams
135 |       ): Promise<Uint8Array>;
136 | 
137 |       /**
138 |        * Get the user's active public key, from their wallet
139 |        *
140 |        * @returns Promise of the active public key
141 |        */
142 |       getActivePublicKey(): Promise<string>;
143 | 
144 |       /**
145 |        * Add a token to ArConnect (if it is not already present)
146 |        *
147 |        * @param id Token contract ID
148 |        * @param type Type of the token (asset or collectible)
149 |        * @param gateway Gateway config for the token
150 |        */
151 |       addToken(
152 |         id: string,
153 |         type?: TokenType,
154 |         gateway?: GatewayConfig
155 |       ): Promise<void>;
156 | 
157 |       /**
158 |        * Checks if a token has been added to ArConnect
159 |        *
160 |        * @param id Token to check for
161 |        *
162 |        * @returns Token added or not
163 |        */
164 |       isTokenAdded(id: string): Promise<boolean>;
165 | 
166 |       /**
167 |        * Dispatch an Arweave transaction (preferably bundled)
168 |        *
169 |        * @param transaction Transaction to dispatch
170 |        *
171 |        * @returns Dispatched transaction ID and type
172 |        */
173 |       dispatch(transaction: Transaction): Promise<DispatchResult>;
174 | 
175 |       /**
176 |        * Create a deterministic secret based on the input data.
177 |        *
178 |        * @param data Input data to generate the hash from
179 |        * @param options Hash configuration
180 |        *
181 |        * @returns Hash array
182 |        */
183 |       privateHash(
184 |         data: ArrayBuffer,
185 |         options: SignMessageOptions
186 |       ): Promise<Uint8Array>;
187 | 
188 |       /**
189 |        * Create and sign a DataItem (bundled transaction item),
190 |        * that can be loaded into "arbundles".
191 |        *
192 |        * @param dataItem Data item params
193 |        *
194 |        * @returns Buffer of the signed data item
195 |        */
196 |       signDataItem(dataItem: DataItem): Promise<ArrayBufferLike>;
197 | 
198 |       /**
199 |        * Create a cryptographic signature for any piece of data for later validation.
200 |        * This function cannot be used to sign transactions or interactions, because the data
201 |        * gets hashed before the signature generation.
202 |        *
203 |        * @param data Message to be hashed and signed
204 |        * @param options Signature options
205 |        *
206 |        * @returns Signature
207 |        */
208 |       signMessage(
209 |         data: ArrayBuffer,
210 |         options?: SignMessageOptions
211 |       ): Promise<Uint8Array>;
212 | 
213 |       /**
214 |        * Verify a cryptographic signature created with the arweaveWallet.signMessage() function.
215 |        *
216 |        * @param data Data to verify with the signature
217 |        * @param signature Signature to validate
218 |        * @param publicKey Optionally match the signature with a different public key than the currently active
219 |        * @param options Signature options
220 |        *
221 |        * @returns Validity
222 |        */
223 |       verifyMessage(
224 |         data: ArrayBuffer,
225 |         signature: ArrayBuffer | string,
226 |         publicKey?: string,
227 |         options?: SignMessageOptions
228 |       ): Promise<boolean>;
229 | 
230 |       /**
231 |        * Experimental event emitter. Allows listening to gateway config
232 |        * updates, bundler node changes, etc.
233 |        */
234 |       events: Emitter<InjectedEvents>;
235 |     };
236 |   }
237 |   interface WindowEventMap {
238 |     walletSwitch: CustomEvent<{ address: string }>;
239 |     arweaveWalletLoaded: CustomEvent<{}>;
240 |   }
241 | }
242 | 
243 | /**
244 |  * Arweave wallet permission types
245 |  */
246 | export type PermissionType =
247 |   | "ACCESS_ADDRESS"
248 |   | "ACCESS_PUBLIC_KEY"
249 |   | "ACCESS_ALL_ADDRESSES"
250 |   | "SIGN_TRANSACTION"
251 |   | "ENCRYPT"
252 |   | "DECRYPT"
253 |   | "SIGNATURE"
254 |   | "ACCESS_ARWEAVE_CONFIG"
255 |   | "DISPATCH";
256 | 
257 | export interface DispatchResult {
258 |   id: string;
259 |   type?: "BASE" | "BUNDLED";
260 | }
261 | 
262 | export interface AppInfo {
263 |   name?: string;
264 |   logo?: string;
265 | }
266 | 
267 | export interface GatewayConfig {
268 |   host: string;
269 |   port: number;
270 |   protocol: "http" | "https";
271 | }
272 | 
273 | /**
274 |  * Available injected event types
275 |  */
276 | export interface InjectedEvents {
277 |   connect: null;
278 |   disconnect: null;
279 |   activeAddress: string;
280 |   addresses: string[];
281 |   permissions: PermissionType[];
282 |   gateway: Gateway;
283 | }
284 | 
285 | export type TokenType = "asset" | "collectible";
286 | 
287 | export interface SignMessageOptions {
288 |   hashAlgorithm?: "SHA-256" | "SHA-384" | "SHA-512";
289 | }
290 | 
291 | export interface DataItem {
292 |   data: string | Uint8Array;
293 |   target?: string;
294 |   anchor?: string;
295 |   tags?: {
296 |     name: string;
297 |     value: string;
298 |   }[];
299 | }
300 | 
301 | export {};
302 | 


--------------------------------------------------------------------------------
/src/types/ardrive.d.ts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/permaweb-music-uploader/4deaa708d4d1556ff10f3ba328b9d82f9ff72452/src/types/ardrive.d.ts


--------------------------------------------------------------------------------
/src/types/declaration.d.ts:
--------------------------------------------------------------------------------
1 | declare module "filereader-stream";
2 | 


--------------------------------------------------------------------------------
/src/types/env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="arconnect" />
2 | 


--------------------------------------------------------------------------------
/src/types/index.ts:
--------------------------------------------------------------------------------
  1 | import { PermissionType } from "arconnect";
  2 | import { AppInfo } from "arweave-wallet-connector";
  3 | import { ReactiveConnector } from "../../node_modules/.pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/browser/Reactive";
  4 | 
  5 | export type UploadProvider = "irys" | "turbo";
  6 | 
  7 | export type TransactionTag = {
  8 |   name: string;
  9 |   value: string;
 10 | };
 11 | 
 12 | export type TransactionTags = TransactionTag[];
 13 | 
 14 | export type IconProps = {
 15 |   width?: number | string | undefined;
 16 |   height?: number | string | undefined;
 17 | };
 18 | 
 19 | export interface ArweaveWalletProps extends AppInfo {
 20 |   url?: string;
 21 | }
 22 | 
 23 | export interface PermaProfile {
 24 |   address: string;
 25 |   handle: string | undefined;
 26 |   uniqueHandle: string | undefined;
 27 |   bio: string | undefined;
 28 |   avatar: string | undefined;
 29 |   banner: string | undefined;
 30 |   // vouched: boolean;
 31 | }
 32 | 
 33 | export type Env = {
 34 |   gateway?: string;
 35 |   // maybe add some cache options here
 36 | };
 37 | 
 38 | export interface ConnectProps {
 39 |   walletProvider: "arweave.app" | "arconnect";
 40 |   appName: string;
 41 |   arweaveWalletProps?: ArweaveWalletProps | undefined;
 42 |   permissions?: PermissionType[];
 43 | }
 44 | 
 45 | export type ArweaveConfig = {
 46 |   host: string;
 47 |   port: number;
 48 |   protocol: string;
 49 | };
 50 | 
 51 | export type Vouched = boolean;
 52 | 
 53 | export type IrysOpts = {
 54 |   init?: {
 55 |     token?: string;
 56 |     provider?: object;
 57 |     node?: "node1" | "node2";
 58 |   };
 59 |   uploader?: {
 60 |     batchSize?: number;
 61 |     chunkSize?: number;
 62 |   };
 63 |   setState: React.Dispatch<
 64 |     React.SetStateAction<{
 65 |       init?: {
 66 |         token?: string;
 67 |         provider?: object;
 68 |         node?: "node1" | "node2";
 69 |       };
 70 |       uploader?: {
 71 |         batchSize?: number;
 72 |         chunkSize?: number;
 73 |       };
 74 |     }>
 75 |   >;
 76 | };
 77 | 
 78 | export type IrysNode = "node1" | "node2";
 79 | 
 80 | export declare const WebWallet: {
 81 |   namespaces: {
 82 |     arweaveWallet: {
 83 |       walletName: string;
 84 |       connect: () => any;
 85 |       disconnect: () => any;
 86 |       getActiveAddress: () => string | undefined;
 87 |       getActivePublicKey: () => Promise<string>;
 88 |       getAllAddresses: () => never;
 89 |       getWalletNames: () => never;
 90 |       signature: () => never;
 91 |       sign: (
 92 |         tx: import("arweave/web/lib/transaction.js").default,
 93 |         options?: any
 94 |       ) => Promise<import("arweave/web/lib/transaction.js").default>;
 95 |       dispatch: (
 96 |         tx: import("arweave/web/lib/transaction.js").default,
 97 |         options?: any
 98 |       ) => Promise<
 99 |         import(".pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/Arweave.js").DispatchResult
100 |       >;
101 |       encrypt: (data: Uint8Array, options: any) => Promise<Uint8Array>;
102 |       decrypt: (data: Uint8Array, options: any) => Promise<Uint8Array>;
103 |       getPermissions: () => string[];
104 |       getArweaveConfig: () => Promise<
105 |         Omit<import("arweave/web/lib/api.js").ApiConfig, "logger"> & {
106 |           logger?: any;
107 |         }
108 |       >;
109 |     };
110 |   };
111 |   postMessage(
112 |     method: string,
113 |     params?: any[] | undefined,
114 |     options?:
115 |       | import(".pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/types.js").PostMessageOptions
116 |       | undefined
117 |   ): any;
118 |   getPublicKey(): Promise<string>;
119 |   getArweaveConfig(): Promise<
120 |     Omit<import("arweave/web/lib/api.js").ApiConfig, "logger"> & {
121 |       logger?: any;
122 |     }
123 |   >;
124 |   signTransaction(
125 |     tx: import("arweave/web/lib/transaction.js").default,
126 |     options?:
127 |       | object
128 |       | import(".pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/types.js").Null
129 |   ): Promise<import("arweave/web/lib/transaction.js").default>;
130 |   signDataItem(tx: {
131 |     tags?:
132 |       | {
133 |           name: string;
134 |           value: string;
135 |         }[]
136 |       | undefined;
137 |     target?: string | undefined;
138 |     data?: string | undefined;
139 |     anchor?: string | undefined;
140 |   }): Promise<ArrayBufferLike>;
141 |   dispatch(
142 |     tx: import("arweave/web/lib/transaction.js").default,
143 |     options?:
144 |       | object
145 |       | import(".pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/types.js").Null
146 |   ): Promise<
147 |     import(".pnpm/arweave-wallet-connector@1.0.2/node_modules/arweave-wallet-connector/lib/Arweave.js").DispatchResult
148 |   >;
149 |   signMessage<T extends ArrayBufferView>(
150 |     message: T,
151 |     options: {
152 |       hashAlgorithm?: "SHA-256" | "SHA-384" | "SHA-512" | undefined;
153 |     }
154 |   ): Promise<T>;
155 |   verifyMessage(
156 |     message: ArrayBufferView,
157 |     signature: string | ArrayBufferView,
158 |     publicKey: string,
159 |     options: {
160 |       hashAlgorithm?: "SHA-256" | "SHA-384" | "SHA-512" | undefined;
161 |     } & {
162 |       signAlgorithm?: "RSA" | undefined;
163 |     }
164 |   ): Promise<boolean>;
165 |   encrypt<T_1 extends ArrayBufferView>(
166 |     message: T_1,
167 |     publicKey: string,
168 |     options: AlgorithmIdentifier
169 |   ): Promise<T_1>;
170 |   decrypt<T_2 extends ArrayBufferView>(
171 |     message: T_2,
172 |     options: AlgorithmIdentifier
173 |   ): Promise<T_2>;
174 |   privateHash<T_3 extends ArrayBufferView>(
175 |     message: T_3,
176 |     options: {
177 |       hashAlgorithm?: "SHA-256" | "SHA-384" | "SHA-512" | undefined;
178 |     }
179 |   ): Promise<T_3>;
180 |   address?: string | undefined;
181 |   connect(): any;
182 |   disconnect(): any;
183 | } & ReactiveConnector;
184 | 


--------------------------------------------------------------------------------
/src/ui/Accordion.tsx:
--------------------------------------------------------------------------------
  1 | import { keyframes, styled } from "@/stitches.config";
  2 | import * as AccordionPrimitive from "@radix-ui/react-accordion";
  3 | import { ComponentProps, forwardRef } from "react";
  4 | import { RxTriangleRight } from "react-icons/rx";
  5 | import { Box } from "./Box";
  6 | 
  7 | const slideDown = keyframes({
  8 |   from: { height: 0 },
  9 |   to: { height: "var(--radix-accordion-content-height)" },
 10 | });
 11 | 
 12 | const slideUp = keyframes({
 13 |   from: { height: "var(--radix-accordion-content-height)" },
 14 |   to: { height: 0 },
 15 | });
 16 | 
 17 | const fadeIn = keyframes({
 18 |   from: { opacity: 0 },
 19 |   to: { opacity: 1 },
 20 | });
 21 | 
 22 | const fadeOut = keyframes({
 23 |   from: { opacity: 1 },
 24 |   to: { opacity: 0 },
 25 | });
 26 | 
 27 | export const Accordion = styled(AccordionPrimitive.Root);
 28 | 
 29 | export const AccordionItem = styled(AccordionPrimitive.Item, {
 30 |   overflow: "hidden",
 31 |   marginTop: 1,
 32 | 
 33 |   "&:focus-within": {
 34 |     "&:focus-visible": {
 35 |       position: "relative",
 36 |       zIndex: 1,
 37 |       boxShadow: "0 0 0 2px $colors$blue8",
 38 |     },
 39 |   },
 40 | });
 41 | 
 42 | const StyledHeader = styled(AccordionPrimitive.Header, {
 43 |   all: "unset",
 44 |   display: "flex",
 45 | });
 46 | 
 47 | const StyledTrigger = styled(AccordionPrimitive.Trigger, {
 48 |   all: "unset",
 49 |   display: "flex",
 50 |   alignItems: "center",
 51 |   gap: "$2",
 52 |   py: "$1",
 53 |   flex: 1,
 54 |   backgroundColor: "transparent",
 55 |   fontSize: "$3",
 56 |   lineHeight: 1,
 57 | 
 58 |   "&:hover": {
 59 |     color: "$slate12",
 60 | 
 61 |     "& svg": {
 62 |       color: "$slate12",
 63 |     },
 64 |   },
 65 | 
 66 |   "[data-state=open] &": { color: "$slate12" },
 67 | });
 68 | 
 69 | const StyledIcon = styled("span", {
 70 |   fontSize: "$5",
 71 |   display: "flex",
 72 |   placeItems: "center",
 73 |   color: "$slate11",
 74 |   transition: "transform 300ms ease",
 75 |   "[data-state=open] &": { transform: "rotate(90deg)", color: "$slate12" },
 76 | });
 77 | 
 78 | export const AccordionTrigger = forwardRef<
 79 |   HTMLButtonElement,
 80 |   ComponentProps<typeof StyledTrigger>
 81 | >(({ children, ...props }, forwardedRef) => (
 82 |   <StyledHeader>
 83 |     <StyledTrigger {...props} ref={forwardedRef}>
 84 |       {children}
 85 |       <StyledIcon>
 86 |         <RxTriangleRight aria-hidden />
 87 |       </StyledIcon>
 88 |     </StyledTrigger>
 89 |   </StyledHeader>
 90 | ));
 91 | 
 92 | const StyledContentWrapper = styled("div", {
 93 |   px: "$3",
 94 | });
 95 | 
 96 | const StyledContent = styled(AccordionPrimitive.Content, {
 97 |   overflow: "hidden",
 98 |   color: "$slate12",
 99 | 
100 |   '&[data-state="open"]': {
101 |     animation: `${slideDown} 300ms cubic-bezier(.27,.15,.26,1)`,
102 | 
103 |     [`& ${StyledContentWrapper}`]: {
104 |       animation: `${fadeIn} 600ms cubic-bezier(.27,.15,.26,1)`,
105 |     },
106 |   },
107 |   '&[data-state="closed"]': {
108 |     animation: `${slideUp} 200ms cubic-bezier(.27,.15,.26,1)`,
109 | 
110 |     [`& ${StyledContentWrapper}`]: {
111 |       animation: `${fadeOut} 200ms cubic-bezier(.27,.15,.26,1)`,
112 |     },
113 |   },
114 | });
115 | 
116 | export const AccordionContent = forwardRef<
117 |   HTMLDivElement,
118 |   ComponentProps<typeof StyledContent>
119 | >(({ children, ...props }, forwardedRef) => (
120 |   <StyledContent {...props} ref={forwardedRef}>
121 |     {/* <Box css={{ height: 1, backgroundColor: "$slate5" }} /> */}
122 |     <StyledContentWrapper>{children}</StyledContentWrapper>
123 |   </StyledContent>
124 | ));
125 | 


--------------------------------------------------------------------------------
/src/ui/Avatar.ts:
--------------------------------------------------------------------------------
  1 | import { ComponentProps, styled } from "@/stitches.config";
  2 | import * as AvatarPrimitive from "@radix-ui/react-avatar";
  3 | 
  4 | export type AvatarProps = ComponentProps<typeof Avatar>;
  5 | 
  6 | export const Avatar = styled(AvatarPrimitive.Root, {
  7 |   position: "relative",
  8 |   display: "inline-flex",
  9 |   alignItems: "center",
 10 |   justifyContent: "center",
 11 |   verticalAlign: "middle",
 12 |   overflow: "hidden",
 13 |   userSelect: "none",
 14 | 
 15 |   variants: {
 16 |     size: {
 17 |       1: {
 18 |         width: "$6",
 19 |         height: "$6",
 20 |         '& span[data-avatar="fallback"]': {
 21 |           fontSize: "$1",
 22 |           lineHeight: "$1",
 23 |         },
 24 |       },
 25 |       2: {
 26 |         width: "$7",
 27 |         height: "$7",
 28 |         '& span[data-avatar="fallback"]': {
 29 |           fontSize: "$1",
 30 |           lineHeight: "$1",
 31 |         },
 32 |       },
 33 |       3: {
 34 |         width: "$8",
 35 |         height: "$8",
 36 |         '& span[data-avatar="fallback"]': {
 37 |           fontSize: "$2",
 38 |           lineHeight: "$2",
 39 |         },
 40 |       },
 41 |       4: {
 42 |         width: "$10",
 43 |         height: "$10",
 44 |         '& span[data-avatar="fallback"]': {
 45 |           fontSize: "$2",
 46 |           lineHeight: "$2",
 47 |         },
 48 |       },
 49 |       5: {
 50 |         width: "$16",
 51 |         height: "$16",
 52 |         '& span[data-avatar="fallback"]': {
 53 |           fontSize: "$5",
 54 |           lineHeight: "$5",
 55 |         },
 56 |       },
 57 |       6: {
 58 |         width: "$20",
 59 |         height: "$20",
 60 |         '& span[data-avatar="fallback"]': {
 61 |           fontSize: "$6",
 62 |           lineHeight: "$6",
 63 |         },
 64 |       },
 65 |       7: {
 66 |         width: 96,
 67 |         height: 96,
 68 |         '& span[data-avatar="fallback"]': {
 69 |           fontSize: "$7",
 70 |           lineHeight: "$7",
 71 |         },
 72 |       },
 73 |     },
 74 |     shape: {
 75 |       round: {
 76 |         br: "$round",
 77 |       },
 78 |       square: {
 79 |         br: 0,
 80 |       },
 81 |     },
 82 |   },
 83 | 
 84 |   defaultVariants: {
 85 |     size: "4",
 86 |     shape: "round",
 87 |   },
 88 | });
 89 | 
 90 | export const AvatarImage = styled(AvatarPrimitive.Image, {
 91 |   width: "100%",
 92 |   height: "100%",
 93 |   objectFit: "cover",
 94 |   borderRadius: "inherit",
 95 | });
 96 | 
 97 | export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
 98 |   userSelect: "none",
 99 |   width: "100%",
100 |   height: "100%",
101 |   fontFamily: "inherit",
102 | });
103 | 


--------------------------------------------------------------------------------
/src/ui/Box.ts:
--------------------------------------------------------------------------------
1 | import { styled } from "../stitches.config";
2 | 
3 | export const Box = styled("div");
4 | 


--------------------------------------------------------------------------------
/src/ui/Button.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "../stitches.config";
  2 | import { ComponentProps, VariantProps } from "@stitches/react";
  3 | 
  4 | export type ButtonProps = ComponentProps<typeof Button>;
  5 | export type ButtonVariantProps = VariantProps<typeof Button>;
  6 | 
  7 | export const Button = styled("button", {
  8 |   // resets
  9 |   all: "unset",
 10 |   alignItems: "center",
 11 |   boxSizing: "border-box",
 12 |   userSelect: "none",
 13 |   "&::before": {
 14 |     boxSizing: "border-box",
 15 |   },
 16 |   "&::after": {
 17 |     boxSizing: "border-box",
 18 |   },
 19 | 
 20 |   // custom reset
 21 |   display: "inline-flex",
 22 |   justifyContent: "center",
 23 |   lineHeight: "1",
 24 |   WebkitTapHighlightColor: "rgba(0,0,0,0)",
 25 | 
 26 |   // custom
 27 |   fontFamily: "inherit",
 28 |   fontWeight: "$5",
 29 |   br: "$1",
 30 | 
 31 |   "&:disabled": {
 32 |     pointerEvents: "none",
 33 |     cursor: "not-allowed",
 34 |     opacity: "50%",
 35 |   },
 36 | 
 37 |   '&[aria-disabled="true"]': {
 38 |     pointerEvents: "none",
 39 |     cursor: "not-allowed",
 40 |     opacity: "50%",
 41 |   },
 42 | 
 43 |   // locally-scoped color tokens for easy theme-switching
 44 | 
 45 |   // default styles
 46 |   $bg: "$colors$slate3",
 47 |   $border: "$colors$slate7",
 48 |   $color: "$colors$slate11",
 49 | 
 50 |   // hover styles
 51 |   $bgHover: "$colors$slate4",
 52 |   $borderHover: "$colors$slate8",
 53 | 
 54 |   // active styles
 55 |   $bgActive: "$colors$slate5",
 56 |   $borderActive: "$colors$slate8",
 57 | 
 58 |   $bgSubtle: "$colors$slate4",
 59 |   $bgSubtleHover: "$colors$slate5",
 60 |   $bgSubtleActive: "$colors$slate6",
 61 | 
 62 |   $focus: "$colors$focus",
 63 | 
 64 |   // solid default styles
 65 |   $bgSolid: "$colors$slate12",
 66 |   $colorSolid: "$colors$slate1",
 67 |   // solid hover styles
 68 |   $bgSolidHover: "$colors$slateSolidHover",
 69 |   // solid active styles
 70 |   $bgSolidActive: "$colors$slateSolidActive",
 71 | 
 72 |   variants: {
 73 |     /**
 74 |      * The size of the button.
 75 |      * @default "2"
 76 |      */
 77 |     size: {
 78 |       1: {
 79 |         height: "$7",
 80 |         fontSize: "$1",
 81 |         lineHeight: "$sizes$8",
 82 |         px: "$3",
 83 |         gap: "$1",
 84 | 
 85 |         "& svg": {
 86 |           size: "$3",
 87 |         },
 88 |       },
 89 |       2: {
 90 |         height: "$10",
 91 |         fontSize: "$2",
 92 |         lineHeight: "$sizes$10",
 93 |         px: "$5",
 94 |         gap: "$2",
 95 | 
 96 |         "& svg": {
 97 |           size: "$4",
 98 |         },
 99 |       },
100 |       3: {
101 |         height: "$11",
102 |         fontSize: "$2",
103 |         lineHeight: "$sizes$11",
104 |         px: "$7",
105 |         gap: "$2",
106 | 
107 |         "& svg": {
108 |           size: "$4",
109 |         },
110 |       },
111 |     },
112 |     /**
113 |      * The variant of the button.
114 |      * @default "subtle"
115 |      */
116 |     variant: {
117 |       subtle: {
118 |         color: "$color",
119 |         backgroundColor: "$bgSubtle",
120 | 
121 |         "&:hover": {
122 |           backgroundColor: "$bgSubtleHover",
123 |         },
124 | 
125 |         "&:active": {
126 |           backgroundColor: "$bgSubtleActive",
127 |         },
128 | 
129 |         "&:focus-visible": {
130 |           boxShadow: "0 0 0 2px $focus",
131 |         },
132 |       },
133 |       outline: {
134 |         color: "$color",
135 |         backgroundColor: "transparent",
136 |         boxShadow: "inset 0 0 0 1px $border",
137 | 
138 |         "&:hover": {
139 |           boxShadow: "inset 0 0 0 1px $borderHover",
140 |         },
141 | 
142 |         "&:active": {
143 |           backgroundColor: "$bgActive",
144 |           boxShadow: "inset 0 0 0 1px $borderActive",
145 |         },
146 | 
147 |         "&:focus-visible": {
148 |           boxShadow: "0 0 0 2px $focus",
149 |         },
150 |       },
151 |       solid: {
152 |         backgroundColor: "$bgSolid",
153 |         color: "$colorSolid",
154 | 
155 |         "&:hover": {
156 |           backgroundColor: "$bgSolidHover",
157 |         },
158 | 
159 |         "&:active": {
160 |           backgroundColor: "$bgSolidActive",
161 |         },
162 | 
163 |         "&:focus-visible": {
164 |           boxShadow: "0 0 0 2px $focus",
165 |         },
166 |       },
167 |       ghost: {
168 |         color: "$color",
169 |         backgroundColor: "transparent",
170 | 
171 |         "&:hover": {
172 |           backgroundColor: "$bgHover",
173 |         },
174 | 
175 |         "&:active": {
176 |           backgroundColor: "$bgActive",
177 |         },
178 | 
179 |         "&:focus-visible": {
180 |           boxShadow: "0 0 0 2px $focus",
181 |         },
182 |       },
183 |       transparent: {
184 |         backgroundColor: "transparent",
185 |         color: "$slate11",
186 | 
187 |         "&:hover": {
188 |           color: "$slate12",
189 |         },
190 |       },
191 |     },
192 |     colorScheme: {
193 |       slate: {},
194 |       success: {
195 |         // default styles
196 |         $bg: "$colors$green3",
197 |         $border: "$colors$green7",
198 |         $color: "$colors$green11",
199 | 
200 |         // hover styles
201 |         $bgHover: "$colors$green4",
202 |         $borderHover: "$colors$green8",
203 | 
204 |         // active styles
205 |         $bgActive: "$colors$green5",
206 |         $borderActive: "$colors$green8",
207 | 
208 |         $bgSubtle: "$colors$green4",
209 |         $bgSubtleHover: "$colors$green5",
210 |         $bgSubtleActive: "$colors$green6",
211 | 
212 |         $bgSolid: "$colors$green9",
213 |         $colorSolid: "white",
214 |         // solid hover styles
215 |         $bgSolidHover: "$colors$green10",
216 |         // solid active styles
217 |         $bgSolidActive: "$colors$green10",
218 |       },
219 |       info: {
220 |         // default styles
221 |         $bg: "$colors$blue3",
222 |         $border: "$colors$blue7",
223 |         $color: "$colors$blue11",
224 | 
225 |         // hover styles
226 |         $bgHover: "$colors$blue4",
227 |         $borderHover: "$colors$blue8",
228 | 
229 |         // active styles
230 |         $bgActive: "$colors$blue5",
231 |         $borderActive: "$colors$blue8",
232 | 
233 |         $bgSubtle: "$colors$blue4",
234 |         $bgSubtleHover: "$colors$blue5",
235 |         $bgSubtleActive: "$colors$blue6",
236 | 
237 |         $bgSolid: "$colors$blue9",
238 |         $colorSolid: "white",
239 |         // solid hover styles
240 |         $bgSolidHover: "$colors$blue10",
241 |         // solid active styles
242 |         $bgSolidActive: "$colors$blue10",
243 |       },
244 |       danger: {
245 |         // default styles
246 |         $bg: "$colors$red3",
247 |         $border: "$colors$red7",
248 |         $color: "$colors$red11",
249 | 
250 |         // hover styles
251 |         $bgHover: "$colors$red4",
252 |         $borderHover: "$colors$red8",
253 | 
254 |         // active styles
255 |         $bgActive: "$colors$red5",
256 |         $borderActive: "$colors$red8",
257 | 
258 |         $bgSubtle: "$colors$red4",
259 |         $bgSubtleHover: "$colors$red5",
260 |         $bgSubtleActive: "$colors$red6",
261 | 
262 |         $bgSolid: "$colors$red9",
263 |         $colorSolid: "white",
264 |         // solid hover styles
265 |         $bgSolidHover: "$colors$red10",
266 |         // solid active styles
267 |         $bgSolidActive: "$colors$red10",
268 |       },
269 |     },
270 |     border: {
271 |       true: {},
272 |     },
273 |   },
274 |   compoundVariants: [
275 |     {
276 |       variant: "subtle",
277 |       border: true,
278 |       css: {
279 |         backgroundColor: "$bg",
280 |         boxShadow: "inset 0 0 0 1px $border",
281 |         "&:hover": {
282 |           backgroundColor: "$bgHover",
283 |           boxShadow: "inset 0 0 0 1px $borderHover",
284 |         },
285 |         "&:active": {
286 |           backgroundColor: "$bgActive",
287 |           boxShadow: "inset 0 0 0 1px $borderActive",
288 |         },
289 |       },
290 |     },
291 |   ],
292 | 
293 |   defaultVariants: {
294 |     size: "2",
295 |     variant: "subtle",
296 |   },
297 | });
298 | 


--------------------------------------------------------------------------------
/src/ui/Container.tsx:
--------------------------------------------------------------------------------
 1 | import { styled } from "@/stitches.config";
 2 | 
 3 | export const Container = styled("div", {
 4 |   display: "flex",
 5 |   width: "100%",
 6 |   mx: "auto",
 7 | 
 8 |   "@bp3": {
 9 |     px: 0,
10 |     maxWidth: 700,
11 |   },
12 |   "@bp4": {
13 |     maxWidth: 1000,
14 |   },
15 |   "@bp5": {
16 |     maxWidth: 1200,
17 |   },
18 | });
19 | 


--------------------------------------------------------------------------------
/src/ui/ControlGroup.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "@/stitches.config";
 2 | import { Button } from "./Button";
 3 | import { Select, SelectTrigger } from "./Select";
 4 | import { TextField } from "./TextField";
 5 | 
 6 | export const ControlGroup = styled("div", {
 7 |   display: "flex",
 8 | 
 9 |   // Make sure ControlGroup and its children don't affect normal stacking order
10 |   position: "relative",
11 |   zIndex: 0,
12 | 
13 |   [`& ${Button}`]: {
14 |     borderRadius: 0,
15 |     boxShadow:
16 |       "inset 0 1px $colors$slate6, inset -1px 0 $colors$slate6, inset 0 -1px $colors$slate6",
17 |     "&:hover": {
18 |       boxShadow:
19 |         "-1px 0 $colors$slate7, inset 0 1px $colors$slate7, inset -1px 0 $colors$slate7, inset 0 -1px $colors$slate7",
20 |     },
21 |     "&:focus": {
22 |       zIndex: 1,
23 |       boxShadow: "inset 0 0 0 1px $colors$slate7, 0 0 0 1px $colors$slate7",
24 |     },
25 |     "&:first-child": {
26 |       borderTopLeftRadius: "$2",
27 |       borderBottomLeftRadius: "$2",
28 |       boxShadow: "inset 0 0 0 1px $colors$slate6",
29 |       "&:hover": {
30 |         boxShadow: "inset 0 0 0 1px $colors$slate7",
31 |       },
32 |       "&:focus": {
33 |         boxShadow: "inset 0 0 0 1px $colors$slate7, 0 0 0 1px $colors$slate7",
34 |       },
35 |     },
36 |     "&:last-child": {
37 |       borderTopRightRadius: "$2",
38 |       borderBottomRightRadius: "$2",
39 |       boxShadow:
40 |         "inset 0 1px $colors$slate6, inset -1px 0 $colors$slate6, inset 0 -1px $colors$slate6",
41 |       "&:focus": {
42 |         boxShadow: "inset 0 0 0 1px $colors$slate7, 0 0 0 1px $colors$slate7",
43 |       },
44 |     },
45 |   },
46 |   [`& ${TextField}`]: {
47 |     borderRadius: 0,
48 |     boxShadow:
49 |       "inset 0 1px $colors$slate6, inset -1px 0 $colors$slate6, inset 0 -1px $colors$slate6",
50 |     "&:focus": {
51 |       zIndex: 1,
52 |       boxShadow:
53 |         "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
54 |     },
55 |     "&:first-child": {
56 |       borderTopLeftRadius: "$2",
57 |       borderBottomLeftRadius: "$2",
58 |       boxShadow: "inset 0 0 0 1px $colors$slate6",
59 |       "&:focus": {
60 |         boxShadow:
61 |           "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
62 |       },
63 |     },
64 |     "&:last-child": {
65 |       borderTopRightRadius: "$2",
66 |       borderBottomRightRadius: "$2",
67 |       boxShadow:
68 |         "inset 0 1px $colors$slate6, inset -1px 0 $colors$slate6, inset 0 -1px $colors$slate6",
69 |       "&:focus": {
70 |         boxShadow:
71 |           "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
72 |       },
73 |     },
74 |   },
75 | 
76 |   variants: {
77 |     isSelect: {
78 |       true: {
79 |         "& button": {
80 |           borderRadius: 0,
81 |           borderTopRightRadius: "$2",
82 |           borderBottomRightRadius: "$2",
83 |           boxShadow:
84 |             "inset 0 1px $colors$slate6, inset -1px 0 $colors$slate6, inset 0 -1px $colors$slate6",
85 |           "&:focus-within": {
86 |             boxShadow:
87 |               "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
88 |           },
89 |         },
90 |       },
91 |     },
92 |   },
93 | });
94 | 


--------------------------------------------------------------------------------
/src/ui/Dialog.tsx:
--------------------------------------------------------------------------------
  1 | import { ComponentProps, keyframes, styled } from "../stitches.config";
  2 | import * as DialogPrimitive from "@radix-ui/react-dialog";
  3 | import React, { forwardRef } from "react";
  4 | 
  5 | const overlayShow = keyframes({
  6 |   "0%": { opacity: 0 },
  7 |   "100%": { opacity: 1 },
  8 | });
  9 | 
 10 | const StyledOverlay = styled(DialogPrimitive.Overlay, {
 11 |   backgroundColor: "rgba(8, 8, 8, 0.7)",
 12 |   backdropFilter: "blur(1px)",
 13 |   position: "fixed",
 14 |   inset: 0,
 15 | 
 16 |   "@media (prefers-reduced-motion: no-preference)": {
 17 |     animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
 18 |   },
 19 | });
 20 | 
 21 | const contentShow = keyframes({
 22 |   "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
 23 |   "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
 24 | });
 25 | 
 26 | const StyledDialogContent = styled(DialogPrimitive.Content, {
 27 |   br: "$3",
 28 |   backgroundColor: "$slate1",
 29 |   border: "2px solid $slate2",
 30 |   boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.08)",
 31 |   position: "fixed",
 32 |   top: 0,
 33 |   bottom: 0,
 34 |   right: 0,
 35 |   left: 0,
 36 |   mx: "auto",
 37 |   my: "auto",
 38 |   width: "100%",
 39 |   maxWidth: 550,
 40 |   maxHeight: "max-content",
 41 |   overflow: "scroll",
 42 |   "&:focus": { outline: "none" },
 43 |   p: "$5",
 44 | 
 45 |   "@bp3": {
 46 |     maxHeight: "85vh",
 47 |     top: "50%",
 48 |     left: "50%",
 49 |     right: "auto",
 50 |     bottom: "auto",
 51 |     transform: "translate(-50%, -50%)",
 52 | 
 53 |     "@media (prefers-reduced-motion: no-preference)": {
 54 |       animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
 55 |     },
 56 |   },
 57 | });
 58 | 
 59 | export type DialogContentProps = ComponentProps<typeof StyledDialogContent> &
 60 |   DialogPrimitive.PortalProps;
 61 | 
 62 | export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
 63 |   ({ children, forceMount, container, ...props }, ref) => {
 64 |     return (
 65 |       <DialogPrimitive.Portal forceMount={forceMount} container={container}>
 66 |         <DialogOverlay />
 67 |         <StyledDialogContent ref={ref} {...props}>
 68 |           {children}
 69 |         </StyledDialogContent>
 70 |       </DialogPrimitive.Portal>
 71 |     );
 72 |   }
 73 | );
 74 | 
 75 | const StyledCloseButton = styled(DialogPrimitive.Close, {
 76 |   variants: {
 77 |     pos: {
 78 |       absolute: {
 79 |         position: "absolute",
 80 | 
 81 |         top: "$3",
 82 |         right: "$3",
 83 |       },
 84 |       relative: {
 85 |         position: "relative",
 86 | 
 87 |         top: 0,
 88 |         right: 0,
 89 |       },
 90 |     },
 91 |   },
 92 | 
 93 |   defaultVariants: {
 94 |     pos: "absolute",
 95 |   },
 96 | });
 97 | 
 98 | export const Dialog = DialogPrimitive.Root;
 99 | export const DialogOverlay = StyledOverlay;
100 | export const DialogPortal = DialogPrimitive.Portal;
101 | export const DialogTrigger = styled(DialogPrimitive.Trigger);
102 | export const DialogTitle = styled(DialogPrimitive.Title);
103 | export const DialogDescription = styled(DialogPrimitive.Description);
104 | export const DialogClose = StyledCloseButton;
105 | 


--------------------------------------------------------------------------------
/src/ui/Dropdown.ts:
--------------------------------------------------------------------------------
  1 | import { keyframes, styled } from "@/stitches.config";
  2 | import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
  3 | 
  4 | const slideUpAndFade = keyframes({
  5 |   "0%": { opacity: 0, transform: "translateY(2px)" },
  6 |   "100%": { opacity: 1, transform: "translateY(0)" },
  7 | });
  8 | 
  9 | const slideRightAndFade = keyframes({
 10 |   "0%": { opacity: 0, transform: "translateX(-2px)" },
 11 |   "100%": { opacity: 1, transform: "translateX(0)" },
 12 | });
 13 | 
 14 | const slideDownAndFade = keyframes({
 15 |   "0%": { opacity: 0, transform: "translateY(-2px)" },
 16 |   "100%": { opacity: 1, transform: "translateY(0)" },
 17 | });
 18 | 
 19 | const slideLeftAndFade = keyframes({
 20 |   "0%": { opacity: 0, transform: "translateX(2px)" },
 21 |   "100%": { opacity: 1, transform: "translateX(0)" },
 22 | });
 23 | 
 24 | const contentStyles = {
 25 |   minWidth: 220,
 26 |   backgroundColor: "$slate2",
 27 |   borderRadius: "$1",
 28 |   padding: 5,
 29 |   boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
 30 |   animationDuration: "400ms",
 31 |   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
 32 |   willChange: "transform, opacity",
 33 |   '&[data-state="open"]': {
 34 |     '&[data-side="top"]': { animationName: slideDownAndFade },
 35 |     '&[data-side="right"]': { animationName: slideLeftAndFade },
 36 |     '&[data-side="bottom"]': { animationName: slideUpAndFade },
 37 |     '&[data-side="left"]': { animationName: slideRightAndFade },
 38 |   },
 39 | };
 40 | 
 41 | export const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
 42 | export const DropdownMenuSubContent = styled(
 43 |   DropdownMenu.SubContent,
 44 |   contentStyles
 45 | );
 46 | 
 47 | export const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: "white" });
 48 | 
 49 | export const itemStyles = {
 50 |   all: "unset",
 51 |   fontSize: "$1",
 52 |   lineHeight: "$1",
 53 |   color: "$slate11",
 54 |   borderRadius: 3,
 55 |   display: "flex",
 56 |   alignItems: "center",
 57 |   px: "$3",
 58 |   height: 40,
 59 |   position: "relative",
 60 |   userSelect: "none",
 61 | 
 62 |   "&[data-disabled]": {
 63 |     color: "$slate8",
 64 |     pointerEvents: "none",
 65 |   },
 66 | 
 67 |   "&[data-highlighted]": {
 68 |     backgroundColor: "$slate4",
 69 |     color: "$slate12",
 70 |   },
 71 | };
 72 | 
 73 | export const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
 74 | export const DropdownMenuCheckboxItem = styled(
 75 |   DropdownMenu.CheckboxItem,
 76 |   itemStyles
 77 | );
 78 | export const DropdownMenuRadioGroup = styled(DropdownMenu.RadioGroup);
 79 | export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, {
 80 |   ...itemStyles,
 81 | });
 82 | export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
 83 |   '&[data-state="open"]': {
 84 |     backgroundColor: "$slate4",
 85 |     color: "$slate11",
 86 |   },
 87 |   ...itemStyles,
 88 | });
 89 | 
 90 | export const DropdownMenuLabel = styled(DropdownMenu.Label, {
 91 |   paddingLeft: "$3",
 92 |   fontSize: 11,
 93 |   lineHeight: "25px",
 94 |   color: "$slate10",
 95 | });
 96 | 
 97 | export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
 98 |   height: 1,
 99 |   backgroundColor: "$slate6",
100 |   margin: 5,
101 | });
102 | 
103 | export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
104 |   position: "absolute",
105 |   left: 0,
106 |   width: 12,
107 |   display: "inline-flex",
108 |   alignItems: "center",
109 |   justifyContent: "center",
110 | });
111 | 
112 | export const RightSlot = styled("div", {
113 |   marginLeft: "auto",
114 |   paddingLeft: 20,
115 |   color: "$slate11",
116 |   "[data-highlighted] > &": { color: "white" },
117 |   "[data-disabled] &": { color: "$slate8" },
118 | });
119 | 
120 | export const DropdownMenuRoot = styled(DropdownMenu.Root);
121 | export const DropdownMenuSubRoot = styled(DropdownMenu.Sub);
122 | export const DropdownMenuPortal = styled(DropdownMenu.Portal);
123 | export const DropdownMenuTrigger = styled(DropdownMenu.Trigger);
124 | 


--------------------------------------------------------------------------------
/src/ui/Flex.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "../stitches.config";
  2 | 
  3 | /**
  4 |  * Flex is a layout component with a default property of ```display: flex```.
  5 |  * It renders a HTML div element by default.
  6 |  */
  7 | export const Flex = styled("div", {
  8 |   display: "flex",
  9 | 
 10 |   variants: {
 11 |     direction: {
 12 |       row: {
 13 |         flexDirection: "row",
 14 |       },
 15 |       column: {
 16 |         flexDirection: "column",
 17 |       },
 18 |       rowReverse: {
 19 |         flexDirection: "row-reverse",
 20 |       },
 21 |       columnReverse: {
 22 |         flexDirection: "column-reverse",
 23 |       },
 24 |     },
 25 |     align: {
 26 |       start: {
 27 |         alignItems: "flex-start",
 28 |       },
 29 |       center: {
 30 |         alignItems: "center",
 31 |       },
 32 |       end: {
 33 |         alignItems: "flex-end",
 34 |       },
 35 |       stretch: {
 36 |         alignItems: "stretch",
 37 |       },
 38 |       baseline: {
 39 |         alignItems: "baseline",
 40 |       },
 41 |     },
 42 |     justify: {
 43 |       start: {
 44 |         justifyContent: "flex-start",
 45 |       },
 46 |       center: {
 47 |         justifyContent: "center",
 48 |       },
 49 |       end: {
 50 |         justifyContent: "flex-end",
 51 |       },
 52 |       between: {
 53 |         justifyContent: "space-between",
 54 |       },
 55 |     },
 56 |     wrap: {
 57 |       noWrap: {
 58 |         flexWrap: "nowrap",
 59 |       },
 60 |       wrap: {
 61 |         flexWrap: "wrap",
 62 |       },
 63 |       wrapReverse: {
 64 |         flexWrap: "wrap-reverse",
 65 |       },
 66 |     },
 67 |     gap: {
 68 |       1: {
 69 |         gap: "$1",
 70 |       },
 71 |       2: {
 72 |         gap: "$2",
 73 |       },
 74 |       3: {
 75 |         gap: "$3",
 76 |       },
 77 |       4: {
 78 |         gap: "$4",
 79 |       },
 80 |       5: {
 81 |         gap: "$5",
 82 |       },
 83 |       6: {
 84 |         gap: "$6",
 85 |       },
 86 |       7: {
 87 |         gap: "$7",
 88 |       },
 89 |       8: {
 90 |         gap: "$8",
 91 |       },
 92 |       9: {
 93 |         gap: "$9",
 94 |       },
 95 |       10: {
 96 |         gap: "$10",
 97 |       },
 98 |       20: {
 99 |         gap: "$20",
100 |       },
101 |     },
102 |   },
103 |   defaultVariants: {
104 |     direction: "row",
105 |     align: "stretch",
106 |     justify: "start",
107 |     wrap: "noWrap",
108 |   },
109 | });
110 | 


--------------------------------------------------------------------------------
/src/ui/Form.tsx:
--------------------------------------------------------------------------------
 1 | import { CSS, styled } from "@/stitches.config";
 2 | import { Flex } from "./Flex";
 3 | import { Typography } from "./Typography";
 4 | 
 5 | const FormHelperErrorText = styled("p", {
 6 |   fontSize: "$1",
 7 |   lineHeight: "$2",
 8 |   color: "$red11",
 9 |   m: 0,
10 |   mt: "$1",
11 |   position: "absolute",
12 |   bottom: 0,
13 | });
14 | 
15 | export const FormHelperError = ({
16 |   children,
17 |   css,
18 | }: {
19 |   children: React.ReactNode;
20 |   css?: CSS;
21 | }) => (
22 |   <FormHelperErrorText css={css} role="alert" aria-live="polite">
23 |     {children}
24 |   </FormHelperErrorText>
25 | );
26 | 
27 | export const FormHelperText = styled(Typography, {
28 |   fontSize: "$1",
29 |   lineHeight: "$2",
30 |   m: 0,
31 |   mt: "$1",
32 |   position: "absolute",
33 |   bottom: 0,
34 | 
35 |   defaultVariants: {
36 |     size: "1",
37 |   },
38 | });
39 | 
40 | export const FormRow = styled(Flex, {
41 |   gap: "$2",
42 |   mt: "$5",
43 |   pb: "$7",
44 |   position: "relative",
45 | 
46 |   defaultVariants: {
47 |     direction: "column",
48 |   },
49 | 
50 |   "& span": {
51 |     color: "$slate12",
52 |   },
53 | });
54 | 


--------------------------------------------------------------------------------
/src/ui/IconButton.ts:
--------------------------------------------------------------------------------
  1 | import { styled, ComponentProps } from "@/stitches.config";
  2 | 
  3 | export type IconButtonVariants = ComponentProps<typeof IconButton>;
  4 | 
  5 | export const IconButton = styled("button", {
  6 |   // Reset
  7 |   alignItems: "center",
  8 |   justifyContent: "center",
  9 |   appearance: "none",
 10 |   borderWidth: 0,
 11 |   boxSizing: "border-box",
 12 |   flexShrink: 0,
 13 |   outline: "none",
 14 |   padding: 0,
 15 |   textDecoration: "none",
 16 |   userSelect: "none",
 17 | 
 18 |   // custom reset
 19 |   display: "inline-flex",
 20 |   WebkitTapHighlightColor: "transparent",
 21 |   lineHeight: 1,
 22 | 
 23 |   //custom
 24 |   fontFamily: "inherit",
 25 |   br: "$2",
 26 | 
 27 |   "&:focus-visible": {
 28 |     boxShadow: "0 0 0 2px $colors$blue8",
 29 |   },
 30 | 
 31 |   "&:disabled": {
 32 |     pointerEvents: "none",
 33 |     cursor: "not-allowed",
 34 |     opacity: "50%",
 35 |   },
 36 | 
 37 |   '&[aria-disabled="true"]': {
 38 |     pointerEvents: "none",
 39 |     cursor: "not-allowed",
 40 |     opacity: "50%",
 41 |   },
 42 | 
 43 |   variants: {
 44 |     size: {
 45 |       1: {
 46 |         width: "$7",
 47 |         height: "$7",
 48 |         fontSize: "$1",
 49 |         "& svg": {
 50 |           size: "$3",
 51 |         },
 52 |       },
 53 |       2: {
 54 |         width: "$9",
 55 |         height: "$9",
 56 |         fontSize: "$3",
 57 |         "& svg": {
 58 |           size: "$4",
 59 |         },
 60 |       },
 61 |       3: {
 62 |         width: "$11",
 63 |         height: "$11",
 64 |         fontSize: "$5",
 65 |         "& svg": {
 66 |           size: "$4",
 67 |         },
 68 |       },
 69 |     },
 70 |     variant: {
 71 |       subtle: {
 72 |         color: "$slate11",
 73 |         backgroundColor: "$slate3",
 74 | 
 75 |         "&:hover": {
 76 |           backgroundColor: "$slate4",
 77 |         },
 78 | 
 79 |         "&:active": {
 80 |           backgroundColor: "$slate5",
 81 |         },
 82 |       },
 83 |       ghost: {
 84 |         color: "$slate11",
 85 |         backgroundColor: "transparent",
 86 | 
 87 |         "&:hover": {
 88 |           color: "$slate12",
 89 |           backgroundColor: "$slate4",
 90 |         },
 91 | 
 92 |         "&:active": {
 93 |           color: "$slate12",
 94 | 
 95 |           backgroundColor: "$slate5",
 96 |         },
 97 |       },
 98 |       transparent: {
 99 |         backgroundColor: "transparent",
100 |         color: "$slate11",
101 | 
102 |         "&:hover": {
103 |           color: "$slate12",
104 |         },
105 |       },
106 |     },
107 |     border: {
108 |       true: {},
109 |     },
110 |   },
111 |   compoundVariants: [
112 |     {
113 |       variant: "subtle",
114 |       border: true,
115 |       css: {
116 |         backgroundColor: "$bg",
117 |         boxShadow: "inset 0 0 0 1px $border",
118 |         "&:hover": {
119 |           backgroundColor: "$bgHover",
120 |           boxShadow: "inset 0 0 0 1px $borderHover",
121 |         },
122 |         "&:active": {
123 |           backgroundColor: "$bgActive",
124 |           boxShadow: "inset 0 0 0 1px $borderActive",
125 |         },
126 |       },
127 |     },
128 |     {
129 |       variant: "transparent",
130 |       size: "1",
131 |       css: {
132 |         width: "$4",
133 |         height: "$4",
134 |       },
135 |     },
136 |     {
137 |       variant: "transparent",
138 |       size: "2",
139 |       css: {
140 |         width: "$6",
141 |         height: "$6",
142 |       },
143 |     },
144 |     {
145 |       variant: "transparent",
146 |       size: "3",
147 |       css: {
148 |         width: "$8",
149 |         height: "$8",
150 |       },
151 |     },
152 |   ],
153 | 
154 |   defaultVariants: {
155 |     size: "2",
156 |     variant: "subtle",
157 |   },
158 | });
159 | 


--------------------------------------------------------------------------------
/src/ui/Image.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "@/stitches.config";
 2 | 
 3 | export const Image = styled("img", {
 4 |   variants: {
 5 |     fit: {
 6 |       contain: {
 7 |         objectFit: "contain",
 8 |       },
 9 |       cover: {
10 |         objectFit: "cover",
11 |       },
12 |       fill: {
13 |         objectFit: "fill",
14 |       },
15 |     },
16 |     size: {
17 |       1: {
18 |         width: 16,
19 |         height: 16,
20 |       },
21 |       2: {
22 |         width: 20,
23 |         height: 20,
24 |       },
25 |       3: {
26 |         width: 28,
27 |         height: 28,
28 |       },
29 |     },
30 |   },
31 | 
32 |   defaultVariants: {
33 |     fit: "cover",
34 |   },
35 | });
36 | 


--------------------------------------------------------------------------------
/src/ui/Label.tsx:
--------------------------------------------------------------------------------
1 | import { styled } from "@/stitches.config";
2 | import * as LabelPrimitive from "@radix-ui/react-label";
3 | 
4 | export const Label = styled(LabelPrimitive.Root, {
5 |   fontSize: "$1",
6 |   lineHeight: "$2",
7 |   userSelect: "none",
8 | });
9 | 


--------------------------------------------------------------------------------
/src/ui/Loader.ts:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "@/stitches.config";
 2 | 
 3 | const spin = keyframes({
 4 |   to: { transform: "rotate(360deg)" },
 5 | });
 6 | 
 7 | export const LoadingSpinner = styled("div", {
 8 |   position: "relative",
 9 |   px: "$4",
10 | 
11 |   "&::before": {
12 |     content: "",
13 |     boxSizing: "border-box",
14 |     position: "absolute",
15 |     top: "50%",
16 |     left: "50%",
17 |     width: "$4",
18 |     height: "$4",
19 |     mt: "-8px",
20 |     ml: "-8px",
21 |     br: "$round",
22 |     border: "1px solid $colors$slate8",
23 |     borderTopColor: "$slate11",
24 |     animation: `${spin} .7s linear infinite`,
25 |   },
26 | });
27 | 


--------------------------------------------------------------------------------
/src/ui/Popover.tsx:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled, ComponentProps } from "@/stitches.config";
 2 | import * as Popover from "@radix-ui/react-popover";
 3 | import { forwardRef } from "react";
 4 | 
 5 | const slideUpAndFade = keyframes({
 6 |   "0%": { opacity: 0, transform: "translateY(2px)" },
 7 |   "100%": { opacity: 1, transform: "translateY(0)" },
 8 | });
 9 | 
10 | const slideRightAndFade = keyframes({
11 |   "0%": { opacity: 0, transform: "translateX(-2px)" },
12 |   "100%": { opacity: 1, transform: "translateX(0)" },
13 | });
14 | 
15 | const slideDownAndFade = keyframes({
16 |   "0%": { opacity: 0, transform: "translateY(-2px)" },
17 |   "100%": { opacity: 1, transform: "translateY(0)" },
18 | });
19 | 
20 | const slideLeftAndFade = keyframes({
21 |   "0%": { opacity: 0, transform: "translateX(2px)" },
22 |   "100%": { opacity: 1, transform: "translateX(0)" },
23 | });
24 | 
25 | export const StyledPopoverContent = styled(Popover.Content, {
26 |   borderRadius: 4,
27 |   padding: 20,
28 |   width: 280,
29 |   minWidth: 280,
30 |   backgroundColor: "$slate2",
31 |   boxShadow:
32 |     "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
33 |   animationDuration: "400ms",
34 |   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
35 |   willChange: "transform, opacity",
36 |   '&[data-state="open"]': {
37 |     '&[data-side="top"]': { animationName: slideDownAndFade },
38 |     '&[data-side="right"]': { animationName: slideLeftAndFade },
39 |     '&[data-side="bottom"]': { animationName: slideUpAndFade },
40 |     '&[data-side="left"]': { animationName: slideRightAndFade },
41 |   },
42 |   "&:focus": {
43 |     boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $colors$focus`,
44 |   },
45 | });
46 | 
47 | export type PopoverContentProps = ComponentProps<typeof StyledPopoverContent> &
48 |   Popover.PortalProps;
49 | 
50 | export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
51 |   ({ children, forceMount, container, ...props }, ref) => {
52 |     return (
53 |       <Popover.Portal forceMount={forceMount} container={container}>
54 |         <StyledPopoverContent ref={ref} {...props}>
55 |           {children}
56 |         </StyledPopoverContent>
57 |       </Popover.Portal>
58 |     );
59 |   }
60 | );
61 | 
62 | export const PopoverArrow = styled(Popover.Arrow, {
63 |   fill: "$slate2",
64 | });
65 | 
66 | export const PopoverClose = styled(Popover.Close, {
67 |   variants: {
68 |     pos: {
69 |       absolute: {
70 |         position: "absolute",
71 | 
72 |         top: "$3",
73 |         right: "$3",
74 |       },
75 |       relative: {
76 |         position: "relative",
77 | 
78 |         top: 0,
79 |         right: 0,
80 |       },
81 |     },
82 |   },
83 | 
84 |   defaultVariants: {
85 |     pos: "absolute",
86 |   },
87 | });
88 | 
89 | export const PopoverTrigger = Popover.PopoverTrigger;
90 | export const PopoverRoot = Popover.Root;
91 | 


--------------------------------------------------------------------------------
/src/ui/Progress.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "@/stitches.config";
 2 | import * as ProgressPrimitive from "@radix-ui/react-progress";
 3 | 
 4 | export const Progress = styled(ProgressPrimitive.Root, {
 5 |   position: "relative",
 6 |   overflow: "hidden",
 7 |   backgroundColor: "$slate3",
 8 |   width: "100%",
 9 |   height: "$1",
10 | 
11 |   // Fix overflow clipping in Safari
12 |   // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
13 |   transform: "translateZ(0)",
14 | });
15 | 
16 | export const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
17 |   width: "100%",
18 |   height: "100%",
19 |   transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
20 | });
21 | 


--------------------------------------------------------------------------------
/src/ui/RadioGroup.tsx:
--------------------------------------------------------------------------------
  1 | import { styled } from "@/stitches.config";
  2 | import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
  3 | 
  4 | export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  5 |   display: "flex",
  6 |   flexDirection: "column",
  7 | 
  8 |   "&:disabled": {
  9 |     opacity: 0.5,
 10 |     pointerEvents: "none",
 11 |   },
 12 | 
 13 |   variants: {
 14 |     gap: {
 15 |       1: {
 16 |         gap: "$1",
 17 |       },
 18 |       2: {
 19 |         gap: "$2",
 20 |       },
 21 |       3: {
 22 |         gap: "$3",
 23 |       },
 24 |       4: {
 25 |         gap: "$4",
 26 |       },
 27 |       5: {
 28 |         gap: "$5",
 29 |       },
 30 |       6: {
 31 |         gap: "$6",
 32 |       },
 33 |       7: {
 34 |         gap: "$7",
 35 |       },
 36 |       8: {
 37 |         gap: "$8",
 38 |       },
 39 |       9: {
 40 |         gap: "$9",
 41 |       },
 42 |       10: {
 43 |         gap: "$10",
 44 |       },
 45 |       20: {
 46 |         gap: "$20",
 47 |       },
 48 |     },
 49 |   },
 50 | });
 51 | 
 52 | export const RadioItem = styled(RadioGroupPrimitive.Item, {
 53 |   // resets
 54 |   all: "unset",
 55 | 
 56 |   //custom
 57 |   br: "$round",
 58 | 
 59 |   variants: {
 60 |     variant: {
 61 |       outline: {
 62 |         bg: "transparent",
 63 |         boxShadow: "0 0 0 1px $colors$slate6",
 64 |         color: "$slate11",
 65 | 
 66 |         "&:hover": {
 67 |           boxShadow: "0 0 0 1px $colors$slate7",
 68 |         },
 69 | 
 70 |         '&[aria-checked="true"]': {
 71 |           boxShadow: "0 0 0 1px $colors$slate12",
 72 |         },
 73 |       },
 74 |       solid: {
 75 |         bg: "transparent",
 76 |         boxShadow: "0 0 0 1px $colors$slate6",
 77 |         color: "$slate11",
 78 | 
 79 |         "&:hover": {
 80 |           bg: "$slate3",
 81 |           boxShadow: "0 0 0 1px $colors$slate7",
 82 |         },
 83 | 
 84 |         '&[aria-checked="true"]': {
 85 |           bg: "$slate12",
 86 |           color: "$slate1",
 87 |         },
 88 |       },
 89 |     },
 90 |     size: {
 91 |       1: {
 92 |         boxSize: "$3",
 93 |       },
 94 |       2: {
 95 |         boxSize: "$4",
 96 |       },
 97 |       3: {
 98 |         boxSize: "$5",
 99 |       },
100 |     },
101 |   },
102 | 
103 |   defaultVariants: {
104 |     variant: "solid",
105 |     size: "2",
106 |   },
107 | });
108 | 
109 | export const RadioIndicator = styled(RadioGroupPrimitive.Indicator, {
110 |   display: "grid",
111 |   placeItems: "center",
112 |   width: "100%",
113 |   height: "100%",
114 |   position: "relative",
115 |   "&::after": {
116 |     content: '""',
117 |     display: "block",
118 |     br: "$round",
119 |     bg: "currentColor",
120 |     boxSize: "50%",
121 |   },
122 | 
123 |   variants: {
124 |     indicatorSize: {
125 |       1: {
126 |         "&::after": {
127 |           boxSize: "40%",
128 |         },
129 |       },
130 |       2: {
131 |         "&::after": {
132 |           boxSize: "50%",
133 |         },
134 |       },
135 |       3: {
136 |         "&::after": {
137 |           boxSize: "60%",
138 |         },
139 |       },
140 |     },
141 |   },
142 | 
143 |   defaultVariants: {
144 |     indicatorSize: "2",
145 |   },
146 | });
147 | 
148 | // export interface RadioProps extends StyledRadioProps, Pick<StyledIndicatorProps, 'indicatorSize'> {
149 | //   children: React.ReactNode;
150 | // }
151 | 
152 | // export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
153 | //   (
154 | //     { children, id, disabled, value, checked, indicatorSize, css, ...rest },
155 | //     ref
156 | //   ) => {
157 | //     return (
158 | //       <Flex as="span" gap="2" align="center">
159 | //         <StyledRadio
160 | //           css={{
161 | //             $activeBorder: `$colors${colorScheme}9`,
162 | //             $activeBorderHover: `$colors${colorScheme}10`,
163 | 
164 | //             $inactiveBackground: '$colors$slate3',
165 | //             $inactiveBackgroundHover: '$colors$slate3',
166 | //             $activeBackground:
167 | //               colorScheme === 'slate' ? '$colors$slate12' : `$colors${colorScheme}9`,
168 | //             $activeColor:
169 | //               colorScheme === 'slate' ? '$colors$slate1' : getContrastingColor(colorScheme),
170 | //             ...css,
171 | //           }}
172 | //           ref={ref}
173 | //           id={id}
174 | //           value={value}
175 | //           {...rest}
176 | //         >
177 | //           <StyledIndicator indicatorSize={indicatorSize} />
178 | //         </StyledRadio>
179 | //         <Label htmlFor={id}>{children}</Label>
180 | //       </Flex>
181 | //     );
182 | //   }
183 | // );
184 | 


--------------------------------------------------------------------------------
/src/ui/Select.tsx:
--------------------------------------------------------------------------------
  1 | import * as SelectPrimitive from "@radix-ui/react-select";
  2 | import { RxCheck } from "react-icons/rx";
  3 | import { ComponentProps, styled } from "@/stitches.config";
  4 | import { Ref, forwardRef } from "react";
  5 | 
  6 | export const SelectTrigger = styled(SelectPrimitive.Trigger, {
  7 |   all: "unset",
  8 |   display: "inline-flex",
  9 |   alignItems: "center",
 10 |   justifyContent: "space-between",
 11 |   gap: "$2",
 12 |   p: "$3",
 13 |   br: "$1",
 14 |   boxShadow: "0 0 0 1px $colors$slate6",
 15 |   fontSize: "$2",
 16 | 
 17 |   "&:hover": { boxShadow: "0 0 0 1px $colors$slate7" },
 18 |   "&:focus": { boxShadow: "0 0 0 2px $colors$focus" },
 19 |   "&[data-placeholder]": { color: "$slate9" },
 20 | 
 21 |   "&:disabled": {
 22 |     pointerEvents: "none",
 23 |     opacity: 0.5,
 24 | 
 25 |     // targeting the Select Value
 26 |     "& span": {
 27 |       color: "$slate9",
 28 |     },
 29 | 
 30 |     "& svg": {
 31 |       color: "$slate9",
 32 |     },
 33 |   },
 34 | 
 35 |   variants: {
 36 |     size: {
 37 |       1: {
 38 |         fontSize: "$2",
 39 |         p: "$2",
 40 |       },
 41 |       2: {
 42 |         fontSize: "$3",
 43 |         p: "$3",
 44 |       },
 45 |       3: {
 46 |         fontSize: "$3",
 47 |         p: "$5",
 48 |       },
 49 |     },
 50 |   },
 51 | 
 52 |   defaultVariants: {
 53 |     size: "2",
 54 |   },
 55 | });
 56 | 
 57 | export const SelectContent = styled(SelectPrimitive.Content, {
 58 |   overflow: "hidden",
 59 |   backgroundColor: "$slate1",
 60 |   boxShadow: "0 0 0 2px $colors$slate6",
 61 |   br: "$1",
 62 | });
 63 | 
 64 | export const SelectViewport = styled(SelectPrimitive.Viewport, {
 65 |   padding: 5,
 66 | });
 67 | 
 68 | type StyledSelectItemProps = ComponentProps<typeof StyledItem>;
 69 | 
 70 | const StyledItem = styled(SelectPrimitive.Item, {
 71 |   fontSize: "$sm",
 72 |   lineHeight: 1,
 73 |   color: "$slate12",
 74 |   borderRadius: "$sm",
 75 |   display: "flex",
 76 |   alignItems: "center",
 77 |   py: "$2",
 78 |   px: "$5",
 79 |   position: "relative",
 80 |   userSelect: "none",
 81 |   br: "$1",
 82 | 
 83 |   "&[data-disabled]": {
 84 |     opacity: 0.5,
 85 |     pointerEvents: "none",
 86 |   },
 87 | 
 88 |   "&[data-highlighted]": {
 89 |     outline: "none",
 90 |     backgroundColor: "$blue9",
 91 |     color: "#fff",
 92 |   },
 93 | });
 94 | 
 95 | export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
 96 |   position: "absolute",
 97 |   left: 0,
 98 |   width: 20,
 99 |   display: "inline-flex",
100 |   alignItems: "center",
101 |   justifyContent: "center",
102 | });
103 | 
104 | type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;
105 | 
106 | export const SelectItem = forwardRef<
107 |   HTMLDivElement,
108 |   SelectItemProps & StyledSelectItemProps
109 | >(({ children, ...props }, forwardedRef) => {
110 |   return (
111 |     //@ts-ignore
112 |     <StyledItem {...props} ref={forwardedRef as Ref<HTMLDivElement>}>
113 |       <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
114 |       <StyledItemIndicator>
115 |         <RxCheck />
116 |       </StyledItemIndicator>
117 |     </StyledItem>
118 |   );
119 | });
120 | 
121 | export const Select = styled(SelectPrimitive.Root);
122 | export const SelectPortal = SelectPrimitive.Portal;
123 | export const SelectGroup = SelectPrimitive.Group;
124 | export const SelectValue = SelectPrimitive.Value;
125 | export const SelectIcon = styled(SelectPrimitive.Icon, { color: "$slate11" });
126 | 


--------------------------------------------------------------------------------
/src/ui/Skeleton.ts:
--------------------------------------------------------------------------------
 1 | import { darkTheme, keyframes, styled } from "../stitches.config";
 2 | 
 3 | const loading = keyframes({
 4 |   "0%": { backgroundPosition: "200% 0" },
 5 |   "100%": { backgroundPosition: "-200% 0" },
 6 | });
 7 | 
 8 | export const Skeleton = styled("div", {
 9 |   width: 100,
10 |   height: 100,
11 |   br: "$1",
12 |   backgroundImage:
13 |     "linear-gradient(270deg, hsl(109, 0%, 94%), hsl(109, 0%, 91%), hsl(109, 0%, 91%), hsl(109, 0%, 94%))",
14 |   backgroundSize: "400% 100%",
15 |   animation: `${loading} 5s ease-in-out infinite`,
16 | 
17 |   [`.${darkTheme} &`]: {
18 |     backgroundImage:
19 |       "linear-gradient(270deg, hsl(109, 0%, 6%), hsl(109, 0%, 9%), hsl(109, 0%, 9%), hsl(109, 0%, 6%))",
20 |   },
21 | });
22 | 


--------------------------------------------------------------------------------
/src/ui/Slider.ts:
--------------------------------------------------------------------------------
 1 | import * as Slider from "@radix-ui/react-slider";
 2 | import { styled } from "@/stitches.config";
 3 | 
 4 | export const SliderRoot = styled(Slider.Root, {
 5 |   position: "relative",
 6 |   display: "flex",
 7 |   alignItems: "center",
 8 |   userSelect: "none",
 9 |   touchAction: "none",
10 |   width: 200,
11 |   height: 20,
12 | });
13 | 
14 | export const SliderTrack = styled(Slider.Track, {
15 |   backgroundColor: "$whiteA7",
16 |   position: "relative",
17 |   flexGrow: 1,
18 |   borderRadius: "9999px",
19 |   height: 2,
20 | });
21 | 
22 | export const SliderRange = styled(Slider.Range, {
23 |   position: "absolute",
24 |   backgroundColor: "$whiteA12",
25 |   borderRadius: "9999px",
26 |   height: "100%",
27 | });
28 | 
29 | export const SliderThumb = styled(Slider.Thumb, {
30 |   display: "block",
31 |   width: 10,
32 |   height: 10,
33 |   backgroundColor: "$whiteA12",
34 |   boxShadow: `0 2px 10px $colors$blackA3`,
35 |   borderRadius: 10,
36 |   "&:focus": { outline: "none", boxShadow: `0 0 0 3px $colors$whiteA8` },
37 | });
38 | 


--------------------------------------------------------------------------------
/src/ui/Tabs.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "@/stitches.config";
 2 | import * as TabsPrimitive from "@radix-ui/react-tabs";
 3 | 
 4 | export const Tabs = styled(TabsPrimitive.Root);
 5 | 
 6 | export const TabsList = styled(TabsPrimitive.List, {
 7 |   display: "flex",
 8 |   boxShadow: "0 1px 0 0 $colors$slate6",
 9 | });
10 | 
11 | export const TabsTrigger = styled(TabsPrimitive.Trigger, {
12 |   all: "unset",
13 |   fontSize: "$2",
14 |   color: "$slate9",
15 |   px: "$5",
16 |   py: "$2",
17 |   position: "relative",
18 | 
19 |   "&:hover": {
20 |     color: "$slate10",
21 |   },
22 | 
23 |   "&:disabled": {
24 |     opacity: 0.5,
25 |     pointerEvents: "none",
26 |   },
27 | 
28 |   '&[data-state="active"]': {
29 |     color: "$slate12",
30 |     boxShadow: "0 1px 0 0 $colors$slate12",
31 |     fontWeight: 600,
32 | 
33 |     "&:focus-visible": {
34 |       boxShadow: "0 0 0 1px $colors$focus",
35 |     },
36 |   },
37 | });
38 | 
39 | export const TabsContent = styled(TabsPrimitive.Content);
40 | 


--------------------------------------------------------------------------------
/src/ui/TextField.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "@/stitches.config";
  2 | 
  3 | export const TextField = styled("input", {
  4 |   all: "unset",
  5 |   appearance: "none",
  6 |   // reset
  7 |   borderWidth: "0",
  8 |   boxSizing: "border-box",
  9 |   fontFamily: "inherit",
 10 |   margin: "0",
 11 |   outline: "none",
 12 |   padding: "0",
 13 |   width: "100%",
 14 |   WebkitTapHighlightColor: "rgba(0,0,0,0)",
 15 |   "&::before": {
 16 |     boxSizing: "border-box",
 17 |   },
 18 |   "&::after": {
 19 |     boxSizing: "border-box",
 20 |   },
 21 | 
 22 |   // custom
 23 |   backgroundColor: "transparent",
 24 |   minWidth: 200,
 25 |   br: "$1",
 26 |   px: "$3",
 27 |   color: "$slate12",
 28 |   display: "flex",
 29 |   justifyContent: "center",
 30 |   alignItems: "center",
 31 | 
 32 |   "&::placeholder": {
 33 |     color: "$slate9",
 34 |   },
 35 | 
 36 |   "&:focus": {
 37 |     boxShadow:
 38 |       "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
 39 |   },
 40 | 
 41 |   "&:disabled": {
 42 |     pointerEvents: "none",
 43 |     cursor: "not-allowed",
 44 |     opacity: "50%",
 45 |   },
 46 | 
 47 |   '&[aria-disabled="true"]': {
 48 |     pointerEvents: "none",
 49 |     cursor: "not-allowed",
 50 |     opacity: "50%",
 51 |   },
 52 | 
 53 |   "&:read-only": {
 54 |     boxShadow: "inset 0 0 0 1px $colors$slate7",
 55 |   },
 56 | 
 57 |   variants: {
 58 |     size: {
 59 |       1: {
 60 |         fontSize: "$1",
 61 |         lineHeight: "$sizes$7",
 62 |       },
 63 |       2: {
 64 |         fontSize: "$2",
 65 |         lineHeight: "$sizes$9",
 66 |       },
 67 |       3: {
 68 |         fontSize: "$2",
 69 |         lineHeight: "$sizes$11",
 70 |       },
 71 |     },
 72 |     variant: {
 73 |       subtle: {
 74 |         "&[type]": {
 75 |           backgroundColor: "$slate3",
 76 |         },
 77 |       },
 78 |       outline: {
 79 |         boxShadow: "inset 0 0 0 1px $colors$slate7",
 80 |         // "&:hover": {
 81 |         //   boxShadow: "inset 0 0 0 1px $colors$slate8",
 82 |         // },
 83 |       },
 84 |       ghost: {
 85 |         // "&:hover": {
 86 |         //   boxShadow: "inset 0 0 0 1px $colors$slate8",
 87 |         // },
 88 |       },
 89 |       flushed: {
 90 |         "&[type]": {
 91 |           boxShadow: "none",
 92 |           br: 0,
 93 |           borderBottom: "1px solid $colors$slate7",
 94 | 
 95 |           // "&:hover": {
 96 |           //   borderBottom: "1px solid $colors$slate8",
 97 |           // },
 98 | 
 99 |           "&:focus": {
100 |             boxShadow: "none",
101 |             borderBottom: "2px solid $colors$focus",
102 |           },
103 |         },
104 |       },
105 |     },
106 |     state: {
107 |       valid: {
108 |         "&[type]": {
109 |           boxShadow: "inset 0 0 0 1px $colors$green7",
110 | 
111 |           "&:focus": {
112 |             boxShadow:
113 |               "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
114 |           },
115 |         },
116 |       },
117 |       invalid: {
118 |         "&[type]": {
119 |           boxShadow: "inset 0 0 0 1px $colors$red7",
120 | 
121 |           "&:focus": {
122 |             boxShadow:
123 |               "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
124 |           },
125 |         },
126 |       },
127 |     },
128 |     border: {
129 |       true: {},
130 |     },
131 |   },
132 | 
133 |   compoundVariants: [
134 |     {
135 |       variant: "flushed",
136 |       state: "valid",
137 |       css: {
138 |         boxShadow: "none",
139 |         borderBottom: "1px solid $colors$green8",
140 | 
141 |         "&:focus": {
142 |           boxShadow: "none",
143 |           borderBottom: "2px solid $colors$green8",
144 |         },
145 |       },
146 |     },
147 |     {
148 |       variant: "flushed",
149 |       state: "invalid",
150 |       css: {
151 |         boxShadow: "none",
152 |         borderBottom: "1px solid $colors$red8",
153 | 
154 |         "&:focus": {
155 |           boxShadow: "none",
156 |           borderBottom: "2px solid $colors$red8",
157 |         },
158 |       },
159 |     },
160 |     {
161 |       variant: "subtle",
162 |       border: true,
163 |       css: {
164 |         boxShadow: "inset 0 0 0 1px $colors$slate7",
165 |         // "&:hover": {
166 |         //   boxShadow: "inset 0 0 0 1px $colors$slate8",
167 |         // },
168 |       },
169 |     },
170 |   ],
171 | 
172 |   defaultVariants: {
173 |     size: "2",
174 |     variant: "outline",
175 |   },
176 | });
177 | 


--------------------------------------------------------------------------------
/src/ui/Textarea.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "../stitches.config";
  2 | 
  3 | export const Textarea = styled("textarea", {
  4 |   appearance: "none",
  5 |   borderWidth: "0",
  6 |   boxSizing: "border-box",
  7 |   fontFamily: "inherit",
  8 |   margin: "0",
  9 |   outline: "none",
 10 |   padding: "0",
 11 |   resize: "vertical",
 12 |   width: "100%",
 13 | 
 14 |   backgroundColor: "transparent",
 15 |   WebkitTapHighlightColor: "rgba(0,0,0,0)",
 16 |   "&::before": {
 17 |     boxSizing: "border-box",
 18 |   },
 19 |   "&::after": {
 20 |     boxSizing: "border-box",
 21 |   },
 22 | 
 23 |   //custom
 24 |   px: "$2",
 25 |   py: "$1",
 26 |   br: "$1",
 27 |   color: "$slate12",
 28 |   boxShadow: "0 0 0 1px $colors$slate7",
 29 | 
 30 |   "&::placeholder": {
 31 |     color: "$slate9",
 32 |   },
 33 | 
 34 |   "&:focus": {
 35 |     boxShadow:
 36 |       "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
 37 |   },
 38 | 
 39 |   "&:disabled": {
 40 |     pointerEvents: "none",
 41 |     cursor: "not-allowed",
 42 |     opacity: "50%",
 43 |   },
 44 | 
 45 |   '&[aria-disabled="true"]': {
 46 |     pointerEvents: "none",
 47 |     cursor: "not-allowed",
 48 |     opacity: "50%",
 49 |   },
 50 | 
 51 |   "&:read-only": {
 52 |     boxShadow: "inset 0 0 0 1px $colors$slate7",
 53 |   },
 54 | 
 55 |   variants: {
 56 |     size: {
 57 |       1: {
 58 |         height: "$7",
 59 |         fontSize: "$1",
 60 |         lineHeight: "$1",
 61 |       },
 62 |       2: {
 63 |         height: "$10",
 64 |         fontSize: "$2",
 65 |         lineHeight: "$2",
 66 |       },
 67 |       3: {
 68 |         height: 80,
 69 |         fontSize: "$2",
 70 |         lineHeight: "$3",
 71 |       },
 72 |     },
 73 |     variant: {
 74 |       subtle: {
 75 |         backgroundColor: "$slate2",
 76 | 
 77 |         // "&:hover": {
 78 |         //   backgroundColor: "$slate3",
 79 |         // },
 80 |       },
 81 |       outline: {
 82 |         // "&:hover": {
 83 |         //   boxShadow: "0 0 0 1px $colors$slate8",
 84 |         // },
 85 |       },
 86 |     },
 87 |     state: {
 88 |       valid: {
 89 |         boxShadow: "inset 0 0 0 1px $colors$green7",
 90 | 
 91 |         "&:focus": {
 92 |           boxShadow:
 93 |             "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
 94 |         },
 95 |       },
 96 |       invalid: {
 97 |         boxShadow: "inset 0 0 0 1px $colors$red7",
 98 | 
 99 |         "&:focus": {
100 |           boxShadow:
101 |             "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
102 |         },
103 |       },
104 |     },
105 |   },
106 | 
107 |   defaultVariants: {
108 |     size: "2",
109 |     variant: "outline",
110 |   },
111 | });
112 | 


--------------------------------------------------------------------------------
/src/ui/Typography.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "../stitches.config";
  2 | import { ComponentProps } from "@stitches/react";
  3 | 
  4 | export type TypographyProps = ComponentProps<typeof Typography>;
  5 | 
  6 | export const Typography = styled("p", {
  7 |   // resets
  8 |   margin: 0,
  9 |   fontVariantNumeric: "tabular-nums",
 10 | 
 11 |   // custom
 12 |   fontFamily: "inherit",
 13 |   $loColor: "$colors$slate11",
 14 |   $hiColor: "$colors$slate12",
 15 | 
 16 |   variants: {
 17 |     size: {
 18 |       1: {
 19 |         fontSize: "$1",
 20 |         lineHeight: "$1",
 21 |       },
 22 |       2: {
 23 |         fontSize: "$2",
 24 |         lineHeight: "$2",
 25 |       },
 26 |       3: {
 27 |         fontSize: "$3",
 28 |         lineHeight: "$3",
 29 |       },
 30 |       4: {
 31 |         fontSize: "$4",
 32 |         lineHeight: "$4",
 33 |       },
 34 |       5: {
 35 |         fontSize: "$5",
 36 |         lineHeight: "$5",
 37 |       },
 38 |       6: {
 39 |         fontSize: "$6",
 40 |         lineHeight: "$6",
 41 |       },
 42 |       7: {
 43 |         fontSize: "$7",
 44 |         lineHeight: "$7",
 45 |       },
 46 |       8: {
 47 |         fontSize: "$8",
 48 |         lineHeight: "$8",
 49 |       },
 50 |       9: {
 51 |         fontSize: "$9",
 52 |         lineHeight: "$9",
 53 |       },
 54 |       10: {
 55 |         fontSize: "$10",
 56 |         lineHeight: "$10",
 57 |       },
 58 |       11: {
 59 |         fontSize: "$11",
 60 |         lineHeight: "$11",
 61 |       },
 62 |       12: {
 63 |         fontSize: "$12",
 64 |         lineHeight: "$12",
 65 |       },
 66 |     },
 67 |     weight: {
 68 |       4: {
 69 |         fontWeight: "$4",
 70 |       },
 71 |       5: {
 72 |         fontWeight: "$5",
 73 |       },
 74 |       6: {
 75 |         fontWeight: "$6",
 76 |       },
 77 |     },
 78 |     contrast: {
 79 |       lo: {
 80 |         color: "$loColor",
 81 |       },
 82 |       hi: {
 83 |         color: "$hiColor",
 84 |       },
 85 |     },
 86 |     ellipsis: {
 87 |       single: {
 88 |         textOverflow: "ellipsis",
 89 |         whiteSpace: "nowrap",
 90 |         overflow: "hidden",
 91 |       },
 92 |       multi: {
 93 |         textOverflow: "ellipsis",
 94 |         overflow: "hidden",
 95 |         display: "-webkit-box",
 96 |         "-webkit-line-clamp": 2,
 97 |         "-webkit-box-orient": "vertical",
 98 |       },
 99 |     },
100 |   },
101 | 
102 |   defaultVariants: {
103 |     size: "3",
104 |     weight: "4",
105 |     contrast: "lo",
106 |   },
107 | });
108 | 


--------------------------------------------------------------------------------
/src/ui/animations/SuccessCheckmark.tsx:
--------------------------------------------------------------------------------
  1 | import { ComponentProps, keyframes, styled } from "../../stitches.config";
  2 | 
  3 | export const blue = "#00C8E5";
  4 | const white = "#fff";
  5 | const curve = "cubic-bezier(0.420, 0.000, 0.275, 1.155)";
  6 | const time = "1.4s";
  7 | export const confettiIndices = [1, 2, 3, 4, 5, 6];
  8 | 
  9 | export const rotate = keyframes({
 10 |   "0%": { transform: "rotate(0deg)" },
 11 |   "100%": { transform: "rotate(360deg)" },
 12 | });
 13 | 
 14 | export const grow = keyframes({
 15 |   "0%": { transform: "scale(0)" },
 16 |   "50%": { transform: "scale(1)" },
 17 |   "100%": { transform: "scale(0)" },
 18 | });
 19 | 
 20 | export const checkmark = keyframes({
 21 |   "0%": { opacity: 0, transform: "scale(0)" },
 22 |   "10%": { opacity: 1, transform: "scale(1)" },
 23 | });
 24 | 
 25 | export const StyledConfetti = styled("svg", {
 26 |   position: "absolute",
 27 |   animation: `${grow} ${time} ${curve} both`,
 28 |   fill: "$green9",
 29 | 
 30 |   variants: {
 31 |     index: {
 32 |       1: {
 33 |         width: "12px",
 34 |         height: "12px",
 35 |         left: "12px",
 36 |         top: "16px",
 37 |         animationDelay: `calc(1 * ${time} / 2)`,
 38 |       },
 39 |       2: {
 40 |         width: "18px",
 41 |         height: "18px",
 42 |         left: "168px",
 43 |         top: "84px",
 44 |         animationDelay: `calc(2 * ${time} / 2)`,
 45 |       },
 46 |       3: {
 47 |         width: "10px",
 48 |         height: "10px",
 49 |         left: "32px",
 50 |         top: "162px",
 51 |         animationDelay: `calc(3 * ${time} / 2)`,
 52 |       },
 53 |       4: {
 54 |         width: "20px",
 55 |         height: "20px",
 56 |         left: "96px",
 57 |         top: "-6px",
 58 |         animationDelay: `calc(4 * ${time} / 2)`,
 59 |       },
 60 |       5: {
 61 |         width: "14px",
 62 |         height: "14px",
 63 |         left: "125px",
 64 |         top: "162px",
 65 |         animationDelay: `calc(5 * ${time} / 2)`,
 66 |       },
 67 |       6: {
 68 |         width: "10px",
 69 |         height: "10px",
 70 |         left: "16px",
 71 |         top: "16px",
 72 |         animationDelay: `calc(6 * ${time} / 2)`,
 73 |       },
 74 |     },
 75 |   },
 76 | });
 77 | 
 78 | interface ConfettiProps {
 79 |   index: ComponentProps<typeof StyledConfetti>["index"];
 80 | }
 81 | 
 82 | export const Confetti = ({ index }: ConfettiProps) => (
 83 |   <StyledConfetti
 84 |     height="19"
 85 |     viewBox="0 0 19 19"
 86 |     width="19"
 87 |     xmlns="http://www.w3.org/2000/svg"
 88 |     index={index}
 89 |   >
 90 |     <path d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z" />
 91 |   </StyledConfetti>
 92 | );
 93 | 
 94 | export const StyledContainer = styled("div", {
 95 |   position: "relative",
 96 |   m: "auto",
 97 |   p: "$8",
 98 |   animation: `${checkmark} 5.6s ${curve} both`,
 99 |   fill: "$green9",
100 | });
101 | 
102 | export const StyledCheckmark = styled("svg", {
103 |   position: "absolute",
104 |   top: "50%",
105 |   left: "50%",
106 |   zIndex: 10,
107 |   transform: "translate3d(-50%, -50%, 0)",
108 |   fill: white,
109 | });
110 | 
111 | export const Checkmark = () => (
112 |   <StyledCheckmark
113 |     height="36"
114 |     viewBox="0 0 48 36"
115 |     width="48"
116 |     xmlns="http://www.w3.org/2000/svg"
117 |   >
118 |     <path d="M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23" />
119 |   </StyledCheckmark>
120 | );
121 | 
122 | const StyledCheckmarkContainer = styled("svg", {
123 |   animation: `${rotate} 28s linear both infinite`,
124 | });
125 | 
126 | export const CheckmarkContainer = () => (
127 |   <StyledCheckmarkContainer
128 |     height="115"
129 |     viewBox="0 0 120 115"
130 |     width="120"
131 |     xmlns="http://www.w3.org/2000/svg"
132 |   >
133 |     <path d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z" />
134 |   </StyledCheckmarkContainer>
135 | );
136 | 


--------------------------------------------------------------------------------
/src/utils/index.ts:
--------------------------------------------------------------------------------
  1 | import { UploadSchema } from "@/modules/upload/schema";
  2 | import { BigNumber } from "bignumber.js";
  3 | 
  4 | export const arrayBuffersEqual = (
  5 |   buffer1: ArrayBuffer,
  6 |   buffer2: ArrayBuffer
  7 | ) => {
  8 |   const view1 = new Uint8Array(buffer1);
  9 |   const view2 = new Uint8Array(buffer2);
 10 | 
 11 |   if (view1.length !== view2.length) {
 12 |     return false;
 13 |   }
 14 | 
 15 |   for (let i = 0; i < view1.length; i++) {
 16 |     if (view1[i] !== view2[i]) {
 17 |       return false;
 18 |     }
 19 |   }
 20 | 
 21 |   return true;
 22 | };
 23 | 
 24 | export const formatSchemaValue = (value: string) => {
 25 |   const values = value.split("-");
 26 |   const formattedValues = values
 27 |     .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
 28 |     .join(" ");
 29 |   return formattedValues;
 30 | };
 31 | 
 32 | export const userPreferredGateway = () => {
 33 |   if (typeof window !== undefined) {
 34 |     return localStorage.getItem("gateway");
 35 |   }
 36 | };
 37 | 
 38 | interface AbbreviateAddressOptions {
 39 |   startChars?: number;
 40 |   endChars?: number;
 41 |   noOfEllipsis?: number;
 42 | }
 43 | 
 44 | interface AbbreviateAddress {
 45 |   address: string | undefined;
 46 |   options?: AbbreviateAddressOptions;
 47 | }
 48 | 
 49 | export const abbreviateAddress = ({
 50 |   address,
 51 |   options = {},
 52 | }: AbbreviateAddress) => {
 53 |   const { startChars = 5, endChars = 4, noOfEllipsis = 2 } = options;
 54 | 
 55 |   const dot = ".";
 56 |   const firstFive = address?.substring(0, startChars);
 57 |   const lastFour = address?.substring(address.length - endChars);
 58 |   return `${firstFive}${dot.repeat(noOfEllipsis)}${lastFour}`;
 59 | };
 60 | 
 61 | interface FormatTime {
 62 |   duration: number;
 63 |   options?: {
 64 |     suffix?: boolean;
 65 |   };
 66 | }
 67 | 
 68 | export const formatDuration = ({
 69 |   duration,
 70 |   options = {},
 71 | }: FormatTime): string => {
 72 |   const { suffix } = options;
 73 |   const minutes: number = Math.floor(duration / 60) % 60;
 74 |   const seconds: number = Math.floor(duration % 60);
 75 |   const hours: number = Math.floor(duration / 3600);
 76 | 
 77 |   const hoursText = hours === 1 ? "hour" : "hours";
 78 |   const minutesText = minutes === 1 ? "min" : "mins";
 79 | 
 80 |   const formattedSeconds: string = suffix
 81 |     ? `${seconds} ${seconds === 1 ? "sec" : "secs"}`
 82 |     : `${seconds < 10 ? "0" : ""}${seconds}`;
 83 | 
 84 |   if (hours > 0) {
 85 |     if (suffix) {
 86 |       return `${hours} ${hoursText} ${minutes} ${minutesText} ${formattedSeconds}`;
 87 |     } else {
 88 |       return `${hours}:${minutes}:${formattedSeconds}`;
 89 |     }
 90 |   }
 91 | 
 92 |   if (suffix) {
 93 |     return `${minutes} ${minutesText} ${formattedSeconds}`;
 94 |   }
 95 | 
 96 |   return `${minutes}:${formattedSeconds}`;
 97 | };
 98 | 
 99 | export const formatFileSize = (size: number): string => {
100 |   if (size < 1024) {
101 |     return size + " Bytes";
102 |   } else if (size < 1024 * 1024) {
103 |     return (size / 1024).toFixed(2) + " KB";
104 |   } else if (size < 1024 * 1024 * 1024) {
105 |     return (size / (1024 * 1024)).toFixed(2) + " MB";
106 |   } else {
107 |     return (size / (1024 * 1024 * 1024)).toFixed(2) + " GB";
108 |   }
109 | };
110 | 
111 | export const calculateTotalFileSize = (uploadData: UploadSchema): number => {
112 |   let totalSize = 0;
113 | 
114 |   // Calculate size of release artwork file, if present
115 |   if (
116 |     uploadData &&
117 |     uploadData.releaseArtwork &&
118 |     uploadData.releaseArtwork.file
119 |   ) {
120 |     totalSize += uploadData.releaseArtwork.file.size;
121 |   }
122 | 
123 |   // Calculate size of each track file
124 |   uploadData?.tracklist?.forEach((track) => {
125 |     if (track.file) {
126 |       totalSize += track.file.size;
127 |     }
128 | 
129 |     // If there's artwork for each track, include its size
130 |     if (track.metadata.artwork && track.metadata.artwork.file) {
131 |       totalSize += track.metadata.artwork.file.size;
132 |     }
133 |   });
134 | 
135 |   return totalSize;
136 | };
137 | 
138 | export const formatCredits = (
139 |   winc: string | undefined,
140 |   fixedAmount?: number
141 | ) => {
142 |   if (!winc) {
143 |     return;
144 |   }
145 |   const credits = new BigNumber(winc);
146 | 
147 |   const formattedCredits = credits.dividedBy(1e12).toFixed(fixedAmount || 4);
148 | 
149 |   return formattedCredits;
150 | };
151 | 
152 | export const floorToFixed = (number: number | string, decimals: number) => {
153 |   const factor = Math.pow(10, decimals);
154 |   return (
155 |     Math.floor(typeof number === "number" ? number : Number(number) * factor) /
156 |     factor
157 |   );
158 | };
159 | 


--------------------------------------------------------------------------------
/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2020",
 4 |     "lib": ["ES2020", "DOM", "DOM.Iterable"],
 5 |     "module": "ESNext",
 6 |     "skipLibCheck": true,
 7 | 
 8 |     /* Bundler mode */
 9 |     "moduleResolution": "bundler",
10 |     "allowJs": true,
11 |     "strict": true,
12 |     "forceConsistentCasingInFileNames": true,
13 |     "noEmit": true,
14 |     "esModuleInterop": true,
15 |     "resolveJsonModule": true,
16 |     "isolatedModules": true,
17 |     "jsx": "preserve",
18 |     "incremental": true,
19 |     "noUnusedLocals": false,
20 |     "noImplicitAny": false,
21 | 
22 |     "paths": {
23 |       "@/*": ["./src/*"],
24 |       "arconnect": ["./types/arconnect.d.ts"]
25 |     }
26 |   },
27 |   "include": ["src"],
28 |   "references": [{ "path": "./tsconfig.node.json" }]
29 | }
30 | 


--------------------------------------------------------------------------------
/tsconfig.node.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "composite": true,
 4 |     "skipLibCheck": true,
 5 |     "module": "ESNext",
 6 |     "moduleResolution": "bundler",
 7 |     "allowSyntheticDefaultImports": true
 8 |   },
 9 |   "include": ["vite.config.ts"]
10 | }
11 | 


--------------------------------------------------------------------------------
/vite.config.ts:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from "vite";
 2 | import react from "@vitejs/plugin-react";
 3 | import path from "path";
 4 | import { nodePolyfills } from "vite-plugin-node-polyfills";
 5 | 
 6 | // https://vitejs.dev/config/
 7 | export default defineConfig({
 8 |   resolve: {
 9 |     alias: {
10 |       "@": path.resolve(__dirname, "./src"),
11 |     },
12 |   },
13 |   plugins: [react(), nodePolyfills()],
14 |   base: "",
15 | });
16 | 


--------------------------------------------------------------------------------

Link: https://github.com/arcadiasound/permaweb-music-uploader 