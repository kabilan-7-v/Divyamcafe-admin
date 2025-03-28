import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDashboard from './DashboardPage';
import { Search, Plus, X } from "lucide-react";
import Attractioncard from './Attractioncard';

function Otherattractions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [locationUrl, setLocationUrl] = useState('');
  const [imageFiles, setImageFiles] = useState([]); // Base64 images
  const [imagePreviews, setImagePreviews] = useState([]); // Preview URLs
  const [loading, setLoading] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);
  const fetchPlaces = async () => {
    try {
      const response = await axios.get('https://divyamcafe-backend.onrender.com/api/getplace');
      console.log(response.data);

      // Extract the places array from the response
      if (response.data && response.data.places && Array.isArray(response.data.places)) {
        setPlaces(response.data.places);


      } else {
        console.error("Unexpected response format:", response.data);
        setPlaces([]);
      }
    } catch (error) {
      console.error("Error fetching places:", error);
      setPlaces([]);
    }
  };
  // Handle Image Selection
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const previewUrls = [];
    const base64Images = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        base64Images.push(reader.result);
        setImageFiles([...imageFiles, ...base64Images]);
      };
      previewUrls.push(URL.createObjectURL(file));
    });

    setImagePreviews([...imagePreviews, ...previewUrls]);
  };

  // Remove Selected Image
  const handleRemoveImage = (index) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImagePreviews(updatedPreviews);
    setImageFiles(updatedFiles);
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    if (!heading || !description || !locationUrl || imageFiles.length === 0) {
      alert("Please fill all fields and select at least one image.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://divyamcafe-backend.onrender.com/api/addplace', {
        imageurls: imageFiles,
        heading,
        description,
        locationUrl
      });
      console.log(imageFiles)
      fetchPlaces();

      alert(response.data.message);
      setIsModalOpen(false);
      setHeading('');
      setDescription('');
      setLocationUrl('');
      setImageFiles([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to add place.");
    } finally {
      setLoading(false);
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
            {places.slice().reverse().map((val, index) => (
              <Attractioncard
                key={index}
                description={val.description}
                images={val.imageurls}
                heading={val.heading}
              />
            ))}


          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-20 flex justify-center items-center">
          <div className="bg-white rounded-lg w-[600px]">
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-bold">Add New Place</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>


            <div className='bg-neutral-200 h-0.5 w-full'></div>
            <div className='p-6'>
              <label className="block mt-4">Select Images</label>
              <input type="file" multiple accept="image/*" className="border p-2 w-full mt-2" onChange={handleImageChange} />

              {/* Image Previews */}
              <div className="mt-4 flex flex-wrap gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img src={preview} alt={`preview-${index}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <label className="block mt-4">Heading</label>
              <label className="block mt-4">Heading</label>
<input 
  type="text" 
  placeholder="Topic Heading" 
  className="border p-2 w-full mt-2" 
  value={heading} 
  onChange={(e) => e.target.value.length <= 20 && setHeading(e.target.value)} 
/>
<p className="text-sm text-gray-500 mt-1">{heading.length}/20 characters</p>

<label className="block mt-4">Description</label>
<textarea 
  placeholder="Description Content here..." 
  className="border p-2 w-full mt-2" 
  value={description} 
  onChange={(e) => e.target.value.length <= 120 && setDescription(e.target.value)} 
/>
<p className="text-sm text-gray-500 mt-1">{description.length}/120 characters</p>

<label className="block mt-4">Location Link</label>
<input 
  type="text" 
  placeholder="Paste a link" 
  className="border p-2 w-full mt-2" 
  value={locationUrl} 
  onChange={(e) => setLocationUrl(e.target.value)} 
/>

<div className="flex justify-between mt-6">
  <button 
    onClick={() => setIsModalOpen(false)} 
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Cancel
  </button>
  <button 
    onClick={handleSubmit} 
    className="bg-amber-900 text-white px-4 py-2 rounded" 
    disabled={loading}
  >
    {loading ? "Uploading..." : "Upload"}
  </button>
</div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Otherattractions;
