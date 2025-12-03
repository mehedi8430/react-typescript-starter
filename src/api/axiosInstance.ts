import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor for adding auth tokens
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor for global error handling (e.g., redirecting on 401)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      console.error("Unauthorized access - maybe redirect to login page");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
