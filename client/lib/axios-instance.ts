import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/
//https://organic-orbit-wxgvpxvv79g25p7g-8080.app.github.dev/-codespace localhost
const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://organic-orbit-wxgvpxvv79g25p7g-8080.app.github.dev/"
      : "https://tender-cod-swimsuit.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
