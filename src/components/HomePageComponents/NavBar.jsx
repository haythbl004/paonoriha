import React from "react";
import { useEffect,useState } from "react";
import "./NavBar.css";
import img from "../Icons/img.png";
import Switch from "./Switch";
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
      <img src={img} alt="Food Lover Logo" />
      <nav>
        <ul>
          <li onClick={onHomeChange}>Home</li>
          <li onClick={onSamplesChange}>Samples</li>
          <li onClick={onTutorialsChange}>Tutorials</li>
          <li onClick={onAboutChange}>About</li>
        </ul>
      </nav>
      <div className="switch">
        <Switch
          logIn={logIn}
          sginUp={sginUp}
          onLogInChange={onLogInChange}
          onSignUpChange={onSignUpChange}
        />
      </div>
    </div>
  );
}

export default NavBar;
