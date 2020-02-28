import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PractitionersListStack from '../../stacks/Patient/PractitionersListStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
    width: 30,
  },
});

export default {
  screen: PractitionersListStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="stethoscope"
        style={styles.icon}
      />
    ),
  },
};
