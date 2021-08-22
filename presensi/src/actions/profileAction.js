import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getProfileRequest = () => ({
    type: types.PROFILE_REQUEST,
});

export const getProfileSuccess = (profile) => ({
    type: types.PROFILE_SUCCESS,
    payload: profile,
});

export const getProfileFailure = (error) => ({
    type: types.PROFILE_FAILURE,
    error,
});

export const profileAction = (value) => {
    // console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getProfileRequest());
            const res = await axios.get(`${BASE_URL}/user_detail?token=${value.token}&username=${value.nip}`);
            // console.log('ini res search', res.data.result);
            dispatch(getProfileSuccess(res.data.result));
        } catch (error) {
            console.log('Get Profile Error', error.response.data);
            dispatch(getProfileFailure(error));
        }
    };
};