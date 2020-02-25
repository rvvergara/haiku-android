import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Text, View} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'react-native-elements';
import { fetchPractitionerBookingSlots } from '../store/thunks/bookingSlot';
import { listSlots } from '../store/actions/bookingSlot';
import SlotSelection from '../components/Practitioner/BookingSlots/SlotSelection';

const BookingSelectionScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const practitioner = useSelector((state) => state.displayedPractitioner);

  useEffect(() => {
    dispatch(fetchPractitionerBookingSlots(practitioner.id, null, 'PENDING'));
  }, []);

  useEffect(() => () => dispatch(listSlots([])), []);

  return (
    <View>
      <NavigationEvents
        onWillBlur={() => dispatch(listSlots([]))}
      />
      <Text>Select Time Slot Screen</Text>
      <SlotSelection />
    </View>
  );
};

export default BookingSelectionScreen;
