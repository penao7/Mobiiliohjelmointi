import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  buttonBody: {
    fontWeight: '700',
    width: 70,
    padding: 5,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.buttonPrimary
  }
});

const Button = ({ title, style, ...props }) => {

  const buttonStyle = [
    styles.buttonBody,
    theme.border,
    style
  ];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;