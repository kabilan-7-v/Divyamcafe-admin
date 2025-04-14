import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './DashboardPage';
import { Search, Plus, Trash } from 'lucide-react';
import axios from 'axios';

function Menucardmanagement() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [getmenucard, setGetmenucard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isloading, setisLoading] = useState(true);

  const [hoverIndex, setHoverIndex] = useState(null); // Track hover state

  useEffect(() => {
    const token = localStorage.getItem('username');
    if (!token) {
      navigate('/');
    } else {
      Getmenucard();
    }
  }, [navigate]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        setImageBase64(reader.result.split(',')[1]);
      };
    }
  };

  const updatedData = async () => {
    if (!imageBase64) {
      alert("Please select an image.");
      return;
    }
    setLoading(true);

    try {
      await axios.post(
        "https://divyamcafe-backend-39ny.onrender.com/api/addmenucard",
        { imageurl: imageBase64 },
        { headers: { "Content-Type": "application/json" } }
      );
      Getmenucard();
      alert("Image uploaded successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error uploading image:", error.response?.data || error);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const Getmenucard = async () => {
    try {
      const response = await axios.get("https://divyamcafe-backend-39ny.onrender.com/api/getmenucard");
      setGetmenucard(response.data.data);
    } catch (error) {
      console.error("Error fetching menu cards:", error.response?.data || error);
    }
  setisLoading(false);

  };

  const handleDelete = async (id) => {
    console.log(id)
    if (window.confirm("Are you sure you want to delete this menu card?")) {
      try {
        await axios.delete(`https://divyamcafe-backend-39ny.onrender.com/api/deletemenucard/${id}`);
        alert("Menu card deleted successfully");
        Getmenucard();
      } catch (error) {
        console.error("Error deleting menu card:", error.response?.data || error);
        alert("Failed to delete menu card");
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F9F5EE] ">
      <AdminDashboard />
      <div className="flex-1">
        <div className="mb-4 w-1/2 relative mt-8 ml-4">
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
        <div className="mt-6 ml-4 mr-4 bg-white rounded-2xl flex flex-col items-center p-6">
          <button
            className="w-50 h-20 bg-amber-900 flex justify-center items-center rounded-2xl px-4 py-2 text-white mt-auto self-end"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus color="white" size={34} />
            <h1 className="text-[18px] ml-2">Add New Menu</h1>
          </button>

          {isloading ? (
               <div className='h-100'> <p className="text-center text-black text-4xl mt-25">Loading...</p></div>

      ) :getmenucard.length === 0 ? (
        <div className="h-100 flex flex-col justify-center items-center"> <h1 className="text-black text-2xl text-center mt-5">
           NO MENUCARD FOUND
         </h1>
         </div>
       ):   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-3 mt-6">
            {getmenucard.map((val, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={`data:image/png;base64,${val.imageurl}`}
                  className="w-150 h-100 object-cover rounded-md"
                  alt={`Menu ${index}`}
                />
                
                {/* Delete Button - Only appears on hover */}
                {hoverIndex === index && (
                  <button
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-100 hover:bg-red-800"
                    onClick={() => handleDelete(val._id)}
                  >
                    <Trash size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>}
        </div>

        {/* Image Upload Modal */}
        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>

    {/* Modal card */}
    <div className="relative bg-white p-6 rounded-lg w-[400px] shadow-lg z-60">
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
              <button
                className="bg-amber-900 text-white px-4 py-2 rounded-lg"
                onClick={updatedData}
              >
                {loading ? "Uploading..." : "Upload"}
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
