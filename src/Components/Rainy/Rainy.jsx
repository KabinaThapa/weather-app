import React from 'react'
import rainy from '../../../public/rainy.svg'

const Rainy = () => {
  return (
    
        <div className=" mb-8 w-full h-full relative overflow-hidden ">
    <div className="raindrops left-8 top-3 m-2"></div>
    <div className="raindrop left- top-16  m-8"></div>
    <div className="raindrops left-6 top-8 m-2"></div>
    <div className="raindrop left-1 top-12  m-2"></div>
    <div className="raindrops left-32 top-14  m-2"></div>
    <div className="raindrop left-9 top-15 m-2"></div>
    <div className="raindrops left-10 top-16  m-2"></div>
    <div className="raindrop left-32 top-20  m-2"></div>
    <div className="raindrops left-1 top-1 m-2"></div>
    <div className="raindrop left-4 top-2  m-8"></div>
    <div className="raindrops left-24 top-8 m-2"></div>
    <div className="raindrop left-32 top-0  m-2"></div>
    <div className="raindrops left-20 top-14  m-2"></div>
    <div className="raindrop left-12 top-15 m-2"></div>
    <div className="raindrops left-6 top-28  m-2"></div>
    <div className="raindrop left-25 top-20  m-2"></div>
   
    <img src={rainy} className=" object-contain w-full h-96"/>
    </div>

  
  )
}

export default Rainy