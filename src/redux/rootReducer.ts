import { combineReducers } from 'redux';
// slices
import authenticationReducer from './slices/authentication';
import userReducer from './slices/user';
import permissionReducer from './slices/permissions';
import rolesReducer from './slices/roles';
import candidateReducer from './slices/hr/candidate/candidate';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  permissions: permissionReducer,
  roles: rolesReducer,
  user: userReducer,
  candidate: candidateReducer,
});

export default rootReducer;
