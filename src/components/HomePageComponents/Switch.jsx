import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [isLeft, setIsLeft] = useState(true);

  const handleToggle = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className="form-box">
      <div className="button-box">
        <div className={`btn ${isLeft ? "left" : "right"}`}></div>
        <button onClick={handleToggle} className="toggle-btn">
          Log In
        </button>
        <button onClick={handleToggle} className="toggle-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Switch;
