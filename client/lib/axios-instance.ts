import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/

const axiosInstance = axios.create({
  baseURL: "https:localhost:8080",
  timeout: 5000,
});

export default axiosInstance;
