import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || 'button'}//jesli typ jest inny to uzyjemy innego typu, jesli nie ma okreslonego to uzyjemy button
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;
