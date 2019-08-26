import axios from "axios";
import { axiosWithAuth } from "../../components/auth/axiosWithAuth";
export const BACKEND_URL = "https://devfindr-mongo-db.herokuapp.com";

export const LOGIN = {
  START: "LOGIN_START",
  SUCCESS: "LOGIN_SUCCESS",
  FAILED: "LOGIN_FAILED"
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN.START });

  return axios
    .post(`${BACKEND_URL}/users/login`, creds)
    .then(res => {
      console.log(res.data);
      if (res.data.user) {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("user", res.data.user);
      }
      dispatch({ type: LOGIN.SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN.FAILED, payload: err });
    });
};

export const SIGNUP = {
  START: "SIGNUP_START",
  SUCCESS: "SIGNUP_SUCCESS",
  FAILURE: "SIGNUP_FAILURE"
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP.START });

  return axios
    .post(`${BACKEND_URL}/users`, creds)
    .then(res => {
      dispatch({ type: SIGNUP.SUCCESS, payload: res.data.user });
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP.FAILURE, payload: err });
    });
};

export const LOAD_APP = {
  START: "LOAD_APP_START",
  SUCCESS: "LOAD_APP_SUCCESS",
  FAILURE: "LOAD_APP_FAILURE"
};
export const loadApp = () => dispatch => {
  dispatch({ type: LOAD_APP.START });
  return axiosWithAuth()
    .get(`${BACKEND_URL}/users/me`)
    .then(res => {
      console.log(res.data, "return user");
      dispatch({ type: LOAD_APP.SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOAD_APP.FAILURE });
    });
};

export const FETCH_SELF_PROJECTS = {
  START: "FETCH_SELF_START",
  SUCCESS: "FETCH_SELF_SUCCESS",
  FAILURE: "FETCH_SELF_FAILURE"
};
export const fetchSelfProjects = () => dispatch => {
  dispatch({ type: FETCH_SELF_PROJECTS.START });
  return axiosWithAuth()
    .get(`${BACKEND_URL}/projects/dev`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SELF_PROJECTS.SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SELF_PROJECTS.FAILURE });
    });
};

export const FETCH_ALL_PROJECTS = {
  START: "FETCH_ALL_START",
  SUCCESS: "FETCH_ALL_SUCCESS",
  FAILURE: "FETCH_ALL_FAILURE"
};
export const fetchAllProjects = () => dispatch => {
  dispatch({ type: FETCH_ALL_PROJECTS.START });
  return axiosWithAuth()
    .get(`${BACKEND_URL}/projects/all`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_ALL_PROJECTS.SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ALL_PROJECTS.FAILURE });
    });
};

export const SAVE_PROJECT = {
  START: "SAVE_PROJECT_START",
  SUCCESS: "SAVE_PROJECT_SUCCESS",
  FAILURE: "SAVE_PROJECT_FAILURE"
};

export const saveProject = id => dispatch => {
  dispatch({ type: SAVE_PROJECT.START });
  return axiosWithAuth()
    .put(`${BACKEND_URL}/projects/dev/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: SAVE_PROJECT.SUCCESS });
    })
    .catch(err => {
      console.log(err.status);
      dispatch({ type: SAVE_PROJECT.FAILURE });
    });
};

export const GET_OWNER = {
  START: "GET_OWNER_START",
  SUCCESS: "GET_OWNER_SUCCESS",
  FAILURE: "GET_OWNER_FAILURE"
};

export const getOwner = id => dispatch => {
  dispatch({ type: GET_OWNER.START });
  return axiosWithAuth()
    .get(`${BACKEND_URL}/users/entrepreneur/${id}`)
    .then(res => {
      dispatch({ type: GET_OWNER.SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_OWNER.FAILURE, payload: err });
    });
};

export const SUBMIT_PROPOSAL = {
  START: "SUBMIT_PROPOSAL_START",
  SUCCESS: "SUBMIT_PROPOSAL_SUCCESS",
  FAILURE: "SUBMIT_PROPOSAL_FAILURE"
};
export const submitProposal = (id, object) => dispatch => {
  // console.log(object, `project with id: ${id}`);
  dispatch({ type: SUBMIT_PROPOSAL.START });
  return axiosWithAuth()
    .post(`${BACKEND_URL}/projects/proposal/${id}`, object)
    .then(res => {
      // console.log(res);
      dispatch({ type: SUBMIT_PROPOSAL.SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SUBMIT_PROPOSAL.FAILURE });
    });
};
export const LOGOUT = {
  START: "LOGOUT_START",
  SUCCESS: "LOGOUT_SUCCESS",
  FAILURE: "LOGOUT_FAILURE"
};
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT.START });
  return axiosWithAuth()
    .post(`${BACKEND_URL}/users/logout`)
    .then(res => {
      dispatch({ type: LOGOUT.SUCCESS });
    })
    .catch(err=>console.log(err));
};
