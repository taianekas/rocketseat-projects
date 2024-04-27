import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('@rocketmovies:token')

  if(token) config.headers['Authorization'] = `bearer ${token}`
  
   return config
})