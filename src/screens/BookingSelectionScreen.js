import React from 'react';
import {StyleSheet, View } from 'react-native';
import SlotSelection from '../components/Practitioner/BookingSlots/SlotSelection';
import Spacer from '../components/Common/Spacer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
});

const BookingSelectionScreen = () => (
  <View style={styles.container}>
    <Spacer>
      <SlotSelection />
    </Spacer>
  </View>
);

export default BookingSelectionScreen;
