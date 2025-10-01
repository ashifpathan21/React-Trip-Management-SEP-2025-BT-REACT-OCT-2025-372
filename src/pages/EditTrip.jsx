import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TripForm from "../components/TripForm.jsx";
import Navbar from "../components/Navbar.jsx";
import { editTrip } from "../slices/tripSlice.js";
import { toast } from "react-toastify";
const EditTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const id = param.id;
  const { trips } = useSelector((state) => state.trip);
  const [selectedTrip, setSelectedTrip] = useState(null);
  useEffect(() => {
    const selected = trips.filter((trip) => trip.id == id)[0];
    if (selected) {
      setSelectedTrip(selected);
    }
  }, [trips]);

  if (!selectedTrip) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 p-2 font-semibold text-2xl">
          <h1>No such trip found</h1>
          <button
            className="bg-indigo-500  text-white  rounded-lg p-3 "
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    );
  }
  const onSubmit = (updated) => {
    if (!updated) {
      return;
    }
    updated.id = id;
    dispatch(editTrip({id, updated}));
    toast.success("Edit Success");
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <TripForm
        initialData={selectedTrip}
        title="Edit Trip"
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EditTrip;
