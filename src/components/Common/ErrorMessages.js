import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    padding: 5,
    width: '80%',
    marginBottom: 5,
  },
  error: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});

const ErrorMessages = ({ errors }) => (errors.map((err) => (
  <ListItem
    key={err}
    containerStyle={styles.listContainer}
    title={<Text style={styles.error}>{err}</Text>}
  />
)));

ErrorMessages.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
};

export default ErrorMessages;
