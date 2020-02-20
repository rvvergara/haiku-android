import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import usePatientForm from '../../hooks/usePatientForm';
import TextInput from '../Common/TextInput';

const BirthdateSelector = ({navigation}) => {
  const {
    mode, show, onDateChange, showDatePicker, patientParams,
  } = usePatientForm(navigation);

  const { dateOfBirth } = patientParams;

  return (
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
};

BirthdateSelector.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(BirthdateSelector);
