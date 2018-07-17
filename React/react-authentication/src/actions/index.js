import axios from 'axios';
import { AUTH_USER } from './types.js';

/**
 * Sign Up User
 */
export const signupUser = (formProps) => (dispatch) => {
  axios.post('http://localhost:3090/signup', formProps);
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
