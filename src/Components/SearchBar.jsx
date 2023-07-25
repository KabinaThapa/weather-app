import React, {useEffect, useState} from 'react'
//import { City, Country } from 'country-state-city'
import { useWeatherContext } from '../Context/Context'
import axios from 'axios'
import cities from 'cities.json';
const SearchBar = () => {
    
   const {state:{city}, dispatch}=useWeatherContext()
   console.log('useWeatherContext', useWeatherContext())
    const[input, setInput]=useState('')
    const[filterdata,setFilterdata]=useState([])

    const handleChange=(event)=>{
        setInput(event.target.value)
        //const filterdata=UScities.filter((city)=>city.name.toLowerCase().startsWith(input.toLowerCase()))
        const filterdata = cities.filter((city) =>
      city.name.toLowerCase().startsWith(input.toLowerCase())
    )
        setFilterdata(filterdata)
    }
    const handleSelectedCity=(city)=>{
        setInput(city.name)
        setFilterdata([])
        dispatch({type:'Select_City', payload:city.name})
    }
   
    //api call
    const API_Key = "435c048a9c6bca0718dee1b66c720006";
    //url to fetch data
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
   const fetchData =() => {
    
       axios.get(url)
      .then((response)=>{
      console.log(response.data)
      response.data
      dispatch({type:'Select_Daily', payload: response.data})
    })
    
  }
  useEffect(()=>{
    fetchData()
  },[city])


  return (
    <>
    
        <input type="text" placeholder='city name' onChange={handleChange} value={input}></input>
       
        {input && filterdata.length>0 &&
            
        filterdata.map((city)=>(
            <div key={`${city.lat}-${city.lng}-${city.name}`}  className='w-44 bg-black '>
            <ul className='list-none'>
            <li className='' onClick={()=>handleSelectedCity(city)}> {city.name}</li>
            </ul>
            </div> ))
        }

    
    </>
  )
}

export default SearchBar