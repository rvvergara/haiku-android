import { BOOKING_SLOT } from '../actions/types';

export default (state = false, action) => {
  if (action.type === BOOKING_SLOT) {
    return action.isBooking;
  }
  return state;
};
