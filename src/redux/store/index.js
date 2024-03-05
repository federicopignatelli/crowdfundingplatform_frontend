import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import reducerCampaign from '../reducers/campaign'
import reducerContribution from '../reducers/contribution'

const bigReducer = combineReducers({
    user: userReducer,
    campaign: reducerCampaign,
    contribution: reducerContribution
})

const store = configureStore({
    reducer: bigReducer,
})

export default store