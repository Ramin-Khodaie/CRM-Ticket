import {
  loginPending,
  loginFail,
  loginSuccess,
  logoutSuccess,
} from "./loginSlice";
import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { userLogin, getUserProfile, logout } from "../../services/userServices";
export const loginUser = (data) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const res = await userLogin(data);

    console.log(600, res.status);
    if (res.status === "error") {
      console.log(6000, "im here");
      return dispatch(loginFail(res.message));
    }
    if (res.status === "success") {
      dispatch(loginSuccess());

      return res;
    }
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};

export const userProfile = () => async (dispatch) => {
  console.log(300, "here");
  dispatch(getUserPending());
  try {
    //get user profile api
    const res = await getUserProfile();
    const { user } = res.data;
    if (user && user._id) {
      dispatch(getUserSuccess(user));
      console.log(22000, user);
      return res;
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    const result = logout();
    console.log(322, "im also  here", result);
    if (result) {
      dispatch(logoutSuccess());
      dispatch(getUserSuccess(""));
    }
  } catch (error) {
    console.log(3222, error);
    dispatch(getUserFail(error));
  }
};
