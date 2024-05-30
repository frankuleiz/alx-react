import React from "react";
import "./Login.css";

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" autoComplete="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" autoComplete="current-password"></input>
          <button type="submit">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
