import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeValue } from '../helper';


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
            await AsyncStorage.setItem('tok', res.data.result.token,);
            await AsyncStorage.setItem('nip', value.nip);
            await AsyncStorage.setItem('pass', value.password);
            dispatch(getLoginSuccess({ token: res.data.result.token, nip: value.nip, password: value.password }));
        } catch (error) {
            console.log('Get Address Error', error);
            dispatch(getLoginFailure(error));
        }
    };
};

export const logoutSuccess = (logout) => {
    return {
        type: types.LOGOUT_SUCCESS,
        payload: logout
    };
};

export const logoutAction = () => {
    return async (dispatch) => {
        dispatch(logoutSuccess());
    };
};

export const checkLogin = () => {
    return async (dispatch) => {
        try {
            const value = await AsyncStorage.getItem('tok');
            const value2 = await AsyncStorage.getItem('nip');
            const value3 = await AsyncStorage.getItem('pass')
            if (value !== null) {
                dispatch(getLoginSuccess({ token: value, nip: value2, password: value3 }));
            }
        } catch (e) {
            console.log('Kosong');
            removeValue();
        }
    };
};