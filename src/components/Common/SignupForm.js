import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TouchableOpacity, Picker,
} from 'react-native';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Input, Button, Text} from 'react-native-elements';
import {setErrors} from '../../store/actions/error';
import { signup } from '../../store/thunks/user';
import { isValidSignup } from '../../utils/formHelpers';
import useSignup from '../../hooks/useSignup';
import Spacer from './Spacer';
import ErrorMessages from './ErrorMessages';
import { signupFormStyles } from '../../style-objects/signupStyles';

const styles = StyleSheet.create(signupFormStyles);

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

  return (
    <Spacer>
      <NavigationEvents onWillBlur={clearForm} />
      <ErrorMessages
        errors={errors}
      />
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
      <View style={{position: 'relative', top: -10, marginBottom: -10}}>
        <Spacer>
          <Text style={styles.selectLabel}>Select Role</Text>
          <View style={{
            ...styles.input, ...styles.select,
          }}
          >
            <Picker
              onValueChange={(val) => setRole(val)}
              selectedValue={role}
              style={{marginBottom: 10}}
            >
              <Picker.Item label="I am a..." value="" />
              <Picker.Item label="Patient" value="PATIENT" />
              <Picker.Item label="Practitioner" value="PRACTITIONER" />
            </Picker>
          </View>
        </Spacer>
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
        autoCapitalize="none"
        autoCorrect={false}
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
