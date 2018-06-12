import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import admin from './admin';

export default combineReducers({
  users,
  auth,
  admin,
});
