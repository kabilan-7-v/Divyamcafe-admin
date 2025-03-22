import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import DataCollection from "./DataCollection";
import Feedbackmanagement from "./Feedbackmanagement";
import Menucardmanagement from "./Menucardmanagement";
import Otherattractions from "./Otherattractions";

export default function RouterPage() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<DataCollection />} />
        <Route path="/feedbackmanagement" element={<Feedbackmanagement />} />
        <Route path="/menucardmanagement" element={<Menucardmanagement />} />
        <Route path="/otherattractions" element={<Otherattractions />} />

        



    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterPage />);