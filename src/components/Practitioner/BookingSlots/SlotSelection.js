import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import DateSelector from '../../Common/DateSelector';
import TimeSlotList from './TimeSlotList';
import Spacer from '../../Common/Spacer';
import useOpenSlot from '../../../hooks/useOpenSlot';
import { slotSelectionStyles } from '../../../style-objects/bookingSlotsStyles';

const styles = StyleSheet.create(slotSelectionStyles);

const SlotSelection = ({ navigation }) => {
  const {
    shownSlots,
    mode,
    show,
    handleSlotPress,
    onDateChange,
    showDatePicker,
    dateShown,
  } = useOpenSlot(navigation);

  return (
    <>
      <View style={styles.pickerContainer}>
        <DateSelector
          mode={mode}
          show={show}
          onDateChange={onDateChange}
          showDatePicker={showDatePicker}
          date={dateShown}
          label="Select Date"
        />
      </View>
      <TimeSlotList
        shownSlots={shownSlots}
        handleSlotPress={handleSlotPress}
      />
      <Spacer />
      <Spacer />
    </>
  );
};

SlotSelection.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SlotSelection);
