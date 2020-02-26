import { LIST_PENDING_APPOINTMENTS, ADD_PENDING_APPOINTMENT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_PENDING_APPOINTMENTS:
      return action.appointments;
    case ADD_PENDING_APPOINTMENT:
      return [...state, action.appointment];
    default:
      return state;
  }
};
