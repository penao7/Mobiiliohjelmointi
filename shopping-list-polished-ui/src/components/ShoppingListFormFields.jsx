import React from 'react';
import { View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const ShoppingListFormFields = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name='product' placeholder='product' />
      <FormikTextInput name='amount' placeholder='amount' />
      <View style={{ alignItems: 'flex-end' }}>
        <Button title='add' onPress={() => onSubmit()} />
      </View>
    </View>
  );
};

export default ShoppingListFormFields;