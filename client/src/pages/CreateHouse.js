import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreateHouse() {
  const initialValues = {
    address: '',
    currentValue: '',
    loanAmount: '',
  };

  const onSubmit = (data) => {
    axios.post('http://localhost:3002/houses', data).then((response) => {
      console.log('greate!');
    });
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required(),
    currentValue: Yup.number().min(1).required(),
    loanAmount: Yup.number().min(1).required(),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Address: </label>
          <ErrorMessage name='address' component='span' />
          <Field id='address' name='address' placehplder='Address...' />

          <label>Current value: </label>
          <ErrorMessage name='currentValue' component='span' />
          <Field
            id='currentValue'
            name='currentValue'
            placehplder='Current value...'
          />

          <label>Loan amount: </label>
          <ErrorMessage name='loanAmount' component='span' />
          <Field
            id='loanAmount'
            name='loanAmount'
            placehplder='Loan amount...'
          />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateHouse;
