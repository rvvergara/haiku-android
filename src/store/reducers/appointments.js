import { ADD_APPOINTMENT, LIST_APPOINTMENTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_APPOINTMENTS:
      return action.appointments;
    case ADD_APPOINTMENT:
      return [...state, action.appointment];
    default:
      return state;
  }
};
