import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BookingsStack from '../../stacks/common/BookingsStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
    width: 30,
  },
});

export default {
  screen: BookingsStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="calendar-month"
        style={styles.icon}
      />
    ),
  },
};
