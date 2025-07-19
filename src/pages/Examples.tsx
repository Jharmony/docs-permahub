import React from 'react';

const Examples = () => {
  return (
    <div className="page-container">
      <h1>Examples</h1>
      
      <p>This page provides real-world examples and usage patterns for @permaweb/libs. Each example demonstrates practical applications of the SDK in different scenarios.</p>

      <h2>Quick Navigation</h2>
      <ul>
        <li><a href="#basic-setup">Basic Setup</a></li>
        <li><a href="#profile-management">Profile Management</a></li>
        <li><a href="#asset-gallery">Asset Gallery</a></li>
        <li><a href="#social-platform">Social Platform</a></li>
        <li><a href="#nft-marketplace">NFT Marketplace</a></li>
        <li><a href="#blog-platform">Blog Platform</a></li>
        <li><a href="#portfolio-site">Portfolio Site</a></li>
      </ul>

      <h2 id="basic-setup">Basic Setup</h2>

      <h3>Complete Initialization Example</h3>

      <pre><code>{`import Arweave from "arweave";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import Permaweb from "@permaweb/libs";

class PermawebApp {
  private permaweb: any;
  private wallet: any;

  constructor() {
    this.initializeSDK();
  }

  private async initializeSDK() {
    try {
      // Initialize Arweave
      const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https'
      });

      // Initialize AO Connect
      const ao = connect();

      // Get wallet (browser or Node.js)
      if (typeof window !== 'undefined' && window.arweaveWallet) {
        // Browser environment
        this.wallet = window.arweaveWallet;
      } else {
        // Node.js environment
        const fs = require('fs');
        this.wallet = JSON.parse(fs.readFileSync('./wallet.json', 'utf-8'));
      }

      // Initialize permaweb SDK
      this.permaweb = Permaweb.init({
        ao,
        arweave,
        signer: createDataItemSigner(this.wallet),
      });

      console.log("Permaweb SDK initialized successfully");
    } catch (error) {
      console.error("Failed to initialize SDK:", error);
      throw error;
    }
  }

  getSDK() {
    return this.permaweb;
  }

  getWalletAddress() {
    return this.permaweb.arweave.wallets.getAddress(this.permaweb.signer);
  }
}

// Usage
const app = new PermawebApp();
const permaweb = app.getSDK();`}</code></pre>

      <h2 id="profile-management">Profile Management</h2>

      <h3>Complete Profile System</h3>

      <pre><code>{`class ProfileManager {
  constructor(private permaweb: any) {}

  async createUserProfile(userData: {
    username: string;
    displayName: string;
    description: string;
    thumbnail?: File;
    banner?: File;
  }) {
    try {
      // Upload images if provided
      let thumbnailTxId, bannerTxId;
      
      if (userData.thumbnail) {
        thumbnailTxId = await this.uploadImage(userData.thumbnail);
      }
      
      if (userData.banner) {
        bannerTxId = await this.uploadImage(userData.banner);
      }

      // Create profile
      const profileId = await this.permaweb.createProfile({
        username: userData.username,
        displayName: userData.displayName,
        description: userData.description,
        thumbnail: thumbnailTxId,
        banner: bannerTxId,
      });

      console.log("Profile created:", profileId);
      return profileId;
    } catch (error) {
      console.error("Failed to create profile:", error);
      throw error;
    }
  }

  async updateUserProfile(profileId: string, updates: any) {
    try {
      const updateId = await this.permaweb.updateProfile(updates, profileId);
      console.log("Profile updated:", updateId);
      return updateId;
    } catch (error) {
      console.error("Failed to update profile:", error);
      throw error;
    }
  }

  async getUserProfile(profileId: string) {
    try {
      const profile = await this.permaweb.getProfileById(profileId);
      return profile;
    } catch (error) {
      console.error("Failed to get profile:", error);
      return null;
    }
  }

  async getUserProfileByWallet(walletAddress: string) {
    try {
      const profile = await this.permaweb.getProfileByWalletAddress(walletAddress);
      return profile;
    } catch (error) {
      console.error("Failed to get profile by wallet:", error);
      return null;
    }
  }

  private async uploadImage(file: File): Promise<string> {
    const base64Data = await this.fileToBase64(file);
    
    const transaction = await this.permaweb.arweave.createTransaction({
      data: base64Data
    });
    
    transaction.addTag('Content-Type', file.type);
    transaction.addTag('App-Name', 'Permaweb-Profile');
    
    await this.permaweb.arweave.transactions.sign(transaction);
    await this.permaweb.arweave.transactions.post(transaction);
    
    return transaction.id;
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

// Usage
const profileManager = new ProfileManager(permaweb);

// Create a new profile
const profileId = await profileManager.createUserProfile({
  username: "alice_dev",
  displayName: "Alice Johnson",
  description: "Full-stack developer passionate about Web3 and decentralized applications",
  thumbnail: thumbnailFile, // File object
  banner: bannerFile // File object
});

// Update profile
await profileManager.updateUserProfile(profileId, {
  displayName: "Alice Senior Developer",
  description: "Senior full-stack developer with 5+ years experience in blockchain"
});`}</code></pre>

      <h2 id="asset-gallery">Asset Gallery</h2>

      <h3>Digital Art Gallery</h3>

      <pre><code>{`class ArtGallery {
  constructor(private permaweb: any) {}

  async uploadArtwork(artworkData: {
    name: string;
    description: string;
    file: File;
    tags: string[];
    category: string;
  }) {
    try {
      // Convert file to base64
      const base64Data = await this.fileToBase64(artworkData.file);
      
      // Create atomic asset
      const assetId = await this.permaweb.createAtomicAsset({
        name: artworkData.name,
        description: artworkData.description,
        topics: [...artworkData.tags, artworkData.category],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        data: base64Data,
        contentType: artworkData.file.type,
        assetType: "image",
        metadata: {
          category: artworkData.category,
          originalName: artworkData.file.name,
          size: artworkData.file.size,
          dimensions: await this.getImageDimensions(artworkData.file),
          uploadDate: new Date().toISOString()
        }
      });

      console.log("Artwork uploaded:", assetId);
      return assetId;
    } catch (error) {
      console.error("Failed to upload artwork:", error);
      throw error;
    }
  }

  async createGallery(galleryData: {
    name: string;
    description: string;
    category: string;
    tags: string[];
  }) {
    try {
      const collectionId = await this.permaweb.createCollection({
        name: galleryData.name,
        description: galleryData.description,
        topics: [...galleryData.tags, galleryData.category],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        metadata: {
          category: galleryData.category,
          type: "gallery",
          created: new Date().toISOString()
        }
      });

      console.log("Gallery created:", collectionId);
      return collectionId;
    } catch (error) {
      console.error("Failed to create gallery:", error);
      throw error;
    }
  }

  async addArtworkToGallery(assetId: string, collectionId: string) {
    try {
      const updateId = await this.permaweb.updateCollectionAssets({
        assets: [assetId],
        action: "add"
      }, collectionId);

      console.log("Artwork added to gallery:", updateId);
      return updateId;
    } catch (error) {
      console.error("Failed to add artwork to gallery:", error);
      throw error;
    }
  }

  async getGalleryArtworks(collectionId: string) {
    try {
      const collection = await this.permaweb.getCollection(collectionId);
      return collection.assets;
    } catch (error) {
      console.error("Failed to get gallery artworks:", error);
      return [];
    }
  }

  async searchArtworks(filters: {
    creator?: string;
    category?: string;
    tags?: string[];
    limit?: number;
  }) {
    try {
      const assets = await this.permaweb.getAtomicAssets({
        creator: filters.creator,
        assetType: "image",
        topics: filters.tags,
        limit: filters.limit || 20
      });

      return assets.assets;
    } catch (error) {
      console.error("Failed to search artworks:", error);
      return [];
    }
  }

  private async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  private async getImageDimensions(file: File): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(\`\${img.width}x\${img.height}\`);
      };
      img.src = URL.createObjectURL(file);
    });
  }
}

// Usage
const artGallery = new ArtGallery(permaweb);

// Upload artwork
const artworkId = await artGallery.uploadArtwork({
  name: "Digital Sunset",
  description: "A beautiful digital painting of a sunset over mountains",
  file: artworkFile, // File object
  tags: ["sunset", "mountains", "digital-art"],
  category: "landscape"
});

// Create gallery
const galleryId = await artGallery.createGallery({
  name: "Nature Collection",
  description: "A collection of nature-inspired digital artworks",
  category: "nature",
  tags: ["nature", "landscape", "digital-art"]
});

// Add artwork to gallery
await artGallery.addArtworkToGallery(artworkId, galleryId);

// Get gallery artworks
const artworks = await artGallery.getGalleryArtworks(galleryId);`}</code></pre>

      <h2 id="social-platform">Social Platform</h2>

      <h3>Social Media Platform</h3>

      <pre><code>{`class SocialPlatform {
  constructor(private permaweb: any) {}

  async createPost(postData: {
    content: string;
    images?: File[];
    tags: string[];
  }) {
    try {
      const creatorAddress = this.permaweb.arweave.wallets.getAddress(this.permaweb.signer);
      const assets = [];

      // Upload images if provided
      if (postData.images && postData.images.length > 0) {
        for (const image of postData.images) {
          const assetId = await this.uploadImage(image);
          assets.push(assetId);
        }
      }

      // Create text post as asset
      const postAssetId = await this.permaweb.createAtomicAsset({
        name: "Social Post",
        description: postData.content,
        topics: [...postData.tags, "social-post"],
        creator: creatorAddress,
        data: postData.content,
        contentType: "text/plain",
        assetType: "post",
        metadata: {
          type: "social-post",
          hasImages: assets.length > 0,
          imageAssets: assets,
          created: new Date().toISOString()
        }
      });

      console.log("Post created:", postAssetId);
      return postAssetId;
    } catch (error) {
      console.error("Failed to create post:", error);
      throw error;
    }
  }

  async addComment(commentData: {
    content: string;
    targetId: string;
    parentId?: string;
  }) {
    try {
      const commentId = await this.permaweb.createComment({
        content: commentData.content,
        targetId: commentData.targetId,
        targetType: "asset",
        parentId: commentData.parentId,
        metadata: {
          type: "social-comment",
          created: new Date().toISOString()
        }
      });

      console.log("Comment added:", commentId);
      return commentId;
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  }

  async getFeed(limit: number = 20) {
    try {
      const posts = await this.permaweb.getAtomicAssets({
        assetType: "post",
        limit: limit
      });

      return posts.assets;
    } catch (error) {
      console.error("Failed to get feed:", error);
      return [];
    }
  }

  async getUserPosts(walletAddress: string, limit: number = 20) {
    try {
      const posts = await this.permaweb.getAtomicAssets({
        creator: walletAddress,
        assetType: "post",
        limit: limit
      });

      return posts.assets;
    } catch (error) {
      console.error("Failed to get user posts:", error);
      return [];
    }
  }

  async getPostComments(assetId: string) {
    try {
      const comments = await this.permaweb.getComments({
        targetId: assetId,
        targetType: "asset",
        parentId: null // Only top-level comments
      });

      return comments.comments;
    } catch (error) {
      console.error("Failed to get post comments:", error);
      return [];
    }
  }

  private async uploadImage(file: File): Promise<string> {
    const base64Data = await this.fileToBase64(file);
    
    const transaction = await this.permaweb.arweave.createTransaction({
      data: base64Data
    });
    
    transaction.addTag('Content-Type', file.type);
    transaction.addTag('App-Name', 'Social-Platform');
    
    await this.permaweb.arweave.transactions.sign(transaction);
    await this.permaweb.arweave.transactions.post(transaction);
    
    return transaction.id;
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

// Usage
const socialPlatform = new SocialPlatform(permaweb);

// Create a post
const postId = await socialPlatform.createPost({
  content: "Just finished my latest digital artwork! Check it out! 🎨",
  images: [artworkFile], // File object
  tags: ["art", "digital-art", "creative"]
});

// Add a comment
const commentId = await socialPlatform.addComment({
  content: "This looks amazing! What software did you use?",
  targetId: postId
});

// Get feed
const feed = await socialPlatform.getFeed(10);

// Get user posts
const userPosts = await socialPlatform.getUserPosts(walletAddress, 5);

// Get post comments
const comments = await socialPlatform.getPostComments(postId);`}</code></pre>

      <h2 id="nft-marketplace">NFT Marketplace</h2>

      <h3>NFT Creation and Management</h3>

      <pre><code>{`class NFTMarketplace {
  constructor(private permaweb: any) {}

  async createNFT(nftData: {
    name: string;
    description: string;
    file: File;
    attributes: Record<string, any>;
    collection?: string;
  }) {
    try {
      const base64Data = await this.fileToBase64(nftData.file);
      
      const assetId = await this.permaweb.createAtomicAsset({
        name: nftData.name,
        description: nftData.description,
        topics: ["nft", "digital-asset", nftData.collection || "general"],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        data: base64Data,
        contentType: nftData.file.type,
        assetType: "nft",
        metadata: {
          type: "nft",
          attributes: nftData.attributes,
          collection: nftData.collection,
          rarity: this.calculateRarity(nftData.attributes),
          created: new Date().toISOString()
        }
      });

      console.log("NFT created:", assetId);
      return assetId;
    } catch (error) {
      console.error("Failed to create NFT:", error);
      throw error;
    }
  }

  async createCollection(collectionData: {
    name: string;
    description: string;
    category: string;
    maxSupply?: number;
  }) {
    try {
      const collectionId = await this.permaweb.createCollection({
        name: collectionData.name,
        description: collectionData.description,
        topics: ["nft-collection", collectionData.category],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        metadata: {
          type: "nft-collection",
          category: collectionData.category,
          maxSupply: collectionData.maxSupply,
          created: new Date().toISOString()
        }
      });

      console.log("Collection created:", collectionId);
      return collectionId;
    } catch (error) {
      console.error("Failed to create collection:", error);
      throw error;
    }
  }

  async addNFTToCollection(nftId: string, collectionId: string) {
    try {
      const updateId = await this.permaweb.updateCollectionAssets({
        assets: [nftId],
        action: "add"
      }, collectionId);

      console.log("NFT added to collection:", updateId);
      return updateId;
    } catch (error) {
      console.error("Failed to add NFT to collection:", error);
      throw error;
    }
  }

  async getNFTDetails(nftId: string) {
    try {
      const nft = await this.permaweb.getAtomicAsset(nftId);
      return nft;
    } catch (error) {
      console.error("Failed to get NFT details:", error);
      return null;
    }
  }

  async getCollectionNFTs(collectionId: string) {
    try {
      const collection = await this.permaweb.getCollection(collectionId);
      return collection.assets;
    } catch (error) {
      console.error("Failed to get collection NFTs:", error);
      return [];
    }
  }

  async searchNFTs(filters: {
    creator?: string;
    collection?: string;
    attributes?: Record<string, any>;
    limit?: number;
  }) {
    try {
      const assets = await this.permaweb.getAtomicAssets({
        creator: filters.creator,
        assetType: "nft",
        topics: filters.collection ? [filters.collection] : undefined,
        limit: filters.limit || 20
      });

      // Filter by attributes if provided
      if (filters.attributes) {
        assets.assets = assets.assets.filter(asset => {
          return Object.entries(filters.attributes!).every(([key, value]) => {
            return asset.metadata?.attributes?.[key] === value;
          });
        });
      }

      return assets.assets;
    } catch (error) {
      console.error("Failed to search NFTs:", error);
      return [];
    }
  }

  private calculateRarity(attributes: Record<string, any>): string {
    // Simple rarity calculation based on attributes
    const rarityScore = Object.values(attributes).reduce((score: number, value: any) => {
      if (typeof value === 'number') {
        return score + (1 / value); // Lower values = higher rarity
      }
      return score;
    }, 0);

    if (rarityScore > 0.5) return "legendary";
    if (rarityScore > 0.3) return "epic";
    if (rarityScore > 0.1) return "rare";
    return "common";
  }

  private async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

// Usage
const nftMarketplace = new NFTMarketplace(permaweb);

// Create NFT collection
const collectionId = await nftMarketplace.createCollection({
  name: "Digital Warriors",
  description: "A collection of unique digital warrior characters",
  category: "gaming",
  maxSupply: 1000
});

// Create NFT
const nftId = await nftMarketplace.createNFT({
  name: "Warrior #001",
  description: "A legendary digital warrior with rare attributes",
  file: nftFile, // File object
  attributes: {
    strength: 95,
    agility: 88,
    intelligence: 92,
    rarity: "legendary",
    element: "fire"
  },
  collection: "Digital Warriors"
});

// Add NFT to collection
await nftMarketplace.addNFTToCollection(nftId, collectionId);

// Get NFT details
const nftDetails = await nftMarketplace.getNFTDetails(nftId);

// Search NFTs by attributes
const legendaryNFTs = await nftMarketplace.searchNFTs({
  attributes: { rarity: "legendary" },
  limit: 10
});`}</code></pre>

      <h2 id="blog-platform">Blog Platform</h2>

      <h3>Decentralized Blog</h3>

      <pre><code>{`class BlogPlatform {
  constructor(private permaweb: any) {}

  async createBlogPost(postData: {
    title: string;
    content: string;
    tags: string[];
    coverImage?: File;
    category: string;
  }) {
    try {
      const creatorAddress = this.permaweb.arweave.wallets.getAddress(this.permaweb.signer);
      let coverImageTxId;

      // Upload cover image if provided
      if (postData.coverImage) {
        coverImageTxId = await this.uploadImage(postData.coverImage);
      }

      // Create blog post as asset
      const postAssetId = await this.permaweb.createAtomicAsset({
        name: postData.title,
        description: postData.content,
        topics: [...postData.tags, "blog", postData.category],
        creator: creatorAddress,
        data: postData.content,
        contentType: "text/markdown",
        assetType: "blog-post",
        metadata: {
          type: "blog-post",
          title: postData.title,
          category: postData.category,
          coverImage: coverImageTxId,
          wordCount: postData.content.split(' ').length,
          readTime: Math.ceil(postData.content.split(' ').length / 200), // 200 words per minute
          created: new Date().toISOString()
        }
      });

      console.log("Blog post created:", postAssetId);
      return postAssetId;
    } catch (error) {
      console.error("Failed to create blog post:", error);
      throw error;
    }
  }

  async createBlogSeries(seriesData: {
    name: string;
    description: string;
    category: string;
    tags: string[];
  }) {
    try {
      const collectionId = await this.permaweb.createCollection({
        name: seriesData.name,
        description: seriesData.description,
        topics: [...seriesData.tags, "blog-series", seriesData.category],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        metadata: {
          type: "blog-series",
          category: seriesData.category,
          created: new Date().toISOString()
        }
      });

      console.log("Blog series created:", collectionId);
      return collectionId;
    } catch (error) {
      console.error("Failed to create blog series:", error);
      throw error;
    }
  }

  async addPostToSeries(postId: string, seriesId: string) {
    try {
      const updateId = await this.permaweb.updateCollectionAssets({
        assets: [postId],
        action: "add"
      }, seriesId);

      console.log("Post added to series:", updateId);
      return updateId;
    } catch (error) {
      console.error("Failed to add post to series:", error);
      throw error;
    }
  }

  async getBlogPosts(filters: {
    author?: string;
    category?: string;
    tags?: string[];
    limit?: number;
  }) {
    try {
      const posts = await this.permaweb.getAtomicAssets({
        creator: filters.author,
        assetType: "blog-post",
        topics: filters.tags,
        limit: filters.limit || 20
      });

      // Filter by category if provided
      if (filters.category) {
        posts.assets = posts.assets.filter(post => 
          post.metadata?.category === filters.category
        );
      }

      return posts.assets;
    } catch (error) {
      console.error("Failed to get blog posts:", error);
      return [];
    }
  }

  async getBlogSeries(seriesId: string) {
    try {
      const series = await this.permaweb.getCollection(seriesId);
      return series;
    } catch (error) {
      console.error("Failed to get blog series:", error);
      return null;
    }
  }

  async addComment(postId: string, commentData: {
    content: string;
    authorName: string;
  }) {
    try {
      const commentId = await this.permaweb.createComment({
        content: commentData.content,
        targetId: postId,
        targetType: "asset",
        metadata: {
          type: "blog-comment",
          authorName: commentData.authorName,
          created: new Date().toISOString()
        }
      });

      console.log("Comment added:", commentId);
      return commentId;
    } catch (error) {
      console.error("Failed to add comment:", error);
      throw error;
    }
  }

  private async uploadImage(file: File): Promise<string> {
    const base64Data = await this.fileToBase64(file);
    
    const transaction = await this.permaweb.arweave.createTransaction({
      data: base64Data
    });
    
    transaction.addTag('Content-Type', file.type);
    transaction.addTag('App-Name', 'Blog-Platform');
    
    await this.permaweb.arweave.transactions.sign(transaction);
    await this.permaweb.arweave.transactions.post(transaction);
    
    return transaction.id;
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

// Usage
const blogPlatform = new BlogPlatform(permaweb);

// Create blog series
const seriesId = await blogPlatform.createBlogSeries({
  name: "Building on Arweave",
  description: "A comprehensive guide to building decentralized applications on Arweave",
  category: "tutorial",
  tags: ["arweave", "tutorial", "development"]
});

// Create blog post
const postId = await blogPlatform.createBlogPost({
  title: "Getting Started with @permaweb/libs",
  content: "# Getting Started with @permaweb/libs\\n\\nThis is the first post in our series...",
  tags: ["permaweb", "tutorial", "getting-started"],
  category: "tutorial",
  coverImage: coverImageFile // File object
});

// Add post to series
await blogPlatform.addPostToSeries(postId, seriesId);

// Get blog posts by category
const tutorialPosts = await blogPlatform.getBlogPosts({
  category: "tutorial",
  limit: 10
});

// Add comment to post
await blogPlatform.addComment(postId, {
  content: "Great tutorial! Looking forward to the next post.",
  authorName: "John Doe"
});`}</code></pre>

      <h2 id="portfolio-site">Portfolio Site</h2>

      <h3>Developer Portfolio</h3>

      <pre><code>{`class PortfolioSite {
  constructor(private permaweb: any) {}

  async createPortfolio(portfolioData: {
    name: string;
    title: string;
    bio: string;
    skills: string[];
    avatar?: File;
    banner?: File;
  }) {
    try {
      const creatorAddress = this.permaweb.arweave.wallets.getAddress(this.permaweb.signer);
      let avatarTxId, bannerTxId;

      // Upload images if provided
      if (portfolioData.avatar) {
        avatarTxId = await this.uploadImage(portfolioData.avatar);
      }
      
      if (portfolioData.banner) {
        bannerTxId = await this.uploadImage(portfolioData.banner);
      }

      // Create profile
      const profileId = await this.permaweb.createProfile({
        username: portfolioData.name.toLowerCase().replace(/\\s+/g, '-'),
        displayName: portfolioData.name,
        description: portfolioData.bio,
        thumbnail: avatarTxId,
        banner: bannerTxId,
      });

      // Create skills collection
      const skillsCollectionId = await this.permaweb.createCollection({
        name: \`\${portfolioData.name}'s Skills\`,
        description: \`Technical skills and expertise of \${portfolioData.name}\`,
        topics: ["skills", "portfolio", ...portfolioData.skills],
        creator: creatorAddress,
        metadata: {
          type: "skills-portfolio",
          skills: portfolioData.skills,
          created: new Date().toISOString()
        }
      });

      console.log("Portfolio created:", { profileId, skillsCollectionId });
      return { profileId, skillsCollectionId };
    } catch (error) {
      console.error("Failed to create portfolio:", error);
      throw error;
    }
  }

  async addProject(projectData: {
    name: string;
    description: string;
    technologies: string[];
    images: File[];
    liveUrl?: string;
    githubUrl?: string;
  }) {
    try {
      const creatorAddress = this.permaweb.arweave.wallets.getAddress(this.permaweb.signer);
      const imageAssets = [];

      // Upload project images
      for (const image of projectData.images) {
        const assetId = await this.uploadImage(image);
        imageAssets.push(assetId);
      }

      // Create project asset
      const projectAssetId = await this.permaweb.createAtomicAsset({
        name: projectData.name,
        description: projectData.description,
        topics: ["project", "portfolio", ...projectData.technologies],
        creator: creatorAddress,
        data: projectData.description,
        contentType: "text/markdown",
        assetType: "project",
        metadata: {
          type: "portfolio-project",
          technologies: projectData.technologies,
          images: imageAssets,
          liveUrl: projectData.liveUrl,
          githubUrl: projectData.githubUrl,
          created: new Date().toISOString()
        }
      });

      console.log("Project added:", projectAssetId);
      return projectAssetId;
    } catch (error) {
      console.error("Failed to add project:", error);
      throw error;
    }
  }

  async createProjectsCollection(collectionData: {
    name: string;
    description: string;
  }) {
    try {
      const collectionId = await this.permaweb.createCollection({
        name: collectionData.name,
        description: collectionData.description,
        topics: ["projects", "portfolio"],
        creator: this.permaweb.arweave.wallets.getAddress(this.permaweb.signer),
        metadata: {
          type: "projects-portfolio",
          created: new Date().toISOString()
        }
      });

      console.log("Projects collection created:", collectionId);
      return collectionId;
    } catch (error) {
      console.error("Failed to create projects collection:", error);
      throw error;
    }
  }

  async addProjectToCollection(projectId: string, collectionId: string) {
    try {
      const updateId = await this.permaweb.updateCollectionAssets({
        assets: [projectId],
        action: "add"
      }, collectionId);

      console.log("Project added to collection:", updateId);
      return updateId;
    } catch (error) {
      console.error("Failed to add project to collection:", error);
      throw error;
    }
  }

  async getPortfolio(walletAddress: string) {
    try {
      const profile = await this.permaweb.getProfileByWalletAddress(walletAddress);
      const projects = await this.permaweb.getAtomicAssets({
        creator: walletAddress,
        assetType: "project"
      });

      return {
        profile,
        projects: projects.assets
      };
    } catch (error) {
      console.error("Failed to get portfolio:", error);
      return null;
    }
  }

  private async uploadImage(file: File): Promise<string> {
    const base64Data = await this.fileToBase64(file);
    
    const transaction = await this.permaweb.arweave.createTransaction({
      data: base64Data
    });
    
    transaction.addTag('Content-Type', file.type);
    transaction.addTag('App-Name', 'Portfolio-Site');
    
    await this.permaweb.arweave.transactions.sign(transaction);
    await this.permaweb.arweave.transactions.post(transaction);
    
    return transaction.id;
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

// Usage
const portfolioSite = new PortfolioSite(permaweb);

// Create portfolio
const { profileId, skillsCollectionId } = await portfolioSite.createPortfolio({
  name: "Alice Johnson",
  title: "Full-Stack Developer",
  bio: "Passionate about building decentralized applications and contributing to the Web3 ecosystem.",
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Arweave", "Blockchain"],
  avatar: avatarFile, // File object
  banner: bannerFile // File object
});

// Create projects collection
const projectsCollectionId = await portfolioSite.createProjectsCollection({
  name: "Alice's Projects",
  description: "A showcase of my best work and projects"
});

// Add project
const projectId = await portfolioSite.addProject({
  name: "Decentralized Blog Platform",
  description: "A fully decentralized blog platform built on Arweave with @permaweb/libs",
  technologies: ["React", "TypeScript", "Arweave", "@permaweb/libs"],
  images: [projectImage1, projectImage2], // File objects
  liveUrl: "https://myblog.arweave.net",
  githubUrl: "https://github.com/alice/decentralized-blog"
});

// Add project to collection
await portfolioSite.addProjectToCollection(projectId, projectsCollectionId);

// Get portfolio
const portfolio = await portfolioSite.getPortfolio(walletAddress);`}</code></pre>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="#/getting-started">Getting Started</a> - Set up your development environment</li>
        <li><a href="#/api-reference">API Reference</a> - Complete API documentation</li>
        <li><a href="#/best-practices">Best Practices</a> - Development guidelines</li>
        <li><a href="#/troubleshooting">Troubleshooting</a> - Common issues and solutions</li>
      </ul>

      <p>These examples demonstrate the versatility of @permaweb/libs. Each example can be extended and customized to fit your specific use case. For more detailed information about specific methods, check out the <a href="#/api-reference">API Reference</a>!</p>
    </div>
  );
};

export default Examples; 