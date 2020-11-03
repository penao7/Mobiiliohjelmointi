import { useState } from 'react';

const useField = () => {

  const [value, setValue] = useState('');

  const onChangeText = (e) => {
    setValue(e);
  };

  return {
    value,
    onChangeText,
  };
};

export default useField;