import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Image, Input, Text} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {NavigationEvents, withNavigation} from 'react-navigation';
import usePatientForm from '../../hooks/usePatientForm';
import {setErrors} from '../../store/actions/error';
import {createPatient} from '../../store/thunks/patient';
import {logout} from '../../store/thunks/user';
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
  const {patientParams, patientSetters, errors, dispatch} = usePatientForm();

  const {
    firstName,
    lastName,
    education,
    specialties,
    yearsOfExperience,
    biography,
    languages,
    files,
  } = patientParams;

  const {
    setFirstName,
    setLastName,
    setEducation,
    setSpecialties,
    setYearsOfExperience,
    setBiography,
    setLanguages,
    setFiles,
  } = patientSetters;

  const buttonTitle =
    navigation.state.routeName === 'NewProfile'
      ? 'Create Profile'
      : 'Update Profile';

  const errorMessages = errs => (
    <FlatList
      data={errs}
      keyExtractor={err => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  const handleChooseImage = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, res => {
      if (res.path) {
        const photoFile = {
          name: res.fileName,
          type: res.type,
          uri:
            Platform.OS === 'android'
              ? res.uri
              : res.uri.replace('file://', ''),
        };
        setFiles(photoFile);
      }
    });
  };

  const handleSubmit = () => {
    const formData = new FormData();

    const params = {
      ...patientParams,
      languages: JSON.stringify(languages),
      dateOfBirth: '1989-01-10',
    };

    for (const key in params) {
      if (key) formData.append(key, params[key]);
    }

    dispatch(createPatient(formData));
    navigation.goBack();
  };

  const stockPhotoUrl = 'https://bit.ly/38AvkO4';

  const imageUri = files ? files.uri : stockPhotoUrl;
  return (
    <View>
      <NavigationEvents onWillBlur={() => dispatch(setErrors([]))} />
      {errors.length > 0 ? errorMessages(errors) : null}
      <View>
        <Image source={{uri: imageUri}} style={styles.image} />
        <Button title="Change Pic" onPress={handleChooseImage} />
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
        value={yearsOfExperience}
        onChangeText={setYearsOfExperience}
      />
      <MultipleInput inputs={languages} setInputs={setLanguages} />
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
