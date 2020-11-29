import React from 'react';
import { View, Text } from 'react-native';

const RenderContact = ({ item }) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text>{`${item.name}, ${item.phoneNumbers ? item.phoneNumbers[0].number : ''}`}</Text>
    </View>
  );
};

export default RenderContact;