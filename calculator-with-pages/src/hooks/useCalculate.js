const useCalculate = () => {

  const calculate = async (value1, value2, type) => {

    if (value1 === '' || value2 === '') {
      return '';
    }

    const numbered1 = parseFloat(value1);
    const numbered2 = parseFloat(value2);

    const getResult = async () => {
      if (type === '+') {
        return (numbered1 + numbered2).toFixed(3);
      } else if (type === '-') {
        return (numbered1 - numbered2).toFixed(3);
      } else if (type === '*') {
        return (numbered1 * numbered2).toFixed(3);
      } else if (type === '/')
        return (numbered1 / numbered2).toFixed(3);
    };

    let result = await getResult();
    if (result.substr(result.indexOf('.') + 1).charAt(0) === '0') {
      result = result.split('.')[0];
    }
    const calculateString = `${value1} ${type} ${value2} = ${result}`;

    return { result, calculateString };

  };

  return { calculate };
};

export default useCalculate;