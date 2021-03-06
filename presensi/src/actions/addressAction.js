import * as types from '../constants/general';
import axios from 'axios';
import { mapApi, BASE_URL } from '../constants/general';

export const getAddressRequest = () => ({
    type: types.ADDRESS_REQUEST,
});

export const getAddressSuccess = (address) => ({
    type: types.ADDRESS_SUCCESS,
    payload: address,
});

export const getAddressFailure = (error) => ({
    type: types.ADDRESS_FAILURE,
    error,
});

export const addressAction = (value) => {
    // console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getAddressRequest());
            const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value.longitude},${value.latitude}.json?access_token=${mapApi}`);
            // console.log('ini res search', res.data.features[1]);
            dispatch(getAddressSuccess(res.data.features[1]));
        } catch (error) {
            console.log('Get Address Error', error.response.data);
            dispatch(getAddressFailure(error));
        }
    };
};

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
            console.log('ini res search', res.data);
            // dispatch(getLocationSuccess(res.data.features[1]));
        } catch (error) {
            console.log('Get Location Error', error.response.data);
            dispatch(getLocationFailure(error));
        }
    };
};