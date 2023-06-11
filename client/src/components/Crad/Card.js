import React from 'react';
import classes from './Card.module.css';

function Card({ house, onClick }) {
  return (
    <div className={classes.house} onClick={onClick}>
      <div className={classes.title}>Address: {house?.address}</div>
      <div className={classes.body}>Current value: {house?.currentValue}</div>
      <div className={classes.body}>Loan amount: {house?.loanAmount}</div>
      <div className={classes.footer}>Risk: {house?.risk}%</div>
    </div>
  );
}

export default Card;
