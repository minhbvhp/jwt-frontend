import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt")}`;

instance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    console.log(response.data);
    return response?.data;
}, function (error) {
    const status = error?.response?.status || 500;

    switch (status) {
        case 401: {
            return error.response.data;
        }

        case 403: {
            return error.response.data;
        }

        case 400: {
            return error.response.data;
        }

        case 404: {
            return error.response.data;
        }

        case 409: {
            return error.response.data;
        }

        case 422: {
            return error.response.data;
        }

        default: {
            return error.response.data;
        }
    }
});

export default instance;