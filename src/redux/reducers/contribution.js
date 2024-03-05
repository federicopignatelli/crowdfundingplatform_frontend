import { FETCH_CONTRIBUTION_DATA_SUCCESS, FETCH_CONTRIBUTION_DATA_FAILURE } from '../actions/contribution';

const initialState = {
    allcontributions: [],
    totalPages: 0,
    currentPage: 0,
    error: null
}

const reducerContribution = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTRIBUTION_DATA_SUCCESS:
            return {
                ...state,
                allcontributions: [...action.payload.content],
                totalPages: action.payload.totalPages,
                currentPage: action.payload.pageable.pageNumber,
            };

        case FETCH_CONTRIBUTION_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducerContribution;