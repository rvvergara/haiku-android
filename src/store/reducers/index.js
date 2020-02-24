import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './error';
import practitioners from './practitioners';

export default combineReducers({
  currentUser,
  errors,
  practitioners,
});
