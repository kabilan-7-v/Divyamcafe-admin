import React, { useState, useEffect } from 'react';
import { Edit } from "lucide-react";

function Attractioncard({ heading, images, description, onEdit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const maxChars = 30; // Maximum characters before truncation
  const isLongDescription = description.length > maxChars;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`relative w-80 border-2 border-neutral-300 rounded-2xl flex flex-col items-center m-8 transition-shadow duration-300 hover:shadow-xl ${isExpanded ? 'h-auto' : 'h-[350px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edit Button (Appears on Hover) */}
      {isHovered && (
        <button
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
          onClick={onEdit}
        >
          <Edit size={18} />
        </button>
      )}

      {/* Image Carousel */}
      <div className="relative w-full min-h-[200px] bg-neutral-300 rounded-t-[12px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${heading} - ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-neutral-900 mt-4">{heading}</h1>

      {/* Divider */}
      <div className="w-9/10 border-t border-neutral-300 my-2"></div>

      {/* Description */}
      <p className="pl-4 pb-2 pr-4">
        {isExpanded ? description : `${description.slice(0, maxChars)} ${description.length> maxChars?"...":""}`}
      </p>

      {/* Read More Button */}
      {isLongDescription && (
        <button
          className="text-blue-600 font-semibold mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default Attractioncard;
