import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
    borderRadius: 10
  }
});

const TextInput = ({ style, ...props }) => {

  const textInputStyle = [
    style,
    styles.textInput
  ];

  return (
    <NativeTextInput style={[textInputStyle]} {...props} />
  );
};

export default TextInput;

