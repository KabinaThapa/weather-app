import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import cities from 'cities.json'

import "./App.css";

import SearchBar from "./Components/SearchBar";

function App() {
 
//  const cities=require('cities.json')
  console.log(cities)
  const cityNames = cities.map((city) => city.name);

  return (
    <>
      {cityNames.map((cityName) => (
        <div key={cityName.lat}>{cityName}</div>
      ))}

<SearchBar/>

    </>
  );
}

export default App;
