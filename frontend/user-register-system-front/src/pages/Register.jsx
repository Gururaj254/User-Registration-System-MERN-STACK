import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users', formData);
      alert(`User ${data.name} registered successfully! Now go to Login.`);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} /><br/>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} /><br/>
        <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} /><br/>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;