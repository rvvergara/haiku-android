import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import PatientForm from '../components/Patient/ProfileForm';

const NewProfileScreen = () => {
  const role = useSelector((state) => state.currentUser.data.role);

  return (
    <ScrollView>
      <Text h3>
        New Profile Screen
      </Text>
      { role === 'PATIENT' ? <PatientForm /> : null }
    </ScrollView>
  );
};

export default NewProfileScreen;
