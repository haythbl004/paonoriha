import React from 'react'
import { useState } from 'react';
import "./EditDestinationCoordinates.css";
import add from "../Icons/addnewtour.svg";
import minus from "../Icons/minus.svg";
import trach from "../Icons/trach.svg";
import PlaceMarker from "../Icons/PlaceMarker.svg";
function EditDestinationCoordinates() {
    const [xCoordinates, setXCoordinates] = useState(0);
    const [yCoordinates, setYCoordinates] = useState(0);
    const [zCoordinates, setZCoordinates] = useState(0);
    const [size, setSize] = useState(0);

    // Function to handle incrementing/decrementing coordinates
    const incrementCoordinate = (setter) => {
      setter((prevValue) => parseFloat((prevValue + 0.3).toFixed(1)));
    };

    const decrementCoordinate = (setter) => {
      setter((prevValue) => parseFloat((prevValue - 0.3).toFixed(1)));
    };
      const incrementSize = (setter) => {
        setter((prevValue) => prevValue + 1);
      };

      const decrementSize = (setter) => {
        setter((prevValue) => prevValue - 1);
      };
  return (
    <div className="edit-text-container">
      <div className="location-delete">
        <button className="delete-btn">
          <span>Delete</span>
          <img src={trach} alt="" />
        </button>
        <button className="Destination-btn">
          <span>Destination</span>
          <img src={PlaceMarker} alt="" />
        </button>
      </div>
      <div className="edit-text-buttons">
        <div className="coordinate-buttons">
          <span className="Rotation">Rotation:</span>
          <div className="coordinate">
            <div className="x-coordinate">
              <span className="coor-span">X-coordinate:</span>
              <button onClick={() => incrementCoordinate(setXCoordinates)}>
                <img src={add} alt="" />
              </button>
              <span className="counter">{xCoordinates}</span>
              <button onClick={() => decrementCoordinate(setXCoordinates)}>
                <img src={minus} alt="" />
              </button>
            </div>
            <div className="y-coordinate">
              <span className="coor-span">Y-coordinate:</span>
              <button onClick={() => incrementCoordinate(setYCoordinates)}>
                <img src={add} alt="" />
              </button>
              <span className="counter">{yCoordinates}</span>
              <button onClick={() => decrementCoordinate(setYCoordinates)}>
                <img src={minus} alt="" />
              </button>
            </div>
            <div className="z-coordinate">
              <span className="coor-span">Z-coordinate:</span>
              <button onClick={() => incrementCoordinate(setZCoordinates)}>
                <img src={add} alt="" />
              </button>
              <span className="counter">{zCoordinates}</span>
              <button onClick={() => decrementCoordinate(setZCoordinates)}>
                <img src={minus} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="width-edit">
        <span className="Size">Size:</span>
        <div className="txt-width">
          <button onClick={() => incrementSize(setSize)}>
            <img src={add} alt="" />
          </button>
          <span className="counter">{size}</span>
          <button onClick={() => decrementSize(setSize)}>
            <img src={minus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDestinationCoordinates