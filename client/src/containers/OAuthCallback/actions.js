import api from "../../utils/api";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from './constants';

export const authenticate2 = async (codeParam) => {
    const { data } = await api.post('/auth/login', {code: codeParam})


    return data.token
}


export const authenticate = (codeParam, callback) => async (dispatch) => {
  try {
    dispatch({
        type: USER_LOGIN_REQUEST,
      })

      const { data } = await api.post('/auth/login', {code: codeParam})

    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
    });

    if (callback) {
      callback(data);
    }

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
    type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
