import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    margin: 5,
    padding: 8,
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center'
  },
  sumButton: {
    backgroundColor: theme.colors.sum,
  },
  subtractButton: {
    backgroundColor: theme.colors.subtract,
  },
  divisionButton: {
    backgroundColor: theme.colors.division
  },
  multiplyButton: {
    backgroundColor: theme.colors.multiply,
  }
});

const Button = ({ style, title, color, ...props }) => {

  const buttonStyle = [
    styles.button,
    color === 'sum' && styles.sumButton,
    color === 'subtract' && styles.subtractButton,
    color === 'division' && styles.divisionButton,
    color === 'multiply' && styles.multiplyButton,
    style
  ];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>

  );
};

export default Button;

