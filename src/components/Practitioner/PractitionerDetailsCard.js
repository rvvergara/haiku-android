import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  Text,
} from 'react-native-elements';
import { cardDetailsStyles } from '../../style-objects/practitionerCardStyles';

const styles = StyleSheet.create(cardDetailsStyles);

const PractitionerDetailsCard = ({ practitioner}) => {
  const fullName = `Dr. ${practitioner.firstName} ${practitioner.lastName}`;

  const specialties = JSON.parse(practitioner.specialties).join(', ');

  return (
    <View>
      <Text style={styles.label}>
        { fullName }
      </Text>
      <Text style={styles.info}>
        { specialties }
      </Text>
    </View>
  );
};

PractitionerDetailsCard.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
};

export default PractitionerDetailsCard;
