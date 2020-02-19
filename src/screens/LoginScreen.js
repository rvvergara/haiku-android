import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import LoginForm from '../components/Common/LoginForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 50,
    alignSelf: 'center',
    marginTop: 70,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  logoContainer: {
    alignSelf: 'center',
    marginRight: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  logo: {
    width: 210,
    height: 80,
  },
});

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={{uri: 'https://tinyimg.io/i/uS2trrA.png'}}
        style={styles.logo}
      />
    </View>
    <LoginForm />
  </View>
);


export default {
  screen: LoginScreen,
  navigationOptions: {
    cardStyle: {
      backgroundColor: '#5073F1',
    },
  },
};
