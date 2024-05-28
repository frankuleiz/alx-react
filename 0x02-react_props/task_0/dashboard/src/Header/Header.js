import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "../assets/holberton-logo.jpg";
import "./Header.css"

function Header () {
  return (
    <React.Fragment>
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </React.Fragment>
  );
}



export default Header;