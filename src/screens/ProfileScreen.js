import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { setPractitioner } from '../store/actions/practitioner';
import PractitionerProfile from '../components/Practitioner/Profile/Profile';
import Spacer from '../components/Common/Spacer';

const ProfileScreen = () => {
  const practitioner = useSelector((state) => state.displayedPractitioner);
  const dispatch = useDispatch();
  return (
    <Spacer>
      <NavigationEvents
        onWillBlur={() => dispatch(setPractitioner(null))}
      />
      <View>
        { practitioner && <PractitionerProfile /> }
      </View>
    </Spacer>
  );
};

export default ProfileScreen;
