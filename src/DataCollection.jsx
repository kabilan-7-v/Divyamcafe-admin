import React from 'react'
import AdminDashboard from './DashboardPage';
import { Search } from "lucide-react"; 
const data = [
    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },    { name: 'Ramkumar', phone: '8976543210', address: 'No.04 Sivaraman St, P.Chathiram, Karur-36', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },
    { name: 'Afrin', phone: '98752320105', address: 'Erode Main Road, K. Parmathi, Karur-14', details: 'If we want some other datas, we fill this column' },


];
function DataCollection() {
  return (
    <div className="flex min-h-screen bg-[#F9F5EE] ">
            <AdminDashboard/>

            {/* Main Content */}
            <div className="flex-1 ">
                
<div className="mb-4 w-1/2 relative mt-8 ml-[22rem] ">
    <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <Search size={18} />
    </div>
    <input
        type="text"
        placeholder="Search"
        className="w-full p-2 pl-10 rounded-full shadow-gray-200 shadow-2xl bg-white"
    />
</div>
<div className="bg-stone-300 h-0.5  w-full "></div>

                {/* Table */}
                <div className="bg-[#F9F5EE] rounded-lg shadow-md p-6 ml-[18rem]">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-white">
                                <th className="p-3 text-left border-r border-gray-300 text-amber-900">User Name</th>
                                <th className="p-3 text-left border-r border-gray-300 text-amber-900">Phone Number</th>
                                <th className="p-3 text-left border-r border-gray-300 text-amber-900">Address</th>
                                <th className="p-3 text-left  border-gray-300 text-amber-900">Some other details</th>
                            </tr>
                        </thead>
                        <tbody>
    {data.map((item, index) => (
        index%2==0?
        <tr key={index} className='border-t border-gray-300 } '>
            <td className="p-3 border-r border-gray-300 ">{item.name}</td>
            <td className="p-3 border-r border-gray-300">{item.phone}</td>
            <td className="p-3 border-r border-gray-300">{item.address}</td>
            <td className="p-3">{item.details}</td>
        </tr>:<tr key={index} className='border-t border-gray-300 bg-white '>
            <td className="p-3 border-r border-gray-300">{item.name}</td>
            <td className="p-3 border-r border-gray-300">{item.phone}</td>
            <td className="p-3 border-r border-gray-300">{item.address}</td>
            <td className="p-3">{item.details}</td>
        </tr>
    ))}
</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  
}

export default DataCollection