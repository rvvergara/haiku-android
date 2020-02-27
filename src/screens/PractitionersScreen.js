import React from 'react';
import {Text, ScrollView} from 'react-native';
import PractitionersList from '../components/Practitioner/PractitionersList';

const PractitionersScreen = () => (
  <ScrollView>
    <Text>Practitioner Screen</Text>
    <PractitionersList />
  </ScrollView>
);

export default PractitionersScreen;
