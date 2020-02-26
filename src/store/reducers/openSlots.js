import { LIST_SLOTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_SLOTS:
      return action.openSlots;
    default:
      return state;
  }
};
