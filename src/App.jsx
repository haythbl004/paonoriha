import React from "react";
import "./App.css";
import { useState } from "react";

import HomePage from "./components/HomePage";
import MyToursPage from "./components/MyToursPage";
import NewInfoPoint from "./components/AddnewTourComponents/NewInfoPoint";
import NewHotspot from "./components/AddnewTourComponents/NewHotspot";
import LeftSide from "./components/AddnewTourComponents/LeftSide";
import Rightside from "./components/AddnewTourComponents/RightSide";
import AddNewTour from "./components/AddNewTour";
import EditTextCoordinates from "./components/AddnewTourComponents/EditTextCoordinates";
import EditDestinationCoordinates from "./components/AddnewTourComponents/EditDestinationCoordinates";
import NavBar from "./components/HomePageComponents/NavBar";
import CreateForm from "./components/AddnewTourComponents/CreateForm";
function App() {
  const [openMyTours, setOpenMytours] = useState(false);
  const handleMyToursChange = () => {
    setOpenMytours(!openMyTours);
  };
  return (
    <div>
      {/* {!openMyTours ? (
        <HomePage onMyToursChange={handleMyToursChange} />
      ) : (
        <MyToursPage onMyToursChange={handleMyToursChange} />
      )} */}
      <NewHotspot />
    </div>
  );
}

export default App;
