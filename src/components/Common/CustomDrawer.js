import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

const styles = StyleSheet.create({
  logout: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  touch: {
    marginLeft: 15,
    flexDirection: 'column',
    flex: 2,
  },
});

const CustomDrawer = props => (
  <View style={{flex: 1}}>
    <View style={{flex: 3}}>
      <DrawerItems {...props} />
    </View>

    <TouchableOpacity
      style={styles.touch}
      onPress={() => console.log('Logging out')}>
      <Text style={styles.logout}>Logout</Text>
    </TouchableOpacity>
  </View>
);

export default CustomDrawer;
