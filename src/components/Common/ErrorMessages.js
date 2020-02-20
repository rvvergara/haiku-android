import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },

});

const ErrorMessages = ({ errors }) => (
  <FlatList
    data={errors}
    keyExtractor={(err) => err}
    renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
  />
);

ErrorMessages.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
};

export default ErrorMessages;
