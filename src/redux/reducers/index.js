//import actions
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOAD_APP
} from "../actions";

const initialState = {
  user: null,
  isDeveloper: null,
  loggingIn: false,
  isSigningup: false,
  loadingApp: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.payload.user,
        isDeveloper: action.payload.user.isDeveloper
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false
      };
    case SIGNUP_START:
      return {
        ...state,
        isSigningup: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningup: false,
        user: action.payload.user
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningup: false
      };
    case LOAD_APP.START:  
      return {
        loadingApp: true
      };
    case LOAD_APP.SUCCESS: 
      return {
        user: action.payload
      };
    
    case LOAD_APP.FAILURE: 
      return {
        error: "please log in again"
      };
    
    default:
      return state;
  }
};

export default rootReducer;
