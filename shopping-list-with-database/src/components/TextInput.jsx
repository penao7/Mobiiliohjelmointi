import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    textAlign: 'left',
    width: 300,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
});

const TextInput = ({ style, error, ...props }) => {

  const textInputStyle = [
    styles.textInput,
    error ? theme.borderError : theme.border,
    style
  ];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;