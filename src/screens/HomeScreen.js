import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({});

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="Go To Practitioner Profile"
      onPress={() => navigation.navigate('Profile')}
    />
  </View>
);

export default HomeScreen;
