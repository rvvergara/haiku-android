import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {withNavigation} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 30,
  },
  container: {
    marginRight: 20,
  },
});

const DrawerTrigger = ({navigation}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  >
    <Icon name="menu" style={styles.icon} />
  </TouchableOpacity>
);

DrawerTrigger.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(DrawerTrigger);
