import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { fetchPractitionerBookingSlots } from '../store/thunks/bookingSlot';
import { listSlots } from '../store/actions/bookingSlot';
import SlotSelection from '../components/Practitioner/BookingSlots/SlotSelection';
import Spacer from '../components/Common/Spacer';

const BookingSelectionScreen = () => {
  const dispatch = useDispatch();
  const practitioner = useSelector((state) => state.displayedPractitioner);

  useEffect(() => {
    dispatch(fetchPractitionerBookingSlots(practitioner.id, null, 'PENDING'));
  }, []);

  useEffect(() => () => dispatch(listSlots([])), []);

  return (
    <View>
      <Spacer>
        <NavigationEvents
          onWillBlur={() => dispatch(listSlots([]))}
        />
        <Text>Select Time Slot Screen</Text>
        <SlotSelection />
      </Spacer>
    </View>
  );
};

export default BookingSelectionScreen;
