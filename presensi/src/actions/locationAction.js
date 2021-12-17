import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getLocationRequest = () => ({
    type: types.LOCATION_REQUEST,
});

export const getLocationSuccess = (location) => ({
    type: types.LOCATION_SUCCESS,
    payload: location,
});

export const getLocationFailure = (error) => ({
    type: types.LOCATION_FAILURE,
    error,
});

export const locationAction = (value) => {
    console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getLocationRequest());
            let url = `${BASE_URL}/cek_lokasi?username=${value.nip}&token=${value.token}`
            const res = await axios.post(
                url,
                {
                    longitude: value.longitude,
                    latitude: value.latitude
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log('ini res search', res.data);
            dispatch(getLocationSuccess(res.data));
        } catch (error) {
            console.log('Get Location Error', error.response.data);
            dispatch(getLocationFailure(error));
        }
    };
};