import React from 'react';
import { Modal, View, ScrollView, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from './Icon';
import RenderAddress from './RenderAddress';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fefefe',
    margin: 50,
    borderRadius: 20,
    width: width - 50,
    height: height - 50,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});

const AddressModal = ({ isVisible, setVisible, addresses, setRegion }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}

      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, padding: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Search result</Text>
          </View>
          <ScrollView>
            <View style={{ flexGrow: 2 }}>
              {addresses.map((address, index) => (
                <RenderAddress key={index} address={address} setRegion={setRegion} />
              ))}
            </View>
          </ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="md-close" size={30} color="grey"
              onPress={() => {
                setVisible(!isVisible);
              }}
            />
          </View>
        </View>
      </View>
    </Modal >
  );
};

export default AddressModal;