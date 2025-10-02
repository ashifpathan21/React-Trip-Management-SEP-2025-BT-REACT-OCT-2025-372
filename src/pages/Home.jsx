import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import SearchFilterBar from "../components/SearchFilterBar.jsx";
import Pagination from "../components/Pagination.jsx";
import { setTrip } from "../slices/tripSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card.jsx";
const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState("ALL");
  const statusOptions = [
    { label: "All", value: "ALL" },
    { label: "Ongoing", value: "ONGOING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Planned", value: "PLANNED" },
    { label: "Cancelled", value: "CANCELLED" },
  ];
  const [sort, setSort] = useState("LOW");
  const sortOptions = [
    { label: "Low to High", value: "LOW" },
    { label: "High to Low", value: "HIGH" },
    { label: "New first", value: "NEW" },
    { label: "Older first", value: "OLD" },
  ];

  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const [tripData, setTripData] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    setMaxPage(Math.max(0, Math.ceil(tripData.length / 5) - 1));
  }, [tripData]);

  useEffect(() => {
    let filtered = [...trips];

    //  Search filter
    if (input.trim() !== "") {
      filtered = filtered.filter((trip) =>
        trip.destination.toLowerCase().includes(input.toLowerCase())
      );
    }

    //  Status filter
    if (status !== "ALL") {
      filtered = filtered.filter((trip) => trip.status === status);
    }

    //  Price & date sorting
    if (sort === "LOW") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "HIGH") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "NEW") {
      filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (sort === "OLD") {
      filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }

    setTripData(filtered);
  }, [input, status, sort, trips]);

  return (
    <div className="min-h-screen overflow-x-hidden w-screen h-full ">
      <Navbar />
      <SearchFilterBar
        input={input}
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        statusOptions={statusOptions}
        sort={sort}
        setSort={setSort}
        sortOptions={sortOptions}
      />

      <div className="flex flex-col max-w-screen overflow-hidden items-start  gap-3 p-3 w-screen">
        {tripData.slice(5 * page, 5 * page + 5).length > 0 ? (
          tripData
            .slice(5 * page, 5 * page + 5)
            ?.map((trip, idx) => (
              <Card key={idx} trip={trip} idx={5 * page + idx} />
            ))
        ) : (
          <div className="flex flex-col gap-4 w-full  p-4 justify-center items-center">
            <h2 className="font-bold text-indigo-900  text-xl ">
              {" "}
              No Trips Found
            </h2>
            <button
              onClick={() => navigate("/add")}
              className="p-3 font-semibold text-lg underline text-blue-300 "
            >
              Add Trip Now
            </button>
          </div>
        )}
      </div>
      <Pagination setPage={setPage} maxPage={maxPage} page={page} />
    </div>
  );
};

export default Home;
