import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {logout} from '../../store/thunks/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5271ff',
    paddingTop: 10,
  },
  logoutText: {
    fontSize: 20,
    color: 'white',
  },
  logoutContainer: {
    borderTopColor: 'white',
    borderTopWidth: 0.95,
    paddingLeft: 15,
    paddingTop: 20,
    flexDirection: 'row',
    flex: 2,
  },
  logoutIcon: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  itemsContainer: {
    flex: 3,
  },
});

const CustomDrawer = (props) => {
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
        <Icon name="logout" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
