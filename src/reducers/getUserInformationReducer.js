import {
	GET_USERINFO,
	} from '../actions';

export default (userinformation = [], action) => {
	switch(action.type){
		
		case GET_USERINFO.SUCCESS:
			return{
				currentuser: action.payload
			}
	}
}
