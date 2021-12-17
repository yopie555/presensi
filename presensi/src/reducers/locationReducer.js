import * as types from '../constants/general';

const initialState = {
    loading: false,
    location: [],
    error: null,
};

function locationReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOCATION_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case types.LOCATION_SUCCESS:
            // console.log('reducers', action.payload);
            return Object.assign({}, state, {
                loading: false,
                location: action.payload,
            });
        case types.LOCATION_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default locationReducer;