import * as types from '../constants/general';

const initialState = {
    loading: false,
    address: [],
    error: null,
};

function addressReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADDRESS_REQUEST:
            console.log('req');
            return Object.assign({}, state, {
                loading: true,
            });
        case types.ADDRESS_SUCCESS:
            // console.log('reducers', action.payload);
            return Object.assign({}, state, {
                loading: false,
                address: action.payload,
            });
        case types.ADDRESS_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default addressReducer;