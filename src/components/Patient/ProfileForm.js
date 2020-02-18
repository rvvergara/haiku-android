import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { setErrors } from '../../store/actions/error';
import { createPatient } from '../../store/thunks/patient';
import { logout } from '../../store/thunks/user';

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    fontSize: 18,
  },
});

const ProfileForm = ({ navigation }) => {
  const currentUserData = useSelector((state) => state.currentUser.data);
  const { id } = currentUserData;
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(currentUserData.patient ? currentUserData.patient.firstName : '');
  const [lastName, setLastName] = useState(currentUserData.patient ? currentUserData.patient.lastName : '');
  const [contactNumber, setContactNumber] = useState(currentUserData.patient ? currentUserData.patient.contactNumber : '');
  const [passport, setPassport] = useState(currentUserData.patient ? currentUserData.patient.passport : '');
  const [postalCode, setPostalCode] = useState(currentUserData.patient ? currentUserData.patient.postalCode : '');
  const [address, setAddress] = useState(currentUserData.patient ? currentUserData.patient.address : '');

  const buttonTitle = navigation.state.routeName === 'NewProfile' ? 'Create Profile' : 'Update Profile';


  const errorMessages = (errs) => (
    <FlatList
      data={errs}
      keyExtractor={(err) => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  const handleSubmit = () => {
    dispatch(createPatient({
      firstName,
      lastName,
      contactNumber,
      passport,
      postalCode,
      address,
      userId: id,
    }));
  };

  return (
    <View>
      <NavigationEvents
        onWillBlur={() => dispatch(setErrors([]))}
      />
      { errors.length > 0 ? errorMessages(errors) : null }
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
      <Input
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Input
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
      />
      <View>
        <Button
          title={buttonTitle}
          onPress={handleSubmit}
        />
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
