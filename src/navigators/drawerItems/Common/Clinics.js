import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ClinicsStack from '../../stacks/common/ClinicsStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: 'white',
    width: 40,
    marginLeft: 5,
  },
});

export default {
  screen: ClinicsStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="clinic-medical"
        style={styles.icon}
      />
    ),
  },
};
