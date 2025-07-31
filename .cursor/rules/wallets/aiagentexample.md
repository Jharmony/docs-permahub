TECHNICAL EXAMPLES
Agent Scheduling with Cron
AO provides cron-like scheduling for autonomous operation through command-line setup and message handlers:
Note: The first code block below is for running on the aos CLI. For installation instructions, see: https://cookbook_ao.arweave.net/guides/aos/installing.html
Setting up a cron process:
# Spawn process with 5-minute cron interval
aos [myProcess] --cron 5-minutes

# Activate cron monitoring
.monitor
Handling cron messages:
-- Handle cron messages for autonomous operation
Handlers.add(
  "CronTick", -- Handler name
  Handlers.utils.hasMatchingTag("Action", "Cron"), -- Pattern to identify cron message
  function () -- Handler task to execute on cron message
    -- Check data every cron interval
    local reading = ao.data.get("temperature-sensor-1")
    if reading > 30 then
      ao.send({
        Target = "alert-handler",
        Action = "alert",
        Data = {
          reading = reading,
          timestamp = os.time()
        }
      })
    end
  end
)
Simple Monitoring Agent
local Agent = {}

Agent.config = {
  dataSource = "temperature-sensor-1",
  threshold = 30,
  alertRecipient = "alert-handler"
}

function Agent.checkReading()
  local reading = ao.data.get(Agent.config.dataSource)
  
  if reading > Agent.config.threshold then
    ao.send({
      Target = Agent.config.alertRecipient,
      Action = "alert",
      Data = {
        source = Agent.config.dataSource,
        reading = reading,
        threshold = Agent.config.threshold,
        timestamp = os.time()
      }
    })
  end
end

-- Set up cron handler for autonomous monitoring
Handlers.add(
  "MonitoringCron",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  Agent.checkReading
)

-- Note: Process must be spawned with --cron flag and .monitor called
-- Example: aos [myMonitoringAgent] --cron 5-minutes
Prediction Agent with Machine Learning
local PredictionAgent = {}
local aolearn = require('aolearn')

PredictionAgent.config = {
  modelType = "knn", -- Using k-Nearest Neighbors algorithm
  dataSource = "sensor-readings",
  k = 5, -- Number of neighbors to consider
  features = {"temperature", "humidity", "pressure"}
}

-- Initialize and train the model
function PredictionAgent.initialize()
  -- Load training data from permanent storage
  local trainingData = ao.data.get(PredictionAgent.config.dataSource)
  
  -- Create and train KNN model
  PredictionAgent.model = aolearn.knn.new({
    k = PredictionAgent.config.k,
    features = #PredictionAgent.config.features
  })
  
  -- Train the model with historical data
  PredictionAgent.model:train(trainingData.x, trainingData.y)
  ao.log("Prediction model initialized and trained")
end

-- Make predictions based on new data
function PredictionAgent.predict(newData)
  -- Validate input
  if not newData or #newData ~= #PredictionAgent.config.features then
    return { error = "Invalid input data format" }
  end
  
  -- Make prediction using the trained model
  local prediction = PredictionAgent.model:predict(newData)
  
  -- Store the prediction and input for future model improvements
  ao.data.append(PredictionAgent.config.dataSource .. "-predictions", {
    input = newData,
    prediction = prediction,
    timestamp = os.time()
  })
  
  return {
    prediction = prediction,
    confidence = PredictionAgent.model:confidence(),
    timestamp = os.time()
  }
end

-- Handle incoming prediction requests
Handlers.add(
  "PredictionRequest",
  Handlers.utils.hasMatchingTag("Action", "predict"),
  function(msg)
    if msg.Data and msg.Data.features then
      local result = PredictionAgent.predict(msg.Data.features)
      ao.send({
        Target = msg.From,
        Action = "prediction-result",
        Data = result
      })
    else
      ao.send({
        Target = msg.From,
        Action = "error",
        Data = { error = "Missing feature data" }
      })
    end
  end
)

-- Set up periodic model retraining via cron
Handlers.add(
  "ModelRetraining",
  Handlers.utils.hasMatchingTag("Action", "Cron"),
  function()
    PredictionAgent.initialize() -- Retrain with latest data
    ao.log("Model retrained at " .. os.time())
  end
)

-- Initialize the model when the agent starts
PredictionAgent.initialize()

-- Note: For daily retraining, spawn with: aos [myPredictionAgent] --cron 1-day