import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img 
          src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-male-avator-icon-vector-png-image_6631112.png" 
          alt="Avatar Icon" 
          style={{ width: '100%', maxWidth: '150px', borderRadius: '5px', marginBottom: '20px' }} 
        />
        <ul>
          <li><Link to="/billing" onClick={() => setIsOpen(false)}>Billing Management</Link></li>
          <li><Link to="/vehicles" onClick={() => setIsOpen(false)}>Vehicle Management</Link></li>
          <li><Link to="/employees" onClick={() => setIsOpen(false)}>Employee Management</Link></li>
          <li><Link to="/orders" onClick={() => setIsOpen(false)}>Order Management</Link></li>
          <li><Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link></li>
         
          <li><Link to="/login">Login</Link></li> {/* Link to Login */}
          <li><Link to="/register">Register</Link></li> {/* Link to Registration */}
          <li><Link to="/logout" onClick={() => setIsOpen(false)}>Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;