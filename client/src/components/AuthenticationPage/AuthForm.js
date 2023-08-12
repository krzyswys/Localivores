import React, { useState } from "react";
import "./AuthForm.scss"; // We will create this CSS file in the next step.
import Button from "../../UI/Button/Button";
import Logo from "../../UI/Logo/Logo";
import classes from "./FormLogo.module.css";
import { useNavigate } from "react-router-dom";
import useInput from "./use-input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/after");
  };

  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value)
  );

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#]).+$/;

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => passwordRegex.test(value));

  const {
    value: enteredConfirmPassword,
    hasError: confirmPasswordHasError,
    isValid: confirmPasswordIsValid,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordReset,
  } = useInput((value) => value === enteredPassword);

  let loginIsValid = false;
  let signupIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
    
  ) {
    signupIsValid = true;
  }

  if (emailIsValid && passwordIsValid) {
    loginIsValid = true;
  }

  const changeAuth = () => {
    nameReset();
    emailReset();
    passwordReset();
    confirmPasswordReset();
    setIsLogin((prevState) => !prevState);
  };

  return (
    <main className="auth-form">
      <Logo className={classes.logo} onClick={navigateHandler} />
      <div className="form-structor">
        <div className={isLogin ? "signup slide-up" : "signup"}>
          <h2 className="form-title" id="signup" onClick={changeAuth}>
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className={`input ${nameHasError ? "invalid" : ""}`}
              placeholder="Name"
              name="name"
              id="signup_name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <label htmlFor="signup_name" className="error-text">The name must be at least 3 characters long.</label>
            )}
            <input
              type="email"
              className={`input ${emailHasError ? "invalid" : ""}`}
              placeholder="Email"
              name="email"
              id="signup_email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <label htmlFor="signup_email" className="error-text">Please enter a valid email.</label>
            )}
            <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className={`input ${passwordHasError ? "invalid" : ""}`}
                placeholder="Password"
                name="password"
                id="signup_password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              <button
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="visibility-icon"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {passwordHasError && (
              <label htmlFor="signup_password" className="error-text">
                Password must have lowercase and uppercase letters and at least
                one special character.
              </label>
            )}
            <input
              type={isPasswordVisible ? "text" : "password"}
              className={`input ${confirmPasswordHasError ? "invalid" : ""}`}
              placeholder="Confirm Password"
              name="confirmPassword"
              id="signup_confirmPassword"
              value={enteredConfirmPassword}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
            />
            {confirmPasswordHasError && (
              <label htmlFor="signup_confirmPassword" className="error-text">Passwords don't match.</label>
            )}
          </div>
          <Button
            type="submit"
            className="submit-btn"
            disabled={!signupIsValid}
          >
            Sign up
          </Button>
        </div>
        <div className={isLogin ? "login" : "login slide-up"}>
          <div className="center">
            <h2 className="form-title" id="login" onClick={changeAuth}>
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input
                type="email"
                className={`input ${emailHasError ? "invalid" : ""}`}
                placeholder="Email"
                name="email"
                id="login_email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && (
                <label htmlFor="login_email" className="error-text">Please enter a valid email.</label>
              )}
              <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className={`input ${passwordHasError ? "invalid" : ""}`}
                placeholder="Password"
                name="password"
                id="login_password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              <button
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="visibility-icon"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
              {passwordHasError && (
                <label htmlFor="login_password" className="error-text">Please enter a valid password.</label>
              )}
            </div>
            <Button
              type="submit"
              className="submit-btn"
              disabled={!loginIsValid}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
