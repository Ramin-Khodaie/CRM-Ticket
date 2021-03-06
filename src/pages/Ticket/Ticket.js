import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MessageHistory from "../../components/MessageHistory/MessageHistory";
import UpdateTicket from "../../components/UpdateTicket/UpdateTicket";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTicket,
  fetchSingleTicket,
} from "../../redux/ticket/ticketAction";
import { userProfile } from "../../redux/user/userAction";
import { resetReplyTicketSuccess } from "../../redux/ticket/ticketSlice";
const useStyle = makeStyles(() => ({
  info: {
    marginTop: "150px",
    marginLeft: "0px",
    maxWidth: "300px",
  },
  btn: { marginTop: "150px" },
  buttonstyle: {
    position: "relative",
    color: "primary",
  },
}));
export default function Ticket() {
  const classes = useStyle();
  const { tid } = useParams();

  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket, replymessage } = useSelector(
    (state) => state.ticket
  );
  console.log(400, replymessage);
  useEffect(() => {
    dispatch(fetchSingleTicket(tid));
    dispatch(userProfile());
    // return () => {
    //   (replymessage || error) && dispatch(resetReplyTicketSuccess());
    // };
  }, [dispatch, replymessage, error]);

  return (
    <Grid container spacing={3}>
      <Breadcrumb page="Ticket" />
      <Grid xs={6} className={classes.info}>
        {replymessage && (
          <Alert variant="outlined" severity="info">
            {replymessage}
          </Alert>
        )}
        {isLoading && <CircularProgress color="secondary" thickness={3.6} />}
        {error && <Alert severity="error">{error.message}</Alert>}
        <Typography variant="h6">
          Subject: <Typography> {selectedTicket.subject}</Typography>
        </Typography>
        <Typography variant="h6">
          Status: <Typography> {selectedTicket.status}</Typography>
        </Typography>
        <Typography variant="h6">
          Date:{" "}
          <Typography>
            {" "}
            {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()}
          </Typography>
        </Typography>
      </Grid>
      <Grid xs={6} className={classes.btn}>
        <Button
          className={classes.buttonstyle}
          variant="contained"
          color="primary"
          disabled={selectedTicket.status === "closed"}
          onClick={() => dispatch(closeTicket(tid))}
        >
          Close Ticket
        </Button>
      </Grid>
      <Grid xs={12} sm={6} style={{ width: "300px" }}>
        <MessageHistory msg={selectedTicket.conversation} />
      </Grid>
      <Grid sm={6}>
        <UpdateTicket _id={tid} />
      </Grid>
    </Grid>
  );
}
