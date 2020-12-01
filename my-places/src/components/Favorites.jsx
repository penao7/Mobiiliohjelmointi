import React, { useState, useEffect } from 'react';
import useField from '../hooks/useField';
import { Alert, View, FlatList, Button, StyleSheet } from 'react-native';
import firebase from '../Firestore';
import RenderFavoriteAddress from './RenderFavoriteAddress';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
  },
});

const Favorites = ({ navigation }) => {
  const [savedAdresses, setSavedAddresses] = useState([]);
  const { navigate } = navigation;
  const place = useField();

  const db = firebase.firestore();

  const getAdresses = async () => {
    try {
      const { docs } = await db.collection('addresses').get();
      setSavedAddresses(docs.map(doc => { return { data: doc.data(), id: doc.id }; }));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAddress = async (id) => {
    try {
      await db.collection('addresses').doc(id).delete();
      getAdresses();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this address?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel pressed'),
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => deleteAddress(id) }
      ],
      { cancelable: false }
    );
  };

  const addAddress = async () => {
    await db.collection('addresses').add({
      address: place.value
    });
    return getAdresses();
  };

  useEffect(() => {
    getAdresses();
  }, []);

  return (
    <View style={styles.screenStyle}>
      <TextInput {...place} placeholder='find' />
      <View style={{ padding: 10 }}>
        <Button title='Save' onPress={() => addAddress()} />
      </View>
      <FlatList
        data={savedAdresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderFavoriteAddress item={item} navigate={navigate} place={place} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
};

export default Favorites;