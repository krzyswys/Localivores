import React from "react";
import InputField from "./InputField";
import Label from "./Label";
import PasswordContainer from "./PasswordContainer";
import Button from "../../UI/Button/Button";
import { FcGoogle } from "react-icons/fc";
import {useState} from "react";
import "./AuthForm.scss";
const Login = ({
  isLogin,
  enteredEmail,
  emailChangeHandler,
  emailBlurHandler,
  emailHasError,
  enteredPassword,
  passwordChangeHandler,
  passwordBlurHandler,
  passwordHasError,
  isPasswordVisible,
  setIsPasswordVisible,
  loginIsValid,
  changeAuth,
}) => {
  const [isRemembered, setIsRemembered] = useState(false);

  
  return (
    <div className={isLogin ? "login" : "login slide-up"}>
      <div className="center">
        <h2 className="form-title" id="login" onClick={changeAuth}>
          <span>or</span>Log in
        </h2>
        <div className="form-holder">
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            id="login_email"
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
            id="login_password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            hasError={passwordHasError}
            toggleVisibility={() => setIsPasswordVisible((prev) => !prev)}
          />
          <Label
            htmlFor="login_password"
            isShown={passwordHasError}
            className="error-text"
          >
            Please enter a valid password.
          </Label>
        </div>
        <div className="remember-me-wrapper">
          <input
            type="checkbox"
            id="rememberMe"
            checked={isRemembered}
            onChange={() => setIsRemembered((prev) => !prev)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <Button className="google-btn">
          <div className="google-icon">
            <FcGoogle />
          </div>
          <span className="google-text">Login with Google</span>
        </Button>
        

        <Button type="submit" className="submit-btn" disabled={!loginIsValid}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
