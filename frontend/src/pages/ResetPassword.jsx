import React, { useState } from 'react';
import API from '../api/axios';

const ResetPassword = ({ setView }) => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calling the PUT route we set up in the backend
      const { data } = await API.put('/resetpassword', { token, password });
      
      alert(data.message || "Password updated successfully!");
      
      // Redirect back to login so they can use the new password
      setView('login'); 
    } catch (error) {
      alert(error.response?.data?.message || "Invalid or expired token. Please request a new one.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Reset Your Password</h2>
      <p className="subtitle">Enter the token you received and choose a new password.</p>
      
      <form onSubmit={handleReset}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Paste Reset Token Here" 
            value={token} 
            onChange={(e) => setToken(e.target.value)} 
            required 
            disabled={loading}
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="New Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            disabled={loading}
          />
        </div>

        <button type="submit" className="primary-btn" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>

      <button 
        className="link-btn" 
        onClick={() => setView('login')}
        disabled={loading}
      >
        Cancel and return to Login
      </button>
    </div>
  );
};

export default ResetPassword;