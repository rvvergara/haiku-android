import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TouchableOpacity, Picker, FlatList,
} from 'react-native';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Input, Button, Text} from 'react-native-elements';
import {setErrors} from '../../store/actions/error';
import { signup } from '../../store/thunks/user';
import { isValidSignup } from '../../utils/formHelpers';
import useSignup from '../../hooks/useSignup';
import Spacer from './Spacer';

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#5271ff',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginBottom: 8,
  },
  label: {
    color: '#20385a',
  },
  link: {
    color: '#5073F1',
    fontSize: 14.5,
  },
  button: {
    backgroundColor: '#5073f1',
    marginBottom: 5,
  },
});

const SignupForm = ({navigation}) => {
  const {
    signupParams,
    clearForm,
    dispatch,
    errors,
    setEmail,
    setPassword,
    setRole,
    setReferralCode,
  } = useSignup();

  const {
    email, password, role, referralCode,
  } = signupParams;

  const handleSignup = () => {
    if (isValidSignup(dispatch, setErrors, { email, password, role})) {
      dispatch(signup({
        email,
        password,
        role,
        referralCode,
      }));
    }
  };

  const errorMessages = (errs) => (
    <FlatList
      data={errs}
      keyExtractor={(err) => err}
      renderItem={({item}) => <Text style={styles.error}>{item}</Text>}
    />
  );

  return (
    <Spacer>
      <NavigationEvents onWillBlur={clearForm} />

      {errors.length > 0 ? errorMessages(errors) : null}

      <Input
        label="Email"
        labelStyle={styles.label}
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
      />
      <View>
        <Picker
          onValueChange={(val) => setRole(val)}
          selectedValue={role}
        >
          <Picker.Item label="I am a..." value="" />
          <Picker.Item label="Patient" value="PATIENT" />
          <Picker.Item label="Practitioner" value="PRACTITIONER" />
        </Picker>
      </View>
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
      <Input
        label="Referral Code"
        labelStyle={styles.label}
        value={referralCode}
        onChangeText={setReferralCode}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
      />
      <Spacer />
      <Button
        buttonStyle={styles.button}
        title="Sign Up"
        onPress={handleSignup}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>Already have an account? Log in instead</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

SignupForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SignupForm);
