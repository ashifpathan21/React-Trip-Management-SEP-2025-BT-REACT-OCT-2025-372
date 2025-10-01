import React from "react";
import Input from "./Input.jsx";
import Dropdown from "./Dropdown.jsx";
const SearchFilterBar = ({
  input,
  setInput,
  status,
  statusOptions,
  setStatus,
  dateSort,
  setDateSort,
  dateSortOptions,
  priceSort,
  priceSortOptions,
  setPriceSort,
}) => {
  return (
    <div className="pt-30 ">
      <div className="flex justify-between p-4 px-8 flex-col md:flex-row lg:flex-row items-center gap-3 w-full">
        <div>
          <h2 className="w-full font-semibold text-xl ">Your Trips :</h2>
        </div>

        <div className={"w-1/2"}>
          <Input
            id={"searchBar"}
            placeholder={"Search your trip"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required={true}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-3 px-6 flex gap-5">
        <h1 className="font-bold p-2 ">Filter via : </h1>
        <Dropdown
          id={"statusFilter"}
          label={"Status"}
          options={statusOptions}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Select Status"
        />
        <Dropdown
          id={"priceSort"}
          label={"Price"}
          options={priceSortOptions}
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
        />
        <Dropdown
          id={"dateSort"}
          label={"Date"}
          options={dateSortOptions}
          value={dateSort}
          onChange={(e) => setDateSort(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFilterBar;
