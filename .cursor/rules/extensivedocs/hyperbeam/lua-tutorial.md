# HyperBEAM Lua Device Tutorial: Using `hb_ao:resolve` and `hb_ao:get`

This tutorial teaches developers how to use HyperBEAM's core AO functions `hb_ao:resolve` and `hb_ao:get` to execute functions on the `dev_lua` device.

## Overview

In HyperBEAM, every computation follows the pattern: `resolve(BaseMessage, RequestMessage) -> {Status, Result}`. The `dev_lua` device allows you to execute Lua scripts within this framework, providing a powerful way to build dynamic computations.

## Core Functions

### `hb_ao:resolve/2` and `hb_ao:resolve/3`

`hb_ao:resolve` is the fundamental function for executing computations:

```erlang
% Basic resolution with path
hb_ao:resolve(BaseMessage, <<"function_name">>, Opts)

% Resolution with full request message
hb_ao:resolve(BaseMessage, #{<<"path">> => <<"function_name">>, <<"data">> => Value}, Opts)

% Resolution with just a path binary
hb_ao:resolve(#{<<"path">> => <<"function_name">>}, Opts)
```

**Returns:** `{ok, Result}` or `{error, ErrorDetails}`


## Working with dev_lua

### Basic Lua Message Structure

A Lua device message requires these key components:

```erlang
LuaMessage = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => #{
        <<"content-type">> => <<"application/lua">>,
        <<"body">> => LuaScript
    }
}
```

### Example 1: Simple Function Execution

```erlang
% Define a Lua script
LuaScript = <<
"""
function hello()
    return 'Hello, World!'
end

function add(a, b)
    return a + b
end
"""
>>,

% Create the base message
Base = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => #{
        <<"content-type">> => <<"application/lua">>,
        <<"body">> => LuaScript
    }
},

% Execute the hello function using resolve
{ok, Result1} = hb_ao:resolve(Base, <<"hello">>, #{}),
% Result1 = "Hello, World!"

% Execute the hello function using get
Result2 = hb_ao:get(<<"hello">>, Base, #{}),
% Result2 = "Hello, World!"
```

### Example 2: Function with Parameters

```erlang
% Execute a function with parameters using resolve
{ok, Sum} = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"add">>,
        <<"parameters">> => [10, 20]
    },
    #{}
),
% Sum = 30
```

### Example 3: Error Handling

```erlang
% Lua script with error function
ErrorScript = <<
"""
function good_func()
    return 'success'
end

function bad_func()
    error('Something went wrong!')
end
"""
>>,

Base = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => #{
        <<"content-type">> => <<"application/lua">>,
        <<"body">> => ErrorScript
    }
},

% Successful execution
{ok, Success} = hb_ao:resolve(Base, <<"good_func">>, #{}),
% Success = "success"

% Error handling with resolve
{error, ErrorDetails} = hb_ao:resolve(Base, <<"bad_func">>, #{}),
% ErrorDetails = #{<<"status">> => 500, <<"body">> => <<"Something went wrong!">>, ...}

% Error handling with get (using default)
Result = hb_ao:get(<<"bad_func">>, Base, <<"default_value">>, #{}),
% Result = "default_value"
```

### Example 4: Complex Data Structures

#### `hb_ao:get/2`, `hb_ao:get/3`, and `hb_ao:get/4`

`hb_ao:get` is a convenience function that calls `resolve` and extracts the result:

```erlang
% Get value with default fallback
hb_ao:get(Path, BaseMessage, Default, Opts)

% Get value or return not_found
hb_ao:get(Path, BaseMessage, Opts)

% Simple get with empty options
hb_ao:get(Path, BaseMessage)
```

**Returns:** The resolved value directly, or the default/`not_found` on error.

Example

```erlang
% Lua script handling complex data
ComplexScript = <<
"""
function process_data(data)
    local result = {
        input = data,
        processed = {},
        count = 0
    }
    
    if type(data) == 'table' then
        for k, v in pairs(data) do
            result.processed[k] = v * 2
            result.count = result.count + 1
        end
    end
    
    return result
end
"""
>>,

Base = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => #{
        <<"content-type">> => <<"application/lua">>,
        <<"body">> => ComplexScript
    }
},



% Execute with complex parameters
InputData = #{
    <<"a">> => 1,
    <<"b">> => 2,
    <<"c">> => 3
},

{ok, ProcessedResult} = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"process_data">>,
        <<"parameters">> => [InputData]
    },
    #{}
),

% Access nested results
Count = hb_ao:get(<<"count">>, ProcessedResult, #{}),
% Count = 3

ProcessedA = hb_ao:get(<<"processed/a">>, ProcessedResult, #{}),
% ProcessedA = 2
```

### Example 5: Multiple Modules

```erlang
% Load multiple Lua modules
Module1 = <<
"""
function math_utils_add(a, b)
    return a + b
end
"""
>>,

Module2 = <<
"""
function string_utils_concat(a, b)
    return a .. ' ' .. b
end
"""
>>,

Base = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => [
        #{
            <<"content-type">> => <<"application/lua">>,
            <<"body">> => Module1
        },
        #{
            <<"content-type">> => <<"application/lua">>,
            <<"body">> => Module2
        }
    ]
},

% Use functions from both modules
MathResult = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"math_utils_add">>,
        <<"parameters">> => [5, 10]
    },
    #{}
),
% MathResult = 15

StringResult = hb_ao:get(
    Base,
    #{
        <<"path">> => <<"string_utils_concat">>,
        <<"parameters">> => [<<"Hello">>, <<"World">>]
    },
    #{}
),
% StringResult = "Hello World"
```

## Key Concepts

### Device Resolution

The `dev_lua` device in HyperBEAM works by:

1. **Initialization**: Loading Lua scripts into memory (hb_ao.erl:45-64)
2. **Function Discovery**: Any function defined in the Lua script becomes callable
3. **Parameter Passing**: Erlang data structures are encoded to Lua format (dev_lua.erl:382-399)
4. **Execution**: The Lua function is called with encoded parameters (dev_lua.erl:267-277)
5. **Result Processing**: Lua results are decoded back to Erlang format (dev_lua.erl:281-318)

### Path Resolution

Functions can be called using different path formats:
- Simple function name: `<<"function_name">>`
- With parameters: `#{<<"path">> => <<"function_name">>, <<"parameters">> => [...]}`
- Nested paths: `<<"object/method">>`

### State Persistence

Lua device instances maintain state between calls within the same message context. The Lua VM state is stored in the message's private section (dev_lua.erl:226, 290-292).

### Error Handling Patterns

```erlang
% Pattern 1: Handle errors explicitly with resolve
case hb_ao:resolve(Base, Request, Opts) of
    {ok, Result} -> Result;
    {error, _} -> handle_error()
end

% Pattern 2: Use get with defaults
Result = hb_ao:get(Request, Base, <<"default_value">>, Opts)

% Pattern 3: Check for not_found
case hb_ao:get(Request, Base, Opts) of
    not_found -> handle_not_found();
    Value -> Value
end
```

## Best Practices

1. **Always specify the device**: Include `<<"device">> => <<"lua@5.3a">>` in your base message
2. **Use appropriate content-type**: Set `<<"content-type">> => <<"application/lua">>` for Lua modules
3. **Handle errors gracefully**: Use `hb_ao:get/4` with defaults for robust code
4. **Validate parameters**: Check Lua function signatures match your parameter passing
5. **Consider sandboxing**: Use the `<<"sandbox">>` option for untrusted code (dev_lua.erl:169-174)

## Advanced Features

### Sandboxing

```erlang
SandboxedBase = Base#{
    <<"sandbox">> => true  % Use default sandbox rules
    % OR
    % <<"sandbox">> => #{<<"os/execute">> => <<"blocked">>}  % Custom rules
}
```

### Function Listing

```erlang
% Get all available functions in a Lua environment
{ok, Functions} = hb_ao:resolve(Base, <<"functions">>, #{}),
% Functions = ["hello", "add", "process_data", ...]
```

This tutorial provides the foundation for using `hb_ao:resolve` and `hb_ao:get` with the Lua device. These patterns can be extended to build complex, stateful computations within the HyperBEAM ecosystem.