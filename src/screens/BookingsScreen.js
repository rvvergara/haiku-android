import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import Header from '../components/Common/Header';

const styles = StyleSheet.create({});

const BookingsScreen = ({navigation}) => (
  <View>
    <Text>Bookings Screen</Text>
    <Button title="Video Screen" onPress={() => navigation.navigate('Video')} />
  </View>
);

export default BookingsScreen;
