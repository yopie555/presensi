import * as types from '../constants/general';

const initialState = {
    loading: false,
    time: [],
    error: null,
};

function timeReducer(state = initialState, action) {
    switch (action.type) {
        case types.TIME_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case types.TIME_SUCCESS:
            console.log('aa', action.payload);
            return Object.assign({}, state, {
                loading: false,
                time: action.payload,
            });
        case types.TIME_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default timeReducer;