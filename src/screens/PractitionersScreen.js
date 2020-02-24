import React from 'react';
import {Text} from 'react-native';
import PractitionersList from '../components/Practitioner/PractitionersList';
import Spacer from '../components/Common/Spacer';

const PractitionersScreen = () => (
  <Spacer>
    <Text>Practitioner Screen</Text>
    <PractitionersList />
  </Spacer>
);

export default PractitionersScreen;
