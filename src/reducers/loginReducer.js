import {
	LOGIN_START,
    LOGIN_SUCCESS, 
	LOGIN_FAILURE,
	} from '../actions';

export default (logininformation = [], action) => {
	switch(action.type){

		case LOGIN_START:
			return {
			  ...logininformation,
			  isLoggingIn: true
			};

		  case LOGIN_SUCCESS:
			return {
			  ...logininformation,
			  isLoggingIn: false,
			  error: ''
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
}
