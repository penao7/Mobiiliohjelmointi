import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import useConvertField from '../hooks/useConvertField';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pickerStyle: {
    width: 150
  },
  boldText: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 50
  },
  euroLogo: {
    width: 200,
    height: 200,
    marginBottom: 50
  }
});

const EuroConverter = () => {

  const [rates, setRates] = useState([]);
  const [currency, setCurrency] = useState('');
  const convertedValue = useConvertField(currency);

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };

  const getCurrencies = () => {
    axios.get('https://api.exchangeratesapi.io/latest')
      .then(result => setRates(result.data.rates))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.euroLogo} source={{ uri: 'https://cdn.pixabay.com/photo/2014/07/23/15/04/euro-400249_1280.jpg' }} />
      <Text style={styles.boldText}>{convertedValue.rate + ' \u20AC'}</Text>
      <View style={styles.rowContainer}>
        <TextInput {...convertedValue} marginRight={20} placeholder='value'></TextInput>
        <Picker
          selectedValue={currency}
          onValueChange={(value) => handleCurrencyChange(value)}
          style={styles.pickerStyle}
        >
          {Object.entries(rates).map(([k, v]) => (
            <Picker.Item key={k} label={k} value={v} />
          ))
          }
        </Picker>
      </View>
    </View>
  );
};

export default EuroConverter;

