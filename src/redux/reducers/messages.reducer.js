import {SET_MESSAGES} from '../actions/messages.action';
import {keyBy} from 'lodash';


const initialState = {
    messages : {},
}
export default function messagesReducer(state = initialState,action) {
    switch(action.type) {
        case SET_MESSAGES:
          return {...state, messages: keyBy(action.payload, (singleMessage) => singleMessage.id)};
        default:
            return state;
    }
}


