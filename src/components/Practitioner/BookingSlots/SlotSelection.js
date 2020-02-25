import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import DateSelector from '../../Common/DateSelector';
import useBookingSlot from '../../../hooks/useBookingSlot';

const styles = StyleSheet.create({});

const SlotSelection = ({ navigation }) => {
  const {
    mode, show, onDateChange, showDatePicker, dateShown,
  } = useBookingSlot();

  const bookingSlots = useSelector((state) => state.bookingSlots);

  const chosenSlots = bookingSlots.filter((slot) => slot.date === moment(dateShown).format('MMMM DD, YYYY'));

  return (
    <View>
      <DateSelector
        mode={mode}
        show={show}
        onDateChange={onDateChange}
        showDatePicker={showDatePicker}
        date={dateShown}
        label="Select Date"
      />
      <FlatList
        data={chosenSlots}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Button
            title={`${item.startTime} to ${item.endTime}`}
            onPress={() => navigation.navigate('BookingSubmission', { slot: item })}
          />
        )}
      />
    </View>
  );
};

SlotSelection.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SlotSelection);
