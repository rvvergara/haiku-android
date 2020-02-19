import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button, Text, Input, Image,
} from 'react-native-elements';
import {withNavigation, NavigationEvents } from 'react-navigation';
import {setErrors} from '../../store/actions/error';
import {createPatient} from '../../store/thunks/patient';
import {logout} from '../../store/thunks/user';
import MultipleInput from '../Common/MultipleInput';
import usePatientForm from '../../hooks/usePatientForm';
import { handleChooseImage, submitProfile } from '../../utils/formHelpers';

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  },
  image: {
    width: 150,
    height: 150,
  },
});

const ProfileForm = ({navigation}) => {
  const {
    patientParams, patientSetters, errors, dispatch,
  } = usePatientForm(navigation.state.routeName);

  const {
    firstName,
    lastName,
    contactNumber,
    passport,
    postalCode,
    address,
    languages,
    files,
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

  const buttonTitle = navigation.state.routeName === 'NewProfile'
    ? 'Create Profile'
    : 'Update Profile';

  const errorMessages = (errs) => (
    <FlatList
      data={errs}
      keyExtractor={(err) => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  const handleSubmit = () => {
    const params = {...patientParams, languages: JSON.stringify(languages), dateOfBirth: '1989-01-10'};

    const action = navigation.state.routeName === 'NewProfile' ? createPatient : () => {};

    submitProfile(dispatch, action, params);
  };

  const stockPhotoUrl = 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : stockPhotoUrl;
  return (
    <View>
      <NavigationEvents onWillBlur={() => dispatch(setErrors([]))} />
      {errors.length > 0 ? errorMessages(errors) : null}
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
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text style={styles.link}>Sign in as another user? Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

ProfileForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(ProfileForm);
