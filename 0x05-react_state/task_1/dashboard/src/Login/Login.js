import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setenableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setisLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setenableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setenableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" id="email" name="email" value={email} onChange={handleChangeEmail}></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" id="password" name="password" value={password} onChange={handleChangePassword}></input>
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;