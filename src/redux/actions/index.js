import axios from "axios";

const BACKEND_URL = "https://devfindr-mongo-db.herokuapp.com";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post(`${BACKEND_URL}/users/login`, creds)
    .then(res => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILED, payload: err });
    });
};

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

  return axios
    .post(`${BACKEND_URL}/users`, creds)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};
