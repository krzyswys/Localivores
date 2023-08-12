import React, { useState } from 'react';
import './AuthForm.scss'; // We will create this CSS file in the next step.
import Button from '../../UI/Button/Button'
import Logo from '../../UI/Logo/Logo'
import classes from './FormLogo.module.css'
import {useNavigate} from 'react-router-dom';
import useInput from './use-input'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/after');
  };

  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValud,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== '');

  let loginIsValid = false;
  let signupIsValid = false;
  if (nameIsValud && emailIsValid && passwordIsValid) {
    signupIsValid = true;
  }
  if (emailIsValid && passwordIsValid) {
    loginIsValid = true;
  }


  const changeAuth = () =>{
    nameReset();
    emailReset();
    passwordReset();
    setIsLogin((prevState) => !prevState);
    
  }

  return (
    <main className="auth-form">
      <Logo className={classes.logo} onClick={navigateHandler} />
      <div className="form-structor">
        <div className={isLogin ? "signup slide-up" : "signup"}>
          <h2 className="form-title" id="signup" onClick={changeAuth}><span>or</span>Sign up</h2>
          {!isLogin && <div className="form-holder">
            <input
              type="text"
              className={`input ${nameHasError ? 'invalid' : ''}`}
              placeholder="Name"
              name="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p className="error-text">Please enter a valid name.</p>}
            <input
              type="email"
              className={`input ${emailHasError ? 'invalid' : ''}`}
              placeholder="Email"
              name="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p className="error-text">Please enter a valid email.</p>}
            <input
              type="password"
              className={`input ${passwordHasError ? 'invalid' : ''}`}
              placeholder="Password"
              name="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && <p className="error-text">Please enter a valid password.</p>}
          </div>}
          <Button type="submit" className="submit-btn" disabled={!signupIsValid}>Sign up</Button>
        </div>
        <div className={isLogin ? "login" : "login slide-up"}>
          <div className="center">
            <h2 className="form-title" id="login" onClick={changeAuth}><span>or</span>Log in</h2>
            {isLogin && <div className="form-holder">
              <input
                type="email"
                className={`input ${emailHasError ? 'invalid' : ''}`}
                placeholder="Email"
                name="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && <p className="error-text">Please enter a valid email.</p>}
              <input
                type="password"
                className={`input ${passwordHasError ? 'invalid' : ''}`}
                placeholder="Password"
                name="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && <p className="error-text">Please enter a valid password.</p>}
            </div>}
            <Button type="submit" className="submit-btn" disabled={!loginIsValid}>Log in</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;