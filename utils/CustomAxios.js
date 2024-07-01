import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://backend.testing4.xyz',
  timeout: 4000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default customAxios;
