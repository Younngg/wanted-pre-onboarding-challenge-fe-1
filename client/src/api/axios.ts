import axios, { AxiosRequestConfig } from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:8080',
});

authAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (window.location.pathname.includes('/auth')) {
      return config;
    }

    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {};
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;
