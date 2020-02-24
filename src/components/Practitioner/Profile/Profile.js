import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Spacer from '../../Common/Spacer';
import MainBox from './MainBox';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const Profile = ({ practitioner }) => (
  <Spacer>
    <View style={styles.container}>
      <MainBox practitioner={practitioner} />
    </View>
  </Spacer>
);

Profile.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
