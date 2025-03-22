import React from 'react'
import AdminDashboard from './DashboardPage'
import { Search } from "lucide-react"; 
import Feedbackcard from './feedbackcard';


function Feedbackmanagement() {



  const testimonials = [
    {
      quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
      author: "Quinta Adelia"
    },
    {
      quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
      author: "Natasya"
    },
    {
      quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
      author: "Yosina Ribkah Kalalo"
    }, {
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      }, {
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      },{
        quote: "One of the best place to visit and hang out. Good service and lot of spots to take a photo",
        author: "Quinta Adelia"
      },
      {
        quote: "Cozy place with many instagrammable spots, but most importantly excellent service and tasty food with reasonable price",
        author: "Natasya"
      },
      {
        quote: "This place where you can got a good atmosphere and good food, the owner have good taste high enough",
        author: "Yosina Ribkah Kalalo"
      }
   
  ];

  return (
    <div className="flex min-h-screen bg-[#F9F5EE] ">
      <AdminDashboard />

      {/* Main Content */}
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
        <div className='flex flex-wrap   justify-center p-8 ml-[20rem] bg-white relative mr-8 rounded-2xl'>
{testimonials.map((item, index) => (
    <div className=' '>
         < Feedbackcard index={index} author={item.author} quote={item.quote}/>
         </div>
        ))}
      </div>
    </div>
    </div>

  )
}

export default Feedbackmanagement