import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import TextInput from '../../Common/TextInput';
import Spacer from '../../Common/Spacer';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  remarksContainer: {
    paddingHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: '#5073F1',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  infoLabel: {
    flexDirection: 'row',
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoDetail: {
    fontSize: 18,
  },
});

const SlotSubmission = () => {
  const [remark, setRemark] = useState('');

  const dispatch = useDispatch();

  const slot = useSelector((state) => state.displayedSlot);

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
            {slot.startTime}
            {' '}
            to
            {' '}
            {slot.endTime}
          </Text>
        </View>
      </Spacer>
      <View style={styles.remarksContainer}>
        <TextInput
          label="Remarks"
          value={remark}
          onChangeText={setRemark}
          placeholder={null}
          multiline
          numberOfLines={5}
        />
      </View>
      <Spacer>
        <Button
          title="Confirm"
          onPress={() => console.log('BOOKED', slot.id)}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
      </Spacer>
    </View>
  );
};

export default SlotSubmission;
