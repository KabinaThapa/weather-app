import React from 'react'
//Pure Reducer function
const Reducer = (state, action) => {
  switch(action.type){
    case 'Select_City':
    return{
        ...state, city:action.payload
    }
    
        case 'Select_Daily':
    return{
        ...state, daily:action.payload
    }
    case 'Select_Current':
    return{
        ...state, current:action.payload
    }
   
    default:
        return{...state}
  }
}

export default Reducer