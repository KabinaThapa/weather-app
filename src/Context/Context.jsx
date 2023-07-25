import React, { createContext} from 'react'
import { useContext, useReducer } from 'react'
import Reducer from './Reducer'
//create the context
const WeatherContext = React.createContext()
//provider
const Context = ({children}) => {
  //useReducer
    const[state, dispatch]=useReducer(Reducer,{
        city:'',
        daily:'',
        current:'',
    })

  return (
    
    <WeatherContext.Provider value={{state, dispatch}}>
        {children}
    </WeatherContext.Provider>
    
  )
}
export default Context

//children component consuming the context
//useContext to make state & dispatch in weathercontext available globally.
export const useWeatherContext=()=>{
    return useContext(WeatherContext)
}