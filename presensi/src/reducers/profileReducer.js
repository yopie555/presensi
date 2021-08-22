import * as types from '../constants/general';

const initialState = {
    loading: false,
    profile: [],
    error: null,
};

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case types.PROFILE_REQUEST:
            // console.log('req');
            return Object.assign({}, state, {
                loading: true,
            });
        case types.PROFILE_SUCCESS:
            // console.log('reducers', action.payload);
            return Object.assign({}, state, {
                loading: false,
                profile: action.payload,
            });
        case types.PROFILE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default profileReducer;