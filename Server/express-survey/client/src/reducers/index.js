import { combineReducers } from 'redux';
import authReducer from './reducer_auth';

export default combineReducers({
  auth: authReducer
});
