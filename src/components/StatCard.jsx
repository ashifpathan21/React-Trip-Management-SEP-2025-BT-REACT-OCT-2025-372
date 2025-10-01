import React from "react";

const StatCard = ({ icon, title, data , color }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center
                 p-6 rounded-2xl shadow-md border border-indigo-200
                  bg-transparent backdrop-blur-3xl
                 hover:shadow-lg shadow-indigo-300 hover:scale-105 hover:border-indigo-400
                 transition-all duration-500 ease-in-out"
    >
      <div className="flex items-center gap-3">
        {icon && (
          <span
            className={`text-3xl p-3  rounded-xl ${
              color ? color : "text-indigo-900"
            }  shadow-sm`}
          >
            {icon}
          </span>
        )}
        <h2 className="text-lg font-semibold text-indigo-800">{title}</h2>
      </div>

      <div className="text-3xl font-bold text-indigo-950 tracking-wide">
        {data}
      </div>
    </div>
  );
};

export default StatCard;
