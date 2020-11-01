import React from 'react';
import { Text as NativeText, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonBody: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    backgroundColor: theme.colors.buttonBody,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.buttonText
  }
});

const Button = ({ title, style, ...props }) => {

  const buttonStyle = [styles.buttonBody, style];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <NativeText style={styles.buttonText}>{title}</NativeText>
    </TouchableOpacity>
  );
};

export default Button;