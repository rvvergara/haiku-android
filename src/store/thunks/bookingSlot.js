import AsyncStorage from '@react-native-community/async-storage';
import { sendAuthorizedRequest } from '../../utils/api';
import { listSlots } from '../actions/openSlot';
import { listPendingAppointments } from '../actions/pendingAppointments';
import { setErrors } from '../actions/error';
import { localizeBookingSlot } from '../../utils/localizeTime';
import { navigate } from '../../utils/navigationRef';

export const fetchPractitionerOpenSlots = (
  practitionerId,
  patientId,
) => async (dispatch) => {
  const path = `v1/practitioners/${practitionerId}/booking-slots?status=PENDING&include=patient&patientId=${patientId || ''}`;

  try {
    const token = await AsyncStorage.getItem('token');
    const res = await sendAuthorizedRequest('get', path, token);
    const { booking_slots } = res.data;
    const openSlots = booking_slots.filter((slot) => slot.patient === null);
    const slotsLocalized = openSlots.map((slot) => localizeBookingSlot(slot, 8));
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

export const fetchPendingAppointments = (profile, role) => async (dispatch) => {
  const path = role === 'PATIENT'
    ? `v1/patients/${profile.id}/booking-slots?status=PENDING&include=practitioner`
    : `v1/practitioners/${profile.id}/booking-slots?status=PENDING&include=patient`;

  const token = await AsyncStorage.getItem('token');

  try {
    const res = await sendAuthorizedRequest('get', path, token);
    const { booking_slots } = res.data;
    let pendingAppointments = booking_slots;
    if (role === 'PRACTITIONER') {
      pendingAppointments = pendingAppointments.filter((slot) => slot.patient !== null);
    }
    return dispatch(listPendingAppointments(pendingAppointments));
  } catch (err) {
    return err;
  }
};
