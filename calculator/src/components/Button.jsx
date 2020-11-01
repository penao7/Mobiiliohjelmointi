import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    padding: 8,
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center'
  }
});

const Button = ({ style, title, ...props }) => {

  const buttonStyle = [styles.button, style];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>

  );
};

export default Button;

