import React from 'react'
import { useWeatherContext } from '../../Context/Context'
import dayjs from 'dayjs'
import { converttoFahrenheit } from '../../utils/temperature'

const dailyWeather = () => {
  const{state:{daily, current},dispatch}=useWeatherContext()
  console.log(daily)
  const currentDay=dayjs(current.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('dddd');
  
  const dailylist=daily.list
  console.log(dailylist)
  const filteredForecast = daily.list?.filter((list) => {
    const forecastDay = dayjs(list.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('dddd');
    return forecastDay === currentDay;})

    const convertDtTxtToDayAndTime = (dtTxt) => {
      const date = dayjs(dtTxt, 'YYYY-MM-DD HH:mm:ss');
      const formattedDate = date.format(' h:mm A');
      return formattedDate;
    };
  return (
    <div>
      {filteredForecast?.map((list)=>(
        <div>
        <h1 key={list.dt}>{convertDtTxtToDayAndTime(list.dt_txt)}</h1>
        <h1>{converttoFahrenheit(list.main.temp)}°F</h1>
        {list.weather[0].description}
        </div>
      ))}
    </div>
  )
}

export default dailyWeather