import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import DateSelector from '../../Common/DateSelector';
import useBookingSlot from '../../../hooks/useBookingSlot';
import { displaySlot } from '../../../store/actions/bookingSlot';
import Spacer from '../../Common/Spacer';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  pickerContainer: {
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#eff0f2',
    borderColor: '#5073F1',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonTitle: {
    color: '#5073F1',
    fontSize: 18,
  },
});

const SlotSelection = ({ navigation }) => {
  const {
    mode, show, onDateChange, showDatePicker, dateShown,
  } = useBookingSlot();

  const dispatch = useDispatch();

  const bookingSlots = useSelector((state) => state.bookingSlots);

  const chosenSlots = bookingSlots.filter((slot) => slot.date === moment(dateShown).format('MMMM DD, YYYY'));

  const handleSlotPress = (slot) => {
    dispatch(displaySlot(slot));
    navigation.navigate('BookingSubmission', { slot });
  };

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
