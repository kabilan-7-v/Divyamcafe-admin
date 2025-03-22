import React from 'react'

function Feedbackcard({quote,author,index}) {
  return (
    
        <div key={index} className='bg-white text-[#603913] w-95 p-6 m-5 rounded-lg shadow-md h-70 '>
          <span className='text-6xl opacity-10 leading-none'>“</span>
          <p className='text-[18px] mb-4'>{quote}</p>
          <p className='italic font-semibold text-right'>— {author}</p>
          <span className='text-6xl opacity-10 leading-none text-right'>”</span>
        </div>
      
  )
}

export default Feedbackcard