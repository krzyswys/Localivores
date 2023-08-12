import React, { useState } from 'react';
import './AuthForm.scss'; // We will create this CSS file in the next step.

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main className="auth-form">
    <div className="form-structor">
      <div className={isLogin ? "signup slide-up" : "signup"}>
        <h2 className="form-title" id="signup" onClick={() => setIsLogin(false)}><span>or</span>Sign up</h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className={isLogin ? "login" : "login slide-up"}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={() => setIsLogin(true)}><span>or</span>Log in</h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
    </main>
  );
};

export default AuthForm;