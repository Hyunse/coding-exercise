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
    
    // Set Local Storage
    localStorage.setItem('token', response.data.token);

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
export const signinUser = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    
    // Set Local Storage
    localStorage.setItem('token', response.data.token);

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
 * Sign Out User
 */
export const signoutUser = () => {

  localStorage.removeItem('token');
  // Pass to Reducer
  return {
    type: AUTH_USER,
    payload: ''
  };
};
