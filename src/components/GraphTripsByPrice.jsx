import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const GraphTripsByPrice = () => {
    const {trips } = useSelector((state) => state.trip)
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Trip Prices by Destination</h2>
      <BarChart width={500} height={300} data={trips}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="destination" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#6366F1" />
      </BarChart>
    </div>
  );
};

export default GraphTripsByPrice;
