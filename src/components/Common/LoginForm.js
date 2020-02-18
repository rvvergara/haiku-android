import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { Input, Button, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/thunks/user';
import { setErrors } from '../../store/actions/error';

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
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login({email, password}));
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    dispatch(setErrors(''));
  };

  const errorMessages = (errs) => (
    <FlatList
      data={errs}
      keyExtractor={(err) => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  return (
    <View>
      <NavigationEvents
        onWillBlur={clearForm}
      />
      { errors.length > 0 ? errorMessages(errors) : null }
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
        <Text>Don&apos;t have an account yet? Sign up instead</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(LoginForm);
