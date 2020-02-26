import { LIST_APPOINTMENTS, ADD_APPOINTMENT } from './types';

export const listAppointments = (appointments) => ({
  type: LIST_APPOINTMENTS,
  appointments,
});

export const addAppointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  appointment,
});
