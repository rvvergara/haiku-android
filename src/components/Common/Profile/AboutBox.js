import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet,
} from 'react-native';
import { Text } from 'react-native-elements';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const AboutBox = ({ about, title }) => (
  <View style={styles.card}>
    <Text style={styles.boxTitle}>{title}</Text>
    <Text style={styles.about}>
      { about }
    </Text>
  </View>
);

AboutBox.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default AboutBox;
