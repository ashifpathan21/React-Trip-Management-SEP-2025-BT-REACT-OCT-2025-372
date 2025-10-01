import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const GraphTripsOverTime = () => {
  const {trips } = useSelector((state) => state.trip)
  const data = trips.map((trip) => ({
    date: trip.startDate,
    price: trip.price,
  }));

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Trip Prices Over Time</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#10B981" />
      </LineChart>
    </div>
  );
};

export default GraphTripsOverTime;
