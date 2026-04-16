import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5002/api/users', // Check that this is 5002!
});

export default API;