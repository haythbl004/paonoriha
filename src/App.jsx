import React from "react";
import "./App.css";
import { useState } from "react";

import HomePage from "./components/HomePage";
import MakeYourTours from "./components/HomePageComponents/MakeYourTours";

function App() {
  return (
    <div>
      <MakeYourTours />
    </div>
  );
}

export default App;
