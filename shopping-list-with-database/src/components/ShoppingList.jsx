import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Heading from './Heading';
import Text from './Text';
import useDatabase from '../hooks/useDatabase';
import RenderProduct from './RenderProduct';
import Icon from './TouchableIcon';
import ShoppingListForm from './ShoppingListForm';

const ShoppingList = () => {

  const { products, saveItem, deleteItem, error } = useDatabase();
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <View style={!show && { display: 'none' }}>
        <ShoppingListForm saveItem={saveItem} />
      </View>
      {error ? <Text>{error}</Text> : <Text></Text>}
      <Icon name={show ? 'ios-arrow-up' : 'ios-arrow-down'} onPress={() => setShow(!show)} size={30} color='orchid' />
      <Heading>Shopping List</Heading>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <RenderProduct item={item} deleteItem={deleteItem} />
        )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default ShoppingList;