import React from 'react'
import { useWeatherContext } from '../../Context/Context'
import { DateTime } from 'luxon'


const CurrentWeather = () => {
    const{state:{current},dispatch}=useWeatherContext()
    console.log('current',current)
    const Timestamp = 1694646592
    console.log(Timestamp)
    const timezone=current.timezone
    console.log(timezone)
   // Calculate the time in milliseconds since Epoch
const date=new Date(Timestamp*1000)
console.log(date)
// Create a new Date object from the calculated time

// Convert to Eastern Time (ET)
const options = {
  
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  
  timeZoneName: 'short',
};

const formattedDate = date.toLocaleString();


console.log(formattedDate);

  
  return (
    <>
    <div className='w-96 h-96 mt-8 border-2 bg-slate-400'>

        {current ? (
          <div>
          
            <h2>{current.main.temp}</h2>

<h2>{current.weather[0].main}</h2>
<h2>{current.name}</h2>
<p> {current.main.temp_max}/{current.main.temp_min} Feels like {current.main.feels_like}</p>

<h2>{current.weather[0].main}</h2>
<h2>{current.weather[0].description}</h2>
<h2>{formattedDate}</h2>



</div>
  )
  :('no data')
}

    </div>
    </>
  )
  
}

export default CurrentWeather