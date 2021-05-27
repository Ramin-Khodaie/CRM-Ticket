import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import TableTicket from "../../components/TicketTabel/TicketTable";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Grid container spacing={3}>
        <Breadcrumb pagename={"Dashboard"} />
        <Grid
          item
          xs={12}
          style={{
            padding: "10px 30px",
            fontSize: "2rem",
            marginTop: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              padding: "10px 30px",
              fontSize: "2rem",
              backgroundColor: "#567d8b",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            Add new ticket
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography
          style={{ justifyContent: "center", marginTop: "20px" }}
          variant="h6"
          color="inherit"
        >
          Total Ticket: 50
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          Pending: 0
        </Typography>
      </Grid>
      <Divider
        style={{ maxWidth: "500px", margin: "auto", marginTop: "20px" }}
      />
      <Grid container spacing={5}>
        <Grid item xs={12} style={{ marginLeft: "30px", marginTop: "20px" }}>
          <Typography variant="h4">Recently added</Typography>
        </Grid>
        <Grid item xs={12}>
          <TableTicket />
        </Grid>
      </Grid>
    </div>
  );
}