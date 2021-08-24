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
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PropTypes from "prop-types";
import React from "react";

const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(11),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px -2px 32px 2px #979191 ",
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
export const Login = ({ handlechange, onsubmit, formSwitch }) => {
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
            onChange={handlechange}
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
            onChange={handlechange}
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
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                onClick={() => formSwitch("reset")}
                variant="h6"
                underline="none"
              >
                <IconButton size="small">

                Forget Password.
                </IconButton>
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
