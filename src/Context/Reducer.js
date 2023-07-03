import React from 'react'

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