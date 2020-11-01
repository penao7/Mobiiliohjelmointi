import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GuessField from './GuessField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Guess = () => {

  const [numberToBeGuessed, setNumberToBeGuessed] = useState('');
  const [infoText, setInfoText] = useState('Guess a number between 1-00');

  useEffect(() => {
    generateNumber();
  }, []);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setNumberToBeGuessed(number);
  };

  return (
    <View style={styles.container}>
      <Text>{infoText}</Text>
      <GuessField
        numberToBeGuessed={numberToBeGuessed}
        setInfoText={setInfoText}
        generateNumber={generateNumber}
      />
    </View>
  );
};

export default Guess;