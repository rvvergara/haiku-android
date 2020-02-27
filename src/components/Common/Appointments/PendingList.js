import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { fetchPendingAppointments } from '../../../store/thunks/bookingSlot';
import { listPendingAppointments } from '../../../store/actions/pendingAppointments';

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    borderRadius: 10,
  },
  rightIcon: {
    color: '#9aa7b2',
    fontSize: 30,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const PendingList = () => {
  const currentUserData = useSelector((state) => state.currentUser.data);

  const { role } = currentUserData;

  const appointee = role === 'PATIENT' ? 'practitioner' : 'patient';

  const profile = currentUserData.patient || currentUserData.practitioner;

  const dispatch = useDispatch();

  const pendingAppointments = useSelector((state) => state.pendingAppointments);

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
            title={`${appointment[appointee].firstName} ${appointment[appointee].lastName}`}
            subtitle={(
              <View>
                <Text>
                  Date:
                  {' '}
                  {moment(appointment.date).format('MMMM DD, YYYY')}
                </Text>
                <Text>{`From ${appointment.startTime} to ${appointment.endTime}`}</Text>
              </View>
            )}
            rightIcon={<Icon name="chevron-right-circle" style={styles.rightIcon} />}
            bottomDivider
            titleStyle={styles.itemTitle}
          />
        ))
      }
    </View>
  );
};

export default PendingList;
