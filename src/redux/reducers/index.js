import { combineReducers } from "redux";
//import actions

const initialState = {
  justState: []
}

const rootReducer = (state = initialState, action) =>{
switch(action.type) {
  case "stuff": {
    return {
      ...state, 
      justState: action.payload,
    }
  }
  
    default: 
    return state
}
}

export default rootReducer;
