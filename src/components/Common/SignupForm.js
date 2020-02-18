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

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
  },
  link: {
    color: 'blue',
    fontSize: 16,
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
    <View>
      <NavigationEvents onWillBlur={clearForm} />

      {errors.length > 0 ? errorMessages(errors) : null}

      <Input placeholder="Email" value={email} onChangeText={setEmail} />
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
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Input
        placeholder="Referral Code"
        value={referralCode}
        onChangeText={setReferralCode}
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>Already have an account? Log in instead</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SignupForm);
