import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // We will build this endpoint in the backend phase
      const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
      setUser(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert("Login Successful!");
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Server offline"));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;