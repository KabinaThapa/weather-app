import React, {useState} from 'react'
import { City, Country } from 'country-state-city'
import { useWeatherContext } from '../Context/Context'

const SearchBar = () => {
    //let cityLists=City.getAllCities()
   // console.log(cityLists)
   const {state:{city}, dispatch}=useWeatherContext()
    const[input, setInput]=useState('')
    const[filterdata,setFilterdata]=useState([])

    const handleChange=(event)=>{
        setInput(event.target.value)
        const US=Country.getCountryByCode('US')
        const UScities=City.getCitiesOfCountry(US.isoCode)
        console.log(UScities)
        const filterdata=UScities.filter((city)=>city.name.toLowerCase().includes(input.toLowerCase()))
        setFilterdata(filterdata)
    }
    const handleSelectedCity=(city)=>{
        setInput(city.name)
        setFilterdata([])
    }
    const handleSubmit=()=>{
        fetchData()
    }


  return (
    <>
    
        <input type="text" placeholder='city' onChange={handleChange} value={input}></input>
        <button onClick={()=>{handleSubmit}}>search</button>
        {input && filterdata.length>0 &&
            
        filterdata.map((city)=>(
            <div key={city.id}  className='w-44 bg-black '>
            
            <li onClick={()=>handleSelectedCity(city)}> {city.name}</li>
            </div> ))
        }

    
    </>
  )
}

export default SearchBar