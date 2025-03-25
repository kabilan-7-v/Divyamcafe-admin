import React, { useState, useEffect } from 'react';
import AdminDashboard from './DashboardPage';
import { Search, Plus } from 'lucide-react';
import axios from 'axios';

function Menucardmanagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [getmenucard, setGetmenucard] = useState([]);

  useEffect(() => {
    Getmenucard();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        setImageBase64(reader.result.split(',')[1]); // Extract Base64 part
      };
    }
  };

  const updatedData = async () => {
    if (!imageBase64) {
      alert("Please select an image.");
      return;
    }
    try {
      await axios.post(
        "https://divyamcafe-backend.onrender.com/api/addmenucard", // Change to your API URL
        { imageurl: imageBase64 },
        {
          headers: {
            "Content-Type": "application/json", // Ensure JSON format
          },
        }
      );
      Getmenucard();
      alert("Image uploaded successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error);
      alert("Failed to upload image");
    }
  };
  const Getmenucard = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend.onrender.com/api/getmenucard");
      console.log(response.data.data)
      setGetmenucard(response.data.data); // Assuming response structure { status: true, data: [...] }
    } catch (error) {
      console.error("Error fetching menu cards:", error.response?.data || error);
    }
  };


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

        {/* Add Menu Button */}
        <div className="m-12 ml-84 bg-white rounded-2xl flex flex-col items-center p-6">
        <button
    className="w-50 h-20 bg-amber-900 flex justify-center items-center rounded-2xl px-4 py-2 text-white mt-auto self-end"
    onClick={() => setIsModalOpen(true)}
  >
    <Plus color="white" size={34} />
    <h1 className="text-[18px] ml-2">Add New Menu</h1>
  </button>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-3 mt-6">
    {getmenucard.map((val, index) => (
      <div key={index} className="">
        <img
          src={`data:image/png;base64,${val.imageurl}`}
          className="w-150 h-100 object-cover rounded-md "
          alt={`Menu ${index}`}
        />
      </div>
    ))}
  </div>

  {/* Button moved to the bottom */}
  
</div>


        {/* Image Upload Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Add New Menu</h2>
              <label className="block mb-2 text-gray-600">Select Menu Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border p-2 rounded"
              />
              {selectedImage && (
                <img src={selectedImage} alt="Preview" className="mt-4 w-full rounded-lg" />
              )}
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="bg-amber-900 text-white px-4 py-2 rounded-lg" onClick={updatedData}>
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menucardmanagement;





// import React from 'react'
// import AdminDashboard from './DashboardPage'
// import { Search } from "lucide-react";
// import image from './assets/Divyam 11.png'
// import { Plus } from "lucide-react";

// function Menucardmanagement() {
//   return (
//     <div className="flex min-h-screen bg-[#F9F5EE] ">
//       <AdminDashboard />
//       <div className="flex-1 ">

//         <div className="mb-4 w-1/2 relative mt-8 ml-[20rem] ">
//           <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
//             <Search size={18} />
//           </div>
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
//           />
//         </div>
//         <div className='m-12 ml-84 bg-white rounded-2xl flex flex-col items-end'>
//           <div className='w-50 h-20 bg-amber-900 mt-8  mr-8 flex justify-center items-center rounded-2xl ml-3'>
//             <Plus color='white' size={34} />
//             <h1 className='text-white text-[18px]'>
//               Add New Menu

//             </h1>
//           </div>
//           <div className=' flex flex-wrap  '>

//             <div className='flex flex-col'></div>
//             <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div>
//             <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div> <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div> <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div> <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div> <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div>
//             <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div> <div className='md:w-1/4 p-8 '>
//               <img src={image} className='object-cover'>
//               </img>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Menucardmanagement