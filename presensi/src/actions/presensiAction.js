import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getPresensiRequest = () => ({
    type: types.PRESENSI_REQUEST,
});

export const getPresensiSuccess = (presensi) => ({
    type: types.PRESENSI_SUCCESS,
    payload: presensi,
});

export const getPresensiFailure = (error) => ({
    type: types.PRESENSI_FAILURE,
    error,
});

export const presensiAction = (value) => {
    // console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getPresensiRequest());
            const res = await axios.get(`${BASE_URL}/presensi?token=${value.token}&username=${value.nip}`);
            console.log('ini res search', res.data.data_presensi);
            dispatch(getPresensiSuccess(res.data.data_presensi));
        } catch (error) {
            console.log('Get Presensi Error', error.response.data);
            dispatch(getPresensiFailure(error));
        }
    };
};