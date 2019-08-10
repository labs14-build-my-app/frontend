import { combineReducers } from "redux";

//import actions
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
  user: {},
  isDeveloper: null,
  loggingIn: false
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
        loggingIn: false
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false
      };
    default:
      return state;
  }
};

export default rootReducer;
