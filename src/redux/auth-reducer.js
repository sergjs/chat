import { stopSubmit } from "redux-form";
import { getLogin, getLogout, getAuth } from "../API/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTION_DATE': {
            return {
                ...state, ...action.date,
            }
        }
        case 'SET_AUTH': {
            return {
                ...state, ...action.date,
            }
        }
        default:
            return state;
    }
}
export const setActionDate = (id, email, login, isAuth) => ({
    type: 'SET_ACTION_DATE', date: { id, email, login, isAuth }
})

export const getAuthLogin = () => async (dispatch) => {
    let response = await getLogin();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setActionDate(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await getAuth(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthLogin())
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', { _error: messages }))
    }
}

export const logOut = () => async (dispatch) => {
    let response = await getLogout();
    if (response.data.resultCode === 0) {
        dispatch(setActionDate(null, null, null, false))
    }
}

export default authReducer;