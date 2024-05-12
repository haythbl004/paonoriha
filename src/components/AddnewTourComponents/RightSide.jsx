import React from 'react'
import './RightSide.css'
import { useState } from 'react';
import Download from "../Icons/Download.svg";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import img from "../Icons/img.png";
import trash from "../Icons/trach.svg";
import reload from "../Icons/reload.svg";
import edit from "../Icons/edit.svg";
import upload from "../Icons/upload.svg";
function rightside() {
  
  const [openTitleOrInput, setOpenTitleOrInput] = useState(false);///to open the input and close the title and the opsite
  const [isHovered, setIsHovered] = useState(false);//to open massege when we hover on the delete or reload
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Name"); // Default value for input
  const [sureMassege, setSureMassege] = useState(false);//to open the sure massege 
  const [txtEdit, ssetTxtEdit] = useState(false); //EditTextCoordinates components

  const openTxtEdit = () => {
    ssetTxtEdit(!txtEdit);
  };
  const openSureMassege = () => {
    setSureMassege(!sureMassege);
  };

  const openTheTitleOrTheInput = () => {
    setOpenTitleOrInput(!openTitleOrInput);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverMouseEnter = () => {
    setIsOpen(true);
  };

  const hoverMouseLeave = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="right-side">
      <div className="img-list">
        <div className="image">
          <img src={img} className="img" alt="Image" />
          <div className="img-button">
            <button className="delete" onClick={openSureMassege}>
              <img src={trash} className="img1" />
            </button>
            <button
              onMouseEnter={hoverMouseEnter}
              onMouseLeave={hoverMouseLeave}
            >
              <img src={reload} className="img2" />
            </button>
          </div>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={openTheTitleOrTheInput}
            className={`${!openTitleOrInput ? "" : "close"}`}
          >
            {value}
          </h3>
          <div className={`sure ${sureMassege ? "" : "close"}`}>
            <span>Sure ?</span>
          </div>
          <div className={`edit ${isHovered ? "" : "close"}`}>
            <div className="img-edit">
              <img src={edit} alt="" />
            </div>
            <span>Edit</span>
          </div>
          <div className={`reload ${isOpen ? "" : "close"}`}>
            <div className="img-reload">
              <img src={upload} alt="" />
            </div>
            <span>Update</span>
          </div>
          <div className={`change-name ${openTitleOrInput ? "" : "close"}`}>
            <input
              type="text"
              className={`change`}
              value={value}
              onChange={handleChange}
            />
            <img src={Save} alt="Save" onClick={openTheTitleOrTheInput} />
          </div>
        </div>
      </div>
      <div className="upload-button">
        <button className="upload">
          <img src={Download} alt="" />
        </button>
      </div>
    </div>
  );
}

export default rightside