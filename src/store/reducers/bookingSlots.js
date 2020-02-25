import { LIST_SLOTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_SLOTS:
      return action.bookingSlots;
    default:
      return state;
  }
};
