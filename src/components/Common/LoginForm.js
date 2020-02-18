import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { Input, Button, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/thunks/user';
import { setError } from '../../store/actions/error';

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  link: {
    color: 'blue',
  },
});

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login({email, password}));
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    dispatch(setError(''));
  };

  return (
    <View>
      <NavigationEvents
        onWillBlur={clearForm}
      />
      { error ? <Text style={styles.error}>{error}</Text> : null }
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
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Don't have an account yet? Sign up instead</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(LoginForm);
