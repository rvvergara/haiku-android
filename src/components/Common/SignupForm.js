import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View, StyleSheet, TouchableOpacity, Picker,
} from 'react-native';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Input, Button, Text} from 'react-native-elements';
import validator from 'validator';
import {setError} from '../../store/actions/error';

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
  },
});

const SignupForm = ({navigation}) => {
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const dispatch = useDispatch();

  const isValidSignup = () => {
    if (!password) {
      dispatch(setError('All fields are required'));
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Please put a valid email'));
    } else if (role === '') {
      dispatch(setError('Please select a role'));
    } else {
      return true;
    }
    return false;
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setRole('');
    setReferralCode('');
    dispatch(setError(''));
  };

  const handleSignup = () => {
    if (isValidSignup()) {
      console.log('SIGNING UP');
    }
  };

  return (
    <View>
      <NavigationEvents onWillBlur={clearForm} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

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
    </View>
  );
};

export default withNavigation(SignupForm);
