import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

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
    marginBottom: 8,
  },
});

const TextInput = ({
  label, value, onChangeText, disabled, placeholder,
}) => (
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
  />
);

TextInput.defaultProps = {
  disabled: false,
  placeholder: '',
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextInput;
