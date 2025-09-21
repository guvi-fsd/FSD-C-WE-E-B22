import api from "./axiosClient";

export const listServicesApi = () => api.get("/services").then(r => r.data);

export const createServiceApi = (payload) => api.post("/services", payload).then(r => r.data);