local json = require('json')

-- @permaweb/kv-base
local function load_kv()
    local KVPackageName = "@permaweb/kv-base"
    local KV = {}

    KV.__index = KV

    --- Creates a new KV instance.
    -- @param plugins Optional table of plugins, each with a register function.
    -- @return A new KV instance.
    function KV.new(plugins)
        if type(plugins) ~= "table" and type(plugins) ~= "nil" then
            print("Invalid plugins")
            error("Invalid plugins arg, must be table or nil")
        end

        local self = setmetatable({}, KV)

        if plugins and type(plugins) == "table" then
            for _, plugin in ipairs(plugins) do
                if type(plugin) == "table" and plugin.register then
                    plugin.register(self)
                end
            end
        end
        self.Store = {}
        return self
    end

    --- Returns a copy of the entire key-value store.
    -- @return A table representing the current state of the key-value store.
    function KV:dump()
        local copy = {}
        for k, v in pairs(self.Store) do
            copy[k] = v
        end
        return copy
    end

    --- Retrieves a value from the key-value store.
    -- @param keyString A dot-separated string representing the key path.
    -- @return The value at the specified key path, or nil if not found.
    function KV:get(keyString)
        local keys = self:_splitKeyString(keyString)
        local current = self.Store

        for _, key in ipairs(keys) do
            if type(current) ~= "table" or current[key] == nil then
                return nil
            end
            current = current[key]
        end

        return current
    end

    --- Sets a value in the key-value store.
    -- @param keyString A dot-separated string representing the key path.
    -- @param value The value to set at the specified key path.
    function KV:set(keyString, value)
        if keyString == "" then
            self.Store = value  -- Set the entire store to the value
            return
        end

        local keys = self:_splitKeyString(keyString)
        local current = self.Store

        for i = 1, #keys - 1 do
            local key = keys[i]
            if type(current[key]) ~= "table" then
                current[key] = {}  -- Create table if it doesn't exist
            end
            current = current[key]
        end

        current[keys[#keys]] = value
    end


    --- Appends a value to an array stored at the given key path.
    -- @param keyString A dot-separated string representing the key path.
    -- @param value The value to append to the array.
    function KV:append(keyString, value)
        local array = self:get(keyString)
        if type(array) ~= "table" then
            array = {}
            self:set(keyString, array)
        end

        table.insert(array, value)
    end

    --- Splits a dot-separated key string into individual keys.
    -- @param keyString The dot-separated key string.
    -- @return A table containing individual keys.
    function KV:_splitKeyString(keyString)
        local keys = {}
        for key in string.gmatch(keyString, "[^%.]+") do
            table.insert(keys, key)
        end
        return keys
    end

    --- Removes a value from the key-value store.
    --- Use `"."` to clear the entire store (root level).
    -- @param keyString A dot-separated string for the key path, or `"."` to clear the root.
    -- @raise Error if `keyString` is `""`.
    function KV:remove(keyString)
        if keyString == "." then
            self.Store = {}  -- Clear the entire store
            return
        elseif keyString == "" then
            error("Invalid keyString: an empty string is not allowed. Use '.' to clear the root.")
        end

        local keys = self:_splitKeyString(keyString)
        local current = self.Store

        -- Traverse to the second-to-last key
        for i = 1, #keys - 1 do
            local key = keys[i]
            if type(current) ~= "table" or current[key] == nil then
                return -- Key path doesn't exist, nothing to remove
            end
            current = current[key]
        end

        -- Remove the final key in the path
        current[keys[#keys]] = nil
    end


    --- Returns the number of top-level keys in the store.
    -- @return The count of top-level keys in the key-value store.
    function KV:len()
        local count = 0
        for _ in pairs(self.Store) do
            count = count + 1
        end
        return count
    end

    --- Returns a list of keys at a specified path.
    -- @param path Optional dot-separated string representing the key path.
    -- @return A table containing keys at the specified path, or top-level keys if no path is specified.
    function KV:keys(path)
        -- Helper function to recursively gather keys from a table
        local function recurse(store)
            local keys = {}
            for k, _ in pairs(store) do
                table.insert(keys, k)
            end
            return keys
        end

        -- If a path is specified, traverse to that nested level
        if path and type(path) == "string" then
            local keys = self:_splitKeyString(path)
            local current = self.Store

            -- Traverse the store according to the keys in the path
            for _, key in ipairs(keys) do
                if type(current) == "table" and current[key] then
                    current = current[key]
                else
                    return {}  -- If the path does not exist, return an empty table
                end
            end

            -- If the value at the path is not a table, return an empty table
            if type(current) ~= "table" then
                return {}
            end

            -- Return the keys of the nested object
            return recurse(current)
        else
            -- If no path is specified, return top-level keys
            return recurse(self.Store)
        end
    end

    --- Registers a new plugin function in the KV instance.
    -- @param pluginName The name of the plugin.
    -- @param pluginFunction The function to be registered as a plugin.
    function KV:registerPlugin(pluginName, pluginFunction)
        if type(pluginName) ~= "string" or type(pluginFunction) ~= "function" then
            error("Invalid plugin name or function")
        end
        if self[pluginName] then
            error(pluginName .. " already exists")
        end

        self[pluginName] = pluginFunction
    end

    --- Filters the store based on a given condition function.
    -- @param store The table to filter.
    -- @param fn The condition function that takes key and value and returns a boolean.
    -- @return A new table containing only the key-value pairs that match the condition.
    function KV.filter_store(store, fn)
        local results = {}
        for k, v in pairs(store) do
            if fn(k, v) then
                results[k] = v
            end
        end
        return results
    end

    --- Checks if a string starts with a specified prefix.
    -- @param str The string to check.
    -- @param prefix The prefix to look for.
    -- @return True if the string starts with the prefix, otherwise false.
    function KV.starts_with(str, prefix)
        return str:sub(1, #prefix) == prefix
    end

    --- Gets all keys that start with a specified prefix.
    -- @param str The prefix string to filter keys.
    -- @return A table containing all keys that start with the specified prefix.
    function KV:getPrefix(str)
        return KV.filter_store(self.Store, function(k, _)
            return KV.starts_with(k, str)
        end)
    end

    return KV
end
package.loaded['@permaweb/kv-base'] = load_kv()

-- @permaweb/kv-batch
local function load_batch()
    package.loaded["@permaweb/kv-batch"] = nil

    do
        local PackageName = "@permaweb/kv-batch"

        local BatchPlugin = {}

        function BatchPlugin.new()
            local plugin = {}

            -- Register the plugin methods to a KV instance
            function plugin.register(kv)
                kv:registerPlugin("batchInit", function()
                    return plugin.createBatch(kv)
                end)
            end

            function plugin.createBatch(kv)
                local batch = {}
                batch.operations = {}

                function batch:set(keyString, value)
                    table.insert(self.operations, { op = "set", key = keyString, value = value })
                end
                -- TODO probably implement del?

                -- Execute all batched operations
                function batch:execute()
                    for _, operation in ipairs(self.operations) do
                        if operation.op == "set" then
                            kv:set(operation.key, operation.value)
                        end
                    end
                    self:clear()  -- Optionally clear the batch after execution
                end

                -- Clear all batched operations
                function batch:clear()
                    self.operations = {}
                end

                return batch
            end

            return plugin
        end

        return BatchPlugin
    end
end
package.loaded['@permaweb/kv-batch'] = load_batch()

-- @permaweb/asset-manager
local function load_asset_manager()
    local bint = require('.bint')(256)

    local AssetManagerPackageName = '@permaweb/asset-manager'

    local AssetManager = {}
    AssetManager.__index = AssetManager

    function AssetManager.new()
        local self = setmetatable({}, AssetManager)
        self.Assets = {}
        return self
    end

    local utils = {
        add = function(a, b)
            return tostring(bint(a) + bint(b))
        end,
        subtract = function(a, b)
            return tostring(bint(a) - bint(b))
        end,
        to_balance_value = function(a)
            return tostring(bint(a))
        end,
        to_number = function(a)
            return bint.tonumber(a)
        end
    }

    local function check_valid_address(address)
        if not address or type(address) ~= 'string' then
            return false
        end

        return string.match(address, "^[%w%-_]+$") ~= nil and #address == 43
    end

    local function check_valid_update_type(type)
        return type == 'Add' or type == 'Remove'
    end

    local function check_required_args(args, required_args)
        print('Checking required args...')

        local required_args_met = true
        for _, arg in ipairs(required_args) do
            if not args[arg] then
                print('Missing required argument: ' .. arg)
                required_args_met = false
            end
        end

        return required_args_met
    end

    local function get_asset_index(self, asset_id)
        for i, asset in ipairs(self.Assets) do
            if asset.Id == asset_id then
                return i
            end
        end

        return -1
    end

    function AssetManager:get()
        return json.encode(self.Assets)
    end

    function AssetManager:update(args)
        print('Running asset update...')

        if not self.Assets then self.Assets = {} end

        if not check_required_args(args, { 'Type', 'AssetId', 'Timestamp' }) then
            return
        end

        if not check_valid_address(args.AssetId) then
            print('Invalid AssetId')
            return
        end

        if not check_valid_update_type(args.Type) then
            print('Invalid Update Type')
            return
        end

        local asset_index = get_asset_index(self, args.AssetId)

        if asset_index > -1 then
            print('Updating existing asset...')
            if args.Type == 'Add' then
                self.Assets[asset_index].Quantity = utils.add(self.Assets[asset_index].Quantity, args.Quantity)
            end
            if args.Type == 'Remove' then
                self.Assets[asset_index].Quantity = utils.subtract(self.Assets[asset_index].Quantity, args.Quantity)
            end
            self.Assets[asset_index].LastUpdate = args.Timestamp

            args.SyncState()
            print('Asset updated')
        else
            if args.Type == 'Add' and utils.to_number(args.Quantity) > 0 then
                print('Adding new asset...')

                table.insert(self.Assets, {
                    Id = args.AssetId,
                    Quantity = utils.to_balance_value(args.Quantity),
                    DateCreated = args.Timestamp,
                    LastUpdate = args.Timestamp,
                    Type = args.AssetType,
                    ContentType = args.ContentType
                })

                args.SyncState()
                print('Asset added')
            else
                print('No asset found to update...')
            end
            if args.Type == 'Remove' then
                print('No asset found to update...')
                return
            end
        end
    end

    package.loaded[AssetManagerPackageName] = AssetManager

    return AssetManager
end
package.loaded['@permaweb/asset-manager'] = load_asset_manager()

-- @permaweb/zone
local function load_zone_v2()
    local KV = require('@permaweb/kv-base')
    if not KV then
        error('KV Not found, install it')
    end

    local BatchPlugin = require('@permaweb/kv-batch')
    if not BatchPlugin then
        error('BatchPlugin not found, install it')
    end

    local AssetManager = require('@permaweb/asset-manager')
    if not AssetManager then
        error('AssetManager not found, install it')
    end

    Zone = Zone or {}
    Zone.Functions = Zone.Functions or {}
    Zone.Constants = Zone.Constants or {
        H_ZONE_ERROR = 'Zone-Error',
        H_ZONE_SUCCESS = 'Zone-Success',
        H_ZONE_KEYS = 'Zone-Keys',
        H_ZONE_GET = 'Info',
        H_ZONE_CREDIT_NOTICE = 'Credit-Notice',
        H_ZONE_DEBIT_NOTICE = 'Debit-Notice',
        H_ZONE_RUN_ACTION = 'Run-Action',
        H_ZONE_ADD_INDEX_ID = 'Add-Index-Id',
        H_ZONE_INDEX_NOTICE = 'Index-Notice',
        H_ZONE_UPDATE = 'Zone-Update',
        H_ZONE_ROLE_SET = 'Role-Set',
        H_ZONE_SET = 'Zone-Set',
        H_ZONE_JOIN = 'Zone-Join',
        H_ZONE_ADD_INVITE = 'Zone-Add-Invite',
        H_ZONE_APPEND = 'Zone-Append',
        H_ZONE_REMOVE = 'Zone-Remove',
        H_ZONE_ADD_UPLOAD = 'Add-Uploaded-Asset'
    }

    Zone.ROLE_NAMES = Zone.ROLE_NAMES or {
        ADMIN = 'Admin',
        CONTRIBUTOR = 'Contributor',
        MODERATOR = 'Moderator',
        GUEST_CONTRIBUTOR = 'Guest_Contributor',
    }

    Zone.Data = Zone.Data or {
        KV = KV.new({ BatchPlugin }),
        AssetManager = AssetManager.new()
    }

    ZoneInitCompleted = ZoneInitCompleted or false

    HandlerRoles = HandlerRoles or {
        [Zone.Constants.H_ZONE_ROLE_SET] = { 'Admin' },
        [Zone.Constants.H_ZONE_UPDATE] = { 'Admin' },
        [Zone.Constants.H_ZONE_ADD_INDEX_ID] = { 'Admin', 'Contributor' },
        [Zone.Constants.H_ZONE_ADD_UPLOAD] = { 'Admin', 'Contributor' },
        [Zone.Constants.H_ZONE_RUN_ACTION] = { 'Admin', 'Contributor' },
    }

    -- Roles: { <Id>: string = { Roles = roles, Type = 'wallet' | 'process' } } :. Roles[<id>] = {...}
    Zone.Roles = Zone.Roles or {}

    -- Invites: { <Id>, <Name>, <Logo> }
    Zone.Invites = Zone.Invites or {}

    Zone.Version = Zone.Version or '0.0.1'

    function GetState()
        return {
            Owner = Owner,
            Store = Zone.Data.KV:dump(),
            Assets = Zone.Data.AssetManager.Assets,
            Roles = Zone.Roles,
            Permissions = HandlerRoles,
            Invites = Zone.Invites,
            Version = Zone.Version
        }
    end

    function SyncState()
        Send({ device = 'patch@1.0', zone = json.encode(GetState()) })
    end

    function Zone.Functions.tableLength(t)
        local count = 0
        for _ in pairs(t) do
            count = count + 1
        end
        return count
    end

    function Zone.Functions.rolesHasValue(roles, role)
        for _, r in ipairs(roles) do
            if r == role then
                return true
            end
        end
        return false
    end

    function Zone.Functions.getActorRoles(actor)
        for id, entry in pairs(Zone.Roles) do
            if id == actor then
                return entry.Roles
            end
        end
        return nil
    end

    function Zone.Functions.actorHasRole(actor, role)
        local actorRoles = Zone.Functions.getActorRoles(actor)
        if Zone.Functions.rolesHasValue(actorRoles, role) then
            return true
        end
        return false
    end

    function Zone.Functions.authRunAction(msg)
        -- True if caller has role to call ForwardAction
        if not msg.ForwardTo or not msg.ForwardAction then
            return false, 'ForwardTo and ForwardAction are required'
        end

        -- A wallet user calling run-action must be an owner or admin
        if msg.From == Owner or msg.From == ao.id then
            return true
        end

        local rolesForHandler = Zone.Functions.getRolesForAction(msg.ForwardAction)
        if not rolesForHandler then
            return false, 'AuthRoles: Sender ' .. msg.From .. ' not Authorized to run action ' .. msg.ForwardAction .. '.'
        end

        local actorRoles = Zone.Functions.getActorRoles(msg.From)

        if actorRoles then
            for _, role in pairs(rolesForHandler) do
                if Zone.Functions.rolesHasValue(actorRoles, role) then
                    return true
                end
            end
        end

        return true
    end

    function Zone.Functions.isAuthorized(msg)
        if msg.From ~= Owner and msg.From ~= ao.id and Zone.Functions.tableLength(Zone.Roles) == 0 then
            return false, 'Not Authorized'
        end

        if msg.From == Owner or msg.From == ao.id then
            return true
        end

        local rolesForHandler = HandlerRoles[msg.Action]

        if not rolesForHandler then
            return msg.From == Owner or false,
                'AuthRoles: Sender ' .. msg.From .. ' not Authorized. Only Owner can access the handler ' .. msg.Action
        end

        local actorRoles = Zone.Functions.getActorRoles(msg.From)

        if actorRoles then
            for _, role in pairs(rolesForHandler) do
                if Zone.Functions.rolesHasValue(actorRoles, role) then
                    return true
                end
            end
        end

        if not actorRoles then
            return false, 'AuthRoles: ' .. msg.From .. ' Not Authorized'
        end

        return false, 'AuthRoles: Sender ' .. msg.From .. ' not Authorized.'
    end

    -- Utility Functions
    function Zone.Functions.decodeMessageData(data)
        local status, decodedData = pcall(json.decode, data)
        if not status or type(decodedData) ~= 'table' then
            return { success = false, data = nil }
        end

        return { success = true, data = decodedData }
    end

    function Zone.Functions.mergeTables(original, updates)
        for key, value in pairs(updates) do
            if type(value) == 'table' and type(original[key]) == 'table' then
                original[key] = Zone.Functions.mergeTables(original[key], value)
            else
                original[key] = value
            end
        end
        return original
    end

    function Zone.Functions.sendError(target, errorMessage)
        ao.send({
            Target = target,
            Action = Zone.H_ZONE_ERROR,
            Tags = {
                Status = 'Error',
                Message = errorMessage
            }
        })
    end

    function Zone.Functions.runAction(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        if not msg.ForwardTo or not msg.ForwardAction then
            ao.send({
                Target = msg.From,
                Action = 'Input-Error',
                Tags = {
                    Status = 'Error',
                    Message = 'Invalid arguments, required { ForwardTo, ForwardAction }'
                }
            })
            return
        end

        local decodeResult = Zone.Functions.decodeMessageData(msg.Data)

        -- Clear out Run-Action
        msg.Tags.Action = nil

        local messageToSend = {
            Target = msg.ForwardTo,
            Action = msg.ForwardAction,
            Tags = msg.Tags
        }

        if decodeResult.data and decodeResult.data.Input then
            messageToSend.Data = json.encode(decodeResult.data.Input)
        end

        ao.send(messageToSend)
    end

    function Zone.Functions.zoneGet(msg)
        msg.reply({
            Action = Zone.Constants.H_ZONE_SUCCESS,
            Data = GetState()
        })
    end

    function Zone.Functions.keysHandler(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        local path = msg.Tags.Path or nil
        local keys = Zone.Data.KV:keys(path)

        msg.reply({
            Target = msg.From,
            Action = Zone.Constants.H_ZONE_SUCCESS,
            Data = { Keys = keys }
        })
    end

    function Zone.Functions.zoneUpdate(msg)
        local authorized, message = Zone.Functions.isAuthorized(msg)
        if not authorized then
            Zone.Functions.sendError(msg.From, 'Not Authorized' .. ' ' .. message)
            return
        end

        local decodedData = Zone.Functions.decodeMessageData(msg.Data)

        if not decodedData.success then
            Zone.Functions.sendError(msg.From, 'Invalid Data')
            return
        end

        local entries = decodedData.data
        if entries and #entries then
            for _, entry in ipairs(entries) do
                if entry.key and entry.value then
                    local updateType = msg.UpdateType or 'Add-Or-Update'
                    if updateType == 'Add-Or-Update' then
                        Zone.Data.KV:set(entry.key, entry.value)
                    elseif updateType == 'Remove' then
                        Zone.Data.KV:remove(entry.key)
                    end
                end
            end

            SyncState()
            ao.send({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
        end
    end

    function Zone.Functions.zoneRoleSet(msg)
        -- Data: { Id=<id>, Roles=<{ <role>, <role>, Type=<wallet> | <process> }> }[]
        local function check_valid_address(address)
            if not address or type(address) ~= 'string' then
                return false
            end
            return string.match(address, '^[%w%-_]+$') ~= nil and #address == 43
        end

        local function check_valid_roles(roles)
            if not roles then
                return true
            end

            if #roles == 0 then
                return true
            end

            for _, role in ipairs(roles) do
                if type(role) ~= 'string' then
                    return false
                end
            end

            return true
        end

        local authorized, message = Zone.Functions.isAuthorized(msg)
        if not authorized then
            print('Not Authorized', message)
            Zone.Functions.sendError(msg.From, message)
            return
        end

        local decodeResult = Zone.Functions.decodeMessageData(msg.Data)

        if decodeResult.success and decodeResult.data then
            for _, entry in ipairs(decodeResult.data) do
                local actorId = entry.Id
                local roles = entry.Roles
                local type = entry.Type
                local sendInvite = entry.SendInvite

                if not actorId then
                    ao.send({
                        Target = msg.From,
                        Action = 'Input-Error',
                        Tags = {
                            Status = 'Error',
                            Message =
                            'Invalid arguments, required { Id=<id>, Roles=<{ <role>, <role> }> or {} or nil} in data'
                        }
                    })
                    return
                end

                if not check_valid_address(actorId) then
                    Zone.Functions.sendError(msg.From, 'Id must be a valid address')
                    return
                end

                if not check_valid_roles(roles) then
                    Zone.Functions.sendError(msg.From, 'Role must be a table of strings')
                    return
                end

                Zone.Roles[actorId] = {
                    Roles = roles,
                    Type = type
                }

                if sendInvite then
                    ao.send({
                        Target = actorId,
                        Action = Zone.Constants.H_ZONE_ADD_INVITE,
                        Tags = {
                            Name = Zone.Data.KV.Store.Name,
                            Logo = Zone.Data.KV.Store.Logo
                        }
                    })
                end
            end

            ao.send({
                Target = msg.From,
                Action = Zone.Constants.H_ZONE_SUCCESS,
                Tags = {
                    Status = 'Success',
                    Message = 'Roles updated'
                }
            })

            SyncState()
        else
            Zone.Functions.sendError(msg.From, string.format(
                'Failed to parse role update data, received: %s. %s.', msg.Data,
                'Data must be an object - { Id, Roles, Type }'))
        end
    end

    function Zone.Functions.addZoneInvite(msg)
        for _, invite in ipairs(Zone.Invites) do
            if invite.Id == msg.From then
                print('Invite from this zone is already set')
                return
            end
        end

        table.insert(Zone.Invites, {
            Id = msg.From,
            Name = msg.Tags.Name,
            Logo = msg.Tags.Logo
        })

        ao.send({
            Target = msg.From,
            Action = 'Invite-Acknowledged'
        })

        SyncState()
    end

    function Zone.Functions.joinZone(msg)
        local index = -1
        for i, invite in ipairs(Zone.Invites) do
            if invite.Id == msg.Tags.ZoneId then
                index = i
            end
        end


        if index > -1 then
            local store = Zone.Data.KV.Store
            local path = nil

            if msg.Tags.Path then
                if not store[msg.Tags.Path] then
                    store[msg.Tags.Path] = {}
                end

                path = store[msg.Tags.Path]
            else
                if not store.JoinedZones then
                    store.JoinedZones = {}
                end

                path = store.JoinedZones
            end

            table.insert(path, Zone.Invites[index])
            table.remove(Zone.Invites, index)

            ao.send({
                Target = msg.From,
                Action = 'Joined-Zone'
            })

            SyncState()
        end
    end

    function Zone.Functions.addUpload(msg)
        Zone.Data.AssetManager:update({
            Type = 'Add',
            AssetId = msg.AssetId,
            Timestamp = msg.Timestamp,
            AssetType = msg.AssetType,
            ContentType = msg.ContentType,
            Quantity = msg.Quantity,
            SyncState = SyncState,
        })
    end

    function Zone.Functions.creditNotice(msg)
        Zone.Data.AssetManager:update({
            Type = 'Add',
            AssetId = msg.From,
            Timestamp = msg.Timestamp,
            Quantity = msg.Quantity,
            SyncState = SyncState
        })
    end

    function Zone.Functions.debitNotice(msg)
        Zone.Data.AssetManager:update({
            Type = 'Remove',
            AssetId = msg.From,
            Timestamp = msg.Timestamp,
            Quantity = msg.Quantity,
            SyncState = SyncState,
        })
    end

    function Zone.Functions.addIndexId(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        if not msg.IndexId then
            Zone.Functions.sendError(msg.From, 'Invalid Data')
            return
        end

        if not Zone.Data.KV.Store.Index then
            Zone.Data.KV.Store.Index = {}
        end

        for _, index in ipairs(Zone.Data.KV.Store.Index) do
            if index.Id == msg.IndexId then
                Zone.Functions.sendError(msg.From, 'Id already exists')
                return
            end
        end

        table.insert(Zone.Data.KV.Store.Index, { Id = msg.IndexId })

        SyncState()
        msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
    end

    function Zone.Functions.indexNotice(msg)
        local entryIndex = -1
        for i, entry in ipairs(Zone.Data.KV.Store.Index) do
            if entry.Id == msg.From then
                entryIndex = i
                break
            end
        end

        if entryIndex > -1 then
            -- Decode the message data
            local decodedData = Zone.Functions.decodeMessageData(msg.Data)
            if not decodedData.success or not decodedData.data then
                Zone.Functions.sendError(msg.From, 'Invalid Data')
                return
            end

            -- Get the existing entry and the new data
            local existingEntry = Zone.Data.KV.Store.Index[entryIndex]
            local newData = decodedData.data or {}

            for key, value in pairs(newData) do
                if type(value) == 'table' and type(existingEntry[key]) == 'table' then
                    existingEntry[key] = Zone.Functions.mergeTables(existingEntry[key], value)
                else
                    existingEntry[key] = value
                end
            end

            Zone.Data.KV.Store.Index[entryIndex] = existingEntry

            SyncState()
            msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
        else
            Zone.Functions.sendError(msg.From, 'Entry not found')
        end
    end

    function Zone.Functions.setHandler(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        local path = msg.Tags.Path or ''
        local decodedData = Zone.Functions.decodeMessageData(msg.Data)
        if not decodedData.success or not decodedData.data then
            Zone.Functions.sendError(msg.From, 'Invalid Data')
            return
        end

        Zone.Data.KV:set(path, decodedData.data)

        SyncState()
        msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
    end

    function Zone.Functions.appendHandler(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        local path = msg.Tags.Path or ''
        local decodedData = Zone.Functions.decodeMessageData(msg.Data)

        if not decodedData.success or not decodedData.data then
            Zone.Functions.sendError(msg.From, 'Invalid Data')
            return
        end

        Zone.Data.KV:append(path, decodedData.data)

        SyncState()
        msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
    end

    function Zone.Functions.removeHandler(msg)
        if not Zone.Functions.isAuthorized(msg) then
            Zone.Functions.sendError(msg.From, 'Not Authorized')
            return
        end

        local path = msg.Tags.Path or ''
        if path == '' then
            Zone.Functions.sendError(msg.From, 'Invalid Path: Path required to remove')
            return
        end

        Zone.Data.KV:remove(path)

        SyncState()
        msg.reply({ Target = msg.From, Action = Zone.Constants.H_ZONE_SUCCESS })
    end

    Handlers.add(Zone.Constants.H_ZONE_GET, Zone.Constants.H_ZONE_GET, Zone.Functions.zoneGet)
    Handlers.add(Zone.Constants.H_ZONE_KEYS, Zone.Constants.H_ZONE_KEYS, Zone.Functions.keysHandler)
    Handlers.add(Zone.Constants.H_ZONE_CREDIT_NOTICE, Zone.Constants.H_ZONE_CREDIT_NOTICE, Zone.Functions.creditNotice)
    Handlers.add(Zone.Constants.H_ZONE_DEBIT_NOTICE, Zone.Constants.H_ZONE_DEBIT_NOTICE, Zone.Functions.debitNotice)
    Handlers.add(Zone.Constants.H_ZONE_UPDATE, Zone.Constants.H_ZONE_UPDATE, Zone.Functions.zoneUpdate)
    Handlers.add(Zone.Constants.H_ZONE_ADD_UPLOAD, Zone.Constants.H_ZONE_ADD_UPLOAD, Zone.Functions.addUpload)
    Handlers.add(Zone.Constants.H_ZONE_RUN_ACTION, Zone.Constants.H_ZONE_RUN_ACTION, Zone.Functions.runAction)
    Handlers.add(Zone.Constants.H_ZONE_ADD_INDEX_ID, Zone.Constants.H_ZONE_ADD_INDEX_ID, Zone.Functions.addIndexId)
    Handlers.add(Zone.Constants.H_ZONE_INDEX_NOTICE, Zone.Constants.H_ZONE_INDEX_NOTICE, Zone.Functions.indexNotice)
    Handlers.add(Zone.Constants.H_ZONE_SET, Zone.Constants.H_ZONE_SET, Zone.Functions.setHandler)
    Handlers.add(Zone.Constants.H_ZONE_APPEND, Zone.Constants.H_ZONE_APPEND, Zone.Functions.appendHandler)
    Handlers.add(Zone.Constants.H_ZONE_REMOVE, Zone.Constants.H_ZONE_REMOVE, Zone.Functions.removeHandler)
    Handlers.add(Zone.Constants.H_ZONE_ROLE_SET, Zone.Constants.H_ZONE_ROLE_SET, Zone.Functions.zoneRoleSet)
    Handlers.add(Zone.Constants.H_ZONE_JOIN, Zone.Constants.H_ZONE_JOIN, Zone.Functions.joinZone)
    Handlers.add(Zone.Constants.H_ZONE_ADD_INVITE, Zone.Constants.H_ZONE_ADD_INVITE, Zone.Functions.addZoneInvite)

    --------------------------------------------------------------------------------
    -- Helper function: setStoreValue
    -- This function takes a dot-notated key and a value, then sets it in the
    -- Zone.Data.KV store with the following behaviors:
    --   1) If the final segment ends with '[]', we treat it as an array field and
    --      append the new value.
    --   2) If the final segment ends with '+++', we treat it as an instruction to
    --      'append the string' to whatever already exists at that key. If it is an
    --      array field (with '[]'), we append to the last element.
    --   3) Otherwise, we just set/overwrite the value at that key in the KV store.
    --------------------------------------------------------------------------------
    local function setStoreValue(keyString, value)
        -- 1) Split the input keyString on dots
        local parts = {}
        for part in string.gmatch(keyString, '[^%.]+') do
            table.insert(parts, part)
        end

        -- 2) Check for trailing '+++' or '[]'
        local lastPart = parts[#parts]

        -- Check if we want to append to an existing string
        local isStringAppend = false
        if string.sub(lastPart, -3) == '+++' then
            isStringAppend = true
            lastPart = string.sub(lastPart, 1, -4) -- remove '+++'
        end

        -- Check if we are dealing with an array
        local isArray = false
        if string.sub(lastPart, -2) == '[]' then
            isArray = true
            lastPart = string.sub(lastPart, 1, -3) -- remove '[]'
        end

        -- Update the last segment in our parts table
        parts[#parts]      = lastPart

        -- 3) Build a dot-notated key up to (but not including) the last part
        --    We'll use this later to navigate or set in the KV store.
        local pathUpToLast = table.concat(parts, '.', 1, #parts - 1)
        local finalKey     = parts[#parts]

        -- A small helper to rejoin the entire path so KV can handle the nested structure:
        local function recombinePath(upTo, last)
            if upTo == nil or upTo == '' then
                return last
            else
                return upTo .. '.' .. last
            end
        end

        local fullKey = recombinePath(pathUpToLast, finalKey)

        --------------------------------------------------------------------
        -- 4) Handling for the '+++' case (string appending)
        --------------------------------------------------------------------
        if isStringAppend then
            local currentValue = Zone.Data.KV:get(fullKey)

            if isArray then
                -- If no array yet, create it with a single element
                if type(currentValue) ~= 'table' then
                    Zone.Data.KV:set(fullKey, { value })
                    return
                end
                -- Otherwise, append the incoming string to the last element
                local lastIndex = #currentValue
                if lastIndex == 0 then
                    -- If array is empty, just add this as the first element
                    table.insert(currentValue, value)
                else
                    -- Append to the last string in the array
                    currentValue[lastIndex] = currentValue[lastIndex] .. value
                end
                Zone.Data.KV:set(fullKey, currentValue)
            else
                -- Not an array, just a single field
                if currentValue == nil then
                    -- Nothing was there, just set it
                    Zone.Data.KV:set(fullKey, value)
                elseif type(currentValue) == 'string' then
                    -- Append to existing string
                    Zone.Data.KV:set(fullKey, currentValue .. value)
                else
                    -- If it wasn't a string, simply overwrite
                    Zone.Data.KV:set(fullKey, value)
                end
            end

            --------------------------------------------------------------------
            -- 5) Handling for a normal set, with or without '[]'
            --------------------------------------------------------------------
        else
            if isArray then
                Zone.Data.KV:append(fullKey, value)
            else
                -- Normal field, just set (overwrite) it
                Zone.Data.KV:set(fullKey, value)
            end
        end
    end

    if not ZoneInitCompleted then
        if #Inbox >= 1 and Inbox[1]['On-Boot'] ~= nil then
            for _, tag in ipairs(Inbox[1].TagArray) do
                local prefix = 'Bootloader-'
                if string.sub(tag.name, 1, string.len(prefix)) == prefix then
                    local keyWithoutPrefix = string.sub(tag.name, string.len(prefix) + 1)
                    setStoreValue(keyWithoutPrefix, tag.value)
                end
            end
        end

        SyncState()
        ZoneInitCompleted = true
    end

    return Zone
end
package.loaded['@permaweb/zone'] = load_zone_v2()
