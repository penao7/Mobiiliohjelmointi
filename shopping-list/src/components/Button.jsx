import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  buttonBody: {
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10
  },
  addButton: {
    backgroundColor: theme.colors.add
  },
  clearButton: {
    backgroundColor: theme.colors.clear
  }
});

const Button = ({ title, style, color, ...props }) => {

  const buttonStyle = [
    styles.buttonBody,
    color === 'add' && styles.addButton,
    color === 'clear' && styles.clearButton,
    style
  ];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;