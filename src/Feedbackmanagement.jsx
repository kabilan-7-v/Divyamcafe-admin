import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './DashboardPage';
import { Search } from "lucide-react";
import Feedbackcard from './feedbackcard';
import axios from "axios";

function FeedbackManagement() {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const storedUser = localStorage.getItem('username');
    if (!storedUser) {
      navigate('/'); // Redirect to login if not logged in
    }
    fetchFeedbacks();

  }, [navigate]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend-39ny.onrender.com/api/getallfeedback");

      // Filter only entries where isbutton is true
     

      setTestimonials(response.data.feedbacks);
      setLoading(false);
    } catch (err) {
      setError("Failed to load feedbacks");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9F5EE]">
      <AdminDashboard />

      {/* Main Content */}
      <div className="flex-1   ">
        {/* Search Box */}
        <div className="mb-4 w-1/2 relative mt-8 ml-4 ">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
          />
        </div>

        {/* Feedback Cards */}
        {loading ? (
               <div className='h-100'> <p className="text-center text-black text-4xl mt-25">Loading...</p></div>

      ) :testimonials.length === 0 ? (
        <div className="h-100 flex flex-col justify-center items-center"> <h1 className="text-black text-2xl text-center mt-5">
           NO FEEDBACK FOUND
         </h1>
         </div>
       ) : error ? (
        <p className="text-center text-red-500 mt-5">{error}</p>
      )  : (
        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((item, index) => (
            <div key={item._id || index} className="mt-5 flex-basis-[15%]">
              <Feedbackcard
                index={index}
                author={item.name}
                quote={item.feedback}
                _id={item._id}
              />
            </div>
          ))}
        </div>
      )}

      <div className="h-35"></div>
      </div>
    </div>
  );
}

export default FeedbackManagement;
