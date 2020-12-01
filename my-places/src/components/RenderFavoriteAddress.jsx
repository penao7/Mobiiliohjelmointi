import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from '../Firestore';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 60
  }
});

const RenderFavoriteAddress = ({ item, navigate, handleDelete }) => {

  const db = firebase.firestore();

  const handleNavigate = async (item, navigate) => {
    try {
      await db.collection('history').add({
        address: item.data.address
      });
      navigate('Map', { place: item.data.address });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleNavigate(item, navigate)}
      onLongPress={() => handleDelete(item.id)}
    >
      <ListItem bottomDivider>
        <View style={styles.listItemContainer}>
          <View style={{ flexGrow: 2 }}>
            <ListItem.Title>{item.data.address}</ListItem.Title>
          </View>
          <ListItem.Subtitle style={{ paddingRight: 10 }}>show on map</ListItem.Subtitle>
          <ListItem.Subtitle>
            <Icon name='angle-right' type='font-awesome' size={20} aria-hidden='true' />
          </ListItem.Subtitle>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

export default RenderFavoriteAddress;