import { useState } from 'react';

const useField = (keyboardType) => {

  const [value, setValue] = useState('');

  const onChangeText = (e) => {
    setValue(e);
  };

  const placeholder = 'insert value';

  return {
    keyboardType,
    value,
    onChangeText,
    placeholder,
  };
};

export default useField;