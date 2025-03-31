import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import image from './assets/divyam logo brown-01.png';


function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      navigate('/datacollection'); // Redirect if user is already logged in
    }
  }, [navigate]);

  const handleLogin = async () => {
    setError('');

    try {
      const response = await axios.post('https://divyamcafe-backend-39ny.onrender.com/api/loginverify', {
        username,
        password,
      });

      if (response.data.isLogin) {
        console.log('Login successful');

        // Store credentials in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        navigate('/datacollection'); // Redirect after login
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f3f0dc]">
      <img src={image} className="w-80 h-80 relative top-20" alt="Logo" />

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[60%] md:w-[30%] h-90">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">User Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Name"
              className="w-full outline-none bg-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Login Button */}
        <button
          className="w-full bg-[#5a3d1a] text-white py-3 rounded-lg font-medium hover:bg-[#4a2f12] transition"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
