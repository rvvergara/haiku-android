import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {DrawerItems} from 'react-navigation-drawer';

const styles = StyleSheet.create({});

const LogoutButton = props => (
  <View>
    <DrawerItems {...props} />
    <Button title="Logout" onPress={() => console.log('Logging out')} />
  </View>
);

export default LogoutButton;
