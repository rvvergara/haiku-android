import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import TextInput from '../../Common/TextInput';
import Spacer from '../../Common/Spacer';
import { displaySlot } from '../../../store/actions/openSlot';
import { bookSlot } from '../../../store/thunks/bookingSlot';
import { slotSubmissionStyles } from '../../../style-objects/bookingSlotsStyles';

const styles = StyleSheet.create(slotSubmissionStyles);

const SlotSubmission = () => {
  const [remarks, setRemarks] = useState('');

  const dispatch = useDispatch();

  const slot = useSelector((state) => state.displayedSlot);

  const patient = useSelector((state) => state.currentUser.data.patient);

  useEffect(() => () => dispatch(displaySlot(null)), []);

  const handleSubmit = (bookingSlot) => {
    const params = {
      patientId: patient.id,
      remarks,
    };
    dispatch(bookSlot(params, bookingSlot.id));
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <View style={styles.infoLabel}>
          <Text style={styles.infoTitle}>
            Date:
            {' '}
          </Text>
          <Text style={styles.infoDetail}>
            {slot.date}
          </Text>
        </View>
        <View style={styles.infoLabel}>
          <Text style={styles.infoLabel}>
            Time:
            {' '}
          </Text>
          <Text style={styles.infoDetail}>
            {slot.time}
          </Text>
        </View>
      </Spacer>
      <View style={styles.remarksContainer}>
        <TextInput
          label="Remarks"
          value={remarks}
          onChangeText={setRemarks}
          placeholder={null}
          multiline
          numberOfLines={5}
        />
      </View>
      <Spacer>
        <Button
          title="Confirm"
          onPress={() => handleSubmit(slot)}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
      </Spacer>
    </View>
  );
};

export default SlotSubmission;
