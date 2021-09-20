import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  newTicketError: "",
  newTicket: "",
};
const newTicketSlice = createSlice({
  name: "newTicket",
  initialState: initialState,
  reducers: {
    newTicketLoading: (state) => {
      state.isLoading = true;
    },
    newTicketSuccess: (state, { payload }) => {
      console.log(444, payload);
      state.isLoading = false;
      state.newTicket = payload;
      state.newTicketError = "";
    },
    newTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.newTicketError = payload;
    },
    resNewTicketSuccess: (state) => {
      state.isLoading = false;
      state.newTicket = "";
      state.newTicketError = "";
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const {
  newTicketLoading,
  newTicketSuccess,
  newTicketFail,
  resNewTicketSuccess,
} = actions;

export default reducer;
