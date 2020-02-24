import React from 'react';
import { useSelector } from 'react-redux';
import {View} from 'react-native';
import PractitionerProfile from '../components/Practitioner/Profile/Profile';
import Spacer from '../components/Common/Spacer';

const ProfileScreen = () => {
  const practitioner = useSelector((state) => state.displayedPractitioner);
  return (
    <Spacer>
      <View>
        { practitioner && <PractitionerProfile /> }
      </View>
    </Spacer>
  );
};

export default ProfileScreen;
