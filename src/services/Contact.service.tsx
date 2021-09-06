import instance from "./AxiosInstance"

const service = instance.apiInstance()

const baseURL = 'contact'

class ContactService {
    static getAllContact(){
        return service
            .get(`${baseURL}`)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                throw err;
            })
    }

    static createContact(dataRequest: any){
        return service
          .post(`${baseURL}`, dataRequest)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            throw err;
          });
    }

    static getContactDetail(id: string){
        return service
          .get(`${baseURL}/${id}`)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            throw err;
          });
    }

    static deleteContact(id: string){
        return service
          .delete(`${baseURL}/${id}`)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            throw err;
          });
    }

    static updateContact(id: string, dataRequest: any){
        return service
          .patch(`${baseURL}/${id}`, dataRequest)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            throw err;
          });
    }
}

export default ContactService