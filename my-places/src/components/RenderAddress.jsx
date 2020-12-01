import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addressStyle: {
    fontSize: 10,
    padding: 10,
    margin: 5,
  }
});


const RenderAddress = ({ address, setRegion }) => {

  if (!address) {
    return (
      <ActivityIndicator size="large" />
    );
  }

  return (
    <View style={styles.addressStyle}>
      <TouchableOpacity onPress={() => setRegion(address)}>
        <Text>{`${address.street}, ${address.city}, ${address.country}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderAddress;