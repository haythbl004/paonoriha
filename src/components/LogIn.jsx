import React, { useState } from "react";
import "./LogIn.css";
import LogInInput from "./LogInInput/LogInInput";

import home from './Icons/home.svg';

function LogIn() {
  // Initialize the state for the checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // Toggle the checkbox state when clicked
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <div className="go-to-home">
        <button>
          <img src={home} alt="" />
        </button>
      </div>
      <div className="login-form">
        <LogInInput />
      </div>
    </div>
  );
}

export default LogIn;
