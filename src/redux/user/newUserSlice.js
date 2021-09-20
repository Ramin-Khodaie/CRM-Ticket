import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  errorUser: "",
};

const newUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    newUserPending: (state) => {
      state.isLoading = true;
    },
    newUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload;
    },
    newUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.errorUser = payload;
    },
  },
});

const { reducer, actions } = newUserSlice;

export const { newUserPending, newUserSuccess, newUserFail } = actions;
export default reducer;
