import AsyncStorage from '@react-native-community/async-storage';
import { sendAuthorizedRequest } from '../../utils/api';
import { listSlots } from '../actions/bookingSlot';
import { setErrors } from '../actions/error';
import { localizeBookingSlot } from '../../utils/localizeTime';
import { navigate } from '../../utils/navigationRef';

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
    return dispatch(listSlots(slotsLocalized));
  } catch (err) {
    return err;
  }
};

export const bookSlot = (params, slotId) => async (dispatch) => {
  const path = `v1/booking-slots/${slotId}/book`;
  const token = await AsyncStorage.getItem('token');

  try {
    await sendAuthorizedRequest('post', path, token, params);
    navigate('Profile');
  } catch (err) {
    dispatch(setErrors([err.response.data.error]));
  }
};
