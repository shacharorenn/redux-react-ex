import {SET_USERS,SET_SELECTED} from '../actions/users.action';
import {keyBy} from 'lodash';

const initialState = {
    users : {},
    selectedLeft: 0,
    selectedRight: 0
}
export default function usersReducer(state = initialState,action) {
    switch(action.type) {
        case SET_USERS:
            return {...state, users: keyBy(action.payload, (singleUser) => singleUser.id)};
        case SET_SELECTED:
            return {...state, ['selected' + action.payload.rightOrLeft]: action.payload.userId};
        default:
            return state;
    }
}


