import axios from "axios";

const BACKEND_URL = "https://devfindr-mongo-db.herokuapp.com/";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post(`${BACKEND_URL}/users/login`, creds)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
