import React from 'react';
import {Text, View } from 'react-native';
import SlotSelection from '../components/Practitioner/BookingSlots/SlotSelection';
import Spacer from '../components/Common/Spacer';

const BookingSelectionScreen = () => (
  <View>
    <Spacer>
      <Text>Select Time Slot Screen</Text>
      <SlotSelection />
    </Spacer>
  </View>
);

export default BookingSelectionScreen;
