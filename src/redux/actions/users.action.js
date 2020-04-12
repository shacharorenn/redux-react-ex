import usersService from "../../services/users.service";

export const SET_USERS = '[users] SET_USERS';
export const SET_SELECTED = '[users] SET_SELECTED';

export function setUsers (users) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function setSelected (userId, rightOrLeft) {
    return {
        type: SET_SELECTED,
        payload: {userId, rightOrLeft}
    }
}

export function fetchUsers () {
    debugger;
    return async (dispatch) => {
        const users =  await usersService.fetchUsers();
        dispatch(setUsers(users));
    }
}