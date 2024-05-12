import React from "react";
import "./NavBar.css";
import { useState } from "react";
import img from "../Icons/img.png";
import Switch from "./Switch";
function NavBar() {
    const [isToggle, setIsToggle] = useState(false);
    console.log(isToggle);
  return (
    <div className="navbar">
      {/* <img src={img} alt="Food Lover Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Tours</li>
          <li>Tutorils</li>
          <li>About</li>
        </ul>
      </nav> */}
      <div className="switch">
        <Switch
          rounded={true}
          isToggle={isToggle}
          onToggele={() => setIsToggle(!isToggle)}
        />
      </div>
    </div>
  );
}

export default NavBar;
