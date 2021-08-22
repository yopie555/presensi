import * as types from '../constants/general';

const initialState = {
    loading: false,
    presensi: [],
    error: null,
};

function presensiReducer(state = initialState, action) {
    switch (action.type) {
        case types.PRESENSI_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case types.PRESENSI_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                presensi: action.payload,
            });
        case types.PRESENSI_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}

export default presensiReducer;