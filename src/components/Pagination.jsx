import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const Pagination = ({ setPage, page, maxPage }) => {
  return (
    <div className="flex w-full p-6 justify-between items-center">
      <button
        onClick={() => setPage(page - 1)}
        className="p-4 hover:bg-indigo-600 transition-all duration-300  px-8 uppercase flex gap-3  rounded-xl bg-indigo-500 text-white font-semibold "
        disabled={page === 0}
      >
        <MoveLeft/>
        Prev
      </button>
      <div className="flex items-center gap-4 ">
        {[...Array(maxPage + 1)]?.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-100 h-4 w-4 ${
              i === page ? "bg-gray-900" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setPage(page + 1)}
        className="p-4 hover:bg-indigo-600 transition-all duration-300  px-8 uppercase flex gap-3  rounded-xl bg-indigo-500 text-white font-semibold "
        disabled={page === maxPage}
      >
        Next
        <MoveRight/>
      </button>
    </div>
  );
};

export default Pagination;
