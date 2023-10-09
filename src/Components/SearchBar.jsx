import React, {useEffect, useState} from 'react'
//import { City, Country } from 'country-state-city'
import { useWeatherContext } from '../Context/Context'
import axios from 'axios'
//import cities from 'cities.json';
import { cities } from '../static-data/data'//1000 largest US cities by population with geo co-ordinates
import {BsSearch } from 'react-icons/bs'
const SearchBar = () => {
    
   const {state:{city}, dispatch}=useWeatherContext()
   const[input, setInput]=useState('New York')
   console.log('useWeatherContext', useWeatherContext())
    
   
   useEffect(() => {
    fetchData([{ latitude: '40.7128', longitude: '-74.0060' }]); // Coordinates for 'New York'
  }, []);
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
    //url to fetch current and daily weather forecast data
    
   const daily_url = `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_key}`
 const current_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    Promise.all([
      axios.get(daily_url),
      axios.get(current_url)
    ])
    
       
      .then(([dailyresponse, currentresponse])=>{
        console.log('daily-response', dailyresponse.data)
        console.log('current-response', currentresponse.data)
      
      dispatch({type:'Select_Daily', payload: dailyresponse.data})
      dispatch({type:'Select_Current', payload: currentresponse.data})
    })
    .catch((error)=>{console.log('error', error)})
    
    
  }
  
  
  


  return (
    <>
    <div className='mx-auto w-[35%] flex justify-evenly'>
        <input className='outline-none w-96 p-2 border rounded-md text-xl' type="text" placeholder='City Name' onChange={handleChange} value={input}></input>
        <button  className=''onClick={handleSubmit}><BsSearch size={30}/></button>
        </div>
     

    
    </>
  )
}

export default SearchBar