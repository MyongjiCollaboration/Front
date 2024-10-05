import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'http://3.39.195.75:8080',
  withCredentials: true,
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (window.location.pathname === '/login') {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
