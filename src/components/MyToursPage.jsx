import React, { useState } from "react";
import "./MyToursPage.css";
import trach from "./Icons/trach.svg";
import edit from "./Icons/edit.svg";
import clock from "./Icons/ClockHistory.svg";
import img from "./Icons/img.png";
import addnewtour from "./Icons/addnewtour.svg";
import home from "./Icons/home.svg";

function MyToursPage({ onMyToursChange }) {
  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    setDivs((prevDivs) => [...prevDivs, { lastUpdate: new Date() }]);
  };

  const removeDiv = (index) => {
    setDivs((prevDivs) => prevDivs.filter((_, i) => i !== index));
  };

  const [sure, setSure] = useState({});

  const openSure = (index) => {
    setSure((prevSure) => ({ ...prevSure, [index]: !prevSure[index] }));
  };

  // Function to calculate last update time
  const calculateLastUpdateTime = (lastUpdate) => {
    const currentTime = new Date();
    const timeDiff = Math.abs(currentTime - lastUpdate);
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    if (yearsDiff > 0) {
      return `Last update: ${yearsDiff} year${yearsDiff > 1 ? "s" : ""} ago`;
    } else if (monthsDiff > 0) {
      return `Last update: ${monthsDiff} month${monthsDiff > 1 ? "s" : ""} ago`;
    } else if (daysDiff > 0) {
      return `Last update: ${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
    } else if (hoursDiff > 0) {
      return `Last update: ${hoursDiff} hour${hoursDiff > 1 ? "s" : ""} ago`;
    } else if (minutesDiff > 0) {
      return `Last update: ${minutesDiff} minute${
        minutesDiff > 1 ? "s" : ""
      } ago`;
    } else {
      return `Last update: just now`;
    }
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
        {divs.map((_, index) => (
          <div className="tour-info" key={index}>
            <div className="tour-img">
              <div className="img-view">
                <img src={img} alt="img" />
              </div>
              <span className="my-tour-span name">Tour name</span>
            </div>
            <div className="last-update">
              <img src={clock} alt="clock-icon" className="clock" />
              <span className="my-tour-span last-update">
                {divs[index].lastUpdate &&
                  calculateLastUpdateTime(divs[index].lastUpdate)}
              </span>
            </div>
            {/* delete and update buttons */}
            <div className="edit-or-delete-my-tours">
              <button
                className="delete-my-tours"
                onClick={() => openSure(index)}
              >
                <img
                  src={trach}
                  alt="trash-icon"
                  className="edit-or-delete-my-tours-img"
                />
                <span className="delete-and-edit-span">Delete</span>
              </button>
              {sure[index] && (
                <span
                  className="sure-message-my-tour"
                  onClick={() => removeDiv(index)}
                >
                  Sure?
                </span>
              )}
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
        ))}
      </div>
      <div className="tour-button" onClick={addDiv}>
        <button className="add-new-tour-btn">
          <img src={addnewtour} alt="add-icon" className="add-new-tour-img" />
          <span className="add-new-tour-span">Add New Tour</span>
        </button>
      </div>
    </div>
  );
}

export default MyToursPage;
