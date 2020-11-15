import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonBody: {
    margin: 3,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    shadowRadius: 10,
    height: 60,
    width: 60,
    borderRadius: 70 * 2 / 2,
    shadowColor: "#123",
    shadowOffset: {
      width: 5,
      height: 2
    }
  },
  buttonText: {
    color: theme.colors.buttonText,
  }
});

const Icon = ({ size, name, color, style, ...props }) => {

  const buttonStyle = [
    styles.buttonBody,
    style
  ];

  return (
    <TouchableOpacity style={styles.buttonBody} {...props}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>

  );
};

export default Icon;