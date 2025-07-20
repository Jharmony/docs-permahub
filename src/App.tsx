import React, { useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import GettingStarted from "./pages/GettingStarted";
import ApiReference from "./pages/ApiReference";
import Examples from "./pages/Examples";
import BestPractices from "./pages/BestPractices";
import Troubleshooting from "./pages/Troubleshooting";
import Installation from "./pages/Installation";
import BuildDocsSite from "./pages/BuildDocsSite";
import Zones from "./pages/Zones";
import Profiles from "./pages/Profiles";
import AtomicAssets from "./pages/AtomicAssets";
import Collections from "./pages/Collections";
import Comments from "./pages/Comments";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import LoadNetwork from './pages/LoadNetwork';
import StarterKits from './pages/StarterKits';
import Bazar from './pages/Bazar';
import BeaconMiniBazar from './pages/BeaconMiniBazar';
import WeaversResourceLibrary from './pages/WeaversResourceLibrary';
import AITools from './pages/AITools';
import AOSSqliteWorkshop from './pages/AOSSqliteWorkshop';
import WeaveDrive from './pages/WeaveDrive';
import Hackathon from './pages/Hackathon';
import BuildingAIAgents from './pages/BuildingAIAgents';
import ARX from './pages/ARX';

function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // Close right sidebar when opening left sidebar
    if (!sidebarOpen) {
      setRightSidebarOpen(false);
    }
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
    // Close left sidebar when opening right sidebar
    if (!rightSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const closeRightSidebar = () => {
    setRightSidebarOpen(false);
  };

  return (
    <div className="app">
      <Navigation onMenuToggle={toggleSidebar} onRightMenuToggle={toggleRightSidebar} />
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
      )}
      {rightSidebarOpen && (
        <div className="right-sidebar-backdrop open" onClick={closeRightSidebar}></div>
      )}
      <div className="app-layout">
        <Sidebar className={sidebarOpen ? 'open' : ''} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/build-docs-site" element={<BuildDocsSite />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/atomic-assets" element={<AtomicAssets />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/ecosystem/*" element={<div className="page-container"><h1>Ecosystem</h1><p>Ecosystem documentation coming soon...</p></div>} />
            <Route path="/permaweb-libs" element={<div className="page-container"><h1>permaweb-libs</h1><p>permaweb-libs documentation coming soon...</p></div>} />
            <Route path="/hyperbeam" element={<div className="page-container"><h1>Hyperbeam</h1><p>Hyperbeam documentation coming soon...</p></div>} />
            <Route path="/ao-connect" element={<div className="page-container"><h1>AO Connect</h1><p>AO Connect documentation coming soon...</p></div>} />
            <Route path="/arweave-js" element={<div className="page-container"><h1>arweave.js</h1><p>arweave.js documentation coming soon...</p></div>} />
            <Route path="/daboy" element={<div className="page-container"><h1>daboy</h1><p>daboy documentation coming soon...</p></div>} />
            <Route path="/load-network" element={<LoadNetwork />} />
            <Route path="/starter-kits" element={<StarterKits />} />
            <Route path="/bazar" element={<Bazar />} />
            <Route path="/beacon-mini-bazar" element={<BeaconMiniBazar />} />
            <Route path="/weavers-resource-library" element={<WeaversResourceLibrary />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/aos-sqlite-workshop" element={<AOSSqliteWorkshop />} />
            <Route path="/weavedrive" element={<WeaveDrive />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/building-ai-agents" element={<BuildingAIAgents />} />
            <Route path="/arx" element={<ARX />} />
          </Routes>
        </main>
        <RightSidebar className={rightSidebarOpen ? 'open' : ''} onClose={closeRightSidebar} />
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App; 