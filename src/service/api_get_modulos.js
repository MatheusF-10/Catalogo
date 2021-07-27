import axios from "axios";

const api_modulos = axios.create({
    baseURL: "http://localhost:8000/modulos/",
});

export default api_modulos;