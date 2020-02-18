import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({});

const VerifyMessageScreen = ({ navigation }) => (
  <View>
    <Text>Verify Message Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text>Already verified? Log in now</Text>
    </TouchableOpacity>
  </View>
);

export default VerifyMessageScreen;
