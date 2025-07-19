Directory Structure:

└── ./
    ├── src
    │   ├── checkpoint.js
    │   ├── index.js
    │   ├── load-env.js
    │   ├── pack-lua.js
    │   └── process-env.js
    └── test
        ├── index.test.js
        └── load-env.test.js



---
File: /src/checkpoint.js
---

import { gunzipSync } from 'zlib'
import fs from 'fs'
export async function fetchCheckpoint(tx) {
  try {
    const fileName = `${tx}.bin`
    if (fs.existsSync(fileName)) {
      return await readLargeFile(fileName)
    }
    const response = await fetch(`https://arweave.net/${tx}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${tx} : ${response.statusText}`)
    }
    const compressedBuffer = await response.arrayBuffer()

    const decompressedBuffer = gunzipSync(compressedBuffer)
    const buffer = decompressedBuffer.buffer;
    //fs.writeFileSync(fileName, Buffer.from(buffer))
    await writeLargeBufferToFile(fileName, Buffer.from(buffer))
    return buffer
  } catch (err) {
    console.log("Error: ", err)
    throw err
  }
}

export async function getCheckpointTx(pid) {
  try {
    const response = await fetch(`https://arweave-search.goldsky.com/graphql`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
query {
  transactions (first: 1, tags: [
      { name: "Type", values: ["Checkpoint"]},
      { name: "Process", values: ["${pid}"]}
  ]) {
    edges {
      node {
        id
      }
    }    
  }
}
      `})
    })

    if (!response.ok) {
      throw new Error(`Could not find checkpoint: ${pid} Error Code: ${response.statusText}`)
    }
    const result = await response.json()
    // console.log(result)
    return result.data?.transactions?.edges[0]?.node?.id
  } catch (err) {
    console.log("Error: ", err)
    throw err
  }
}

/**
 * Writes a buffer to a file using a stream, allowing large files (>2GB).
 * @param {Buffer} buffer - The buffer to write to the file.
 * @param {string} filePath - The path of the file to write to.
 * @returns {Promise<void>}
 */
function writeLargeBufferToFile(filePath, buffer) {
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath);

    // Split the buffer into chunks for streaming
    const chunkSize = 64 * 1024; // 64KB
    let offset = 0;

    const writeNextChunk = () => {
      while (offset < buffer.length) {
        const chunk = buffer.slice(offset, offset + chunkSize);
        offset += chunkSize;

        // Check if the stream buffer is full
        if (!writeStream.write(chunk)) {
          writeStream.once('drain', writeNextChunk);
          return;
        }
      }

      // End the stream once all chunks are written
      writeStream.end();
    };

    writeStream.on('finish', resolve);
    writeStream.on('error', reject);

    // Start writing the first chunk
    writeNextChunk();
  });
}

/**
 * Reads a large file and returns its content as a single Buffer.
 * @param {string} filePath - The path of the file to read.
 * @returns {Promise<Buffer>} - A promise that resolves to the file's content as a Buffer.
 */
function readLargeFile(filePath) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
      // Collect each chunk into the array
      chunks.push(chunk);
    });

    readStream.on('end', () => {
      // Concatenate all chunks into a single Buffer
      resolve(Buffer.concat(chunks));
    });

    readStream.on('error', (err) => {
      // Handle errors
      reject(err);
    });
  });
}


---
File: /src/index.js
---

import fs from 'fs'
import AoLoader from '@permaweb/ao-loader'
import Async from 'hyper-async'
import { fetchCheckpoint, getCheckpointTx } from './checkpoint.js'
import { pack } from './pack-lua.js'
import weaveDrive from '@permaweb/weavedrive'
import { loadEnv } from './load-env.js'
import { mergeDeepRight } from 'ramda'

const { of, fromPromise } = Async

let WASM64 = {
  format: "wasm64-unknown-emscripten-draft_2024_02_15",
  memoryLimit: "17179869184"
}

let DEFAULT_ENV = {
  Process: {
    Id: "TEST_PROCESS_ID",
    Tags: [
      { name: "Data-Protocol", value: "ao" },
      { name: "Variant", value: "ao.TN.1" },
      { name: "Type", value: "Process" },
      { name: "Authority", value: "OWNER" }
    ],
    Owner: "OWNER",
  },
  Module: {
    Id: "TESTING_ID",
    Tags: [
      { name: "Data-Protocol", value: "ao" },
      { name: "Variant", value: "ao.TN.1" },
      { name: "Type", value: "Module" },
    ]
  }
}

// CONSTANTS
export let SQLITE = "sqlite"
export let LLAMA = "llama"
export let LATEST = "module"

let aosHandle = null

/**
 * @param {string} aosmodule - module label or txId to wasm binary
 */
export async function aoslocal(aosmodule = LATEST, env) {
  WASM64 = Object.assign({}, WASM64, {
    WeaveDrive: weaveDrive,
    ARWEAVE: 'https://arweave.net',
    blockHeight: 1000,
    spawn: {
      tags: env?.Process?.Tags ?? DEFAULT_ENV.Process.Tags
    },
    module: {
      tags: env?.Process?.Tags ?? DEFAULT_ENV.Module.Tags
    }
  })

  // const src = source ? pack(source, 'utf-8') : null

  const mod = await fetch('https://raw.githubusercontent.com/permaweb/aos/refs/heads/main/package.json')
    .then(res => res.json())
    .then(result => result.aos[aosmodule] || aosmodule)

  const binary = await fetch('https://arweave.net/' + mod).then(res => res.blob()).then(blob => blob.arrayBuffer())

  aosHandle = await AoLoader(binary, WASM64)

  // load memory with source
  let memory = null

  let updateMemory = (ctx) => {
    memory = ctx.Memory
    return ctx
  }

  // load process message
  //if (src) {
  await of({ msg: DEFAULT_ENV.Process, env: env ?? DEFAULT_ENV })
    .map(formatAOS)
    .chain(handle(binary, memory))
    .map(updateMemory)
    .toPromise()
  //}

  return {
    asOwner: async (pid) => {
      DEFAULT_ENV = await loadEnv(pid)
      // use pid to get the process tags and module tags to set as env
      return true
    },
    src: (srcFile, env = {}) =>
      of(srcFile)
        .map(pack)
        .map(src => ({ expr: src, env: mergeDeepRight(DEFAULT_ENV, env) }))
        .map(formatEval)
        .chain(handle(binary, memory))
        .map(updateMemory)
        .toPromise(),
    fromCheckpoint: (cid) => of(cid)
      .chain(fromPromise(fetchCheckpoint))
      .map(Buffer.from)
      .map(m => {
        updateMemory({ Memory: m })
        return true
      })

      .toPromise(),
    load: (pid) => of(pid)
      // .map(pid => `https://cu.ao-testnet.xyz/state/${pid}`)
      // .chain(fromPromise(url => fetch(url)))
      // .chain(fromPromise(res => res.arrayBuffer()))
      // .map(Buffer.from)
      .chain(fromPromise(getCheckpointTx))
      .chain(fromPromise(fetchCheckpoint))
      .map(Buffer.from)
      .map(m => {
        updateMemory({ Memory: m })
        return true
      })
      .toPromise(),
    eval: (expr, env = {}) => of({ expr, env: mergeDeepRight(DEFAULT_ENV, env) })
      .map(formatEval)
      //.map(ctx => (console.log(ctx), ctx))
      .chain(handle(binary, memory))
      .map(updateMemory)
      .toPromise()
    ,
    send: (msg, env = {}) => of({ msg, env: mergeDeepRight(DEFAULT_ENV, env) })
      .map(formatAOS)
      .chain(handle(binary, memory))
      .map(updateMemory)
      .toPromise()
  }
}



function formatEval(ctx) {
  ctx.msg = {
    Id: "MESSAGE_ID",
    Target: ctx.env?.Process?.Id || "TEST_PROCESS_ID",
    Owner: ctx.env?.Process?.Owner || "OWNER",
    Data: ctx.expr,
    Tags: [
      { name: "Action", value: "Eval" }
    ],
    From: ctx.env?.Process.Owner || "OWNER",
    Timestamp: Date.now().toString(),
    Module: ctx.env?.Module?.Id || "MODULE",
    ["Block-Height"]: "1"
  }

  return ctx
}

function formatAOS(ctx) {
  const aoMsg = {
    Id: "MESSAGE_ID",
    Target: ctx.msg?.Target || DEFAULT_ENV.Process.Id,
    Owner: ctx.msg?.Owner || DEFAULT_ENV.Process.Owner,
    Data: ctx.msg?.Data || "",
    Module: "MODULE",
    ["Block-Height"]: "1",
    From: ctx.msg?.From || ctx.msg?.Owner || DEFAULT_ENV.Process.Owner,
    Timestamp: (new Date().getTime()).toString(),
    Tags: Object
      .keys(ctx.msg)
      .filter(k => !["Target", "Owner", "Data", "Anchor", "Tags"].includes(k))
      .map(k => ({ name: k, value: ctx.msg[k] }))
  }
  //console.log(aoMsg)
  ctx.msg = aoMsg
  return ctx
}

function handle(binary, mem) {
  return (ctx) => {

    return fromPromise(aosHandle)(mem, ctx.msg, ctx.env)
    // return fromPromise(AoLoader)(binary, WASM64)
    //   .chain(h => {
    //     console.log('memory: ', mem.byteLength)
    //     return fromPromise(h)(mem, ctx.msg, ctx.env)
    //   })
  }
}




---
File: /src/load-env.js
---

export function loadEnv(pid) {
  return fetch(`https://arweave-goldsky.arweave.net/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
query {
  transactions(ids: ["${pid}"]) {
    edges {
      node {
        id,
        owner {
          address
        },
        tags {
          name,
          value
        }
      }
    }
  }
}
      
      `
    })
  }).then(res => res.json())
    .then(res => res.data?.transactions?.edges[0]?.node)
    .then(async process => {
      
      process.owner = process.owner.address
      if (process.owner == "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY") {
        process.owner = process.tags.find(t => t.name === "From-Process")?.value
      }
      // get module
      const mid = process.tags.find(t => t.name === "Module")?.value
      const module = await fetch(`https://arweave-search.goldsky.com/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `
    query {
      transactions(ids: ["${mid}"]) {
        edges {
          node {
            id,
            owner {
              address
            },
            tags {
              name,
              value
            }
          }
        }
      }
    }`
      })       
    })
    .then(res => res.json())
    .then(res => res.data?.transactions?.edges[0]?.node)
    module.owner = module.owner.address
    return { Process: capitalizeKeys(process), Module: capitalizeKeys(module) }
  })

}

function capitalizeKeys(obj) {
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      newObj[capitalizedKey] = obj[key];
    }
  }
  return newObj;
}


---
File: /src/pack-lua.js
---

import path from 'path'
import fs from 'fs'

/**
 * @typedef Module
 * @property {string} name
 * @property {string} path
 * @property {string|undefined} content
 */

/**
 * @param {Module[]} project 
 * @returns {[string, Module[]]}
 */
export function createExecutableFromProject(project) {
  const getModFnName = (name) => name.replace(/\./g, '_').replace(/^_/, '')
  /** @type {Module[]} */
  const contents = []

  // filter out repeated modules with different import names
  // and construct the executable Lua code
  // (the main file content is handled separately)
  for (let i = 0; i < project.length - 1; i++) {
    const mod = project[i]

    const existing = contents.find((m) => m.path === mod.path)
    const moduleContent = (!existing && `-- module: "${mod.name}"\nlocal function _loaded_mod_${getModFnName(mod.name)}()\n${mod.content}\nend\n`) || ''
    const requireMapper = `\n_G.package.loaded["${mod.name}"] = _loaded_mod_${getModFnName(existing?.name || mod.name)}()`

    contents.push({
      ...mod,
      content: moduleContent + requireMapper
    })
  }

  // finally, add the main file
  contents.push(project[project.length - 1])

  return [
    contents.reduce((acc, con) => acc + '\n\n' + con.content, ''),
    contents
  ]
}

/**
 * Create the project structure from the main file's content
 * @param {string} mainFile
 * @return {Module[]}
 */
export function createProjectStructure(mainFile) {
  const sorted = []
  const cwd = path.dirname(mainFile)

  // checks if the sorted module list already includes a node
  const isSorted = (node) => sorted.find(
    (sortedNode) => sortedNode.path === node.path
  )

  // recursive dfs algorithm
  function dfs(currentNode) {
    const unvisitedChildNodes = exploreNodes(currentNode, cwd).filter(
      (node) => !isSorted(node)
    )

    for (let i = 0; i < unvisitedChildNodes.length; i++) {
      dfs(unvisitedChildNodes[i])
    }

    if (!isSorted(currentNode))
      sorted.push(currentNode)
  }

  // run DFS from the main file
  dfs({ path: mainFile })

  return sorted.filter(
    // modules that were not read don't exist locally
    // aos assumes that these modules have already been
    // loaded into the process, or they're default modules
    (mod) => mod.content !== undefined
  )
}

/**
 * Find child nodes for a node (a module)
 * @param {Module} node Parent node
 * @param {string} cwd Project root dir
 * @return {Module[]}
 */
function exploreNodes(node, cwd) {
  if (!fs.existsSync(node.path)) return []

  // set content
  node.content = fs.readFileSync(node.path, 'utf-8')

  // Don't include requires that are commented (start with --)
  const requirePattern = /(?<!^.*--.*)(?<=(require( *)(\n*)(\()?( *)("|'))).*(?=("|'))/gm
  const requiredModules = node.content.match(requirePattern)?.map(
    (mod) => {
      return {
        name: mod,
        path: path.join(cwd, mod.replace(/\./g, '/') + '.lua'),
        content: undefined
      }
    }
  ) || []

  return requiredModules
}

export function pack(startFile) {
  const projectStructure = createProjectStructure(startFile)
  const [executable, modules] = createExecutableFromProject(projectStructure)
  return executable
}


---
File: /src/process-env.js
---

export async function fetchEnv(pid) {
  const processTx = await fetchTx(pid)
  const mod = processTx.tags.find(t => t.name === "Module").value
  const moduleTx = await fetchTx(mod)
  return { Process: processTx, Module: moduleTx }

}

async function fetchTx(tx) {
  try {
    const response = await fetch(`https://arweave.net/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
query {
  transaction(id: "${tx}") {
    id
    tags {
      name
      value
    }
    block {
      height
    }
  }
}
      `
      })
    })
    if (!response.ok) {
      throw new Error(`Could not fetch Tx: ${pid}`)
    }
    const result = await response.json()
    //console.log(result)
    return result.data?.transaction
  } catch (err) {
    console.log("Error: ", err)
    throw err
  }
}


---
File: /test/index.test.js
---

import { aoslocal, SQLITE } from '../src/index.js'
import { test } from 'node:test'
import * as assert from 'node:assert'

test('basic', async () => {
  try {
    const aos = await aoslocal(SQLITE)
    await aos.src("./test/example.lua")
    // await aos.send({
    //   Target: "TEST_PROCESS_ID",
    //   Owner: "OWNER",
    //   Action: "Info",
    //   Data: "Hello World"
    // })
    const result = await aos.eval("Hello('bill')")
    assert.equal(result.Output.data, 'Bonjour bill')

  } catch (e) {
    console.log(e)
  }
})



---
File: /test/load-env.test.js
---

import { test } from 'node:test'
import * as assert from 'node:assert'
import { loadEnv } from '../src/load-env.js'

test("get env by process", async () => {
  const env = await loadEnv('dBbZhQoV4Lq9Bzbm0vlTrHmOZT7NchC_Dillbmqx0tM')
  console.log(env)
})
