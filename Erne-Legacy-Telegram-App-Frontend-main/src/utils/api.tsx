import axios from "axios";
const api = axios.create({
  baseURL: `https://erne.depay.io/api`,
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
