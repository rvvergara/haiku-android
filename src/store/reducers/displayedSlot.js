import { DISPLAY_SLOT } from '../actions/types';

export default (state = null, action) => {
  if (action.type === DISPLAY_SLOT) {
    return action.openSlot;
  }
  return state;
};
