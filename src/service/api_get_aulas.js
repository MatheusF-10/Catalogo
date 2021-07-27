import axios from "axios";

const api_aulas = axios.create({
    baseURL: "http://localhost:8000/aulas/",
});

export default api_aulas;