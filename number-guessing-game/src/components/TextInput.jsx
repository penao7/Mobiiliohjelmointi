import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  TextInput: {
    width: 200,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    padding: 10,
    margin: 20
  }
});

const TextInput = ({ style, ...props }) => {

  const TextInputStyles = [styles.TextInput, style];

  return (
    <NativeTextInput style={TextInputStyles} {...props} />
  );
};

export default TextInput;