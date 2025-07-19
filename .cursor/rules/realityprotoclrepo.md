├── .env
├── .env.test
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .storybook
    ├── main.ts
    └── preview.ts
├── README.md
├── components.json
├── docs
    ├── AgentGuide.md
    ├── Chat.md
    ├── Readme.md
    ├── Reality.md
    ├── Schema.md
    ├── WorldGuide.md
    ├── dl
    │   └── TemplateTiledProject.zip
    ├── img
    │   ├── 00openproject.png
    │   ├── 01newproject.png
    │   ├── 02newmap.png
    │   ├── 03savemap.png
    │   ├── 04newtileset.png
    │   ├── 05layers.png
    │   ├── 06drawmap.png
    │   ├── 07edittileset.png
    │   ├── 08addproperty.png
    │   └── 09setcollides.png
    └── src
    │   ├── Atlas.lua
    │   └── WorldTemplate.lua
├── fixtures
    ├── deploy_jwk.json
    ├── deploy_seed.txt
    ├── test_jwk.json
    └── test_seed.txt
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── process
    ├── LlamaCoin.lua
    ├── PatchLegacyReply.lua
    ├── Token.lua
    ├── aos.helper.js
    ├── blueprint
    │   ├── Chat-.lua
    │   ├── Chat.lua
    │   ├── Chat.test.js
    │   ├── DbAdmin.lua
    │   ├── Reality-.lua
    │   ├── Reality.lua
    │   └── Reality.test.js
    ├── detective
    │   ├── detective_world.lua
    │   ├── llama_guide.lua
    │   └── morse_world.lua
    ├── llm
    │   ├── LLMGrader.lua
    │   ├── LLMGraderDummy.lua
    │   ├── LLMGraderJson.lua
    │   ├── LLMGraderJsonAnime.lua
    │   ├── LLMGraderJsonPrime.lua
    │   ├── LLMGraderJsonState.lua
    │   ├── LLMGraderThreePart.lua
    │   ├── LLMGraderTwoPart.lua
    │   ├── LLMResponder.lua
    │   └── router
    │   │   ├── Config.test.lua
    │   │   ├── LlamaHerderClient.lua
    │   │   ├── LlamaRouter.lua
    │   │   └── LlamaRouter.test.js
    ├── misc
    │   ├── .gitignore
    │   ├── Blacklist.js
    │   ├── Flag.js
    │   ├── Tracking-.lua
    │   ├── Tracking.lua
    │   ├── Waitlist.lua
    │   ├── Waitlist.test.js
    │   ├── WaitlistDump.js
    │   ├── WaitlistDumpAuthed.js
    │   ├── WaitlistMigration1.lua
    │   ├── Whitelist.js
    │   ├── _DANGER_WaitlistTrackingResetAuthClaimLogin.lua
    │   └── dbAdmin.lua
    ├── module
    │   ├── AOS-SQLITE.wasm
    │   └── AOS.wasm
    ├── npc
    │   ├── BeaverMelee.lua
    │   ├── DbAdmin.lua
    │   ├── LlamaBanker.lua
    │   ├── LlamaBanker.test.js
    │   ├── LlamaBankerPayouts.lua
    │   ├── LlamaBankerPetitionCounts.lua
    │   ├── LlamaCaptain.lua
    │   ├── LlamaComplainer.lua
    │   ├── LlamaImmigration.lua
    │   ├── LlamaKing.lua
    │   ├── LlamaKing.test.js
    │   ├── LlamaRunner.lua
    │   ├── LlamaSailor.lua
    │   ├── LlamaWanderer.lua
    │   ├── LlamaWanderer.test.js
    │   ├── LlamaWarpmaster.lua
    │   ├── Oracle.lua
    │   ├── _DANGER_LlamaBankerResetHistory.lua
    │   ├── config
    │   │   ├── LlamaBankerDummy.lua
    │   │   └── LlamaKingLlmJsonState.lua
    │   ├── dock
    │   │   ├── LlamaDeckhands.lua
    │   │   └── LlamaDockman.lua
    │   ├── palmisland
    │   │   ├── ConfusedLlama.lua
    │   │   ├── DbAdmin.lua
    │   │   └── LlamaJoker.lua
    │   └── rpgland
    │   │   ├── FantasyLlama.lua
    │   │   └── LlamaGiver.lua
    ├── package-lock.json
    ├── package.json
    ├── warp
    │   ├── _Deploy.js
    │   ├── _EXAMPLE-entity-update.js
    │   ├── _EXAMPLE-entity-update.lua
    │   ├── _OLD-entity-update.lua
    │   ├── atomic-asset.lua
    │   ├── entity-setup-00-globals.lua
    │   ├── entity-setup-01-create.lua
    │   ├── entity-setup-02-fix.lua
    │   └── entity-update.lua
    └── world
    │   ├── 0_Singularity.lua
    │   ├── 1_Universe.lua
    │   ├── 20_PalmIsland.lua
    │   ├── 21_RpgLand.lua
    │   ├── 22_TestLand.lua
    │   ├── 2_WeaveWorld.lua
    │   ├── 3_LlamaLand.lua
    │   ├── 4_LlamaFed.lua
    │   ├── 5_LlamaDock.lua
    │   └── 90_RegisterWarp.lua
├── public
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    ├── apple-touch-icon.png
    ├── assets
    │   ├── branding
    │   │   ├── LLAMA_coin_icon.png
    │   │   ├── LLAMA_coin_large.png
    │   │   ├── LLAMA_purple.png
    │   │   ├── LLAMA_purple_small.png
    │   │   ├── LLAMA_red.png
    │   │   ├── main_bg.jpg
    │   │   ├── main_bg.png
    │   │   ├── main_logo.png
    │   │   └── main_logo_small.png
    │   ├── serenade.webm
    │   ├── sprites
    │   │   ├── atlas
    │   │   │   ├── faune.json
    │   │   │   └── faune.png
    │   │   ├── default_atlas.json
    │   │   ├── invis.png
    │   │   ├── llama
    │   │   │   ├── llama_0.png
    │   │   │   ├── llama_1.png
    │   │   │   ├── llama_2.png
    │   │   │   ├── llama_3.png
    │   │   │   ├── llama_4.png
    │   │   │   ├── llama_5.png
    │   │   │   ├── llama_6.png
    │   │   │   ├── llama_7.png
    │   │   │   ├── llama_8.png
    │   │   │   ├── llama_9.png
    │   │   │   └── llama_wif_hat.png
    │   │   ├── mona.png
    │   │   ├── scream.png
    │   │   ├── simple_atlas.json
    │   │   ├── speech_md.png
    │   │   ├── speech_sm.png
    │   │   └── wizard_atlas.json
    │   ├── tutorial
    │   │   ├── click_king.png
    │   │   └── click_npc.png
    │   └── video.webm
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── favicon.ico
    ├── fonts
    │   ├── Undead_Pixel_11.ttf
    │   └── Undead_Pixel_8.ttf
    ├── llamaland_profilePic.png
    ├── llamaland_profilePic_8bit.png
    ├── llamaland_profilePic_8bit_admin.png
    ├── llamaland_profilePic_8bit_king.png
    ├── llamaland_profilePic_8bit_user.png
    ├── portrait-default.png
    └── site.webmanifest
├── scripts
    ├── generate_atlas.js
    └── generate_wizard.js
├── src
    ├── App.tsx
    ├── components
    │   └── ui
    │   │   ├── button.stories.ts
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── form.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── popover.tsx
    │   │   ├── sonner.tsx
    │   │   └── tooltip.tsx
    ├── context
    │   └── GameStateContext.tsx
    ├── features
    │   ├── ao
    │   │   ├── lib
    │   │   │   ├── __snapshots__
    │   │   │   │   └── aoContractClient.test.ts.snap
    │   │   │   ├── aoClient.ts
    │   │   │   ├── aoContractClient.test.ts
    │   │   │   ├── aoContractClient.ts
    │   │   │   ├── aoWallet.ts
    │   │   │   ├── config.ts
    │   │   │   └── wallets
    │   │   │   │   ├── dummy.ts
    │   │   │   │   ├── generated.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── injected.ts
    │   │   │   │   ├── jwk.ts
    │   │   │   │   └── othent.ts
    │   │   └── test
    │   │   │   ├── components
    │   │   │       ├── AnonymousLoader.tsx
    │   │   │       ├── DemoAo.tsx
    │   │   │       └── DemoConnect.tsx
    │   │   │   └── lib
    │   │   │       ├── __snapshots__
    │   │   │           └── fsWallet.test.ts.snap
    │   │   │       ├── fsWallet.test.ts
    │   │   │       └── fsWallet.ts
    │   ├── arweave
    │   │   └── lib
    │   │   │   ├── arweave.ts
    │   │   │   ├── model.ts
    │   │   │   └── utils.ts
    │   ├── chat
    │   │   ├── components
    │   │   │   ├── Chat.css
    │   │   │   ├── Chat.tsx
    │   │   │   ├── ChatBubble.tsx
    │   │   │   └── MiniAddress.tsx
    │   │   ├── contract
    │   │   │   ├── __snapshots__
    │   │   │   │   └── chatClient.test.ts.snap
    │   │   │   ├── chatClient.test.ts
    │   │   │   ├── chatClient.ts
    │   │   │   └── model.ts
    │   │   └── utils
    │   │   │   └── formatting.ts
    │   ├── login
    │   │   ├── components
    │   │   │   ├── Login.tsx
    │   │   │   ├── LoginMenu.stories.tsx
    │   │   │   └── LoginMenu.tsx
    │   │   ├── lib
    │   │   │   ├── config.ts
    │   │   │   └── localWallet.ts
    │   │   └── machines
    │   │   │   └── loginMachine.ts
    │   ├── main
    │   │   ├── components
    │   │   │   └── Main.tsx
    │   │   └── machines
    │   │   │   └── mainMachine.ts
    │   ├── profile
    │   │   ├── components
    │   │   │   ├── ProfileButton.tsx
    │   │   │   ├── ProfileDetailsDropdown.tsx
    │   │   │   └── ProfileImage.tsx
    │   │   ├── contract
    │   │   │   ├── __snapshots__
    │   │   │   │   ├── profileClient.test.ts.snap
    │   │   │   │   └── profileRegistryClient.test.ts.snap
    │   │   │   ├── config.ts
    │   │   │   ├── model.ts
    │   │   │   ├── profileClient.ts
    │   │   │   ├── profileProcess.ts
    │   │   │   ├── profileRegistryClient.test.ts
    │   │   │   └── profileRegistryClient.ts
    │   │   ├── hooks
    │   │   │   └── useProfileInfo.ts
    │   │   └── utils
    │   │   │   └── batch.ts
    │   ├── reality
    │   │   ├── contract
    │   │   │   ├── _2dTile.ts
    │   │   │   ├── __snapshots__
    │   │   │   │   └── verseClient.test.ts.snap
    │   │   │   ├── audio.ts
    │   │   │   ├── model.ts
    │   │   │   ├── realityClient.test.ts
    │   │   │   └── realityClient.ts
    │   │   └── test
    │   │   │   ├── RealityLink.tsx
    │   │   │   └── RealityNav.tsx
    │   ├── render
    │   │   ├── components
    │   │   │   ├── ButtonOnce.tsx
    │   │   │   ├── FormOverlay.tsx
    │   │   │   ├── PhaserGame.tsx
    │   │   │   ├── Renderer.tsx
    │   │   │   └── TutorialOverlay.tsx
    │   │   ├── lib
    │   │   │   ├── EventBus.ts
    │   │   │   ├── load
    │   │   │   │   ├── model.ts
    │   │   │   │   └── reality.ts
    │   │   │   ├── model.ts
    │   │   │   └── phaser
    │   │   │   │   ├── game.ts
    │   │   │   │   └── scenes
    │   │   │   │       ├── Boot.ts
    │   │   │   │       ├── MainMenu.tsx
    │   │   │   │       ├── Preloader.ts
    │   │   │   │       ├── WarpableScene.ts
    │   │   │   │       └── WorldScene.tsx
    │   │   ├── machines
    │   │   │   └── renderMachine.ts
    │   │   └── test
    │   │   │   └── components
    │   │   │       └── DemoPhaserGame.tsx
    │   ├── rjsf
    │   │   ├── AddButton
    │   │   │   ├── AddButton.tsx
    │   │   │   └── index.ts
    │   │   ├── ArrayFieldItemTemplate
    │   │   │   ├── ArrayFieldItemTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── ArrayFieldTemplate
    │   │   │   ├── ArrayFieldTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── BaseInputTemplate
    │   │   │   ├── BaseInputTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── CheckboxWidget
    │   │   │   ├── CheckboxWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── CheckboxesWidget
    │   │   │   ├── CheckboxesWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── DescriptionField
    │   │   │   ├── DescriptionField.tsx
    │   │   │   └── index.ts
    │   │   ├── ErrorList
    │   │   │   ├── ErrorList.tsx
    │   │   │   └── index.ts
    │   │   ├── FieldErrorTemplate
    │   │   │   ├── FieldErrorTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── FieldHelpTemplate
    │   │   │   ├── FieldHelpTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── FieldTemplate
    │   │   │   ├── FieldTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── Form
    │   │   │   ├── Form.tsx
    │   │   │   └── index.ts
    │   │   ├── IconButton
    │   │   │   ├── IconButton.tsx
    │   │   │   └── index.ts
    │   │   ├── ObjectFieldTemplate
    │   │   │   ├── ObjectFieldTemplate.tsx
    │   │   │   └── index.ts
    │   │   ├── RadioWidget
    │   │   │   ├── RadioWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── RangeWidget
    │   │   │   ├── RangeWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── SelectWidget
    │   │   │   ├── SelectWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── SubmitButton
    │   │   │   ├── SubmitButton.tsx
    │   │   │   └── index.ts
    │   │   ├── Templates
    │   │   │   ├── Templates.ts
    │   │   │   └── index.ts
    │   │   ├── TextareaWidget
    │   │   │   ├── TextareaWidget.tsx
    │   │   │   └── index.ts
    │   │   ├── Theme
    │   │   │   ├── Theme.tsx
    │   │   │   └── index.ts
    │   │   ├── TitleField
    │   │   │   ├── TitleField.tsx
    │   │   │   └── index.ts
    │   │   ├── Widgets
    │   │   │   ├── Widgets.ts
    │   │   │   └── index.ts
    │   │   ├── WrapIfAdditionalTemplate
    │   │   │   ├── WrapIfAdditionalTemplate.tsx
    │   │   │   └── index.ts
    │   │   └── index.ts
    │   ├── schema
    │   │   ├── components
    │   │   │   ├── SchemaForm.tsx
    │   │   │   ├── SchemaFormLoader.stories.tsx
    │   │   │   └── SchemaFormLoader.tsx
    │   │   └── contract
    │   │   │   ├── __snapshots__
    │   │   │       └── schemaClient.test.ts.snap
    │   │   │   ├── model.ts
    │   │   │   ├── schemaClient.test.ts
    │   │   │   └── schemaClient.ts
    │   ├── token
    │   │   ├── components
    │   │   │   └── TokenBalanceOverlay.tsx
    │   │   └── contract
    │   │   │   ├── model.ts
    │   │   │   └── tokenClient.ts
    │   ├── tracking
    │   │   └── contract
    │   │   │   ├── model.ts
    │   │   │   ├── trackingClient.test.ts
    │   │   │   └── trackingClient.ts
    │   └── waitlist
    │   │   ├── components
    │   │       ├── LoginMenu.tsx
    │   │       ├── WaitlistDetails.tsx
    │   │       ├── WaitlistScreen.tsx
    │   │       ├── WaitlistSkip.tsx
    │   │       └── WaitlistSplash.tsx
    │   │   └── contract
    │   │       ├── model.ts
    │   │       └── waitlistClient.ts
    ├── index.css
    ├── lib
    │   ├── gameStateStore.ts
    │   ├── query.ts
    │   ├── utils.ts
    │   └── xstate.ts
    ├── main.tsx
    ├── routeTree.gen.ts
    ├── routes
    │   ├── __root.tsx
    │   ├── index.lazy.tsx
    │   └── world.$.lazy.tsx
    └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


/.env:
--------------------------------------------------------------------------------
 1 | VITE_PROFILE_PROCESS_ID="SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY"
 2 | VITE_WAITLIST_PROCESS_ID="2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k"
 3 | # VITE_TRACKING_TEST_PROCESS_ID="7sniCE5rEM92PYgvIr0H9xK_yJf56FxSYN-eazRE__Y"
 4 | VITE_TRACKING_TEST_PROCESS_ID="2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k"
 5 | 
 6 | VITE_UNIVERSE_PROCESS_ID="-wNWBTJSU9c8RqID5J3GZy074Rt9PEZbVmv383Mz6nQ"
 7 | VITE_WEAVE_WORLD_PROCESS_ID="lNgVEhChWcW4OMoISEcTI06eWbNuzRypB3KAK_8f7NU"
 8 | VITE_LLAMA_LAND_PROCESS_ID="9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss"
 9 | VITE_LLAMA_FED_PROCESS_ID="IN3T2l6QERA6d65XGW5asx2JWX7VrOQ3HIbwQvKVBQo"
10 | VITE_LLAMAASSISTANT_PROCESS_ID="y_obnQk5mkphKlulM7v1Xyn6IhJKZGhP_BC1qLJq46w"
11 | VITE_LLAMAKING_PROCESS_ID="kPjfXLFyjJogxGRRRe2ErdYNiexolpHpK6wGkz-UPVA"


--------------------------------------------------------------------------------
/.env.test:
--------------------------------------------------------------------------------
1 | VITE_READ_PROCESS_ID="PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs"
2 | VITE_WRITE_PROCESS_ID="PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs"
3 | 
4 | VITE_PROFILETEST_PROCESS_ID="SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY"
5 | VITE_LLAMAASSISTANT_PROCESS_ID="y_obnQk5mkphKlulM7v1Xyn6IhJKZGhP_BC1qLJq46w"
6 | 
7 | VITE_UNIVERSE_PROCESS_ID="-wNWBTJSU9c8RqID5J3GZy074Rt9PEZbVmv383Mz6nQ"
8 | 


--------------------------------------------------------------------------------
/.eslintrc.cjs:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   root: true,
 3 |   env: { browser: true, es2020: true },
 4 |   extends: [
 5 |     "eslint:recommended",
 6 |     "plugin:@typescript-eslint/recommended",
 7 |     "plugin:react-hooks/recommended",
 8 |     "plugin:storybook/recommended",
 9 |     "prettier",
10 |   ],
11 |   ignorePatterns: ["dist", ".eslintrc.cjs"],
12 |   parser: "@typescript-eslint/parser",
13 |   plugins: ["react-refresh"],
14 |   rules: {
15 |     "react-refresh/only-export-components": [
16 |       "warn",
17 |       { allowConstantExport: true },
18 |     ],
19 |   },
20 | };
21 | 


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
26 | # Storybook
27 | *storybook.log
28 | src/stories
29 | 
30 | # Secrets
31 | .secret
32 | 


--------------------------------------------------------------------------------
/.prettierignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | dist
3 | fixtures
4 | .secret
5 | src/routeTree.gen.ts


--------------------------------------------------------------------------------
/.prettierrc:
--------------------------------------------------------------------------------
1 | {}
2 | 


--------------------------------------------------------------------------------
/.storybook/main.ts:
--------------------------------------------------------------------------------
 1 | import type { StorybookConfig } from "@storybook/react-vite";
 2 | 
 3 | const config: StorybookConfig = {
 4 |   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
 5 |   addons: [
 6 |     "@storybook/addon-onboarding",
 7 |     "@storybook/addon-links",
 8 |     "@storybook/addon-essentials",
 9 |     "@chromatic-com/storybook",
10 |     "@storybook/addon-interactions",
11 |   ],
12 |   framework: {
13 |     name: "@storybook/react-vite",
14 |     options: {},
15 |   },
16 | };
17 | export default config;
18 | 


--------------------------------------------------------------------------------
/.storybook/preview.ts:
--------------------------------------------------------------------------------
 1 | import type { Preview } from "@storybook/react";
 2 | import "../src/index.css";
 3 | 
 4 | const preview: Preview = {
 5 |   parameters: {
 6 |     controls: {
 7 |       matchers: {
 8 |         color: /(background|color)$/i,
 9 |         date: /Date$/i,
10 |       },
11 |     },
12 |   },
13 | };
14 | 
15 | export default preview;
16 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # React + TypeScript + Vite
 2 | 
 3 | This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 4 | 
 5 | Currently, two official plugins are available:
 6 | 
 7 | - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
 8 | - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 9 | 
10 | ## Expanding the ESLint configuration
11 | 
12 | If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
13 | 
14 | - Configure the top-level `parserOptions` property like this:
15 | 
16 | ```js
17 | export default {
18 |   // other rules...
19 |   parserOptions: {
20 |     ecmaVersion: "latest",
21 |     sourceType: "module",
22 |     project: ["./tsconfig.json", "./tsconfig.node.json"],
23 |     tsconfigRootDir: __dirname,
24 |   },
25 | };
26 | ```
27 | 
28 | - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
29 | - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
30 | - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
31 | 


--------------------------------------------------------------------------------
/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "default",
 4 |   "rsc": false,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "tailwind.config.js",
 8 |     "css": "src/index.css",
 9 |     "baseColor": "slate",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "@/components",
15 |     "utils": "@/lib/utils"
16 |   }
17 | }
18 | 


--------------------------------------------------------------------------------
/docs/Chat.md:
--------------------------------------------------------------------------------
1 | # Chat Protocol
2 | 
3 | > This spec is work in progress! Please see [Chat.lua](../process/blueprint/Chat.lua) for the source code, or the [Llama Complainer](../process/npc/LlamaComplainer.lua) agent for an example that uses the chat
4 | 


--------------------------------------------------------------------------------
/docs/Readme.md:
--------------------------------------------------------------------------------
 1 | # Docs for building on Reality Protocol
 2 | 
 3 | To dive in to making your own World, check out the [World Guide](WorldGuide.md)
 4 | 
 5 | To get started with creating agents to populate a World, see the [Agent Guide](AgentGuide.md)
 6 | 
 7 | Or check out details of the protocols:
 8 | - [Reality Protocol](./Reality.md)
 9 | - [Schema Protocol](./Schema.md)
10 | - [Chat Protocol](./Chat.md) (Coming soon)
11 | 


--------------------------------------------------------------------------------
/docs/dl/TemplateTiledProject.zip:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/dl/TemplateTiledProject.zip


--------------------------------------------------------------------------------
/docs/img/00openproject.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/00openproject.png


--------------------------------------------------------------------------------
/docs/img/01newproject.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/01newproject.png


--------------------------------------------------------------------------------
/docs/img/02newmap.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/02newmap.png


--------------------------------------------------------------------------------
/docs/img/03savemap.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/03savemap.png


--------------------------------------------------------------------------------
/docs/img/04newtileset.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/04newtileset.png


--------------------------------------------------------------------------------
/docs/img/05layers.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/05layers.png


--------------------------------------------------------------------------------
/docs/img/06drawmap.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/06drawmap.png


--------------------------------------------------------------------------------
/docs/img/07edittileset.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/07edittileset.png


--------------------------------------------------------------------------------
/docs/img/08addproperty.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/08addproperty.png


--------------------------------------------------------------------------------
/docs/img/09setcollides.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/docs/img/09setcollides.png


--------------------------------------------------------------------------------
/docs/src/Atlas.lua:
--------------------------------------------------------------------------------
 1 | --#region Model
 2 | 
 3 | RealityInfo = {
 4 |   Dimensions = 2,
 5 |   Name = 'ExampleReality',
 6 |   ['Render-With'] = '2D-Tile-0',
 7 | }
 8 | 
 9 | RealityParameters = {
10 |   ['2D-Tile-0'] = {
11 |     Version = 0,
12 |     Spawn = { 5, 7 },
13 |     -- This is a tileset themed to Llama Land main island
14 |     Tileset = {
15 |       Type = 'Fixed',
16 |       Format = 'PNG',
17 |       TxId = 'h5Bo-Th9DWeYytRK156RctbPceREK53eFzwTiKi0pnE', -- TxId of the tileset in PNG format
18 |     },
19 |     -- This is a tilemap of sample small island
20 |     Tilemap = {
21 |       Type = 'Fixed',
22 |       Format = 'TMJ',
23 |       TxId = 'koH7Xcao-lLr1aXKX4mrcovf37OWPlHW76rPQEwCMMA', -- TxId of the tilemap in TMJ format
24 |       -- Since we are already setting the spawn in the middle, we don't need this
25 |       -- Offset = { -10, -10 },
26 |     },
27 |     PlayerSpriteTxId = 'vtrj6eG-AHmFfGTf1ARP0MoqJD_NqSRSSQGo5XyDvok',
28 |     PlayerSpriteAtlasTxId = 'VLctnZMm9vg5Fzil2JtwOx68zYyU_A3yc_1_8Ko5R3c',
29 |   },
30 | }
31 | 
32 | RealityEntitiesStatic = {}
33 | 
34 | --#endregion
35 | 
36 | return print("Loaded Reality Template")
37 | 


--------------------------------------------------------------------------------
/docs/src/WorldTemplate.lua:
--------------------------------------------------------------------------------
 1 | --#region Model
 2 | 
 3 | RealityInfo = {
 4 |   Dimensions = 2,
 5 |   Name = 'ExampleReality',
 6 |   ['Render-With'] = '2D-Tile-0',
 7 | }
 8 | 
 9 | RealityParameters = {
10 |   ['2D-Tile-0'] = {
11 |     Version = 0,
12 |     Spawn = { 5, 7 },
13 |     -- This is a tileset themed to Llama Land main island
14 |     Tileset = {
15 |       Type = 'Fixed',
16 |       Format = 'PNG',
17 |       TxId = 'h5Bo-Th9DWeYytRK156RctbPceREK53eFzwTiKi0pnE', -- TxId of the tileset in PNG format
18 |     },
19 |     -- This is a tilemap of sample small island
20 |     Tilemap = {
21 |       Type = 'Fixed',
22 |       Format = 'TMJ',
23 |       TxId = 'koH7Xcao-lLr1aXKX4mrcovf37OWPlHW76rPQEwCMMA', -- TxId of the tilemap in TMJ format
24 |       -- Since we are already setting the spawn in the middle, we don't need this
25 |       -- Offset = { -10, -10 },
26 |     },
27 |   },
28 | }
29 | 
30 | RealityEntitiesStatic = {}
31 | 
32 | --#endregion
33 | 
34 | return print("Loaded Reality Template")
35 | 


--------------------------------------------------------------------------------
/fixtures/deploy_seed.txt:
--------------------------------------------------------------------------------
1 | luggage penalty wrong guard cry vehicle fog exhaust enemy engage salt victory


--------------------------------------------------------------------------------
/fixtures/test_seed.txt:
--------------------------------------------------------------------------------
1 | output feel wing ketchup dose swallow dynamic small relax boring venue major


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
 1 | <!doctype html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 6 |     <title>Llama Land</title>
 7 |     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
 8 |     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
 9 |     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
10 |     <link rel="manifest" href="/site.webmanifest" />
11 |     <link rel="preconnect" href="https://fonts.googleapis.com" />
12 |     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
13 |     <link
14 |       href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
15 |       rel="stylesheet"
16 |     />
17 |   </head>
18 |   <body>
19 |     <div id="root"></div>
20 |     <script type="module" src="/src/main.tsx"></script>
21 |   </body>
22 | </html>
23 | 


--------------------------------------------------------------------------------
/postcss.config.js:
--------------------------------------------------------------------------------
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | };
7 | 


--------------------------------------------------------------------------------
/process/PatchLegacyReply.lua:
--------------------------------------------------------------------------------
 1 | local function patchReply(msg)
 2 |   if not msg.reply then
 3 |     msg.reply = function(replyMsg)
 4 |       replyMsg.Target = msg["Reply-To"] or (replyMsg.Target or msg.From)
 5 |       replyMsg["X-Reference"] = msg["X-Reference"] or msg.Reference or ""
 6 |       replyMsg["X-Origin"] = msg["X-Origin"] or ""
 7 | 
 8 |       return ao.send(replyMsg)
 9 |     end
10 |   end
11 | end
12 | 
13 | Handlers.prepend("_patch_reply", function(msg) return "continue" end, patchReply)
14 | 


--------------------------------------------------------------------------------
/process/aos.helper.js:
--------------------------------------------------------------------------------
 1 | import AoLoader from "@permaweb/ao-loader";
 2 | import fs from "fs";
 3 | import process from "process";
 4 | 
 5 | const aos = fs.readFileSync(process.env.WASM || "./module/AOS.wasm");
 6 | const format = process.env.FORMAT || "wasm32-unknown-emscripten";
 7 | let memory = null;
 8 | 
 9 | export async function Send(DataItem) {
10 |   const msg = Object.keys(DataItem).reduce(function (di, k) {
11 |     if (di[k]) {
12 |       di[k] = DataItem[k];
13 |     } else {
14 |       di.Tags = di.Tags.concat([{ name: k, value: DataItem[k] }]);
15 |     }
16 |     return di;
17 |   }, createMsg());
18 | 
19 |   const handle = await AoLoader(aos, { format });
20 |   const env = createEnv();
21 | 
22 |   const result = await handle(memory, msg, env);
23 |   if (result.Error) {
24 |     return "ERROR: " + JSON.stringify(result.Error);
25 |   }
26 |   memory = result.Memory;
27 | 
28 |   return {
29 |     Messages: result.Messages,
30 |     Spawns: result.Spawns,
31 |     Output: result.Output,
32 |     Assignments: result.Assignments,
33 |   };
34 | }
35 | 
36 | function createMsg() {
37 |   return {
38 |     Id: "1234",
39 |     Target: "AOS",
40 |     Owner: "OWNER",
41 |     From: "OWNER",
42 |     Data: "1984",
43 |     Tags: [],
44 |     "Block-Height": "1",
45 |     Timestamp: Date.now(),
46 |     Module: "4567",
47 |   };
48 | }
49 | 
50 | function createEnv() {
51 |   return {
52 |     Process: {
53 |       Id: "9876",
54 |       Tags: [
55 |         { name: "Data-Protocol", value: "ao" },
56 |         { name: "Variant", value: "ao.TN.1" },
57 |         { name: "Type", value: "Process" },
58 |       ],
59 |     },
60 |     Module: {
61 |       Id: "4567",
62 |       Tags: [
63 |         { name: "Data-Protocol", value: "ao" },
64 |         { name: "Variant", value: "ao.TN.1" },
65 |         { name: "Type", value: "Module" },
66 |       ],
67 |     },
68 |   };
69 | }
70 | 


--------------------------------------------------------------------------------
/process/blueprint/Chat-.lua:
--------------------------------------------------------------------------------
1 | ChatDb = nil
2 | ChatDbAdmin = nil
3 | ChatInitialized = false
4 | 
5 | Handlers.remove("ChatMessage")
6 | Handlers.remove("ChatCount")
7 | Handlers.remove("ChatHistory")
8 | 


--------------------------------------------------------------------------------
/process/blueprint/DbAdmin.lua:
--------------------------------------------------------------------------------
 1 | local dbAdmin = {}
 2 | dbAdmin.__index = dbAdmin
 3 | 
 4 | -- Function to create a new database explorer instance
 5 | function dbAdmin.new(db)
 6 |   local self = setmetatable({}, dbAdmin)
 7 |   self.db = db
 8 |   return self
 9 | end
10 | 
11 | -- Function to list all tables in the database
12 | function dbAdmin:tables()
13 |   local tables = {}
14 |   for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
15 |     table.insert(tables, row.name)
16 |   end
17 |   return tables
18 | end
19 | 
20 | -- Function to get the record count of a table
21 | function dbAdmin:count(tableName)
22 |   local count_query = string.format("SELECT COUNT(*) AS count FROM %s;", tableName)
23 |   for row in self.db:nrows(count_query) do
24 |     return row.count
25 |   end
26 | end
27 | 
28 | -- Function to execute a given SQL query
29 | function dbAdmin:exec(sql)
30 |   local results = {}
31 |   for row in self.db:nrows(sql) do
32 |     table.insert(results, row)
33 |   end
34 |   return results
35 | end
36 | 
37 | return dbAdmin
38 | 


--------------------------------------------------------------------------------
/process/blueprint/Reality-.lua:
--------------------------------------------------------------------------------
 1 | RealityInfo = nil
 2 | RealityParameters = nil
 3 | RealityEntitiesStatic = nil
 4 | RealityDb = nil
 5 | RealityDbAdmin = nil
 6 | RealityInitialized = nil
 7 | 
 8 | Handlers.remove("Reality.Info")
 9 | Handlers.remove("Reality.Parameters")
10 | Handlers.remove("Reality.EntityCreate")
11 | Handlers.remove("Reality.EntityUpdatePosition")
12 | 


--------------------------------------------------------------------------------
/process/detective/llama_guide.lua:
--------------------------------------------------------------------------------
 1 | -- Name: LlamaDetectiveGuide
 2 | -- ProcessID: sotxMLNR92QNc3zR5UI_llr8Hgen_wpuPhlcp9HCr4E
 3 | 
 4 | local json = require('json')
 5 | 
 6 | Handlers.add(
 7 |   'Schema',
 8 |   Handlers.utils.hasMatchingTag('Action', 'Schema'),
 9 |   function(msg)
10 |     print('Schema')
11 |     return Send({
12 |       Target = msg.From,
13 |       Tags = { Type = 'Schema' },
14 |       Data = json.encode({
15 |         Guide = {
16 |           Title = 'Elias\'s Detective Game',
17 |           Description =
18 |           'Look around this world for llamas with puzzles from Elias. Check the leaderboard at the top left - if you are the first to solve a puzzle, you can reserve your reward with the prize llama. There is a grand prize for whoever claims the Atomic Asset sitting in a secret wallet! Hint: look for buildings with open doors.',
19 |           Schema = nil,
20 |         },
21 |       })
22 |     })
23 |   end
24 | )
25 | 


--------------------------------------------------------------------------------
/process/detective/morse_world.lua:
--------------------------------------------------------------------------------
 1 | -- Name: morse_world
 2 | -- ProcessId: Fg-xkUDpCRDruNDX8_1cnwmeWw1MRRStsvuKCWIw3p0
 3 | 
 4 | --#region Model
 5 | 
 6 | RealityInfo = {
 7 |   Dimensions = 2,
 8 |   Name = 'ExampleReality',
 9 |   ['Render-With'] = '2D-Tile-0',
10 | }
11 | 
12 | RealityParameters = {
13 |   Token = {
14 |     Primary = 'pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY',
15 |     SchemaForm = {
16 |       Target = '1FqYv_U-33tvg_4gwt6SeMlIqOa7KMEaXK6mvogMBss',
17 |       Id = 'Leaderboard',
18 |     }
19 |   },
20 |   ['2D-Tile-0'] = {
21 |     Version = 0,
22 |     Spawn = { 12, 17 },
23 |     -- This is a tileset themed to Llama Land main island
24 |     Tileset = {
25 |       Type = 'Fixed',
26 |       Format = 'PNG',
27 |       TxId = 'aNBlmE61e2zV6NgFSGcZjthvNIUtsLNBFrHRLfGkDTo', -- TxId of the tileset in PNG format
28 |     },
29 |     -- This is a tilemap of sample small island
30 |     Tilemap = {
31 |       Type = 'Fixed',
32 |       Format = 'TMJ',
33 |       TxId = 'sR80MLkgQwyjFx3Fv-eLnNen7uT0z7v3o4LWmRdQr4o', -- TxId of the tilemap in TMJ format
34 |       -- Since we are already setting the spawn in the middle, we don't need this
35 |       -- Offset = { -10, -10 },
36 |     },
37 |   },
38 |   ['Audio-0'] = {
39 |     Bgm = {
40 |       Type = 'Fixed',
41 |       Format = 'WEBM',
42 |       TxId = 'qaynB_f7aQPGC2Eb6FSZhYbMQT3Z0qGos7Sc1skVK6E',
43 |     }
44 |   },
45 | }
46 | 
47 | RealityEntitiesStatic = {
48 |   ['WarpExit'] = {
49 |     Position = { 12, 20 },
50 |     Type = 'Hidden',
51 |     Metadata = {
52 |       Interaction = {
53 |         DisplayName = 'Back To Dock',
54 |         Type = 'Warp',
55 |         Size = { 0.5, 0.5 },
56 |         Position = { 256, 145 },
57 |         Target = "LryOv-VD-3m-lpJDhmu6x1Fj09CwVvx-ETvMe4jZvbw",
58 |       },
59 |     },
60 |   },
61 |   ['V1dqh-v4Z4u0nTGJhF-ntHwyeBjNqVcoLXgtW3n7jQk'] = {
62 |     Position = { 12, 13 },
63 |     Type = 'Avatar',
64 |     Metadata = {
65 |       DisplayName = 'Charlotte',
66 |       SkinNumber = 2,
67 |       Interaction = {
68 |         Type = 'SchemaForm',
69 |         Id = "Charlotte"
70 |       },
71 |     },
72 |   },
73 | }
74 | --#endregion
75 | 
76 | return print("Loaded Reality Template")
77 | 


--------------------------------------------------------------------------------
/process/llm/LLMGraderDummy.lua:
--------------------------------------------------------------------------------
 1 | local responseLookup = {
 2 |   "Not even worth a penny",
 3 |   "Terrible, you should be ashamed of yourself.",
 4 |   "You should be embarrassed.",
 5 |   "Almost worthless",
 6 |   "Not good enough",
 7 |   "You can do better",
 8 |   "Not bad",
 9 |   "Good job",
10 |   "Great job",
11 |   "Excellent work",
12 |   "Absolutely Perfect!",
13 | }
14 | 
15 | function ProcessPetition(systemPrompt, userPrompt)
16 |   -- Random grade 1-10
17 |   local gradeNumber = math.random(0, 10)
18 |   return tostring(gradeNumber), responseLookup[gradeNumber + 1]
19 | end
20 | 
21 | Handlers.add(
22 |   "Inference",
23 |   Handlers.utils.hasMatchingTag("Action", "Inference"),
24 |   function(msg)
25 |     print("Inference")
26 | 
27 |     -- TODO: Whitelist
28 |     -- if not InferenceAllowList[msg.From] then
29 |     --   print("Inference not allowed: " .. msg.From)
30 |     --   return
31 |     -- end
32 | 
33 |     local systemPrompt = msg.Tags.SystemPrompt or DefaultSystemPrompt
34 |     local userPrompt = msg.Data
35 |     local Grade, Reason = ProcessPetition(systemPrompt, userPrompt)
36 |     print("Grade: " .. Grade .. ", Reason: " .. Reason)
37 | 
38 |     ao.send({
39 |       Target = msg.From,
40 |       Tags = {
41 |         Action = "Inference-Response",
42 |         Grade = Grade,
43 |         ["Original-Sender"] = msg.Tags["Original-Sender"],
44 |         ["Original-Message"] = msg.Tags["Original-Message"],
45 |       },
46 |       Data = Reason,
47 |     })
48 |   end
49 | )
50 | 


--------------------------------------------------------------------------------
/process/llm/LLMResponder.lua:
--------------------------------------------------------------------------------
 1 | -- Module: 1PdCJiXhNafpJbvC-sjxWTeNzbf9Q_RfUNs84GYoPm0
 2 | 
 3 | ModelID = ModelID or "M-OzkyjxWhSvWYF87p0kvmkuAEEkvOzIj4nMNoSIydc"
 4 | Llama = Llama or nil
 5 | 
 6 | DefaultMaxResponse = 30
 7 | DefaultSystemPrompt =
 8 |     "You are a llama in a digital world. " ..
 9 |     "Below are messages from users nearby. Respond to them. " ..
10 |     "Important: End your message with <END> "
11 | 
12 | InferenceAllowList = {
13 |   -- LlamaWanderer ProcessId
14 |   "_di-oSYyicR6IW5Dy7UzDxibD-paV23l_6-v0cziiA0",
15 | }
16 | 
17 | function Init()
18 |   Llama = require("llama")
19 |   Llama.logLevel = 4
20 |   Llama.load("/data/" .. ModelID)
21 | end
22 | 
23 | function ProcessMessages(systemPrompt, userPrompt)
24 |   Llama.setPrompt(GeneratePrompt(systemPrompt, userPrompt))
25 |   local response = ""
26 |   for i = 1, DefaultMaxResponse do
27 |     response = response .. Llama.next()
28 |     print("Response so far: " .. response)
29 |     local match = string.match(response, "(.*)<END>")
30 |     if match then
31 |       return match
32 |     end
33 |   end
34 |   return response
35 | end
36 | 
37 | function GeneratePrompt(systemPrompt, userPrompt)
38 |   return "<|SYSTEM|>" .. systemPrompt
39 |       .. "<|USER|>" .. userPrompt
40 |       .. "<|ASSISTANT|>"
41 | end
42 | 
43 | Handlers.add(
44 |   "Init",
45 |   Handlers.utils.hasMatchingTag("Action", "Init"),
46 |   function(msg)
47 |     ModelID = msg.Tags["Model-ID"] or ModelID
48 |     Init()
49 | 
50 |     DefaultSystemPrompt = msg.Tags.SystemPrompt or DefaultSystemPrompt
51 |     DefaultMaxResponse = msg.Tags["Max-Response"] or DefaultMaxResponse
52 | 
53 |     Send({
54 |       Action = "Responder-Initialized",
55 |     })
56 |   end
57 | )
58 | 
59 | Handlers.add(
60 |   "Inference",
61 |   Handlers.utils.hasMatchingTag("Action", "Inference"),
62 |   function(msg)
63 |     print("Inference")
64 | 
65 |     -- Whitelist
66 |     if not InferenceAllowList[msg.From] then
67 |       print("Inference not allowed: " .. msg.From)
68 |       return
69 |     end
70 | 
71 |     local systemPrompt = msg.Tags.SystemPrompt or DefaultSystemPrompt
72 |     local msgLog = msg.Data
73 |     local response = ProcessMessages(systemPrompt, msgLog)
74 |     if not response then
75 |       return print("No response generated")
76 |     end
77 | 
78 |     Send({
79 |       Target = msg.From,
80 |       Tags = {
81 |         Action = "Inference-Response",
82 |         ["Original-Sender"] = msg.Tags["Original-Sender"],
83 |         ["Original-Message"] = msg.Tags["Original-Message"],
84 |       },
85 |       Data = response,
86 |     })
87 |   end
88 | )
89 | 


--------------------------------------------------------------------------------
/process/llm/router/Config.test.lua:
--------------------------------------------------------------------------------
1 | LlamaRouter.InferenceAllowList = {
2 |   ["SOME RANDOM GUY"] = true,
3 | }
4 | 


--------------------------------------------------------------------------------
/process/misc/.gitignore:
--------------------------------------------------------------------------------
1 | *.json
2 | *.csv
3 | WhitelistData*.js
4 | BlacklistData*.js
5 | WaitlistData*.js
6 | FlaggedData*.js


--------------------------------------------------------------------------------
/process/misc/Blacklist.js:
--------------------------------------------------------------------------------
 1 | import { message, createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { blacklist } from "./BlacklistData9.js";
 3 | import fs from "fs";
 4 | 
 5 | const key = JSON.parse(
 6 |   fs.readFileSync("../.secret/deploy_sqlite_jwk.json", "utf8"),
 7 | );
 8 | 
 9 | async function main() {
10 |   const signer = createDataItemSigner(key);
11 | 
12 |   const batchSize = 50;
13 |   const blacklistBatches = [];
14 |   for (let i = 0; i < blacklist.length; i += batchSize) {
15 |     blacklistBatches.push(blacklist.slice(i, i + batchSize));
16 |   }
17 | 
18 |   for (const blacklistBatch of blacklistBatches) {
19 |     console.log(blacklistBatch);
20 |     const flagScript = blacklistBatch
21 |       .map((walletId) => `FlagWallet("${walletId}")`)
22 |       .join("\n");
23 |     const res = await message({
24 |       process: "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k",
25 |       tags: [{ name: "Action", value: "Eval" }],
26 |       data: flagScript,
27 |       signer,
28 |     });
29 |     console.log(`2 ${blacklistBatch.length}: ${res}`);
30 |     for (const unauthTarget of [
31 |       "kPjfXLFyjJogxGRRRe2ErdYNiexolpHpK6wGkz-UPVA", // King
32 |       "ptvbacSmqJPfgCXxPc9bcobs5Th2B_SxTf81vRNkRzk", // Banker
33 |       "o20viT_yWRooVjt7x84mobxADRM5y2XG9WMFr7U3_KQ", // Immigration
34 |     ]) {
35 |       const unauthScript = blacklistBatch
36 |         .map((walletId) => `UnauthoriseWallet("${walletId}")`)
37 |         .join("\n");
38 |       const res2 = await message({
39 |         process: unauthTarget,
40 |         tags: [{ name: "Action", value: "Eval" }],
41 |         data: unauthScript,
42 |         signer,
43 |       });
44 |       console.log(`${unauthTarget[0]} ${blacklistBatch.length}: ${res2}`);
45 |     }
46 | 
47 |     await new Promise((resolve) => setTimeout(resolve, 2_000));
48 |   }
49 | }
50 | 
51 | main();
52 | 


--------------------------------------------------------------------------------
/process/misc/Flag.js:
--------------------------------------------------------------------------------
 1 | import { message, createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { flagged } from "./FlaggedDataSpammer.js";
 3 | import fs from "fs";
 4 | 
 5 | const key = JSON.parse(
 6 |   fs.readFileSync("../.secret/deploy_sqlite_jwk.json", "utf8"),
 7 | );
 8 | 
 9 | async function main() {
10 |   const signer = createDataItemSigner(key);
11 | 
12 |   for (const walletId of flagged) {
13 |     const res = await message({
14 |       process: "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k",
15 |       tags: [{ name: "Action", value: "Eval" }],
16 |       data: `FlagWallet("${walletId}")`,
17 |       signer,
18 |     });
19 |     const res2 = await message({
20 |       process: "ptvbacSmqJPfgCXxPc9bcobs5Th2B_SxTf81vRNkRzk",
21 |       tags: [{ name: "Action", value: "Eval" }],
22 |       data: `UnauthoriseWallet("${walletId}")`,
23 |       signer,
24 |     });
25 |     console.log(`${walletId}: ${res} ${res2}`);
26 |   }
27 | }
28 | 
29 | main();
30 | 


--------------------------------------------------------------------------------
/process/misc/Tracking-.lua:
--------------------------------------------------------------------------------
1 | TrackingDb = nil
2 | TrackingDbAdmin = nil
3 | TrackingInitialized = false
4 | 


--------------------------------------------------------------------------------
/process/misc/WaitlistDump.js:
--------------------------------------------------------------------------------
 1 | import { dryrun } from "@permaweb/aoconnect";
 2 | import { writeFileSync } from "fs";
 3 | import json2csv from "json2csv";
 4 | 
 5 | dryrun({
 6 |   process: "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k",
 7 |   Owner: "K3FysbyRLGwzJByRZOOz1I6ybQtZI3kFNMtmkC4IkoQ",
 8 |   tags: [{ name: "Action", value: "Eval" }],
 9 |   data: `require('json').encode(WaitlistDbAdmin:exec([[
10 | SELECT
11 |   *
12 | FROM
13 |   (
14 |     SELECT
15 |       *,
16 |       ROW_NUMBER() OVER (ORDER BY BumpCount DESC, TimestampLastBumped ASC) AS Rank
17 |     FROM
18 |       Waitlist
19 |   )
20 | ]]))`,
21 | }).then((result) => {
22 |   console.log(result.Output.data.output);
23 |   writeFileSync("./misc/WaitlistDump.json", result.Output.data.output);
24 |   // convert to csv
25 |   // install command for json2csv: npm install json2csv
26 |   const csv = json2csv.parse(JSON.parse(result.Output.data.output), {
27 |     fields: [
28 |       "Rank",
29 |       "Id",
30 |       "WalletId",
31 |       "TimestampCreated",
32 |       "TimestampLastBumped",
33 |       "BumpCount",
34 |       "Authorised",
35 |       "Claimed",
36 |       "Flagged",
37 |     ],
38 |   });
39 |   writeFileSync("./misc/WaitlistDump.csv", csv);
40 | });
41 | 


--------------------------------------------------------------------------------
/process/misc/WaitlistDumpAuthed.js:
--------------------------------------------------------------------------------
 1 | import { dryrun } from "@permaweb/aoconnect";
 2 | import { writeFileSync } from "fs";
 3 | 
 4 | dryrun({
 5 |   process: "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k",
 6 |   Owner: "K3FysbyRLGwzJByRZOOz1I6ybQtZI3kFNMtmkC4IkoQ",
 7 |   tags: [{ name: "Action", value: "Eval" }],
 8 |   data: `require('json').encode(WaitlistDbAdmin:exec([[
 9 | SELECT
10 |   WalletId
11 | FROM
12 |   Waitlist
13 | WHERE
14 |   Authorised = 1 AND Flagged = 0
15 | ]]))`,
16 | }).then((result) => {
17 |   console.log(result.Output.data.output);
18 |   writeFileSync("./misc/WaitlistAuthed.json", result.Output.data.output);
19 | });
20 | 


--------------------------------------------------------------------------------
/process/misc/WaitlistMigration1.lua:
--------------------------------------------------------------------------------
 1 | -- ProcessId: 2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k
 2 | 
 3 | --#region Migration
 4 | 
 5 | local migration1 = [[
 6 | BEGIN TRANSACTION;
 7 | ALTER TABLE Waitlist
 8 | ADD COLUMN Flagged INTEGER DEFAULT 0;
 9 | ALTER TABLE Waitlist
10 | ADD COLUMN Authorised INTEGER DEFAULT 0;
11 | ALTER TABLE Waitlist
12 | ADD COLUMN Claimed INTEGER DEFAULT 0;
13 | COMMIT;
14 | ]]
15 | 
16 | function WaitlistDbMigration1()
17 |   WaitlistDb:exec(migration1)
18 | end
19 | 
20 | --#endregion
21 | 
22 | return print("Loaded Migration1 Script")
23 | 


--------------------------------------------------------------------------------
/process/misc/Whitelist.js:
--------------------------------------------------------------------------------
 1 | import { message, createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { whitelist } from "./WhitelistDataManual.js";
 3 | import fs from "fs";
 4 | 
 5 | const key = JSON.parse(
 6 |   fs.readFileSync("../.secret/deploy_sqlite_jwk.json", "utf8"),
 7 | );
 8 | 
 9 | async function main() {
10 |   const signer = createDataItemSigner(key);
11 | 
12 |   const batchSize = 50;
13 |   const whitelistBatches = [];
14 |   for (let i = 0; i < whitelist.length; i += batchSize) {
15 |     whitelistBatches.push(whitelist.slice(i, i + batchSize));
16 |   }
17 | 
18 |   for (const whitelistBatch of whitelistBatches) {
19 |     console.log(whitelistBatch);
20 |     const now = Date.now();
21 |     const script = whitelistBatch
22 |       .map((walletId) => `AuthoriseWallet("${walletId}", ${now})`)
23 |       .join("\n");
24 |     const res = await message({
25 |       process: "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k",
26 |       tags: [{ name: "Action", value: "Eval" }],
27 |       data: script,
28 |       signer,
29 |     });
30 |     console.log(`${whitelistBatch.length}: ${res}`);
31 |     for (const authTarget of [
32 |       "kPjfXLFyjJogxGRRRe2ErdYNiexolpHpK6wGkz-UPVA", // King
33 |       "ptvbacSmqJPfgCXxPc9bcobs5Th2B_SxTf81vRNkRzk", // Banker
34 |       "o20viT_yWRooVjt7x84mobxADRM5y2XG9WMFr7U3_KQ", // Immigration
35 |     ]) {
36 |       const authScript = whitelistBatch
37 |         .map((walletId) => `AuthoriseWallet("${walletId}")`)
38 |         .join("\n");
39 |       const res2 = await message({
40 |         process: authTarget,
41 |         tags: [{ name: "Action", value: "Eval" }],
42 |         data: authScript,
43 |         signer,
44 |       });
45 |       console.log(`${authTarget[0]} ${whitelistBatch.length}: ${res2}`);
46 |     }
47 | 
48 |     await new Promise((resolve) => setTimeout(resolve, 2_000));
49 |   }
50 | }
51 | 
52 | main();
53 | 


--------------------------------------------------------------------------------
/process/misc/_DANGER_WaitlistTrackingResetAuthClaimLogin.lua:
--------------------------------------------------------------------------------
 1 | local sqlite3 = require('lsqlite3')
 2 | TrackingDb = sqlite3.open_memory()
 3 | TrackingDbAdmin = require('DbAdmin').new(TrackingDb)
 4 | 
 5 | TrackingDbInit()
 6 | 
 7 | WaitlistDbAdmin:exec(string.format([[
 8 |   UPDATE Waitlist
 9 |   SET Authorised = %d,
10 |       Claimed = %d
11 | ]], 0, 0))
12 | 
13 | return print("Reset Auth/Claim/Login")
14 | 


--------------------------------------------------------------------------------
/process/misc/dbAdmin.lua:
--------------------------------------------------------------------------------
 1 | local dbAdmin = {}
 2 | dbAdmin.__index = dbAdmin
 3 | 
 4 | -- Function to create a new database explorer instance
 5 | function dbAdmin.new(db)
 6 |   local self = setmetatable({}, dbAdmin)
 7 |   self.db = db
 8 |   return self
 9 | end
10 | 
11 | -- Function to list all tables in the database
12 | function dbAdmin:tables()
13 |   local tables = {}
14 |   for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
15 |     table.insert(tables, row.name)
16 |   end
17 |   return tables
18 | end
19 | 
20 | -- Function to get the record count of a table
21 | function dbAdmin:count(tableName)
22 |   local count_query = string.format("SELECT COUNT(*) AS count FROM %s;", tableName)
23 |   for row in self.db:nrows(count_query) do
24 |     return row.count
25 |   end
26 | end
27 | 
28 | -- Function to execute a given SQL query
29 | function dbAdmin:exec(sql)
30 |   local results = {}
31 |   for row in self.db:nrows(sql) do
32 |     table.insert(results, row)
33 |   end
34 |   return results
35 | end
36 | 
37 | return dbAdmin
38 | 


--------------------------------------------------------------------------------
/process/module/AOS-SQLITE.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/process/module/AOS-SQLITE.wasm


--------------------------------------------------------------------------------
/process/module/AOS.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/process/module/AOS.wasm


--------------------------------------------------------------------------------
/process/npc/DbAdmin.lua:
--------------------------------------------------------------------------------
 1 | local dbAdmin = {}
 2 | dbAdmin.__index = dbAdmin
 3 | 
 4 | -- Function to create a new database explorer instance
 5 | function dbAdmin.new(db)
 6 |   local self = setmetatable({}, dbAdmin)
 7 |   self.db = db
 8 |   return self
 9 | end
10 | 
11 | -- Function to list all tables in the database
12 | function dbAdmin:tables()
13 |   local tables = {}
14 |   for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
15 |     table.insert(tables, row.name)
16 |   end
17 |   return tables
18 | end
19 | 
20 | -- Function to get the record count of a table
21 | function dbAdmin:count(tableName)
22 |   local count_query = string.format("SELECT COUNT(*) AS count FROM %s;", tableName)
23 |   for row in self.db:nrows(count_query) do
24 |     return row.count
25 |   end
26 | end
27 | 
28 | -- Function to execute a given SQL query
29 | function dbAdmin:exec(sql)
30 |   local results = {}
31 |   for row in self.db:nrows(sql) do
32 |     table.insert(results, row)
33 |   end
34 |   return results
35 | end
36 | 
37 | return dbAdmin
38 | 


--------------------------------------------------------------------------------
/process/npc/LlamaBankerPayouts.lua:
--------------------------------------------------------------------------------
 1 | local query = [[
 2 | SELECT
 3 |   Amount / 1000000000000 as `Llama`,
 4 |   COUNT(*) AS `N`
 5 | FROM
 6 |   Emissions
 7 | GROUP BY
 8 |   Amount
 9 | ]]
10 | local res = BankerDbAdmin:exec(query)
11 | local payouts = {}
12 | for _, row in ipairs(res) do
13 |   payouts[tostring(row.Llama) .. " $LLAMA"] = row.N
14 | end
15 | return print(payouts)
16 | 


--------------------------------------------------------------------------------
/process/npc/LlamaBankerPetitionCounts.lua:
--------------------------------------------------------------------------------
 1 | local query = [[
 2 | SELECT
 3 |   COUNT(*) AS `N`
 4 | FROM
 5 |   WarCredit
 6 | GROUP BY
 7 |   Sender
 8 | ]]
 9 | local res = BankerDbAdmin:exec(query)
10 | return print(require('json').encode(res))
11 | 


--------------------------------------------------------------------------------
/process/npc/LlamaCaptain.lua:
--------------------------------------------------------------------------------
 1 | -- Name: LlamaCaptain
 2 | -- PID: CJcM_n0-s3gtt_Xqcffu5-AseTFARioG7iK4B3myeU4
 3 | 
 4 | local json = require('json')
 5 | 
 6 | BOATMASTER_PID = "FdDJu16cgYE4KAT07jXtxvukntAE3JZaE3WrNnAjGis"
 7 | 
 8 | WARP_CURRENT = WARP_CURRENT or {
 9 |   Name = 'PalmIsland',
10 |   PID = 'OqvzTvpHYrfswvVZdsSldVTNBnyBOk7kZf-oqDdvUjg',
11 | }
12 | 
13 | Handlers.add(
14 |   'Schema',
15 |   Handlers.utils.hasMatchingTag('Action', 'Schema'),
16 |   function(msg)
17 |     print('Schema')
18 |     Send({
19 |       Target = msg.From,
20 |       Tags = { Type = 'Schema' },
21 |       Data = json.encode({
22 |         Sail = {
23 |           Title = 'Ready to set sail?',
24 |           Description = 'Last I heard, we were headed to ' ..
25 |               WARP_CURRENT.Name .. '. Jump aboard and we\'ll be on our way!',
26 |           Schema = nil,
27 |         },
28 |       })
29 |     })
30 |   end
31 | )
32 | 
33 | Handlers.add(
34 |   'WarpCurrentResponse',
35 |   Handlers.utils.hasMatchingTag('Action', 'WarpCurrent'),
36 |   function(msg)
37 |     print('WarpCurrent')
38 | 
39 |     if (msg.From ~= BOATMASTER_PID) then
40 |       return print('Unauthorized')
41 |     end
42 | 
43 |     WARP_CURRENT.Name = msg.Tags.WarpName
44 |     WARP_CURRENT.PID = msg.Tags.WarpPID
45 |   end
46 | )
47 | 
48 | Handlers.add(
49 |   'CronTick',
50 |   Handlers.utils.hasMatchingTag('Action', 'Cron'),
51 |   function(msg)
52 |     print('CronTick')
53 |     Send({
54 |       Target = BOATMASTER_PID,
55 |       Tags = {
56 |         Action = 'WarpCurrent',
57 |       },
58 |     })
59 |   end
60 | )
61 | 


--------------------------------------------------------------------------------
/process/npc/LlamaWanderer.test.js:
--------------------------------------------------------------------------------
 1 | import { test } from "node:test";
 2 | import * as assert from "node:assert";
 3 | import { Send } from "../aos.helper.js";
 4 | import fs from "node:fs";
 5 | 
 6 | const LlamaLand = "9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss";
 7 | 
 8 | test("load source", async () => {
 9 |   const code = fs.readFileSync("./npc/LlamaWanderer.lua", "utf-8");
10 |   const result = await Send({ Action: "Eval", Data: code });
11 | 
12 |   assert.equal(result.Output.data.output, undefined);
13 | });
14 | 


--------------------------------------------------------------------------------
/process/npc/_DANGER_LlamaBankerResetHistory.lua:
--------------------------------------------------------------------------------
1 | local sqlite3 = require('lsqlite3')
2 | BankerDb = sqlite3.open_memory()
3 | BankerDbAdmin = require('DbAdmin').new(BankerDb)
4 | 
5 | InitDb()
6 | 
7 | return print("Reset LlamaBanker History")
8 | 


--------------------------------------------------------------------------------
/process/npc/config/LlamaBankerDummy.lua:
--------------------------------------------------------------------------------
 1 | -- Name: LlamaBankerDummy2
 2 | -- ProcessId: ptvbacSmqJPfgCXxPc9bcobs5Th2B_SxTf81vRNkRzk
 3 | 
 4 | -- LIVE
 5 | WAITLIST_PROCESS = "2dFSGGlc5xJb0sWinAnEFHM-62tQEbhDzi1v5ldWX5k"
 6 | 
 7 | -- Test process
 8 | LLAMA_TOKEN_PROCESS = "pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY"
 9 | 
10 | -- LIVE
11 | -- WRAPPED_ARWEAVE_TOKEN_PROCESS = "xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10"
12 | 
13 | LLAMA_KING_PROCESS = "vkMZYPIUQAktEy6etxg3ALoLfqxHbq1tkUsp95Lb3wE"
14 | 
15 | -- Same as LlamaFed
16 | LLAMA_FED_CHAT_PROCESS = "QIFgbqEmk5MyJy01wuINfcRP_erGNNbhqHRkAQjxKgg"
17 | 
18 | MAXIMUM_PETITIONS_PER_DAY = 3
19 | 


--------------------------------------------------------------------------------
/process/npc/config/LlamaKingLlmJsonState.lua:
--------------------------------------------------------------------------------
 1 | -- Name: LlamaKingDummy
 2 | -- ProcessId: kPjfXLFyjJogxGRRRe2ErdYNiexolpHpK6wGkz-UPVA
 3 | 
 4 | IS_DISABLED = false
 5 | 
 6 | -- LIVE
 7 | LLAMA_TOKEN_PROCESS = "pazXumQI-HPH7iFGfTC-4_7biSnqz_U67oFAGry5zUY"
 8 | 
 9 | LLAMA_BANKER_PROCESS = "ptvbacSmqJPfgCXxPc9bcobs5Th2B_SxTf81vRNkRzk"
10 | 
11 | LLAMA_FED_CHAT_PROCESS = "QIFgbqEmk5MyJy01wuINfcRP_erGNNbhqHRkAQjxKgg"
12 | 
13 | -- LLMGraderJsonState workers
14 | LLM_WORKERS = {
15 |   --LlmGraderJsonTempT1_14
16 |   ['ffzOgyz_WJCaCzOh3wKkqgUl_KsS456WdEcP_1w7gEE'] = {
17 |     busyWithMessage = nil,
18 |     submittedTimestamp = nil,
19 |   },
20 |   --LlmGraderJsonTempT2_14
21 |   ['IXpX_xC3AF_3j6IkAVaLaUGmE6iC9yIbZpc7zdq3Fws'] = {
22 |     busyWithMessage = nil,
23 |     submittedTimestamp = nil,
24 |   },
25 |   --LlmGraderJsonTempT3_14
26 |   ['X4lhjqwQM08S9L_CYBz8GrapxWEY_f_D5z7WS5h72fk'] = {
27 |     busyWithMessage = nil,
28 |     submittedTimestamp = nil,
29 |   },
30 |   --LlmGraderJsonTempT4_14
31 |   ['WaL8YnXDFpZrOvDt43Iib7SavsWPbC28B-hphAuIL4Y'] = {
32 |     busyWithMessage = nil,
33 |     submittedTimestamp = nil,
34 |   },
35 |   --LlmGraderJsonTempT5_14
36 |   ['FaoPWToad6dEDZR9deqB-oNTF3oGTlH9PIVWkWiocp4'] = {
37 |     busyWithMessage = nil,
38 |     submittedTimestamp = nil,
39 |   },
40 |   --LlmGraderJsonTempT6_14
41 |   ['DN1UruyRvDrvVeLmiWrunL7eZJh84_dRLNl3ZUz8cC4'] = {
42 |     busyWithMessage = nil,
43 |     submittedTimestamp = nil,
44 |   },
45 | }
46 | 


--------------------------------------------------------------------------------
/process/npc/dock/LlamaDockman.lua:
--------------------------------------------------------------------------------
 1 | -- Name: LlamaDockman
 2 | -- PID: CJcM_n0-s3gtt_Xqcffu5-AseTFARioG7iK4B3myeU4
 3 | 
 4 | local json = require('json')
 5 | 
 6 | LLAMA_DECKHANDS_PROCESS = '4s8UBQC0ojTyP0m1ym5K-AHOgsIe5f84gQi_RvyJsns'
 7 | 
 8 | function ONE_TO_TWENTY_TWO()
 9 |   local result = {}
10 |   for i = 1, 22 do
11 |     table.insert(result, tostring(i))
12 |   end
13 |   return json.encode(result)
14 | end
15 | 
16 | function SetDockNumberTags()
17 |   return [[
18 | {
19 | "type": "object",
20 | "required": [
21 |   "Action",
22 |   "DockNumber"
23 | ],
24 | "properties": {
25 |   "Action": {
26 |     "type": "string",
27 |     "const": "SetDockNumber"
28 |   },
29 |   "DockNumber": {
30 |     "type": "string",
31 |     "enum": ]] .. ONE_TO_TWENTY_TWO() .. [[,
32 |     "title": "Dock number",
33 |     "description": "The dock to trade or configure"
34 |   }
35 | }
36 | }
37 | ]]
38 | end
39 | 
40 | Handlers.add(
41 |   'SchemaExternal',
42 |   Handlers.utils.hasMatchingTag('Action', 'SchemaExternal'),
43 |   function(msg)
44 |     print('SchemaExternal')
45 |     Send({
46 |       Target = msg.From,
47 |       Tags = { Type = 'SchemaExternal' },
48 |       Data = json.encode({
49 |         Docks = {
50 |           Target = LLAMA_DECKHANDS_PROCESS,
51 |           Title = 'I heard these dock spots are tradable!',
52 |           Description =
53 |           'Check them out here: https://ao-bazar.arweave.net/#/collection/MwmJ69knT0MpsihR369PsxPsTOceDEsL5dOj5IjoP48/assets/',
54 |           Schema = {
55 |             Tags = json.decode(SetDockNumberTags()),
56 |           },
57 |         },
58 |       })
59 |     })
60 |   end
61 | )
62 | 


--------------------------------------------------------------------------------
/process/npc/palmisland/ConfusedLlama.lua:
--------------------------------------------------------------------------------
 1 | -- Name: ConfusedLlama
 2 | -- PID: RgIs2u58lV3032gWhytemDNF2NmwZGKWQ0ClB0mqaK0
 3 | 
 4 | PALM_ISLAND_PID = "OqvzTvpHYrfswvVZdsSldVTNBnyBOk7kZf-oqDdvUjg"
 5 | 
 6 | CHAT_TARGET = PALM_ISLAND_PID
 7 | 
 8 | TIMESTAMP_LAST_MESSAGE_MS = TIMESTAMP_LAST_MESSAGE_MS or 0
 9 | 
10 | -- Limit sending a message to every so often
11 | COOLDOWN_MS = 30000 -- 30 seconds
12 | 
13 | Handlers.add(
14 |   'DefaultInteraction',
15 |   Handlers.utils.hasMatchingTag('Action', 'DefaultInteraction'),
16 |   function(msg)
17 |     print('DefaultInteraction')
18 |     if ((msg.Timestamp - TIMESTAMP_LAST_MESSAGE_MS) < COOLDOWN_MS) then
19 |       return print("Message on cooldown")
20 |     end
21 | 
22 |     Send({
23 |       Target = CHAT_TARGET,
24 |       Tags = {
25 |         Action = 'ChatMessage',
26 |         ['Author-Name'] = 'Confused Llama',
27 |       },
28 |       Data = "You call these Palm trees? RpgLand would have been a much better choice.",
29 |     })
30 | 
31 |     TIMESTAMP_LAST_MESSAGE_MS = msg.Timestamp
32 |   end
33 | )
34 | 


--------------------------------------------------------------------------------
/process/npc/palmisland/DbAdmin.lua:
--------------------------------------------------------------------------------
 1 | local dbAdmin = {}
 2 | dbAdmin.__index = dbAdmin
 3 | 
 4 | -- Function to create a new database explorer instance
 5 | function dbAdmin.new(db)
 6 |   local self = setmetatable({}, dbAdmin)
 7 |   self.db = db
 8 |   return self
 9 | end
10 | 
11 | -- Function to list all tables in the database
12 | function dbAdmin:tables()
13 |   local tables = {}
14 |   for row in self.db:nrows("SELECT name FROM sqlite_master WHERE type='table';") do
15 |     table.insert(tables, row.name)
16 |   end
17 |   return tables
18 | end
19 | 
20 | -- Function to get the record count of a table
21 | function dbAdmin:count(tableName)
22 |   local count_query = string.format("SELECT COUNT(*) AS count FROM %s;", tableName)
23 |   for row in self.db:nrows(count_query) do
24 |     return row.count
25 |   end
26 | end
27 | 
28 | -- Function to execute a given SQL query
29 | function dbAdmin:exec(sql)
30 |   local results = {}
31 |   for row in self.db:nrows(sql) do
32 |     table.insert(results, row)
33 |   end
34 |   return results
35 | end
36 | 
37 | return dbAdmin
38 | 


--------------------------------------------------------------------------------
/process/npc/rpgland/FantasyLlama.lua:
--------------------------------------------------------------------------------
 1 | -- Name: FantasyLlama
 2 | 
 3 | CHAT_TARGET = CHAT_TARGET or 'TODO: Put your world ID here'
 4 | 
 5 | -- To add this agent to your world, configure your Static Entities table, e.g.:
 6 | -- RealityEntitiesStatic = {
 7 | --   ['<your agent process Id>'] = {
 8 | --     Position = { 10, 10 },
 9 | --     Type = 'Avatar',
10 | --     Metadata = {
11 | --       DisplayName = 'Fantasy Llama',
12 | --       SkinNumber = 5,
13 | --       Interaction = {
14 | --         Type = 'Default',
15 | --       },
16 | --     },
17 | --   },
18 | -- }
19 | 
20 | TIMESTAMP_LAST_MESSAGE_MS = TIMESTAMP_LAST_MESSAGE_MS or 0
21 | 
22 | -- Limit sending a message to every so often
23 | COOLDOWN_MS = 10000 -- 10 seconds
24 | 
25 | Handlers.add(
26 |   'DefaultInteraction',
27 |   Handlers.utils.hasMatchingTag('Action', 'DefaultInteraction'),
28 |   function(msg)
29 |     print('DefaultInteraction')
30 |     if ((msg.Timestamp - TIMESTAMP_LAST_MESSAGE_MS) < COOLDOWN_MS) then
31 |       return print("Message on cooldown")
32 |     end
33 | 
34 |     Send({
35 |       Target = CHAT_TARGET,
36 |       Tags = {
37 |         Action = 'ChatMessage',
38 |         ['Author-Name'] = 'Fantasy Llama',
39 |       },
40 |       Data =
41 |       "Where on earth did you come from? I heard if you take the blue p...otion, you'll be able to return to your world.",
42 |     })
43 | 
44 |     TIMESTAMP_LAST_MESSAGE_MS = msg.Timestamp
45 |   end
46 | )
47 | 


--------------------------------------------------------------------------------
/process/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ao-test-kit",
 3 |   "type": "module",
 4 |   "version": "1.0.0",
 5 |   "description": "AOS Integration Test Kit",
 6 |   "scripts": {
 7 |     "test": "node --test",
 8 |     "test:sqlite": "FORMAT=wasm32-unknown-emscripten2 WASM=./module/AOS-SQLITE.wasm node --test",
 9 |     "dump": "node misc/WaitlistDump.js",
10 |     "dump:authed": "node misc/WaitlistDumpAuthed.js",
11 |     "whitelist": "node misc/Whitelist.js",
12 |     "blacklist": "node misc/Blacklist.js",
13 |     "flag": "node misc/Flag.js",
14 |     "entity-update": "node warp/_EXAMPLE-entity-update.js",
15 |     "warp-deploy": "node warp/_Deploy.js"
16 |   },
17 |   "keywords": [],
18 |   "author": "",
19 |   "license": "ISC",
20 |   "dependencies": {
21 |     "@permaweb/ao-loader": "^0.0.26",
22 |     "@permaweb/aoconnect": "^0.0.56",
23 |     "json2csv": "^6.0.0-alpha.2"
24 |   },
25 |   "engines": {
26 |     "node": ">=22"
27 |   }
28 | }
29 | 


--------------------------------------------------------------------------------
/process/warp/_EXAMPLE-entity-update.js:
--------------------------------------------------------------------------------
 1 | import { message, createDataItemSigner } from "@permaweb/aoconnect";
 2 | import fs from "fs";
 3 | 
 4 | const key = JSON.parse(fs.readFileSync("../.secret/personal.json", "utf8"));
 5 | 
 6 | async function main() {
 7 |   const signer = createDataItemSigner(key);
 8 | 
 9 |   const res = await message({
10 |     process: "JjR8CSShot3Hgw0IFfrPfMfCXIiXtm852Wi-__elX5w",
11 |     tags: [{ name: "Action", value: "Warp.UpdateTarget" }],
12 |     data: JSON.stringify({
13 |       // Target: "9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss",
14 |       Target: "QIFgbqEmk5MyJy01wuINfcRP_erGNNbhqHRkAQjxKgg",
15 |     }),
16 |     signer,
17 |   });
18 | 
19 |   console.log(res);
20 | }
21 | 
22 | main();
23 | 


--------------------------------------------------------------------------------
/process/warp/_EXAMPLE-entity-update.lua:
--------------------------------------------------------------------------------
 1 | local json = require("json")
 2 | 
 3 | Send({
 4 |   Target = "JjR8CSShot3Hgw0IFfrPfMfCXIiXtm852Wi-__elX5w",
 5 |   Tags = {
 6 |     Action = "Warp.UpdateTarget",
 7 |   },
 8 |   Data = json.encode({
 9 |     Target = "QIFgbqEmk5MyJy01wuINfcRP_erGNNbhqHRkAQjxKgg", -- Llama Fed
10 |   })
11 | })
12 | 


--------------------------------------------------------------------------------
/process/warp/entity-setup-00-globals.lua:
--------------------------------------------------------------------------------
1 | DISPLAY_NAME = "#X"
2 | DOCK_WORLD = "vtxDQx59thIrSrfN7Zn8AWDz0Vy496q360eVCCtN4Gs"
3 | DOCK_NUMBER = 1
4 | WARP_POSITION = { 10, 10 }
5 | WARP_TARGET_WORLD = "9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss"
6 | 


--------------------------------------------------------------------------------
/process/warp/entity-setup-01-create.lua:
--------------------------------------------------------------------------------
 1 | local json = require("json")
 2 | 
 3 | Send({
 4 |   Target = DOCK_WORLD,
 5 |   Tags = {
 6 |     Action = "Reality.EntityCreate",
 7 |   },
 8 |   Data = json.encode({
 9 |     Position = WARP_POSITION,
10 |     Type = "Hidden",
11 |     Metadata = {
12 |       DisplayName = DISPLAY_NAME,
13 |       Interaction = {
14 |         Type = "Warp",
15 |         Size = { 1, 2 },
16 |         Target = WARP_TARGET_WORLD,
17 |       }
18 |     }
19 |   })
20 | })
21 | 


--------------------------------------------------------------------------------
/process/warp/entity-setup-02-fix.lua:
--------------------------------------------------------------------------------
1 | Send({
2 |   Target = DOCK_WORLD,
3 |   Tags = {
4 |     Action = "Reality.EntityFix",
5 |   },
6 | })
7 | 


--------------------------------------------------------------------------------
/process/warp/entity-update.lua:
--------------------------------------------------------------------------------
 1 | local json = require("json")
 2 | 
 3 | PROFILE_REGISTRY = "SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY"
 4 | 
 5 | function HasBalance(id)
 6 |   return Balances[id] and tonumber(Balances[id]) > 0
 7 | end
 8 | 
 9 | PENDING_REQUESTS = {
10 |   -- {
11 |   --   Target = "<processId>",
12 |   --   DisplayName = "<displayName>",
13 |   -- }
14 | }
15 | 
16 | function UpdateWarp(target, displayName)
17 |   print("Updating Target", target)
18 | 
19 |   Send({
20 |     Target = DOCK_WORLD,
21 |     Tags = {
22 |       Action = "Reality.EntityCreate",
23 |     },
24 |     Data = json.encode({
25 |       Type = "Hidden",
26 |       Metadata = {
27 |         DisplayName = '#' .. DOCK_NUMBER .. ' ' .. (displayName or ''),
28 |         Interaction = {
29 |           Type = "Warp",
30 |           Size = { 1, 2 },
31 |           Target = target,
32 |           -- Position = Position,
33 |         },
34 |       }
35 |     })
36 |   })
37 | end
38 | 
39 | Handlers.add(
40 |   "Warp.UpdateTarget",
41 |   Handlers.utils.hasMatchingTag("Action", "Warp.UpdateTarget"),
42 |   function(msg)
43 |     local address = msg.From
44 | 
45 |     print("Warp.UpdateTarget", address)
46 | 
47 |     local target = msg.Tags.WorldTarget
48 |     local displayName = msg.Tags.WorldName
49 | 
50 |     if HasBalance(address) then
51 |       UpdateWarp(target, displayName)
52 |     else
53 |       PENDING_REQUESTS[address] = {
54 |         Target = target,
55 |         DisplayName = displayName,
56 |       }
57 | 
58 |       print("Sending Get-Profiles-By-Delegate")
59 |       Send({
60 |         Target = PROFILE_REGISTRY,
61 |         Tags = {
62 |           Action = "Get-Profiles-By-Delegate",
63 |         },
64 |         Data = json.encode({
65 |           Address = address,
66 |         })
67 |       })
68 |     end
69 |   end
70 | )
71 | 
72 | Handlers.add(
73 |   "Profile-Success",
74 |   Handlers.utils.hasMatchingTag("Action", "Profile-Success"),
75 |   function(msg)
76 |     print("Profile-Success")
77 | 
78 |     if msg.From ~= PROFILE_REGISTRY then
79 |       return print("Unauthorized Profile-Success")
80 |     end
81 | 
82 |     local data = json.decode(msg.Data)
83 |     for _, profile in ipairs(data) do
84 |       if HasBalance(profile.ProfileId) then
85 |         local pending = PENDING_REQUESTS[profile.CallerAddress]
86 |         if pending ~= nil then
87 |           UpdateWarp(pending.Target, pending.DisplayName)
88 |           PENDING_REQUESTS[profile.CallerAddress] = nil
89 |           return
90 |         else
91 |           print("No pending request for", profile.CallerAddress)
92 |         end
93 |       end
94 |     end
95 |   end
96 | )
97 | 


--------------------------------------------------------------------------------
/process/world/0_Singularity.lua:
--------------------------------------------------------------------------------
 1 | -- ProcessId: 96CutVBhNwtNzdT_zY_Fxdj6S_AjDJre3AA1gJgidro
 2 | 
 3 | RealityInfo = {
 4 |   Parent = nil,
 5 |   Name = 'Singularity',
 6 |   Dimensions = 0,
 7 |   -- Should `Render-With` be in the process Tag instead? Or maybe it comes from that Tag?
 8 |   ['Render-With'] = '0D-Null',
 9 | }
10 | 
11 | RealityParameters = {}
12 | 
13 | RealityEntitiesStatic = {
14 |   -- UniverseProcess
15 |   ['-wNWBTJSU9c8RqID5J3GZy074Rt9PEZbVmv383Mz6nQ'] = {
16 |     Position = {},
17 |   }
18 | }
19 | 


--------------------------------------------------------------------------------
/process/world/1_Universe.lua:
--------------------------------------------------------------------------------
 1 | -- ProcessId: -wNWBTJSU9c8RqID5J3GZy074Rt9PEZbVmv383Mz6nQ
 2 | 
 3 | RealityInfo = {
 4 |   Parent = '96CutVBhNwtNzdT_zY_Fxdj6S_AjDJre3AA1gJgidro',
 5 |   Name = 'Universe',
 6 |   Dimensions = 1,
 7 |   ['Render-With'] = '1D-Directory',
 8 | }
 9 | 
10 | RealityParameters = {}
11 | 
12 | RealityEntitiesStatic = {
13 |   -- WeaveWorldProcess
14 |   ['w0UvMR1XlVEjjNSaBn9F1qSkDPoIaWHJXzp5G5jjdAo'] = {
15 |     Position = { 0 },
16 |     Type = 'Unknown',
17 |     Metadata = {
18 |       Interaction = {
19 |         Type = 'Warp',
20 |       },
21 |     }
22 |   },
23 | }
24 | 
25 | -- TODO: "Boost" handler (Burn $wAR to boost a world)
26 | 
27 | -- TODO: Cron handler to recalcuate positions based on exponential decay (?) of Boost history
28 | -- As an optimisation, you could create a single exponential using which updates based on
29 | -- (Not sure how to construct this formula)
30 | 


--------------------------------------------------------------------------------
/process/world/20_PalmIsland.lua:
--------------------------------------------------------------------------------
 1 | -- Name: PalmIsland
 2 | -- ProcessId: OqvzTvpHYrfswvVZdsSldVTNBnyBOk7kZf-oqDdvUjg
 3 | 
 4 | --#region Model
 5 | 
 6 | RealityInfo = {
 7 |   Dimensions = 2,
 8 |   Name = 'PalmIsland',
 9 |   ['Render-With'] = '2D-Tile-0',
10 | }
11 | 
12 | RealityParameters = {
13 |   ['2D-Tile-0'] = {
14 |     Version = 0,
15 |     Spawn = { 45, 47 },
16 |     -- This is a tileset themed to Llama Land main island
17 |     Tileset = {
18 |       Type = 'Fixed',
19 |       Format = 'PNG',
20 |       TxId = 'h5Bo-Th9DWeYytRK156RctbPceREK53eFzwTiKi0pnE', -- TxId of the tileset in PNG format
21 |     },
22 |     -- This is a tilemap of sample small island
23 |     Tilemap = {
24 |       Type = 'Fixed',
25 |       Format = 'TMJ',
26 |       TxId = 'pLYUQOpqADXct_bvQDoIZMaud-7ZNCmWpy6ARAxvbR8', -- TxId of the tilemap in TMJ format
27 |       -- Since we are already setting the spawn in the middle, we don't need this
28 |       -- Offset = { -10, -10 },
29 |     },
30 |     PlayerSpriteTxId = '0WFjH89wzK8XAA1aLPzBBEUQ1uKpQe9Oz_pj8x1Wxpc',
31 |   },
32 | }
33 | 
34 | RealityEntitiesStatic = {
35 |   ['RgIs2u58lV3032gWhytemDNF2NmwZGKWQ0ClB0mqaK0'] = {
36 |     Position = { 45, 49 },
37 |     Type = 'Avatar',
38 |     Metadata = {
39 |       DisplayName = 'Confused Llama',
40 |       SkinNumber = 2,
41 |       Interaction = {
42 |         Type = 'Default',
43 |       },
44 |     },
45 |   },
46 |   ['D6sbK-aNv7doE9gjVbLxMbGKk58MToUTTq9j786UQsQ'] = {
47 |     Position = { 48, 45.5 },
48 |     Type = 'Avatar',
49 |     Metadata = {
50 |       DisplayName = 'Llama Joker',
51 |       -- Llama wif hat
52 |       SpriteTxId = '0WFjH89wzK8XAA1aLPzBBEUQ1uKpQe9Oz_pj8x1Wxpc',
53 |       Interaction = {
54 |         Type = 'SchemaExternalForm',
55 |         Id = 'MakeJoke'
56 |       },
57 |     },
58 |   },
59 |   ['9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss'] = {
60 |     Position = { 55.5, 48 },
61 |     Type = 'Hidden',
62 |     Metadata = {
63 |       Interaction = {
64 |         Type = 'Warp',
65 |         Size = { 0.5, 1 },
66 |         Position = { -7, 15 },
67 |       },
68 |     }
69 |   }
70 | }
71 | 
72 | --#endregion
73 | 
74 | return print("Loaded Reality Template")
75 | 


--------------------------------------------------------------------------------
/process/world/21_RpgLand.lua:
--------------------------------------------------------------------------------
 1 | -- Name: RpgLand
 2 | -- ProcessId: ZeDtHnbKThvHxN5NIudNRqtIlTle7KyGLQeiQTP1f_E
 3 | -- Tileset: https://bakudas.itch.io/generic-rpg-pack
 4 | 
 5 | --#region Model
 6 | 
 7 | RealityInfo = {
 8 |   Dimensions = 2,
 9 |   Name = 'RpgLand',
10 |   ['Render-With'] = '2D-Tile-0',
11 | }
12 | 
13 | RealityParameters = {
14 |   ['2D-Tile-0'] = {
15 |     Version = 0,
16 |     Spawn = { 36, 47 },
17 |     -- This is a tileset themed to Llama Land main island
18 |     Tileset = {
19 |       Type = 'Fixed',
20 |       Format = 'PNG',
21 |       TxId = 'xrOESiASoUY6raY42JlULO44jY-MYzb92SuYXSbP8L0', -- TxId of the tileset in PNG format
22 |     },
23 |     -- This is a tilemap of sample small island
24 |     Tilemap = {
25 |       Type = 'Fixed',
26 |       Format = 'TMJ',
27 |       TxId = 'TmVIwkR97Vo2JmeAD34o_PqLUc7UUIiJ2G0pb7uk5yo', -- TxId of the tilemap in TMJ format
28 |       -- Since we are already setting the spawn in the middle, we don't need this
29 |       -- Offset = { -10, -10 },
30 |     },
31 |   },
32 | }
33 | 
34 | RealityEntitiesStatic = {
35 |   -- Blue potion: Warp back to Llama land
36 |   ['9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss'] = {
37 |     Position = { 51, 57 },
38 |     Type = 'Hidden', -- 'Warp'/'Avatar' types are understood by `2D-Tile-0` renderer
39 |     Metadata = {
40 |       Interaction = {
41 |         Type = 'Warp',
42 |         Size = { 1, 1 }
43 |       },
44 |     }
45 |   },
46 |   -- TOOD: Red potion
47 |   -- ['9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss'] = {
48 |   --   Position = { 48, 57 },
49 |   --   Type = 'Hidden', -- 'Warp'/'Avatar' types are understood by `2D-Tile-0` renderer
50 |   --   Metadata = {
51 |   --     Interaction = {
52 |   --       Type = 'Warp',
53 |   --       Size = { 1, 1 }
54 |   --     },
55 |   --   }
56 |   -- },
57 |   ['2sOKN_T04Eik4zm2B_fyfEvAJCJVJjoXZNIWUegSQtw'] = {
58 |     Position = { 39, 44 },
59 |     Type = 'Avatar',
60 |     Metadata = {
61 |       DisplayName = 'Fantasy Llama',
62 |       SkinNumber = 5,
63 |       Interaction = {
64 |         Type = 'Default',
65 |       },
66 |     },
67 |   },
68 |   ['D5r-wBDfgo_Cx52uYoI8YiHp7QTqvpPbL8TtcbCoaXk'] = {
69 |     Position = { 65.5, 51.5 },
70 |     Type = 'Avatar',
71 |     Metadata = {
72 |       DisplayName = 'Llama Giver',
73 |       SkinNumber = 2,
74 |       Interaction = {
75 |         Type = 'SchemaForm',
76 |         Id = 'GetDonation',
77 |       },
78 |     },
79 |   }
80 | }
81 | 
82 | --#endregion
83 | 
84 | return print("Loaded Reality Template")
85 | 


--------------------------------------------------------------------------------
/process/world/22_TestLand.lua:
--------------------------------------------------------------------------------
 1 | -- PID Kh-PHmaRt0bykGUgyK4euVSknML6yHIwQPyR5xPvXxg
 2 | 
 3 | --#region Model
 4 | 
 5 | RealityInfo = {
 6 |   Dimensions = 2,
 7 |   Name = 'ExampleReality',
 8 |   ['Render-With'] = '2D-Tile-0',
 9 | }
10 | 
11 | RealityParameters = {
12 |   ['2D-Tile-0'] = {
13 |     Version = 0,
14 |     Spawn = { 5, 7 },
15 |     -- This is a tileset themed to Llama Land main island
16 |     Tileset = {
17 |       Type = 'Fixed',
18 |       Format = 'PNG',
19 |       TxId = 'h5Bo-Th9DWeYytRK156RctbPceREK53eFzwTiKi0pnE', -- TxId of the tileset in PNG format
20 |     },
21 |     -- This is a tilemap of sample small island
22 |     Tilemap = {
23 |       Type = 'Fixed',
24 |       Format = 'TMJ',
25 |       TxId = 'koH7Xcao-lLr1aXKX4mrcovf37OWPlHW76rPQEwCMMA', -- TxId of the tilemap in TMJ format
26 |       -- Since we are already setting the spawn in the middle, we don't need this
27 |       -- Offset = { -10, -10 },
28 |     },
29 |   },
30 | }
31 | 
32 | RealityEntitiesStatic = {
33 |   -- Warper
34 |   ['FdDJu16cgYE4KAT07jXtxvukntAE3JZaE3WrNnAjGis'] = {
35 |     Type = "Avatar",
36 |     Position = { 8, 8 },
37 |     Metadata = {
38 |       DisplayName = "Boatmaster",
39 |       SkinNumber = 3,
40 |       Interaction = {
41 |         Type = 'SchemaExternalForm',
42 |         Id = 'WarpVote',
43 |       },
44 |     },
45 |   },
46 |   ['CJcM_n0-s3gtt_Xqcffu5-AseTFARioG7iK4B3myeU4'] = {
47 |     Type = "Avatar",
48 |     Position = { 9, 9 },
49 |     Metadata = {
50 |       DisplayName = "Captain",
51 |       SkinNumber = 9,
52 |       Interaction = {
53 |         Type = 'SchemaForm',
54 |         Id = 'Sail',
55 |       },
56 |     },
57 |   }
58 | }
59 | 
60 | --#endregion
61 | 
62 | return print("Loaded Reality Template")
63 | 


--------------------------------------------------------------------------------
/process/world/2_WeaveWorld.lua:
--------------------------------------------------------------------------------
 1 | -- ProcessId: lNgVEhChWcW4OMoISEcTI06eWbNuzRypB3KAK_8f7NU
 2 | 
 3 | -- Fixed
 4 | RealityInfo = {
 5 |   Parent = '-wNWBTJSU9c8RqID5J3GZy074Rt9PEZbVmv383Mz6nQ',
 6 |   Name = 'WeaveWorld',
 7 |   Dimensions = 2,
 8 |   ['Render-With'] = '2D-Tile-0',
 9 | }
10 | 
11 | -- Manually defined by the world owner
12 | RealityParameters = {
13 |   ['2D-Tile-0'] = {
14 |     Version = 0,
15 |     -- This will be a tileset themed with a sea & islands
16 |     Tileset = {
17 |       Type = 'Fixed',
18 |       Format = 'PNG',
19 |       TxId = 'todo', -- TxId of the tileset in PNG format
20 |     },
21 |     -- This will be a tilemap of an infinite sea with islands dotted
22 |     Tilemap = {
23 |       Type = 'Composite',
24 |       Parts = {
25 |         -- This will be a static tilemap of the origin area
26 |         {
27 |           Type = 'Fixed',
28 |           Format = 'TMJ',
29 |           TxId = 'todo',
30 |         },
31 |         -- To make this infinite, we will have to do something custom... like this?
32 |         {
33 |           Type = 'Fixed',
34 |           Format = 'TMJ',
35 |           TxId = 'todo',
36 |           Parameters = {
37 |             Repeat = true,
38 |           },
39 |         },
40 |       },
41 |     },
42 |   }
43 | }
44 | 
45 | -- Player entities can be updated by player actions, i.e. movement
46 | RealityEntitiesStatic = {
47 |   -- OriginIslandProcess
48 |   ['--5ozI7qKmLyBxcZJr_T62iGltnKE2ei1jOoQrKKfRA'] = {
49 |     Position = { 2, 2 },
50 |     Type = 'Hidden', -- These types are understood by the `2D-Tile-0` renderer
51 |     Metadata = {
52 |       Interaction = {
53 |         Type = 'Warp',
54 |       },
55 |     }
56 |   },
57 |   ['SomePlayerProcessId'] = {
58 |     Position = { 0, 0 },
59 |     Type = 'Avatar',
60 |   },
61 |   ['SomeBotProcessId'] = {
62 |     Position = { 0, 0 },
63 |     Type = 'Avatar',
64 |   },
65 | }
66 | 
67 | -- TODO: Purchasing land
68 | 


--------------------------------------------------------------------------------
/process/world/90_RegisterWarp.lua:
--------------------------------------------------------------------------------
 1 | local json = require('json')
 2 | -- LlamaLand
 3 | WORLD_TARGET = '9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss'
 4 | -- Testland
 5 | -- WORLD_TARGET = 'Kh-PHmaRt0bykGUgyK4euVSknML6yHIwQPyR5xPvXxg'
 6 | 
 7 | -- Send({
 8 | --   Target = WORLD_TARGET,
 9 | --   Tags = {
10 | --     Action = 'Reality.EntityCreate',
11 | --   },
12 | --   Data = json.encode({
13 | --     Type = 'Hidden',
14 | --     -- By RHS boat
15 | --     Position = { 8, 15 },
16 | --     Metadata = {
17 | --       Interaction = {
18 | --         Type = 'Warp',
19 | --         Size = { 0.5, 1 }
20 | --       },
21 | --     }
22 | --   })
23 | -- })
24 | 
25 | Send({
26 |   Target = WORLD_TARGET,
27 |   Tags = {
28 |     Action = 'Reality.EntityUpdatePosition',
29 |   },
30 |   Data = json.encode({
31 |     Position = { 8.5, 15 },
32 |   })
33 | })
34 | 
35 | Send({
36 |   Target = WORLD_TARGET,
37 |   Tags = {
38 |     Action = 'Reality.EntityFix',
39 |   },
40 | })
41 | 


--------------------------------------------------------------------------------
/public/android-chrome-192x192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/android-chrome-192x192.png


--------------------------------------------------------------------------------
/public/android-chrome-512x512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/android-chrome-512x512.png


--------------------------------------------------------------------------------
/public/apple-touch-icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/apple-touch-icon.png


--------------------------------------------------------------------------------
/public/assets/branding/LLAMA_coin_icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/LLAMA_coin_icon.png


--------------------------------------------------------------------------------
/public/assets/branding/LLAMA_coin_large.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/LLAMA_coin_large.png


--------------------------------------------------------------------------------
/public/assets/branding/LLAMA_purple.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/LLAMA_purple.png


--------------------------------------------------------------------------------
/public/assets/branding/LLAMA_purple_small.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/LLAMA_purple_small.png


--------------------------------------------------------------------------------
/public/assets/branding/LLAMA_red.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/LLAMA_red.png


--------------------------------------------------------------------------------
/public/assets/branding/main_bg.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/main_bg.jpg


--------------------------------------------------------------------------------
/public/assets/branding/main_bg.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/main_bg.png


--------------------------------------------------------------------------------
/public/assets/branding/main_logo.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/main_logo.png


--------------------------------------------------------------------------------
/public/assets/branding/main_logo_small.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/branding/main_logo_small.png


--------------------------------------------------------------------------------
/public/assets/serenade.webm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/serenade.webm


--------------------------------------------------------------------------------
/public/assets/sprites/atlas/faune.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/atlas/faune.png


--------------------------------------------------------------------------------
/public/assets/sprites/invis.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/invis.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_0.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_0.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_1.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_1.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_2.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_2.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_3.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_3.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_4.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_4.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_5.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_5.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_6.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_6.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_7.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_7.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_8.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_8.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_9.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_9.png


--------------------------------------------------------------------------------
/public/assets/sprites/llama/llama_wif_hat.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/llama/llama_wif_hat.png


--------------------------------------------------------------------------------
/public/assets/sprites/mona.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/mona.png


--------------------------------------------------------------------------------
/public/assets/sprites/scream.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/scream.png


--------------------------------------------------------------------------------
/public/assets/sprites/simple_atlas.json:
--------------------------------------------------------------------------------
  1 | {
  2 |   "meta": {
  3 |     "size": {
  4 |       "w": 96,
  5 |       "h": 38
  6 |     },
  7 |     "frameSize": {
  8 |       "w": 24,
  9 |       "h": 38
 10 |     }
 11 |   },
 12 |   "frames": [
 13 |     {
 14 |       "filename": "idle_00.png",
 15 |       "frame": {
 16 |         "x": 0,
 17 |         "y": 0,
 18 |         "w": 24,
 19 |         "h": 38
 20 |       },
 21 |       "rotated": false,
 22 |       "trimmed": false,
 23 |       "spriteSourceSize": {
 24 |         "x": 0,
 25 |         "y": 0,
 26 |         "w": 24,
 27 |         "h": 38
 28 |       },
 29 |       "sourceSize": {
 30 |         "w": 24,
 31 |         "h": 38
 32 |       }
 33 |     },
 34 |     {
 35 |       "filename": "idle_01.png",
 36 |       "frame": {
 37 |         "x": 24,
 38 |         "y": 0,
 39 |         "w": 24,
 40 |         "h": 38
 41 |       },
 42 |       "rotated": false,
 43 |       "trimmed": false,
 44 |       "spriteSourceSize": {
 45 |         "x": 0,
 46 |         "y": 0,
 47 |         "w": 24,
 48 |         "h": 38
 49 |       },
 50 |       "sourceSize": {
 51 |         "w": 24,
 52 |         "h": 38
 53 |       }
 54 |     },
 55 |     {
 56 |       "filename": "idle_02.png",
 57 |       "frame": {
 58 |         "x": 48,
 59 |         "y": 0,
 60 |         "w": 24,
 61 |         "h": 38
 62 |       },
 63 |       "rotated": false,
 64 |       "trimmed": false,
 65 |       "spriteSourceSize": {
 66 |         "x": 0,
 67 |         "y": 0,
 68 |         "w": 24,
 69 |         "h": 38
 70 |       },
 71 |       "sourceSize": {
 72 |         "w": 24,
 73 |         "h": 38
 74 |       }
 75 |     },
 76 |     {
 77 |       "filename": "idle_03.png",
 78 |       "frame": {
 79 |         "x": 72,
 80 |         "y": 0,
 81 |         "w": 24,
 82 |         "h": 38
 83 |       },
 84 |       "rotated": false,
 85 |       "trimmed": false,
 86 |       "spriteSourceSize": {
 87 |         "x": 0,
 88 |         "y": 0,
 89 |         "w": 24,
 90 |         "h": 38
 91 |       },
 92 |       "sourceSize": {
 93 |         "w": 24,
 94 |         "h": 38
 95 |       }
 96 |     }
 97 |   ],
 98 |   "animations": {
 99 |     "idle": [
100 |       "idle_00.png",
101 |       "idle_01.png",
102 |       "idle_02.png",
103 |       "idle_03.png"
104 |     ]
105 |   }
106 | }


--------------------------------------------------------------------------------
/public/assets/sprites/speech_md.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/speech_md.png


--------------------------------------------------------------------------------
/public/assets/sprites/speech_sm.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/sprites/speech_sm.png


--------------------------------------------------------------------------------
/public/assets/tutorial/click_king.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/tutorial/click_king.png


--------------------------------------------------------------------------------
/public/assets/tutorial/click_npc.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/tutorial/click_npc.png


--------------------------------------------------------------------------------
/public/assets/video.webm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/assets/video.webm


--------------------------------------------------------------------------------
/public/favicon-16x16.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/favicon-16x16.png


--------------------------------------------------------------------------------
/public/favicon-32x32.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/favicon-32x32.png


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/favicon.ico


--------------------------------------------------------------------------------
/public/fonts/Undead_Pixel_11.ttf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/fonts/Undead_Pixel_11.ttf


--------------------------------------------------------------------------------
/public/fonts/Undead_Pixel_8.ttf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/fonts/Undead_Pixel_8.ttf


--------------------------------------------------------------------------------
/public/llamaland_profilePic.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/llamaland_profilePic.png


--------------------------------------------------------------------------------
/public/llamaland_profilePic_8bit.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/llamaland_profilePic_8bit.png


--------------------------------------------------------------------------------
/public/llamaland_profilePic_8bit_admin.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/llamaland_profilePic_8bit_admin.png


--------------------------------------------------------------------------------
/public/llamaland_profilePic_8bit_king.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/llamaland_profilePic_8bit_king.png


--------------------------------------------------------------------------------
/public/llamaland_profilePic_8bit_user.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/llamaland_profilePic_8bit_user.png


--------------------------------------------------------------------------------
/public/portrait-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/elliotsayes/Reality/8686b923406362e553321cfee7422cbbbcb124a6/public/portrait-default.png


--------------------------------------------------------------------------------
/public/site.webmanifest:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "Llama Land",
 3 |   "short_name": "Llama Land",
 4 |   "icons": [
 5 |     {
 6 |       "src": "/android-chrome-192x192.png",
 7 |       "sizes": "192x192",
 8 |       "type": "image/png"
 9 |     },
10 |     {
11 |       "src": "/android-chrome-512x512.png",
12 |       "sizes": "512x512",
13 |       "type": "image/png"
14 |     }
15 |   ],
16 |   "theme_color": "#000000",
17 |   "background_color": "#000000",
18 |   "display": "standalone"
19 | }
20 | 


--------------------------------------------------------------------------------
/scripts/generate_atlas.js:
--------------------------------------------------------------------------------
 1 | import fs from "node:fs";
 2 | 
 3 | const spriteSizePx = {
 4 |   w: 24,
 5 |   h: 38,
 6 | };
 7 | 
 8 | const spriteSheetSizePx = {
 9 |   w: spriteSizePx.w * 7,
10 |   h: spriteSizePx.h * 4,
11 | };
12 | 
13 | const rows = [
14 |   {
15 |     offset: 1,
16 |     prefix: "idle",
17 |     count: 4,
18 |   },
19 |   {
20 |     offset: 2,
21 |     prefix: "walk",
22 |     count: 4,
23 |   },
24 |   {
25 |     offset: 1,
26 |     prefix: "emote",
27 |     count: 4,
28 |     fps: 16,
29 |   },
30 |   {
31 |     offset: 2,
32 |     prefix: "run",
33 |     count: 4,
34 |     fps: 16,
35 |   },
36 | ];
37 | 
38 | const meta = {
39 |   // image: "Primary.png",
40 |   size: spriteSheetSizePx,
41 |   frameSize: spriteSizePx,
42 |   // scale: "1",
43 |   animations: rows
44 |     .map((row) => ({
45 |       [row.prefix]: {
46 |         ...(row.fps && { fps: row.fps }),
47 |       },
48 |     }))
49 |     .reduce((acc, val) => ({ ...acc, ...val }), {}),
50 | };
51 | 
52 | function pad2(num) {
53 |   return num.toString().padStart(2, "0");
54 | }
55 | 
56 | const frames = [];
57 | rows.forEach((row) => {
58 |   for (let i = 0; i < row.count; i++) {
59 |     const frame = {
60 |       filename: `${row.prefix}_${pad2(i)}`,
61 |       frame: {
62 |         x: i * (row.mod || 1) * spriteSizePx.w,
63 |         y: row.offset * spriteSizePx.h,
64 |         w: spriteSizePx.w,
65 |         h: spriteSizePx.h,
66 |       },
67 |       rotated: false,
68 |       trimmed: false,
69 |       spriteSourceSize: {
70 |         x: 0,
71 |         y: 0,
72 |         w: spriteSizePx.w,
73 |         h: spriteSizePx.h,
74 |       },
75 |       sourceSize: {
76 |         w: spriteSizePx.w,
77 |         h: spriteSizePx.h,
78 |       },
79 |     };
80 |     frames.push(frame);
81 |   }
82 | });
83 | 
84 | const atlas = {
85 |   meta,
86 |   frames,
87 | };
88 | 
89 | fs.writeFileSync(
90 |   "public/assets/sprites/default_atlas.json",
91 |   JSON.stringify(atlas, undefined, 2),
92 | );
93 | 


--------------------------------------------------------------------------------
/src/App.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   RouterProvider,
 3 |   createHashHistory,
 4 |   createRouter,
 5 | } from "@tanstack/react-router";
 6 | import { routeTree } from "./routeTree.gen";
 7 | import { QueryClientProvider } from "@tanstack/react-query";
 8 | import { queryClient } from "./lib/query";
 9 | import { GameStateProvider } from "@/context/GameStateContext"; // Import the GameStateProvider
10 | 
11 | const hashHistory = createHashHistory();
12 | 
13 | const router = createRouter({ routeTree, history: hashHistory });
14 | declare module "@tanstack/react-router" {
15 |   interface Register {
16 |     router: typeof router;
17 |   }
18 | }
19 | 
20 | export function App() {
21 |   return (
22 |     <GameStateProvider> {/* Wrap the components inside GameStateProvider */}
23 |       <QueryClientProvider client={queryClient}>
24 |         <RouterProvider router={router} />
25 |       </QueryClientProvider>
26 |     </GameStateProvider>
27 |   );
28 | }
29 | 


--------------------------------------------------------------------------------
/src/components/ui/button.stories.ts:
--------------------------------------------------------------------------------
 1 | import type { Meta, StoryObj } from "@storybook/react";
 2 | import { fn } from "@storybook/test";
 3 | import { Button } from "./button";
 4 | 
 5 | // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
 6 | const meta = {
 7 |   title: "ui/Button",
 8 |   component: Button,
 9 |   parameters: {
10 |     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
11 |     layout: "centered",
12 |   },
13 |   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
14 |   tags: ["autodocs"],
15 |   // More on argTypes: https://storybook.js.org/docs/api/argtypes
16 |   argTypes: {},
17 |   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
18 |   args: { onClick: fn(), children: "Button Text" },
19 | } satisfies Meta<typeof Button>;
20 | 
21 | export default meta;
22 | type Story = StoryObj<typeof meta>;
23 | 
24 | // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
25 | export const Primary: Story = {
26 |   args: {
27 |     variant: "default",
28 |   },
29 | };
30 | 
31 | export const Secondary: Story = {
32 |   args: {
33 |     variant: "secondary",
34 |   },
35 | };
36 | 
37 | export const Large: Story = {
38 |   args: {
39 |     size: "lg",
40 |   },
41 | };
42 | 
43 | export const Small: Story = {
44 |   args: {
45 |     size: "sm",
46 |   },
47 | };
48 | 
49 | export const Destructive: Story = {
50 |   args: {
51 |     variant: "destructive",
52 |   },
53 | };
54 | 


--------------------------------------------------------------------------------
/src/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import { Slot } from "@radix-ui/react-slot";
 3 | import { cva, type VariantProps } from "class-variance-authority";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | 
 7 | const buttonVariants = cva(
 8 |   "inline-flex items-center justify-center whitespace-nowrap font-undead-pixel text-[1.375rem] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
 9 |   {
10 |     variants: {
11 |       variant: {
12 |         default: "bg-primary text-primary-foreground hover:bg-primary/90",
13 |         destructive:
14 |           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
15 |         outline:
16 |           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
17 |         secondary:
18 |           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
19 |         ghost: "hover:bg-accent hover:text-accent-foreground",
20 |         link: "text-primary underline-offset-4 hover:underline",
21 |       },
22 |       size: {
23 |         default: "h-10 px-4 py-2 w-full",
24 |         sm: "h-9 rounded-md px-3",
25 |         lg: "h-11 rounded-md px-8 w-full",
26 |         icon: "h-10 w-10",
27 |       },
28 |     },
29 |     defaultVariants: {
30 |       variant: "default",
31 |       size: "default",
32 |     },
33 |   },
34 | );
35 | 
36 | export interface ButtonProps
37 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
38 |     VariantProps<typeof buttonVariants> {
39 |   asChild?: boolean;
40 | }
41 | 
42 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
43 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
44 |     const Comp = asChild ? Slot : "button";
45 |     return (
46 |       <Comp
47 |         className={cn(buttonVariants({ variant, size, className }))}
48 |         ref={ref}
49 |         {...props}
50 |       />
51 |     );
52 |   },
53 | );
54 | Button.displayName = "Button";
55 | 
56 | export { Button, buttonVariants };
57 | 


--------------------------------------------------------------------------------
/src/components/ui/card.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | 
 5 | const Card = React.forwardRef<
 6 |   HTMLDivElement,
 7 |   React.HTMLAttributes<HTMLDivElement>
 8 | >(({ className, ...props }, ref) => (
 9 |   <div
10 |     ref={ref}
11 |     className={cn(
12 |       `bg-brownCustom relative text-card-foreground
13 |       before:absolute before:left-[-3px] before:right-[-3px] before:top-[3px] before:bottom-[3px] before:bg-brownCustom before:z-[-1]
14 |       after:absolute after:left-[3px] after:right-[3px] after:top-[-3px] after:bottom-[-3px] after:bg-brownCustom after:z-[-1]
15 |       `,
16 |       className,
17 |     )}
18 |     {...props}
19 |   />
20 | ));
21 | Card.displayName = "Card";
22 | 
23 | const CardHeader = React.forwardRef<
24 |   HTMLDivElement,
25 |   React.HTMLAttributes<HTMLDivElement>
26 | >(({ className, ...props }, ref) => (
27 |   <div
28 |     ref={ref}
29 |     className={cn("flex flex-col space-y-1.5 p-6", className)}
30 |     {...props}
31 |   />
32 | ));
33 | CardHeader.displayName = "CardHeader";
34 | 
35 | const CardTitle = React.forwardRef<
36 |   HTMLParagraphElement,
37 |   React.HTMLAttributes<HTMLHeadingElement>
38 | >(({ className, ...props }, ref) => (
39 |   <h3
40 |     ref={ref}
41 |     className={cn(
42 |       "text-xl font-semibold leading-none tracking-tight font-Press-Start-2P",
43 |       className,
44 |     )}
45 |     {...props}
46 |   />
47 | ));
48 | CardTitle.displayName = "CardTitle";
49 | 
50 | const CardDescription = React.forwardRef<
51 |   HTMLParagraphElement,
52 |   React.HTMLAttributes<HTMLParagraphElement>
53 | >(({ className, ...props }, ref) => (
54 |   <p
55 |     ref={ref}
56 |     className={cn("text-sm text-muted-foreground", className)}
57 |     {...props}
58 |   />
59 | ));
60 | CardDescription.displayName = "CardDescription";
61 | 
62 | const CardContent = React.forwardRef<
63 |   HTMLDivElement,
64 |   React.HTMLAttributes<HTMLDivElement>
65 | >(({ className, ...props }, ref) => (
66 |   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
67 | ));
68 | CardContent.displayName = "CardContent";
69 | 
70 | const CardFooter = React.forwardRef<
71 |   HTMLDivElement,
72 |   React.HTMLAttributes<HTMLDivElement>
73 | >(({ className, ...props }, ref) => (
74 |   <div
75 |     ref={ref}
76 |     className={cn("flex items-center p-6 pt-0", className)}
77 |     {...props}
78 |   />
79 | ));
80 | CardFooter.displayName = "CardFooter";
81 | 
82 | export {
83 |   Card,
84 |   CardHeader,
85 |   CardFooter,
86 |   CardTitle,
87 |   CardDescription,
88 |   CardContent,
89 | };
90 | 


--------------------------------------------------------------------------------
/src/components/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | 
 5 | export interface InputProps
 6 |   extends React.InputHTMLAttributes<HTMLInputElement> {}
 7 | 
 8 | const Input = React.forwardRef<HTMLInputElement, InputProps>(
 9 |   ({ className, type, ...props }, ref) => {
10 |     return (
11 |       <input
12 |         type={type}
13 |         className={cn(
14 |           "flex h-10 w-full border border-input bg-background px-3 py-2 ring-offset-background font-undead-pixel text-22px file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
15 |           className,
16 |         )}
17 |         ref={ref}
18 |         {...props}
19 |       />
20 |     );
21 |   },
22 | );
23 | Input.displayName = "Input";
24 | 
25 | export { Input };
26 | 


--------------------------------------------------------------------------------
/src/components/ui/label.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as LabelPrimitive from "@radix-ui/react-label";
 3 | import { cva, type VariantProps } from "class-variance-authority";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | 
 7 | const labelVariants = cva(
 8 |   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
 9 | );
10 | 
11 | const Label = React.forwardRef<
12 |   React.ElementRef<typeof LabelPrimitive.Root>,
13 |   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
14 |     VariantProps<typeof labelVariants>
15 | >(({ className, ...props }, ref) => (
16 |   <LabelPrimitive.Root
17 |     ref={ref}
18 |     className={cn(labelVariants(), className)}
19 |     {...props}
20 |   />
21 | ));
22 | Label.displayName = LabelPrimitive.Root.displayName;
23 | 
24 | export { Label };
25 | 


--------------------------------------------------------------------------------
/src/components/ui/popover.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as PopoverPrimitive from "@radix-ui/react-popover";
 3 | 
 4 | import { cn } from "@/lib/utils";
 5 | 
 6 | const Popover = PopoverPrimitive.Root;
 7 | 
 8 | const PopoverTrigger = PopoverPrimitive.Trigger;
 9 | 
10 | const PopoverContent = React.forwardRef<
11 |   React.ElementRef<typeof PopoverPrimitive.Content>,
12 |   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
13 | >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
14 |   <PopoverPrimitive.Portal>
15 |     <PopoverPrimitive.Content
16 |       ref={ref}
17 |       align={align}
18 |       sideOffset={sideOffset}
19 |       className={cn(
20 |         "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21 |         className,
22 |       )}
23 |       {...props}
24 |     />
25 |   </PopoverPrimitive.Portal>
26 | ));
27 | PopoverContent.displayName = PopoverPrimitive.Content.displayName;
28 | 
29 | export { Popover, PopoverTrigger, PopoverContent };
30 | 


--------------------------------------------------------------------------------
/src/components/ui/sonner.tsx:
--------------------------------------------------------------------------------
 1 | import { useTheme } from "next-themes";
 2 | import { Toaster as Sonner } from "sonner";
 3 | 
 4 | type ToasterProps = React.ComponentProps<typeof Sonner>;
 5 | 
 6 | const Toaster = ({ ...props }: ToasterProps) => {
 7 |   const { theme = "system" } = useTheme();
 8 | 
 9 |   return (
10 |     <Sonner
11 |       theme={theme as ToasterProps["theme"]}
12 |       className="toaster group"
13 |       toastOptions={{
14 |         classNames: {
15 |           toast:
16 |             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
17 |           description: "group-[.toast]:text-muted-foreground",
18 |           actionButton:
19 |             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
20 |           cancelButton:
21 |             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
22 |         },
23 |       }}
24 |       {...props}
25 |     />
26 |   );
27 | };
28 | 
29 | export { Toaster };
30 | 


--------------------------------------------------------------------------------
/src/components/ui/tooltip.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | import * as TooltipPrimitive from "@radix-ui/react-tooltip";
 3 | 
 4 | import { cn } from "@/lib/utils";
 5 | 
 6 | const TooltipProvider = TooltipPrimitive.Provider;
 7 | 
 8 | const Tooltip = TooltipPrimitive.Root;
 9 | 
10 | const TooltipTrigger = TooltipPrimitive.Trigger;
11 | 
12 | const TooltipContent = React.forwardRef<
13 |   React.ElementRef<typeof TooltipPrimitive.Content>,
14 |   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
15 | >(({ className, sideOffset = 4, ...props }, ref) => (
16 |   <TooltipPrimitive.Content
17 |     ref={ref}
18 |     sideOffset={sideOffset}
19 |     className={cn(
20 |       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21 |       className,
22 |     )}
23 |     {...props}
24 |   />
25 | ));
26 | TooltipContent.displayName = TooltipPrimitive.Content.displayName;
27 | 
28 | export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
29 | 


--------------------------------------------------------------------------------
/src/context/GameStateContext.tsx:
--------------------------------------------------------------------------------
 1 | import React, { createContext, useContext, useState, ReactNode } from 'react';
 2 | import { gameStateStore } from '@/lib/gameStateStore';
 3 | 
 4 | interface GameStateContextType {
 5 |   isChatFocused: boolean;
 6 |   setChatFocus: (focus: boolean) => void;
 7 | }
 8 | 
 9 | const GameStateContext = createContext<GameStateContextType | undefined>(undefined);
10 | 
11 | export const GameStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
12 |   const [isChatFocused, setIsChatFocused] = useState(false);
13 | 
14 |   const setChatFocus = (focus: boolean) => {
15 |     setIsChatFocused(focus);
16 |     gameStateStore.setChatFocus(focus); // Update the global store
17 |   };
18 | 
19 |   return (
20 |     <GameStateContext.Provider value={{ isChatFocused, setChatFocus }}>
21 |       {children}
22 |     </GameStateContext.Provider>
23 |   );
24 | };
25 | 
26 | export const useGameState = (): GameStateContextType => {
27 |   const context = useContext(GameStateContext);
28 |   if (context === undefined) {
29 |     throw new Error('useGameState must be used within a GameStateProvider');
30 |   }
31 |   return context;
32 | };
33 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/__snapshots__/aoContractClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createAoContractClient > creates client 1`] = `
 4 | {
 5 |   "aoClient": {
 6 |     "assign": [Function],
 7 |     "dryrun": [Function],
 8 |     "message": [Function],
 9 |     "monitor": [Function],
10 |     "result": [Function],
11 |     "results": [Function],
12 |     "spawn": [Function],
13 |     "unmonitor": [Function],
14 |   },
15 |   "aoWallet": {
16 |     "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
17 |     "anonymous": false,
18 |     "signer": [Function],
19 |     "type": "Keyfile",
20 |   },
21 |   "dryrunReadReplyOne": [Function],
22 |   "dryrunReadReplyOneJson": [Function],
23 |   "dryrunReadReplyOptional": [Function],
24 |   "message": [Function],
25 |   "processId": "PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs",
26 | }
27 | `;
28 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/aoClient.ts:
--------------------------------------------------------------------------------
 1 | import { connect, result } from "@permaweb/aoconnect";
 2 | 
 3 | export type MessageId = string;
 4 | 
 5 | type BaseAoClient = ReturnType<typeof connect>;
 6 | 
 7 | export type AoClient = BaseAoClient;
 8 | 
 9 | export type MessageResult = Awaited<ReturnType<typeof result>>;
10 | 
11 | // export type Message = MessageResult["Messages"][0];
12 | export type Message = {
13 |   Target: string;
14 |   Tags: Array<{
15 |     name: string;
16 |     value: string;
17 |   }>;
18 |   Data: string;
19 | };
20 | 
21 | export type MessageWithResult = {
22 |   messageId: MessageId;
23 |   result: MessageResult;
24 | };
25 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/aoContractClient.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, expect, test } from "vitest";
 2 | import { createAoContractClient } from "./aoContractClient";
 3 | import { loadTestWallet } from "../test/lib/fsWallet";
 4 | import { connect } from "@permaweb/aoconnect";
 5 | 
 6 | describe("createAoContractClient", () => {
 7 |   test("creates client", async () => {
 8 |     const wallet = await loadTestWallet();
 9 | 
10 |     const aoClient = connect();
11 |     const aoContractClient = createAoContractClient(
12 |       import.meta.env.VITE_READ_PROCESS_ID,
13 |       aoClient,
14 |       wallet,
15 |     );
16 | 
17 |     expect(aoContractClient).toMatchSnapshot();
18 |   });
19 | });
20 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/aoWallet.ts:
--------------------------------------------------------------------------------
 1 | import { createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { WalletType } from "./wallets";
 3 | 
 4 | export type AoSigner = ReturnType<typeof createDataItemSigner>;
 5 | 
 6 | export type AoWallet = {
 7 |   type: WalletType;
 8 |   anonymous: boolean;
 9 |   address: string;
10 |   signer: AoSigner;
11 | };
12 | 
13 | export type AoWalletConnectionResult =
14 |   | {
15 |       success: true;
16 |       result: AoWallet;
17 |       disconnect?: () => void;
18 |     }
19 |   | {
20 |       success: false;
21 |       error: unknown;
22 |     };
23 | 
24 | // TODO: Import these from somewhere more official
25 | export type PermissionType =
26 |   | "ACCESS_ADDRESS"
27 |   | "ACCESS_PUBLIC_KEY"
28 |   | "ACCESS_ALL_ADDRESSES"
29 |   | "SIGN_TRANSACTION"
30 |   | "ENCRYPT"
31 |   | "DECRYPT"
32 |   | "SIGNATURE"
33 |   | "ACCESS_ARWEAVE_CONFIG"
34 |   | "DISPATCH";
35 | 
36 | export interface AppInfo {
37 |   name?: string;
38 |   logo?: string;
39 | }
40 | 
41 | export interface GatewayConfig {
42 |   host: string;
43 |   port: number;
44 |   protocol: "http" | "https";
45 | }
46 | 
47 | export type ConnectConfig = {
48 |   permissionsRequested: PermissionType[];
49 |   permissionsRequired?: PermissionType[];
50 |   appInfo?: AppInfo;
51 |   gateway?: GatewayConfig;
52 | };
53 | 
54 | export type AoWalletConnector = (
55 |   config: ConnectConfig,
56 |   onDisconnect?: () => void,
57 | ) => Promise<AoWalletConnectionResult>;
58 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/config.ts:
--------------------------------------------------------------------------------
 1 | import { PermissionType } from "./aoWallet";
 2 | 
 3 | export const permissionsRequired: Array<PermissionType> = [
 4 |   "ACCESS_ADDRESS",
 5 |   "SIGN_TRANSACTION",
 6 |   // "ACCESS_PUBLIC_KEY",
 7 |   // "ENCRYPT",
 8 |   // "DECRYPT",
 9 |   "SIGNATURE",
10 |   "ACCESS_ARWEAVE_CONFIG",
11 | ];
12 | 
13 | export const permissionsRequested = [
14 |   ...permissionsRequired,
15 |   // ...optionalPermissions,
16 | ];
17 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/dummy.ts:
--------------------------------------------------------------------------------
 1 | import { WalletType } from ".";
 2 | import { AoWallet } from "../aoWallet";
 3 | 
 4 | export const dummyWallet: AoWallet = {
 5 |   type: "Dummy" as WalletType,
 6 |   anonymous: true,
 7 |   address: "Dummy Address",
 8 |   signer: function (
 9 |     args_0: {
10 |       data?: any;
11 |       tags?:
12 |         | { name?: string | undefined; value?: string | undefined }[]
13 |         | undefined;
14 |       target?: string | undefined;
15 |       anchor?: string | undefined;
16 |     },
17 |     ...args_1: unknown[]
18 |   ): Promise<{ id?: string | undefined; raw?: any }> {
19 |     throw new Error("Function not implemented.");
20 |   },
21 | };
22 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/generated.ts:
--------------------------------------------------------------------------------
 1 | import { AoWalletConnector, ConnectConfig } from "../aoWallet";
 2 | import { defaultArweave } from "../../../arweave/lib/arweave";
 3 | import { createWalletFromJwk } from "./jwk";
 4 | import { JWKInterface } from "arweave/node/lib/wallet";
 5 | 
 6 | export const createGeneratedWallet: AoWalletConnector = async (
 7 |   config: ConnectConfig,
 8 | ) => {
 9 |   let jwk: JWKInterface;
10 | 
11 |   try {
12 |     jwk = await defaultArweave.wallets.generate();
13 |   } catch (error) {
14 |     return {
15 |       success: false,
16 |       error,
17 |     };
18 |   }
19 | 
20 |   const wallet = await createWalletFromJwk(jwk, false)(config);
21 |   return wallet;
22 | };
23 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/index.ts:
--------------------------------------------------------------------------------
 1 | import { AoWalletConnector } from "../aoWallet";
 2 | import { connectInjectedWallet } from "./injected";
 3 | import { connectOthentWallet } from "./othent";
 4 | import { createGeneratedWallet } from "./generated";
 5 | 
 6 | export const WalletType = ["Injected", "Othent", "Keyfile"] as const;
 7 | export type WalletType = (typeof WalletType)[number];
 8 | 
 9 | export const wallets: Record<WalletType, AoWalletConnector> = {
10 |   Injected: connectInjectedWallet,
11 |   Othent: connectOthentWallet,
12 |   Keyfile: createGeneratedWallet,
13 | } as const;
14 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/injected.ts:
--------------------------------------------------------------------------------
 1 | import { createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { AoWalletConnector, ConnectConfig } from "../aoWallet";
 3 | import { ArweaveAddress } from "@/features/arweave/lib/model";
 4 | 
 5 | export const connectInjectedWallet: AoWalletConnector = async (
 6 |   config: ConnectConfig,
 7 |   onDisconnect?: () => void,
 8 | ) => {
 9 |   if (!window.arweaveWallet) {
10 |     return {
11 |       success: false,
12 |       error: "No injected wallet",
13 |     };
14 |   }
15 | 
16 |   try {
17 |     await window.arweaveWallet.connect(
18 |       config.permissionsRequested,
19 |       config.appInfo,
20 |       config.gateway,
21 |     );
22 |     // TODO: Confirm that permissions have been granted
23 |     const permissionsGranted = await window.arweaveWallet.getPermissions();
24 |     if (
25 |       config.permissionsRequired &&
26 |       !config.permissionsRequired.every((permission) =>
27 |         permissionsGranted.includes(permission),
28 |       )
29 |     ) {
30 |       await window.arweaveWallet.disconnect();
31 |       return {
32 |         success: false,
33 |         error: "Insufficient permissions granted",
34 |       };
35 |     }
36 | 
37 |     const address = await window.arweaveWallet.getActiveAddress();
38 | 
39 |     if (!ArweaveAddress.safeParse(address).success) {
40 |       return {
41 |         success: false,
42 |         error: "No valid address",
43 |       };
44 |     }
45 | 
46 |     let interval: NodeJS.Timeout | undefined;
47 |     if (onDisconnect) {
48 |       // Repeatedly check for the address until it is un available
49 |       interval = setInterval(async () => {
50 |         try {
51 |           const activeAddress = await window.arweaveWallet.getActiveAddress();
52 |           if (activeAddress !== address) {
53 |             clearInterval(interval);
54 |             window.arweaveWallet.disconnect();
55 |             onDisconnect();
56 |           }
57 |         } catch (error) {
58 |           clearInterval(interval);
59 |           onDisconnect();
60 |         }
61 |       }, 100);
62 |     }
63 | 
64 |     return {
65 |       success: true,
66 |       result: {
67 |         type: "Injected",
68 |         anonymous: false,
69 |         address,
70 |         signer: createDataItemSigner(window.arweaveWallet),
71 |       },
72 |       disconnect: async () => {
73 |         clearInterval(interval);
74 |         await window.arweaveWallet.disconnect();
75 |       },
76 |     };
77 |   } catch (error) {
78 |     return {
79 |       success: false,
80 |       error,
81 |     };
82 |   }
83 | };
84 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/jwk.ts:
--------------------------------------------------------------------------------
 1 | import { AoSigner, AoWalletConnector } from "../aoWallet";
 2 | import { defaultArweave } from "../../../arweave/lib/arweave";
 3 | import { ArweaveSigner, createData } from "warp-arbundles";
 4 | import { JWKInterface } from "arweave/node/lib/wallet";
 5 | 
 6 | export const createWalletFromJwk =
 7 |   (jwk: JWKInterface, anonymous: boolean): AoWalletConnector =>
 8 |   async () => {
 9 |     try {
10 |       const address = await defaultArweave.wallets.getAddress(jwk);
11 | 
12 |       const arweaveSigner = new ArweaveSigner(jwk);
13 | 
14 |       const dataItemSigner: AoSigner = async (
15 |         ...args: Parameters<AoSigner>
16 |       ) => {
17 |         const transactionArgs = args[0];
18 | 
19 |         const tags =
20 |           transactionArgs.tags
21 |             ?.filter((tag) => tag.name !== undefined && tag.value !== undefined)
22 |             .map((tag) => ({
23 |               name: tag.name!,
24 |               value: tag.value!,
25 |             })) ?? [];
26 | 
27 |         const dataItem = createData(transactionArgs.data, arweaveSigner, {
28 |           tags,
29 |           target: transactionArgs.target,
30 |           anchor: transactionArgs.anchor,
31 |         });
32 |         await dataItem.sign(arweaveSigner);
33 | 
34 |         const id = await dataItem.id;
35 |         const raw = dataItem.getRaw();
36 | 
37 |         return { id, raw };
38 |       };
39 | 
40 |       return {
41 |         success: true,
42 |         result: {
43 |           type: "Keyfile",
44 |           anonymous,
45 |           address,
46 |           signer: dataItemSigner,
47 |         },
48 |       };
49 |     } catch (error) {
50 |       return {
51 |         success: false,
52 |         error,
53 |       };
54 |     }
55 |   };
56 | 


--------------------------------------------------------------------------------
/src/features/ao/lib/wallets/othent.ts:
--------------------------------------------------------------------------------
 1 | import { createDataItemSigner } from "@permaweb/aoconnect";
 2 | import { AoWalletConnector } from "../aoWallet";
 3 | import { connect } from "@othent/kms";
 4 | import * as Othent from "@othent/kms";
 5 | import { ArweaveAddress } from "@/features/arweave/lib/model";
 6 | 
 7 | export const connectOthentWallet: AoWalletConnector = async (
 8 |   _,
 9 |   onDisconnect,
10 | ) => {
11 |   try {
12 |     const othentConnection = await connect();
13 |     const address = othentConnection.walletAddress;
14 | 
15 |     if (!ArweaveAddress.safeParse(address).success) {
16 |       return {
17 |         success: false,
18 |         error: "No valid address",
19 |       };
20 |     }
21 | 
22 |     let interval: NodeJS.Timeout | undefined;
23 |     if (onDisconnect) {
24 |       // Repeatedly check for the address until it is un available
25 |       interval = setInterval(async () => {
26 |         try {
27 |           const activeAddress = await Othent.getActiveAddress();
28 |           if (activeAddress !== address) {
29 |             // Changed wallets
30 |             clearInterval(interval);
31 |             Othent.disconnect();
32 |             onDisconnect();
33 |           }
34 |         } catch (error) {
35 |           // Wallet disconnected
36 |           clearInterval(interval);
37 |           onDisconnect();
38 |         }
39 |       }, 100);
40 |     }
41 | 
42 |     return {
43 |       success: true,
44 |       result: {
45 |         type: "Othent",
46 |         anonymous: false,
47 |         address,
48 |         signer: createDataItemSigner(Othent),
49 |       },
50 |       disconnect: async () => {
51 |         clearInterval(interval);
52 |         await Othent.disconnect();
53 |       },
54 |     };
55 |   } catch (error) {
56 |     return {
57 |       success: false,
58 |       error,
59 |     };
60 |   }
61 | };
62 | 


--------------------------------------------------------------------------------
/src/features/ao/test/components/AnonymousLoader.tsx:
--------------------------------------------------------------------------------
 1 | import { useSuspenseQuery } from "@tanstack/react-query";
 2 | import { Suspense } from "react";
 3 | import { createGeneratedWallet } from "../../lib/wallets/generated";
 4 | import { AoWallet } from "../../lib/aoWallet";
 5 | 
 6 | interface AnonymousProps {
 7 |   children: (wallet: AoWallet) => React.ReactNode;
 8 | }
 9 | 
10 | function AnonymousGenerator({ children }: AnonymousProps) {
11 |   const wallet = useSuspenseQuery({
12 |     queryKey: ["anonymous"],
13 |     queryFn: async () =>
14 |       createGeneratedWallet({
15 |         permissionsRequested: [],
16 |       }).then((wallet) => {
17 |         if (!wallet.success) {
18 |           throw wallet.error;
19 |         }
20 |         return wallet.result;
21 |       }),
22 |   });
23 | 
24 |   return children(wallet.data);
25 | }
26 | 
27 | export default function AnonymousLoader({ children }: AnonymousProps) {
28 |   return (
29 |     <Suspense fallback={<div>Generating...</div>}>
30 |       <AnonymousGenerator>{(wallet) => children(wallet)}</AnonymousGenerator>
31 |     </Suspense>
32 |   );
33 | }
34 | 


--------------------------------------------------------------------------------
/src/features/ao/test/components/DemoAo.tsx:
--------------------------------------------------------------------------------
 1 | import { connect } from "@permaweb/aoconnect";
 2 | import { AoWallet } from "../../lib/aoWallet";
 3 | 
 4 | type UserNew = {
 5 |   name: string;
 6 |   avatar: string;
 7 |   status: string;
 8 |   currentWorldId: string;
 9 |   following: {
10 |     [address: string]: boolean;
11 |   };
12 | };
13 | 
14 | const userNew: UserNew = {
15 |   name: "Elliot",
16 |   avatar: "a123",
17 |   status: "s123",
18 |   currentWorldId: "w123",
19 |   following: {},
20 | };
21 | 
22 | interface DemoAoProps {
23 |   aoWallet: AoWallet;
24 | }
25 | 
26 | export function DemoAo({ aoWallet }: DemoAoProps) {
27 |   const aoClient = connect();
28 | 
29 |   return (
30 |     <div>
31 |       <h1>DemoAo</h1>
32 |       <button
33 |         onClick={async () => {
34 |           const res = await aoClient.message({
35 |             process: "PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs",
36 |             data: JSON.stringify(userNew),
37 |             tags: [{ name: "Action", value: "Register" }],
38 |             signer: aoWallet.signer,
39 |           });
40 |           console.log(res);
41 |         }}
42 |       >
43 |         Sign
44 |       </button>
45 |     </div>
46 |   );
47 | }
48 | 


--------------------------------------------------------------------------------
/src/features/ao/test/components/DemoConnect.tsx:
--------------------------------------------------------------------------------
 1 | import { useState } from "react";
 2 | import { AoWallet } from "../../lib/aoWallet";
 3 | import { DemoAo } from "./DemoAo";
 4 | import { permissionsRequested } from "../../lib/config";
 5 | import { WalletType, wallets } from "../../lib/wallets";
 6 | 
 7 | export function DemoConnect() {
 8 |   const [aoWallet, setAoWallet] = useState<AoWallet | null>(null);
 9 |   const [walletOption, setWalletOption] = useState<WalletType>(WalletType[0]);
10 | 
11 |   return (
12 |     <div>
13 |       <h1>Demo Connect</h1>
14 |       <select
15 |         onChange={(e) => setWalletOption(e.target.value as WalletType)}
16 |         value={walletOption}
17 |       >
18 |         {WalletType.map((option) => (
19 |           <option key={option} value={option}>
20 |             {option}
21 |           </option>
22 |         ))}
23 |       </select>
24 |       <br />
25 |       <button
26 |         onClick={async () => {
27 |           if (!walletOption) {
28 |             return;
29 |           }
30 |           setAoWallet(null);
31 |           const walletConnector = wallets[walletOption];
32 |           const res = await walletConnector(
33 |             {
34 |               permissionsRequested: permissionsRequested,
35 |             },
36 |             () => setAoWallet(null),
37 |           );
38 |           if (res.success) {
39 |             setAoWallet(res.result);
40 |           } else {
41 |             console.error(res.error);
42 |           }
43 |         }}
44 |       >
45 |         Connect
46 |       </button>
47 |       {aoWallet && (
48 |         <div>
49 |           <h2>Connected</h2>
50 |           <p>Address: {aoWallet.address}</p>
51 |           <DemoAo aoWallet={aoWallet} />
52 |         </div>
53 |       )}
54 |     </div>
55 |   );
56 | }
57 | 


--------------------------------------------------------------------------------
/src/features/ao/test/lib/__snapshots__/fsWallet.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createFsWallet > loads jwk 1`] = `
 4 | {
 5 |   "result": {
 6 |     "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
 7 |     "anonymous": false,
 8 |     "signer": [Function],
 9 |     "type": "Keyfile",
10 |   },
11 |   "success": true,
12 | }
13 | `;
14 | 
15 | exports[`loadTestWallet > loads test wallet 1`] = `
16 | {
17 |   "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
18 |   "anonymous": false,
19 |   "signer": [Function],
20 |   "type": "Keyfile",
21 | }
22 | `;
23 | 


--------------------------------------------------------------------------------
/src/features/ao/test/lib/fsWallet.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, test, expect } from "vitest";
 2 | import { createFsWallet, loadTestWallet } from "./fsWallet";
 3 | 
 4 | describe("createFsWallet", () => {
 5 |   test("loads jwk", async () => {
 6 |     const wallet = await createFsWallet("./fixtures/test_jwk.json")({
 7 |       permissionsRequested: [],
 8 |     });
 9 |     expect(wallet.success).toBe(true);
10 |     expect(wallet).toMatchSnapshot();
11 |   });
12 | });
13 | 
14 | describe("loadTestWallet", () => {
15 |   test("loads test wallet", async () => {
16 |     const wallet = await loadTestWallet();
17 |     expect(wallet).toMatchSnapshot();
18 |   });
19 | });
20 | 


--------------------------------------------------------------------------------
/src/features/ao/test/lib/fsWallet.ts:
--------------------------------------------------------------------------------
 1 | import { AoSigner, AoWalletConnector } from "../../lib/aoWallet";
 2 | import { defaultArweave } from "../../../arweave/lib/arweave";
 3 | import { ArweaveSigner, createData } from "warp-arbundles";
 4 | import { readFileSync } from "node:fs";
 5 | 
 6 | export const createFsWallet =
 7 |   (path: string, anonymous: boolean = false): AoWalletConnector =>
 8 |   async () => {
 9 |     try {
10 |       const wallet = JSON.parse(readFileSync(path, "utf-8"));
11 |       const address = await defaultArweave.wallets.getAddress(wallet);
12 | 
13 |       const arweaveSigner = new ArweaveSigner(wallet);
14 | 
15 |       const dataItemSigner: AoSigner = async (
16 |         ...args: Parameters<AoSigner>
17 |       ) => {
18 |         const transactionArgs = args[0];
19 | 
20 |         const tags =
21 |           transactionArgs.tags
22 |             ?.filter((tag) => tag.name !== undefined && tag.value !== undefined)
23 |             .map((tag) => ({
24 |               name: tag.name!,
25 |               value: tag.value!,
26 |             })) ?? [];
27 | 
28 |         const dataItem = createData(transactionArgs.data, arweaveSigner, {
29 |           tags,
30 |           target: transactionArgs.target,
31 |           anchor: transactionArgs.anchor,
32 |         });
33 |         await dataItem.sign(arweaveSigner);
34 | 
35 |         const id = await dataItem.id;
36 |         const raw = dataItem.getRaw();
37 | 
38 |         return { id, raw };
39 |       };
40 | 
41 |       return {
42 |         success: true,
43 |         result: {
44 |           type: "Keyfile",
45 |           anonymous,
46 |           address,
47 |           signer: dataItemSigner,
48 |         },
49 |       };
50 |     } catch (error) {
51 |       return {
52 |         success: false,
53 |         error,
54 |       };
55 |     }
56 |   };
57 | 
58 | export const loadTestWallet = async () => {
59 |   const wallet = await createFsWallet("./fixtures/test_jwk.json")({
60 |     permissionsRequested: [],
61 |   });
62 |   if (!wallet.success) {
63 |     throw wallet.error;
64 |   }
65 |   return wallet.result;
66 | };
67 | 


--------------------------------------------------------------------------------
/src/features/arweave/lib/arweave.ts:
--------------------------------------------------------------------------------
 1 | import { base32, base64urlnopad } from "@scure/base";
 2 | import Arweave from "arweave";
 3 | 
 4 | export const defaultArweave = Arweave.init({});
 5 | 
 6 | export function fetchUrl(txId: string) {
 7 |   const txIdData = base64urlnopad.decode(txId);
 8 |   const base32UnpaddedTxId = base32.encode(txIdData).replace(/=/g, "");
 9 |   return `https://${base32UnpaddedTxId}.arweave.net/${txId}`;
10 | }
11 | 


--------------------------------------------------------------------------------
/src/features/arweave/lib/model.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | 
 3 | export const ArweaveId = z.string().regex(/^[a-zA-Z0-9_-]{43}$/);
 4 | export type ArweaveId = z.infer<typeof ArweaveId>;
 5 | 
 6 | export const ArweaveAddress = ArweaveId;
 7 | export type ArweaveAddress = ArweaveId;
 8 | 
 9 | export const ArweaveTxId = ArweaveId;
10 | export type ArweaveTxId = ArweaveId;
11 | 


--------------------------------------------------------------------------------
/src/features/arweave/lib/utils.ts:
--------------------------------------------------------------------------------
1 | export const truncateAddress = (
2 |   address: string,
3 |   prefixLength: number = 6,
4 |   suffixLength: number = 4,
5 |   middleText: string = "...",
6 | ) => {
7 |   return `${address.slice(0, prefixLength)}${middleText}${address.slice(-suffixLength)}`;
8 | };
9 | 


--------------------------------------------------------------------------------
/src/features/chat/components/MiniAddress.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Tooltip,
 3 |   TooltipContent,
 4 |   TooltipProvider,
 5 |   TooltipTrigger,
 6 | } from "@/components/ui/tooltip";
 7 | import { truncateAddress } from "@/features/arweave/lib/utils";
 8 | import { useState } from "react";
 9 | 
10 | interface MiniAddressProps {
11 |   address: string;
12 | }
13 | 
14 | export function MiniAddress({ address }: MiniAddressProps) {
15 |   const [isOpen, setIsOpen] = useState(false);
16 |   const [copyEnabled, setCopyEnabled] = useState(true);
17 |   const [justCopied, setJustCopied] = useState(false);
18 | 
19 |   return (
20 |     <TooltipProvider>
21 |       <Tooltip
22 |         onOpenChange={
23 |           copyEnabled
24 |             ? (newIsOpen) => setIsOpen(newIsOpen || justCopied)
25 |             : undefined
26 |         }
27 |         open={isOpen}
28 |         disableHoverableContent
29 |       >
30 |         <TooltipTrigger asChild>
31 |           <p
32 |             className="m-0 ml-auto p-0 hover:underline cursor-default"
33 |             onClick={() => {
34 |               navigator.clipboard.writeText(address);
35 |               setJustCopied(true);
36 |               setCopyEnabled(false);
37 |               setTimeout(() => {
38 |                 setIsOpen(true);
39 |               }, 0);
40 | 
41 |               setTimeout(() => {
42 |                 setIsOpen(false);
43 |                 setJustCopied(false);
44 |               }, 2000);
45 | 
46 |               setTimeout(() => {
47 |                 setCopyEnabled(true);
48 |               }, 2500);
49 |             }}
50 |           >
51 |             {truncateAddress(address)}
52 |           </p>
53 |         </TooltipTrigger>
54 |         <TooltipContent>
55 |           <p>{justCopied || !copyEnabled ? "Copied!" : "Click to copy"}</p>
56 |         </TooltipContent>
57 |       </Tooltip>
58 |     </TooltipProvider>
59 |   );
60 | }
61 | 


--------------------------------------------------------------------------------
/src/features/chat/contract/__snapshots__/chatClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createChatClient > creates client 1`] = `
 4 | {
 5 |   "aoContractClient": {
 6 |     "aoClient": {
 7 |       "assign": [Function],
 8 |       "dryrun": [Function],
 9 |       "message": [Function],
10 |       "monitor": [Function],
11 |       "result": [Function],
12 |       "results": [Function],
13 |       "spawn": [Function],
14 |       "unmonitor": [Function],
15 |     },
16 |     "aoWallet": {
17 |       "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
18 |       "anonymous": false,
19 |       "signer": [Function],
20 |       "type": "Keyfile",
21 |     },
22 |     "dryrunReadReplyOne": [Function],
23 |     "dryrunReadReplyOneJson": [Function],
24 |     "dryrunReadReplyOptional": [Function],
25 |     "message": [Function],
26 |     "processId": "9a_YP6M7iN7b6QUoSvpoV3oe3CqxosyuJnraCucy5ss",
27 |   },
28 |   "postMessage": [Function],
29 |   "readCount": [Function],
30 |   "readHistory": [Function],
31 | }
32 | `;
33 | 


--------------------------------------------------------------------------------
/src/features/chat/contract/chatClient.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, test, expect, beforeAll } from "vitest";
 2 | import {
 3 |   AoContractClient,
 4 |   createAoContractClient,
 5 | } from "@/features/ao/lib/aoContractClient";
 6 | import { loadTestWallet } from "@/features/ao/test/lib/fsWallet";
 7 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 8 | import { connect } from "@permaweb/aoconnect";
 9 | import { ArweaveId } from "@/features/arweave/lib/model";
10 | import { createChatClient } from "./chatClient";
11 | 
12 | describe("createChatClient", () => {
13 |   let testWallet: AoWallet;
14 |   let chatTestAoContractClient: AoContractClient;
15 | 
16 |   beforeAll(async () => {
17 |     testWallet = await loadTestWallet();
18 |     chatTestAoContractClient = createAoContractClient(
19 |       import.meta.env.VITE_LLAMA_LAND_PROCESS_ID,
20 |       connect(),
21 |       testWallet,
22 |     );
23 |   });
24 | 
25 |   test("creates client", async () => {
26 |     const client = createChatClient(chatTestAoContractClient);
27 |     expect(client).toMatchSnapshot();
28 |   });
29 | 
30 |   test(
31 |     "CreateMessage",
32 |     async () => {
33 |       const client = createChatClient(chatTestAoContractClient);
34 | 
35 |       const initialName = "Test Name";
36 |       const initialMessage = "Test Message";
37 |       const createMsgId = await client.postMessage({
38 |         AuthorName: initialName,
39 |         Content: initialMessage,
40 |       });
41 |       expect(ArweaveId.safeParse(createMsgId).success).toBe(true);
42 |       // Wait for the message to be processed
43 |       await new Promise((resolve) => setTimeout(resolve, 5000));
44 |       // Check the info is correct
45 |       const createdChat = await client.readHistory();
46 |       const mostRecentMessage = Object.values(createdChat)
47 |         .sort((a, b) => a.Timestamp - b.Timestamp)
48 |         .pop();
49 | 
50 |       expect(mostRecentMessage?.AuthorId).toEqual(testWallet.address);
51 |       expect(mostRecentMessage?.Content).toEqual(initialMessage);
52 |     },
53 |     {
54 |       timeout: 20000,
55 |     },
56 |   );
57 | 
58 |   test(
59 |     "ReadCount",
60 |     async () => {
61 |       const client = createChatClient(chatTestAoContractClient);
62 |       const count = await client.readCount();
63 |       expect(count).toBeGreaterThan(0);
64 |     },
65 |     {
66 |       timeout: 20000,
67 |     },
68 |   );
69 | });
70 | 


--------------------------------------------------------------------------------
/src/features/chat/contract/model.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveId } from "@/features/arweave/lib/model";
 2 | import { z } from "zod";
 3 | 
 4 | // Placeholder
 5 | // TODO: Define this properly
 6 | export const ChatMessage = z.object({
 7 |   Id: z.number(),
 8 |   MessageId: ArweaveId,
 9 |   Timestamp: z.number(),
10 |   AuthorId: ArweaveId,
11 |   AuthorName: z.string(),
12 |   Recipient: z.optional(z.union([ArweaveId, z.null()])),
13 |   Content: z.string(),
14 | });
15 | export type ChatMessage = z.infer<typeof ChatMessage>;
16 | 
17 | export const ChatMessageHistory = z.array(ChatMessage);
18 | export type ChatMessageHistory = z.infer<typeof ChatMessageHistory>;
19 | 
20 | export const ChatMessageCreate = ChatMessage.omit({
21 |   Id: true,
22 |   MessageId: true,
23 |   Timestamp: true,
24 |   AuthorId: true,
25 | });
26 | export type ChatMessageCreate = z.infer<typeof ChatMessageCreate>;
27 | 


--------------------------------------------------------------------------------
/src/features/chat/utils/formatting.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Format time to twitter style ones
 3 |  * @param time timestamp in seconds
 4 |  * @param ago the 'ago' suffix
 5 |  * @returns the time formatted
 6 |  */
 7 | export function formatTimestamp(time: number, ago?: boolean) {
 8 |   const m = new Map([
 9 |     [1, "Jan"],
10 |     [2, "Feb"],
11 |     [3, "Mar"],
12 |     [4, "Apr"],
13 |     [5, "May"],
14 |     [6, "Jun"],
15 |     [7, "Jul"],
16 |     [8, "Aug"],
17 |     [9, "Sep"],
18 |     [10, "Oct"],
19 |     [11, "Nov"],
20 |     [12, "Dec"],
21 |   ]);
22 | 
23 |   const now = secondsOfNow();
24 |   const diff = now - time;
25 | 
26 |   const days = Math.floor(diff / (60 * 60 * 24));
27 |   const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
28 |   const minutes = Math.floor((diff % (60 * 60)) / 60);
29 |   const seconds = Math.floor(diff % 60);
30 | 
31 |   if (days > 0) {
32 |     const date = new Date(time * 1000);
33 | 
34 |     if (days > 365) {
35 |       return date.toLocaleString();
36 |     } else {
37 |       const month = date.getMonth() + 1;
38 |       const day = date.getDate();
39 |       return m.get(month) + " " + day;
40 |     }
41 |   }
42 | 
43 |   if (hours > 0) {
44 |     let t = hours + "h";
45 |     if (ago) t += " ago";
46 |     return t;
47 |   }
48 | 
49 |   if (minutes > 0) {
50 |     let t = minutes + "m";
51 |     if (ago) t += " ago";
52 |     return t;
53 |   }
54 | 
55 |   if (seconds > 0) {
56 |     let t = seconds + "s";
57 |     if (ago) t += " ago";
58 |     return t;
59 |   }
60 | 
61 |   return "just now";
62 | }
63 | 
64 | /**
65 |  * Gets the time value of now in seconds.
66 |  * @returns the time value in seconds
67 |  */
68 | export function secondsOfNow() {
69 |   return Math.floor(new Date().getTime() / 1000);
70 | }
71 | 


--------------------------------------------------------------------------------
/src/features/login/components/Login.tsx:
--------------------------------------------------------------------------------
 1 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 2 | import { LoginMenu } from "./LoginMenu";
 3 | import { useMachine } from "@xstate/react";
 4 | import { loginMachine } from "../machines/loginMachine";
 5 | import { Button } from "@/components/ui/button";
 6 | import { inspect } from "@/lib/xstate";
 7 | 
 8 | interface LoginProps {
 9 |   children: (wallet: AoWallet, disconnect: () => void) => React.ReactNode;
10 |   loginTitle?: string;
11 |   temporaryWalletEnabled?: boolean;
12 | }
13 | 
14 | export function Login({
15 |   children,
16 |   loginTitle,
17 |   temporaryWalletEnabled,
18 | }: LoginProps) {
19 |   const [current, send] = useMachine(loginMachine, { inspect });
20 | 
21 |   if (current.matches({ "Logging In": "Show Login UI" })) {
22 |     return (
23 |       <div className="flex flex-col flex-grow justify-around items-center h-full">
24 |         <LoginMenu
25 |           onConnect={(wallet, disconnect) =>
26 |             send({
27 |               type: "Connect",
28 |               data: { wallet, disconnect: disconnect ?? (() => {}) },
29 |             })
30 |           }
31 |           onDisconnect={() => send({ type: "External Disconnect" })}
32 |           localWallet={current.context.localWallet}
33 |           loginTitle={loginTitle}
34 |           temporaryWalletEnabled={temporaryWalletEnabled}
35 |         />
36 |         <div />
37 |       </div>
38 |     );
39 |   }
40 | 
41 |   if (current.matches("Logged In")) {
42 |     if (current.context.wallet === undefined) {
43 |       throw new Error("Wallet is undefined");
44 |     }
45 |     return children(current.context.wallet, () => send({ type: "Disconnect" }));
46 |   }
47 | 
48 |   return (
49 |     <div className="flex flex-col flex-grow justify-center items-center h-full">
50 |       <div className="text-2xl">Logging in...</div>
51 |       <Button onClick={() => window.location.reload()} className="mt-4">
52 |         Reload
53 |       </Button>
54 |     </div>
55 |   );
56 | }
57 | 


--------------------------------------------------------------------------------
/src/features/login/components/LoginMenu.stories.tsx:
--------------------------------------------------------------------------------
 1 | import type { Meta, StoryObj } from "@storybook/react";
 2 | import { fn } from "@storybook/test";
 3 | import { LoginMenu } from "./LoginMenu";
 4 | import { QueryClientProvider } from "@tanstack/react-query";
 5 | import { queryClient } from "@/lib/query";
 6 | import { Toaster } from "@/components/ui/sonner";
 7 | 
 8 | // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
 9 | const meta = {
10 |   title: "login/LoginMenu",
11 |   component: LoginMenu,
12 |   parameters: {
13 |     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
14 |     layout: "centered",
15 |   },
16 |   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
17 |   tags: ["autodocs"],
18 |   // More on argTypes: https://storybook.js.org/docs/api/argtypes
19 |   argTypes: {},
20 |   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
21 |   args: { onConnect: fn(), onDisconnect: fn() },
22 |   // wrap in TanStack QueryProvider
23 |   decorators: [
24 |     (Story) => (
25 |       <QueryClientProvider client={queryClient}>
26 |         <>
27 |           <Story />
28 |           <Toaster />
29 |         </>
30 |       </QueryClientProvider>
31 |     ),
32 |   ],
33 | } satisfies Meta<typeof LoginMenu>;
34 | 
35 | export default meta;
36 | type Story = StoryObj<typeof meta>;
37 | 
38 | // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
39 | export const Default: Story = {};
40 | 
41 | // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
42 | export const WithFakeWallet: Story = {
43 |   args: {
44 |     localWallet: {
45 |       type: "Keyfile",
46 |       anonymous: true,
47 |       address: "fakeAddress",
48 |       signer: async () => ({}),
49 |     },
50 |   },
51 | };
52 | 


--------------------------------------------------------------------------------
/src/features/login/lib/config.ts:
--------------------------------------------------------------------------------
 1 | import { ConnectConfig } from "@/features/ao/lib/aoWallet";
 2 | import {
 3 |   permissionsRequested,
 4 |   permissionsRequired,
 5 | } from "@/features/ao/lib/config";
 6 | 
 7 | export const defaultConnectConfig: ConnectConfig = {
 8 |   permissionsRequested,
 9 |   permissionsRequired,
10 |   appInfo: {
11 |     name: "WeaveWorld",
12 |     // TODO: Add logo
13 |     // logo:
14 |   },
15 | };
16 | 
17 | export const dummyConnectConfig: ConnectConfig = {
18 |   permissionsRequested: [],
19 | };
20 | 


--------------------------------------------------------------------------------
/src/features/login/lib/localWallet.ts:
--------------------------------------------------------------------------------
 1 | import { createWalletFromJwk } from "@/features/ao/lib/wallets/jwk";
 2 | import { defaultArweave } from "@/features/arweave/lib/arweave";
 3 | import { JWKInterface } from "arweave/node/lib/wallet";
 4 | import { dummyConnectConfig } from "./config";
 5 | 
 6 | export const getLocalWallet = async (localKeyLocalStorageKey: string) => {
 7 |   const storedJwkString = localStorage.getItem(localKeyLocalStorageKey);
 8 | 
 9 |   if (storedJwkString) {
10 |     const storedJwk: JWKInterface = JSON.parse(storedJwkString);
11 |     const creationResult = await createWalletFromJwk(
12 |       storedJwk,
13 |       true,
14 |     )(dummyConnectConfig);
15 |     if (creationResult.success) {
16 |       return creationResult.result;
17 |     } else {
18 |       throw new Error("Failed to process local key");
19 |     }
20 |   }
21 | 
22 |   const newJwk = await defaultArweave.wallets.generate();
23 |   createWalletFromJwk(newJwk, true)(dummyConnectConfig);
24 |   localStorage.setItem(localKeyLocalStorageKey, JSON.stringify(newJwk));
25 | 
26 |   const creationResult = await createWalletFromJwk(
27 |     newJwk,
28 |     true,
29 |   )(dummyConnectConfig);
30 |   if (creationResult.success) {
31 |     return creationResult.result;
32 |   } else {
33 |     throw new Error("Failed to process generated key");
34 |   }
35 | };
36 | 


--------------------------------------------------------------------------------
/src/features/profile/components/ProfileButton.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Popover,
 3 |   PopoverContent,
 4 |   PopoverTrigger,
 5 | } from "@/components/ui/popover";
 6 | import { ProfileInfo } from "../contract/model";
 7 | import ProfileDetailsDropdown from "./ProfileDetailsDropdown";
 8 | import {
 9 |   Card,
10 |   CardContent,
11 |   CardDescription,
12 |   CardHeader,
13 |   CardTitle,
14 | } from "@/components/ui/card";
15 | import ProfileImage from "./ProfileImage";
16 | 
17 | interface ProfileButtonProps {
18 |   profileInfo?: ProfileInfo;
19 | }
20 | 
21 | export default function ProfileButton({ profileInfo }: ProfileButtonProps) {
22 |   return (
23 |     <Popover>
24 |       <PopoverTrigger>
25 |         <ProfileImage profileImage={profileInfo?.ProfileImage} size="small" />
26 |       </PopoverTrigger>
27 |       <PopoverContent align="end">
28 |         {profileInfo ? (
29 |           <ProfileDetailsDropdown profileInfo={profileInfo} />
30 |         ) : (
31 |           <Card>
32 |             <CardHeader>
33 |               <CardTitle>
34 |                 <p className="text-xl font-bold">No Profile</p>
35 |               </CardTitle>
36 |               <CardDescription></CardDescription>
37 |             </CardHeader>
38 |             <CardContent>
39 |               <p>
40 |                 Go to{" "}
41 |                 <a
42 |                   href="https://ao-bazar.arweave.dev/#/"
43 |                   target="_blank"
44 |                   className="underline"
45 |                 >
46 |                   Bazar
47 |                 </a>{" "}
48 |                 to create your profile
49 |               </p>
50 |             </CardContent>
51 |           </Card>
52 |         )}
53 |       </PopoverContent>
54 |     </Popover>
55 |   );
56 | }
57 | 


--------------------------------------------------------------------------------
/src/features/profile/components/ProfileDetailsDropdown.tsx:
--------------------------------------------------------------------------------
 1 | import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 2 | import { ProfileInfo } from "../contract/model";
 3 | import ProfileImage from "./ProfileImage";
 4 | 
 5 | interface ProfileDetailsDropdownProps {
 6 |   profileInfo: ProfileInfo;
 7 | }
 8 | 
 9 | export default function ProfileDetailsDropdown({
10 |   profileInfo,
11 | }: ProfileDetailsDropdownProps) {
12 |   const hasDescription =
13 |     profileInfo.Description && profileInfo.Description != "";
14 | 
15 |   return (
16 |     <Card>
17 |       <CardHeader>
18 |         <CardTitle>
19 |           <div className="flex flex-row gap-2">
20 |             <ProfileImage profileImage={profileInfo.ProfileImage} />
21 |             <div className="flex flex-grow flex-col">
22 |               <p className="text-xl font-bold">{profileInfo.DisplayName}</p>
23 |               <p className="text-sm text-gray-500">@{profileInfo.Username}</p>
24 |             </div>
25 |           </div>
26 |         </CardTitle>
27 |       </CardHeader>
28 |       <CardContent>
29 |         <div className="flex flex-col items-start text-left">
30 |           {hasDescription ? (
31 |             <p className="text-center">{profileInfo.Description}</p>
32 |           ) : (
33 |             <p className="text-center text-gray-500 italic">No bio</p>
34 |           )}
35 |           <p className="mt-4 text-sm text-gray-400 italic">
36 |             Edit your profile on{" "}
37 |             <a
38 |               href="https://ao-bazar.arweave.dev/#/"
39 |               target="_blank"
40 |               className="underline"
41 |             >
42 |               Bazar
43 |             </a>
44 |           </p>
45 |         </div>
46 |       </CardContent>
47 |     </Card>
48 |   );
49 | }
50 | 


--------------------------------------------------------------------------------
/src/features/profile/components/ProfileImage.tsx:
--------------------------------------------------------------------------------
 1 | import { fetchUrl } from "@/features/arweave/lib/arweave";
 2 | 
 3 | interface ProfileImageProps {
 4 |   profileImage?: string;
 5 |   size?: "small" | "large";
 6 | }
 7 | 
 8 | export default function ProfileImage({
 9 |   profileImage,
10 |   size,
11 | }: ProfileImageProps) {
12 |   const hasProfileImage =
13 |     profileImage && profileImage != "" && profileImage != "None";
14 | 
15 |   if (hasProfileImage) {
16 |     return (
17 |       <img
18 |         src={fetchUrl(profileImage)}
19 |         alt="Profile"
20 |         className={`rounded-full ${size === "small" ? "w-8 h-8" : "w-14 h-14"}`}
21 |       />
22 |     );
23 |   } else {
24 |     return (
25 |       <img
26 |         src={"llamaland_profilePic.png"}
27 |         alt="Profile"
28 |         className={`rounded-full ${size === "small" ? "w-8 h-8" : "w-14 h-14"}`}
29 |       />
30 |     );
31 |   }
32 | }
33 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/__snapshots__/profileClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createProfileClient > creates client 1`] = `
 4 | {
 5 |   "aoContractClient": {
 6 |     "aoClient": {
 7 |       "assign": [Function],
 8 |       "dryrun": [Function],
 9 |       "message": [Function],
10 |       "monitor": [Function],
11 |       "result": [Function],
12 |       "results": [Function],
13 |       "spawn": [Function],
14 |       "unmonitor": [Function],
15 |     },
16 |     "aoWallet": {
17 |       "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
18 |       "anonymous": false,
19 |       "signer": [Function],
20 |       "type": "Keyfile",
21 |     },
22 |     "dryrunReadReplyOne": [Function],
23 |     "dryrunReadReplyOneJson": [Function],
24 |     "dryrunReadReplyOptional": [Function],
25 |     "message": [Function],
26 |     "processId": "SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY",
27 |   },
28 |   "createProfile": [Function],
29 |   "readProfiles": [Function],
30 |   "updateProfile": [Function],
31 | }
32 | `;
33 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/__snapshots__/profileRegistryClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createProfileRegistryClient > creates client 1`] = `
 4 | {
 5 |   "aoContractClient": {
 6 |     "aoClient": {
 7 |       "assign": [Function],
 8 |       "dryrun": [Function],
 9 |       "message": [Function],
10 |       "monitor": [Function],
11 |       "result": [Function],
12 |       "results": [Function],
13 |       "spawn": [Function],
14 |       "unmonitor": [Function],
15 |     },
16 |     "aoWallet": {
17 |       "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
18 |       "anonymous": false,
19 |       "signer": [Function],
20 |       "type": "Keyfile",
21 |     },
22 |     "dryrunReadReplyOne": [Function],
23 |     "dryrunReadReplyOneJson": [Function],
24 |     "dryrunReadReplyOptional": [Function],
25 |     "dryrunReadReplyOptionalJson": [Function],
26 |     "message": [Function],
27 |     "messageWithResult": [Function],
28 |     "processId": "SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY",
29 |   },
30 |   "getProfilesByDelegate": [Function],
31 |   "readProfiles": [Function],
32 | }
33 | `;
34 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/config.ts:
--------------------------------------------------------------------------------
 1 | // Source: https://github.com/permaweb/ao-bazar/blob/91cd9975cf8d2dfae4ac068f678672f705ab966c/src/helpers/config.ts
 2 | 
 3 | export const profileAOS = {
 4 |   module: "sBmq5pehE1_Ed5YBs4DGV4FMftoKwo_cVVsCpPND36Q",
 5 |   scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
 6 |   // ucm: 'U3TjJAZWJjlWBB4KAXSHKzuky81jtyh0zqH8rUL4Wd0',
 7 |   // defaultToken: 'xU9zFkq3X2ZQ6olwNVvr1vUWIjc3kXTWr7xKQD6dh10',
 8 |   // pixl: 'DM3FoZUq_yebASPhgd8pEIRIzDW6muXEhxz5-JwbZwo',
 9 |   // collectionsRegistry: 'TFWDmf8a3_nw43GCm_CuYlYoylHAjCcFGbgHfDaGcsg',
10 |   profileRegistry: "SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY",
11 |   profileSrc: "pbrl1fkS3_SZP3RqqPIjbt3-f81L9vIpV2_OnUmxqGQ",
12 |   getTags: () => [
13 |     { name: "Date-Created", value: new Date().getTime().toString() },
14 |     { name: "Action", value: "CreateProfile" },
15 |   ],
16 | };
17 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/model.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveId } from "@/features/arweave/lib/model";
 2 | import { z } from "zod";
 3 | 
 4 | export const ProfileEntry = z.object({
 5 |   CallerAddress: ArweaveId,
 6 |   ProfileId: ArweaveId,
 7 | });
 8 | export type ProfileEntry = z.infer<typeof ProfileEntry>;
 9 | 
10 | export const ProfileInfo = z.object({
11 |   ProfileId: ArweaveId,
12 |   Username: z.string(),
13 |   ProfileImage: z.string(),
14 |   CoverImage: z.string(),
15 |   Description: z.string(),
16 |   DisplayName: z.string(),
17 | });
18 | export type ProfileInfo = z.infer<typeof ProfileInfo>;
19 | 
20 | export const ProfileInfoCreate = ProfileInfo.omit({
21 |   ProfileId: true,
22 |   Username: true,
23 | })
24 |   .extend({
25 |     UserName: z.string(),
26 |     DateCreated: z.number(),
27 |     DateUpdated: z.number(),
28 |   })
29 |   .partial({
30 |     // Username: true,
31 |     // ProfileImage: true,
32 |     // CoverImage: true,
33 |     // Description: true,
34 |     // DisplayName: true,
35 |   });
36 | export type ProfileInfoCreate = z.infer<typeof ProfileInfoCreate>;
37 | 
38 | export const ProfileInfoUpdate = ProfileInfoCreate.omit({
39 |   DateCreated: true,
40 | }).partial();
41 | export type ProfileInfoUpdate = z.infer<typeof ProfileInfoUpdate>;
42 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/profileClient.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   AoContractClient,
 3 |   createAoContractClient,
 4 | } from "../../ao/lib/aoContractClient";
 5 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 6 | import { connect } from "@permaweb/aoconnect";
 7 | import { profileAOS } from "./config";
 8 | import { fetchUrl } from "@/features/arweave/lib/arweave";
 9 | import { ProfileInfoCreate } from "./model";
10 | import { MessageResult } from "@/features/ao/lib/aoClient";
11 | 
12 | export type ProfileClient = {
13 |   aoContractClient: AoContractClient;
14 | 
15 |   // Reads
16 | 
17 |   // Writes
18 |   initializeProcess(): Promise<MessageResult>;
19 |   updateProfile(profile: ProfileInfoCreate): Promise<string>;
20 | };
21 | 
22 | // Placeholder
23 | // TODO: Define these methods properly
24 | export const createProfileClient = (
25 |   aoContractClient: AoContractClient,
26 | ): ProfileClient => ({
27 |   aoContractClient: aoContractClient,
28 | 
29 |   // Writes
30 |   initializeProcess: async () => {
31 |     const profileSrc = await fetch(fetchUrl(profileAOS.profileSrc)).then(
32 |       (res) => res.text(),
33 |     );
34 |     const messageResult = await aoContractClient.messageResult({
35 |       tags: [{ name: "Action", value: "Eval" }],
36 |       data: profileSrc,
37 |     });
38 |     const error = messageResult.Error;
39 |     if (error !== undefined) {
40 |       throw new Error(error);
41 |     }
42 |     return messageResult;
43 |   },
44 |   updateProfile: async (profile: ProfileInfoCreate) =>
45 |     aoContractClient.message({
46 |       tags: [{ name: "Action", value: "Update-Profile" }],
47 |       data: JSON.stringify(profile),
48 |     }),
49 | });
50 | 
51 | export const createProfileClientForProcess =
52 |   (wallet: AoWallet) => (processId: string) => {
53 |     const aoContractClient = createAoContractClient(
54 |       processId,
55 |       connect(),
56 |       wallet,
57 |     );
58 |     return createProfileClient(aoContractClient);
59 |   };
60 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/profileProcess.ts:
--------------------------------------------------------------------------------
 1 | import { connect } from "@permaweb/aoconnect";
 2 | import { profileAOS } from "./config";
 3 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 4 | import { createProfileClientForProcess } from "./profileClient";
 5 | import { ProfileInfoCreate } from "./model";
 6 | 
 7 | export const spawnProfileProcess = async (
 8 |   wallet: AoWallet,
 9 |   initialProfile?: ProfileInfoCreate,
10 | ): Promise<string> => {
11 |   const spawnClient = connect();
12 |   const profileId = await spawnClient.spawn({
13 |     module: profileAOS.module,
14 |     scheduler: profileAOS.scheduler,
15 |     tags: profileAOS.getTags(),
16 |     signer: wallet.signer,
17 |   });
18 |   // TODO: Do we have to confirm that the process has been spawned?
19 |   const profileClient = createProfileClientForProcess(wallet)(profileId);
20 |   await profileClient.initializeProcess();
21 |   if (initialProfile !== undefined) {
22 |     await profileClient.updateProfile(initialProfile);
23 |   }
24 |   return profileId;
25 | };
26 | 


--------------------------------------------------------------------------------
/src/features/profile/contract/profileRegistryClient.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, test, expect, beforeAll } from "vitest";
 2 | import { createProfileRegistryClient } from "./profileRegistryClient";
 3 | import {
 4 |   AoContractClient,
 5 |   createAoContractClient,
 6 | } from "@/features/ao/lib/aoContractClient";
 7 | import { loadTestWallet } from "@/features/ao/test/lib/fsWallet";
 8 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 9 | import { connect } from "@permaweb/aoconnect";
10 | 
11 | describe("createProfileRegistryClient", () => {
12 |   let testWallet: AoWallet;
13 |   let profileTestAoContractClient: AoContractClient;
14 | 
15 |   beforeAll(async () => {
16 |     testWallet = await loadTestWallet();
17 |     profileTestAoContractClient = createAoContractClient(
18 |       import.meta.env.VITE_PROFILETEST_PROCESS_ID,
19 |       connect(),
20 |       testWallet,
21 |     );
22 |   });
23 | 
24 |   test("creates client", async () => {
25 |     const client = createProfileRegistryClient(profileTestAoContractClient);
26 |     expect(client).toMatchSnapshot();
27 |   });
28 | });
29 | 


--------------------------------------------------------------------------------
/src/features/profile/hooks/useProfileInfo.ts:
--------------------------------------------------------------------------------
 1 | import { queryOptions, useQuery } from "@tanstack/react-query";
 2 | import { profileInfoBatcher, profileInfoBatcherWallet } from "../utils/batch";
 3 | import { ProfileInfo } from "../contract/model";
 4 | 
 5 | type WalletIdOrProfileId =
 6 |   | {
 7 |       walletId: string;
 8 |     }
 9 |   | {
10 |       profileId: string;
11 |     };
12 | 
13 | export const useProfileInfo = (opts: WalletIdOrProfileId) => {
14 |   // check if profileId is defined
15 |   let queryOpts;
16 |   if ("profileId" in opts) {
17 |     queryOpts = queryOptions({
18 |       queryKey: ["profileInfo", opts.profileId],
19 |       queryFn: async () => {
20 |         const profileInfo = await profileInfoBatcher.fetch(opts.profileId);
21 |         return profileInfo as ProfileInfo | undefined;
22 |       },
23 |     });
24 |   } else if ("walletId" in opts) {
25 |     queryOpts = queryOptions({
26 |       queryKey: ["profileInfoWallet", opts.walletId],
27 |       queryFn: async () => {
28 |         const walletIdAndProfileInfo = await profileInfoBatcherWallet.fetch(
29 |           opts.walletId,
30 |         );
31 |         return walletIdAndProfileInfo.profile;
32 |       },
33 |     });
34 |   } else {
35 |     throw new Error("Invalid opts");
36 |   }
37 | 
38 |   return useQuery(queryOpts);
39 | };
40 | 


--------------------------------------------------------------------------------
/src/features/profile/utils/batch.ts:
--------------------------------------------------------------------------------
 1 | import { create, keyResolver, windowScheduler } from "@yornaath/batshit";
 2 | import { createProfileRegistryClientForProcess } from "../contract/profileRegistryClient";
 3 | import { dummyWallet } from "@/features/ao/lib/wallets/dummy";
 4 | import { ArweaveAddress, ArweaveId } from "@/features/arweave/lib/model";
 5 | import { ProfileEntry, ProfileInfo } from "../contract/model";
 6 | 
 7 | const registryClient = createProfileRegistryClientForProcess(dummyWallet)(
 8 |   import.meta.env.VITE_PROFILE_PROCESS_ID,
 9 | );
10 | 
11 | export const profileInfoBatcher = create({
12 |   fetcher: async (ids: ArweaveId[]) => {
13 |     console.log("profileInfoBatcher", ids);
14 | 
15 |     const profiles = await registryClient.readProfiles(ids);
16 | 
17 |     console.log({ profiles });
18 |     return profiles;
19 |   },
20 |   resolver: keyResolver("ProfileId"),
21 |   scheduler: windowScheduler(50), // Default and can be omitted.
22 | });
23 | 
24 | export const profileInfoBatcherWallet = create({
25 |   fetcher: async (walletIds: ArweaveAddress[]) => {
26 |     console.log("profileInfoBatcherWallet", walletIds);
27 | 
28 |     const walletProfiles =
29 |       await registryClient.getProfilesByAddresses(walletIds);
30 | 
31 |     const foundWallets = new Set<ArweaveAddress>();
32 |     const firstWalletProfiles: Array<ProfileEntry> = [];
33 |     for (const profile of walletProfiles) {
34 |       if (!foundWallets.has(profile.CallerAddress)) {
35 |         foundWallets.add(profile.CallerAddress);
36 |         firstWalletProfiles.push(profile);
37 |       }
38 |     }
39 | 
40 |     const profileInfos = await registryClient.readProfiles(
41 |       walletProfiles.map((x) => x.ProfileId),
42 |     );
43 | 
44 |     // Match the walletIds back up with the profileInfos
45 |     const walletsWithProfiles = walletIds
46 |       .map((walletId) => {
47 |         const profileId = firstWalletProfiles.find(
48 |           (x) => x.CallerAddress === walletId,
49 |         )?.ProfileId;
50 |         const profile = profileInfos.find((x) => x.ProfileId === profileId);
51 |         return { walletId, profile };
52 |       })
53 |       .filter((x) => x.profile !== undefined) as Array<{
54 |       walletId: ArweaveAddress;
55 |       profile: ProfileInfo;
56 |     }>;
57 | 
58 |     return walletsWithProfiles;
59 |   },
60 |   resolver: keyResolver("walletId"),
61 |   scheduler: windowScheduler(50), // Default and can be omitted.
62 | });
63 | 


--------------------------------------------------------------------------------
/src/features/reality/contract/_2dTile.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveTxId } from "@/features/arweave/lib/model";
 2 | import { z } from "zod";
 3 | import { RealityVector } from "./model";
 4 | 
 5 | export const Vector2 = RealityVector.refine(
 6 |   (position) => position.length === 2,
 7 |   {
 8 |     message: "Expected an array of length 2",
 9 |   },
10 | );
11 | export type Vector2 = z.infer<typeof Vector2>;
12 | 
13 | export const Vector2Int = Vector2.refine(
14 |   (position) => position.every((n) => Number.isInteger(n)),
15 |   {
16 |     message: "Expected integers",
17 |   },
18 | );
19 | export type Vector2Int = z.infer<typeof Vector2Int>;
20 | 
21 | export const TilesetType = z.enum(["Fixed"]);
22 | export type TilesetType = z.infer<typeof TilesetType>;
23 | 
24 | export const ImageFormat = z.enum(["PNG"]);
25 | export type ImageFormat = z.infer<typeof ImageFormat>;
26 | 
27 | export const Tileset = z.object({
28 |   Type: TilesetType,
29 |   Format: ImageFormat,
30 |   TxId: ArweaveTxId,
31 | });
32 | export type Tileset = z.infer<typeof Tileset>;
33 | 
34 | export const TilemapType = z.enum(["Fixed"]);
35 | export type TilemapType = z.infer<typeof TilemapType>;
36 | 
37 | export const TilemapFormat = z.enum(["TMJ"]);
38 | export type TilemapFormat = z.infer<typeof TilemapFormat>;
39 | 
40 | export const TilemapOffset = Vector2Int;
41 | export type TilemapOffset = z.infer<typeof TilemapOffset>;
42 | 
43 | export const Tilemap = z.object({
44 |   Type: TilemapType,
45 |   Format: TilemapFormat,
46 |   TxId: ArweaveTxId,
47 |   Offset: z.optional(TilemapOffset),
48 | });
49 | export type Tilemap = z.infer<typeof Tilemap>;
50 | 
51 | export const Spawn = Vector2Int;
52 | export type Spawn = z.infer<typeof Spawn>;
53 | 
54 | export const _2dTileParams = z.object({
55 |   Version: z.number(),
56 |   Spawn: z.optional(Spawn),
57 |   Tileset,
58 |   Tilemap,
59 |   PlayerSpriteTxId: ArweaveTxId,
60 |   PlayerSpriteAtlasTxId: ArweaveTxId,
61 | });
62 | export type _2dTileParams = z.infer<typeof _2dTileParams>;
63 | 


--------------------------------------------------------------------------------
/src/features/reality/contract/__snapshots__/verseClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createRealityClient > Universe readAllEntities 1`] = `
 4 | {
 5 |   "w0UvMR1XlVEjjNSaBn9F1qSkDPoIaWHJXzp5G5jjdAo": {
 6 |     "Interaction": {
 7 |       "Type": "Warp",
 8 |     },
 9 |     "Position": [
10 |       0,
11 |     ],
12 |     "Type": "Unknown",
13 |   },
14 | }
15 | `;
16 | 
17 | exports[`createRealityClient > Universe readInfo 1`] = `
18 | {
19 |   "Dimensions": 1,
20 |   "Name": "Universe",
21 |   "Parent": "96CutVBhNwtNzdT_zY_Fxdj6S_AjDJre3AA1gJgidro",
22 |   "Render-With": "1D-Directory",
23 | }
24 | `;
25 | 
26 | exports[`createRealityClient > Universe readParameters 1`] = `[]`;
27 | 
28 | exports[`createRealityClient > creates client 1`] = `
29 | {
30 |   "aoContractClient": {
31 |     "aoClient": {
32 |       "assign": [Function],
33 |       "dryrun": [Function],
34 |       "message": [Function],
35 |       "monitor": [Function],
36 |       "result": [Function],
37 |       "results": [Function],
38 |       "spawn": [Function],
39 |       "unmonitor": [Function],
40 |     },
41 |     "aoWallet": {
42 |       "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
43 |       "anonymous": false,
44 |       "signer": [Function],
45 |       "type": "Keyfile",
46 |     },
47 |     "dryrunReadReplyOne": [Function],
48 |     "dryrunReadReplyOneJson": [Function],
49 |     "dryrunReadReplyOptional": [Function],
50 |     "message": [Function],
51 |     "processId": "PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs",
52 |   },
53 |   "createEntity": [Function],
54 |   "readEntitiesDynamic": [Function],
55 |   "readEntitiesStatic": [Function],
56 |   "readInfo": [Function],
57 |   "readParameters": [Function],
58 |   "updateEntityPosition": [Function],
59 |   "worldId": "PHHOfjFPSbn7TQT1Z-dB4ndyIyppHV5haMPCg8dIccs",
60 | }
61 | `;
62 | 


--------------------------------------------------------------------------------
/src/features/reality/contract/audio.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveTxId } from "@/features/arweave/lib/model";
 2 | import { z } from "zod";
 3 | 
 4 | export const TrackConfig = z.object({
 5 |   Type: z.enum(["Fixed"]),
 6 |   Format: z.enum(["WAV", "MP3", "OGG", "OPUS", "WEBM"]),
 7 |   TxId: ArweaveTxId,
 8 | });
 9 | 
10 | export const AudioParams = z.object({
11 |   Bgm: z.optional(TrackConfig),
12 | });
13 | export type AudioParams = z.infer<typeof AudioParams>;
14 | 


--------------------------------------------------------------------------------
/src/features/reality/test/RealityLink.tsx:
--------------------------------------------------------------------------------
 1 | import { useQuery } from "@tanstack/react-query";
 2 | import { RealityClient } from "../contract/realityClient";
 3 | import { Button } from "@/components/ui/button";
 4 | 
 5 | interface RealityLinkProps {
 6 |   worldId: string;
 7 |   realityClient: RealityClient;
 8 |   onClick?: () => void;
 9 | }
10 | 
11 | export default function RealityLink({
12 |   worldId,
13 |   realityClient,
14 |   onClick,
15 | }: RealityLinkProps) {
16 |   const realityInfo = useQuery({
17 |     queryKey: ["realityInfo", worldId],
18 |     queryFn: async () => realityClient.readInfo(),
19 |   });
20 | 
21 |   return (
22 |     <Button onClick={onClick}>Warp to {realityInfo.data?.Name ?? "..."}</Button>
23 |   );
24 | }
25 | 


--------------------------------------------------------------------------------
/src/features/render/components/ButtonOnce.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { Loader2 } from "lucide-react";
 3 | import { Size2D } from "../lib/model";
 4 | import { useState } from "react";
 5 | 
 6 | interface ButtonOnceProps {
 7 |   elementSize: Size2D;
 8 |   children: React.ReactNode;
 9 |   onClick?: () => void;
10 | }
11 | 
12 | export function ButtonOnce({
13 |   elementSize,
14 |   children,
15 |   onClick,
16 | }: ButtonOnceProps) {
17 |   const [isClicked, setIsClicked] = useState(onClick === undefined);
18 | 
19 |   return (
20 |     <div
21 |       className={`w-[${elementSize.w}px] h-[${elementSize.h}px] flex flex-col items-center justify-center`}
22 |     >
23 |       <Button
24 |         disabled={isClicked}
25 |         className="flex text-xl font-bold"
26 |         onClick={() => {
27 |           setIsClicked(true);
28 |           onClick?.();
29 |         }}
30 |       >
31 |         {isClicked && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
32 |         {children}
33 |       </Button>
34 |     </div>
35 |   );
36 | }
37 | 


--------------------------------------------------------------------------------
/src/features/render/components/FormOverlay.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 3 | import { AoContractClientForProcess } from "@/features/ao/lib/aoContractClient";
 4 | import { truncateAddress } from "@/features/arweave/lib/utils";
 5 | import { SchemaFormLoader } from "@/features/schema/components/SchemaFormLoader";
 6 | import { queryClient } from "@/lib/query";
 7 | import { QueryClientProvider } from "@tanstack/react-query";
 8 | import { X } from "lucide-react";
 9 | import { toast } from "sonner";
10 | 
11 | interface FormOverlayProps {
12 |   clickTime: number;
13 |   aoContractClientForProcess: AoContractClientForProcess;
14 |   schemaProcessId: string;
15 |   isExternal: boolean;
16 |   methodName: string;
17 |   close: () => void;
18 | }
19 | 
20 | export function FormOverlay({
21 |   clickTime,
22 |   aoContractClientForProcess,
23 |   schemaProcessId,
24 |   isExternal,
25 |   methodName,
26 |   close,
27 | }: FormOverlayProps) {
28 |   return (
29 |     <QueryClientProvider client={queryClient}>
30 |       <Card>
31 |         <CardHeader className="flex flex-row justify-between items-baseline">
32 |           <CardTitle>{methodName}</CardTitle>
33 |           <Button onClick={close} variant={"destructive"} size={"sm"}>
34 |             <X />
35 |           </Button>
36 |         </CardHeader>
37 |         <CardContent>
38 |           <SchemaFormLoader
39 |             clickTime={clickTime}
40 |             aoContractClientForProcess={aoContractClientForProcess}
41 |             schemaProcessId={schemaProcessId}
42 |             isExternal={isExternal}
43 |             methodName={methodName}
44 |             onComplete={(isSuccess) => {
45 |               // TODO: Show external process Id?
46 |               if (isSuccess) {
47 |                 toast(
48 |                   `'${methodName}' message sent to ${truncateAddress(schemaProcessId)}`,
49 |                 );
50 |               } else {
51 |                 toast.error(`Failed to send '${methodName}' message`);
52 |               }
53 |               close();
54 |             }}
55 |           />
56 |         </CardContent>
57 |       </Card>
58 |     </QueryClientProvider>
59 |   );
60 | }
61 | 


--------------------------------------------------------------------------------
/src/features/render/components/PhaserGame.tsx:
--------------------------------------------------------------------------------
 1 | import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
 2 | import StartGame from "../lib/phaser/game";
 3 | import { listenScene } from "../lib/EventBus";
 4 | 
 5 | export interface IRefPhaserGame {
 6 |   game: Phaser.Game | null;
 7 |   scene: Phaser.Scene | null;
 8 | }
 9 | 
10 | interface IProps {
11 |   currentActiveScene?: (scene_instance: Phaser.Scene) => void;
12 | }
13 | 
14 | export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(
15 |   function PhaserGame({ currentActiveScene }, ref) {
16 |     const game = useRef<Phaser.Game | null>(null!);
17 | 
18 |     useLayoutEffect(() => {
19 |       if (game.current === null) {
20 |         game.current = StartGame("game-container");
21 | 
22 |         if (typeof ref === "function") {
23 |           ref({ game: game.current, scene: null });
24 |         } else if (ref) {
25 |           ref.current = { game: game.current, scene: null };
26 |         }
27 |       }
28 | 
29 |       return () => {
30 |         if (game.current) {
31 |           game.current.destroy(true);
32 |           if (game.current !== null) {
33 |             game.current = null;
34 |           }
35 |         }
36 |       };
37 |     }, [ref]);
38 | 
39 |     useEffect(() => {
40 |       return listenScene("scene-ready", (scene_instance: Phaser.Scene) => {
41 |         if (currentActiveScene && typeof currentActiveScene === "function") {
42 |           currentActiveScene(scene_instance);
43 |         }
44 | 
45 |         if (typeof ref === "function") {
46 |           ref({ game: game.current, scene: scene_instance });
47 |         } else if (ref) {
48 |           ref.current = { game: game.current, scene: scene_instance };
49 |         }
50 |       });
51 |     }, [currentActiveScene, ref]);
52 | 
53 |     return <div id="game-container"></div>;
54 |   },
55 | );
56 | 


--------------------------------------------------------------------------------
/src/features/render/lib/EventBus.ts:
--------------------------------------------------------------------------------
 1 | import { Events } from "phaser";
 2 | import { type EventFromLogic } from "xstate";
 3 | import { renderMachine } from "../machines/renderMachine";
 4 | 
 5 | // Used to emit events between React components and Phaser scenes
 6 | // https://newdocs.phaser.io/docs/3.70.0/Phaser.Events.EventEmitter
 7 | const GameEventBus = new Events.EventEmitter();
 8 | 
 9 | export function emitSceneReady(scene: Phaser.Scene) {
10 |   GameEventBus.emit("scene-ready", scene);
11 | }
12 | 
13 | export function emitSceneEnd(scene: Phaser.Scene) {
14 |   GameEventBus.emit("scene-end", scene);
15 | }
16 | 
17 | export function listenScene(
18 |   event: "scene-ready" | "scene-end",
19 |   callback: (scene: Phaser.Scene) => void,
20 | ) {
21 |   GameEventBus.on(event, callback);
22 |   return () => {
23 |     GameEventBus.off(event, callback);
24 |   };
25 | }
26 | 
27 | export function emitSceneEvent(event: EventFromLogic<typeof renderMachine>) {
28 |   GameEventBus.emit("scene-event", event);
29 | }
30 | 
31 | export function listenSceneEvent(
32 |   callback: (event: EventFromLogic<typeof renderMachine>) => void,
33 | ) {
34 |   GameEventBus.on("scene-event", callback);
35 |   return () => {
36 |     GameEventBus.off("scene-event", callback);
37 |   };
38 | }
39 | 


--------------------------------------------------------------------------------
/src/features/render/lib/load/model.ts:
--------------------------------------------------------------------------------
 1 | import { ProfileRegistryClient } from "@/features/profile/contract/profileRegistryClient";
 2 | import { RealityClient } from "@/features/reality/contract/realityClient";
 3 | 
 4 | export type WorldState = {
 5 |   info: Awaited<ReturnType<RealityClient["readInfo"]>>;
 6 |   parameters: Awaited<ReturnType<RealityClient["readParameters"]>>;
 7 |   entities: Awaited<ReturnType<RealityClient["readEntitiesStatic"]>>;
 8 |   profiles: Awaited<ReturnType<ProfileRegistryClient["readProfiles"]>>;
 9 | };
10 | 


--------------------------------------------------------------------------------
/src/features/render/lib/model.ts:
--------------------------------------------------------------------------------
 1 | export type Size2D = {
 2 |   w: number;
 3 |   h: number;
 4 | };
 5 | 
 6 | export type Point2D = {
 7 |   x: number;
 8 |   y: number;
 9 | };
10 | 
11 | export type BoxCentered = {
12 |   center: Point2D;
13 |   edgeLength: number;
14 | };
15 | 
16 | export type WarpTarget = {
17 |   worldId: string;
18 |   position?: Array<number>;
19 | };
20 | 


--------------------------------------------------------------------------------
/src/features/render/lib/phaser/game.ts:
--------------------------------------------------------------------------------
 1 | import { AUTO, Game } from "phaser";
 2 | import { Boot } from "./scenes/Boot";
 3 | import { MainMenu } from "./scenes/MainMenu";
 4 | import { Preloader } from "./scenes/Preloader";
 5 | import { WorldScene } from "./scenes/WorldScene";
 6 | 
 7 | export const isDebug = import.meta.env.DEV;
 8 | 
 9 | //  Find out more information about the Game Config at:
10 | //  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
11 | const config = (parent: string): Phaser.Types.Core.GameConfig => ({
12 |   type: AUTO,
13 |   width: 1024,
14 |   height: 768,
15 |   parent,
16 |   backgroundColor: "#028af8",
17 |   scene: [Boot, Preloader, MainMenu, WorldScene],
18 |   physics: {
19 |     default: "arcade",
20 |     arcade: { debug: isDebug },
21 |   },
22 |   dom: {
23 |     createContainer: true,
24 |   },
25 |   scale: {
26 |     parent,
27 |     mode: Phaser.Scale.RESIZE,
28 |     resizeInterval: 100,
29 |     width: "100%",
30 |     height: "100%",
31 |     expandParent: true,
32 |   },
33 |   pixelArt: true,
34 | });
35 | 
36 | const StartGame = (parent: string) => {
37 |   return new Game(config(parent));
38 | };
39 | 
40 | export default StartGame;
41 | 


--------------------------------------------------------------------------------
/src/features/render/lib/phaser/scenes/Boot.ts:
--------------------------------------------------------------------------------
 1 | import { Scene } from "phaser";
 2 | 
 3 | export class Boot extends Scene {
 4 |   constructor() {
 5 |     super("Boot");
 6 |   }
 7 | 
 8 |   preload() {
 9 |     //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
10 |     //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
11 |     this.load.setPath("assets");
12 | 
13 |     this.load.image("main_bg", "branding/main_bg.jpg");
14 |   }
15 | 
16 |   create() {
17 |     this.scene.start("Preloader");
18 |   }
19 | }
20 | 


--------------------------------------------------------------------------------
/src/features/render/lib/phaser/scenes/WarpableScene.ts:
--------------------------------------------------------------------------------
 1 | import { Scene } from "phaser";
 2 | import { AoContractClientForProcess } from "@/features/ao/lib/aoContractClient";
 3 | import { ProfileInfo } from "@/features/profile/contract/model";
 4 | import { WorldState } from "../../load/model";
 5 | import { WarpTarget } from "../../model";
 6 | 
 7 | export class WarpableScene extends Scene {
 8 |   public isWarping: boolean = false;
 9 | 
10 |   pixelateIn() {
11 |     this.cameras.main.fadeIn(400);
12 |     const fxCamera = this.cameras.main.postFX.addPixelate(20);
13 |     this.add.tween({
14 |       targets: fxCamera,
15 |       duration: 400,
16 |       amount: -1,
17 |     });
18 |   }
19 | 
20 |   public onWarpBegin() {
21 |     // Override this method to disable features in the scene
22 |   }
23 | 
24 |   public onWarpAbort() {
25 |     // Override this method to re-enable features in the scene
26 |   }
27 | 
28 |   public onWarpSuccess() {
29 |     // Override this method to clean up the scene
30 |   }
31 | 
32 |   public warpToWorld(
33 |     playerAddress: string,
34 |     playerProfileInfo: ProfileInfo | undefined,
35 |     warpTarget: WarpTarget,
36 |     worldState: WorldState,
37 |     aoContractClientForProcess: AoContractClientForProcess,
38 |   ) {
39 |     console.log({ warpTarget });
40 | 
41 |     this.onWarpBegin();
42 |     const pixelated = this.cameras.main.postFX.addPixelate(-1);
43 | 
44 |     // Transition to next scene
45 |     this.add.tween({
46 |       targets: pixelated,
47 |       duration: 200,
48 |       amount: 20,
49 |       onComplete: () => {
50 |         this.onWarpSuccess();
51 |         this.scene.start("WorldScene", {
52 |           playerAddress,
53 |           playerProfileInfo,
54 |           warpTarget,
55 |           reality: worldState,
56 |           aoContractClientForProcess,
57 |         });
58 |       },
59 |     });
60 |   }
61 | }
62 | 


--------------------------------------------------------------------------------
/src/features/render/test/components/DemoPhaserGame.tsx:
--------------------------------------------------------------------------------
1 | import { PhaserGame } from "../../components/PhaserGame";
2 | 
3 | export function DemoPhaserGame() {
4 |   return <PhaserGame />;
5 | }
6 | 


--------------------------------------------------------------------------------
/src/features/rjsf/AddButton/AddButton.tsx:
--------------------------------------------------------------------------------
 1 | import { Plus } from "lucide-react";
 2 | import {
 3 |   FormContextType,
 4 |   IconButtonProps,
 5 |   RJSFSchema,
 6 |   StrictRJSFSchema,
 7 |   TranslatableString,
 8 | } from "@rjsf/utils";
 9 | 
10 | export default function AddButton<
11 |   T = any,
12 |   S extends StrictRJSFSchema = RJSFSchema,
13 |   F extends FormContextType = any,
14 | >({ uiSchema, registry, ...props }: IconButtonProps<T, S, F>) {
15 |   const { translateString } = registry;
16 |   return (
17 |     <button
18 |       {...props}
19 |       style={{ width: "100%" }}
20 |       className={`ml-1 grid justify-items-center bg-blue-500 px-4 py-2 text-base font-normal text-white hover:bg-blue-700 ${props.className}`}
21 |       title={translateString(TranslatableString.AddItemButton)}
22 |     >
23 |       <Plus />
24 |     </button>
25 |   );
26 | }
27 | 


--------------------------------------------------------------------------------
/src/features/rjsf/AddButton/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./AddButton";
2 | export * from "./AddButton";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/ArrayFieldItemTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./ArrayFieldItemTemplate";
2 | export * from "./ArrayFieldItemTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/ArrayFieldTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./ArrayFieldTemplate";
2 | export * from "./ArrayFieldTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/BaseInputTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./BaseInputTemplate";
2 | export * from "./BaseInputTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/CheckboxWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./CheckboxWidget";
2 | export * from "./CheckboxWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/CheckboxesWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./CheckboxesWidget";
2 | export * from "./CheckboxesWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/DescriptionField/DescriptionField.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   DescriptionFieldProps,
 3 |   FormContextType,
 4 |   RJSFSchema,
 5 |   StrictRJSFSchema,
 6 | } from "@rjsf/utils";
 7 | 
 8 | export default function DescriptionField<
 9 |   T = any,
10 |   S extends StrictRJSFSchema = RJSFSchema,
11 |   F extends FormContextType = any,
12 | >({ id, description }: DescriptionFieldProps<T, S, F>) {
13 |   if (description) {
14 |     return (
15 |       <div>
16 |         <div
17 |           id={id}
18 |           className="ml-1 -mb-2 text-md font-undead-pixel text-gray-800/80"
19 |         >
20 |           {description}
21 |         </div>
22 |       </div>
23 |     );
24 |   }
25 | 
26 |   return null;
27 | }
28 | 


--------------------------------------------------------------------------------
/src/features/rjsf/DescriptionField/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./DescriptionField";
2 | export * from "./DescriptionField";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/ErrorList/ErrorList.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   ErrorListProps,
 3 |   FormContextType,
 4 |   RJSFSchema,
 5 |   StrictRJSFSchema,
 6 |   TranslatableString,
 7 | } from "@rjsf/utils";
 8 | 
 9 | export default function ErrorList<
10 |   T = any,
11 |   S extends StrictRJSFSchema = RJSFSchema,
12 |   F extends FormContextType = any,
13 | >({ errors, registry }: ErrorListProps<T, S, F>) {
14 |   const { translateString } = registry;
15 | 
16 |   return (
17 |     <div className="mb-4 rounded border border-red-700">
18 |       <div className="rounded-t bg-red-100 p-3 text-red-950">
19 |         {translateString(TranslatableString.ErrorsLabel)}
20 |       </div>
21 |       <div className="p-0">
22 |         <ul>
23 |           {errors.map((error, i: number) => {
24 |             return (
25 |               <li key={i} className="border-0 p-3">
26 |                 <span>{error.stack}</span>
27 |               </li>
28 |             );
29 |           })}
30 |         </ul>
31 |       </div>
32 |     </div>
33 |   );
34 | }
35 | 


--------------------------------------------------------------------------------
/src/features/rjsf/ErrorList/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./ErrorList";
2 | export * from "./ErrorList";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldErrorTemplate/FieldErrorTemplate.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   errorId,
 3 |   FieldErrorProps,
 4 |   FormContextType,
 5 |   RJSFSchema,
 6 |   StrictRJSFSchema,
 7 | } from "@rjsf/utils";
 8 | 
 9 | /** The `FieldErrorTemplate` component renders the errors local to the particular field
10 |  *
11 |  * @param props - The `FieldErrorProps` for the errors being rendered
12 |  */
13 | export default function FieldErrorTemplate<
14 |   T = any,
15 |   S extends StrictRJSFSchema = RJSFSchema,
16 |   F extends FormContextType = any,
17 | >(props: FieldErrorProps<T, S, F>) {
18 |   const { errors = [], idSchema } = props;
19 |   if (errors.length === 0) {
20 |     return null;
21 |   }
22 |   const id = errorId<T>(idSchema);
23 | 
24 |   return (
25 |     <ul className="list-inside list-none" id={id}>
26 |       {errors.map((error, i) => {
27 |         return (
28 |           <li key={i} className="m-0 border-0 p-0">
29 |             <small className="m-0 text-red-500">{error}</small>{" "}
30 |           </li>
31 |         );
32 |       })}
33 |     </ul>
34 |   );
35 | }
36 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldErrorTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./FieldErrorTemplate";
2 | export * from "./FieldErrorTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldHelpTemplate/FieldHelpTemplate.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   FieldHelpProps,
 3 |   FormContextType,
 4 |   helpId,
 5 |   RJSFSchema,
 6 |   StrictRJSFSchema,
 7 | } from "@rjsf/utils";
 8 | 
 9 | /** The `FieldHelpTemplate` component renders any help desired for a field
10 |  *
11 |  * @param props - The `FieldHelpProps` to be rendered
12 |  */
13 | export default function FieldHelpTemplate<
14 |   T = any,
15 |   S extends StrictRJSFSchema = RJSFSchema,
16 |   F extends FormContextType = any,
17 | >(props: FieldHelpProps<T, S, F>) {
18 |   const { idSchema, help, hasErrors } = props;
19 |   if (!help) {
20 |     return null;
21 |   }
22 |   const id = helpId<T>(idSchema);
23 |   return (
24 |     <span
25 |       className={hasErrors ? "text-red-500" : "text-muted-foreground"}
26 |       id={id}
27 |     >
28 |       {help}
29 |     </span>
30 |   );
31 | }
32 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldHelpTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./FieldHelpTemplate";
2 | export * from "./FieldHelpTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldTemplate/FieldTemplate.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   FieldTemplateProps,
 3 |   FormContextType,
 4 |   getTemplate,
 5 |   getUiOptions,
 6 |   RJSFSchema,
 7 |   StrictRJSFSchema,
 8 | } from "@rjsf/utils";
 9 | 
10 | export default function FieldTemplate<
11 |   T = any,
12 |   S extends StrictRJSFSchema = RJSFSchema,
13 |   F extends FormContextType = any,
14 | >({
15 |   id,
16 |   children,
17 |   displayLabel,
18 |   rawErrors = [],
19 |   errors,
20 |   help,
21 |   description,
22 |   rawDescription,
23 |   classNames,
24 |   style,
25 |   disabled,
26 |   label,
27 |   hidden,
28 |   onDropPropertyClick,
29 |   onKeyChange,
30 |   readonly,
31 |   required,
32 |   schema,
33 |   uiSchema,
34 |   registry,
35 | }: FieldTemplateProps<T, S, F>) {
36 |   const uiOptions = getUiOptions(uiSchema);
37 |   const WrapIfAdditionalTemplate = getTemplate<
38 |     "WrapIfAdditionalTemplate",
39 |     T,
40 |     S,
41 |     F
42 |   >("WrapIfAdditionalTemplate", registry, uiOptions);
43 |   if (hidden) {
44 |     return <div className="hidden">{children}</div>;
45 |   }
46 |   return (
47 |     <WrapIfAdditionalTemplate
48 |       classNames={classNames}
49 |       style={style}
50 |       disabled={disabled}
51 |       id={id}
52 |       label={label}
53 |       onDropPropertyClick={onDropPropertyClick}
54 |       onKeyChange={onKeyChange}
55 |       readonly={readonly}
56 |       required={required}
57 |       schema={schema}
58 |       uiSchema={uiSchema}
59 |       registry={registry}
60 |     >
61 |       <div className="block">
62 |         {displayLabel && (
63 |           <label
64 |             htmlFor={id}
65 |             className={`mb-1 ml-1 inline-block font-undead-pixel text-22px leading-6 ${
66 |               rawErrors.length > 0 ? "text-red-500" : ""
67 |             }`}
68 |           >
69 |             {label}
70 |             {required ? "*" : null}
71 |           </label>
72 |         )}
73 |         {children}
74 |         {displayLabel && rawDescription && (
75 |           <small className="mt-1 block text-[1.0rem]">
76 |             <div
77 |               className={`${
78 |                 rawErrors.length > 0 ? "text-red-500" : "text-muted-foreground"
79 |               }`}
80 |             >
81 |               {description}
82 |             </div>
83 |           </small>
84 |         )}
85 |         {errors}
86 |         {help}
87 |       </div>
88 |     </WrapIfAdditionalTemplate>
89 |   );
90 | }
91 | 


--------------------------------------------------------------------------------
/src/features/rjsf/FieldTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./FieldTemplate";
2 | export * from "./FieldTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Form/Form.tsx:
--------------------------------------------------------------------------------
 1 | import { FormProps, withTheme } from "@rjsf/core";
 2 | import { FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
 3 | import { ComponentType } from "react";
 4 | import { generateTheme } from "../Theme";
 5 | 
 6 | export function generateForm<
 7 |   T = any,
 8 |   S extends StrictRJSFSchema = RJSFSchema,
 9 |   F extends FormContextType = any,
10 | >(): ComponentType<FormProps<T, S, F>> {
11 |   return withTheme<T, S, F>(generateTheme<T, S, F>());
12 | }
13 | 
14 | export default generateForm();
15 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Form/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./Form";
2 | export * from "./Form";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/IconButton/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./IconButton";
2 | export * from "./IconButton";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/ObjectFieldTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./ObjectFieldTemplate";
2 | export * from "./ObjectFieldTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/RadioWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./RadioWidget";
2 | export * from "./RadioWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/RangeWidget/RangeWidget.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   FormContextType,
 3 |   getTemplate,
 4 |   labelValue,
 5 |   RJSFSchema,
 6 |   StrictRJSFSchema,
 7 |   WidgetProps,
 8 | } from "@rjsf/utils";
 9 | 
10 | export default function RangeWidget<
11 |   T = any,
12 |   S extends StrictRJSFSchema = RJSFSchema,
13 |   F extends FormContextType = any,
14 | >(props: WidgetProps<T, S, F>) {
15 |   const { value, label, hideLabel, options, registry } = props;
16 |   const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, S, F>(
17 |     "BaseInputTemplate",
18 |     registry,
19 |     options,
20 |   );
21 |   return (
22 |     <BaseInputTemplate
23 |       {...props}
24 |       extraProps={{ label: labelValue(label || undefined, hideLabel) }}
25 |     >
26 |       <span className="range-view">{value}</span>
27 |     </BaseInputTemplate>
28 |   );
29 | }
30 | 


--------------------------------------------------------------------------------
/src/features/rjsf/RangeWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./RangeWidget";
2 | export * from "./RangeWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/SelectWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./SelectWidget";
2 | export * from "./SelectWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/SubmitButton/SubmitButton.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import {
 3 |   FormContextType,
 4 |   getSubmitButtonOptions,
 5 |   RJSFSchema,
 6 |   StrictRJSFSchema,
 7 |   SubmitButtonProps,
 8 | } from "@rjsf/utils";
 9 | 
10 | export default function SubmitButton<
11 |   T = any,
12 |   S extends StrictRJSFSchema = RJSFSchema,
13 |   F extends FormContextType = any,
14 | >(props: SubmitButtonProps<T, S, F>) {
15 |   const {
16 |     submitText,
17 |     norender,
18 |     props: submitButtonProps,
19 |   } = getSubmitButtonOptions<T, S, F>(props.uiSchema);
20 | 
21 |   if (norender) {
22 |     return null;
23 |   }
24 | 
25 |   return (
26 |     <div className="pt-4">
27 |       <Button type="submit" {...submitButtonProps}>
28 |         {submitText}
29 |       </Button>
30 |     </div>
31 |   );
32 | }
33 | 


--------------------------------------------------------------------------------
/src/features/rjsf/SubmitButton/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./SubmitButton";
2 | export * from "./SubmitButton";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Templates/Templates.ts:
--------------------------------------------------------------------------------
 1 | import AddButton from "../AddButton";
 2 | import ArrayFieldItemTemplate from "../ArrayFieldItemTemplate";
 3 | import ArrayFieldTemplate from "../ArrayFieldTemplate";
 4 | import BaseInputTemplate from "../BaseInputTemplate/BaseInputTemplate";
 5 | import DescriptionField from "../DescriptionField";
 6 | import ErrorList from "../ErrorList";
 7 | import {
 8 |   CopyButton,
 9 |   MoveDownButton,
10 |   MoveUpButton,
11 |   RemoveButton,
12 | } from "../IconButton";
13 | import FieldErrorTemplate from "../FieldErrorTemplate";
14 | import FieldHelpTemplate from "../FieldHelpTemplate";
15 | import FieldTemplate from "../FieldTemplate";
16 | import ObjectFieldTemplate from "../ObjectFieldTemplate";
17 | import SubmitButton from "../SubmitButton";
18 | import TitleField from "../TitleField";
19 | import WrapIfAdditionalTemplate from "../WrapIfAdditionalTemplate";
20 | import {
21 |   FormContextType,
22 |   RJSFSchema,
23 |   StrictRJSFSchema,
24 |   TemplatesType,
25 | } from "@rjsf/utils";
26 | 
27 | export function generateTemplates<
28 |   T = any,
29 |   S extends StrictRJSFSchema = RJSFSchema,
30 |   F extends FormContextType = any,
31 | >(): Partial<TemplatesType<T, S, F>> {
32 |   return {
33 |     ArrayFieldItemTemplate,
34 |     ArrayFieldTemplate,
35 |     BaseInputTemplate,
36 |     ButtonTemplates: {
37 |       AddButton,
38 |       CopyButton,
39 |       MoveDownButton,
40 |       MoveUpButton,
41 |       RemoveButton,
42 |       SubmitButton,
43 |     },
44 |     DescriptionFieldTemplate: DescriptionField,
45 |     ErrorListTemplate: ErrorList,
46 |     FieldErrorTemplate,
47 |     FieldHelpTemplate,
48 |     FieldTemplate,
49 |     ObjectFieldTemplate,
50 |     TitleFieldTemplate: TitleField,
51 |     WrapIfAdditionalTemplate,
52 |   };
53 | }
54 | 
55 | export default generateTemplates();
56 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Templates/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./Templates";
2 | export * from "./Templates";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/TextareaWidget/TextareaWidget.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   ariaDescribedByIds,
 3 |   FormContextType,
 4 |   RJSFSchema,
 5 |   StrictRJSFSchema,
 6 |   WidgetProps,
 7 | } from "@rjsf/utils";
 8 | import { ChangeEvent, FocusEvent } from "react";
 9 | 
10 | type CustomWidgetProps<
11 |   T = any,
12 |   S extends StrictRJSFSchema = RJSFSchema,
13 |   F extends FormContextType = any,
14 | > = WidgetProps<T, S, F> & {
15 |   options: any;
16 | };
17 | 
18 | export default function TextareaWidget<
19 |   T = any,
20 |   S extends StrictRJSFSchema = RJSFSchema,
21 |   F extends FormContextType = any,
22 | >({
23 |   id,
24 |   placeholder,
25 |   value,
26 |   required,
27 |   disabled,
28 |   autofocus,
29 |   readonly,
30 |   onBlur,
31 |   onFocus,
32 |   onChange,
33 |   options,
34 | }: CustomWidgetProps<T, S, F>) {
35 |   const _onChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
36 |     onChange(value === "" ? options.emptyValue : value);
37 |   const _onBlur = ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
38 |     onBlur(id, value);
39 |   const _onFocus = ({ target: { value } }: FocusEvent<HTMLTextAreaElement>) =>
40 |     onFocus(id, value);
41 | 
42 |   return (
43 |     <div className="flex">
44 |       <textarea
45 |         className="w-full border bg-background px-3 py-2 resize-none font-undead-pixel text-[20px] leading-5"
46 |         id={id}
47 |         name={id}
48 |         placeholder={placeholder}
49 |         disabled={disabled}
50 |         readOnly={readonly}
51 |         value={value}
52 |         required={required}
53 |         autoFocus={autofocus}
54 |         rows={options.rows || 5}
55 |         onChange={_onChange}
56 |         onBlur={_onBlur}
57 |         onFocus={_onFocus}
58 |         aria-describedby={ariaDescribedByIds<T>(id)}
59 |       />
60 |     </div>
61 |   );
62 | }
63 | 


--------------------------------------------------------------------------------
/src/features/rjsf/TextareaWidget/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./TextareaWidget";
2 | export * from "./TextareaWidget";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Theme/Theme.tsx:
--------------------------------------------------------------------------------
 1 | import { ThemeProps } from "@rjsf/core";
 2 | 
 3 | import { generateTemplates } from "../Templates";
 4 | import { generateWidgets } from "../Widgets";
 5 | import { FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
 6 | 
 7 | export function generateTheme<
 8 |   T = any,
 9 |   S extends StrictRJSFSchema = RJSFSchema,
10 |   F extends FormContextType = any,
11 | >(): ThemeProps<T, S, F> {
12 |   return {
13 |     templates: generateTemplates<T, S, F>(),
14 |     widgets: generateWidgets<T, S, F>(),
15 |   };
16 | }
17 | 
18 | export default generateTheme();
19 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Theme/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./Theme";
2 | export * from "./Theme";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/TitleField/TitleField.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   FormContextType,
 3 |   getUiOptions,
 4 |   RJSFSchema,
 5 |   StrictRJSFSchema,
 6 |   TitleFieldProps,
 7 | } from "@rjsf/utils";
 8 | 
 9 | export default function TitleField<
10 |   T = any,
11 |   S extends StrictRJSFSchema = RJSFSchema,
12 |   F extends FormContextType = any,
13 | >({ id, title, uiSchema }: TitleFieldProps<T, S, F>) {
14 |   const uiOptions = getUiOptions<T, S, F>(uiSchema);
15 | 
16 |   return (
17 |     <div id={id} className="my-1">
18 |       <h5 className="mb-2 text-xl font-medium leading-tight">
19 |         {uiOptions.title || title}
20 |       </h5>
21 |       <hr className="my-4 border-t border-muted" />
22 |     </div>
23 |   );
24 | }
25 | 


--------------------------------------------------------------------------------
/src/features/rjsf/TitleField/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./TitleField";
2 | export * from "./TitleField";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Widgets/Widgets.ts:
--------------------------------------------------------------------------------
 1 | import CheckboxWidget from "../CheckboxWidget/CheckboxWidget";
 2 | import CheckboxesWidget from "../CheckboxesWidget/CheckboxesWidget";
 3 | import RadioWidget from "../RadioWidget/RadioWidget";
 4 | import RangeWidget from "../RangeWidget/RangeWidget";
 5 | import SelectWidget from "../SelectWidget/SelectWidget";
 6 | import TextareaWidget from "../TextareaWidget/TextareaWidget";
 7 | import {
 8 |   FormContextType,
 9 |   RegistryWidgetsType,
10 |   RJSFSchema,
11 |   StrictRJSFSchema,
12 | } from "@rjsf/utils";
13 | 
14 | export function generateWidgets<
15 |   T = any,
16 |   S extends StrictRJSFSchema = RJSFSchema,
17 |   F extends FormContextType = any,
18 | >(): RegistryWidgetsType<T, S, F> {
19 |   return {
20 |     CheckboxWidget,
21 |     CheckboxesWidget,
22 |     RadioWidget,
23 |     RangeWidget,
24 |     SelectWidget,
25 |     TextareaWidget,
26 |   };
27 | }
28 | 
29 | export default generateWidgets();
30 | 


--------------------------------------------------------------------------------
/src/features/rjsf/Widgets/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./Widgets";
2 | export * from "./Widgets";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/WrapIfAdditionalTemplate/WrapIfAdditionalTemplate.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   ADDITIONAL_PROPERTY_FLAG,
 3 |   FormContextType,
 4 |   RJSFSchema,
 5 |   StrictRJSFSchema,
 6 |   TranslatableString,
 7 |   WrapIfAdditionalTemplateProps,
 8 | } from "@rjsf/utils";
 9 | import { FocusEvent } from "react";
10 | 
11 | export default function WrapIfAdditionalTemplate<
12 |   T = any,
13 |   S extends StrictRJSFSchema = RJSFSchema,
14 |   F extends FormContextType = any,
15 | >({
16 |   classNames,
17 |   style,
18 |   children,
19 |   disabled,
20 |   id,
21 |   label,
22 |   onDropPropertyClick,
23 |   onKeyChange,
24 |   readonly,
25 |   required,
26 |   schema,
27 |   uiSchema,
28 |   registry,
29 | }: WrapIfAdditionalTemplateProps<T, S, F>) {
30 |   const { templates, translateString } = registry;
31 |   // Button templates are not overridden in the uiSchema
32 |   const { RemoveButton } = templates.ButtonTemplates;
33 |   const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
34 |   const additional = ADDITIONAL_PROPERTY_FLAG in schema;
35 | 
36 |   if (!additional) {
37 |     return (
38 |       <div className={classNames} style={style}>
39 |         {children}
40 |       </div>
41 |     );
42 |   }
43 | 
44 |   const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) =>
45 |     onKeyChange(target.value);
46 |   const keyId = `${id}-key`;
47 | 
48 |   return (
49 |     <div className={`flex ${classNames}`} style={style}>
50 |       <div className="w-1/2 flex-none p-2">
51 |         <label
52 |           htmlFor={keyId}
53 |           className="block text-sm font-medium text-muted-foreground"
54 |         >
55 |           {keyLabel}
56 |         </label>
57 |         <input
58 |           required={required}
59 |           defaultValue={label}
60 |           disabled={disabled || readonly}
61 |           id={keyId}
62 |           name={keyId}
63 |           onBlur={!readonly ? handleBlur : undefined}
64 |           type="text"
65 |           className="mt-1 w-full border p-2 shadow-sm"
66 |         />
67 |       </div>
68 |       <div className="w-1/2 flex-none p-2">{children}</div>
69 |       <div className="w-1/4 flex-none p-2">
70 |         <RemoveButton
71 |           iconType="block"
72 |           className="w-full"
73 |           disabled={disabled || readonly}
74 |           onClick={onDropPropertyClick(label)}
75 |           uiSchema={uiSchema}
76 |           registry={registry}
77 |         />
78 |       </div>
79 |     </div>
80 |   );
81 | }
82 | 


--------------------------------------------------------------------------------
/src/features/rjsf/WrapIfAdditionalTemplate/index.ts:
--------------------------------------------------------------------------------
1 | export { default } from "./WrapIfAdditionalTemplate";
2 | export * from "./WrapIfAdditionalTemplate";
3 | 


--------------------------------------------------------------------------------
/src/features/rjsf/index.ts:
--------------------------------------------------------------------------------
1 | import Form from "./Form/Form";
2 | 
3 | export { default as Form, generateForm } from "./Form";
4 | export { default as Templates, generateTemplates } from "./Templates";
5 | export { default as Theme, generateTheme } from "./Theme";
6 | export { default as Widgets, generateWidgets } from "./Widgets";
7 | 
8 | export default Form;
9 | 


--------------------------------------------------------------------------------
/src/features/schema/components/SchemaFormLoader.stories.tsx:
--------------------------------------------------------------------------------
 1 | import type { Meta, StoryObj } from "@storybook/react";
 2 | import { SchemaFormLoader } from "./SchemaFormLoader";
 3 | import { QueryClientProvider } from "@tanstack/react-query";
 4 | import { queryClient } from "@/lib/query";
 5 | import { createAoContractClient } from "@/features/ao/lib/aoContractClient";
 6 | import { connect } from "@permaweb/aoconnect";
 7 | import AnonymousLoader from "@/features/ao/test/components/AnonymousLoader";
 8 | import { fn } from "@storybook/test";
 9 | 
10 | // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
11 | const meta = {
12 |   title: "Schema/SchemaFormLoader",
13 |   component: SchemaFormLoader,
14 |   parameters: {
15 |     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
16 |     layout: "centered",
17 |   },
18 |   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
19 |   tags: ["autodocs"],
20 |   // More on argTypes: https://storybook.js.org/docs/Schema/argtypes
21 |   argTypes: {},
22 |   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
23 |   args: {
24 |     //@ts-expect-error provided by decorator
25 |     schemaContractClient: null,
26 |   },
27 |   // wrap in TanStack QueryProvider
28 |   decorators: [
29 |     (Story, options) => (
30 |       <QueryClientProvider client={queryClient}>
31 |         <AnonymousLoader>
32 |           {(wallet) => (
33 |             <Story
34 |               args={{
35 |                 ...options.args,
36 |                 aoContractClientForProcess: (processId) =>
37 |                   createAoContractClient(processId, connect(), wallet),
38 |               }}
39 |             />
40 |           )}
41 |         </AnonymousLoader>
42 |       </QueryClientProvider>
43 |     ),
44 |   ],
45 | } satisfies Meta<typeof SchemaFormLoader>;
46 | 
47 | export default meta;
48 | type Story = StoryObj<typeof meta>;
49 | 
50 | // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
51 | export const Default: Story = {
52 |   args: {
53 |     schemaProcessId: import.meta.env.VITE_LLAMAKING_PROCESS_ID,
54 |     methodName: "Petition",
55 |     isExternal: true,
56 |     onComplete: fn,
57 |   },
58 | };
59 | 


--------------------------------------------------------------------------------
/src/features/schema/contract/__snapshots__/schemaClient.test.ts.snap:
--------------------------------------------------------------------------------
 1 | // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
 2 | 
 3 | exports[`createSchemaClient > creates client 1`] = `
 4 | {
 5 |   "aoContractClient": {
 6 |     "aoClient": {
 7 |       "assign": [Function],
 8 |       "dryrun": [Function],
 9 |       "message": [Function],
10 |       "monitor": [Function],
11 |       "result": [Function],
12 |       "results": [Function],
13 |       "spawn": [Function],
14 |       "unmonitor": [Function],
15 |     },
16 |     "aoWallet": {
17 |       "address": "HHz5nNVEzkALjmZq8cdIdubMBJCpIFOvzO5uHfU5nQI",
18 |       "anonymous": false,
19 |       "signer": [Function],
20 |       "type": "Keyfile",
21 |     },
22 |     "dryrunReadReplyOne": [Function],
23 |     "dryrunReadReplyOneJson": [Function],
24 |     "dryrunReadReplyOptional": [Function],
25 |     "message": [Function],
26 |     "processId": "y_obnQk5mkphKlulM7v1Xyn6IhJKZGhP_BC1qLJq46w",
27 |   },
28 |   "readSchema": [Function],
29 |   "readSchemaExternal": [Function],
30 | }
31 | `;
32 | 


--------------------------------------------------------------------------------
/src/features/schema/contract/model.ts:
--------------------------------------------------------------------------------
 1 | // Placeholder
 2 | // TODO: Define this properly
 3 | import { ArweaveId } from "@/features/arweave/lib/model";
 4 | import { RJSFSchema } from "@rjsf/utils";
 5 | import { z } from "zod";
 6 | 
 7 | export const SchemaMethod = z.object({
 8 |   Title: z.string(),
 9 |   Description: z.string(),
10 |   Schema: z.optional(
11 |     z.object({
12 |       Tags: z.custom<RJSFSchema>(),
13 |     }),
14 |   ),
15 |   NoSubmit: z.optional(z.boolean()),
16 | });
17 | export type SchemaMethod = z.infer<typeof SchemaMethod>;
18 | 
19 | export const Schema = z.record(SchemaMethod);
20 | export type Schema = z.infer<typeof Schema>;
21 | 
22 | export const SchemaExternalMethod = SchemaMethod.and(
23 |   z.object({
24 |     Target: ArweaveId,
25 |   }),
26 | );
27 | export type SchemaExternalMethod = z.infer<typeof SchemaExternalMethod>;
28 | 
29 | export const SchemaExternal = z.record(SchemaExternalMethod);
30 | export type SchemaExternal = z.infer<typeof SchemaExternal>;
31 | 


--------------------------------------------------------------------------------
/src/features/schema/contract/schemaClient.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, test, expect, beforeAll } from "vitest";
 2 | import { createSchemaClient } from "./schemaClient";
 3 | import {
 4 |   AoContractClient,
 5 |   createAoContractClient,
 6 | } from "@/features/ao/lib/aoContractClient";
 7 | import { loadTestWallet } from "@/features/ao/test/lib/fsWallet";
 8 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 9 | import { connect } from "@permaweb/aoconnect";
10 | import { Schema } from "./model";
11 | 
12 | describe("createSchemaClient", () => {
13 |   let testWallet: AoWallet;
14 |   let schemaTestAoContractClient: AoContractClient;
15 | 
16 |   beforeAll(async () => {
17 |     testWallet = await loadTestWallet();
18 |     schemaTestAoContractClient = createAoContractClient(
19 |       import.meta.env.VITE_LLAMAASSISTANT_PROCESS_ID,
20 |       connect(),
21 |       testWallet,
22 |     );
23 |   });
24 | 
25 |   test("creates client", async () => {
26 |     const client = createSchemaClient(schemaTestAoContractClient);
27 |     expect(client).toMatchSnapshot();
28 |   });
29 | 
30 |   test("read Schema", async () => {
31 |     const client = createSchemaClient(schemaTestAoContractClient);
32 | 
33 |     const schema = await client.readSchema();
34 |     expect(Schema.safeParse(schema).success).toBe(true);
35 |     expect(schema).toMatchSnapshot();
36 |   });
37 | });
38 | 


--------------------------------------------------------------------------------
/src/features/schema/contract/schemaClient.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   AoContractClient,
 3 |   createAoContractClient,
 4 | } from "../../ao/lib/aoContractClient";
 5 | import { Schema, SchemaExternal } from "./model";
 6 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 7 | import { connect } from "@permaweb/aoconnect";
 8 | 
 9 | export type SchemaClient = {
10 |   aoContractClient: AoContractClient;
11 | 
12 |   // Reads
13 |   readSchema(): Promise<Schema>;
14 |   readSchemaExternal(): Promise<SchemaExternal>;
15 | };
16 | 
17 | // Placeholder
18 | // TODO: Define these methods properly
19 | export const createSchemaClient = (
20 |   aoContractClient: AoContractClient,
21 | ): SchemaClient => ({
22 |   aoContractClient: aoContractClient,
23 | 
24 |   // Read
25 |   readSchema: () =>
26 |     aoContractClient.messageDelayReplyOneJson<Schema>(
27 |       {
28 |         tags: [{ name: "Action", value: "Schema" }],
29 |       } /* Schema */,
30 |     ),
31 |   readSchemaExternal: () =>
32 |     aoContractClient.messageDelayReplyOneJson<SchemaExternal>(
33 |       {
34 |         tags: [{ name: "Action", value: "SchemaExternal" }],
35 |       } /* SchemaExternal */,
36 |     ),
37 | });
38 | 
39 | export const createSchemaClientForProcess =
40 |   (wallet: AoWallet) => (processId: string) => {
41 |     const aoContractClient = createAoContractClient(
42 |       processId,
43 |       connect(),
44 |       wallet,
45 |     );
46 |     return createSchemaClient(aoContractClient);
47 |   };
48 | 


--------------------------------------------------------------------------------
/src/features/token/contract/model.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveId } from "@/features/arweave/lib/model";
 2 | import { z } from "zod";
 3 | 
 4 | export const TokenInfo = z.object({
 5 |   Name: z.string(),
 6 |   Ticker: z.string(),
 7 |   Logo: z.optional(ArweaveId),
 8 |   Denomination: z.coerce.number().int().nonnegative(),
 9 | });
10 | export type TokenInfo = z.infer<typeof TokenInfo>;
11 | 
12 | export const TokenBalance = z.number().int().nonnegative();
13 | export type TokenBalance = z.infer<typeof TokenBalance>;
14 | 


--------------------------------------------------------------------------------
/src/features/token/contract/tokenClient.ts:
--------------------------------------------------------------------------------
 1 | import { ArweaveAddress, ArweaveId } from "@/features/arweave/lib/model";
 2 | import {
 3 |   AoContractClient,
 4 |   createAoContractClient,
 5 | } from "../../ao/lib/aoContractClient";
 6 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 7 | import { connect } from "@permaweb/aoconnect";
 8 | import { TokenBalance, TokenInfo } from "./model";
 9 | 
10 | export type TokenClient = {
11 |   aoContractClient: AoContractClient;
12 | 
13 |   // Reads
14 |   getInfo(): Promise<TokenInfo>;
15 |   getBalance(address: ArweaveId): Promise<TokenBalance>;
16 | };
17 | 
18 | // Placeholder
19 | // TODO: Define these methods properly
20 | export const createTokenClient = (
21 |   aoContractClient: AoContractClient,
22 | ): TokenClient => ({
23 |   aoContractClient: aoContractClient,
24 | 
25 |   // Read
26 |   getInfo: async () => {
27 |     const reply = await aoContractClient.dryrunReadReplyOne({
28 |       tags: [{ name: "Action", value: "Info" }],
29 |     });
30 |     return TokenInfo.parse(
31 |       reply.Tags.map((kv) => ({ [kv.name]: kv.value })).reduce(
32 |         (acc, kv) => ({ ...acc, ...kv }),
33 |         {},
34 |       ),
35 |     );
36 |   },
37 |   getBalance: async (address: ArweaveAddress) => {
38 |     return aoContractClient.dryrunReadReplyOneJson<TokenBalance>(
39 |       {
40 |         tags: [
41 |           { name: "Action", value: "Balance" },
42 |           { name: "Recipient", value: address },
43 |         ],
44 |       },
45 |       TokenBalance,
46 |     );
47 |   },
48 | });
49 | 
50 | export const createTokenClientForProcess =
51 |   (wallet: AoWallet) => (processId: string) => {
52 |     const aoContractClient = createAoContractClient(
53 |       processId,
54 |       connect(),
55 |       wallet,
56 |     );
57 |     return createTokenClient(aoContractClient);
58 |   };
59 | 


--------------------------------------------------------------------------------
/src/features/tracking/contract/model.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | 
 3 | export const LoginResult = z.object({
 4 |   IsAuthorised: z.boolean(),
 5 |   HasReward: z.boolean(),
 6 |   Reward: z.optional(z.number()),
 7 |   Message: z.string(),
 8 | });
 9 | export type LoginResult = z.infer<typeof LoginResult>;
10 | 


--------------------------------------------------------------------------------
/src/features/tracking/contract/trackingClient.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, test, expect, beforeAll } from "vitest";
 2 | import { createTrackingClient } from "./trackingClient";
 3 | import {
 4 |   AoContractClient,
 5 |   createAoContractClient,
 6 | } from "@/features/ao/lib/aoContractClient";
 7 | import { loadTestWallet } from "@/features/ao/test/lib/fsWallet";
 8 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 9 | import { connect } from "@permaweb/aoconnect";
10 | 
11 | describe("createTrackingClient", () => {
12 |   let testWallet: AoWallet;
13 |   let trackingTestAoContractClient: AoContractClient;
14 | 
15 |   beforeAll(async () => {
16 |     testWallet = await loadTestWallet();
17 |     trackingTestAoContractClient = createAoContractClient(
18 |       import.meta.env.VITE_TRACKING_TEST_PROCESS_ID,
19 |       connect(),
20 |       testWallet,
21 |     );
22 |   });
23 | 
24 |   test("creates client", async () => {
25 |     const client = createTrackingClient(trackingTestAoContractClient);
26 |     expect(client).toMatchSnapshot();
27 |   });
28 | 
29 |   test("read Login", async () => {
30 |     const client = createTrackingClient(trackingTestAoContractClient);
31 | 
32 |     const login = await client.login();
33 |     console.log(login);
34 |   });
35 | });
36 | 


--------------------------------------------------------------------------------
/src/features/waitlist/components/WaitlistSkip.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { Tooltip } from "@/components/ui/tooltip";
 3 | import {
 4 |   TooltipArrow,
 5 |   TooltipContent,
 6 |   TooltipProvider,
 7 |   TooltipTrigger,
 8 | } from "@radix-ui/react-tooltip";
 9 | 
10 | interface WaitlistDetailsProps {
11 |   onEnter: () => void;
12 | }
13 | 
14 | export function WaitlistSkip({ onEnter }: WaitlistDetailsProps) {
15 |   return (
16 |     <div
17 |       className="flex flex-col justify-evenly items-center h-44 min-h-44 text-center px-4 z-20"
18 |       style={{
19 |         fontFamily: "'Press Start 2P",
20 |       }}
21 |     >
22 |       <p className="text-xl leading-8">
23 |         <span className="bg-gradient-to-r from-[#cb559e] via-[#EBAEC6] to-[#d47deb] inline-block text-transparent bg-clip-text">
24 |           You may now
25 |           <br />
26 |           enter Llama Land!
27 |         </span>
28 |       </p>
29 | 
30 |       <TooltipProvider>
31 |         <Tooltip open={true}>
32 |           <TooltipTrigger className="cursor-wait">
33 |             <Button
34 |               onClick={onEnter}
35 |               size={"lg"}
36 |               className={`px-8 py-6 z-20 bg-gradient-to-r from-[#d47deb] via-[#e570ac] to-[#cb559e] hover:via-[#EBAEC6] hover:to-[#cb559e] animate-bounce`}
37 |             >
38 |               Enter Llama Land
39 |             </Button>
40 |           </TooltipTrigger>
41 |           <TooltipContent side="bottom" className="opacity-50">
42 |             <TooltipArrow />
43 |             <div className={`text-xs bg-black px-2 py-1 rounded-md`}>
44 |               Let's go!!!
45 |             </div>
46 |           </TooltipContent>
47 |         </Tooltip>
48 |       </TooltipProvider>
49 |     </div>
50 |   );
51 | }
52 | 


--------------------------------------------------------------------------------
/src/features/waitlist/contract/model.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | 
 3 | export const WaitlistEntry = z.object({
 4 |   Rank: z.number(),
 5 |   Id: z.number(),
 6 |   TimestampCreated: z.number(),
 7 |   TimestampLastBumped: z.number(),
 8 |   BumpCount: z.number(),
 9 |   Authorised: z.optional(z.number()),
10 |   Claimed: z.optional(z.number()),
11 | });
12 | export type WaitlistEntry = z.infer<typeof WaitlistEntry>;
13 | 
14 | export const RankList = z.array(WaitlistEntry);
15 | export type RankList = z.infer<typeof RankList>;
16 | 
17 | export const WaitlistState = z.object({
18 |   RankAsc: RankList,
19 |   RankAscSurrounding: RankList,
20 |   RankDesc: RankList,
21 |   Count: z.number(),
22 |   UserPosition: z.number(),
23 |   User: z.optional(WaitlistEntry),
24 | });
25 | export type WaitlistState = z.infer<typeof WaitlistState>;
26 | 


--------------------------------------------------------------------------------
/src/features/waitlist/contract/waitlistClient.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   AoContractClient,
 3 |   createAoContractClient,
 4 | } from "../../ao/lib/aoContractClient";
 5 | import { AoWallet } from "../../ao/lib/aoWallet";
 6 | import { ArweaveTxId } from "../../arweave/lib/model";
 7 | import { WaitlistState } from "./model";
 8 | import { connect } from "@permaweb/aoconnect";
 9 | 
10 | export type WaitlistClient = {
11 |   aoContractClient: AoContractClient;
12 | 
13 |   // Reads
14 |   readState(): Promise<WaitlistState>;
15 | 
16 |   // Writes
17 |   register(): Promise<ArweaveTxId>;
18 |   bump(): Promise<ArweaveTxId>;
19 | };
20 | 
21 | // Placeholder
22 | // TODO: Define these methods properly
23 | export const createWaitlistClient = (
24 |   aoContractClient: AoContractClient,
25 | ): WaitlistClient => ({
26 |   aoContractClient: aoContractClient,
27 | 
28 |   // Reads
29 |   readState: () =>
30 |     aoContractClient.dryrunReadReplyOneJson<WaitlistState>({
31 |       tags: [{ name: "Read", value: "Waitlist-State" }],
32 |     }),
33 | 
34 |   // Writes
35 |   register: () =>
36 |     aoContractClient.message({
37 |       tags: [
38 |         {
39 |           name: "Action",
40 |           value: "Waitlist-Register",
41 |         },
42 |       ],
43 |     }),
44 |   bump: () =>
45 |     aoContractClient.message({
46 |       tags: [
47 |         {
48 |           name: "Action",
49 |           value: "Waitlist-Bump",
50 |         },
51 |       ],
52 |     }),
53 | });
54 | 
55 | export const createWaitlistClientForProcess =
56 |   (wallet: AoWallet) => (processId: string) => {
57 |     const aoContractClient = createAoContractClient(
58 |       processId,
59 |       connect(),
60 |       wallet,
61 |     );
62 |     return createWaitlistClient(aoContractClient);
63 |   };
64 | 
65 | export type WaitlistClientForProcess = ReturnType<
66 |   typeof createWaitlistClientForProcess
67 | >;
68 | 


--------------------------------------------------------------------------------
/src/index.css:
--------------------------------------------------------------------------------
 1 | @tailwind base;
 2 | @tailwind components;
 3 | @tailwind utilities;
 4 | 
 5 | @layer base {
 6 |   @font-face {
 7 |     font-family: "Undead Pixel 11";
 8 |     src: url("/fonts/Undead_Pixel_11.ttf"), format("truetype");
 9 |   }
10 | 
11 |   :root {
12 |     --background: 0 0% 100%;
13 |     --foreground: 222.2 84% 4.9%;
14 | 
15 |     --card: 0 0% 100%;
16 |     --card-foreground: 222.2 84% 4.9%;
17 | 
18 |     --brown-custom: #e6c9b3;
19 | 
20 |     --popover: 0 0% 100%;
21 |     --popover-foreground: 222.2 84% 4.9%;
22 | 
23 |     --primary: 222.2 47.4% 11.2%;
24 |     --primary-foreground: 210 40% 98%;
25 | 
26 |     --secondary: 210 40% 96.1%;
27 |     --secondary-foreground: 222.2 47.4% 11.2%;
28 | 
29 |     --muted: 210 40% 96.1%;
30 |     --muted-foreground: 215.4 16.3% 46.9%;
31 | 
32 |     --accent: 210 40% 96.1%;
33 |     --accent-foreground: 222.2 47.4% 11.2%;
34 | 
35 |     --destructive: 0 84.2% 60.2%;
36 |     --destructive-foreground: 210 40% 98%;
37 | 
38 |     --border: 214.3 31.8% 91.4%;
39 |     --input: 214.3 31.8% 91.4%;
40 |     --ring: 222.2 84% 4.9%;
41 | 
42 |     --radius: 0.5rem;
43 |   }
44 | 
45 |   .dark {
46 |     --background: 222.2 84% 4.9%;
47 |     --foreground: 210 40% 98%;
48 | 
49 |     --card: 222.2 84% 4.9%;
50 |     --card-foreground: 210 40% 98%;
51 | 
52 |     --brown-custom: #53473e;
53 | 
54 |     --popover: 222.2 84% 4.9%;
55 |     --popover-foreground: 210 40% 98%;
56 | 
57 |     --primary: 210 40% 98%;
58 |     --primary-foreground: 222.2 47.4% 11.2%;
59 | 
60 |     --secondary: 217.2 32.6% 17.5%;
61 |     --secondary-foreground: 210 40% 98%;
62 | 
63 |     --muted: 217.2 32.6% 17.5%;
64 |     --muted-foreground: 215 20.2% 65.1%;
65 | 
66 |     --accent: 217.2 32.6% 17.5%;
67 |     --accent-foreground: 210 40% 98%;
68 | 
69 |     --destructive: 0 62.8% 30.6%;
70 |     --destructive-foreground: 210 40% 98%;
71 | 
72 |     --border: 217.2 32.6% 17.5%;
73 |     --input: 217.2 32.6% 17.5%;
74 |     --ring: 212.7 26.8% 83.9%;
75 |   }
76 | }
77 | 
78 | @layer base {
79 |   * {
80 |     @apply border-border;
81 |   }
82 |   body {
83 |     @apply bg-background text-foreground;
84 |   }
85 | }
86 | 


--------------------------------------------------------------------------------
/src/lib/gameStateStore.ts:
--------------------------------------------------------------------------------
 1 | // gameStateStore.ts
 2 | 
 3 | class GameStateStore {
 4 |     private isChatFocused: boolean = false;
 5 |   
 6 |     setChatFocus(focused: boolean) {
 7 |       this.isChatFocused = focused;
 8 |     }
 9 |   
10 |     getChatFocus() {
11 |       return this.isChatFocused;
12 |     }
13 |   }
14 |   
15 |   export const gameStateStore = new GameStateStore();
16 |   


--------------------------------------------------------------------------------
/src/lib/query.ts:
--------------------------------------------------------------------------------
1 | import { QueryClient } from "@tanstack/react-query";
2 | 
3 | export const queryClient = new QueryClient();
4 | 


--------------------------------------------------------------------------------
/src/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { type ClassValue, clsx } from "clsx";
2 | import { twMerge } from "tailwind-merge";
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs));
6 | }
7 | 


--------------------------------------------------------------------------------
/src/lib/xstate.ts:
--------------------------------------------------------------------------------
1 | // import { createBrowserInspector } from '@statelyai/inspect';
2 | 
3 | export const { inspect } = { inspect: undefined }; //  createBrowserInspector();
4 | 


--------------------------------------------------------------------------------
/src/main.tsx:
--------------------------------------------------------------------------------
 1 | // import React from 'react'
 2 | import ReactDOM from "react-dom/client";
 3 | import "./index.css";
 4 | import { App } from "./App";
 5 | 
 6 | ReactDOM.createRoot(document.getElementById("root")!).render(
 7 |   // <React.StrictMode>
 8 |   <App />,
 9 |   // </React.StrictMode>,
10 | );
11 | 


--------------------------------------------------------------------------------
/src/routeTree.gen.ts:
--------------------------------------------------------------------------------
 1 | /* prettier-ignore-start */
 2 | 
 3 | /* eslint-disable */
 4 | 
 5 | // @ts-nocheck
 6 | 
 7 | // noinspection JSUnusedGlobalSymbols
 8 | 
 9 | // This file is auto-generated by TanStack Router
10 | 
11 | import { createFileRoute } from '@tanstack/react-router'
12 | 
13 | // Import Routes
14 | 
15 | import { Route as rootRoute } from './routes/__root'
16 | 
17 | // Create Virtual Routes
18 | 
19 | const IndexLazyImport = createFileRoute('/')()
20 | const WorldSplatLazyImport = createFileRoute('/world/
#39;)()
21 | 
22 | // Create/Update Routes
23 | 
24 | const IndexLazyRoute = IndexLazyImport.update({
25 |   path: '/',
26 |   getParentRoute: () => rootRoute,
27 | } as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))
28 | 
29 | const WorldSplatLazyRoute = WorldSplatLazyImport.update({
30 |   path: '/world/
#39;,
31 |   getParentRoute: () => rootRoute,
32 | } as any).lazy(() => import('./routes/world.$.lazy').then((d) => d.Route))
33 | 
34 | // Populate the FileRoutesByPath interface
35 | 
36 | declare module '@tanstack/react-router' {
37 |   interface FileRoutesByPath {
38 |     '/': {
39 |       id: '/'
40 |       path: '/'
41 |       fullPath: '/'
42 |       preLoaderRoute: typeof IndexLazyImport
43 |       parentRoute: typeof rootRoute
44 |     }
45 |     '/world/
#39;: {
46 |       id: '/world/
#39;
47 |       path: '/world/
#39;
48 |       fullPath: '/world/
#39;
49 |       preLoaderRoute: typeof WorldSplatLazyImport
50 |       parentRoute: typeof rootRoute
51 |     }
52 |   }
53 | }
54 | 
55 | // Create and export the route tree
56 | 
57 | export const routeTree = rootRoute.addChildren({
58 |   IndexLazyRoute,
59 |   WorldSplatLazyRoute,
60 | })
61 | 
62 | /* prettier-ignore-end */
63 | 
64 | /* ROUTE_MANIFEST_START
65 | {
66 |   "routes": {
67 |     "__root__": {
68 |       "filePath": "__root.tsx",
69 |       "children": [
70 |         "/",
71 |         "/world/
quot;
72 |       ]
73 |     },
74 |     "/": {
75 |       "filePath": "index.lazy.tsx"
76 |     },
77 |     "/world/
quot;: {
78 |       "filePath": "world.$.lazy.tsx"
79 |     }
80 |   }
81 | }
82 | ROUTE_MANIFEST_END */
83 | 


--------------------------------------------------------------------------------
/src/routes/__root.tsx:
--------------------------------------------------------------------------------
 1 | import { Toaster } from "@/components/ui/sonner";
 2 | import { createRootRoute, Outlet } from "@tanstack/react-router";
 3 | import { TanStackRouterDevtools } from "@tanstack/router-devtools";
 4 | import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 5 | 
 6 | export const Route = createRootRoute({
 7 |   component: () => (
 8 |     <div className="bg-brownCustom h-dvh overflow-clip">
 9 |       {/* <div className="p-2 flex items-center gap-2 bg-white h-14">
10 |         <Link to="/" className="[&.active]:font-bold">
11 |           Home
12 |         </Link>{' '}
13 |         <Link to="/app" className="[&.active]:font-bold">
14 |           Game
15 |         </Link>
16 |       </div>
17 |       <hr /> */}
18 |       <Outlet />
19 |       <Toaster position="bottom-left" />
20 |       {import.meta.env.DEV && (
21 |         <>
22 |           <TanStackRouterDevtools />
23 |           <ReactQueryDevtools />
24 |         </>
25 |       )}
26 |     </div>
27 |   ),
28 | });
29 | 


--------------------------------------------------------------------------------
/src/routes/index.lazy.tsx:
--------------------------------------------------------------------------------
 1 | import { AoWallet } from "@/features/ao/lib/aoWallet";
 2 | import Main from "@/features/main/components/Main";
 3 | import { WaitlistScreen } from "@/features/waitlist/components/WaitlistScreen";
 4 | import { WaitlistSplash } from "@/features/waitlist/components/WaitlistSplash";
 5 | import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
 6 | import { useState } from "react";
 7 | 
 8 | export const Route = createLazyFileRoute("/")({
 9 |   component: Index,
10 | });
11 | 
12 | function Index() {
13 |   const [wallet, setWallet] = useState<AoWallet | null>(null);
14 | 
15 |   if (wallet === null) {
16 |     return (
17 |       <WaitlistSplash loginTitle="Sign in" temporaryWalletEnabled={false}>
18 |         {(wallet) => (
19 |           <WaitlistScreen onEnter={() => setWallet(wallet)} wallet={wallet} />
20 |         )}
21 |       </WaitlistSplash>
22 |     );
23 |   }
24 | 
25 |   return <Main wallet={wallet} disconnect={() => setWallet(null)} />;
26 | }
27 | 


--------------------------------------------------------------------------------
/src/routes/world.$.lazy.tsx:
--------------------------------------------------------------------------------
 1 | import { Login } from "@/features/login/components/Login";
 2 | import Main from "@/features/main/components/Main";
 3 | import {
 4 |   createLazyFileRoute,
 5 |   useNavigate,
 6 |   useParams,
 7 | } from "@tanstack/react-router";
 8 | 
 9 | const worldPathRegex = /^([a-zA-Z0-9_-]{43})$/;
10 | 
11 | export const Route = createLazyFileRoute("/world/
quot;)({
12 |   component: WorldId,
13 | });
14 | 
15 | // const addressWhitelist = [
16 | //   "0cQJ5Hd4oCaL57CWP-Pqe5_e0D4_ZDWuxKBgR9ke1SI", // me
17 | //   "0yTSTgkCdcgxZHshUDHobfo_sHzW7ZIbqse8eMy_wJY", // sam
18 | //   "hKibO41ULSd4cbh7rrHSZXy8bwd6t0fRGkihmPkklGY", // alberto
19 | //   "D_zXubpRWd5Z-MASCJMB9EIGkNEu2D_a6GGN1JOpj2Y", // moira
20 | //   "71jBJuC2FPubKtv687Q1kc8ee43l_a_8D9TZGIgShzg",
21 | //   "uf_FqRvLqjnFMc8ZzGkF4qWKuNmUIQcYP0tPlCGORQk",
22 | //   "v2XXwq_FvVqH2KR4p_x8H-SQ7rDwZBbykSv-59__Avc",
23 | //   "aC75VhWSsEOnp-SMg3l40o4lvs1OxBNMYXVZnt-7lhw",
24 | //   "5VPys2doO8c-eX2wKu07u9Fh2d_K7PtZ6pThV_K1I6s",
25 | //   "UPJHTNsaKcC6baqLFHMAMI7daWPIG3NDDfFQ2s2h8T0",
26 | //   "q-RR9fXWCubz3a5-KndWAjKblsG_qB-zXdcQibIL3lw",
27 | //   "MnYBURB3NcF6R2tfWkXWMtdzv0X1tchgXpWZPKpmjuA",
28 | //   "YvdNQ-5DFa67zDH6ANMBaf7n4hg5jTpDoz84JtqXmAo",
29 | //   "IWJPipyG_rq6Wq_UWJZbbUEek930Goo30MktSoiWtFk",
30 | //   "qqg_q69nWNQwEXUajdX-Zy3du9HMz-p0Wp-8tFQGDtU",
31 | //   "FZx2g_LPDIj09ksj8dksbMWqjnSxoXAyEqxPrQDc1MI",
32 | //   "YxFhHPuYgB1PvchIjcQ569bn9WMspuxrJgT71DFg4uo",
33 | //   "sM9nBtAlqIfxTLOXv4aYm9u3JsOyvKqG8XLb5UirT_I",
34 | // ];
35 | 
36 | function WorldId() {
37 |   const { _splat } = useParams({
38 |     // Not sure why I have to do this but whatever
39 |     select: (params) => ({
40 |       _splat: Object.prototype.hasOwnProperty.call(params, "_splat")
41 |         ? String((params as Record<"_splat", string>)._splat)
42 |         : "",
43 |     }),
44 |     strict: false,
45 |   });
46 | 
47 |   console.log(_splat);
48 | 
49 |   const navigate = useNavigate();
50 |   if (_splat.startsWith("main")) {
51 |     navigate({
52 |       to: "/",
53 |     });
54 |   }
55 | 
56 |   let worldId = undefined;
57 |   const match = worldPathRegex.exec(_splat);
58 |   if (match) {
59 |     worldId = match[1];
60 |   }
61 | 
62 |   if (!worldId) {
63 |     return <div>Invalid world ID</div>;
64 |   }
65 | 
66 |   return (
67 |     <Login>
68 |       {(wallet, disconnect) => {
69 |         return (
70 |           <Main wallet={wallet} disconnect={disconnect} worldId={worldId} />
71 |         );
72 |       }}
73 |     </Login>
74 |   );
75 | }
76 | 


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
 4 |     "useDefineForClassFields": true,
 5 |     "lib": ["ES2020", "DOM", "DOM.Iterable"],
 6 |     "module": "ESNext",
 7 |     "skipLibCheck": true,
 8 | 
 9 |     /* Bundler mode */
10 |     "moduleResolution": "bundler",
11 |     "allowImportingTsExtensions": true,
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "noEmit": true,
15 |     "jsx": "react-jsx",
16 | 
17 |     /* Linting */
18 |     "strict": true,
19 |     "noUnusedLocals": true,
20 |     "noUnusedParameters": true,
21 |     "noFallthroughCasesInSwitch": true,
22 | 
23 |     /* shadcn/ui */
24 |     "baseUrl": ".",
25 |     "paths": {
26 |       "@/*": ["./src/*"]
27 |     }
28 |   },
29 |   "include": ["src"],
30 |   "references": [{ "path": "./tsconfig.node.json" }]
31 | }
32 | 


--------------------------------------------------------------------------------
/tsconfig.node.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "composite": true,
 4 |     "skipLibCheck": true,
 5 |     "module": "ESNext",
 6 |     "moduleResolution": "bundler",
 7 |     "allowSyntheticDefaultImports": true,
 8 |     "strict": true
 9 |   },
10 |   "include": ["vite.config.ts"]
11 | }
12 | 


--------------------------------------------------------------------------------
/vite.config.ts:
--------------------------------------------------------------------------------
 1 | import path from "path";
 2 | import { defineConfig } from "vite";
 3 | import react from "@vitejs/plugin-react";
 4 | import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
 5 | import webfontDownload from "vite-plugin-webfont-dl";
 6 | 
 7 | // https://vitejs.dev/config/
 8 | export default defineConfig({
 9 |   plugins: [react(), webfontDownload(), TanStackRouterVite()],
10 |   resolve: {
11 |     alias: {
12 |       "@": path.resolve(__dirname, "./src"),
13 |     },
14 |   },
15 | });
16 | 


--------------------------------------------------------------------------------