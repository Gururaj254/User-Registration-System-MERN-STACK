import React, { useState, useContext } from 'react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post('/login', { email, password });
      
      // Persist login state
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      
      // Update global context state
      setUser(response.data);
      
      // Subtle alert using emoji
      console.log(`✅ Welcome back, ${response.data.name}!`);
    } catch (error) {
      alert(error.response?.data?.message || '❌ Invalid Email or Password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Welcome Back! 👋</h2>
      <p className="subtitle">Please sign in to your secure account</p>

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="📧 Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            disabled={loading}
          />
        </div>
        
        <div className="input-group">
          <input 
            type="password" 
            placeholder="🔒 Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
            disabled={loading}
          />
        </div>

        <button type="submit" className="primary-btn" disabled={loading}>
          {loading ? (
            <span>⏳ Authenticating...</span>
          ) : (
            <span>🚀 Sign In</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;