import React from 'react';
import { useSelector } from 'react-redux';
import Welcome from '../components/Common/Home/Welcome';
import PatientHome from '../components/Patient/PatientHome';
import Spacer from '../components/Common/Spacer';

const HomeScreen = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser.authenticated) {
    return null;
  }

  const { role } = currentUser.data;

  const {firstName} = currentUser.data[role.toLowerCase()];

  return (
    <Spacer>
      <Welcome firstName={firstName} />
      {
          role === 'PATIENT' && <PatientHome />
        }
    </Spacer>
  );
};

export default HomeScreen;
