import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/Common/LoginForm';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 80,
  },
});

const LoginScreen = () => (
  <View style={styles.container}>
    <LoginForm />
  </View>
);


export default LoginScreen;
