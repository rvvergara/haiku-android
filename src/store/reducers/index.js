import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './error';
import practitioners from './practitioners';
import displayedPractitioner from './displayedPractitioner';
import displayedSlot from './displayedSlot';
import openSlots from './openSlots';
import appointments from './appointments';
import pendingAppointments from './pendingAppointments';

export default combineReducers({
  appointments,
  currentUser,
  displayedPractitioner,
  displayedSlot,
  errors,
  openSlots,
  pendingAppointments,
  practitioners,
});
