import React from "react";
import "./CreateForm.css";
import img from "../Icons/img.png";
import cancel from "../Icons/cancel.svg";
import edit from "../Icons/edit.svg";
import Panorama from "../Icons/Panorama.svg";
import cancelgreen from "../Icons/cancelgreen.svg";
function CreateForm() {
  return (
    <div className="createForm">
      <button className="create-form-cancel-btn">
        <img
          src={cancelgreen}
          alt="cancel-icon"
          className="create-form-cancel-img"
        />
      </button>
      <h1 className="create-form-title">Create Virtual Tour</h1>
      <input
        type="text"
        className="create-form-tour-name"
        name="tourName"
        placeholder="Tour name"
      />
      <textarea
        name="tourDescription"
        className="create-form-tourDescription"
        cols={60}
        rows={10}
        placeholder="Tour description (optional)"
      ></textarea>
      <div className="tour-form-view">
        <div className="tour-form-img">
          <img src={img} alt="img" className="tour-form-img-view" />
          <button className="remove-img-btn">
            <img src={cancel} alt="cancel-icon" className="remove-img-icon" />
          </button>
        </div>
      </div>
      <div className="create-form-button">
        <button className="create-form-buttons newSence">
          <img src={Panorama} alt="panorama-icon" className="newSenceImg" />
          New Scence
        </button>
        <button className="create-form-buttons next">
          <img src={edit} alt="edit-icon" className="nextImg" />
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateForm;
