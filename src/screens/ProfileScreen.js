import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import PractitionerProfile from '../components/Practitioner/Profile/Profile';
import Spacer from '../components/Common/Spacer';

const styles = StyleSheet.create({

});

const ProfileScreen = ({ navigation }) => {
  const patient = navigation.getParam('patient');
  const practitioner = navigation.getParam('practitioner');
  return (
    <Spacer>
      <View>
        {
          practitioner && <PractitionerProfile practitioner={practitioner} />
        }
      </View>
    </Spacer>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileScreen;
