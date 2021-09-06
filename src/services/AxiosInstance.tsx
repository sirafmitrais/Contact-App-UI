import axios from "axios";
import instanceInterceptor from "./InterceptorService";

const apiAxiosInstance = axios.create({
    baseURL: process.env.API_URL_NODE
});

class instance {
    static apiInstance(){
        instanceInterceptor.responseInterceptor(apiAxiosInstance)
        instanceInterceptor.requestInterceptor(apiAxiosInstance)
        return apiAxiosInstance
    }
}

export default instance