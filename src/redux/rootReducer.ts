import { combineReducers } from 'redux';
// slices
import authenticationReducer from './slices/authentication';
import userReducer from './slices/user';
import hotelsReducer from './slices/hotels';
import flightsReducer from './slices/flights';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  hotels: hotelsReducer,
  flights: flightsReducer,
});

export default rootReducer;
