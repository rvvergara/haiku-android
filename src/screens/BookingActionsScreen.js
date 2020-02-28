import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Spacer from '../components/Common/Spacer';

const BookingActionsScreen = ({ navigation }) => {
  const appointment = navigation.getParam('appointment');

  return (
    <View>
      <Spacer>
        <Text>Confirm or Reject Booking here</Text>
        <Text>{appointment.patient.firstName}</Text>
      </Spacer>
    </View>
  );
};

BookingActionsScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default BookingActionsScreen;
