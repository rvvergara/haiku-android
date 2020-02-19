import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {
  Button, Image, Input, Text,
} from 'react-native-elements';
import {NavigationEvents, withNavigation} from 'react-navigation';
import usePractitionerForm from '../../hooks/usePractitionerForm';
import {setErrors} from '../../store/actions/error';
import {createPractitioner} from '../../store/thunks/practitioner';
import {logout} from '../../store/thunks/user';
import {handleChooseImage, submitProfile} from '../../utils/formHelpers';
import MultipleInput from '../Common/MultipleInput';

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
  } = usePractitionerForm();

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

  const errorMessages = (errs) => (
    <FlatList
      data={errs}
      keyExtractor={(err) => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  const handleSubmit = () => {
    const params = {
      ...practitionerParams,
      education: JSON.stringify(education),
      specialties: JSON.stringify(specialties),
    };

    const action = navigation.state.routeName === 'NewProfile'
      ? createPractitioner
      : () => {};

    submitProfile(dispatch, action, params);
  };

  const stockPhotoUrl = 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : stockPhotoUrl;
  return (
    <View>
      <NavigationEvents onWillBlur={() => dispatch(setErrors([]))} />
      {errors.length > 0 ? errorMessages(errors) : null}
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
