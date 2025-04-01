import React, { useState } from "react";
import axios from "axios";

function Feedbackcard({ quote, author, index, _id, initialIsButton }) {
  const [isOn, setIsOn] = useState(initialIsButton); // Initialize based on isbutton value

  // Toggle isbutton state
  const handleToggle = async () => {
    try {
      const newState = !isOn;
      setIsOn(newState);

      // Update isbutton in the database
      await axios.put(`https://divyamcafe-backend-39ny.onrender.com/api/updatefeedback/${_id}`, {
        isbutton: newState,
      });

      console.log("Feedback updated successfully");
    } catch (error) {
      console.error("Failed to update feedback:", error);
    }
  };

  return (
    <div
      key={index}
      className="bg-white text-[#603913] max-w-sm h-[320px] p-4 md:p-6 m-5 rounded-lg shadow-md flex flex-col justify-between"
    >
      <span className="text-4xl opacity-10 leading-none">“</span>
      <p className="text-[16px] sm:text-[18px] mb-4 text-center sm:text-left">
        {quote}
      </p>
      <p className="italic font-semibold text-right">— {author}</p>
      <div className="text-right">
        <span className="text-4xl opacity-10 leading-none">”</span>
      </div>

      {/* Toggle Switch */}
      <div
        onClick={handleToggle}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer relative ${
          isOn ? "bg-green-500" : "bg-gray-300"
        } transition duration-300  self-center sm:self-start`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
            isOn ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Feedbackcard;
