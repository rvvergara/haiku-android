import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TouchableOpacity,
} from 'react-native';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { Input, Button, Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/thunks/user';
import { setErrors } from '../../store/actions/error';
import Spacer from './Spacer';
import ErrorMessages from './ErrorMessages';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#5271ff',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  label: {
    color: '#20385a',
  },
  link: {
    color: '#5073F1',
  },
  button: {
    backgroundColor: '#5073f1',
    marginBottom: 5,
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
    dispatch(setErrors([]));
  };

  useEffect(() => () => clearForm(), []);

  return (
    <Spacer>
      <NavigationEvents
        onWillBlur={clearForm}
      />
      <ErrorMessages
        errors={errors}
      />
      <Input
        label="Email"
        labelStyle={styles.label}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
      />
      <Spacer />
      <Input
        label="Password"
        labelStyle={styles.label}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
      />
      <Spacer />
      <Button
        buttonStyle={styles.button}
        title="Login"
        onPress={handleSubmit}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don&apos;t have an account yet? Sign up instead</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(LoginForm);
