import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import useField from '../hooks/useField';
import Button from '../components/Button';

const styles = StyleSheet.create({
  columnContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textInput: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray'
  }
});

const Calculator = () => {

  const upperNumericField = useField('numeric');
  const lowerNumericField = useField('numeric');

  const [result, setResult] = useState(15);

  const handleSum = () => {
    setResult(parseInt(upperNumericField.value) + parseInt(lowerNumericField.value));
  };

  const handleSubtraction = () => {
    setResult(parseInt(upperNumericField.value) - parseInt(lowerNumericField.value));
  };

  return (
    <View style={styles.columnContainer}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.textInput} {...upperNumericField} />
      <TextInput style={styles.textInput} {...lowerNumericField} />
      <View style={styles.rowContainer}>
        <Button onPress={() => handleSum()} title='+' />
        <Button onPress={() => handleSubtraction()} title='-' />
      </View>
    </View>
  );
};

export default Calculator;