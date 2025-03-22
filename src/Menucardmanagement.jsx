import React from 'react'
import AdminDashboard from './DashboardPage'
import { Search } from "lucide-react";
import image from './assets/Divyam 11.png'
import { Plus } from "lucide-react";

function Menucardmanagement() {
  return (
    <div className="flex min-h-screen bg-[#F9F5EE] ">
      <AdminDashboard />
      <div className="flex-1 ">

        <div className="mb-4 w-1/2 relative mt-8 ml-[20rem] ">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
          />
        </div>
        <div className='m-12 ml-84 bg-white rounded-2xl flex flex-col items-end'>
          <div className='w-50 h-20 bg-amber-900 mt-8  mr-8 flex justify-center items-center rounded-2xl ml-3'>
        <Plus color='white' size={34}/>
            <h1 className='text-white text-[18px]'>
            Add New Menu

            </h1>
          </div>
          <div className=' flex flex-wrap  '>

            <div className='flex flex-col'></div>
            <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div>
            <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div> <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div> <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div> <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div> <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div>
            <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div> <div className='md:w-1/4 p-8 '>
              <img src={image} className='object-cover'>
              </img>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Menucardmanagement