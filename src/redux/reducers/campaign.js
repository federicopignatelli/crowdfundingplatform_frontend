
import { FETCH_CAMPAIGN_DATA_SUCCESS, FETCH_CAMPAIGN_DATA_FAILURE } from '../actions/campaign';

const initialState = {
    allcampaigns: [],
    totalPages: 0,
    currentPage: 0,
    error: null
}

const reducerCampaign = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGN_DATA_SUCCESS:
            return {
                ...state,
                allcampaigns: [...state.allcampaigns, ...action.payload.content],
                totalPages: action.payload.totalPages,
                currentPage: action.payload.pageable.pageNumber,
            };

        case FETCH_CAMPAIGN_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducerCampaign;