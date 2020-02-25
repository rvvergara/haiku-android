import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './error';
import practitioners from './practitioners';
import displayedPractitioner from './displayedPractitioner';
import isBooking from './isBooking';
import displayedSlot from './displayedSlot';

export default combineReducers({
  currentUser,
  errors,
  practitioners,
  displayedPractitioner,
  isBooking,
  displayedSlot,
});
