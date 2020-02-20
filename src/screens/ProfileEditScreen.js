import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import PatientForm from '../components/Patient/ProfileForm';
import PractitionerForm from '../components/Practitioner/ProfileForm';
import Spacer from '../components/Common/Spacer';

const ProfileEditScreen = () => {
  const authenticated = useSelector((state) => state.currentUser.authenticated);
  const role = useSelector((state) => state.currentUser.data.role);
  return authenticated
    ? (
      <ScrollView>
        <Spacer>
          <Text h4>Edit Your Profile</Text>
          {
          role === 'PATIENT' ? <PatientForm /> : <PractitionerForm />
        }
        </Spacer>
      </ScrollView>
    )
    : null;
};

export default ProfileEditScreen;
