import { combineReducers } from 'redux';
// slices
import authenticationReducer from './slices/authentication';
import userReducer from './slices/user';
import candidateReducer from './slices/hr/candidate/candidate';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  candidate: candidateReducer,
});

export default rootReducer;
