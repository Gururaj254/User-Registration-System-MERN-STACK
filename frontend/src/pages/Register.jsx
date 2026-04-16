import React, { useState } from 'react';
import API from '../api/axios';

const Register = ({ setView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post('/', { name, email, password });
      
      alert(`✨ Registration successful! Welcome, ${response.data.name}`);
      
      // Switch view back to login so the user can sign in
      if (setView) {
        setView('login');
      }
    } catch (error) {
      alert(error.response?.data?.message || '❌ Registration failed. Email might already exist.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Join Us! ✨</h2>
      <p className="subtitle">Create your secure MySQL-backed account</p>

      <form onSubmit={handleRegister}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="👤 Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
            disabled={loading}
          />
        </div>

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
            <span>⏳ Creating Account...</span>
          ) : (
            <span>📝 Register Now</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;