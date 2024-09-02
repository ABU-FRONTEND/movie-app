import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://movie-app-backend-2.onrender.com",
    headers: {
        "Content-type": "application/json",
    },
});
export default apiClient