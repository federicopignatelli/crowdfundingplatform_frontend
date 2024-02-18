// reducer.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const initialState = {
    token: null,
    error: null,
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                token: null,
                error: action.payload
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                data: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
