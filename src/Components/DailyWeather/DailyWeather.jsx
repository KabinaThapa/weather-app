import React from 'react';
import { useWeatherContext } from '../../Context/Context';
import dayjs from 'dayjs';
import { converttoFahrenheit } from '../../utils/temperature';
import { iconMappings } from '../../../public/WeatherIcon/WeatherIcon';

const DailyWeather = () => {
  const { state: { daily } } = useWeatherContext();
  const dailylist = daily.list;

  const convertDtTxtToDayAndTime = (dtTxt, pod) => {
    const date = dayjs(dtTxt, 'YYYY-MM-DD HH:mm:ss');
   
      const formattedDate = date.format('h:mm A'); // Nighttime format
    
  
    return formattedDate;
  };
  

  let currentDay = null;
  let currentDayData = [];
  const groupedDaysData = [];

  // Loop through the dailylist to organize data by day
  dailylist?.map((list) => {
    const forecastDay = dayjs(list.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('dddd');

    if (forecastDay !== currentDay) {
      // If the day changes, create a new object for the day
      if (currentDay !== null) {
        // Push the previous day's data into the groupedDaysData array
        groupedDaysData.push({
          day: currentDay,
          data: currentDayData,
        });
      }

      // Reset data for the new day
      currentDay = forecastDay;
      console.log(currentDay)
      currentDayData = [];
    }

    // Add the data to the current day's data array
    currentDayData.push({
      key: list.dt,
      time: convertDtTxtToDayAndTime(list.dt_txt, list.sys.pod),
      temperature: converttoFahrenheit(list.main.temp),
      description: list.weather[0].description,
      icon:list.weather[0].icon
    });
  });

  // Push the last day's data into groupedDaysData
  if (currentDay !== null) {
    groupedDaysData.push({
      day: currentDay,
      data: currentDayData,
    });
  }

  return (
    <div className='border-2 flex flex-col gap-6 justify-between text-black w-[100%]'>
      {groupedDaysData.map((dayData) => (
        <div className='grid grid-cols-9' key={dayData.day}>
          <h2>{dayData.day}</h2>
          {dayData.data.map((item) => (
            <div key={item.key}>
              <h1>{item.time}</h1>
              <h1>{item.temperature}°F</h1>
              {item.description}
              <img className='w-16 h-16' src={`${iconMappings[item.icon]}`}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;
