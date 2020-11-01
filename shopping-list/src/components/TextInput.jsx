import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    width: 200,
    padding: 10,
    margin: 10
  }
});

const TextInput = ({ style, ...props }) => {

  const textInputStyle = [
    styles.textInput,
    style
  ];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );

};

export default TextInput;