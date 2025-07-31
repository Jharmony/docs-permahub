import React from 'react';

function TokenBlueprint() {
  return (
    <div className="page-container">
      <h1 id="token-blueprint">Token Blueprint</h1>
      
      <p>The Token Blueprint is a predesigned template that helps you quickly build a token in AO. It is a great way to get started and can be customized to fit your needs. This blueprint implements the <a href="https://cookbook_ao.arweave.net/guides/aos/blueprints/token.html" target="_blank" rel="noopener noreferrer">AO Standard Token Specification</a> and serves as the foundation for building tokens like Atomic Assets on Arweave.</p>

      <h2 id="unpacking-the-token-blueprint">Unpacking the Token Blueprint</h2>
      
      <p>The Token Blueprint provides a complete implementation of a token with the following key components:</p>

      <h3>Core Data Structures</h3>
      <ul>
        <li><strong>Balances</strong>: The Balances array is used to store the token balances of the participants.</li>
        <li><strong>TotalSupply</strong>: Tracks the total number of tokens in circulation.</li>
        <li><strong>Token Metadata</strong>: Name, Ticker, Logo, and Denomination for token identification.</li>
      </ul>

      <h3>Handler Functions</h3>
      <ul>
        <li><strong>Info Handler</strong>: Allows processes to retrieve the token parameters, like Name, Ticker, Logo, and Denomination.</li>
        <li><strong>Balance Handler</strong>: Allows processes to retrieve the token balance of a participant.</li>
        <li><strong>Balances Handler</strong>: Allows processes to retrieve the token balances of all participants.</li>
        <li><strong>Transfer Handler</strong>: Allows processes to send tokens to another participant.</li>
        <li><strong>Mint Handler</strong>: Allows processes to mint new tokens (only by the process owner).</li>
        <li><strong>Total Supply Handler</strong>: Allows processes to retrieve the total supply of the token.</li>
        <li><strong>Burn Handler</strong>: Allows processes to burn tokens from their own balance.</li>
      </ul>

      <h2 id="how-to-use">How To Use</h2>
      
      <ol>
        <li>Open your preferred text editor.</li>
        <li>Open the Terminal.</li>
        <li>Start your <code>aos</code> process.</li>
        <li>Type in <code>.load-blueprint token</code></li>
      </ol>

      <h3>Verify the Blueprint is Loaded</h3>
      <p>Type in <code>Handlers.list</code> to see the newly loaded handlers.</p>

      <h2 id="whats-in-the-token-blueprint">What's in the Token Blueprint</h2>
      
      <p>The Token Blueprint implements the complete AO Standard Token Specification with the following features:</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Standard Compliance</strong>: Implements the official AO Token Specification</li>
        <li><strong>Big Integer Support</strong>: Uses bint library for precise token arithmetic</li>
        <li><strong>Message Notifications</strong>: Sends Credit-Notice and Debit-Notice messages</li>
        <li><strong>Error Handling</strong>: Comprehensive validation and error responses</li>
        <li><strong>Tag Forwarding</strong>: Supports custom tags with X- prefix</li>
      </ul>

      <h3>Complete Implementation</h3>
      
      <pre><code>{`local bint = require('.bint')(256)
--[[
  This module implements the ao Standard Token Specification.

  Terms:
    Sender: the wallet or Process that sent the Message

  It will first initialize the internal state, and then attach handlers,
    according to the ao Standard Token Spec API:

    - Info(): return the token parameters, like Name, Ticker, Logo, and Denomination

    - Balance(Target?: string): return the token balance of the Target. If Target is not provided, the Sender
        is assumed to be the Target

    - Balances(): return the token balance of all participants

    - Transfer(Target: string, Quantity: number): if the Sender has a sufficient balance, send the specified Quantity
        to the Target. It will also issue a Credit-Notice to the Target and a Debit-Notice to the Sender

    - Mint(Quantity: number): if the Sender matches the Process Owner, then mint the desired Quantity of tokens, adding
        them the Processes' balance
]]
--
local json = require('json')

--[[
  utils helper functions to remove the bint complexity.
]]
--

local utils = {
  add = function(a, b)
    return tostring(bint(a) + bint(b))
  end,
  subtract = function(a, b)
    return tostring(bint(a) - bint(b))
  end,
  toBalanceValue = function(a)
    return tostring(bint(a))
  end,
  toNumber = function(a)
    return bint.tonumber(a)
  end
}

--[[
     Initialize State

     ao.id is equal to the Process.Id
   ]]
--
Variant = "0.0.3"

-- token should be idempotent and not change previous state updates
Denomination = Denomination or 12
Balances = Balances or { [ao.id] = utils.toBalanceValue(10000 * 10 ^ Denomination) }
TotalSupply = TotalSupply or utils.toBalanceValue(10000 * 10 ^ Denomination)
Name = Name or 'Points Coin'
Ticker = Ticker or 'PNTS'
Logo = Logo or 'SBCCXwwecBlDqRLUjb8dYABExTJXLieawf7m2aBJ-KY'

--[[
     Add handlers for each incoming Action defined by the ao Standard Token Specification
   ]]
--

--[[
     Info
   ]]
--
Handlers.add('info', "Info", function(msg)
  msg.reply({
    Name = Name,
    Ticker = Ticker,
    Logo = Logo,
    Denomination = tostring(Denomination)
  })
end)

--[[
     Balance
   ]]
--
Handlers.add('balance', "Balance", function(msg)
  local bal = '0'

  -- If not Recipient is provided, then return the Senders balance
  if (msg.Tags.Recipient) then
    if (Balances[msg.Tags.Recipient]) then
      bal = Balances[msg.Tags.Recipient]
    end
  elseif msg.Tags.Target and Balances[msg.Tags.Target] then
    bal = Balances[msg.Tags.Target]
  elseif Balances[msg.From] then
    bal = Balances[msg.From]
  end

  msg.reply({
    Balance = bal,
    Ticker = Ticker,
    Account = msg.Tags.Recipient or msg.From,
    Data = bal
  })
end)

--[[
     Balances
   ]]
--
Handlers.add('balances', "Balances",
  function(msg) msg.reply({ Data = json.encode(Balances) }) end)

--[[
     Transfer
   ]]
--
Handlers.add('transfer', "Transfer", function(msg)
  assert(type(msg.Recipient) == 'string', 'Recipient is required!')
  assert(type(msg.Quantity) == 'string', 'Quantity is required!')
  assert(bint.__lt(0, bint(msg.Quantity)), 'Quantity must be greater than 0')

  if not Balances[msg.From] then Balances[msg.From] = "0" end
  if not Balances[msg.Recipient] then Balances[msg.Recipient] = "0" end

  if bint(msg.Quantity) <= bint(Balances[msg.From]) then
    Balances[msg.From] = utils.subtract(Balances[msg.From], msg.Quantity)
    Balances[msg.Recipient] = utils.add(Balances[msg.Recipient], msg.Quantity)

    --[[
         Only send the notifications to the Sender and Recipient
         if the Cast tag is not set on the Transfer message
       ]]
    --
    if not msg.Cast then
      -- Debit-Notice message template, that is sent to the Sender of the transfer
      local debitNotice = {
        Action = 'Debit-Notice',
        Recipient = msg.Recipient,
        Quantity = msg.Quantity,
        Data = Colors.gray ..
            "You transferred " ..
            Colors.blue .. msg.Quantity .. Colors.gray .. " to " .. Colors.green .. msg.Recipient .. Colors.reset
      }
      -- Credit-Notice message template, that is sent to the Recipient of the transfer
      local creditNotice = {
        Target = msg.Recipient,
        Action = 'Credit-Notice',
        Sender = msg.From,
        Quantity = msg.Quantity,
        Data = Colors.gray ..
            "You received " ..
            Colors.blue .. msg.Quantity .. Colors.gray .. " from " .. Colors.green .. msg.From .. Colors.reset
      }

      -- Add forwarded tags to the credit and debit notice messages
      for tagName, tagValue in pairs(msg) do
        -- Tags beginning with "X-" are forwarded
        if string.sub(tagName, 1, 2) == "X-" then
          debitNotice[tagName] = tagValue
          creditNotice[tagName] = tagValue
        end
      end

      -- Send Debit-Notice and Credit-Notice
      msg.reply(debitNotice)
      Send(creditNotice)
    end
  else
    msg.reply({
      Action = 'Transfer-Error',
      ['Message-Id'] = msg.Id,
      Error = 'Insufficient Balance!'
    })
  end
end)

--[[
    Mint
   ]]
--
Handlers.add('mint', "Mint", function(msg)
  assert(type(msg.Quantity) == 'string', 'Quantity is required!')
  assert(bint(0) < bint(msg.Quantity), 'Quantity must be greater than zero!')

  if not Balances[ao.id] then Balances[ao.id] = "0" end

  if msg.From == ao.id then
    -- Add tokens to the token pool, according to Quantity
    Balances[msg.From] = utils.add(Balances[msg.From], msg.Quantity)
    TotalSupply = utils.add(TotalSupply, msg.Quantity)
    msg.reply({
      Data = Colors.gray .. "Successfully minted " .. Colors.blue .. msg.Quantity .. Colors.reset
    })
  else
    msg.reply({
      Action = 'Mint-Error',
      ['Message-Id'] = msg.Id,
      Error = 'Only the Process Id can mint new ' .. Ticker .. ' tokens!'
    })
  end
end)

--[[
     Total Supply
   ]]
--
Handlers.add('totalSupply', "Total-Supply", function(msg)
  assert(msg.From ~= ao.id, 'Cannot call Total-Supply from the same process!')

  msg.reply({
    Action = 'Total-Supply',
    Data = TotalSupply,
    Ticker = Ticker
  })
end)

--[[
 Burn
]] --
Handlers.add('burn', 'Burn', function(msg)
  assert(type(msg.Quantity) == 'string', 'Quantity is required!')
  assert(bint(msg.Quantity) <= bint(Balances[msg.From]), 'Quantity must be less than or equal to the current balance!')

  Balances[msg.From] = utils.subtract(Balances[msg.From], msg.Quantity)
  TotalSupply = utils.subtract(TotalSupply, msg.Quantity)

  msg.reply({
    Data = Colors.gray .. "Successfully burned " .. Colors.blue .. msg.Quantity .. Colors.reset
  })
end)`}</code></pre>

      <h2 id="customization">Customization</h2>
      
      <p>The Token Blueprint can be customized for your specific needs:</p>

      <h3>Token Parameters</h3>
      <ul>
        <li><strong>Name</strong>: Change the token name (default: 'Points Coin')</li>
        <li><strong>Ticker</strong>: Set the token symbol (default: 'PNTS')</li>
        <li><strong>Logo</strong>: Update the token logo Arweave ID</li>
        <li><strong>Denomination</strong>: Set decimal places (default: 12)</li>
        <li><strong>Initial Supply</strong>: Modify the starting token amount</li>
      </ul>

      <h3>Advanced Customization</h3>
      <ul>
        <li><strong>Custom Handlers</strong>: Add new functionality beyond the standard specification</li>
        <li><strong>Access Control</strong>: Implement role-based permissions</li>
        <li><strong>Events</strong>: Add custom event logging and notifications</li>
        <li><strong>Integration</strong>: Connect with other AO processes and protocols</li>
      </ul>

      <h2 id="use-cases">Use Cases</h2>
      
      <p>The Token Blueprint serves as the foundation for various token types on Arweave:</p>

      <ul>
        <li><strong>Atomic Assets</strong>: Unique digital items with token functionality</li>
        <li><strong>Utility Tokens</strong>: Tokens for specific applications or services</li>
        <li><strong>Governance Tokens</strong>: Tokens for DAO voting and governance</li>
        <li><strong>Reward Tokens</strong>: Tokens distributed for user engagement</li>
        <li><strong>Stablecoins</strong>: Tokens pegged to external assets</li>
      </ul>

      <h2 id="best-practices">Best Practices</h2>
      
      <ul>
        <li><strong>Security</strong>: Always validate inputs and check permissions</li>
        <li><strong>Testing</strong>: Test thoroughly before deploying to mainnet</li>
        <li><strong>Documentation</strong>: Document any customizations or extensions</li>
        <li><strong>Monitoring</strong>: Monitor token activity and performance</li>
        <li><strong>Upgrades</strong>: Plan for future upgrades and migrations</li>
      </ul>

      <h2 id="resources">Resources</h2>
      
      <ul>
        <li><a href="https://cookbook_ao.arweave.net/guides/aos/blueprints/token.html" target="_blank" rel="noopener noreferrer">Official AO Token Blueprint Documentation</a> - Complete reference and examples</li>
        <li><a href="/#/atomic-assets">Atomic Assets Guide</a> - Learn how tokens are used in Atomic Assets</li>
        <li><a href="/#/examples">AO Examples</a> - See real-world token implementations</li>
        <li><a href="/#/api-reference">AO API Reference</a> - Detailed API documentation</li>
      </ul>

      <hr />
      
      <p>Ready to build your own token? Start with the <a href="/#/starter-kits">Starter Kits</a> and explore the <a href="/#/examples">Examples</a> for more token development resources!</p>
    </div>
  );
}

export default TokenBlueprint; 