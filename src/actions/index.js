import axios from "axios";
import { axiosWithAuth } from "../components/auth/axiosWithAuth";
export const EXAMPLE_START = "EXAMPLE_START";
export const EXAMPLE_SUCCESS = "EXAMPLE_SUCCESS";
export const EXAMPLE_FAILURE = "EXAMPLE_FAILURE";

export const SIGNING_UP_START = "SIGNING_UP_START";
export const SIGNING_UP_SUCCESS = "SIGNING_UP_SUCCESS";
export const SIGNING_UP_FAILURE = "SIGNING_UP_FAILURE";

const BEurl = "https://devfindr-mongo-db.herokuapp.com";

export const signup = creds => dispatch => {
  dispatch({ type: SIGNING_UP_START });
  return axios
    .post(`${BEurl}/users`, creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNING_UP_SUCCESS, payload: res.data.token });
    })

    .catch(err => {
      dispatch({ type: SIGNING_UP_FAILURE, payload: err.response.data });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${BEurl}/users/login`, creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

export const FIND_PROJECTS = {
  START: "FIND_PROJECTS_START",
  SUCCESS: "FIND_PROJECTS_SUCCESS",
  FAILURE: "FIND_PROJECTS_FAILURE"
};
export const findProjects = () => dispatch => {
  dispatch({ type: FIND_PROJECTS.START });
  axiosWithAuth()
    .get(`${BEurl}/projects`)
    .then(res => {
      console.log(res.data, "WE NEED PROJECTS TO BE ADDED BY ENTREPRENUERS");
      dispatch({ type: FIND_PROJECTS.SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const FIND_AVAILABLE_PROJECTS = {
  START: "FIND_AVAILABLE_PROJECTS_START",
  SUCCESS: "FIND_AVAILABLE_PROJECTS_SUCCESS",
  FAILURE: "FIND_AVAILABLE_PROJECTS_FAILURE"
};
export const findAvailableProjects = () => dispatch => {
  dispatch({ type: FIND_AVAILABLE_PROJECTS.START });
  axiosWithAuth()
    .get(`${BEurl}/projects/all`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FIND_AVAILABLE_PROJECTS.SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const GET_USERINFO = {
  START: "GET_USERINFO_START",
  SUCCESS: "GET_USERINFO_SUCCESS",
  UNAVAILABLE: "GET_USERINFO_UNAVAILABLE"
};
export const getUserinfo = () => dispatch => {
  dispatch({ type: GET_USERINFO.START });
  axiosWithAuth()
    .get(`${BEurl}/users/me`)
    .then(res => {
      dispatch({ type: GET_USERINFO.SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
