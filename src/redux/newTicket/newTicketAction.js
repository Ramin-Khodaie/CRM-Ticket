import {
  newTicketLoading,
  newTicketSuccess,
  newTicketFail,
} from "./newTicketSlice";
import { addNewTicket } from "../../services/ticketServices";

export const addingNewTicket = (ticketdata) => async (dispatch) => {
  console.log(799, ticketdata);
  dispatch(newTicketLoading());
  try {
    const result = await addNewTicket(ticketdata);
    if (!result.data.status === "success") {
      dispatch(newTicketFail(result.data.message));
    }
    console.log(111, result.data.message);
    dispatch(newTicketSuccess(result.data.message));
  } catch (error) {
    dispatch(newTicketFail());
  }
};
