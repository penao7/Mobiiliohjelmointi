import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.normal,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },
  headingColor: {
    color: theme.colors.textHeading
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small
  }
});

const Text = ({ style, fontWeight, fontSize, color, children, ...props }) => {

  const textStyle = [
    styles.text,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontSize === 'small' && styles.fontSizeSmall,
    color === 'heading' && styles.headingColor,
    style
  ];

  return (
    <NativeText style={textStyle} {...props}>{children}</NativeText>
  );
};

export default Text;