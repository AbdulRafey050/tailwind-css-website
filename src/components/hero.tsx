'use client'
import React from 'react'

const Hero = () => {
  return (
    <div 
      className="w-full h-[87vh] mt-[80px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(/car.png)' }}
    >
      <div className="text-white ml-12 max-w-[400px] p-5">
        <h1 className="text-4xl leading-tight">
          YOUR JOURNEY <br /> YOUR CAR <br /> YOUR WAY
        </h1>
        <p className="text-base mt-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla ac eros at ligula blandit malesuada at eu eros. 
          Vestibulum ante ipsum primis in faucibus orci luctus et 
          ultrices posuere cubilia curae; Integer a ligula nec nisl 
          suscipit dapibus.
        </p>
        <button 
          className="mt-5 px-5 py-2.5 bg-[#ff6666] text-white rounded-md text-base cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Hero;
