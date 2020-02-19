import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {useSelector} from 'react-redux';
import PatientForm from '../components/Patient/ProfileForm';
import PractitionerForm from '../components/Practitioner/ProfileForm';

const NewProfileScreen = () => {
  const role = useSelector(state => state.currentUser.data.role);

  return (
    <ScrollView>
      <Text h3>New Profile Screen</Text>
      {role === 'PATIENT' ? <PatientForm /> : <PractitionerForm />}
    </ScrollView>
  );
};

export default NewProfileScreen;
