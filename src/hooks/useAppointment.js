import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingAppointments, fetchAllConfirmedAppointments } from '../store/thunks/bookingSlot';
import { listPendingAppointments } from '../store/actions/pendingAppointments';

export default (appointmentType) => {
  const currentUserData = useSelector((state) => state.currentUser.data);

  const { role } = currentUserData;

  const appointee = role === 'PATIENT' ? 'practitioner' : 'patient';

  const profile = currentUserData.patient || currentUserData.practitioner;

  const dispatch = useDispatch();

  const shownAppointments = appointmentType === 'PENDING' ? useSelector((state) => state.pendingAppointments)
    : useSelector((state) => state.appointments);

  const prefix = appointee === 'practitioner' ? 'Dr.' : '';

  const fullName = (firstName, lastName) => `${prefix} ${firstName} ${lastName}`;

  useEffect(() => {
    if (appointmentType === 'PENDING') {
      dispatch(fetchPendingAppointments(profile, role));
    } else {
      dispatch(fetchAllConfirmedAppointments(profile.id, role));
    }
  }, []);

  useEffect(() => () => dispatch(listPendingAppointments([])), []);

  return {
    shownAppointments,
    fullName,
    appointee,
    currentUserData,
  };
};
