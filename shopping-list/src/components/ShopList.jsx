import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});

const ShopList = ({ shoppingList }) => {
  return (
    <View style={styles.container}>
      <Text fontSize='heading' fontWeight='bold' color='heading'>Shopping List</Text>
      {shoppingList.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))
      }
    </View>
  );
};

export default ShopList;