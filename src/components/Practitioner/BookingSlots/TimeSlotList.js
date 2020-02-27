import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Spacer from '../../Common/Spacer';
import { slotSelectionStyles } from '../../../style-objects/bookingSlotsStyles';

const styles = StyleSheet.create(slotSelectionStyles);

const TimeSlotList = ({ shownSlots, handleSlotPress }) => (shownSlots.map((slot) => (
  <Spacer key={slot.id}>
    <ListItem
      title={slot.time}
      titleStyle={styles.title}
      onPress={() => handleSlotPress(slot)}
      underlayColor="#fff"
      containerStyle={styles.buttonStyle}
    />
  </Spacer>
))
);

export default TimeSlotList;
