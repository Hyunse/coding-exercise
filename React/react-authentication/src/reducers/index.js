import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

export default rootReducer;