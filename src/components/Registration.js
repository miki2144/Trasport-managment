import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle registration logic here (e.g., save user data)
    console.log('Registering with:', { username, email, password, image });
    // Redirect to login page after successful registration
    navigate('/login');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', background: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }} 
        />
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Register</button>
      </form>
    </div>
  );
};

export default Registration;