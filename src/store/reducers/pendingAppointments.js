import { LIST_PENDING_APPOINTMENTS, REMOVE_PENDING_APPOINTMENT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_PENDING_APPOINTMENTS:
      return action.appointments;
    case REMOVE_PENDING_APPOINTMENT:
      return state.filter((appointment) => appointment.id !== action.id);
    default:
      return state;
  }
};
