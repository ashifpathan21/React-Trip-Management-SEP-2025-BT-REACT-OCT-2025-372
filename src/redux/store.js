import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "../slices/tripSlice.js"

const store = configureStore({
  reducer: {
    trip:tripReducer
  },
});

export default store;
