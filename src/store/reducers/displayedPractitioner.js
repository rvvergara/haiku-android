import { SET_PRACTITIONER } from '../actions/types';

export default (state = null, action) => {
  if (action.type === SET_PRACTITIONER) {
    return action.practitioner;
  }
  return state;
};
