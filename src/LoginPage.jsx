import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import image from './assets/divyam logo brown-01.png'
function LoginPage() {
 const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex  flex-col items-center  min-h-screen bg-[#f3f0dc]">
     <img src={image} className='w-80 h-80  relative top-20'>
      </img>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[60%] md:w-[30%] h-90 ">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>
        
        {/* User Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">User Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none bg-transparent"
            />
            {showPassword ? (
              <IoEyeOffOutline
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoEyeOutline
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-[#5a3d1a] text-white py-3 rounded-lg font-medium hover:bg-[#4a2f12] transition"
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default LoginPage