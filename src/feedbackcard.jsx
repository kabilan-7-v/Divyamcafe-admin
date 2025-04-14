import React, { useState } from "react";
import axios from "axios";

function Feedbackcard({
  quote,
  author,
  index,
  _id,
  initialIsButton,
  rating,
  initialIshomepage,
}) {
  const [isOn, setIsOn] = useState(initialIsButton);
  const [isOnhome, setIsOnhome] = useState(initialIshomepage);

  const [readMore, setReadMore] = useState(false);

  const handleToggle = async () => {
    try {
      const newState = !isOn;
      setIsOn(newState);
      await axios.put(
        `https://divyamcafe-backend-39ny.onrender.com/api/updatefeedback/${_id}`,
        {
          isbutton: newState,
        }
      );
      console.log("Feedback updated successfully");
    } catch (error) {
      console.error("Failed to update feedback:", error);
    }
  };
  const handleTogglehomepage = async () => {
    try {
      const newState = !isOnhome;
      setIsOnhome(newState);
      await axios.put(
        `https://divyamcafe-backend-39ny.onrender.com/api/updatefeedbackhomepage/${_id}`,
        {
          ishomepage: newState,
        }
      );
      console.log("Feedback updated successfully");
    } catch (error) {
      console.error("Failed to update feedback:", error);
    }
  };
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const shouldTruncate = quote.length > 15;
  const displayQuote =
    shouldTruncate && !readMore ? quote.slice(0, 60) + "..." : quote;

  return (
    <div
      key={index}
      className={`bg-white text-[#603913] max-w-sm p-4 md:p-6 m-5 rounded-lg shadow-md flex flex-col justify-between
        border-2 border-[#603913] transition-all duration-300 relative
        ${readMore ? "h-auto" : "h-[350px]"}`}
    >
      <span className="text-4xl opacity-10 leading-none">“</span>
      <p
        className={`text-[16px] sm:text-[18px] mb-2 text-center sm:text-left ${
          initialIshomepage ? "font-light italic" : ""
        }`}
      >
        {displayQuote}
      </p>

      {/* Read more / less button */}
      {shouldTruncate && (
        <button
          onClick={toggleReadMore}
          className="text-sm text-blue-600 underline self-center sm:self-start mb-2"
        >
          {readMore ? "Read less" : "Read more"}
        </button>
      )}

      <p className="italic font-semibold text-right">— {author}</p>
      <div className="text-right">
        <span className="text-4xl opacity-10 leading-none">”</span>
      </div>
      <h1 className="relative bottom-4 text-2xl">{rating}</h1>

      {/* Toggle Switch */}
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold">Visible in Reviewpage</h1>
        <div
          onClick={handleToggle}
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
            isOn ? "bg-green-500" : "bg-gray-300"
          } transition duration-300`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
              isOn ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
      {isOn===true?
      <div className="flex flex-row justify-between items-center mt-2">
        <h1 className="font-bold">Visible in Homepage</h1>
        <div
          onClick={handleTogglehomepage}
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
            isOnhome ? "bg-amber-900" : "bg-gray-300"
          } transition duration-300`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
              isOnhome ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>:<div></div>}
    </div>
  );
}

export default Feedbackcard;
