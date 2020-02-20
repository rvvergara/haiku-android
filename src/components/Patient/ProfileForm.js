import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Button, Input, Image,
} from 'react-native-elements';
import {withNavigation, NavigationEvents } from 'react-navigation';
import {setErrors} from '../../store/actions/error';
import MultipleInput from '../Common/MultipleInput';
import usePatientForm from '../../hooks/usePatientForm';
import { handleChooseImage } from '../../utils/formHelpers';
import ErrorMessages from '../Common/ErrorMessages';
import ProfileFormFooter from '../Common/ProfileFormFooter';
import { profileFormStyles } from '../../style-objects/patientProfileStyles';

const styles = StyleSheet.create(profileFormStyles);

const ProfileForm = ({navigation}) => {
  const {
    patientParams, patientSetters, buttonTitle, errors, dispatch, imageUri, handleSubmit,
  } = usePatientForm(navigation);

  const {
    firstName,
    lastName,
    contactNumber,
    passport,
    postalCode,
    address,
    languages,
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
      {errors.length > 0 ? <ErrorMessages errors={errors} /> : null}
      <View>
        <Image
          source={{uri: imageUri}}
          style={styles.image}
        />
        <Button
          title="Change Pic"
          onPress={() => handleChooseImage(setFiles)}
        />
      </View>
      <Input
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Input
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Input
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <Input
        placeholder="Passport Number"
        value={passport}
        onChangeText={setPassport}
      />
      <Input placeholder="Address" value={address} onChangeText={setAddress} />
      <Input
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
      />
      <MultipleInput
        inputs={languages}
        setInputs={setLanguages}
        placeholder="New languanges"
      />
      <View>
        <Button title={buttonTitle} onPress={handleSubmit} />
      </View>
      <ProfileFormFooter />
    </View>
  );
};

ProfileForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(ProfileForm);
