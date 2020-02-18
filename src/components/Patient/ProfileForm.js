import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { withNavigation, NavigationEvents } from 'react-navigation';
import { setError } from '../../store/actions/error';

const styles = StyleSheet.create({

});

const ProfileForm = ({ navigation }) => {
  const currentUserData = useSelector((state) => state.currentUser.data);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(currentUserData.patient ? currentUserData.patient.firstName : '');
  const [lastName, setLastName] = useState(currentUserData.patient ? currentUserData.patient.lastName : '');
  const [contactNumber, setContactNumber] = useState(currentUserData.patient ? currentUserData.patient.contactNumber : '');
  const [passport, setPassport] = useState(currentUserData.patient ? currentUserData.patient.passport : '');
  const [postalCode, setPostalCode] = useState(currentUserData.patient ? currentUserData.patient.postalCode : '');
  const [address, setAddress] = useState(currentUserData.patient ? currentUserData.patient.address : '');

  const buttonTitle = navigation.state.routeName === 'NewProfile' ? 'Create Profile' : 'Update Profile';

  const handleSubmit = () => {
    console.log('ROUTE: ', navigation.state.routeName);
  };

  return (
    <View>
      <NavigationEvents
        onWillBlur={() => dispatch(setError(''))}
      />
      { error ? <Text>{error}</Text> : null }
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
    </View>
  );
};

ProfileForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(ProfileForm);
