import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userProfile } from "../redux/user/userAction";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(11),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px 6px 32px 2px #976191 ",
    maxWidth: "45%",
    margin: "auto",
    Height: "auto",
    padding: "50px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "70%",
    margin: "auto", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const Login = ({ formSwitch }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onsubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all form.");
    }

    const res = await dispatch(loginUser({ email, password }));

    if (res.status === "success") {
      const result = await dispatch(userProfile());
      console.log(3000, result);
      history.push("/dashboard");
    }
  };
  console.log(888, error);
  const classes = useStyle();
  return (
    <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant="h4" fontSize="10vw">
          Login
        </Typography>
        {error && (
          <Typography variant="caption" align="center" color="secondary">
            {error}
          </Typography>
        )}

        <form className={classes.form} onSubmit={onsubmit}>
          <TextField
            placeholder="Enter Email"
            variant="outlined"
            // required
            fullWidth
            id="email"
            label="email address"
            name="email"
            type="email"
            margin="normal"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {isLoading && <CircularProgress color="secondary" thickness={3.6} />}
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                onClick={() => formSwitch("reset")}
                variant="h6"
                underline="none"
              >
                <IconButton size="small">Forget Password.</IconButton>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Login.propTypes = {
  handlechange: PropTypes.func.isRequired,
  onsubmit: PropTypes.func.isRequired,
  formSwitch: PropTypes.func.isRequired,
};
