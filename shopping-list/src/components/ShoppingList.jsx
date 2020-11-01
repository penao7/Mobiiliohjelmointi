import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from './TextInput';
import useField from '../hooks/useField';
import ShopList from './ShopList';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row'
  }
});

const ShoppingList = () => {

  const [shoppingList, setShoppingList] = useState([]);
  const { reset, ...props } = useField();

  const handleAdd = () => {
    if (props.value === '') {
      return;
    }
    setShoppingList(shoppingList.concat(props.value));
    reset();
  };

  const handleClear = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput {...props} />
      <View style={styles.rowContainer}>
        <Button color='add' onPress={() => handleAdd()} title='add'></Button>
        <Button color='clear' onPress={() => handleClear()} title='clear'></Button>
      </View>
      <ShopList shoppingList={shoppingList} />
    </View>
  );
};

export default ShoppingList;