import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

const ErrorMessages = ({ errors, styles}) => (
  <FlatList
    data={errors}
    keyExtractor={(err) => err}
    renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
  />
);

ErrorMessages.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  styles: PropTypes.instanceOf(Object).isRequired,
};

export default ErrorMessages;
