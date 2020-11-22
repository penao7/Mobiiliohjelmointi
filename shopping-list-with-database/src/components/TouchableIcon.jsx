import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

const styles = StyleSheet.create({
  iconBody: {
    width: 70,
    marginBottom: 15
  },
  icon: {
    textAlign: 'center'
  }
});

const Icon = ({ size, name, color, ...props }) => {

  const iconStyle = [
    styles.iconBody,
    theme.border
  ];

  return (
    <TouchableOpacity style={iconStyle} {...props}>
      <Ionicons style={styles.icon} name={name} size={size} color={color} />
    </TouchableOpacity>

  );
};

export default Icon;