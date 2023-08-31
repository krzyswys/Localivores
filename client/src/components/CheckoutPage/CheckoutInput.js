
import React from 'react';
import styles from './CheckoutInput.module.css';

const CheckoutInput = (props) => {
    const classes = `${styles.inputBox} ${props.className}`;
    let inputElement;

    switch (props.type) {
        case 'select':
            inputElement = (
              <select >
                  {props.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            );
            break;
        case 'textarea':
            inputElement = <textarea  />;
            break;
        default:
            inputElement = <input type="text"  />;
    }

  return (
    <div className={classes}>
      {inputElement}
      <span>{props.label || ""}</span>
    </div>
  );
};


export default CheckoutInput;

