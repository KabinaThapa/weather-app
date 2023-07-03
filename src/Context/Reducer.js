import React from 'react'
//Pure Reducer function
const Reducer = (state, action) => {
  switch(action.type){
    case 'Select_City':
    return{
        ...state, city:action.payload
    }
    default:
        return{...state}
  }
}

export default Reducer