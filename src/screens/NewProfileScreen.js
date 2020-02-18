import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import PatientForm from '../components/Patient/ProfileForm';

const NewProfileScreen = () => {
  const role = useSelector((state) => state.currentUser.data.role);

  return (
    <View>
      <Text h3>
        New Profile Screen
      </Text>
      { role === 'PATIENT' ? <PatientForm /> : null }
    </View>
  );
};

export default NewProfileScreen;
