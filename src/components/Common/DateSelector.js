import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInput from './TextInput';

const DateSelector = ({
  mode,
  show,
  onDateChange,
  showDatePicker,
  date,
  label,
}) => (
  <View>
    <View>
      <TouchableOpacity
        onPress={showDatePicker}
      >
        <TextInput
          label={label}
          placeholder={moment(date).format('MMMM DD, YYYY')}
          disabled
          onChangeText={() => {}}
          value=""
        />
      </TouchableOpacity>
      {
            show ? (
              <DateTimePicker
                testID="birthdate"
                value={date}
                mode={mode}
                onChange={onDateChange}
              />
            ) : null
          }
    </View>
  </View>
);

DateSelector.propTypes = {
  mode: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onDateChange: PropTypes.func.isRequired,
  showDatePicker: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default withNavigation(DateSelector);
