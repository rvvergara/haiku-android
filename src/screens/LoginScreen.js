import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import LoginForm from '../components/Common/LoginForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 50,
    marginBottom: 80,
    alignSelf: 'center',
    marginTop: 50,
  },
  logoContainer: {
    alignSelf: 'center',
    marginRight: 50,
    marginBottom: 30,
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


export default LoginScreen;
