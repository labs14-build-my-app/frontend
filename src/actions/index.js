import axios from "axios";
import { axiosWithAuth } from '../components/auth/axiosWithAuth';
import { fakeState, availableProjects } from "../components/fakeState.js";
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

export const FIND_PROJECTS_START = "FIND_PROJECTS_START";
export const FIND_PROJECTS_SUCCESS = "FIND_PROJECTS_SUCCESS";
export const FIND_PROJECTS_FAILURE = "FIND_PROJECTS_FAILURE";
export const findProjects = () => dispatch => {
   axiosWithAuth()
    .get(`${BEurl}/projects`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FIND_PROJECTS_START, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const FIND_AVAILABLE_PROJECTS_START = "FIND_AVAILABLE_PROJECTS_START";
export const FIND_AVAILABLE_PROJECTS_SUCCESS ="FIND_AVAILABLE_PROJECTS_SUCCESS";
export const FIND_AVAILABLE_PROJECTS_FAILURE ="FIND_AVAILABLE_PROJECTS_FAILURE";
export const findAvailableProjects = () => dispatch => {
  dispatch({type: FIND_AVAILABLE_PROJECTS_START })
 axiosWithAuth()
    .get(`${BEurl}/projects/all`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FIND_AVAILABLE_PROJECTS_START,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_MORE_PROJECTS = 'FETCH_MORE_PROJECTS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';
