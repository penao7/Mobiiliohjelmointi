import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import useField from '../hooks/useField';
import Button from '../components/Button';
import useCalculate from '../hooks/useCalculate';

const styles = StyleSheet.create({
  columnContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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

const Calculator = ({ navigation }) => {

  const upperNumericField = useField('numeric');
  const lowerNumericField = useField('numeric');
  const [history, setHistory] = useState([]);

  const [result, setResult] = useState();

  const { calculate } = useCalculate();

  const handleCalculation = async (type) => {
    const { result, calculateString } = await calculate(upperNumericField.fields.value, lowerNumericField.fields.value, type);
    setResult(result);
    setHistory(history.concat(calculateString));
  };

  const clearFields = () => {
    upperNumericField.reset();
    lowerNumericField.reset();
  };

  return (
    <View style={styles.columnContainer}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.textInput} {...upperNumericField.fields} />
      <TextInput style={styles.textInput} {...lowerNumericField.fields} />
      <View style={styles.rowContainer}>
        <Button color='sum' onPress={() => handleCalculation('+')} title='+' />
        <Button color='subtract' onPress={() => handleCalculation('-')} title='-' />
      </View>
      <View style={styles.rowContainer}>
        <Button color='multiply' onPress={() => handleCalculation('*')} title='*' />
        <Button color='division' onPress={() => handleCalculation('/')} title='/' />
      </View>
      <View style={styles.rowContainer}>
        <Button title='Clear' onPress={() => clearFields()} />
        <Button title='History' onPress={() => navigation.navigate('History', { data: history })} />
      </View>
    </View>
  );
};

export default Calculator;