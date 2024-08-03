import axios from "axios";
//http://192.168.0.161:8000/api

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //baseURL:"http://192.168.1.10:4002/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

export default api;
