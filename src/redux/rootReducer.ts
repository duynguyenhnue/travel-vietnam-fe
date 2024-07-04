import { combineReducers } from 'redux';
// slices
import authenticationReducer from './slices/authentication';
import userReducer from './slices/user';
import rolesReducer from './slices/roles';
import memberReducer from './slices/member';
import permissionReducer from './slices/permissions';
import candidateReducer from './slices/hr/candidate/candidate';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  permissions: permissionReducer,
  roles: rolesReducer,
  member: memberReducer,
  user: userReducer,
  candidate: candidateReducer,
});

export default rootReducer;
