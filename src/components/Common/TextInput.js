import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
    fontSize: 18,
  },
});

const TextInput = ({
  label, value, onChangeText, disabled, placeholder, submit, keyboardType,
}) => (
  <View>
    <Input
      label={label}
      labelStyle={styles.label}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      autoCapitalize="none"
      inputStyle={styles.input}
      inputContainerStyle={styles.inputContainer}
      disabled={disabled}
      placeholder={placeholder}
      onSubmitEditing={submit}
      keyboardType={keyboardType}
    />
  </View>
);

TextInput.defaultProps = {
  disabled: false,
  placeholder: '',
  submit: () => {},
  keyboardType: 'default',
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  submit: PropTypes.func,
  keyboardType: PropTypes.string,
};

export default TextInput;
