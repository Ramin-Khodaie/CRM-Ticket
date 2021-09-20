import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  searchTickets,
} from "./ticketSlice";

import {
  getAllTicket,
  getSingleTicket,
  replyMessageTicket,
  updateTicketClosed,
} from "../../services/ticketServices";

const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTicket();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fillSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    console.log(777, result);
    dispatch(fetchSingleTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchSingleTicketFail(error));
  }
};

export const replyTicketMassage = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  console.log(333, "here");
  try {
    const result = await replyMessageTicket(_id, msgObj);
    if (result.status === "error") {
      return dispatch(replyTicketFail());
    }

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    dispatch(replyTicketFail(error.message));
  }
};

export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());

  try {
    const result = await updateTicketClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail());
    }

    dispatch(closeTicketSuccess(result.message));
    dispatch(fetchSingleTicket(_id));
  } catch (error) {
    dispatch(closeTicketFail(error.message));
  }
};
export default fetchAllTickets;
