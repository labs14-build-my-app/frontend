import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";
const initialState = {
  isLoggingIn: false
};

export default (logininformation = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...logininformation,
        isLoggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...logininformation,
        isLoggingIn: false,
        error: ""
      };

    case LOGIN_FAILURE:
      return {
        ...logininformation,
        isLoggingIn: false,
        error: `*${action.payload}`
      };

    default:
      return logininformation;
  }
};
