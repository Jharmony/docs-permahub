% First, let's create a complex Lua script that includes:
% 1. Multiple functions
% 2. Error handling
% 3. Complex data structures
% 4. State management

ComplexScript = <<
"""
-- State management
local state = {
    counter = 0,
    history = {}
}

-- Complex function that processes data and maintains state
function process_data(data)
    state.counter = state.counter + 1
    
    local result = {
        input = data,
        processed = {},
        metadata = {
            timestamp = os.time(),
            counter = state.counter
        }
    }
    
    -- Process the input data
    if type(data) == 'table' then
        for k, v in pairs(data) do
            result.processed[k] = v * 2
            table.insert(state.history, {key = k, value = v})
        end
    end
    
    return result
end

-- Function that can throw errors
function risky_operation(should_fail)
    if should_fail then
        error("This is a test error!")
    end
    return "Operation successful"
end

-- Function to get state
function get_state()
    return {
        counter = state.counter,
        history = state.history
    }
end

-- Function to reset state
function reset_state()
    state = {
        counter = 0,
        history = {}
    }
    return "State reset"
end
"""
>>,

% Create the base message with our Lua script
Base = #{
    <<"device">> => <<"lua@5.3a">>,
    <<"module">> => #{
        <<"content-type">> => <<"application/lua">>,
        <<"body">> => ComplexScript
    }
},

% Now let's test it with some complex data
TestData = #{
    <<"a">> => 10,
    <<"b">> => 20,
    <<"c">> => 30
},

% Test the process_data function
{ok, ProcessedResult} = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"process_data">>,
        <<"parameters">> => [TestData]
    },
    #{}
),

% Test the risky_operation function (success case)
{ok, SuccessResult} = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"risky_operation">>,
        <<"parameters">> => [false]
    },
    #{}
),

% Test the risky_operation function (error case)
{error, ErrorResult} = hb_ao:resolve(
    Base,
    #{
        <<"path">> => <<"risky_operation">>,
        <<"parameters">> => [true]
    },
    #{}
),

% Get the current state
{ok, StateResult} = hb_ao:resolve(
    Base,
    <<"get_state">>,
    #{}
),

% Reset the state
{ok, ResetResult} = hb_ao:resolve(
    Base,
    <<"reset_state">>,
    #{}
)