import React from 'react'
import image from './assets/divyam logo brown-01.png'


function Attractioncard() {
  return (
    <div
    className=' relative h-102 w-80 border-2 border-neutral-300  rounded-2xl flex flex-col items-center m-8 '
    >
     
      <img src={image} className='object-cover w-full h-1/2 bg-neutral-300 rounded-t-[12px]  '>
      </img>

     
      <h1 className='
      text-2xl font-bold text-neutral-900 m-4 text-left
      '>
        Divyam cafe
      </h1>
      <div className='  h-0.5 w-75  bg-neutral-300'></div>

      <p className='p-5'>Pondicherry, India has many boating spots, including boat houses, lakes, and backwaters. You can enjoy boating for leisure, fishing, or exploration. </p>

    </div>
  )
}

export default Attractioncard