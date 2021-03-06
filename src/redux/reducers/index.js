//import actions
import {
  LOGIN,
  SIGNUP,
  LOAD_APP,
  FETCH_SELF_PROJECTS,
  FETCH_ALL_PROJECTS,
  FETCH_ENT_PROJECTS,
  SAVE_PROJECT,
  GET_OWNER,
  SUBMIT_PROPOSAL,
  SUBMIT_PROJECT,
  LOGOUT,
  SET_DEVELOPER
} from "../actions";

const initialState = {
  user: {
    firstName: "undefined"
  },
  isDeveloper: null,
  loggingIn: false,
  isSigningup: false,
  loadingApp: false,
  devProjectList: [],
  entProjectList: [],
  searchProjectList: []
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

    case SET_DEVELOPER.TRUE:
      return {
        ...state,
        isDeveloper: true
      };

    case SET_DEVELOPER.FALSE:
      return {
        ...state,
        isDeveloper: false
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
        error: "Please log in again",
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
        devProjectList: action.payload
      };
    case FETCH_ALL_PROJECTS.START:
      return {
        ...state
      };
    case FETCH_ALL_PROJECTS.SUCCESS:
      return {
        ...state,
        searchProjectList: action.payload.filter(
          project => project.status === "searching"
        )
      };

    case FETCH_ENT_PROJECTS.START:
      return {
        ...state
      };

    case FETCH_ENT_PROJECTS.SUCCESS:
      return {
        ...state,
        entProjectList: action.payload
      };

    case FETCH_ENT_PROJECTS.FAILURE:
      return {
        ...state
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
        ...state,
        fetchingOwner: true
      };

    case GET_OWNER.SUCCESS:
      return {
        ...state,
        projectOwner: action.payload,
        fetchingOwner: false
      };

    case GET_OWNER.FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingOwner: false
      };
    case SUBMIT_PROPOSAL.START:
      return {
        ...state
      };
    case SUBMIT_PROPOSAL.SUCCESS:
      return {
        ...state
      };
    case SUBMIT_PROPOSAL.FAILURE:
      return {
        ...state,
        error: "error fetching proposals"
      };
    case LOGOUT.START:
      return {
        ...state
      };

    case LOGOUT.SUCCESS:
      return {
        user: null
      };
    case LOGOUT.FAILURE:
      return {
        ...state
      };

    case SUBMIT_PROJECT.START:
      return {
        ...state
      };

    case SUBMIT_PROJECT.SUCCESS:
      return {
        ...state
      };

    case SUBMIT_PROJECT.FAILURE:
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
