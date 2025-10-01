import React from "react";
import TripForm from "../components/TripForm.jsx";
import { addTrip } from "../slices/tripSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const AddTrip = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    if (!data) {
      return;
    }
    const id = uuidv4();
    data.id = id;
    dispatch(addTrip(data));
    toast.success("Trip added successfully ");
    navigate("/");
  };
  return (
    <div className="min-h-screen w-screen ">
      <Navbar />
      <TripForm title={"Add Trip"} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTrip;
