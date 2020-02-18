import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './error';

export default combineReducers({
  currentUser,
  errors,
});
