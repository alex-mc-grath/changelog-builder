import axios from 'axios';
// import store from '../store';
// import { showAlertMessage } from '../actions/alertActions'

// create instance of axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// intercept for errors

api.interceptors.response.use(
  res => res,
  err =>
  /* if(err.response.status === 401) {
            store.dispatch({type: 'LOGOUT'});
        }
        else
        {
            (showAlertMessage(err.message))(store.dispatch);
        } */

    Promise.reject(err),
);

export default api;
