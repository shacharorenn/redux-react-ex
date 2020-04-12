import axios from 'axios';

class messageService {
    createMessage = (messageBody) => {
        return axios.post('https://academeez-chat.herokuapp.com/api/messages/', {
            message: messageBody.message,
            userId: messageBody.userId
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    fetchMessages = () => {
        return axios.get('https://academeez-chat.herokuapp.com/api/messages/')
        .then(({data}) => data)
    }
}


export default new messageService();
