import { GET_USERINFO } from "../actions";
const initialState = {
  currentUser: null
};
export default (userInformation = initialState, action) => {
  switch (action.type) {
    case GET_USERINFO.SUCCESS:
      return {
        currentUser: action.payload
      };
    // case GET_USERINFO.UNAVAILABLE:
    //   return {
    //     currentUser: null
    //   };

    default:
      return userInformation;
  }
};
