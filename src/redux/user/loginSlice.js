import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  message: "",
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      // state.message = payload.message;
      state.error = "";
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
    },
    loginFail: (state, action) => {
      console.log(400, "hereee");
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginSuccess, loginFail, loginPending, logoutSuccess } = actions;

export default reducer;
