import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInput from '../Common/TextInput';

const BirthdateSelector = ({
  mode,
  show,
  onDateChange,
  showDatePicker,
  dateOfBirth,
}) => (
  <View>
    <View>
      <TouchableOpacity
        onPress={showDatePicker}
      >
        <TextInput
          label="Birth Date"
          placeholder={moment(dateOfBirth).format('MMMM DD, YYYY')}
          disabled
          onChangeText={() => {}}
          value=""
        />
      </TouchableOpacity>
      {
            show ? (
              <DateTimePicker
                testID="birthdate"
                value={dateOfBirth}
                mode={mode}
                onChange={onDateChange}
              />
            ) : null
          }
    </View>
  </View>
);

BirthdateSelector.propTypes = {
  mode: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onDateChange: PropTypes.func.isRequired,
  showDatePicker: PropTypes.func.isRequired,
  dateOfBirth: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(BirthdateSelector);
