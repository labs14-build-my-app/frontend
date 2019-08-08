import {
	FIND_PROJECTS,
	FIND_AVAILABLE_PROJECTS,
	} from '../actions'

export default (myprojectsinformation = {}, action) => {

	switch(action.type){
		case FIND_PROJECTS.SUCCESS: 
			return{
				projectList: action.payload
			};
			
		case FIND_AVAILABLE_PROJECTS.SUCCESS:
			return{
				projectList: action.payload
			}
	}
}
