import React, { useState } from 'react';
import API from '../api/axios';

const ForgotPassword = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/forgotpassword', { email });
      // For development, we display the token so you can copy it
      setMessage(`Token: ${data.token}`); 
      alert("Reset token generated! Copy it from the screen.");
    } catch (error) {
      alert(error.response?.data?.message || "Email not found");
    }
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a reset token.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className="primary-btn">Request Token</button>
      </form>
      
      {message && (
        <div className="token-box">
          <p><strong>Copy this Token:</strong></p>
          <code>{message.split(': ')[1]}</code>
        </div>
      )}
      
      <button className="link-btn" onClick={() => setView('login')}>Back to Login</button>
    </div>
  );
};

export default ForgotPassword;