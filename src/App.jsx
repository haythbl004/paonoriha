import React from "react";
import "./App.css";
import { useState } from "react";

import HomePage from "./components/HomePage";
import MyToursPage from "./components/MyToursPage";
import NewInfoPoint from "./components/AdminComponents/NewInfoPoint";
import NewHotspot from "./components/AdminComponents/NewHotspot";
import LeftSide from "./components/AdminComponents/LeftSide";
import Rightside from "./components/AdminComponents/RightSide";
import Admin from "./components/Admin";
import EditTextCoordinates from "./components/AdminComponents/EditTextCoordinates";
import EditDestinationCoordinates from "./components/AdminComponents/EditDestinationCoordinates";
import NavBar from "./components/HomePageComponents/NavBar";
import CreateForm from "./components/AdminComponents/CreateForm";
import MakeYourTours from "./components/HomePageComponents/MakeYourTours";
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
      <MyToursPage />
    </div>
  );
}

export default App;
