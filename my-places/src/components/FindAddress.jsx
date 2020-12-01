import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// Will be used later
// import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants';
import AddressModal from './AddressModal';
import { Dimensions } from 'react-native';

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
  modalContainer: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const FindAddress = ({ place }) => {

  const _map = useRef('');

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

  userRegion;

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

  // ------------Will be used later------------

  // const whereAmI = async () => {
  //   (async () => {
  //     const { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //     }
  //     const location = await Location.getCurrentPositionAsync({});
  //     animateToRegion(location);

  //   })();
  // };

  const getAddress = async () => {
    const { data } = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${Constants.manifest.extra.API_KEY}&location=${place}`);
    handleAdresses(data.results[0].locations);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const handleAdresses = async (rawAddressList) => {
    const addressList = await rawAddressList.map(address => (
      {
        street: address.street,
        city: address.adminArea5,
        country: address.adminArea1,
        coords: { latitude: address.latLng.lat, longitude: address.latLng.lng }
      }
    ));

    if (addressList.length === 1) {
      animateToRegion(addressList[0]);
    } else {
      setAdresses(addressList);
      setVisible(true);
    }
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
      <View style={styles.modalContainer} >
        <AddressModal isVisible={isVisible} setVisible={setVisible} addresses={addresses} setRegion={animateToRegion} />
      </View>
    </View>
  );
};

export default FindAddress;