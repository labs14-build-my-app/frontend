import {
	LOGIN_START,
    LOGIN_SUCCESS, 
	LOGIN_FAILURE,
	} from '../actions';

export default (logininformation = {}, action) => {
	switch(action.type){

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
				return logininformation;
	}
}
