import React, {useEffect, useState} from 'react'
//import { City, Country } from 'country-state-city'
import { useWeatherContext } from '../Context/Context'
import axios from 'axios'
//import cities from 'cities.json';
import { cities } from '../static-data/data'//1000 largest US cities by population with geo co-ordinates
const SearchBar = () => {
    
   const {state:{city}, dispatch}=useWeatherContext()
   const[input, setInput]=useState('')
   console.log('useWeatherContext', useWeatherContext())
    
   

    const handleChange=(event)=>{
    const inputvalue=event.target.value
      setInput(inputvalue)
     console.log(inputvalue)
     const filtercity=cities.filter((city)=>city.city.toLowerCase()===inputvalue.toLowerCase())
     console.log(filtercity)
    dispatch({type:'Select_City' , payload:filtercity})
      
    }
    
 
       
    
    const handleSubmit=()=>{
        
        
        fetchData(city)
    }
    
    
   const fetchData =(city)=>{
    const API_key = "435c048a9c6bca0718dee1b66c720006"
    const lat=city&&city[0].latitude?city[0].latitude:''
    const lon=city&&city[0].longitude?city[0].longitude:''
   
   console.log(lat)
    //url to fetch data
   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`
 
    
       axios.get(url)
      .then((response)=>{
      console.log(response.data)
      response.data
      dispatch({type:'Select_Daily', payload: response.data})
    })
    .catch((error)=>{console.log('error', error)})
    
    
  }
  useEffect(() => {
    
      fetchData(city);
    
  }, [city]);
  
  


  return (
    <>
    
        <input type="text" placeholder='city name' onChange={handleChange} value={input}></input>
        <button onClick={handleSubmit}>submit</button>
       
     

    
    </>
  )
}

export default SearchBar