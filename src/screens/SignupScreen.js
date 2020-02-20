import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import SignupForm from '../components/Common/SignupForm';
import { signupScreenStyles } from '../style-objects/signupStyles';

const styles = StyleSheet.create(signupScreenStyles);

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
