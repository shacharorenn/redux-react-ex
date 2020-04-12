import messageService from "../../services/messages.service";
export const SET_MESSAGES = '[messages] SET_MESSAGES';

export default function setMessages (messages) {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}

export function fetchMessages () {
    return async (dispatch) => {
        const messages =  await messageService.fetchMessages();
        dispatch(setMessages(messages));
    }
}


