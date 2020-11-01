import { useState } from 'react';

const useField = () => {

  const [value, setValue] = useState();

  const onChangeText = (e) => {
    setValue(e);
  };

  const reset = () => {
    setValue('');
  };

  const placeholder = 'insert value';

  return {
    value,
    onChangeText,
    reset,
    placeholder
  };

};

export default useField;