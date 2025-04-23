import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./DashboardPage";
import { Search } from "lucide-react";

const data = [
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Ramkumar",
    phone: "8976543210",
    address: "No.04 Sivaraman St, P.Chathiram, Karur-36",
    details: "If we want some other datas, we fill this column",
  },
  {
    name: "Afrin",
    phone: "98752320105",
    address: "Erode Main Road, K. Parmathi, Karur-14",
    details: "If we want some other datas, we fill this column",
  },
];
const handleSendMessage = async () => {
  const message = "Hello! This is a test message from our web app.";
  const encodedMessage = encodeURIComponent(message);

  for (let i = 0; i < data.length; i++) {
    const phoneWithCountryCode = `91${data[i].phone.replace(/\D/g, "")}`;
    const url = `https://wa.me/${phoneWithCountryCode}?text=${encodedMessage}`;
    window.open(url, "_blank");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1 sec
  }
};


function DataCollection() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("username");
    if (!storedUser) {
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-[#F9F5EE] ">
      <AdminDashboard />

      {/* Main Content */}
      <div className="flex-1 ">
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
        <div
  onClick={handleSendMessage}
  className="w-[140px] h-[50px] bg-amber-900 absolute right-20 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-amber-800 transition"
>
  <h1 className="text-white text-center items-center">Send Message</h1>
</div>

        <div className=" h-18"></div>
        <div className="bg-stone-300 h-0.5  w-full "></div>

        {/* Table */}
        <div className="bg-[#F9F5EE] rounded-lg shadow-md p-6 ">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-white">
                <th className="p-3 text-left border-r border-gray-300 text-amber-900">
                  User Name
                </th>
                <th className="p-3 text-left border-r border-gray-300 text-amber-900">
                  Phone Number
                </th>
                <th className="p-3 text-left border-r border-gray-300 text-amber-900">
                  Address
                </th>
                <th className="p-3 text-left border-gray-300 text-amber-900">
                  Some other details
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 ${
                    index % 2 === 0 ? "" : "bg-white"
                  }`}
                >
                  <td className="p-3 border-r border-gray-300">{item.name}</td>
                  <td className="p-3 border-r border-gray-300">{item.phone}</td>
                  <td className="p-3 border-r border-gray-300">
                    {item.address}
                  </td>
                  <td className="p-3">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Logout Button */}
        </div>
      </div>
    </div>
  );
}

export default DataCollection;
