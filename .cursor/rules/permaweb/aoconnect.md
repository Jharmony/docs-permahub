├── .devcontainer
    ├── .env.example
    ├── Dockerfile
    ├── README.md
    ├── devcontainer.json
    ├── docker-compose.yaml
    ├── generateALL.sh
    ├── generateWallet.sh
    ├── scripts
    │   ├── build-container
    │   ├── install-deno.sh
    │   ├── install-emsdk.sh
    │   ├── install-lua.sh
    │   ├── install-node.sh
    │   ├── install-python.sh
    │   └── install-rust.sh
    └── services
    │   ├── cu
    │       ├── .env.cu
    │       └── Dockerfile
    │   ├── mu
    │       ├── .env.mu
    │       └── Dockerfile
    │   └── su
    │       ├── .env.su
    │       ├── Dockerfile
    │       └── deploy-scheduler
    │           ├── index.js
    │           ├── package-lock.json
    │           └── package.json
├── .github
    └── workflows
    │   ├── connect.yml
    │   ├── cu.yml
    │   ├── dev-cli.yml
    │   ├── devnet-ecr-push.yml
    │   ├── loader.yml
    │   ├── mu.yml
    │   ├── protocol-tag-utils.yml
    │   ├── scheduler-utils.yml
    │   ├── su.yml
    │   └── ur.yml
├── .gitignore
├── .gitpod.Dockerfile
├── .gitpod.yml
├── .husky
    ├── commit-msg
    └── pre-commit
├── .npmrc
├── .nvmrc
├── CONTRIBUTING.md
├── DOD.md
├── LICENSE
├── README.md
├── commitlint.config.cjs
├── connect
    ├── .gitignore
    ├── .versionrc
    ├── CHANGELOG.md
    ├── README.md
    ├── esbuild.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── client
    │   │   ├── ao-cu.js
    │   │   ├── ao-cu.test.js
    │   │   ├── ao-mu.js
    │   │   ├── ao-mu.test.js
    │   │   ├── ao-su.js
    │   │   ├── ao-su.test.js
    │   │   ├── browser
    │   │   │   ├── index.js
    │   │   │   ├── wallet.js
    │   │   │   └── wallet.test.js
    │   │   ├── gateway.js
    │   │   ├── gateway.test.js
    │   │   ├── hb-encode.js
    │   │   ├── hb.js
    │   │   ├── hb.test.js
    │   │   ├── node
    │   │   │   ├── index.js
    │   │   │   ├── wallet.js
    │   │   │   └── wallet.test.js
    │   │   └── signer.js
    │   ├── dal.js
    │   ├── hb.playground.js
    │   ├── index.browser.js
    │   ├── index.common.js
    │   ├── index.common.test.js
    │   ├── index.js
    │   ├── index.test.js
    │   ├── lib
    │   │   ├── assign
    │   │   │   ├── index.js
    │   │   │   ├── send-assign.js
    │   │   │   └── send-assign.test.js
    │   │   ├── data-item.js
    │   │   ├── dryrun
    │   │   │   ├── index.js
    │   │   │   ├── run.js
    │   │   │   ├── run.test.js
    │   │   │   ├── verify-input.js
    │   │   │   └── verify-input.test.js
    │   │   ├── message-id
    │   │   │   └── index.js
    │   │   ├── message
    │   │   │   ├── index.js
    │   │   │   ├── upload-message.js
    │   │   │   └── upload-message.test.js
    │   │   ├── messages
    │   │   │   └── index.js
    │   │   ├── monitor
    │   │   │   ├── index.js
    │   │   │   ├── upload-monitor.js
    │   │   │   └── upload-monitor.test.js
    │   │   ├── payments
    │   │   │   └── index.js
    │   │   ├── process-id
    │   │   │   └── index.js
    │   │   ├── request
    │   │   │   ├── dispatch.js
    │   │   │   ├── format.js
    │   │   │   ├── index.js
    │   │   │   ├── multipart.js
    │   │   │   └── transform.js
    │   │   ├── result
    │   │   │   ├── index.js
    │   │   │   ├── read.js
    │   │   │   ├── read.test.js
    │   │   │   ├── verify-input.js
    │   │   │   └── verify-input.test.js
    │   │   ├── results
    │   │   │   ├── index.js
    │   │   │   ├── query.js
    │   │   │   ├── query.test.js
    │   │   │   ├── verify-input.js
    │   │   │   └── verify-input.test.js
    │   │   ├── serializeCron
    │   │   │   ├── index.js
    │   │   │   └── serialize-cron.test.js
    │   │   ├── spawn
    │   │   │   ├── index.js
    │   │   │   ├── upload-process.js
    │   │   │   ├── upload-process.test.js
    │   │   │   ├── verify-inputs.js
    │   │   │   └── verify-inputs.test.js
    │   │   ├── unmonitor
    │   │   │   ├── index.js
    │   │   │   ├── upload-unmonitor.js
    │   │   │   └── upload-unmonitor.test.js
    │   │   ├── utils.js
    │   │   ├── utils.test.js
    │   │   ├── verify-process.js
    │   │   └── verify-process.test.js
    │   └── logger.js
    └── test
    │   └── e2e
    │       ├── README.md
    │       ├── browser-esm
    │           ├── .gitignore
    │           ├── index.html
    │           ├── jsconfig.json
    │           ├── package-lock.json
    │           ├── package.json
    │           ├── src
    │           │   ├── App.svelte
    │           │   ├── App.test.js
    │           │   └── app.js
    │           ├── svelte.config.js
    │           ├── vite.config.js
    │           └── vitest.config.js
    │       ├── m0
    │           ├── address.test.js
    │           ├── balance.test.js
    │           ├── exch.test.js
    │           ├── get.test.js
    │           ├── messages.test.js
    │           ├── nofunds.test.js
    │           ├── post.test.js
    │           ├── redirect.test.js
    │           ├── request.test.js
    │           └── slot.test.js
    │       ├── m2
    │           ├── request.test.js
    │           └── spawn.test.js
    │       ├── node-cjs
    │           ├── index.test.js
    │           ├── package-lock.json
    │           └── package.json
    │       ├── node-esm
    │           ├── index.test.js
    │           ├── package-lock.json
    │           └── package.json
    │       ├── package-lock.json
    │       └── package.json
├── design
    ├── image (1).png
    ├── image (2).png
    ├── image (3).png
    ├── image (4).png
    ├── image (5).png
    └── image.png
├── dev-cli
    ├── .gitignore
    ├── README.md
    ├── container
    │   ├── Dockerfile
    │   ├── build.sh
    │   └── src
    │   │   ├── ao-build-module
    │   │   ├── ao_module_lib
    │   │       ├── __pycache__
    │   │       │   ├── definition.cpython-39.pyc
    │   │       │   ├── file.cpython-39.pyc
    │   │       │   └── helper.cpython-39.pyc
    │   │       ├── config.py
    │   │       ├── definition.py
    │   │       ├── file.py
    │   │       ├── helper.py
    │   │       ├── languages
    │   │       │   ├── __pycache__
    │   │       │   │   ├── c.cpython-39.pyc
    │   │       │   │   ├── lua.cpython-39.pyc
    │   │       │   │   └── rust.cpython-39.pyc
    │   │       │   ├── c.py
    │   │       │   ├── lua.py
    │   │       │   └── rust.py
    │   │       └── libraries.py
    │   │   ├── aolibc
    │   │       ├── Makefile
    │   │       └── aostdio.c
    │   │   ├── core
    │   │       ├── definition.yml
    │   │       ├── loader.lua
    │   │       ├── main.c
    │   │       ├── main.lua
    │   │       └── pre.js
    │   │   ├── json.lua
    │   │   ├── node
    │   │       ├── apply-metering.cjs
    │   │       ├── package-lock.json
    │   │       ├── package.json
    │   │       ├── src
    │   │       │   ├── bin
    │   │       │   │   ├── ao-module.js
    │   │       │   │   ├── ao-spawn.js
    │   │       │   │   ├── bundler-balance.js
    │   │       │   │   └── bundler-fund.js
    │   │       │   ├── clients.js
    │   │       │   ├── defaults.js
    │   │       │   └── main.js
    │   │       └── test
    │   │       │   └── main.test.js
    │   │   └── pack.lua
    ├── deno.json
    ├── deno.lock
    ├── src
    │   ├── commands
    │   │   ├── build.js
    │   │   ├── bundler.js
    │   │   ├── exec.js
    │   │   ├── init.js
    │   │   ├── lua.js
    │   │   ├── publish.js
    │   │   ├── run.js
    │   │   └── spawn.js
    │   ├── deps.js
    │   ├── icons
    │   │   ├── 100.png
    │   │   ├── 102.png
    │   │   ├── 1024.png
    │   │   ├── 114.png
    │   │   ├── 120.png
    │   │   ├── 128.png
    │   │   ├── 144.png
    │   │   ├── 152.png
    │   │   ├── 16.png
    │   │   ├── 167.png
    │   │   ├── 172.png
    │   │   ├── 180.png
    │   │   ├── 196.png
    │   │   ├── 20.png
    │   │   ├── 216.png
    │   │   ├── 256.png
    │   │   ├── 29.png
    │   │   ├── 32.png
    │   │   ├── 40.png
    │   │   ├── 48.png
    │   │   ├── 50.png
    │   │   ├── 512.png
    │   │   ├── 55.png
    │   │   ├── 57.png
    │   │   ├── 58.png
    │   │   ├── 60.png
    │   │   ├── 64.png
    │   │   ├── 66.png
    │   │   ├── 72.png
    │   │   ├── 76.png
    │   │   ├── 80.png
    │   │   ├── 87.png
    │   │   ├── 88.png
    │   │   ├── 92.png
    │   │   ├── Contents.json
    │   │   ├── android
    │   │   │   ├── mipmap-hdpi
    │   │   │   │   └── ic_launcher.png
    │   │   │   ├── mipmap-mdpi
    │   │   │   │   └── ic_launcher.png
    │   │   │   ├── mipmap-xhdpi
    │   │   │   │   └── ic_launcher.png
    │   │   │   ├── mipmap-xxhdpi
    │   │   │   │   └── ic_launcher.png
    │   │   │   └── mipmap-xxxhdpi
    │   │   │   │   └── ic_launcher.png
    │   │   ├── appstore.png
    │   │   └── playstore.png
    │   ├── mod.js
    │   ├── starters
    │   │   ├── c
    │   │   │   ├── ao.c
    │   │   │   ├── ao.h
    │   │   │   ├── helpers.c
    │   │   │   ├── helpers.h
    │   │   │   ├── libcjson
    │   │   │   │   ├── cJSON.c
    │   │   │   │   ├── cJSON.h
    │   │   │   │   └── libcjson.a
    │   │   │   └── process.c
    │   │   └── lua
    │   │   │   ├── ao.lua
    │   │   │   └── process.lua
    │   ├── utils.js
    │   └── versions.js
    └── tools
    │   ├── build.sh
    │   ├── create-install-script.js
    │   ├── deploy
    │       ├── index.js
    │       ├── package-lock.json
    │       └── package.json
    │   ├── local-install.sh
    │   ├── update-tx-mappings.js
    │   └── update-version.js
├── lint-staged.config.cjs
├── loader
    ├── .gitignore
    ├── .versionrc
    ├── CHANGELOG.md
    ├── README.md
    ├── esbuild.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── formats
    │   │   ├── emscripten.cjs
    │   │   ├── emscripten2.cjs
    │   │   ├── emscripten3.cjs
    │   │   ├── emscripten4.cjs
    │   │   └── wasm64-emscripten.cjs
    │   └── index.cjs
    └── test
    │   ├── _unused
    │       ├── contracts
    │       │   ├── process.lua
    │       │   └── process.wasm
    │       ├── contracts2
    │       │   ├── process.lua
    │       │   └── process.wasm
    │       └── process64
    │       │   ├── process.lua
    │       │   └── process.wasm
    │   ├── aos
    │       └── process.wasm
    │   ├── aos64
    │       ├── aos64.test.cjs
    │       ├── aos64.wasm
    │       └── weavedrive.cjs
    │   ├── crash.test.js
    │   ├── emscripten
    │       ├── process.lua
    │       └── process.wasm
    │   ├── emscripten2.test.js
    │   ├── emscripten2
    │       ├── process.lua
    │       └── process.wasm
    │   ├── emscripten2_sqlite
    │       └── process.wasm
    │   ├── emscripten4
    │       └── process.wasm
    │   ├── host.test.js
    │   ├── index.test.js
    │   ├── loader.test.js
    │   ├── metering.test.js
    │   ├── sqlite.test.js
    │   ├── system.test.js
    │   └── wasm64-emscripten
    │       └── process.wasm
├── logos
    ├── ao_pictograph_darkmode.svg
    └── ao_pictograph_lightmode.svg
├── lua-examples
    ├── README.md
    ├── ao-standard-token
    │   ├── .lua-format
    │   ├── README.md
    │   └── token.lua
    ├── archive
    │   ├── README.md
    │   ├── aorc
    │   │   ├── README.md
    │   │   ├── package-lock.json
    │   │   ├── package.json
    │   │   ├── process.lua
    │   │   ├── process.wasm
    │   │   └── repl.js
    │   ├── aos
    │   │   ├── ao.lua
    │   │   ├── package-lock.json
    │   │   ├── package.json
    │   │   ├── process.lua
    │   │   ├── process.wasm
    │   │   └── repl.js
    │   ├── message-passing
    │   │   ├── README.md
    │   │   ├── app
    │   │   │   ├── .gitignore
    │   │   │   ├── README.md
    │   │   │   ├── index.html
    │   │   │   ├── package-lock.json
    │   │   │   ├── package.json
    │   │   │   ├── postcss.config.js
    │   │   │   ├── scripts
    │   │   │   │   └── perma-deploy.mjs
    │   │   │   ├── src
    │   │   │   │   ├── App.jsx
    │   │   │   │   ├── assets
    │   │   │   │   │   └── react.svg
    │   │   │   │   ├── index.css
    │   │   │   │   ├── main.jsx
    │   │   │   │   ├── pages
    │   │   │   │   │   ├── Feed.jsx
    │   │   │   │   │   └── Player.jsx
    │   │   │   │   └── store
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── router.js
    │   │   │   │   │   └── slices
    │   │   │   │   │       └── user.slice.js
    │   │   │   ├── tailwind.config.js
    │   │   │   └── vite.config.js
    │   │   ├── package-lock.json
    │   │   ├── package.json
    │   │   ├── receiver
    │   │   │   ├── contract.js
    │   │   │   ├── contract.lua
    │   │   │   ├── contract.wasm
    │   │   │   └── state.json
    │   │   ├── scripts
    │   │   │   ├── launch.mjs
    │   │   │   └── run.mjs
    │   │   └── sender
    │   │   │   ├── contract.js
    │   │   │   ├── contract.lua
    │   │   │   ├── contract.wasm
    │   │   │   └── state.json
    │   └── sw-token
    │   │   ├── README.md
    │   │   ├── api
    │   │       ├── balance.lua
    │   │       ├── index.lua
    │   │       ├── mint.lua
    │   │       └── transfer.lua
    │   │   ├── common
    │   │       ├── either.lua
    │   │       └── util.lua
    │   │   ├── contract.lua
    │   │   ├── luaunit.lua
    │   │   └── test
    │   │       ├── contract.test.lua
    │   │       └── transfer.test.lua
    ├── hello-world
    │   ├── README.md
    │   ├── base64.lua
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── process.lua
    │   ├── process.wasm
    │   ├── readResult.js
    │   ├── repl.js
    │   ├── sendLoadMessage.js
    │   ├── sendMessage.js
    │   ├── sendSpawnMessage.js
    │   ├── spawnProcess.js
    │   └── test
    │   │   └── memory.test.js
    └── quest
    │   ├── README.md
    │   └── quest.lua
├── package-lock.json
├── package.json
├── protocol-tag-utils
    ├── .versionrc
    ├── CHANGELOG.md
    ├── README.md
    ├── esbuild.js
    ├── index.js
    ├── index.test.js
    ├── package-lock.json
    ├── package.json
    └── types.ts
├── scheduler-utils
    ├── .gitignore
    ├── .versionrc
    ├── CHANGELOG.md
    ├── README.md
    ├── esbuild.js
    ├── package-lock.json
    ├── package.json
    └── src
    │   ├── client
    │       ├── gateway.js
    │       ├── gateway.test.js
    │       ├── in-memory.js
    │       ├── in-memory.test.js
    │       ├── scheduler.js
    │       └── scheduler.test.js
    │   ├── dal.js
    │   ├── err.js
    │   ├── index.browser.js
    │   ├── index.common.js
    │   ├── index.js
    │   ├── locate.js
    │   ├── locate.test.js
    │   ├── raw.js
    │   ├── raw.test.js
    │   ├── utils.js
    │   ├── utils.test.js
    │   ├── validate.js
    │   └── validate.test.js
└── servers
    ├── cu
        ├── .dockerignore
        ├── .env.example
        ├── .gitignore
        ├── .nvmrc
        ├── .postgres
        │   └── Dockerfile
        ├── .versionrc
        ├── Dockerfile
        ├── README.md
        ├── deploy.js
        ├── nodemon.json
        ├── package-lock.json
        ├── package.json
        ├── src
        │   ├── app.js
        │   ├── bootstrap.js
        │   ├── config.js
        │   ├── domain
        │   │   ├── api
        │   │   │   ├── dryRun.js
        │   │   │   ├── healthcheck.js
        │   │   │   ├── perf.js
        │   │   │   ├── readCronResults.js
        │   │   │   ├── readResult.js
        │   │   │   ├── readResults.js
        │   │   │   ├── readState.js
        │   │   │   └── readStateFromCheckpoint.js
        │   │   ├── dal.js
        │   │   ├── lib
        │   │   │   ├── chainEvaluation.js
        │   │   │   ├── chainEvaluation.test.js
        │   │   │   ├── evaluate.js
        │   │   │   ├── evaluate.test.js
        │   │   │   ├── gatherResults.js
        │   │   │   ├── gatherResults.test.js
        │   │   │   ├── hydrateMessages.js
        │   │   │   ├── hydrateMessages.test.js
        │   │   │   ├── loadMessageMeta.js
        │   │   │   ├── loadMessageMeta.test.js
        │   │   │   ├── loadMessages.js
        │   │   │   ├── loadMessages.test.js
        │   │   │   ├── loadModule.js
        │   │   │   ├── loadModule.test.js
        │   │   │   ├── loadProcess.js
        │   │   │   ├── loadProcess.test.js
        │   │   │   ├── loadProcessMeta.js
        │   │   │   └── loadProcessMeta.test.js
        │   │   ├── logger.js
        │   │   ├── model.js
        │   │   ├── utils.js
        │   │   └── utils.test.js
        │   ├── effects
        │   │   ├── ao-block.js
        │   │   ├── ao-block.test.js
        │   │   ├── ao-evaluation.js
        │   │   ├── ao-evaluation.test.js
        │   │   ├── ao-module.js
        │   │   ├── ao-module.test.js
        │   │   ├── ao-process.js
        │   │   ├── ao-process.test.js
        │   │   ├── ao-su.js
        │   │   ├── ao-su.test.js
        │   │   ├── arweave.js
        │   │   ├── arweave.test.js
        │   │   ├── db.js
        │   │   ├── metrics.js
        │   │   ├── pg.js
        │   │   ├── sqlite.js
        │   │   ├── wasm.js
        │   │   ├── wasm.test.js
        │   │   └── worker
        │   │   │   ├── evaluate.js
        │   │   │   ├── evaluate.test.js
        │   │   │   ├── evaluator
        │   │   │       ├── index.js
        │   │   │       └── main.js
        │   │   │   └── hashChain
        │   │   │       ├── index.js
        │   │   │       └── main.js
        │   ├── logger.js
        │   └── routes
        │   │   ├── cron.js
        │   │   ├── dryRun.js
        │   │   ├── healthcheck.js
        │   │   ├── index.js
        │   │   ├── metrics.js
        │   │   ├── middleware
        │   │       ├── index.js
        │   │       ├── withCuMode.js
        │   │       ├── withDomain.js
        │   │       ├── withErrorHandler.js
        │   │       ├── withInMemoryCache.js
        │   │       ├── withMetrics.js
        │   │       └── withProcessRestriction.js
        │   │   ├── result.js
        │   │   ├── results.js
        │   │   └── state.js
        ├── static
        │   └── .gitkeep
        └── test
        │   └── processes
        │       ├── .gitignore
        │       ├── happy
        │           ├── process.lua
        │           └── process.wasm
        │       └── sad
        │           ├── process.lua
        │           └── process.wasm
    ├── mu
        ├── .dockerignore
        ├── .env.example
        ├── .gitignore
        ├── .postgres
        │   ├── Dockerfile
        │   └── postgres.conf
        ├── Dockerfile
        ├── README.md
        ├── deploy.js
        ├── entrypoint.sh
        ├── nodemon.json
        ├── package-lock.json
        ├── package.json
        └── src
        │   ├── app.js
        │   ├── config.js
        │   ├── domain
        │       ├── api
        │       │   ├── monitorProcess.js
        │       │   ├── processAssign.js
        │       │   ├── processAssign.test.js
        │       │   ├── processMsg.js
        │       │   ├── processSpawn.js
        │       │   ├── processSpawn.test.js
        │       │   ├── pushMsg.js
        │       │   ├── pushMsg.test.js
        │       │   ├── sendAssign.js
        │       │   ├── sendDataItem.js
        │       │   ├── sendDataItem.test.js
        │       │   └── stopMonitorProcess.js
        │       ├── clients
        │       │   ├── cron.js
        │       │   ├── cron.test.js
        │       │   ├── cu.js
        │       │   ├── gateway.js
        │       │   ├── in-memory.js
        │       │   ├── metrics.js
        │       │   ├── relay.js
        │       │   ├── relay.test.js
        │       │   ├── scheduler.js
        │       │   ├── signer.js
        │       │   ├── sqlite.js
        │       │   ├── taskQueue.js
        │       │   ├── tracer.js
        │       │   ├── uploader.js
        │       │   ├── worker-fn.js
        │       │   ├── worker-fn.test.js
        │       │   └── worker.js
        │       ├── dal.js
        │       ├── index.js
        │       ├── lib
        │       │   ├── build-success-tx.js
        │       │   ├── build-success-tx.test.js
        │       │   ├── build-tx.js
        │       │   ├── build-tx.test.js
        │       │   ├── cu-fetch-with-cache.js
        │       │   ├── cu-fetch-with-cache.test.js
        │       │   ├── get-cu-address.js
        │       │   ├── get-cu-address.test.js
        │       │   ├── get-custom-cu-address.js
        │       │   ├── handle-worker-metrics-message.js
        │       │   ├── handle-worker-metrics-message.test.js
        │       │   ├── parse-data-item.js
        │       │   ├── parse-data-item.test.js
        │       │   ├── pull-result.js
        │       │   ├── pull-result.test.js
        │       │   ├── resolve-scheduler.js
        │       │   ├── resolve-scheduler.test.js
        │       │   ├── send-spawn-success.js
        │       │   ├── send-spawn-success.test.js
        │       │   ├── spawn-process.js
        │       │   ├── spawn-process.test.js
        │       │   ├── start-process.js
        │       │   ├── start-process.test.js
        │       │   ├── stop-process.js
        │       │   ├── verify-parsed-data-item.js
        │       │   ├── verify-parsed-data-item.test.js
        │       │   ├── with-timer-metrics-fetch.js
        │       │   ├── with-timer-metrics-fetch.test.js
        │       │   ├── with-timer-metrics.js
        │       │   ├── with-timer-metrics.test.js
        │       │   ├── write-assign.js
        │       │   ├── write-assign.test.js
        │       │   ├── write-message-tx.js
        │       │   ├── write-message-tx.test.js
        │       │   ├── write-process-tx.js
        │       │   └── write-process-tx.test.js
        │       ├── logger.js
        │       ├── model.js
        │       ├── utils.js
        │       └── utils.test.js
        │   ├── logger.js
        │   └── routes
        │       ├── index.js
        │       ├── metrics.js
        │       ├── middleware
        │           ├── index.js
        │           ├── withDomain.js
        │           ├── withErrorHandler.js
        │           └── withMetrics.js
        │       ├── monitor.js
        │       ├── push.js
        │       └── root.js
    ├── su
        ├── .env.example
        ├── .gitignore
        ├── Cargo.lock
        ├── Cargo.toml
        ├── Dockerfile
        ├── Dockerfile.arm64
        ├── Dockerfile.x86
        ├── DockerfileCli
        ├── README.md
        ├── cli
        ├── diesel.toml
        ├── migrations
        │   ├── .keep
        │   ├── 00000000000000_diesel_initial_setup
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2023-12-13-213153_create_initial_tables
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2024-03-27-163751_modify_messages
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2024-05-29-143054_messages_indexing
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2024-08-05-190651_modify_schedulers
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2024-09-04-145702_process_assignment
        │   │   ├── down.sql
        │   │   └── up.sql
        │   ├── 2024-11-26-200327_wallet_routing
        │   │   ├── down.sql
        │   │   └── up.sql
        │   └── 2025-03-18-144400_nonce_index
        │   │   ├── down.sql
        │   │   └── up.sql
        ├── output.txt
        ├── src
        │   ├── bin
        │   │   └── cli.rs
        │   ├── domain
        │   │   ├── clients
        │   │   │   ├── gateway.rs
        │   │   │   ├── local_store
        │   │   │   │   ├── migration.rs
        │   │   │   │   ├── mod.rs
        │   │   │   │   ├── store.rs
        │   │   │   │   ├── sync_local.rs
        │   │   │   │   └── tests.rs
        │   │   │   ├── metrics.rs
        │   │   │   ├── mod.rs
        │   │   │   ├── schema.rs
        │   │   │   ├── signer.rs
        │   │   │   ├── store.rs
        │   │   │   ├── su_router.rs
        │   │   │   ├── uploader.rs
        │   │   │   └── wallet.rs
        │   │   ├── config.rs
        │   │   ├── core
        │   │   │   ├── builder.rs
        │   │   │   ├── bytes.rs
        │   │   │   ├── dal.rs
        │   │   │   ├── flows.rs
        │   │   │   ├── json.rs
        │   │   │   ├── mod.rs
        │   │   │   ├── router.rs
        │   │   │   ├── scheduler.rs
        │   │   │   └── tags.rs
        │   │   ├── logger.rs
        │   │   └── mod.rs
        │   ├── lib.rs
        │   ├── main.rs
        │   └── schema.rs
        └── su
    └── ur
        ├── .env.example
        ├── .gitignore
        ├── .nvmrc
        ├── .versionrc
        ├── Dockerfile
        ├── README.md
        ├── deploy.js
        ├── nodemon.json
        ├── package-lock.json
        ├── package.json
        └── src
            ├── app.js
            ├── config.js
            ├── domain.js
            ├── domain.test.js
            ├── logger.js
            ├── proxy.js
            ├── redirect.js
            └── routes
                ├── byAoUnit.js
                ├── cu.js
                └── mu.js


/.devcontainer/.env.example:
--------------------------------------------------------------------------------
 1 | # Install
 2 | INSTALL_LUA=false
 3 | INSTALL_PYTHON=true
 4 | INSTALL_EMSDK=false
 5 | INSTALL_RUST=false
 6 | INSTALL_NODE=true
 7 | INSTALL_DENO=true
 8 | 
 9 | # Versions
10 | LUA_VERSION=5.3.4
11 | LUAROCKS_VERSION=2.4.4
12 | EMSCRIPTEN_VERSION=3.1.59
13 | RUST_VERSION=1.79.0
14 | NODE_VERSION=22.4.1
15 | PYTHON_VERSION=3.9.19
16 | PYTHON_PIP_VERSION=23.0.1


--------------------------------------------------------------------------------
/.devcontainer/devcontainer.json:
--------------------------------------------------------------------------------
 1 | {
 2 | 	"name": "AO Container",
 3 | 	"dockerComposeFile": "docker-compose.yaml",
 4 | 	"service": "development",
 5 | 	"workspaceFolder": "/workspace",
 6 | 	"customizations": {
 7 | 		"vscode": {
 8 | 			"extensions": [
 9 | 				// Spell Checker
10 | 				"streetsidesoftware.code-spell-checker",
11 | 				// VS Code Icons
12 | 				"vscode-icons-team.vscode-icons",
13 | 				// Rust
14 | 				"vadimcn.vscode-lldb",
15 | 				"rust-lang.rust-analyzer",
16 | 				"tamasfe.even-better-toml",
17 | 				"serayuzgur.crates",
18 | 				// Node
19 | 				"dbaeumer.vscode-eslint",
20 | 				// Python
21 | 				"ms-python.python",
22 | 				"ms-python.vscode-pylance",
23 | 				"ms-python.autopep8",
24 | 				// C/C++
25 | 				"ms-vscode.cpptools",
26 | 				"ms-vscode.cmake-tools"
27 | 			],
28 | 			"settings": {
29 | 				"workbench.iconTheme": "vscode-icons",
30 | 				"python.defaultInterpreterPath": "/usr/local/python/current/bin/python",
31 | 				"[python]": {
32 | 					"editor.defaultFormatter": "ms-python.autopep8"
33 | 				},
34 | 				"files.watcherExclude": {
35 | 					"**/target/**": true
36 | 				}
37 | 			}
38 | 		}
39 | 	},
40 | 	"capAdd": [
41 | 		"SYS_PTRACE"
42 | 	],
43 | 	"securityOpt": [
44 | 		"seccomp=unconfined"
45 | 	],
46 | 	"forwardPorts": [
47 | 		9000, // SU
48 | 		5432, // Postgres
49 | 		6363, // CU
50 | 		3004 // MU
51 | 	],
52 | 	"shutdownAction": "none",
53 | 	"remoteUser": "root"
54 | }


--------------------------------------------------------------------------------
/.devcontainer/generateALL.sh:
--------------------------------------------------------------------------------
1 | 
2 | cd $(dirname $0)
3 | 
4 | ./generateWallet.sh ./services/su
5 | ./generateWallet.sh ./services/cu
6 | ./generateWallet.sh ./services/mu


--------------------------------------------------------------------------------
/.devcontainer/generateWallet.sh:
--------------------------------------------------------------------------------
 1 | cd $(dirname $0)
 2 | 
 3 | WALLET_FILE=$1/wallet.json
 4 | 
 5 | if [ -f "$WALLET_FILE" ]; then
 6 |   echo "$WALLET_FILE already exists. Refusing to overwrite it."
 7 |   exit 1
 8 | fi
 9 | 
10 | npx --yes @permaweb/wallet > "$WALLET_FILE"
11 | 
12 | echo "$WALLET_FILE created."


--------------------------------------------------------------------------------
/.devcontainer/scripts/build-container:
--------------------------------------------------------------------------------
 1 | #!/bin/sh
 2 | 
 3 | # Move to the dev-cli container src
 4 | DIR=$PWD
 5 | CONTAINER_DIR=/workspace/dev-cli/container/src
 6 | cd $CONTAINER_DIR
 7 | 
 8 | # Clean
 9 | rm -rf /usr/local/ao-module
10 | rm -rf /opt
11 | rm -rf /src
12 | mkdir -p /opt/src
13 | 
14 | # Copy emcc-lua to bin (Makes it executable via PATH)
15 | cp ./ao-build-module /usr/local/bin/ao-build-module
16 | mkdir -p /usr/local/ao-module
17 | cp -R ./ao_module_lib /usr/local/ao-module/ao_module_lib/
18 | 
19 | # Copy Container Src
20 | cp -R ./core/. /opt/
21 | 
22 | cp ./json.lua /opt/src/json.lua
23 | cp ./ao.lua /opt/src/ao.lua
24 | 
25 | # Copy Rustlib, Node, and Aolibc to /opt
26 | cp -R ./rustlib /opt/rustlib
27 | cp -R ./node /opt/node
28 | cp -R ./aolibc /opt/aolibc
29 | 
30 | # BUILD WeaveDrive Extension Helper
31 | cd /opt/aolibc
32 | make CC="emcc -s WASM=1 -s MEMORY64=1 -s SUPPORT_LONGJMP=1"
33 | 
34 | # BUILD Node
35 | cd /opt/node
36 | npm install --omit="dev"
37 | npm link
38 | 
39 | # Add execute permissions to emcc-lua
40 | chmod +x /usr/local/bin/ao-build-module
41 | 
42 | # Copy Current Directory TO /src
43 | cp -rf "$DIR" /src
44 | 
45 | 
46 | 
47 | 


--------------------------------------------------------------------------------
/.devcontainer/scripts/install-deno.sh:
--------------------------------------------------------------------------------
1 | if [ "$INSTALL_DENO" = "true" ]; then
2 |     curl -fsSL https://deno.land/install.sh | sh
3 | else
4 |     echo "Skipping DENO Installation..."
5 | fi
6 | 
7 | 


--------------------------------------------------------------------------------
/.devcontainer/scripts/install-emsdk.sh:
--------------------------------------------------------------------------------
 1 | if [ "$INSTALL_EMSDK" = "true" ]; then
 2 |     apt-get -y install --no-install-recommends llvm-dev libclang-dev librocksdb-dev clang
 3 |     git clone https://github.com/emscripten-core/emsdk.git /emsdk
 4 |     cd /emsdk
 5 |     git pull
 6 |     ./emsdk install ${EMSCRIPTEN_VERSION}
 7 |     ./emsdk activate ${EMSCRIPTEN_VERSION}
 8 | else
 9 |     echo "Skipping EMSDK Installation..."
10 | fi
11 | 


--------------------------------------------------------------------------------
/.devcontainer/scripts/install-lua.sh:
--------------------------------------------------------------------------------
 1 | if [ "$INSTALL_LUA" = "true" ]; then
 2 |     # Install lua runtime
 3 |     cd / 
 4 |     curl -L http://www.lua.org/ftp/lua-${LUA_VERSION}.tar.gz | tar xzf - 
 5 |     cd /lua-${LUA_VERSION} 
 6 |     make linux test 
 7 |     make install
 8 | 
 9 |     # Install luarocks
10 |     cd /
11 |     curl -L https://luarocks.org/releases/luarocks-${LUAROCKS_VERSION}.tar.gz | tar xzf - 
12 |     cd /luarocks-${LUAROCKS_VERSION}
13 |     ./configure
14 |     make build
15 |     make install
16 | 
17 |     # And, re-compile lua with "generic WASM"
18 |     cd /lua-${LUA_VERSION}
19 |     make clean 
20 |     make generic CC='emcc -s WASM=1 -s MEMORY64=1 -s SUPPORT_LONGJMP=1' 
21 | else
22 |     echo "Skipping LUA Installation..."
23 | fi
24 | 
25 | 
26 | 


--------------------------------------------------------------------------------
/.devcontainer/scripts/install-node.sh:
--------------------------------------------------------------------------------
 1 | if [ "$INSTALL_NODE" = "true" ]; then
 2 |     mkdir -p $NVM_DIR
 3 |     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
 4 |     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
 5 |     [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
 6 |     nvm install $NODE_VERSION
 7 | else
 8 |     echo "Skipping Node Installation..."
 9 | fi
10 | 


--------------------------------------------------------------------------------
/.devcontainer/services/cu/.env.cu:
--------------------------------------------------------------------------------
1 | NODE_CONFIG_ENV="development"
2 | NODE_HEAPDUMP_OPTIONS="nosignal"
3 | DEBUG=*
4 | 
5 | WALLET_FILE="wallet.json"


--------------------------------------------------------------------------------
/.devcontainer/services/cu/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:alpine as downloader
 2 | ARG BRANCH
 3 | ARG REPO
 4 | 
 5 | # RUN apk --no-cache --update upgrade && apk --no-cache add ca-certificates
 6 | 
 7 | RUN apk add git
 8 | 
 9 | WORKDIR /download
10 | RUN git clone --branch=${BRANCH} --depth=1 ${REPO}
11 | 
12 | 
13 | FROM node:alpine
14 | 
15 | WORKDIR /usr/src/cu
16 | 
17 | COPY --from=downloader /download/ao/servers/cu .
18 | 
19 | RUN npm install --ignore-engines --omit=dev
20 | 
21 | EXPOSE 6363
22 | ENTRYPOINT  ["npm", "start"]
23 | 


--------------------------------------------------------------------------------
/.devcontainer/services/mu/.env.mu:
--------------------------------------------------------------------------------
1 | PORT=3004
2 | CU_URL="http:/localhost:6363"
3 | GRAPHQL_URL="https://arweave.net/graphql"
4 | NODE_CONFIG_ENV="development"
5 | DEBUG=*
6 | PATH_TO_WALLET="wallet.json"


--------------------------------------------------------------------------------
/.devcontainer/services/mu/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:alpine as downloader
 2 | ARG BRANCH
 3 | ARG REPO
 4 | 
 5 | # RUN apk --no-cache --update upgrade && apk --no-cache add ca-certificates
 6 | RUN apk add git
 7 | 
 8 | WORKDIR /download
 9 | RUN git clone --branch=${BRANCH} --depth=1 ${REPO}
10 | 
11 | 
12 | FROM node:alpine
13 | 
14 | WORKDIR /usr/src/mu
15 | 
16 | COPY --from=downloader /download/ao/servers/mu .
17 | 
18 | RUN sed -i '/postinstall/d' package.json
19 | 
20 | RUN npm install --ignore-engines --omit=dev
21 | 
22 | EXPOSE 3004
23 | ENTRYPOINT  ["npm", "start"]
24 | 


--------------------------------------------------------------------------------
/.devcontainer/services/su/.env.su:
--------------------------------------------------------------------------------
 1 | SU_WALLET_PATH=./wallet.json
 2 | DATABASE_URL=postgresql://postgres:postgres@localhost/su
 3 | GATEWAY_URL=https://goldsky.arweave.net
 4 | UPLOAD_NODE_URL=https://up.arweave.net
 5 | MODE=su
 6 | PORT=9000
 7 | SCHEDULER_LIST_PATH=""
 8 | SU_DATA_DIR=""
 9 | # USE_DISK=false
10 | # MIGRATION_BATCH_SIZE=10
11 | # DB_WRITE_CONNECTIONS=1
12 | # DB_READ_CONNECTIONS=8


--------------------------------------------------------------------------------
/.devcontainer/services/su/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:alpine as downloader
 2 | ARG BRANCH
 3 | ARG REPO
 4 | 
 5 | # RUN apk --no-cache --update upgrade && apk --no-cache add ca-certificates
 6 | RUN apk add git
 7 | 
 8 | WORKDIR /download
 9 | RUN git clone --branch=${BRANCH} --depth=1 ${REPO}
10 | 
11 | WORKDIR /usr/src/su
12 | COPY ./deploy-scheduler ./
13 | COPY wallet.json .
14 | WORKDIR /usr/src/su/deploy-scheduler
15 | RUN npm i && npm run deploy
16 | 
17 | 
18 | # Stage 1: Build the dynamic binary
19 | FROM rust:1.75.0 as builder
20 | 
21 | # # Set the working directory in the container
22 | WORKDIR /usr/src/su
23 | 
24 | # Install required dependencies for building
25 | RUN apt-get update && apt-get install -y \
26 |     llvm-dev \
27 |     libclang-dev \
28 |     clang \
29 |     librocksdb-dev \
30 |     libpq5
31 | 
32 | # Copy the manifests
33 | COPY --from=downloader /download/ao/servers/su/Cargo.toml /download/ao/servers/su/Cargo.lock .
34 | 
35 | # This step is to cache your dependencies
36 | RUN mkdir src && \
37 |     echo "fn main() {}" > src/main.rs && \
38 |     cargo build --release && \
39 |     rm -f target/release/deps/su*
40 | 
41 | # Now copy the actual source code and build the application
42 | COPY --from=downloader /download/ao/servers/su/src ./src
43 | COPY --from=downloader /download/ao/servers/su/migrations ./migrations
44 | 
45 | RUN cargo build --release
46 | 
47 | EXPOSE 9000
48 | ENTRYPOINT  ["./target/release/su", "su", "9000"]
49 | 


--------------------------------------------------------------------------------
/.devcontainer/services/su/deploy-scheduler/index.js:
--------------------------------------------------------------------------------
 1 | import Irys from "@irys/sdk";
 2 | import fs from "fs";
 3 | 
 4 | const url = "https://node1.irys.xyz";
 5 | const token = "arweave";
 6 | // load the JWK wallet key file from disk
 7 | console.log(process.cwd());
 8 | let key = JSON.parse(
 9 |   fs
10 |     .readFileSync(
11 |       "./wallet.json"
12 |     )
13 |     .toString()
14 | );
15 | 
16 | const irys = new Irys({
17 |   url, // URL of the node you want to connect to
18 |   token, // Token used for payment and signing
19 |   key, // Arweave wallet
20 | });
21 | 
22 | // Create the transaction
23 | const tx = irys.createTransaction("1984", {
24 |   tags: [
25 |     {name: "Content-Type", value: "text/plain"},
26 |     {name: "Type", value: "Scheduler-Location"},
27 |     {name: "Time-To-Live", value: "3600000"},
28 |     {name: "Url", value: "http://127.0.0.1:9000"},
29 |     {name: "Data-Protocol", value: "ao"},
30 |     {name: "Variant", value: "ao.TN.1"},
31 |   ],
32 | });
33 | 
34 | // Sign the transaction
35 | await tx.sign(); // ID is now set
36 | console.log(`Tx created and signed, ID=${tx.id}`);
37 | 
38 | // Upload the transaction
39 | const receipt = await tx.upload();
40 | console.log(`Tx uploaded. https://gateway.irys.xyz/${receipt.id}`);
41 | 


--------------------------------------------------------------------------------
/.devcontainer/services/su/deploy-scheduler/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "name": "deploy-scheduler",
 3 |     "version": "1.0.0",
 4 |     "main": "index.js",
 5 |     "type": "module",
 6 |     "scripts": {
 7 |       "deploy": "node index.js"
 8 |     },
 9 |     "author": "",
10 |     "license": "ISC",
11 |     "description": "",
12 |     "dependencies": {
13 |       "@irys/sdk": "^0.2.4"
14 |     }
15 |   }
16 |   


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | .DS_Store
 2 | wallet.json
 3 | dist
 4 | .VSCodeCounter
 5 | .vscode
 6 | node_modules
 7 | foo.js
 8 | .env
 9 | ao-cache
10 | 
11 | # terraform
12 | .terraform
13 | .terragrunt-cache
14 | terraform/*.plan


--------------------------------------------------------------------------------
/.gitpod.Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM gitpod/workspace-full
 2 | 
 3 | RUN curl -fsSL https://deno.land/x/install/install.sh | sh
 4 | RUN /home/gitpod/.deno/bin/deno completions bash > /home/gitpod/.bashrc.d/90-deno && \
 5 |     echo 'export DENO_INSTALL="/home/gitpod/.deno"' >> /home/gitpod/.bashrc.d/90-deno && \
 6 |     echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> /home/gitpod/.bashrc.d/90-deno
 7 | 
 8 | RUN curl -fsSL https://install_ao.g8way.io | bash
 9 | RUN echo 'export AO_INSTALL=/home/gitpod/.ao' >> /home/gitpod/.bashrc.d/101-ao && \
10 |     echo 'export PATH="$AO_INSTALL/bin:$PATH"' >> /home/gitpod/.bashrc.d/101-ao
11 | 


--------------------------------------------------------------------------------
/.gitpod.yml:
--------------------------------------------------------------------------------
 1 | image:
 2 |   file: .gitpod.Dockerfile
 3 | 
 4 | tasks:
 5 |   - name: Init Repo Tooling
 6 |     init: nvm i && npm i
 7 |     command: nvm i
 8 | 
 9 | vscode:
10 |   extensions:
11 |     - "standard.vscode-standard"
12 |     - "rust-lang.rust-analyzer"
13 |     - "graphql.vscode-graphql"
14 |     - "svelte.svelte-vscode"
15 |     - "koihik.vscode-lua-format"
16 | 


--------------------------------------------------------------------------------
/.husky/commit-msg:
--------------------------------------------------------------------------------
1 | npx --no -- commitlint --edit "${1}"
2 | 


--------------------------------------------------------------------------------
/.husky/pre-commit:
--------------------------------------------------------------------------------
1 | npm run staged
2 | 


--------------------------------------------------------------------------------
/.npmrc:
--------------------------------------------------------------------------------
1 | registry=https://registry.npmjs.org
2 | scope=permaweb
3 | engine-strict = true
4 | 


--------------------------------------------------------------------------------
/.nvmrc:
--------------------------------------------------------------------------------
1 | 22


--------------------------------------------------------------------------------
/commitlint.config.cjs:
--------------------------------------------------------------------------------
 1 | const fs = require('node:fs');
 2 | const path = require('node:path');
 3 | 
 4 | function findDirectories(srcDir, {ignore = [] } = {}) {
 5 |   return fs.readdirSync(srcDir).filter((file) => {
 6 |     if (ignore.includes(file)) return false
 7 |     if (file.startsWith('.')) return false // ignore hidden directories
 8 |     return fs.statSync(path.join(srcDir, file)).isDirectory()
 9 |   })
10 | }
11 | 
12 | /**
13 |  * A function that given a list of allowed scopes
14 |  * will enforce CommitLint rules:
15 |  * 
16 |  * - A scope is always provided in the commit message
17 |  * - The scope is one or multiple of the allowed scopes
18 |  *
19 |  * See https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-scope for scopes
20 |  * when using conventional commits
21 |  *
22 |  * @param {string[]} scopes - an array of allowed scopes
23 |  */
24 | const RequireScopes = (scopes) => ({
25 |   'scope-empty': [2, 'never'],
26 |   'scope-enum': [2, 'always', scopes]
27 | })
28 | 
29 | module.exports = {
30 |   extends: [
31 |     '@commitlint/config-conventional'
32 |   ],
33 |   rules: {
34 |     ...RequireScopes([
35 |       'repo', // denotes repo-wide changes ie. monorepo tooling, monorepo docs etc.
36 |       ...findDirectories(path.join(__dirname, 'servers')), // server projects ie. mu,cu,su,ur
37 |       ...findDirectories(__dirname, { ignore: ['servers', 'node_modules', 'logos', 'design'] }) // all other top level projects in monorepo
38 |     ])
39 |   }
40 | }
41 | 


--------------------------------------------------------------------------------
/connect/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | dist
3 | ao-cache*
4 | 


--------------------------------------------------------------------------------
/connect/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/connect/src/client/browser/index.js:
--------------------------------------------------------------------------------
1 | export * as WalletClient from './wallet.js'
2 | 


--------------------------------------------------------------------------------
/connect/src/client/node/index.js:
--------------------------------------------------------------------------------
1 | export * as WalletClient from './wallet.js'
2 | 


--------------------------------------------------------------------------------
/connect/src/index.test.js:
--------------------------------------------------------------------------------
 1 | /* eslint-disable no-unused-vars */
 2 | import { describe, test, before, after } from 'node:test'
 3 | import * as assert from 'node:assert'
 4 | import { tmpdir } from 'node:os'
 5 | import { writeFileSync, readFileSync, unlinkSync } from 'node:fs'
 6 | import { randomBytes } from 'node:crypto'
 7 | import { join } from 'node:path'
 8 | 
 9 | import Arweave from 'arweave'
10 | 
11 | import { connect, createDataItemSigner, createSigner } from './index.js'
12 | 
13 | describe('index - node', () => {
14 |   /**
15 |    * Generate a wallet in a temporary directory prior to running the tests
16 |    */
17 |   let tmpWallet
18 |   before(async () => {
19 |     const arweave = Arweave.init()
20 | 
21 |     tmpWallet = join(tmpdir(), `${randomBytes(16).toString('hex')}.json`)
22 |     writeFileSync(
23 |       tmpWallet,
24 |       JSON.stringify(await arweave.wallets.generate())
25 |     )
26 |   })
27 | 
28 |   after(async () => {
29 |     unlinkSync(tmpWallet)
30 |   })
31 | 
32 |   describe('modes', () => {
33 |     test('should return apis in the specified mode', async () => {
34 |       const wallet = JSON.parse(readFileSync(tmpWallet).toString())
35 | 
36 |       assert.equal(
37 |         connect({ MODE: 'legacy' }).MODE,
38 |         'legacy'
39 |       )
40 | 
41 |       assert.equal(
42 |         connect({ MODE: 'mainnet', device: 'process@1.0', signer: createSigner(wallet) }).MODE,
43 |         'mainnet'
44 |       )
45 |     })
46 |   })
47 | })
48 | 


--------------------------------------------------------------------------------
/connect/src/lib/assign/index.js:
--------------------------------------------------------------------------------
 1 | import { identity } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | // eslint-disable-next-line no-unused-vars
 5 | import { errFrom } from '../utils.js'
 6 | import { sendAssignWith } from './send-assign.js'
 7 | 
 8 | /**
 9 |  * @typedef Env1
10 |  *
11 |  * @typedef AssignArgs
12 |  * @property {string} process
13 |  * @property {string} message
14 |  * @property {string[]} [exclude]
15 |  * @property {boolean} [baseLayer]
16 |  *
17 |  * @callback Assign
18 |  * @param {AssignArgs} args
19 |  * @returns {Promise<string>} the id of the data item that represents this assignment
20 |  *
21 |  * @param {Env1} - the environment
22 |  * @returns {Assign}
23 |  */
24 | export function assignWith (env) {
25 |   const sendAssign = sendAssignWith(env)
26 | 
27 |   return ({ process, message, baseLayer, exclude }) => {
28 |     return of({ process, message, baseLayer, exclude })
29 |       .chain(sendAssign)
30 |       .map((ctx) => ctx.assignmentId)
31 |       .bimap(errFrom, identity)
32 |       .toPromise()
33 |   }
34 | }
35 | 


--------------------------------------------------------------------------------
/connect/src/lib/assign/send-assign.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | import { assoc } from 'ramda'
 3 | 
 4 | import { deployAssignSchema } from '../../dal.js'
 5 | 
 6 | export function sendAssignWith (env) {
 7 |   const deployAssign = deployAssignSchema.implement(env.deployAssign)
 8 | 
 9 |   return (ctx) => {
10 |     return of(ctx)
11 |       .chain(fromPromise(({ process, message, baseLayer, exclude }) =>
12 |         deployAssign({ process, message, baseLayer, exclude })
13 |       ))
14 |       .map(res => assoc('assignmentId', res.assignmentId, ctx))
15 |   }
16 | }
17 | 


--------------------------------------------------------------------------------
/connect/src/lib/dryrun/index.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | import { verifyInputWith } from './verify-input.js'
 3 | import { runWith } from './run.js'
 4 | 
 5 | /**
 6 |  * @typedef Env
 7 |  *
 8 |  * @typedef DryRunResult
 9 |  * @property {any} Output
10 |  * @property {any[]} Messages
11 |  * @property {any[]} Spawns
12 |  * @property {any} [Error]
13 |  *
14 |  * @typedef MessageInput
15 |  * @property {string} process
16 |  * @property {any} [data]
17 |  * @property {{ name: string, value: string }[]} [tags]
18 |  * @property {string} [anchor]
19 |  * @property {string} [Id]
20 |  * @property {string} [Owner]
21 |  *
22 |  * @callback DryRun
23 |  * @param {MessageInput & Object.<string, *>} msg
24 |  * @return {Promise<DryRunResult>}
25 |  *
26 |  * @param {Env} env
27 |  * @returns {DryRun}
28 |  */
29 | 
30 | export function dryrunWith (env) {
31 |   const verifyInput = verifyInputWith(env)
32 |   const dryrun = runWith(env)
33 | 
34 |   return (msg) => of(msg)
35 |     .map(convert)
36 |     .chain(verifyInput)
37 |     .chain(dryrun)
38 |     .toPromise()
39 | }
40 | 
41 | function convert ({ process, data, tags, anchor, ...rest }) {
42 |   return {
43 |     Id: '1234',
44 |     Owner: '1234',
45 |     ...rest,
46 |     Target: process,
47 |     Data: data || '1234',
48 |     Tags: tags || [],
49 |     Anchor: anchor || '0'
50 |   }
51 | }
52 | 


--------------------------------------------------------------------------------
/connect/src/lib/dryrun/run.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise } from 'hyper-async'
 2 | import { dryrunResultSchema } from '../../dal.js'
 3 | 
 4 | /**
 5 |  * @typedef Env
 6 |  * @property {DryrunFetch} dryrunFetch
 7 |  *
 8 |  * @typedef Message
 9 |  * @property {string} Id
10 |  * @property {string} Target
11 |  * @property {string} Owner
12 |  * @property {string} [Anchor]
13 |  * @property {any} Data
14 |  * @property {Record<name,value>[]} Tags
15 |  *
16 |  * @callback Run
17 |  * @param {Message} msg
18 |  *
19 |  * @param {Env} env
20 |  * @returns {Run}
21 |  */
22 | export function runWith ({ dryrunFetch }) {
23 |   return fromPromise(dryrunResultSchema.implement(dryrunFetch))
24 | }
25 | 


--------------------------------------------------------------------------------
/connect/src/lib/dryrun/run.test.js:
--------------------------------------------------------------------------------
 1 | import { test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { runWith } from './run.js'
 5 | 
 6 | test('run should return a Result', async () => {
 7 |   const run = runWith({
 8 |     dryrunFetch: (msg) => {
 9 |       return Promise.resolve({
10 |         Output: 'Success',
11 |         Messages: [],
12 |         Spawns: []
13 |       })
14 |     }
15 |   })
16 | 
17 |   const res = await run({
18 |     Id: '1234',
19 |     Target: 'FOO_PROCESS',
20 |     Owner: 'FOO_OWNER',
21 |     Data: 'SOME DATA',
22 |     Tags: [
23 |       { name: 'Action', value: 'Balance' },
24 |       { name: 'Target', value: 'MY_WALLET' },
25 |       { name: 'Data-Protocol', value: 'ao' },
26 |       { name: 'Type', value: 'Message' },
27 |       { name: 'Variant', value: 'ao.TN.1' }
28 |     ]
29 |   }).toPromise()
30 | 
31 |   assert.deepStrictEqual(res, {
32 |     Output: 'Success',
33 |     Messages: [],
34 |     Spawns: []
35 |   })
36 | })
37 | 


--------------------------------------------------------------------------------
/connect/src/lib/dryrun/verify-input.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | import { z } from 'zod'
 3 | 
 4 | const inputSchema = z.object({
 5 |   Id: z.string(),
 6 |   Target: z.string(),
 7 |   Owner: z.string(),
 8 |   Anchor: z.string().optional(),
 9 |   Data: z.any().default('1234'),
10 |   Tags: z.array(z.object({ name: z.string(), value: z.string() }))
11 | })
12 | 
13 | /**
14 |  * @typedef Message
15 |  * @property {string} Id
16 |  * @property {string} Target
17 |  * @property {string} Owner
18 |  * @property {string} [Anchor]
19 |  * @property {any} Data
20 |  * @property {Record<name,value>[]} Tags
21 |  *
22 |  * @callback VerifyInput
23 |  * @param {Message} msg
24 |  * @returns {Message}
25 |  *
26 |  * @returns {VerifyInput}
27 |  */
28 | export function verifyInputWith () {
29 |   return (msg) => {
30 |     return of(msg)
31 |       .map(inputSchema.parse)
32 |       .map(m => {
33 |         m.Tags = m.Tags.concat([
34 |           { name: 'Data-Protocol', value: 'ao' },
35 |           { name: 'Type', value: 'Message' },
36 |           { name: 'Variant', value: 'ao.TN.1' }
37 |         ])
38 |         return m
39 |       })
40 |   }
41 | }
42 | 


--------------------------------------------------------------------------------
/connect/src/lib/dryrun/verify-input.test.js:
--------------------------------------------------------------------------------
 1 | import { test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { verifyInputWith } from './verify-input.js'
 5 | 
 6 | test('verify input of a message', async () => {
 7 |   const verifyInput = verifyInputWith()
 8 |   const res = await verifyInput({
 9 |     Id: '1234',
10 |     Target: 'FOO_PROCESS',
11 |     Owner: 'FOO_OWNER',
12 |     Data: 'SOME DATA',
13 |     Tags: [
14 |       { name: 'Action', value: 'Balance' },
15 |       { name: 'Target', value: 'MY_WALLET' }
16 |     ]
17 |   }).toPromise()
18 | 
19 |   assert.deepStrictEqual(res, {
20 |     Id: '1234',
21 |     Target: 'FOO_PROCESS',
22 |     Owner: 'FOO_OWNER',
23 |     Data: 'SOME DATA',
24 |     Tags: [
25 |       { name: 'Action', value: 'Balance' },
26 |       { name: 'Target', value: 'MY_WALLET' },
27 |       { name: 'Data-Protocol', value: 'ao' },
28 |       { name: 'Type', value: 'Message' },
29 |       { name: 'Variant', value: 'ao.TN.1' }
30 |     ]
31 |   })
32 | })
33 | 


--------------------------------------------------------------------------------
/connect/src/lib/message-id/index.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | const inputSchema = z
 4 |   .object({
 5 |     processId: z.string(),
 6 |     messageId: z.string()
 7 |   })
 8 |   .passthrough()
 9 | 
10 | // need to get the suURL
11 | 
12 | /**
13 |  * @callback MessageId
14 |  * @param {Record<string, any>} fields
15 |  * @returns {Promise<Response>} result
16 |  *
17 |  * @returns {ProcessId}
18 |  */
19 | export function messageIdWith (env) {
20 |     /**
21 |      * TODO: split into separate modules
22 |      * wrap side effect with schema from dal
23 |      */
24 |     const getMessageId = env.getMessageId
25 |     return (fields) => {
26 |         fields = inputSchema.parse(fields)
27 |         return getMessageId(fields)
28 |     }
29 | 
30 | }  


--------------------------------------------------------------------------------
/connect/src/lib/messages/index.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | const inputSchema = z
 4 |   .object({
 5 |     processId: z.string(),
 6 |     from: z.string(),
 7 |     to: z.string(),
 8 |     limit: z.string().default('1000').optional()
 9 |   })
10 |   .passthrough()
11 | 
12 | /**
13 |  * @callback Messages
14 |  * @param {Record<string, any>} fields
15 |  * @returns {Promise<Response>} result
16 |  *
17 |  * @returns {Messages}
18 |  */
19 | export function messagesWith (env) {
20 |   const messages = env.messages
21 |   return (fields) => {
22 |     fields = inputSchema.parse(fields)
23 |     return messages(fields)
24 |   }
25 | }
26 | 


--------------------------------------------------------------------------------
/connect/src/lib/monitor/index.js:
--------------------------------------------------------------------------------
 1 | import { identity } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | // eslint-disable-next-line no-unused-vars
 5 | import { Types } from '../../dal.js'
 6 | import { errFrom } from '../utils.js'
 7 | import { uploadMonitorWith } from './upload-monitor.js'
 8 | 
 9 | /**
10 |  * @typedef Env1
11 |  *
12 |  * TODO: maybe allow passing tags and anchor eventually?
13 |  * @typedef SendMonitorArgs
14 |  * @property {string} process
15 |  * @property {string} [data]
16 |  * @property {Types['signer']} [signer]
17 |  *
18 |  * @callback SendMonitor
19 |  * @param {SendMonitorArgs} args
20 |  * @returns {Promise<string>} the id of the data item that represents this message
21 |  *
22 |  * @param {Env1} - the environment
23 |  * @returns {SendMonitor}
24 |  */
25 | export function monitorWith (env) {
26 |   const uploadMonitor = uploadMonitorWith(env)
27 | 
28 |   return ({ process, signer }) => of({ id: process, signer })
29 |     .chain(uploadMonitor)
30 |     .map((ctx) => ctx.monitorId)
31 |     .bimap(errFrom, identity)
32 |     .toPromise()
33 | }
34 | 


--------------------------------------------------------------------------------
/connect/src/lib/monitor/upload-monitor.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | import { assoc } from 'ramda'
 3 | 
 4 | import { deployMonitorSchema, signerSchema } from '../../dal.js'
 5 | 
 6 | /**
 7 |  * @typedef Tag3
 8 |  * @property {string} name
 9 |  * @property {any} value
10 |  *
11 |  * @typedef Context3
12 |  * @property {string} id - the transaction id to be verified
13 |  * @property {any} input
14 |  * @property {Tag3[]} tags
15 |  *
16 |  * @typedef Env6
17 |  * @property {any} mu
18 |  */
19 | 
20 | /**
21 |  * @callback BuildTx
22 |  * @param {Context3} ctx
23 |  * @returns {Async<Context3>}
24 |  *
25 |  * @param {Env6} env
26 |  * @returns {BuildTx}
27 |  */
28 | export function uploadMonitorWith (env) {
29 |   const deployMonitor = deployMonitorSchema.implement(env.deployMonitor)
30 | 
31 |   return (ctx) => {
32 |     return of(ctx)
33 |       .chain(fromPromise(({ id, signer }) =>
34 |         deployMonitor({
35 |           processId: id,
36 |           signer: signerSchema.implement(signer || env.signer),
37 |           /**
38 |            * No tags or data can be provided right now,
39 |            *
40 |            * so just set data to single space and set tags to an empty array
41 |            */
42 |           data: ' ',
43 |           tags: []
44 |         })
45 |       ))
46 |       .map(res => assoc('monitorId', res.messageId, ctx))
47 |   }
48 | }
49 | 


--------------------------------------------------------------------------------
/connect/src/lib/monitor/upload-monitor.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { createLogger } from '../../logger.js'
 5 | import { uploadMonitorWith } from './upload-monitor.js'
 6 | 
 7 | const logger = createLogger('monitor')
 8 | 
 9 | describe('upload-monitor', () => {
10 |   test('add the tags, sign, and upload the monitor, and return the monitorId', async () => {
11 |     const uploadMonitor = uploadMonitorWith({
12 |       deployMonitor: async ({ processId, data, tags, signer }) => {
13 |         assert.ok(data)
14 |         assert.equal(processId, 'process-asdf')
15 |         assert.deepStrictEqual(tags, [])
16 |         assert.ok(signer)
17 | 
18 |         return { messageId: 'monitor-id-123' }
19 |       },
20 |       logger
21 |     })
22 | 
23 |     await uploadMonitor({
24 |       id: 'process-asdf',
25 |       signer: () => {}
26 |     }).toPromise()
27 |       .then(res => assert.equal(res.monitorId, 'monitor-id-123'))
28 |   })
29 | })
30 | 


--------------------------------------------------------------------------------
/connect/src/lib/payments/index.js:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * getOperator - gets the operator of the node
 3 |  * getNodeBalance - gets the balance of a wallet on the Node
 4 |  */
 5 | import { of, fromPromise } from 'hyper-async'
 6 | 
 7 | export function getOperator (env) {
 8 |   return () => of({ URL: env.URL, fetch: env.fetch })
 9 |     .chain(getAddress)
10 |     .toPromise()
11 | }
12 | 
13 | export function getNodeBalance (env) {
14 |   return () => of()
15 |     .chain(requestBalance(env.request))
16 |     .toPromise()
17 | }
18 | 
19 | function requestBalance (request) {
20 |   return fromPromise(() => request({
21 |     method: 'GET',
22 |     path: '/~simple-pay@1.0/balance'
23 |   })
24 |     .then(res => res.body))
25 | }
26 | 
27 | function getAddress ({ URL, fetch }) {
28 |   return fromPromise(nodeUrl => fetch(`${nodeUrl}/~meta@1.0/info/address`)
29 |     .then(res => res.text())
30 |     .catch(e => 'N/A')
31 |   )(URL)
32 | }
33 | 


--------------------------------------------------------------------------------
/connect/src/lib/process-id/index.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | const inputSchema = z
 4 |   .object({
 5 |     processId: z.string(),
 6 |     since: z.number().optional()
 7 |   })
 8 |   .passthrough()
 9 | 
10 | 
11 | /**
12 |  * @callback ProcessId
13 |  * @param {Record<string, any>} fields
14 |  * @returns {Promise<Response>} result
15 |  *
16 |  * @returns {ProcessId}
17 |  */
18 | export function processIdWith (env) {
19 |     /**
20 |      * TODO: split into separate modules
21 |      * wrap side effect with schema from dal
22 |      */
23 |     const processId = env.processId
24 |     return (fields) => {
25 |         fields = inputSchema.parse(fields)
26 |         return processId(fields)
27 |     }
28 | 
29 | }  


--------------------------------------------------------------------------------
/connect/src/lib/result/index.js:
--------------------------------------------------------------------------------
 1 | import { identity } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | import { errFrom } from '../utils.js'
 5 | import { verifyInputWith } from './verify-input.js'
 6 | import { readWith } from './read.js'
 7 | 
 8 | /**
 9 |  * @typedef MessageResult
10 |  * @property {any} Output
11 |  * @property {any[]} Messages
12 |  * @property {any[]} Spawns
13 |  * @property {any} [Error]
14 |  *
15 |  * @typedef ReadResultArgs
16 |  * @property {string} message - the transaction id of the message
17 |  * @property {string} process - the transaction id of the process that received the message
18 |  *
19 |  * @callback ReadResult
20 |  * @param {ReadResultArgs} args
21 |  * @returns {Promise<MessageResult>} result
22 |  *
23 |  * @returns {ReadResult}
24 |  */
25 | export function resultWith (env) {
26 |   const verifyInput = verifyInputWith(env)
27 |   const read = readWith(env)
28 | 
29 |   return ({ message, process }) => {
30 |     return of({ id: message, processId: process })
31 |       .chain(verifyInput)
32 |       .chain(read)
33 |       .map(
34 |         env.logger.tap(
35 |           'readResult result for message "%s": %O',
36 |           message
37 |         )
38 |       )
39 |       .map(result => result)
40 |       .bimap(errFrom, identity)
41 |       .toPromise()
42 |   }
43 | }
44 | 


--------------------------------------------------------------------------------
/connect/src/lib/result/read.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | 
 3 | import { loadResultSchema } from '../../dal.js'
 4 | 
 5 | /**
 6 |  * @typedef Env
 7 |  * @property {any} loadState
 8 |  *
 9 |  * @typedef Context
10 |  * @property {string} id - the transaction id of the process being read
11 |  *
12 |  * @callback Read
13 |  * @param {Context} ctx
14 |  * @returns {Async<Record<string, any>>}
15 |  *
16 |  * @param {Env} env
17 |  * @returns {Read}
18 |  */
19 | export function readWith ({ loadResult }) {
20 |   loadResult = fromPromise(loadResultSchema.implement(loadResult))
21 | 
22 |   return (ctx) => {
23 |     return of({ id: ctx.id, processId: ctx.processId })
24 |       .chain(loadResult)
25 |   }
26 | }
27 | 


--------------------------------------------------------------------------------
/connect/src/lib/result/verify-input.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | import { z } from 'zod'
 3 | 
 4 | const inputSchema = z.object({
 5 |   id: z.string().min(1, { message: 'message is required to be a message id' }),
 6 |   processId: z.string().min(1, { message: 'process is required to be a process id' })
 7 | })
 8 | 
 9 | /**
10 |  * @callback VerifyInput
11 |  *
12 |  * @returns {VerifyInput}
13 |  */
14 | export function verifyInputWith () {
15 |   return (ctx) => {
16 |     return of(ctx)
17 |       .map(inputSchema.parse)
18 |       .map(() => ctx)
19 |   }
20 | }
21 | 


--------------------------------------------------------------------------------
/connect/src/lib/result/verify-input.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { verifyInputWith } from './verify-input.js'
 5 | 
 6 | describe('verify-input', () => {
 7 |   test('should pass the values through', async () => {
 8 |     const verifyInput = verifyInputWith()
 9 | 
10 |     await verifyInput({
11 |       id: 'message-123',
12 |       processId: 'process-123'
13 |     }).toPromise()
14 |       .then(res => assert.deepStrictEqual(res, {
15 |         id: 'message-123',
16 |         processId: 'process-123'
17 |       }))
18 |   })
19 | 
20 |   test('should reject if the values are incorrect', async () => {
21 |     const verifyInput = verifyInputWith()
22 | 
23 |     await verifyInput({ id: 123 }).toPromise()
24 |       .then(() => assert.fail('unreachable. Should have failed'))
25 |       .catch(assert.ok)
26 | 
27 |     await verifyInput('message-123').toPromise()
28 |       .then(() => assert.fail('unreachable. Should have failed'))
29 |       .catch(assert.ok)
30 | 
31 |     await verifyInput({ id: 'message-123', process: 123 }).toPromise()
32 |       .then(() => assert.fail('unreachable. Should have failed'))
33 |       .catch(assert.ok)
34 |   })
35 | })
36 | 


--------------------------------------------------------------------------------
/connect/src/lib/results/query.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | 
 3 | import { queryResultsSchema } from '../../dal.js'
 4 | 
 5 | /**
 6 |  * @typedef Env
 7 |  * @property {any} loadState
 8 |  *
 9 |  * @typedef Context
10 |  * @property {string} id - the transaction id of the process being read
11 |  *
12 |  * @callback Query
13 |  * @param {Context} ctx
14 |  * @returns {Async<Record<string, any>>}
15 |  *
16 |  * @param {Env} env
17 |  * @returns {Query}
18 |  */
19 | export function queryWith ({ queryResults }) {
20 |   queryResults = fromPromise(queryResultsSchema.implement(queryResults))
21 | 
22 |   return (ctx) => {
23 |     return of({ process: ctx.process, from: ctx.from, to: ctx.to, sort: ctx.sort, limit: ctx.limit })
24 |       .chain(queryResults)
25 |   }
26 | }
27 | 


--------------------------------------------------------------------------------
/connect/src/lib/results/query.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { queryWith } from './query.js'
 5 | 
 6 | describe('query', () => {
 7 |   test('should return the output', async () => {
 8 |     const query = queryWith({
 9 |       queryResults: async (args) => {
10 |         assert.deepStrictEqual(args, {
11 |           process: 'process-123',
12 |           from: '1',
13 |           to: '2',
14 |           sort: 'DESC',
15 |           limit: 1
16 |         })
17 | 
18 |         return {
19 |           edges: [
20 |             {
21 |               cursor: '1',
22 |               node: {
23 |                 Output: { data: 'foobar' },
24 |                 Messages: [],
25 |                 Spawns: []
26 |               }
27 |             }
28 |           ]
29 |         }
30 |       }
31 |     })
32 | 
33 |     const res = await query({
34 |       process: 'process-123',
35 |       from: '1',
36 |       to: '2',
37 |       sort: 'DESC',
38 |       limit: 1
39 |     }).toPromise()
40 | 
41 |     assert.deepStrictEqual(res, {
42 |       edges: [
43 |         {
44 |           cursor: '1',
45 |           node: {
46 |             Output: { data: 'foobar' },
47 |             Messages: [],
48 |             Spawns: []
49 |           }
50 |         }
51 |       ]
52 |     })
53 |   })
54 | })
55 | 


--------------------------------------------------------------------------------
/connect/src/lib/results/verify-input.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | import { z } from 'zod'
 3 | 
 4 | const inputSchema = z.object({
 5 |   process: z.string().min(1, { message: 'process identifier is required' }),
 6 |   from: z.string().optional(),
 7 |   to: z.string().optional(),
 8 |   sort: z.enum(['ASC', 'DESC']).default('ASC'),
 9 |   limit: z.number().optional()
10 | })
11 | 
12 | /**
13 |  * @callback VerifyInput
14 |  *
15 |  * @returns {VerifyInput}
16 |  */
17 | export function verifyInputWith () {
18 |   return (ctx) => {
19 |     return of(ctx)
20 |       .map(inputSchema.parse)
21 |       .map(() => ctx)
22 |   }
23 | }
24 | 


--------------------------------------------------------------------------------
/connect/src/lib/results/verify-input.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { verifyInputWith } from './verify-input.js'
 5 | 
 6 | describe('verify-input', () => {
 7 |   test('should pass the values through', async () => {
 8 |     const verifyInput = verifyInputWith()
 9 | 
10 |     await verifyInput({
11 |       process: 'process-123',
12 |       from: '1',
13 |       to: '2',
14 |       limit: 1
15 |     }).toPromise()
16 |       .then(res => assert.deepStrictEqual(res, {
17 |         process: 'process-123',
18 |         from: '1',
19 |         to: '2',
20 |         limit: 1
21 |       }))
22 |   })
23 | 
24 |   test('should reject if the values are incorrect', async () => {
25 |     const verifyInput = verifyInputWith()
26 | 
27 |     await verifyInput({ process: 123 }).toPromise()
28 |       .then(() => assert.fail('unreachable. Should have failed'))
29 |       .catch(assert.ok)
30 | 
31 |     await verifyInput('message-123').toPromise()
32 |       .then(() => assert.fail('unreachable. Should have failed'))
33 |       .catch(assert.ok)
34 | 
35 |     await verifyInput({ id: 'message-123', process: 123 }).toPromise()
36 |       .then(() => assert.fail('unreachable. Should have failed'))
37 |       .catch(assert.ok)
38 |   })
39 | })
40 | 


--------------------------------------------------------------------------------
/connect/src/lib/spawn/index.js:
--------------------------------------------------------------------------------
 1 | import { identity } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | // eslint-disable-next-line no-unused-vars
 5 | import { Types } from '../../dal.js'
 6 | import { errFrom } from '../utils.js'
 7 | import { verifyInputsWith } from './verify-inputs.js'
 8 | import { uploadProcessWith } from './upload-process.js'
 9 | 
10 | /**
11 |  * @typedef Env1
12 |  *
13 |  * @typedef SpawnProcessArgs
14 |  * @property {string} module
15 |  * @property {string} scheduler
16 |  * @property {Types['signer']} [signer]
17 |  * @property {{ name: string, value: string }[]} [tags]
18 |  * @property {string | ArrayBuffer} [data]
19 |  *
20 |  * @callback SpawnProcess
21 |  * @param {SpawnProcessArgs} args
22 |  * @returns {Promise<string>} the tx id of the newly created process
23 |  *
24 |  * @param {Env1} - the environment
25 |  * @returns {SpawnProcess}
26 |  */
27 | export function spawnWith (env) {
28 |   const verifyInputs = verifyInputsWith(env)
29 |   const uploadProcess = uploadProcessWith(env)
30 | 
31 |   return ({ module, scheduler, signer, tags, data }) => {
32 |     return of({ module, scheduler, signer, tags, data })
33 |       .chain(verifyInputs)
34 |       .chain(uploadProcess)
35 |       .map((ctx) => ctx.processId)
36 |       .bimap(errFrom, identity)
37 |       .toPromise()
38 |   }
39 | }
40 | 


--------------------------------------------------------------------------------
/connect/src/lib/unmonitor/index.js:
--------------------------------------------------------------------------------
 1 | import { identity } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | // eslint-disable-next-line no-unused-vars
 5 | import { Types } from '../../dal.js'
 6 | import { errFrom } from '../utils.js'
 7 | import { uploadUnmonitorWith } from './upload-unmonitor.js'
 8 | 
 9 | /**
10 |  * @typedef Env1
11 |  *
12 |  * TODO: maybe allow passing tags and anchor eventually?
13 |  * @typedef SendMonitorArgs
14 |  * @property {string} process
15 |  * @property {string} [data]
16 |  * @property {Types['signer']} [signer]
17 |  *
18 |  * @callback SendMonitor
19 |  * @param {SendMonitorArgs} args
20 |  * @returns {Promise<string>} the id of the data item that represents this message
21 |  *
22 |  * @param {Env1} - the environment
23 |  * @returns {SendMonitor}
24 |  */
25 | export function unmonitorWith (env) {
26 |   const uploadUnmonitor = uploadUnmonitorWith(env)
27 | 
28 |   return ({ process, signer }) => of({ id: process, signer })
29 |     .chain(uploadUnmonitor)
30 |     .map((ctx) => ctx.monitorId)
31 |     .bimap(errFrom, identity)
32 |     .toPromise()
33 | }
34 | 


--------------------------------------------------------------------------------
/connect/src/lib/unmonitor/upload-unmonitor.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | import { assoc } from 'ramda'
 3 | 
 4 | import { deployMonitorSchema, signerSchema } from '../../dal.js'
 5 | 
 6 | /**
 7 |  * @typedef Tag3
 8 |  * @property {string} name
 9 |  * @property {any} value
10 |  *
11 |  * @typedef Context3
12 |  * @property {string} id - the transaction id to be verified
13 |  * @property {any} input
14 |  * @property {any} wallet
15 |  * @property {Tag3[]} tags
16 |  *
17 |  * @typedef Env6
18 |  * @property {any} mu
19 |  */
20 | 
21 | /**
22 |  * @callback BuildTx
23 |  * @param {Context3} ctx
24 |  * @returns {Async<Context3>}
25 |  *
26 |  * @param {Env6} env
27 |  * @returns {BuildTx}
28 |  */
29 | export function uploadUnmonitorWith (env) {
30 |   const deployUnmonitor = deployMonitorSchema.implement(env.deployUnmonitor)
31 | 
32 |   return (ctx) => {
33 |     return of(ctx)
34 |       .chain(fromPromise(({ id, signer }) =>
35 |         deployUnmonitor({
36 |           processId: id,
37 |           signer: signerSchema.implement(signer || env.signer),
38 |           /**
39 |            * No tags or data can be provided right now,
40 |            *
41 |            * so just set data to single space and set tags to an empty array
42 |            */
43 |           data: ' ',
44 |           tags: []
45 |         })
46 |       ))
47 |       .map(res => assoc('monitorId', res.messageId, ctx))
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/connect/src/lib/unmonitor/upload-unmonitor.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { createLogger } from '../../logger.js'
 5 | import { uploadUnmonitorWith } from './upload-unmonitor.js'
 6 | 
 7 | const logger = createLogger('monitor')
 8 | 
 9 | describe('upload-unmonitor', () => {
10 |   test('add the tags, sign, and upload the unmonitor, and return the monitorId', async () => {
11 |     const uploadUnmonitor = uploadUnmonitorWith({
12 |       deployUnmonitor: async ({ processId, data, tags, signer }) => {
13 |         assert.ok(data)
14 |         assert.equal(processId, 'process-asdf')
15 |         assert.deepStrictEqual(tags, [])
16 |         assert.ok(signer)
17 | 
18 |         return { messageId: 'monitor-id-123' }
19 |       },
20 |       logger
21 |     })
22 | 
23 |     await uploadUnmonitor({
24 |       id: 'process-asdf',
25 |       signer: () => {}
26 |     }).toPromise()
27 |       .then(res => assert.equal(res.monitorId, 'monitor-id-123'))
28 |   })
29 | })
30 | 


--------------------------------------------------------------------------------
/connect/src/logger.js:
--------------------------------------------------------------------------------
 1 | import debug from 'debug'
 2 | import { tap } from 'ramda'
 3 | 
 4 | export const createLogger = (name = '@permaweb/aoconnect') => {
 5 |   const logger = debug(name)
 6 | 
 7 |   logger.child = (name) => createLogger(`${logger.namespace}:${name}`)
 8 |   logger.tap = (note, ...rest) =>
 9 |     tap((...args) => logger(note, ...rest, ...args))
10 | 
11 |   return logger
12 | }
13 | 
14 | export const verboseLog = (...args) => {
15 |   if (process.env.DEBUG) {
16 |     console.log(...args)
17 |   }
18 | }


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/.gitignore:
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
/connect/test/e2e/browser-esm/index.html:
--------------------------------------------------------------------------------
 1 | <!doctype html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 7 |     <title>AO Browser Harness</title>
 8 |   </head>
 9 |   <body>
10 |     <div id="app"></div>
11 |     <script type="module" src="/src/app.js"></script>
12 |   </body>
13 | </html>
14 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/jsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "moduleResolution": "bundler",
 4 |     "target": "ESNext",
 5 |     "module": "ESNext",
 6 |     /**
 7 |      * svelte-preprocess cannot figure out whether you have
 8 |      * a value or a type, so tell TypeScript to enforce using
 9 |      * `import type` instead of `import` for Types.
10 |      */
11 |     "verbatimModuleSyntax": true,
12 |     "isolatedModules": true,
13 |     "resolveJsonModule": true,
14 |     /**
15 |      * To have warnings / errors of the Svelte compiler at the
16 |      * correct position, enable source maps by default.
17 |      */
18 |     "sourceMap": true,
19 |     "esModuleInterop": true,
20 |     "skipLibCheck": true,
21 |     /**
22 |      * Typecheck JS in `.svelte` and `.js` files by default.
23 |      * Disable this if you'd like to use dynamic types.
24 |      */
25 |     "checkJs": true
26 |   },
27 |   /**
28 |    * Use global.d.ts instead of compilerOptions.types
29 |    * to avoid limiting type declarations.
30 |    */
31 |   "include": ["src/**/*.d.ts", "src/**/*.js", "src/**/*.svelte"]
32 | }
33 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "browser-esm",
 3 |   "type": "module",
 4 |   "scripts": {
 5 |     "build": "vite build",
 6 |     "dev": "vite",
 7 |     "postinstall": "npm link @permaweb/aoconnect",
 8 |     "preview": "vite preview",
 9 |     "start": "CI=true vitest && echo '\nBrowser ESM Integration ✅'"
10 |   },
11 |   "dependencies": {
12 |     "@permaweb/aoconnect": "*"
13 |   },
14 |   "devDependencies": {
15 |     "@sveltejs/vite-plugin-svelte": "^3.1.1",
16 |     "@testing-library/svelte": "^5.1.0",
17 |     "jsdom": "^24.1.0",
18 |     "svelte": "^4.2.18",
19 |     "vite": "^5.3.1",
20 |     "vitest": "^1.6.0"
21 |   }
22 | }
23 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/src/App.svelte:
--------------------------------------------------------------------------------
 1 | <script>
 2 |   import { dryrun } from "@permaweb/aoconnect";
 3 | 
 4 |   export let PROCESS;
 5 |   $: dryrunResult = null;
 6 | 
 7 |   Promise.resolve()
 8 |     .then(() => console.log(`reading state for ${PROCESS}...`))
 9 |     // @ts-ignore
10 |     .then(() => dryrun({
11 |       process: PROCESS,
12 |       data: 'ao.id',
13 |       tags: [
14 |         { name: 'Action', value: 'Eval' },
15 |         { name: 'Data-Protocol', value: 'ao' },
16 |         { name: 'Variant', value: 'ao.TN.1' },
17 |         { name: 'Type', value: 'Message' },
18 |         { name: 'SDK', value: 'aoconnect' }
19 |       ],
20 |       From: 'NlSfGLmEEwRfV2ITvj7QaCcJu59QSPGZ8_rSuioAQKA',
21 |       Owner: 'NlSfGLmEEwRfV2ITvj7QaCcJu59QSPGZ8_rSuioAQKA',
22 |       Anchor: '0'
23 |     }))
24 |     .then(res => {
25 |       console.log(`dryrun for ${PROCESS}:`, res)
26 |       dryrunResult = res
27 |     })
28 |     .catch(console.error)
29 | </script>
30 |   
31 | <h1>AO Browser ESM Harness</h1>
32 | <hr />
33 | {#if dryrunResult}
34 |   <div data-testid="dryrun-result">JSON.stringify(processState)</div>
35 | {/if}
36 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/src/App.test.js:
--------------------------------------------------------------------------------
 1 | import { test, expect } from 'vitest'
 2 | import { act, waitFor, render, screen } from '@testing-library/svelte'
 3 | 
 4 | import App from './App.svelte'
 5 | 
 6 | const PROCESS = 'f6Ie4lnI-g_on29WbRSevAI8f6QTrlTXG1Xb0-TV_Sc'
 7 | 
 8 | test('integration - dryrun', async () => {
 9 |   await act(async () => render(App, { PROCESS }))
10 | 
11 |   await waitFor(() => {
12 |     console.log('waiting for dryrun result to render...')
13 |     screen.getByTestId('dryrun-result')
14 |   }, {
15 |     interval: 2000,
16 |     timeout: 30000
17 |   })
18 | 
19 |   const dryrunResultNode = screen.getByTestId('dryrun-result')
20 |   expect(dryrunResultNode).toBeTruthy()
21 | })
22 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/src/app.js:
--------------------------------------------------------------------------------
1 | import App from './App.svelte'
2 | 
3 | const app = new App({
4 |   target: document.getElementById('app')
5 | })
6 | 
7 | export default app
8 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/svelte.config.js:
--------------------------------------------------------------------------------
1 | import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
2 | 
3 | export default {
4 |   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
5 |   // for more information about preprocessors
6 |   preprocess: vitePreprocess()
7 | }
8 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/vite.config.js:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vite'
2 | import { svelte } from '@sveltejs/vite-plugin-svelte'
3 | 
4 | // https://vitejs.dev/config/
5 | export default defineConfig({
6 |   plugins: [svelte()]
7 | })
8 | 


--------------------------------------------------------------------------------
/connect/test/e2e/browser-esm/vitest.config.js:
--------------------------------------------------------------------------------
 1 | import { defineConfig } from 'vitest/config'
 2 | import { svelte } from '@sveltejs/vite-plugin-svelte'
 3 | 
 4 | export default defineConfig({
 5 |   plugins: [
 6 |     svelte({ hot: !process.env.VITEST })
 7 |   ],
 8 |   test: {
 9 |     environment: 'jsdom',
10 |     globals: true,
11 |     testTimeout: 60000
12 |   },
13 |   resolve: {
14 |     /**
15 |      * Need this since we use 'npm link' to link
16 |      * the locally built sdk to this harnesses dependencies
17 |      */
18 |     preserveSymlinks: true
19 |   }
20 | })
21 | 


--------------------------------------------------------------------------------
/connect/test/e2e/node-cjs/index.test.js:
--------------------------------------------------------------------------------
 1 | const test = require('node:test')
 2 | const assert = require('node:assert/strict')
 3 | 
 4 | /**
 5 |  * Ensure that npm link has been ran prior to running these tests
 6 |  * (simply running npm run test:integration will ensure npm link is ran)
 7 |  */
 8 | const { dryrun } = require('@permaweb/aoconnect')
 9 | 
10 | const PROCESS = 'f6Ie4lnI-g_on29WbRSevAI8f6QTrlTXG1Xb0-TV_Sc'
11 | 
12 | test('integration - dryrun', async () => {
13 |   const result = await dryrun({
14 |     process: PROCESS,
15 |     data: 'ao.id',
16 |     tags: [
17 |       { name: 'Action', value: 'Eval' },
18 |       { name: 'Data-Protocol', value: 'ao' },
19 |       { name: 'Variant', value: 'ao.TN.1' },
20 |       { name: 'Type', value: 'Message' },
21 |       { name: 'SDK', value: 'aoconnect' }
22 |     ],
23 |     From: 'NlSfGLmEEwRfV2ITvj7QaCcJu59QSPGZ8_rSuioAQKA',
24 |     Owner: 'NlSfGLmEEwRfV2ITvj7QaCcJu59QSPGZ8_rSuioAQKA',
25 |     Anchor: '0'
26 |   })
27 |   console.log(JSON.stringify(result, null, 2))
28 |   assert.ok(true)
29 | })
30 | 


--------------------------------------------------------------------------------
/connect/test/e2e/node-cjs/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "node-cjs-harness",
 3 |   "description": "A test harness used to test aoconnect running in a node CJS project",
 4 |   "type": "commonjs",
 5 |   "scripts": {
 6 |     "postinstall": "npm link @permaweb/aoconnect",
 7 |     "start": "node --enable-source-maps index.test.js && echo '\nNode CJS Integration ✅'"
 8 |   },
 9 |   "dependencies": {
10 |     "@permaweb/aoconnect": "*"
11 |   }
12 | }
13 | 


--------------------------------------------------------------------------------
/connect/test/e2e/node-esm/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "node-esm-harness",
 3 |   "description": "A test harness used to test aoconnect running in a node ESM project",
 4 |   "type": "module",
 5 |   "scripts": {
 6 |     "postinstall": "npm link @permaweb/aoconnect",
 7 |     "start": "node --enable-source-maps index.test.js && echo '\nNode ESM Integration ✅'"
 8 |   },
 9 |   "dependencies": {
10 |     "@permaweb/aoconnect": "*"
11 |   }
12 | }
13 | 


--------------------------------------------------------------------------------
/connect/test/e2e/package-lock.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/aoconnect-e2e",
 3 |   "lockfileVersion": 3,
 4 |   "requires": true,
 5 |   "packages": {
 6 |     "": {
 7 |       "name": "@permaweb/aoconnect-e2e"
 8 |     }
 9 |   }
10 | }
11 | 


--------------------------------------------------------------------------------
/connect/test/e2e/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/aoconnect-e2e",
 3 |   "description": "integration test suites for @permaweb/aoconnect",
 4 |   "type": "module",
 5 |   "scripts": {
 6 |     "test": "npm run test:node-cjs && npm run test:node-esm && npm run test:browser",
 7 |     
 8 |     "test:browser": "cd ./browser-esm && npm i --legacy-peer-deps && npm start",
 9 |     "test:node-cjs": "cd ./node-cjs && npm i && npm start",
10 |     "test:node-esm": "cd ./node-esm && npm i && npm start",
11 |     "test:m0": "cd ./m0 && node --test"
12 |   }
13 | }
14 | 


--------------------------------------------------------------------------------
/design/image (1).png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image (1).png


--------------------------------------------------------------------------------
/design/image (2).png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image (2).png


--------------------------------------------------------------------------------
/design/image (3).png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image (3).png


--------------------------------------------------------------------------------
/design/image (4).png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image (4).png


--------------------------------------------------------------------------------
/design/image (5).png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image (5).png


--------------------------------------------------------------------------------
/design/image.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/design/image.png


--------------------------------------------------------------------------------
/dev-cli/.gitignore:
--------------------------------------------------------------------------------
1 | dist
2 | node_modules
3 | wallet.json
4 | dist-id.txt
5 | dist-manifest.csv
6 | dist-manifest.json
7 | 


--------------------------------------------------------------------------------
/dev-cli/container/build.sh:
--------------------------------------------------------------------------------
1 | #!/bin/sh
2 | 
3 | docker build . -t p3rmaw3b/ao
4 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/__pycache__/definition.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/__pycache__/definition.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/__pycache__/file.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/__pycache__/file.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/__pycache__/helper.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/__pycache__/helper.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/file.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | 
 3 | class LuaFile():
 4 |     def __init__(self, filepath, basename=None):
 5 |         self.filepath = filepath
 6 |         if basename:
 7 |             self.basename = basename
 8 |         else:
 9 |             self.basename = os.path.basename(filepath)
10 | 
11 |         module_name = os.path.splitext(self.basename)[0].replace('/', '.')
12 |         if module_name.startswith('.src'):
13 |             module_name = module_name.replace('.src', '', 1)
14 |         self.module_name = module_name
15 | 
16 | 
17 | class ModuleFile():
18 |     def __init__(self, filepath, luaopen_name):
19 |         self.filepath = filepath
20 |         self.module_name = luaopen_name
21 |         self.basename = luaopen_name.replace('_', '.')
22 | 
23 | 
24 | class BundleFile(LuaFile):
25 |     def __init__(self, filepath):
26 |         super().__init__(filepath)
27 |         self.filepath = os.path.relpath(filepath)
28 | 
29 | 
30 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/languages/__pycache__/c.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/languages/__pycache__/c.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/languages/__pycache__/lua.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/languages/__pycache__/lua.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/languages/__pycache__/rust.cpython-39.pyc:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/container/src/ao_module_lib/languages/__pycache__/rust.cpython-39.pyc


--------------------------------------------------------------------------------
/dev-cli/container/src/ao_module_lib/languages/c.py:
--------------------------------------------------------------------------------
 1 | import glob
 2 | from ao_module_lib.definition import Definition
 3 | from ao_module_lib.file import BundleFile
 4 | 
 5 | def inject_c_files(definition: Definition, c_program: str, c_source_files: list, link_libraries: list):
 6 | 
 7 |     c_header_files = []
 8 |     
 9 |     c_source_files += glob.glob('/src/**/*.c', recursive=True)
10 |     c_source_files += glob.glob('/src/**/*.cpp', recursive=True)
11 |     c_header_files += glob.glob('/src/**/*.h', recursive=True)    
12 |     c_header_files += glob.glob('/src/**/*.hpp', recursive=True)
13 |     
14 | 
15 |     c_program = 'const char *process_handle(const char *arg_0, const char *arg_1);\n' + c_program
16 |     c_program = c_program.replace('__FUNCTION_DECLARATIONS__', definition.make_c_function_delarations())
17 | 
18 |     c_program = c_program.replace('__LUA_BASE__', "")
19 |     c_program = c_program.replace('__LUA_MAIN__', "")
20 |     return c_program
21 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/core/definition.yml:
--------------------------------------------------------------------------------
 1 | functions:
 2 |   handle:
 3 |     return: string
 4 |     args:
 5 |       - string
 6 |       - string
 7 | 
 8 | entry_file: loader.lua
 9 | output_file: process.js
10 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/core/loader.lua:
--------------------------------------------------------------------------------
 1 | local json = require "json"
 2 | 
 3 | function handle(msgJSON, aoJSON)
 4 |     -- by requiring '.process' here we are able to reload via .updates
 5 |     local process = require ".process"
 6 |     -- decode inputs
 7 |     local msg = json.decode(msgJSON)
 8 |     local env = json.decode(aoJSON)
 9 | 
10 |     -- handle process
11 |     local status, response = pcall(function()
12 |         return (process.handle(msg, env))
13 |     end)
14 | 
15 |     -- encode output
16 |     local responseJSON = json.encode({ok = status, response = response})
17 |     -- free 
18 |     response = nil
19 |     collectgarbage()
20 |     return responseJSON
21 | end
22 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/core/pre.js:
--------------------------------------------------------------------------------
 1 | /* eslint-disable */
 2 | 
 3 | Module.locateFile = (url) => {
 4 |   //console.log('file', url)
 5 |   return url
 6 | }
 7 | 
 8 | // Module.getBinaryPromise = (f) => {
 9 | //   conosle.log(f)
10 | //   console.log('hyperbeam', Module['hyperbeam'])
11 | //   return Promise.resolve('foo')
12 | // }
13 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/node/apply-metering.cjs:
--------------------------------------------------------------------------------
1 | // this step will need to be invoked after the wasm file is compiled and it will load it and add
2 | // the metering functions to the wasm and replace it.
3 | const fs = require('fs')
4 | const metering = require('@permaweb/wasm-metering')
5 | const wasm = fs.readFileSync('/src/process.wasm')
6 | fs.writeFileSync('/src/process.wasm', metering.meterWASM(wasm))
7 | 


--------------------------------------------------------------------------------
/dev-cli/container/src/node/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao-cli-node",
 3 |   "version": "0.0.1",
 4 |   "description": "node impls for the CLI",
 5 |   "sideEffects": false,
 6 |   "type": "module",
 7 |   "main": "src/main.js",
 8 |   "bin": {
 9 |     "ao-bundler-balance": "src/bin/bundler-balance.js",
10 |     "ao-bundler-fund": "src/bin/bundler-fund.js",
11 |     "ao-module": "src/bin/ao-module.js",
12 |     "ao-spawn": "src/bin/ao-spawn.js"
13 |   },
14 |   "scripts": {
15 |     "test": "node --test"
16 |   },
17 |   "dependencies": {
18 |     "@permaweb/aoconnect": "0.0.59",
19 |     "@permaweb/wasm-metering": "^0.2.2",
20 |     "arweave": "^1.15.1",
21 |     "mime-types": "^2.1.35",
22 |     "url-join": "^5.0.0",
23 |     "warp-arbundles": "^1.0.4"
24 |   },
25 |   "engines": {
26 |     "node": ">=18"
27 |   }
28 | }


--------------------------------------------------------------------------------
/dev-cli/container/src/node/src/defaults.js:
--------------------------------------------------------------------------------
 1 | export const DEFAULT_MODULE_FORMAT_TAG = { name: 'Module-Format', value: 'wasm64-unknown-emscripten-draft_2024_02_15' }
 2 | export const DEFAULT_INPUT_ENCODING_TAG = { name: 'Input-Encoding', value: 'JSON-1' }
 3 | export const DEFAULT_OUTPUT_ENCODING_TAG = { name: 'Output-Encoding', value: 'JSON-1' }
 4 | export const DEFAULT_VARIANT_TAG = { name: 'Variant', value: 'ao.TN.1' }
 5 | 
 6 | export const DEFAULT_BUNDLER_HOST = 'https://up.arweave.net'
 7 | 
 8 | export const AoModuleTags = [
 9 |   { name: 'Data-Protocol', value: 'ao' },
10 |   { name: 'Type', value: 'Module' },
11 |   DEFAULT_MODULE_FORMAT_TAG,
12 |   DEFAULT_INPUT_ENCODING_TAG,
13 |   DEFAULT_OUTPUT_ENCODING_TAG,
14 |   DEFAULT_VARIANT_TAG,
15 |   { name: 'Content-Type', value: 'application/wasm' }
16 | ]
17 | 


--------------------------------------------------------------------------------
/dev-cli/src/commands/build.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command } from '../deps.js'
 4 | import { VERSION } from '../versions.js'
 5 | 
 6 | export async function build () {
 7 |   const pwd = Deno.cwd()
 8 |   const p = Deno.run({
 9 |     cmd: [
10 |       'docker',
11 |       'run',
12 |       '--platform',
13 |       'linux/amd64',
14 |       '-v',
15 |       `${pwd}:/src`,
16 |       `p3rmaw3b/ao:${VERSION.IMAGE}`,
17 |       'ao-build-module'
18 |     ]
19 |   })
20 |   await p.status()
21 | }
22 | 
23 | export const command = new Command()
24 |   .description('Build the Lua Project into WASM')
25 |   .action(build)
26 | 


--------------------------------------------------------------------------------
/dev-cli/src/commands/exec.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command } from '../deps.js'
 4 | import { VERSION } from '../versions.js'
 5 | 
 6 | export async function exec (_, command) {
 7 |   const pwd = Deno.cwd()
 8 |   const p = Deno.run({
 9 |     cmd: [
10 |       'docker',
11 |       'run',
12 |       '--platform',
13 |       'linux/amd64',
14 |       '-v',
15 |       `${pwd}:/src`,
16 |       `p3rmaw3b/ao:${VERSION.IMAGE}`,
17 |       command
18 |     ]
19 |   })
20 |   await p.status()
21 | }
22 | 
23 | export const command = new Command()
24 |   .description('Exec command in the container ( ie: exec emcmake cmake . )')
25 |   .arguments('<command:string>')
26 |   .action(exec)
27 | 


--------------------------------------------------------------------------------
/dev-cli/src/commands/init.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command, resolve, copy } from '../deps.js'
 4 | 
 5 | const STARTERS = resolve(Deno.env.get('AO_INSTALL') + '/starters')
 6 | const C = resolve(STARTERS + '/c')
 7 | const LUA = resolve(STARTERS + '/lua')
 8 | 
 9 | export async function init ({ lang = 'lua' }, name) {
10 |   // const config = {
11 |   //   name,
12 |   //   entry: 'src/main.lua',
13 |   //   output: `${name}.lua`
14 |   // }
15 |   Deno.mkdir(`./${name}`, { recursive: true })
16 |   const dir = (lang === 'c') ? C : LUA
17 |   return await copy(dir, `./${name}`, { overwrite: true })
18 | }
19 | 
20 | export const command = new Command()
21 |   .description('Create an ao Process Source Project')
22 |   .usage('-l cpp <my-project-name>')
23 |   .option(
24 |     '-l, --lang <language:string>',
25 |     'The starter to use. Defaults to Lua. Options are "lua" and "cpp"'
26 |   )
27 |   .arguments('<name:string>')
28 |   .action(init)
29 | 


--------------------------------------------------------------------------------
/dev-cli/src/commands/lua.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command } from '../deps.js'
 4 | import { VERSION } from '../versions.js'
 5 | 
 6 | export async function lua () {
 7 |   const pwd = Deno.cwd()
 8 |   const p = Deno.run({
 9 |     cmd: [
10 |       'docker',
11 |       'run',
12 |       '--platform',
13 |       'linux/amd64',
14 |       '-v',
15 |       `${pwd}:/src`,
16 |       '-it',
17 |       `p3rmaw3b/ao:${VERSION.IMAGE}`,
18 |       'lua'
19 |     ]
20 |   })
21 |   await p.status()
22 | }
23 | 
24 | export const command = new Command()
25 |   .description('Start a Lua Repl')
26 |   .action(lua)
27 | 


--------------------------------------------------------------------------------
/dev-cli/src/commands/run.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command } from '../deps.js'
 4 | import { VERSION } from '../versions.js'
 5 | 
 6 | export async function run (_, f) {
 7 |   const pwd = Deno.cwd()
 8 |   const p = Deno.run({
 9 |     cmd: [
10 |       'docker',
11 |       'run',
12 |       '--platform',
13 |       'linux/amd64',
14 |       '-v',
15 |       `${pwd}:/src`,
16 |       '-a',
17 |       'stdout',
18 |       '-a',
19 |       'stderr',
20 |       `p3rmaw3b/ao:${VERSION.IMAGE}`,
21 |       'lua',
22 |       f
23 |     ]
24 |   })
25 |   await p.status()
26 | }
27 | 
28 | export const command = new Command()
29 |   .description('Run a Lua File')
30 |   .arguments('<file:string>')
31 |   .action(run)
32 | 


--------------------------------------------------------------------------------
/dev-cli/src/deps.js:
--------------------------------------------------------------------------------
1 | export { Command } from 'https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts'
2 | export { basename, resolve } from 'https://deno.land/std@0.224.0/path/mod.ts'
3 | export { copy } from 'https://deno.land/std@0.224.0/fs/copy.ts'
4 | export { parse } from 'jsr:@std/yaml'
5 | 


--------------------------------------------------------------------------------
/dev-cli/src/icons/100.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/100.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/102.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/102.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/1024.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/1024.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/114.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/114.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/120.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/120.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/128.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/128.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/144.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/144.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/152.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/152.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/16.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/16.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/167.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/167.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/172.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/172.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/180.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/180.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/196.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/196.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/20.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/20.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/216.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/216.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/256.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/256.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/29.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/29.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/32.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/32.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/40.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/40.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/48.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/48.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/50.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/50.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/512.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/55.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/55.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/57.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/57.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/58.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/58.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/60.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/60.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/64.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/64.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/66.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/66.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/72.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/72.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/76.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/76.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/80.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/80.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/87.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/87.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/88.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/88.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/92.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/92.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/android/mipmap-hdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/android/mipmap-hdpi/ic_launcher.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/android/mipmap-mdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/android/mipmap-mdpi/ic_launcher.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/android/mipmap-xhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/android/mipmap-xhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/android/mipmap-xxhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/android/mipmap-xxhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/android/mipmap-xxxhdpi/ic_launcher.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/android/mipmap-xxxhdpi/ic_launcher.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/appstore.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/appstore.png


--------------------------------------------------------------------------------
/dev-cli/src/icons/playstore.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/icons/playstore.png


--------------------------------------------------------------------------------
/dev-cli/src/mod.js:
--------------------------------------------------------------------------------
 1 | /* global Deno */
 2 | 
 3 | import { Command } from './deps.js'
 4 | 
 5 | import { VERSION } from './versions.js'
 6 | 
 7 | import { command as Init } from './commands/init.js'
 8 | import { command as Lua } from './commands/lua.js'
 9 | import { command as Run } from './commands/run.js'
10 | import { command as Build } from './commands/build.js'
11 | import { command as Publish } from './commands/publish.js'
12 | import { command as Spawn } from './commands/spawn.js'
13 | import { command as Bundler } from './commands/bundler.js'
14 | import { command as Exec } from './commands/exec.js'
15 | 
16 | const cli = new Command()
17 |   .name('ao')
18 |   .version(VERSION.CLI)
19 |   .description('The ao CLI for build, publishing, and spawning ao Modules and Processes')
20 |   .action(() => cli.showHelp())
21 |   .command('init', Init)
22 |   .command('lua', Lua)
23 |   .command('run', Run)
24 |   .command('build', Build)
25 |   .command('publish', Publish)
26 |   .command('spawn', Spawn)
27 |   .command('bundler', Bundler)
28 |   .command('exec', Exec)
29 | 
30 | await cli.parse(Deno.args)
31 | 


--------------------------------------------------------------------------------
/dev-cli/src/starters/c/libcjson/libcjson.a:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/dev-cli/src/starters/c/libcjson/libcjson.a


--------------------------------------------------------------------------------
/dev-cli/src/starters/c/process.c:
--------------------------------------------------------------------------------
 1 | 
 2 | #include "./ao.h"
 3 | #include <stdio.h>
 4 | #include <stdlib.h>
 5 | 
 6 | /* Handles the processing of a message within a specific environment.
 7 |  *
 8 |  * @param msg A string representing the message to be processed.
 9 |  * @param env A string representing the environment settings to be used for processing the message.
10 |  * @return A pointer to a string indicating the result of the message processing. This may include
11 |  *         a response message or an indication of success or failure. The caller may need to handle
12 |  *         or display this result according to the application's requirements.
13 |  */
14 | const char *process_handle(const char *msg, const char *env)
15 | {
16 |   // Initialize the process with the given environment settings
17 |   ao_init(env);
18 | 
19 |   // Normalize the incoming message
20 |   char * norm = ao_normalize(msg);
21 |   ao_log("Normalize");
22 |   printf("norm: %s\n", norm);
23 | 
24 |   // Send the normalized message
25 |   ao_log("Send");
26 |   char * send = ao_send(norm);
27 |   printf("send: %s\n", send);
28 | 
29 | 
30 |   // Free allocated memory to prevent memory leaks
31 |   free(norm);
32 |   free(send);
33 | 
34 |   // Return a static response
35 |   return "{\"ok\": true,\"response\":{\"Output\":\"Success\" },\"Memory\":50000000}";
36 | }


--------------------------------------------------------------------------------
/dev-cli/src/starters/lua/process.lua:
--------------------------------------------------------------------------------
 1 | local process = { _version = "0.0.1" }
 2 | ao = require('.ao')
 3 | 
 4 | function process.handle(msg, env) 
 5 | 
 6 |   if (msg.Data == "ping") then
 7 |     ao.send({ Target = msg.From, Data = "pong" })
 8 |   end
 9 |   
10 |   return ao.result({
11 |     Output = 'sent pong reply'
12 |   })
13 | 
14 | end
15 | 
16 | return process


--------------------------------------------------------------------------------
/dev-cli/src/utils.js:
--------------------------------------------------------------------------------
 1 | import { basename, resolve } from './deps.js'
 2 | 
 3 | export function walletArgs (wallet) {
 4 |   /**
 5 |    * Use wallet in pwd by default
 6 |    */
 7 |   wallet = wallet || 'wallet.json'
 8 |   const walletName = basename(wallet)
 9 |   const walletDest = `/src/${walletName}`
10 | 
11 |   const walletSrc = resolve(wallet)
12 | 
13 |   return wallet
14 |     ? [
15 |         // mount the wallet to file in /src
16 |         '-v',
17 |         `${walletSrc}:${walletDest}`,
18 |         '-e',
19 |         `WALLET_PATH=${walletDest}`
20 |       ]
21 |     : []
22 | }
23 | 
24 | export function tagsArg ({ tags, values }) {
25 |   if (!tags && !values) return []
26 |   if (tags && !values) throw new Error('tag values required')
27 |   if (values && !tags) throw new Error('tag names required')
28 |   if (tags.length !== values.length) throw new Error('tag value length mismatch')
29 | 
30 |   /**
31 |    * Pass a stringified zip of [ [tag1, tag2], [value1, value2] ]
32 |    */
33 |   return ['-e', `TAGS=${JSON.stringify([tags, values])}`]
34 | }
35 | 
36 | export function bundlerArgs (bundler) {
37 |   return bundler
38 |     ? [
39 |         '-e',
40 |         `BUNDLER_HOST=${bundler}`
41 |       ]
42 |     : []
43 | }
44 | 


--------------------------------------------------------------------------------
/dev-cli/src/versions.js:
--------------------------------------------------------------------------------
1 | /* eslint-disable */
2 | export const VERSION = {
3 |   "CLI": "0.1.7",
4 |   "IMAGE": "0.1.5"
5 | }


--------------------------------------------------------------------------------
/dev-cli/tools/build.sh:
--------------------------------------------------------------------------------
 1 | #!/bin/bash
 2 | 
 3 | # Build the ao cli into a set of platform binaries
 4 | 
 5 | # change directory to root of dev-cli to ensure this script works no matter where it is ran
 6 | root_dir="$(realpath "$(dirname "$0")/..")"
 7 | cd $root_dir
 8 | 
 9 | OUTPUT_DIR="${root_dir}/dist"
10 | 
11 | mkdir -p ${OUTPUT_DIR}
12 | 
13 | rm -f "${OUTPUT_DIR}/ao-*.zip"
14 | 
15 | cd src/starters/ && zip -rxv "${OUTPUT_DIR}/starters.zip" ./* && cd $root_dir
16 | 
17 | deno compile --allow-env --allow-read --allow-write --allow-run --output "${OUTPUT_DIR}/ao" --target x86_64-unknown-linux-gnu src/mod.js
18 | zip -j "${OUTPUT_DIR}/ao-x86_64-unknown-linux-gnu.zip" "${OUTPUT_DIR}/ao"
19 | rm -f "${OUTPUT_DIR}/ao"
20 | 
21 | deno compile --allow-env --allow-read --allow-write --allow-run --output "${OUTPUT_DIR}/ao" --target aarch64-apple-darwin src/mod.js
22 | zip -j "${OUTPUT_DIR}/ao-aarch64-apple-darwin.zip" "${OUTPUT_DIR}/ao"
23 | rm -f "${OUTPUT_DIR}/ao"
24 | 
25 | deno compile --allow-env --allow-read --allow-write --allow-run --output "${OUTPUT_DIR}/ao" --target x86_64-apple-darwin src/mod.js
26 | zip -j "${OUTPUT_DIR}/ao-x86_64-apple-darwin.zip" "${OUTPUT_DIR}/ao"
27 | rm -f "${OUTPUT_DIR}/ao"
28 | 
29 | deno compile --allow-env --allow-read --allow-write --allow-run --output "${OUTPUT_DIR}/ao".exe --target x86_64-pc-windows-msvc src/mod.js
30 | zip -j "${OUTPUT_DIR}/ao-x86_64-pc-windows-msvc.exe.zip" "${OUTPUT_DIR}/ao.exe"
31 | rm -f "${OUTPUT_DIR}/ao.exe"
32 | 
33 | #  stdout, so can be piped or saved to a variable
34 | echo "${OUTPUT_DIR}"
35 | 


--------------------------------------------------------------------------------
/dev-cli/tools/deploy/package.json:
--------------------------------------------------------------------------------
1 | {
2 |   "name": "@permaweb/ao-cli-deploy",
3 |   "type": "module",
4 |   "dependencies": {
5 |     "@ar.io/sdk": "^2.3.2",
6 |     "zod": "^3.23.8"
7 |   }
8 | }
9 | 


--------------------------------------------------------------------------------
/lint-staged.config.cjs:
--------------------------------------------------------------------------------
 1 | module.exports = {
 2 |   '**/*.js': [
 3 |     'standard --fix'
 4 |   ],
 5 |   '**/package.json': [
 6 |     'sort-package-json'
 7 |   ],
 8 |   '**/*.md': [
 9 |     'markdown-toc-gen insert'
10 |   ]
11 | }
12 | 


--------------------------------------------------------------------------------
/loader/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules


--------------------------------------------------------------------------------
/loader/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/loader/esbuild.js:
--------------------------------------------------------------------------------
 1 | import * as esbuild from 'esbuild'
 2 | 
 3 | await esbuild.build({
 4 |   entryPoints: ['src/index.cjs'],
 5 |   platform: 'node',
 6 |   format: 'cjs',
 7 |   bundle: true,
 8 |   outfile: 'dist/index.cjs'
 9 | })
10 | 


--------------------------------------------------------------------------------
/loader/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao-loader",
 3 |   "version": "0.0.49",
 4 |   "repository": {
 5 |     "type": "git",
 6 |     "url": "https://github.com/permaweb/ao.git",
 7 |     "directory": "loader"
 8 |   },
 9 |   "sideEffects": false,
10 |   "type": "module",
11 |   "main": "./dist/index.cjs",
12 |   "types": "./dist/index.d.cts",
13 |   "files": [
14 |     "./dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "npm run build:types && npm run build:src",
18 |     "build:src": "node esbuild.js",
19 |     "build:types": "tsc src/index.cjs --declaration --allowJs --emitDeclarationOnly --outDir dist",
20 |     "test": "npm run build && node --experimental-wasm-memory64 --test",
21 |     "test:integration": "npm run build && MODULE_PATH='../dist/index.cjs' node --experimental-wasm-memory64 --test"
22 |   },
23 |   "dependencies": {
24 |     "@permaweb/wasm-metering": "^0.2.2"
25 |   },
26 |   "devDependencies": {
27 |     "@permaweb/loco": "^0.0.17",
28 |     "esbuild": "^0.19.5",
29 |     "typescript": "^5.2.2"
30 |   },
31 |   "engines": {
32 |     "node": ">=18"
33 |   }
34 | }
35 | 


--------------------------------------------------------------------------------
/loader/test/_unused/contracts/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/_unused/contracts/process.wasm


--------------------------------------------------------------------------------
/loader/test/_unused/contracts2/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/_unused/contracts2/process.wasm


--------------------------------------------------------------------------------
/loader/test/_unused/process64/process.lua:
--------------------------------------------------------------------------------
 1 | local process = {_version = "0.0.1"}
 2 | 
 3 | Log = {}
 4 | Count = 0
 5 | 
 6 | function process.handle(msg, ao)
 7 |     local action = ""
 8 |     for _, o in ipairs(msg.Tags) do
 9 |         if o.name == "Action" then action = o.value end
10 |     end
11 |     if action == "echo" then return {Output = msg.Data} end
12 |     if action == "inc" then
13 |         Count = Count + 1
14 |         return {Output = Count}
15 |     end
16 |     if action == "Date" then return {Output = os.date("%Y-%m-%d")} end
17 |     if action == "Random" then return {Output = math.random(1, 10)} end
18 |     if action == "Memory" then
19 |         while true do table.insert(Log, 'Hello World') end
20 |     end
21 |     if action == "Directory" then
22 |         Files = {}
23 |         local command = string.format('ls %s', '/')
24 |         local p = io.popen(command)
25 |         for file in p:lines() do table.insert(Files, file) end
26 |         p:close()
27 |         return {Output = Files}
28 |     end
29 |     while true do Count = Count + 1 end
30 | end
31 | 
32 | return process
33 | 


--------------------------------------------------------------------------------
/loader/test/_unused/process64/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/_unused/process64/process.wasm


--------------------------------------------------------------------------------
/loader/test/aos/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/aos/process.wasm


--------------------------------------------------------------------------------
/loader/test/aos64/aos64.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/aos64/aos64.wasm


--------------------------------------------------------------------------------
/loader/test/emscripten/process.lua:
--------------------------------------------------------------------------------
 1 | 
 2 | 
 3 | local process = {_version = "0.0.1"}
 4 | 
 5 | Log = {}
 6 | Count = 0
 7 | 
 8 | function process.handle(msg, ao)
 9 |     local action = ""
10 |     for _, o in ipairs(msg.Tags) do
11 |         if o.name == "Action" then action = o.value end
12 |     end
13 |     if action == "echo" then return {Output = msg.Data} end
14 |     if action == "inc" then
15 |         Count = Count + 1
16 |         return {Output = Count}
17 |     end
18 |     if action == "Date" then return {Output = os.date("%Y-%m-%d")} end
19 |     if action == "Random" then return {Output = math.random(1, 10)} end
20 |     if action == "Memory" then
21 |         while true do table.insert(Log, 'Hello World') end
22 |     end
23 |     if action == "Directory" then
24 |         Files = {}
25 |         local command = string.format('ls %s', '/')
26 |         local p = io.popen(command)
27 |         for file in p:lines() do table.insert(Files, file) end
28 |         p:close()
29 |         return {Output = Files}
30 |     end
31 |     if action == "Assignment" then 
32 |         ao.assign({ Processes = { 'pid-1', 'pid-2' }, Message = 'mid-1' })
33 |         ao.assign({ Processes = { 'pid-1', 'pid-2' }, Message = 'mid-2' })
34 |         return { Output = ao.outbox.Assignments }
35 |     end 
36 |     while true do Count = Count + 1 end
37 | end
38 | 
39 | return process
40 | 


--------------------------------------------------------------------------------
/loader/test/emscripten/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/emscripten/process.wasm


--------------------------------------------------------------------------------
/loader/test/emscripten2/process.lua:
--------------------------------------------------------------------------------
 1 | local process = {_version = "0.0.1"}
 2 | 
 3 | Log = {}
 4 | Count = 0
 5 | 
 6 | function process.handle(msg, ao)
 7 |     local action = ""
 8 |     for _, o in ipairs(msg.Tags) do
 9 |         if o.name == "Action" then action = o.value end
10 |     end
11 |     if action == "echo" then return {Output = msg.Data} end
12 |     if action == "inc" then
13 |         Count = Count + 1
14 |         return {Output = Count}
15 |     end
16 |     if action == "Date" then return {Output = os.date("%Y-%m-%d")} end
17 |     if action == "Random" then return {Output = math.random(1, 10)} end
18 |     if action == "Memory" then
19 |         while true do table.insert(Log, 'Hello World') end
20 |     end
21 |     if action == "Directory" then
22 |         Files = {}
23 |         local command = string.format('ls %s', '/')
24 |         local p = io.popen(command)
25 |         for file in p:lines() do table.insert(Files, file) end
26 |         p:close()
27 |         return {Output = Files}
28 |     end
29 |     while true do Count = Count + 1 end
30 | end
31 | 
32 | return process
33 | 


--------------------------------------------------------------------------------
/loader/test/emscripten2/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/emscripten2/process.wasm


--------------------------------------------------------------------------------
/loader/test/emscripten2_sqlite/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/emscripten2_sqlite/process.wasm


--------------------------------------------------------------------------------
/loader/test/emscripten4/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/emscripten4/process.wasm


--------------------------------------------------------------------------------
/loader/test/host.test.js:
--------------------------------------------------------------------------------
 1 | import { aoslocal } from '@permaweb/loco'
 2 | import { test } from 'node:test'
 3 | import * as assert from 'node:assert'
 4 | 
 5 | // skip test first then add back next pr
 6 | test('genEnv should return nil', async () => {
 7 |     const aos = await aoslocal()
 8 | 
 9 |     const result = await aos.eval('if not os.getenv("PATH") then print([[2]]) else print([[1]]) end')
10 |     // const result = await aos.eval('print(os.getenv([[PATH]]))')
11 |     assert.equal(result.Output.data, '2')
12 | })
13 | 


--------------------------------------------------------------------------------
/loader/test/wasm64-emscripten/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/loader/test/wasm64-emscripten/process.wasm


--------------------------------------------------------------------------------
/logos/ao_pictograph_darkmode.svg:
--------------------------------------------------------------------------------
1 | <svg width="429" height="214" viewBox="0 0 429 214" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M0 214H71.3763L85.9429 174.61L53.1681 107.5L0 214Z" fill="white"/>
3 | <path d="M189.366 160.75L109.978 1L85.9429 55.7089L160.961 214H215L189.366 160.75Z" fill="white"/>
4 | <path fill-rule="evenodd" clip-rule="evenodd" d="M322 214C381.094 214 429 166.094 429 107C429 47.9055 381.094 0 322 0C262.906 0 215 47.9055 215 107C215 166.094 262.906 214 322 214ZM322 172C357.899 172 387 142.899 387 107C387 71.1015 357.899 42 322 42C286.101 42 257 71.1015 257 107C257 142.899 286.101 172 322 172Z" fill="white"/>
5 | </svg>
6 | 


--------------------------------------------------------------------------------
/logos/ao_pictograph_lightmode.svg:
--------------------------------------------------------------------------------
1 | <svg width="429" height="214" viewBox="0 0 429 214" fill="none" xmlns="http://www.w3.org/2000/svg">
2 | <path d="M0 214H71.3763L85.9429 174.61L53.1681 107.5L0 214Z" fill="black"/>
3 | <path d="M189.366 160.75L109.978 1L85.9429 55.7089L160.961 214H215L189.366 160.75Z" fill="black"/>
4 | <path fill-rule="evenodd" clip-rule="evenodd" d="M322 214C381.094 214 429 166.094 429 107C429 47.9055 381.094 0 322 0C262.906 0 215 47.9055 215 107C215 166.094 262.906 214 322 214ZM322 172C357.899 172 387 142.899 387 107C387 71.1015 357.899 42 322 42C286.101 42 257 71.1015 257 107C257 142.899 286.101 172 322 172Z" fill="black"/>
5 | </svg>
6 | 


--------------------------------------------------------------------------------
/lua-examples/README.md:
--------------------------------------------------------------------------------
 1 | # AO Examples
 2 | 
 3 | A repository of `ao` Process examples.
 4 | 
 5 | <!-- toc -->
 6 | 
 7 | - [Examples](#examples)
 8 | 
 9 | <!-- tocstop -->
10 | 
11 | ## Examples
12 | 
13 | TODO
14 | 


--------------------------------------------------------------------------------
/lua-examples/ao-standard-token/.lua-format:
--------------------------------------------------------------------------------
1 | column_limit: 120
2 | indent_width: 2
3 | use_tab: false
4 | spaces_before_call: 1
5 | double_quote_to_single_quote: true
6 | spaces_inside_table_braces: true


--------------------------------------------------------------------------------
/lua-examples/archive/README.md:
--------------------------------------------------------------------------------
 1 | # Examples Archive
 2 | 
 3 | These projects were built using pre-1.0 version of `ao`, during active development of the `ao` Protocol. They are no longer accurate representations of the `ao` Protocol, but still kept for posterity.
 4 | 
 5 | These projects should not be considered accurate representations of the 1.0 `ao` patterns.
 6 | 
 7 | Reference other examples in this repo or the [`ao` Cookbook](https://cookbook_ao.arweave.dev) for `1.0` guides and examples.
 8 | 
 9 | The following is the original README for these archived projects
10 | <!-- toc -->
11 | 
12 | - [Examples](#examples)
13 | - [Resources](#resources)
14 | 
15 | <!-- tocstop -->
16 | 
17 | ## Examples
18 | 
19 | - [Message Passing](./message-passing/contract.lua)
20 | - [Smartweave Token](./sw-token/contract.lua)
21 | ## Resources
22 | 
23 | - https://www.lua.org/docs.html
24 | 


--------------------------------------------------------------------------------
/lua-examples/archive/aorc/README.md:
--------------------------------------------------------------------------------
 1 | # `aorc`!
 2 | 
 3 | This is an example of a simple `ao` Relayer Process called `aorc`. It implements
 4 | 3 functions:
 5 | 
 6 | - `sub` (`ao-action`: `write`): Subscribes the caller to the relayer.
 7 | - `unsub` (`ao-action`: `write`): Unsubscribes the caller from the relayer
 8 | - `relay` (`ao-action`: `write`): Relays a message to the `subscribers` in the `subs` table.
 9 | 
10 | <!-- toc -->
11 | 
12 | - [Getting Started](#getting-started)
13 | - [Contributing](#contributing)
14 | 
15 | <!-- tocstop -->
16 | 
17 | ## Getting Started
18 | 
19 | First install dependencies using `npm i`
20 | 
21 | If you'd like to simply interact with the process, there is a `repl.js` that you
22 | can start and send messages to the process, locally. Just run `node repl.js`
23 | 
24 | Here are some example messages:
25 | 
26 | Subscribe to the relayer
27 | 
28 | ```sh
29 | aorc > sub
30 | ```
31 | 
32 | Unsubscribe from the relayer
33 | 
34 | ```sh
35 | aorc > unsub
36 | ```
37 | 
38 | Relay a message
39 | 
40 | ```sh
41 | hello world > relay
42 | ```
43 | 
44 | ## Contributing
45 | 
46 | If you modify the `process.lua` make sure to build and publish the source using
47 | the `ao` CLI.
48 | 


--------------------------------------------------------------------------------
/lua-examples/archive/aorc/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "aorc-process",
 3 |   "version": "0.0.1",
 4 |   "description": "jshaw playing around",
 5 |   "license": "MIT",
 6 |   "author": "jshaw",
 7 |   "type": "module",
 8 |   "main": "index.js",
 9 |   "devDependencies": {
10 |     "@permaweb/ao-loader": "0.0.10",
11 |     "@permaweb/ao-sdk": "0.0.18"
12 |   }
13 | }
14 | 


--------------------------------------------------------------------------------
/lua-examples/archive/aorc/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/lua-examples/archive/aorc/process.wasm


--------------------------------------------------------------------------------
/lua-examples/archive/aos/ao.lua:
--------------------------------------------------------------------------------
 1 | local ao = { _version = "0.0.1" }
 2 | 
 3 | function ao.send(input, target, AO) 
 4 |   local message = {
 5 |     target = target,
 6 |     tags = {
 7 |       { name = "Data-Protocol", value = "ao" },
 8 |       { name = "ao-type", value = "message" },
 9 |       { name = "Forwarded-For", value = AO.process.id }
10 |     }
11 |   }
12 |   
13 |   for k,v in pairs(input) do
14 |     table.insert(message.tags, { name = k, value = v })
15 |   end
16 | 
17 |   return message
18 | end
19 | 
20 | function ao.spawn(data, tags, AO) 
21 |   local spawn = {
22 |     data = data,
23 |     tags = {
24 |       { name = "Data-Protocol", value = "ao" },
25 |       { name = "ao-type", value = "process" },
26 |       { name = "Forwarded-For", value = AO.process.id }
27 |     }
28 |   }
29 | 
30 |   for k,v in pairs(tags) do
31 |     table.insert(spawn.tags, { name = k, value = v })
32 |   end
33 | 
34 |   return spawn
35 | end
36 | 
37 | return ao
38 | 


--------------------------------------------------------------------------------
/lua-examples/archive/aos/package-lock.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "aos-process",
 3 |   "version": "1.0.0",
 4 |   "lockfileVersion": 3,
 5 |   "requires": true,
 6 |   "packages": {
 7 |     "": {
 8 |       "name": "aos-process",
 9 |       "version": "1.0.0",
10 |       "license": "MIT",
11 |       "dependencies": {
12 |         "@permaweb/ao-loader": "^0.0.11"
13 |       }
14 |     },
15 |     "../../sdk": {
16 |       "name": "@permaweb/ao-sdk",
17 |       "version": "0.0.10",
18 |       "extraneous": true,
19 |       "license": "MIT",
20 |       "dependencies": {
21 |         "buffer": "^6.0.3",
22 |         "debug": "^4.3.4",
23 |         "hyper-async": "^1.1.2",
24 |         "ramda": "^0.29.1",
25 |         "warp-arbundles": "^1.0.4",
26 |         "zod": "^3.22.4"
27 |       },
28 |       "devDependencies": {
29 |         "arweave": "^1.14.4",
30 |         "esbuild": "^0.19.5",
31 |         "typescript": "^5.2.2"
32 |       },
33 |       "engines": {
34 |         "node": ">=18"
35 |       }
36 |     },
37 |     "node_modules/@permaweb/ao-loader": {
38 |       "version": "0.0.11",
39 |       "resolved": "https://registry.npmjs.org/@permaweb/ao-loader/-/ao-loader-0.0.11.tgz",
40 |       "integrity": "sha512-om2Gn1+27VAfagIoDKyRy/qUeROHr4cMjyJMUVJi3VEyuEet3vlMeSRBDl0IU+QC/CUDiYwrcVxjERC9nyi5rw==",
41 |       "engines": {
42 |         "node": ">=18"
43 |       }
44 |     }
45 |   }
46 | }
47 | 


--------------------------------------------------------------------------------
/lua-examples/archive/aos/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "aos-process",
 3 |   "version": "1.0.0",
 4 |   "license": "MIT",
 5 |   "type": "module",
 6 |   "main": "index.js",
 7 |   "dependencies": {
 8 |     "@permaweb/ao-loader": "^0.0.11"
 9 |   }
10 | }


--------------------------------------------------------------------------------
/lua-examples/archive/aos/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/lua-examples/archive/aos/process.wasm


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/README.md:
--------------------------------------------------------------------------------
 1 | # Message Passing
 2 | 
 3 | <!-- toc -->
 4 | 
 5 | - [Usage](#usage)
 6 | - [Stuff](#stuff)
 7 | - [Bonus](#bonus)
 8 | 
 9 | <!-- tocstop -->
10 | 
11 | ## Usage
12 | 
13 | Install packages:
14 | 
15 | `npm i`
16 | 
17 | Deploy contracts and start app:
18 | 
19 | `npm run launch`
20 | 
21 | This will print out the `id`'s for the `sender` and `receiver` contracts and start the `web app`.
22 | 
23 | Run an interaction that will send a message from `sender` to `receiver`:
24 | 
25 | `SENDER=<sender-id> npm run run`
26 | 
27 | You should now be able to look at the `web app` in the browser and see that the state of each contract has been updated.
28 | 
29 | The messages have been sent and received.
30 | 
31 | ## Stuff
32 | 
33 | Directories
34 | 
35 | - `sender/`: Lua `ao` contract that sends messages and updates state.
36 | - `receiver/`: Lua `ao` contract that receives messages and updates state.
37 | - `scripts/`: The node scripts for using the contracts
38 | - `app/`: A react app that takes the ID's and fetches their state.
39 | 
40 | ## Bonus
41 | 
42 | If you click the little `send message` text, that will send another TX.  The styling is terrible though so it won't look like it's working until you refresh the page.


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/.gitignore:
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
/lua-examples/archive/message-passing/app/README.md:
--------------------------------------------------------------------------------
1 | # vite-swc-reactjs-tailwind
2 | 
3 | - `npm i`
4 | - `npm run dev`
5 | - `PATH_TO_WALLET=<path>/<file>.json npm run deploy`
6 | - Redux / Redux First Router
7 | - 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="UTF-8" />
 5 |     <!-- <link rel="icon" type="image/svg+xml" href="/vite.svg" /> -->
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 7 |     <title>Jshaw's Vite + React</title>
 8 |   </head>
 9 |   <body>
10 |     <div id="root"></div>
11 |     <script type="module" src="/src/main.jsx"></script>
12 |   </body>
13 | </html>
14 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "react-generator",
 3 |   "version": "0.0.0",
 4 |   "private": true,
 5 |   "homepage": ".",
 6 |   "type": "module",
 7 |   "scripts": {
 8 |     "build": "vite build",
 9 |     "deploy": "node ./scripts/perma-deploy.mjs ./dist",
10 |     "dev": "vite",
11 |     "preview": "vite preview"
12 |   },
13 |   "dependencies": {
14 |     "@loadable/component": "5.15.3",
15 |     "@permaweb/ao-sdk": "0.0.10",
16 |     "@reduxjs/toolkit": "1.9.3",
17 |     "react": "^18.2.0",
18 |     "react-dom": "^18.2.0",
19 |     "react-redux": "8.0.5",
20 |     "redux-first-router": "2.1.5"
21 |   },
22 |   "devDependencies": {
23 |     "@bundlr-network/client": "0.11.17",
24 |     "@types/react": "^18.0.28",
25 |     "@types/react-dom": "^18.0.11",
26 |     "@vitejs/plugin-react-swc": "3.4.0",
27 |     "autoprefixer": "10.4.14",
28 |     "postcss": "8.4.21",
29 |     "tailwindcss": "3.3.1",
30 |     "vite": "4.4.9"
31 |   }
32 | }
33 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/postcss.config.js:
--------------------------------------------------------------------------------
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {}
5 |   }
6 | }
7 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/scripts/perma-deploy.mjs:
--------------------------------------------------------------------------------
 1 | import { execSync } from 'child_process'
 2 | 
 3 | function deployFiles (folder) {
 4 |   execSync(
 5 |     `npx bundlr upload-dir ${folder} -w ${process.env.PATH_TO_WALLET} --index-file index.html -c arweave -h https://node2.bundlr.network --no-confirmation`,
 6 |     { encoding: 'utf8', stdio: 'inherit' }
 7 |   )
 8 | }
 9 | 
10 | if (!process.env.PATH_TO_WALLET) {
11 |   console.log('Set process.env.PATH_TO_WALLET to the path to your key file.')
12 |   process.exit(1)
13 | }
14 | const folder = process.argv[2]
15 | if (!folder) {
16 |   console.log(
17 |     'You must pass a path to this script. eg. node ./perma-deploy.mjs ./path/to/dist'
18 |   )
19 |   process.exit(1)
20 | }
21 | 
22 | deployFiles(folder)
23 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/App.jsx:
--------------------------------------------------------------------------------
 1 | import { connect } from 'react-redux'
 2 | import { mapStateToProps } from './store/router'
 3 | 
 4 | import loadable from '@loadable/component'
 5 | 
 6 | const pages = {
 7 |   Feed: loadable(() => import('./pages/Feed'), {
 8 |     resolveComponent: (c) => c.default
 9 |   }),
10 |   Player: loadable(() => import('./pages/Player'), {
11 |     resolveComponent: (c) => c.default
12 |   })
13 | }
14 | 
15 | function App ({ page }) {
16 |   const Component = pages[page || 'Feed']
17 |   return (
18 |     <>
19 |       <h1 className='text-3xl font-bold underline'>Header</h1>
20 |       <Component />
21 |       <h1>Footer</h1>
22 |     </>
23 |   )
24 | }
25 | 
26 | export default connect(mapStateToProps)(App)
27 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/index.css:
--------------------------------------------------------------------------------
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/main.jsx:
--------------------------------------------------------------------------------
 1 | import React from 'react'
 2 | import ReactDOM from 'react-dom/client'
 3 | import { Provider } from 'react-redux'
 4 | import { store } from './store'
 5 | import App from './App'
 6 | import './index.css'
 7 | 
 8 | ReactDOM.createRoot(document.getElementById('root')).render(
 9 |   <Provider store={store}>
10 |     <React.StrictMode>
11 |       <App />
12 |     </React.StrictMode>
13 |   </Provider>
14 | )
15 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/pages/Player.jsx:
--------------------------------------------------------------------------------
 1 | import { connect } from 'react-redux'
 2 | import { mapStateToProps, router } from '../store/router'
 3 | 
 4 | function Player ({ tx, goToFeed }) {
 5 |   return (
 6 |     <>
 7 |       <h1 className='text-3xl font-bold underline'>Player Page {tx}</h1>
 8 |       <p onClick={() => goToFeed()}>Go to feed</p>
 9 |     </>
10 |   )
11 | }
12 | 
13 | export default connect(mapStateToProps, router)(Player)
14 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/store/index.js:
--------------------------------------------------------------------------------
 1 | import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
 2 | import { connectRoutes } from 'redux-first-router'
 3 | import page, { routesMap } from './router'
 4 | 
 5 | const { reducer, middleware, enhancer } = connectRoutes(routesMap, {
 6 |   basename: '#'
 7 | })
 8 | 
 9 | export const store = configureStore({
10 |   reducer: {
11 |     location: reducer,
12 |     page
13 |   },
14 |   // Additional middleware can be passed to this array
15 |   middleware: (getDefaultMiddleware) =>
16 |     getDefaultMiddleware({
17 |       // This is required to use thunks in ./routes/pages.ts
18 |       serializableCheck: { ignoredPaths: ['location'] }
19 |     }).concat(middleware),
20 |   devTools: import.meta.env.ENVIRONMENT !== 'prod',
21 |   // Optional Redux store enhancers
22 |   enhancers: (defaultEnhancers) => [
23 |     ...defaultEnhancers,
24 |     enhancer,
25 |     // You need this to dispatch "thunk" actions when someone comes with a link
26 |     // For example: If you give someone a link to an assertion permafacts.io/<address>/<assertiontx>
27 |     // The UI isn't aware of that assertion, so it needs to take the id and fetch the assertion before
28 |     // loading the route
29 |     // See: `routesMap` in this file for an example of how these thunks are used.
30 |     applyMiddleware(middleware)
31 |   ]
32 | })
33 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/src/store/router.js:
--------------------------------------------------------------------------------
 1 | import { NOT_FOUND, back } from 'redux-first-router'
 2 | 
 3 | const components = {
 4 |   FEED: 'Feed',
 5 |   PLAYER: 'Player',
 6 |   [NOT_FOUND]: 'Feed'
 7 | }
 8 | 
 9 | export const routesMap = {
10 |   FEED: {
11 |     path: '/',
12 |     thunk: async (dispatch, getState) => {
13 |       console.log('Feed thunk.')
14 |     }
15 |   },
16 |   PLAYER: {
17 |     path: '/player/:tx',
18 |     thunk: async (dispatch, getState) => {
19 |       console.log('Player thunk.')
20 |     }
21 |   },
22 |   NOT_FOUND: {
23 |     path: '/'
24 |   }
25 | }
26 | 
27 | export const router = (dispatch) => {
28 |   return {
29 |     goBack: () => back(),
30 |     goToFeed: () => dispatch({ type: 'FEED' }),
31 |     goToPlayer: (tx) => dispatch({ type: 'PLAYER', payload: { tx } })
32 |   }
33 | }
34 | 
35 | export const mapStateToProps = (state, props) => {
36 |   return {
37 |     ...props,
38 |     page: state.page,
39 |     tx: state?.location?.payload?.tx,
40 |     ticker: state?.location?.payload?.ticker,
41 |     transaction: state?.location?.payload?.transaction
42 |   }
43 | }
44 | 
45 | export default (state = 'FEED', action = {}) => components[action.type] || state
46 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/tailwind.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('tailwindcss').Config} */
 2 | export default {
 3 |   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 4 |   theme: {
 5 |     extend: {
 6 |       colors: {
 7 |         'light-blue1': '#00FFF2F3',
 8 |         'light-blue2': '#6DE2FF',
 9 |         primary: '#293241',
10 |         secondary: '#FF8500'
11 |       },
12 |       backgroundColor: {
13 |         primary: '#FFF',
14 |         secondary: '#F2F3F4'
15 |       },
16 |       borderColor: {
17 |         primary: '#293241',
18 |         secondary: '#FF8500'
19 |       }
20 |     }
21 |   },
22 |   plugins: []
23 | }
24 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/app/vite.config.js:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vite'
2 | import react from '@vitejs/plugin-react-swc'
3 | 
4 | // https://vitejs.dev/config/
5 | export default defineConfig({
6 |   base: './',
7 |   plugins: [react()]
8 | })
9 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "message-passing",
 3 |   "version": "1.0.0",
 4 |   "description": "",
 5 |   "license": "ISC",
 6 |   "author": "Justin Shaw",
 7 |   "main": "index.js",
 8 |   "scripts": {
 9 |     "install": "(cd app && npm i)",
10 |     "launch": "node ./scripts/launch.mjs",
11 |     "run": "node ./scripts/run.mjs"
12 |   },
13 |   "devDependencies": {
14 |     "@bundlr-network/client": "0.11.17",
15 |     "@permaweb/ao-sdk": "0.0.10",
16 |     "hyper-async": "1.1.2"
17 |   }
18 | }
19 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/receiver/contract.lua:
--------------------------------------------------------------------------------
 1 | local contract = {
 2 |   _version = "0.0.1"
 3 | }
 4 | 
 5 | local function printTable(table, indent)
 6 |   indent = indent or 0
 7 | 
 8 |   for k, v in pairs(table) do
 9 |     if type(v) == "table" then
10 |       print(string.rep("  ", indent) .. k .. " = {")
11 |       printTable(v, indent + 1)
12 |       print(string.rep("  ", indent) .. "}")
13 |     else
14 |       print(string.rep("  ", indent) .. k .. " = " .. tostring(v))
15 |     end
16 |   end
17 | end
18 | 
19 | local function handleMessage(state, _action, _SmartWeave)
20 |   print("Receiver action")
21 |   printTable(_action)
22 |   state.count = state.count + 1
23 | 
24 |   return {
25 |     state,
26 |     result = {
27 |       messages = {}
28 |     }
29 |   }
30 | end
31 | 
32 | function contract.handle(state, action, SmartWeave)
33 |   state.count = state.count + 1
34 |   table.insert(state.received_messages, action.input)
35 |   printTable(state)
36 |   return {
37 |     state = state,
38 |     result = {
39 |       messages = {}
40 |     }
41 |   }
42 | end
43 | 
44 | return contract
45 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/receiver/contract.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/lua-examples/archive/message-passing/receiver/contract.wasm


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/receiver/state.json:
--------------------------------------------------------------------------------
1 | {
2 |   "received_messages": [],
3 |   "count": 0
4 | }
5 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/sender/contract.lua:
--------------------------------------------------------------------------------
 1 | local contract = {
 2 |   _version = "0.0.1"
 3 | }
 4 | 
 5 | local function printTable(table, indent)
 6 |   indent = indent or 0
 7 | 
 8 |   for k, v in pairs(table) do
 9 |     if type(v) == "table" then
10 |       print(string.rep("  ", indent) .. k .. " = {")
11 |       printTable(v, indent + 1)
12 |       print(string.rep("  ", indent) .. "}")
13 |     else
14 |       print(string.rep("  ", indent) .. k .. " = " .. tostring(v))
15 |     end
16 |   end
17 | end
18 | 
19 | local function handleMessage(state, _action, _SmartWeave)
20 |   return {state}
21 | end
22 | 
23 | function contract.handle(state, action, SmartWeave)
24 |   print("Running sender handle")
25 | 
26 |   state.count = state.count + 1
27 |   -- do stuff
28 |   local response = {
29 |     state = state,
30 |     result = {
31 |       messages = {{
32 |         target = state.receiverTx,
33 |         message = {
34 |           type = action.input['function'],
35 |           caller = SmartWeave.contract.id,
36 |           from = SmartWeave.contract.id,
37 |           to = state.receiverTx
38 |         }
39 |       }}
40 |     }
41 |   }
42 |   return response
43 | end
44 | 
45 | return contract
46 | 


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/sender/contract.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/lua-examples/archive/message-passing/sender/contract.wasm


--------------------------------------------------------------------------------
/lua-examples/archive/message-passing/sender/state.json:
--------------------------------------------------------------------------------
1 | {
2 |   "receiverTx": "",
3 |   "count": 0
4 | }
5 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/README.md:
--------------------------------------------------------------------------------
 1 | # Smartweave Token (WIP)
 2 | 
 3 | An example of a smartweave token with functions:
 4 | 
 5 | - balance
 6 | - transfer
 7 | - mint
 8 | 
 9 | <!-- toc -->
10 | 
11 | - [Usage](#usage)
12 | - [Testing](#testing)
13 | 
14 | <!-- tocstop -->
15 | 
16 | ## Usage
17 | 
18 | ## Testing
19 | 
20 | - `ao run test/contract.test.lua`


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/api/balance.lua:
--------------------------------------------------------------------------------
 1 | local Either = require('common.either')
 2 | local util = require('common.util')
 3 | 
 4 | local M = {}
 5 | 
 6 | function M.balance(state, action)
 7 |   return Either.of({
 8 |     state = state,
 9 |     action = action
10 |   }).fold(util.error, util.success)
11 | end
12 | 
13 | return M
14 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/api/index.lua:
--------------------------------------------------------------------------------
 1 | local mint_mod = require('api.mint')
 2 | local transfer_mod = require('api.transfer')
 3 | local balance_mod = require('api.balance')
 4 | 
 5 | API = {}
 6 | 
 7 | API.mint = mint_mod.mint;
 8 | API.transfer = transfer_mod.transfer;
 9 | API.balance = balance_mod.balance;
10 | 
11 | function API.default(state, action, SmartWeave)
12 |   local funk = action.input['function'] or 'undefined'
13 |   return {
14 |     result = {
15 |       error = "No function supplied or function not recognized. " .. funk
16 |     }
17 |   }
18 | end
19 | 
20 | return API;
21 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/api/mint.lua:
--------------------------------------------------------------------------------
 1 | local Either = require('common.either')
 2 | local util = require('common.util')
 3 | 
 4 | local M = {}
 5 | 
 6 | function M.mint(state, action, SmartWeave)
 7 |   return Either.of({
 8 |     state = state,
 9 |     action = action
10 |   }).fold(util.error, util.success)
11 | end
12 | 
13 | return M
14 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/common/util.lua:
--------------------------------------------------------------------------------
 1 | local Main = {}
 2 | 
 3 | function Main.error(error)
 4 |   -- print(input)
 5 |   return {
 6 |     result = {
 7 |       error = error
 8 |     }
 9 |   }
10 | end
11 | 
12 | function Main.success(state)
13 |   -- printTable(input)
14 |   return {
15 |     state = state,
16 |     result = {
17 |       -- Not sure where I get messages from.
18 |       -- Ao lib?
19 |       messages = {}
20 |     }
21 |   }
22 | end
23 | 
24 | function Main.printTable(table, indent)
25 |   indent = indent or 0
26 | 
27 |   for k, v in pairs(table) do
28 |     if type(v) == "table" then
29 |       print(string.rep("  ", indent) .. k .. " = {")
30 |       printTable(v, indent + 1)
31 |       print(string.rep("  ", indent) .. "}")
32 |     else
33 |       print(string.rep("  ", indent) .. k .. " = " .. tostring(v))
34 |     end
35 |   end
36 | end
37 | 
38 | return Main
39 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/contract.lua:
--------------------------------------------------------------------------------
 1 | local contract = {
 2 |   _version = "0.0.1"
 3 | }
 4 | 
 5 | local API = require('api.index')
 6 | 
 7 | function contract.handle(state, action, SmartWeave)
 8 |   local cases = {
 9 |     mint = 'mint',
10 |     transfer = 'transfer',
11 |     balance = 'balance'
12 |   }
13 |   local funk = cases[action.input['function']] or 'default'
14 |   return API[funk](state, action, SmartWeave)
15 | end
16 | 
17 | return contract
18 | 


--------------------------------------------------------------------------------
/lua-examples/archive/sw-token/test/transfer.test.lua:
--------------------------------------------------------------------------------
 1 | -- load the luaunit module
 2 | local luaunit = require('luaunit')
 3 | local contract = require('contract');
 4 | 
 5 | -- Define the test class
 6 | Test = {}
 7 | 
 8 | -- Define a test case
 9 | function Test:test_sum()
10 |     luaunit.assertEquals(contract.sum(5), 10)  -- Check if add(2, 3) equals 5
11 | end
12 | 
13 | -- Run the test
14 | luaunit.run()
15 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "hello-world-process",
 3 |   "version": "1.0.0",
 4 |   "license": "MIT",
 5 |   "type": "module",
 6 |   "main": "index.js",
 7 |   "dependencies": {
 8 |     "@permaweb/ao-loader": "^0.0.12",
 9 |     "@permaweb/ao-sdk": "^0.0.22"
10 |   },
11 |   "devDependencies": {
12 |     "heapdump": "^0.3.15"
13 |   }
14 | }
15 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/lua-examples/hello-world/process.wasm


--------------------------------------------------------------------------------
/lua-examples/hello-world/readResult.js:
--------------------------------------------------------------------------------
 1 | import { connect } from '@permaweb/ao-sdk'
 2 | 
 3 | const MESSAGE_ID = process.env.MESSAGE_ID
 4 | const PROCESS_ID = process.env.PROCESS_ID
 5 | 
 6 | if (!MESSAGE_ID) throw new Error('MESSAGE_ID env var is required, so as to know which process is receiving the message')
 7 | if (!PROCESS_ID) throw new Error('PROCESS_ID env var is required, so as to know which process is receiving the message')
 8 | 
 9 | const { result } = connect()
10 | 
11 | await result({ message: MESSAGE_ID, process: PROCESS_ID })
12 |   .then(console.log)
13 |   .catch(console.error)
14 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/sendLoadMessage.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | 
 3 | import { connect, createDataItemSigner } from '@permaweb/ao-sdk'
 4 | 
 5 | const PROCESS_ID = process.env.PROCESS_ID
 6 | // Hard coded for the sake of testing
 7 | const SAY_ID = 'bomIi0Xivq4sMA1fwAlq6nsloj1H-8qpw6oQooKDWco'
 8 | 
 9 | if (!PROCESS_ID) throw new Error('PROCESS_ID env var is required, so as to know which process is receiving the message')
10 | 
11 | const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET).toString())
12 | 
13 | const { message } = connect()
14 | 
15 | await message({
16 |   process: PROCESS_ID,
17 |   tags: [
18 |     { name: 'function', value: 'say' },
19 |     { name: 'Load', value: SAY_ID }
20 |   ],
21 |   signer: createDataItemSigner(wallet)
22 | }).then(console.log)
23 |   .catch(console.error)
24 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/sendMessage.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | 
 3 | import { connect, createDataItemSigner } from '@permaweb/ao-sdk'
 4 | 
 5 | const PROCESS_ID = process.env.PROCESS_ID
 6 | 
 7 | if (!PROCESS_ID) throw new Error('PROCESS_ID env var is required, so as to know which process is receiving the message')
 8 | 
 9 | const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET).toString())
10 | 
11 | const { message } = connect()
12 | 
13 | await message({
14 |   process: PROCESS_ID,
15 |   tags: [
16 |     { name: 'function', value: 'raw' }
17 |   ],
18 |   signer: createDataItemSigner(wallet)
19 | }).then(console.log)
20 |   .catch(console.error)
21 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/sendSpawnMessage.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | 
 3 | import { connect, createDataItemSigner } from '@permaweb/ao-sdk'
 4 | 
 5 | const PROCESS_ID = process.env.PROCESS_ID
 6 | 
 7 | if (!PROCESS_ID) throw new Error('PROCESS_ID env var is required, so as to know which process is receiving the message')
 8 | 
 9 | const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET).toString())
10 | 
11 | const { message } = connect()
12 | 
13 | // spawns another instance of hello-world
14 | await message({
15 |   process: PROCESS_ID,
16 |   tags: [
17 |     { name: 'function', value: 'friend' },
18 |     { name: 'extra-spawn-tag', value: 'this should reach the final process' }
19 |   ],
20 |   signer: createDataItemSigner(wallet)
21 | }).then(console.log)
22 |   .catch(console.error)
23 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/spawnProcess.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | 
 3 | import { connect, createDataItemSigner } from '@permaweb/ao-sdk'
 4 | 
 5 | const wallet = JSON.parse(readFileSync(process.env.PATH_TO_WALLET).toString())
 6 | 
 7 | const { spawn } = connect()
 8 | 
 9 | await spawn({
10 |   module: '6xSB_-rcVEc8znlSe3JZBYHRsFw5lcgjhLyR8b6leLA',
11 |   scheduler: 'TZ7o7SIZ06ZEJ14lXwVtng1EtSx60QkPy-kh-kdAXog',
12 |   tags: [
13 |     { name: 'Cron-Interval', value: '1-hour' },
14 |     { name: 'Cron-Tag-function', value: 'hello' }
15 |   ],
16 |   signer: createDataItemSigner(wallet)
17 | }).then(console.log)
18 |   .catch(console.error)
19 | 


--------------------------------------------------------------------------------
/lua-examples/hello-world/test/memory.test.js:
--------------------------------------------------------------------------------
 1 | import fs from 'node:fs'
 2 | import AoLoader from '@permaweb/ao-loader'
 3 | import 'heapdump'
 4 | 
 5 | /**
 6 |  * To trigger a heap dump, into the CWD, execute
 7 |  * > kill -USR2 <pid>
 8 |  */
 9 | console.log(process.pid)
10 | const wasm = fs.readFileSync('../process.wasm')
11 | 
12 | async function load (state, message, env) {
13 |   const handle = await AoLoader(wasm)
14 |   const { buffer, output } = handle(state, message, env)
15 |   if (output) console.log(JSON.parse(output))
16 |   return buffer
17 | }
18 | 
19 | function createMessage (expr) {
20 |   const message = {
21 |     owner: 'OWNER',
22 |     target: 'PROCESS',
23 |     tags: [
24 |       { name: 'Data-Protocol', value: 'ao' },
25 |       { name: 'ao-type', value: 'message' },
26 |       { name: 'function', value: expr }
27 |     ],
28 |     data: undefined
29 |   }
30 | 
31 |   return message
32 | }
33 | 
34 | let buffer
35 | for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
36 |   buffer = await load(
37 |     buffer,
38 |     createMessage(i % 5 === 0 ? 'raw' : 'hello'),
39 |     {
40 |       process: {
41 |         id: 'PROCESS_TEST',
42 |         owner: 'OWNER'
43 |       }
44 |     }
45 |   )
46 | 
47 |   await new Promise(resolve => setTimeout(resolve, 500))
48 | }
49 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao",
 3 |   "description": "ao monorepo",
 4 |   "workspaces": [],
 5 |   "scripts": {
 6 |     "fmt": "standard --fix",
 7 |     "preinstall": "npx only-allow npm",
 8 |     "prepare": "husky",
 9 |     "staged": "lint-staged"
10 |   },
11 |   "devDependencies": {
12 |     "@commitlint/cli": "^19.4.0",
13 |     "@commitlint/config-conventional": "^19.2.2",
14 |     "husky": "^9.1.4",
15 |     "lint-staged": "^15.2.8",
16 |     "markdown-toc-gen": "^1.0.1",
17 |     "only-allow": "^1.2.1",
18 |     "sort-package-json": "^2.10.0",
19 |     "standard": "^17.1.0"
20 |   },
21 |   "standard": {
22 |     "ignore": [
23 |       "dist",
24 |       "**/contract.js"
25 |     ]
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/protocol-tag-utils/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/protocol-tag-utils/CHANGELOG.md:
--------------------------------------------------------------------------------
 1 | # Changelog
 2 | 
 3 | All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.
 4 | 
 5 | ## [0.0.2](https://github.com/permaweb/ao/compare/protocol-tag-utils@v0.0.1...protocol-tag-utils@v0.0.2) (2024-10-31)
 6 | 
 7 | 
 8 | ### Bug Fixes
 9 | 
10 | * **protocol-tag-utils:** remove protocol if all tags are removed by name [#1059](https://github.com/permaweb/ao/issues/1059) ([6c756ec](https://github.com/permaweb/ao/commit/6c756ec57cf684bb06ca3d7d569f2e2ab17c7554))
11 | 
12 | ## 0.0.1 (2024-10-31)
13 | 


--------------------------------------------------------------------------------
/protocol-tag-utils/esbuild.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | import * as esbuild from 'esbuild'
 3 | 
 4 | /**
 5 |  * By importing from manifest, build will always be in sync with the manifest
 6 |  */
 7 | const manifest = JSON.parse(readFileSync('./package.json'))
 8 | 
 9 | // CJS
10 | await esbuild.build({
11 |   entryPoints: ['index.js'],
12 |   platform: 'node',
13 |   format: 'cjs',
14 |   bundle: true,
15 |   outfile: manifest.main
16 | })
17 | 
18 | // ESM
19 | await esbuild.build({
20 |   entryPoints: ['index.js'],
21 |   platform: 'node',
22 |   format: 'esm',
23 |   bundle: true,
24 |   outfile: manifest.module
25 | })
26 | 


--------------------------------------------------------------------------------
/protocol-tag-utils/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/protocol-tag-utils",
 3 |   "version": "0.0.2",
 4 |   "description": "A utility for extracting and parsing tags associated with ANS-115 Data-Protocols",
 5 |   "repository": {
 6 |     "type": "git",
 7 |     "url": "https://github.com/permaweb/ao.git",
 8 |     "directory": "data-protocols"
 9 |   },
10 |   "license": "MIT",
11 |   "author": "Tyler Hall<tyler@hyper.io>",
12 |   "sideEffects": false,
13 |   "type": "module",
14 |   "main": "./dist/index.cjs",
15 |   "module": "./dist/index.js",
16 |   "browser": "./dist/index.js",
17 |   "types": "./dist/index.d.ts",
18 |   "files": [
19 |     "./dist"
20 |   ],
21 |   "scripts": {
22 |     "build": "npm run build:src && npm run build:types",
23 |     "build:src": "node esbuild.js",
24 |     "build:types": "tsc index.js --skipLibCheck --allowJS --declaration --emitDeclarationOnly --outDir dist",
25 |     "test": "node --test"
26 |   },
27 |   "devDependencies": {
28 |     "esbuild": "^0.24.0",
29 |     "typescript": "^5.6.3"
30 |   }
31 | }
32 | 


--------------------------------------------------------------------------------
/protocol-tag-utils/types.ts:
--------------------------------------------------------------------------------
1 | export type RemoveFirstArg<T extends (...args: any[]) => any> = 
2 |   T extends (first: any, ...args: infer R) => infer RType 
3 |     ? (...args: R) => RType 
4 |     : never


--------------------------------------------------------------------------------
/scheduler-utils/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | dist
3 | ao-cache*
4 | 


--------------------------------------------------------------------------------
/scheduler-utils/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/scheduler-utils/esbuild.js:
--------------------------------------------------------------------------------
 1 | import { readFileSync } from 'node:fs'
 2 | import * as esbuild from 'esbuild'
 3 | 
 4 | /**
 5 |  * By importing from manifest, build will always be in sync with the manifest
 6 |  */
 7 | const manifest = JSON.parse(readFileSync('./package.json'))
 8 | 
 9 | /**
10 |  * Some dependencies are ESM only, and so cannot be required from a CJS project.
11 |  * So for those dependencies, we make sure to include them in distribution bundle,
12 |  * so CJS projects can use the code, without having to import the dependency at runtime.
13 |  *
14 |  * ie. hyper-async
15 |  */
16 | function allDepsExcept (excluded = []) {
17 |   return Object.keys(manifest.dependencies).filter((dep) =>
18 |     !excluded.includes(dep)
19 |   )
20 | }
21 | 
22 | // CJS
23 | await esbuild.build({
24 |   entryPoints: ['src/index.js'],
25 |   platform: 'node',
26 |   format: 'cjs',
27 |   external: allDepsExcept(['hyper-async']),
28 |   bundle: true,
29 |   outfile: manifest.exports['.'].require
30 | })
31 | 
32 | // ESM
33 | await esbuild.build({
34 |   entryPoints: ['src/index.js'],
35 |   platform: 'node',
36 |   format: 'esm',
37 |   external: allDepsExcept(['hyper-async']),
38 |   bundle: true,
39 |   outfile: manifest.exports['.'].import
40 | })
41 | 
42 | // Browser ESM
43 | await esbuild.build({
44 |   entryPoints: ['src/index.browser.js'],
45 |   platform: 'browser',
46 |   format: 'esm',
47 |   bundle: true,
48 |   minify: true,
49 |   outfile: manifest.exports['.'].browser
50 | })
51 | 


--------------------------------------------------------------------------------
/scheduler-utils/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao-scheduler-utils",
 3 |   "version": "0.0.25",
 4 |   "repository": {
 5 |     "type": "git",
 6 |     "url": "https://github.com/permaweb/ao.git",
 7 |     "directory": "scheduler-utils"
 8 |   },
 9 |   "sideEffects": false,
10 |   "type": "module",
11 |   "exports": {
12 |     ".": {
13 |       "browser": "./dist/browser.js",
14 |       "import": "./dist/index.js",
15 |       "require": "./dist/index.cjs",
16 |       "default": "./dist/index.js"
17 |     },
18 |     "./browser": "./dist/browser.js"
19 |   },
20 |   "main": "./dist/index.cjs",
21 |   "module": "./dist/index.js",
22 |   "browser": "./dist/browser.js",
23 |   "types": "./dist/index.d.ts",
24 |   "files": [
25 |     "./dist"
26 |   ],
27 |   "scripts": {
28 |     "build": "npm run build:types && npm run build:src",
29 |     "build:src": "node esbuild.js",
30 |     "build:types": "tsc src/index.js --skipLibCheck --declaration --allowJs --emitDeclarationOnly --outDir dist",
31 |     "test": "node --test"
32 |   },
33 |   "dependencies": {
34 |     "lru-cache": "^10.2.2",
35 |     "ramda": "^0.30.0",
36 |     "zod": "^3.23.5"
37 |   },
38 |   "devDependencies": {
39 |     "esbuild": "^0.20.2",
40 |     "typescript": "^5.4.5"
41 |   },
42 |   "engines": {
43 |     "node": ">=18"
44 |   }
45 | }
46 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/client/scheduler.js:
--------------------------------------------------------------------------------
 1 | export function checkForRedirectWith ({ fetch }) {
 2 |   return async (url, process) => {
 3 |     const response = await fetch(`${url}?process-id=${process}`, { method: 'GET', redirect: 'manual' })
 4 |     // In an HTTP redirect the Location header is the new url
 5 |     if ([301, 302, 307, 308].includes(response.status)) {
 6 |       return new URL(response.headers.get('Location')).origin
 7 |     }
 8 |     return url
 9 |   }
10 | }
11 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/dal.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | const processCacheEntry = z.object({ url: z.string(), address: z.string() })
 4 | const scheduler = z.object({ url: z.string(), address: z.string(), ttl: z.coerce.number() })
 5 | 
 6 | export const checkForRedirectSchema = z.function()
 7 |   .args(z.string(), z.string())
 8 |   .returns(z.promise(z.string()))
 9 | 
10 | export const getByProcessSchema = z.function()
11 |   .args(z.string())
12 |   .returns(z.promise(processCacheEntry.nullish()))
13 | 
14 | export const setByProcessSchema = z.function()
15 |   .args(z.string(), processCacheEntry, z.number())
16 |   .returns(z.promise(z.any()))
17 | 
18 | export const getByOwnerSchema = z.function()
19 |   .args(z.string())
20 |   .returns(z.promise(scheduler.nullish()))
21 | 
22 | export const setByOwnerSchema = z.function()
23 |   .args(z.string(), z.string(), z.number())
24 |   .returns(z.promise(z.any()))
25 | 
26 | export const loadSchedulerSchema = z.function()
27 |   .args(z.string())
28 |   .returns(z.promise(scheduler))
29 | 
30 | export const loadProcessSchedulerSchema = loadSchedulerSchema
31 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/err.js:
--------------------------------------------------------------------------------
 1 | export class InvalidSchedulerLocationError extends Error {
 2 |   name = 'InvalidSchedulerLocation'
 3 | }
 4 | 
 5 | export class SchedulerTagNotFoundError extends Error {
 6 |   name = 'SchedulerTagNotFound'
 7 | }
 8 | 
 9 | export class TransactionNotFoundError extends Error {
10 |   name = 'TransactionNotFound'
11 | }
12 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/index.browser.js:
--------------------------------------------------------------------------------
 1 | import { connect } from './index.common.js'
 2 | 
 3 | export * from './index.common.js'
 4 | 
 5 | const GRAPHQL_URL = globalThis.GRAPHQL_URL || undefined
 6 | const CACHE_SIZE = globalThis.SCHEDULER_UTILS_CACHE_SIZE || undefined
 7 | const FOLLOW_REDIRECTS = globalThis.SCHEDULER_UTILS_FOLLOW_REDIRECTS === 'true' || undefined
 8 | const GRAPHQL_MAX_RETRIES = globalThis.GRAPHQL_MAX_RETRIES || undefined
 9 | const GRAPHQL_RETRY_BACKOFF = globalThis.GRAPHQL_RETRY_BACKOFF || undefined
10 | 
11 | const { locate, validate, raw } = connect({ GRAPHQL_URL, cacheSize: CACHE_SIZE, followRedirects: FOLLOW_REDIRECTS, GRAPHQL_MAX_RETRIES, GRAPHQL_RETRY_BACKOFF })
12 | 
13 | export { locate, validate, raw }
14 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/index.js:
--------------------------------------------------------------------------------
 1 | import { connect } from './index.common.js'
 2 | 
 3 | export * from './index.common.js'
 4 | 
 5 | const GRAPHQL_URL = process.env.GRAPHQL_URL || undefined
 6 | const CACHE_SIZE = process.env.SCHEDULER_UTILS_CACHE_SIZE || undefined
 7 | const FOLLOW_REDIRECTS = process.env.SCHEDULER_UTILS_FOLLOW_REDIRECTS === 'true' || undefined
 8 | const GRAPHQL_MAX_RETRIES = process.env.GRAPHQL_MAX_RETRIES || undefined
 9 | const GRAPHQL_RETRY_BACKOFF = process.env.GRAPHQL_RETRY_BACKOFF || undefined
10 | 
11 | const { locate, validate, raw } = connect({ GRAPHQL_URL, cacheSize: CACHE_SIZE, followRedirects: FOLLOW_REDIRECTS, GRAPHQL_MAX_RETRIES, GRAPHQL_RETRY_BACKOFF })
12 | 
13 | export { locate, validate, raw }
14 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/raw.js:
--------------------------------------------------------------------------------
 1 | import { getByOwnerSchema, loadSchedulerSchema, setByOwnerSchema } from './dal.js'
 2 | import { InvalidSchedulerLocationError } from './err.js'
 3 | import { trimSlash } from './utils.js'
 4 | 
 5 | export function rawWith ({ loadScheduler, cache }) {
 6 |   loadScheduler = loadSchedulerSchema.implement(loadScheduler)
 7 |   const getByOwner = getByOwnerSchema.implement(cache.getByOwner)
 8 |   const setByOwner = setByOwnerSchema.implement(cache.setByOwner)
 9 |   /**
10 |    * Return the `Scheduler-Location` record for the address
11 |    * or undefined, if it cannot be found
12 |    *
13 |    * @param {string} address - the wallet address used by the Scheduler
14 |    * @returns {Promise<{ url: string } | undefined >} whether the wallet address is Scheduler
15 |    */
16 |   return (address) =>
17 |     getByOwner(address)
18 |       .then((cached) => {
19 |         if (cached) return { url: cached.url }
20 |         return loadScheduler(address)
21 |           .then((scheduler) =>
22 |             setByOwner(address, scheduler.url, scheduler.ttl)
23 |               .then(() => ({ url: trimSlash(scheduler.url) }))
24 |           )
25 |           .catch((err) => {
26 |             if (err instanceof InvalidSchedulerLocationError) return undefined
27 |             /**
28 |              * Unknown error continue to bubble
29 |              */
30 |             throw err
31 |           })
32 |       })
33 | }
34 | 


--------------------------------------------------------------------------------
/scheduler-utils/src/validate.js:
--------------------------------------------------------------------------------
 1 | import { getByOwnerSchema, loadSchedulerSchema, setByOwnerSchema } from './dal.js'
 2 | import { InvalidSchedulerLocationError } from './err.js'
 3 | 
 4 | export function validateWith ({ loadScheduler, cache }) {
 5 |   loadScheduler = loadSchedulerSchema.implement(loadScheduler)
 6 |   const getByOwner = getByOwnerSchema.implement(cache.getByOwner)
 7 |   const setByOwner = setByOwnerSchema.implement(cache.setByOwner)
 8 |   /**
 9 |    * Validate whether the given wallet address is an ao Scheduler
10 |    *
11 |    * @param {string} address - the wallet address used by the Scheduler
12 |    * @returns {Promise<boolean>} whether the wallet address is Scheduler
13 |    */
14 |   return (address) =>
15 |     getByOwner(address)
16 |       .then((cached) => {
17 |         if (cached) return true
18 |         return loadScheduler(address)
19 |           .then((scheduler) => setByOwner(address, scheduler.url, scheduler.ttl))
20 |           .then(() => true)
21 |           .catch((err) => {
22 |             if (err instanceof InvalidSchedulerLocationError) return false
23 |             /**
24 |              * Unknown error continue to bubble
25 |              */
26 |             throw err
27 |           })
28 |       })
29 | }
30 | 


--------------------------------------------------------------------------------
/servers/cu/.dockerignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | npm-debug.log


--------------------------------------------------------------------------------
/servers/cu/.env.example:
--------------------------------------------------------------------------------
1 | NODE_CONFIG_ENV="development"
2 | WALLET="*****"
3 | 


--------------------------------------------------------------------------------
/servers/cu/.gitignore:
--------------------------------------------------------------------------------
 1 | **/node_modules
 2 | **/bin
 3 | **/build
 4 | **/wallets
 5 | **/cache
 6 | **/sindex
 7 | **/.DS_Store
 8 | **/data
 9 | *yalc*
10 | ao-cache*
11 | static/*
12 | !static/.gitkeep
13 | *.heapsnapshot
14 | .loglevel
15 | 


--------------------------------------------------------------------------------
/servers/cu/.nvmrc:
--------------------------------------------------------------------------------
1 | 22


--------------------------------------------------------------------------------
/servers/cu/.postgres/Dockerfile:
--------------------------------------------------------------------------------
1 | # Only used for development purposes
2 | FROM postgres:17
3 | 
4 | ENV POSTGRES_PASSWORD=admin
5 | ENV POSTGRES_USER=admin
6 | ENV POSTGRES_DB=cu
7 | 


--------------------------------------------------------------------------------
/servers/cu/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/servers/cu/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22
 2 | 
 3 | WORKDIR /usr/app
 4 | 
 5 | COPY ./package.json .
 6 | COPY ./package-lock.json .
 7 | COPY ./src ./src
 8 | 
 9 | RUN npm install --omit=dev && \
10 |     mkdir /db/ && \
11 |     mkdir /file-checkpoints/
12 | 
13 | ENV NODE_ENV=production
14 | 
15 | EXPOSE 6363
16 | 
17 | ENTRYPOINT ["npm"]
18 | 
19 | CMD ["run", "start"]
20 | 


--------------------------------------------------------------------------------
/servers/cu/deploy.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | function env (key) {
 4 |   const res = z.string().min(1).safeParse(process.env[key])
 5 |   if (!res.success) {
 6 |     console.error(`Error with ENV VAR: ${key}`)
 7 |     throw res.error
 8 |   }
 9 |   return res.data
10 | }
11 | 
12 | const deploy = async (deployHooksStr) => {
13 |   const deployHooks = z.preprocess(
14 |     (arg) => (typeof arg === 'string' ? arg.split(',').map(str => str.trim()) : arg),
15 |     z.array(z.string().url())
16 |   ).parse(deployHooksStr)
17 | 
18 |   const responses = await Promise.all(deployHooks.map(
19 |     (deployHook) => fetch(deployHook, { method: 'POST' })
20 |       .then((res) => res.json())
21 |       .catch((err) => err)
22 |   ))
23 | 
24 |   console.log('Deploy Responses:', responses)
25 | }
26 | 
27 | deploy(env('DEPLOY_HOOKS'))
28 | 


--------------------------------------------------------------------------------
/servers/cu/nodemon.json:
--------------------------------------------------------------------------------
1 | {
2 |   "watch": ["src"],
3 |   "exec": "node --experimental-wasm-memory64 -r dotenv/config src/app.js",
4 |   "ext": "js",
5 |   "delay": "500",
6 |   "signal": "SIGHUP"
7 | } 


--------------------------------------------------------------------------------
/servers/cu/src/domain/api/healthcheck.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise } from 'hyper-async'
 2 | 
 3 | /**
 4 |  * @typedef Env
 5 |  *
 6 |  * @typedef Result
 7 |  * @property {string} address
 8 |  * @property {number} timestamp
 9 |  *
10 |  * @callback Healthcheck
11 |  * @returns {Promise<Result>} result
12 |  *
13 |  * @param {Env} - the environment
14 |  * @returns {Healthcheck}
15 |  */
16 | export function healthcheckWith (env) {
17 |   return () => {
18 |     return fromPromise(env.walletAddress)()
19 |       .map((address) => ({
20 |         address,
21 |         timestamp: new Date().getTime()
22 |       }))
23 |   }
24 | }
25 | 


--------------------------------------------------------------------------------
/servers/cu/src/domain/api/readResult.js:
--------------------------------------------------------------------------------
 1 | import { omit } from 'ramda'
 2 | import { of } from 'hyper-async'
 3 | 
 4 | import { readStateWith } from './readState.js'
 5 | import { loadMessageMetaWith } from '../lib/loadMessageMeta.js'
 6 | 
 7 | /**
 8 |  * @typedef Env
 9 |  *
10 |  * @typedef Result
11 |  *
12 |  * @typedef ReadResultArgs
13 |  * @property {string} messageTxId
14 |  *
15 |  * @callback ReadResult
16 |  * @param {ReadResultArgs} args
17 |  * @returns {Promise<Result>} result
18 |  *
19 |  * @param {Env} - the environment
20 |  * @returns {ReadResult}
21 |  */
22 | export function readResultWith (env) {
23 |   const loadMessageMeta = loadMessageMetaWith(env)
24 |   const readState = readStateWith(env)
25 | 
26 |   return ({ processId, messageTxId }) => {
27 |     return of({ processId, messageTxId })
28 |       .chain(loadMessageMeta)
29 |       .chain(res => readState({
30 |         processId: res.processId,
31 |         messageId: messageTxId,
32 |         to: res.timestamp,
33 |         /**
34 |          * The ordinate for a scheduled message is it's nonce
35 |          */
36 |         ordinate: `${res.nonce}`,
37 |         /**
38 |          * We know this is a scheduled message, and so has no
39 |          * associated cron.
40 |          *
41 |          * So we explicitly set cron to undefined, for posterity
42 |          */
43 |         cron: undefined,
44 |         needsOnlyMemory: false
45 |       }))
46 |       .map((res) => res.output)
47 |       .map(omit(['Memory']))
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/servers/cu/src/domain/lib/chainEvaluation.test.js:
--------------------------------------------------------------------------------
 1 | /* eslint-disable no-throw-literal */
 2 | import { describe, test } from 'node:test'
 3 | 
 4 | describe.todo('chainEvaluationWith', () => {
 5 |   test.todo('should chain to an existing evaluation stream', () => {})
 6 | 
 7 |   test.todo('should not chain if no pending evaluation stream exists', () => {})
 8 | 
 9 |   test.todo('should reject with a 425 if the cached checkpoint is later than the pending evaluation stream', () => {})
10 | 
11 |   test.todo('should clear the evaluation stream from pending once it is complete', () => {})
12 | })
13 | 


--------------------------------------------------------------------------------
/servers/cu/src/effects/db.js:
--------------------------------------------------------------------------------
 1 | import * as SqliteClient from './sqlite.js'
 2 | import * as PostgresClient from './pg.js'
 3 | 
 4 | /**
 5 |  * Shared db primitives
 6 |  *
 7 |  * TODO: better ways to do this, but this is fine for now, since their use
 8 |  * is encapsulated within the effects
 9 |  */
10 | 
11 | export const [PROCESSES_TABLE, BLOCKS_TABLE, MODULES_TABLE, EVALUATIONS_TABLE, MESSAGES_TABLE, CHECKPOINTS_TABLE, CHECKPOINT_FILES_TABLE] = [
12 |   'processes',
13 |   'blocks',
14 |   'modules',
15 |   'evaluations',
16 |   'messages',
17 |   'checkpoints',
18 |   'checkpoint_files'
19 | ]
20 | 
21 | /**
22 |  * Use a high value unicode character to terminate a range query prefix.
23 |  * This will cause only string with a given prefix to match a range query
24 |  */
25 | export const COLLATION_SEQUENCE_MAX_CHAR = '\u{10FFFF}'
26 | 
27 | /**
28 |  * This technically isn't the smallest char, but it's small enough for our needs
29 |  */
30 | export const COLLATION_SEQUENCE_MIN_CHAR = '0'
31 | 
32 | export async function createDbClient ({ url, ...rest }) {
33 |   if (url.startsWith('postgres://')) {
34 |     return PostgresClient.createPostgresClient({ url, ssl: { rejectUnauthorized: false }, ...rest })
35 |   }
36 | 
37 |   return SqliteClient.createSqliteClient({ url: `${url}.sqlite`, ...rest })
38 | }
39 | 


--------------------------------------------------------------------------------
/servers/cu/src/effects/worker/evaluator/main.js:
--------------------------------------------------------------------------------
 1 | import * as WasmClient from '../../wasm.js'
 2 | import * as AoEvaluationClient from '../../ao-evaluation.js'
 3 | import * as DbClient from '../../db.js'
 4 | 
 5 | import { evaluateWith } from '../evaluate.js'
 6 | 
 7 | export const createApis = async (ctx) => {
 8 |   const db = await DbClient.createDbClient({ url: ctx.DB_URL, bootstrap: false, max: 5 })
 9 |   const wasmInstanceCache = WasmClient.createWasmInstanceCache({ MAX_SIZE: ctx.WASM_INSTANCE_CACHE_MAX_SIZE })
10 | 
11 |   const close = async (streamId) => wasmInstanceCache.delete(streamId)
12 | 
13 |   const evaluate = evaluateWith({
14 |     wasmInstanceCache,
15 |     addExtension: WasmClient.addExtensionWith({
16 |       ARWEAVE_URL: ctx.ARWEAVE_URL,
17 |       GRAPHQL_URL: ctx.GRAPHQL_URL,
18 |       CHECKPOINT_GRAPHQL_URL: ctx.CHECKPOINT_GRAPHQL_URL
19 |     }),
20 |     bootstrapWasmInstance: WasmClient.bootstrapWasmInstanceWith(),
21 |     saveEvaluation: AoEvaluationClient.saveEvaluationWith({
22 |       DISABLE_PROCESS_EVALUATION_CACHE: ctx.DISABLE_PROCESS_EVALUATION_CACHE,
23 |       db,
24 |       logger: ctx.logger
25 |     }),
26 |     ARWEAVE_URL: ctx.ARWEAVE_URL,
27 |     logger: ctx.logger
28 |   })
29 | 
30 |   return { evaluate, close }
31 | }
32 | 


--------------------------------------------------------------------------------
/servers/cu/src/effects/worker/hashChain/index.js:
--------------------------------------------------------------------------------
1 | import { worker } from 'workerpool'
2 | 
3 | import { hashChain } from './main.js'
4 | 
5 | /**
6 |  * Expose worker api
7 |  */
8 | worker({ hashChain })
9 | 


--------------------------------------------------------------------------------
/servers/cu/src/effects/worker/hashChain/main.js:
--------------------------------------------------------------------------------
 1 | import { createHash } from 'node:crypto'
 2 | 
 3 | const base64UrlToBytes = (b64Url) =>
 4 |   Buffer.from(b64Url, 'base64url')
 5 | 
 6 | export const hashChain = (prevHashChain, prevAssignmentId) => {
 7 |   const hash = createHash('sha256')
 8 |   /**
 9 |      * For the very first message, there is no previous id,
10 |      * so it is not included in the hashed bytes, to produce the very first
11 |      * hash chain
12 |      */
13 |   if (prevAssignmentId) hash.update(base64UrlToBytes(prevAssignmentId))
14 |   /**
15 |      * Always include the previous hash chain
16 |      */
17 |   hash.update(base64UrlToBytes(prevHashChain))
18 |   return hash.digest('base64url')
19 | }
20 | 


--------------------------------------------------------------------------------
/servers/cu/src/logger.js:
--------------------------------------------------------------------------------
 1 | import { hostname } from 'node:os'
 2 | 
 3 | import { createLogger } from './domain/logger.js'
 4 | import { config } from './config.js'
 5 | 
 6 | export const logger = createLogger({
 7 |   MODE: config.MODE,
 8 |   LOG_CONFIG_PATH: config.LOG_CONFIG_PATH,
 9 |   DEFAULT_LOG_LEVEL: config.DEFAULT_LOG_LEVEL,
10 |   name: `ao-cu:${hostname()}`
11 | })
12 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/healthcheck.js:
--------------------------------------------------------------------------------
 1 | import { always, compose } from 'ramda'
 2 | 
 3 | import { withMiddleware } from './middleware/index.js'
 4 | 
 5 | export const withHealthcheckRoutes = (app) => {
 6 |   // healthcheck
 7 |   app.get(
 8 |     '/',
 9 |     compose(
10 |       withMiddleware,
11 |       always(async (req, res) => {
12 |         const { domain: { apis: { healthcheck } } } = req
13 | 
14 |         await healthcheck()
15 |           .map((hc) => res.send(hc))
16 |           .toPromise()
17 |       })
18 |     )()
19 |   )
20 | 
21 |   return app
22 | }
23 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/index.js:
--------------------------------------------------------------------------------
 1 | import { pipe } from 'ramda'
 2 | 
 3 | import { withStateRoutes } from './state.js'
 4 | import { withResultRoutes } from './result.js'
 5 | import { withDryRunRoutes } from './dryRun.js'
 6 | import { withResultsRoutes } from './results.js'
 7 | import { withCronRoutes } from './cron.js'
 8 | import { withHealthcheckRoutes } from './healthcheck.js'
 9 | import { withMetricRoutes } from './metrics.js'
10 | 
11 | export const withRoutes = pipe(
12 |   withHealthcheckRoutes,
13 |   withStateRoutes,
14 |   withResultRoutes,
15 |   withDryRunRoutes,
16 |   withResultsRoutes,
17 |   withCronRoutes,
18 |   withMetricRoutes
19 | )
20 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/metrics.js:
--------------------------------------------------------------------------------
 1 | import { always, compose } from 'ramda'
 2 | import { withMiddleware } from './middleware/index.js'
 3 | 
 4 | import { config } from '../config.js'
 5 | 
 6 | export const withMetricRoutes = (app) => {
 7 |   if (!config.ENABLE_METRICS_ENDPOINT) return app
 8 | 
 9 |   app.get(
10 |     '/metrics',
11 |     compose(
12 |       withMiddleware,
13 |       always(async (req, res) => {
14 |         const {
15 |           domain: { apis: { metrics } }
16 |         } = req
17 | 
18 |         await metrics.compute()
19 |           .toPromise()
20 |           .then((output) => {
21 |             res.type(metrics.contentType)
22 |             res.send(output)
23 |           })
24 |       })
25 |     )()
26 |   )
27 | 
28 |   return app
29 | }
30 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/middleware/index.js:
--------------------------------------------------------------------------------
 1 | import { compose } from 'ramda'
 2 | 
 3 | import { withErrorHandler } from './withErrorHandler.js'
 4 | import { withDomain } from './withDomain.js'
 5 | 
 6 | export * from './withProcessRestriction.js'
 7 | export * from './withMetrics.js'
 8 | export * from './withCuMode.js'
 9 | 
10 | /**
11 |  * A convenience method that composes common middleware needed on most routes,
12 |  * such that other routes can simply compose this one middleware.
13 |  */
14 | export const withMiddleware = compose(
15 |   withDomain,
16 |   withErrorHandler
17 | )
18 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/middleware/withCuMode.js:
--------------------------------------------------------------------------------
 1 | import { config } from '../../config.js'
 2 | 
 3 | const withUnitMode = (mode) => (handler) => (req, res, next) => {
 4 |   const { UNIT_MODE } = config
 5 | 
 6 |   if (UNIT_MODE !== mode) return res.status(404).send('Not Found')
 7 | 
 8 |   return handler(req, res, next)
 9 | }
10 | 
11 | export const withCuMode = withUnitMode('cu')
12 | export const withRuMode = withUnitMode('ru')
13 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/middleware/withErrorHandler.js:
--------------------------------------------------------------------------------
 1 | import { errFrom } from '../../domain/utils.js'
 2 | 
 3 | /**
 4 |  * A middleware that simply calls the next handler in the chain.
 5 |  *
 6 |  * If no errors are thrown, then this middleware simply returns the response.
 7 |  * If an error is thrown, it is caught, logged, then used to respond to the request.
 8 |  *
 9 |  * This is useful for handling thrown errors, and prevents having to call
10 |  * next explictly. Instead, a more idiomatic thrown error can be used in subsequent handlers
11 |  */
12 | export const withErrorHandler = (handler) => (req, res) => {
13 |   return Promise.resolve()
14 |     .then(() => handler(req, res))
15 |     .catch((err) => {
16 |       const { domain: { logger } } = req
17 | 
18 |       logger('An error bubbled to the top handler. Formatting and relaying to client:', err)
19 |       const formatted = errFrom(err)
20 |       if (res.raw.writableEnded) return
21 | 
22 |       res.status(err.status || 500).send({ error: formatted.message || 'Internal Server Error' })
23 |     })
24 | }
25 | 


--------------------------------------------------------------------------------
/servers/cu/src/routes/middleware/withProcessRestriction.js:
--------------------------------------------------------------------------------
 1 | const withProcessRestrictionFrom = ({ extractor }) => (handler) => (req, res, next) => {
 2 |   const {
 3 |     domain: {
 4 |       RESTRICT_PROCESSES,
 5 |       ALLOW_PROCESSES
 6 |     }
 7 |   } = req
 8 | 
 9 |   const processId = extractor(req)
10 | 
11 |   if (RESTRICT_PROCESSES && RESTRICT_PROCESSES.includes(processId)) return res.status(403).send({ error: `Access denied for process ${processId}` })
12 |   if (ALLOW_PROCESSES && ALLOW_PROCESSES.length > 0 && !ALLOW_PROCESSES.includes(processId)) return res.status(403).send({ error: `Access denied for process ${processId}` })
13 | 
14 |   return handler(req, res, next)
15 | }
16 | 
17 | export const withProcessRestrictionFromPath = withProcessRestrictionFrom({ extractor: (req) => req.params.processId })
18 | export const withProcessRestrictionFromQuery = withProcessRestrictionFrom({ extractor: (req) => req.query['process-id'] })
19 | 


--------------------------------------------------------------------------------
/servers/cu/static/.gitkeep:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/cu/static/.gitkeep


--------------------------------------------------------------------------------
/servers/cu/test/processes/.gitignore:
--------------------------------------------------------------------------------
1 | process.js


--------------------------------------------------------------------------------
/servers/cu/test/processes/happy/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/cu/test/processes/happy/process.wasm


--------------------------------------------------------------------------------
/servers/cu/test/processes/sad/process.wasm:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/cu/test/processes/sad/process.wasm


--------------------------------------------------------------------------------
/servers/mu/.dockerignore:
--------------------------------------------------------------------------------
1 | node_modules/
2 | npm-debug.log


--------------------------------------------------------------------------------
/servers/mu/.env.example:
--------------------------------------------------------------------------------
1 | PORT=3004
2 | CU_URL="https://cu.ao-testnet.xyz"
3 | NODE_CONFIG_ENV="development"
4 | DEBUG=*
5 | PATH_TO_WALLET="/home/wallet.json"


--------------------------------------------------------------------------------
/servers/mu/.gitignore:
--------------------------------------------------------------------------------
 1 | **/node_modules
 2 | **/bin
 3 | **/build
 4 | **/wallets
 5 | **/cache
 6 | **/sindex
 7 | **/.DS_Store
 8 | **/data
 9 | *yalc*
10 | ao-cache*
11 | trace.sqlite*
12 | wallet.json
13 | .wallet.json
14 | procs.json
15 | custom-cu-map.json


--------------------------------------------------------------------------------
/servers/mu/.postgres/Dockerfile:
--------------------------------------------------------------------------------
1 | FROM postgres:16
2 | 


--------------------------------------------------------------------------------
/servers/mu/.postgres/postgres.conf:
--------------------------------------------------------------------------------
1 | POSTGRES_PASSWORD=admin
2 | POSTGRES_USER=admin
3 | POSTGRES_DB=mu


--------------------------------------------------------------------------------
/servers/mu/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22
 2 | 
 3 | RUN apt update && apt install -y bash git awscli
 4 | 
 5 | WORKDIR /usr/app
 6 | 
 7 | COPY ./package.json .
 8 | COPY ./package-lock.json .
 9 | COPY ./src ./src
10 | 
11 | RUN mkdir /usr/app/mu-data/
12 | 
13 | RUN npm install --ignore-engines
14 | 
15 | EXPOSE 3005
16 | 
17 | CMD ["node", "src/app.js"]
18 | 


--------------------------------------------------------------------------------
/servers/mu/deploy.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | function env (key) {
 4 |   const res = z.string().min(1).safeParse(process.env[key])
 5 |   if (!res.success) {
 6 |     console.error(`Error with ENV VAR: ${key}`)
 7 |     throw res.error
 8 |   }
 9 |   return res.data
10 | }
11 | 
12 | const deploy = async (deployHooksStr) => {
13 |   const deployHooks = z.preprocess(
14 |     (arg) => (typeof arg === 'string' ? arg.split(',').map(str => str.trim()) : arg),
15 |     z.array(z.string().url())
16 |   ).parse(deployHooksStr)
17 | 
18 |   const responses = await Promise.all(deployHooks.map(
19 |     (deployHook) => fetch(deployHook, { method: 'POST' })
20 |       .then((res) => res.json())
21 |       .catch((err) => err)
22 |   ))
23 | 
24 |   console.log('Deploy Responses:', responses)
25 | }
26 | 
27 | deploy(env('DEPLOY_HOOKS'))
28 | 


--------------------------------------------------------------------------------
/servers/mu/entrypoint.sh:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env bash
 2 | 
 3 | # make a wallet.json file from secrets-manager
 4 | aws secretsmanager get-secret-value --secret-id ao-wallet --query SecretString --output text > wallet.json
 5 | 
 6 | # make a .env file
 7 | echo "PATH_TO_WALLET=wallet.json" >> .env
 8 | 
 9 | # start the server
10 | node -r dotenv/config src/app.js


--------------------------------------------------------------------------------
/servers/mu/nodemon.json:
--------------------------------------------------------------------------------
1 | {
2 |   "watch": ["src"],
3 |   "exec": "node -r dotenv/config src/app.js",
4 |   "ext": "js",
5 |   "delay": "500",
6 |   "signal": "SIGHUP"
7 | } 


--------------------------------------------------------------------------------
/servers/mu/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao-mu",
 3 |   "version": "1.0.0",
 4 |   "description": "A Node Express server that implements the ao Messenger Unit specification",
 5 |   "keywords": [
 6 |     "express",
 7 |     "web",
 8 |     "server"
 9 |   ],
10 |   "license": "MIT",
11 |   "author": "VinceJuliano",
12 |   "type": "module",
13 |   "main": "src/app.js",
14 |   "scripts": {
15 |     "dev": "nodemon",
16 |     "docker-build": "docker build -t cu-app .",
17 |     "docker-run": "npm run docker-build && docker run -p 3005:3005 cu-app",
18 |     "start": "node -r dotenv/config src/app.js",
19 |     "test": "node --test"
20 |   },
21 |   "dependencies": {
22 |     "@permaweb/ao-scheduler-utils": "^0.0.25",
23 |     "arbundles": "0.11.0",
24 |     "arweave": "^1.14.4",
25 |     "async-mutex": "^0.5.0",
26 |     "better-sqlite3": "^11.1.2",
27 |     "cors": "^2.8.5",
28 |     "debug": "^4.3.4",
29 |     "dotenv": "^16.3.1",
30 |     "express": "^4.18.2",
31 |     "http-message-signatures": "^1.0.4",
32 |     "hyper-async": "^1.1.2",
33 |     "lru-cache": "^10.2.0",
34 |     "node-cron": "^3.0.3",
35 |     "p-map": "^7.0.1",
36 |     "prom-client": "^15.1.2",
37 |     "pubsub-js": "^1.9.4",
38 |     "ramda": "^0.29.1",
39 |     "warp-arbundles": "^1.0.4",
40 |     "workerpool": "^9.1.1",
41 |     "zod": "^3.22.4"
42 |   },
43 |   "devDependencies": {
44 |     "@types/node": "^20.12.7",
45 |     "nodemon": "^3.0.1"
46 |   },
47 |   "engines": {
48 |     "node": "22"
49 |   }
50 | }
51 | 


--------------------------------------------------------------------------------
/servers/mu/src/app.js:
--------------------------------------------------------------------------------
 1 | import express from 'express'
 2 | import cors from 'cors'
 3 | import { pipe } from 'ramda'
 4 | 
 5 | import { logger } from './logger.js'
 6 | import { config } from './config.js'
 7 | import { withRoutes } from './routes/index.js'
 8 | import { domain } from './routes/middleware/withDomain.js'
 9 | 
10 | export const server = pipe(
11 |   (app) => app.use(cors()),
12 |   (app) => app.use(express.json({ type: 'application/json' })),
13 |   (app) => app.use(express.raw({ type: 'application/octet-stream', limit: '10mb' })),
14 |   withRoutes,
15 |   (app) => {
16 |     const server = app.listen(config.port, () => {
17 |       logger({ log: `Server is running on http://localhost:${config.port}` })
18 |     })
19 | 
20 |     process.on('SIGTERM', () => {
21 |       logger({ log: 'Received SIGTERM. Gracefully shutting down server...' })
22 |       server.close(() => {
23 |         logger({ log: 'Server Shut Down' })
24 |         process.exit()
25 |       })
26 |     })
27 | 
28 |     domain.apis.initCronProcs().then(() => {
29 |       logger({ log: 'Crons initialized' })
30 |     })
31 | 
32 |     domain.apis.startMessageRecoveryCron().then(() => {
33 |       logger({ log: 'Message recovery cron started' })
34 |     }).catch((err) => {
35 |       logger({ log: `Error starting message recovery cron: ${err}`, end: true })
36 |     })
37 | 
38 |     return server
39 |   }
40 | )(express())
41 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/api/monitorProcess.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | 
 3 | import { parseDataItemWith } from '../lib/parse-data-item.js'
 4 | import { startWith } from '../lib/start-process.js'
 5 | 
 6 | export function monitorProcessWith ({
 7 |   logger,
 8 |   createDataItem,
 9 |   startProcessMonitor
10 | }) {
11 |   const parseDataItem = parseDataItemWith({ createDataItem, logger })
12 |   const start = startWith({ logger, startProcessMonitor })
13 | 
14 |   return (ctx) => {
15 |     return of(ctx)
16 |       .chain(parseDataItem)
17 |       .chain(start)
18 |   }
19 | }
20 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/api/stopMonitorProcess.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | 
 3 | import { parseDataItemWith } from '../lib/parse-data-item.js'
 4 | import { stopWith } from '../lib/stop-process.js'
 5 | 
 6 | export function stopMonitorProcessWith ({
 7 |   logger,
 8 |   createDataItem,
 9 |   stopProcessMonitor
10 | }) {
11 |   const parseDataItem = parseDataItemWith({ createDataItem, logger })
12 |   const stop = stopWith({ logger, stopProcessMonitor })
13 | 
14 |   return (ctx) => {
15 |     return of(ctx)
16 |       .chain(parseDataItem)
17 |       .chain(stop)
18 |   }
19 | }
20 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/clients/in-memory.js:
--------------------------------------------------------------------------------
 1 | import { LRUCache } from 'lru-cache'
 2 | 
 3 | /**
 4 |  * @type {LRUCache}
 5 |  */
 6 | export function createLruCache ({ size, ttl }) {
 7 |   const cache = new LRUCache({
 8 |     /**
 9 |      * number of entries
10 |      */
11 |     max: size,
12 |     ttl,
13 |     /**
14 |      * max size of cache, as a scalar.
15 |      *
16 |      * In our case, characters (see sizeCalculation)
17 |      */
18 |     maxSize: 1_000_000 * 5,
19 |     /**
20 |      * Simply stringify to get the bytes
21 |      */
22 |     sizeCalculation: (v) => JSON.stringify(v).length,
23 |     allowStale: true
24 |   })
25 |   return cache
26 | }
27 | 
28 | export function getByProcessWith ({ cache }) {
29 |   return async (processId) => {
30 |     if (!cache.max) return
31 |     return cache.get(processId)
32 |   }
33 | }
34 | 
35 | export function setByProcessWith ({ cache }) {
36 |   return async (processId, processData) => {
37 |     if (!cache.max) return
38 |     return cache.set(processId, processData)
39 |   }
40 | }
41 | 
42 | export function getByIdWith ({ cache }) {
43 |   return async (id) => {
44 |     if (!cache.max) return
45 |     return cache.get(id)
46 |   }
47 | }
48 | 
49 | export function setByIdWith ({ cache }) {
50 |   return async (id, val) => {
51 |     if (!cache.max) return
52 |     return cache.set(id, val)
53 |   }
54 | }
55 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/clients/signer.js:
--------------------------------------------------------------------------------
 1 | import pkg from 'warp-arbundles'
 2 | const { createData, ArweaveSigner } = pkg
 3 | 
 4 | function buildAndSignWith ({ MU_WALLET }) {
 5 |   /**
 6 |    * @name buildAndSign
 7 |    * Given some metadata, create a signed data item.
 8 |    *
 9 |    * @param processId
10 |    * @param data
11 |    * @param tags
12 |    * @param anchor
13 |    *
14 |    * @returns id - the data item's id
15 |    * @returns data - the data item's raw data as a buffer array
16 |    * @returns processId
17 |    */
18 |   return async ({ processId, data, tags, anchor }) => {
19 |     data = data || ' ' // If no data, send a single space
20 |     const signer = new ArweaveSigner(MU_WALLET)
21 | 
22 |     const interactionDataItem = createData(data, signer, { target: processId, anchor, tags })
23 |     await interactionDataItem.sign(signer)
24 |     return {
25 |       id: await interactionDataItem.id,
26 |       data: interactionDataItem.getRaw(),
27 |       processId
28 |     }
29 |   }
30 | }
31 | 
32 | export default {
33 |   buildAndSignWith
34 | }
35 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/get-cu-address.js:
--------------------------------------------------------------------------------
 1 | import { of, fromPromise } from 'hyper-async'
 2 | import z from 'zod'
 3 | import { __, assoc, identity } from 'ramda'
 4 | 
 5 | const ctxSchema = z.object({
 6 |   cuAddress: z.string()
 7 | }).passthrough()
 8 | 
 9 | export function getCuAddressWith ({ selectNode, logger }) {
10 |   return (ctx) => {
11 |     return of({ processId: ctx.tx.processId, logId: ctx.logId })
12 |       .chain(fromPromise(selectNode))
13 |       .map(assoc('cuAddress', __, ctx))
14 |       .map(ctxSchema.parse)
15 |       .bimap(
16 |         (e) => {
17 |           return new Error(e, { cause: ctx })
18 |         },
19 |         identity
20 |       )
21 |       .map(logger.tap({ log: 'Added cuAddress to ctx' }))
22 |   }
23 | }
24 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/get-cu-address.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { getCuAddressWith } from './get-cu-address.js'
 5 | 
 6 | const logger = () => undefined
 7 | logger.tap = () => (args) => {
 8 |   return args
 9 | }
10 | 
11 | // selectNode doesnt return processId just here for testing
12 | async function selectNode ({ processId }) {
13 |   return processId
14 | }
15 | 
16 | describe('getCuAddress', () => {
17 |   test('select a cu address by process id', async () => {
18 |     const getCuAddress = getCuAddressWith({
19 |       selectNode,
20 |       logger
21 |     })
22 | 
23 |     const result = await getCuAddress({
24 |       tx: {
25 |         processId: 'id-1'
26 |       }
27 |     }).toPromise()
28 | 
29 |     assert.equal(result.cuAddress, 'id-1')
30 |   })
31 | })
32 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/parse-data-item.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { parseDataItemWith } from './parse-data-item.js'
 5 | 
 6 | const logger = () => undefined
 7 | logger.tap = () => (args) => {
 8 |   return args
 9 | }
10 | 
11 | describe('parseDataItem', () => {
12 |   test('parse data item into tx object', async () => {
13 |     const raw1 = Buffer.alloc(0)
14 |     const item1 = {
15 |       id: Promise.resolve('id-1'),
16 |       signature: 'foobar',
17 |       owner: 'owner-1',
18 |       target: 'target-1',
19 |       anchor: 'foobar',
20 |       tags: [
21 |         { name: 'Foo', value: 'Bar' }
22 |       ]
23 |     }
24 |     const parseDataItem = parseDataItemWith({
25 |       createDataItem: (raw) => {
26 |         assert.deepStrictEqual(raw, raw1)
27 |         return item1
28 |       },
29 |       logger
30 |     })
31 | 
32 |     const result = await parseDataItem({
33 |       raw: raw1
34 |     }).toPromise()
35 | 
36 |     assert.equal(result.tx.id, 'id-1')
37 |     assert.equal(result.tx.processId, 'target-1')
38 |     assert.deepStrictEqual(result.tx.data, raw1)
39 | 
40 |     assert.deepStrictEqual(result.dataItem, {
41 |       id: 'id-1',
42 |       signature: 'foobar',
43 |       owner: 'owner-1',
44 |       target: 'target-1',
45 |       anchor: 'foobar',
46 |       tags: [
47 |         { name: 'Foo', value: 'Bar' }
48 |       ]
49 |     })
50 |   })
51 | })
52 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/resolve-scheduler.js:
--------------------------------------------------------------------------------
 1 | import { of } from 'hyper-async'
 2 | //  import { __, assoc } from 'ramda'
 3 | // import z from 'zod'
 4 | 
 5 | // const ctxSchema = z.object({
 6 | 
 7 | // }).passthrough()
 8 | 
 9 | export function resolveSchedulerWith (env) {
10 |   const { logger } = env
11 |   return (ctx) => {
12 |     return of(ctx)
13 |       .map(logger.tap({ log: 'Resolved Scheduler' }))
14 |   }
15 | }
16 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/resolve-scheduler.test.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/mu/src/domain/lib/resolve-scheduler.test.js


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/send-spawn-success.js:
--------------------------------------------------------------------------------
 1 | import { of, fromPromise, Resolved } from 'hyper-async'
 2 | import { __, assoc, identity } from 'ramda'
 3 | import z from 'zod'
 4 | import { checkStage } from '../utils.js'
 5 | import { locateProcessSchema } from '../dal.js'
 6 | 
 7 | const ctxSchema = z.object({
 8 |   spawnSuccessSequencerTx: z.any()
 9 | }).passthrough()
10 | 
11 | export function sendSpawnSuccessWith (env) {
12 |   let { logger, writeDataItem, locateProcess } = env
13 | 
14 |   locateProcess = fromPromise(locateProcessSchema.implement(locateProcess))
15 | 
16 |   return (ctx) => {
17 |     if (!checkStage('send-spawn-success')(ctx)) return Resolved(ctx)
18 |     return of(ctx.cachedSpawn.processId)
19 |       .chain(locateProcess)
20 |       .map((schedulerResult) => { return { suUrl: schedulerResult.url, data: ctx.spawnSuccessTx.data.toString('base64'), logId: ctx.logId } })
21 |       .chain(fromPromise(writeDataItem))
22 |       .chain(
23 |         (result) => {
24 |           return of(result)
25 |             .map(assoc('spawnSuccessSequencerTx', __, ctx))
26 |             .map(ctxSchema.parse)
27 |             .map(logger.tap({ log: 'Added spawnSuccessSequencerTx to ctx' }))
28 |         }
29 |       )
30 |       .bimap(
31 |         (error) => {
32 |           console.error('writeDataItem failed. Recovering and returning original ctx.', error)
33 |           return new Error(error, { cause: ctx })
34 |         },
35 |         identity
36 |       )
37 |   }
38 | }
39 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/send-spawn-success.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { sendSpawnSuccessWith } from './send-spawn-success.js'
 5 | 
 6 | const logger = () => undefined
 7 | logger.tap = () => (args) => {
 8 |   return args
 9 | }
10 | 
11 | describe('sendSpawnSucess', () => {
12 |   test('send spawn success msg', async () => {
13 |     const spawnSucessTx1 = {
14 |       data: Buffer.alloc(0)
15 |     }
16 | 
17 |     const sendSpawnSucess = sendSpawnSuccessWith({
18 |       writeDataItem: async (data) => {
19 |         assert.deepStrictEqual(data.data, spawnSucessTx1.data.toString('base64'))
20 |         assert.deepStrictEqual(data.suUrl, 'su-url-1')
21 |         return {
22 |           id: 'id-1',
23 |           timestamp: 1234567,
24 |           block: 1234567
25 |         }
26 |       },
27 |       locateProcess: async (_processId) => {
28 |         return { url: 'su-url-1' }
29 |       },
30 |       logger
31 |     })
32 | 
33 |     const result = await sendSpawnSucess({
34 |       spawnSuccessTx: spawnSucessTx1,
35 |       cachedSpawn: {
36 |         processId: 'pid-1'
37 |       }
38 |     }).toPromise()
39 | 
40 |     assert.equal(result.spawnSuccessSequencerTx.id, 'id-1')
41 |   })
42 | })
43 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/start-process.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | import { __, assoc } from 'ramda'
 3 | import { startProcessMonitorSchema } from '../dal.js'
 4 | 
 5 | export function startWith ({ startProcessMonitor }) {
 6 |   const start = fromPromise(startProcessMonitorSchema.implement(startProcessMonitor))
 7 |   return (ctx) => {
 8 |     return of(ctx.tx)
 9 |       .map(assoc('id', ctx.tx.processId, __))
10 |       .chain(start)
11 |       .map(() => ctx)
12 |   }
13 | }
14 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/start-process.test.js:
--------------------------------------------------------------------------------
 1 | import { describe, test } from 'node:test'
 2 | import * as assert from 'node:assert'
 3 | 
 4 | import { startWith } from './start-process.js'
 5 | 
 6 | const logger = () => undefined
 7 | logger.tap = () => (args) => {
 8 |   return args
 9 | }
10 | 
11 | describe('startWith', () => {
12 |   test('start a process monitor', async () => {
13 |     const start = startWith({
14 |       startProcessMonitor: async ({ processId }) => {
15 |         assert.equal(processId, 'pid-1')
16 |       },
17 |       logger
18 |     })
19 | 
20 |     await start({
21 |       tx: {
22 |         processId: 'pid-1'
23 |       }
24 |     }).toPromise()
25 |   })
26 | })
27 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/stop-process.js:
--------------------------------------------------------------------------------
 1 | import { fromPromise, of } from 'hyper-async'
 2 | import { __, assoc } from 'ramda'
 3 | import { killMonitoredProcessSchema } from '../dal.js'
 4 | 
 5 | export function stopWith ({ stopProcessMonitor }) {
 6 |   const stop = fromPromise(killMonitoredProcessSchema.implement(stopProcessMonitor))
 7 |   return (ctx) => {
 8 |     return of(ctx.tx)
 9 |       .map(assoc('id', ctx.tx.processId, __))
10 |       .chain(stop)
11 |       .map(() => ctx)
12 |   }
13 | }
14 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/with-timer-metrics-fetch.js:
--------------------------------------------------------------------------------
 1 | // import { logger } from '../../logger.js'
 2 | import { withTimerMetrics } from './with-timer-metrics.js'
 3 | import { always } from 'ramda'
 4 | 
 5 | export const withTimerMetricsFetch = ({
 6 |   timer,
 7 |   fetch,
 8 |   startLabelsFrom = always({}),
 9 |   stopLabelsFrom = always({}),
10 |   tracesFrom = always({}),
11 |   logger
12 | }) => withTimerMetrics({
13 |   timer,
14 |   startLabelsFrom: (_url, fetchOptions = {}) => {
15 |     return {
16 |       ...startLabelsFrom(_url, fetchOptions),
17 |       method: fetchOptions.method ?? 'GET' // not passing method to fetch options defaults to a GET request
18 |     }
19 |   },
20 |   stopLabelsFrom: (res) => {
21 |     if (res instanceof Response === false) {
22 |       let errorType = ''
23 |       switch (true) {
24 |         case res instanceof DOMException:
25 |           errorType = res.name
26 |           break
27 |         case res instanceof TypeError:
28 |           errorType = 'typeError'
29 |           break
30 |         default:
31 |           errorType = 'unknownError'
32 |           break
33 |       }
34 |       return {
35 |         ...stopLabelsFrom(res),
36 |         errorType
37 |       }
38 |     }
39 |     return {
40 |       ...stopLabelsFrom(res),
41 |       status: res.status,
42 |       statusGroup: `${Math.floor(res.status / 100)}xx`
43 |     }
44 |   },
45 |   tracesFrom,
46 |   logger: logger.child('ao-mu-metrics')
47 | })(fetch)
48 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/write-assign.js:
--------------------------------------------------------------------------------
 1 | import { Resolved, fromPromise } from 'hyper-async'
 2 | import z from 'zod'
 3 | import { checkStage } from '../utils.js'
 4 | import { writeAssignmentSchema } from '../dal.js'
 5 | 
 6 | const ctxSchema = z.object({
 7 |   tx: z.object({
 8 |     id: z.string(),
 9 |     processId: z.string()
10 |   }).passthrough()
11 | }).passthrough()
12 | 
13 | export function writeAssignWith (env) {
14 |   let { logger, writeAssignment } = env
15 | 
16 |   writeAssignment = fromPromise(writeAssignmentSchema.implement(writeAssignment))
17 | 
18 |   return (ctx) => {
19 |     if (!checkStage('write-assign')(ctx)) return Resolved(ctx)
20 |     return writeAssignment({
21 |       suUrl: ctx.schedLocation.url,
22 |       txId: ctx.assign.txId,
23 |       processId: ctx.assign.processId,
24 |       baseLayer: ctx.assign.baseLayer,
25 |       exclude: ctx.assign.exclude,
26 |       logId: ctx.logId
27 |     })
28 |     /*
29 |             return the tx in this shape so we can pull
30 |             the result on it from the cu
31 |         */
32 |       .map((suRes) => {
33 |         return {
34 |           ...ctx,
35 |           tx: {
36 |             id: suRes.id,
37 |             processId: ctx.assign.processId
38 |           }
39 |         }
40 |       })
41 |       .map(ctxSchema.parse)
42 |       .bimap(
43 |         (e) => {
44 |           return new Error(e, { cause: ctx })
45 |         },
46 |         logger.tap({ log: 'Added "tx" to ctx' })
47 |       )
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/lib/write-assign.test.js:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/mu/src/domain/lib/write-assign.test.js


--------------------------------------------------------------------------------
/servers/mu/src/domain/logger.js:
--------------------------------------------------------------------------------
 1 | import { traceWith } from './clients/tracer.js'
 2 | import * as SqliteClient from './clients/sqlite.js'
 3 | 
 4 | export const createLogger = async ({ namespace, config, activeTraces }) => {
 5 |   const db = await SqliteClient.createSqliteClient({ url: `${config.TRACE_DB_URL}.sqlite`, bootstrap: false, type: 'traces' })
 6 |   return traceWith({ namespace, db, TRACE_DB_URL: config.TRACE_DB_URL, activeTraces, DISABLE_TRACE: config.DISABLE_TRACE })
 7 | }
 8 | 
 9 | export default createLogger
10 | 


--------------------------------------------------------------------------------
/servers/mu/src/domain/model.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | export const rawTagSchema = z.object({
 4 |   name: z.string(),
 5 |   value: z.string()
 6 | })
 7 | 
 8 | export const tagArraySchema = z.array(rawTagSchema)
 9 | 
10 | export const bufferSchema = z.any().refine(buffer => {
11 |   return buffer instanceof ArrayBuffer ||
12 |     ArrayBuffer.isView(buffer) ||
13 |     Buffer.isBuffer(buffer)
14 | }, { message: 'Value must implement the buffer protocol' })
15 | 
16 | export const processOwnerSchema = z.object({
17 |   address: z.string(),
18 |   key: z.string()
19 | })
20 | 
21 | export const messageSchema = z.object({
22 |   Tags: tagArraySchema,
23 |   Target: z.string().nullish(),
24 |   Anchor: z.string().nullish(),
25 |   Data: z.any().nullish()
26 | })
27 | export const messageArraySchema = z.array(messageSchema)
28 | 
29 | export const spawnSchema = z.object({
30 |   Tags: tagArraySchema,
31 |   Anchor: z.string(),
32 |   Data: z.any().nullish()
33 | })
34 | export const spawnArraySchema = z.array(spawnSchema)
35 | 
36 | export const assignmentSchema = z.object({
37 |   Processes: z.array(z.string()),
38 |   Message: z.string()
39 | })
40 | export const assignmentArraySchema = z.array(assignmentSchema)
41 | 


--------------------------------------------------------------------------------
/servers/mu/src/logger.js:
--------------------------------------------------------------------------------
 1 | import { createLogger } from './domain/logger.js'
 2 | import { domainConfigSchema, config } from './config.js'
 3 | 
 4 | const activeTraces = new Map()
 5 | export const logger = await createLogger({
 6 |   namespace: 'ao-mu',
 7 |   config: domainConfigSchema.parse(config),
 8 |   activeTraces
 9 | })
10 | 


--------------------------------------------------------------------------------
/servers/mu/src/routes/index.js:
--------------------------------------------------------------------------------
 1 | import { pipe } from 'ramda'
 2 | 
 3 | import { withRootRoutes } from './root.js'
 4 | import { withMonitorRoutes } from './monitor.js'
 5 | import { withMetricRoutes } from './metrics.js'
 6 | import { withPushRoutes } from './push.js'
 7 | 
 8 | export const withRoutes = pipe(
 9 |   withMonitorRoutes,
10 |   withRootRoutes,
11 |   withMetricRoutes,
12 |   withPushRoutes
13 | )
14 | 


--------------------------------------------------------------------------------
/servers/mu/src/routes/metrics.js:
--------------------------------------------------------------------------------
 1 | import { always, compose } from 'ramda'
 2 | import { withMiddleware } from './middleware/index.js'
 3 | 
 4 | import { config } from '../config.js'
 5 | 
 6 | export const withMetricRoutes = (app) => {
 7 |   if (!config.ENABLE_METRICS_ENDPOINT) return app
 8 | 
 9 |   app.get(
10 |     '/metrics',
11 |     compose(
12 |       withMiddleware,
13 |       always(async (req, res) => {
14 |         const {
15 |           domain: { apis: { metrics } }
16 |         } = req
17 | 
18 |         await metrics.compute()
19 |           .toPromise()
20 |           .then((output) => {
21 |             res.type(metrics.contentType)
22 |             res.send(output)
23 |           })
24 |       })
25 |     )()
26 |   )
27 | 
28 |   return app
29 | }
30 | 


--------------------------------------------------------------------------------
/servers/mu/src/routes/middleware/index.js:
--------------------------------------------------------------------------------
 1 | import { compose } from 'ramda'
 2 | 
 3 | import { withErrorHandler } from './withErrorHandler.js'
 4 | import { withDomain } from './withDomain.js'
 5 | 
 6 | export * from './withMetrics.js'
 7 | 
 8 | /**
 9 |  * A convenience method that composes common middleware needed on most routes,
10 |  * such that other routes can simply compose this one middleware.
11 |  */
12 | export const withMiddleware = compose(
13 |   withDomain,
14 |   withErrorHandler
15 | )
16 | 


--------------------------------------------------------------------------------
/servers/mu/src/routes/middleware/withDomain.js:
--------------------------------------------------------------------------------
 1 | import { domainConfigSchema, config } from '../../config.js'
 2 | import { logger } from '../../logger.js'
 3 | import { createApis } from '../../domain/index.js'
 4 | 
 5 | /**
 6 |  * A middleware that exposes the domain business logic to a request
 7 |  * by attaching each api underneath the 'domain' field on the Request object
 8 |  *
 9 |  * This allows routes to be encapsulated and easily testable with unit tests
10 |  */
11 | 
12 | export const domain = {
13 |   ...(domainConfigSchema.parse(config)),
14 |   fetch,
15 |   logger
16 | }
17 | 
18 | domain.apis = await createApis(domain)
19 | 
20 | export const withDomain = (handler) => (req, res) => {
21 |   req.logger = logger
22 |   req.domain = domain
23 |   return handler(req, res)
24 | }
25 | 


--------------------------------------------------------------------------------
/servers/mu/src/routes/middleware/withErrorHandler.js:
--------------------------------------------------------------------------------
 1 | import { errFrom } from '../../domain/index.js'
 2 | 
 3 | /**
 4 |  * A middleware that simply calls the next handler in the chain.
 5 |  *
 6 |  * If no errors are thrown, then this middleware simply returns the response.
 7 |  * If an error is thrown, it is caught, logged, then used to respond to the request.
 8 |  *
 9 |  * This is useful for handling thrown errors, and prevents having to call
10 |  * next explictly. Instead, a more idiomatic thrown error can be used in subsequent handlers
11 |  */
12 | export const withErrorHandler = (handler) => (req, res) => {
13 |   return Promise.resolve()
14 |     .then(() => handler(req, res))
15 |     .catch((err) => {
16 |       const { domain: { logger } } = req
17 | 
18 |       logger({ log: err })
19 |       const formatted = errFrom(err)
20 |       if (res.writableEnded) return
21 | 
22 |       res.status(err.status || 500).json({ error: formatted.message || 'Internal Server Error' })
23 |     })
24 | }
25 | 


--------------------------------------------------------------------------------
/servers/su/.env.example:
--------------------------------------------------------------------------------
 1 | SU_WALLET_PATH=wallet.json
 2 | DATABASE_URL=postgresql://postgres:password@localhost/su
 3 | GRAPHQL_URL=https://arweave-search.goldsky.com
 4 | ARWEAVE_URL=https://arweave.net
 5 | UPLOAD_NODE_URL=https://up.arweave.net
 6 | MODE=su
 7 | SCHEDULER_LIST_PATH=schedulers.json
 8 | SU_DATA_DIR=/home/rocksdb
 9 | USE_DISK=true
10 | MIGRATION_BATCH_SIZE=10
11 | DB_WRITE_CONNECTIONS=1
12 | DB_READ_CONNECTIONS=40
13 | ENABLE_METRICS=true


--------------------------------------------------------------------------------
/servers/su/.gitignore:
--------------------------------------------------------------------------------
1 | /target
2 | .env
3 | .env.su
4 | .env.router
5 | .wallet.json
6 | .schedulers.json
7 | sufiles/
8 | suindex/


--------------------------------------------------------------------------------
/servers/su/Cargo.toml:
--------------------------------------------------------------------------------
 1 | [package]
 2 | name = "su"
 3 | version = "0.1.0"
 4 | edition = "2021"
 5 | default-run = "su"
 6 | 
 7 | [dependencies]
 8 | actix-web = "4"
 9 | async-trait = "0.1.74"
10 | reqwest = "0.11.22"
11 | serde = "1.0.188"
12 | serde_json = "1.0.107"
13 | serde_derive = "1.0.188"
14 | arweave-rs = "0.2.0"
15 | sha2 = "0.10.8"
16 | bytes = "1.5.0"
17 | diesel = { version = "2.1.3", features = ["postgres", "serde_json", "r2d2"] }
18 | diesel_migrations = "2.1.0"
19 | dotenv = "0.15.0"
20 | base64-url = "2.0.0"
21 | jsonwebkey = "0.3.5"
22 | ring = "0.16.20"
23 | tokio = "1.34.0"
24 | env_logger = "0.11.5"
25 | log = "0.4.20"
26 | rsa = "0.6.1"
27 | dashmap = "5.5.3"
28 | actix-cors = "0.6.0"
29 | simd-json = "0.13.10"
30 | futures = "0.3.30"
31 | rocksdb = "0.22.0"
32 | prometheus = { version = "0.13.4", features = ["process"] }
33 | lru = "0.12.4"
34 | lazy_static = "1.5.0"
35 | avro-rs = "0.13.0"
36 | tempdir = "0.3.7"
37 | 
38 | rand = "0.8.5"
39 | data-encoding = "2.3.2"
40 | k256 = "0.13.4"
41 | sha3 = "0.10.8"
42 | 
43 | [[bin]]
44 | name = "su"
45 | path = "src/main.rs"
46 | 


--------------------------------------------------------------------------------
/servers/su/Dockerfile.arm64:
--------------------------------------------------------------------------------
 1 | ### NOTE: THIS WON'T WORK ON AN X86 DEVICE
 2 | 
 3 | # Stage 1: Planner
 4 | FROM --platform=linux/arm64  rust:1.75.0 AS planner
 5 | WORKDIR /app
 6 | RUN cargo install cargo-chef
 7 | COPY . .
 8 | RUN cargo chef prepare --recipe-path recipe.json
 9 | 
10 | # Stage 2: Cache the build of the dependencies
11 | FROM --platform=linux/arm64 rust:1.75.0 AS cacher
12 | WORKDIR /app
13 | RUN cargo install cargo-chef
14 | RUN apt-get update && apt-get install -y \
15 |     llvm-dev \
16 |     libclang-dev \
17 |     clang \
18 |     librocksdb-dev \
19 |     libpq5 \
20 |     libssl-dev
21 | COPY --from=planner /app/recipe.json recipe.json
22 | RUN ls /lib/
23 | RUN cargo chef cook --release --recipe-path recipe.json
24 | 
25 | # Stage 3: Build binary with pre-built and cached dependencies
26 | FROM --platform=linux/arm64 rust:1.75.0 AS builder
27 | COPY . /app
28 | WORKDIR /app
29 | COPY --from=cacher /app/target target
30 | COPY --from=cacher /usr/local/cargo /usr/local/cargo
31 | COPY --from=cacher /lib/aarch64-linux-gnu/*  /lib/aarch64-linux-gnu/
32 | # Set the correct Rust target based on architecture
33 | RUN cargo build --release
34 | 
35 | # Stage 4: Runner 
36 | FROM --platform=linux/arm64 gcr.io/distroless/cc-debian12 
37 | RUN apt-get update && apt install ca-certificates openssl -y
38 | COPY --from=builder /app/target/release/su /
39 | COPY --from=cacher /lib/aarch64-linux-gnu/*  /lib/aarch64-linux-gnu/
40 | CMD ["sh", "-c", "sleep 10 && ./su su 9000"]
41 | 


--------------------------------------------------------------------------------
/servers/su/Dockerfile.x86:
--------------------------------------------------------------------------------
 1 | ### NOTE: THIS WON'T WORK ON AN ARM64 DEVICE
 2 | 
 3 | # Stage 1: Planner
 4 | FROM --platform=linux/amd64 rust:1.75.0 AS planner
 5 | WORKDIR /app
 6 | RUN cargo install cargo-chef
 7 | COPY . .
 8 | RUN cargo chef prepare --recipe-path recipe.json
 9 | 
10 | # Stage 2: Cache the build of the dependencies
11 | FROM --platform=linux/amd64 rust:1.75.0 AS cacher
12 | WORKDIR /app
13 | RUN cargo install cargo-chef
14 | RUN apt-get update && apt-get install -y \
15 |     llvm-dev \
16 |     libclang-dev \
17 |     clang \
18 |     librocksdb-dev \
19 |     libpq5 \
20 |     libssl-dev 
21 | 
22 | COPY --from=planner /app/recipe.json recipe.json
23 | RUN ls /lib/
24 | RUN cargo chef cook --release --recipe-path recipe.json
25 | 
26 | # Stage 3: Build binary with pre-built and cached dependencies
27 | FROM --platform=linux/amd64 rust:1.75.0 AS builder
28 | COPY . /app
29 | WORKDIR /app
30 | COPY --from=cacher /app/target target
31 | COPY --from=cacher /usr/local/cargo /usr/local/cargo
32 | COPY --from=cacher /lib/x86_64-linux-gnu/* /lib/x86_64-linux-gnu/
33 | # Set the correct Rust target based on architecture
34 | RUN cargo build --release
35 | 
36 | # Stage 4: Runner 
37 | FROM --platform=linux/amd64 ubuntu:22.04
38 | RUN apt-get update && apt install ca-certificates openssl -y
39 | COPY --from=builder /app/target/release/su /
40 | COPY --from=cacher /lib/x86_64-linux-gnu/*  /lib/x86_64-linux-gnu/
41 | CMD ["sh", "-c", "sleep 10 && ./su su 9000"]
42 | 


--------------------------------------------------------------------------------
/servers/su/DockerfileCli:
--------------------------------------------------------------------------------
 1 | # Stage 1: Build the dynamic binary
 2 | FROM rust:1.75.0 as cli-builder
 3 | 
 4 | # Set the working directory in the container
 5 | WORKDIR /usr/src/cli
 6 | 
 7 | # Install required dependencies for building
 8 | RUN apt-get update && apt-get install -y \
 9 |     llvm-dev \
10 |     libclang-dev \
11 |     clang \
12 |     librocksdb-dev
13 | 
14 | # Copy the manifests
15 | COPY Cargo.toml Cargo.lock ./
16 | 
17 | # This step is to cache your dependencies
18 | RUN mkdir src && \
19 |     echo "fn main() {}" > src/main.rs && \
20 |     cargo build --release && \
21 |     rm -f target/release/deps/cli*
22 | 
23 | # Now copy the actual source code and build the application
24 | COPY src ./src
25 | COPY migrations ./migrations
26 | RUN cargo build --release --bin cli
27 | 
28 | # The final output binary will be in /usr/src/mig/target/release/cli
29 | 


--------------------------------------------------------------------------------
/servers/su/cli:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/su/cli


--------------------------------------------------------------------------------
/servers/su/diesel.toml:
--------------------------------------------------------------------------------
 1 | # For documentation on how to configure this file,
 2 | # see https://diesel.rs/guides/configuring-diesel-cli
 3 | 
 4 | [print_schema]
 5 | file = "src/schema.rs"
 6 | custom_type_derives = ["diesel::query_builder::QueryId"]
 7 | 
 8 | [migrations_directory]
 9 | dir = "migrations"
10 | 


--------------------------------------------------------------------------------
/servers/su/migrations/.keep:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/su/migrations/.keep


--------------------------------------------------------------------------------
/servers/su/migrations/00000000000000_diesel_initial_setup/down.sql:
--------------------------------------------------------------------------------
1 | -- This file was automatically created by Diesel to setup helper functions
2 | -- and other internal bookkeeping. This file is safe to edit, any future
3 | -- changes will be added to existing projects as new migrations.
4 | 
5 | DROP FUNCTION IF EXISTS diesel_manage_updated_at(_tbl regclass);
6 | DROP FUNCTION IF EXISTS diesel_set_updated_at();
7 | 


--------------------------------------------------------------------------------
/servers/su/migrations/00000000000000_diesel_initial_setup/up.sql:
--------------------------------------------------------------------------------
 1 | -- This file was automatically created by Diesel to setup helper functions
 2 | -- and other internal bookkeeping. This file is safe to edit, any future
 3 | -- changes will be added to existing projects as new migrations.
 4 | 
 5 | 
 6 | 
 7 | 
 8 | -- Sets up a trigger for the given table to automatically set a column called
 9 | -- `updated_at` whenever the row is modified (unless `updated_at` was included
10 | -- in the modified columns)
11 | --
12 | -- # Example
13 | --
14 | -- ```sql
15 | -- CREATE TABLE users (id SERIAL PRIMARY KEY, updated_at TIMESTAMP NOT NULL DEFAULT NOW());
16 | --
17 | -- SELECT diesel_manage_updated_at('users');
18 | -- ```
19 | CREATE OR REPLACE FUNCTION diesel_manage_updated_at(_tbl regclass) RETURNS VOID AS $
20 | BEGIN
21 |     EXECUTE format('CREATE TRIGGER set_updated_at BEFORE UPDATE ON %s
22 |                     FOR EACH ROW EXECUTE PROCEDURE diesel_set_updated_at()', _tbl);
23 | END;
24 | $ LANGUAGE plpgsql;
25 | 
26 | CREATE OR REPLACE FUNCTION diesel_set_updated_at() RETURNS trigger AS $
27 | BEGIN
28 |     IF (
29 |         NEW IS DISTINCT FROM OLD AND
30 |         NEW.updated_at IS NOT DISTINCT FROM OLD.updated_at
31 |     ) THEN
32 |         NEW.updated_at := current_timestamp;
33 |     END IF;
34 |     RETURN NEW;
35 | END;
36 | $ LANGUAGE plpgsql;
37 | 


--------------------------------------------------------------------------------
/servers/su/migrations/2023-12-13-213153_create_initial_tables/down.sql:
--------------------------------------------------------------------------------
1 | DROP TABLE messages;
2 | DROP TABLE processes;
3 | DROP TABLE IF EXISTS process_schedulers;
4 | DROP TABLE IF EXISTS schedulers;


--------------------------------------------------------------------------------
/servers/su/migrations/2023-12-13-213153_create_initial_tables/up.sql:
--------------------------------------------------------------------------------
 1 | CREATE TABLE processes (
 2 |   row_id SERIAL PRIMARY KEY,
 3 |   process_id VARCHAR(255) NOT NULL UNIQUE,
 4 |   process_data JSONB NOT NULL,
 5 |   bundle BYTEA NOT NULL
 6 | );
 7 | 
 8 | CREATE INDEX idx_process_id ON processes (process_id);
 9 | 
10 | CREATE TABLE messages (
11 |   row_id SERIAL PRIMARY KEY,
12 |   process_id VARCHAR(255) NOT NULL REFERENCES processes(process_id),
13 |   message_id VARCHAR(255) NOT NULL UNIQUE,
14 |   message_data JSONB NOT NULL,
15 |   epoch INTEGER NOT NULL,
16 |   nonce INTEGER NOT NULL,
17 |   "timestamp" BIGINT NOT NULL,
18 |   bundle BYTEA NOT NULL,
19 |   hash_chain TEXT NOT NULL
20 | );
21 | 
22 | CREATE INDEX idx_messages_process_id ON messages(process_id);
23 | 
24 | CREATE INDEX idx_messages_message_id ON messages(message_id);
25 | 
26 | -- these tables are for the top level routing su
27 | CREATE TABLE IF NOT EXISTS schedulers (
28 |     row_id SERIAL PRIMARY KEY,
29 |     url VARCHAR NOT NULL UNIQUE,
30 |     process_count INTEGER NOT NULL
31 | );
32 | 
33 | CREATE TABLE IF NOT EXISTS process_schedulers (
34 |     row_id SERIAL PRIMARY KEY,
35 |     process_id VARCHAR NOT NULL UNIQUE,
36 |     scheduler_row_id INTEGER NOT NULL,
37 |     FOREIGN KEY (scheduler_row_id) REFERENCES schedulers(row_id)
38 | );


--------------------------------------------------------------------------------
/servers/su/migrations/2024-03-27-163751_modify_messages/down.sql:
--------------------------------------------------------------------------------
1 | DROP INDEX IF EXISTS idx_assignments_assignment_id;
2 | 
3 | ALTER TABLE messages DROP COLUMN IF EXISTS assignment_id;
4 | 
5 | ALTER TABLE messages ADD CONSTRAINT messages_message_id_key UNIQUE (message_id);


--------------------------------------------------------------------------------
/servers/su/migrations/2024-03-27-163751_modify_messages/up.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE messages ADD COLUMN assignment_id VARCHAR(255) UNIQUE;
2 | 
3 | CREATE INDEX idx_assignments_assignment_id ON messages(assignment_id);
4 | 
5 | ALTER TABLE messages DROP CONSTRAINT IF EXISTS messages_message_id_key;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-05-29-143054_messages_indexing/down.sql:
--------------------------------------------------------------------------------
1 | -- This file should undo anything in `up.sql`
2 | CREATE INDEX idx_messages_process_id ON messages(process_id);
3 | DROP INDEX idx_messages_process_id_timestamp;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-05-29-143054_messages_indexing/up.sql:
--------------------------------------------------------------------------------
1 | -- Your SQL goes here
2 | DROP INDEX idx_messages_process_id;
3 | CREATE INDEX idx_messages_process_id_timestamp ON messages(process_id, timestamp);


--------------------------------------------------------------------------------
/servers/su/migrations/2024-08-05-190651_modify_schedulers/down.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE schedulers DROP COLUMN no_route;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-08-05-190651_modify_schedulers/up.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE schedulers ADD COLUMN no_route BOOLEAN DEFAULT FALSE;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-09-04-145702_process_assignment/down.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE processes
2 | DROP COLUMN epoch,
3 | DROP COLUMN nonce,
4 | DROP COLUMN hash_chain,
5 | DROP COLUMN "timestamp";


--------------------------------------------------------------------------------
/servers/su/migrations/2024-09-04-145702_process_assignment/up.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE processes
2 | ADD COLUMN epoch INTEGER NULL,
3 | ADD COLUMN nonce INTEGER NULL,
4 | ADD COLUMN hash_chain TEXT NULL,
5 | ADD COLUMN "timestamp" BIGINT NULL;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-11-26-200327_wallet_routing/down.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE schedulers
2 | DROP COLUMN IF EXISTS wallets_to_route,
3 | DROP COLUMN IF EXISTS wallets_only;


--------------------------------------------------------------------------------
/servers/su/migrations/2024-11-26-200327_wallet_routing/up.sql:
--------------------------------------------------------------------------------
1 | ALTER TABLE schedulers
2 | ADD COLUMN wallets_to_route TEXT NULL,
3 | ADD COLUMN wallets_only BOOLEAN NULL;


--------------------------------------------------------------------------------
/servers/su/migrations/2025-03-18-144400_nonce_index/down.sql:
--------------------------------------------------------------------------------
1 | 
2 | DROP INDEX idx_messages_process_id_nonce;


--------------------------------------------------------------------------------
/servers/su/migrations/2025-03-18-144400_nonce_index/up.sql:
--------------------------------------------------------------------------------
1 | 
2 | CREATE INDEX idx_messages_process_id_nonce ON messages(process_id, nonce);


--------------------------------------------------------------------------------
/servers/su/src/bin/cli.rs:
--------------------------------------------------------------------------------
 1 | use std::env;
 2 | use std::io;
 3 | use su::domain::migrate_to_disk;
 4 | use su::domain::migrate_to_local;
 5 | use su::domain::sync_local_drives;
 6 | 
 7 | #[tokio::main]
 8 | async fn main() -> io::Result<()> {
 9 |     let args: Vec<String> = env::args().collect();
10 | 
11 |     if args.len() < 2 {
12 |         eprintln!("Usage: {} <function_name>", args[0]);
13 |         eprintln!("Available functions: migrate_to_disk, migrate_to_local, sync_local_drives");
14 |         return Ok(());
15 |     }
16 | 
17 |     let interval = if args.len() >= 3 {
18 |         match args[2].parse::<u64>() {
19 |             Ok(val) => val,
20 |             Err(_) => {
21 |                 eprintln!("Invalid interval: {}. Using default (5 seconds).", args[3]);
22 |                 5
23 |             }
24 |         }
25 |     } else {
26 |         5
27 |     };
28 | 
29 |     match args[1].as_str() {
30 |         "migrate_to_disk" => {
31 |             migrate_to_disk().await.unwrap();
32 |         }
33 |         "migrate_to_local" => {
34 |             migrate_to_local().await.unwrap();
35 |         }
36 |         "sync_local_drives" => {
37 |             sync_local_drives(interval).await.unwrap();
38 |         }
39 |         _ => {
40 |             eprintln!("Invalid function name: {}", args[1]);
41 |             eprintln!("Available functions: migrate_to_disk, migrate_to_local, sync_local_drives");
42 |         }
43 |     }
44 | 
45 |     Ok(())
46 | }
47 | 


--------------------------------------------------------------------------------
/servers/su/src/domain/clients/local_store/mod.rs:
--------------------------------------------------------------------------------
1 | pub mod migration;
2 | pub mod store;
3 | pub mod sync_local;
4 | pub mod tests;
5 | 


--------------------------------------------------------------------------------
/servers/su/src/domain/clients/mod.rs:
--------------------------------------------------------------------------------
 1 | /*
 2 | glue code for interacting with outside world
 3 | and producing side effects
 4 | */
 5 | 
 6 | mod schema;
 7 | 
 8 | // uploader to a service like irys
 9 | pub mod uploader;
10 | 
11 | // database layer
12 | pub mod store;
13 | 
14 | // local database layer
15 | pub mod local_store;
16 | 
17 | // arweave gateway
18 | pub mod gateway;
19 | 
20 | // wallet implementation
21 | pub mod wallet;
22 | 
23 | /*
24 | used to sign transactions, required here because
25 | the arweave sdk reads a wallet from the file system
26 | */
27 | pub mod signer;
28 | 
29 | // metrics client
30 | pub mod metrics;
31 | 
32 | // module for calling a router
33 | pub mod su_router;


--------------------------------------------------------------------------------
/servers/su/src/domain/clients/schema.rs:
--------------------------------------------------------------------------------
 1 | use diesel::prelude::*;
 2 | 
 3 | table! {
 4 |     processes (row_id) {
 5 |         row_id -> Int4,
 6 |         process_id -> Varchar,
 7 |         process_data -> Jsonb,
 8 |         bundle -> Bytea,
 9 |         epoch -> Nullable<Int4>,
10 |         nonce -> Nullable<Int4>,
11 |         timestamp -> Nullable<BigInt>,
12 |         hash_chain -> Nullable<Text>,
13 |     }
14 | }
15 | 
16 | table! {
17 |     messages (row_id) {
18 |         row_id -> Int4,
19 |         process_id -> Varchar,
20 |         message_id -> Varchar,
21 |         assignment_id -> Nullable<Varchar>,
22 |         message_data -> Jsonb,
23 |         epoch -> Int4,
24 |         nonce -> Int4,
25 |         timestamp -> BigInt,
26 |         bundle -> Bytea,
27 |         hash_chain -> Text,
28 |     }
29 | }
30 | 
31 | table! {
32 |     schedulers (row_id) {
33 |         row_id -> Int4,
34 |         url -> Varchar,
35 |         process_count -> Int4,
36 |         no_route -> Nullable<Bool>,
37 |         wallets_to_route -> Nullable<Text>,
38 |         wallets_only -> Nullable<Bool>,
39 |     }
40 | }
41 | 
42 | table! {
43 |     process_schedulers (row_id) {
44 |         row_id -> Int4,
45 |         process_id -> Varchar,
46 |         scheduler_row_id -> Int4,
47 |     }
48 | }
49 | 
50 | allow_tables_to_appear_in_same_query!(processes, messages, schedulers, process_schedulers,);
51 | 


--------------------------------------------------------------------------------
/servers/su/src/domain/clients/signer.rs:
--------------------------------------------------------------------------------
 1 | use arweave_rs::ArweaveSigner as SdkSigner;
 2 | use async_trait::async_trait;
 3 | use bytes::Bytes;
 4 | use std::path::PathBuf;
 5 | use std::str::FromStr;
 6 | 
 7 | use crate::domain::core::dal::Signer;
 8 | 
 9 | pub struct ArweaveSigner {
10 |     sdk: SdkSigner,
11 | }
12 | 
13 | const PUB_LENGTH: u16 = 512;
14 | 
15 | impl ArweaveSigner {
16 |     pub fn new(wallet_path: &str) -> Result<Self, String> {
17 |         let wallet = PathBuf::from_str(wallet_path).expect("wallet file does not exist");
18 |         let sdk = match SdkSigner::from_keypair_path(wallet) {
19 |             Ok(s) => s,
20 |             Err(e) => return Err(e.to_string()),
21 |         };
22 |         let pub_key = sdk.get_public_key().0;
23 |         if pub_key.len() as u16 == PUB_LENGTH {
24 |             Ok(Self { sdk })
25 |         } else {
26 |             Err("invalid wallet path".to_string())
27 |         }
28 |     }
29 | }
30 | 
31 | #[async_trait]
32 | impl Signer for ArweaveSigner {
33 |     async fn sign_tx(&self, buffer: Vec<u8>) -> Result<Vec<u8>, String> {
34 |         let as_bytes = Bytes::from(buffer);
35 |         let signed = match self.sdk.sign(&as_bytes) {
36 |             Ok(s) => s,
37 |             Err(e) => return Err(e.to_string()),
38 |         };
39 |         Ok(Bytes::copy_from_slice(&signed.0).to_vec())
40 |     }
41 | 
42 |     fn get_public_key(&self) -> Vec<u8> {
43 |         Bytes::copy_from_slice(&self.sdk.get_public_key().0).to_vec()
44 |     }
45 | }
46 | 


--------------------------------------------------------------------------------
/servers/su/src/domain/core/mod.rs:
--------------------------------------------------------------------------------
 1 | // data item parsing/generating
 2 | mod bytes;
 3 | 
 4 | // main tx building logic
 5 | mod builder;
 6 | 
 7 | // build json from raw data
 8 | mod json;
 9 | 
10 | // tags impl
11 | mod tags;
12 | 
13 | // traits for injecting dependencies
14 | pub mod dal;
15 | 
16 | // mutex locked scheduling data
17 | pub mod scheduler;
18 | 
19 | // main business logic
20 | pub mod flows;
21 | 
22 | // router logic
23 | pub mod router;
24 | 


--------------------------------------------------------------------------------
/servers/su/src/domain/logger.rs:
--------------------------------------------------------------------------------
 1 | use std::sync::{Arc, Once};
 2 | 
 3 | use env_logger::Env;
 4 | use log::{error, info};
 5 | 
 6 | use crate::domain::Log;
 7 | 
 8 | pub struct SuLog;
 9 | 
10 | static INIT: Once = Once::new();
11 | 
12 | impl SuLog {
13 |     pub fn init() -> Arc<dyn Log> {
14 |         INIT.call_once(|| {
15 |             env_logger::init_from_env(Env::default().default_filter_or("info"));
16 |         });
17 |         Arc::new(SuLog {})
18 |     }
19 | }
20 | 
21 | impl Log for SuLog {
22 |     fn log(&self, message: String) {
23 |         info!("{}", message);
24 |     }
25 | 
26 |     fn error(&self, message: String) {
27 |         error!("{}", message);
28 |     }
29 | }
30 | 


--------------------------------------------------------------------------------
/servers/su/src/lib.rs:
--------------------------------------------------------------------------------
1 | pub mod domain;
2 | 


--------------------------------------------------------------------------------
/servers/su/su:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/permaweb/ao/9c84a566802cf777b1d4a3b42f06cc30ccf5a0ea/servers/su/su


--------------------------------------------------------------------------------
/servers/ur/.env.example:
--------------------------------------------------------------------------------
1 | NODE_CONFIG_ENV="development"
2 | DEBUG=*
3 | HOSTS="https://foo.bar,https://fizz.buzz"
4 | AO_UNIT=cu
5 | STRATEGY=proxy
6 | 


--------------------------------------------------------------------------------
/servers/ur/.gitignore:
--------------------------------------------------------------------------------
 1 | **/node_modules
 2 | **/bin
 3 | **/build
 4 | **/wallets
 5 | **/cache
 6 | **/sindex
 7 | **/.DS_Store
 8 | **/data
 9 | *yalc*
10 | ao-cache*
11 | static/*
12 | !static/.gitkeep


--------------------------------------------------------------------------------
/servers/ur/.nvmrc:
--------------------------------------------------------------------------------
1 | 22


--------------------------------------------------------------------------------
/servers/ur/.versionrc:
--------------------------------------------------------------------------------
1 | {
2 |   "skip": {
3 |     "changelog": false
4 |   }
5 | }
6 | 


--------------------------------------------------------------------------------
/servers/ur/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use the official Node.js image as a base image
 2 | FROM node:22
 3 | 
 4 | # Set the working directory inside the container
 5 | WORKDIR /ao
 6 | 
 7 | # Copy the package.json and package-lock.json (if available)
 8 | COPY package*.json ./
 9 | 
10 | # Install the dependencies inside the container
11 | RUN npm install
12 | 
13 | # Copy the rest of the application code into the container
14 | COPY src ./src
15 | 
16 | # Set the API's port number
17 | EXPOSE 3005
18 | 
19 | # Define the command to run the application
20 | CMD ["npm", "start"]


--------------------------------------------------------------------------------
/servers/ur/deploy.js:
--------------------------------------------------------------------------------
 1 | import { z } from 'zod'
 2 | 
 3 | function env (key) {
 4 |   const res = z.string().min(1).safeParse(process.env[key])
 5 |   if (!res.success) {
 6 |     console.error(`Error with ENV VAR: ${key}`)
 7 |     throw res.error
 8 |   }
 9 |   return res.data
10 | }
11 | 
12 | const deploy = async (deployHooksStr) => {
13 |   const deployHooks = z.preprocess(
14 |     (arg) => (typeof arg === 'string' ? arg.split(',').map(str => str.trim()) : arg),
15 |     z.array(z.string().url())
16 |   ).parse(deployHooksStr)
17 | 
18 |   const responses = await Promise.all(deployHooks.map(
19 |     (deployHook) => fetch(deployHook, { method: 'POST' })
20 |       .then((res) => res.json())
21 |       .catch((err) => err)
22 |   ))
23 | 
24 |   console.log('Deploy Responses:', responses)
25 | }
26 | 
27 | deploy(env('DEPLOY_HOOKS'))
28 | 


--------------------------------------------------------------------------------
/servers/ur/nodemon.json:
--------------------------------------------------------------------------------
1 | {
2 |   "watch": ["src"],
3 |   "exec": "node -r dotenv/config src/app.js",
4 |   "ext": "js",
5 |   "delay": "500",
6 |   "signal": "SIGHUP"
7 | } 


--------------------------------------------------------------------------------
/servers/ur/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@permaweb/ao-router",
 3 |   "version": "1.0.0",
 4 |   "description": "A Node Express server to serve as a reverse proxy for the underlying hosts",
 5 |   "type": "module",
 6 |   "main": "src/app.js",
 7 |   "scripts": {
 8 |     "dev": "nodemon",
 9 |     "start": "node -r dotenv/config src/app.js",
10 |     "test": "node --test"
11 |   },
12 |   "dependencies": {
13 |     "arbundles": "0.11.1",
14 |     "cors": "^2.8.5",
15 |     "debug": "^4.3.7",
16 |     "express": "^4.21.0",
17 |     "http-proxy-node16": "^1.0.5",
18 |     "lru-cache": "^11.0.1",
19 |     "ramda": "^0.30.1",
20 |     "zod": "^3.23.8"
21 |   },
22 |   "devDependencies": {
23 |     "dotenv": "^16.4.5",
24 |     "nodemon": "^3.1.4"
25 |   },
26 |   "engines": {
27 |     "node": ">=18"
28 |   }
29 | }
30 | 


--------------------------------------------------------------------------------
/servers/ur/src/app.js:
--------------------------------------------------------------------------------
 1 | import cors from 'cors'
 2 | import express from 'express'
 3 | import { pipe } from 'ramda'
 4 | 
 5 | import { config } from './config.js'
 6 | import { logger } from './logger.js'
 7 | 
 8 | import { proxyWith } from './proxy.js'
 9 | import { redirectWith } from './redirect.js'
10 | 
11 | const middlewareWithByStrategy = {
12 |   proxy: proxyWith,
13 |   redirect: redirectWith
14 | }
15 | 
16 | const middlewareWith = middlewareWithByStrategy[config.strategy]
17 | 
18 | pipe(
19 |   (app) => app.use(cors()),
20 |   (app) => app.get('/healthcheck', (req, res) => res.status(200).send('OK')),
21 |   middlewareWith({ ...config }),
22 |   (app) => {
23 |     const server = app.listen(config.port, () => {
24 |       logger(`Server is running on http://localhost:${config.port}`)
25 |     })
26 | 
27 |     process.on('SIGTERM', () => {
28 |       logger('Received SIGTERM. Gracefully shutting down server...')
29 |       server.close(() => {
30 |         logger('Server Shut Down')
31 |         process.exit()
32 |       })
33 |     })
34 | 
35 |     return server
36 |   }
37 | )(express())
38 | 


--------------------------------------------------------------------------------
/servers/ur/src/logger.js:
--------------------------------------------------------------------------------
 1 | import debug from 'debug'
 2 | import { tap } from 'ramda'
 3 | 
 4 | const createLogger = (name) => {
 5 |   const logger = debug(name)
 6 | 
 7 |   logger.child = (name) => createLogger(`${logger.namespace}:${name}`)
 8 |   logger.tap = (note, ...rest) =>
 9 |     tap((...args) => logger(note, ...rest, ...args))
10 | 
11 |   return logger
12 | }
13 | 
14 | export const logger = createLogger('ao-router')
15 | 


--------------------------------------------------------------------------------
/servers/ur/src/routes/byAoUnit.js:
--------------------------------------------------------------------------------
1 | import { mountCuRoutesWith } from './cu.js'
2 | import { mountMuRoutesWith } from './mu.js'
3 | 
4 | export const mountRoutesWithByAoUnit = {
5 |   cu: mountCuRoutesWith,
6 |   mu: mountMuRoutesWith
7 | }
8 | 


--------------------------------------------------------------------------------
/servers/ur/src/routes/cu.js:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * The Reverse Proxy Configuration for an ao Compute Unit Router
 3 |  */
 4 | export function mountCuRoutesWith ({ app, middleware }) {
 5 |   app.get('/', middleware({ processIdFromRequest: () => 'process' }))
 6 |   app.get('/result/:messageTxId', middleware({ processIdFromRequest: (req) => req.query['process-id'] }))
 7 |   app.get('/results/:processId', middleware({ processIdFromRequest: (req) => req.params.processId }))
 8 |   app.get('/state/:processId', middleware({ processIdFromRequest: (req) => req.params.processId }))
 9 |   app.get('/cron/:processId', middleware({ processIdFromRequest: (req) => req.params.processId }))
10 |   app.post('/dry-run', middleware({ processIdFromRequest: (req) => req.query['process-id'] }))
11 | }
12 | 


--------------------------------------------------------------------------------