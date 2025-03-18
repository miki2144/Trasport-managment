import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '30px 20px', backgroundColor: '#007bff', color: 'white', margin: '0 0 20px 0' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 style={{ margin: '0' }}>Transport Management System</h1>
      </Link>
    </header>
  );
};

export default Header;