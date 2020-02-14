import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button} from 'react-native-elements';
import Header from '../components/Common/Header';

const styles = StyleSheet.create({});

const ScheduleScreen = ({ navigation }) => (
  <View>
    <Header />
    <Text>Schedule Screen</Text>
    <Button
      title="Click to set Schedule"
      onPress={() => navigation.navigate('ScheduleSubmission')}
    />
  </View>
);

export default ScheduleScreen;
