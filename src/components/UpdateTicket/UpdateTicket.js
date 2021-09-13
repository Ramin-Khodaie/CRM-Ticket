import { Button, TextareaAutosize, Typography } from "@material-ui/core";
import { useState } from "react";
import {
  fetchSingleTicket,
  replyTicketMassage,
} from "../../redux/ticket/ticketAction";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
export default function UpdateTicket({ _id }) {
  const { user } = useSelector((state) => state.user);
  const { replymessage } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const [message, setMessage] = useState();

  console.log(455, replymessage);
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const msgObj = {
      message,
      sender: user.name,
    };
    e.preventDefault();
    dispatch(replyTicketMassage(_id, msgObj));
    dispatch(fetchSingleTicket(_id));
  };
  return (
    <div style={{ padding: "10px", marginTop: "0px" }}>
      <form onSubmit={handleOnSubmit}>
        <Typography variant="h6">Reply</Typography>
        {replymessage && (
          <Alert variant="outlined" severity="info">
            {replymessage}
          </Alert>
        )}
        <Typography variant="subtitle1">
          Please reply your message here or update your ticket
        </Typography>
        <TextareaAutosize
          rowsMax={5}
          aria-label="maximum height"
          style={{ width: "600px", height: "110px" }}
          onChange={handleOnChange}
          value={message}
          name="detail"
        />
        <Button variant="contained" color="primary" type="submit">
          Reply
        </Button>
      </form>
    </div>
  );
}
