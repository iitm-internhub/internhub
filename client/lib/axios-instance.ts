import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://shiny-space-succotash-jjjx79pqj7xr35gqx-8080.app.github.dev/"
      : "https://tiny-pig-scrubs.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
