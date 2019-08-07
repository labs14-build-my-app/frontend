import axios from "axios";
// import { axiosWithAuth } from '../components/auth/axiosWithAuth';
import { fakeState, availableProjects } from "../components/fakeState.js";
export const EXAMPLE_START = "EXAMPLE_START";
export const EXAMPLE_SUCCESS = "EXAMPLE_SUCCESS";
export const EXAMPLE_FAILURE = "EXAMPLE_FAILURE";

export const example = parameter => dispatch => {
  dispatch({ type: EXAMPLE_START });
  return axios
    .post("https:/url/auth/EXAMPLE", parameter)

    .then(res => {
      //do stuff

      dispatch({ type: EXAMPLE_SUCCESS, payload: res.data.stuffn });
    })
    .catch(err =>
      //handle bad stuff
      dispatch({ type: EXAMPLE_FAILURE, payload: err.response.data.message })
    );
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(" https://devfindr-mongo-db.herokuapp.com/users/login", creds)
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
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FIND_PROJECTS_START, payload: fakeState });
    })
    .catch(err => console.log(err));
};

export const FIND_AVAILABLE_PROJECTS_START = "FIND_AVAILABLE_PROJECTS_START";
export const FIND_AVAILABLE_PROJECTS_SUCCESS =
  "FIND_AVAILABLE_PROJECTS_SUCCESS";
export const FIND_AVAILABLE_PROJECTS_FAILURE =
  "FIND_AVAILABLE_PROJECTS_FAILURE";
export const findAvailableProjects = () => dispatch => {
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FIND_AVAILABLE_PROJECTS_START,
        payload: availableProjects
      });
    })
    .catch(err => console.log(err));
};
