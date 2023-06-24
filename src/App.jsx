import { useState } from 'react'
import React from 'react'

import './App.css'

function App() {
  //useState to update data
  const[data, setData]=useState('')
  //api key
  const API_Key= '435c048a9c6bca0718dee1b66c720006'
  const url ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
  
  const fetchData=()=>{
    axios.get('')
  }
  return (
    <>
      
    </>
  )
}

export default App
