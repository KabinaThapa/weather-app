import React from 'react';
import { useWeatherContext } from '../../Context/Context';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import UTC plugin for Day.js
import {converttoFahrenheit} from '../../utils/temperature'
import Rainy from '../Rainy/Rainy';
import Cloudy from '../Cloudy/Cloudy';
import Clear from '../Clear/Clear';

// Add the UTC plugin to Day.js
dayjs.extend(utc);

const CurrentWeather = () => {
  const { state: { current }, dispatch } = useWeatherContext();

  // Check if current weather data is available
  if (!current) {
    return <div>No data</div>;
  }

  // Extract data from the API response
  const { dt, timezone, sys } = current;

  // Create a Day.js object using the timestamp and apply the timezone offset
  const localTime = dayjs.unix(dt).utc().utcOffset(timezone / 60);

  // Format the date and time components using Day.js
 
  const date = localTime.format('MMM D');
  const time = localTime.format('h:mm A');
  const day=localTime.format('ddd')
  const weatherCondition=current.weather[0].main
  const sunrise = dayjs.unix(sys.sunrise).utcOffset(timezone / 60).format('h:mm A');
  const sunset = dayjs.unix(sys.sunset).utcOffset(timezone / 60).format('h:mm A');
  
  
  

  return (
    <div className='w-full h-full flex justify-evenly  '>
      <div className='w-[50%]  p-4  flex justify-between '>
<div className='w-[40%]'>
        <p className='space-y-8'>
          <p>
        <h1 className='text-4xl pb-4'>{converttoFahrenheit(current.main.temp)}° F</h1>
        <h2 className='text-xl'>{current.weather[0].main}</h2>
        </p>
       
       
        <p className='space-y-2'>
        <h2 className='text-2xl'>{current.name}</h2>
         <h2> {converttoFahrenheit(current.main.temp_max)}° F / {converttoFahrenheit(current.main.temp_min)}° F  </h2>
          <h2>Feels like {converttoFahrenheit(current.main.feels_like)}° F</h2>
          <h2 className='capitalize'>{current.weather[0].description}</h2>
        <h2>{` ${time}`}</h2>
        <h2>{` ${day}, ${date}`}</h2>
        </p>
        </p>
        </div>
        <div className=' p-5 w-[70%] gap-4 grid grid-cols-2'>
        
        <div className='bg-yinmn bg-opacity-30 p-2 rounded  flex items-center justify-center '><h1> Humidity: <br></br> {current.main.humidity} %</h1></div>
        <div className='bg-yinmn bg-opacity-30 p-2 rounded  flex items-center justify-center'><h1> Wind: <br></br>{current.wind.speed} m/s</h1></div>
       
        
        <div className='bg-yinmn bg-opacity-30 p-2 rounded  flex items-center justify-center'><h1> Sunrise:<br></br> {sunrise}</h1></div>
        <div className='bg-yinmn bg-opacity-30 p-2 rounded  flex items-center justify-center'><h1> Sunset: <br></br>{sunset}</h1></div>
       
     
      </div>
      </div>
      
      <div className='w-[90%] h-auto'>
      {weatherCondition=='Clear' && <Clear/>}
      {weatherCondition=='Clouds' && <Cloudy/>}
      {weatherCondition=='Squall' && <Rainy/>}
      {weatherCondition=='rain' && <Rainy/>}
      {weatherCondition=='sunny' && <Rainy/>}
      </div>
    </div>
  );
};

export default CurrentWeather;

