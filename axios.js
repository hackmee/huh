import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  }
});

// GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

// POST request
export const postData = async (endpoint, data, params = {}) => {
  try {
    const response = await apiClient.post(endpoint, data, { params });
    return response;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};

export default apiClient;