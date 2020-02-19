import React from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet, Text, ScrollView } from 'react-native';
import PatientForm from '../components/Patient/ProfileForm';
import PractitionerForm from '../components/Practitioner/ProfileForm';

const styles = StyleSheet.create({});

const ProfileEditScreen = () => {
  const role = useSelector((state) => state.currentUser.data.role);
  return (
    <ScrollView>
      <Text>Patient Profile Screen</Text>
      {
        role === 'PATIENT' ? <PatientForm /> : <PractitionerForm />
      }
    </ScrollView>
  );
};

export default ProfileEditScreen;
