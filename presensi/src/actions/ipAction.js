import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getIpRequest = () => ({
    type: types.IP_REQUEST,
});

export const getIpSuccess = (ip) => ({
    type: types.IP_SUCCESS,
    payload: ip,
});

export const getIpFailure = (error) => ({
    type: types.IP_FAILURE,
    error,
});

export const ipAction = (value) => {
    // console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getIpRequest());
            const res = await axios.get(`https://api.myip.com/`);
            // console.log('ini ip', res.data.ip);
            dispatch(getIpSuccess(res.data.ip));
        } catch (error) {
            console.log('Get Address Error', error.response.data);
            dispatch(getIpFailure(error));
        }
    };
};