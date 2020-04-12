import axios from 'axios';

class UserService {
    /**
     * @param {{firstName: string, lastName:string}} userBody
     * @return {Promise <user>}
     */
    createUser = (userBody) => {
        return axios.post('https://academeez-chat.herokuapp.com/api/users/', {
            firstName: userBody.firstName,
            lastName: userBody.lastName
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    /**
     * @return {Promise <user[]>}
     */
    fetchUsers = () => {
        return axios.get('https://academeez-chat.herokuapp.com/api/users/')
        .then(({data}) => data)
    }
}


//to make it singelton. create only once
export default new UserService();

