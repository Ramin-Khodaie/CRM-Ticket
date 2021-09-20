import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  ThemeProvider,
  createMuiTheme,
  Container,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../redux/user/userAction";
import Alert from "@material-ui/lab/Alert";

const theme = createMuiTheme();

const initialUser = {
  name: "Ramin Khodaie",
  company: "BornamehrFann",
  phonenumber: "0923485838",
  Address: "Tabriz",
  email: "kh.ramin@gmail.com",
  password: "FsocietyK777",
  confirmPassword: "FsocietyK777",
};

const errorPassword = {
  hasLower: false,
  hasUpper: false,
  isLengthy: false,
  hasNumber: false,
  hasSpcchar: false,
  confirmPassword: false,
};
export default function SignUp() {
  const [newUser, setNewUser] = React.useState(initialUser);
  const [error, setError] = React.useState(errorPassword);

  const { status, errorUser } = useSelector((state) => state.newUser);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRegistration(newUser));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpcchar = /[@,#,$,%,&]/.test(value);

      setError({
        ...error,
        isLengthy,
        hasLower,
        hasUpper,
        hasNumber,
        hasSpcchar,
      });
    }
    if (name === "confirmPassword") {
      setError({
        ...error,
        confirmPassword: newUser.password === value,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{ marginTop: "75px" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          {status === "New user added" && (
            <Alert severity="info">{status}</Alert>
          )}
          {errorUser ===
            'E11000 duplicate key error collection: crm-ticket-system.users index: email dup key: { _fts: "com", _ftsx: 0.625 }' && (
            <Alert severity="error">This email already exists.</Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  autoComplete="name"
                  name="name"
                  required
                  value={newUser.name}
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  value={newUser.company}
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="company"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  autoComplete="phone"
                  name="phonenumber"
                  value={newUser.phonenumber}
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Nunmber"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  autoComplete="address"
                  name="Address"
                  value={newUser.Address}
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  value={newUser.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  value={newUser.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={newUser.confirmPassword}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </Button>
            <Grid
              container
              justifyContent="flex-end"
              style={{ marginTop: "20px" }}
            >
              <Grid item>
                <Typography variant="body2">
                  min 8 character{" "}
                  {error.isLengthy ? (
                    <CheckOutlinedIcon fontSize="small" />
                  ) : (
                    <CloseOutlinedIcon fontSize="small" />
                  )}
                </Typography>
                <Typography variant="body2">
                  At least 1 uppercase character{" "}
                  {error.hasUpper ? (
                    <CheckOutlinedIcon fontSize="small" />
                  ) : (
                    <CloseOutlinedIcon fontSize="small" />
                  )}
                </Typography>
                <Typography variant="body2">
                  At least 1 lowercase character{" "}
                  {error.hasLower ? (
                    <CheckOutlinedIcon fontSize="small" />
                  ) : (
                    <CloseOutlinedIcon fontSize="small" />
                  )}
                </Typography>
                <Typography variant="body2">
                  At least 1 Nunmber character
                  {error.hasNumber ? (
                    <CheckOutlinedIcon fontSize="small" />
                  ) : (
                    <CloseOutlinedIcon fontSize="small" />
                  )}
                </Typography>
                <Typography variant="body2">
                  confirm password doesnt match.{" "}
                  {error.confirmPassword ? (
                    <CheckOutlinedIcon fontSize="small" />
                  ) : (
                    <CloseOutlinedIcon fontSize="small" />
                  )}
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
