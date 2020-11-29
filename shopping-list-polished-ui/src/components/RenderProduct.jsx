import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

const RenderProduct = ({ item, deleteItem }) => {

  const styles = StyleSheet.create({
    listItem: {
      width: 400
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    container: {
      flex: 1,
      width: 500,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    touchableStyle: {
      paddingLeft: 10,
      justifyContent: 'center'
    }
  });


  return (
    <ListItem bottomDivider style={styles.listItem}>
      <View view style={styles.rowContainer}>
        <View style={styles.container}>
          <View>
            <ListItem.Title>{item.product}</ListItem.Title>
          </View>
          <View>
            <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
          </View>
        </View>
        <TouchableOpacity style={styles.touchableStyle} onPress={() => deleteItem(item.id)}>
          <Fontisto name="shopping-basket-remove" size={24} color="salmon" />
        </TouchableOpacity>
      </View>
    </ListItem>
  );
};

export default RenderProduct;