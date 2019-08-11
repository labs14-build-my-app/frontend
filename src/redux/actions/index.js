import axios from "axios";
import {axiosWithAuth} from "../../components/auth/axiosWithAuth"
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
      if(res.data.user){
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", res.data.user)
      }
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
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.user });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const LOAD_APP = {
  START: "LOAD_APP_START",
  SUCCESS: "LOAD_APP_SUCCESS",
  FAILURE: "LOAD_APP_FAILURE"
}
export const loadApp = () => dispatch =>{
  dispatch({type: LOAD_APP.START})
  return axiosWithAuth().get(`${BACKEND_URL}/users/me`)
  .then(res=>{
    console.log(res.data, "return user") 
    dispatch({type: LOAD_APP.SUCCESS, payload: res.data} )
  })
}

// export const FETCH_PROJECTS
// export const fetchSelfProjects  = () => dispatch => {
//   dispatch({type: ""})
// }
