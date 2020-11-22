import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';
import { Fontisto } from '@expo/vector-icons';

const RenderProduct = ({ item, deleteItem }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 3
    },
    touchableStyle: {
      paddingLeft: 10
    }
  });


  return (
    <View style={styles.container}>
      <Text>{`${item.product}, `}</Text>
      <Text>{`${item.amount} `}</Text>
      <TouchableOpacity style={styles.touchableStyle} onPress={() => deleteItem(item.id)}>
        <Fontisto name="shopping-basket-remove" size={29} color="mediumaquamarine" />
      </TouchableOpacity>
    </View>
  );
};

export default RenderProduct;