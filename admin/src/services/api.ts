import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// Interceptador para adicionar token de autenticação
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Interceptador para tratar erros de autenticação
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Limpar token inválido
      localStorage.removeItem('token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;