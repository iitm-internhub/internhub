import axios from "axios";

// http://localhost:8080
// https://tiny-pig-scrubs.cyclic.app/

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://turbo-enigma-977p5wgj7x57f7p6v-8080.app.github.dev/"
      : "https://tiny-pig-scrubs.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
