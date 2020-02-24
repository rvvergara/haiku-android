import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from '../../Common/Spacer';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const MainBox = ({ practitioner, navigation }) => {
  const fullName = `Dr. ${practitioner.firstName} ${practitioner.lastName}`;
  return (
    <View style={styles.card}>
      <Avatar
        source={{uri: practitioner.image }}
        size="xlarge"
        rounded
      />
      <Text style={styles.name}>{fullName}</Text>
      <Spacer />
      <Button
        title="Book"
        onPress={() => navigation.navigate('BookingSelection')}
        buttonStyle={styles.button}
      />
    </View>
  );
};

MainBox.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(MainBox);
