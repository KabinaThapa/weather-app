import React from 'react';
import { useWeatherContext } from '../../Context/Context';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import UTC plugin for Day.js
import {converttoFahrenheit} from '../../utils/temperature'

// Add the UTC plugin to Day.js
dayjs.extend(utc);

const CurrentWeather = () => {
  const { state: { current }, dispatch } = useWeatherContext();

  // Check if current weather data is available
  if (!current) {
    return <div>No data</div>;
  }

  // Extract data from the API response
  const { dt, timezone } = current;

  // Create a Day.js object using the timestamp and apply the timezone offset
  const localTime = dayjs.unix(dt).utc().utcOffset(timezone / 60);

  // Format the date and time components using Day.js
 
  const date = localTime.format('MMM D');
  const time = localTime.format('h:mm A');
  
  

  return (
    <div className='w-96 h-96  border bg-slate-400'>
      <div>
        <h2>{converttoFahrenheit(current.main.temp)}°F</h2>
        <h2>{current.weather[0].main}</h2>
        <h2>{current.name}</h2>
        <p>
          {converttoFahrenheit(current.main.temp_max)}°F / {converttoFahrenheit(current.main.temp_min)}°F  Feels like {converttoFahrenheit(current.main.feels_like)}°F
        </p>
        <h2>{current.weather[0].main}</h2>
        <h2>{current.weather[0].description}</h2>
        <h2>{` ${date}, ${time}`}</h2>
      </div>
    </div>
  );
};

export default CurrentWeather;

