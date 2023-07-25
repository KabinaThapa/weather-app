import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import cities from 'cities.json'

import "./App.css";

import SearchBar from "./Components/SearchBar";

function App() {
  const [input, setInput] = useState('');
  const [filterdata, setFilterdata] = useState([]);

  const handleChange = (event) => {
    const userInput = event.target.value;
    setInput(userInput);

    // Filter cities that start with the user's input (case-insensitive)
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().startsWith(userInput.toLowerCase())
    );

    setFilterdata(filteredCities);
  };
  const handleSelectedCity = (city) => {
    setInput(city.name);
    setFilterdata([]);
  };
//  const cities=require('cities.json')
  console.log(cities)
  const cityNames = cities.map((city) => city.name);

  return (
    <>
      <input
        type="text"
        placeholder="city"
        onChange={handleChange}
        value={input}
      />
      {input &&
        filterdata.length > 0 &&
        filterdata.map((city) => (
          <div key={city.id} className="w-44 bg-black">
            <li onClick={() => handleSelectedCity(city)}>{city.name}</li>
          </div>
        ))}

<SearchBar/>

    </>
  );
}

export default App;
