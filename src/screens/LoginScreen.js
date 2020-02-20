import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import LoginForm from '../components/Common/LoginForm';
import {loginScreenStyles} from '../style-objects/loginStyles';

const styles = StyleSheet.create(loginScreenStyles);

const LoginScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={{uri: 'https://tinyimg.io/i/uS2trrA.png'}}
        style={styles.logo}
      />
    </View>
    <LoginForm />
  </ScrollView>
);


export default {
  screen: LoginScreen,
  navigationOptions: {
    cardStyle: {
      backgroundColor: '#5073F1',
    },
  },
};
