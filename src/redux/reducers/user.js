// user.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from '../actions';

const initialState = {
    token: null,
    error: null,
    data: [],
    isLoggedIn: false,
};

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                error: null,
                isLoggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                token: null,
                error: action.payload
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                data: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducerUser;
