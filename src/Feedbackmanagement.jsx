import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './DashboardPage';
import { Search } from "lucide-react";
import Feedbackcard from './feedbackcard';

function FeedbackManagement() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (!storedUser) {
      navigate('/'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const testimonials = [
    {
      quote: "One of the best places to visit and hang out. Good service and lots of spots to take a photo.",
      author: "Quinta Adelia"
    },
    {
      quote: "Cozy place with many Instagrammable spots, but most importantly, excellent service and tasty food at a reasonable price.",
      author: "Natasya"
    },
    {
      quote: "This place has a great atmosphere and good food. The owner has a refined taste.",
      author: "Yosina Ribkah Kalalo"
    },
    // Duplicate testimonials removed for clarity
  ];

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
        <div className="flex flex-wrap justify-center p-8 bg-white rounded-2xl mt-6 ml-4 mr-4">
          {testimonials.map((item, index) => (
            <Feedbackcard key={index} index={index} author={item.author} quote={item.quote} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackManagement;
