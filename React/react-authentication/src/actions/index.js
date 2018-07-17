import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types.js';

/**
 * Sign Up User
 */
export const signupUser = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    
    // Redirect To Feature Page
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email or Password is wrong'
    })
  }
};

/**
 * Sign In User
 */
export const signinUser = ({ email, password }) => {
  // Post Sign In
  const request = '';
  const type = '';

  // Pass to Reducer
  return {
    type: type,
    payload: request
  };
};

/**
 * Sign Out User
 */
export const signoutUser = () => {
  // Post Sign Out
  const request = '';
  const type = '';
  // Pass to Reducer
  return {
    type: type,
    payload: request
  };
};
