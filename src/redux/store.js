import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../redux/ticket/ticketSlice";
import loginReducer from "../redux/user/loginSlice";
import userReducer from "../redux/user/userSlice";
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
