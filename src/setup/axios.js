import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN 123555';

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const status = error && error.response && error.response.status || 500;

    switch (status) {
        case 401: {
            toast.error("Unauthorized the user. Please login !");
            return error.response.data;
        }

        case 403: {
            toast.error(`You don't have permission to access this resource !`);
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