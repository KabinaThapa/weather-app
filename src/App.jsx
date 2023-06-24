import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

import './App.css'

function App() {
  //useState to update data
  const[data, setData]=useState({})
  const[cityname, setCityname]=useState('')
  //api key
  const API_Key= '435c048a9c6bca0718dee1b66c720006'
  //url to fetch data
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_Key}`
 

  
  const fetchData=async()=>{
    try{
    const response =await axios.get(url)
    setData(response.data)
    console.log(response.data)
    
    }
    catch (error){}
   }
   
  


const handleChange=(event)=>{
  setCityname(event.target.value)
}
const handleSubmit=()=>{
 fetchData()

    setCityname('')}
  

 
  return (
    <>
<input type="text" placeholder="city name" value={cityname} onChange={handleChange} ></input>
<button onClick={handleSubmit}>submit</button>
{data && data.main ?(
  <>
<p>temp={data.main.temp}</p>
<p>feels_like={data.main.feels_like}</p>
<p>temp_min={data.main.temp_min}</p>
<p>Temp_max={data.main.temp_max}</p>
<p>pressure={data.main.pressure}</p>
<p>humidity={data.main.humidity}</p>
<p></p>
</>
):(null)
}
<p>{data.weather ?.[0].id}</p>
      
    </>
  )
}

export default App
