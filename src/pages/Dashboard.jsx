import React, { useEffect, useState } from "react";
import { setTrip } from "../slices/tripSlice.js";
import { tripsDummyData } from "../data/data.js";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar.jsx";
import Welcome from "../components/Welcome.jsx";
import StatCard from "../components/StatCard.jsx";
import GraphTripsByStatus from "../components/GraphTripsByStatus.jsx";
import GraphTripsByPrice from "../components/GraphTripsByPrice.jsx";
import GraphTripsOverTime from "../components/GraphTripsOverTime.jsx";
import {
  Plane,
  AlarmClock,
  NotebookPen,
  CalendarCheck,
  Ban,
} from "lucide-react";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const [tripData, setTripData] = useState([]);
  const [plannedTrips, setPlannedTrips] = useState([]);
  const [ongoingTrips, setOngoingTrips] = useState([]);
  const [completedTrips, setCompletedTrips] = useState([]);
  const [cancelledTrips, setCancelledTrips] = useState([]);

  useEffect(() => {
    setTripData(trips);
    const ongoing = trips.filter((trip) => trip.status === "ONGOING");
    setOngoingTrips(ongoing);
    const planned = trips.filter((trip) => trip.status === "PLANNED");
    setPlannedTrips(planned);
    const completed = trips.filter((trip) => trip.status === "COMPLETED");
    setCompletedTrips(completed);
    const cancelled = trips.filter((trip) => trip.status === "CANCELLED");
    setCancelledTrips(cancelled);
  }, [trips]);

  useEffect(() => {
    dispatch(setTrip(tripsDummyData));
  }, []);

  return (
    <div className="relative min-h-screen  ">
      <Navbar />
      <Welcome name={"Badkul Technology"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-6 gap-4 ">
        {/* total */}
        <StatCard
          icon={<Plane />}
          title={"Total Trips"}
          color={"text-purple-500"}
          data={tripData?.length}
        />
        {/* ongoing */}
        <StatCard
          icon={<AlarmClock />}
          title={"Ongoing Trips"}
          color={"text-amber-500"}
          data={ongoingTrips?.length}
        />
        {/* planned */}
        <StatCard
          icon={<NotebookPen />}
          color={"text-cyan-500"}
          title={"Planned Trips"}
          data={plannedTrips?.length}
        />
        {/* completed */}
        <StatCard
          icon={<CalendarCheck />}
          color={"text-green-500"}
          title={"Completed Trips"}
          data={completedTrips?.length}
        />
        <StatCard
          icon={<Ban />}
          color={"text-red-500"}
          title={"Cancelled Trips"}
          data={cancelledTrips?.length}
        />
      </div>
      <div className="flex items-center p-2 justify-around flex-col md:flex-row lg:flex-row  ">
        <GraphTripsOverTime />
        <GraphTripsByPrice />
      </div>
      <div className="p-3  ">
        {" "}
        <GraphTripsByStatus
          statusCounts={{
            Completed: completedTrips.length,
            Ongoing: ongoingTrips.length,
            Planned: plannedTrips.length,
            Cancelled: cancelledTrips.length,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
