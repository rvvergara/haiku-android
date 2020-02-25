import { DISPLAY_SLOT, BOOKING_SLOT } from './types';

export const toggleSlotBooking = (isBooking) => ({
  type: BOOKING_SLOT,
  isBooking,
});

export const displaySlot = (bookingSlot) => ({
  type: DISPLAY_SLOT,
  bookingSlot,
});
