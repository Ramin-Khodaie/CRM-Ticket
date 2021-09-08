import { Button, Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TicketListcomponent from "../../components/TicketListcomponent/TicketListcomponent";
import { useState, useEffect } from "react";
import ticket from "../../components/TicketTabel/DUMMY.json";
import fetchAllTickets from "../../redux/ticketAction/ticketAction";
import { useDispatch } from "react-redux";

export default function TicketList() {
  const [str, setStr] = useState("");
  const [tickets, setTickets] = useState(ticket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [str, dispatch]);
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setStr(value);
  //   searchTickets(value);
  // };

  // const searchTickets = (str) => {
  //   const displayTicket = ticket.filter((t) =>
  //     t.Subject.toLowerCase().includes(str.toLowerCase())
  //   );

  //   setTickets(displayTicket);
  // };

  return (
    <Grid container>
      <Breadcrumb page="TicketList" />

      <Grid xs={12}>
        <TicketListcomponent />
      </Grid>
    </Grid>
  );
}
