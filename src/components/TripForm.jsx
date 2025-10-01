import React, { useState, useEffect } from "react";
import Input from "./Input.jsx";
import DropDown from "./DropDown.jsx";

const TripForm = ({ initialData, onSubmit, title }) => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    price: "",
    status: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        destination: initialData?.destination,
        startDate: initialData?.startDate,
        endDate: initialData?.endDate,
        price: initialData?.price,
        status: initialData?.status,
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div className="my-30  max-w-[500px] mx-auto rounded-2xl shadow-md shadow-indigo-500 border border-blue-300 ">
      <div className="bg-gradient-to-l rounded-lg from-indigo-600 via-blue-600 to-indigo-400 text-white font-bold flex justify-center items-center h-[100px] ">
        <h1 className="text-3xl overflow-hidden">{title}</h1>
      </div>
      <form onSubmit={handleSubmit} className="p-8  flex flex-col gap-3  ">
        <Input
          required={true}
          id={"destination"}
          label={"Destination"}
          placeholder={"Enter Destination"}
          value={formData.destination}
          onChange={(e) =>
            setFormData({ ...formData, destination: e.target.value })
          }
        />
        <Input
          required={true}
          type="date"
          id={"startDate"}
          label={"Start Date"}
          placeholder={"Choose Start Date"}
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
        <Input
          required={true}
          type="date"
          min={formData.startDate}
          id={"endDate"}
          label={"End Date"}
          placeholder={"Choose End Date"}
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />

        <Input
          required={true}
          type="number"
          id={"price"}
          label={"Price"}
          placeholder={"Enter Price"}
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <DropDown
          options={[
            { label: "Ongoing", value: "ONGOING" },
            { label: "Planned", value: "PLANNED" },
            { label: "Completed", value: "COMPLETED" },
            { label: "Cancelled", value: "CANCELLED" },
          ]}
          placeholder="Select Status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />

        <button className="text-white bg-indigo-600 font-semibold p-4 rounded-lg ">
          {title}
        </button>
      </form>
    </div>
  );
};

export default TripForm;
