import { useState, useEffect } from 'react';

const useConvertField = (currency) => {

  const [value, setValue] = useState('0');
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const newRate = (value / currency).toFixed(2);
    setRate(newRate);
  }, [value, currency]);

  const onChangeText = (e) => {
    setValue(e);
  };

  return {
    value,
    onChangeText,
    rate,
    keyboardType: 'numeric'
  };
};

export default useConvertField;