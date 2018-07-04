import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather.js';

// Combine Reducers
const rootReducer = combineReducers({
  weather : WeatherReducer
});

export default rootReducer;
