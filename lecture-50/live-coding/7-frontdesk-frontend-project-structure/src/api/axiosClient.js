import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Attach the token from localStorage per request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("id_token");
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default api;