import { combineReducers } from 'redux';
// slices
import authenticationReducer from './slices/authentication';
import userReducer from './slices/user';
import memberReducer from './slices/member';
import candidateReducer from './slices/hr/candidate/candidate';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  member: memberReducer,
  user: userReducer,
  candidate: candidateReducer,
});

export default rootReducer;
