import instance from './AxiosInstance'

const service = instance.apiInstance();

const baseURL = 'auth'

class AuthService {
    static register(dataRequest: any){
        return service
            .post(`${baseURL}/login`)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                throw err;
            })
    }

    static login(dataRequest: any){
        return service
            .post(`${baseURL}/register`)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                throw err;
            })
    }
}

export default AuthService