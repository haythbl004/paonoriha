import React from "react";
import "./App.css";
import { useState } from "react";

import HomePage from "./components/HomePage";
import MakeYourTours from "./components/HomePageComponents/MakeYourTours";
import ErrorMassege from "./components/ErrorMassege";

function App() {
  return (
    <div>
      <ErrorMassege />
    </div>
  );
}

export default App;
