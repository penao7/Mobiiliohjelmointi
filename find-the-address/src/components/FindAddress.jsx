import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  Modal,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import TextInput from './TextInput';
import useField from '../hooks/useField';
import * as Location from 'expo-location';
import axios from 'axios';
import Icon from './Icon';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapView: {
    width: width,
    height: height
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
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
  addressStyle: {
    fontSize: 10,
    padding: 10,
    margin: 5
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

const FindAddress = () => {

  const _map = useRef('');

  const [errorMsg, setErrorMsg] = useState('');
  const [marker, setMarker] = useState({
    coords: {
      latitude: 0,
      longitude: 0
    },
    street: '',
    name: '',
    city: ''
  });
  const [userRegion, setUserRegion] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [addresses, setAdresses] = useState([]);

  const animateToRegion = ({ coords, street, country, city }) => {
    const newRegion = { latitudeDelta: 0.01, longitudeDelta: 0.01, latitude: coords.latitude, longitude: coords.longitude };
    if (_map.current) {
      _map.current.animateToRegion(newRegion, 1000);
      setMarker({
        coords: { latitude: coords.latitude, longitude: coords.longitude },
        street: street,
        city: city,
        country: country
      });
      if (isVisible) {
        setVisible(false);
      }
    }
  };

  console.log(Constants);

  useEffect(() => {
    whereAmI();
  }, []);

  const whereAmI = async () => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('error');
        setErrorMsg('Permission to access location was denied');
      }
      const location = await Location.getCurrentPositionAsync({});
      animateToRegion(location);

    })();
  };

  const address = useField();

  const getAddress = () => {

    axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${Constants.manifest.extra.API_KEY}&location=${address.value}`)
      .then(raw => handleAdresses(raw.data.results[0].locations));
  };

  const handleAdresses = async (rawAddressList) => {
    console.log(rawAddressList);
    const addressList = await rawAddressList.map(address => (
      {
        street: address.street,
        city: address.adminArea5,
        country: address.adminArea1,
        coords: { latitude: address.latLng.lat, longitude: address.latLng.lng }
      }
    ));
    setAdresses(addressList);
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={styles.mapView}
        onRegionChangeComplete={region => setUserRegion(region)}
        loadingEnabled={true}
        toolbarEnabled={true}
      >
        <Marker coordinate={marker.coords} title={marker.street ? marker.street : marker.city ? marker.city : 'You'} />
      </MapView>
      <View style={{ flex: 1, paddingTop: 20, flexDirection: 'row', position: 'absolute', alignItems: 'center', justifyContent: 'center' }} >
        <AddressModal isVisible={isVisible} setVisible={setVisible} addresses={addresses} setRegion={animateToRegion} />
        <TextInput placeholder='type to search' {...address} />
        <Icon name="md-search" size={40} color="grey" onPress={() => getAddress()} />
        <Icon name="md-locate" size={40} color="grey" onPress={() => whereAmI()} />
      </View>
    </View>
  );
};

export default FindAddress;