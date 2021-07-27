import axios from "axios";

const api_login = axios.create({
    baseURL: "http://localhost:8000/usuarios/",
});

export default api_login;