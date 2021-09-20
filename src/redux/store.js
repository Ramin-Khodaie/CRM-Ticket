import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../redux/ticket/ticketSlice";
import loginReducer from "../redux/user/loginSlice";
import userReducer from "../redux/user/userSlice";
import newTicketReducer from "../redux/newTicket/newTicketSlice";
import newUserSlice from "../redux/user/newUserSlice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: newTicketReducer,
    newUser: newUserSlice,
  },
});

export default store;
