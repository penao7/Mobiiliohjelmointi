import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 60
  }
});

const RenderHistoryItem = ({ item }) => {
  return (
    <ListItem bottomDivider>
      <View style={styles.listItemContainer}>
        <ListItem.Title>{item.address}</ListItem.Title>
      </View>
    </ListItem>
  );
};

export default RenderHistoryItem;