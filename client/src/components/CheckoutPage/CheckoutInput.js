
import React from 'react';
import styles from './CheckoutInput.module.css';

const CheckoutInput = (props) => {
    //connect props classes with this component classes
    const classes = `${styles.inputBox} ${props.className}`;
  return (
    <div className={classes}>
      <input required type="text"  />
      <span>{props.label || ""}</span>
    </div>
  );
};

export default CheckoutInput;

