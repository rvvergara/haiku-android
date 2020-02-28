import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScheduleStack from '../../stacks/Practitioner/ScheduleStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
    width: 30,
    marginLeft: 5,
  },
});

export default {
  screen: ScheduleStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="schedule"
        style={styles.icon}
      />
    ),
  },
};
