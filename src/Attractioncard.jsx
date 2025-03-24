import React, { useState, useEffect } from 'react';

function Attractioncard({ heading, images, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative w-80 border-2 border-neutral-300 rounded-2xl flex flex-col items-center m-8'>
      
      <div className='relative w-full min-h-50 bg-neutral-300 rounded-t-[12px] overflow-hidden'>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${heading} - ${index + 1}`} 
            className={`absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <h1 className='text-2xl font-bold text-neutral-900 mt-4 text-left'>
        {heading}
      </h1>

      {/* Divider */}
      <div className="w-9/10 border-t border-neutral-300 my-2"></div>

      <p className='pl-4 pb-4 pr-4'>{description}</p>
    </div>
  );
}

export default Attractioncard;
