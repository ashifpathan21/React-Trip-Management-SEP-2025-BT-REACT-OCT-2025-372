import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const COLORS = ["#10B981", "#F59E0B", "#00BCD4", "#EF4444"]; 

const GraphTripsByStatus = ({statusCounts}) => {

  const data = Object.keys(statusCounts).map((key) => ({
    name: key,
    value: statusCounts[key],
  }));

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Trips by Status</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default GraphTripsByStatus;
