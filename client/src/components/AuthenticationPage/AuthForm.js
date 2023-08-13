import React, { useState } from "react";
import "./AuthForm.scss"; // We will create this CSS file in the next step.
import Logo from "../../UI/Logo/Logo";
import classes from "./FormLogo.module.css";
import { useNavigate } from "react-router-dom";
import useInput from "./use-input";
import Login from "./Login";
import Signup from "./Signup";
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
          <Signup
            isLogin={isLogin}
            enteredName={enteredName}
            nameChangeHandler={nameChangeHandler}
            nameBlurHandler={nameBlurHandler}
            nameHasError={nameHasError}
            enteredEmail={enteredEmail}
            emailChangeHandler={emailChangeHandler}
            emailBlurHandler={emailBlurHandler}
            emailHasError={emailHasError}
            enteredPassword={enteredPassword}
            passwordChangeHandler={passwordChangeHandler}
            passwordBlurHandler={passwordBlurHandler}
            passwordHasError={passwordHasError}
            enteredConfirmPassword={enteredConfirmPassword}
            confirmPasswordChangeHandler={confirmPasswordChangeHandler}
            confirmPasswordBlurHandler={confirmPasswordBlurHandler}
            confirmPasswordHasError={confirmPasswordHasError}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            signupIsValid={signupIsValid}
            changeAuth={changeAuth}
          />
          <Login
            isLogin={isLogin}
            enteredEmail={enteredEmail}
            emailChangeHandler={emailChangeHandler}
            emailBlurHandler={emailBlurHandler}
            emailHasError={emailHasError}
            enteredPassword={enteredPassword}
            passwordChangeHandler={passwordChangeHandler}
            passwordBlurHandler={passwordBlurHandler}
            passwordHasError={passwordHasError}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
            loginIsValid={loginIsValid}
            changeAuth={changeAuth}/>
      </div>
    </main>
  );
};

export default AuthForm;
