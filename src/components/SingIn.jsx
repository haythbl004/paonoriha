import React from 'react'
import './SingIn.css';
import SingInInputs from './SingInCoponents/SingInInputs';
import home from "./Icons/home.svg";
function SingIn() {
  return (
    <div className="Singin-container">
      <div className="go-to-home">
        <button>
          <img src={home} alt="" />
        </button>
      </div>
      <div className="singin-form">
        <SingInInputs />
      </div>
    </div>
  );
}

export default SingIn