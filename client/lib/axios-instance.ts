import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/
//https://fluffy-space-system-55xvj5vvgv737656-8080.app.github.dev/
const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/"
      : "https://tender-cod-swimsuit.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
