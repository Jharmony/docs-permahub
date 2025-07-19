import React from 'react';

const Comments = () => {
  return (
    <div className="page-container">
      <h1 id="comments">Comments</h1>
      
      <p>Comments provide a way to add social features to your permaweb applications. They allow users to leave feedback, ask questions, and engage with content through threaded discussions.</p>

      <h2 id="overview">Overview</h2>
      <p>Comments are social interactions that can be attached to various entities on the permaweb, such as atomic assets, collections, profiles, or zones. They support threaded conversations and can include rich text content.</p>

      <h2 id="key-features">Key Features</h2>
      <ul>
        <li><strong>Threaded Discussions</strong>: Support for nested comment threads</li>
        <li><strong>Rich Content</strong>: Support for text formatting and links</li>
        <li><strong>User Attribution</strong>: Comments are linked to user profiles</li>
        <li><strong>Content Association</strong>: Comments can be attached to any permaweb entity</li>
        <li><strong>Moderation</strong>: Built-in support for comment moderation</li>
      </ul>

      <h2 id="api-reference">API Reference</h2>

      <h3 id="create-comment"><code>createComment</code></h3>
      <p>Creates a new comment on a permaweb entity.</p>

      <pre><code>{`const commentId = await permaweb.createComment({
  content: "This is a great piece of artwork!",
  parentId: "parent-comment-id", // optional, for threaded comments
  targetId: "target-entity-id",  // the entity being commented on
  targetType: "asset",           // type of entity (asset, collection, profile, zone)
  metadata: {
    rating: 5,
    category: "feedback"
  }
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>args</code>: Object containing comment details
          <ul>
            <li><code>content</code>: The comment text content</li>
            <li><code>parentId</code> (optional): ID of parent comment for threading</li>
            <li><code>targetId</code>: ID of the entity being commented on</li>
            <li><code>targetType</code>: Type of the target entity</li>
            <li><code>metadata</code> (optional): Additional metadata object</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`CommentProcessId;`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Create a simple comment on an asset
const commentId = await permaweb.createComment({
  content: "This is an amazing piece of digital art! The colors are incredible.",
  targetId: assetId,
  targetType: "asset",
  metadata: {
    rating: 5,
    category: "appreciation"
  }
});

// Create a threaded comment (reply)
const replyId = await permaweb.createComment({
  content: "I agree! The artist really captured the mood perfectly.",
  parentId: commentId,
  targetId: assetId,
  targetType: "asset",
  metadata: {
    category: "reply"
  }
});

console.log("Comment created:", commentId);
console.log("Reply created:", replyId);`}</code></pre>

      <h3 id="get-comment"><code>getComment</code></h3>
      <p>Retrieves a specific comment by its ID.</p>

      <pre><code>{`const comment = await permaweb.getComment(commentId);`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>commentId</code>: The ID of the comment to fetch</li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  id: "CommentProcessId",
  content: "Comment content",
  parentId: "ParentCommentId", // null for top-level comments
  targetId: "TargetEntityId",
  targetType: "asset",
  author: "AuthorAddress",
  metadata: {
    // Custom metadata
  },
  replies: [
    {
      id: "ReplyProcessId1",
      content: "Reply content 1",
      // ... other reply properties
    },
    {
      id: "ReplyProcessId2",
      content: "Reply content 2",
      // ... other reply properties
    }
  ],
  dateCreated: 123456789,
  lastUpdate: 123456789
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get comment by ID
const comment = await permaweb.getComment(commentId);

console.log("Comment:", {
  content: comment.content,
  author: comment.author,
  targetType: comment.targetType,
  replyCount: comment.replies.length
});

// Display threaded replies
comment.replies.forEach(reply => {
  console.log(\`  Reply: \${reply.content}\`);
});`}</code></pre>

      <h3 id="get-comments"><code>getComments</code></h3>
      <p>Retrieves multiple comments with optional filtering.</p>

      <pre><code>{`const comments = await permaweb.getComments({
  targetId: "target-entity-id",
  targetType: "asset",
  parentId: null, // null for top-level comments only
  author: "author-address"
});`}</code></pre>

      <h4>Parameters</h4>
      <ul>
        <li><code>filters</code> (optional): Object containing filter criteria
          <ul>
            <li><code>targetId</code>: Filter by target entity ID</li>
            <li><code>targetType</code>: Filter by target entity type</li>
            <li><code>parentId</code>: Filter by parent comment ID (null for top-level)</li>
            <li><code>author</code>: Filter by comment author</li>
            <li><code>limit</code>: Maximum number of comments to return</li>
            <li><code>offset</code>: Number of comments to skip</li>
          </ul>
        </li>
      </ul>

      <h4>Returns</h4>
      <pre><code>{`{
  comments: [
    {
      id: "CommentProcessId1",
      content: "Comment content 1",
      // ... other comment properties
    },
    {
      id: "CommentProcessId2",
      content: "Comment content 2",
      // ... other comment properties
    }
  ],
  total: 50,
  hasMore: true
}`}</code></pre>

      <h4>Example</h4>
      <pre><code>{`// Get all comments on a specific asset
const assetComments = await permaweb.getComments({
  targetId: assetId,
  targetType: "asset"
});

// Get only top-level comments (no replies)
const topLevelComments = await permaweb.getComments({
  targetId: assetId,
  targetType: "asset",
  parentId: null
});

// Get comments by a specific author
const authorComments = await permaweb.getComments({
  author: walletAddress
});

// Get comments with pagination
const paginatedComments = await permaweb.getComments({
  targetId: assetId,
  targetType: "asset",
  limit: 10,
  offset: 20
});

console.log("Asset comments:", assetComments.comments.length);
console.log("Top-level comments:", topLevelComments.comments.length);
console.log("Author comments:", authorComments.comments.length);`}</code></pre>

      <h2>Complete Comment Management Example</h2>
      <p>Here's a comprehensive example demonstrating comment lifecycle management:</p>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

async function manageComments() {
  // Initialize permaweb SDK
  const permaweb = Permaweb.init({
    ao: connect(),
    arweave: Arweave.init(),
    signer: createDataItemSigner(wallet),
  });

  try {
    // 1. Create a test asset to comment on
    console.log("Creating test asset...");
    const assetId = await permaweb.createAtomicAsset({
      name: "Test Artwork",
      description: "A test artwork for comment demonstration",
      topics: ["art", "test", "demo"],
      creator: permaweb.arweave.wallets.getAddress(permaweb.signer),
      data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
      contentType: "image/png",
      assetType: "image"
    });
    console.log("Test asset created:", assetId);

    // 2. Create top-level comments
    console.log("Creating top-level comments...");
    const comment1 = await permaweb.createComment({
      content: "This is absolutely stunning! The composition is perfect.",
      targetId: assetId,
      targetType: "asset",
      metadata: {
        rating: 5,
        category: "appreciation"
      }
    });

    const comment2 = await permaweb.createComment({
      content: "What software did you use to create this?",
      targetId: assetId,
      targetType: "asset",
      metadata: {
        category: "question"
      }
    });

    console.log("Top-level comments created:", [comment1, comment2]);

    // 3. Create threaded replies
    console.log("Creating threaded replies...");
    const reply1 = await permaweb.createComment({
      content: "Thank you! I'm glad you like it.",
      parentId: comment1,
      targetId: assetId,
      targetType: "asset",
      metadata: {
        category: "reply"
      }
    });

    const reply2 = await permaweb.createComment({
      content: "I used Photoshop and some custom brushes.",
      parentId: comment2,
      targetId: assetId,
      targetType: "asset",
      metadata: {
        category: "reply",
        software: "Photoshop"
      }
    });

    console.log("Replies created:", [reply1, reply2]);

    // 4. Retrieve individual comments
    console.log("Fetching individual comments...");
    const comment1Data = await permaweb.getComment(comment1);
    const comment2Data = await permaweb.getComment(comment2);

    console.log("Comment 1:", comment1Data.content);
    console.log("Comment 2:", comment2Data.content);

    // 5. Get all comments on the asset
    console.log("Fetching all asset comments...");
    const allComments = await permaweb.getComments({
      targetId: assetId,
      targetType: "asset"
    });
    console.log("Total comments on asset:", allComments.comments.length);

    // 6. Get only top-level comments
    console.log("Fetching top-level comments...");
    const topLevelComments = await permaweb.getComments({
      targetId: assetId,
      targetType: "asset",
      parentId: null
    });
    console.log("Top-level comments:", topLevelComments.comments.length);

    // 7. Get comments by author
    console.log("Fetching author comments...");
    const authorAddress = permaweb.arweave.wallets.getAddress(permaweb.signer);
    const authorComments = await permaweb.getComments({
      author: authorAddress
    });
    console.log("Comments by author:", authorComments.comments.length);

    return {
      assetId,
      comments: [comment1, comment2],
      replies: [reply1, reply2],
      comment1Data,
      comment2Data,
      allComments: allComments.comments,
      topLevelComments: topLevelComments.comments,
      authorComments: authorComments.comments
    };

  } catch (error) {
    console.error("Error managing comments:", error);
    throw error;
  }
}

// Run the example
manageComments()
  .then(result => console.log("Comment management completed:", result))
  .catch(error => console.error("Comment management failed:", error));`}</code></pre>

      <h2>Comment Content Guidelines</h2>

      <h3>1. Content Types</h3>
      <pre><code>{`const commentTypes = {
  appreciation: "Positive feedback and compliments",
  question: "Questions about the content or creator",
  feedback: "Constructive criticism and suggestions",
  discussion: "General discussion about the topic",
  reply: "Responses to other comments",
  moderation: "Moderator actions and announcements"
};`}</code></pre>

      <h3>2. Rich Content Support</h3>
      <pre><code>{`// Comments can include formatted text and links
const richComment = await permaweb.createComment({
  content: "Check out this amazing artwork! I love the **bold colors** and *creative composition*. You can see more at [their portfolio](https://example.com).",
  targetId: assetId,
  targetType: "asset",
  metadata: {
    category: "appreciation",
    containsLinks: true,
    containsFormatting: true
  }
});`}</code></pre>

      <h2>Comment Moderation</h2>

      <h3>1. Basic Moderation</h3>
      <pre><code>{`function moderateComment(content: string): boolean {
  const inappropriateWords = ['spam', 'inappropriate', 'offensive'];
  const hasInappropriateContent = inappropriateWords.some(word => 
    content.toLowerCase().includes(word)
  );
  
  return !hasInappropriateContent;
}

async function createModeratedComment(commentData: any, permaweb: any) {
  if (!moderateComment(commentData.content)) {
    throw new Error("Comment contains inappropriate content");
  }
  
  return await permaweb.createComment(commentData);
}`}</code></pre>

      <h3>2. Rate Limiting</h3>
      <pre><code>{`class CommentRateLimiter {
  private userComments: Map<string, number[]> = new Map();
  private maxCommentsPerHour = 10;

  canComment(userAddress: string): boolean {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    if (!this.userComments.has(userAddress)) {
      this.userComments.set(userAddress, []);
    }
    
    const userCommentTimes = this.userComments.get(userAddress)!;
    const recentComments = userCommentTimes.filter(time => time > oneHourAgo);
    
    return recentComments.length < this.maxCommentsPerHour;
  }

  recordComment(userAddress: string) {
    if (!this.userComments.has(userAddress)) {
      this.userComments.set(userAddress, []);
    }
    
    this.userComments.get(userAddress)!.push(Date.now());
  }
}`}</code></pre>

      <h2>Best Practices</h2>

      <h3>1. Comment Guidelines</h3>
      <pre><code>{`const commentGuidelines = {
  content: {
    minLength: 1,                    // Minimum comment length
    maxLength: 1000,                 // Maximum comment length
    requireContent: true,            // Comments cannot be empty
    allowLinks: true,                // Allow links in comments
    allowFormatting: true            // Allow basic formatting
  },
  moderation: {
    autoModerate: true,              // Enable automatic moderation
    requireApproval: false,          // Require manual approval
    rateLimit: true,                 // Enable rate limiting
    maxCommentsPerHour: 10           // Rate limit threshold
  },
  threading: {
    maxDepth: 5,                     // Maximum reply depth
    allowNestedReplies: true         // Allow nested replies
  }
};`}</code></pre>

      <h3>2. Error Handling</h3>
      <pre><code>{`async function safeCommentOperation(commentId: string) {
  try {
    const comment = await permaweb.getComment(commentId);
    return comment;
  } catch (error) {
    if (error.message.includes("not found")) {
      console.log("Comment not found:", commentId);
      return null;
    }
    if (error.message.includes("permission")) {
      console.log("Permission denied for comment:", commentId);
      return null;
    }
    throw error;
  }
}`}</code></pre>

      <h3>3. Comment Validation</h3>
      <pre><code>{`function validateCommentData(commentData: any) {
  const errors = [];
  
  if (!commentData.content || commentData.content.trim().length === 0) {
    errors.push("Comment content is required");
  }
  
  if (commentData.content && commentData.content.length > 1000) {
    errors.push("Comment content must be less than 1000 characters");
  }
  
  if (!commentData.targetId) {
    errors.push("Target entity ID is required");
  }
  
  if (!commentData.targetType) {
    errors.push("Target entity type is required");
  }
  
  const validTargetTypes = ['asset', 'collection', 'profile', 'zone'];
  if (!validTargetTypes.includes(commentData.targetType)) {
    errors.push("Invalid target type. Must be one of: " + validTargetTypes.join(', '));
  }
  
  return errors;
}`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/zones">Zones</a> - Learn about the entities that can receive comments</li>
        <li><a href="#/profiles">Profiles</a> - Create profiles that can leave comments</li>
        <li><a href="#/atomic-assets">Atomic Assets</a> - Add comments to assets</li>
        <li><a href="#/collections">Collections</a> - Add comments to collections</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
      </ul>

      <p>Ready to add social features to your app? Start with the <a href="#/getting-started">Getting Started</a> guide or explore <a href="#/atomic-assets">Atomic Assets</a> to add comments to your content!</p>
    </div>
  );
}

export default Comments; 