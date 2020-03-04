import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScheduleInfo from './ScheduleInfo';
import { listStyles } from '../../../style-objects/appointmentStyles';
import useAppointment from '../../../hooks/useAppointment';
import { navigate } from '../../../utils/navigationRef';

const styles = StyleSheet.create(listStyles);

const AppointmentList = ({ appointmentType }) => {
  const {
    appointee, shownAppointments, fullName, currentUserData,
  } = useAppointment(appointmentType);

  if (Object.keys(currentUserData).length === 0) {
    return null;
  }

  return (
    <View>
      {
        shownAppointments.map((appointment) => (
          <ListItem
            key={appointment.id}
            containerStyle={styles.listContainer}
            leftAvatar={{
              source: { uri: appointment[appointee].image },
              size: 'large',
            }}
            title={
              fullName(appointment[appointee].firstName, appointment[appointee].lastName)
            }
            subtitle={<ScheduleInfo appointment={appointment} />}
            rightIcon={(
              <Icon
                name="chevron-right-circle"
                style={styles.rightIcon}
              />
            )}
            titleStyle={styles.itemTitle}
            onPress={() => navigate('BookingActions', { appointment })}
            underlayColor="white"
          />
        ))
      }
    </View>
  );
};

AppointmentList.propTypes = {
  appointmentType: PropTypes.string.isRequired,
};

export default AppointmentList;
