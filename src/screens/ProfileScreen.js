import React from 'react';
import { useSelector } from 'react-redux';
import {ScrollView} from 'react-native';
import PractitionerProfile from '../components/Practitioner/Profile/Profile';
import Spacer from '../components/Common/Spacer';

const ProfileScreen = () => {
  const practitioner = useSelector((state) => state.displayedPractitioner);
  return (
    <ScrollView>
      <Spacer>
        { practitioner && <PractitionerProfile /> }
      </Spacer>
    </ScrollView>
  );
};

export default ProfileScreen;
