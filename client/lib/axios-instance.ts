import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://tiny-pig-scrubs.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
