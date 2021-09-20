import { Redirect, Route } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSuccess } from "../../redux/user/userSlice";
import { fetchAccessToken } from "../../services/userServices";
import { loginSuccess } from "../../redux/user/loginSlice";
export const PrivateRoute = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  console.log(333, isAuth);
  useEffect(() => {
    const updataAccessToken = async () => {
      const result = await fetchAccessToken();
      if (result) {
        dispatch(getUserSuccess());
      }
    };
    if (!sessionStorage.getItem("accessToken") && localStorage.getItem("crm")) {
      updataAccessToken();
    }
    if (!isAuth && sessionStorage.getItem("accessToken")) {
      dispatch(loginSuccess());
    }
  }, [dispatch, isAuth]);
  return (
    <Route
      {...props}
      render={() =>
        !isAuth ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
  );
};
