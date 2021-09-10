import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: [],
  isLoading: false,
  searchTicketList: [],
  error: "",
};
const ticketListSlice = createSlice({
  name: "ticketList",
  initialState: initialState,
  reducers: {
    fetchTicketLoading: (state, action) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, { payload }) => {
      state.searchTicketList = payload;
      state.ticket = payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.ticket = action.payload;
      state.isLoading = false;
    },
    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.ticket.filter((row) => {
        if (!payload) return row;
        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTickets,
} = actions;
export default reducer;
