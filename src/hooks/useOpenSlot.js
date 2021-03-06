import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Platform } from 'react-native';
import moment from 'moment';
import { displaySlot, listSlots } from '../store/actions/openSlot';
import { fetchPractitionerOpenSlots } from '../store/thunks/bookingSlot';

export default (navigation) => {
  const openSlots = useSelector((state) => state.openSlots);

  const dispatch = useDispatch();

  const practitioner = useSelector((state) => state.displayedPractitioner);

  useEffect(() => {
    dispatch(fetchPractitionerOpenSlots(practitioner.id, null));
  }, []);

  useEffect(() => () => dispatch(listSlots([])), []);

  const [dateShown, setDateShown] = useState(openSlots.length > 0
    ? new Date(openSlots[0].date) : new Date());

  const [mode, setMode] = useState('date');

  const [show, setShow] = useState(false);

  const chosenSlots = openSlots.filter((slot) => slot.date === moment(dateShown).format('MMMM DD, YYYY'));

  const mappedTimeSlots = chosenSlots.map((slot) => ({id: slot.id, date: slot.date, time: `${slot.startTime} to ${slot.endTime}`}));

  const sortingFn = (a, b) => (a.time < b.time ? -1 : 1);

  const amSlots = mappedTimeSlots.filter((slot) => slot.time.includes('AM')).sort(sortingFn);

  const pmSlots = mappedTimeSlots.filter((slot) => slot.time.includes('PM') && !slot.time.includes('AM')).sort(sortingFn);

  const shownSlots = [...amSlots, ...pmSlots];

  const handleSlotPress = (slot) => {
    dispatch(displaySlot(slot));
    navigation.navigate('BookingSubmission', { slot });
  };

  const onDateChange = (e, selectedDate) => {
    const currentDate = selectedDate || dateShown;
    setShow(Platform.OS === 'ios');
    setDateShown(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  return {
    shownSlots,
    mode,
    show,
    handleSlotPress,
    onDateChange,
    showDatePicker,
    dateShown,
  };
};
