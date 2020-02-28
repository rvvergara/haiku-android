import { LIST_PENDING_APPOINTMENTS, REMOVE_PENDING_APPOINTMENT } from './types';

export const listPendingAppointments = (appointments) => ({
  type: LIST_PENDING_APPOINTMENTS,
  appointments,
});

export const removePendingAppointment = (id) => ({
  type: REMOVE_PENDING_APPOINTMENT,
  id,
});
