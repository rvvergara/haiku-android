import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import LoginForm from '../components/Common/LoginForm';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
    top: 60,
    maxHeight: 500,
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
