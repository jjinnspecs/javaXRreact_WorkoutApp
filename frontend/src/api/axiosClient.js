import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.BACKEND_API_URL,
});

export default  axiosClient;