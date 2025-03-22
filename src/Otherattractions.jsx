import React, { useState } from 'react';
import AdminDashboard from './DashboardPage';
import { Search, Plus, X } from "lucide-react";
import Attractioncard from './Attractioncard';

function Otherattractions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9F5EE]">
      <AdminDashboard />
      <div className="flex-1">
        <div className="mb-4 w-1/2 relative mt-8 ml-[20rem]">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
          />
        </div>
        
        <div className="m-12 ml-84 bg-white rounded-2xl flex flex-col">
          <div className="flex flex-col items-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-50 h-20 bg-amber-900 mt-8 mr-8 flex justify-center items-center rounded-2xl ml-3 text-white text-[18px]">
              <Plus color="white" size={34} />
              Add New Place
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center">
            <Attractioncard />
            <Attractioncard />
            <Attractioncard />
            <Attractioncard />
            <Attractioncard />
            <Attractioncard />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[600px]">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Add New Place</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <label className="block mt-4">Select Menu Image</label>
            <input type="file" className="border p-2 w-full mt-2" />
            
            <label className="block mt-4">Heading</label>
            <input type="text" placeholder="Topic Heading" className="border p-2 w-full mt-2" />
            
            <label className="block mt-4">Description</label>
            <textarea placeholder="Description Content here..." className="border p-2 w-full mt-2" />
            
            <label className="block mt-4">Location Link</label>
            <input type="text" placeholder="Paste a link" className="border p-2 w-full mt-2" />
            
            <div className="flex justify-between mt-6">
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button className="bg-amber-900 text-white px-4 py-2 rounded">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Otherattractions;
