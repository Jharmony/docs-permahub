import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ className = '' }: { className?: string }) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(new Set([
    'Quick Start', 
    'AI Agents & AO', 
    'Core SDKs', 
    'Development Tools',
    'Asset Management',
    'Marketplace & Tools',
    'Advanced Topics',
    'Resources & Support'
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
    } else if (anchorId.includes('ai-agent-examples')) {
      targetPage = '/hackathon';
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
              onClick={() => toggleSection('Quick Start')}
            >
              <h3>Quick Start</h3>
              <span className="section-toggle">
                {expandedSections.has('Quick Start') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Quick Start') && (
              <ul>
                <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => handleLinkClick('/')}>Welcome to Arweave</Link></li>
                <li><Link to="/getting-started" className={isActive('/getting-started') ? 'active' : ''} onClick={() => handleLinkClick('/getting-started')}>Getting Started</Link></li>
                <li><Link to="/installation" className={isActive('/installation') ? 'active' : ''} onClick={() => handleLinkClick('/installation')}>Installation</Link></li>
                <li><Link to="/hackathon" className={isActive('/hackathon') ? 'active' : ''} onClick={() => handleLinkClick('/hackathon')}>AO Hackathon 2025</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('AI Agents & AO')}
            >
              <h3>AI Agents & AO</h3>
              <span className="section-toggle">
                {expandedSections.has('AI Agents & AO') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('AI Agents & AO') && (
              <ul>
                <li><Link to="/building-ai-agents" className={isActive('/building-ai-agents') ? 'active' : ''} onClick={() => handleLinkClick('/building-ai-agents')}>Building AI Agents</Link></li>
                <li><Link to="/ai-tools" className={isActive('/ai-tools') ? 'active' : ''} onClick={() => handleLinkClick('/ai-tools')}>AI Tools & LLMs</Link></li>
                <li><a href="#ai-agent-examples" onClick={(e) => handleAnchorClick(e, 'ai-agent-examples')} className={isActive('/hackathon') ? 'active' : ''}>AI Agent Examples</a></li>
                <li><Link to="/aos-sqlite-workshop" className={isActive('/aos-sqlite-workshop') ? 'active' : ''} onClick={() => handleLinkClick('/aos-sqlite-workshop')}>AO SQLite Workshop</Link></li>
                <li><Link to="/weavedrive" className={isActive('/weavedrive') ? 'active' : ''} onClick={() => handleLinkClick('/weavedrive')}>WeaveDrive</Link></li>
                <li><a href="#llama-herder-decentralized-llm-inference" onClick={(e) => handleAnchorClick(e, 'llama-herder-decentralized-llm-inference')} className={isActive('/ai-tools') ? 'active' : ''}>Llama-Herder: Decentralized LLM</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Core SDKs')}
            >
              <h3>Core SDKs</h3>
              <span className="section-toggle">
                {expandedSections.has('Core SDKs') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Core SDKs') && (
              <ul>
                <li><Link to="/arweave-js" className={isActive('/arweave-js') ? 'active' : ''} onClick={() => handleLinkClick('/arweave-js')}>Arweave.js</Link></li>
                <li><Link to="/ar-io-sdk" className={isActive('/ar-io-sdk') ? 'active' : ''} onClick={() => handleLinkClick('/ar-io-sdk')}>ArIO SDK</Link></li>
                <li><Link to="/arx" className={isActive('/arx') ? 'active' : ''} onClick={() => handleLinkClick('/arx')}>ARX - Upload SDK</Link></li>
                <li><Link to="/wauth-sdk" className={isActive('/wauth-sdk') ? 'active' : ''} onClick={() => handleLinkClick('/wauth-sdk')}>WAuth SDK</Link></li>
                <li><Link to="/wallet-tools" className={isActive('/wallet-tools') ? 'active' : ''} onClick={() => handleLinkClick('/wallet-tools')}>Wallet Tools</Link></li>
                <li><Link to="/permaweb-libs" className={isActive('/permaweb-libs') ? 'active' : ''} onClick={() => handleLinkClick('/permaweb-libs')}>Permaweb Libs</Link></li>
                <li><Link to="/ao-connect" className={isActive('/ao-connect') ? 'active' : ''} onClick={() => handleLinkClick('/ao-connect')}>AO Connect</Link></li>
                <li><Link to="/hyperbeam" className={isActive('/hyperbeam') ? 'active' : ''} onClick={() => handleLinkClick('/hyperbeam')}>Hyperbeam</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Development Tools')}
            >
              <h3>Development Tools</h3>
              <span className="section-toggle">
                {expandedSections.has('Development Tools') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Development Tools') && (
              <ul>
                <li><Link to="/examples" className={isActive('/examples') ? 'active' : ''} onClick={() => handleLinkClick('/examples')}>Examples</Link></li>
                <li><Link to="/best-practices" className={isActive('/best-practices') ? 'active' : ''} onClick={() => handleLinkClick('/best-practices')}>Best Practices</Link></li>
                <li><Link to="/troubleshooting" className={isActive('/troubleshooting') ? 'active' : ''} onClick={() => handleLinkClick('/troubleshooting')}>Troubleshooting</Link></li>
                <li><Link to="/api-reference" className={isActive('/api-reference') ? 'active' : ''} onClick={() => handleLinkClick('/api-reference')}>API Reference</Link></li>
              </ul>
            )}
          </div>



          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Asset Management')}
            >
              <h3>Asset Management</h3>
              <span className="section-toggle">
                {expandedSections.has('Asset Management') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Asset Management') && (
              <ul>
                <li><Link to="/atomic-assets" className={isActive('/atomic-assets') ? 'active' : ''} onClick={() => handleLinkClick('/atomic-assets')}>Atomic Assets</Link></li>
                <li><Link to="/collections" className={isActive('/collections') ? 'active' : ''} onClick={() => handleLinkClick('/collections')}>Collections</Link></li>
                <li><Link to="/profiles" className={isActive('/profiles') ? 'active' : ''} onClick={() => handleLinkClick('/profiles')}>Profiles</Link></li>
                <li><Link to="/zones" className={isActive('/zones') ? 'active' : ''} onClick={() => handleLinkClick('/zones')}>Zones</Link></li>
                <li><Link to="/comments" className={isActive('/comments') ? 'active' : ''} onClick={() => handleLinkClick('/comments')}>Comments</Link></li>
                <li><Link to="/ans-110" className={isActive('/ans-110') ? 'active' : ''} onClick={() => handleLinkClick('/ans-110')}>ANS-110: Asset Metadata</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Marketplace & Tools')}
            >
              <h3>Marketplace & Tools</h3>
              <span className="section-toggle">
                {expandedSections.has('Marketplace & Tools') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Marketplace & Tools') && (
              <ul>
                <li><Link to="/bazar" className={isActive('/bazar') ? 'active' : ''} onClick={() => handleLinkClick('/bazar')}>Bazar & Bazar Studio</Link></li>
                <li><Link to="/beacon-mini-bazar" className={isActive('/beacon-mini-bazar') ? 'active' : ''} onClick={() => handleLinkClick('/beacon-mini-bazar')}>Beacon Mini Bazar</Link></li>
                <li><Link to="/starter-kits" className={isActive('/starter-kits') ? 'active' : ''} onClick={() => handleLinkClick('/starter-kits')}>Starter Kits</Link></li>
                <li><Link to="/weavers-resource-library" className={isActive('/weavers-resource-library') ? 'active' : ''} onClick={() => handleLinkClick('/weavers-resource-library')}>Weavers Resource Library</Link></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Advanced Topics')}
            >
              <h3>Advanced Topics</h3>
              <span className="section-toggle">
                {expandedSections.has('Advanced Topics') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Advanced Topics') && (
              <ul>
                <li><Link to="/token-blueprint" className={isActive('/token-blueprint') ? 'active' : ''} onClick={() => handleLinkClick('/token-blueprint')}>Token Blueprint</Link></li>
                <li><Link to="/load-network" className={isActive('/load-network') ? 'active' : ''} onClick={() => handleLinkClick('/load-network')}>Load Network</Link></li>
                <li><a href="#oracle-networks" onClick={(e) => handleAnchorClick(e, 'oracle-networks')} className={isActive('/weavers-resource-library') ? 'active' : ''}>0rbit Oracle Network</a></li>
                <li><a href="#astro-stablecoins" onClick={(e) => handleAnchorClick(e, 'astro-stablecoins')} className={isActive('/weavers-resource-library') ? 'active' : ''}>ASTRO & Stablecoins</a></li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <div 
              className="sidebar-section-header"
              onClick={() => toggleSection('Resources & Support')}
            >
              <h3>Resources & Support</h3>
              <span className="section-toggle">
                {expandedSections.has('Resources & Support') ? '−' : '+'}
              </span>
            </div>
            {expandedSections.has('Resources & Support') && (
              <ul>
                <li><a href="https://ao.arweave.net/" target="_blank" rel="noopener noreferrer">AO Documentation</a></li>
                <li><a href="https://docs.arweave.org/" target="_blank" rel="noopener noreferrer">Arweave Docs</a></li>
                <li><a href="https://discord.gg/arweave" target="_blank" rel="noopener noreferrer">Arweave Discord</a></li>
                <li><a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Bazar Discord</a></li>
                <li><a href="https://hackmd.io/@ao-docs/rkM1C9m40" target="_blank" rel="noopener noreferrer">AOS-Sqlite Workshop</a></li>
                <li><a href="https://hackmd.io/@ao-docs/H1JK_WezR" target="_blank" rel="noopener noreferrer">WeaveDrive Spec</a></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar; 