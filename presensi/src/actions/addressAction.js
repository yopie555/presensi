import * as types from '../constants/general';
import axios from 'axios';
import { mapApi } from '../constants/general';

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
    console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getAddressRequest());
            const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value.longitude},${value.latitude}.json?access_token=${mapApi}`);
            console.log('ini res search', res.data.features[1]);
            dispatch(getAddressSuccess(res.data.features[1]));
        } catch (error) {
            console.log('Get Address Error', error.response.data);
            dispatch(getAddressFailure(error));
        }
    };
};