import {
    EXAMPLE_START,
    EXAMPLE_SUCCESS,
    EXAMPLE_FAILURE, 
    LOGIN_START,
    LOGIN_SUCCESS, 
    LOGIN_FAILURE 
  } from '../actions';

const initialState = {
    isLoggingIn: false,
    isEXAMPLEing: false,
    token: localStorage.getItem('token'),
    watchList: [],
    error: '',
    selectedStock: null
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case EXAMPLE_START:
        return {
          ...state,
          isEXAMPLEing: true
        };
      case EXAMPLE_SUCCESS:
        return {
          ...state,
          isEXAMPLEing: false
        };
      case EXAMPLE_FAILURE:
        return {
          ...state,
          isEXAMPLEing: false
        };
      
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: `*${action.payload}`
      };
  
      default:
        return state;
    }
  };
  