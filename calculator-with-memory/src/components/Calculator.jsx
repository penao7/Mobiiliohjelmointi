import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import useField from '../hooks/useField';
import Button from '../components/Button';
import useCalculate from '../hooks/useCalculate';

const styles = StyleSheet.create({
  columnContainer: {
    paddingTop: 300,
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

const HistoryItem = ({ item }) => {
  return (
    <Text>{item}</Text>
  );
};

const History = ({ data }) => {
  return (
    <View>
      <Text>History:</Text>
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={HistoryItem}
      />
    </View>
  );
};

const Calculator = () => {

  const upperNumericField = useField('numeric');
  const lowerNumericField = useField('numeric');
  const [history, setHistory] = useState([]);

  const [result, setResult] = useState();

  const { calculate } = useCalculate();

  const handleCalculation = async (type) => {
    const { result, calculateString } = await calculate(upperNumericField.value, lowerNumericField.value, type);
    setResult(result);
    setHistory(history.concat(calculateString));
  };

  return (
    <View style={styles.columnContainer}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.textInput} {...upperNumericField} />
      <TextInput style={styles.textInput} {...lowerNumericField} />
      <View style={styles.rowContainer}>
        <Button color='sum' onPress={() => handleCalculation('+')} title='+' />
        <Button color='subtract' onPress={() => handleCalculation('-')} title='-' />
      </View>
      <View style={styles.rowContainer}>
        <Button color='multiply' onPress={() => handleCalculation('*')} title='*' />
        <Button color='division' onPress={() => handleCalculation('/')} title='/' />
      </View>
      <History data={history} />
    </View>
  );
};

export default Calculator;