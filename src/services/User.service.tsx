import instance from "./AxiosInstance"

const service = instance.apiInstance();

const baseURL = 'users'

class UserService {
  static getAllUser() {
    return service
      .get(`${baseURL}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  static createUser(dataRequest: any) {
    return service
      .post(`${baseURL}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static getUserDetail(id: string) {
    return service
      .get(`${baseURL}/${id}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static getUserAccount(account: string) {
    return service
      .get(`${baseURL}/account/${account}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static getUseridentity(identity: string) {
    return service
      .get(`${baseURL}/identity/${identity}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static deleteUser(id: string){
    return service
      .delete(`${baseURL}/${id}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static updateUser(id: string, updateRequest: any){
      return service
        .patch(`${baseURL}/${id}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          throw err;
        });
  }
}

export default UserService