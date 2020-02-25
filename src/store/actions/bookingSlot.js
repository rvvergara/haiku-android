import { DISPLAY_SLOT, BOOKING_SLOT, LIST_SLOTS } from './types';

export const toggleSlotBooking = (isBooking) => ({
  type: BOOKING_SLOT,
  isBooking,
});

export const displaySlot = (bookingSlot) => ({
  type: DISPLAY_SLOT,
  bookingSlot,
});

export const listSlots = (bookingSlots) => ({
  type: LIST_SLOTS,
  bookingSlots,
});
