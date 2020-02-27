import React from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import SlotSelection from '../components/Practitioner/BookingSlots/SlotSelection';
import Spacer from '../components/Common/Spacer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

const BookingSelectionScreen = () => (
  <ScrollView style={styles.container}>
    <Spacer>
      <SlotSelection />
    </Spacer>
  </ScrollView>
);

export default BookingSelectionScreen;
