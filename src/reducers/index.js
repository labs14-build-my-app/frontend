import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import findMyProjectsReducer from "./findMyProjectsReducer";
import getUserInformationReducer from "./getUserInformationReducer";

const rootReducer = combineReducers({
  loginInfo: loginReducer, // this is for logging in
  myProjects: findMyProjectsReducer, // gets currently authenticated developers projects
  getUserInfo: getUserInformationReducer
  // stores the user information of currently authenticated user (currently state but should be local storage)
});

export default rootReducer;
