import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Common/Header';

const styles = StyleSheet.create({});

const BookingSelectionScreen = ({ navigation }) => (
  <View>
    <Text>Select Time Slot Screen</Text>
    <Button
      title="Go To Booking Form"
      onPress={() => navigation.navigate('BookingSubmission')}
    />
  </View>
);

export default BookingSelectionScreen;
