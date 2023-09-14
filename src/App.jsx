import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import DailyWeather from "./Components/dailyWeather/dailyWeather";

import "./App.css";

import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather.jsx/CurrentWeather";

function App() {

  return (
    <>
      

<SearchBar/>
<div className="flex mt-8"> 
  <CurrentWeather/>
  <DailyWeather/>
</div>

    </>
  );
}

export default App;
