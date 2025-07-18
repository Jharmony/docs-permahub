# EN Technical Documentation

Generated: 2025-07-03T18:42:53.536Z

This file contains technical reference documentation and release notes.



# API AND FUNCTION REFERENCES



## ao Module
Source: https://cookbook_ao.arweave.net/references/ao.html

version: 0.0.3

`ao` process communication is handled by messages, each process receives messages in the form of [ANS-104 DataItems](https://specs.arweave.net/view/xwOgX-MmqN5_-Ny_zNu2A8o-PnTGsoRb_3FrtiMAkuw), and needs to be able to do the following common operations.

- [ao.send(msg)](#ao-send-msg-message) - send message to another process
- [ao.spawn(module, msg)](#ao-spawn-module-string-spawn-spawn) - spawn a process

The goal of this library is to provide this core functionality in the box of the `ao` developer toolkit. As a developer you have the option to leverage this library or not, but it integrated by default.

## Properties

| Name               | Description                                                                                                  | Type     |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | -------- |
| id                 | Process Identifier (TxID)                                                                                    | string   |
| \_module           | Module Identifier (TxID)                                                                                     | string   |
| authorities        | Set of Trusted TXs                                                                                           | string   |
| Authority          | Identifiers that the process is able to accept transactions from that are not the owner or the process (0-n) | string   |
| \_version          | The version of the library                                                                                   | string   |
| reference          | Reference number of the process                                                                              | number   |
| env                | Evaluation Environment                                                                                       | object   |
| outbox             | Holds Messages and Spawns for response                                                                       | object   |
| assignables        | List of assignables of the process                                                                           | list     |
| nonExtractableTags | List of non-extractable tags of the process                                                                  | list     |
| nonForwardableTags | List of non-forwardable tags of the process                                                                  | list     |
| init               | Initializes the AO environment                                                                               | function |
| send               | Sends a message to a target process                                                                          | function |
| assign             | Assigns a message to the process                                                                             | function |
| spawn              | Spawns a process                                                                                             | function |
| result             | Returns the result of a message                                                                              | function |
| isTrusted          | Checks if a message is trusted                                                                               | function |
| isAssignment       | Checks if a message is an assignment                                                                         | function |
| isAssignable       | Checks if a message is assignable                                                                            | function |
| addAssignable      | Adds an assignable to the assignables list                                                                   | function |
| removeAssignable   | Removes an assignable from the assignables list                                                              | function |
| clearOutbox        | Clears the outbox                                                                                            | function |
| normalize          | Normalizes a message by extracting tags                                                                      | function |
| sanitize           | Sanitizes a message by removing non-forwardable tags                                                         | function |
| clone              | Clones a table recursively                                                                                   | function |

### Environment Schema

The `ao.env` variable contains information about the initializing message of the process. It follows this schema:

```lua
ao.env = {
  Process = {
    Id = string,      -- Process ID
    Owner = string,   -- Process owner
    TagArray = {      -- Array of name-value pairs
      { name = string, value = string }
    },
    Tags = {          -- Tags as key-value pairs
      [string] = string
    }
  }
}
```

#### Example

```lua
{
  Process = {
    Id = "A1b2C3d4E5f6G7h8I9j0K1L2M3N4O5P6Q7R8S9T0",
    Owner = "Xy9PqW3vR5sT8uB1nM6dK0gF2hL4jC7iE9rV3wX5",
    TagArray = {
      { name = "App-Name", value = "aos" }
    },
    Tags = {
      ["App-Name"] = "aos"
    }
  }
}
```

## Methods

### `ao.send(msg: Message)`

Takes a [Message](#message) as input. The function adds `ao`-specific tags and stores the message in `ao.outbox.Messages`.

#### Example

```lua
local message = ao.send({
    Target = msg.From,
    Data = "ping",
    Tags = {
        ["Content-Type"] = "text/plain",
        ["Action"] = "Ping"
    }
})

-- or

local message = ao.send({
    Target = msg.From,
    Data = "ping",
    Action = "Ping",               -- will be converted to Tags
    ["Content-Type"] = "text/plain"  -- will be converted to Tags
})
```

### `ao.spawn(module: string, spawn: Spawn)`

Takes a module ID string and [Spawn](#spawn) as input. Returns a Spawn table with a generated `Ref_` tag.

#### Example

```lua
local process = ao.spawn("processId", {
    Data = { initial = "state" },
    Tags = {
        ["Process-Type"] = "calculator"
    }
})
```

### `ao.assign(assignment: Assignment)`

Takes an [Assignment](#assignment) as input. Adds the assignment to `ao.outbox.Assignments`.

#### Example

```lua
ao.assign({
    Processes = {"process-1", "process-2"},
    Message = "sample-message-id"
})
```

### `ao.result(result: Result)`

Takes a [Result](#result) as input. Returns the final process execution result.

#### Example

```lua
local process_result = ao.result({
    Output = "Process completed successfully",
    Messages = {
        { Target = "ProcessY", Data = "Result data", Tags = { ["Status"] = "Success" } }
    },
    Spawns = { "spawned-process-1" },
    Assignments = { {Processes = { "process-1" }, Message = "assignment-message-id"} }
})
```

### `ao.isAssignable(msg: Message)`

Takes a [Message](#message) as input. Returns `true` if the message matches a pattern in `ao.assignables`.

#### Example

```lua
local can_be_assigned = ao.isAssignable({
    Target = "ProcessA",
    Data = "Some content",
    Tags = {
         ["Category"] = "Info"
    }
})
```

### `ao.isAssignment(msg: Message)`

Takes a [Message](#message) as input. Returns `true` if the message is assigned to a different process.

#### Example

```lua
local is_assigned_elsewhere = ao.isAssignment({
    Target = "AnotherProcess"
})
```

### `ao.addAssignable(name: string, condition: function)`

Adds a named condition function to the process's list of assignables. Messages matching any condition will be accepted when assigned.

> **Note:** The `condition` parameter uses a similar pattern matching approach as the `pattern` parameter in `Handlers.add()`. For more advanced pattern matching techniques, see the [Handlers Pattern Matching documentation](../references/handlers.md#pattern-matching-tables).

#### Example

```lua
-- Allow transactions from ArDrive
ao.addAssignable("allowArDrive", function (msg)
    return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- Allow transactions with specific content type
ao.addAssignable("allowJson", function (msg)
    return msg.Tags["Content-Type"] == "application/json"
end)
```

### `ao.removeAssignable(name: string)`

Removes a previously added assignable condition from the process's list of assignables.

#### Example

```lua
ao.removeAssignable("allowArDrive")
```

### `ao.isTrusted(msg: Message)`

Takes a [Message](#message) as input. Returns `true` if the message is from a trusted source.

#### Example

```lua
if ao.isTrusted(msg) then
    -- Process trusted message
else
    -- Handle untrusted message
end
```

## Custom `ao` Table Structures

### Tags

Used by: `ao.send()`, `ao.spawn()`, `ao.normalize()`, `ao.sanitize()`

All of the below syntaxes are valid, but each syntax gets converted to `{ name = string, value = string }` tables behind the scenes. We use **alternative 1** throughout the documentation for brevity and consistency.

```lua
-- Default: Array of name-value pair tables
Tags = {
    { name = "Content-Type", value = "text/plain" },
    { name = "Action", value = "Ping" }
}

-- Alternative 1: Direct key-value pairs in Tags table using string keys
Tags = {
    ["Content-Type"] = "text/plain",
    ["Action"] = "Ping"
}

-- Alternative 2: Direct key-value pairs in Tags table using dot notation
Tags = {
    Category = "Info",
    Action = "Ping"
}
```

::: info Root-level Tag Conversion
Any keys in the root message object that are not one of: `Target`, `Data`, `Anchor`, `Tags`, or `From` will automatically be converted into Tags using the key as the tag name and its value as the tag value.

```lua
-- These root-level keys will be automatically converted to Tags
{
    Target = "process-id",
    Data = "Hello",
    ["Content-Type"] = "text/plain",  -- Will become a Tag
    Action = "Ping"                   -- Will become a Tag
}
```

:::

### Message

Used by: `ao.send()`, `ao.isTrusted()`, `ao.isAssignment()`, `ao.isAssignable()`, `ao.normalize()`, `ao.sanitize()`

```lua
-- Message structure
{
    Target = string,     -- Required: Process/wallet address
    Data = any,          -- Required: Message payload
    Tags = Tag<table>
}
```

### Spawn

Used by: `ao.spawn()`

```lua
-- Spawn structure
{
    Data = any,          -- Required: Initial process state
    Tags = Tag<table>    -- Required: Process tags
}
```

### Assignment

Used by: `ao.assign()`, `ao.result()`

```lua
-- Assignment configuration table structure
{
    Processes = { string }, -- Required: List of target process ID strings
    Message = string       -- Required: Message to assign
}
```

### Result

Used by: `ao.result()`

```lua
-- Process result structure
{
    Output = string,           -- Optional: Process output
    Messages = Message<table>,   -- Optional: Generated messages
    Spawns = Spawn<table>,        -- Optional: Spawned processes
    Assignments = Assignment<table>,    -- Optional: Process assignments
    Error = string         -- Optional: Error information
}
```

## BetterIDEa
Source: https://cookbook_ao.arweave.net/references/betteridea/index.html

[BetterIDEa](https://ide.betteridea.dev) is a custom web based IDE for developing on ao.

It offers a built in Lua language server with ao definitions, so you don't need to install anything. Just open the IDE and start coding!

Features include:

- Code completion
- Cell based notebook ui for rapid development
- Easy process management
- Markdown and Latex cell support
- Share projects with anyone through ao processes
- Tight integration with [ao package manager](https://apm.betteridea.dev)

Read detailed information about the various features and integrations of the IDE in the [documentation](https://docs.betteridea.dev).

## Community Resources
Source: https://cookbook_ao.arweave.net/references/community.html

This page provides a comprehensive list of community resources, tools, guides, and links for the AO ecosystem.

## Core Resources

[Autonomous Finance](https://www.autonomous.finance/)

- Autonomous Finance is a dedicated research and technology entity, focusing on the intricacies of financial infrastructure within the ao network.

[BetterIdea](https://betteridea.dev/)

- Build faster, smarter, and more efficiently with BetterIDEa, the ultimate native web IDE for AO development

[0rbit](https://www.0rbit.co/)

- 0rbit provides any data from the web to an ao process
  by utilizing the power of ao, and 0rbit nodes.
  The user sends a message to the 0rbit ao, 0rbit nodes fetches the data and the user process receives the data.

[ArweaveHub](https://arweavehub.com/)

- A community platform for the Arweave ecosystem featuring events, developer resources, and discovery tools.

[AR.IO](https://ar.io/)

- The first permanent cloud network built on Arweave, providing infrastructure for the permaweb with no 404s, no lost dependencies, and reliable access to applications and data through gateways, domains, and deployment tools.

## Developer Tools

- [AO Package Manager](https://apm_betteridea.arweave.net)

## Contributing

> Not seeing an AO Community Member or resource? Create an issue or submit a pull request to add it to this page: https://github.com/permaweb/ao-cookbook

## Cron Messages
Source: https://cookbook_ao.arweave.net/references/cron.html

ao has the ability to generate messages on a specified interval, this interval could be seconds, minutes, hours, or blocks. These messages automatically get evaluated by a monitoring process to inform the Process to evaluate these messages over time. The result is a real-time Process that can communicate with the full ao network or oracles in the outside network.

## Setting up cron in a process

The easiest way to create these cron messages is by spawning a new process in the aos console and defining the time interval.

```sh
aos [myProcess] --cron 5-minutes
```

When spawning a new process, you can pass a cron argument in your command line followed by the interval you would like the cron to tick. By default, cron messages are lazily evaluated, meaning they will not be evaluated until the next scheduled message. To initiate these scheduled cron messages, call `.monitor` in aos - this kicks off a worker process on the `mu` that triggers the cron messages from the `cu`. Your Process will then receive cron messages every `x-interval`.

```lua
.monitor
```

If you wish to stop triggering the cron messages simply call `.unmonitor` and this will stop the triggering process, but the next time you send a message, the generated cron messages will still get created and processed.

## Handling cron messages

Every cron message has an `Action` tag with the value `Cron`. [Handlers](handlers.md) can be defined to perform specific tasks autonomously, each time a cron message is received.

```lua
Handlers.add(
  "CronTick", -- Handler name
  Handlers.utils.hasMatchingTag("Action", "Cron"), -- Handler pattern to identify cron message
  function () -- Handler task to execute on cron message
    -- Do something
  end
)
```

Cron messages are a powerful utility that can be used to create "autonomous agents" with expansive capabilities.

## Accessing Data from Arweave with ao
Source: https://cookbook_ao.arweave.net/references/data.html

There may be times in your ao development workflow that you want to access data from Arweave. With ao, your process can send an assignment instructing the network to provide that data to your Process.

## Defining Acceptable Transactions (Required First Step)

Before you can assign any Arweave transaction to your process, you must first define which transactions your process will accept using [`ao.addAssignable`](../references/ao.md#ao-addassignable-name-string-condition-function). This function creates conditions that determine which Arweave transactions your process will accept.

```lua
-- Allow transactions from ArDrive
ao.addAssignable("allowArDrive", function (msg)
    return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- Allow specific content types
ao.addAssignable("allowImages", function (msg)
    return msg.Tags["Content-Type"] and string.match(msg.Tags["Content-Type"], "^image/")
end)
```

> **Warning:** If you attempt to assign a transaction without first defining a matching assignable pattern, that transaction will be permanently blacklisted and can never be assigned to your process, even if you later add a matching assignable.

You can remove assignables with `ao.removeAssignable("<name>")`.

The condition functions use similar pattern matching techniques as found in the [Handlers documentation](../references/handlers.md#pattern-matching-tables). For complete details on the `ao.addAssignable` function, including parameter descriptions and additional examples, see the [ao Module Reference](../references/ao.md#ao-addassignable-name-string-condition-function).

## Assignment Methods

After defining acceptable transactions and setting up your listener (if needed), you can request Arweave data in one of two ways:

### Using `Assign`

The primary method to request data from Arweave:

```lua
Assign({
  Processes = { ao.id },
  Message = '<arweave-transaction-id>'
})
```

### Using `Send` with `Assignments`

Alternatively, you can use the `Send` function with an `Assignments` parameter:

```lua
Send({
  Target = ao.id,
  Data = 'Hello World',
  Assignments = { '<process-id-1>', '<process-id-2>' }
})
```

## Working with Assigned Data

You can process assigned data using either `Receive` or `Handlers`:

### Using `Receive` Directly

```lua
-- Listen for messages from ArDrive
ArweaveData = Receive(function(msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- Process the data when received
if ArweaveData then
  print(ArweaveData.Tags["App-Name"])
  -- Raw Arweave Data is available in ArweaveData.Data
end
```

You can also match specific transactions or combine conditions:

```lua
-- Match a specific transaction ID
ArweaveData = Receive({ Id = "<arweave-transaction-id>" })

-- Or combine multiple conditions
ArweaveData = Receive(function(msg)
  return msg.Tags["App-Name"] == "ArDrive-CLI" and
         msg.Tags["Content-Type"] == "image/png"
end)
```

> **Note:** When using [`.load`](../guides/aos/load.md#load-lua-files-with-load-filename), the script pauses at `Receive` until data arrives. When running commands separately in the shell, each command executes independently.

### Using Handlers

For persistent processing, set up a handler:

```lua
Handlers.add("ProcessArDriveFiles",
  { Tags = { ["App-Name"] = "ArDrive-App" } },
  function(msg)
    print(msg.Tags["App-Name"])
    -- Raw Arweave Data is available in msg.Data
  end
)
```

Handlers are ideal for:

- Processing multiple assignments over time
- Automated processing without manual intervention
- Building services that other processes can interact with

For more details, see the [Messaging Patterns](../references/messaging.md#receive-capital-r-blocking-pattern-matcher) and [Handlers](../references/handlers.md#pattern-matching-tables) documentation.

## Complete Example Workflow

Here's a complete example that demonstrates the entire process of accessing data from an Arweave transaction:

```lua
-- Step 1: Define which transactions your process will accept
ao.addAssignable("allowArDrive", function (msg)
    return msg.Tags["App-Name"] == "ArDrive-App"
end)

-- Step 2: Request the data
Assign({
  Processes = { ao.id },
  Message = '<arweave-transaction-id>'
})

-- Step 3: Immediately capture the Assignment; blocking until received
ArweaveData = Receive(function(msg)
  return msg.Tags["App-Name"] == "ArDrive-App"
end)

print(ArweaveData.Tags["App-Name"]) -- e.g., "ArDrive-CLI"
-- Raw Arweave Data is available in ArweaveData.Data
```

This pattern creates a synchronous flow where your process:

1. Defines acceptable transactions
2. Requests the data
3. Captures the data using `Receive`
4. Processes the data

## Practical Examples

Here are two practical examples showing different approaches to working with Arweave data in your ao process:

### Example 1: Caching Arweave Data

This example demonstrates how to load and cache data from Arweave, then use it in subsequent operations:

```lua
-- Initialize state
local Number = 0

-- Step 1: Define which transactions your process will accept
print("Step 1: Defining acceptable transactions")
ao.addAssignable("addNumber", function (msg)
    return msg.Tags["Action"] == "Number"
end)

-- Step 2: Request and cache the initial number from Arweave
-- This uses a self-executing function to fetch and cache the value only once
NumberFromArweave = NumberFromArweave or (function()
    print("Step 2: Requesting initial number from Arweave")
    Assign({
        Processes = { ao.id },
        Message = 'DivdWHaNj8mJhQQCdatt52rt4QvceBR_iyX58aZctZQ'
    })
    return tonumber(Receive({ Action = "Number"}).Data)
end)()

-- Step 3: Set up handler for future number updates
-- This handler will add new numbers to our cached Arweave number
Handlers.add("Number", function (msg)
    print("Received message with Data = " .. msg.Data)
    print("Old Number: " .. Number)
    Number = NumberFromArweave + tonumber(msg.Data)
    print("New Number: " .. Number)
end)
```

This example shows how to:

- Cache Arweave data using a self-executing function
- Use the cached data in subsequent message handling
- Combine Arweave data with new incoming data

### Example 2: Dynamic Transaction Processing

This example shows how to process arbitrary Arweave transactions and maintain state between requests:

```lua
-- Table to store pending requests (maps transaction ID to original sender)
local PendingRequests = {}

-- Step 1: Define which transactions your process will accept
print("Step 1: Defining acceptable transactions")
ao.addAssignable("processArweaveNumber", function (msg)
    return msg.Tags["Action"] == "Number"
end)

-- Step 2: Set up handler for initiating the processing
Handlers.add(
    "ProcessArweaveNumber",
    function (msg)
        if not msg.Tags["ArweaveTx"] then
            print("Error: No ArweaveTx tag provided")
            return
        end
        local txId = msg.Tags["ArweaveTx"]
        print("Assigning Arweave transaction: " .. txId)
        -- Store the original sender associated with this transaction ID
        PendingRequests[txId] = msg.From
        -- Assign the transaction to this process
        Assign({
            Processes = { ao.id },
            Message = txId
        })
        print("Assignment requested; waiting for data...")
    end
)

-- Step 3: Set up handler for processing the assigned message
Handlers.add(
    "Number",
    function (msg)
        local txId = msg.Id  -- The ID of the assigned message
        local originalSender = PendingRequests[txId]
        if not originalSender then
            print("Error: No pending request found for transaction " .. txId)
            return
        end
        local data = msg.Data
        if not data or not tonumber(data) then
            print("Error: Invalid number data in assigned message")
            return
        end
        local number = tonumber(data)
        local result = number + 1
        print(string.format("Processing: %d + 1 = %d", number, result))
        -- Send the result back to the original sender
        Send({
            Target = originalSender,
            Data = tostring(result)
        })
        -- Clean up the pending request
        PendingRequests[txId] = nil
    end
)
```

To use this example:

```lua
Send({
    Target = ao.id,
    Action = "ProcessArweaveNumber",
    Tags = {
        ArweaveTx = "YOUR-ARWEAVE-TX-ID"  -- ID of a transaction containing a number
    }
})
```

This example demonstrates:

- Processing arbitrary Arweave transactions
- Maintaining state between requests using a pending requests table
- Sending results back to the original requester
- Error handling and request cleanup

:::warning
When using `Assign` to bridge Arweave data into AO, you must ensure that:

1. The Arweave transaction you're assigning matches one of your defined assignables
2. You have a corresponding handler or receiver set up to process that transaction type
3. The handler's pattern matching matches the assigned transaction's tags/properties

For example, if you're assigning a transaction with `Action = "Number"`, you need:

- An assignable that accepts `msg.Tags["Action"] == "Number"`
- Either a `Receive` function or a handler that matches the same pattern
- Both the assignable and handler must use consistent pattern matching
  :::

## Important Limitations {#assignable-limitations}

There are critical limitations to be aware of when working with assignables:

1. **Matching is Required**: Transactions must match at least one of your defined assignable patterns to be accepted.

2. **Blacklisting is Permanent**: If you attempt to assign a transaction before defining an appropriate assignable, it will be permanently blacklisted. Even if you later add a matching assignable, that transaction will never be accepted.

3. **One-time Assignment**: Each Arweave transaction can only be assigned once to a given process. Subsequent assignments of the same transaction will be ignored.

## Proper Sequence for Assigning Arweave Transactions

For successful assignment of Arweave transactions, follow these steps:

1. **Define assignables** to specify which Arweave transactions your process will accept
2. **Wait for any transaction confirmations** (by default, 20 confirmations are required)
3. **Set up handlers or listeners** with `Receive` or `Handlers.add` to process the data
4. **Assign the Arweave transaction** to your process (see [Assignment Methods](#assignment-methods))

The order of steps 3 and 4 can be interchanged based on your needs:

- When using `Receive` in a script loaded with `.load`, ensure `Assign` is placed before `Receive` to prevent the process from hanging, as `Receive` is blocking.
- When using handlers or running commands separately in the shell, the order doesn't matter as handlers will catch messages whenever they arrive

## Why Access Data from Arweave?

There are several practical reasons to access Arweave data from your ao process:

1. **Efficient Handling of Large Data**: For larger content, directly accessing Arweave is more efficient:

   - Reference large media files (images, videos, documents) without storing them in your process
   - Work with datasets too large to fit in process memory
   - Maintain a lightweight process that can access substantial external resources

2. **External Data for Decision-Making**: Your process may need data stored on Arweave to make informed decisions. For example:

   - Reading token price data stored by an oracle
   - Accessing verified identity information
   - Retrieving voting records or governance data

3. **Dynamic Loading of Features**: Rather than including all functionality in your initial process code:

   - Load modules or plugins from Arweave as needed
   - Update configuration without redeploying your entire process
   - Implement upgradable components with new versions stored on Arweave

This approach allows you to create more sophisticated applications that leverage Arweave's permanent storage while maintaining efficient process execution in the ao environment.

When another process Assigns a transaction to this process, you can also use handlers to process the data asynchronously.

## Editor setup
Source: https://cookbook_ao.arweave.net/references/editor-setup.html

Remembering all the built in ao functions and utilities can sometimes be hard. To enhance your developer experience, it is recommended to install the [Lua Language Server](https://luals.github.io) extension into your favorite text editor and add the [ao addon](https://github.com/martonlederer/ao-definitions). It supports all built in aos [modules](../guides/aos/modules/index.md) and [globals](../guides/aos/intro.md#globals).

## VS Code

Install the [sumneko.lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) extension:

1. Search for "Lua" by sumneko in the extension marketplace
2. Download and install the extension
3. Open the VS Code command palette with `Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows/Linux) and run the following command:

```
> Lua: Open Addon Manager
```

4. In the Addon Manager, search for "ao", it should be the first result. Click "Enable" and enjoy autocomplete!

## Other editors

1. Verify that your editor supports the [language server protocol](https://microsoft.github.io/language-server-protocol/implementors/tools/)
2. Install Lua Language Server by following the instructions at [luals.github.io](https://luals.github.io/#install)
3. Install the "ao" addon to the language server

## BetterIDEa

[BetterIDEa](https://ide.betteridea.dev) is a custom web based IDE for developing on ao.

It offers a built in Lua language server with ao definitions, so you don't need to install anything. Just open the IDE and start coding!

Features include:

- Code completion
- Cell based notebook ui for rapid development
- Easy process management
- Markdown and Latex cell support
- Share projects with anyone through ao processes
- Tight integration with [ao package manager](https://apm.betteridea.dev)

Read detailed information about the various features and integrations of the IDE in the [documentation](https://docs.betteridea.dev).

## glossary
Source: https://cookbook_ao.arweave.net/references/glossary.html

<style>
  .glossary-iframe {
    height: 500px;
    width: 100%;
    border: none;
  }
  
  html:not(.dark) .dark-mode-iframe {
    display: none;
  }
  
  html.dark .light-mode-iframe {
    display: none;
  }
</style>

<iframe class="glossary-iframe light-mode-iframe" src="https://glossary.permagate.io/"></iframe>
<iframe class="glossary-iframe dark-mode-iframe" src="https://glossary.permagate.io/?link-color=%2334d399&bg-color=%231b1b1f&text-color=%23e0e0e0&border-color=%23444444&hover-bg=%23222222&heading-color=%23ffffff&button-bg=%23444444&button-text=%23ffffff&section-bg=%23333333&section-color=%23ffffff&category-bg=%23333333&category-text=%23ffffff&tag-bg=%233a3a3a&tag-text=%23e0e0e0&secondary-text=%23a0a0a0&result-bg=%231e1e1e&result-hover=%23333333"></iframe>

## Handlers (Version 0.0.5)
Source: https://cookbook_ao.arweave.net/references/handlers.html

## Overview

The Handlers library provides a flexible way to manage and execute a series of process functions based on pattern matching. An AO process responds based on receiving Messages, these messages are defined using the Arweave DataItem specification which consists of Tags, and Data. Using the Handlers library, you can define a pipeline of process evaluation based on the attributes of the AO Message. Each Handler is instantiated with a name, a pattern matching function, and a function to execute on the incoming message. This library is suitable for scenarios where different actions need to be taken based on varying input criteria.

## Concepts

### Handler Arguments Overview

When adding a handler using `Handlers.add()`, you provide three main arguments:

1. `name` (string): The identifier for your handler
2. `pattern` (table or function): Defines how to match incoming messages
3. `handler` (function or resolver table): Defines what to do with matched messages

### Pattern Matching Tables

Pattern Matching Tables provide a declarative way to match incoming messages based on their attributes. This is used as the second argument in `Handlers.add()` to specify which messages your handler should process.

#### Basic Pattern Matching Rules

1. **Simple Tag Matching**

   ```lua
   { "Action" = "Do-Something" }  -- Match messages that have an exact Action tag value
   ```

2. **Wildcard Matching**

   ```lua
   { "Recipient" = '_' }  -- Match messages with any Recipient tag value
   ```

3. **Pattern Matching**

   ```lua
   { "Quantity" = "%d+" }  -- Match using Lua string patterns (similar to regex)
   ```

4. **Function-based Matching**
   ```lua
   { "Quantity" = function(v) return tonumber(v) ~= nil end }  -- Custom validation function
   ```

#### Common Pattern Examples

1. **Balance Action Handler**

   ```lua
   { Action = "Balance" }  -- Match messages with Action = "Balance"
   ```

2. **Numeric Quantity Handler**
   ```lua
   { Quantity = "%d+" }  -- Match messages where Quantity is a number
   ```

### Default Action Handlers (AOS 2.0+)

AOS 2.0 introduces simplified syntax for Action-based handlers. Instead of writing explicit pattern functions, you can use these shorthand forms:

```lua
-- Traditional syntax
Handlers.add("Get-Balance", function (msg) return msg.Action == "Balance", doBalance)

-- Simplified syntax options:
Handlers.add("Balance", "Balance", doBalance)  -- Explicit action matching
Handlers.add("Balance", doBalance)             -- Implicit action matching
```

### Resolvers

Resolvers are special tables that can be used as the third argument in `Handlers.add()` to enable conditional execution of functions based on additional pattern matching. Each key in a resolver table is a pattern matching table, and its corresponding value is a function that executes when that pattern matches.

```lua
Handlers.add("Update",
  {
    [{ Status = "Ready" }] = function (msg) print("Ready") end,
    [{ Status = "Pending" }] = function (msg) print("Pending") end,
    [{ Status = "Failed" }] = function (msg) print("Failed") end
  }
)
```

This structure allows developers to create switch/case-like statements where different functions are triggered based on which pattern matches the incoming message. Resolvers are particularly useful when you need to handle a group of related messages differently based on additional criteria.

## Module Structure

- `Handlers._version`: String representing the version of the Handlers library.
- `Handlers.list`: Table storing the list of registered handlers.

## Common Handler Function Parameters

| Parameter            | Type                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | `string`                         | The identifier of the handler item in the handlers list.                                                                                                                                                                                                                                                                                                                                                                |
| `pattern`            | `table` or `function`            | Specifies how to match messages. As a table, defines required message tags with string values (e.g. `{ Action = "Balance", Recipient = "_" }` requires an "Action" tag with string value "Balance" and any string "Recipient" tag value). As a function, takes a message DataItem and returns: "true" (invoke handler and exit pipeline), "false" (skip handler), or "continue" (invoke handler and continue pipeline). |
| `handler`            | (Resolver) `table` or `function` | Either a resolver table containing pattern-function pairs for conditional execution, or a single function that processes the message. When using a resolver table, each key is a pattern matching table and its value is the function to execute when that pattern matches. When using a function, it takes the message DataItem as an argument and executes business logic.                                            |
| `maxRuns` (optional) | number                           | As of 0.0.5, each handler function takes an optional function to define the amount of times the handler should match before it is removed. The default is infinity.                                                                                                                                                                                                                                                     |

## Functions

### `Handlers.add(name, pattern, handler)`

Adds a new handler or updates an existing handler by name

### `Handlers.append(name, pattern, handler)`

Appends a new handler to the end of the handlers list.

### `Handlers.once(name, pattern, handler)`

Only runs once when the pattern is matched. Equivalent to setting `maxRuns = 1`. This is the underlying implementation used by the `Receive` function in the messaging system.

### `Handlers.prepend(name, pattern, handler)`

Prepends a new handler to the beginning of the handlers list.

### `Handlers.before(handleName)`

Returns an object that allows adding a new handler before a specified handler.

### `Handlers.after(handleName)`

Returns an object that allows adding a new handler after a specified handler.

### `Handlers.remove(name)`

Removes a handler from the handlers list by name.

## Handler Execution Notes

### Execution Order

- Handlers are executed in the order they appear in `Handlers.list`.
- When a message arrives, each handler's pattern function is called sequentially to determine if it should process the message.

### Pattern Function Return Values

Pattern functions determine the message handling flow based on their return values:

1. **Skip Handler (No Match)**

   - **Return**: `0`, `false`, or any string except "continue" or "break"
   - **Effect**: Skips current handler and proceeds to the next one in the list

2. **Handle and Continue**

   - **Return**: `1` or `"continue"`
   - **Effect**: Processes the message and continues checking subsequent handlers
   - **Use Case**: Ideal for handlers that should always execute (e.g., logging)

3. **Handle and Stop**
   - **Return**: `-1`, `true`, or `"break"`
   - **Effect**: Processes the message and stops checking further handlers
   - **Use Case**: Most common scenario where a handler exclusively handles its matched message

### Practical Examples

- **Logging Handler**: Place at the start of the list and return `"continue"` to log all messages while allowing other handlers to process them.
- **Specific Message Handler**: Return `"break"` to handle matched messages exclusively and prevent further processing by other handlers.

## Handlers.utils

The `Handlers.utils` module provides two functions that are common matching patterns and one function that is a common handle function.

- `hasMatchingData(data: string)`
- `hasMatchingTag(name: string, value: string)`
- `reply(text: string)`

### `Handlers.utils.hasMatchingData(data: string)`

- This helper function returns a pattern matching function that takes a message as input. The returned function checks if the message's `Data` field contains the specified string. You can use this helper directly as the pattern argument when adding a new handler.

  ```lua
  Handlers.add("ping",
      Handlers.utils.hasMatchingData("ping"),
      ...
  )
  ```

### `Handlers.utils.hasMatchingTag(name: string, value: string)`

- This helper function returns a pattern matching function that takes a message as input. The returned function checks if the message has a tag with the specified `name` and `value`. If they match exactly, the pattern returns true and the handler function will be invoked. This helper can be used directly as the pattern argument when adding a new handler.

  ```lua
  Handlers.add("ping",
      Handlers.utils.hasMatchingTag("Action", "Ping"),
      ...
  )
  ```

### `Handlers.utils.reply(text: string)`

- This helper is a simple handle function, it basically places the text value in to the `Data` property of the outbound message.

  ```lua
  Handlers.add("ping",
      Handlers.utils.hasMatchingData("ping"),
      Handlers.utils.reply("pong")
  )
  ```

## Example Handlers

### Pattern Matching Table

```lua
Handlers.add("Ping",    -- Name of the handler
  { Action = "Ping" },  -- Matches messages with Action = "Ping" tag
  function(msg)         -- Business logic to execute on Message
    print("ping")
    msg.reply({ Data = "pong" })
  end
)
```

### Resolver Table Handler

```lua
Handlers.add("Foobarbaz",  -- Name of the handler
  { Action = "Speak" },    -- Matches messages with Action = "Speak" tag
  {
    -- Resolver with pattern-function pairs
    [{ Status = "foo" }] = function(msg) print("foo") end,
    [{ Status = "bar" }] = function(msg) print("bar") end,
    [{ Status = "baz" }] = function(msg) print("baz") end
  }
)
```

### Function-Based Pattern Matching & Handler

```lua
Handlers.add("Example",    -- Name of the handler
  function(msg)           -- Pattern function matches messages with Action = "Speak" tag
    return msg.Action == "Speak"
  end,
  function(msg)           -- Handler function that executes business logic
    print(msg.Status)
  end
)
```

## References
Source: https://cookbook_ao.arweave.net/references/index.html

This section provides detailed technical references for AO components, languages, and tools. Use these resources to find specific information when implementing your AO projects.

## Programming Languages

Resources for the programming languages used in AO:

- [Lua](./lua) - Reference for the Lua programming language, the primary language used in AO
- [WebAssembly (WASM)](./wasm) - Information about using WebAssembly modules in AO
- [Lua Optimization](./lua-optimization) - Techniques and best practices for optimizing Lua code in AO

## AO API Reference

Documentation for AO's core APIs and functionality:

- [AO Core](./ao) - Core `ao` module and API reference
- [Messaging](./messaging) - Comprehensive guide to the AO messaging system patterns
- [Handlers](./handlers) - Reference for event handlers and message processing
- [Token](./token) - Information about token creation and management
- [Arweave Data](./data) - Guide to data handling and storage in AO
- [Cron](./cron) - Documentation for scheduling and managing timed events

## Development Environment

Tools and setup for AO development:

- [Editor Setup](./editor-setup) - Guide to setting up your development environment for AO
- [BetterIDEa](./betteridea/index) - The ultimate native web IDE for AO development

## Community Resources

Connect with the AO community:

- [Community Resources](./community) - Information about AO community resources and support

## Navigation

Use the sidebar to navigate between reference topics. References are organized by category to help you find the information you need quickly.

## Lua Optimization Guide for AO Platform
Source: https://cookbook_ao.arweave.net/references/lua-optimization.html

This guide provides practical tips for writing efficient, fast, and performant Lua code for on-chain programs on the AO platform.

## Table Operations

### Appending Elements

```lua
-- ❌ Inefficient: Up to 7x slower in tight loops
table.insert(t, v)

-- ✅ Efficient: Direct indexing is ~2x faster
t[#t + 1] = v
```

### Removing Elements

```lua
-- ❌ Inefficient: Shifts all elements left
table.remove(t, 1)

-- ✅ Efficient: Remove from end
local x = t[#t]
t[#t] = nil
```

## Variable Access

### Local Variables

```lua
-- ❌ Inefficient: Global lookup each time
for i = 1, 1000 do
  math.sin(i)
end

-- ✅ Efficient: Cache the function
local sin = math.sin
for i = 1, 1000 do
  sin(i)  -- ~30% faster in loops
end
```

### Upvalues

```lua
-- ❌ Inefficient: Config lookup on each call
Handlers.add("ValidateGameToken",
  function(msg)
    local config = ao.config
    validateToken(msg, config)
  end
)

-- ✅ Efficient: Cache config as upvalue
local config = ao.config
Handlers.add("ValidateGameToken",
  function(msg)
    validateToken(msg, config)
  end
)
```

## String Operations

### String Concatenation

```lua
-- ❌ Inefficient: Creates many intermediate strings
local str = ""
for i = 1, N do
  str = str .. "line" .. i
end

-- ✅ Efficient: Single concatenation at end
local lines = {}
for i = 1, N do
  lines[i] = "line" .. i
end
local str = table.concat(lines)
```

### Pattern Matching

```lua
-- ❌ Inefficient: Recompiles pattern on each iteration
for line in io.lines() do
  if line:match("^%s*(%w+)%s*=%s*(%w+)") then
    -- Process match
  end
end

-- ✅ Efficient: Compile pattern once
local pattern = "^%s*(%w+)%s*=%s*(%w+)"
for line in io.lines() do
  if line:match(pattern) then
    -- Process match
  end
end
```

## Memory Management

### Table Reuse

```lua
-- ❌ Inefficient: Creates new table on each call
Handlers.add("ComputeGameResults",
  function(msg)
    local results = {}
    -- Fill results
    return results
  end
)

-- ✅ Efficient: Reuse and clear table
local results = {}
Handlers.add("ComputeGameResults",
  function(msg)
    for k in pairs(results) do results[k] = nil end
    -- Fill results
    return results
  end
)
```

### Minimize Garbage Creation

```lua
-- ❌ Inefficient: Creates new response table on every transfer
local function createTransferResponse(sender, recipient, amount)
  return {
    from = sender,
    to = recipient,
    quantity = amount,
    success = true,
    newBalance = Balances[sender],
    tags = {
      Action = "Transfer-Complete",
      Type = "Token"
    }
  }
end

-- ✅ Efficient: Reuse template table
local transferResponse = {
  from = nil,
  to = nil,
  quantity = 0,
  success = false,
  newBalance = 0,
  tags = {
    Action = "Transfer-Complete",
    Type = "Token"
  }
}

local function createTransferResponse(sender, recipient, amount)
  transferResponse.from = sender
  transferResponse.to = recipient
  transferResponse.quantity = amount
  transferResponse.success = true
  transferResponse.newBalance = Balances[sender]
  return transferResponse
end
```

## Blockchain-Specific Optimizations

### State Management

```lua
-- ❌ Inefficient: Multiple separate state updates
for _, item in ipairs(items) do
  ao.send({ Target = "processID", Action = "Update", Data = item })
end

-- ✅ Efficient: Batch updates into single message
local updates = {}
for _, item in ipairs(items) do
  table.insert(updates, item)
end
ao.send({ Target = "processID", Action = "BatchUpdate", Data = updates })
```

## Additional Resources

- [Lua Performance Guide](https://www.lua.org/gems/sample.pdf)
- Special thanks to [@allquantor](https://x.com/allquantor/status/1887370546259644728?s=12) for sharing optimization tips

## Meet Lua
Source: https://cookbook_ao.arweave.net/references/lua.html

## Understanding Lua

- **Background**: Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded systems and clients. It's known for its efficiency, simplicity, and flexibility.
- **Key Features**: Lua offers powerful data description constructs, dynamic typing, efficient memory management, and good support for object-oriented programming.

## Setting Up

1. **Installation**: Visit [Lua's official website](http://www.lua.org/download.html) to download and install Lua.
2. **Environment**: You can use a simple text editor and command line, or an IDE like ZeroBrane Studio or Eclipse with a Lua plugin.

## Basic Syntax and Concepts (in aos)

- **Hello World**:
  ```lua
  "Hello, World!"
  ```
- **Variables and Types**: Lua is dynamically typed. Basic types include `nil`, `boolean`, `number`, `string`, `function`, `userdata`, `thread`, and `table`.
- **Control Structures**: Includes `if`, `while`, `repeat...until`, and `for`.
- **Functions**: First-class citizens in Lua, supporting closures and higher-order functions.
- **Tables**: The only data structuring mechanism in Lua, which can be used to represent arrays, sets, records, etc.

## Hands-On Practice

- **Experiment with Lua's Interactive Mode**: Run `aos` in your terminal and start experimenting with Lua commands.
- **Write Simple Scripts**: Create `.lua` files and run them using the Lua interpreter. Use `.load file.lua` feature to upload lua code on your `aos` process.

## Resources

- **Official Documentation**: [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/)
- **Online Tutorials**: Websites like [Learn Lua](https://www.learn-lua.org/) are great for interactive learning.
- **Books**: "Programming in Lua" (first edition available [online](http://www.lua.org/pil/contents.html)) is a comprehensive resource.
- **Community**: Join forums or communities like [Lua Users](http://lua-users.org/) for support and discussions.

## Best Practices

- **Keep It Simple**: Lua is designed to be simple and flexible. Embrace this philosophy in your code.
- **Performance**: Learn about Lua's garbage collection and efficient use of tables.
- **Integration**: Consider how Lua can be embedded into other applications, particularly C/C++ projects.

## Conclusion

Lua is a powerful language, especially in the context of embedded systems and game development. Its simplicity and efficiency make it a great choice for specific use cases. Enjoy your journey into Lua programming!

## Messaging Patterns in ao
Source: https://cookbook_ao.arweave.net/references/messaging.html

This reference guide explains the messaging patterns available in ao and when to use each one.

## Quick Reference: Choosing the Right Pattern

| If you need to...                                  | Process Flow        | Key function(s)                                                                                                                     |
| -------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Send a message without waiting for a response      | **_A → B_**         | [`ao.send`](#ao-send-asynchronous-message-sending)                                                                                  |
| Send a message and wait for a response             | **_A → B → A_**     | [`ao.send().receive()`](#ao-send-receive-lowercase-r-blocking-reference-matcher)                                                    |
| Process messages and respond to the sender         | **_B → A_**         | [`Handlers.add`](#msg-reply-asynchronous-response-sending) + [`msg.reply`](#msg-reply-asynchronous-response-sending)                |
| Create a chain of processing services              | **_A → B → C → A_** | [`msg.forward`](#msg-forward-message-forwarding) + [`ao.send().receive()`](#ao-send-receive-lowercase-r-blocking-reference-matcher) |
| Wait for any matching message regardless of sender | **_Any → A_**       | [`Receive`](#receive-capital-r-blocking-pattern-matcher) (capital R)                                                                |
| Create a standard automated response               | **_B → A_**         | [`Handlers.utils.reply`](#handlers-utils-reply-simple-reply-handler-creation)                                                       |

## Sending Messages

### `ao.send`: Asynchronous Message Sending

Non-blocking direct **_A → B_** messaging that returns immediately after sending.

- Use for fire-and-forget notifications or starting async conversations
- Returns a promise-like object that can be chained with [`.receive()`](#ao-send-receive-lowercase-r-blocking-reference-matcher) if needed
- Good for parallel processing since it doesn't block execution

```
Client (A) → Service (B)
   ↓           ↓
Continues    Processes
 execution    message
```

**Basic Send Example:**

```lua
-- Non-blocking send example
local serviceId = "process-789" -- Process ID of the target service

ao.send({
  Target = serviceId,
  Data = "Hello!",
  Action = "Greeting"
})
-- Code here runs immediately after sending
```

### `msg.reply`: Asynchronous Response Sending

Non-blocking **_B → A_** response with automatic reference tracking. Used within handlers to respond to incoming messages.

- Automatically links response to original message via [`X-Reference`](#message-properties)
- Enables asynchronous request-response patterns
- Automatically sets `Target` to the original sender or [`Reply-To`](#message-properties) address if specified

```
Client (A) → Service (B)
          ←
Response tagged with X-Reference
```

**Handler Reply Example:**

```lua
-- Non-blocking reply in a handler
Handlers.add("greeting-handler",
  { Action = "Greeting" },
  function(msg)
    msg.reply({ Data = "Hi back!" }) -- Returns immediately
    -- Handler continues executing here
  end
)
```

### `msg.forward`: Message Forwarding

Non-blocking multi-process routing for **_A → B → C → A_** patterns. Creates a sanitized copy of the original message.

- Takes a `target` and a partial message to overwrite forwarded message fields
- Preserves [`Reply-To`](#message-properties) and [`X-Reference`](#message-properties) properties for complete message tracking
- Sets [`X-Origin`](#message-properties) to original sender, enabling final service to reply directly to originator

```
Client (A) → Service (B) → Backend (C)
       ↖                       ↙
    Response with X-Reference
```

**Multi-Process Pipeline Example:**

```lua
-- In client process
local middlewareProcessId = "process-123"
local finalProcessId = "process-456"

-- Send to middleware and wait for response from final service
local response = ao.send({
  Target = middlewareProcessId,
  Action = "Transform",
  Data = "raw-data"
}).receive(finalProcessId)  -- Explicitly wait for response from final service

-- In middleware service
Handlers.add("transform-middleware",
  { Action = "Transform" },
  function(msg)
    local finalProcessId = "process-456"

    msg.forward(finalProcessId, {
      Data = msg.Data .. " (pre-processed)",
      Action = "Transform-Processed"
    })
  end
)

-- In final service
Handlers.add("final-processor",
  { Action = "Transform-Processed" },
  function(msg)
    -- No need to know the client ID - it's stored in X-Origin
    msg.forward(msg['X-Origin'], {
      Data = msg.Data .. " (final processing complete)",
      Action = "Transform-Complete"
    })
  end
)
```

### `Handlers.utils.reply`: Simple Reply Handler Creation

Creates a handler function that automatically replies with a fixed response. A wrapper around [`msg.reply`](#msg-reply-asynchronous-response-sending) for common use cases.

**Simple String Response Example:**

```lua
-- Simple string response handler
Handlers.add("echo-handler",
  { Action = "Echo" },
  Handlers.utils.reply("Echo reply!")
)

-- Equivalent to:
Handlers.add("echo-handler",
  { Action = "Echo" },
  function(msg)
    msg.reply({ Data = "Echo reply!" })
  end
)
```

**Message Table Response Example:**

```lua
-- Message table response handler
Handlers.add("status-handler",
  { Action = "Status" },
  Handlers.utils.reply({
    Data = "OK",
    Action = "Status-Response"
  })
)
```

## Receiving Messages

### `Receive` (Capital R): Blocking Pattern Matcher

Blocks execution until any matching message arrives from any sender. Under the hood, this is implemented using `Handlers.once`, making it a one-time pattern matcher that automatically removes itself after execution.

- Waits for any message matching the pattern, regardless of origin
- Use for synchronous message processing flows or event listening
- Automatically removes the handler after first match (using `Handlers.once` internally)

```
        Process (A)
            ↓
Blocks until match received
            ↓
    Continues execution
```

**Message Pattern Matching Example:**

```lua
-- Blocks until matching message received
local msg = Receive({
  Action = "Update"
})

if msg then
  -- Process message
end
```

### `ao.send().receive` (Lowercase r): Blocking Reference Matcher

Blocks execution until a specific reply arrives, enabling **_A → B → A_** and **_A → B → C → A_** request-response cycles.

- Only matches messages linked by [`X-Reference`](#message-properties)
- Can specify a target process ID to indicate which process will reply
- Implicitly waits for the proper response based on message reference chains
- For **_A → B → A_** flows, process B uses [`msg.reply`](#msg-reply-asynchronous-response-sending)
- For **_A → B → C → A_** flows, processes B and C use [`msg.forward`](#msg-forward-message-forwarding)

**Basic Request-Response Example:**

```lua
-- Basic usage: wait for reply from target
local serviceId = "process-789"

local reply = ao.send({
  Target = serviceId,
  Action = "Query",
  Data = { query: "select" }
}).receive() -- Blocks until response received
```

## Message Properties

The following properties track message chains and ensure proper routing:

- `Reference`: Unique identifier automatically assigned to each message.
- `Reply-To`: Specifies the destination for responses.
- `X-`: Any property starting with `X-` denotes a 'forwarded' tag and is automatically managed by the system.
  - `X-Reference`: Maintains the conversation chain across replies and forwards.
  - `X-Origin`: Tracks the conversation originator.

The system automatically manages these properties when using `msg.reply` and `msg.forward`. Check
out the [source code](https://github.com/permaweb/aos/blob/e9fc10c54b4f21302ee8d084d31f3383b46857b2/process/process.lua#L377-L406) to see exactly how these
properties are managed.

## Blocking vs. Non-Blocking

Functions either pause your code or let it continue running:

- **Non-blocking** ([`ao.send`](#ao-send-asynchronous-message-sending), [`msg.reply`](#msg-reply-asynchronous-response-sending), [`msg.forward`](#msg-forward-message-forwarding)): Send and continue execution
- **Blocking** ([`Receive`](#receive-capital-r-blocking-pattern-matcher), [`.receive()`](#ao-send-receive-lowercase-r-blocking-reference-matcher)): Pause until response arrives

## ao Token and Subledger Specification
Source: https://cookbook_ao.arweave.net/references/token.html

**Status:** DRAFT-1
**Targeting Network:** ao.TN.1

This specification describes the necessary message handlers and functionality required for a standard ao token process. Implementations of this standard typically offer users the ability to control a transferrable asset, whose scarcity is maintained by the process.

Each compliant process will likely implement a ledger of balances in order to encode ownership of the asset that the process represents. Compliant processes have a set of methods that allow for the modification of this ledger, typically with safe-guards to ensure the scarcity of ownership of the token represented by the process.

Additionally, this specification describes a 'subledger' process type which, when implemented, offers the ability to split move a number of the tokens from the parent into a child process that implements the same token interface specification. If the `From-Module` of the subledger process is trusted by the participants, these subledgers can be used to transact in the 'source' token, without directly exchanging messages with it. This allows participants to use the tokens from a process, even if that process is congested. Optionally, if the participants trust the `Module` a subledger process is running, they are able to treat balances across these processes as _fungible_. The result of this is that an arbitrary numbers of parallel processes -- and thus, transactions -- can be processed by a single token at any one time.

# Token Processes

A specification-compliant token process responds to a number of different forms of messages, with each form specified in an `Action` tag. The full set of `Action` messages that the token must support are as follows:

| Name     | Description                                                                                            | Read-Only          |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------------ |
| Balance  | get the balance of an identifier                                                                       | :heavy_check_mark: |
| Balances | get a list of all ledger/account balances                                                              | :heavy_check_mark: |
| Transfer | send 1 or more units from the callers balance to one or move targets with the option to notify targets | :x:                |
| Mint     | if the ledger process is the root and you would like to increase token supply                          | :x:                |

In the remainder of this section the tags necessary to spawn a compliant token process, along with the form of each of the `Action` messages and their results is described.

## Spawning Parameters

Every compliant token process must carry the following immutable parameters upon its spawning message:

| Tag          | Description                                                                                                          | Optional?          |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Name         | The title of the token, as it should be displayed to users.                                                          | :heavy_check_mark: |
| Ticker       | A suggested shortened name for the token, such that it can be referenced quickly.                                    | :heavy_check_mark: |
| Logo         | An image that applications may desire to show next to the token, in order to make it quickly visually identifiable.  | :heavy_check_mark: |
| Denomination | The number of the token that should be treated as a single unit when quantities and balances are displayed to users. | :x:                |

## Messaging Protocol

### Balance(Target? : string)

- Returns the balance of a target, if a target is not supplied then the balance of the sender of the message must be returned.

**Example `Action` message:**

```lua
ao.send({
    Target = "{TokenProcess Identifier}",
    Tags = {
        ["Action"] = "Balance",
        ["Target"] = "{IDENTIFIER}"
    }
})
```

**Example response message:**

```lua
{
    Tags = {
        ["Balance"] = "50",
        ["Target"] = "LcldyO8wwiGDzC3iXzGofdO8JdR4S1_2A6Qtz-o33-0",
        ["Ticker"] = "FUN"
    }
}
```

### Balances()

- Returns the balance of all participants in the token.

```lua
ao.send({
    Target = "[TokenProcess Identifier]",
    Tags = {
        ["Action"] = "Balances",
        ["Limit"] = 1000, # TODO: Is this necessary if the user is paying for the compute and response?
        ["Cursor"] = "BalanceIdentifier"
    }
})
```

**Example response message:**

```lua
{
    Data = {
        "MV8B3MAKTsUOqyCzQ0Tsa2AR3TiWTBU1Dx0xM4MO-f4": 100,
        "LcldyO8wwiGDzC3iXzGofdO8JdR4S1_2A6Qtz-o33-0": 50
    }
}
```

### Transfer(Target, Quantity)

If the sender has a sufficient balance, send the `Quantity` to the `Target`, issuing a `Credit-Notice` to the recipient and a `Debit-Notice` to the sender. The `Credit-` and `Debit-Notice` should forward any and all tags from the original `Transfer` message with the `X-` prefix. If the sender has an insufficient balance, fail and notify the sender.

```lua
ao.send({
    Target = "[TokenProcess Identifier]",
    Tags = {
        ["Action"] = "Transfer",
        ["Recipient"] = "[ADDRESS]",
        ["Quantity"] = "100",
        ["X-[Forwarded Tag(s) Name]"] = "[VALUE]"
    }
})
```

If a successful transfer occurs a notification message should be sent if `Cast` is not set.

```lua
ao.send({
    Target = "[Recipient Address]",
    Tags = {
        ["Action"] = "Credit-Notice",
        ["Sender"] = "[ADDRESS]",
        ["Quantity"] = "100",
        ["X-[Forwarded Tag(s) Name]"] = "[VALUE]"
    }
})
```

Recipients will infer from the `From-Process` tag of the message which tokens they have received.

### Get-Info()

```lua
ao.send({
    Target = "{Token}",
    Tags = {
        ["Action"] = "Info"
    }
})
```

### Mint() [optional]

Implementing a `Mint` action gives the process a way of allowing valid participants to create new tokens.

```lua
ao.send({
    Target ="{Token Process}",
    Tags = {
        ["Action"] = "Mint",
        ["Quantity"] = "1000"
    }
})
```

# Subledger Processes

In order to function appropriately, subledgers must implement the full messaging protocol of token contracts (excluding the `Mint` action). Subledgers must also implement additional features and spawn parameters for their processes. These modifications are described in the following section.

### Spawning Parameters

Every compliant subledger process must carry the following immutable parameters upon its spawning message:

| Tag          | Description                                                        | Optional? |
| ------------ | ------------------------------------------------------------------ | --------- |
| Source-Token | The `ID` of the top-most process that this subledger represents.   | :x:       |
| Parent-Token | The `ID` of the parent process that this subledger is attached to. | :x:       |

### `Credit-Notice` Handler

Upon receipt of a `Credit-Notice` message, a compliant subledger process must check if the process in question is the `Parent-Token`. If it is, the subledger must increase the balance of the `Sender` by the specified quantity.

### Transfer(Target, Quantity)

In addition to the normal tags that are passed in the `Credit-Notice` message to the recipient of tokens, a compliant subledger process must also provide both of the `Source-Token` and `Parent-Token` values. This allows the recipient of the `Transfer` message -- if they trust the `Module` of the subledger process -- to credit a receipt that is analogous (fungible with) deposits from the `Source-Token`.

The modified `Credit-Notice` should be structured as follows:

```lua
ao.send({
    Target = "[Recipient Address]",
    Tags = {
        ["Action"] = "Credit-Notice",
        ["Quantity"] = "100",
        ["Source-Token"] = "[ADDRESS]",
        ["Parent-Token"] = "[ADDRESS]",
        ["X-[Forwarded Tag(s) Name]"] = "[VALUE]"
    }
})
```

### Withdraw(Target?, Quantity)

All subledgers must allow balance holders to withdraw their tokens to the parent ledger. Upon receipt of an `Action: Withdraw` message, the subledger must send an `Action` message to its `Parent-Ledger`, transferring the requested tokens to the caller's address, while debiting their account locally. This transfer will result in a `Credit-Notice` from the `Parent-Ledger` for the caller.

```lua
ao.send({
    Target = "[TokenProcess Identifier]",
    Tags = {
        ["Action"] = "Withdraw",
        ["Recipient"] = "[ADDRESS]",
        ["Quantity"] = "100"
    }
})
```

# Token Example

> NOTE: When implementing a token it is important to remember that all Tags on a message MUST be "string"s. Using the`tostring` function you can convert simple types to strings.

```lua
if not balances then
  balances = { [ao.id] = 100000000000000 }
end

if name ~= "Fun Coin" then
  name = "Fun Coin"
end

if ticker ~= "Fun" then
  ticker = "fun"
end

if denomination ~= 6 then
  denomination = 6
end

-- handlers that handler incoming msg
Handlers.add(
  "Transfer",
  Handlers.utils.hasMatchingTag("Action", "Transfer"),
  function (msg)
    assert(type(msg.Tags.Recipient) == 'string', 'Recipient is required!')
    assert(type(msg.Tags.Quantity) == 'string', 'Quantity is required!')

    if not balances[msg.From] then
      balances[msg.From] = 0
    end

    if not balances[msg.Tags.Recipient] then
      balances[msg.Tags.Recipient] = 0
    end

    local qty = tonumber(msg.Tags.Quantity)
    assert(type(qty) == 'number', 'qty must be number')
    -- handlers.utils.reply("Transferring qty")(msg)
    if balances[msg.From] >= qty then
      balances[msg.From] = balances[msg.From] - qty
      balances[msg.Tags.Recipient] = balances[msg.Tags.Recipient] + qty
      ao.send({
        Target = msg.From,
        Tags = {
          ["Action"] = "Debit-Notice",
          ["Quantity"] = tostring(qty)
        }
      })
      ao.send({
        Target = msg.Tags.Recipient,
        Tags = {
          ["Action"] = "Credit-Notice",
          ["Quantity"] = tostring(qty)
        }
      })
      -- if msg.Tags.Cast and msg.Tags.Cast == "true" then
      --   return
      -- end

    end
  end
)

Handlers.add(
  "Balance",
  Handlers.utils.hasMatchingTag("Action", "Balance"),
  function (msg)
    assert(type(msg.Tags.Target) == "string", "Target Tag is required!")
    local bal = "0"
    if balances[msg.Tags.Target] then
      bal = tostring(balances[msg.Tags.Target])
    end
    ao.send({
      Target = msg.From,
      Tags = {
        ["Balance"] = bal,
        ["Ticker"] = ticker or ""
      }
    })
  end
)

local json = require("json")

Handlers.add(
  "Balances",
  Handlers.utils.hasMatchingTag("Action", "Balances"),
  function (msg)
    ao.send({
      Target = msg.From,
      Data = json.encode(balances)
    })
  end

)

Handlers.add(
  "Info",
  Handlers.utils.hasMatchingTag("Action", "Info"),
  function (msg)
    ao.send({
      Target = msg.From,
      Tags = {
        ["Name"] = name,
        ["Ticker"] = ticker,
        ["Denomination"] = tostring(denomination)
      }
    })
  end
)
```

## Meet Web Assembly
Source: https://cookbook_ao.arweave.net/references/wasm.html

WebAssembly (often abbreviated as Wasm) is a modern binary instruction format providing a portable compilation target for high-level languages like C, C++, and Rust. It enables deployment on the web for client and server applications, offering a high level of performance and efficiency. WebAssembly is designed to maintain the security and sandboxing features of web browsers, making it a suitable choice for web-based applications. It's a key technology for web developers, allowing them to write code in multiple languages and compile it into bytecode that runs in the browser at near-native speed.

The significance of WebAssembly lies in its ability to bridge the gap between web and native applications. It allows complex applications and games, previously limited to desktop environments, to run in the browser with comparable performance. This opens up new possibilities for web development, including the creation of high-performance web apps, games, and even the porting of existing desktop applications to the web. WebAssembly operates alongside JavaScript, complementing it by enabling performance-critical components to be written in languages better suited for such tasks, thereby enhancing the capabilities and performance of web applications.

# RELEASE NOTES AND CHANGELOGS



## AOS Release Notes v2.0.0
Source: https://cookbook_ao.arweave.net/releasenotes/aos-2_0_0.html

:wave: Hey Developers, we hear you, AOS needs a DX upgrade and this release delivers!

## Install instructions for AOS 2.0.0

```shell
npm i -g https://get_ao.arweave.net
```

> Use `.update` to update earlier aos processes. See the **note** below on what features are not supported on earlier processes.

Cool features:

- Receive the `await` of aos
- REQ/RES semantics with References
- default actions for handlers.

## `Receive()` the await of aos

Meet `Lua Coroutines`, they are very similar to `await` or `generators`, coroutines are now added to aos handlers!

> Coroutines are like taking turns playing a game with your friends. Each friend (coroutine) has a turn to play (do some work), but they don't finish all at once. Instead, they pause their turn (yield) so the next friend can play. When it's their turn again, they continue from where they left off (resume).

This means you can send a message then `wait` using `Receive` method and when a message is send to your process that matches the pattern, you can get the result and resume your logic.

Easier to show, than tell.

```lua=
.editor
Send({Target = ao.id, Data = "Hello"})
local res = Receive({Data = "Hello"})
print(res.Data)
.done
```

The global Receive function yields until a msg is returned that matches that pattern, then it resumes executing the rest of the code.

> NOTE: This feature is only available for AOS 2 processes, even if your process is upgraded to 2, coroutines can not be supported.

## REQUEST/RESPONSE semantics with References

Often times, you want to receive a reply from the process as a response to the specific message you sent. aos 2.0 makes this pattern intuitive and seamless.

setup the server handler _notice the msg.reply_

```lua=
.editor
Handlers.add("Greeting-Name", { Action = "Greeting"}, function (msg)
  msg.reply({Data = "Hello " .. msg.Data or "bob"})
  print('server: replied to ' .. msg.Data or "bob")
end)
.done
```

setup the client

```lua=
.editor
local greeting = Send({Target = ao.id, Action = "Greeting", Data = "George"}).receive().Data
print("client: " .. greeting)
.done
```

output

```
server: replied to George
client: Hello George
```

When building complex workflows, developers need a request/response system that provides guarentees. ie returning message is that is directly referenced and handled. This works using built-in reference tags and using the `msg.reply` function on the server.

try another example:

```lua=
.editor
local greeting = Send({Target = ao.id, Action = "Greeting", Data = "Spongebob"}).receive().Data
print(greeting .. " Squarepants")
```

> NOTE: This feature is only available for AOS 2 processes, even if your process is upgraded to 2, coroutines can not be supported.

## default Action Handlers

Handlers are a core design component when creating aos processes, they give developers a powerful pipeline for managing messages. The `Action` tag has become the common tag name to describe the intent of the incoming message. Now you can just supply a `value` to the pattern argument and it will infer `{ Action = [value] }` as your pattern matcher for this handler.

Before AOS 2.0

```lua
Handlers.add("Get-Balance", function (msg) return msg.Action == "Balance", doBalance)
```

After AOS 2.0

```lua
Handlers.add("Get-Balance", "Balance", doBalance)
```

> If your pattern matcher is matching on Action = "xxx", you can just supply the string

## FYI Breaking Changes

- Authority tags are required for all processes. Messages will not be trusted by default, any Spawn MUST supply Authority tags if they plan to receive messages from MUs. The new test MU is `fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY`
- Message Tag `Ref_` has been replaced for `Reference` - aos 2.0 process will always use the 'Reference' tag as a unique message counter.
- No more `result.Output.data.output`, aos processes always return a consistent `Output.data` shape:

```lua
Output = {
  data = String,
  prompt = String,
  print = Boolean
}
```

# Handlers version 0.0.5

Handlers increase the ability to manage messages, but the previous versions did not address complex logic flows between processes, in this version we leverage erlang style patterns to improve the handlers lua module to provide a powerful toolkit for developers to handle complex logic flows between their processes.

## Handlers.once

Handlers.once is like `Handlers.add` but for handling only one message. This function allows you to supply a pattern and handle function and the next time it is matched AOS will process this handler, then remove it from the `Handlers.list`.

```lua
Handlers.once(
  "onetime",
  { Action = "Run-Once"},
  function (msg)
    print("This handler will only run once!")
  end
)
```

## MaxRuns

Optional `MaxRuns` argument for each handler, letting you choose the number of runs before it removes itself. default is infinite.

```lua
Handlers.add(
    "example-handler",
    { Action = "Example" },
    function(msg)
      print("Handler executed")
    end,
    3 -- MaxRuns is set to 3
)
```

## \* Sending Messages .receive()

> NOTE: This will only work with new AOS 2 processes not with upgraded processes.

With `.receive` you can yield code execution, until a message is returned. The receive function takes an optional target? argument.

## \* Sending Messages .onReply()

`.onReply` is a function returned from a message function call, that enables developers to provide a callback function. This is an alternative strategy and can be useful if you have generic composable functions.

```lua
Handlers.once(
  { Test = "1" },
  function(m)
    print("Got message! Replying...")
    m.reply({ Test = "1-reply", Status = "Success" })
  end
)
```

```lua
function printMsg(prop)
  return function (m)
    print(m[prop])
  end
end

Send({
  Target = target,
  Test = "1"
}).onReply(printMsg('Test'))
```

## \* msg.forward(target, fwdMsg)

REQUEST/RESPONSE is cool, but what about if I want to receive a message from C when I send a message to B and B sends a message to C. In this scenario or any other multi-forwarding scenario, we have a `msg.forward` function. The forward function takes a target and a partial message to overwrite any of the message you want to forward.

example:

this example requires three processes:

lastname process

```sh
aos lastname
```

```lua=
.editor
Handlers.add("Greeting", "Greeting", function (msg)
  msg.forward(msg['X-Origin'], { Data = msg.Data .. " Squarepants"})
end)
.done
```

greeting process

```sh
aos greeting
```

```lua=
.editor
local lastname = "your lastname process id above"
Handlers.add("Greeting", "Greeting", function (msg)
  msg.forward(lastname, { Data = "Hello " .. msg.Data })
end)
.done
```

client process

```sh
aos spongebob
```

```lua=
.editor
local Greeting = "your greeting process id"
local res = Send({Target = Greeting, Action = "Greeting", Data = "SpongeBob"}).receive("your lastname process id above")
print(res.Data)
.done
```

> The receive function can take a `target` process id to handle the target that will return the message. The `forward` and `receive` methods can be used to create `A -> B -> C -> A` message passing scenarios.

## \* Message object enhancements: `.reply(newMsg)` and `.forward(target, newMsg)`

All messages received by handlers now have .reply() and .forward() functions which allow the process to easily return a response to the user without having to manually deal with the X-Reference and Target values. This mechanism also allows the developer to easily build pipelines that process a request through many processes, then eventually return to the user.

The reply method takes a partial message table. The forward function takes a target property and a partial message table.

## Pattern Matchers and Resolvers

The Handler functions takes four arguments,

| Name    | Type                        | Description                                                                                                |
| ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| name    | string                      | Handler Unique Identifier                                                                                  |
| pattern | string \| table \| function | the pattern lets the process pipeline know if it should invoke and break, or skip, or invoke and continue. |
| handle  | function                    | a function that processes the message                                                                      |
| MaxRuns | number? (optional)          | the number of max runs before the handler is removed automatically. Only available using `Handlers.add()`. |

### Pattern Matching

More expressive and easy to use matches. As well as functions, handlers now supports:

- Strings as match, checking against the Action tag.
- 'MessageMatchSpecs': Partially described messages.

In this mode, each tag given in the 'spec' is checked against the value in the message. It allows you to:

- Wildcard (`_`): Is the tag given at all?
- Function: Run a function against the tag value (optional second argument is the full message)
- String: Exact match
- String: Lua matching syntax

```lua
Handlers.add("token.transfer", {
  Action = "Transfer"
  Quantity = "%d+",
  Recipient = "_"
 }, doTransfer)
```

### Resolvers

Resolvers are tables in which each key is a pattern matching table and the value is a function that is executed based on the matching key. This allows developers to create case like statements in the resolver property.

```lua
Handlers.add("foobarbaz", { Action = "Update" }, {
  [{ Status = "foo" }] = function (msg) print("foo") end,
  [{ Status = "bar" }] = function (msg) print("bar") end,
  [{ Status = "baz" }] = function (msg) print("baz") end
})
```

In this example, if a message with an Action of `Update` and the resolver looks at the `Status` tag on the message and executes the function based on the matching Status Value.

## Using Receive with Spawn

> NOTE: This will only work with new AOS 2 processes not with upgraded processes.

When you spawn a message you get back a success message with an action of Spawned.

```lua=
.editor
Spawn(ao.env.Module.Id, { })
local m = Receive({ Action = "Spawned" })
print(m['Process'])
.done
```

Or if you want to get Spawned by reference using .receive

> NOTE: This will only work with new AOS 2 processes not with upgraded processes.

```lua=
.editor
local msg = Spawn(ao.env.Module.Id, {}).receive()
print(msg.Process)
.done
```

# Updates

## Assignment Checks

With this update, it is important to update all AOS processes to add Assignment Check Handler, this handler will be prepended to your process and add whitelisted assignment protection for all of your processes.

Just run `.update` on AOS Client Version 2.0.0

```lua
Handlers.prepend("Assignment-Check", function (msg)
  return ao.isAssignment(msg) and not ao.isAssignable(msg)
end, function (msg)
  Send({Target = msg.From, Data = "Assignment is not trusted by this process!"})
  print('Assignment is not trusted! From: ' .. msg.From .. ' - Owner: ' .. msg.Owner)
end)
```

## \* os.time

`os.time` will now return the timestamp provided by the Message Assignment in the Scheduling Unit (SU).

## CLI Updates

External editor as a scratch pad

```
.pad
```

Toggle dryrun mode

```
.dryrun
```

Short cut for launching a sqlite module

```sh
aos [name] --sqlite
```

Creates a new SQLite aos process

## now you can [.delete] the previous line in the built in editor

```lua
.editor

local x = 1
print(x)
.delete
```

The .delete command deletes the previous line and allows you to continue to edit.

## PRs

- Improved processid identification - https://github.com/permaweb/aos/pull/301
- update: assignable package installer - https://github.com/permaweb/aos/pull/302

## Appendix

"\*" - These features tagged with an "\*" are only available on new processes that were spawned with AOS Client Version 1.12.1 and AOS version 0.2.2.

## Summary

AOS 2 is a huge shift in DX, we are releasing as a Release Candidate to get feedback and refine the functionality and correct any bugs before we fully launch to general availability.

## AOS Release Notes v2.0.1
Source: https://cookbook_ao.arweave.net/releasenotes/aos-2_0_1.html

## Install

```sh
npm install -g https://get_ao.arweave.net
```

## Features

- Bootloader
- Handlers.once (defaults to prepend mode)
- WeaveDrive with Attestors
- WeaveDrive L2 Headers
- Spawn module by name
- Graphql Modules
- msg.reply patch

## Bootloader

Bootloader enables users to include a script to evaluate when spawning a process. You can include this script either with the `Data` property or with a `txId` specified on the `On-Boot` Tag.

### Examples

via AOS Console using `data`

```shell
echo "print('Hello Bootloader')" > example.lua
aos ex1 --tag-name On-Boot --tag-value Data --data example.lua
```

> As AOS boots up, you should see Hello Bootloader!

```
AOS Client Version: 2.0.1. 2024
Type "Ctrl-C" twice to exit

Your AOS process:  uJvxYDk6Q1JvocgfajNbEcKmqoCDWEksjG6EH1o9xRo

Hello Bootloader
```

via Spawn message using `data`

```lua
Spawn(ao.env.Module.Id, {
    ["On-Boot"] = "Data",
    Data = [[ print("Hello World!") ]]
})
```

via AOS Console using `txId`

```shell
aos ex2 --tag-name On-Boot --tag-value 1VAPs_V6iVx-zxuMW7Ns0IrYqqk6LAEDAe1b-EqKP28
```

via Spawn message using `txId`

```lua
Spawn(ao.env.Module.Id, {
  ["On-Boot"] = "1VAPs_V6iVx-zxuMW7Ns0IrYqqk6LAEDAe1b-EqKP28"
})
```

## Hanlders.once (defaults to prepend mode)

Now, when Handlers.once is called, it will default to prepend to the top of the Handlers stack.

```lua
Handlers.once("Name", function (msg)
  -- do something
end)

-- is the same as

Handlers.prepend("Name", "Name", function (msg)
  -- do something
end, 1)

```

## WeaveDrive with Attestors

Using WeaveDrive to access dataitems from Arweave with Attestations. When you spawn a process you can provide one or more `Attestor` tags with arweave wallet addresses as value. Then the arweave wallets set as attestors can create `Attestation` dataItems that authorize access to a specific arweave dataitem using weavedrive.

Here is a short guide on how to use WeaveDrive with Attestors - https://hackmd.io/@ao-docs/r1bixxO-Je

## WeaveDrive L2 Headers

Now, weaveDrive users can get L2 dataItem headers using `drive.getDataItem(id)` from the WeaveDrive apm module. This features allows indexers to index L2 dataItems and processes like stamps2 to determine if a user is stamping an Atomic Asset. The result is more interoperability with Arweave.

```lua
.load-blueprint apm
apm.install('@rakis/WeaveDrive')
local drive = require('@rakis/WeaveDrive')
local metaData = drive.getDataItem('K1jD3xrCJV3UnRtnBuQdd7k8HCwh9TX9GS-kh_Oevvw')
```

## Spawn module by name

Spawn module by name or identifier:

```sh
aos gql --module aos-graphql-sqlite-sm
```

Create a graphql/sqlite process by using the module name.

## Graphql Modules

You can now build graphql processes using the graphql custom module:

https://github.com/TillaTheHun0/aos-graphql

## `msg.reply` legacy patch

This release provides a blueprint optional patch to allow for old processes to leverage the `msg.reply` function.

`.load-blueprint patch-legacy-reply`

A blueprint that creates a passthrough handler to attach `.reply` function to the `msg` table, for handlers downstream to leverage.

This allows developers to take advantage of the `.receive` function in AOS 2.0 and interact with older AOS 0.x processes. With this patch AOS 0.x processes need to be able to reply with an `X-Reference` tag. So that the `.receive` co-routine can properly catch the response sent by the calling AOS 2.0 process.

Then open an older process:

```sh
aos [my aos process]
```

And run `.load-blueprint patch-legacy-reply`

```
.load-blueprint patch-legacy-reply
```

## Source

You can review the blueprint source here:

https://github.com/permaweb/aos/blob/main/blueprints/patch-legacy-reply.lua

```lua
-- patch reply
local function patchReply(msg)
  if not msg.reply then
    msg.reply = function (replyMsg)
      replyMsg.Target = msg["Reply-To"] or (replyMsg.Target or msg.From)
      replyMsg["X-Reference"] = msg["X-Reference"] or msg.Reference or ""
      replyMsg["X-Origin"] = msg["X-Origin"] or ""

      return ao.send(replyMsg)
    end
  end
end

Handlers.prepend("_patch_reply", function (msg) return "continue" end, patchReply)

```

---

Fixes:

- bubble up errors during co-routine resume functions - https://github.com/permaweb/aos/pull/374
- update token.lua to check for .reply before using the replay method
- staking blueprint improvement to default unstake delay block wait, and prepend finalize handler.
- fixed bug with Handlers.remove - https://github.com/permaweb/aos/pull/366

## AOS Release Notes v2.0.2
Source: https://cookbook_ao.arweave.net/releasenotes/aos-2_0_2.html

## Install

```sh
npm install -g https://get_ao.arweave.net
```

## Core Features

- **Improved Spawn Process Times**: This release improves the process creation times for testnet. When you create new `aos` processes, it should now take only a few seconds to spawn.

## Fixes

- Issue [#388](https://github.com/permaweb/aos/pull/388): fix(services/version): prevent checkForUpdate() 5xx response codes from stopping connection
- Issue [#392](https://github.com/permaweb/aos/pull/392): Add Action Tag to broadcasted messages in Chatroom Blueprint
- Issue [#391](https://github.com/permaweb/aos/pull/391): feat(aos): if multiple processes have the same name, allow user to select which process to run
- Issue [#390](https://github.com/permaweb/aos/pull/390): fix(aos): fix error lines base cases, loading
- Issue [#386](https://github.com/permaweb/aos/pull/386): fix(aos): get blueprints now uses dir
- Issue [#337](https://github.com/permaweb/aos/issues/337): matchesspec does not work with from-process

## Release Notes
Source: https://cookbook_ao.arweave.net/releasenotes/index.html

This section provides detailed information about updates, new features, bug fixes, and changes in each release of AO and its related tools. Release notes are essential for understanding what's changed between versions and how these changes might affect your projects.

## AOS Releases

AOS is the operating system built on top of the AO computer. These release notes document changes and improvements to AOS:

- [AOS 2.0.2](aos-2_0_2) - Improved spawn process times and various bug fixes
- [AOS 2.0.1](aos-2_0_1) - Details about patch updates and fixes in the 2.0.1 release
- [AOS 2.0.0](aos-2_0_0) - Major release information, including new features and significant changes

## Why Read Release Notes?

Release notes provide valuable information for developers:

- Learn about new features that could enhance your applications
- Understand potential breaking changes that might affect existing code
- Discover bug fixes that resolve issues you may have encountered
- Stay informed about security updates and best practices

We recommend reviewing release notes before upgrading to a new version to ensure a smooth transition.

## Navigation

Use the sidebar to navigate between different release notes. Notes are organized chronologically with the most recent releases first.

# Summary

Total files processed: 18