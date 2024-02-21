import axios from "axios";

// http://localhost:8080
// https://tender-cod-swimsuit.cyclic.app/

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/"
      : "https://tender-cod-swimsuit.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
