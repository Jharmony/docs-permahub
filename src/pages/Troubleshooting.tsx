import React from 'react';

const Troubleshooting = () => {
  return (
    <div className="page-container">
      <h1>Troubleshooting</h1>
      
      <p>This guide helps you resolve common issues when working with <code>@permaweb/libs</code>.</p>

      <h2>Common Issues</h2>

      <h3>1. Network Connection Issues</h3>
      <p><strong>Problem</strong>: Unable to connect to Arweave network</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Timeout errors</li>
        <li>Network connection refused</li>
        <li>"Failed to fetch" errors</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`// Check network connectivity
import Arweave from 'arweave'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

// Test connection
try {
  const info = await arweave.network.getInfo()
  console.log('Network info:', info)
} catch (error) {
  console.error('Network connection failed:', error)
}`}</code></pre>

      <p><strong>Alternative gateways</strong>:</p>
      <pre><code>{`// Try different gateways
const gateways = [
  'arweave.net',
  'arweave.live',
  'arweave.dev'
]

for (const gateway of gateways) {
  try {
    const arweave = Arweave.init({ host: gateway })
    const info = await arweave.network.getInfo()
    console.log(\`Connected to \${gateway}\`)
    break
  } catch (error) {
    console.log(\`Failed to connect to \${gateway}\`)
  }
}`}</code></pre>

      <h3>2. Wallet Authentication Issues</h3>
      <p><strong>Problem</strong>: Wallet not working or authentication failing</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>"Invalid wallet" errors</li>
        <li>"Insufficient funds" errors</li>
        <li>Wallet not found</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`// Validate wallet format
const validateWallet = (wallet: any) => {
  const requiredFields = ['kty', 'n', 'e', 'd']
  const hasAllFields = requiredFields.every(field => wallet.hasOwnProperty(field))
  
  if (!hasAllFields) {
    throw new Error('Invalid wallet format')
  }
  
  return true
}

// Check wallet balance
const checkBalance = async (wallet: any) => {
  const arweave = Arweave.init({})
  const address = await arweave.wallets.getAddress(wallet)
  const balance = await arweave.wallets.getBalance(address)
  
  console.log(\`Balance: \${arweave.ar.winstonToAr(balance)} AR\`)
  return balance
}`}</code></pre>

      <p><strong>Common wallet issues</strong>:</p>
      <ul>
        <li>Wallet file corrupted: Regenerate wallet</li>
        <li>Insufficient funds: Add AR to wallet</li>
        <li>Wrong wallet format: Ensure proper JSON structure</li>
      </ul>

      <h3>3. Transaction Failures</h3>
      <p><strong>Problem</strong>: Transactions failing to submit or confirm</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Transaction pending indefinitely</li>
        <li>"Transaction failed" errors</li>
        <li>Network errors during submission</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`// Retry mechanism for failed transactions
const retryTransaction = async (operation: () => Promise<any>, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation()
    } catch (error) {
      console.log(\`Attempt \${i + 1} failed:\`, error)
      
      if (i === maxRetries - 1) {
        throw error
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}

// Check transaction status
const checkTransactionStatus = async (txId: string) => {
  const arweave = Arweave.init({})
  
  try {
    const status = await arweave.transactions.getStatus(txId)
    console.log('Transaction status:', status)
    return status
  } catch (error) {
    console.error('Failed to check status:', error)
    return null
  }
}`}</code></pre>

      <h3>4. Zone Creation Issues</h3>
      <p><strong>Problem</strong>: Unable to create zones</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Zone name already exists</li>
        <li>Invalid zone name format</li>
        <li>Permission denied</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`import { zones } from '@permaweb/libs'

// Check if zone exists before creating
const createZoneSafely = async (zoneData: any) => {
  try {
    // Check if zone already exists
    const existingZones = await zones.list()
    const zoneExists = existingZones.some(zone => zone.name === zoneData.name)
    
    if (zoneExists) {
      console.log(\`Zone "\${zoneData.name}" already exists\`)
      return null
    }
    
    // Create zone
    const result = await zones.create(zoneData)
    console.log('Zone created:', result)
    return result
  } catch (error) {
    console.error('Failed to create zone:', error)
    throw error
  }
}

// Validate zone name
const validateZoneName = (name: string) => {
  const validPattern = /^[a-zA-Z0-9-_]+$/
  
  if (!validPattern.test(name)) {
    throw new Error('Zone name can only contain letters, numbers, hyphens, and underscores')
  }
  
  if (name.length < 3 || name.length > 50) {
    throw new Error('Zone name must be between 3 and 50 characters')
  }
  
  return true
}`}</code></pre>

      <h3>5. Profile Update Issues</h3>
      <p><strong>Problem</strong>: Profile updates not working</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Profile not updating</li>
        <li>Avatar upload failures</li>
        <li>Data not persisting</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`import { profiles } from '@permaweb/libs'

// Update profile with validation
const updateProfileSafely = async (profileId: string, updates: any) => {
  try {
    // Validate updates
    const validUpdates = {}
    
    if (updates.name && updates.name.length > 0) {
      validUpdates.name = updates.name.trim()
    }
    
    if (updates.bio && updates.bio.length <= 500) {
      validUpdates.bio = updates.bio.trim()
    }
    
    if (updates.avatar && updates.avatar.startsWith('ar://')) {
      validUpdates.avatar = updates.avatar
    }
    
    // Update profile
    const result = await profiles.update(profileId, validUpdates)
    console.log('Profile updated:', result)
    return result
  } catch (error) {
    console.error('Failed to update profile:', error)
    throw error
  }
}

// Handle avatar upload
const uploadAvatar = async (file: File) => {
  try {
    // Validate file
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      throw new Error('File too large. Maximum size is 5MB.')
    }
    
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image')
    }
    
    // Upload to Arweave
    const arweave = Arweave.init({})
    const data = await file.arrayBuffer()
    
    const transaction = await arweave.createTransaction({
      data: data
    })
    
    transaction.addTag('Content-Type', file.type)
    transaction.addTag('App-Name', 'permaweb-libs')
    
    await arweave.transactions.sign(transaction)
    await arweave.transactions.post(transaction)
    
    return \`ar://\${transaction.id}\`
  } catch (error) {
    console.error('Failed to upload avatar:', error)
    throw error
  }
}`}</code></pre>

      <h3>6. Atomic Asset Issues</h3>
      <p><strong>Problem</strong>: Asset creation or retrieval problems</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Asset not found</li>
        <li>Metadata corruption</li>
        <li>Upload failures</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`import { atomicAssets } from '@permaweb/libs'

// Create asset with proper metadata
const createAssetSafely = async (assetData: any) => {
  try {
    // Validate metadata
    if (!assetData.name || assetData.name.length === 0) {
      throw new Error('Asset name is required')
    }
    
    if (!assetData.data) {
      throw new Error('Asset data is required')
    }
    
    // Add required metadata
    const metadata = {
      name: assetData.name,
      description: assetData.description || '',
      attributes: assetData.attributes || [],
      image: assetData.image || '',
      external_url: assetData.external_url || '',
      animation_url: assetData.animation_url || '',
      ...assetData.metadata
    }
    
    const result = await atomicAssets.create({
      ...assetData,
      metadata
    })
    
    console.log('Asset created:', result)
    return result
  } catch (error) {
    console.error('Failed to create asset:', error)
    throw error
  }
}

// Retrieve asset with error handling
const getAssetSafely = async (assetId: string) => {
  try {
    const asset = await atomicAssets.get(assetId)
    
    if (!asset) {
      throw new Error(\`Asset \${assetId} not found\`)
    }
    
    return asset
  } catch (error) {
    console.error(\`Failed to retrieve asset \${assetId}:\`, error)
    throw error
  }
}`}</code></pre>

      <h3>7. Collection Issues</h3>
      <p><strong>Problem</strong>: Collection operations failing</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Collection not found</li>
        <li>Items not adding to collection</li>
        <li>Collection metadata issues</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`import { collections } from '@permaweb/libs'

// Create collection with validation
const createCollectionSafely = async (collectionData: any) => {
  try {
    // Validate required fields
    if (!collectionData.name) {
      throw new Error('Collection name is required')
    }
    
    if (!collectionData.description) {
      throw new Error('Collection description is required')
    }
    
    // Set defaults
    const defaults = {
      maxSupply: 1000,
      category: 'general',
      tags: [],
      ...collectionData
    }
    
    const result = await collections.create(defaults)
    console.log('Collection created:', result)
    return result
  } catch (error) {
    console.error('Failed to create collection:', error)
    throw error
  }
}

// Add item to collection safely
const addItemToCollection = async (collectionId: string, itemId: string) => {
  try {
    // Check if collection exists
    const collection = await collections.get(collectionId)
    if (!collection) {
      throw new Error(\`Collection \${collectionId} not found\`)
    }
    
    // Check if item exists
    const asset = await atomicAssets.get(itemId)
    if (!asset) {
      throw new Error(\`Asset \${itemId} not found\`)
    }
    
    // Add item to collection
    const result = await collections.addItem(collectionId, itemId)
    console.log('Item added to collection:', result)
    return result
  } catch (error) {
    console.error('Failed to add item to collection:', error)
    throw error
  }
}`}</code></pre>

      <h3>8. Comment System Issues</h3>
      <p><strong>Problem</strong>: Comment functionality not working</p>

      <p><strong>Symptoms</strong>:</p>
      <ul>
        <li>Comments not posting</li>
        <li>Comments not loading</li>
        <li>Threading issues</li>
      </ul>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`import { comments } from '@permaweb/libs'

// Post comment with validation
const postCommentSafely = async (commentData: any) => {
  try {
    // Validate comment
    if (!commentData.content || commentData.content.trim().length === 0) {
      throw new Error('Comment content is required')
    }
    
    if (commentData.content.length > 1000) {
      throw new Error('Comment too long. Maximum 1000 characters.')
    }
    
    // Sanitize content
    const sanitizedContent = commentData.content.trim()
    
    const result = await comments.create({
      ...commentData,
      content: sanitizedContent
    })
    
    console.log('Comment posted:', result)
    return result
  } catch (error) {
    console.error('Failed to post comment:', error)
    throw error
  }
}

// Load comments with pagination
const loadComments = async (targetId: string, page = 1, limit = 20) => {
  try {
    const offset = (page - 1) * limit
    
    const result = await comments.list({
      targetId,
      limit,
      offset
    })
    
    console.log(\`Loaded \${result.length} comments\`)
    return result
  } catch (error) {
    console.error('Failed to load comments:', error)
    throw error
  }
}`}</code></pre>

      <h2>Debugging Tools</h2>

      <h3>1. Enable Debug Logging</h3>

      <pre><code>{`// Enable debug mode
const DEBUG = true

const debugLog = (message: string, data?: any) => {
  if (DEBUG) {
    console.log(\`[DEBUG] \${message}\`, data || '')
  }
}

// Use in operations
const createZone = async (data: any) => {
  debugLog('Creating zone', data)
  
  try {
    const result = await zones.create(data)
    debugLog('Zone created successfully', result)
    return result
  } catch (error) {
    debugLog('Zone creation failed', error)
    throw error
  }
}`}</code></pre>

      <h3>2. Network Monitoring</h3>

      <pre><code>{`// Monitor network requests
const monitorRequest = async (operation: () => Promise<any>, name: string) => {
  const startTime = Date.now()
  
  try {
    const result = await operation()
    const duration = Date.now() - startTime
    
    console.log(\`\${name} completed in \${duration}ms\`)
    return result
  } catch (error) {
    const duration = Date.now() - startTime
    console.error(\`\${name} failed after \${duration}ms:\`, error)
    throw error
  }
}`}</code></pre>

      <h3>3. Error Tracking</h3>

      <pre><code>{`// Track errors for debugging
class ErrorTracker {
  private errors: Array<{ timestamp: number, error: any, context: any }> = []
  
  track(error: any, context?: any) {
    this.errors.push({
      timestamp: Date.now(),
      error,
      context
    })
    
    console.error('Error tracked:', { error, context })
  }
  
  getErrors() {
    return this.errors
  }
  
  clear() {
    this.errors = []
  }
}

const errorTracker = new ErrorTracker()`}</code></pre>

      <h2>Performance Issues</h2>

      <h3>1. Slow Loading</h3>
      <p><strong>Problem</strong>: Pages or data loading slowly</p>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`// Implement caching
const cache = new Map()

const cachedOperation = async (key: string, operation: () => Promise<any>) => {
  if (cache.has(key)) {
    const { data, timestamp } = cache.get(key)
    const age = Date.now() - timestamp
    
    // Cache for 5 minutes
    if (age < 5 * 60 * 1000) {
      return data
    }
  }
  
  const result = await operation()
  cache.set(key, { data: result, timestamp: Date.now() })
  return result
}

// Use with API calls
const getZones = () => cachedOperation('zones', () => zones.list())`}</code></pre>

      <h3>2. Memory Leaks</h3>
      <p><strong>Problem</strong>: Application using too much memory</p>

      <p><strong>Solutions</strong>:</p>

      <pre><code>{`// Implement proper cleanup
class ResourceManager {
  private resources: Set<any> = new Set()
  
  track(resource: any) {
    this.resources.add(resource)
  }
  
  cleanup() {
    this.resources.clear()
  }
}

const resourceManager = new ResourceManager()

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  resourceManager.cleanup()
})`}</code></pre>

      <h2>Getting Help</h2>
      <p>If you're still experiencing issues:</p>
      <ol>
        <li><strong>Check the documentation</strong>: Review the relevant API documentation</li>
        <li><strong>Search existing issues</strong>: Look for similar problems in the GitHub repository</li>
        <li><strong>Create a minimal reproduction</strong>: Create a simple example that demonstrates the issue</li>
        <li><strong>Include error details</strong>: Provide full error messages and stack traces</li>
        <li><strong>Share environment info</strong>: Include your Node.js version, browser, and OS details</li>
      </ol>

      <h3>Example Issue Report</h3>

      <pre><code>{`## Issue Description
Brief description of the problem

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Node.js version: 18.0.0
- Browser: Chrome 120.0.0
- OS: macOS 14.0
- @permaweb/libs version: 1.0.0

## Error Details
\`\`\`
Error: Network connection failed
    at ArweaveConnection.connect (connection.js:45)
    at ZoneManager.create (zones.js:23)
\`\`\`

## Code Example
\`\`\`typescript
import { zones } from '@permaweb/libs'

const result = await zones.create({
  name: 'test-zone',
  description: 'Test description'
})
\`\`\``}</code></pre>

      <h2>Conclusion</h2>
      <p>Most issues with <code>@permaweb/libs</code> can be resolved by:</p>
      <ol>
        <li>Checking network connectivity</li>
        <li>Validating wallet and authentication</li>
        <li>Implementing proper error handling</li>
        <li>Using the debugging tools provided</li>
        <li>Following best practices</li>
      </ol>

      <p>If you continue to experience issues, don't hesitate to reach out to the community for help!</p>
    </div>
  );
};

export default Troubleshooting; 