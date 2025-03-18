import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="dashboard-section">
          <h2>Welcome to the Dashboard</h2>
          <img 
            src="https://northfleet.in/wp-content/uploads/2024/11/Expensive-Car-Models-1024x576.webp" 
            alt="Expensive Car Models" 
            style={{ width: '100%', maxWidth: '600px', borderRadius: '5px', margin: '20px 0' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;