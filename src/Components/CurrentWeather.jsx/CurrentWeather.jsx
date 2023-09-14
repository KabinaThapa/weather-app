import React from 'react';
import { useWeatherContext } from '../../Context/Context';

const CurrentWeather = () => {
  const { state: { current }, dispatch } = useWeatherContext();

  // Check if current weather data is available
  if (!current) {
    return <div>No data</div>;
  }

  const timestamp = current.dt;
  const timezoneOffsetSeconds = current.timezone; // Offset in seconds

  // Create a JavaScript Date object using the timestamp and offset
  const localTime = new Date(timestamp * 1000 + timezoneOffsetSeconds * 1000);

  // Format the date and time components
  const year = localTime.getUTCFullYear();
  const month = (localTime.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
  const day = localTime.getUTCDate().toString().padStart(2, '0');
  const hours24 = localTime.getUTCHours().toString().padStart(2, '0');
  const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

  // Convert to 12-hour format
  const hours12 = (hours24 > 12) ? (hours24 - 12).toString().padStart(2, '0') : hours24;
  const period = (hours24 >= 12) ? 'PM' : 'AM';

  // Create a formatted date string
  const formattedDate = `${year}-${month}-${day} ${hours12}:${minutes} ${period}`;

  return (
    <div className='w-96 h-96 mt-8 border-2 bg-slate-400'>
      <div>
        <h2>{current.main.temp}</h2>
        <h2>{current.weather[0].main}</h2>
        <h2>{current.name}</h2>
        <p>
          {current.main.temp_max}/{current.main.temp_min} Feels like {current.main.feels_like}
        </p>
        <h2>{current.weather[0].main}</h2>
        <h2>{current.weather[0].description}</h2>
        <h2>{formattedDate}</h2>
      </div>
    </div>
  );
};

export default CurrentWeather;
