import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import useField from '../hooks/useField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    width: 200
  },
  buttonStyle: {
    padding: 10
  }
});

const TextToSpeech = () => {

  const speechField = useField();

  const speak = () => {
    Speech.speak(speechField.value);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...speechField} placeholder='type' />
      <View style={styles.buttonStyle}>
        <Button title='speak' onPress={() => speak()} />
      </View>
    </View>
  );
};

export default TextToSpeech;