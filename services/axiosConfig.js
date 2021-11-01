import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const http = axios.create({
  baseURL,
  withCredentials: true
});

http.interceptors.response.use(
  response => (response), 
  error => (Promise.reject(error.response.data.message))
);

export default http;