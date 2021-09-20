import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AddTicket from "../../components/AddTicket/AddTicket";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";

export default function AddTicketPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Breadcrumb page="Addticket" />
        <Grid xs={12}>
          <AddTicket />
        </Grid>
      </Grid>
    </div>
  );
}
