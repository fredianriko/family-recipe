import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      <form className="user-login-form">
        <h1>Login</h1>
        <label className="login-label">Username</label>
        <input type="text" placeholder="username" className="login-input" />
        <label className="login-label">Password</label>
        <input type="password" placeholder="input your password here" className="login-input" />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
