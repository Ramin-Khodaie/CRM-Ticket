import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: [],
  isLoading: false,
  searchTicketList: [],
  selectedTicket: {},
  replymessage: "",
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
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, { payload }) => {
      state.error = "";
      state.selectedTicket = payload;
      state.isLoading = false;
    },
    fetchSingleTicketFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    resetReplyTicketSuccess: (state) => {
      state.error = "";
      state.replymessage = "";
      state.error = "";
      state.isLoading = false;
    },
    replyTicketFail: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, { payload }) => {
      state.error = "";
      state.replymessage = payload;
      state.isLoading = false;
    },
    closeTicketFail: (state, { payload }) => {
      state.error = payload;
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
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  resetReplyTicketSuccess,
  searchTickets,
} = actions;
export default reducer;
