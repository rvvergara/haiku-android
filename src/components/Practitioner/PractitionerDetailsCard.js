import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
  Text,
} from 'react-native-elements';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const PractitionerDetailsCard = ({ practitioner}) => {
  const fullName = `Dr. ${practitioner.firstName} ${practitioner.lastName}`;

  const specialties = JSON.parse(practitioner.specialties).join(', ');

  return (
    <View style={styles.info}>
      <Text style={styles.name}>
        { fullName }
      </Text>
      <Text>
        { specialties }
      </Text>
    </View>
  );
};

PractitionerDetailsCard.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
};

export default PractitionerDetailsCard;
