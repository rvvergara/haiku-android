import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchPendingAppointments } from '../../../store/thunks/bookingSlot';
import { listPendingAppointments } from '../../../store/actions/pendingAppointments';
import ScheduleInfo from './ScheduleInfo';

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#9aa7b2',
    shadowOffset: { width: 10, height: 2 },
    elevation: 5,
  },
  rightIcon: {
    color: '#9aa7b2',
    fontSize: 30,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#20385a',
  },
});

const PendingList = () => {
  const currentUserData = useSelector((state) => state.currentUser.data);

  const { role } = currentUserData;

  const appointee = role === 'PATIENT' ? 'practitioner' : 'patient';

  const profile = currentUserData.patient || currentUserData.practitioner;

  const dispatch = useDispatch();

  const pendingAppointments = useSelector((state) => state.pendingAppointments);

  const prefix = appointee === 'practitioner' ? 'Dr.' : '';

  const fullName = (firstName, lastName) => `${prefix} ${firstName} ${lastName}`;

  useEffect(() => {
    dispatch(fetchPendingAppointments(profile, role));
  }, []);

  useEffect(() => () => dispatch(listPendingAppointments([])), []);

  return (
    <View>
      {
        pendingAppointments.map((appointment) => (
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
          />
        ))
      }
    </View>
  );
};

export default PendingList;
