// src/components/Sidebar.js
import React from 'react';
import { FaBus, FaUser, FaRoute, FaGraduationCap, FaChalkboardTeacher, FaMapMarkerAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`sidebar ${!isVisible ? 'hidden' : ''}`}>
      <div className="menu-container">
        <button className="menu-item">
          <FaBus /> Bus Details
        </button>
        <button className="menu-item">
          <FaUser /> Driver Details
        </button>
        <button className="menu-item">
          <FaRoute /> Bus Routes
        </button>
        <button className="menu-item">
          <FaGraduationCap /> Student Details
        </button>
        <button className="menu-item">
          <FaChalkboardTeacher /> Faculty Details
        </button>
        <button className="menu-item">
          <FaMapMarkerAlt /> Track Bus
        </button>
        <button className="menu-item settings">
          <FaCog /> Settings
        </button>
        <button className="menu-item logout">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
