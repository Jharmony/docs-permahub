import React from 'react';

const BestPractices = () => {
  return (
    <div className="page-container">
      <h1>Best Practices</h1>
      
      <p>This guide covers best practices for using <code>@permaweb/libs</code> effectively and securely.</p>

      <h2>General Guidelines</h2>

      <h3>1. Error Handling</h3>
      <p>Always implement proper error handling when working with Arweave transactions:</p>

      <pre><code>{`import { zones } from '@permaweb/libs'

try {
  const result = await zones.create({
    name: 'my-zone',
    description: 'A test zone'
  })
  console.log('Zone created:', result)
} catch (error) {
  console.error('Failed to create zone:', error)
  // Handle error appropriately
}`}</code></pre>

      <h3>2. Wallet Management</h3>
      <ul>
        <li><strong>Never expose private keys</strong> in client-side code</li>
        <li>Use environment variables for sensitive data</li>
        <li>Consider using wallet connectors for user authentication</li>
        <li>Implement proper key rotation strategies</li>
      </ul>

      <pre><code>{`// Good: Use environment variables
const wallet = JSON.parse(process.env.ARWEAVE_WALLET)

// Bad: Hardcoded private key
const wallet = { kty: 'RSA', n: '...', e: '...', d: '...' }`}</code></pre>

      <h3>3. Transaction Batching</h3>
      <p>For multiple operations, consider batching transactions to reduce costs:</p>

      <pre><code>{`import { zones, profiles } from '@permaweb/libs'

// Batch multiple operations
const operations = [
  zones.create({ name: 'zone1', description: 'First zone' }),
  zones.create({ name: 'zone2', description: 'Second zone' }),
  profiles.create({ name: 'profile1', bio: 'My profile' })
]

const results = await Promise.all(operations)`}</code></pre>

      <h2>Zones Best Practices</h2>

      <h3>1. Naming Conventions</h3>
      <ul>
        <li>Use descriptive, unique names</li>
        <li>Avoid special characters that might cause URL issues</li>
        <li>Consider using a prefix for your organization</li>
      </ul>

      <pre><code>{`// Good naming
const zoneName = 'my-company-main-zone'
const zoneName = 'project-alpha-2024'

// Avoid
const zoneName = 'zone' // Too generic
const zoneName = 'my zone' // Contains space`}</code></pre>

      <h3>2. Zone Organization</h3>
      <ul>
        <li>Create separate zones for different environments (dev, staging, prod)</li>
        <li>Use zones to organize content by category or project</li>
        <li>Document zone purposes and access patterns</li>
      </ul>

      <h3>3. Access Control</h3>
      <ul>
        <li>Implement proper access control for zone operations</li>
        <li>Use tags to mark sensitive zones</li>
        <li>Consider implementing zone-level permissions</li>
      </ul>

      <h2>Profiles Best Practices</h2>

      <h3>1. Profile Data</h3>
      <ul>
        <li>Keep profile data minimal and focused</li>
        <li>Use consistent data structures across profiles</li>
        <li>Validate profile data before submission</li>
      </ul>

      <pre><code>{`// Good profile structure
const profile = {
  name: 'John Doe',
  bio: 'Software developer passionate about Web3',
  avatar: 'ar://avatar-hash',
  links: {
    twitter: 'https://twitter.com/johndoe',
    github: 'https://github.com/johndoe'
  }
}`}</code></pre>

      <h3>2. Avatar Management</h3>
      <ul>
        <li>Use Arweave for storing avatar images</li>
        <li>Implement proper image optimization</li>
        <li>Consider using IPFS as a fallback</li>
      </ul>

      <h3>3. Profile Updates</h3>
      <ul>
        <li>Implement optimistic updates for better UX</li>
        <li>Handle concurrent profile updates gracefully</li>
        <li>Cache profile data appropriately</li>
      </ul>

      <h2>Atomic Assets Best Practices</h2>

      <h3>1. Asset Metadata</h3>
      <ul>
        <li>Use standardized metadata schemas</li>
        <li>Include proper licensing information</li>
        <li>Implement versioning for asset updates</li>
      </ul>

      <pre><code>{`const assetMetadata = {
  name: 'My Digital Art',
  description: 'A unique piece of digital art',
  attributes: [
    { trait_type: 'Color', value: 'Blue' },
    { trait_type: 'Style', value: 'Abstract' }
  ],
  license: 'CC-BY-4.0',
  version: '1.0.0'
}`}</code></pre>

      <h3>2. Asset Storage</h3>
      <ul>
        <li>Optimize asset sizes before upload</li>
        <li>Use appropriate content types</li>
        <li>Implement proper backup strategies</li>
      </ul>

      <h3>3. Asset Discovery</h3>
      <ul>
        <li>Use meaningful tags for better discoverability</li>
        <li>Implement proper search indexing</li>
        <li>Consider using collections for organization</li>
      </ul>

      <h2>Collections Best Practices</h2>

      <h3>1. Collection Design</h3>
      <ul>
        <li>Design collections with clear purposes</li>
        <li>Use consistent naming conventions</li>
        <li>Implement proper collection metadata</li>
      </ul>

      <pre><code>{`const collection = {
  name: 'My Art Collection',
  description: 'A curated collection of digital art',
  category: 'art',
  tags: ['digital-art', 'curated', 'limited-edition'],
  maxSupply: 100
}`}</code></pre>

      <h3>2. Collection Management</h3>
      <ul>
        <li>Implement proper access controls</li>
        <li>Use versioning for collection updates</li>
        <li>Monitor collection performance</li>
      </ul>

      <h3>3. Collection Discovery</h3>
      <ul>
        <li>Use descriptive names and descriptions</li>
        <li>Implement proper tagging systems</li>
        <li>Consider using categories for organization</li>
      </ul>

      <h2>Comments Best Practices</h2>

      <h3>1. Comment Moderation</h3>
      <ul>
        <li>Implement content moderation systems</li>
        <li>Use proper content filtering</li>
        <li>Handle spam and inappropriate content</li>
      </ul>

      <h3>2. Comment Threading</h3>
      <ul>
        <li>Implement proper reply structures</li>
        <li>Handle nested comments efficiently</li>
        <li>Consider pagination for large comment threads</li>
      </ul>

      <h3>3. Comment Performance</h3>
      <ul>
        <li>Implement proper caching strategies</li>
        <li>Use pagination for large comment lists</li>
        <li>Consider real-time updates for active discussions</li>
      </ul>

      <h2>Security Considerations</h2>

      <h3>1. Input Validation</h3>
      <p>Always validate user inputs before processing:</p>

      <pre><code>{`import { z } from 'zod'

const zoneSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(1000)
})

const validatedData = zoneSchema.parse(userInput)`}</code></pre>

      <h3>2. Rate Limiting</h3>
      <p>Implement rate limiting for API calls:</p>

      <pre><code>{`class RateLimiter {
  private requests = new Map<string, number[]>()
  
  async checkLimit(userId: string, limit: number, window: number): Promise<boolean> {
    const now = Date.now()
    const userRequests = this.requests.get(userId) || []
    
    // Remove old requests
    const recentRequests = userRequests.filter(time => now - time < window)
    
    if (recentRequests.length >= limit) {
      return false
    }
    
    recentRequests.push(now)
    this.requests.set(userId, recentRequests)
    return true
  }
}`}</code></pre>

      <h3>3. Content Sanitization</h3>
      <p>Sanitize user-generated content:</p>

      <pre><code>{`import DOMPurify from 'dompurify'

const sanitizeContent = (content: string): string => {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a'],
    ALLOWED_ATTR: ['href']
  })
}`}</code></pre>

      <h2>Performance Optimization</h2>

      <h3>1. Caching Strategies</h3>
      <p>Implement proper caching for frequently accessed data:</p>

      <pre><code>{`class Cache {
  private cache = new Map<string, { data: any, timestamp: number }>()
  private ttl = 5 * 60 * 1000 // 5 minutes
  
  get(key: string) {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key)
      return null
    }
    
    return item.data
  }
  
  set(key: string, data: any) {
    this.cache.set(key, { data, timestamp: Date.now() })
  }
}`}</code></pre>

      <h3>2. Lazy Loading</h3>
      <p>Implement lazy loading for large datasets:</p>

      <pre><code>{`const loadProfiles = async (page: number, limit: number) => {
  const offset = page * limit
  return await profiles.list({ limit, offset })
}`}</code></pre>

      <h3>3. Optimistic Updates</h3>
      <p>Use optimistic updates for better user experience:</p>

      <pre><code>{`const updateProfile = async (updates: ProfileUpdates) => {
  // Optimistic update
  const optimisticProfile = { ...currentProfile, ...updates }
  setProfile(optimisticProfile)
  
  try {
    const result = await profiles.update(updates)
    setProfile(result)
  } catch (error) {
    // Revert on error
    setProfile(currentProfile)
    throw error
  }
}`}</code></pre>

      <h2>Testing Best Practices</h2>

      <h3>1. Unit Testing</h3>
      <p>Write comprehensive unit tests for your components:</p>

      <pre><code>{`import { describe, it, expect, vi } from 'vitest'
import { zones } from '@permaweb/libs'

vi.mock('@permaweb/libs')

describe('Zone Operations', () => {
  it('should create a zone successfully', async () => {
    const mockZone = { id: 'test-id', name: 'test-zone' }
    vi.mocked(zones.create).mockResolvedValue(mockZone)
    
    const result = await zones.create({ name: 'test-zone' })
    expect(result).toEqual(mockZone)
  })
})`}</code></pre>

      <h3>2. Integration Testing</h3>
      <p>Test integration with Arweave:</p>

      <pre><code>{`describe('Arweave Integration', () => {
  it('should upload and retrieve data', async () => {
    const testData = { message: 'Hello Arweave' }
    const txId = await uploadToArweave(testData)
    
    const retrievedData = await getFromArweave(txId)
    expect(retrievedData).toEqual(testData)
  })
})`}</code></pre>

      <h3>3. Error Testing</h3>
      <p>Test error scenarios:</p>

      <pre><code>{`describe('Error Handling', () => {
  it('should handle network errors gracefully', async () => {
    vi.mocked(zones.create).mockRejectedValue(new Error('Network error'))
    
    await expect(zones.create({ name: 'test' }))
      .rejects.toThrow('Network error')
  })
})`}</code></pre>

      <h2>Deployment Best Practices</h2>

      <h3>1. Environment Configuration</h3>
      <p>Use proper environment configuration:</p>

      <pre><code>{`const config = {
  arweave: {
    host: process.env.ARWEAVE_HOST || 'arweave.net',
    port: process.env.ARWEAVE_PORT || 443,
    protocol: process.env.ARWEAVE_PROTOCOL || 'https'
  },
  wallet: process.env.ARWEAVE_WALLET ? JSON.parse(process.env.ARWEAVE_WALLET) : undefined
}`}</code></pre>

      <h3>2. Monitoring</h3>
      <p>Implement proper monitoring and logging:</p>

      <pre><code>{`import { logger } from './logger'

const logOperation = async (operation: string, data: any) => {
  logger.info(\`Starting \${operation}\`, { data })
  
  try {
    const result = await performOperation(data)
    logger.info(\`Completed \${operation}\`, { result })
    return result
  } catch (error) {
    logger.error(\`Failed \${operation}\`, { error })
    throw error
  }
}`}</code></pre>

      <h3>3. Backup Strategies</h3>
      <p>Implement proper backup strategies for critical data:</p>

      <pre><code>{`const backupData = async (data: any) => {
  // Primary storage on Arweave
  const arweaveTx = await uploadToArweave(data)
  
  // Backup to IPFS
  const ipfsHash = await uploadToIPFS(data)
  
  // Store references
  await storeReferences({
    arweave: arweaveTx,
    ipfs: ipfsHash,
    timestamp: Date.now()
  })
}`}</code></pre>

      <h2>Conclusion</h2>
      <p>Following these best practices will help you build robust, secure, and performant applications with <code>@permaweb/libs</code>. Remember to:</p>
      <ul>
        <li>Always handle errors gracefully</li>
        <li>Implement proper security measures</li>
        <li>Optimize for performance</li>
        <li>Test thoroughly</li>
        <li>Monitor your applications</li>
        <li>Keep dependencies updated</li>
      </ul>

      <p>For more specific guidance, refer to the individual API documentation sections and examples provided in this documentation.</p>
    </div>
  );
};

export default BestPractices; 