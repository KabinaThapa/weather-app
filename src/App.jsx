import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import DailyWeather from './Components/DailyWeather/DailyWeather'


import "./App.css";

import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Rainy from "./Components/Rainy/Rainy";
import Cloudy from "./Components/Cloudy/Cloudy";

function App() {

  return (
    <>
      <div className="p-[2%] bg-glau">

<SearchBar/>
<div className="flex gap-8  mt-8"> 
  <CurrentWeather/>
  


    
    </div>
    <DailyWeather/>
    </div>
    </>
  );
}

export default App;
