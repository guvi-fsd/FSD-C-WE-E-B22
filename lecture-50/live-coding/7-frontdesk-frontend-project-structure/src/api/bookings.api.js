import api from "./axiosClient";

// TODO: what if we want to filter bookings by date?
export const listBookingsApi = () => api.get("/bookings").then(r => r.data);

export const createBookingApi = (payload) => api.post("/bookings", payload).then(r => r.data);