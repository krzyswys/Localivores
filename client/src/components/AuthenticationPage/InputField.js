import React from 'react';
import Label from './Label';
const InputField = ({
  type,
  className,
  placeholder,
  name,
  id,
  value,
  onChange,
  onBlur,
  hasError,
  errorMsg,
  isPasswordField
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        className={`input ${className} ${hasError ? "invalid" : ""}`}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Label htmlFor={id} isShown={hasError && !isPasswordField} className="error-text">
        {errorMsg}
      </Label>
    </React.Fragment>
  );
};

export default InputField;
