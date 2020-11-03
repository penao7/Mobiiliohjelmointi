import React from 'react';
import { Text, View } from 'react-native';

const HistoryItem = ({ item }) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
};

export default HistoryItem;