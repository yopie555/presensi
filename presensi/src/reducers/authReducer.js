import * as types from '../constants/general';

const initialState = {
    loading: false,
    auth: [],
    error: null,
};

function addressReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            console.log('req');
            return Object.assign({}, state, {
                loading: true,
            });
        case types.LOGIN_SUCCESS:
            // console.log('reducers', action.payload);
            return Object.assign({}, state, {
                loading: false,
                auth: action.payload,
            });
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                auth: '',
            });
        default:
            return state;
    }
}

export default addressReducer;