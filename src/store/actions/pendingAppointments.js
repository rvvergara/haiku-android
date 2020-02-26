import { LIST_PENDING_APPOINTMENTS, ADD_PENDING_APPOINTMENT} from './types';

export const listPendingAppointments = (appointments) => ({
  type: LIST_PENDING_APPOINTMENTS,
  appointments,
});

export const addPendingAppointment = (appointment) => ({
  type: ADD_PENDING_APPOINTMENT,
  appointment,
});
