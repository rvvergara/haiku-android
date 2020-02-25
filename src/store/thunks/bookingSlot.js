import AsyncStorage from '@react-native-community/async-storage';
import { sendAuthorizedRequest } from '../../utils/api';
import { listSlots } from '../actions/bookingSlot';
import { localizeBookingSlot } from '../../utils/localizeTime';

export const fetchPractitionerBookingSlots = (
  practitionerId,
  patientId,
  status,
) => async (dispatch) => {
  const path = `v1/practitioners/${practitionerId}/booking-slots?status=${
    status ? status.toUpperCase() : ''
  }&include=patient&patientId=${patientId || ''}`;

  try {
    const token = await AsyncStorage.getItem('token');
    const res = await sendAuthorizedRequest('get', path, token);
    const { booking_slots } = res.data;
    const slotsLocalized = booking_slots.map((slot) => localizeBookingSlot(slot, 8));
    dispatch(listSlots(slotsLocalized));
  } catch (err) {
    console.log('ERROR FETCHING SLOTS', err.response);
  }
};
