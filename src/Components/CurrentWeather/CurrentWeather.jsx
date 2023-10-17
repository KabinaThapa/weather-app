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
    <>
<h1 className="md:text-4xl text-xl md:block hidden font-serif">Today</h1>
    <div className='w-full h-full grid grid-cols-2 md:place-items-stretch place-items-center '>
     
<div className='md:w-[90%] w-[95%] p-[2%]  grid md:grid-cols-2 grid-cols-1 gap-4 md:bg-yinmn md:bg-opacity-30 rounded md:shadow-lg md:shadow-gray-500'>
 
<h1 className="md:text-4xl md:hidden text-xl font-serif font-semibold">Today</h1>
    <div className='md:space-y-2  md:row-span-2 '>
    
    <h1 className='md:text-6xl text-4xl pb-2'>{converttoFahrenheit(current.main.temp)}° F</h1>
        <h2 className='md:text-xl text-base'>{current.weather[0].main}</h2>
  <h2 className='md:text-2xl text-lg'>{current.name}</h2>
  <p className='md:text-lg text-sm'>
         <h2> {converttoFahrenheit(current.main.temp_max)}° F / {converttoFahrenheit(current.main.temp_min)}° F Feels like {converttoFahrenheit(current.main.feels_like)}° F</h2>
         </p>
          
          <h2 className='capitalize md:text-lg text-sm'>{current.weather[0].description}</h2>
        <h2 className='md:text-lg text-sm'>{` ${time}`}</h2>
        <h2 className='md:text-lg text-sm'>{` ${day}, ${date}`}</h2>
        </div>

        <div className='md:mt-[10rem]  md:text-right pr-4 md:row-span-1 row-auto md:space-y-2 md:text-lg text-sm'>
        
       <h1> Humidity: {current.main.humidity} %</h1>
        <h1> Wind: {current.wind.speed} m/s</h1>
       
        
       <h1> Sunrise: {sunrise}</h1>
       <h1> Sunset: {sunset}</h1>
       
     
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
    </>
  );
};

export default CurrentWeather;

