import React, { createContext} from 'react'
import { useContext, useReducer } from 'react'
import Reducer from './Reducer'
//create the context
const WeatherContext = React.createContext()
//provider
const Context = ({children}) => {
    const[state, dispatch]=useReducer(Reducer,{
        city:''
    })

  return (
    
    <WeatherContext.Provider value={state}>
        {children}
    </WeatherContext.Provider>
    
  )
}
export default Context

//children component consuming the context
export const useWeatherContext=()=>{
    return useContext(WeatherContext)
}