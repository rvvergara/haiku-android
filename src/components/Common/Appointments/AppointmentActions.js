import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Button } from 'react-native-elements';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 50,
    width: '80%',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
  },
  confirmButton: {
    backgroundColor: '#5271ff',
    borderRadius: 5,
    marginVertical: 5,
  },
  rejectButton: {
    backgroundColor: 'maroon',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});

const AppointmentActions = ({ appointment }) => {
  const dispatch = useDispatch();

  const {
    patient, date, startTime, endTime,
    remarks,
  } = appointment;

  const age = moment().diff(moment(patient.dateOfBirth), 'years');

  const fullName = `${patient.firstName} ${patient.lastName}`;

  const time = `${startTime} to ${endTime}`;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          source={{uri: appointment.patient.image }}
          size="xlarge"
          rounded
        />
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Name:
            {' '}
          </Text>
          <Text style={styles.info}>
            { fullName }
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Age:
            {' '}
          </Text>
          <Text style={styles.info}>
            { age }
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Date:
            {' '}
          </Text>
          <Text style={styles.info}>
            { date }
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Time:
            {' '}
          </Text>
          <Text style={styles.info}>
            { time }
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Remarks:
          </Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.info}>
            { remarks }
          </Text>
        </View>
      </View>
      <View>
        <Button
          title="Confirm"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.confirmButton}
          onPress={() => console.log('CONFIRMING')}
        />
        <Button
          title="Reject"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.rejectButton}
          onPress={() => console.log('REJECTING')}
        />
      </View>
    </View>
  );
};

AppointmentActions.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired,
};

export default AppointmentActions;
