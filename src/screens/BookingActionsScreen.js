import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import AppointmentActions from '../components/Common/Appointments/AppointmentActions';
import Spacer from '../components/Common/Spacer';

const BookingActionsScreen = ({ navigation }) => {
  const appointment = navigation.getParam('appointment');

  return (
    <ScrollView style={{flex: 1}}>
      <Spacer>
        <AppointmentActions appointment={appointment} />
      </Spacer>
    </ScrollView>
  );
};

BookingActionsScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default BookingActionsScreen;
