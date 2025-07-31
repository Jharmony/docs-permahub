├── .gitignore
├── .prettierignore
├── .prettierrc
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── apps
    └── arcadia
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── .prettierrc
    │   ├── README.md
    │   ├── index.html
    │   ├── package.json
    │   ├── public
    │       ├── android-chrome-192x192.png
    │       ├── android-chrome-512x512.png
    │       ├── apple-touch-icon.png
    │       ├── arcade-logo-text.svg
    │       ├── arcade_logo_dark.svg
    │       ├── arcade_logo_light.svg
    │       ├── arcadia_logo_black.svg
    │       ├── arcadia_logo_text_black.svg
    │       ├── arcadia_logo_text_white.svg
    │       ├── arcadia_logo_white.svg
    │       ├── browserconfig.xml
    │       ├── favicon-16x16.png
    │       ├── favicon-32x32.png
    │       ├── favicon.ico
    │       ├── mstile-144x144.png
    │       ├── mstile-150x150.png
    │       ├── mstile-310x150.png
    │       ├── mstile-310x310.png
    │       ├── mstile-70x70.png
    │       ├── next.svg
    │       ├── safari-pinned-tab.svg
    │       ├── site.webmanifest
    │       ├── thirteen.svg
    │       └── vercel.svg
    │   ├── scripts
    │       ├── add-asset-prefix.mjs
    │       └── remove-asset-prefix.mjs
    │   ├── src
    │       ├── App.tsx
    │       ├── assets
    │       │   └── icons
    │       │   │   ├── AppLogo.tsx
    │       │   │   ├── CurveHighIcon.tsx
    │       │   │   ├── CurveLowIcon.tsx
    │       │   │   ├── CurveMediumIcon.tsx
    │       │   │   ├── LineIcon.tsx
    │       │   │   └── VolumeIcon.tsx
    │       ├── config.ts
    │       ├── hooks
    │       │   ├── appData.ts
    │       │   ├── useAudioPlayer.tsx
    │       │   ├── useCopyToClipboard.tsx
    │       │   ├── useDebounce.tsx
    │       │   └── useMediaQuery.ts
    │       ├── lib
    │       │   ├── account
    │       │   │   ├── api.ts
    │       │   │   └── index.ts
    │       │   ├── ao.ts
    │       │   ├── arweave.ts
    │       │   ├── asset
    │       │   │   ├── buyAsset.ts
    │       │   │   ├── cancelOrder.ts
    │       │   │   ├── getActiveSaleOrders.ts
    │       │   │   └── listAsset.ts
    │       │   ├── comments.ts
    │       │   ├── getAlbum.ts
    │       │   ├── getAlbumIdFromCode.ts
    │       │   ├── getAssetOwners.ts
    │       │   ├── getAudioData.ts
    │       │   ├── getDuration.ts
    │       │   ├── getRecentActivity.ts
    │       │   ├── getRecentAlbums.ts
    │       │   ├── getUCMAsset.ts
    │       │   ├── getUCMState.ts
    │       │   ├── helpers.ts
    │       │   ├── helpers
    │       │   │   ├── gql.ts
    │       │   │   ├── setAlbumInfo.ts
    │       │   │   └── setTrackInfo.ts
    │       │   ├── irys.ts
    │       │   ├── library
    │       │   │   ├── likedTracks.ts
    │       │   │   └── processes
    │       │   │   │   ├── trackTemplate.ts
    │       │   │   │   └── tracks.lua
    │       │   ├── profile
    │       │   │   ├── getProfile.ts
    │       │   │   └── setProfile.ts
    │       │   ├── stamps.ts
    │       │   ├── track
    │       │   │   ├── getAlbumsByOwner.ts
    │       │   │   ├── getOwners.ts
    │       │   │   ├── getTrack.ts
    │       │   │   ├── getTracks.ts
    │       │   │   └── getTracksByOwner.ts
    │       │   ├── user
    │       │   │   ├── follow.ts
    │       │   │   ├── getArBalance.ts
    │       │   │   ├── getUBalance.ts
    │       │   │   ├── processes
    │       │   │   │   ├── profile.lua
    │       │   │   │   └── profileTemplate.ts
    │       │   │   └── profile.ts
    │       │   └── userStampedTx.ts
    │       ├── main.tsx
    │       ├── modules
    │       │   ├── home
    │       │   │   └── index.tsx
    │       │   ├── layout
    │       │   │   ├── AppHeader.tsx
    │       │   │   ├── HeaderDropdown.tsx
    │       │   │   └── Sidebar.tsx
    │       │   ├── library
    │       │   │   └── index.tsx
    │       │   ├── player
    │       │   │   └── AudioPlayer.tsx
    │       │   ├── profile
    │       │   │   ├── components
    │       │   │   │   ├── AlbumCard.tsx
    │       │   │   │   ├── Collection.tsx
    │       │   │   │   ├── EditProfileDialog.tsx
    │       │   │   │   ├── FollowerDialog.tsx
    │       │   │   │   ├── Likes.tsx
    │       │   │   │   └── Releases.tsx
    │       │   │   └── index.tsx
    │       │   ├── router
    │       │   │   └── index.tsx
    │       │   ├── settings
    │       │   │   └── index.tsx
    │       │   └── track
    │       │   │   ├── TrackCard.tsx
    │       │   │   ├── TrackCommentItem.tsx
    │       │   │   ├── TrackComments.tsx
    │       │   │   ├── TrackItem.tsx
    │       │   │   ├── TrackWaveform.tsx
    │       │   │   ├── components
    │       │   │       ├── ActionsDropdown.tsx
    │       │   │       ├── OwnersChart.tsx
    │       │   │       ├── PlayButton.tsx
    │       │   │       └── ShareDialog.tsx
    │       │   │   └── index.tsx
    │       ├── stitches.config.ts
    │       ├── styles
    │       │   ├── Home.module.css
    │       │   ├── colors
    │       │   │   ├── alpha.ts
    │       │   │   ├── blue.ts
    │       │   │   ├── green.ts
    │       │   │   ├── red.ts
    │       │   │   ├── slate.ts
    │       │   │   ├── violet.ts
    │       │   │   └── yellow.ts
    │       │   ├── css.ts
    │       │   └── globals.css
    │       ├── types
    │       │   ├── arconnect.d.ts
    │       │   ├── declaration.d.ts
    │       │   ├── index.ts
    │       │   └── query.ts
    │       ├── ui
    │       │   ├── Accordion.tsx
    │       │   ├── AlertDialog.tsx
    │       │   ├── Avatar.ts
    │       │   ├── Box.ts
    │       │   ├── Button.ts
    │       │   ├── Dialog.tsx
    │       │   ├── Dropdown.ts
    │       │   ├── Flex.ts
    │       │   ├── Form.tsx
    │       │   ├── HoverCard.tsx
    │       │   ├── IconButton.ts
    │       │   ├── Image.ts
    │       │   ├── Loader.ts
    │       │   ├── Skeleton.ts
    │       │   ├── Slider.ts
    │       │   ├── Tabs.ts
    │       │   ├── TextField.ts
    │       │   ├── Textarea.ts
    │       │   └── Typography.ts
    │       ├── utils
    │       │   ├── audio.ts
    │       │   ├── decoder.ts
    │       │   ├── index.ts
    │       │   ├── query.ts
    │       │   └── setTrackInfo.ts
    │       └── vite-env.d.ts
    │   ├── tsconfig.json
    │   ├── tsconfig.node.json
    │   └── vite.config.ts
├── package.json
├── patches
    └── wavesurfer.js@7.7.3.patch
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json


/.gitignore:
--------------------------------------------------------------------------------
 1 | *.log
 2 | .DS_Store
 3 | node_modules
 4 | packages/*/node_modules
 5 | dist
 6 | packages/*/dist
 7 | packages/*/.next
 8 | packages/*/coverage
 9 | test-output.*
10 | *.cache
11 | storybook-static
12 | .env
13 | .env.*
14 | .eslintcache
15 | packages/*/tsconfig.tsbuildinfo
16 | tsconfig.tsbuildinfo
17 | /.next/
18 | /out/
19 | 
20 | # Yarn
21 | yarn-error.log
22 | .pnp/
23 | .pnp.js
24 | # Yarn Integrity file
25 | .yarn-integrity
26 | 
27 | # Yarn 2 build artifacts
28 | # https://yarnpkg.com/advanced/qa#which-files-should-be-gitignored
29 | .yarn/*
30 | !.yarn/releases
31 | !.yarn/plugins
32 | !.yarn/sdks
33 | !.yarn/versions
34 | 
35 | 
36 | # Editor-specific
37 | .vscode
38 | .idea
39 | 
40 | # verdaccio
41 | .verdaccio-db.json
42 | 
43 | # turbo
44 | .turbo
45 | 
46 | #arweave
47 | wallet.json
48 | keyfile.json


--------------------------------------------------------------------------------
/.prettierignore:
--------------------------------------------------------------------------------
1 | dist
2 | node_modules
3 | coverage
4 | .next
5 | build


--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
1 | {
2 |   "semi": true,
3 |   "tabWidth": 2,
4 |   "printWidth": 100,
5 |   "trailingComma": "es5"
6 | }
7 | 


--------------------------------------------------------------------------------
/CONTRIBUTING.md:
--------------------------------------------------------------------------------
1 | ## Todo


--------------------------------------------------------------------------------
/LICENSE.md:
--------------------------------------------------------------------------------
 1 | MIT License
 2 | 
 3 | Copyright (c) 2024 Arcadia
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


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
1 | # Arcadia - Music that lives forever
2 | 
3 | 


--------------------------------------------------------------------------------
/apps/arcadia/.eslintrc.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "env": "{ browser: true, es2020: true }",
 3 |   "extends": [
 4 |     "eslint:recommended",
 5 |     "plugin:@typescript-eslint/recommended",
 6 |     "plugin:react-hooks/recommended"
 7 |   ],
 8 |   "parser": "@typescript-eslint/parser",
 9 |   "parserOptions": "{ ecmaVersion: 'latest', sourceType: 'module' }",
10 |   "plugins": "['react-refresh']",
11 |   "rules": {
12 |     "react-refresh/only-export-components": "warn"
13 |   }
14 | }
15 | 


--------------------------------------------------------------------------------
/apps/arcadia/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | node_modules
 5 | /.pnp
 6 | .pnp.js
 7 | 
 8 | # testing
 9 | /coverage
10 | 
11 | # next.js
12 | /.next/
13 | /out/
14 | 
15 | # production
16 | /build
17 | 
18 | # misc
19 | .DS_Store
20 | *.pem
21 | 
22 | # debug
23 | npm-debug.log*
24 | yarn-debug.log*
25 | yarn-error.log*
26 | .pnpm-debug.log*
27 | 
28 | # local env files
29 | .env*.local
30 | 
31 | # vercel
32 | .vercel
33 | 
34 | # typescript
35 | *.tsbuildinfo
36 | next-env.d.ts
37 | 
38 | # build
39 | dist/
40 | 
41 | # wallet
42 | wallet.json
43 | keyfile.json
44 | 
45 | # bundlr
46 | out-*


--------------------------------------------------------------------------------
/apps/arcadia/.prettierrc:
--------------------------------------------------------------------------------
1 | {}


--------------------------------------------------------------------------------
/apps/arcadia/README.md:
--------------------------------------------------------------------------------
 1 | This is an Arweave + [Next.js](https://nextjs.org/) project template.
 2 | 
 3 | ## Getting Started
 4 | 
 5 | First, run the development server:
 6 | 
 7 | ```bash
 8 | npm run dev
 9 | # or
10 | yarn dev
11 | # or
12 | pnpm dev
13 | ```
14 | 
15 | Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
16 | 
17 | ## Build & Deploy with Bundlr
18 | 
19 | Once you've built your Next.js application, you can deploy it with bundlr using the `upload-dir` command, a pointer to the index file and other the required arguments, which will configure a path manifest for you. You can read more about how to deploy with bundlr in their [docs](https://docs.bundlr.network)
20 | 
21 | ## Relative path support
22 | 
23 | Currently, if you want to have support for relative paths, you will need to omit the `/` when using relative paths to assets in the `public` folder. So instead of referencing an svg at `public/thirteen.svg` by using `/thirteen.svg` in the `src` attribute, you would instead just use `thirteen.svg`.
24 | 
25 | We're also working on a script that will remove any prefixed slashes within relative paths at build time, so you don't have to worry about removing slashes manually.
26 | 
27 | ## Learn More about Arweave
28 | 
29 | To learn more about Arweave and the Permaweb, take a look at the following resources:
30 | 
31 | - [Permaweb Cookbook](https://cookbook.arweave.dev/) - A curated collection of developers guides & more to build on the Permaweb.
32 | - [Arwiki](https://arwiki.wiki/) - An in-depth guide about the Arweave Protocol.
33 | 
34 | If you've never heard of Arweave, you can check out [the Arweave website](https://www.arweave.org/) for a quick introduction to the technology.
35 | 


--------------------------------------------------------------------------------
/apps/arcadia/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <link rel="icon" type="image/svg+xml" href="/favicon.icon" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 7 |     <title>Arcadia</title>
 8 |   </head>
 9 |   <body>
10 |     <div id="root"></div>
11 |     <script type="module" src="/src/main.tsx"></script>
12 |   </body>
13 | </html>
14 | 


--------------------------------------------------------------------------------
/apps/arcadia/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "arcadia",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "type": "module",
 6 |   "scripts": {
 7 |     "dev": "vite",
 8 |     "build": "tsc && rm -rf dist* && vite build",
 9 |     "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
10 |     "preview": "vite preview --port 8080",
11 |     "upload": "pnpm build && irys upload-dir ./dist -h https://turbo.ardrive.io --wallet /Users/Shared/wallet1.json -t arweave --index-file index.html --no-confirmation",
12 |     "clean": "pnpm clean-build && rm -rf node_modules",
13 |     "clean-build": "rm -rf dist*"
14 |   },
15 |   "dependencies": {
16 |     "@ariakit/react": "0.3.5",
17 |     "@css-hooks/react": "1.6.0",
18 |     "@css-hooks/recommended": "1.6.0",
19 |     "@hookform/resolvers": "3.3.2",
20 |     "@irys/sdk": "0.0.4",
21 |     "@permaweb/aoconnect": "0.0.44",
22 |     "@permaweb/stampjs": "0.7.1",
23 |     "@radix-ui/react-accordion": "1.1.2",
24 |     "@radix-ui/react-alert-dialog": "1.0.5",
25 |     "@radix-ui/react-avatar": "1.0.4",
26 |     "@radix-ui/react-collapsible": "1.0.3",
27 |     "@radix-ui/react-dialog": "1.0.5",
28 |     "@radix-ui/react-dropdown-menu": "2.0.6",
29 |     "@radix-ui/react-form": "0.0.3",
30 |     "@radix-ui/react-hover-card": "1.0.7",
31 |     "@radix-ui/react-icons": "1.3.0",
32 |     "@radix-ui/react-slider": "1.1.2",
33 |     "@radix-ui/react-tabs": "1.0.4",
34 |     "@radix-ui/themes": "2.0.3",
35 |     "@react-spring/web": "9.7.3",
36 |     "@splidejs/react-splide": "0.7.12",
37 |     "@stitches/react": "1.2.8",
38 |     "@tanstack/react-query": "4.28.0",
39 |     "@visx/gradient": "3.3.0",
40 |     "@visx/group": "3.3.0",
41 |     "@visx/mock-data": "3.3.0",
42 |     "@visx/responsive": "3.3.0",
43 |     "@visx/scale": "3.5.0",
44 |     "@visx/shape": "3.5.0",
45 |     "@wavesurfer/react": "1.0.4",
46 |     "arbundles": "0.10.0",
47 |     "arcadia-wavesurfer": "7.7.4-2",
48 |     "arconnect": "1.0.3",
49 |     "arweave": "1.14.4",
50 |     "arweave-graphql": "0.0.5",
51 |     "arweave-wallet-kit": "1.0.4",
52 |     "arweavekit": "1.5.1",
53 |     "avvvatars-react": "0.4.2",
54 |     "bignumber.js": "9.1.2",
55 |     "boring-avatars": "1.10.1",
56 |     "buffer": "6.0.3",
57 |     "chart.js": "4.4.0",
58 |     "formik": "2.4.5",
59 |     "lodash.debounce": "4.0.8",
60 |     "motion": "10.15.5",
61 |     "motion-hooks": "0.1.1",
62 |     "next-themes": "0.2.1",
63 |     "permaweb-orderbook": "1.6.52",
64 |     "react": "18.2.0",
65 |     "react-chartjs-2": "5.2.0",
66 |     "react-dom": "18.2.0",
67 |     "react-hook-form": "7.47.0",
68 |     "react-icons": "5.0.1",
69 |     "react-router-dom": "6.11.2",
70 |     "react-zorm": "0.9.0",
71 |     "sonner": "1.1.0",
72 |     "vite-plugin-node-polyfills": "0.17.0",
73 |     "warp-contracts": "1.4.25",
74 |     "warp-contracts-plugin-deploy": "1.0.12",
75 |     "warp-contracts-plugin-signature": "1.0.17",
76 |     "wavesurfer.js": "7.7.3",
77 |     "zod": "3.22.4"
78 |   },
79 |   "devDependencies": {
80 |     "@types/lodash.debounce": "4.0.7",
81 |     "@types/node": "18.11.18",
82 |     "@types/react": "18.0.27",
83 |     "@types/react-dom": "18.0.10",
84 |     "@typescript-eslint/eslint-plugin": "5.59.0",
85 |     "@typescript-eslint/parser": "5.59.0",
86 |     "@vitejs/plugin-react": "4.0.0",
87 |     "eslint": "8.38.0",
88 |     "eslint-plugin-react-hooks": "4.6.0",
89 |     "eslint-plugin-react-refresh": "0.3.4",
90 |     "prettier": "2.8.4",
91 |     "typescript": "5.5.3",
92 |     "vite": "4.3.9"
93 |   },
94 |   "homepage": "./"
95 | }
96 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/android-chrome-192x192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/android-chrome-192x192.png


--------------------------------------------------------------------------------
/apps/arcadia/public/android-chrome-512x512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/android-chrome-512x512.png


--------------------------------------------------------------------------------
/apps/arcadia/public/apple-touch-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/apple-touch-icon.png


--------------------------------------------------------------------------------
/apps/arcadia/public/arcade-logo-text.svg:
--------------------------------------------------------------------------------
 1 | <svg width="205" height="37" viewBox="0 0 205 37" fill="none" xmlns="http://www.w3.org/2000/svg">
 2 | <mask id="mask0_621_600" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="205" height="37">
 3 | <path d="M7.51569 21.379C9.10532 21.401 10.5881 20.9395 11.8211 20.1321L11.6541 31.9785L14.9884 32.0246L15.2435 13.9381C15.3022 9.77041 11.9377 6.34466 7.72852 6.28646C3.51937 6.22827 0.0595288 9.55968 0.000758356 13.7274C-0.0580122 17.8951 3.30654 21.3208 7.51569 21.379Z" fill="#849DFF"/>
 4 | <path d="M24.4843 20.9067C22.8947 20.8847 21.4119 21.3462 20.1789 22.1536L20.3459 10.3073L17.0116 10.2612L16.7565 28.3476C16.6978 32.5153 20.0623 35.9411 24.2715 35.9992C28.4806 36.0574 31.9405 32.726 31.9992 28.5583C32.058 24.3906 28.6935 20.9649 24.4843 20.9067Z" fill="#849DFF"/>
 5 | <path d="M54.352 36.624C47.152 36.624 42.16 31.296 42.16 23.52C42.16 15.744 47.104 10.272 54.112 10.272C58.912 10.272 61.504 13.248 62.32 14.544H62.656V10.896H67.696V36H62.752V32.448H62.464C61.792 33.408 59.344 36.624 54.352 36.624ZM55.072 32.064C59.872 32.064 62.8 28.224 62.8 23.472C62.8 18.048 59.44 14.88 55.024 14.88C50.464 14.88 47.296 18.432 47.296 23.472C47.296 28.704 50.464 32.064 55.072 32.064ZM73.7672 36V10.896H78.6152V15.264H78.9512C79.7192 13.248 82.1192 10.848 85.6712 10.848H87.8793V15.744H85.5273C81.2552 15.744 78.8072 18.96 78.8072 23.616V36H73.7672ZM102.878 36.624C95.1025 36.624 89.8225 30.864 89.8225 23.472C89.8225 16.032 95.1985 10.272 102.83 10.272C108.782 10.272 113.822 13.92 114.974 19.68H109.79C108.926 16.8 106.19 14.88 102.878 14.88C98.1265 14.88 95.0065 18.624 95.0065 23.472C95.0065 28.416 98.2705 32.064 102.974 32.064C106.19 32.064 108.975 30.144 109.838 27.312H114.974C113.87 33.072 108.782 36.624 102.878 36.624ZM130.346 36.624C123.146 36.624 118.154 31.296 118.154 23.52C118.154 15.744 123.098 10.272 130.106 10.272C134.906 10.272 137.498 13.248 138.314 14.544H138.65V10.896H143.69V36H138.746V32.448H138.458C137.786 33.408 135.338 36.624 130.346 36.624ZM131.066 32.064C135.866 32.064 138.794 28.224 138.794 23.472C138.794 18.048 135.434 14.88 131.018 14.88C126.458 14.88 123.29 18.432 123.29 23.472C123.29 28.704 126.458 32.064 131.066 32.064ZM160.177 36.624C152.977 36.624 147.985 31.296 147.985 23.52C147.985 15.744 152.929 10.272 159.937 10.272C164.737 10.272 167.329 13.248 168.145 14.544H168.481V-2.86102e-06H173.521V36H168.577V32.448H168.289C167.617 33.408 165.169 36.624 160.177 36.624ZM160.897 32.064C165.697 32.064 168.625 28.224 168.625 23.472C168.625 18.048 165.265 14.88 160.849 14.88C156.289 14.88 153.121 18.432 153.121 23.472C153.121 28.704 156.289 32.064 160.897 32.064ZM190.44 36.624C182.904 36.624 177.816 31.056 177.816 23.52C177.816 15.552 183.192 10.272 190.344 10.272C198.168 10.272 202.632 16.032 202.632 23.184V25.056H182.856C183.048 29.424 185.976 32.4 190.584 32.4C193.752 32.4 196.488 30.864 197.496 28.416H202.392C201.096 33.264 196.632 36.624 190.44 36.624ZM182.952 21.168H197.64C197.304 16.944 194.232 14.496 190.344 14.496C186.504 14.496 183.336 17.232 182.952 21.168Z" fill="#849DFF"/>
 6 | </mask>
 7 | <g mask="url(#mask0_621_600)">
 8 | <rect x="-26" y="-4.07141" width="247.742" height="48" fill="url(#paint0_linear_621_600)"/>
 9 | </g>
10 | <defs>
11 | <linearGradient id="paint0_linear_621_600" x1="169.871" y1="-4.07142" x2="52.8777" y2="102.116" gradientUnits="userSpaceOnUse">
12 | <stop offset="0.28125" stop-color="#6887FF"/>
13 | <stop offset="0.703125" stop-color="#FF9B63"/>
14 | <stop offset="0.979167" stop-color="#EE2353"/>
15 | </linearGradient>
16 | </defs>
17 | </svg>
18 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcade_logo_dark.svg:
--------------------------------------------------------------------------------
1 | <svg width="429" height="98" viewBox="0 0 429 98" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M33.272 97.664C14.072 97.664 0.76 83.456 0.76 62.72C0.76 41.984 13.944 27.392 32.632 27.392C45.432 27.392 52.344 35.328 54.52 38.784H55.416V29.056H68.856V96H55.672V86.528H54.904C53.112 89.088 46.584 97.664 33.272 97.664ZM35.192 85.504C47.992 85.504 55.8 75.264 55.8 62.592C55.8 48.128 46.84 39.68 35.064 39.68C22.904 39.68 14.456 49.152 14.456 62.592C14.456 76.544 22.904 85.504 35.192 85.504ZM85.046 96V29.056H97.974V40.704H98.87C100.918 35.328 107.318 28.928 116.79 28.928H122.678V41.984H116.406C105.014 41.984 98.486 50.56 98.486 62.976V96H85.046ZM162.676 97.664C141.94 97.664 127.86 82.304 127.86 62.592C127.86 42.752 142.196 27.392 162.548 27.392C178.42 27.392 191.86 37.12 194.932 52.48H181.108C178.804 44.8 171.508 39.68 162.676 39.68C150.004 39.68 141.684 49.664 141.684 62.592C141.684 75.776 150.388 85.504 162.932 85.504C171.508 85.504 178.932 80.384 181.236 72.832H194.932C191.988 88.192 178.42 97.664 162.676 97.664ZM235.922 97.664C216.722 97.664 203.41 83.456 203.41 62.72C203.41 41.984 216.594 27.392 235.282 27.392C248.082 27.392 254.994 35.328 257.17 38.784H258.066V29.056H271.506V96H258.322V86.528H257.554C255.762 89.088 249.234 97.664 235.922 97.664ZM237.842 85.504C250.642 85.504 258.45 75.264 258.45 62.592C258.45 48.128 249.49 39.68 237.714 39.68C225.554 39.68 217.106 49.152 217.106 62.592C217.106 76.544 225.554 85.504 237.842 85.504ZM315.472 97.664C296.272 97.664 282.96 83.456 282.96 62.72C282.96 41.984 296.144 27.392 314.832 27.392C327.632 27.392 334.544 35.328 336.72 38.784H337.616V-7.62939e-06H351.056V96H337.872V86.528H337.104C335.312 89.088 328.784 97.664 315.472 97.664ZM317.392 85.504C330.192 85.504 338 75.264 338 62.592C338 48.128 329.04 39.68 317.264 39.68C305.104 39.68 296.656 49.152 296.656 62.592C296.656 76.544 305.104 85.504 317.392 85.504ZM396.174 97.664C376.078 97.664 362.51 82.816 362.51 62.72C362.51 41.472 376.846 27.392 395.918 27.392C416.782 27.392 428.686 42.752 428.686 61.824V66.816H375.95C376.462 78.464 384.27 86.4 396.558 86.4C405.006 86.4 412.302 82.304 414.99 75.776H428.046C424.59 88.704 412.686 97.664 396.174 97.664ZM376.206 56.448H415.374C414.478 45.184 406.286 38.656 395.918 38.656C385.678 38.656 377.23 45.952 376.206 56.448Z" fill="#ECEDEE"/>
3 | </svg>
4 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcade_logo_light.svg:
--------------------------------------------------------------------------------
1 | <svg width="429" height="98" viewBox="0 0 429 98" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M33.272 97.664C14.072 97.664 0.76 83.456 0.76 62.72C0.76 41.984 13.944 27.392 32.632 27.392C45.432 27.392 52.344 35.328 54.52 38.784H55.416V29.056H68.856V96H55.672V86.528H54.904C53.112 89.088 46.584 97.664 33.272 97.664ZM35.192 85.504C47.992 85.504 55.8 75.264 55.8 62.592C55.8 48.128 46.84 39.68 35.064 39.68C22.904 39.68 14.456 49.152 14.456 62.592C14.456 76.544 22.904 85.504 35.192 85.504ZM85.046 96V29.056H97.974V40.704H98.87C100.918 35.328 107.318 28.928 116.79 28.928H122.678V41.984H116.406C105.014 41.984 98.486 50.56 98.486 62.976V96H85.046ZM162.676 97.664C141.94 97.664 127.86 82.304 127.86 62.592C127.86 42.752 142.196 27.392 162.548 27.392C178.42 27.392 191.86 37.12 194.932 52.48H181.108C178.804 44.8 171.508 39.68 162.676 39.68C150.004 39.68 141.684 49.664 141.684 62.592C141.684 75.776 150.388 85.504 162.932 85.504C171.508 85.504 178.932 80.384 181.236 72.832H194.932C191.988 88.192 178.42 97.664 162.676 97.664ZM235.922 97.664C216.722 97.664 203.41 83.456 203.41 62.72C203.41 41.984 216.594 27.392 235.282 27.392C248.082 27.392 254.994 35.328 257.17 38.784H258.066V29.056H271.506V96H258.322V86.528H257.554C255.762 89.088 249.234 97.664 235.922 97.664ZM237.842 85.504C250.642 85.504 258.45 75.264 258.45 62.592C258.45 48.128 249.49 39.68 237.714 39.68C225.554 39.68 217.106 49.152 217.106 62.592C217.106 76.544 225.554 85.504 237.842 85.504ZM315.472 97.664C296.272 97.664 282.96 83.456 282.96 62.72C282.96 41.984 296.144 27.392 314.832 27.392C327.632 27.392 334.544 35.328 336.72 38.784H337.616V-7.62939e-06H351.056V96H337.872V86.528H337.104C335.312 89.088 328.784 97.664 315.472 97.664ZM317.392 85.504C330.192 85.504 338 75.264 338 62.592C338 48.128 329.04 39.68 317.264 39.68C305.104 39.68 296.656 49.152 296.656 62.592C296.656 76.544 305.104 85.504 317.392 85.504ZM396.174 97.664C376.078 97.664 362.51 82.816 362.51 62.72C362.51 41.472 376.846 27.392 395.918 27.392C416.782 27.392 428.686 42.752 428.686 61.824V66.816H375.95C376.462 78.464 384.27 86.4 396.558 86.4C405.006 86.4 412.302 82.304 414.99 75.776H428.046C424.59 88.704 412.686 97.664 396.174 97.664ZM376.206 56.448H415.374C414.478 45.184 406.286 38.656 395.918 38.656C385.678 38.656 377.23 45.952 376.206 56.448Z" fill="#11181C"/>
3 | </svg>
4 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcadia_logo_black.svg:
--------------------------------------------------------------------------------
1 | <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M256 129.268C256 162.879 242.514 195.114 218.509 218.881C194.505 242.648 161.947 256 128 256C94.0522 256 61.4949 242.648 37.4903 218.881C13.4857 195.114 5.12596e-06 162.879 0 129.268L128 129.268H256Z" fill="#11181C"/>
3 | <rect x="144.64" width="253.465" height="38.3999" transform="rotate(90 144.64 0)" fill="#11181C"/>
4 | <rect width="254.735" height="38.2103" transform="matrix(0.710616 -0.70358 0.710616 0.70358 38.3994 212.177)" fill="#11181C"/>
5 | <rect width="254.735" height="38.2103" transform="matrix(0.710616 0.70358 -0.710616 0.70358 37.3926 32.9502)" fill="#11181C"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcadia_logo_text_black.svg:
--------------------------------------------------------------------------------
1 | <svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <rect x="8.54004" y="1" width="14.8515" height="2.22772" transform="rotate(90 8.54004 1)" fill="#11181C"/>
3 | <path d="M14.8515 8.57418C14.8515 10.5436 14.0691 12.4324 12.6765 13.825C11.2839 15.2176 9.39517 15.9999 7.42574 15.9999C5.45631 15.9999 3.56755 15.2176 2.17495 13.825C0.782353 12.4324 2.97376e-07 10.5436 0 8.57418L7.42574 8.57418H14.8515Z" fill="#11181C"/>
4 | <rect x="2.37598" y="13.4326" width="14.8515" height="2.22772" transform="rotate(-45 2.37598 13.4326)" fill="#11181C"/>
5 | <rect x="2.31738" y="2.93066" width="14.8515" height="2.22772" transform="rotate(45 2.31738 2.93066)" fill="#11181C"/>
6 | <path d="M25.0316 15.26C21.9716 15.26 19.8516 13 19.8516 9.82C19.8516 6.62 21.9716 4.34 24.9116 4.34C27.0916 4.34 28.2516 5.74 28.5716 6.28H28.6916V4.6H30.2716V15H28.7516V13.36H28.6316C28.3716 13.74 27.2916 15.26 25.0316 15.26ZM25.1316 13.84C27.3916 13.84 28.7516 12 28.7516 9.82C28.7516 7.26 27.1516 5.78 25.0916 5.78C22.9516 5.78 21.4716 7.46 21.4716 9.82C21.4716 12.26 22.9516 13.84 25.1316 13.84ZM33.1789 15V4.6H34.7389V6.54H34.8589C35.1589 5.66 36.1789 4.6 37.6989 4.6H38.5789V6.18H37.7189C35.8189 6.18 34.7589 7.66 34.7589 9.64V15H33.1789ZM44.8361 15.26C41.6961 15.26 39.4961 12.88 39.4961 9.8C39.4961 6.72 41.7561 4.34 44.8161 4.34C47.0761 4.34 49.1761 5.7 49.7361 8.02H48.0961C47.6761 6.66 46.3561 5.78 44.8561 5.78C42.6361 5.78 41.1361 7.54 41.1361 9.8C41.1361 12.14 42.7161 13.82 44.8961 13.82C46.3961 13.82 47.7361 12.94 48.1361 11.58H49.7561C49.2161 13.9 47.0961 15.26 44.8361 15.26ZM56.4417 15.26C53.3817 15.26 51.2617 13 51.2617 9.82C51.2617 6.62 53.3817 4.34 56.3217 4.34C58.5017 4.34 59.6617 5.74 59.9817 6.28H60.1017V4.6H61.6817V15H60.1617V13.36H60.0417C59.7817 13.74 58.7017 15.26 56.4417 15.26ZM56.5417 13.84C58.8017 13.84 60.1617 12 60.1617 9.82C60.1617 7.26 58.5617 5.78 56.5017 5.78C54.3617 5.78 52.8817 7.46 52.8817 9.82C52.8817 12.26 54.3617 13.84 56.5417 13.84ZM68.9691 15.26C65.9091 15.26 63.7891 13 63.7891 9.82C63.7891 6.62 65.9091 4.34 68.8491 4.34C71.0291 4.34 72.1891 5.74 72.5091 6.28H72.6291V-1.19209e-06H74.2091V15H72.6891V13.36H72.5691C72.3091 13.74 71.2291 15.26 68.9691 15.26ZM69.0691 13.84C71.3291 13.84 72.6891 12 72.6891 9.82C72.6891 7.26 71.0891 5.78 69.0291 5.78C66.8891 5.78 65.4091 7.46 65.4091 9.82C65.4091 12.26 66.8891 13.84 69.0691 13.84ZM77.9364 2.72C77.2764 2.72 76.7964 2.22 76.7964 1.56C76.7964 0.919999 77.2764 0.419999 77.9364 0.419999C78.6164 0.419999 79.0964 0.919999 79.0964 1.56C79.0964 2.22 78.6164 2.72 77.9364 2.72ZM77.1164 15V4.6H78.6964V15H77.1164ZM85.9769 15.26C82.9169 15.26 80.7969 13 80.7969 9.82C80.7969 6.62 82.9169 4.34 85.8569 4.34C88.0369 4.34 89.1969 5.74 89.5169 6.28H89.6369V4.6H91.2169V15H89.6969V13.36H89.5769C89.3169 13.74 88.2369 15.26 85.9769 15.26ZM86.0769 13.84C88.3369 13.84 89.6969 12 89.6969 9.82C89.6969 7.26 88.0969 5.78 86.0369 5.78C83.8969 5.78 82.4169 7.46 82.4169 9.82C82.4169 12.26 83.8969 13.84 86.0769 13.84Z" fill="#11181C"/>
7 | </svg>
8 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcadia_logo_text_white.svg:
--------------------------------------------------------------------------------
1 | <svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <rect x="8.54004" y="1" width="14.8515" height="2.22772" transform="rotate(90 8.54004 1)" fill="#ECEDEE"/>
3 | <path d="M14.8515 8.57418C14.8515 10.5436 14.0691 12.4324 12.6765 13.825C11.2839 15.2176 9.39517 15.9999 7.42574 15.9999C5.45631 15.9999 3.56755 15.2176 2.17495 13.825C0.782353 12.4324 2.97376e-07 10.5436 0 8.57418L7.42574 8.57418H14.8515Z" fill="#ECEDEE"/>
4 | <rect x="2.37598" y="13.4326" width="14.8515" height="2.22772" transform="rotate(-45 2.37598 13.4326)" fill="#ECEDEE"/>
5 | <rect x="2.31738" y="2.93066" width="14.8515" height="2.22772" transform="rotate(45 2.31738 2.93066)" fill="#ECEDEE"/>
6 | <path d="M25.0316 15.26C21.9716 15.26 19.8516 13 19.8516 9.82C19.8516 6.62 21.9716 4.34 24.9116 4.34C27.0916 4.34 28.2516 5.74 28.5716 6.28H28.6916V4.6H30.2716V15H28.7516V13.36H28.6316C28.3716 13.74 27.2916 15.26 25.0316 15.26ZM25.1316 13.84C27.3916 13.84 28.7516 12 28.7516 9.82C28.7516 7.26 27.1516 5.78 25.0916 5.78C22.9516 5.78 21.4716 7.46 21.4716 9.82C21.4716 12.26 22.9516 13.84 25.1316 13.84ZM33.1789 15V4.6H34.7389V6.54H34.8589C35.1589 5.66 36.1789 4.6 37.6989 4.6H38.5789V6.18H37.7189C35.8189 6.18 34.7589 7.66 34.7589 9.64V15H33.1789ZM44.8361 15.26C41.6961 15.26 39.4961 12.88 39.4961 9.8C39.4961 6.72 41.7561 4.34 44.8161 4.34C47.0761 4.34 49.1761 5.7 49.7361 8.02H48.0961C47.6761 6.66 46.3561 5.78 44.8561 5.78C42.6361 5.78 41.1361 7.54 41.1361 9.8C41.1361 12.14 42.7161 13.82 44.8961 13.82C46.3961 13.82 47.7361 12.94 48.1361 11.58H49.7561C49.2161 13.9 47.0961 15.26 44.8361 15.26ZM56.4417 15.26C53.3817 15.26 51.2617 13 51.2617 9.82C51.2617 6.62 53.3817 4.34 56.3217 4.34C58.5017 4.34 59.6617 5.74 59.9817 6.28H60.1017V4.6H61.6817V15H60.1617V13.36H60.0417C59.7817 13.74 58.7017 15.26 56.4417 15.26ZM56.5417 13.84C58.8017 13.84 60.1617 12 60.1617 9.82C60.1617 7.26 58.5617 5.78 56.5017 5.78C54.3617 5.78 52.8817 7.46 52.8817 9.82C52.8817 12.26 54.3617 13.84 56.5417 13.84ZM68.9691 15.26C65.9091 15.26 63.7891 13 63.7891 9.82C63.7891 6.62 65.9091 4.34 68.8491 4.34C71.0291 4.34 72.1891 5.74 72.5091 6.28H72.6291V-1.19209e-06H74.2091V15H72.6891V13.36H72.5691C72.3091 13.74 71.2291 15.26 68.9691 15.26ZM69.0691 13.84C71.3291 13.84 72.6891 12 72.6891 9.82C72.6891 7.26 71.0891 5.78 69.0291 5.78C66.8891 5.78 65.4091 7.46 65.4091 9.82C65.4091 12.26 66.8891 13.84 69.0691 13.84ZM77.9364 2.72C77.2764 2.72 76.7964 2.22 76.7964 1.56C76.7964 0.919999 77.2764 0.419999 77.9364 0.419999C78.6164 0.419999 79.0964 0.919999 79.0964 1.56C79.0964 2.22 78.6164 2.72 77.9364 2.72ZM77.1164 15V4.6H78.6964V15H77.1164ZM85.9769 15.26C82.9169 15.26 80.7969 13 80.7969 9.82C80.7969 6.62 82.9169 4.34 85.8569 4.34C88.0369 4.34 89.1969 5.74 89.5169 6.28H89.6369V4.6H91.2169V15H89.6969V13.36H89.5769C89.3169 13.74 88.2369 15.26 85.9769 15.26ZM86.0769 13.84C88.3369 13.84 89.6969 12 89.6969 9.82C89.6969 7.26 88.0969 5.78 86.0369 5.78C83.8969 5.78 82.4169 7.46 82.4169 9.82C82.4169 12.26 83.8969 13.84 86.0769 13.84Z" fill="#ECEDEE"/>
7 | </svg>
8 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/arcadia_logo_white.svg:
--------------------------------------------------------------------------------
1 | <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M256 129.268C256 162.879 242.514 195.114 218.509 218.881C194.505 242.648 161.947 256 128 256C94.0522 256 61.4949 242.648 37.4903 218.881C13.4857 195.114 5.12596e-06 162.879 0 129.268L128 129.268H256Z" fill="#ECEDEE"/>
3 | <rect x="144.64" width="253.465" height="38.3999" transform="rotate(90 144.64 0)" fill="#ECEDEE"/>
4 | <rect width="254.735" height="38.2103" transform="matrix(0.710616 -0.70358 0.710616 0.70358 38.3994 212.177)" fill="#ECEDEE"/>
5 | <rect width="254.735" height="38.2103" transform="matrix(0.710616 0.70358 -0.710616 0.70358 37.3926 32.9502)" fill="#ECEDEE"/>
6 | </svg>
7 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/browserconfig.xml:
--------------------------------------------------------------------------------
 1 | <?xml version="1.0" encoding="utf-8"?>
 2 | <browserconfig>
 3 |     <msapplication>
 4 |         <tile>
 5 |             <square150x150logo src="/mstile-150x150.png"/>
 6 |             <TileColor>#da532c</TileColor>
 7 |         </tile>
 8 |     </msapplication>
 9 | </browserconfig>
10 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/favicon-16x16.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/favicon-16x16.png


--------------------------------------------------------------------------------
/apps/arcadia/public/favicon-32x32.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/favicon-32x32.png


--------------------------------------------------------------------------------
/apps/arcadia/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/favicon.ico


--------------------------------------------------------------------------------
/apps/arcadia/public/mstile-144x144.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/mstile-144x144.png


--------------------------------------------------------------------------------
/apps/arcadia/public/mstile-150x150.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/mstile-150x150.png


--------------------------------------------------------------------------------
/apps/arcadia/public/mstile-310x150.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/mstile-310x150.png


--------------------------------------------------------------------------------
/apps/arcadia/public/mstile-310x310.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/mstile-310x310.png


--------------------------------------------------------------------------------
/apps/arcadia/public/mstile-70x70.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/arcadiasound/arcadia/2fba0818c2f86be8669a3e286cdef30c5482c412/apps/arcadia/public/mstile-70x70.png


--------------------------------------------------------------------------------
/apps/arcadia/public/next.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>


--------------------------------------------------------------------------------
/apps/arcadia/public/safari-pinned-tab.svg:
--------------------------------------------------------------------------------
 1 | <?xml version="1.0" standalone="no"?>
 2 | <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 3 |  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
 4 | <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 5 |  width="700.000000pt" height="700.000000pt" viewBox="0 0 700.000000 700.000000"
 6 |  preserveAspectRatio="xMidYMid meet">
 7 | <metadata>
 8 | Created by potrace 1.14, written by Peter Selinger 2001-2017
 9 | </metadata>
10 | <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
11 | fill="#000000" stroke="none">
12 | <path d="M0 3500 l0 -3500 3500 0 3500 0 0 3500 0 3500 -3500 0 -3500 0 0
13 | -3500z m3650 685 c0 -267 3 -485 8 -485 4 0 156 149 337 330 181 182 334 330
14 | 340 330 5 0 63 -53 127 -117 l118 -118 -317 -317 -318 -318 363 0 364 0 -7
15 | -67 c-18 -186 -54 -315 -131 -463 -199 -386 -593 -623 -1034 -623 -450 0 -844
16 | 242 -1045 643 -67 134 -103 266 -120 443 l-7 67 369 1 368 0 -320 315 -319
17 | 314 119 120 c66 66 124 120 130 120 5 0 148 -138 317 -307 l308 -308 0 463 0
18 | 462 175 0 175 0 0 -485z"/>
19 | </g>
20 | </svg>
21 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/site.webmanifest:
--------------------------------------------------------------------------------
 1 | {
 2 |     "name": "",
 3 |     "short_name": "",
 4 |     "icons": [
 5 |         {
 6 |             "src": "/android-chrome-192x192.png",
 7 |             "sizes": "192x192",
 8 |             "type": "image/png"
 9 |         },
10 |         {
11 |             "src": "/android-chrome-512x512.png",
12 |             "sizes": "512x512",
13 |             "type": "image/png"
14 |         }
15 |     ],
16 |     "theme_color": "#ffffff",
17 |     "background_color": "#ffffff",
18 |     "display": "standalone"
19 | }
20 | 


--------------------------------------------------------------------------------
/apps/arcadia/public/thirteen.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" fill="none"><g opacity=".9"><path fill="url(#a)" d="M13 .4v29.3H7V6.3h-.2L0 10.5V5L7.2.4H13Z"/><path fill="url(#b)" d="M28.8 30.1c-2.2 0-4-.3-5.7-1-1.7-.8-3-1.8-4-3.1a7.7 7.7 0 0 1-1.4-4.6h6.2c0 .8.3 1.4.7 2 .4.5 1 .9 1.7 1.2.7.3 1.6.4 2.5.4 1 0 1.7-.2 2.5-.5.7-.3 1.3-.8 1.7-1.4.4-.6.6-1.2.6-2s-.2-1.5-.7-2.1c-.4-.6-1-1-1.8-1.4-.8-.4-1.8-.5-2.9-.5h-2.7v-4.6h2.7a6 6 0 0 0 2.5-.5 4 4 0 0 0 1.7-1.3c.4-.6.6-1.3.6-2a3.5 3.5 0 0 0-2-3.3 5.6 5.6 0 0 0-4.5 0 4 4 0 0 0-1.7 1.2c-.4.6-.6 1.2-.6 2h-6c0-1.7.6-3.2 1.5-4.5 1-1.3 2.2-2.3 3.8-3C25 .4 26.8 0 28.8 0s3.8.4 5.3 1.1c1.5.7 2.7 1.7 3.6 3a7.2 7.2 0 0 1 1.2 4.2c0 1.6-.5 3-1.5 4a7 7 0 0 1-4 2.2v.2c2.2.3 3.8 1 5 2.2a6.4 6.4 0 0 1 1.6 4.6c0 1.7-.5 3.1-1.4 4.4a9.7 9.7 0 0 1-4 3.1c-1.7.8-3.7 1.1-5.8 1.1Z"/></g><defs><linearGradient id="a" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-color="#3D3D3D"/></linearGradient><linearGradient id="b" x1="20" x2="20" y1="0" y2="30.1" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-color="#3D3D3D"/></linearGradient></defs></svg>


--------------------------------------------------------------------------------
/apps/arcadia/public/vercel.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 283 64"><path fill="black" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>


--------------------------------------------------------------------------------
/apps/arcadia/scripts/add-asset-prefix.mjs:
--------------------------------------------------------------------------------
 1 | import fs from "fs";
 2 | 
 3 | async function main() {
 4 | const filePath = './next.config.js';
 5 | 
 6 | fs.readFile(filePath, 'utf8', (err, data) => {
 7 |   if (err) {
 8 |     console.error(err);
 9 |     return;
10 |   }
11 | 
12 |   if (data.includes('assetPrefix: \'./\',\n')) {
13 |     console.log('assetPrefix property already exists in next.config.js');
14 |     return;
15 |   }
16 | 
17 | 
18 |   const updatedData = data.replace(
19 |     /const nextConfig = {/,
20 |     `const nextConfig = {\n  assetPrefix: './',`
21 |   );
22 | 
23 |   fs.writeFile(filePath, updatedData, (err) => {
24 |     if (err) {
25 |       console.error(err);
26 |       return;
27 |     }
28 | 
29 |     console.log('assetPrefix property has been added to next.config.js');
30 |   });
31 | });
32 | }
33 | 
34 | main();


--------------------------------------------------------------------------------
/apps/arcadia/scripts/remove-asset-prefix.mjs:
--------------------------------------------------------------------------------
 1 | import fs from "fs";
 2 | 
 3 | async function main() {
 4 | const filePath = './next.config.js';
 5 | 
 6 | fs.readFile(filePath, 'utf8', (err, data) => {
 7 |   if (err) {
 8 |     console.error(err);
 9 |     return;
10 |   }
11 | 
12 |   const updatedData = data.replace(
13 |     /assetPrefix: '\.\/',\n?/,
14 |     ''
15 |   );
16 | 
17 |   fs.writeFile(filePath, updatedData, (err) => {
18 |     if (err) {
19 |       console.error(err);
20 |       return;
21 |     }
22 | 
23 |     console.log('assetPrefix property has been removed from next.config.js');
24 |   });
25 | });
26 | }
27 | 
28 | main();


--------------------------------------------------------------------------------
/apps/arcadia/src/App.tsx:
--------------------------------------------------------------------------------
 1 | import { Home } from "./modules/home";
 2 | import { Flex, Grid, ScrollArea, useThemeContext } from "@radix-ui/themes";
 3 | import { HashRouter, Routes, Route } from "react-router-dom";
 4 | import { appConfig } from "@/config";
 5 | import { css } from "./styles/css";
 6 | import { AudioPlayer } from "./modules/player/AudioPlayer";
 7 | import { AppHeader } from "./modules/layout/AppHeader";
 8 | import { Sidebar } from "./modules/layout/Sidebar";
 9 | import { Profile } from "./modules/profile";
10 | import { Track } from "./modules/track";
11 | import { Library } from "./modules/library";
12 | import { useEffect } from "react";
13 | import { Settings } from "./modules/settings";
14 | 
15 | function App() {
16 |   const { accentColor, grayColor, radius, scaling, panelBackground } = useThemeContext();
17 | 
18 |   useEffect(() => {
19 |     if (accentColor) {
20 |       localStorage.setItem("rt-accentColor", accentColor);
21 |     }
22 |   }, [accentColor]);
23 | 
24 |   useEffect(() => {
25 |     if (grayColor) {
26 |       localStorage.setItem("rt-grayColor", grayColor);
27 |     }
28 |   }, [grayColor]);
29 | 
30 |   useEffect(() => {
31 |     if (radius) {
32 |       localStorage.setItem("rt-radius", radius);
33 |     }
34 |   }, [radius]);
35 | 
36 |   useEffect(() => {
37 |     if (panelBackground) {
38 |       localStorage.setItem("rt-panelBackground", panelBackground);
39 |     }
40 |   }, [panelBackground]);
41 | 
42 |   useEffect(() => {
43 |     if (scaling) {
44 |       localStorage.setItem("rt-scaling", scaling);
45 |     }
46 |   }, [scaling]);
47 | 
48 |   return (
49 |     <HashRouter>
50 |       <Flex
51 |         direction="column"
52 |         justify="between"
53 |         style={css({
54 |           height: "100vh",
55 |         })}
56 |       >
57 |         <Grid columns="1fr" style={css({ flex: 1, overflow: "hidden" })}>
58 |           {/* <Sidebar /> */}
59 |           <Grid rows="auto 1fr">
60 |             <AppHeader />
61 |             <ScrollArea
62 |               scrollbars="vertical"
63 |               style={css({
64 |                 height: `calc(100dvh - ${appConfig.playerMaxHeight + appConfig.headerMaxHeight}px)`,
65 |               })}
66 |             >
67 |               <Routes>
68 |                 <Route path="/" element={<Home />} />
69 |                 <Route path="/profile" element={<Profile />} />
70 |                 <Route path="/track" element={<Track />} />
71 |                 <Route path="/library" element={<Library />} />
72 |                 <Route path="/settings" element={<Settings />} />
73 |               </Routes>
74 |             </ScrollArea>
75 |           </Grid>
76 |         </Grid>
77 |         <AudioPlayer />
78 |       </Flex>
79 |     </HashRouter>
80 |   );
81 | }
82 | 
83 | export default App;
84 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/AppLogo.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import * as React from "react";
 3 | const AppLogo = ({ width = 100, height = 17 }: IconProps) => (
 4 |   <svg
 5 |     xmlns="http://www.w3.org/2000/svg"
 6 |     width={width}
 7 |     height={height}
 8 |     fill="none"
 9 |   >
10 |     <path fill="currentColor" d="M8.54 1v14.851H6.312V1z" />
11 |     <path
12 |       fill="currentColor"
13 |       d="M14.851 8.574A7.426 7.426 0 0 1 0 8.574h14.851Z"
14 |     />
15 |     <path
16 |       fill="currentColor"
17 |       d="M2.376 13.433 12.878 2.932l1.575 1.575L3.952 15.008z"
18 |     />
19 |     <path
20 |       fill="currentColor"
21 |       d="m2.317 2.93 10.501 10.502-1.575 1.575L.74 4.507zm22.715 12.33c-3.06 0-5.18-2.26-5.18-5.44 0-3.2 2.12-5.48 5.06-5.48 2.18 0 3.34 1.4 3.66 1.94h.12V4.6h1.58V15h-1.52v-1.64h-.12c-.26.38-1.34 1.9-3.6 1.9Zm.1-1.42c2.26 0 3.62-1.84 3.62-4.02 0-2.56-1.6-4.04-3.66-4.04-2.14 0-3.62 1.68-3.62 4.04 0 2.44 1.48 4.02 3.66 4.02ZM33.179 15V4.6h1.56v1.94h.12c.3-.88 1.32-1.94 2.84-1.94h.88v1.58h-.86c-1.9 0-2.96 1.48-2.96 3.46V15h-1.58Zm11.657.26c-3.14 0-5.34-2.38-5.34-5.46s2.26-5.46 5.32-5.46c2.26 0 4.36 1.36 4.92 3.68h-1.64c-.42-1.36-1.74-2.24-3.24-2.24-2.22 0-3.72 1.76-3.72 4.02 0 2.34 1.58 4.02 3.76 4.02 1.5 0 2.84-.88 3.24-2.24h1.62c-.54 2.32-2.66 3.68-4.92 3.68Zm11.606 0c-3.06 0-5.18-2.26-5.18-5.44 0-3.2 2.12-5.48 5.06-5.48 2.18 0 3.34 1.4 3.66 1.94h.12V4.6h1.58V15h-1.52v-1.64h-.12c-.26.38-1.34 1.9-3.6 1.9Zm.1-1.42c2.26 0 3.62-1.84 3.62-4.02 0-2.56-1.6-4.04-3.66-4.04-2.14 0-3.62 1.68-3.62 4.04 0 2.44 1.48 4.02 3.66 4.02Zm12.427 1.42c-3.06 0-5.18-2.26-5.18-5.44 0-3.2 2.12-5.48 5.06-5.48 2.18 0 3.34 1.4 3.66 1.94h.12V0h1.58v15h-1.52v-1.64h-.12c-.26.38-1.34 1.9-3.6 1.9Zm.1-1.42c2.26 0 3.62-1.84 3.62-4.02 0-2.56-1.6-4.04-3.66-4.04-2.14 0-3.62 1.68-3.62 4.04 0 2.44 1.48 4.02 3.66 4.02Zm8.867-11.12c-.66 0-1.14-.5-1.14-1.16 0-.64.48-1.14 1.14-1.14.68 0 1.16.5 1.16 1.14 0 .66-.48 1.16-1.16 1.16ZM77.116 15V4.6h1.58V15h-1.58Zm8.86.26c-3.06 0-5.18-2.26-5.18-5.44 0-3.2 2.12-5.48 5.06-5.48 2.18 0 3.34 1.4 3.66 1.94h.12V4.6h1.58V15h-1.52v-1.64h-.12c-.26.38-1.34 1.9-3.6 1.9Zm.1-1.42c2.26 0 3.62-1.84 3.62-4.02 0-2.56-1.6-4.04-3.66-4.04-2.14 0-3.62 1.68-3.62 4.04 0 2.44 1.48 4.02 3.66 4.02Z"
22 |     />
23 |   </svg>
24 | );
25 | export default AppLogo;
26 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/CurveHighIcon.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import * as React from "react";
 3 | 
 4 | const CurveHighIcon = ({ width = 4.1, height = 18, ...props }: IconProps) => (
 5 |   <svg
 6 |     xmlns="http://www.w3.org/2000/svg"
 7 |     width={width}
 8 |     height={height}
 9 |     viewBox={`0 0 5 18`}
10 |     {...props}
11 |     fill="none"
12 |   >
13 |     <path
14 |       d="M0.48256 17.4425C0.869279 17.6974 1.38783 17.5831 1.66908 17.1612C3.21596 14.8409 4.1476 11.9581 4.1476 8.79404C4.1476 5.62118 3.19838 2.74716 1.66908 0.418059C1.38783 -0.0126051 0.869279 -0.118074 0.48256 0.136809C0.0606854 0.40927 -0.000838012 0.927825 0.289201 1.39364C1.63393 3.4415 2.46889 5.98154 2.46889 8.79404C2.46889 11.589 1.63393 14.1466 0.289201 16.1856C-0.000838012 16.6515 0.0606854 17.17 0.48256 17.4425Z"
15 |       fill="currentColor"
16 |     />
17 |   </svg>
18 | );
19 | export default CurveHighIcon;
20 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/CurveLowIcon.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import * as React from "react";
 3 | 
 4 | const CurveLowIcon = ({ width = 2.1, height = 9, ...props }: IconProps) => (
 5 |   <svg
 6 |     xmlns="http://www.w3.org/2000/svg"
 7 |     width={width}
 8 |     height={height}
 9 |     viewBox={`0 0 3 9`}
10 |     {...props}
11 |     fill="none"
12 |   >
13 |     <path
14 |       d="M0.380841 8.70504C0.758771 8.95113 1.25096 8.86324 1.52342 8.47652C2.23533 7.5273 2.65721 6.18258 2.65721 4.78511C2.65721 3.38765 2.23533 2.05172 1.52342 1.09371C1.25096 0.70699 0.758771 0.619099 0.380841 0.873982C-0.049823 1.15523 -0.128925 1.67379 0.213849 2.18355C0.697247 2.87789 0.969708 3.80953 0.969708 4.78511C0.969708 5.7607 0.697247 6.68355 0.213849 7.38668C-0.128925 7.89644 -0.049823 8.415 0.380841 8.70504Z"
15 |       fill="currentColor"
16 |     />
17 |   </svg>
18 | );
19 | export default CurveLowIcon;
20 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/CurveMediumIcon.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import * as React from "react";
 3 | 
 4 | const CurveMediumIcon = ({ width = 3.1, height = 14, ...props }: IconProps) => (
 5 |   <svg
 6 |     xmlns="http://www.w3.org/2000/svg"
 7 |     width={width}
 8 |     height={height}
 9 |     viewBox={`0 0 4 14`}
10 |     {...props}
11 |   >
12 |     <path
13 |       d="M0.922639 13.0602C1.32694 13.3063 1.81912 13.2184 2.10037 12.8054C3.24295 11.1882 3.91092 9.01727 3.91092 6.78485C3.91092 4.55242 3.25174 2.37274 2.10037 0.764338C1.81912 0.351252 1.32694 0.254572 0.922639 0.509455C0.500764 0.773127 0.43924 1.30047 0.755646 1.76629C1.68729 3.13738 2.22342 4.92156 2.22342 6.78485C2.22342 8.63934 1.6785 10.4235 0.755646 11.8034C0.448029 12.2692 0.500764 12.7878 0.922639 13.0602Z"
14 |       fill="currentColor"
15 |     />
16 |   </svg>
17 | );
18 | export default CurveMediumIcon;
19 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/LineIcon.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import { styled, keyframes } from "@stitches/react";
 3 | import * as React from "react";
 4 | 
 5 | // Define the animation using keyframes
 6 | const drawLine = keyframes({
 7 |   "0%": { strokeDasharray: "0, 100%" },
 8 |   "100%": { strokeDasharray: "100%, 0" },
 9 | });
10 | 
11 | // Create a styled line with the animation
12 | const AnimatedLine = styled("line", {
13 |   animation: `${drawLine} 2s linear`,
14 | });
15 | 
16 | const LineIcon = ({ width = 15, height = 15, ...props }: IconProps) => (
17 |   <svg
18 |     xmlns="http://www.w3.org/2000/svg"
19 |     width={width}
20 |     height={height}
21 |     {...props}
22 |     fill="none"
23 |     viewBox={`0 0 ${width} ${height}`}
24 |   >
25 |     <AnimatedLine
26 |       x1="0"
27 |       y1="0"
28 |       x2={width}
29 |       y2={height}
30 |       stroke="currentColor"
31 |       strokeWidth="1"
32 |     />
33 |   </svg>
34 | );
35 | 
36 | export default LineIcon;
37 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/assets/icons/VolumeIcon.tsx:
--------------------------------------------------------------------------------
 1 | import { IconProps } from "@radix-ui/react-icons/dist/types";
 2 | import * as React from "react";
 3 | const VolumeIcon = ({ width = 16, height = 16 }: IconProps) => (
 4 |   <svg
 5 |     xmlns="http://www.w3.org/2000/svg"
 6 |     width={width}
 7 |     height={height}
 8 |     viewBox="0 0 25 25"
 9 |     fill="none"
10 |   >
11 |     <path
12 |       d="M16.8574 20C17.5166 20 18 19.5078 18 18.8574V5.43652C18 4.77734 17.5166 4.25 16.8398 4.25C16.3916 4.25 16.0664 4.43457 15.5918 4.90039L11.918 8.33691C11.8652 8.38965 11.7949 8.41602 11.7158 8.41602H9.22852C7.92773 8.41602 7.22461 9.13672 7.22461 10.499V13.7686C7.22461 15.1309 7.92773 15.8516 9.22852 15.8516H11.7158C11.7949 15.8516 11.8564 15.8779 11.918 15.9307L15.5918 19.3936C16.0312 19.8154 16.4004 20 16.8574 20Z"
13 |       fill="currentColor"
14 |     />
15 |   </svg>
16 | );
17 | export default VolumeIcon;
18 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/config.ts:
--------------------------------------------------------------------------------
 1 | export const appConfig = {
 2 |   defaultGateway: "https://arweave.net",
 3 |   goldskyUrl: "https://arweave-search.goldsky.com",
 4 |   dreU: "https://dre-u.warp.cc",
 5 |   U: "KTzTXT_ANmF84fWEKHzWURD1LWd9QaFR9yfYUwH2Lxw",
 6 |   UCM: "tfalT8Z-88riNtoXdF5ldaBtmsfcSmbMqWLh2DHJIbg",
 7 |   atomicAssetSrc: "Of9pi--Gj7hCTawhgxOwbuWnFI1h24TTgO5pw8ENJNQ",
 8 |   accountBannerDefault: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
 9 |   accountAvatarDefault: "https://arweave.net:443/OrG-ZG2WN3wdcwvpjz1ihPe4MI24QBJUpsJGIdL85wA",
10 |   playerMaxHeight: 80,
11 |   headerMaxHeight: 56,
12 |   featuredIds: [
13 |     "pUqlEhRsSDuut-f7f58E-Vs6k62aA9HoBaVDP-ape2A",
14 |     "oIhTcWmJnI1UPvyT0UwWUJlXZS1CTEcJ-OEq4yWKzZo",
15 |     "3NVzQEufRl-ytEe1KBDdX_iCNe0XtDrpL2qhwBNISTI",
16 |   ],
17 |   hiddenIds: ["6yz7UJ6iF_K6dLqG2sgIq2kUwAQJFiZB-AwH9MKFqr0"],
18 |   boringAvatarsUrl: "https://source.boringavatars.com",
19 |   acceptedFileTypes: {
20 |     streamableAudio: ["audio/mp3", "audio/ogg", "audio/aac", "audio/x-m4a"],
21 |   },
22 |   ao: {
23 |     SCHEDULER: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
24 |     MODULE: "9afQ1PLf2mrshqCTZEzzJTR2gWaC9zNPnYgYEqg1Pt4",
25 |   },
26 |   links: {
27 |     discord: "https://discord.gg/kBZeUwBebJ",
28 |   },
29 | };
30 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/hooks/appData.ts:
--------------------------------------------------------------------------------
  1 | import { getTrackProcess } from "@/lib/library/likedTracks";
  2 | import { followUser, unfollowUser } from "@/lib/user/follow";
  3 | import { getProfile, getProfileProcess } from "@/lib/user/profile";
  4 | import { AOProfile } from "@/types";
  5 | import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
  6 | import { useActiveAddress } from "arweave-wallet-kit";
  7 | 
  8 | interface UserProfileProps {
  9 |   address?: string;
 10 |   processId?: string;
 11 | }
 12 | 
 13 | export const useGetUserProfile = (props: UserProfileProps) => {
 14 |   const { data: profileProcess } = useQuery({
 15 |     queryKey: ["process", props.address, { type: "profile" }],
 16 |     queryFn: () => getProfileProcess(props.address),
 17 |     refetchOnWindowFocus: false,
 18 |     enabled: !!props.address && !props.processId,
 19 |   });
 20 | 
 21 |   // instead pass props.processId to getProfileProcess, so we can extract owner address for below query
 22 |   const processId = props.processId
 23 |     ? props.processId
 24 |     : profileProcess?.length
 25 |     ? profileProcess[0].node.id
 26 |     : "";
 27 | 
 28 |   return useQuery({
 29 |     queryKey: ["profile", processId],
 30 |     enabled: !!processId,
 31 |     queryFn: async () => {
 32 |       if (!processId) return;
 33 | 
 34 |       return getProfile({ processId: processId });
 35 |     },
 36 |     // onSuccess: (data) => {
 37 |     //   console.log("profile: ", { data });
 38 |     // },
 39 |     // refetchInterval: 5000,
 40 |   });
 41 | };
 42 | 
 43 | export const useIsUserMe = (address: string | undefined) => {
 44 |   const activeAddress = useActiveAddress();
 45 | 
 46 |   return activeAddress && activeAddress === address ? true : false;
 47 | };
 48 | 
 49 | export const useGetProcessId = (address: string | undefined) =>
 50 |   useQuery({
 51 |     queryKey: [`likedTracksProcess`, address],
 52 |     queryFn: async () => {
 53 |       if (!address) return;
 54 | 
 55 |       const res = await getTrackProcess(address);
 56 | 
 57 |       if (res && res.length) {
 58 |         return {
 59 |           id: res[0].node.id,
 60 |           exists: true,
 61 |         };
 62 |       } else {
 63 |         return {
 64 |           id: "",
 65 |           exists: false,
 66 |         };
 67 |       }
 68 |     },
 69 |     enabled: !!address,
 70 |     refetchOnWindowFocus: false,
 71 |     onError: (error) => console.error(error),
 72 |   });
 73 | 
 74 | interface FollowUserProps {
 75 |   address: string;
 76 | }
 77 | 
 78 | export const useFollowUser = (props: FollowUserProps) => {
 79 |   const { address } = props;
 80 |   const queryClient = useQueryClient();
 81 | 
 82 |   const followMutation = useMutation({
 83 |     mutationFn: followUser,
 84 |     onMutate: async (data) => {
 85 |       // prevent overwriting optimistic update
 86 |       await queryClient.cancelQueries({
 87 |         queryKey: ["profile", data.target],
 88 |       });
 89 | 
 90 |       // snapshot prev value
 91 |       const prevProfile = queryClient.getQueryData<AOProfile>(["profile", data.target]);
 92 | 
 93 |       // optimistically update
 94 |       queryClient.setQueryData<AOProfile>(["profile", data.target], (oldProfile) => {
 95 |         return {
 96 |           Owner: oldProfile?.Owner || address,
 97 |           Info: oldProfile?.Info || { name: "", handle: "", bio: "", avatar: "", banner: "" },
 98 |           Followers: oldProfile?.Followers ? [...oldProfile.Followers, data.sender] : [data.sender],
 99 |           Following: oldProfile?.Following || [],
100 |         };
101 |       });
102 | 
103 |       // return ctx obj with snapshot
104 |       return { prevProfile };
105 |     },
106 |     onSettled: (res, err, data) => {
107 |       queryClient.invalidateQueries({
108 |         queryKey: ["profile", data.target],
109 |       });
110 |     },
111 |     onError: (error, data, ctx: any) => {
112 |       queryClient.setQueryData(["profile", data.target], ctx.prevProfile);
113 |     },
114 |   });
115 | 
116 |   const unfollowMutation = useMutation({
117 |     mutationFn: unfollowUser,
118 |     onMutate: async (data) => {
119 |       await queryClient.cancelQueries({
120 |         queryKey: ["profile", data.target],
121 |       });
122 | 
123 |       const prevProfile = queryClient.getQueryData<AOProfile>(["profile", data.target]);
124 | 
125 |       queryClient.setQueryData<AOProfile>(["profile", data.target], (oldProfile) => {
126 |         return {
127 |           Owner: oldProfile?.Owner || address,
128 |           Info: oldProfile?.Info || { name: "", handle: "", bio: "", avatar: "", banner: "" },
129 |           Followers: oldProfile?.Followers?.filter((follower) => follower !== data.sender) || [],
130 |           Following: oldProfile?.Following || [],
131 |         };
132 |       });
133 | 
134 |       return { prevProfile };
135 |     },
136 |     onSettled: (res, err, data) => {
137 |       queryClient.invalidateQueries({
138 |         queryKey: ["profile", data.target],
139 |       });
140 |     },
141 |     onError: (error, data, ctx: any) => {
142 |       queryClient.setQueryData(["profile", data.target], ctx.prevProfile);
143 |     },
144 |   });
145 | 
146 |   const isLoading = followMutation.isLoading || unfollowMutation.isLoading;
147 | 
148 |   return { follow: followMutation, unfollow: unfollowMutation, isLoading };
149 | };
150 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/hooks/useCopyToClipboard.tsx:
--------------------------------------------------------------------------------
 1 | import { useState } from "react";
 2 | 
 3 | export const useCopyToClipboard = () => {
 4 |   const [isCopied, setIsCopied] = useState(false);
 5 |   const [copiedText, setCopiedText] = useState<string>();
 6 | 
 7 |   function oldSchoolCopy(text) {
 8 |     const tempTextArea = document.createElement("textarea");
 9 |     tempTextArea.value = text;
10 |     document.body.appendChild(tempTextArea);
11 |     tempTextArea.select();
12 |     document.execCommand("copy");
13 |     document.body.removeChild(tempTextArea);
14 |   }
15 | 
16 |   //   const copyToClipboard = useCallback((value) => {
17 |   const copyToClipboard = async (value: string) => {
18 |     if (isCopied) {
19 |       return;
20 |     }
21 |     try {
22 |       if (navigator?.clipboard?.writeText) {
23 |         await navigator.clipboard.writeText(value);
24 |         setCopiedText(value);
25 |         setIsCopied(true);
26 |         setTimeout(() => {
27 |           setIsCopied(false);
28 |         }, 2000);
29 |       } else {
30 |         throw new Error("writeText not supported");
31 |       }
32 |     } catch (error) {
33 |       oldSchoolCopy(value);
34 |       setIsCopied(true);
35 |       setTimeout(() => {
36 |         setIsCopied(false);
37 |       }, 2000);
38 |     }
39 |   };
40 | 
41 |   // handleCopy();
42 |   //   }, []);
43 | 
44 |   return {
45 |     isCopied,
46 |     copiedText,
47 |     copyToClipboard,
48 |   };
49 | };
50 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/hooks/useDebounce.tsx:
--------------------------------------------------------------------------------
 1 | import { useEffect, useMemo, useRef } from "react";
 2 | import debounce from "lodash.debounce";
 3 | 
 4 | export type CallbackType = () => void;
 5 | 
 6 | export const useDebounce = (
 7 |   callback: CallbackType,
 8 |   delay: number = 1000
 9 | ): CallbackType => {
10 |   const ref = useRef<CallbackType | null>(null);
11 | 
12 |   useEffect(() => {
13 |     ref.current = callback;
14 |   }, [callback]);
15 | 
16 |   const debouncedCallback = useMemo(() => {
17 |     const func = () => {
18 |       ref.current?.();
19 |     };
20 | 
21 |     return debounce(func, delay);
22 |   }, [delay]);
23 | 
24 |   return debouncedCallback;
25 | };
26 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/hooks/useMediaQuery.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useState } from "react";
 2 | 
 3 | export function useMediaQuery(query: string): boolean {
 4 |   const getMatches = (query: string): boolean => {
 5 |     // Prevents SSR issues
 6 |     if (typeof window !== "undefined") {
 7 |       return window.matchMedia(query).matches;
 8 |     }
 9 |     return false;
10 |   };
11 | 
12 |   const [matches, setMatches] = useState<boolean>(getMatches(query));
13 | 
14 |   function handleChange() {
15 |     setMatches(getMatches(query));
16 |   }
17 | 
18 |   useEffect(() => {
19 |     const matchMedia = window.matchMedia(query);
20 | 
21 |     // Triggered at the first client-side load and if query changes
22 |     handleChange();
23 | 
24 |     // Listen matchMedia
25 |     if (matchMedia.addListener) {
26 |       matchMedia.addListener(handleChange);
27 |     } else {
28 |       matchMedia.addEventListener("change", handleChange);
29 |     }
30 | 
31 |     return () => {
32 |       if (matchMedia.removeListener) {
33 |         matchMedia.removeListener(handleChange);
34 |       } else {
35 |         matchMedia.removeEventListener("change", handleChange);
36 |       }
37 |     };
38 |     // eslint-disable-next-line react-hooks/exhaustive-deps
39 |   }, [query]);
40 | 
41 |   return matches;
42 | }
43 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/account/api.ts:
--------------------------------------------------------------------------------
 1 | import arweaveGql, { Transaction } from "arweave-graphql";
 2 | import { Env, PermaProfile } from "../../types";
 3 | import { appConfig } from "../../config";
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
/apps/arcadia/src/lib/account/index.ts:
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
/apps/arcadia/src/lib/ao.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "@/config";
 2 | import { MessageResult, ReadResultParams, SendMessageParams, SpawnProcessParams } from "@/types";
 3 | import { spawn, message, result, createDataItemSigner } from "@permaweb/aoconnect";
 4 | 
 5 | const getAO = () => {
 6 |   const ao = {
 7 |     moduleTx: appConfig.ao.MODULE,
 8 |     scheduler: appConfig.ao.SCHEDULER,
 9 |     signer: createDataItemSigner(window.arweaveWallet),
10 |   };
11 | 
12 |   return ao;
13 | };
14 | 
15 | // Function to spawn a new following/follower process for a user
16 | export const spawnProcess = async ({ moduleTxId, tags, scheduler }: SpawnProcessParams) => {
17 |   const ao = getAO();
18 |   try {
19 |     const processId = await spawn({
20 |       module: moduleTxId || ao.moduleTx,
21 |       scheduler: scheduler || appConfig.ao.SCHEDULER,
22 |       tags: tags,
23 |       signer: ao.signer,
24 |     });
25 |     console.log(`Process spawned with ID: ${processId}`);
26 |     return processId;
27 |   } catch (error) {
28 |     console.error("Error spawning process:", error);
29 |     throw error;
30 |   }
31 | };
32 | 
33 | // Function to send a follow/unfollow message to a process
34 | export const sendMessage = async ({ processId, action, data, tags = [] }: SendMessageParams) => {
35 |   try {
36 |     const ao = getAO();
37 |     const response = await message({
38 |       process: processId,
39 |       tags: [{ name: "Action", value: action }, ...tags],
40 |       signer: ao.signer,
41 |       data: data,
42 |     });
43 |     console.log("Message sent:", response);
44 |     return response;
45 |   } catch (error: any) {
46 |     console.error("Error sending message:", error);
47 |     throw new Error(error);
48 |   }
49 | };
50 | 
51 | // Function to read the result of a message
52 | export const readMessageResult = async ({
53 |   messageId,
54 |   processId,
55 | }: ReadResultParams): Promise<MessageResult> => {
56 |   try {
57 |     const { Messages, Spawns, Output, Error } = await result({
58 |       message: messageId,
59 |       process: processId,
60 |     });
61 |     if (Error) {
62 |       throw new Error("Error in message result:", Error);
63 |     } else {
64 |       console.log("Message result:", { Messages, Spawns, Output });
65 |       return { Messages, Spawns, Output };
66 |     }
67 |   } catch (error) {
68 |     console.error(error);
69 |     throw error;
70 |   }
71 | };
72 | 
73 | // Example usage:
74 | // Assume you have the moduleTxId for the following/follower process and a signer function
75 | 
76 | // const moduleTxId: string = 'your-module-txid';
77 | // const signer: any = createDataItemSigner(window.arweaveWallet); // Replace 'any' with the specific signer type
78 | 
79 | // // To spawn a new process for a user
80 | // const userProcessId = await spawnProcess({ moduleTxId, signer });
81 | 
82 | // // To send a follow message
83 | // const followMessageResponse = await sendMessage({
84 | //   processId: userProcessId!,
85 | //   action: 'follow',
86 | //   target: 'target-user-address',
87 | //   signer: signer
88 | // });
89 | 
90 | // // To read the result of the follow message
91 | // const followResult = await readMessageResult({
92 | //   messageId: followMessageResponse.id,
93 | //   processId: userProcessId!
94 | // });
95 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/arweave.ts:
--------------------------------------------------------------------------------
 1 | import Arweave from "arweave";
 2 | import { WarpFactory, LoggerFactory } from "warp-contracts";
 3 | import { OrderBook } from "permaweb-orderbook";
 4 | import { InjectedArweaveSigner } from "warp-contracts-plugin-signature";
 5 | 
 6 | export const arweave = Arweave.init({});
 7 | 
 8 | export const warp = WarpFactory.forMainnet();
 9 | LoggerFactory.INST.logLevel("fatal");
10 | 
11 | export const initSigner = async () => {
12 |   const permissions = await window.arweaveWallet.getPermissions();
13 | 
14 |   if (permissions.includes("ACCESS_PUBLIC_KEY")) {
15 |     const signer = new InjectedArweaveSigner(window.arweaveWallet);
16 |     signer.getAddress = window.arweaveWallet.getActiveAddress;
17 | 
18 |     await signer.setPublicKey();
19 | 
20 |     return signer;
21 |   } else {
22 |     await window.arweaveWallet.connect(["ACCESS_PUBLIC_KEY"]);
23 | 
24 |     const signer = new InjectedArweaveSigner(window.arweaveWallet);
25 |     signer.getAddress = window.arweaveWallet.getActiveAddress;
26 | 
27 |     await signer.setPublicKey();
28 | 
29 |     return signer;
30 |   }
31 | };
32 | 
33 | export const orderbook = OrderBook.init({
34 |   currency: "U",
35 |   arweaveGet: arweave,
36 |   arweavePost: arweave,
37 |   bundlrKey: null,
38 |   warp: warp,
39 |   warpDreNode: "https://dre-u.warp.cc/contract",
40 | });
41 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/asset/buyAsset.ts:
--------------------------------------------------------------------------------
 1 | import { BuyAssetProps, ListAssetProps } from "@/types";
 2 | import { initSigner, orderbook } from "../arweave";
 3 | 
 4 | export const buyAsset = async ({ assetId, spend, address }: BuyAssetProps) => {
 5 |   try {
 6 |     const signer = await initSigner();
 7 | 
 8 |     const res = await orderbook.buy({
 9 |       assetId,
10 |       spend,
11 |       wallet: signer,
12 |       walletAddress: address,
13 |     });
14 | 
15 |     console.log({ res });
16 |     return res;
17 |   } catch (error) {
18 |     console.error(error);
19 |     throw new Error(
20 |       `An error occurred trying to buy asset with ID: ${assetId}`
21 |     );
22 |   }
23 | };
24 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/asset/cancelOrder.ts:
--------------------------------------------------------------------------------
 1 | import { CancelOrderProps } from "@/types";
 2 | import { initSigner, orderbook } from "../arweave";
 3 | 
 4 | export const cancelOrder = async ({ address, orderId }: CancelOrderProps) => {
 5 |   try {
 6 |     const signer = await initSigner();
 7 | 
 8 |     const cancelOrder = await orderbook.cancel({
 9 |       orderId,
10 |       walletAddress: address,
11 |       wallet: signer,
12 |     });
13 | 
14 |     console.log({ cancelOrder });
15 |     return cancelOrder;
16 |   } catch (error) {
17 |     console.error(error);
18 |     throw new Error("An error occurred trying to cancel your listing");
19 |   }
20 | };
21 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/asset/getActiveSaleOrders.ts:
--------------------------------------------------------------------------------
 1 | import { getUCMState } from "../getUCMState";
 2 | 
 3 | interface GetActiveSaleOrderProps {
 4 |   assetId: string;
 5 | }
 6 | 
 7 | export const getActiveSaleOrders = async ({
 8 |   assetId,
 9 | }: GetActiveSaleOrderProps) => {
10 |   try {
11 |     const res = await getUCMState();
12 | 
13 |     const state = res.state;
14 | 
15 |     const matchingPair = state.pairs.find((item) =>
16 |       item.pair.includes(assetId)
17 |     );
18 | 
19 |     return matchingPair ? matchingPair.orders : [];
20 |   } catch (error: any) {
21 |     console.error(error);
22 |     throw new Error(error.message);
23 |   }
24 | };
25 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/asset/listAsset.ts:
--------------------------------------------------------------------------------
 1 | import { ListAssetProps } from "@/types";
 2 | import { initSigner, orderbook } from "../arweave";
 3 | 
 4 | export const listAsset = async ({
 5 |   assetId,
 6 |   qty,
 7 |   price,
 8 |   address,
 9 | }: ListAssetProps) => {
10 |   try {
11 |     const signer = await initSigner();
12 | 
13 |     const orderTx = await orderbook.sell({
14 |       assetId,
15 |       qty,
16 |       price: price * 1e6,
17 |       wallet: signer,
18 |       walletAddress: address,
19 |     });
20 | 
21 |     console.log({ orderTx });
22 |     return orderTx;
23 |   } catch (error) {
24 |     console.error(error);
25 |     throw new Error("An error occurred trying to create your listing");
26 |   }
27 | };
28 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/comments.ts:
--------------------------------------------------------------------------------
  1 | import { arweave } from "./arweave";
  2 | import arweaveGql, { GetTransactionsQueryVariables } from "arweave-graphql";
  3 | import { appConfig } from "../config";
  4 | import { Comment } from "../types";
  5 | import { gql } from "./helpers/gql";
  6 | 
  7 | export const writeComment = async ({ comment, sourceTx }: Comment) => {
  8 |   try {
  9 |     const savedTx = await arweave.createTransaction({
 10 |       data: comment,
 11 |     });
 12 |     savedTx.addTag("Content-Type", "text/plain");
 13 |     savedTx.addTag("Data-Protocol", "Comment");
 14 |     savedTx.addTag("DApp-Name", "arcadia-v2");
 15 |     savedTx.addTag("Type", "comment");
 16 |     savedTx.addTag("Published", Date.now().toString());
 17 |     savedTx.addTag("Data-Source", sourceTx);
 18 | 
 19 |     const savedTxResult = await window.arweaveWallet.dispatch(savedTx);
 20 |     return savedTxResult;
 21 |   } catch (error) {
 22 |     throw new Error(error as any);
 23 |   }
 24 | };
 25 | 
 26 | interface CommentQueryParams {
 27 |   sourceTx: string | undefined;
 28 |   cursor?: string;
 29 |   limit?: number;
 30 | }
 31 | 
 32 | export const getComments = async ({ sourceTx, cursor, limit }: CommentQueryParams) => {
 33 |   if (!sourceTx) {
 34 |     throw new Error("No source transaction ID found");
 35 |   }
 36 | 
 37 |   const query: GetTransactionsQueryVariables = {
 38 |     first: limit || 3,
 39 |     tags: [
 40 |       { name: "Content-Type", values: ["text/plain"] },
 41 |       { name: "Data-Protocol", values: ["Comment"] },
 42 |       { name: "Type", values: ["comment"] },
 43 |       { name: "Data-Source", values: [sourceTx] },
 44 |     ],
 45 |   };
 46 | 
 47 |   if (cursor) {
 48 |     query.after = cursor;
 49 |   }
 50 | 
 51 |   try {
 52 |     const metaRes = await gql({
 53 |       variables: query,
 54 |     });
 55 | 
 56 |     const metadata = metaRes.transactions.edges
 57 |       .filter((edge) => Number(edge.node.data.size) < 180)
 58 |       .map(async (edge) => {
 59 |         const author = edge.node.owner.address;
 60 |         const txid = edge.node.id;
 61 |         const published =
 62 |           Number(edge.node.tags.find((x) => x.name === "Published")?.value) ||
 63 |           edge.node.block?.timestamp;
 64 |         // const account = await getAccount(owner);
 65 |         const cursor = edge.cursor;
 66 |         const data = await arweave.api
 67 |           .get(txid)
 68 |           .then((res) => res.data)
 69 |           .catch((error) => console.error(error));
 70 | 
 71 |         return {
 72 |           author,
 73 |           txid,
 74 |           published,
 75 |           data,
 76 |           cursor,
 77 |         };
 78 |       });
 79 | 
 80 |     const data = await Promise.all(metadata);
 81 |     const hasNextPage = metaRes.transactions.pageInfo.hasNextPage;
 82 | 
 83 |     return {
 84 |       data,
 85 |       hasNextPage,
 86 |     };
 87 |   } catch (error) {
 88 |     console.error(error);
 89 |     throw new Error("Error occured whilst fetching data");
 90 |   }
 91 | };
 92 | 
 93 | export const getCommentCount = async (txid: string) => {
 94 |   try {
 95 |     const res = await fetch(`${appConfig.goldskyUrl}/graphql`, {
 96 |       method: "POST",
 97 |       headers: {
 98 |         "Content-Type": "application/json",
 99 |       },
100 |       body: JSON.stringify(buildSearchQuery(txid)),
101 |     });
102 | 
103 |     const result = await res.json();
104 |     console.log(result.data);
105 |     return result.data;
106 |   } catch (error: any) {
107 |     throw new Error(error.message);
108 |   }
109 | };
110 | 
111 | const buildSearchQuery = (txid: string) => {
112 |   const commentQuery = {
113 |     query: `
114 |       query {
115 |         transactions(
116 |           tags: [
117 |             {
118 |               name: "Content-Type",
119 |               values: ["text/plain"],
120 |               },
121 |               {
122 |               name: "Data-Protocol",
123 |               values: ["Comment"],
124 |               },
125 |               {
126 |               name: "Data-Source",
127 |               values: ["\`${txid}\`"],
128 |               },
129 |           ]
130 |         ) {
131 |           edges {
132 |             cursor
133 |             node {
134 |               id
135 |               tags {
136 |                 name 
137 |                 value 
138 |               }
139 |             }
140 |           }
141 |         count
142 |       }
143 |     }
144 |   `,
145 |   };
146 | 
147 |   return commentQuery;
148 | };
149 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getAlbum.ts:
--------------------------------------------------------------------------------
  1 | import { appConfig } from "../config";
  2 | import { GQLQuery } from "@/types";
  3 | import { GetTransactionsQuery } from "arweave-graphql";
  4 | import { arweave } from "./arweave";
  5 | // import { gql } from "./helpers";
  6 | 
  7 | export const getAlbum = async (txid: string) => {
  8 |   try {
  9 |     // retrieve album
 10 |     const res = await gql(txid);
 11 | 
 12 |     console.log({ res });
 13 | 
 14 |     const data = res.transactions.edges
 15 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
 16 |       .map((edge) => {
 17 |         const title = edge.node.tags.find((x) => x.name === "Title")?.value;
 18 |         const description = edge.node.tags.find((x) => x.name === "Description")?.value;
 19 |         const id = edge.node.id;
 20 |         const artworkId = edge.node.tags.find((x) => x.name === "Thumbnail")?.value;
 21 |         const genre = edge.node.tags.find((x) => x.name === "Topic:genre")?.value;
 22 |         const topics = edge.node.tags
 23 |           .filter((tag) => tag.name.includes("Topic"))
 24 |           .map((tag) => tag.value);
 25 |         let releaseType = "";
 26 | 
 27 |         const typeTag = edge.node.tags.find((x) => x.name === "Type")?.value;
 28 | 
 29 |         if (typeTag?.includes("single")) {
 30 |           releaseType = "Single";
 31 |         } else if (typeTag?.includes("ep")) {
 32 |           releaseType = "EP";
 33 |         } else if (typeTag?.includes("mixtape")) {
 34 |           releaseType = "Mixtape";
 35 |         } else if (typeTag?.includes("album")) {
 36 |           releaseType = "Album";
 37 |         } else {
 38 |           releaseType = "Album";
 39 |         }
 40 | 
 41 |         let creator: string;
 42 | 
 43 |         try {
 44 |           const creatorTag = edge.node.tags.find((x) => x.name === "Creator")?.value;
 45 |           // find owner from balances
 46 |           const initStateTag = edge.node.tags.find((x) => x.name === "Init-State")?.value;
 47 | 
 48 |           const initState = initStateTag ? JSON.parse(initStateTag) : undefined;
 49 | 
 50 |           const assetOwner = Object.keys(initState.balances)[0];
 51 | 
 52 |           creator = creatorTag || assetOwner;
 53 |         } catch (error) {
 54 |           creator = edge.node.owner.address;
 55 |         }
 56 | 
 57 |         return {
 58 |           title,
 59 |           description,
 60 |           id,
 61 |           artworkId,
 62 |           creator,
 63 |           genre,
 64 |           topics,
 65 |           releaseType,
 66 |         };
 67 |       });
 68 | 
 69 |     if (!data.length) {
 70 |       throw new Error(`No collection found at id: ${txid}`);
 71 |     }
 72 | 
 73 |     const itemsRes = await arweave.api.get(data[0].id);
 74 |     const items: string[] = itemsRes.data.items;
 75 | 
 76 |     if (!items) {
 77 |       throw new Error(`Could not find items for collection at: ${txid}`);
 78 |     }
 79 | 
 80 |     return {
 81 |       ...data[0],
 82 |       items,
 83 |     };
 84 |   } catch (error) {
 85 |     throw error;
 86 |   }
 87 | };
 88 | 
 89 | const gql = async (txid: string): Promise<GetTransactionsQuery> => {
 90 |   const query = {
 91 |     query: `
 92 |     query {
 93 |       transactions(
 94 |         ids: ["${txid}"]
 95 |       ){
 96 |       edges {
 97 |         cursor
 98 |         node {
 99 |           id
100 |           tags {
101 |             name
102 |             value
103 |           }
104 |         }
105 |       }
106 |     }
107 |   }
108 |     `,
109 |   };
110 | 
111 |   const response = await fetch(`${appConfig.goldskyUrl}/graphql`, {
112 |     method: "POST",
113 |     headers: {
114 |       "Content-Type": "application/json",
115 |     },
116 |     body: JSON.stringify(query),
117 |   });
118 | 
119 |   const resObj = await response.json();
120 | 
121 |   return resObj.data;
122 | };
123 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getAlbumIdFromCode.ts:
--------------------------------------------------------------------------------
 1 | import { setTrackInfo } from "../utils/setTrackInfo";
 2 | import arweaveGql, { Transaction, TransactionEdge } from "arweave-graphql";
 3 | import { appConfig } from "../config";
 4 | import { removeDuplicatesByCreator, removeDuplicatesByTxid } from "@/utils/query";
 5 | 
 6 | export const getAlbumIdFromCode = async (collectionCode: string) => {
 7 |   try {
 8 |     const res = await arweaveGql(`${appConfig.defaultGateway}/graphql`).getTransactions({
 9 |       tags: [
10 |         {
11 |           name: "Type",
12 |           values: ["Document"],
13 |         },
14 |         {
15 |           name: "Collection-Code",
16 |           values: [collectionCode],
17 |         },
18 |       ],
19 |     });
20 | 
21 |     const data = res.transactions.edges[0].node.id;
22 | 
23 |     console.log("albumIdFromCode", data);
24 | 
25 |     return data;
26 |   } catch (error: any) {
27 |     console.error(error);
28 |     throw new Error("Error occured whilst fetching data: " + error.message);
29 |   }
30 | };
31 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getAssetOwners.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "../config";
 2 | import { warp } from "./arweave";
 3 | 
 4 | export const getAssetOwners = async (assetId: string) => {
 5 |   const asset = warp.contract(assetId).setEvaluationOptions({
 6 |     allowBigInt: true,
 7 |     internalWrites: true,
 8 |     unsafeClient: "skip",
 9 |     remoteStateSyncEnabled: true,
10 |     remoteStateSyncSource: appConfig.dreU,
11 |   });
12 | 
13 |   const { cachedValue } = await asset.readState();
14 |   console.log(cachedValue);
15 |   return cachedValue.state as any;
16 | };
17 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getAudioData.ts:
--------------------------------------------------------------------------------
 1 | import { gateway } from "@/utils";
 2 | import { calculateAudioPeaks } from "@/utils/audio";
 3 | import Decoder from "@/utils/decoder";
 4 | 
 5 | interface GetAudioPeaksProps {
 6 |   txid: string;
 7 |   audioContext: AudioContext;
 8 | }
 9 | 
10 | export const getAudioData = async ({ audioContext, ...props }: GetAudioPeaksProps) => {
11 |   try {
12 |     const url = `${gateway()}/${props.txid}`;
13 |     const res = await fetch(url);
14 | 
15 |     if (!res.ok) {
16 |       throw new Error("Error occurred fetching audio data: ");
17 |     }
18 | 
19 |     const arrayBuffer = await res.arrayBuffer();
20 |     const decodedData = await Decoder.decode(arrayBuffer, 8000);
21 |     const peaks = await calculateAudioPeaks({ decodedData });
22 |     const duration = decodedData.duration;
23 |     return {
24 |       duration,
25 |       peaks,
26 |     };
27 |   } catch (error: any) {
28 |     console.error(error);
29 |     throw new Error(error);
30 |   }
31 | };
32 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getDuration.ts:
--------------------------------------------------------------------------------
 1 | import { Track } from "@/types";
 2 | import { gateway } from "@/utils";
 3 | 
 4 | export const getDuration = async (id: string) => {
 5 |   try {
 6 |     const url = gateway() + "/" + id;
 7 |     const res = await fetch(url);
 8 | 
 9 |     if (!res.ok) {
10 |       throw new Error("Error fetching audio data with status: " + res.status);
11 |     }
12 | 
13 |     const buffer = await res.arrayBuffer();
14 | 
15 |     const audioContext = new window.AudioContext();
16 | 
17 |     const audioBuffer = await audioContext.decodeAudioData(buffer);
18 | 
19 |     const duration = audioBuffer.duration;
20 | 
21 |     return duration;
22 |   } catch (error) {
23 |     console.error("Error fetching or processing audio:", error);
24 |     throw error;
25 |   }
26 | };
27 | 
28 | export const getTotalDuration = async (tracklist: Track[]) => {
29 |   try {
30 |     const durations = await Promise.all(
31 |       tracklist.map(async (track) => await getDuration(track.txid))
32 |     );
33 | 
34 |     const totalDuration = durations.reduce((acc, duration) => acc + duration, 0);
35 | 
36 |     return totalDuration;
37 |   } catch (error) {
38 |     console.error("Error getting total duration:", error);
39 |     throw error;
40 |   }
41 | };
42 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getRecentActivity.ts:
--------------------------------------------------------------------------------
  1 | import { appConfig } from "../config";
  2 | import { Transaction, TransactionEdge } from "arweave-graphql";
  3 | 
  4 | interface RecentActivityResults {
  5 |   timestamp: number;
  6 |   owner: string;
  7 |   txid: string;
  8 |   type: "liked" | "commented";
  9 | }
 10 | 
 11 | export const getRecentActivity = async (txid: string) => {
 12 |   try {
 13 |     const res = await fetch(`${appConfig.defaultGateway}/graphql`, {
 14 |       method: "POST",
 15 |       headers: {
 16 |         "Content-Type": "application/json",
 17 |       },
 18 |       body: JSON.stringify(buildSearchQuery(txid)),
 19 |     });
 20 | 
 21 |     const result = await res.json();
 22 | 
 23 |     const recentComments: TransactionEdge[] = result.data.recentComments.edges;
 24 |     const recentStamps: TransactionEdge[] = result.data.recentStamps.edges;
 25 | 
 26 |     const combinedResults = [...recentComments, ...recentStamps]
 27 |       .filter((edge) => edge.node.block)
 28 |       .map((edge) => fillterResults(edge.node));
 29 | 
 30 |     // console.log({ combinedResults });
 31 | 
 32 |     const sortedResults = combinedResults.sort((a, b) => {
 33 |       const timestampA = a.timestamp;
 34 |       const timestampB = b.timestamp;
 35 | 
 36 |       return timestampB - timestampA;
 37 |     });
 38 | 
 39 |     console.log({ sortedResults });
 40 | 
 41 |     return sortedResults;
 42 |   } catch (error: any) {
 43 |     throw new Error(error.message);
 44 |   }
 45 | };
 46 | 
 47 | const fillterResults = (node: Transaction): RecentActivityResults => {
 48 |   let activityType: RecentActivityResults["type"];
 49 | 
 50 |   const isStamp = node.tags.find((x) => x.name === "Protocol-Name")?.value === "Stamp";
 51 | 
 52 |   if (isStamp) {
 53 |     activityType = "liked";
 54 |   }
 55 | 
 56 |   const isComment = node.tags.find((x) => x.name === "Data-Protocol")?.value === "Comment";
 57 | 
 58 |   if (isComment) {
 59 |     activityType = "commented";
 60 |   }
 61 | 
 62 |   return {
 63 |     timestamp: node.block!!.timestamp,
 64 |     owner: node.owner.address,
 65 |     txid: node.id,
 66 |     //@ts-ignore
 67 |     type: activityType,
 68 |   };
 69 | };
 70 | 
 71 | const buildSearchQuery = (txid: string) => {
 72 |   const recentActivityQuery = {
 73 |     query: `
 74 |     query {
 75 |       recentComments: transactions(
 76 |         first: 3,
 77 |         tags: [
 78 |           {
 79 |             name: "Content-Type",
 80 |             values: ["text/plain"],
 81 |             },
 82 |             {
 83 |             name: "Data-Protocol",
 84 |             values: ["Comment"],
 85 |             },
 86 |             {
 87 |               name: "Data-Source",
 88 |               values: ["${txid}"],
 89 |               },
 90 |         ]
 91 |       ) {
 92 |         edges {
 93 |           cursor
 94 |           node {
 95 |             id
 96 |             block {
 97 |               timestamp
 98 |             }
 99 |             owner {
100 |               address
101 |             }
102 |             tags {
103 |               name 
104 |               value 
105 |             }
106 |           }
107 |         }
108 |     }
109 |     recentStamps: transactions(
110 |       first: 3,
111 |       tags: [
112 |           {
113 |           name: "Protocol-Name",
114 |           values: ["Stamp"],
115 |           },
116 |           {
117 |           name: "Data-Source",
118 |           values: ["${txid}"],
119 |           },
120 |       ]
121 |     ) {
122 |       edges {
123 |         cursor
124 |         node {
125 |           id
126 |           block {
127 |             timestamp
128 |           }
129 |           owner {
130 |             address
131 |           }
132 |           tags {
133 |             name 
134 |             value 
135 |           }
136 |         }
137 |       }
138 |   }
139 |   }
140 |   `,
141 |   };
142 | 
143 |   return recentActivityQuery;
144 | };
145 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getRecentAlbums.ts:
--------------------------------------------------------------------------------
 1 | import arweaveGql, { Transaction } from "arweave-graphql";
 2 | import { arweave } from "./arweave";
 3 | 
 4 | export const getRecentAlbums = async (gateway: string) => {
 5 |   try {
 6 |     const res = await arweaveGql(`${gateway}/graphql`).getTransactions({
 7 |       first: 6,
 8 |       tags: [
 9 |         {
10 |           name: "Content-Type",
11 |           values: ["application/json"],
12 |         },
13 |         {
14 |           name: "Data-Protocol",
15 |           values: ["Collection"],
16 |         },
17 |         {
18 |           name: "Collection-Type",
19 |           values: ["music", "music-album", "audio"],
20 |         },
21 |         {
22 |           name: "App-Name",
23 |           values: ["SmartWeaveContract"],
24 |         },
25 |         {
26 |           name: "App-Version",
27 |           values: ["0.3.0"],
28 |         },
29 |       ],
30 |     });
31 | 
32 |     console.log("res", res);
33 | 
34 |     const data = res.transactions.edges
35 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
36 |       .map((edge) => setAlbumInfo(edge.node as Transaction, gateway));
37 | 
38 |     // console.log(data);
39 | 
40 |     return Promise.all(data);
41 |   } catch (error: any) {
42 |     console.error(error);
43 |     throw new Error("Error occured whilst fetching data: " + error.message);
44 |   }
45 | };
46 | 
47 | const setAlbumInfo = async (node: Transaction, gateway: string) => {
48 |   const title = node.tags.find((x) => x.name === "Title")?.value;
49 | 
50 |   let creator: string;
51 | 
52 |   try {
53 |     // find owner from balances
54 |     const initStateTag = node.tags.find((x) => x.name === "Init-State")?.value;
55 | 
56 |     const initState = initStateTag ? JSON.parse(initStateTag) : undefined;
57 | 
58 |     const assetOwner = Object.keys(initState.balances)[0];
59 | 
60 |     creator = assetOwner;
61 |   } catch (error) {
62 |     creator = node.owner.address;
63 |   }
64 | 
65 |   const artworkId =
66 |     node.tags.find((x) => x.name === "Cover-Artwork")?.value ||
67 |     node.tags.find((x) => x.name === "Thumbnail")?.value;
68 | 
69 |   const txid = node.id;
70 | 
71 |   let tracks: string[] = [];
72 | 
73 |   try {
74 |     const res = await arweave.api.get(txid);
75 |     tracks = res.data;
76 |   } catch (error) {
77 |     throw new Error(("An error occured getting album tracks: " + error) as any);
78 |   }
79 | 
80 |   return {
81 |     title,
82 |     creator,
83 |     artworkId,
84 |     txid,
85 |     tracks,
86 |   };
87 | };
88 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getUCMAsset.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "@/config";
 2 | import { UCMAssetProps } from "@/types";
 3 | 
 4 | export const getUCMAsset = async (assetId: string) => {
 5 |   try {
 6 |     const res = await fetch(`${appConfig.dreU}/contract?id=${assetId}&errorMessages=true`);
 7 | 
 8 |     if (!res.ok) {
 9 |       throw new Error(
10 |         `Error occurred getting asset listed status: ${res.statusText} with code ${res.status}`
11 |       );
12 |     }
13 | 
14 |     const data: UCMAssetProps = await res.json();
15 |     console.log(data);
16 |     return data;
17 |   } catch (error: any) {
18 |     console.error(error);
19 |     throw new Error(`Error occurred getting asset with ID: ${assetId}`);
20 |   }
21 | };
22 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/getUCMState.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "@/config";
 2 | import { UCMContract } from "@/types";
 3 | 
 4 | export const getUCMState = async () => {
 5 |   try {
 6 |     const res = await fetch(`${appConfig.dreU}/contract?id=${appConfig.UCM}&errorMessages=true`);
 7 | 
 8 |     if (!res.ok) {
 9 |       throw new Error(
10 |         `Error occurred getting sale order: ${res.statusText} with code ${res.status}`
11 |       );
12 |     }
13 | 
14 |     const data: UCMContract = await res.json();
15 |     return data;
16 |   } catch (error: any) {
17 |     console.error(error);
18 |     throw new Error(error);
19 |   }
20 | };
21 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/helpers.ts:
--------------------------------------------------------------------------------
 1 | import { GQLQuery } from "@/types";
 2 | import { gateway } from "@/utils";
 3 | import arweaveGql, { Transaction, Query } from "arweave-graphql";
 4 | 
 5 | export const gql = async ({ variables }: GQLQuery) => {
 6 |   try {
 7 |     const res = await arweaveGql(`${gateway()}/graphql`).getTransactions({
 8 |       ...variables,
 9 |     });
10 | 
11 |     return res;
12 |   } catch (error: any) {
13 |     console.error(error);
14 |     throw new Error("Error occured whilst fetching data: " + error.message);
15 |   }
16 | };
17 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/helpers/gql.ts:
--------------------------------------------------------------------------------
 1 | import { GQLQuery } from "@/types/query";
 2 | import { gateway } from "@/utils";
 3 | import arweaveGql, { TagFilter } from "arweave-graphql";
 4 | 
 5 | /**
 6 |  *
 7 |  * @description Intended for simple, non-parallel queries.
 8 |  */
 9 | export const gql = async ({ variables }: GQLQuery) => {
10 |   try {
11 |     const defaultTags: TagFilter[] = [
12 |       {
13 |         name: "DApp-Name",
14 |         values: ["arcadia-v2"],
15 |       },
16 |       // {
17 |       //   name: "Variant",
18 |       //   values: ["0.0.1"],
19 |       // },
20 |     ];
21 | 
22 |     variables.tags = variables.tags || [];
23 |     const mergedTags = [...defaultTags, ...(variables.tags as TagFilter[])];
24 | 
25 |     const res = await arweaveGql(`${gateway()}/graphql`).getTransactions({
26 |       ...variables,
27 |       tags: mergedTags,
28 |     });
29 | 
30 |     return res;
31 |   } catch (error: any) {
32 |     console.error(error);
33 |     throw new Error(`Error occured whilst fetching data: ${error.message}`);
34 |   }
35 | };
36 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/helpers/setAlbumInfo.ts:
--------------------------------------------------------------------------------
 1 | import { gateway } from "@/utils";
 2 | import { TransactionEdge } from "arweave-graphql";
 3 | import { arweave } from "../arweave";
 4 | import { Album } from "@/types";
 5 | 
 6 | export const setAlbumInfo = async (edge: TransactionEdge): Promise<Album> => {
 7 |   // casting as the filter in query func is/should be ensuring value exists
 8 |   const title = edge.node.tags.find((x) => x.name === "Title")?.value as string;
 9 | 
10 |   let creator: string;
11 | 
12 |   try {
13 |     const initStateTag = edge.node.tags.find((x) => x.name === "Init-State")?.value;
14 | 
15 |     const initState = initStateTag ? JSON.parse(initStateTag) : undefined;
16 | 
17 |     const assetOwner = Object.keys(initState.balances)[0];
18 | 
19 |     creator = assetOwner;
20 |   } catch (error) {
21 |     creator = edge.node.owner.address;
22 |   }
23 | 
24 |   // casting as the filter in query func is/should be ensuring value exists
25 |   const thumbnailId = edge.node.tags.find((x) => x.name === "Thumbnail")?.value as string;
26 |   const artworkId = edge.node.tags.find((x) => x.name === "Artwork")?.value as string;
27 |   const releaseDate =
28 |     Number(edge.node.tags.find((x) => x.name === "Release-Date")?.value) ||
29 |     edge.node.block?.timestamp;
30 | 
31 |   const thumbnailSrc = gateway() + "/" + thumbnailId;
32 |   const artworkSrc = gateway() + "/" + artworkId;
33 |   const txid = edge.node.id;
34 |   const cursor = edge.cursor;
35 | 
36 |   let trackIds: string[] = [];
37 | 
38 |   try {
39 |     const res = await arweave.api.get(txid);
40 |     trackIds = res.data.items;
41 |   } catch (error) {
42 |     console.error("An error occured getting album trackIds: " + error);
43 |     // throw new Error("An error occured getting album trackIds: " + error as any);
44 |   }
45 | 
46 |   return {
47 |     txid,
48 |     title,
49 |     creator,
50 |     thumbnailSrc,
51 |     artworkSrc,
52 |     trackIds,
53 |     releaseDate,
54 |     releaseType: "album",
55 |     cursor,
56 |   };
57 | };
58 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/helpers/setTrackInfo.ts:
--------------------------------------------------------------------------------
 1 | import { Track } from "@/types";
 2 | import { gateway } from "@/utils";
 3 | import { TransactionEdge } from "arweave-graphql";
 4 | 
 5 | export const setTrackInfo = (edge: TransactionEdge): Track => {
 6 |   // casting as the filter in query func is/should be ensuring value exists
 7 |   const title = edge.node.tags.find((x) => x.name === "Title")?.value as string;
 8 | 
 9 |   let creator: string;
10 | 
11 |   try {
12 |     const initStateTag = edge.node.tags.find((x) => x.name === "Init-State")?.value;
13 | 
14 |     const initState = initStateTag ? JSON.parse(initStateTag) : undefined;
15 | 
16 |     const assetOwner = Object.keys(initState.balances)[0];
17 | 
18 |     creator = assetOwner;
19 |   } catch (error) {
20 |     const creatorTag = edge.node.tags.find((x) => x.name === "Creator");
21 |     creator =
22 |       creatorTag?.value && creatorTag.value.length === 43
23 |         ? creatorTag.value
24 |         : edge.node.owner.address;
25 |   }
26 | 
27 |   const owner = edge.node.owner.address;
28 | 
29 |   // casting as the filter in query func is/should be ensuring value exists
30 |   const thumbnailId = edge.node.tags.find((x) => x.name === "Thumbnail")?.value as string;
31 |   const artworkId = edge.node.tags.find((x) => x.name === "Artwork")?.value as string;
32 | 
33 |   const thumbnailSrc = gateway() + "/" + thumbnailId;
34 |   const artworkSrc = gateway() + "/" + artworkId;
35 |   const audioSrc = gateway() + "/" + edge.node.id;
36 |   const txid = edge.node.id;
37 |   const cursor = edge.cursor;
38 |   const releaseDate =
39 |     Number(edge.node.tags.find((x) => x.name === "Release-Date")?.value) ||
40 |     edge.node.block?.timestamp;
41 |   const topics = edge.node.tags.filter((tag) => tag.name.includes("Topic")).map((tag) => tag.value);
42 | 
43 |   return {
44 |     title,
45 |     owner,
46 |     creator,
47 |     audioSrc,
48 |     thumbnailSrc,
49 |     artworkSrc,
50 |     txid,
51 |     releaseDate,
52 |     releaseType: "single",
53 |     cursor,
54 |     topics,
55 |   };
56 | };
57 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/irys.ts:
--------------------------------------------------------------------------------
 1 | import { WebIrys } from "@irys/sdk";
 2 | import { Tag } from "arweave-graphql";
 3 | import { DataItem } from "arbundles/web";
 4 | import { fileToUint8Array } from "@/utils";
 5 | import { Buffer } from "buffer";
 6 | import { UploadResponse } from "@irys/sdk/build/esm/common/types";
 7 | 
 8 | globalThis.Buffer = Buffer;
 9 | 
10 | export const getIrys = async () => {
11 |   const irys = new WebIrys({
12 |     token: "arweave",
13 |     wallet: { provider: window.arweaveWallet },
14 |     url: "https://node2.irys.xyz",
15 |   });
16 | 
17 |   await irys.ready();
18 | 
19 |   return irys;
20 | };
21 | 
22 | export const uploadFile = async (data: File, tags: Tag[]) => {
23 |   try {
24 |     const file = await fileToUint8Array(data);
25 | 
26 |     const signed = await window.arweaveWallet.signDataItem({
27 |       data: file,
28 |       tags,
29 |     });
30 | 
31 |     const dataItem = new DataItem(Buffer.from(signed));
32 | 
33 |     const res = await fetch(`https://node2.bundlr.network/tx`, {
34 |       method: "POST",
35 |       headers: {
36 |         "Content-Type": "application/octet-stream",
37 |       },
38 |       body: dataItem.getRaw(),
39 |     });
40 | 
41 |     const responseData: UploadResponse = await res.json();
42 |     return responseData;
43 |   } catch (error: any) {
44 |     console.error(error);
45 |     throw new Error(error);
46 |   }
47 | };
48 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/library/likedTracks.ts:
--------------------------------------------------------------------------------
  1 | import { sendMessage, spawnProcess } from "../ao";
  2 | import { dryrun } from "@permaweb/aoconnect";
  3 | import { gql } from "../helpers/gql";
  4 | import { trackProcessTemplate } from "./processes/trackTemplate";
  5 | import { sleep } from "@/utils";
  6 | 
  7 | export const saveTrack = async ({
  8 |   txid,
  9 |   processId,
 10 |   owner,
 11 | }: {
 12 |   txid: string;
 13 |   processId: string | undefined;
 14 |   owner: string | undefined;
 15 | }) => {
 16 |   if (!owner) {
 17 |     throw new Error("Owner address is required.");
 18 |   }
 19 | 
 20 |   if (!processId) {
 21 |     throw new Error("Process ID is required.");
 22 |   }
 23 | 
 24 |   try {
 25 |     const messageId = await sendMessage({
 26 |       processId,
 27 |       action: "Add",
 28 |       data: txid,
 29 |       tags: [
 30 |         {
 31 |           name: "Data-Source",
 32 |           value: txid,
 33 |         },
 34 |         {
 35 |           name: "Playlist-ID",
 36 |           value: processId,
 37 |         },
 38 |       ],
 39 |     });
 40 | 
 41 |     // const results = await readMessageResult({ messageId, processId });
 42 |     // return results;
 43 |     return messageId;
 44 |   } catch (error: any) {
 45 |     throw new Error(error);
 46 |   }
 47 | };
 48 | 
 49 | export const removeTrack = async ({
 50 |   txid,
 51 |   processId,
 52 |   owner,
 53 | }: {
 54 |   txid: string;
 55 |   processId: string | undefined;
 56 |   owner: string | undefined;
 57 | }) => {
 58 |   if (!owner) {
 59 |     throw new Error("Owner address is required.");
 60 |   }
 61 | 
 62 |   if (!processId) {
 63 |     throw new Error("Process ID is required.");
 64 |   }
 65 | 
 66 |   try {
 67 |     const messageId = await sendMessage({
 68 |       processId,
 69 |       action: "Remove",
 70 |       data: txid,
 71 |       tags: [
 72 |         {
 73 |           name: "Data-Source",
 74 |           value: txid,
 75 |         },
 76 |         {
 77 |           name: "Playlist-ID",
 78 |           value: processId,
 79 |         },
 80 |       ],
 81 |     });
 82 | 
 83 |     // const results = await readMessageResult({ messageId, processId });
 84 |     // return results;
 85 |     return messageId;
 86 |   } catch (error: any) {
 87 |     throw new Error(error);
 88 |   }
 89 | };
 90 | 
 91 | export const getLikedTracksIds = async (processId: string) => {
 92 |   try {
 93 |     const result = await dryrun({
 94 |       process: processId,
 95 |       tags: [{ name: "Action", value: "Get" }],
 96 |     });
 97 | 
 98 |     console.log(result);
 99 | 
100 |     const message = result.Messages[0];
101 | 
102 |     if (!message) {
103 |       throw new Error("No messages found");
104 |     }
105 | 
106 |     if (message.Error) {
107 |       throw new Error(message.Error);
108 |     }
109 | 
110 |     const data: string[] = JSON.parse(message.Data);
111 |     return data;
112 |   } catch (error: any) {
113 |     throw new Error(error);
114 |   }
115 | };
116 | 
117 | //  make this generic func that accepts tags and data
118 | export const createTracksProcess = async ({ owner }: { owner: string }) => {
119 |   const maxRetries = 5;
120 |   let attempts = 0;
121 | 
122 |   while (attempts < maxRetries) {
123 |     try {
124 |       const processId = await spawnProcess({
125 |         tags: [
126 |           {
127 |             name: "Name",
128 |             value: "Playlist-Test1",
129 |           },
130 |           {
131 |             name: "Playlist-Type",
132 |             value: "Tracks",
133 |           },
134 |           {
135 |             name: "DApp-Name",
136 |             value: "arcadia-v2",
137 |           },
138 |         ],
139 |       });
140 | 
141 |       const intialized = await gql({
142 |         variables: {
143 |           owners: [owner],
144 |           tags: [
145 |             {
146 |               name: "Data-Protocol",
147 |               values: ["ao"],
148 |             },
149 |             {
150 |               name: "Type",
151 |               values: ["Message"],
152 |             },
153 |             {
154 |               name: "Action",
155 |               values: ["Eval"],
156 |             },
157 |             {
158 |               name: "Eval-Intent",
159 |               values: ["Init"],
160 |             },
161 |           ],
162 |         },
163 |       }).then((res) => res.transactions.edges.length > 0);
164 | 
165 |       if (intialized) {
166 |         return processId;
167 |       } else {
168 |         await sleep(2000);
169 | 
170 |         // init
171 |         await sendMessage({
172 |           processId: processId,
173 |           action: "Eval",
174 |           data: trackProcessTemplate,
175 |           tags: [
176 |             {
177 |               name: "Eval-Intent",
178 |               value: "Init",
179 |             },
180 |             {
181 |               name: "DApp-Name",
182 |               value: "arcadia-v2",
183 |             },
184 |           ],
185 |         });
186 | 
187 |         return processId;
188 |       }
189 |     } catch (error) {
190 |       attempts += 1;
191 |       console.error(`Attempt ${attempts} failed: ${error}`);
192 |       if (attempts >= maxRetries) {
193 |         throw new Error(`Failed after ${maxRetries} attempts: ${error}`);
194 |       }
195 |       // wait for 1 sec before retrying
196 |       await sleep(1000);
197 |     }
198 |   }
199 | };
200 | 
201 | export const getTrackProcess = async (owner: string) => {
202 |   const tracksProcessRes = await gql({
203 |     variables: {
204 |       owners: [owner],
205 |       tags: [
206 |         {
207 |           name: "Data-Protocol",
208 |           values: ["ao"],
209 |         },
210 |         {
211 |           name: "Type",
212 |           values: ["Process"],
213 |         },
214 |         {
215 |           name: "Name",
216 |           values: ["Playlist-Test1"],
217 |         },
218 |       ],
219 |     },
220 |   });
221 | 
222 |   const tracksProcess = tracksProcessRes.transactions.edges;
223 | 
224 |   return tracksProcess;
225 | };
226 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/library/processes/trackTemplate.ts:
--------------------------------------------------------------------------------
 1 | export const trackProcessTemplate = `
 2 | local utils = require(".utils")
 3 | local json = require("json")
 4 | 
 5 | -- Initialize the LikedTracks table if it doesn't exist
 6 | LikedTracks = LikedTracks or {}
 7 | 
 8 | -- Function to check if the sender is the owner
 9 | local function isOwner(msg)
10 |   return msg.From == Owner or ao.id
11 | end
12 | 
13 | -- Add a song to the LikedTracks table
14 | Handlers.add(
15 |   "add",
16 |   Handlers.utils.hasMatchingTag("Action", "Add"),
17 |   function (msg)
18 |     if not isOwner(msg) then
19 |       ao.send({
20 |         Target = msg.From,
21 |         Action = 'Add-Error',
22 |         ["Message-Id"] = msg.Id,
23 |         Error = 'Unauthorized: ' .. msg.From .. 'is not authorized to add songs.'
24 |       })
25 |       return
26 |     end
27 | 
28 |     local songTxId = msg.Data
29 |     if not utils.includes(songTxId, LikedTracks) then
30 |       table.insert(LikedTracks, songTxId)
31 |     end
32 |     Handlers.utils.reply("Song added.")(msg)
33 |   end
34 | )
35 | 
36 | -- Remove a song from the LikedTracks table
37 | Handlers.add(
38 |   "remove",
39 |   Handlers.utils.hasMatchingTag("Action", "Remove"),
40 |   function (msg)
41 |     if not isOwner(msg) then
42 |       ao.send({
43 |         Target = msg.From,
44 |         Action = 'Remove-Error',
45 |         ["Message-Id"] = msg.Id,
46 |         Error = 'Unauthorized: ' .. msg.From .. 'is not authorized to remove songs.'
47 |       })
48 |       return
49 |     end
50 | 
51 |     local songTxId = msg.Data
52 |     LikedTracks = utils.filter(
53 |       function (val) return val ~= songTxId end,
54 |       LikedTracks
55 |     )
56 |     Handlers.utils.reply("Song removed.")(msg)
57 |   end
58 | )
59 | 
60 | -- Get the list of liked songs
61 | Handlers.add(
62 |   "get",
63 |   Handlers.utils.hasMatchingTag("Action", "Get"),
64 |   function (msg)
65 |     ao.send({
66 |       Target = msg.From,
67 |       Action = 'View',
68 |       Data = json.encode(LikedTracks)
69 |   })
70 |   end
71 | )
72 | `;
73 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/library/processes/tracks.lua:
--------------------------------------------------------------------------------
 1 | local utils = require(".utils")
 2 | local json = require("json")
 3 | 
 4 | -- Initialize the LikedTracks table if it doesn't exist
 5 | LikedTracks = LikedTracks or {}
 6 | 
 7 | -- Function to check if the sender is the owner
 8 | local function isOwner(msg)
 9 |   return msg.From == Owner or ao.id
10 | end
11 | 
12 | -- Add a song to the LikedTracks table
13 | Handlers.add(
14 |   "add",
15 |   Handlers.utils.hasMatchingTag("Action", "Add"),
16 |   function (msg)
17 |     if not isOwner(msg) then
18 |       ao.send({
19 |         Target = msg.From,
20 |         Action = 'Add-Error',
21 |         ["Message-Id"] = msg.Id,
22 |         Error = 'Unauthorized: ' .. msg.From .. 'is not authorized to add songs.'
23 |       })
24 |       return
25 |     end
26 | 
27 |     local songTxId = msg.Data
28 |     if not utils.includes(songTxId, LikedTracks) then
29 |       table.insert(LikedTracks, songTxId)
30 |     end
31 |     Handlers.utils.reply("Song added.")(msg)
32 |   end
33 | )
34 | 
35 | -- Remove a song from the LikedTracks table
36 | Handlers.add(
37 |   "remove",
38 |   Handlers.utils.hasMatchingTag("Action", "Remove"),
39 |   function (msg)
40 |     if not isOwner(msg) then
41 |       ao.send({
42 |         Target = msg.From,
43 |         Action = 'Remove-Error',
44 |         ["Message-Id"] = msg.Id,
45 |         Error = 'Unauthorized: ' .. msg.From .. 'is not authorized to remove songs.'
46 |       })
47 |       return
48 |     end
49 | 
50 |     local songTxId = msg.Data
51 |     LikedTracks = utils.filter(
52 |       function (val) return val ~= songTxId end,
53 |       LikedTracks
54 |     )
55 |     Handlers.utils.reply("Song removed.")(msg)
56 |   end
57 | )
58 | 
59 | -- Get the list of liked songs
60 | Handlers.add(
61 |   "get",
62 |   Handlers.utils.hasMatchingTag("Action", "Get"),
63 |   function (msg)
64 |     ao.send({
65 |       Target = msg.From,
66 |       Action = 'View',
67 |       Data = json.encode(LikedTracks)
68 |   })
69 |   end
70 | )


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/profile/getProfile.ts:
--------------------------------------------------------------------------------
 1 | import { gql } from "../helpers/gql";
 2 | import { TransactionEdge } from "arweave-graphql";
 3 | import { GetUserProfileProps, Profile } from "@/types";
 4 | import { gateway } from "@/utils";
 5 | 
 6 | export const getProfile = async ({ address }: GetUserProfileProps) => {
 7 |   if (!address) {
 8 |     throw new Error("No address has been given.");
 9 |   }
10 |   try {
11 |     const res = await gql({
12 |       variables: {
13 |         owners: [address],
14 |         tags: [
15 |           {
16 |             name: "Type",
17 |             values: ["test-profile"],
18 |           },
19 |         ],
20 |       },
21 |     });
22 | 
23 |     const hasProfile = !!res.transactions.edges.length;
24 | 
25 |     const profiles = res.transactions.edges
26 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Name")?.value)
27 |       .map((edge) => setProfileInfo(edge as TransactionEdge));
28 | 
29 |     return {
30 |       profiles,
31 |       hasProfile,
32 |     };
33 |   } catch (error: any) {
34 |     console.error(error);
35 |     throw new Error(error.message);
36 |   }
37 | };
38 | 
39 | const setProfileInfo = (edge: TransactionEdge): Profile => {
40 |   // casting as the filter in query func is/should be ensuring value exists
41 |   const name = edge.node.tags.find((x) => x.name === "Name")?.value as string;
42 | 
43 |   const handle = edge.node.tags.find((x) => x.name === "Handle")?.value;
44 |   const bio = edge.node.tags.find((x) => x.name === "Bio")?.value;
45 | 
46 |   const thumbnailId = edge.node.tags.find((x) => x.name === "Thumbnail")?.value;
47 |   const avatarId = edge.node.tags.find((x) => x.name === "Avatar")?.value;
48 |   const bannerId = edge.node.tags.find((x) => x.name === "Banner")?.value;
49 | 
50 |   const thumbnailSrc = thumbnailId ? gateway() + "/" + thumbnailId : undefined;
51 |   const avatarSrc = avatarId ? gateway() + "/" + avatarId : undefined;
52 |   const bannerSrc = bannerId ? gateway() + "/" + bannerId : undefined;
53 | 
54 |   const txid = edge.node.id;
55 |   const cursor = edge.cursor;
56 |   const owner = edge.node.owner.address;
57 | 
58 |   return {
59 |     txid,
60 |     addr: owner,
61 |     name,
62 |     handle,
63 |     bio,
64 |     thumbnailSrc,
65 |     avatarId,
66 |     bannerId,
67 |     cursor,
68 |   };
69 | };
70 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/profile/setProfile.ts:
--------------------------------------------------------------------------------
 1 | import { Profile, SetProfile } from "@/types";
 2 | import { arweave } from "@/lib/arweave";
 3 | import { getIrys, uploadFile } from "../irys";
 4 | 
 5 | export const setProfile = async ({
 6 |   values,
 7 |   profile,
 8 |   address,
 9 | }: {
10 |   values: SetProfile;
11 |   profile: Profile | undefined;
12 |   address: string;
13 | }) => {
14 |   try {
15 |     let avatarId: string = "";
16 |     let bannerId: string = "";
17 | 
18 |     if (values.avatar && values.avatar.size > 0) {
19 |       const avatarTx = await uploadFile(values.avatar, [
20 |         { name: "Content-Type", value: values.avatar.type },
21 |       ]);
22 | 
23 |       avatarId = avatarTx.id;
24 |     }
25 | 
26 |     if (values.banner && values.banner.size > 0) {
27 |       const bannerTx = await uploadFile(values.banner, [
28 |         { name: "Content-Type", value: values.banner.type },
29 |       ]);
30 | 
31 |       bannerId = bannerTx.id;
32 |     }
33 | 
34 |     const name = values.name || profile?.name || "";
35 |     const handle = values.handle || profile?.handle || "";
36 |     const bio = values.bio || profile?.bio || "";
37 |     const avatar = avatarId || profile?.avatarId || "";
38 |     const banner = bannerId || profile?.bannerId || "";
39 | 
40 |     const profileJSON = JSON.stringify({
41 |       handle,
42 |       uniqueHandle: `${values.handle || profile?.handle || "user"}#${address}`,
43 |       name,
44 |       bio,
45 |       avatar,
46 |       banner,
47 |       updatedAt: Date.now(),
48 |     });
49 | 
50 |     const profileTx = await arweave.createTransaction({
51 |       data: profileJSON,
52 |     });
53 |     profileTx.addTag("Content-Type", "application/json");
54 |     profileTx.addTag("Type", "test-profile");
55 |     profileTx.addTag("Name", name);
56 |     profileTx.addTag("Handle", handle);
57 |     profileTx.addTag("Bio", bio);
58 |     profileTx.addTag("Avatar", avatar);
59 |     profileTx.addTag("Banner", banner);
60 | 
61 |     //temp
62 |     profileTx.addTag("DApp-Name", "arcadia-v2");
63 |     console.log("profileTx", profileTx);
64 | 
65 |     const profileTxResult = await window.arweaveWallet.dispatch(profileTx);
66 | 
67 |     return profileTxResult.id;
68 |   } catch (error) {
69 |     console.error(error);
70 |     throw error;
71 |   }
72 | };
73 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/stamps.ts:
--------------------------------------------------------------------------------
 1 | import Stamps from "@permaweb/stampjs";
 2 | import { WarpFactory } from "warp-contracts";
 3 | import { InjectedArweaveSigner } from "warp-contracts-plugin-signature";
 4 | import Arweave from "arweave";
 5 | import { userStampedTx } from "./userStampedTx";
 6 | 
 7 | export const stamps = async () => {
 8 |   // if using ArConnect you need to make sure the following PERMISSIONS are enabled
 9 |   // * SIGNATURE
10 |   // * ACCESS_PUBLIC_KEY
11 |   // the new signer plugin from warp requires these settings
12 | 
13 |   // Required if you are using Warp v1.4.11 or greater
14 |   const signer = new InjectedArweaveSigner(window.arweaveWallet);
15 | 
16 |   // also you need to make sure you set the address function
17 |   signer.getAddress = window.arweaveWallet.getActiveAddress;
18 | 
19 |   // finally you need to setPublicKey
20 |   await signer.setPublicKey();
21 | 
22 |   // Initialize STAMPS JS, passing a Warp and Arweave instance
23 |   return Stamps.init({
24 |     warp: WarpFactory.forMainnet(),
25 |     arweave: Arweave.init({}),
26 |     wallet: signer,
27 |   });
28 | };
29 | 
30 | export const stamp = async (txid: string) =>
31 |   (await stamps()).stamp(txid, 0, [{ name: "App-Name", value: "Arcadia" }]);
32 | 
33 | export const superStamp = async (
34 |   txid: string,
35 |   qty: number,
36 |   tags: { name: string; value: string }[]
37 | ) => (await stamps()).stamp(txid, qty, tags);
38 | 
39 | export const getStampCount = async (txid: string) => (await stamps()).count(txid);
40 | 
41 | export const getStampCounts = async (txids: string[]) => (await stamps()).counts(txids);
42 | 
43 | export const hasStamped = async (txids: string[]) => (await stamps()).hasStamped(txids);
44 | 
45 | export const hasStampedTx = async (txid: string, address: string) =>
46 |   await userStampedTx(txid, address);
47 | 
48 | export const stampsBalance = async (address: string) => (await stamps()).balance(address);
49 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/track/getAlbumsByOwner.ts:
--------------------------------------------------------------------------------
 1 | import { GetTracksByOwner } from "@/types/query";
 2 | import { gql } from "../helpers/gql";
 3 | import { TransactionEdge } from "arweave-graphql";
 4 | import { GQLQuery, Track } from "@/types";
 5 | import { setAlbumInfo } from "../helpers/setAlbumInfo";
 6 | 
 7 | export const getAlbumsByOwner = async ({ limit = 10, ...props }: GetTracksByOwner) => {
 8 |   const variables: GQLQuery["variables"] = {
 9 |     first: limit,
10 |     owners: [props.owner],
11 |     tags: [
12 |       {
13 |         name: "Content-Type",
14 |         values: ["application/json"],
15 |       },
16 |       {
17 |         name: "Collection-Type",
18 |         values: ["audio"],
19 |       },
20 |     ],
21 |   };
22 | 
23 |   if (props.cursor) {
24 |     variables.after = props.cursor;
25 |   }
26 | 
27 |   try {
28 |     const res = await gql({ variables });
29 |     console.log("albums: ", { res });
30 | 
31 |     const filteredRes = res.transactions.edges
32 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
33 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Thumbnail"))
34 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Artwork"))
35 |       .map((edge) => setAlbumInfo(edge as TransactionEdge));
36 | 
37 |     const data = await Promise.all(filteredRes);
38 |     // bc we are filtering, we need additional check to be sure there is actually more data
39 |     // easiest way is to check whether or not results match the limit, if set (default is 10)
40 |     const maxItems = filteredRes.length === limit;
41 |     const hasNextPage = res.transactions.pageInfo.hasNextPage && maxItems;
42 | 
43 |     return {
44 |       data,
45 |       hasNextPage,
46 |     };
47 |   } catch (error: any) {
48 |     console.error(error);
49 |     throw new Error(error.message);
50 |   }
51 | };
52 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/track/getOwners.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "@/config";
 2 | import { getUCMAsset } from "../getUCMAsset";
 3 | import { TrackAssetOwner } from "@/types";
 4 | 
 5 | export const getOwners = async (txid: string) => {
 6 |   console.log("fetching track owners...");
 7 |   try {
 8 |     const trackAsset = await getUCMAsset(txid);
 9 |     const balances = Object.keys(trackAsset.state.balances).filter(
10 |       // remove UCM as owner
11 |       (address) => address !== appConfig.UCM
12 |     );
13 |     const ownership = Object.values(trackAsset.state.balances) as number[];
14 | 
15 |     const owners: TrackAssetOwner[] = [];
16 | 
17 |     for (let i = 0; i < balances.length; i++) {
18 |       const address = balances[i];
19 |       const amount = ownership[i];
20 | 
21 |       // catch edge case where user with 0% can show up
22 |       if (amount === 0) {
23 |         continue;
24 |       }
25 | 
26 |       owners.push({
27 |         address,
28 |         ownershipAmount: amount,
29 |       });
30 |     }
31 | 
32 |     // Sort the owners array based on ownershipAmount in descending order
33 |     return owners.sort((a, b) => b.ownershipAmount - a.ownershipAmount);
34 |   } catch (error: any) {
35 |     throw new Error(error);
36 |   }
37 | };
38 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/track/getTrack.ts:
--------------------------------------------------------------------------------
 1 | import { GetTrack } from "@/types/query";
 2 | import { gql } from "../helpers/gql";
 3 | import { appConfig } from "@/config";
 4 | import { setTrackInfo } from "../helpers/setTrackInfo";
 5 | import { TransactionEdge } from "arweave-graphql";
 6 | import { Track } from "@/types";
 7 | 
 8 | export const getTrack = async ({ txid }: GetTrack) => {
 9 |   try {
10 |     const res = await gql({
11 |       variables: {
12 |         ids: [txid],
13 |         tags: [
14 |           {
15 |             name: "Content-Type",
16 |             values: appConfig.acceptedFileTypes.streamableAudio,
17 |           },
18 |         ],
19 |       },
20 |     });
21 | 
22 |     const tracks = res.transactions.edges
23 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
24 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Thumbnail"))
25 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Artwork"))
26 |       .map((edge) => setTrackInfo(edge as TransactionEdge));
27 | 
28 |     return tracks;
29 |   } catch (error: any) {
30 |     console.error(error);
31 |     throw new Error(error.message);
32 |   }
33 | };
34 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/track/getTracks.ts:
--------------------------------------------------------------------------------
 1 | import { GetTrack, GetTracks } from "@/types/query";
 2 | import { gql } from "../helpers/gql";
 3 | import { appConfig } from "@/config";
 4 | import { setTrackInfo } from "../helpers/setTrackInfo";
 5 | import { TransactionEdge } from "arweave-graphql";
 6 | import { Track } from "@/types";
 7 | 
 8 | export const getTracks = async (props: GetTracks): Promise<Track[]> => {
 9 |   try {
10 |     const res = await gql({
11 |       variables: {
12 |         ids: props.txids,
13 |         tags: [
14 |           {
15 |             name: "Content-Type",
16 |             values: appConfig.acceptedFileTypes.streamableAudio,
17 |           },
18 |         ],
19 |       },
20 |     });
21 |     const tracks = res.transactions.edges
22 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
23 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Thumbnail"))
24 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Artwork"))
25 |       .map((edge) => setTrackInfo(edge as TransactionEdge));
26 | 
27 |     return tracks;
28 |   } catch (error: any) {
29 |     console.error(error);
30 |     throw new Error(error.message);
31 |   }
32 | };
33 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/track/getTracksByOwner.ts:
--------------------------------------------------------------------------------
 1 | import { GetTracksByOwner } from "@/types/query";
 2 | import { gql } from "../helpers/gql";
 3 | import { appConfig } from "@/config";
 4 | import { setTrackInfo } from "../helpers/setTrackInfo";
 5 | import { TransactionEdge } from "arweave-graphql";
 6 | import { GQLQuery, Track } from "@/types";
 7 | 
 8 | export const getTracksByOwner = async ({ limit = 10, ...props }: GetTracksByOwner) => {
 9 |   const variables: GQLQuery["variables"] = {
10 |     first: limit,
11 |     owners: [props.owner],
12 |     tags: [
13 |       {
14 |         name: "Content-Type",
15 |         values: appConfig.acceptedFileTypes.streamableAudio,
16 |       },
17 |     ],
18 |   };
19 | 
20 |   try {
21 |     const res = await gql({ variables });
22 |     console.log({ res });
23 | 
24 |     const filteredRes = res.transactions.edges
25 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
26 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Thumbnail"))
27 |       .filter((edge) => edge.node.tags.find((x) => x.name === "Artwork"))
28 |       .filter((edge) => {
29 |         // don't show album items
30 |         // will need to revise as we may not always want to filter by this
31 |         const CollectionCode = edge.node.tags.find((x) => x.name === "Collection-Code")?.value;
32 | 
33 |         if (CollectionCode) {
34 |           return false;
35 |         } else {
36 |           return true;
37 |         }
38 |       })
39 |       .map((edge) => setTrackInfo(edge as TransactionEdge));
40 | 
41 |     const data = filteredRes;
42 |     // bc we are filtering, we need additional check to be sure there is actually more data
43 |     // easiest way is to check whether or not results match the limit, if set (default is 10)
44 |     const maxItems = filteredRes.length === limit;
45 |     const hasNextPage = res.transactions.pageInfo.hasNextPage && maxItems;
46 | 
47 |     return {
48 |       data,
49 |       hasNextPage,
50 |     };
51 |   } catch (error: any) {
52 |     console.error(error);
53 |     throw new Error(error.message);
54 |   }
55 | };
56 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/user/follow.ts:
--------------------------------------------------------------------------------
 1 | import { sendMessage } from "../ao";
 2 | 
 3 | interface FollowUser {
 4 |   target: string;
 5 |   sender: string;
 6 | }
 7 | 
 8 | export const followUser = async (props: FollowUser) => {
 9 |   const { target, sender } = props;
10 | 
11 |   try {
12 |     const messageId = await sendMessage({
13 |       // user initializes flow by sending follow action to their own process
14 |       processId: sender,
15 |       action: "Follow",
16 |       data: target,
17 |     });
18 | 
19 |     return messageId;
20 |   } catch (error: any) {
21 |     throw new Error(error);
22 |   }
23 | };
24 | 
25 | export const unfollowUser = async (props: FollowUser) => {
26 |   const { target, sender } = props;
27 | 
28 |   try {
29 |     const messageId = await sendMessage({
30 |       // user initializes flow by sending unfollow action to their own process
31 |       processId: sender,
32 |       action: "Unfollow",
33 |       data: target,
34 |     });
35 | 
36 |     return messageId;
37 |   } catch (error: any) {
38 |     throw new Error(error);
39 |   }
40 | };
41 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/user/getArBalance.ts:
--------------------------------------------------------------------------------
 1 | import BigNumber from "bignumber.js";
 2 | import { arweave } from "../arweave";
 3 | 
 4 | export const getArBalance = async (address: string) => {
 5 |   const winstonBalance = await arweave.wallets.getBalance(address);
 6 |   const arBalance = await arweave.ar.winstonToAr(winstonBalance);
 7 | 
 8 |   return new BigNumber(arBalance);
 9 | };
10 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/user/getUBalance.ts:
--------------------------------------------------------------------------------
 1 | import { appConfig } from "@/config";
 2 | import { UCMAssetProps } from "@/types";
 3 | import BigNumber from "bignumber.js";
 4 | 
 5 | export const getUBalance = async (address: string) => {
 6 |   try {
 7 |     const res = await fetch(`${appConfig.dreU}/contract?id=${appConfig.U}&errorMessages=true`);
 8 | 
 9 |     if (!res.ok) {
10 |       throw new Error(
11 |         `Error occurred getting asset listed status: ${res.statusText} with code ${res.status}`
12 |       );
13 |     }
14 | 
15 |     const data: UCMAssetProps & { state: { divisibility: number } } = await res.json();
16 |     const state = data.state;
17 | 
18 |     if (state.balances.hasOwnProperty(address)) {
19 |       return new BigNumber(state.balances[address] / state.divisibility);
20 |     } else {
21 |       return 0;
22 |     }
23 |   } catch (error) {
24 |     console.error("Error occurred getting U balance", error);
25 |     return 0;
26 |     // throw new Error("Error occurred getting U balance");
27 |   }
28 | };
29 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/lib/userStampedTx.ts:
--------------------------------------------------------------------------------
 1 | import arweaveGql, { SortOrder, Transaction } from "arweave-graphql";
 2 | import { arweave } from "./arweave";
 3 | 
 4 | export const userStampedTx = async (id: string, address: string, gateway?: string) => {
 5 |   try {
 6 |     const res = await arweaveGql(`${gateway || "https://arweave.net"}/graphql`).getTransactions({
 7 |       first: 1,
 8 |       owners: [address],
 9 |       tags: [
10 |         {
11 |           name: "Protocol-Name",
12 |           values: ["Stamp"],
13 |         },
14 |         {
15 |           name: "Data-Source",
16 |           values: [id],
17 |         },
18 |       ],
19 |     });
20 | 
21 |     const data = res.transactions.edges;
22 | 
23 |     // console.log({ data });
24 | 
25 |     const userHasStampedTx = data.length > 0;
26 | 
27 |     return userHasStampedTx;
28 |   } catch (error: any) {
29 |     console.error(error);
30 |     throw new Error("Error occured whilst fetching data: " + error.message);
31 |   }
32 | };
33 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/main.tsx:
--------------------------------------------------------------------------------
 1 | import React from "react";
 2 | import ReactDOM from "react-dom/client";
 3 | import "@radix-ui/themes/styles.css";
 4 | import "@/styles/globals.css";
 5 | import { AudioPlayerProvider } from "@/hooks/useAudioPlayer";
 6 | import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 7 | import { Toaster } from "sonner";
 8 | import { Theme, ThemeOptions, ThemePanel } from "@radix-ui/themes";
 9 | import { ArweaveWalletKit } from "arweave-wallet-kit";
10 | import App from "./App";
11 | import { css, hooks } from "./styles/css";
12 | import { ThemeProvider } from "next-themes";
13 | import { appConfig } from "./config";
14 | 
15 | const queryClient = new QueryClient();
16 | 
17 | ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
18 |   <QueryClientProvider client={queryClient}>
19 |     <AudioPlayerProvider>
20 |       <ThemeProvider attribute="class">
21 |         <Theme
22 |           appearance="inherit"
23 |           radius={(localStorage.getItem("rt-radius") as ThemeOptions["radius"]) || "medium"}
24 |           grayColor={(localStorage.getItem("rt-grayColor") as ThemeOptions["grayColor"]) || "slate"}
25 |           accentColor={
26 |             (localStorage.getItem("rt-accentColor") as ThemeOptions["accentColor"]) || "indigo"
27 |           }
28 |           panelBackground={
29 |             (localStorage.getItem("rt-panelBackground") as ThemeOptions["panelBackground"]) ||
30 |             "solid"
31 |           }
32 |           scaling={(localStorage.getItem("rt-scaling") as ThemeOptions["scaling"]) || "100%"}
33 |         >
34 |           <style dangerouslySetInnerHTML={{ __html: hooks }} />
35 |           <ArweaveWalletKit
36 |             config={{
37 |               permissions: [
38 |                 "ACCESS_ADDRESS",
39 |                 "DISPATCH",
40 |                 "SIGN_TRANSACTION",
41 |                 "ACCESS_PUBLIC_KEY",
42 |                 "SIGNATURE",
43 |               ],
44 |             }}
45 |           >
46 |             <Toaster
47 |               position="bottom-center"
48 |               toastOptions={{
49 |                 style: css({
50 |                   // left: "40%",
51 |                   padding: "var(--space-3)",
52 |                   width: "max-content",
53 |                   borderRadius: "max(var(--radius-2), var(--radius-full))",
54 |                   bottom: appConfig.playerMaxHeight,
55 |                 }),
56 |               }}
57 |             />
58 |             <App />
59 |           </ArweaveWalletKit>
60 |           <ThemePanel defaultOpen={false} />
61 |         </Theme>
62 |       </ThemeProvider>
63 |     </AudioPlayerProvider>
64 |   </QueryClientProvider>
65 | );
66 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/home/index.tsx:
--------------------------------------------------------------------------------
 1 | import { Flex, Grid } from "@radix-ui/themes";
 2 | import { TrackCard } from "@/modules/track/TrackCard";
 3 | // import { TrackItem } from "./TrackItem";
 4 | import { useEffect, useState } from "react";
 5 | // import { getTrack } from "@/lib/track/getTrack";
 6 | import { Track } from "@/types";
 7 | import { useQuery } from "@tanstack/react-query";
 8 | import { getTracks } from "@/lib/track/getTracks";
 9 | 
10 | export const Home = () => {
11 |   const { data: tracks } = useQuery({
12 |     queryKey: [`tracks`],
13 |     refetchOnWindowFocus: false,
14 |     queryFn: () => getTracks({ txids: undefined }),
15 |   });
16 | 
17 |   return (
18 |     <Flex direction="column" gap="5" pb="5">
19 |       <Flex p="5" gap="2" wrap="wrap" asChild justify="between">
20 |         <ul>
21 |           {tracks?.length &&
22 |             tracks.map((track, idx) => (
23 |               <TrackCard key={track.txid} track={track} tracks={tracks} trackIndex={idx} />
24 |             ))}
25 |         </ul>
26 |       </Flex>
27 |       {/* <Grid p="3" gap="2" asChild>
28 |         <ul>
29 |           {tracks?.length &&
30 |             tracks.map((track, idx) => (
31 |               <TrackItem
32 |                 key={track.txid}
33 |                 track={track}
34 |                 tracks={tracks}
35 |                 trackIndex={idx}
36 |               />
37 |             ))}
38 |         </ul>
39 |       </Grid> */}
40 |     </Flex>
41 |   );
42 | };
43 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/layout/AppHeader.tsx:
--------------------------------------------------------------------------------
  1 | import { Box, Button, Flex, Grid, Link, Separator } from "@radix-ui/themes";
  2 | import { css } from "../../styles/css";
  3 | import { useConnection, useActiveAddress } from "arweave-wallet-kit";
  4 | import { Link as HashLink, useLocation } from "react-router-dom";
  5 | import { HeaderDropdown } from "./HeaderDropdown";
  6 | import { styled } from "@stitches/react";
  7 | import AppLogo from "@/assets/icons/AppLogo";
  8 | 
  9 | const StyledList = styled("ul", {
 10 |   display: "flex",
 11 | 
 12 |   "& svg": {
 13 |     fontSize: "var(--font-size-5)",
 14 |   },
 15 | });
 16 | 
 17 | const StyledNavItem = styled(Flex, {
 18 |   alignSelf: "stretch",
 19 |   borderInlineStart: "1px solid var(--gray-4)",
 20 |   height: "100%",
 21 | 
 22 |   "&:hover": {
 23 |     color: "var(--gray-11)",
 24 |   },
 25 | 
 26 |   variants: {
 27 |     active: {
 28 |       true: {
 29 |         backgroundColor: "var(--gray-3)",
 30 |         color: "var(--gray-12)",
 31 |       },
 32 |     },
 33 |   },
 34 | });
 35 | 
 36 | interface NavItemProps {
 37 |   path: string;
 38 |   active: boolean;
 39 |   children: React.ReactNode;
 40 |   // temp
 41 |   isLast?: boolean;
 42 | }
 43 | 
 44 | const NavItem = (props: NavItemProps) => (
 45 |   <li>
 46 |     <Link asChild>
 47 |       <HashLink to={props.path}>
 48 |         <StyledNavItem
 49 |           gap="2"
 50 |           align="center"
 51 |           justify="center"
 52 |           px="3"
 53 |           active={props.active}
 54 |           css={{
 55 |             color: props.active ? "var(--slate-12)" : "var(--slate-11)",
 56 |             borderInlineEnd: props.isLast ? "1px solid var(--gray-4)" : undefined,
 57 |           }}
 58 |         >
 59 |           {props.children}
 60 |         </StyledNavItem>
 61 |       </HashLink>
 62 |     </Link>
 63 |   </li>
 64 | );
 65 | 
 66 | export const AppHeader = () => {
 67 |   const { connected, connect, disconnect } = useConnection();
 68 |   const { pathname } = useLocation();
 69 |   const address = useActiveAddress();
 70 | 
 71 |   return (
 72 |     <Grid
 73 |       columns="1fr 1fr 1fr"
 74 |       align="center"
 75 |       asChild
 76 |       style={css({
 77 |         backgroundColor: "var(--gray-2)",
 78 |         width: "100%",
 79 |         // height: appConfig.headerMaxHeight,
 80 |       })}
 81 |     >
 82 |       <header>
 83 |         <Link
 84 |           m="3"
 85 |           style={css({
 86 |             color: "var(--slate-12)",
 87 |             display: "grid",
 88 |             placeItems: "center",
 89 |             justifySelf: "start",
 90 |           })}
 91 |           asChild
 92 |         >
 93 |           <HashLink to={"/"}>
 94 |             <AppLogo />
 95 |           </HashLink>
 96 |         </Link>
 97 |         <Flex justify="center" gap="3" width="100%" height="100%" asChild>
 98 |           <nav>
 99 |             <StyledList>
100 |               <NavItem path="/" active={pathname === "/"}>
101 |                 Discover
102 |               </NavItem>
103 |               {/* <NavItem path="/search" active={pathname === "/search"}>
104 |                   {pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}
105 |                   Search
106 |                 </NavItem> */}
107 |               {address && (
108 |                 <NavItem path="/library" active={pathname === "/library"} isLast>
109 |                   Library
110 |                 </NavItem>
111 |               )}
112 |             </StyledList>
113 |           </nav>
114 |         </Flex>
115 |         <Box style={{ justifySelf: "end" }}>
116 |           {connected && address ? (
117 |             <HeaderDropdown address={address} />
118 |           ) : (
119 |             // we still check in case of unlikely scenario that we are connected but no active address
120 |             <Button variant="ghost" onClick={connected ? disconnect : connect} color="gray">
121 |               {connected ? "Sign out" : "Sign in"}
122 |             </Button>
123 |           )}
124 |         </Box>
125 |       </header>
126 |     </Grid>
127 |   );
128 | };
129 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/layout/Sidebar.tsx:
--------------------------------------------------------------------------------
  1 | import AppLogo from "@/assets/icons/AppLogo";
  2 | import { css } from "@/styles/css";
  3 | import { Box, Flex, Link, ScrollArea } from "@radix-ui/themes";
  4 | import { GoHome, GoHomeFill } from "react-icons/go";
  5 | import { RiSearchLine, RiSearchFill } from "react-icons/ri";
  6 | import { appConfig } from "@/config";
  7 | import { styled } from "@stitches/react";
  8 | import { Link as HashLink, useLocation } from "react-router-dom";
  9 | import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
 10 | import { useActiveAddress } from "arweave-wallet-kit";
 11 | 
 12 | const StyledList = styled("ul", {
 13 |   "& svg": {
 14 |     fontSize: "var(--font-size-5)",
 15 |   },
 16 | });
 17 | 
 18 | interface NavItemProps {
 19 |   path: string;
 20 |   active: boolean;
 21 |   children: React.ReactNode;
 22 | }
 23 | 
 24 | const NavItem = (props: NavItemProps) => (
 25 |   <li>
 26 |     <Link asChild>
 27 |       <HashLink to={props.path}>
 28 |         <Flex
 29 |           gap="2"
 30 |           align="center"
 31 |           py="2"
 32 |           px="3"
 33 |           style={css({
 34 |             alignSelf: "stretch",
 35 |             color: props.active ? "var(--slate-12)" : "var(--slate-11)",
 36 | 
 37 |             "&:hover": {
 38 |               // backgroundColor: "var(--slate-3)",
 39 |               color: "var(--slate-12)",
 40 |             },
 41 |           })}
 42 |         >
 43 |           {props.children}
 44 |         </Flex>
 45 |       </HashLink>
 46 |     </Link>
 47 |   </li>
 48 | );
 49 | 
 50 | export const Sidebar = () => {
 51 |   const { pathname } = useLocation();
 52 |   const address = useActiveAddress();
 53 | 
 54 |   return (
 55 |     <Box
 56 |       py="3"
 57 |       pr="5"
 58 |       style={css({
 59 |         minWidth: 240,
 60 |         backgroundColor: "var(--side-panel-background)",
 61 |       })}
 62 |     >
 63 |       <ScrollArea
 64 |         scrollbars="vertical"
 65 |         style={css({
 66 |           padding: "var(--space-1)",
 67 |         })}
 68 |       >
 69 |         <Flex
 70 |           style={css({
 71 |             height: "100%",
 72 |           })}
 73 |           direction="column"
 74 |           align="start"
 75 |         >
 76 |           <Link
 77 |             ml="3"
 78 |             style={css({
 79 |               color: "var(--slate-12)",
 80 |               display: "grid",
 81 |               placeItems: "center",
 82 |             })}
 83 |             asChild
 84 |           >
 85 |             <HashLink to={"/"}>
 86 |               <AppLogo />
 87 |             </HashLink>
 88 |           </Link>
 89 | 
 90 |           <Flex direction="column" gap="3" mt="7" asChild>
 91 |             <nav style={css({ width: "100%" })}>
 92 |               <StyledList>
 93 |                 <NavItem path="/" active={pathname === "/"}>
 94 |                   {pathname === "/" ? <GoHomeFill /> : <GoHome />}
 95 |                   Home
 96 |                 </NavItem>
 97 |                 {/* <NavItem path="/search" active={pathname === "/search"}>
 98 |                   {pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}
 99 |                   Search
100 |                 </NavItem> */}
101 |                 {address && (
102 |                   <NavItem path="/library" active={pathname === "/library"}>
103 |                     {pathname === "/library" ? <MdLibraryMusic /> : <MdOutlineLibraryMusic />}
104 |                     Library
105 |                   </NavItem>
106 |                 )}
107 |               </StyledList>
108 |             </nav>
109 |           </Flex>
110 |         </Flex>
111 |       </ScrollArea>
112 |     </Box>
113 |   );
114 | };
115 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/profile/components/Collection.tsx:
--------------------------------------------------------------------------------
 1 | import { useGetUserProfile } from "@/hooks/appData";
 2 | import { getTracks } from "@/lib/track/getTracks";
 3 | import { abbreviateAddress } from "@/utils";
 4 | import { Box, Grid, Text } from "@radix-ui/themes";
 5 | import { useQuery } from "@tanstack/react-query";
 6 | 
 7 | interface CollectionProps {
 8 |   address: string;
 9 | }
10 | 
11 | export const Collection = (props: CollectionProps) => {
12 |   // update to query users collection
13 |   // const { data: tracks } = useQuery({
14 |   //   queryKey: [`tracks`],
15 |   //   refetchOnWindowFocus: false,
16 |   //   queryFn: () => getTracks({ txids: undefined }),
17 |   // });
18 |   const { address } = props;
19 | 
20 |   const { data: profile } = useGetUserProfile({ address });
21 | 
22 |   return (
23 |     <Box mt="3">
24 |       <Grid asChild columns="6" gapX="2" gapY="7" width="auto">
25 |         <ul>
26 |           <Text weight="medium">
27 |             {profile?.Info?.name || abbreviateAddress({ address: props.address })}'s Collection
28 |           </Text>
29 |         </ul>
30 |       </Grid>
31 |     </Box>
32 |   );
33 | };
34 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/profile/components/Likes.tsx:
--------------------------------------------------------------------------------
 1 | import { useGetUserProfile } from "@/hooks/appData";
 2 | import { getTracks } from "@/lib/track/getTracks";
 3 | import { abbreviateAddress } from "@/utils";
 4 | import { Box, Grid, Text } from "@radix-ui/themes";
 5 | import { useQuery } from "@tanstack/react-query";
 6 | 
 7 | interface LikesProps {
 8 |   address: string;
 9 | }
10 | 
11 | export const Likes = (props: LikesProps) => {
12 |   // update to query users releases
13 |   const { data: tracks } = useQuery({
14 |     queryKey: [`tracks`],
15 |     refetchOnWindowFocus: false,
16 |     queryFn: () => getTracks({ txids: undefined }),
17 |   });
18 |   const { address } = props;
19 | 
20 |   const { data: profile } = useGetUserProfile({ address });
21 | 
22 |   return (
23 |     <Box mt="3">
24 |       <Grid asChild columns="6" gapX="2" gapY="7" width="auto">
25 |         <ul>
26 |           <Text weight="medium">
27 |             {profile?.Info?.name || abbreviateAddress({ address: props.address })}'s Likes
28 |           </Text>
29 |         </ul>
30 |       </Grid>
31 |     </Box>
32 |   );
33 | };
34 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/router/index.tsx:
--------------------------------------------------------------------------------
 1 | import { HashRouter, useLocation } from "react-router-dom";
 2 | import { Routes, Route } from "react-router-dom";
 3 | import { AppHeader } from "../layout/AppHeader";
 4 | import { Profile } from "../profile";
 5 | import { Box } from "@/ui/Box";
 6 | import { Track } from "../track";
 7 | import { appConfig } from "@/config";
 8 | import { AudioPlayer } from "../player/AudioPlayer";
 9 | 
10 | export const AppRouter = () => (
11 |   <HashRouter>
12 |     <AppHeader />
13 |     <Box
14 |       css={{
15 |         // backgroundColor: "$green3",
16 |         maxWidth: "100%",
17 |         px: "$5",
18 |         mx: "auto",
19 | 
20 |         "@bp3": {
21 |           px: 0,
22 |           // backgroundColor: "$yellow3",
23 |           // maxWidth: 920,
24 |         },
25 |         "@bp4": {
26 |           // backgroundColor: "$blue3",
27 |           // maxWidth: 1200,
28 |         },
29 |         "@bp5": {
30 |           // backgroundColor: "$red3",
31 |           // maxWidth: 1400,
32 |         },
33 | 
34 |         pb: appConfig.playerMaxHeight + 20,
35 |       }}
36 |     >
37 |       <Routes>
38 |         {/* <Route path={"/"} element={<Discover />} /> */}
39 |         <Route path={"/profile"} element={<Profile />} />
40 |         <Route path={"/track"} element={<Track />} />
41 |         {/* <Route path={"/album"} element={<Album />} /> */}
42 |         {/* <Route path={"/search"} element={<Search />} /> */}
43 |       </Routes>
44 |       <AudioPlayer />
45 |     </Box>
46 |   </HashRouter>
47 | );
48 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/settings/index.tsx:
--------------------------------------------------------------------------------
 1 | import { useActiveAddress } from "arweave-wallet-kit";
 2 | import { useNavigate } from "react-router-dom";
 3 | import { useEffect, useState } from "react";
 4 | import { Heading, TabsContent, TabsList, TabsRoot, TabsTrigger } from "@radix-ui/themes";
 5 | import { BsGear, BsPersonBoundingBox } from "react-icons/bs";
 6 | 
 7 | type CurrentTab = "general" | "profile";
 8 | 
 9 | export const Settings = () => {
10 |   const address = useActiveAddress();
11 |   const navigate = useNavigate();
12 |   const [currentTab, setCurrentTab] = useState<CurrentTab>("general");
13 | 
14 |   useEffect(() => {
15 |     if (!address) {
16 |       navigate("/");
17 |     }
18 |   }, [address]);
19 | 
20 |   return (
21 |     <>
22 |       {address ? (
23 |         <TabsRoot defaultValue="general" onValueChange={(e) => setCurrentTab(e as CurrentTab)}>
24 |           <TabsList>
25 |             <TabsTrigger value="general">General</TabsTrigger>
26 |             <TabsTrigger value="profile">Profile</TabsTrigger>
27 |           </TabsList>
28 | 
29 |           <TabsContent value="general">
30 |             <ul>
31 |               TODO
32 |               <li>preferred gateway</li>
33 |               <li>theme</li>
34 |               <li></li>
35 |             </ul>
36 |           </TabsContent>
37 | 
38 |           <TabsContent value="profile">Edit profile</TabsContent>
39 |         </TabsRoot>
40 |       ) : null}
41 |     </>
42 |   );
43 | };
44 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/track/components/ActionsDropdown.tsx:
--------------------------------------------------------------------------------
 1 | import { DialogOpenProps, Track } from "@/types";
 2 | import {
 3 |   DropdownMenuContent,
 4 |   DropdownMenuItem,
 5 |   DropdownMenuRoot,
 6 |   DropdownMenuTrigger,
 7 | } from "@radix-ui/themes";
 8 | import { styled } from "@stitches/react";
 9 | import { Dispatch, SetStateAction, useRef, useState } from "react";
10 | import { MdLink, MdPlaylistAdd, MdPlaylistPlay, MdShare } from "react-icons/md";
11 | import { toast } from "sonner";
12 | import { ShareDialog } from "./ShareDialog";
13 | import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
14 | 
15 | const StyledDropdownMenuItem = styled(DropdownMenuItem, {
16 |   justifyContent: "start",
17 |   gap: "var(--space-2)",
18 | });
19 | 
20 | interface ActionsDropdownProps {
21 |   track: Track;
22 |   open: boolean;
23 |   setOpen: Dispatch<SetStateAction<boolean>>;
24 |   children: React.ReactNode;
25 | }
26 | 
27 | export const ActionsDropdown = (props: ActionsDropdownProps) => {
28 |   const [showDialog, setShowDialog] = useState<DialogOpenProps>({
29 |     open: false,
30 |   });
31 |   const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null);
32 |   const { copyToClipboard, isCopied } = useCopyToClipboard();
33 | 
34 |   const origin = window.location.origin;
35 | 
36 |   return (
37 |     <DropdownMenuRoot open={props.open} onOpenChange={(open) => props.setOpen(open ? true : false)}>
38 |       <DropdownMenuTrigger ref={dropdownTriggerRef}>{props.children}</DropdownMenuTrigger>
39 |       <DropdownMenuContent data-track-actions-dropdown hidden={showDialog.open}>
40 |         <ShareDialog
41 |           track={props.track}
42 |           open={showDialog.name === "share" && showDialog.open}
43 |           setOpen={setShowDialog}
44 |           triggerRef={dropdownTriggerRef}
45 |         >
46 |           <StyledDropdownMenuItem onSelect={(event) => event.preventDefault()}>
47 |             <MdShare />
48 |             Share
49 |           </StyledDropdownMenuItem>
50 |         </ShareDialog>
51 |         <StyledDropdownMenuItem
52 |           onSelect={async () => {
53 |             await copyToClipboard(`${origin}/track?tx=${props.track.txid}`);
54 |             toast.success("Link copied to clipboard");
55 |           }}
56 |         >
57 |           <MdLink />
58 |           Copy link
59 |         </StyledDropdownMenuItem>
60 |         <StyledDropdownMenuItem>
61 |           <MdPlaylistAdd />
62 |           Add to playlist
63 |         </StyledDropdownMenuItem>
64 |         <StyledDropdownMenuItem>
65 |           <MdPlaylistPlay />
66 |           Add to queue
67 |         </StyledDropdownMenuItem>
68 |       </DropdownMenuContent>
69 |     </DropdownMenuRoot>
70 |   );
71 | };
72 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/modules/track/components/PlayButton.tsx:
--------------------------------------------------------------------------------
 1 | import { styled } from "@stitches/react";
 2 | import { IconButton } from "@/ui/IconButton";
 3 | 
 4 | export const PlayButton = styled(IconButton, {
 5 |   "& svg": {
 6 |     transform: "translateX(1px)",
 7 |   },
 8 | 
 9 |   variants: {
10 |     playing: {
11 |       true: {
12 |         "& svg": {
13 |           transform: "translateX(0px)",
14 |         },
15 |       },
16 |     },
17 |     variant: {
18 |       play: {
19 |         color: "$slate1",
20 |         backgroundColor: "$slate12",
21 |         opacity: 0.9,
22 |         br: 9999,
23 | 
24 |         "&:hover": {
25 |           backgroundColor: "$slateSolidHover",
26 |           opacity: 0.9,
27 |         },
28 | 
29 |         "&:active": {
30 |           transform: "scale(0.95)",
31 |         },
32 |       },
33 |     },
34 |   },
35 | 
36 |   defaultVariants: {
37 |     variant: "play",
38 |   },
39 | });
40 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/styles/colors/alpha.ts:
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
/apps/arcadia/src/styles/colors/blue.ts:
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
/apps/arcadia/src/styles/colors/green.ts:
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
/apps/arcadia/src/styles/colors/red.ts:
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
/apps/arcadia/src/styles/colors/slate.ts:
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
17 |   slate1: "#111113",
18 |   slate2: "#18191B",
19 |   slate3: "#212225",
20 |   slate4: "#272A2D",
21 |   slate5: "#2E3135",
22 |   slate6: "#363A3F",
23 |   slate7: "#43484E",
24 |   slate8: "#5A6169",
25 |   slate9: "#696E77",
26 |   slate10: "#777B84",
27 |   slate11: "#B0B4BA",
28 |   slate12: "#EDEEF0",
29 | };
30 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/styles/colors/violet.ts:
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
/apps/arcadia/src/styles/colors/yellow.ts:
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
/apps/arcadia/src/styles/css.ts:
--------------------------------------------------------------------------------
 1 | import { createHooks } from "@css-hooks/react";
 2 | import { recommended } from "@css-hooks/recommended";
 3 | 
 4 | export const [hooks, css] = createHooks({
 5 |   ...recommended({
 6 |     breakpoints: ["500px", "1000px"],
 7 |     colorSchemes: ["dark", "light"],
 8 |     pseudoClasses: [":hover", ":focus", ":active", ":disabled"],
 9 |   }),
10 |   "&:showOverlay": {
11 |     or: [
12 |       ":hover",
13 |       {
14 |         // need to find a way to target focus visible on button
15 |         and: [":focus-within", ":focus-visible"],
16 |       },
17 |     ],
18 |   },
19 |   "&:notDisabeld": "&:not(:disabled)",
20 | });
21 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/styles/globals.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |     accent-color: auto;
  3 |     --z-hide: -1,
  4 |     --z-auto: 'auto',
  5 |     --z-base: 0,
  6 |     --z-docked: 10,
  7 |     --z-dropdown: 1000,
  8 |     --z-sticky: 1100,
  9 |     --z-banner: 1200,
 10 |     --z-overlay: 1300,
 11 |     --z-modal: 1400,
 12 |     --z-popover: 1500,
 13 |     --z-skipLink: 1600,
 14 |     --z-toast: 1700,
 15 |     --z-tooltip: 1800
 16 |   }
 17 |   
 18 |   /* Custom vars */
 19 |   
 20 |   :root, .light, .light-theme {
 21 |     --side-panel-background: var(--gray-1)
 22 |   }
 23 |   
 24 |   .dark, .dark-theme {
 25 |     --side-panel-background: var(--black-a5)
 26 |   }
 27 |   
 28 |   :root, .light, .light-theme {
 29 |     --audio-player-background: var(--white-a11)
 30 |   }
 31 |   
 32 |   .dark, .dark-theme {
 33 |     --audio-player-background: var(--black-a11)
 34 |   
 35 |   }
 36 |   
 37 |   :root, .light, .light-theme {
 38 |     --track-outline: var(--black-a2)
 39 |   }
 40 |   
 41 |   .dark, .dark-theme {
 42 |     --track-outline: var(--white-a2)
 43 |   }
 44 |   
 45 |   html,
 46 |   body,
 47 |   body > div:first-child,
 48 |   div#__next,
 49 |   div#__next > div {
 50 |     height: 100vh;
 51 |   }
 52 |   
 53 |   body {
 54 |     margin: 0;
 55 |     /* overflow-y: hidden; */
 56 |   }
 57 |   
 58 |   ul {
 59 |     padding: 0;
 60 |     margin: 0;
 61 |     list-style-type: none;
 62 |   }
 63 |   
 64 |   /* Dropdown */
 65 |   
 66 |   .rt-BaseMenuContent {
 67 |     background-color: var(--color-panel);
 68 |     backdrop-filter: blur(8px);
 69 |     -webkit-backdrop-filter: blur(8px);
 70 |     min-width: var(--radix-dropdown-menu-trigger-width);
 71 |   }
 72 |   
 73 |   .rt-BaseMenuItem {
 74 |     padding-left: var(--space-2);
 75 |     padding-right: var(--space-2);
 76 |   }
 77 |   
 78 |   /* Slider */
 79 |   
 80 |   .rt-SliderRoot:where(.rt-r-size-1) {
 81 |     --slider-track-size: calc(var(--space-1) * 0.9)
 82 |   }
 83 |   
 84 |   .rt-SliderRoot:where(.rt-variant-surface) :where(.rt-SliderTrack) {
 85 |     box-shadow: none;
 86 |   }
 87 |   
 88 |   .rt-SliderRoot:where(.rt-variant-surface) :where(.rt-SliderRange) {
 89 |     box-shadow: inset 0 0 0 1px var(--gray-a3);
 90 |   }
 91 |   
 92 |   /* Dialog */
 93 |   
 94 |   .rt-DialogOverlay::after {
 95 |     backdrop-filter: blur(1px);
 96 |   }
 97 |   
 98 |   .rt-DialogContent {
 99 |     background-color: var(--gray-1);
100 |     padding: var(--space-5);
101 |   
102 |       /* Experimental */
103 |       --shadow-2: 0 0 0 1px 
104 |       color-mix(in oklab, var(--gray-a3), var(--gray-3)), 0 2px 1px -1px var(--black-a6), 0 1px 3px 0 var(--black-a8);
105 |           --shadow-3: 0 0 0 1px 
106 |       color-mix(in oklab, var(--gray-a3), var(--gray-3)), 0 4px 12px -4px var(--black-a7);
107 |           --shadow-4: 0 0 0 1px 
108 |       color-mix(in oklab, var(--gray-a3), var(--gray-3));
109 |           --shadow-5: 0 0 0 1px 
110 |       color-mix(in oklab, var(--gray-a3), var(--gray-3));
111 |           --shadow-6: 0 0 0 1px 
112 |       color-mix(in oklab, var(--gray-a3), var(--gray-3)), 0 16px 36px -20px var(--black-a11);
113 |   }
114 |   
115 |   
116 |   .rt-ScrollAreaViewport > div {
117 |     height: 100%
118 |   }


--------------------------------------------------------------------------------
/apps/arcadia/src/types/declaration.d.ts:
--------------------------------------------------------------------------------
1 | interface Window {
2 |   webkitAudioContext: typeof AudioContext;
3 | }
4 | 
5 | declare module "warp-contracts-plugin-signature";
6 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/types/query.ts:
--------------------------------------------------------------------------------
 1 | import { GetTransactionsQueryVariables } from "arweave-graphql";
 2 | 
 3 | export interface GQLQuery {
 4 |   variables: GetTransactionsQueryVariables;
 5 | }
 6 | 
 7 | export interface GetTrack {
 8 |   txid: string;
 9 | }
10 | 
11 | export interface GetTracks {
12 |   txids?: string[];
13 |   cursor?: string;
14 |   limit?: number;
15 | }
16 | 
17 | export interface GetTracksByOwner {
18 |   owner: string;
19 |   cursor?: string;
20 |   limit?: number;
21 | }
22 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Accordion.tsx:
--------------------------------------------------------------------------------
  1 | import { keyframes, styled } from "../stitches.config";
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
 32 |   boxShadow: "0 0 0 1px $colors$neutralInvertedA6",
 33 |   backgroundColor: "$neutralInvertedA1",
 34 |   br: "$2",
 35 | 
 36 |   "&:focus-within": {
 37 |     "&:focus-visible": {
 38 |       position: "relative",
 39 |       zIndex: 1,
 40 |       boxShadow: "0 0 0 2px $colors$focus",
 41 |     },
 42 |   },
 43 | });
 44 | 
 45 | const StyledHeader = styled(AccordionPrimitive.Header, {
 46 |   all: "unset",
 47 |   display: "flex",
 48 | });
 49 | 
 50 | const StyledTrigger = styled(AccordionPrimitive.Trigger, {
 51 |   all: "unset",
 52 |   userSelect: "none",
 53 |   display: "flex",
 54 |   alignItems: "center",
 55 |   gap: "$2",
 56 |   p: "$3",
 57 |   flex: 1,
 58 |   fontSize: "$3",
 59 |   lineHeight: 1,
 60 | 
 61 |   "&:hover": {
 62 |     backgroundColor: "$neutralInvertedA3",
 63 |     color: "$slate12",
 64 | 
 65 |     "& svg": {
 66 |       color: "$slate12",
 67 |     },
 68 |   },
 69 | 
 70 |   "[data-state=open] &": {
 71 |     color: "$slate12",
 72 |     backgroundColor: "$neutralInvertedA4",
 73 |   },
 74 | });
 75 | 
 76 | const StyledIcon = styled("span", {
 77 |   fontSize: "$5",
 78 |   display: "flex",
 79 |   placeItems: "center",
 80 |   color: "$slate11",
 81 |   transition: "transform 300ms ease",
 82 |   "[data-state=open] &": { transform: "rotate(90deg)", color: "$slate12" },
 83 | });
 84 | 
 85 | export const AccordionTrigger = forwardRef<HTMLButtonElement, ComponentProps<typeof StyledTrigger>>(
 86 |   ({ children, ...props }, forwardedRef) => (
 87 |     <StyledHeader>
 88 |       <StyledTrigger {...props} ref={forwardedRef}>
 89 |         <StyledIcon>
 90 |           <RxTriangleRight aria-hidden />
 91 |         </StyledIcon>
 92 |         {children}
 93 |       </StyledTrigger>
 94 |     </StyledHeader>
 95 |   )
 96 | );
 97 | 
 98 | const StyledContentWrapper = styled("div", {
 99 |   p: "$3",
100 | });
101 | 
102 | const StyledContent = styled(AccordionPrimitive.Content, {
103 |   overflow: "hidden",
104 |   color: "$slate12",
105 | 
106 |   '&[data-state="open"]': {
107 |     animation: `${slideDown} 300ms cubic-bezier(.27,.15,.26,1)`,
108 | 
109 |     [`& ${StyledContentWrapper}`]: {
110 |       animation: `${fadeIn} 600ms cubic-bezier(.27,.15,.26,1)`,
111 |     },
112 |   },
113 |   '&[data-state="closed"]': {
114 |     animation: `${slideUp} 200ms cubic-bezier(.27,.15,.26,1)`,
115 | 
116 |     [`& ${StyledContentWrapper}`]: {
117 |       animation: `${fadeOut} 200ms cubic-bezier(.27,.15,.26,1)`,
118 |     },
119 |   },
120 | });
121 | 
122 | export const AccordionContent = forwardRef<HTMLDivElement, ComponentProps<typeof StyledContent>>(
123 |   ({ children, ...props }, forwardedRef) => (
124 |     <StyledContent {...props} ref={forwardedRef}>
125 |       {/* <Box css={{ height: 1, backgroundColor: "$slate5" }} /> */}
126 |       <StyledContentWrapper>{children}</StyledContentWrapper>
127 |     </StyledContent>
128 |   )
129 | );
130 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/AlertDialog.tsx:
--------------------------------------------------------------------------------
 1 | import { ComponentProps, keyframes, styled } from "../stitches.config";
 2 | import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
 3 | import React, { forwardRef } from "react";
 4 | 
 5 | const overlayShow = keyframes({
 6 |   "0%": { opacity: 0 },
 7 |   "100%": { opacity: 1 },
 8 | });
 9 | 
10 | const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
11 |   zIndex: "$overlay",
12 |   backgroundColor: "rgba(8, 8, 8, 0.75)",
13 |   backdropFilter: "blur(1px)",
14 |   position: "fixed",
15 |   inset: 0,
16 | 
17 |   "@media (prefers-reduced-motion: no-preference)": {
18 |     animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
19 |   },
20 | });
21 | 
22 | const contentShow = keyframes({
23 |   "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
24 |   "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
25 | });
26 | 
27 | const StyledDialogContent = styled(AlertDialogPrimitive.Content, {
28 |   br: "$3",
29 |   backgroundColor: "$slate1",
30 |   boxShadow: "0 0 0 1px $colors$slate3",
31 |   position: "fixed",
32 |   zIndex: "$modal",
33 |   top: 0,
34 |   bottom: 0,
35 |   right: 0,
36 |   left: 0,
37 |   mx: "auto",
38 |   my: "auto",
39 |   width: "100%",
40 |   maxWidth: 550,
41 |   maxHeight: "max-content",
42 |   overflow: "scroll",
43 |   "&:focus": { outline: "none" },
44 |   p: "$5",
45 | 
46 |   "@bp3": {
47 |     maxHeight: "85vh",
48 |     top: "50%",
49 |     left: "50%",
50 |     right: "auto",
51 |     bottom: "auto",
52 |     transform: "translate(-50%, -50%)",
53 | 
54 |     "@media (prefers-reduced-motion: no-preference)": {
55 |       animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
56 |     },
57 |   },
58 | });
59 | 
60 | export type DialogContentProps = ComponentProps<typeof StyledDialogContent> &
61 |   AlertDialogPrimitive.AlertDialogPortalProps;
62 | 
63 | export const AlertDialogContent = forwardRef<
64 |   HTMLDivElement,
65 |   DialogContentProps
66 | >(({ children, forceMount, container, ...props }, ref) => {
67 |   return (
68 |     <AlertDialogPrimitive.Portal forceMount={forceMount} container={container}>
69 |       <AlertDialogOverlay />
70 |       <StyledDialogContent ref={ref} {...props}>
71 |         {children}
72 |       </StyledDialogContent>
73 |     </AlertDialogPrimitive.Portal>
74 |   );
75 | });
76 | 
77 | export const AlertDialog = AlertDialogPrimitive.Root;
78 | export const AlertDialogOverlay = StyledOverlay;
79 | export const AlertDialogPortal = AlertDialogPrimitive.Portal;
80 | export const AlertDialogTrigger = styled(AlertDialogPrimitive.Trigger);
81 | export const AlertDialogTitle = styled(AlertDialogPrimitive.Title);
82 | export const AlertDialogDescription = styled(AlertDialogPrimitive.Description);
83 | export const AlertDialogCancel = styled(AlertDialogPrimitive.Cancel);
84 | export const AlertDialogAction = styled(AlertDialogPrimitive.Action);
85 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Avatar.ts:
--------------------------------------------------------------------------------
  1 | import { ComponentProps, styled } from "../stitches.config";
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
 12 |   userSelect: "none",
 13 | 
 14 |   "& span": {
 15 |     display: "inline-flex",
 16 |     alignItems: "center",
 17 |     justifyContent: "center",
 18 |     verticalAlign: "middle",
 19 |     backgroundColor: "$neutralInvertedA3",
 20 |     color: "$neutralInvertedA11",
 21 |   },
 22 | 
 23 |   variants: {
 24 |     size: {
 25 |       1: {
 26 |         width: "$6",
 27 |         height: "$6",
 28 |         '& span[data-avatar="fallback"]': {
 29 |           fontSize: "$1",
 30 |           lineHeight: "$1",
 31 |         },
 32 |       },
 33 |       2: {
 34 |         width: "$7",
 35 |         height: "$7",
 36 |         '& span[data-avatar="fallback"]': {
 37 |           fontSize: "$1",
 38 |           lineHeight: "$1",
 39 |         },
 40 |       },
 41 |       3: {
 42 |         width: "$8",
 43 |         height: "$8",
 44 |         '& span[data-avatar="fallback"]': {
 45 |           fontSize: "$2",
 46 |           lineHeight: "$2",
 47 |         },
 48 |       },
 49 |       4: {
 50 |         width: "$10",
 51 |         height: "$10",
 52 |         '& span[data-avatar="fallback"]': {
 53 |           fontSize: "$2",
 54 |           lineHeight: "$2",
 55 |         },
 56 |       },
 57 |       5: {
 58 |         width: "$16",
 59 |         height: "$16",
 60 |         '& span[data-avatar="fallback"]': {
 61 |           fontSize: "$5",
 62 |           lineHeight: "$5",
 63 |         },
 64 |       },
 65 |       6: {
 66 |         width: "$20",
 67 |         height: "$20",
 68 |         '& span[data-avatar="fallback"]': {
 69 |           fontSize: "$6",
 70 |           lineHeight: "$6",
 71 |         },
 72 |       },
 73 |       7: {
 74 |         width: 96,
 75 |         height: 96,
 76 |         '& span[data-avatar="fallback"]': {
 77 |           fontSize: "$7",
 78 |           lineHeight: "$7",
 79 |         },
 80 |       },
 81 |       8: {
 82 |         width: 120,
 83 |         height: 120,
 84 |         '& span[data-avatar="fallback"]': {
 85 |           fontSize: "$7",
 86 |           lineHeight: "$7",
 87 |         },
 88 |       },
 89 |     },
 90 |     rounded: {
 91 |       true: {
 92 |         br: "$round",
 93 |       },
 94 |     },
 95 |   },
 96 | 
 97 |   defaultVariants: {
 98 |     size: "4",
 99 |   },
100 | });
101 | 
102 | export const AvatarImage = styled(AvatarPrimitive.Image, {
103 |   width: "100%",
104 |   height: "100%",
105 |   objectFit: "cover",
106 |   borderRadius: "inherit",
107 | });
108 | 
109 | export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
110 |   userSelect: "none",
111 |   width: "100%",
112 |   height: "100%",
113 |   fontFamily: "inherit",
114 | });
115 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Box.ts:
--------------------------------------------------------------------------------
1 | import { styled } from "../stitches.config";
2 | 
3 | export const Box = styled("div");
4 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Dialog.tsx:
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
 11 |   zIndex: "$overlay",
 12 |   backgroundColor: "rgba(8, 8, 8, 0.75)",
 13 |   backdropFilter: "blur(1px)",
 14 |   position: "fixed",
 15 |   inset: 0,
 16 | 
 17 |   "@media (prefers-reduced-motion: no-preference)": {
 18 |     animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
 19 |   },
 20 | });
 21 | 
 22 | const contentShow = keyframes({
 23 |   "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
 24 |   "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
 25 | });
 26 | 
 27 | const StyledDialogContent = styled(DialogPrimitive.Content, {
 28 |   br: "$3",
 29 |   backgroundColor: "$slate1",
 30 |   boxShadow: "0 0 0 1px $colors$slate3",
 31 |   position: "fixed",
 32 |   zIndex: "$modal",
 33 |   top: 0,
 34 |   bottom: 0,
 35 |   right: 0,
 36 |   left: 0,
 37 |   mx: "auto",
 38 |   my: "auto",
 39 |   width: "100%",
 40 |   maxWidth: 550,
 41 |   maxHeight: "max-content",
 42 |   overflow: "scroll",
 43 |   "&:focus": { outline: "none" },
 44 |   p: "$5",
 45 | 
 46 |   "@bp3": {
 47 |     maxHeight: "85vh",
 48 |     top: "50%",
 49 |     left: "50%",
 50 |     right: "auto",
 51 |     bottom: "auto",
 52 |     transform: "translate(-50%, -50%)",
 53 | 
 54 |     "@media (prefers-reduced-motion: no-preference)": {
 55 |       animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
 56 |     },
 57 |   },
 58 | });
 59 | 
 60 | export type DialogContentProps = ComponentProps<typeof StyledDialogContent> &
 61 |   DialogPrimitive.PortalProps;
 62 | 
 63 | export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
 64 |   ({ children, forceMount, container, ...props }, ref) => {
 65 |     return (
 66 |       <DialogPrimitive.Portal forceMount={forceMount} container={container}>
 67 |         <DialogOverlay />
 68 |         <StyledDialogContent ref={ref} {...props}>
 69 |           {children}
 70 |         </StyledDialogContent>
 71 |       </DialogPrimitive.Portal>
 72 |     );
 73 |   }
 74 | );
 75 | 
 76 | const StyledCloseButton = styled(DialogPrimitive.Close, {
 77 |   variants: {
 78 |     pos: {
 79 |       absolute: {
 80 |         position: "absolute",
 81 | 
 82 |         top: "$3",
 83 |         right: "$3",
 84 |       },
 85 |       relative: {
 86 |         position: "relative",
 87 | 
 88 |         top: 0,
 89 |         right: 0,
 90 |       },
 91 |     },
 92 |   },
 93 | 
 94 |   defaultVariants: {
 95 |     pos: "absolute",
 96 |   },
 97 | });
 98 | 
 99 | export const Dialog = DialogPrimitive.Root;
100 | export const DialogOverlay = StyledOverlay;
101 | export const DialogPortal = DialogPrimitive.Portal;
102 | export const DialogTrigger = styled(DialogPrimitive.Trigger);
103 | export const DialogTitle = styled(DialogPrimitive.Title);
104 | export const DialogDescription = styled(DialogPrimitive.Description);
105 | export const DialogClose = StyledCloseButton;
106 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Dropdown.ts:
--------------------------------------------------------------------------------
  1 | import { CSS, keyframes, styled } from "../stitches.config";
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
 24 | const contentStyles: CSS = {
 25 |   zIndex: "$dropdown",
 26 |   minWidth: 220,
 27 |   backgroundColor: "$slate2",
 28 |   borderRadius: "$1",
 29 |   padding: 5,
 30 |   boxShadow: "$4",
 31 |   border: "1px solid $colors$slate6",
 32 |   animationDuration: "400ms",
 33 |   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
 34 |   willChange: "transform, opacity",
 35 |   '&[data-state="open"]': {
 36 |     '&[data-side="top"]': { animationName: slideDownAndFade },
 37 |     '&[data-side="right"]': { animationName: slideLeftAndFade },
 38 |     '&[data-side="bottom"]': { animationName: slideUpAndFade },
 39 |     '&[data-side="left"]': { animationName: slideRightAndFade },
 40 |   },
 41 | };
 42 | 
 43 | export const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
 44 | export const DropdownMenuSubContent = styled(DropdownMenu.SubContent, contentStyles);
 45 | 
 46 | export const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: "white" });
 47 | 
 48 | export const itemStyles: CSS = {
 49 |   all: "unset",
 50 |   fontSize: 13,
 51 |   lineHeight: 1,
 52 |   color: "$slate11",
 53 |   borderRadius: 3,
 54 |   display: "flex",
 55 |   alignItems: "center",
 56 |   height: 25,
 57 |   padding: "0 5px",
 58 |   position: "relative",
 59 |   paddingLeft: 25,
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
 74 | export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);
 75 | export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, itemStyles);
 76 | export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
 77 |   '&[data-state="open"]': {
 78 |     backgroundColor: "$slate4",
 79 |     color: "$slate11",
 80 |   },
 81 |   ...itemStyles,
 82 | });
 83 | 
 84 | export const DropdownMenuLabel = styled(DropdownMenu.Label, {
 85 |   paddingLeft: 25,
 86 |   fontSize: 12,
 87 |   lineHeight: "25px",
 88 |   color: "$slate11",
 89 | });
 90 | 
 91 | export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
 92 |   height: 1,
 93 |   backgroundColor: "$slate6",
 94 |   margin: 5,
 95 | });
 96 | 
 97 | export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
 98 |   position: "absolute",
 99 |   left: 0,
100 |   width: 25,
101 |   display: "inline-flex",
102 |   alignItems: "center",
103 |   justifyContent: "center",
104 | });
105 | 
106 | export const RightSlot = styled("div", {
107 |   marginLeft: "auto",
108 |   paddingLeft: 20,
109 |   color: "$slate11",
110 |   "[data-highlighted] > &": { color: "white" },
111 |   "[data-disabled] &": { color: "$slate8" },
112 | });
113 | 
114 | export const DropdownMenuRoot = styled(DropdownMenu.Root);
115 | export const DropdownMenuSubRoot = styled(DropdownMenu.Sub);
116 | export const DropdownMenuPortal = styled(DropdownMenu.Portal);
117 | export const DropdownMenuTrigger = styled(DropdownMenu.Trigger);
118 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Flex.ts:
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
/apps/arcadia/src/ui/Form.tsx:
--------------------------------------------------------------------------------
 1 | import { CSS, styled } from "../stitches.config";
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
15 | export const FormHelperError = ({ children, css }: { children: React.ReactNode; css?: CSS }) => (
16 |   <FormHelperErrorText css={css} role="alert" aria-live="polite">
17 |     {children}
18 |   </FormHelperErrorText>
19 | );
20 | 
21 | export const FormHelperText = styled(Typography, {
22 |   fontSize: "$1",
23 |   lineHeight: "$2",
24 |   m: 0,
25 |   mt: "$1",
26 |   position: "absolute",
27 |   bottom: 0,
28 | 
29 |   defaultVariants: {
30 |     size: "1",
31 |   },
32 | });
33 | 
34 | export const FormRow = styled(Flex, {
35 |   gap: "$2",
36 |   pb: "$7",
37 |   position: "relative",
38 | 
39 |   defaultVariants: {
40 |     direction: "column",
41 |   },
42 | 
43 |   "& span": {
44 |     color: "$slate12",
45 |   },
46 | });
47 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/HoverCard.tsx:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "../stitches.config";
 2 | import * as HoverCard from "@radix-ui/react-hover-card";
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
24 | export const HoverCardTrigger = styled(HoverCard.Trigger);
25 | export const HoverCardContent = styled(HoverCard.Content, {
26 |   backgroundColor: "$slate2",
27 |   boxShadow: "$5",
28 |   minWidth: 280,
29 |   p: "$5",
30 |   br: "$2",
31 |   animationDuration: "400ms",
32 |   animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
33 |   willChange: "transform, opacity",
34 |   '&[data-state="open"]': {
35 |     '&[data-side="top"]': { animationName: slideDownAndFade },
36 |     '&[data-side="right"]': { animationName: slideLeftAndFade },
37 |     '&[data-side="bottom"]': { animationName: slideUpAndFade },
38 |     '&[data-side="left"]': { animationName: slideRightAndFade },
39 |   },
40 | });
41 | 
42 | export const HoverCardPortal = styled(HoverCard.Portal);
43 | export const HoverCardRoot = styled(HoverCard.Root);
44 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/IconButton.ts:
--------------------------------------------------------------------------------
  1 | import { styled, ComponentProps } from "../stitches.config";
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
 28 |     boxShadow: "0 0 0 2px $colors$focus",
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
 83 |       solid: {
 84 |         backgroundColor: "$slate12",
 85 |         color: "$slate1",
 86 | 
 87 |         "&:hover": {
 88 |           backgroundColor: "$slateSolidHover",
 89 |         },
 90 | 
 91 |         "&:active": {
 92 |           backgroundColor: "$slateSolidHover",
 93 |         },
 94 | 
 95 |         "&:focus-visible": {
 96 |           boxShadow: "0 0 0 2px $colors$focus",
 97 |         },
 98 |       },
 99 |       ghost: {
100 |         color: "$slate11",
101 |         backgroundColor: "transparent",
102 | 
103 |         "&:hover": {
104 |           backgroundColor: "$slate4",
105 |         },
106 | 
107 |         "&:active": {
108 |           backgroundColor: "$slate5",
109 |         },
110 |       },
111 |       transparent: {
112 |         backgroundColor: "transparent",
113 |         color: "$slate11",
114 | 
115 |         "&:hover": {
116 |           color: "$slate12",
117 |         },
118 |       },
119 |       translucent: {
120 |         backgroundColor: "$whiteA3",
121 |         color: "$whiteA11",
122 | 
123 |         "&:hover": {
124 |           backgroundColor: "$whiteA4",
125 |           color: "$whiteA12",
126 |         },
127 | 
128 |         "&:active": {
129 |           backgroundColor: "$whiteA5",
130 |         },
131 |       },
132 |     },
133 | 
134 |     border: {
135 |       true: {},
136 |     },
137 |     rounded: {
138 |       true: {
139 |         br: "$round",
140 |       },
141 |     },
142 |   },
143 |   compoundVariants: [
144 |     {
145 |       variant: "subtle",
146 |       border: true,
147 |       css: {
148 |         backgroundColor: "$bg",
149 |         boxShadow: "inset 0 0 0 1px $border",
150 |         "&:hover": {
151 |           backgroundColor: "$bgHover",
152 |           boxShadow: "inset 0 0 0 1px $borderHover",
153 |         },
154 |         "&:active": {
155 |           backgroundColor: "$bgActive",
156 |           boxShadow: "inset 0 0 0 1px $borderActive",
157 |         },
158 |       },
159 |     },
160 |     {
161 |       variant: "transparent",
162 |       size: "1",
163 |       css: {
164 |         width: "$4",
165 |         height: "$4",
166 |       },
167 |     },
168 |     {
169 |       variant: "transparent",
170 |       size: "2",
171 |       css: {
172 |         width: "$6",
173 |         height: "$6",
174 |       },
175 |     },
176 |     {
177 |       variant: "transparent",
178 |       size: "3",
179 |       css: {
180 |         width: "$8",
181 |         height: "$8",
182 |       },
183 |     },
184 |   ],
185 | 
186 |   defaultVariants: {
187 |     size: "2",
188 |     variant: "subtle",
189 |   },
190 | });
191 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Image.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "../stitches.config";
 2 | 
 3 | export const Image = styled("img", {
 4 |   userSelect: "none",
 5 |   variants: {
 6 |     size: {
 7 |       1: {
 8 |         width: 16,
 9 |         height: 16,
10 |       },
11 |       2: {
12 |         width: 20,
13 |         height: 20,
14 |       },
15 |       3: {
16 |         width: 28,
17 |         height: 28,
18 |       },
19 |     },
20 |     fit: {
21 |       cover: {
22 |         objectFit: "cover",
23 |       },
24 |       contain: {
25 |         objectFit: "contain",
26 |       },
27 |     },
28 |   },
29 | 
30 |   defaultVariants: {
31 |     fit: "cover",
32 |   },
33 | });
34 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Loader.ts:
--------------------------------------------------------------------------------
 1 | import { keyframes, styled } from "../stitches.config";
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
/apps/arcadia/src/ui/Skeleton.ts:
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
/apps/arcadia/src/ui/Slider.ts:
--------------------------------------------------------------------------------
 1 | import * as Slider from "@radix-ui/react-slider";
 2 | import { styled } from "../stitches.config";
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
15 |   backgroundColor: "$neutralInvertedA7",
16 |   position: "relative",
17 |   flexGrow: 1,
18 |   borderRadius: "9999px",
19 |   height: 3,
20 | });
21 | 
22 | export const SliderRange = styled(Slider.Range, {
23 |   position: "absolute",
24 |   backgroundColor: "$neutralInvertedA12",
25 |   borderRadius: "9999px",
26 |   height: "100%",
27 | });
28 | 
29 | export const SliderThumb = styled(Slider.Thumb, {
30 |   display: "block",
31 |   width: 10,
32 |   height: 10,
33 |   backgroundColor: "$neutralInvertedA12",
34 |   boxShadow: `0 2px 10px $colors$neutralInvertedA3`,
35 |   borderRadius: 10,
36 |   "&:focus": {
37 |     outline: "none",
38 |     boxShadow: `0 0 0 3px $colors$neutralInvertedA8`,
39 |   },
40 | });
41 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Tabs.ts:
--------------------------------------------------------------------------------
 1 | import { styled } from "../stitches.config";
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
13 |   userSelect: "none",
14 |   color: "$slate9",
15 | 
16 |   "&:hover": {
17 |     color: "$slate10",
18 |   },
19 | 
20 |   "&:disabled": {
21 |     opacity: 0.5,
22 |     pointerEvents: "none",
23 |   },
24 | 
25 |   '&[data-state="active"]': {
26 |     color: "$slate12",
27 |     boxShadow: "0 1px 0 0 $colors$slate12",
28 |     fontWeight: 500,
29 |   },
30 | 
31 |   variants: {
32 |     size: {
33 |       1: {
34 |         fontSize: "$2",
35 |         px: "$5",
36 |         py: "$2",
37 |       },
38 |       2: {
39 |         fontSize: "$3",
40 |         px: "$5",
41 |         py: "$2",
42 |       },
43 |     },
44 |   },
45 | 
46 |   defaultVariants: {
47 |     size: "1",
48 |   },
49 | });
50 | 
51 | export const TabsContent = styled(TabsPrimitive.Content);
52 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/TextField.ts:
--------------------------------------------------------------------------------
  1 | import { styled } from "../stitches.config";
  2 | 
  3 | export const TextField = styled("input", {
  4 |   "&[type]": {
  5 |     appearance: "none",
  6 |     // reset
  7 |     borderWidth: "0",
  8 |     boxSizing: "border-box",
  9 |     fontFamily: "inherit",
 10 |     margin: "0",
 11 |     outline: "none",
 12 |     padding: "0",
 13 |     width: "100%",
 14 |     WebkitTapHighlightColor: "rgba(0,0,0,0)",
 15 |     "&::before": {
 16 |       boxSizing: "border-box",
 17 |     },
 18 |     "&::after": {
 19 |       boxSizing: "border-box",
 20 |     },
 21 | 
 22 |     // custom
 23 |     backgroundColor: "transparent",
 24 |     minWidth: 200,
 25 |     br: "$1",
 26 |     px: "$4",
 27 |     color: "$slate12",
 28 | 
 29 |     "&::placeholder": {
 30 |       color: "$slate9",
 31 |     },
 32 | 
 33 |     "&:focus": {
 34 |       boxShadow: "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
 35 |     },
 36 | 
 37 |     "&:disabled": {
 38 |       pointerEvents: "none",
 39 |       cursor: "not-allowed",
 40 |       opacity: "50%",
 41 |     },
 42 | 
 43 |     '&[aria-disabled="true"]': {
 44 |       pointerEvents: "none",
 45 |       cursor: "not-allowed",
 46 |       opacity: "50%",
 47 |     },
 48 | 
 49 |     "&:read-only": {
 50 |       backgroundColor: "$slate3",
 51 |       boxShadow: "inset 0 0 0 1px $colors$slate7",
 52 |     },
 53 |   },
 54 | 
 55 |   variants: {
 56 |     size: {
 57 |       1: {
 58 |         fontSize: "$1",
 59 |         lineHeight: "$sizes$7",
 60 |       },
 61 |       2: {
 62 |         fontSize: "$3",
 63 |         lineHeight: "$sizes$9",
 64 |       },
 65 |       3: {
 66 |         fontSize: "$3",
 67 |         lineHeight: "$sizes$11",
 68 |       },
 69 |     },
 70 |     variant: {
 71 |       subtle: {
 72 |         "&[type]": {
 73 |           backgroundColor: "$slate3",
 74 |         },
 75 |       },
 76 |       outline: {
 77 |         boxShadow: "inset 0 0 0 1px $colors$slate7",
 78 |         "&:hover": {
 79 |           boxShadow: "inset 0 0 0 1px $colors$slate8",
 80 |         },
 81 |       },
 82 |       ghost: {
 83 |         "&:hover": {
 84 |           boxShadow: "inset 0 0 0 1px $colors$slate8",
 85 |         },
 86 |       },
 87 |       flushed: {
 88 |         "&[type]": {
 89 |           boxShadow: "none",
 90 |           br: 0,
 91 |           borderBottom: "1px solid $colors$slate7",
 92 | 
 93 |           "&:hover": {
 94 |             borderBottom: "1px solid $colors$slate8",
 95 |           },
 96 | 
 97 |           "&:focus": {
 98 |             boxShadow: "none",
 99 |             borderBottom: "2px solid $colors$focus",
100 |           },
101 |         },
102 |       },
103 |     },
104 |     state: {
105 |       valid: {
106 |         "&[type]": {
107 |           boxShadow: "inset 0 0 0 1px $colors$green7",
108 | 
109 |           "&:focus": {
110 |             boxShadow: "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
111 |           },
112 |         },
113 |       },
114 |       invalid: {
115 |         "&[type]": {
116 |           boxShadow: "inset 0 0 0 1px $colors$red7",
117 | 
118 |           "&:focus": {
119 |             boxShadow: "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
120 |           },
121 |         },
122 |       },
123 |     },
124 |     border: {
125 |       true: {},
126 |     },
127 |   },
128 | 
129 |   compoundVariants: [
130 |     {
131 |       variant: "flushed",
132 |       state: "valid",
133 |       css: {
134 |         boxShadow: "none",
135 |         borderBottom: "1px solid $colors$green8",
136 | 
137 |         "&:focus": {
138 |           boxShadow: "none",
139 |           borderBottom: "2px solid $colors$green8",
140 |         },
141 |       },
142 |     },
143 |     {
144 |       variant: "flushed",
145 |       state: "invalid",
146 |       css: {
147 |         boxShadow: "none",
148 |         borderBottom: "1px solid $colors$red8",
149 | 
150 |         "&:focus": {
151 |           boxShadow: "none",
152 |           borderBottom: "2px solid $colors$red8",
153 |         },
154 |       },
155 |     },
156 |     {
157 |       variant: "subtle",
158 |       border: true,
159 |       css: {
160 |         boxShadow: "inset 0 0 0 1px $colors$slate7",
161 |         "&:hover": {
162 |           boxShadow: "inset 0 0 0 1px $colors$slate8",
163 |         },
164 |       },
165 |     },
166 |   ],
167 | 
168 |   defaultVariants: {
169 |     size: "2",
170 |     variant: "subtle",
171 |   },
172 | });
173 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Textarea.ts:
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
 11 |   width: "100%",
 12 |   backgroundColor: "transparent",
 13 |   WebkitTapHighlightColor: "rgba(0,0,0,0)",
 14 |   "&::before": {
 15 |     boxSizing: "border-box",
 16 |   },
 17 |   "&::after": {
 18 |     boxSizing: "border-box",
 19 |   },
 20 | 
 21 |   //custom
 22 |   px: "$2",
 23 |   br: "$3",
 24 |   color: "$slate12",
 25 |   boxShadow: "0 0 0 1px $colors$slate7",
 26 | 
 27 |   "&::placeholder": {
 28 |     color: "$slate9",
 29 |   },
 30 | 
 31 |   "&:focus": {
 32 |     boxShadow:
 33 |       "inset 0px 0px 0px 1px $colors$focus, 0px 0px 0px 1px $colors$focus",
 34 |   },
 35 | 
 36 |   "&:disabled": {
 37 |     pointerEvents: "none",
 38 |     cursor: "not-allowed",
 39 |     opacity: "50%",
 40 |   },
 41 | 
 42 |   '&[aria-disabled="true"]': {
 43 |     pointerEvents: "none",
 44 |     cursor: "not-allowed",
 45 |     opacity: "50%",
 46 |   },
 47 | 
 48 |   "&:read-only": {
 49 |     backgroundColor: "$slate3",
 50 |     boxShadow: "inset 0 0 0 1px $colors$slate7",
 51 |   },
 52 | 
 53 |   variants: {
 54 |     size: {
 55 |       1: {
 56 |         height: "$7",
 57 |         fontSize: "$1",
 58 |         lineHeight: "$sizes$7",
 59 |       },
 60 |       2: {
 61 |         height: "$10",
 62 |         fontSize: "$2",
 63 |         lineHeight: "$sizes$10",
 64 |       },
 65 |       3: {
 66 |         height: 80,
 67 |         fontSize: "$3",
 68 |         lineHeight: "$3",
 69 |       },
 70 |     },
 71 |     variant: {
 72 |       subtle: {
 73 |         backgroundColor: "$slate2",
 74 | 
 75 |         "&:hover": {
 76 |           backgroundColor: "$slate3",
 77 |         },
 78 |       },
 79 |       outline: {
 80 |         "&:hover": {
 81 |           boxShadow: "0 0 0 1px $colors$slate8",
 82 |         },
 83 |       },
 84 |     },
 85 |     state: {
 86 |       valid: {
 87 |         boxShadow: "inset 0 0 0 1px $colors$green7",
 88 | 
 89 |         "&:focus": {
 90 |           boxShadow:
 91 |             "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
 92 |         },
 93 |       },
 94 |       invalid: {
 95 |         boxShadow: "inset 0 0 0 1px $colors$red7",
 96 | 
 97 |         "&:focus": {
 98 |           boxShadow:
 99 |             "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
100 |         },
101 |       },
102 |     },
103 |   },
104 | 
105 |   defaultVariants: {
106 |     size: "2",
107 |     variant: "subtle",
108 |   },
109 | });
110 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/ui/Typography.ts:
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
 68 |       1: {
 69 |         fontWeight: "$1",
 70 |       },
 71 |       2: {
 72 |         fontWeight: "$2",
 73 |       },
 74 |       3: {
 75 |         fontWeight: "$3",
 76 |       },
 77 |       4: {
 78 |         fontWeight: "$4",
 79 |       },
 80 |       5: {
 81 |         fontWeight: "$5",
 82 |       },
 83 |       6: {
 84 |         fontWeight: "$6",
 85 |       },
 86 |       7: {
 87 |         fontWeight: "$7",
 88 |       },
 89 |       8: {
 90 |         fontWeight: "$8",
 91 |       },
 92 |       9: {
 93 |         fontWeight: "$9",
 94 |       },
 95 |     },
 96 |     contrast: {
 97 |       lo: {
 98 |         color: "$loColor",
 99 |       },
100 |       hi: {
101 |         color: "$hiColor",
102 |       },
103 |     },
104 |     ellipsis: {
105 |       single: {
106 |         textOverflow: "ellipsis",
107 |         whiteSpace: "nowrap",
108 |         overflow: "hidden",
109 |       },
110 |       multi: {
111 |         textOverflow: "ellipsis",
112 |         overflow: "hidden",
113 |         display: "-webkit-box",
114 |         "-webkit-line-clamp": 2,
115 |         "-webkit-box-orient": "vertical",
116 |       },
117 |     },
118 |   },
119 | 
120 |   defaultVariants: {
121 |     size: "3",
122 |     weight: "4",
123 |     contrast: "lo",
124 |   },
125 | });
126 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/utils/audio.ts:
--------------------------------------------------------------------------------
 1 | import { Tracklist } from "@/types";
 2 | import { shuffleArray } from ".";
 3 | 
 4 | export const shuffleTracklist = (tracklist: Tracklist, currentTrackIndex: number): Tracklist => {
 5 |   // Clone the tracklist array to avoid mutations
 6 |   const tracksToShuffle = [...tracklist];
 7 |   const currentTrack = tracksToShuffle.splice(currentTrackIndex, 1)[0];
 8 |   const shuffledTracks = shuffleArray(tracksToShuffle);
 9 | 
10 |   // Reinsert the current track at the original index
11 |   shuffledTracks.splice(currentTrackIndex, 0, currentTrack);
12 |   return shuffledTracks;
13 | };
14 | 
15 | interface FormatTime {
16 |   duration: number;
17 |   options?: {
18 |     suffix?: boolean;
19 |   };
20 | }
21 | 
22 | export const formatDuration = ({ duration, options = {} }: FormatTime): string => {
23 |   const { suffix } = options;
24 |   const minutes: number = Math.floor(duration / 60) % 60;
25 |   const seconds: number = Math.floor(duration % 60);
26 |   const hours: number = Math.floor(duration / 3600);
27 | 
28 |   const hoursText = hours === 1 ? "hour" : "hours";
29 |   const minutesText = minutes === 1 ? "min" : "mins";
30 | 
31 |   const formattedSeconds: string = suffix
32 |     ? `${seconds} ${seconds === 1 ? "sec" : "secs"}`
33 |     : `${seconds < 10 ? "0" : ""}${seconds}`;
34 | 
35 |   if (hours > 0) {
36 |     if (suffix) {
37 |       return `${hours} ${hoursText} ${minutes} ${minutesText} ${formattedSeconds}`;
38 |     } else {
39 |       return `${hours}:${minutes}:${formattedSeconds}`;
40 |     }
41 |   }
42 | 
43 |   if (suffix) {
44 |     return `${minutes} ${minutesText} ${formattedSeconds}`;
45 |   }
46 | 
47 |   return `${minutes}:${formattedSeconds}`;
48 | };
49 | 
50 | export const calculateAudioPeaks = ({
51 |   decodedData,
52 |   channels = 2,
53 |   maxLength = 8000,
54 |   precision = 10_000,
55 | }: {
56 |   decodedData: AudioBuffer;
57 |   channels?: number;
58 |   maxLength?: number;
59 |   precision?: number;
60 | }): Array<number[]> => {
61 |   const maxChannels = Math.min(channels, decodedData.numberOfChannels);
62 |   const peaks: any = [];
63 |   for (let i = 0; i < maxChannels; i++) {
64 |     const channel = decodedData.getChannelData(i);
65 |     const data: any = [];
66 |     const sampleSize = Math.round(channel.length / maxLength);
67 |     for (let i = 0; i < maxLength; i++) {
68 |       const sample = channel.slice(i * sampleSize, (i + 1) * sampleSize);
69 |       let max = 0;
70 |       for (let x = 0; x < sample.length; x++) {
71 |         const n = sample[x];
72 |         if (Math.abs(n) > Math.abs(max)) max = n;
73 |       }
74 |       data.push(Math.round(max * precision) / precision);
75 |     }
76 |     peaks.push(data);
77 |   }
78 |   return peaks;
79 | };
80 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/utils/decoder.ts:
--------------------------------------------------------------------------------
 1 | /** Decode an array buffer into an audio buffer */
 2 | async function decode(audioData: ArrayBuffer, sampleRate: number): Promise<AudioBuffer> {
 3 |   const audioCtx = new AudioContext({ sampleRate });
 4 |   try {
 5 |     const audioBuffer = await audioCtx.decodeAudioData(audioData.slice(0));
 6 |     return audioBuffer;
 7 |   } catch (error) {
 8 |     console.error("Error decoding audio data:", error);
 9 |     throw error;
10 |   } finally {
11 |     // Always close the audio context to release resources
12 |     audioCtx.close();
13 |   }
14 | }
15 | 
16 | /** Normalize peaks to -1..1 */
17 | function normalize<T extends Array<Float32Array | number[]>>(channelData: T): T {
18 |   const firstChannel = channelData[0];
19 |   if (firstChannel.some((n) => n > 1 || n < -1)) {
20 |     const length = firstChannel.length;
21 |     let max = 0;
22 |     for (let i = 0; i < length; i++) {
23 |       const absN = Math.abs(firstChannel[i]);
24 |       if (absN > max) max = absN;
25 |     }
26 |     for (const channel of channelData) {
27 |       for (let i = 0; i < length; i++) {
28 |         channel[i] /= max;
29 |       }
30 |     }
31 |   }
32 |   return channelData;
33 | }
34 | 
35 | /** Create an audio buffer from pre-decoded audio data */
36 | function createBuffer(channelData: Array<Float32Array | number[]>, duration: number): AudioBuffer {
37 |   // If a single array of numbers is passed, make it an array of arrays
38 |   if (typeof channelData[0] === "number") channelData = [channelData as unknown as number[]];
39 | 
40 |   // Normalize to -1..1
41 |   normalize(channelData);
42 | 
43 |   return {
44 |     duration,
45 |     length: channelData[0].length,
46 |     sampleRate: channelData[0].length / duration,
47 |     numberOfChannels: channelData.length,
48 |     getChannelData: (i: number) => channelData?.[i] as Float32Array,
49 |     copyFromChannel: AudioBuffer.prototype.copyFromChannel,
50 |     copyToChannel: AudioBuffer.prototype.copyToChannel,
51 |   };
52 | }
53 | 
54 | const Decoder = {
55 |   decode,
56 |   createBuffer,
57 | };
58 | 
59 | export default Decoder;
60 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/utils/index.ts:
--------------------------------------------------------------------------------
  1 | import { appConfig } from "@/config";
  2 | import { Album, TrackOrAlbum } from "@/types";
  3 | 
  4 | interface AbbreviateAddressOptions {
  5 |   startChars?: number;
  6 |   endChars?: number;
  7 |   noOfEllipsis?: number;
  8 | }
  9 | 
 10 | interface AbbreviateAddress {
 11 |   address: string | undefined;
 12 |   options?: AbbreviateAddressOptions;
 13 | }
 14 | 
 15 | export const abbreviateAddress = ({ address, options = {} }: AbbreviateAddress) => {
 16 |   if (address && address.length !== 43) {
 17 |     return address;
 18 |   }
 19 | 
 20 |   const { startChars = 5, endChars = 4, noOfEllipsis = 2 } = options;
 21 | 
 22 |   const dot = ".";
 23 |   const firstFive = address?.substring(0, startChars);
 24 |   const lastFour = address?.substring(address.length - endChars);
 25 |   return `${firstFive}${dot.repeat(noOfEllipsis)}${lastFour}`;
 26 | };
 27 | 
 28 | export const formatTime = (time: number): string => {
 29 |   const minutes: number = Math.floor(time / 60) % 60;
 30 |   const seconds: number = Math.floor(time % 60);
 31 |   const hours: number = Math.floor(time / 3600);
 32 | 
 33 |   const formattedSeconds: string = `${seconds < 10 ? "0" : ""}${seconds}`;
 34 | 
 35 |   if (hours > 0) {
 36 |     return `${hours}:${minutes}:${formattedSeconds}`;
 37 |   }
 38 | 
 39 |   return `${minutes}:${formattedSeconds}`;
 40 | };
 41 | 
 42 | export const gateway = () => {
 43 |   if (typeof window !== undefined) {
 44 |     const preferredOrDefaultGateway = localStorage.getItem("gateway") || appConfig.defaultGateway;
 45 |     return preferredOrDefaultGateway;
 46 |   } else {
 47 |     return appConfig.defaultGateway;
 48 |   }
 49 | };
 50 | 
 51 | export const timestampToDate = (timestamp: number | undefined) => {
 52 |   if (!timestamp) return;
 53 |   const date = new Date(timestamp * 1000).toDateString();
 54 |   return date;
 55 | };
 56 | 
 57 | export const timeAgo = (unixTimestamp: number | string | undefined) => {
 58 |   if (!unixTimestamp) {
 59 |     return;
 60 |   }
 61 | 
 62 |   const timestamp = typeof unixTimestamp === "number" ? unixTimestamp : Number(unixTimestamp);
 63 | 
 64 |   const minute = 60;
 65 |   const hour = 60 * minute;
 66 |   const day = 24 * hour;
 67 |   const month = 30 * day;
 68 |   const year = 365 * day;
 69 | 
 70 |   const now = Date.now();
 71 | 
 72 |   // check if unixTimestamp is in the future
 73 |   if (timestamp > now) {
 74 |     // console.log("future time");
 75 |     console.error("The provided timestamp is in the future.");
 76 | 
 77 |     return;
 78 |   }
 79 | 
 80 |   const differenceInSeconds = Math.round(now - timestamp) / 1000;
 81 | 
 82 |   if (differenceInSeconds < minute) return Math.floor(differenceInSeconds) + "s";
 83 |   else if (differenceInSeconds < hour) return Math.floor(differenceInSeconds / minute) + "m";
 84 |   else if (differenceInSeconds < day) return Math.floor(differenceInSeconds / hour) + "h";
 85 |   else if (differenceInSeconds < month) return Math.floor(differenceInSeconds / day) + "d";
 86 |   else if (differenceInSeconds < year) return Math.floor(differenceInSeconds / month) + "mo";
 87 |   else return Math.floor(differenceInSeconds / year) + "y";
 88 | };
 89 | 
 90 | export const formatISOToCustomDate = (isoString: number) => {
 91 |   const date = new Date(isoString * 1000);
 92 |   const day = date.getDate();
 93 |   const month = date.toLocaleString("en-US", { month: "long" });
 94 |   const year = date.getFullYear();
 95 | 
 96 |   return `${day} ${month} ${year}`;
 97 | };
 98 | 
 99 | export function mapKeys(obj: Object) {
100 |   const keys = Object.keys(obj).map((key) => {
101 |     // console.log(key);
102 |     return abbreviateAddress({ address: key });
103 |   });
104 | 
105 |   // console.log(keys);
106 |   return keys;
107 | }
108 | 
109 | export function mapValues(obj: Object) {
110 |   return Object.values(obj).map((value) => {
111 |     return value;
112 |   });
113 | }
114 | 
115 | export const shuffleArray = <T>(array: T[]): T[] => {
116 |   for (let i = array.length - 1; i > 0; i--) {
117 |     const j = Math.floor(Math.random() * (i + 1));
118 |     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
119 |   }
120 |   return array;
121 | };
122 | 
123 | export const fileToUint8Array = async (file: File) => {
124 |   const arrayBuffer = await file.arrayBuffer();
125 |   const uint8Array = new Uint8Array(arrayBuffer);
126 |   return uint8Array;
127 | };
128 | 
129 | export const formatReleaseDate = (timestamp: number) => new Date(timestamp * 1000).getFullYear();
130 | 
131 | export const isAlbum = (toBeDetermined: TrackOrAlbum): toBeDetermined is Album => {
132 |   if (toBeDetermined as Album) {
133 |     return true;
134 |   }
135 |   return false;
136 | };
137 | 
138 | export const compareArrays = (a, b) =>
139 |   a.length === b.length && a.every((element, index) => element === b[index]);
140 | 
141 | export const compareArrayLengths = (a, b) => a.length === b.length;
142 | 
143 | export const getProcessId = (type: string) => sessionStorage.getItem(type);
144 | 
145 | export interface SetProcessId {
146 |   type: string;
147 |   id: string;
148 | }
149 | 
150 | export const saveProcessId = ({ type, id }: SetProcessId) => sessionStorage.setItem(type, id);
151 | 
152 | export const sleep = (milliseconds) => {
153 |   return new Promise((resolve) => setTimeout(resolve, milliseconds));
154 | };
155 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/utils/query.ts:
--------------------------------------------------------------------------------
 1 | import { Track } from "@/types";
 2 | 
 3 | // Function to remove duplicates by the "value" property
 4 | export const removeDuplicatesByTxid = (arr: Track[]) => {
 5 |   const uniqueValues: string[] = [];
 6 |   const resultArray: Track[] = [];
 7 | 
 8 |   for (const item of arr) {
 9 |     if (!uniqueValues.includes(item.txid)) {
10 |       uniqueValues.push(item.txid);
11 |       resultArray.push(item);
12 |     }
13 |   }
14 | 
15 |   return resultArray;
16 | };
17 | 
18 | type CreatorAndTitle = Pick<Track, "creator" | "title">;
19 | 
20 | export const removeDuplicatesByCreator = (arr: Track[]) => {
21 |   const seen = new Set<string>();
22 |   const uniqueItems: CreatorAndTitle[] = [];
23 | 
24 |   return arr.filter((item) => {
25 |     const key = item.creator + item.title;
26 |     if (seen.has(key)) {
27 |       return false; // Duplicate, filter it out
28 |     }
29 |     seen.add(key);
30 |     uniqueItems.push(item);
31 |     return true;
32 |   });
33 | };
34 | 
35 | export const reorderArrayByTxid = (tracksArray: Track[], txidArray: string[]) => {
36 |   const txidMap = new Map<string, Track>();
37 | 
38 |   // Map each txid to its corresponding object
39 |   tracksArray.forEach((obj) => {
40 |     txidMap.set(obj.txid, obj);
41 |   });
42 | 
43 |   // Reorder the tracks based on the order of txids in txidArray
44 |   const reorderedArray = txidArray
45 |     .map((txid) => txidMap.get(txid))
46 |     .filter((obj) => obj !== undefined) as Track[];
47 | 
48 |   return reorderedArray;
49 | };
50 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/utils/setTrackInfo.ts:
--------------------------------------------------------------------------------
 1 | import { Transaction, TransactionEdge } from "arweave-graphql";
 2 | 
 3 | export const setTrackInfo = (edge: TransactionEdge, gateway: string) => {
 4 |   const title = edge.node.tags.find((x) => x.name === "Title")?.value;
 5 |   const description = edge.node.tags.find(
 6 |     (x) => x.name === "Description"
 7 |   )?.value;
 8 | 
 9 |   let hasLicense = false;
10 | 
11 |   const licenseTx = edge.node.tags.find((x) => x.name === "License")?.value;
12 |   const access = edge.node.tags.find((x) => x.name === "Access")?.value;
13 |   const accessFee = edge.node.tags.find((x) => x.name === "Access-Fee")?.value;
14 | 
15 |   if (
16 |     licenseTx === "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8" &&
17 |     access === "Restricted"
18 |   ) {
19 |     hasLicense = true;
20 |   }
21 | 
22 |   let creator: string;
23 | 
24 |   try {
25 |     // find owner from balances
26 |     const initStateTag = edge.node.tags.find(
27 |       (x) => x.name === "Init-State"
28 |     )?.value;
29 | 
30 |     const initState = initStateTag ? JSON.parse(initStateTag) : undefined;
31 | 
32 |     const assetOwner = Object.keys(initState.balances)[0];
33 | 
34 |     creator = assetOwner;
35 |   } catch (error) {
36 |     creator = edge.node.owner.address;
37 |   }
38 | 
39 |   const artworkId =
40 |     edge.node.tags.find((x) => x.name === "Cover-Artwork")?.value ||
41 |     edge.node.tags.find((x) => x.name === "Thumbnail")?.value;
42 | 
43 |   const src = gateway + "/" + edge.node.id;
44 |   const txid = edge.node.id;
45 |   const collectionCode = edge.node.tags.find(
46 |     (x) => x.name === "Collection-Code"
47 |   )?.value;
48 |   const cursor = edge.cursor;
49 | 
50 |   return {
51 |     title,
52 |     description,
53 |     creator,
54 |     artworkId,
55 |     src,
56 |     txid,
57 |     collectionCode,
58 |     cursor,
59 |   };
60 | };
61 | 


--------------------------------------------------------------------------------
/apps/arcadia/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 


--------------------------------------------------------------------------------
/apps/arcadia/tsconfig.json:
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
21 |     // "noUncheckedIndexedAccess": true,
22 |     "baseUrl": ".",
23 |     "paths": {
24 |       "@/*": ["./src/*"],
25 |       "arconnect": ["./types/arconnect.d.ts"]
26 |     }
27 |   },
28 |   "include": ["src"],
29 |   "references": [{ "path": "./tsconfig.node.json" }]
30 | }
31 | 


--------------------------------------------------------------------------------
/apps/arcadia/tsconfig.node.json:
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
/apps/arcadia/vite.config.ts:
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
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "arcadia",
 3 |   "private": "true",
 4 |   "version": "1.0.0",
 5 |   "scripts": {
 6 |     "build": "turbo run build",
 7 |     "dev": "turbo run dev --parallel",
 8 |     "lint": "turbo run lint",
 9 |     "clean": "turbo run clean && rm -rf node_modules",
10 |     "prettier": "prettier --write '**/*.{json,md,js,ts,jsx,tsx,yml,css}' --ignore-unknown",
11 |     "version": "pnpm changeset version && pnpm install --lockfile-only",
12 |     "release": "pnpm changeset publish"
13 |   },
14 |   "devDependencies": {
15 |     "prettier": "3.2.5",
16 |     "turbo": "1.12.4"
17 |   }
18 | }
19 | 


--------------------------------------------------------------------------------
/patches/wavesurfer.js@7.7.3.patch:
--------------------------------------------------------------------------------
  1 | diff --git a/dist/renderer.js b/dist/renderer.js
  2 | index 0a93f35622f5881846667750123847f0b67f6af9..b3477a121da8bc7194f1fccd3d8c7cb6893f9726 100644
  3 | --- a/dist/renderer.js
  4 | +++ b/dist/renderer.js
  5 | @@ -116,6 +116,7 @@ class Renderer extends EventEmitter {
  6 |      }
  7 |      initHtml() {
  8 |          const div = document.createElement('div');
  9 | +        div.setAttribute('id', 'waveform-container');
 10 |          const shadow = div.attachShadow({ mode: 'open' });
 11 |          shadow.innerHTML = `
 12 |        <style>
 13 | @@ -265,49 +266,50 @@ class Renderer extends EventEmitter {
 14 |          return gradient;
 15 |      }
 16 |      renderBarWaveform(channelData, options, ctx, vScale) {
 17 | -        const topChannel = channelData[0];
 18 | -        const bottomChannel = channelData[1] || channelData[0];
 19 | -        const length = topChannel.length;
 20 | -        const { width, height } = ctx.canvas;
 21 | -        const halfHeight = height / 2;
 22 | -        const pixelRatio = window.devicePixelRatio || 1;
 23 | -        const barWidth = options.barWidth ? options.barWidth * pixelRatio : 1;
 24 | -        const barGap = options.barGap ? options.barGap * pixelRatio : options.barWidth ? barWidth / 2 : 0;
 25 | -        const barRadius = options.barRadius || 0;
 26 | -        const barIndexScale = width / (barWidth + barGap) / length;
 27 | -        const rectFn = barRadius && 'roundRect' in ctx ? 'roundRect' : 'rect';
 28 | -        ctx.beginPath();
 29 | -        let prevX = 0;
 30 | -        let maxTop = 0;
 31 | -        let maxBottom = 0;
 32 | -        for (let i = 0; i <= length; i++) {
 33 | -            const x = Math.round(i * barIndexScale);
 34 | -            if (x > prevX) {
 35 | -                const topBarHeight = Math.round(maxTop * halfHeight * vScale);
 36 | -                const bottomBarHeight = Math.round(maxBottom * halfHeight * vScale);
 37 | -                const barHeight = topBarHeight + bottomBarHeight || 1;
 38 | -                // Vertical alignment
 39 | -                let y = halfHeight - topBarHeight;
 40 | -                if (options.barAlign === 'top') {
 41 | -                    y = 0;
 42 | -                }
 43 | -                else if (options.barAlign === 'bottom') {
 44 | -                    y = height - barHeight;
 45 | -                }
 46 | -                ctx[rectFn](prevX * (barWidth + barGap), y, barWidth, barHeight, barRadius);
 47 | -                prevX = x;
 48 | -                maxTop = 0;
 49 | -                maxBottom = 0;
 50 | -            }
 51 | -            const magnitudeTop = Math.abs(topChannel[i] || 0);
 52 | -            const magnitudeBottom = Math.abs(bottomChannel[i] || 0);
 53 | -            if (magnitudeTop > maxTop)
 54 | -                maxTop = magnitudeTop;
 55 | -            if (magnitudeBottom > maxBottom)
 56 | -                maxBottom = magnitudeBottom;
 57 | -        }
 58 | -        ctx.fill();
 59 | -        ctx.closePath();
 60 | +        const topChannel = channelData[0]
 61 | +    const length = topChannel.length
 62 | +
 63 | +    const { width, height } = ctx.canvas
 64 | +    const halfHeight = height / 2
 65 | +    const pixelRatio = window.devicePixelRatio || 1
 66 | +
 67 | +    const barWidth = options.barWidth ? options.barWidth * pixelRatio : 1
 68 | +    const barGap = options.barGap ? options.barGap * pixelRatio : options.barWidth ? barWidth / 2 : 0
 69 | +    const barRadius = options.barRadius || 0
 70 | +    const barIndexScale = width / (barWidth + barGap) / length
 71 | +
 72 | +    const rectFn = barRadius && 'roundRect' in ctx ? 'roundRect' : 'rect'
 73 | +
 74 | +    ctx.beginPath()
 75 | +
 76 | +    let prevX = 0
 77 | +    let maxTop = 0
 78 | +    for (let i = 0; i <= length; i++) {
 79 | +    const x = Math.round(i * barIndexScale)
 80 | +
 81 | +    if (x > prevX) {
 82 | +    const topBarHeight = Math.round(maxTop * halfHeight * vScale)
 83 | +    const barHeight = topBarHeight || 1
 84 | +    const flippedBarHeight = barHeight * 0.5 // Half the height for the flipped waveform
 85 | +
 86 | +      // Original bar
 87 | +    let y = halfHeight - topBarHeight
 88 | +      ctx[rectFn](prevX * (barWidth + barGap), y, barWidth, barHeight, barRadius)
 89 | +
 90 | +      // Flipped bar
 91 | +      let flippedY = halfHeight + (halfHeight - y) - flippedBarHeight // Calculate Y position for flipped bar
 92 | +      ctx[rectFn](prevX * (barWidth + barGap), flippedY, barWidth, flippedBarHeight, barRadius)
 93 | +
 94 | +    prevX = x
 95 | +    maxTop = 0
 96 | +    }
 97 | +
 98 | +    const magnitudeTop = Math.abs(topChannel[i] || 0)
 99 | +    if (magnitudeTop > maxTop) maxTop = magnitudeTop
100 | +    }
101 | +
102 | +    ctx.fill()
103 | +    ctx.closePath()
104 |      }
105 |      renderLineWaveform(channelData, _options, ctx, vScale) {
106 |          const drawChannel = (index) => {


--------------------------------------------------------------------------------
/pnpm-workspace.yaml:
--------------------------------------------------------------------------------
1 | packages: 
2 |   - "packages/*"
3 |   - "apps/*"


--------------------------------------------------------------------------------
/turbo.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://turbo.build/schema.json",
 3 |   "pipeline": {
 4 |     "build": {
 5 |       "dependsOn": ["^build"],
 6 |       "outputs": ["dist/**", ".next/**"]
 7 |     },
 8 |     "lint": {
 9 |       "outputs": []
10 |     },
11 |     "dev": {
12 |       "cache": false
13 |     },
14 |     "clean": {
15 |       "cache": false
16 |     }
17 |   }
18 | }
19 | 


--------------------------------------------------------------------------------

Link: https://github.com/arcadiasound/arcadia