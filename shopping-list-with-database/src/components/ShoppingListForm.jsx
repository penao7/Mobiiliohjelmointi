import React from 'react';
import ShoppingListFormFields from './ShoppingListFormFields';
import * as yup from 'yup';
import { Formik } from 'formik';

const ShoppingListForm = ({ saveItem }) => {

  const onSubmit = (values, { resetForm }) => {
    saveItem(values.product, values.amount);
    resetForm();
  };

  const initialValues = {
    product: '',
    amount: ''
  };

  const validationSchema = yup.object().shape({
    product: yup
      .string()
      .min(3, 'Product name must equal or be longer than 3')
      .required('Product name is required'),
    amount: yup
      .string()
      .min(3, 'Amount must equal or be longer than 3')
      .required('Amount is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, resetForm }) => <ShoppingListFormFields onSubmit={handleSubmit} resetForm={resetForm} />}
    </Formik >
  );
};

export default ShoppingListForm;

