import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import login from '../store/thunks/user';

const styles = StyleSheet.create({});

const LoginScreen = () =>

const handleSubmit = () => {
  login('test','123')
}

(
  <View>
    <Input></Input>

<Button title='Submit' onPress={}/>
  </View>
);

export default LoginScreen;
