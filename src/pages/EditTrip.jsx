import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EditTrip = () => {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.id;
  console.log(id);
  const  { trips } = useSelector((state) => state.trip) ;
  const [selectedTrip, setSelectedTrip] = useState(null);
  useEffect(() => {
    console.log(trips);
    const selected = trips.filter((trip) => trip.id == id)[0];
    console.log(selected);
    if (selected) {
      console.log(selected);
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
  return <div></div>;
};

export default EditTrip;
