import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  Button, Image, Input, Text,
} from 'react-native-elements';
import {NavigationEvents, withNavigation} from 'react-navigation';
import usePractitionerForm from '../../hooks/usePractitionerForm';
import {setErrors} from '../../store/actions/error';
import {createPractitioner, updatePractitioner} from '../../store/thunks/practitioner';
import {handleChooseImage, submitProfile, errorMessages } from '../../utils/formHelpers';
import MultipleInput from '../Common/MultipleInput';
import ProfileFormFooter from '../Common/ProfileFormFooter';

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
    practitionerParams,
    practitionerSetters,
    errors,
    dispatch,
    image,
    practitionerId,
  } = usePractitionerForm(navigation.state.routeName);

  const {
    firstName,
    lastName,
    education,
    specialties,
    yearsOfExperience,
    biography,
    files,
  } = practitionerParams;

  const {
    setFirstName,
    setLastName,
    setEducation,
    setSpecialties,
    setYearsOfExperience,
    setBiography,
    setFiles,
  } = practitionerSetters;

  const buttonTitle = navigation.state.routeName === 'NewProfile'
    ? 'Create Profile'
    : 'Update Profile';

  const handleSubmit = () => {
    const params = {
      ...practitionerParams,
      education: JSON.stringify(education),
      specialties: JSON.stringify(specialties),
    };

    const action = navigation.state.routeName === 'NewProfile'
      ? createPractitioner
      : updatePractitioner;

    submitProfile(dispatch, action, params, practitionerId);
  };

  const initialImageUri = image || 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : initialImageUri;
  return (
    <View>
      <NavigationEvents onWillBlur={() => dispatch(setErrors([]))} />
      {errors.length > 0 ? errorMessages(errors, styles) : null}
      <View>
        <Image source={{uri: imageUri}} style={styles.image} />
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
      <MultipleInput
        inputs={education}
        setInputs={setEducation}
        placeholder="New education"
      />
      <MultipleInput
        inputs={specialties}
        setInputs={setSpecialties}
        placeholder="New Specialties"
      />
      <Input
        placeholder="Biography"
        value={biography}
        onChangeText={setBiography}
      />
      <Input
        placeholder="Years of Experience "
        value={`${yearsOfExperience}`}
        onChangeText={(val) => {
          const re = /^\d+(\.\d{0,2})?$/gi;
          if (val.match(re)) setYearsOfExperience(val);
        }}
        keyboardType="numeric"
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
