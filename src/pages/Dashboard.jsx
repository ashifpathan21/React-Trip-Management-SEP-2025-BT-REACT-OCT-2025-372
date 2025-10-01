import React, { useEffect, useState } from "react";
import { setTrip } from "../slices/tripSlice.js";
import { tripsDummyData } from "../data/data.js";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar.jsx";
import Welcome from "../components/Welcome.jsx"
const Dashboard = () => {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    setTripData(trips);
  }, [trips]);

  useEffect(() => {
    dispatch(setTrip(tripsDummyData));
  }, []);

  return (
    <div className="relative min-h-screen  ">
      <Navbar />
       <Welcome name={"Badkul Technology"} />
      
    </div>
  );
};

export default Dashboard;
