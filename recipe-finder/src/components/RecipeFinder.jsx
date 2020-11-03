import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import { List, Avatar } from 'react-native-paper';
import useField from '../hooks/useField';
import useRecipe from '../hooks/useRecipe';
import Constants from 'expo-constants';
import TextInput from './TextInput';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
  },
});

const RenderRecipeItem = ({ item }) => {

  return (
    <View>
      <List.Item
        title={item.title}
        left={ () => <Avatar.Image source={{ uri: item.thumbnail }} /> }
      />
    </View>
  );
};


const RecipeFinder = () => {

  const ingredientField = useField();
  const [ingredient, setIngredient] = useState('');
  const recipes = useRecipe(ingredient);

  const fetch = (e) => {
    e.preventDefault();
    setIngredient(ingredientField.value);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderRecipeItem}
      />
      <TextInput {...ingredientField} placeholder='search' />
      <Button title='search' onPress={(e) => fetch(e)} />
    </View>
  );
};

export default RecipeFinder;