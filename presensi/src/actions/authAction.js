import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLoginRequest = () => ({
    type: types.LOGIN_REQUEST,
});

export const getLoginSuccess = (login) => ({
    type: types.LOGIN_SUCCESS,
    payload: login,
});

export const getLoginFailure = (error) => ({
    type: types.LOGIN_FAILURE,
    error,
});

export const loginAction = (value) => {
    console.log('value', value);

    return async (dispatch) => {
        try {
            dispatch(getLoginRequest());
            let url = `${BASE_URL}/login`
            const res = await axios.post(
                url,
                {
                    username: value.nip,
                    password: value.password
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log('ini res search', res.data.result.token,);
            await AsyncStorage.setItem('tok', res.data.result.token,);
            await AsyncStorage.setItem('nip', value.nip);
            dispatch(getLoginSuccess({ token: res.data.result.token, nip: value.nip }));
        } catch (error) {
            console.log('Get Address Error', error.response.data);
            dispatch(getLoginFailure(error));
        }
    };
};