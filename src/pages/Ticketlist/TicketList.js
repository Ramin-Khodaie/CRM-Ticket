import { Button, Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TicketListcomponent from "../../components/TicketListcomponent/TicketListcomponent";
import { useState, useEffect } from "react";
import ticket from "../../components/TicketTabel/DUMMY.json";
import fetchAllTickets from "../../redux/ticket/ticketAction";
import { useDispatch } from "react-redux";

export default function TicketList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Grid container>
      <Breadcrumb page="TicketList" />

      <Grid xs={12}>
        <TicketListcomponent />
      </Grid>
    </Grid>
  );
}
