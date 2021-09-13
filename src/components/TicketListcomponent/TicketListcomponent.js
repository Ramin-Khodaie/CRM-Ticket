import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TicketTabel from "../../components/TicketTabel/TicketTable";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fillSearchTicket } from "../../redux/ticket/ticketAction";
const useStyle = makeStyles(() => ({
  buttonstyle: {
    position: "relative",
    color: "primary",
  },
}));
export default function TicketListcomponent({ change, tickets, data }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(fillSearchTicket(value));
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        style={{ margin: "auto", justifyItems: "center" }}
      >
        <Link to="/addticket" style={{ textDecoration: "none" }}>
          {" "}
          <Button
            className={classes.buttonstyle}
            variant="contained"
            color="primary"
          >
            Add New Ticket
          </Button>{" "}
        </Link>
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography>Search</Typography>
        <TextField
          type="search"
          variant="outlined"
          onChange={handleOnChange}
          style={{ width: "400px" }}
        />
      </Grid>
      <Grid xs={12} style={{ margin: "auto" }}>
        <TicketTabel />
      </Grid>
    </Grid>
  );
}
