import React, { useState } from "react";
import "./LogIn.css";
import LogInInput from "./LogInInput/LogInInput";

import home from "./Icons/home.svg";

function LogIn({ onSignUpChange }) {
  // Initialize the state for the checkbox
  return (
    <div className="login-form">
      <LogInInput onSignUpChange={onSignUpChange} />
    </div>
  );
}

export default LogIn;
