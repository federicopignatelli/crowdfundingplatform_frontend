import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import registrationReducer from '../reducers/registration'

const bigReducer = combineReducers({
    registration: registrationReducer,
    user: userReducer,
})

const store = configureStore({
    reducer: bigReducer,
})

export default store