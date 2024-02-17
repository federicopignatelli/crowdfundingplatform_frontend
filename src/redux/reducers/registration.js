import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';

const initialState = {
    registering: false,
    success: false,
    error: null
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, registering: true };
        case REGISTER_SUCCESS:
            return { ...state, registering: false, success: true };
        case REGISTER_FAILURE:
            return { ...state, registering: false, error: action.payload };
        default:
            return state;
    }
};

export default registrationReducer;