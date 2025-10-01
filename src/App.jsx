import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import AddTrip from "./pages/AddTrip.jsx";
import EditTrip from "./pages/EditTrip.jsx";

const App = () => {
  return (
    <div className="relative top-0 bg-linear-60 from-white via-purple-100 to-indigo-50 ">
      <div className="content inset-0 bg-transparent ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddTrip />} />
          <Route path="/edit/:id" element={<EditTrip />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
