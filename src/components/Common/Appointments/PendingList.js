import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { fetchPendingAppointments } from '../../../store/thunks/bookingSlot';
import { listPendingAppointments } from '../../../store/actions/pendingAppointments';

const PendingList = () => {
  const currentUserData = useSelector((state) => state.currentUser.data);

  const { role } = currentUserData;

  const profile = currentUserData.patient || currentUserData.practitioner;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPendingAppointments(profile, role));
  }, []);

  useEffect(() => () => dispatch(listPendingAppointments([])), []);

  return (
    <View>
      <Text>Pending List Here</Text>
    </View>
  );
};

export default PendingList;
