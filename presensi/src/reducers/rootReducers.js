import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import authReducer from './authReducer'
import profileReducer from './profileReducer';
import presensiReducer from './presensiReducer';
import timeReducer from './timeReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
    address: addressReducer,
    auth: authReducer,
    profile: profileReducer,
    presensi: presensiReducer,
    time: timeReducer,
    history: historyReducer,
})

export default rootReducer