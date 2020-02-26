import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import DateSelector from '../../Common/DateSelector';
import Spacer from '../../Common/Spacer';
import useBookingSlot from '../../../hooks/useBookingSlot';
import { slotSelectionStyles } from '../../../style-objects/bookingSlotsStyles';

const styles = StyleSheet.create(slotSelectionStyles);

const SlotSelection = ({ navigation }) => {
  const {
    chosenSlots,
    mode,
    show,
    handleSlotPress,
    onDateChange,
    showDatePicker,
    dateShown,
  } = useBookingSlot(navigation);

  return (
    <View style={styles.container}>
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
      <FlatList
        data={chosenSlots}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Spacer>
            <Button
              title={`${item.startTime} to ${item.endTime}`}
              onPress={() => handleSlotPress(item)}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
            />
          </Spacer>
        )}
      />
    </View>
  );
};

SlotSelection.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SlotSelection);
