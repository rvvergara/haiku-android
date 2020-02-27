import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { welcomeStyles } from '../../../style-objects/homeStyles';

const styles = StyleSheet.create(welcomeStyles);

const Welcome = ({ firstName }) => (
  <View style={styles.container}>
    <Text style={styles.greeting}>
      Welcome
      {' '}
      {firstName}
      !
    </Text>
  </View>
);

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Welcome;
