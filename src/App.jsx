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
      <div className="p-[2%] space-y-8 bg-slate-50 bg-gradient-to-l from-lavender  to-white">
        <h1 className="text-2xl">Welcome!</h1>

<SearchBar/>
<h1 className="text-2xl">Today</h1>
  <CurrentWeather/>
  


    
    
    <h1 className=" text-2xl">3-Hours Forecast</h1>
    <DailyWeather/>
    </div>
    </>
  );
}

export default App;
