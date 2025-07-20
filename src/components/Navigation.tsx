import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const GITHUB_LINK = "https://github.com/permaweb/";
const DISCORD_LINK = "https://discord.gg/vS2fYJNucN";
const PERMAHUB_LINK = "https://permahub.ar.io";

// Search data - all navigation items flattened for search
const searchData = [
  // Introduction & Getting Started
  { title: "What is Hub Docs?", path: "/", category: "Introduction" },
  { title: "Getting Started", path: "/getting-started", category: "Introduction" },
  { title: "Installation", path: "/installation", category: "Introduction" },
  
  // Core Concepts
  { title: "Zones", path: "/zones", category: "Core Concepts" },
  { title: "Profiles", path: "/profiles", category: "Core Concepts" },
  { title: "Atomic Assets", path: "/atomic-assets", category: "Core Concepts" },
  { title: "Collections", path: "/collections", category: "Core Concepts" },
  { title: "Comments", path: "/comments", category: "Core Concepts" },
  { title: "Permaweb Libs", path: "/permaweb-libs", category: "Core Concepts" },
  { title: "Process Zone Lua", path: "/zones", category: "Core Concepts" },
  { title: "Process Asset Lua", path: "/atomic-assets", category: "Core Concepts" },
  
  // API & Reference
  { title: "API Reference", path: "/api-reference", category: "API & Reference" },
  { title: "API Overview", path: "/api-reference", category: "API & Reference" },
  
  // Guides & Examples
  { title: "Examples", path: "/examples", category: "Guides & Examples" },
  { title: "Build Docs Site", path: "/build-docs-site", category: "Guides & Examples" },
  { title: "Best Practices", path: "/best-practices", category: "Guides & Examples" },
  { title: "Troubleshooting", path: "/troubleshooting", category: "Guides & Examples" },
  
  // Arweave Ecosystem
  { title: "Load Network", path: "/load-network", category: "Arweave Ecosystem" },
  { title: "Load Network & Atomic Assets", path: "/load-network", category: "Arweave Ecosystem" },
  { title: "Starter Kits", path: "/starter-kits", category: "Arweave Ecosystem" },
  { title: "Bazar", path: "/bazar", category: "Arweave Ecosystem" },
  { title: "Bazar & Bazar Studio", path: "/bazar", category: "Arweave Ecosystem" },
  { title: "Beacon Mini Bazar", path: "/beacon-mini-bazar", category: "Arweave Ecosystem" },
  { title: "Beacon Wallet Mini Bazar", path: "/beacon-mini-bazar", category: "Arweave Ecosystem" },
  
  // AI Tools & LLM Integration
  { title: "AI Tools", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "AI Tools & LLMs", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "Building AI Agents", path: "/building-ai-agents", category: "AI Tools & LLM Integration" },
  { title: "AI Agent Development", path: "/building-ai-agents", category: "AI Tools & LLM Integration" },
  { title: "AI Agents", path: "/building-ai-agents", category: "AI Tools & LLM Integration" },
  
  // Workshops & Learning
  { title: "AOS-Sqlite Workshop", path: "/aos-sqlite-workshop", category: "Workshops & Learning" },
  { title: "WeaveDrive", path: "/weavedrive", category: "Workshops & Learning" },
  { title: "WeaveDrive: Virtual File System", path: "/weavedrive", category: "Workshops & Learning" },
  
  // Libraries & Tools
  { title: "Hyperbeam", path: "/hyperbeam", category: "Libraries & Tools" },
  { title: "AO Connect", path: "/ao-connect", category: "Libraries & Tools" },
  { title: "arweave.js", path: "/arweave-js", category: "Libraries & Tools" },
  { title: "daboy", path: "/daboy", category: "Libraries & Tools" },
  { title: "ARX", path: "/arx", category: "Libraries & Tools" },
  { title: "ARX Upload", path: "/arx", category: "Libraries & Tools" },
  { title: "Permanent Data Upload", path: "/arx", category: "Libraries & Tools" },
  { title: "Turbo Bundle Service", path: "/arx", category: "Libraries & Tools" },
  
  // Resource Library
  { title: "Weavers Resource Library", path: "/weavers-resource-library", category: "Resource Library" },
  { title: "Weavers Resources", path: "/weavers-resource-library", category: "Resource Library" },
  
  // Hackathon
  { title: "Hackathon", path: "/hackathon", category: "Hackathon" },
  { title: "AO Hackathon 2025", path: "/hackathon", category: "Hackathon" },
  { title: "Hackathon 2025", path: "/hackathon", category: "Hackathon" },
  
  // Ecosystem (placeholder pages)
  { title: "Ecosystem", path: "/ecosystem", category: "Ecosystem" },
  { title: "permaweb-libs", path: "/permaweb-libs", category: "Libraries & Tools" },
  
  // Common search terms and aliases
  { title: "Setup", path: "/installation", category: "Introduction" },
  { title: "Quick Start", path: "/getting-started", category: "Introduction" },
  { title: "Quickstart", path: "/getting-started", category: "Introduction" },
  { title: "Getting Started Guide", path: "/getting-started", category: "Introduction" },
  { title: "Installation Guide", path: "/installation", category: "Introduction" },
  { title: "API Docs", path: "/api-reference", category: "API & Reference" },
  { title: "API Documentation", path: "/api-reference", category: "API & Reference" },
  { title: "Code Examples", path: "/examples", category: "Guides & Examples" },
  { title: "Sample Code", path: "/examples", category: "Guides & Examples" },
  { title: "Tutorials", path: "/examples", category: "Guides & Examples" },
  { title: "Development Guide", path: "/best-practices", category: "Guides & Examples" },
  { title: "Error Handling", path: "/troubleshooting", category: "Guides & Examples" },
  { title: "Debugging", path: "/troubleshooting", category: "Guides & Examples" },
  { title: "Common Issues", path: "/troubleshooting", category: "Guides & Examples" },
  { title: "User Management", path: "/profiles", category: "Core Concepts" },
  { title: "User Profiles", path: "/profiles", category: "Core Concepts" },
  { title: "Digital Assets", path: "/atomic-assets", category: "Core Concepts" },
  { title: "Asset Management", path: "/atomic-assets", category: "Core Concepts" },
  { title: "Asset Collections", path: "/collections", category: "Core Concepts" },
  { title: "Social Features", path: "/comments", category: "Core Concepts" },
  { title: "Comments System", path: "/comments", category: "Core Concepts" },
  { title: "Entity Management", path: "/zones", category: "Core Concepts" },
  { title: "Zones System", path: "/zones", category: "Core Concepts" },
  { title: "Marketplace", path: "/bazar", category: "Arweave Ecosystem" },
  { title: "Bazar Marketplace", path: "/bazar", category: "Arweave Ecosystem" },
  { title: "Mobile App", path: "/beacon-mini-bazar", category: "Arweave Ecosystem" },
  { title: "Mobile Marketplace", path: "/beacon-mini-bazar", category: "Arweave Ecosystem" },
  { title: "Templates", path: "/starter-kits", category: "Arweave Ecosystem" },
  { title: "Project Templates", path: "/starter-kits", category: "Arweave Ecosystem" },
  { title: "AI Development", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "LLM Integration", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "Machine Learning", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "Artificial Intelligence", path: "/ai-tools", category: "AI Tools & LLM Integration" },
  { title: "Database Workshop", path: "/aos-sqlite-workshop", category: "Workshops & Learning" },
  { title: "SQLite Workshop", path: "/aos-sqlite-workshop", category: "Workshops & Learning" },
  { title: "File System", path: "/weavedrive", category: "Workshops & Learning" },
  { title: "Virtual File System", path: "/weavedrive", category: "Workshops & Learning" },
  { title: "Developer Resources", path: "/weavers-resource-library", category: "Resource Library" },
  { title: "Developer Toolkit", path: "/weavers-resource-library", category: "Resource Library" },
  { title: "Build Documentation", path: "/build-docs-site", category: "Guides & Examples" },
  { title: "Documentation Site", path: "/build-docs-site", category: "Guides & Examples" },
  { title: "Docs Builder", path: "/build-docs-site", category: "Guides & Examples" },
];

function Navigation({ onMenuToggle, onRightMenuToggle }: { onMenuToggle?: () => void; onRightMenuToggle?: () => void }) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => document.body.classList.contains('dark-mode'));
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ title: string; path: string; category: string }>>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode');
  };

  // Filter search results based on query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 10)); // Limit to 10 results
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSearchResults(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <span className="nav-brand-text">Hub Docs</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/getting-started" className={location.pathname === "/getting-started" ? "active" : ""}>Getting Started</Link>
          <Link to="/api-reference" className={location.pathname === "/api-reference" ? "active" : ""}>API Reference</Link>
          <Link to="/examples" className={location.pathname === "/examples" ? "active" : ""}>Examples</Link>
          <a href={PERMAHUB_LINK} target="_blank" rel="noreferrer">Back to PermaHub</a>
        </div>
        <div className="nav-center" ref={searchRef}>
          <div className="nav-search-icon">🔍</div>
          <input
            type="text"
            className="nav-search"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => searchQuery && setShowSearchResults(true)}
          />
          <div className="nav-search-shortcut">⌘K</div>
          
          {/* Search Results Dropdown */}
          {showSearchResults && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  className="search-result-item"
                  onClick={() => {
                    setShowSearchResults(false);
                    setSearchQuery("");
                  }}
                >
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-category">{result.category}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="nav-icons">
          <button className="nav-icon-btn nav-dark-toggle-btn" onClick={toggleDark} title="Toggle dark mode" aria-label="Toggle dark mode">
            {isDark ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="#3c8772" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="#3c8772" strokeWidth="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#3c8772" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="nav-icon-btn" title="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="#333"/></svg>
          </a>
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" title="Join us on Discord" className="nav-icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
            </svg>
          </a>
          {/* Mobile right sidebar toggle */}
          <button 
            className="nav-mobile-toggle nav-right-toggle" 
            onClick={onRightMenuToggle}
            aria-label="Toggle resources"
            title="Resources"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Mobile menu toggle - moved to far right */}
          <button 
            className="nav-mobile-toggle" 
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 