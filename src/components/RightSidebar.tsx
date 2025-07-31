import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

interface ResourceItem {
  title: string;
  path?: string;
  external?: boolean;
  description?: string;
}

interface RightSidebarProps {
  resources?: ResourceItem[];
  showToc?: boolean;
  className?: string;
  onClose?: () => void;
}

const RightSidebar = ({ resources = [], showToc = true, className = '', onClose }: RightSidebarProps) => {
  const [isDark, setIsDark] = useState(() => document.body.classList.contains('dark-mode'));
  const [hackathonResourcesOpen, setHackathonResourcesOpen] = useState(true);
  const [quickNavOpen, setQuickNavOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-mode'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Quick Navigation - Most important cross-page links for hackathon participants
  const getQuickNavigation = (): ResourceItem[] => {
    return [
              {
          title: 'AO Hackathon 2025',
          description: 'Join the competition',
          path: '/hackathon'
        },
        {
          title: 'Building AI Agents',
          description: 'Step-by-step AI agent guide',
          path: '/building-ai-agents'
        },
        {
          title: 'Core SDKs',
          description: 'Essential development tools',
          path: '/ar-io-sdk'
        },
        {
          title: 'Asset Management',
          description: 'Atomic Assets & Collections',
          path: '/atomic-assets'
        },
        {
          title: 'Marketplace Tools',
          description: 'Bazar & trading platforms',
          path: '/bazar'
        },
        {
          title: 'Advanced Topics',
          description: 'Advanced AO concepts',
          path: '/token-blueprint'
        },
        {
          title: 'Resources & Support',
          description: 'Community & documentation',
          path: '/weavers-resource-library'
        }
    ];
  };

  // Get hackathon-focused resources based on current page
  const getHackathonResources = (): ResourceItem[] => {
    switch (location.pathname) {
      case '/hackathon':
        return [
          {
            title: 'Quick Start Guide',
            description: 'Get started in 5 minutes',
            path: '/getting-started'
          },
          {
            title: 'AI Agent Tutorial',
            description: 'Build your first AI agent',
            path: '/building-ai-agents'
          },
          {
            title: 'LLM Integration',
            description: 'Connect to AI models',
            path: '/ai-tools'
          },
          {
            title: 'Essential SDKs',
            description: 'ArIO, ARX, WAuth SDKs',
            path: '/ar-io-sdk'
          },
          {
            title: 'Asset Management',
            description: 'Atomic Assets & Collections',
            path: '/atomic-assets'
          },
          {
            title: 'Marketplace Tools',
            description: 'Bazar & trading platforms',
            path: '/bazar'
          },
          {
            title: 'Database Integration',
            description: 'AO SQLite Workshop',
            path: '/aos-sqlite-workshop'
          },
          {
            title: 'File System',
            description: 'WeaveDrive integration',
            path: '/weavedrive'
          },
          {
            title: 'Token Development',
            description: 'AO token blueprint',
            path: '/token-blueprint'
          },
          {
            title: 'Examples & Templates',
            description: 'Ready-to-use code',
            path: '/examples'
          },
          {
            title: 'Best Practices',
            description: 'Development guidelines',
            path: '/best-practices'
          },
          {
            title: 'Troubleshooting',
            description: 'Common issues & solutions',
            path: '/troubleshooting'
          },
          {
            title: 'Community Support',
            description: 'Discord & forums',
            external: true,
            path: 'https://discord.gg/arweave'
          }
        ];
      case '/building-ai-agents':
        return [
          {
            title: 'AO Hackathon 2025',
            description: 'Build autonomous AI agents for 72+ hours',
            path: '/hackathon'
          },
          {
            title: 'Building AI Agents Guide',
            description: 'Complete guide to building AI agents from simple to advanced',
            path: '/building-ai-agents'
          },
          {
            title: 'AI Tools & LLMs',
            description: 'AI development guide',
            path: '/ai-tools'
          },
          {
            title: 'AO HTTP Message Passing',
            description: 'Learn AO communication patterns',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/messaging.html',
            external: true
          },
          {
            title: 'AO Autonomous Agents',
            description: 'Build agents that run 72+ hours',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/rabbithole.html',
            external: true
          },
          {
            title: 'Reality Protocol',
            description: 'Build AI worlds and agents',
            path: 'https://github.com/elliotsayes/Reality',
            external: true
          },
          {
            title: 'ARX - Data Upload',
            description: 'Permanent data upload to Arweave',
            path: '/arx'
          },
          {
            title: 'Weavers Resource Library',
            description: 'Complete developer toolkit',
            path: '/weavers-resource-library'
          },
          {
            title: 'AO Discord',
            description: 'AO community support',
            path: 'https://discord.gg/dYXtHwc9dc',
            external: true
          },
          {
            title: 'Community Discord',
            description: 'Get help and share projects',
            path: 'https://discord.gg/gvZTg53zuJ',
            external: true
          }
        ];
      case '/ai-tools':
        return [
          {
            title: 'AO Hackathon 2025',
            description: 'Build autonomous AI agents for 72+ hours',
            path: '/hackathon'
          },
          {
            title: 'Building AI Agents Guide',
            description: 'Complete guide to building AI agents from simple to advanced',
            path: '/building-ai-agents'
          },
          {
            title: 'AO HTTP Message Passing',
            description: 'Learn AO communication patterns',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/messaging.html',
            external: true
          },
          {
            title: 'AO Autonomous Agents',
            description: 'Build agents that run 72+ hours',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/rabbithole.html',
            external: true
          },
          {
            title: 'Reality Protocol',
            description: 'Build AI worlds and agents',
            path: 'https://github.com/elliotsayes/Reality',
            external: true
          },
          {
            title: 'ARX - Data Upload',
            description: 'Permanent data upload to Arweave',
            path: '/arx'
          },
          {
            title: 'Weavers Resource Library',
            description: 'Complete developer toolkit',
            path: '/weavers-resource-library'
          },
          {
            title: 'AO Discord',
            description: 'AO community support',
            path: 'https://discord.gg/dYXtHwc9dc',
            external: true
          },
          {
            title: 'Community Discord',
            description: 'Get help and share projects',
            path: 'https://discord.gg/gvZTg53zuJ',
            external: true
          }
        ];
      default:
        return [
          {
            title: 'AO Hackathon 2025',
            description: 'Build autonomous AI agents for 72+ hours',
            path: '/hackathon'
          },
          {
            title: 'Building AI Agents Guide',
            description: 'Complete guide to building AI agents from simple to advanced',
            path: '/building-ai-agents'
          },
          {
            title: 'AI Tools & LLMs',
            description: 'AI development guide',
            path: '/ai-tools'
          },
          {
            title: 'AO HTTP Message Passing',
            description: 'Learn AO communication patterns',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/messaging.html',
            external: true
          },
          {
            title: 'AO Autonomous Agents',
            description: 'Build agents that run 72+ hours',
            path: 'https://cookbook_ao.arweave.net/tutorials/begin/rabbithole.html',
            external: true
          },
          {
            title: 'Reality Protocol',
            description: 'Build AI worlds and agents',
            path: 'https://github.com/elliotsayes/Reality',
            external: true
          },
          {
            title: 'ARX - Data Upload',
            description: 'Permanent data upload to Arweave',
            path: '/arx'
          },
          {
            title: 'Weavers Resource Library',
            description: 'Complete developer toolkit',
            path: '/weavers-resource-library'
          },
          {
            title: 'AO Discord',
            description: 'AO community support',
            path: 'https://discord.gg/dYXtHwc9dc',
            external: true
          },
          {
            title: 'Community Discord',
            description: 'Get help and share ideas',
            path: 'https://discord.gg/gvZTg53zuJ',
            external: true
          },
          {
            title: 'AO Process Testing',
            description: 'Testing framework for AI agents',
            path: 'https://github.com/Autonomous-Finance/ao-process-testing',
            external: true
          },
          {
            title: 'AO Cookbook',
            description: 'Complete AO development guide',
            path: 'https://cookbook_ao.arweave.net',
            external: true
          },
          {
            title: 'Arweave Documentation',
            description: 'Permanent data storage guide',
            path: 'https://docs.arweave.org',
            external: true
          },
          {
            title: 'Permaweb Libs',
            description: 'SDK and API documentation',
            path: '/permaweb-libs'
          },
          {
            title: 'Zones Documentation',
            description: 'Zone management with Lua',
            path: '/zones'
          },
          {
            title: 'Atomic Assets',
            description: 'Asset management with Lua',
            path: '/atomic-assets'
          }
        ];
    }
  };

  const quickNavigation = getQuickNavigation();
  const hackathonResources = getHackathonResources();

  return (
    <aside className={`right-sidebar ${className}`}>
      <div className="right-sidebar-content">
        {/* Mobile close button */}
        <button 
          className="right-sidebar-close-btn"
          onClick={onClose}
          aria-label="Close resources"
          title="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Hackathon Resources - Contextual resources */}
        <div className="right-sidebar-section">
          <button 
            className="right-sidebar-section-header"
            onClick={() => setHackathonResourcesOpen(!hackathonResourcesOpen)}
          >
            <span>Hackathon Resources</span>
            <svg 
              className={`section-toggle ${hackathonResourcesOpen ? 'open' : ''}`}
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {hackathonResourcesOpen && (
            <nav className="right-sidebar-resources">
              <ul>
                {hackathonResources.length > 0 ? (
                  hackathonResources.map((resource, index) => (
                    <li key={index} className="resource-item">
                      {resource.external ? (
                        <a href={resource.path} target="_blank" rel="noopener noreferrer">
                          {resource.title}
                        </a>
                      ) : (
                        <Link to={resource.path || "#"}>{resource.title}</Link>
                      )}
                      {resource.description && (
                        <span className="resource-description">{resource.description}</span>
                      )}
                    </li>
                  ))
                ) : (
                  // Fallback content if no specific resources for current page
                  <>
                    <li className="resource-item">
                      <Link to="/hackathon">AO Hackathon 2025</Link>
                      <span className="resource-description">Build autonomous AI agents</span>
                    </li>
                    <li className="resource-item">
                      <Link to="/ai-tools">AI Tools & LLMs</Link>
                      <span className="resource-description">AI development guide</span>
                    </li>
                    <li className="resource-item">
                      <Link to="/weavers-resource-library">Weavers Resources</Link>
                      <span className="resource-description">Complete developer toolkit</span>
                    </li>
                    <li className="resource-item">
                      <a href="https://discord.gg/gvZTg53zuJ" target="_blank" rel="noopener noreferrer">Community Discord</a>
                      <span className="resource-description">Get help and share ideas</span>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          )}
        </div>

        {/* Quick Navigation - Most important cross-page links */}
        <div className="right-sidebar-section">
          <button 
            className="right-sidebar-section-header"
            onClick={() => setQuickNavOpen(!quickNavOpen)}
          >
            <span>Quick Navigation</span>
            <svg 
              className={`section-toggle ${quickNavOpen ? 'open' : ''}`}
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {quickNavOpen && (
            <nav className="right-sidebar-resources">
              <ul>
                {quickNavigation.map((resource, index) => (
                  <li key={index} className="resource-item">
                    {resource.external ? (
                      <a href={resource.path} target="_blank" rel="noopener noreferrer">
                        {resource.title}
                      </a>
                    ) : (
                      <Link to={resource.path || "#"}>{resource.title}</Link>
                    )}
                    {resource.description && (
                      <span className="resource-description">{resource.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
        )}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;