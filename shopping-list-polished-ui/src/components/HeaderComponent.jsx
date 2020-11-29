import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import theme from '../theme';

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 2,
    backgroundColor: theme.colors.themeColor,
    marginBottom: 20
  },
  headerTextStyle: {
    color: theme.colors.headerText,
    fontSize: theme.fontSizes.body
  }
});

const HeaderComponent = () => {
  return (
    <Header
      containerStyle={styles.headerStyle}
      centerComponent={{ text: 'SHOPPING LIST', style: styles.headerTextStyle}}
    />
  );
};

export default HeaderComponent;