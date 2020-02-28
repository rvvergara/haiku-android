import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileEditStack from '../../stacks/common/ProfileEditStack';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: 'white',
  },
});

export default {
  screen: ProfileEditStack,
  navigationOptions: {
    drawerIcon: () => (
      <Icon
        name="user"
        style={styles.icon}
      />
    ),
  },
};
