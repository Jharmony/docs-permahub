import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ className = '' }: { className?: string }) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(new Set([
    'Introduction', 
    'Core Concepts', 
    'API Reference', 
    'Guides & Examples',
    'AI Tools & LLM Integration',
    'Workshops & Learning',
    'Arweave Ecosystem',
    'Hackathon & Builder Resources',
    'Libraries & Tools'
  ]));

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (sectionName: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionName)) {
      newExpanded.delete(sectionName);
    } else {
      newExpanded.add(sectionName);
    }
    setExpandedSections(newExpanded);
  };

  const handleAnchorClick = (e: any, anchorId: string) => {
    e.preventDefault();
    
    // Determine which page the anchor belongs to
    let targetPage = '';
    if (anchorId.includes('api')) {
      targetPage = '/api-reference';
    } else if (anchorId.includes('llama-herder') || anchorId.includes('llm') || anchorId.includes('ai')) {
      targetPage = '/ai-tools';
    } else if (anchorId.includes('oracle') || anchorId.includes('astro') || anchorId.includes('ario')) {
      targetPage = '/weavers-resource-library';
    }
    
    // If we're not on the target page, navigate there first
    if (targetPage && location.pathname !== targetPage) {
      // Navigate to the page first
      window.location.hash = targetPage;
      
      // Wait for the page to load, then scroll to the anchor
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the page, just scroll to the anchor
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (path: string) => {
    // If we're already on the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h3>Navigation</h3>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Introduction')}
            >
              <h3>Introduction</h3>
              <span className="section-toggle">
                {expandedSections.has('Introduction') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Introduction') && (
              <ul>
                <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => handleLinkClick('/')}>What is Hub Docs?</Link></li>
                <li><Link to="/getting-started" className={isActive('/getting-started') ? 'active' : ''} onClick={() => handleLinkClick('/getting-started')}>Getting Started</Link></li>
                <li><Link to="/installation" className={isActive('/installation') ? 'active' : ''} onClick={() => handleLinkClick('/installation')}>Installation</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Core Concepts')}
            >
              <h3>Core Concepts</h3>
              <span className="section-toggle">
                {expandedSections.has('Core Concepts') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Core Concepts') && (
              <ul>
                <li><Link to="/zones" className={isActive('/zones') ? 'active' : ''} onClick={() => handleLinkClick('/zones')}>Zones</Link></li>
                <li><Link to="/profiles" className={isActive('/profiles') ? 'active' : ''} onClick={() => handleLinkClick('/profiles')}>Profiles</Link></li>
                <li><Link to="/atomic-assets" className={isActive('/atomic-assets') ? 'active' : ''} onClick={() => handleLinkClick('/atomic-assets')}>Atomic Assets</Link></li>
                <li><Link to="/collections" className={isActive('/collections') ? 'active' : ''} onClick={() => handleLinkClick('/collections')}>Collections</Link></li>
                <li><Link to="/comments" className={isActive('/comments') ? 'active' : ''} onClick={() => handleLinkClick('/comments')}>Comments</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('API Reference')}
            >
              <h3>API Reference</h3>
              <span className="section-toggle">
                {expandedSections.has('API Reference') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('API Reference') && (
              <ul>
                <li><Link to="/api-reference" className={isActive('/api-reference') ? 'active' : ''} onClick={() => handleLinkClick('/api-reference')}>API Overview</Link></li>
                <li><a href="#zones-api" onClick={(e) => handleAnchorClick(e, 'zones-api')} className={isActive('/api-reference') ? 'active' : ''}>Zones API</a></li>
                <li><a href="#profiles-api" onClick={(e) => handleAnchorClick(e, 'profiles-api')} className={isActive('/api-reference') ? 'active' : ''}>Profiles API</a></li>
                <li><a href="#atomic-assets-api" onClick={(e) => handleAnchorClick(e, 'atomic-assets-api')} className={isActive('/api-reference') ? 'active' : ''}>Atomic Assets API</a></li>
                <li><a href="#collections-api" onClick={(e) => handleAnchorClick(e, 'collections-api')} className={isActive('/api-reference') ? 'active' : ''}>Collections API</a></li>
                <li><a href="#comments-api" onClick={(e) => handleAnchorClick(e, 'comments-api')} className={isActive('/api-reference') ? 'active' : ''}>Comments API</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Guides & Examples')}
            >
              <h3>Guides & Examples</h3>
              <span className="section-toggle">
                {expandedSections.has('Guides & Examples') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Guides & Examples') && (
              <ul>
                <li><Link to="/examples" className={isActive('/examples') ? 'active' : ''} onClick={() => handleLinkClick('/examples')}>Examples</Link></li>
                <li><Link to="/build-docs-site" className={isActive('/build-docs-site') ? 'active' : ''} onClick={() => handleLinkClick('/build-docs-site')}>Build Docs Site</Link></li>
                <li><Link to="/best-practices" className={isActive('/best-practices') ? 'active' : ''} onClick={() => handleLinkClick('/best-practices')}>Best Practices</Link></li>
                <li><Link to="/troubleshooting" className={isActive('/troubleshooting') ? 'active' : ''} onClick={() => handleLinkClick('/troubleshooting')}>Troubleshooting</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('AI Tools & LLM Integration')}
            >
              <h3>AI Tools & LLM Integration</h3>
              <span className="section-toggle">
                {expandedSections.has('AI Tools & LLM Integration') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('AI Tools & LLM Integration') && (
              <ul>
                <li><Link to="/ai-tools" className={isActive('/ai-tools') ? 'active' : ''} onClick={() => handleLinkClick('/ai-tools')}>AI Tools & LLMs</Link></li>
                <li><Link to="/building-ai-agents" className={isActive('/building-ai-agents') ? 'active' : ''} onClick={() => handleLinkClick('/building-ai-agents')}>Building AI Agents</Link></li>
                <li><a href="#llama-herder-decentralized-llm-inference" onClick={(e) => handleAnchorClick(e, 'llama-herder-decentralized-llm-inference')} className={isActive('/ai-tools') ? 'active' : ''}>Llama-Herder: Decentralized LLM Inference</a></li>
                <li><a href="#ao-llms-documentation" onClick={(e) => handleAnchorClick(e, 'ao-llms-documentation')} className={isActive('/ai-tools') ? 'active' : ''}>AO LLMs Documentation</a></li>
                <li><a href="#llm-integration-examples" onClick={(e) => handleAnchorClick(e, 'llm-integration-examples')} className={isActive('/ai-tools') ? 'active' : ''}>LLM Integration Examples</a></li>
                <li><a href="#advanced-ai-concepts" onClick={(e) => handleAnchorClick(e, 'advanced-ai-concepts')} className={isActive('/ai-tools') ? 'active' : ''}>Advanced AI Concepts</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Workshops & Learning')}
            >
              <h3>Workshops & Learning</h3>
              <span className="section-toggle">
                {expandedSections.has('Workshops & Learning') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Workshops & Learning') && (
              <ul>
                <li><Link to="/aos-sqlite-workshop" className={isActive('/aos-sqlite-workshop') ? 'active' : ''} onClick={() => handleLinkClick('/aos-sqlite-workshop')}>AOS-Sqlite Workshop</Link></li>
                <li><Link to="/weavedrive" className={isActive('/weavedrive') ? 'active' : ''} onClick={() => handleLinkClick('/weavedrive')}>WeaveDrive: Virtual File System</Link></li>
                <li><a href="https://hackmd.io/@ao-docs/rkM1C9m40" target="_blank" rel="noopener noreferrer">AOS-Sqlite Workshop by Tom Wilson</a></li>
                <li><a href="https://hackmd.io/@ao-docs/H1JK_WezR" target="_blank" rel="noopener noreferrer">AOP-5: WeaveDrive Specification</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Arweave Ecosystem')}
            >
              <h3>Arweave Ecosystem</h3>
              <span className="section-toggle">
                {expandedSections.has('Arweave Ecosystem') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Arweave Ecosystem') && (
              <ul>
                <li><Link to="/starter-kits" className={isActive('/starter-kits') ? 'active' : ''} onClick={() => handleLinkClick('/starter-kits')}>Starter Kits</Link></li>
                <li><Link to="/bazar" className={isActive('/bazar') ? 'active' : ''} onClick={() => handleLinkClick('/bazar')}>Bazar & Bazar Studio</Link></li>
                <li><Link to="/beacon-mini-bazar" className={isActive('/beacon-mini-bazar') ? 'active' : ''} onClick={() => handleLinkClick('/beacon-mini-bazar')}>Beacon Wallet Mini Bazar</Link></li>
                <li><Link to="/load-network" className={isActive('/load-network') ? 'active' : ''} onClick={() => handleLinkClick('/load-network')}>Load Network & Atomic Assets</Link></li>
                <li><a href="#oracle-networks" onClick={(e) => handleAnchorClick(e, 'oracle-networks')} className={isActive('/weavers-resource-library') ? 'active' : ''}>0rbit Oracle Network</a></li>
                <li><a href="#astro-stablecoins" onClick={(e) => handleAnchorClick(e, 'astro-stablecoins')} className={isActive('/weavers-resource-library') ? 'active' : ''}>ASTRO & Stablecoins</a></li>
                <li><a href="#ario-gateway-services" onClick={(e) => handleAnchorClick(e, 'ario-gateway-services')} className={isActive('/weavers-resource-library') ? 'active' : ''}>ArIO & Gateway Services</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Hackathon & Builder Resources')}
            >
              <h3>Hackathon & Builder Resources</h3>
              <span className="section-toggle">
                {expandedSections.has('Hackathon & Builder Resources') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Hackathon & Builder Resources') && (
              <ul>
                <li><Link to="/hackathon" className={isActive('/hackathon') ? 'active' : ''} onClick={() => handleLinkClick('/hackathon')}>AO Hackathon 2025</Link></li>
                <li><Link to="/weavers-resource-library" className={isActive('/weavers-resource-library') ? 'active' : ''} onClick={() => handleLinkClick('/weavers-resource-library')}>Weavers Resource Library</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Libraries & Tools')}
            >
              <h3>Libraries & Tools</h3>
              <span className="section-toggle">
                {expandedSections.has('Libraries & Tools') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Libraries & Tools') && (
              <ul>
                <li><Link to="/arx" className={isActive('/arx') ? 'active' : ''} onClick={() => handleLinkClick('/arx')}>ARX - Permanent Data Upload</Link></li>
                <li><em>More libraries coming soon...</em></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar; 