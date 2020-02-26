import { DISPLAY_SLOT, LIST_SLOTS } from './types';

export const displaySlot = (bookingSlot) => ({
  type: DISPLAY_SLOT,
  bookingSlot,
});

export const listSlots = (bookingSlots) => ({
  type: LIST_SLOTS,
  bookingSlots,
});
