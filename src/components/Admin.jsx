import React from "react";
import "./AddNewTour.css";
import RightSide from "./AdminComponents/RightSide";
import LeftSide from "./AdminComponents/LeftSide";
function Admin() {
  return (
    <div className="container">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default Admin;
