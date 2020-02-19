import React from 'react';
import { useSelector } from 'react-redux';
import {Text, ScrollView } from 'react-native';
import PatientForm from '../components/Patient/ProfileForm';
import PractitionerForm from '../components/Practitioner/ProfileForm';

const ProfileEditScreen = () => {
  const authenticated = useSelector((state) => state.currentUser.authenticated);
  const role = useSelector((state) => state.currentUser.data.role);
  return authenticated
    ? (
      <ScrollView>
        <Text>Patient Profile Screen</Text>
        {
        role === 'PATIENT' ? <PatientForm /> : <PractitionerForm />
      }
      </ScrollView>
    )
    : null;
};

export default ProfileEditScreen;
