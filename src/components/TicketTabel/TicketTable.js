import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    margin: "auto",
    marginBottom: "35px",
    backgroundColor: "",
  },
  Paper: {
    boxShadow: "#137986",
  },
});
export default function TicketTabel() {
  const { ticket, isLoading, error, searchTicketList } = useSelector(
    (state) => state.ticket
  );

  const classes = useStyles();

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h5>error.message</h5>;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <Typography variant="h6" color="">
                #{" "}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                Subject
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" color="primary">
                OpenedDate
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchTicketList &&
            searchTicketList.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Typography variant="subtitle1" color="inherit">
                    {row._id}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle1" color="inherit">
                    {row.subject}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle1" color="inherit">
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle1" color="inherit">
                    {row.openAt}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
