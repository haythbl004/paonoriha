import React from "react";
import "./LeftSide.css";
import EditTextCoordinates from "./EditTextCoordinates";
import EditDestinationCoordinates from "./EditDestinationCoordinates";
import { useState } from "react";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import img from '../Icons/img.png'
function LeftSide() {

  return (
    <div className="left-side">
      {/* <div className={`EditTextCoordinates`}>
        <EditTextCoordinates />
      </div> */}
      {/* <div className="EditTextCoordinates">
        <EditDestinationCoordinates />
      </div> */}
      <div className={`head-buttons-left-side`}>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={camera} className="camera-left-side" alt="camera-icon" />
          </div>
          <span className="headbutton-span">New Hotspot</span>
        </div>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={Type} className="type-left-side" alt="txt-icon" />
          </div>
          <span className="headbutton-span">New Text</span>
        </div>
        <div className={`buttons-left-side`}>
          <div className="icons-left-side">
            <img src={Info} className="info-left-side" alt="info-icon" />
          </div>
          <span className="headbutton-span">New Info</span>
        </div>
      </div>
      <div className="left-side-view">
        <img src={img} alt="img" className="left-side-img-view" />
      </div>
      <button className="save-button-left-side">
        <img src={Save} alt="save-icon" className="save-button-img-left-side" />
        Save
      </button>
    </div>
  );
}

export default LeftSide;
