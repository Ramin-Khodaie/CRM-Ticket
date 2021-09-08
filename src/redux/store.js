import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../redux/sliceReducers/ticketSlice";
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;
