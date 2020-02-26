import moment from 'moment';

export const localizeBookingSlot = (booking_slot, offset) => {
  const { date, startTime, endTime } = booking_slot;
  const localizedDate = moment(date).format('MMMM DD, YYYY');
  const localizedStartTime = moment.utc(startTime).add(offset, 'hours').format('hh:mm A');
  const localizedEndTime = moment.utc(endTime).add(offset, 'hours').format('hh:mm A');
  return {
    ...booking_slot,
    date: localizedDate,
    startTime: localizedStartTime,
    endTime: localizedEndTime,
  };
};
