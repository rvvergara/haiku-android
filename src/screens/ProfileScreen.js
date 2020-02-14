import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Common/Header';

const styles = StyleSheet.create({});

const ProfileScreen = ({ navigation }) => (
  <View>
    <Header />
    <Text>Profile Info Screen</Text>
    <Button
      title="Go to Booking Selection"
      onPress={() => navigation.navigate('BookingSelection')}
    />
  </View>
);

export default ProfileScreen;
