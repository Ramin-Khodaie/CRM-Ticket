import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  MenuItem,
  makeStyles,
  Grid,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/userServices";
import { logoutUser } from "../../redux/user/userAction";
const useStyle = makeStyles(() => ({
  menuitem: {
    marginLeft: "auto",
  },
}));
export const Header = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logoutUser());
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("crm");
    history.push("/");
  };
  return (
    <div>
      <AppBar style={{ backgroundColor: "#0d4559" }}>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Tabs className={classes.menuitem}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "#d6d2d2" }}
            >
              <Tab label="Dashboard" />
            </Link>
            <Link
              to="/ticketlist"
              style={{ textDecoration: "none", color: "#d6d2d2" }}
            >
              {" "}
              <Tab label="Tickets" />
            </Link>
            <Tab
              label="Logout"
              onClick={Logout}
              style={{ textDecoration: "none", color: "#d6d2d2" }}
            ></Tab>{" "}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
