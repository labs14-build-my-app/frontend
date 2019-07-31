
import axios from 'axios';
// import { axiosWithAuth } from '../components/auth/axiosWithAuth';

export const EXAMPLE_START = 'EXAMPLE_START';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

export const example = parameter => dispatch => {
  
  dispatch({ type: EXAMPLE_START });
  return axios
    .post('https:/url/auth/EXAMPLE', parameter)

    .then(res => {
     //do stuff

      dispatch({ type: EXAMPLE_SUCCESS, payload: res.data.stuffn });
    })
    .catch(err =>
        //handle bad stuff
      dispatch({ type: EXAMPLE_FAILURE, payload: err.response.data.message })
    );
};


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('https://stockly-backend.herokuapp.com/auth/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
      });
  };
  