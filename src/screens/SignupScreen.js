import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import SignupForm from '../components/Common/SignupForm';

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
    position: 'relative',
  },
  logo: {
    width: 210,
    height: 80,
  },
});

const SignupScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={{uri: 'https://tinyimg.io/i/uS2trrA.png'}}
        style={styles.logo}
      />
    </View>
    <SignupForm />
  </View>
);

export default {
  screen: SignupScreen,
  navigationOptions: {
    cardStyle: {
      backgroundColor: '#5073F1',
    },
  },
};
