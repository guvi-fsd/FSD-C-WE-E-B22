import api from "./axiosClient";

export const loginApi = (email, password) => api.post("/auth/login", { email, password }).then(r => r.data);

export const meApi = () => api.get("/auth/me").then(r => r.data);