import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../components/Common/Header';

const styles = StyleSheet.create({});

const HomeScreen = ({ navigation }) => (
  <View>
    <Header />
    <Text>Home Screen</Text>
    <Button
      title="Go To Booking Selection"
      onPress={() => navigation.navigate('BookingSelection')}
    />
  </View>
);

export default HomeScreen;
