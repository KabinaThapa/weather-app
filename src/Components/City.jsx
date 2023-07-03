import React from 'react'

//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}


const City = () => {
  const API_Key = "435c048a9c6bca0718dee1b66c720006";
  //url to fetch data
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_Key}`;
  
  
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

export default City