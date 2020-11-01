import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.body
  },
  colorHeading: {
    color: theme.colors.heading
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
});

const Text = ({ color, fontWeight, fontSize, style, children, ...props }) => {

  const textStyle = [
    styles.text,
    color === 'heading' && styles.colorHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontSize === 'heading' && styles.fontSizeHeading,
    style
  ];

  return (
    <NativeText style={textStyle} {...props}>{children}</NativeText>
  );
};

export default Text;
