import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingAppointments } from '../store/thunks/bookingSlot';
import { listPendingAppointments } from '../store/actions/pendingAppointments';

export default () => {
  const currentUserData = useSelector((state) => state.currentUser.data);

  const { role } = currentUserData;

  const appointee = role === 'PATIENT' ? 'practitioner' : 'patient';

  const profile = currentUserData.patient || currentUserData.practitioner;

  const dispatch = useDispatch();

  const pendingAppointments = useSelector((state) => state.pendingAppointments);

  const prefix = appointee === 'practitioner' ? 'Dr.' : '';

  const fullName = (firstName, lastName) => `${prefix} ${firstName} ${lastName}`;

  useEffect(() => {
    dispatch(fetchPendingAppointments(profile, role));
  }, []);

  useEffect(() => () => dispatch(listPendingAppointments([])), []);

  return {
    pendingAppointments,
    fullName,
    appointee,
  };
};
