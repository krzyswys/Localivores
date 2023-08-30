
import React from 'react';
import classes from './CheckoutInput.module.css'

const CheckoutInput = (props) => {

    return (
        <div className={classes["coolinput"]}>
            <label htmlFor={props.name} className={classes["text"]}>{props.label}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                className={classes["input"]}
            />
        </div>
    );
}

export default CheckoutInput;
