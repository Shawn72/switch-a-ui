import axios from 'axios'

const ALL_USERS_LIST = 'http://switchdockerapi.azurewebsites.net/api/users';
class UserService {
    getUsers(){
        return axios.get(ALL_USERS_LIST);
    }
}
export default new UserService();

