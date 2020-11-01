import React, { useState } from 'react';
import useField from '../hooks/useField';
import TextInput from './TextInput';
import Button from './Button';
import { View, Alert } from 'react-native';

const GuessField = ({ numberToBeGuessed, setInfoText, generateNumber }) => {

  const [countOfGuesses, setCountOfGuesses] = useState(0);

  const { reset, ...props } = useField('numeric');

  const incrementCount = () => {
    const currentCount = parseInt(countOfGuesses);
    setCountOfGuesses(currentCount + 1);
  };

  const resetGame = () => {
    generateNumber();
    setInfoText('Guess a number between 1-100');
    reset();
  };

  const handleNumberGuess = () => {
    incrementCount();

    const numberedGuess = parseInt(props.value);

    if (numberToBeGuessed === numberedGuess) {
      Alert.alert('Correct guess!', `You guessed the number in ${countOfGuesses} guesses`);
      resetGame();
    } else {
      if (numberedGuess < numberToBeGuessed) {
        setInfoText('Your guess is too low');
      } else if (numberedGuess > numberToBeGuessed) {
        setInfoText('Your guess is too high');
      }
    }
  };

  return (
    <View>
      <TextInput {...props} />
      <Button onPress={(e) => handleNumberGuess(e)} title='Guess!' />
    </View>
  );
};

export default GuessField;

