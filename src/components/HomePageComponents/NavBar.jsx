import React from "react";
import { useEffect,useState } from "react";
import "./NavBar.css";
import logo from "../Icons/logo.svg";
import Switch from "./Switch";
import MakeYourTours from './MakeYourTours';
function NavBar({
  logIn,
  sginUp,
  onLogInChange,
  onSignUpChange,
  onHomeChange,
  onAboutChange,
  onTutorialsChange,
  onMyToursChanges
}) {

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <nav>
        <ul className="navBarUL">
          <li className="navBarLI home" onClick={onHomeChange}>
            Home
          </li>
          <li className="navBarLI" onClick={onTutorialsChange}>
            Tutorials
          </li>
          <li className="navBarLI" onClick={onAboutChange}>
            About
          </li>
        </ul>
      </nav>
      <div className="NavBar-YourTours">
        <MakeYourTours onMyToursChanges={onMyToursChanges} />
        {/* <Switch
          logIn={logIn}
          sginUp={sginUp}
          onLogInChange={onLogInChange}
          onSignUpChange={onSignUpChange}
        /> */}
      </div>
    </div>
  );
}

export default NavBar;
