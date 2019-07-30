import {
    EXAMPLE_START,
    EXAMPLE_SUCCESS,
    EXAMPLE_FAILURE,  
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
      
  
      default:
        return state;
    }
  };
  