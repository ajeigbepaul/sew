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
    console.log(token);
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
export const testApi = async () => {
  const res = await apiClient.get("/");
  return res.data;
};
// REGISTER USER
export const registerUser = async (data) => {
  console.log(data);
  const res = await apiClient.post("/register", data);
  return res.data;
};
// AUTH 
export const auth = async (data) => {
  console.log(data);
  const res = await apiClient.post("/auth", data);
  return res.data;
};
// UPDATE
export const updateUser = async (data) => {
  const res = await apiClient.patch(`/${data?.id}`, data);
  return res.data;
};
// DELETE
export const deleteUser = async ({ id }) => {
  const res = await apiClient.get(`/${id}`, id);
  return res.data;
};
export default apiClient;
