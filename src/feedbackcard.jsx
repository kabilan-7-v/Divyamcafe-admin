import React from 'react'
import { useState } from "react";

function Feedbackcard({quote,author,index}) {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      key={index}
      className="bg-white text-[#603913] max-w-sm w-full h-[350px] p-4 md:p-6 m-5 rounded-lg shadow-md flex flex-col justify-between"
    >
      <span className="text-6xl opacity-10 leading-none">“</span>
      <p className="text-[16px] sm:text-[18px] mb-4 text-center sm:text-left">
        {quote}
      </p>
      <p className="italic font-semibold text-right">— {author}</p>
      <div className="text-right">
        <span className="text-6xl opacity-10 leading-none">”</span>
      </div>

      {/* Toggle Switch */}
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-300"
        } transition duration-300 mt-4 self-center sm:self-start`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
            isOn ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};
  

export default Feedbackcard