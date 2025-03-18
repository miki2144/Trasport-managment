import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
    navigate('/');
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      padding: '30px',
      background: 'rgba(48, 42, 42, 0.9)', // Slightly transparent white background for contrast
      borderRadius: '15px', // More rounded corners
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
      position: 'relative',
      zIndex: 1
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{
            margin: '10px 0',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '10px', // Rounded input fields
            width: '100%',
            fontSize: '16px',
            transition: 'border 0.3s',
          }} 
          onFocus={(e) => e.target.style.border = '1px solid #007bff'} // Focus effect
          onBlur={(e) => e.target.style.border = '1px solid #ccc'} // Blur effect
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{
            margin: '10px 0',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '10px', // Rounded input fields
            width: '100%',
            fontSize: '16px',
            transition: 'border 0.3s',
          }} 
          onFocus={(e) => e.target.style.border = '1px solid #007bff'} // Focus effect
          onBlur={(e) => e.target.style.border = '1px solid #ccc'} // Blur effect
        />
        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
          <input 
            type="checkbox" 
            checked={rememberMe} 
            onChange={(e) => setRememberMe(e.target.checked)} 
            style={{ marginRight: '5px' }} // Spacing for checkbox
          />
          <label style={{ fontSize: '14px' }}>Remember Me</label>
        </div>
        <button type="submit" style={{
          padding: '12px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '10px', // Rounded button
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px',
          transition: 'background 0.3s, transform 0.2s',
        }}>
          Login
        </button>
      </form>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('https://northfleet.in/wp-content/uploads/2024/11/Expensive-Car-Models-1024x576.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: -1
      }} />
    </div>
  );
};

export default Login;