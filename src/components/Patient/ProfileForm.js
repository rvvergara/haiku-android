import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';
import {withNavigation, NavigationEvents } from 'react-navigation';
import {setErrors} from '../../store/actions/error';
import MultipleInput from '../Common/MultipleInput';
import usePatientForm from '../../hooks/usePatientForm';
import ErrorMessages from '../Common/ErrorMessages';
import ProfileFormFooter from '../Common/ProfileFormFooter';
import TextInput from '../Common/TextInput';
import DateSelector from '../Common/DateSelector';
import Spacer from '../Common/Spacer';
import ImageUploader from '../Common/ImageUploader';
import { profileFormStyles } from '../../style-objects/profileStyles';

const styles = StyleSheet.create(profileFormStyles);

const ProfileForm = ({navigation}) => {
  const {
    patientParams,
    patientSetters,
    buttonTitle,
    errors,
    dispatch,
    imageUri,
    handleSubmit,
    mode,
    show,
    onDateChange,
    showDatePicker,
  } = usePatientForm(navigation);

  const {
    firstName,
    lastName,
    contactNumber,
    passport,
    postalCode,
    address,
    languages,
    dateOfBirth,
  } = patientParams;

  const {
    setFirstName,
    setLastName,
    setContactNumber,
    setPassport,
    setPostalCode,
    setAddress,
    setLanguages,
    setFiles,
  } = patientSetters;

  return (
    <View>
      <NavigationEvents onWillBlur={() => dispatch(setErrors([]))} />
      {
        errors.length > 0 ? <ErrorMessages errors={errors} /> : null
      }
      <ImageUploader
        imageUri={imageUri}
        setFiles={setFiles}
      />
      <Spacer />
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        label="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <TextInput
        label="Passport Number"
        value={passport}
        onChangeText={setPassport}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        label="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
      />

      <DateSelector
        mode={mode}
        show={show}
        onDateChange={onDateChange}
        showDatePicker={showDatePicker}
        date={dateOfBirth}
        label="Birth Date"
      />

      <MultipleInput
        inputs={languages}
        setInputs={setLanguages}
        placeholder="Add language"
        label="Languages Spoken"
      />
      <View>
        <Button
          title={buttonTitle}
          onPress={handleSubmit}
          buttonStyle={styles.button}
        />
      </View>
      <ProfileFormFooter />
    </View>
  );
};

ProfileForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(ProfileForm);
