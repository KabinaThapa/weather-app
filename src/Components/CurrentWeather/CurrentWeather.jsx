import React from 'react';
import { useWeatherContext } from '../../Context/Context';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import UTC plugin for Day.js
import {converttoFahrenheit} from '../../utils/temperature'
import Rainy from '../Rainy/Rainy';
import Cloudy from '../Cloudy/Cloudy';
import Clear from '../Clear/Clear';
import Windy from '../Windy/Windy';

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
     
<div className='w-[90%] p-[2%] flex flex-col justify-evenly gap-4 bg-yinmn bg-opacity-30 rounded shadow-lg shadow-gray-500'>
 
  <div className='flex  justify-around font-serif'>
    <div className='space-y-2 text-lg'>
    <h1 className='text-6xl pb-2'>{converttoFahrenheit(current.main.temp)}° F</h1>
        <h2 className='text-xl'>{current.weather[0].main}</h2>
  <h2 className='text-2xl'>{current.name}</h2>
  <p>
         <h2> {converttoFahrenheit(current.main.temp_max)}° F / {converttoFahrenheit(current.main.temp_min)}° F Feels like {converttoFahrenheit(current.main.feels_like)}° F</h2>
         </p>
          
          <h2 className='capitalize'>{current.weather[0].description}</h2>
        <h2>{` ${time}`}</h2>
        <h2>{` ${day}, ${date}`}</h2>
        </div>
        <div className=' mt-auto space-y-2 text-lg'>
        
       <h1> Humidity: {current.main.humidity} %</h1>
        <h1> Wind: {current.wind.speed} m/s</h1>
       
        
       <h1> Sunrise: {sunrise}</h1>
       <h1> Sunset: {sunset}</h1>
       
     
      </div>
  
  </div>
       
       
        
       
      </div>
      
      <div className='w-[90%] h-auto overflow-hidden  '>
      {weatherCondition=='Clear' && <Clear/>}
      {weatherCondition=='Clouds' && <Cloudy/>}
      {weatherCondition=='Squall' && <Rainy/>}
      {weatherCondition=='Rain' && <Rainy/>}
      {weatherCondition=='Windy' && <Windy/>}
      </div>
    </div>
  );
};

export default CurrentWeather;

