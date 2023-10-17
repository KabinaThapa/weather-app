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
      <div className="p-[2%] space-y-8 bg-slate-50 bg-gradient-to-l from-lavender  to-white font-serif">
        <p>
        <h1 className="md:text-4xl text-xl font-semibold text-center">Welcome!</h1>
        <h2 className="text-center md:text-xl text-base">Stay updated with our weather forecast.</h2>
        </p>
<SearchBar/>

  <CurrentWeather/>
  


    
    
    <h1 className=" md:text-4xl text-xl font-semibold pt-10">3-Hours Forecast</h1>
    <DailyWeather/>
    </div>
    </>
  );
}

export default App;
