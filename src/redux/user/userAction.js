import {
  loginPending,
  loginFail,
  loginSuccess,
  logoutSuccess,
} from "./loginSlice";
import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { newUserPending, newUserSuccess, newUserFail } from "./newUserSlice";
import {
  userLogin,
  getUserProfile,
  logout,
  registrationuser,
} from "../../services/userServices";
export const loginUser = (data) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const res = await userLogin(data);

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
  dispatch(getUserPending());
  try {
    //get user profile api
    const res = await getUserProfile();
    const { user } = res.data;
    if (user && user._id) {
      dispatch(getUserSuccess(user));
      return res;
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    const result = logout();
    if (result) {
      dispatch(logoutSuccess());
      dispatch(getUserSuccess(""));
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const userRegistration = (data) => async (dispatch) => {
  try {
    dispatch(newUserPending());
    const result = await registrationuser(data);

    if (result.status === "success") {
      dispatch(newUserSuccess(result.message));
    }
    if (result.status === "error") {
      dispatch(newUserFail(result.message));
    }
  } catch (error) {
    dispatch(newUserFail(error.message));
  }
};
