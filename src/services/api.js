import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    // Accept: 'application/json',
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
