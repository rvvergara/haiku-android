import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';
import {NavigationEvents, withNavigation} from 'react-navigation';
import usePractitionerForm from '../../hooks/usePractitionerForm';
import {setErrors} from '../../store/actions/error';
import MultipleInput from '../Common/MultipleInput';
import ErrorMessages from '../Common/ErrorMessages';
import ImageUploader from '../Common/ImageUploader';
import ProfileFormFooter from '../Common/ProfileFormFooter';
import Spacer from '../Common/Spacer';
import TextInput from '../Common/TextInput';
import MovableSpacer from '../Common/MovableSpacer';
import { profileFormStyles } from '../../style-objects/profileStyles';

const styles = StyleSheet.create(profileFormStyles);

const ProfileForm = ({navigation}) => {
  const {
    practitionerParams,
    practitionerSetters,
    buttonTitle,
    errors,
    dispatch,
    imageUri,
    onChangeYearsExperience,
    handleSubmit,
  } = usePractitionerForm(navigation);

  const {
    firstName,
    lastName,
    education,
    specialties,
    yearsOfExperience,
    biography,
  } = practitionerParams;

  const {
    setFirstName,
    setLastName,
    setEducation,
    setSpecialties,
    setBiography,
    setFiles,
  } = practitionerSetters;


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
      <MovableSpacer
        position="relative"
        top={-5}
      >
        <MultipleInput
          inputs={education}
          setInputs={setEducation}
          placeholder="Add education"
          label="Education"
        />
      </MovableSpacer>
      <MovableSpacer
        position="relative"
        top={-30}
      >
        <MultipleInput
          inputs={specialties}
          setInputs={setSpecialties}
          placeholder="Add specialty"
          label="Specialties"
        />
      </MovableSpacer>
      <MovableSpacer
        position="relative"
        top={-50}
      >
        <TextInput
          label="Biography"
          value={biography}
          onChangeText={setBiography}
        />
        <TextInput
          label="Years of Experience "
          value={`${yearsOfExperience}`}
          onChangeText={onChangeYearsExperience}
          keyboardType="numeric"
        />
      </MovableSpacer>
      <View>
        <MovableSpacer
          position="relative"
          top={-40}
        >
          <Button
            title={buttonTitle}
            onPress={handleSubmit}
            buttonStyle={styles.button}
          />
        </MovableSpacer>
      </View>
      <MovableSpacer
        position="relative"
        top={-35}
      >
        <ProfileFormFooter />
      </MovableSpacer>
    </View>
  );
};

ProfileForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(ProfileForm);
