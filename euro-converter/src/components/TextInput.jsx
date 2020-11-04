import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 10,
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgray'
  }
});

const TextInput = ({ style, marginRight, ...props }) => {

  const textInputStyle = [
    styles.textInput,
    style,
    { marginRight: marginRight }
  ];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;

