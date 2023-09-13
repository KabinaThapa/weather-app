import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import cities from 'cities.json'

import "./App.css";

import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather.jsx/CurrentWeather";

function App() {

  return (
    <>
      

<SearchBar/>
<div>
  <CurrentWeather/>
</div>

    </>
  );
}

export default App;
