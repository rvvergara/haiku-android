import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
  },
  info: {
    fontSize: 16,
    alignSelf: 'center',
  },
});

const ScheduleInfo = ({ appointment }) => {
  const meetingTime = `${appointment.startTime} to ${appointment.endTime}`;
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>
          Date:
          {' '}
        </Text>
        <Text style={styles.info}>
          {moment(appointment.date).format('MMMM DD, YYYY')}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>From: </Text>
        <Text style={styles.info}>
          {meetingTime}
        </Text>
      </View>
    </View>
  );
};

ScheduleInfo.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired,
};

export default ScheduleInfo;
