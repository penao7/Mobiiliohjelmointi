import { useState } from 'react';

const useField = (keyboardType) => {

  const [value, setValue] = useState('');

  const onChangeText = (e) => {
    setValue(e);
  };

  const reset = () => {
    setValue('');
  };

  const placeholder = 'insert value';

  return {
    fields: {
      keyboardType,
      value,
      onChangeText,
      placeholder
    },
    reset
  };
};

export default useField;