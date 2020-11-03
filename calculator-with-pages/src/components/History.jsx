import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import HistoryItem from './HistoryItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center'
  }
});

const History = ({ route }) => {

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text>History:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={HistoryItem}
      />
    </View>
  );
};

export default History;