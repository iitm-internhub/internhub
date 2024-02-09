import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tiny-pig-scrubs.cyclic.app/",
  timeout: 5000,
});

export default axiosInstance;
