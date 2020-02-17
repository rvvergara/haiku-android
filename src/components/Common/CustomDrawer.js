import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/thunks/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutText: {
    fontSize: 20,
  },
  logoutContainer: {
    borderTopColor: 'black',
    borderTopWidth: 0.95,
    paddingLeft: 15,
    paddingTop: 20,
    flexDirection: 'column',
    flex: 2,
  },
  itemsContainer: {
    flex: 3,
  },
});

const CustomDrawer = props => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <DrawerItems {...props} />
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
