import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonBody: {
    marginLeft: 10,
    backgroundColor: theme.colors.buttonBody,
    padding: 30,
    height: 50,
    width: 50,
    borderRadius: 50 * 2 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.buttonText,
  }
});

const Button = ({ title, style, ...props }) => {

  const buttonStyle = [
    style,
    styles.buttonBody
  ];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

