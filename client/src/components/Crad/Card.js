import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { NumericFormat } from 'react-number-format';
import classes from './Card.module.css';
import Button from '../Button/Button';

function Card({ house, onClick }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);

  const initialValues = {
    currentValue: house?.currentValue,
    loanAmount: house?.loanAmount,
  };

  const validationSchema = Yup.object().shape({
    currentValue: Yup.number()
      .min(1, 'Current value must be greater than or equal to 1')
      .required('Current value is required'),
    loanAmount: Yup.number()
      .min(1, 'Loan amount must be greater than or equal to 1')
      .required('Loan amount is required'),
  });

  const handleClick = () => {
    setIsEditMode((prev) => !prev);
  };

  const onSubmit = (data) => {
    axios
      // Update a house recored by id
      .put(`http://localhost:3002/houses/byId/${house?.id}`, data)
      // After updating the house recored, navigate the user back to home page
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className={classes.house} onClick={onClick}>
      <div className={classes.title}>Address: {house?.address}</div>
      {isEditMode ? (
        <div className={classes.body}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form className='formContainer' style={{ width: 'auto' }}>
              <label>Current value: </label>
              <ErrorMessage
                name='currentValue'
                onSubmit={onSubmit}
                component='span'
              />
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
              <Button type='submit' text='Save' />
            </Form>
          </Formik>
        </div>
      ) : (
        <>
          <div className={classes.body}>
            Current value:
            <NumericFormat
              style={{ marginLeft: '0.5rem' }}
              value={house?.currentValue}
              displayType='text'
              thousandSeparator={true}
              prefix='$'
            />
          </div>
          <div className={classes.body}>
            Loan amount:
            <NumericFormat
              style={{ marginLeft: '0.5rem' }}
              value={house?.loanAmount}
              displayType='text'
              thousandSeparator={true}
              prefix='$'
            />
          </div>
        </>
      )}
      <div className={classes.footer}>
        <div>
          Risk:
          <NumericFormat
            style={{ marginLeft: '0.5rem' }}
            value={house?.risk}
            displayType='text'
            suffix='%'
            decimalScale={2}
          />
        </div>
        {!isEditMode && pathname !== '/' && (
          <Button type='button' text='Edit' onClick={handleClick} />
        )}
      </div>
    </div>
  );
}

export default Card;
