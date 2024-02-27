import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import reducerCampaign from '../reducers/campaign'

const bigReducer = combineReducers({
    user: userReducer,
    campaign: reducerCampaign,
})

const store = configureStore({
    reducer: bigReducer,
})

export default store