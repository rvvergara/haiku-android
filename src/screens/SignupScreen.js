import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import SignupForm from '../components/Common/SignupForm';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 40,
    alignSelf: 'center',
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
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
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.logoContainer}>
      <Image
        source={{uri: 'https://tinyimg.io/i/uS2trrA.png'}}
        style={styles.logo}
      />
    </View>
    <SignupForm />
  </ScrollView>
);

export default {
  screen: SignupScreen,
  navigationOptions: {
    cardStyle: {
      backgroundColor: '#5073F1',
    },
  },
};
