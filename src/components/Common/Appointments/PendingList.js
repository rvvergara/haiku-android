import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import moment from 'moment';
import { fetchPendingAppointments } from '../../../store/thunks/bookingSlot';
import { listPendingAppointments } from '../../../store/actions/pendingAppointments';

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    borderRadius: 10,
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
            leftAvatar={{source: { uri: appointment[appointee].image }}}
            title={`${appointment[appointee].firstName} ${appointment[appointee].lastName}`}
            subtitle={moment(appointment.date).format('MMMM DD, YYYY')}
            bottomDivider
            chevron
          />
        ))
      }
    </View>
  );
};

export default PendingList;
