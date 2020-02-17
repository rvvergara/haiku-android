import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { login } from '../store/thunks/user';

const styles = StyleSheet.create({});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    await dispatch(login({email, password}));
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Log In"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default LoginForm;
