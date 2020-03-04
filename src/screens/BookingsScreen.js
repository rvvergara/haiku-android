import React from 'react';
import {
  Text, View,
} from 'react-native';
import AppointmentList from '../components/Common/Appointments/AppointmentList';

const BookingsScreen = () => (
  <View>
    <View>
      <Text>Confirmed Appointments</Text>
      <AppointmentList appointmentType="CONFIRMED" />
    </View>
    <View>
      <Text>Pending Appointments</Text>
      <AppointmentList appointmentType="PENDING" />
    </View>
  </View>
);

export default BookingsScreen;
