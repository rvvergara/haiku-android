import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedbackStack from '../../stacks/common/FeedbackStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: 'white',
    width: 40,
    marginLeft: 5,
  },
});

export default {
  screen: FeedbackStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="feedback"
        style={styles.icon}
      />
    ),
  },
};
