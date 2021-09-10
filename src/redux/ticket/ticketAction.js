import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTickets,
} from "./ticketSlice";

import { getAllTicket } from "../../services/ticketServices";

const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTicket();
    // const result = await axios.get(" http://localhost:3001/v1/ticket", {
    //   headers: {
    //     authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtoLnJhbWluNjlAZ21haWwuY29tIiwiaWF0IjoxNjMxMTIyODg0LCJleHAiOjE2MzExMzAwODR9.UUmkiKgaB2jg3Jn-4Mbu4amAu9jylrLHDzCI3YV2d1g",
    //   },
    // });
    console.log(900, result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const fillSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
export default fetchAllTickets;
