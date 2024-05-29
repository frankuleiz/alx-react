import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Notifications />
        <Header/>
        <Login />
        <Footer />
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
