import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <div className="relative top-0 bg-linear-60 from-white via-purple-100 to-indigo-50 ">
     
      <div className="content inset-0 bg-transparent ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
