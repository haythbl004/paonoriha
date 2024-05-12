import React from 'react'
import "./LeftSide.css";
import EditTextCoordinates from'./EditTextCoordinates'
import { useState } from 'react';
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import close from '../Icons/close.svg';
function LeftSide() {

   const [txtEdit, ssetTxtEdit] = useState(false); //EditTextCoordinates components

   const openTxtEdit = () => {
     ssetTxtEdit(!txtEdit);
   };
   

  return (
    <div className="left-side">
      <button
        className={`close-btn ${txtEdit ? "" : "close"}`}
        onClick={openTxtEdit}
      >
        <img src={close} alt="" />
      </button>
      <div className={`EditTextCoordinates ${txtEdit ? "" : "close"}`}>
        <EditTextCoordinates />
      </div>
      <div className={`head-buttons ${!txtEdit ? "" : "close"}`}>
        <div className={`buttons ${!txtEdit ? "" : "close"}`}>
          <div className="icons">
            <img src={camera} className="camera" />
          </div>
          <span>New Hotspot</span>
        </div>
        <div
          className={`buttons ${!txtEdit ? "" : "close"}`}
          onClick={openTxtEdit}
        >
          <div className="icons">
            <img src={Type} className="type" />
          </div>
          <span>New Text</span>
        </div>
        <div className={`buttons ${!txtEdit ? "" : "close"}`}>
          <div className="icons">
            <img src={Info} className="info" />
          </div>
          <span>New Info</span>
        </div>
      </div>
      <div className="view"></div>
      <div className="save-button">
        <button>
          <img src={Save} alt="" />
          Save
        </button>
      </div>
    </div>
  );
}

export default LeftSide