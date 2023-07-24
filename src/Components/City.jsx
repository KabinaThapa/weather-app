import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { City } from 'country-state-city';

const city = () => {
  
 const [cityname, setCityname] = useState("")
 const[input,setInput]=useState('')
  const API_Key = "435c048a9c6bca0718dee1b66c720006";
 
//  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_Key}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_Key}`
  const[citieslist, setCitieslist]=useState([])

  const fetchCitiesList= async () => {
    try{
      const response = await axios.get(url)
      setCitieslist([response.data])
     
    }
    catch(error){ 
       
        }
  }
  useEffect(()=>{
    fetchCitiesList()
  },[])
  const handleInput=(event)=>{
    setCityname(event.target.value)
  }
  
  return (
    <>
    <input type='text' value={cityname} onChange={handleInput}></input>
    
    
    {citieslist >0 && citieslist.map((city)=>
      {return(
      
        <option key={city.id}>
          {city.name}
        </option>
    )
      
    })}
    
    
    </>
  )
}

export default city