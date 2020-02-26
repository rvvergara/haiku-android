import { LIST_PENDING_APPOINTMENTS } from './types';

export const listPendingAppointments = (appointments) => ({
  type: LIST_PENDING_APPOINTMENTS,
  appointments,
});
