import { LIST_PENDING_APPOINTMENTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_PENDING_APPOINTMENTS:
      return action.appointments;
    default:
      return state;
  }
};
