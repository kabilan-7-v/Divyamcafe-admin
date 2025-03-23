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
    <div className='relative min-h-100 w-80 border-2 border-neutral-300 rounded-2xl flex flex-col items-center m-8'>
      
      <div className='relative w-full h-1/2 bg-neutral-300 rounded-t-[12px] overflow-hidden'>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${heading} - ${index + 1}`} 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <h1 className='text-2xl font-bold text-neutral-900 m-4 text-left'>
        {heading}
      </h1>

      <div className='h-0.5 max-w-[75px] bg-neutral-300'></div>

      <p className='p-5'>{description}</p>
    </div>
  );
}

export default Attractioncard;