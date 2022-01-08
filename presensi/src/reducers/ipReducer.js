import * as types from '../constants/general';

const initialState = {
    loading: false,
    ip: [],
    error: null,
};

function ipReducer(state = initialState, action) {
    switch (action.type) {
        case types.IP_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case types.IP_SUCCESS:
            // console.log('reducers', action.payload);
            return Object.assign({}, state, {
                loading: false,
                ip: action.payload,
            });
        case types.IP_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default ipReducer;