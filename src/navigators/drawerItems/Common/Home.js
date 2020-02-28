import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../../stacks/common/HomeStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
  },
});

export default {
  screen: HomeStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="home"
        style={styles.icon}
      />
    ),
  },
};
