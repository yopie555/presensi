import * as types from '../constants/general';
import axios from 'axios';
import { BASE_URL } from '../constants/general';

export const getDatangRequest = () => ({
    type: types.DATANG_REQUEST,
});

export const getDatangSuccess = (datang) => ({
    type: types.DATANG_SUCCESS,
    payload: datang,
});

export const getDatangFailure = (error) => ({
    type: types.DATANG_FAILURE,
    error,
});

export const datangAction = (payload) => {
    console.log('pay', payload);
    return async (dispatch) => {
        try {
            dispatch(getDatangRequest());
            let data = payload.data

            var config = {
                method: 'post',
                url: `${BASE_URL}/dtg?token=${payload.token}`,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: data
            };
            const res = await axios(config)
            // console.log('respon datang', res.data);
            dispatch(getDatangSuccess(res.data));

        } catch (error) {
            console.log('Get datang Error', error.message);
            dispatch(getDatangFailure(error));
        }
    };
};


export const getPulangRequest = () => ({
    type: types.PULANG_REQUEST,
});

export const getPulangSuccess = (pulang) => ({
    type: types.PULANG_SUCCESS,
    payload: pulang,
});

export const getPulangFailure = (error) => ({
    type: types.PULANG_FAILURE,
    error,
});

export const pulangAction = (payload) => {
    // console.log('pay', payload);
    return async (dispatch) => {
        try {
            dispatch(getPulangRequest());
            let data = payload.data

            var config = {
                method: 'post',
                url: `${BASE_URL}/plg?token=${payload.token}`,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: data
            };
            const res = await axios(config)
            // console.log('respon datang', res.data);
            dispatch(getPulangSuccess(res.data));

        } catch (error) {
            console.log('Get pulang Error', error);
            dispatch(getPulangFailure(error));
        }
    };
};