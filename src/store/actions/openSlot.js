import { DISPLAY_SLOT, LIST_SLOTS } from './types';

export const displaySlot = (openSlot) => ({
  type: DISPLAY_SLOT,
  openSlot,
});

export const listSlots = (openSlots) => ({
  type: LIST_SLOTS,
  openSlots,
});
