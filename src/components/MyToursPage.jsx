import React, { useState } from "react";
import "./MyToursPage.css";
import trach from "./Icons/trach.svg";
import edit from "./Icons/edit.svg";
import clock from "./Icons/clock.svg";
import img from "./Icons/img.png";
import addnewtour from "./Icons/addnewtour.svg";
import home from "./Icons/home.svg";

function MyToursPage({ onMyToursChange }) {
  
  const [sure, setSure] = useState(false);

  const openSure = () => {
    setSure(!sure);
  };

  return (
    <div className="my-tours">
      <div className="go-to-home-my-tour">
        <button className="go-to-home-my-tour-btn" onClick={onMyToursChange}>
          <img src={home} alt="home-icon" className="go-to-home-my-tour-icon" />
        </button>
      </div>
      <h1 className="my-tours-title">My Tours</h1>
      <div className="tours-list">
          <div className="tour-info">
            <div className="tour-img">
              <div className="img-view">
                <img src={img} alt="img" />
              </div>
              <span className="my-tour-span name">Tour name</span>
            </div>
            <div className="last-update">
              <img src={clock} alt="clock-icon" className="clock" />
              <span className="my-tour-span last-update">
                Last update 2h
              </span>
            </div>
            {/* delete and update buttons */}
            <div className="edit-or-delete-my-tours">
              <button
                className="delete-my-tours"
                onClick={openSure}
              >
                <img
                  src={trach}
                  alt="trash-icon"
                  className="edit-or-delete-my-tours-img"
                />
                <span className="delete-and-edit-span">Delete</span>
              </button>
            <span className={`sure-message-my-tour ${sure ? "" : "close"} `}>
              Sure?
              </span>
              <button className="edit-my-tours">
                <img
                  src={edit}
                  alt="edit-icon"
                  className="edit-or-delete-my-tours-img"
                />
                <span className="delete-and-edit-span">Edit</span>
              </button>
            </div>
          </div>
      </div>
      <div className="tour-button">
        <button className="add-new-tour-btn">
          <img src={addnewtour} alt="add-icon" className="add-new-tour-img" />
          <span className="add-new-tour-span">Add New Tour</span>
        </button>
      </div>
    </div>
  );
}

export default MyToursPage;
