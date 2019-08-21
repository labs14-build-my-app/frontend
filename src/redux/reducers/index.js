//import actions
import {
  LOGIN,
  SIGNUP,
  LOAD_APP,
  FETCH_SELF_PROJECTS,
  FETCH_ALL_PROJECTS,
  SAVE_PROJECT,
  GET_OWNER
} from "../actions";

const initialState = {
  user: null,
  loggingIn: false,
  isSigningup: false,
  loadingApp: false,
  projectList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.START:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.payload.user,
        isDeveloper: action.payload.user.isDeveloper
      };

    case LOGIN.FAILED:
      return {
        ...state,
        loggingIn: false
      };

    case SIGNUP.START:
      return {
        ...state,
        isSigningup: true
      };

    case SIGNUP.SUCCESS:
      return {
        ...state,
        isSigningup: false,
        user: action.payload.user
      };

    case SIGNUP.FAILURE:
      return {
        ...state,
        isSigningup: false
      };

    case LOAD_APP.START:
      return {
        ...state,
        loadingApp: true
      };
    case LOAD_APP.SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingApp: false
      };

    case LOAD_APP.FAILURE:
      return {
        ...state,
        error: "please log in again",
        loadingApp: false
      };
    case "LOAD_INITIAL_PROJECTS":
      return {
        ...state,
        projectList: state.projectList
      };
    case FETCH_SELF_PROJECTS.START:
      return {
        ...state
      };
    case FETCH_SELF_PROJECTS.SUCCESS:
      return {
        ...state,
        projectList: action.payload,
        projectsAlreadyCalled: true
      };
    case FETCH_ALL_PROJECTS.START:
      return {
        ...state
      };
    case FETCH_ALL_PROJECTS.SUCCESS:
      return {
        ...state,
        projectList: action.payload.filter(
          project => project.status === "searching"
        ),
        allProjectsCalled: true
      };

    case SAVE_PROJECT.START:
      return {
        ...state
      };

    case SAVE_PROJECT.SUCCESS:
      return {
        ...state
      };

    case SAVE_PROJECT.FAILURE:
      return {
        ...state
      };

    case GET_OWNER.START:
      return {
        ...state
      };

    case GET_OWNER.SUCCESS:
      return {
        ...state,
        projectOwner: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
