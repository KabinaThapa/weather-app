import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";


import "./App.css";
import City from "./Components/City";

function App() {
  //useState to update data
  const [data, setData] = useState({});
  const [cityname, setCityname] = useState("");
  const [weather, setWeather]=useState('')
  //api key
  const API_Key = "435c048a9c6bca0718dee1b66c720006";
  //url to fetch data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_Key}`;
  //fetchData function to get data from url and update the data.
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      const weather= response.data?.weather[0]?.main
      setWeather(weather)
      console.log(response.data);
    } catch (error) {}
  };
  //hanldeChange function to update cityname on user input
  const handleChange = (event) => {
    setCityname(event.target.value);
  };
  //handleSubmit to output the fetched data
  const handleSubmit = () => {
    fetchData();
    setCityname("");
    
  };
  

  return (
    <>
     <div className={`weather ${weather}`}>
      <input
        type="text"
        placeholder="city name"
        value={cityname}
        onChange={handleChange}
      ></input>

      <button onClick={handleSubmit}>submit</button>
      {data && data.main ? (
        <>
          <p>temp={data.main.temp}</p>
          <p>feels_like={data.main.feels_like}</p>
          <p>temp_min={data.main.temp_min}</p>
          <p>Temp_max={data.main.temp_max}</p>
          <p>pressure={data.main.pressure}</p>
          <p>humidity={data.main.humidity}</p>
          <p> {data.weather[0].main}</p>
        </>
      ) : null}
      <p>{data.weather?.[0].id}</p>
      </div>
      
<City/>
    </>
  );
}

export default App;
