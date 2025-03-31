import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/divyam logo brown-01.png";
import datacolor from "./assets/icons/datacolor.png";
import feedback from "./assets/icons/feedback.png";
import menu from "./assets/icons/menu.png";
import umberla from "./assets/icons/umberla.png";
import power from "./assets/icons/Power.png";
import arrowicon from "./assets/icons/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import data from './assets/icons/data.png';
import feedbackcolor from "./assets/icons/feedbackcolor.png";
import menucolor from "./assets/icons/menucolor.png";
import umberlacolor from "./assets/icons/umberlacolor.png";

import { useNavigate } from 'react-router-dom'; // Import useNavigate


import "@fontsource/lato";

export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate(); 


  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:w-1/6 bg-[#F1EAD3] p-4    sm:w-1/2 relative">
      {/* Logo */}
      <img src={logo} alt="Divyam Logo" className="w-40 fixed top-8" />

      {/* User Profile Section */}
      <div className="fixed top-42">
      <div className="w-full h-16 bg-white mb-8 rounded-4xl flex text-center justify-center items-center">
        <h1 className="text-[24px] m-3 text-amber-950">Divyam cafe</h1>
        <img src={arrowicon} className="h-[30px] m-3" alt="Arrow Icon" />
      </div>
      </div>

      {/* Navigation */}

      <nav className="fixed top-72">
        <ul className="space-y-12">
          <div className="flex items-center">
            <img src={isActive("/") ?datacolor:data} className="w-[30px] h-[30px]" alt="Data Icon" />
            <div className="w-2"></div>
            <li className={`text-[18px] ${isActive("/datacollection") ? "text-amber-950 font-bold" : "text-[#979797] font-normal"}`}>
              <Link to="/">Data Collection</Link>
            </li>
          </div>

          <div className="flex items-center">
            <img src={isActive("/feedbackmanagement") ?feedbackcolor:feedback} className="w-[30px] h-[30px]" alt="Feedback Icon" />
            <div className="w-2"></div>
            <li className={`text-[18px] ${isActive("/feedbackmanagement") ? "text-amber-950 font-bold" : "text-[#979797] font-normal"}`}>
              <Link to="/feedbackmanagement">Feedback Management</Link>
            </li>
          </div>

          <div className="flex items-center">
            <img src={isActive("/menucardmanagement")?menucolor:menu} className="w-[30px] h-[30px]" alt="Menu Icon" />
            <div className="w-2"></div>
            <li className={`text-[18px] ${isActive("/menucardmanagement") ? "text-amber-950 font-bold" : "text-[#979797] font-normal"}`}>
              <Link to="/menucardmanagement">MenuCard Management</Link>
            </li>
          </div>

          <div className="flex items-center">
            <img src={isActive("/otherattractions")?umberlacolor:umberla} className="w-[30px] h-[30px]" alt="Umbrella Icon" />
            <div className="w-2"></div>
            <li className={`text-[18px] ${isActive("/otherattractions") ? "text-amber-950 font-bold" : "text-[#979797] font-normal"}`}>
              <Link to="/otherattractions">Other Attractions</Link>
            </li>
          </div>
        </ul>
      </nav>

      {/* Spacing */}
      <div className="h-[220px]"></div>

      {/* Logout Button */}
      <div className="flex items-center hover:bg-amber-900 rounded-3xl p-4 hover:text-white fixed bottom-20">
        <img src={power} className="w-[30px] h-[30px] " alt="Power Icon" />
        <div className="w-3"></div>
        <button className="text-[20px] text-[#979797] font-normal leading-[100%] tracking-[4%] hover:text-white "
      
            onClick={() => {
              localStorage.removeItem('username');
              localStorage.removeItem('password');
              navigate('/');
            }}
         >
            Logout
          </button>
      </div>
    </div>
  );
}
