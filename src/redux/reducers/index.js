import {combineReducers} from 'redux';
import usersReducer from './users.reducers';
import messagesReducer from './messages.reducer';

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer
})