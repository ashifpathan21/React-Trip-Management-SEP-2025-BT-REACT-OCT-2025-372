import React from "react";
import {
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  Pencil,
  Trash2,
} from "lucide-react";
import { deleteTrip } from "../slices/tripSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ trip, idx }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    if (confirm("Are you sure to delete this trip ?")) {
      dispatch(deleteTrip(trip.id));
    }
  };
  const statusColors = {
    PLANNED: "bg-cyan-100 text-cyan-700",
    ONGOING: "bg-amber-100 text-amber-700",
    COMPLETED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
  };
  return (
    <div className="p-5  w-full  flex gap-3 items-center ">
      <span className="text-2xl w-15 h-15 rounded-full flex justify-center items-center p-2 bg-gradient-to-b from-indigo-200 via-purple-300 to-indigo-400 ">
        {idx + 1}
      </span>
      <div className="flex items-center justify-between p-2 gap-3 w-11/12">
        <div className="flex flex-col gap-2 ">
          {/* Destination */}
          <h2 className="font-semibold text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-500" />
            {trip?.destination}
          </h2>

          {/* Dates */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            {trip?.startDate} → {trip?.endDate}
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="flex flex-col gap-2 ">
            {/* Price */}
            <div className="flex items-center gap-2 text-lg font-semibold  text-emerald-700">
              <DollarSign className="w-4 h-4" />
              {trip?.price}
            </div>

            {/* Status */}
            <span
              className={`self-start text-xs font-medium px-3 py-1 rounded-full ${
                statusColors[trip?.status]
              }`}
            >
              {trip?.status}
            </span>
          </div>
          {/* edit and delete button */}
          <div className="flex flex-col gap-2 md:flex-row lg:flex-row p-2">
            <button onClick={() => navigate(`edit/${trip?.id}`)} className="p-1 rounded-md font-semibold text-blue-400">
              <Pencil />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 rounded-md font-semibold text-red-400"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
