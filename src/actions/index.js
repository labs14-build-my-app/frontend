
import axios from 'axios';
// import { axiosWithAuth } from '../components/auth/axiosWithAuth';

export const EXAMPLE_START = 'EXAMPLE_START';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

export const example = parameter => dispatch => {
  
  dispatch({ type: EXAMPLE_START });
  return axios
    .post('https:/url/auth/EXAMPLE', parameter)

    .then(res => {
     //do stuff

      dispatch({ type: EXAMPLE_SUCCESS, payload: res.data.stuffn });
    })
    .catch(err =>
        //handle bad stuff
      dispatch({ type: EXAMPLE_FAILURE, payload: err.response.data.message })
    );
};