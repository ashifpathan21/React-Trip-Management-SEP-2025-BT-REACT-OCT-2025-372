import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import SearchFilterBar from "../components/SearchFilterBar.jsx";
import { setTrip } from "../slices/tripSlice.js";
import { tripsDummyData } from "../data/data.js";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("ALL");
  const statusOptions = [
    { label: "All", value: "ALL" },
    { label: "Ongoing", value: "ONGOING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Planned", value: "PLANNED" },
    { label: "Cancelled", value: "CANCELLED" },
  ];
  const [priceSort, setPriceSort] = useState("LOW");
  const priceSortOptions = [
    { label: "Low to High", value: "LOW" },
    { label: "High to Low", value: "HIGH" },
  ];
  const [dateSort, setDateSort] = useState("NEW");
  const dateSortOptions = [
    { label: "New first", value: "NEW" },
    { label: "Older first", value: "OLD" },
  ];

  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    dispatch(setTrip(tripsDummyData));
  }, []);

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

    //  Price sorting
    if (priceSort === "LOW") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === "HIGH") {
      filtered.sort((a, b) => b.price - a.price);
    }

    //  Date sorting (by startDate)
    if (dateSort === "NEW") {
      filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    } else if (dateSort === "OLD") {
      filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }

    setTripData(filtered);
  }, [input, status, priceSort, dateSort, trips]);

  return (
    <div className="min-h-screen overflow-x-hidden w-screen h-full ">
      <Navbar />
      <SearchFilterBar 
      input={input}
      setInput={setInput}
      status={status}
      setStatus={setStatus}
      statusOptions={statusOptions}
      priceSort={priceSort}
      setPriceSort={setPriceSort}
      priceSortOptions={priceSortOptions}
      dateSort={dateSort}
      setDateSort={setDateSort}
      dateSortOptions={dateSortOptions}
       />
    </div>
  );
};

export default Home;
