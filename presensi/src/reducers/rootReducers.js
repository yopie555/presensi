import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    address: addressReducer,
    auth: authReducer
})

export default rootReducer