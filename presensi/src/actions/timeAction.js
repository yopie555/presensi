import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getTimeRequest = () => ({
    type: types.TIME_REQUEST,
});

export const getTimeSuccess = (time) => ({
    type: types.TIME_SUCCESS,
    payload: time,
});

export const getTimeFailure = (error) => ({
    type: types.TIME_FAILURE,
    error,
});

export const timeAction = (value) => {
    console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getTimeRequest());
            const res = await axios.get(`${BASE_URL}/presensi?token=${value.token}&username=${value.nip}`);
            console.log('ini res time', res.data);
            dispatch(getTimeSuccess(res.data));
        } catch (error) {
            console.log('Get time Error', error.response.data);
            dispatch(getTimeFailure(error));
        }
    };
};