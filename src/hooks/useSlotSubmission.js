import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displaySlot } from '../store/actions/openSlot';
import { bookSlot } from '../store/thunks/bookingSlot';

export default () => {
  const [remarks, setRemarks] = useState('');

  const dispatch = useDispatch();

  const slot = useSelector((state) => state.displayedSlot);

  const patient = useSelector((state) => state.currentUser.data.patient);

  useEffect(() => () => dispatch(displaySlot(null)), []);

  const handleSubmit = (bookingSlot) => {
    const params = {
      patientId: patient.id,
      remarks,
    };
    dispatch(bookSlot(params, bookingSlot.id));
  };

  return {
    remarks,
    setRemarks,
    slot,
    handleSubmit,
  };
};
