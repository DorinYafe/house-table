import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '../components/Button/Button';

function CreateHouse() {
  const navigate = useNavigate();
  const initialValues = {
    address: '',
    currentValue: '',
    loanAmount: '',
  };

  const onSubmit = (data) => {
    axios
      .post('http://localhost:3002/houses', data)
      .then((response) => {
        navigate(`/house/${response.data.id}`);
      })
      .catch((error) => console.log(error.message));
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    currentValue: Yup.number()
      .min(1, 'Current value must be greater than or equal to 1')
      .required('Current value is required'),
    loanAmount: Yup.number()
      .min(1, 'Loan amount must be greater than or equal to 1')
      .required('Loan amount is required'),
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

          <Button type='submit' text='Submit' />
        </Form>
      </Formik>
    </div>
  );
}

export default CreateHouse;
