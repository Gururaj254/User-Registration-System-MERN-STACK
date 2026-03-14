import React, { useState } from 'react';
import API from '../api/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/login', { email, password });
      
      // Save the token and user data locally
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      
      alert(`Welcome back, ${response.data.name}!`);
      window.location.reload(); // Refresh to update UI state
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid Login');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;