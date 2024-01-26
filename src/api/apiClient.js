import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add an interceptor for token authorization
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage or wherever you have it corpsd
    const token = localStorage.getItem("token"); // Replace with your actual token storage mechanism

    // If a token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ALL the endpoints here.
export default apiClient;
