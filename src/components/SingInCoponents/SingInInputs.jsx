import React, { useState } from "react";
import "./SingInInputs.css";
import passwordicon from "../Icons/password.svg";
import user from "../Icons/user.svg";
import email from "../Icons/email.svg";
import githup from "../Icons/githup.svg";
import google from "../Icons/google.svg";
import axios from "axios";
function SingInInputs() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      axios.post("http://192.168.23.48:5000/api/v1/users/signup", data, {
        withCredentials: true,
      });

      // Handle successful login response
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };
  return (
    <div className="input-signup">
      <form onSubmit={handleSubmit} className="sign-up">
        <div className="singin-title">
          <h1 className="sginup">Sign Up</h1>
        </div>
        <div className="input-box">
          <input type="text" required className="user-signup" name="name" />
          <label className="user-signup-label">Full name</label>
          <img src={user} alt="" className="user-signup-img" />
        </div>
        <div className="input-box">
          <input type="email" required className="email-signup" name="email" />
          <label className="email-signup-label">Email</label>
          <img src={email} alt="" className="email-signup-img" />
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            className="password-signup"
            name="password"
          />
          <label className="password-signup-label">Password</label>
          <img src={passwordicon} alt="" className="password-signup-img" />
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            className="confirm-signup"
            name="passwordConfirm"
          />
          <label className="confirm-signup-label">Conferm the password</label>
          <img src={passwordicon} alt="" className="confirm-signup-img" />
        </div>
        <button className="btn-singin" type="submit">
          Sign up
        </button>
        <div className="accept-terms">
          <p className="by">By registring you accept</p>
          <p className="trems">Terms of Service</p>
        </div>
        <div className="google-or-githup-signup">
          <button className="googlr-githup-btn-signup">
            <img src={google} alt="" className="google" />
          </button>
          <button className="googlr-githup-btn-signup">
            <img src={githup} alt="" className="githup" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SingInInputs;
