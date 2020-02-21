import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { logout } from '../../store/thunks/user';

const styles = StyleSheet.create({
  link: {
    color: '#5073f1',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const ProfileFormFooter = ({ navigation }) => {
  const dispatch = useDispatch();
  const { routeName } = navigation.state;

  const rendered = (routeName === 'NewProfile'
    ? (
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text style={styles.link}>Sign in as another user? Log out</Text>
      </TouchableOpacity>
    )
    : (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Go Back To Homepage</Text>
      </TouchableOpacity>
    ));

  return rendered;
};

export default withNavigation(ProfileFormFooter);
