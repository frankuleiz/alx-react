import React from 'react';
import Notifications from "../Notifications/Notifications"
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";


function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
