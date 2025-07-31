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
import ArweaveJS from './pages/ArweaveJS';
import TokenBlueprint from './pages/TokenBlueprint';
import ANS110 from './pages/ANS110';
import WalletTools from './pages/WalletTools';
import ArIOSDK from './pages/ArIOSDK';
import WAuthSDK from './pages/WAuthSDK';
import AOConnect from './pages/AOConnect';
import Hyperbeam from './pages/Hyperbeam';
import LLMsDocumentation from './pages/LLMsDocumentation';
import PermawebLibs from './pages/PermawebLibs';

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
            <Route path="/permaweb-libs" element={<PermawebLibs />} />
            <Route path="/hyperbeam" element={<Hyperbeam />} />
            <Route path="/llms-documentation" element={<LLMsDocumentation />} />
            <Route path="/ao-connect" element={<AOConnect />} />
            <Route path="/arweave-js" element={<ArweaveJS />} />
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
            <Route path="/token-blueprint" element={<TokenBlueprint />} />
            <Route path="/ans-110" element={<ANS110 />} />
            <Route path="/wallet-tools" element={<WalletTools />} />
            <Route path="/arx" element={<ARX />} />
            <Route path="/ar-io-sdk" element={<ArIOSDK />} />
            <Route path="/wauth-sdk" element={<WAuthSDK />} />
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