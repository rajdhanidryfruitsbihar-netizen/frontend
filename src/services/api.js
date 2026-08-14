import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-livid-sigma-62.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;