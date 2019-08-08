import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import findMyProjectsReducer from './findMyProjectsReducer';
import getUserInformationReducer from './getUserInformationReducer';
  
const rootReducer = combineReducers({
  logininformation: loginReducer, // this is for logging in
  myprojectsinformation: findMyProjectsReducer, // gets currently authenticated developers projects
  userinformation: getUserInformationReducer, // stores the user information of currently authenticated user (currently state but should be local storage)
});

export default rootReducer;
