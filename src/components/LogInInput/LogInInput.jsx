import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LogInInput.css";
import password from "../Icons/password.svg";
import user from "../Icons/user.svg";
import google from "../Icons/google.svg";
import githup from "../Icons/githup.svg";

function LogInInput({ onSignUpChange }) {
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if there's a remember token in local storage or cookies
    const rememberToken = localStorage.getItem("rememberToken");
    if (rememberToken) {
      // Perform automatic login using the token
      // You might want to make a request to your backend here
      console.log("Automatic login with remember token:", rememberToken);
    }
  }, []);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        "http://192.168.23.48:5000/api/v1/users/login",
        data,
        { withCredentials: true }
      );

      // Handle successful login response
      console.log("Login successful:", response.data);

      // If Remember Me is checked, save token to local storage or cookies
      if (rememberMe) {
        localStorage.setItem("rememberToken", response.data.token);
        // You can also set an expiry for the token or use cookies with appropriate settings
      }
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  return (
    <div className="input-login">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="input-box">
          <input type="email" required className="user-login" name="email" />
          <label className="user-login-label">Email </label>
          <img src={user} alt="" className="user-login-img" />
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            className="password-login"
            name="password"
          />
          <label className="password-login-label">Password</label>
          <img src={password} alt="" className="password-login-img" />
          <span className="password-login-span">I forgot my password</span>
        </div>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe" className="check">
            Remember me
          </label>
          <button className="btn-login" type="submit">
            Login
          </button>
          <p className="or">or</p>
          <div className="google-or-githup-login">
            <button className="google-githup-btn-login">
              <img src={google} alt="" className="google" />
            </button>
            <button className="google-githup-btn-login">
              <img src={githup} alt="" className="githup" />
            </button>
          </div>
          <p className="go-to-singin" onClick={onSignUpChange}>
            I don't have an account yet
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogInInput;
