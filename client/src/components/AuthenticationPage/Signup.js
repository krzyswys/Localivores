import React from 'react';
import InputField from './InputField';
import Label from './Label';
import PasswordContainer from './PasswordContainer';
import Button from "../../UI/Button/Button";
import {FcGoogle} from "react-icons/fc";
import './AuthForm.scss'
const Signup = ({
    isLogin, 
    enteredName,
    nameChangeHandler,
    nameBlurHandler,
    nameHasError,
    enteredEmail, 
    emailChangeHandler,
    emailBlurHandler,
    emailHasError,
    enteredPassword,
    passwordChangeHandler,
    passwordBlurHandler,
    passwordHasError,
    enteredConfirmPassword,
    confirmPasswordChangeHandler,
    confirmPasswordBlurHandler,
    confirmPasswordHasError,
    isPasswordVisible,
    setIsPasswordVisible,
    signupIsValid,
    changeAuth
}) => {
  return (
    <div className={isLogin ? "signup slide-up" : "signup"}>
      <h2 className="form-title" id="signup" onClick={changeAuth}>
        <span>or</span>Sign up
      </h2>
      <div className="form-holder">
        <InputField
          type="text"
          placeholder="Name"
          name="name"
          id="signup_name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          hasError={nameHasError}
          errorMsg="The name must be at least 3 characters long."
        />
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          id="signup_email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          errorMsg="Please enter a valid email."
        />
        <PasswordContainer
          isPasswordVisible={isPasswordVisible}
          placeholder="Password"
          name="password"
          id="signup_password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          hasError={passwordHasError}
          toggleVisibility={() => setIsPasswordVisible((prev) => !prev)}
        />
        <Label
          htmlFor="signup_password"
          isShown={passwordHasError}
          className="error-text"
        >
          Password must have lowercase and uppercase letters and at least one special character.
        </Label>
        <InputField
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Confirm Password"
          name="confirmPassword"
          id="signup_confirmPassword"
          value={enteredConfirmPassword}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordBlurHandler}
          hasError={confirmPasswordHasError}
          errorMsg="Passwords don't match."
        />
      </div>

      <Button className="google-btn">
          <div className="google-icon">
            <FcGoogle />
          </div>
          <span className="google-text">Signup with Google</span>
        </Button>
      <Button
        type="submit"
        className="submit-btn"
        disabled={!signupIsValid}
      >
        Sign up
      </Button>
    </div>
  );
}

export default Signup;
