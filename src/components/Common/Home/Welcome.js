import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { welcomeStyles } from '../../../style-objects/homeStyles';

const styles = StyleSheet.create(welcomeStyles);

const Welcome = ({ firstName, role }) => (
  <View style={styles.container}>
    <Text style={styles.greeting}>
      Welcome
      {' '}
      { role === 'PRACTITIONER' && 'Dr.'}
      {' '}
      {firstName}
      !
    </Text>
  </View>
);

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Welcome;
