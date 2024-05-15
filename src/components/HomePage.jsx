import React, { useState } from "react";
import "./HomePage.css";
import NavBar from "./HomePageComponents/NavBar";
import LogIn from "./LogIn";
import SingIn from "./SingIn";
import MyToursPage from "./MyToursPage";
import AddNewTour from './AddNewTour';


function HomePage({ onMyToursChange }) {
  const [logIn, setLogIn] = useState(false);
  const [sginUp, setSginUp] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [tutorials, setTutorials] = useState(false);
  //to open LogIn
  const handleLogInChange = () => {
    setLogIn(!logIn);
    setSginUp(false);
    setHome(false);
    setAbout(false);
    setTutorials(false);
  };
  //to open SginUp
  const handleSignUpChange = () => {
    setLogIn(false);
    setSginUp(!sginUp);
    setHome(false);
    setAbout(false);
    setTutorials(false);
  };
  //to open Home
  const handleHomeChange = () => {
    setLogIn(false);
    setSginUp(false);
    setHome(!home);
    setAbout(false);
    setTutorials(false);
  };
  //to open About
  const handleAboutChange = () => {
    setLogIn(false);
    setSginUp(false);
    setHome(false);
    setAbout(!about);
    setTutorials(false);
  };
  //to open Tutorials
  const handleTutorialsChange = () => {
    setLogIn(false);
    setSginUp(false);
    setHome(false);
    setAbout(false);
    setTutorials(!tutorials);
  };

  return (
    <div className="home-container">
      <NavBar
        logIn={logIn}
        sginUp={sginUp}
        onLogInChange={handleLogInChange}
        onSignUpChange={handleSignUpChange}
        onHomeChange={handleHomeChange}
        onAboutChange={handleAboutChange}
        onTutorialsChange={handleTutorialsChange}
        onMyToursChanges={onMyToursChange}
      />
      {logIn ? <LogIn onSignUpChange={handleSignUpChange} /> : null}
      {sginUp ? <SingIn /> : null}
    </div>
  );
}

export default HomePage;
