import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {withNavigation} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({});

const DrawerTrigger = ({navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  >
    <Icon name="menu" size={30} />
  </TouchableOpacity>
);

DrawerTrigger.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(DrawerTrigger);
