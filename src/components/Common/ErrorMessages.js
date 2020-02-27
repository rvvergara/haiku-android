import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { errorStyles } from '../../style-objects/errorStyles';

const styles = StyleSheet.create(errorStyles);

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
