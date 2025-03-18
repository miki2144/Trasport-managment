import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BillingManagement from './components/BillingManagement';
import VehicleManagement from './components/VehicleManagement';
import EmployeeManagement from './components/EmployeeManagement';
import OrderManagement from './components/OrderManagement';
import Reports from './components/Reports';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/billing" element={<BillingManagement />} />
            <Route path="/vehicles" element={<VehicleManagement />} />
            <Route path="/employees" element={<EmployeeManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;