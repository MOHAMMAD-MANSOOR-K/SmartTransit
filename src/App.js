// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './App.css';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <Topbar />
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </button>
      <Sidebar isVisible={isSidebarVisible} />
      <div className="main-content">
        <div className="content">
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;

