import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    setTrip: (state, action) => {
      state.trips = action.payload;
    },
    editTrip: (state, action) => {
      const { id, updated } = action.payload;
      state.trips = state.trips.map((trip) =>
        trip.id === id ? { ...trip, ...updated } : trip
      );
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
    },
  },
});

export const { setTrip, addTrip, editTrip, deleteTrip } = tripSlice.actions;
export default tripSlice.reducer;
