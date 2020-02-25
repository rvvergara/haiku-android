import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';

export default () => {
  const bookingSlots = useSelector((state) => state.bookingSlots);

  const [dateShown, setDateShown] = useState(bookingSlots.length > 0
    ? new Date(bookingSlots[0].date) : new Date());

  const [mode, setMode] = useState('date');

  const [show, setShow] = useState(false);

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
    mode,
    show,
    onDateChange,
    showDatePicker,
    dateShown,
  };
};
