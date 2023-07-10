import React, {useState} from 'react'
import axios from 'axios'
import { City } from 'country-state-city';

//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}


const city = () => {
  let allCities=City.getAllCities()
  console.log(allCities)
  const API_Key = "435c048a9c6bca0718dee1b66c720006";
  //url to fetch data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_Key}`;
  const[citieslist, setCitieslist]=useState('')
  const fetchCitiesList=async()=>{
    try{
      const response=await axios.get(url)
     
    }
    catch{}
  }
  
  return (
    <>
    
    <select>
    {cities.map((city)=>{
      return(
        <option key={`${city.name}${city.lat}${city.lng}`}>
          {city.country}-{city.name}
        </option>
      )
    })}
    </select>
    
    </>
  )
}

export default city