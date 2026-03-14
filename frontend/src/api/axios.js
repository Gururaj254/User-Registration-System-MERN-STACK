
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/users', // This matches your backend port
});

export default API;